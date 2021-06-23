class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

        <!--Go To Top-->
        
        <img onclick="goToTop()" id="button--go-up" src="img/icon/icon-arrowup.svg" />
        
        <!--Footer-->
            <div class="container" >
                <img
                class="container--bg"
            >

                <div style="z-index: 3">
                    <a style="color: black" href="cookie-policy.html">Cookies</a>
                    <hr style="opacity:0"/>
                    <a style="color: black" href="privacy-policy.html">Privacy</a>
                </div>

                
            </div>

            <!--End Footer-->
    `;
  }
}

customElements.define("footer-component", Footer);
