document.addEventListener('DOMContentLoaded', () => {
  
  document.querySelector('.hamburger').addEventListener('click', () => {
    
    if(!document.querySelector('.hamburger').classList.contains('is-active')) {
      document.querySelector('body').classList.add('overflow-hidden');
      document.querySelector('html').classList.add('overflow-hidden');
      document.querySelector('.header__right').classList.add('header__right_active');
    } else {
      document.querySelector('body').classList.remove('overflow-hidden');
      document.querySelector('html').classList.remove('overflow-hidden');
      document.querySelector('.header__right').classList.remove('header__right_active');
    }

    document.querySelector('.hamburger').classList.toggle('is-active');
  })

})
