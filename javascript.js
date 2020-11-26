// DO NOT EDIT THIS FILE PLEASE
var d = new Date();
var bgImages = ["url(https://exf.mchub.ga/backgrounds/0.webp)", "url(https://exf.mchub.ga/backgrounds/1.webp)", "url(https://exf.mchub.ga/backgrounds/2.webp)", "url(https://exf.mchub.ga/backgrounds/3.webp)", "url(https://exf.mchub.ga/backgrounds/4.webp)", "url(https://exf.mchub.ga/backgrounds/5.webp)", "url(https://exf.mchub.ga/backgrounds/6.webp)"];

class MCHubHeader extends HTMLElement {
  connectedCallback() {
    // Insert logo
    this.insertAdjacentHTML("beforeend", '<div class="logo"><img src="https://exf.mchub.ga/logos/logo.webp" alt="MC Hub Logo" onerror="this.src = \'https://exf.mchub.ga/logos/logo.png\'" /><br></div>');
    
    // Insert menubar
    this.insertAdjacentHTML("beforeend", '<div class="navbar"><div class="dropdown"><button class="dropbtn">Menu <i class="fa-caret-down"></i></button><div class="dropdown-content"><a href="/">Hub</a><a href="/tips">Tips</a><a href="/seeds">Seeds</a><a href="/facts">Facts</a><a href="/commands">Commands</a><a href="/search"> Search </a></div></div></div><br><br><br>');
  }
}

class MCHubFooter extends HTMLElement {
  connectedCallback() {
    // Insert MC Hub social links
    this.insertAdjacentHTML("beforeend", '<hr><a href="https://account.xbox.com/en-gb/profile?gamertag=MCHubSite" class="green" style="float:left; font-size: 28px;">Xbox</a><a href="https://www.youtube.com/channel/UCP2347E62P5fcoC2eK8QiPg?sub_confirmation=1" class="red" style="float:right; font-size: 28px;">YouTube</a><br><br>');
    
    // Insert RSS link
    this.insertAdjacentHTML("beforeend", '<div style="font-size: 24; text-align: center; display: inline;"><a class="orange" style="display: inline;" href="/rss.xml" download> Subscribe to RSS for MC Hub! </a></div><br>');
    
    // Insert cookie message
    this.insertAdjacentHTML("beforeend", '<p class="white">This website uses cookies from Google to enable marketing services such as Google Analytics. Your data is completely anonymous. </p>');
  }
}

customElements.define('mchub-footer', MCHubFooter);
customElements.define('mchub-header', MCHubHeader);

function setup() {
  var head = document.head;
  var body = document.body;
  body.style.backgroundImage = bgImages[d.getDay()];
  
  // Insert site metadata
  head.insertAdjacentHTML("beforeend", '<title> MC Hub </title><meta name="description" content="MC Hub is a free website with amazing tips, seeds, facts and command guides to help you become a Minecraft PRO in no time!"><link rel="icon" href="https://exf.mchub.ga/logos/favicon.ico" type="image/x-icon"><meta name="viewport" content="width=device-width, initial-scale=1">');
  
  // Load (and run) external scripts
  head.insertAdjacentHTML("beforeend", '<script src="https://kit.fontawesome.com/1e53eeabd1.js" crossorigin="anonymous"></script><script src="https://www.googleoptimize.com/optimize.js?id=OPT-TNV37V3"></script><script async src="https://www.googletagmanager.com/gtag/js?id=UA-179487034-1"></script><script>window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-179487034-1");</script>');
  
  // Import CSS and other style files
  head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="/css/social.css"><link rel="stylesheet" href="/css/style.css"><link rel="stylesheet" href="/css/navbar.css"><link rel="stylesheet" href="/css/colours.css"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap">');
}

var bedrockShown = true;
var javaShown = true;
var allShown = true;
      
function showHideBedrock() {
  if (bedrockShown === false) {
    document.getElementsByClassName('bedrock').style.visibility = 'visible';
  }
  if (bedrockShown === true) {
    document.getElementsByClassName('bedrock').style.visibility = 'hidden';
  }
}
function showHideJava() {
   if (javaShown === false) {
     document.getElementsByClassName('java').style.visibility = 'visible';
   }
   if (javaShown === true) {
     document.getElementsByClassName('java').style.visibility = 'hidden';
   }
}

function showHideAll() {
  if (allShown === false) {
    document.getElementsByClassName('all').style.visibility = 'visible';
  }
  if (allShown === true) {
    document.getElementByClassName('all').style.visibility = 'visible';
  }
}
