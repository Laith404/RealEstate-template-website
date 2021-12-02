document.addEventListener('DOMContentLoaded', () => {
  let gallery_list = document.querySelector('.gallery__list');

  gallery_list.addEventListener('click', function(e) {
    let gallery_item = event.target.closest('img');

    if(!gallery_item) return;
    showImg(gallery_item.src, gallery_item.alt);
  })

  function showImg(src, alt) {
    imgActive.src = src;
    imgActive.alt = title;
  }

});