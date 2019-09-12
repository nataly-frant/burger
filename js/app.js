let teamAccoJS = () => {
  let teamList = document.querySelector(".team-list");

  teamList.addEventListener ('click', e => {
    e.preventDefault();
    let target = e.target;
    console.log()
    const item = target.closest(".team-list__item");
    const items = document.querySelectorAll(".team-list__item");
    if(target.className === 'team-list__trigger'){
      if(!item.classList.contains("team-list__item_active")) {
        for(let i=0; i<items.length;i++){
          items[i].classList.remove("team-list__item_active");
        }
        item.classList.add("team-list__item_active");
  } else{
    item.classList.remove("team-list__item_active");
  }
};
 
teamAccoJS();
