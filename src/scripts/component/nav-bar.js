class NavBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        nav,
        nav {
            color: #fff;
            background-color: #ee6e73;
            width: 100%;
            height: 56px;
            line-height: 56px;
          }

        nav.nav-extended .nav-wrapper {
        min-height: 56px;
        height: auto;
        }

        nav .nav-wrapper {
            position: relative;
            height: 100%;
          }
           
        
        nav .brand-logo {
            position: absolute;
            color: #fff;
            display: inline-block;
            font-size: 2.1rem;
            padding: 0;
        }

        nav .brand-logo.center {
            left: 50%;
            -webkit-transform: translateX(-50%);
                    transform: translateX(-50%);
          }

          @media only screen and (max-width: 992px) {
            nav .brand-logo {
              left: 50%;
              -webkit-transform: translateX(-50%);
                      transform: translateX(-50%);
            }
            nav .brand-logo.left, nav .brand-logo.right {
              padding: 0;
              -webkit-transform: none;
                      transform: none;
            }
            nav .brand-logo.left {
              left: 0.5rem;
            }
            nav .brand-logo.right {
              right: 0.5rem;
              left: auto;
            }
          }
          
          nav .brand-logo.right {
            right: 0.5rem;
            padding: 0;
          }
          
          nav .brand-logo i,
          nav .brand-logo [class^="mdi-"], nav .brand-logo [class*="mdi-"],
          nav .brand-logo i.material-icons {
            float: left;
            margin-right: 15px;
          }
          
          nav .nav-title {
            display: inline-block;
            font-size: 32px;
            padding: 28px 0;
          }
          
          nav ul {
            margin: 0;
          }
          
          nav ul li {
            -webkit-transition: background-color .3s;
            transition: background-color .3s;
            float: left;
            padding: 0;
          }
          
          nav ul li.active {
            background-color: rgba(0, 0, 0, 0.1);
          }
          
          nav ul a {
            -webkit-transition: background-color .3s;
            transition: background-color .3s;
            font-size: 1rem;
            color: #fff;
            display: block;
            padding: 0 15px;
            cursor: pointer;
          }
          
          nav ul a.btn, nav ul a.btn-large, nav ul a.btn-small, nav ul a.btn-large, nav ul a.btn-flat, nav ul a.btn-floating {
            margin-top: -2px;
            margin-left: 15px;
            margin-right: 15px;
          }
          
          nav ul a.btn > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-small > .material-icons, nav ul a.btn-large > .material-icons, nav ul a.btn-flat > .material-icons, nav ul a.btn-floating > .material-icons {
            height: inherit;
            line-height: inherit;
          }
          
          nav ul a:hover {
            background-color: rgba(0, 0, 0, 0.1);
          }
          
          nav ul.left {
            float: left;
          }
          
          nav form {
            height: 100%;
          }
          
          nav .input-field {
            margin: 0;
            height: 100%;
          }
          
          nav .input-field input {
            height: 100%;
            font-size: 1.2rem;
            border: none;
            padding-left: 2rem;
          }
          
          nav .input-field input:focus, nav .input-field input[type=text]:valid, nav .input-field input[type=password]:valid, nav .input-field input[type=email]:valid, nav .input-field input[type=url]:valid, nav .input-field input[type=date]:valid {
            border: none;
            -webkit-box-shadow: none;
                    box-shadow: none;
          }
          
          nav .input-field label {
            top: 0;
            left: 0;
          }
          
          nav .input-field label i {
            color: rgba(255, 255, 255, 0.7);
            -webkit-transition: color .3s;
            transition: color .3s;
          }
          
          nav .input-field label.active i {
            color: #fff;
          }
          
          .navbar-fixed {
            position: relative;
            height: 56px;
            z-index: 997;
          }
          
          .navbar-fixed nav {
            position: fixed;
          }
          
          @media only screen and (min-width: 601px) {
            nav.nav-extended .nav-wrapper {
              min-height: 64px;
            }
            nav, nav .nav-wrapper i, nav a.sidenav-trigger, nav a.sidenav-trigger i {
              height: 64px;
              line-height: 64px;
            }
            .navbar-fixed {
              height: 64px;
            }
          }
          
          a {
            text-decoration: none;
          }
        </style>
        <nav class="purple darken-1" role="navigation">
            <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">TheCockTails</a></div>
        </nav>`;
    }
}

customElements.define("nav-bar", NavBar);