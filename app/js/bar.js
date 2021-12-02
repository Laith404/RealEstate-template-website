document.addEventListener('DOMContentLoaded', () => {
let list_bar = document.querySelectorAll('.house__setting');
  
  window.addEventListener('click', (e) => {
    list_bar.forEach(element => {
      if(!e.target.closest('.house__list-setting') && !e.target.closest('.house__setting')) {
        element.querySelector('ul').classList.remove('house__list-setting_active');
      } 
    })
  })

  list_bar.forEach(element => {
       element.addEventListener('click', () => {
          if(!element.querySelector('ul').classList.contains('house__list-setting_active')) {
            for(let i = 0; i < list_bar.length; i++) {
              list_bar[i].querySelector('ul').classList.remove('house__list-setting_active');
            }
            element.querySelector('ul').classList.add('house__list-setting_active');
          } else {
            element.querySelector('ul').classList.remove('house__list-setting_active');
          }
          
         
        })
    })

  })