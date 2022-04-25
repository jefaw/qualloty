import './MainMenu.css';

function MainMenu() {

  const menuItems = [
    {name: "TV", src: "./images/mandalorian.png"},
    {name: "Movies", src: "./images/movie.png"},
    {name: "Games", src: "./images/games.png"},
    {name: "Rankings", src: "./images/rankings.jpeg"},
    {name: "Chat", src: "./images/chat.jpeg"},  
  ];
  const menuMapper = menuItems.map(item => {
    return (
      <div class="menuItem">
        <img src={item.src}/>
        
        <p>{item.name}</p> 
      </div>  
    )
  });
  return (
    <div className="mainMenu">
      {menuMapper}
    </div> 
  );
}

export default MainMenu;
