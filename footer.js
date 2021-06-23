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
                <div class="container--left">
                    <h1 class="title" style="font-size: 5rem">
                        RopeAccess<span style="color:red">.</span>tv
                    </h1>
                </div>

                <div style="z-index: 3">
                    <a style="color: black" href="cookie-policy.html">Cookies</a>
                    <hr style="opacity:0"/>
                    <a style="color: black" href="privacy-policy.html">Privacy</a>
                </div>

                <div class="container--social" style="z-index: 3; margin-left: 1rem;">
                    <a href="https://www.instagram.com/ropeaccess_tv" target="_blank">
                        <img class="social--img" src="/img/icon/icon-insta.svg" />
                    </a>
                    <a href="https://www.facebook.com/ropeaccess.tv/" target="_blank">
                        <img class="social--img" style="width: 43px" src="/img/icon/icon-face.svg" />
                    </a>
                </div>
            </div>

            <!--End Footer-->
    `;
  }
}

customElements.define("footer-component", Footer);
