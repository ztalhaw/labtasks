// jQuery UI interactions and product-data AJAX loading.
$(document).ready(function(){
  loadCart();renderCartBadge();renderCartPage();renderCheckoutSummary();
  $('#loadingProducts').removeClass('hidden').text('Loading products…');
  $.getJSON('products.json')
    .done(function(data){if(Array.isArray(data)&&data.length){products=data;renderProductGrid('#featuredGrid',products.slice(0,4));applyProductFilters();$('#loadingProducts').addClass('hidden');$('#productLoadError').addClass('hidden');}else{throw new Error('The product file was empty.');}})
    .fail(function(){products=[...fallbackProducts];renderProductGrid('#featuredGrid',products.slice(0,4));applyProductFilters();$('#loadingProducts').addClass('hidden');if($('#productLoadError').length)$('#productLoadError').removeClass('hidden').text('Could not load products.json. Showing the built-in fallback product list.');});
  $('#menuToggle').on('click',function(){$('#navLinks').stop(true,true).slideToggle(180).toggleClass('open');});
  $(document).on('click','[data-add]',function(){addToCart($(this).data('add'));renderCartPage();renderCheckoutSummary();});
  $(document).on('click','[data-details]',function(){showProductDetails($(this).data('details'));});
  $(document).on('click','[data-qty]',function(){changeQuantity($(this).data('qty'),$(this).data('change'));renderCheckoutSummary();});
  $(document).on('click','[data-remove]',function(){removeFromCart($(this).data('remove'));renderCheckoutSummary();showToast('Item removed from your bag');});
  $('#searchInput,#categoryFilter,#sortSelect').on('input change',function(){applyProductFilters();$('#productGrid').hide().fadeIn(220);});
  $('#clearFilters').on('click',function(){$('#searchInput').val('');$('#categoryFilter').val('all');$('#sortSelect').val('featured');applyProductFilters();});
  $('.faq-question').on('click',function(){$(this).next('.faq-answer').stop(true,true).slideToggle(180);$(this).find('.faq-symbol').text($(this).find('.faq-symbol').text()==='+'?'−':'+');});
  $('#contactForm').on('submit',function(event){event.preventDefault();const form=this;if(!form.checkValidity()){form.reportValidity();return;}$('#contactFeedback').text('Thanks! Your message passed front-end validation. This demo does not send it to a server.').removeClass('hidden').hide().fadeIn(200);form.reset();});
  $('#checkoutForm').on('submit',function(event){event.preventDefault();const form=this;let valid=true;$(form).find('[required]').each(function(){const error=$(this).closest('.form-field').find('.error');if(!this.checkValidity()){valid=false;error.text(this.validationMessage||'Please complete this field.');$(this).addClass('invalid');}else{error.text('');$(this).removeClass('invalid');}});if(!valid){$('#checkoutFeedback').text('Please fix the highlighted fields before continuing.').removeClass('hidden');return;}if(!cart.length){$('#checkoutFeedback').text('Your bag is empty. Add a product before placing a demo order.').removeClass('hidden');return;}$('#checkoutFeedback').addClass('hidden');$('#orderReference').text('Demo reference: FF-'+Math.floor(100000+Math.random()*900000));$('#checkoutSuccess').removeClass('hidden').hide().fadeIn(250);cart=[];saveCart();renderCartBadge();renderCartPage();renderCheckoutSummary();form.reset();});
  $('#newsletterForm').on('submit',function(event){event.preventDefault();showToast('Thanks! Newsletter signup is demo-only.');this.reset();});
  function showToast(message){$('#toast').stop(true,true).text(message).fadeIn(180).delay(1900).fadeOut(300);}
  window.showToast=showToast;
  // Method chaining is used above for form feedback, filters, and animations.
});
