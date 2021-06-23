class Navbar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

    
        <!--Navbar-->
        <div class="navbar">
        <img src="img/logo-small.png" class="logo-navbar" alt="logo-navbar" />
        
            <div class="navbar--menu">
                <a href="index.html#products">
                    Products
                </a>

            </div>
    
            <div
                id="navbar--menu-burger"
                onClick="toggleDropdownMenu()"
                class="navbar--menu-burger">
            </div>
    
    
            <div id="navbar--menu-dropdown" 
                class="navbar--menu-dropdown navbar--menu-is-visible">
                    <a href="index.html#products">
                        Products
                    </a>
            </div>
    
        </div>
    <!--End Navbar-->
    `;
  }
}

customElements.define("navbar-component", Navbar);
