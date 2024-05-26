const getHeaderUI = () => `
  <div class="w-full max-w-screen-xl mx-auto flex justify-between items-center pt-6 px-4">
    <div class="flex items-center">
      ${getLogoSVG()}
    </div>
    <nav class="hidden lg:flex space-x-4">
      ${getNavLinks(['Products', 'Pricing', 'Solutions', 'Help Center', 'About'])}
    </nav>
    <div class="hidden lg:flex space-x-4 items-center">
      ${getSearchIcon()}
      <a href="#" class="text-gray-600 hover:text-teal-600">Log In</a>
      <a href="#" class="text-white bg-teal-600 hover:bg-teal-700 rounded-full px-4 py-2">Sign Up</a>
    </div>
    <div class="lg:hidden flex items-center space-x-4">
      ${getSearchIcon()}
      <div id="hamburger-menu" class="hamburger-menu cursor-pointer">
        <div class="bar w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div class="bar w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div class="bar w-6 h-0.5 bg-gray-600"></div>
      </div>
    </div>
  </div>
  <div id="mobile-menu" class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 hidden">
    <div class="bg-white w-3/4 max-w-xs h-full p-6 flex flex-col justify-between shadow-lg">
      <div>
        <div id="close-menu" class="flex justify-end mb-6">
          <svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <nav class="flex flex-col space-y-4">
          ${getNavLinks(['Products', 'Pricing', 'Solutions', 'Help Center', 'About'])}
        </nav>
      </div>
      <div class="mt-6">
        <a href="#" class="block text-gray-600 hover:text-teal-600 mb-4">Log In</a>
        <a href="#" class="block text-white bg-teal-600 hover:bg-teal-700 rounded-full px-4 py-2 text-center">Sign Up</a>
      </div>
    </div>
  </div>
`;

const getLogoSVG = () => `
  <svg width="170" height="31" viewBox="0 0 170 31" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M59.4278 23.9532L54.7766 14.2039C53.6662 11.9002 52.5259 9.28314 52.1365 8.05295L52.0467 8.1428C52.1964 9.8821 52.2264 12.0729 52.2563 13.9021L52.3761 23.9532H48.9874V3.19211H52.8876L57.9281 13.3285C58.7729 15.0518 59.4853 16.837 60.059 18.6685L60.1489 18.5786C60.059 17.5281 59.8494 14.5586 59.8494 12.6673L59.7895 3.1875H63.0608V23.9486L59.4278 23.9532Z" fill="black"/>
  <path d="M69.2369 17.2644V17.4947C69.2369 19.5957 70.0179 21.8142 72.9874 21.8142C74.3973 21.8142 75.6274 21.3051 76.7678 20.3145L78.0579 22.3256C76.5449 23.6408 74.6026 24.3562 72.5981 24.3368C68.3085 24.3368 65.6086 21.2475 65.6086 16.3867C65.6086 13.7167 66.1776 11.9451 67.4999 10.4454C68.7301 9.0355 70.2298 8.40428 72.1511 8.40428C73.692 8.35572 75.1901 8.91603 76.3209 9.9639C77.6409 11.1641 78.3021 13.0232 78.3021 16.564V17.2552L69.2369 17.2644ZM72.1465 10.9038C70.2874 10.9038 69.2669 12.3736 69.2669 14.834H74.8764C74.8764 12.3782 73.7983 10.9038 72.1465 10.9038Z" fill="black"/>
  <path d="M95.8592 24.0136H92.7584L90.8993 17.0241C90.4201 15.2249 89.9087 12.8774 89.9087 12.8774H89.8488C89.8488 12.8774 89.6184 14.3771 88.8582 17.1669L87.029 24.0067H83.9375L79.7908 8.9749L83.0621 8.51416L84.7115 15.8653C85.1308 17.7544 85.4925 19.8554 85.4925 19.8554H85.5823C85.8035 18.4816 86.0942 17.1199 86.4531 15.7755L88.4044 8.75605H91.6457L93.3574 15.6027C93.9886 18.0631 94.318 19.9222 94.318 19.9222H94.4078C94.4078 19.9222 94.7672 17.6184 95.1589 15.8423L96.7185 8.76066H100.139L95.8592 24.0136Z" fill="black"/>
  <path d="M119.369 23.9532L117.57 20.7418C116.132 18.1939 115.169 16.7541 114.029 15.6023C113.862 15.4065 113.655 15.2496 113.421 15.1425C113.188 15.0355 112.934 14.9809 112.677 14.9826V23.9532H109.288V3.19214H115.618C120.27 3.19214 122.368 5.89209 122.368 9.13342C122.368 12.1029 120.449 14.8351 117.208 14.8351C117.959 15.2244 119.339 17.2356 120.417 18.9818L123.476 23.9624L119.369 23.9532ZM114.568 5.98424H112.677V12.5544H114.446C116.245 12.5544 117.21 12.3241 117.837 11.6836C118.406 11.1146 118.758 10.2438 118.758 9.16337C118.77 7.06238 117.63 5.98194 114.568 5.98194V5.98424Z" fill="black"/>
  <path d="M128.007 17.2644V17.4947C128.007 19.5957 128.788 21.8142 131.758 21.8142C133.168 21.8142 134.398 21.3051 135.538 20.3145L136.828 22.3256C135.315 23.6408 133.373 24.3562 131.368 24.3368C127.079 24.3368 124.379 21.2475 124.379 16.3867C124.379 13.7167 124.948 11.9451 126.27 10.4454C127.5 9.0355 129 8.40428 130.921 8.40428C132.462 8.35572 133.96 8.91603 135.091 9.9639C136.411 11.1641 137.072 13.0232 137.072 16.564V17.2552L128.007 17.2644ZM130.919 10.9038C129.06 10.9038 128.039 12.3736 128.039 14.834H133.64C133.64 12.3782 132.569 10.9038 130.919 10.9038Z" fill="black"/>
  <path d="M143.249 24.2854C139.918 24.2854 139.918 21.2906 139.918 19.9959V7.06283C139.956 5.57742 139.86 4.09158 139.63 2.62357L143.021 1.87256C143.251 2.79405 143.291 4.06339 143.291 6.04228V18.9131C143.291 20.9542 143.38 21.2837 143.62 21.6431C143.751 21.793 143.927 21.8966 144.122 21.9381C144.317 21.9796 144.52 21.9569 144.7 21.8734L145.239 23.9145C144.607 24.1681 143.931 24.2942 143.249 24.2854Z" fill="black"/>
  <path d="M148.978 6.52354C148.694 6.52085 148.413 6.46191 148.152 6.35011C147.891 6.23832 147.655 6.07589 147.456 5.8722C147.258 5.66851 147.102 5.42759 146.998 5.16336C146.893 4.89913 146.842 4.61681 146.847 4.3327C146.851 3.90144 146.982 3.4809 147.225 3.12452C147.468 2.76815 147.811 2.49203 148.212 2.33128C148.612 2.17053 149.051 2.13239 149.473 2.22173C149.895 2.31106 150.28 2.52382 150.581 2.83298C150.882 3.14213 151.084 3.53371 151.161 3.95794C151.239 4.38217 151.189 4.8199 151.017 5.21549C150.845 5.61107 150.56 5.94665 150.197 6.17956C149.834 6.41247 149.41 6.53221 148.978 6.52354ZM147.329 23.9558V9.01386L150.66 8.41259V23.9535L147.329 23.9558Z" fill="black"/>
  <path d="M160.109 24.3452C155.963 24.3452 153.659 21.4356 153.659 16.5448C153.659 11.0159 156.96 8.38501 160.34 8.38501C161.989 8.38501 163.189 8.77434 164.539 10.0345L162.897 12.223C161.996 11.4121 161.217 11.0527 160.347 11.0527C159.841 11.0441 159.343 11.1846 158.916 11.4566C158.49 11.7286 158.152 12.1201 157.946 12.5824C157.485 13.5039 157.317 14.923 157.317 16.812C157.317 18.8853 157.647 20.2031 158.338 20.9587C158.592 21.238 158.903 21.46 159.25 21.6102C159.597 21.7603 159.971 21.835 160.349 21.8295C161.399 21.8295 162.422 21.3204 163.408 20.3298L164.968 22.3409C163.588 23.7139 162.148 24.3452 160.109 24.3452Z" fill="black"/>
  <path d="M167.784 24.2871C167.343 24.2894 166.911 24.1607 166.543 23.9173C166.175 23.6739 165.888 23.3268 165.718 22.92C165.547 22.5131 165.501 22.0648 165.586 21.632C165.671 21.1991 165.882 20.8011 166.193 20.4884C166.504 20.1757 166.901 19.9623 167.333 19.8754C167.766 19.7885 168.214 19.832 168.622 20.0003C169.03 20.1685 169.378 20.454 169.624 20.8206C169.869 21.1872 170 21.6184 170 22.0595C170.001 22.3514 169.945 22.6407 169.834 22.9107C169.723 23.1808 169.56 23.4263 169.354 23.6333C169.148 23.8402 168.904 24.0045 168.634 24.1167C168.365 24.2289 168.076 24.2868 167.784 24.2871ZM167.784 20.2741C167.426 20.2584 167.072 20.3503 166.767 20.5378C166.462 20.7253 166.22 20.9998 166.073 21.326C165.925 21.6523 165.879 22.0152 165.939 22.3681C166 22.721 166.165 23.0476 166.413 23.3059C166.661 23.5642 166.98 23.7423 167.33 23.8172C167.68 23.8922 168.045 23.8606 168.377 23.7265C168.709 23.5923 168.993 23.3619 169.193 23.0648C169.393 22.7676 169.499 22.4175 169.498 22.0595C169.504 21.8291 169.465 21.5998 169.382 21.3848C169.299 21.1699 169.174 20.9735 169.015 20.8072C168.855 20.6409 168.664 20.5079 168.453 20.416C168.242 20.324 168.014 20.275 167.784 20.2718V20.2741ZM168.222 23.2942C168.125 23.1261 168.083 23.0639 167.991 22.8796C167.745 22.4303 167.669 22.3036 167.579 22.2691C167.555 22.2568 167.528 22.2505 167.5 22.2507V23.2942H167.01V20.7947H167.931C168.029 20.788 168.128 20.8022 168.22 20.8365C168.312 20.8707 168.395 20.9241 168.465 20.9932C168.535 21.0623 168.589 21.1455 168.624 21.2372C168.659 21.3289 168.674 21.427 168.668 21.525C168.683 21.6899 168.633 21.854 168.529 21.9829C168.425 22.1117 168.275 22.1953 168.111 22.2161C168.149 22.2477 168.183 22.2841 168.212 22.3244C168.355 22.5041 168.811 23.2942 168.811 23.2942H168.222ZM167.966 21.2324C167.874 21.2069 167.78 21.1945 167.685 21.1956H167.505V21.8729H167.673C167.89 21.8729 167.984 21.8475 168.051 21.7876C168.115 21.72 168.15 21.6297 168.148 21.5365C168.155 21.4729 168.14 21.4089 168.108 21.3541C168.075 21.2992 168.025 21.2565 167.966 21.2324Z" fill="black"/>
  <path d="M37.2802 11.184C35.5178 3.0864 25.8077 -1.67538 15.5884 0.545398C5.36911 2.76618 -1.48444 11.1333 0.2756 19.2285C2.03564 27.3238 11.7481 32.0902 21.9651 29.8671C32.182 27.644 39.0402 19.2884 37.2802 11.184ZM18.779 22.6703C17.3028 22.6703 15.8597 22.2325 14.6322 21.4124C13.4048 20.5922 12.4481 19.4265 11.8832 18.0626C11.3182 16.6987 11.1704 15.198 11.4584 13.7501C11.7464 12.3022 12.4573 10.9722 13.5012 9.92837C14.545 8.88451 15.875 8.17363 17.3229 7.88563C18.7708 7.59762 20.2715 7.74544 21.6354 8.31037C22.9993 8.87531 24.165 9.83199 24.9852 11.0594C25.8053 12.2869 26.2431 13.73 26.2431 15.2062C26.2431 16.1864 26.05 17.157 25.6749 18.0626C25.2998 18.9682 24.75 19.791 24.0569 20.4841C23.3638 21.1772 22.541 21.727 21.6354 22.1021C20.7298 22.4772 19.7592 22.6703 18.779 22.6703Z" fill="#008C99"/>
  <path d="M20.4286 4.75586C18.3091 4.75632 16.2373 5.38524 14.4752 6.5631C12.7131 7.74096 11.3399 9.41487 10.5291 11.3732C9.71832 13.3315 9.50642 15.4862 9.9202 17.5649C10.334 19.6436 11.3548 21.553 12.8537 23.0515C14.3526 24.5501 16.2622 25.5706 18.341 25.9839C20.4198 26.3972 22.5745 26.1848 24.5326 25.3736C26.4907 24.5624 28.1643 23.1888 29.3418 21.4265C30.5193 19.6642 31.1478 17.5923 31.1478 15.4727C31.1478 14.0652 30.8705 12.6714 30.3318 11.371C29.793 10.0707 29.0034 8.88913 28.008 7.89395C27.0126 6.89876 25.8309 6.10941 24.5305 5.57097C23.23 5.03253 21.8361 4.75556 20.4286 4.75586ZM18.7768 21.725C17.4874 21.725 16.2269 21.3427 15.1548 20.6263C14.0826 19.9099 13.247 18.8917 12.7536 17.7004C12.2601 16.5091 12.131 15.1983 12.3826 13.9336C12.6341 12.669 13.255 11.5073 14.1668 10.5955C15.0786 9.68375 16.2403 9.06283 17.5049 8.81127C18.7696 8.55971 20.0804 8.68882 21.2717 9.18227C22.463 9.67572 23.4812 10.5113 24.1976 11.5835C24.914 12.6556 25.2963 13.9161 25.2963 15.2055C25.2963 16.9342 24.6098 18.5921 23.3876 19.8147C22.1655 21.0373 20.5078 21.7244 18.7791 21.725H18.7768Z" fill="#70CCD3"/>
  </svg>
`;

const getNavLinks = (links) => links.map(link => `
  <a href="#" class="text-gray-600 hover:text-teal-600">${link}</a>
`).join('');

const getSearchIcon = () => `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1125 17.225C8.70577 17.225 7.33065 16.8078 6.161 16.0263C4.99136 15.2448 4.07974 14.134 3.54141 12.8343C3.00308 11.5347 2.86223 10.1046 3.13667 8.72492C3.4111 7.34523 4.0885 6.0779 5.0832 5.0832C6.0779 4.0885 7.34522 3.4111 8.72491 3.13667C10.1046 2.86223 11.5347 3.00308 12.8343 3.54141C14.134 4.07974 15.2448 4.99136 16.0263 6.16101C16.8078 7.33065 17.225 8.70578 17.225 10.1125C17.225 11.0465 17.041 11.9714 16.6836 12.8343C16.3261 13.6973 15.8022 14.4813 15.1418 15.1418C14.4813 15.8022 13.6972 16.3261 12.8343 16.6836C11.9714 17.041 11.0465 17.225 10.1125 17.225ZM10.1125 4.29318C8.96154 4.29318 7.83644 4.63448 6.87946 5.27391C5.92248 5.91335 5.1766 6.8222 4.73615 7.88554C4.2957 8.94888 4.18046 10.119 4.405 11.2478C4.62954 12.3766 5.18377 13.4135 5.99762 14.2274C6.81146 15.0412 7.84836 15.5955 8.9772 15.82C10.106 16.0445 11.2761 15.9293 12.3394 15.4888C13.4028 15.0484 14.3116 14.3025 14.9511 13.3455C15.5905 12.3886 15.9318 11.2634 15.9318 10.1125C15.9318 9.34829 15.7813 8.59157 15.4888 7.88554C15.1964 7.17951 14.7677 6.53799 14.2274 5.99762C13.687 5.45725 13.0455 5.0286 12.3394 4.73615C11.6334 4.4437 10.8767 4.29318 10.1125 4.29318Z" fill="#54565A"/>
<path d="M19.9003 20.8119L14.1176 15.1764L15.0293 14.2647L20.812 19.9002C20.9324 20.0214 21 20.1852 21 20.3561C21 20.5269 20.9324 20.6908 20.812 20.8119C20.6908 20.9323 20.5269 20.9999 20.3561 20.9999C20.1853 20.9999 20.0214 20.9323 19.9003 20.8119Z" fill="#54565A"/>
</svg>
`;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('hamburger-menu').addEventListener('click', () => {
        console.log("clickeddddddddd")
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });

    document.getElementById('close-menu').addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.add('hidden');
    });

    document.getElementById('mobile-menu').addEventListener('click', (e) => {
        if (e.target.id === 'mobile-menu') {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.add('hidden');
        }
    });
})

const getMainComponentUI = function () {
    return `
        <section class="text-center my-8">
            <h1 class="text-3xl text-gray-800 mx-auto">Simple, transparent pricing plans.<br/>Only pay for what you use.</h1>
            <p class="text-gray-600 p-4">Start for free. No credit card required.</p>
        </section>

        <!-- Pricing Plans -->
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            <div class="bg-white rounded-lg shadow-md">
                <h2 class="text-xl font-bold text-white p-6" style="background: #0AB0BF">Free</h2>
                <div class="p-6">
                <p class="text-gray-600 mt-2" style="min-height : 80px">For individuals just getting started with New Relic or test projects.</p>
                <p class="text-gray-800 text-2xl font-bold mt-4">$0 <span class="text-sm text-gray-600">/ forever</span></p>
                <ul class="text-gray-600 mt-4 space-y-2">
                    <li class="flex gap-2">
                    <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
                    </svg>
                    100 GBs / month free 
                    <br/>
                    $0.25 / GB beyond
                    </li>
                    <li class="flex gap-2">
                    <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
                    </svg>
                    1 free full platform user
                    <br/>
                    Access to all capabilities
                    </li>
                    <li class="flex gap-2" style="opacity :0">
                    <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
                    </svg>
                    $49/Core User
                    </li>
                </ul>
                <button class="bg-teal-600 text-white px-4 py-2 rounded-md mt-4 w-full mb-4">Start for Free</button>
            <ul class="text-gray-600 mt-4 space-y-2">
                <li class="flex gap-2">
                <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
                </svg>
                Unlimited basic users,
                <br/>
                queries, dashboards & alerts
                </li>
                <li class="flex gap-2">
                <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
                </svg>
                Standard retention
                </li>
            </ul>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-md">
            <h2 class="text-xl font-bold text-white p-6" style="background: #0069CE" style="">Standard</h2>
            <div class="p-6">
            <p class="text-gray-600 mt-2" style="min-height : 80px">For growing teams monitoring production apps.</p>
            <p class="text-gray-800 text-2xl font-bold mt-4">$0.25 <span class="text-sm text-gray-600">/ GB</span></p>
            <ul class="text-gray-600 mt-4 space-y-2">
                <li class="flex gap-2">
                <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
                </svg>
                100 GBs / month free 
                <br/>
                $0.25 / GB beyond
                </li>
                <li class="flex gap-2">
                <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
                </svg>
                $99 / full platform user
                <br/>
                Includes 1 free, max of 5
                </li>
                <li class="flex gap-2">
                <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
                </svg>
                $49/Core User
                </li>
            </ul>
            <button class="bg-teal-600 text-white px-4 py-2 rounded-md mt-4 w-full mb-4">Start for Free</button>
        <ul class="text-gray-600 mt-4 space-y-2">
            <li class="flex gap-2">
            <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
            </svg>
            Unlimited basic users,
            <br/>
            queries, dashboards & alerts
            </li>
            <li class="flex gap-2">
            <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
            </svg>
            Standard retention
            </li>
        </ul>
            </div>
        </div>


        <div class="bg-white rounded-lg shadow-md">
        <h2 class="text-xl font-bold text-white p-6" style="background: #FF8853">Pro</h2>
        <div class="p-6">
        <p class="text-gray-600 mt-2" style="min-height : 80px">For teams and companies with more than 5 engineers and complex workloads.</p>
        <p class="text-gray-800 text-2xl font-bold mt-4">Contact for pricing</span></p>
        <ul class="text-gray-600 mt-4 space-y-2">
            <li class="flex gap-2">
            <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
            </svg>
            100 GBs / month free 
            <br/>
            $0.25 / GB beyond
            </li>
            <li class="flex gap-2">
            <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
            </svg>
            Predictable full platform &
            <br/>
            core user commit pricing
            </li>
            <li class="flex gap-2" style="opacity:0">
            <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
            </svg>
            $49/Core User
            </li>
        </ul>
        <button class="bg-white text-teal-600 px-4 py-2 rounded-md mt-4 w-full mb-4" style="border : 2px solid">Contact Sales</button>
    <ul class="text-gray-600 mt-4 space-y-2">
        <li class="flex gap-2">
        <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
        </svg>
        Unlimited basic users,
        <br/>
        queries, dashboards & alerts
        </li>
        <li class="flex gap-2">
        <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
        </svg>
        Standard retention
        </li>
        <li class="flex gap-2">
        <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
        </svg>
        Advanced admin features
        </li>
        <li class="flex gap-2">
        <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
        </svg>
        24x7 support availability 
        </li>
    </ul>
        </div>
    </div>

    <div class="bg-white rounded-lg shadow-md">
    <h2 class="text-xl font-bold text-white p-6" style="background: #2C2C2C">Enterprise</h2>
    <div class="p-6">
    <p class="text-gray-600 mt-2" style="min-height : 80px">For companies with advanced security and support needs. </p>
    <p class="text-gray-800 text-2xl font-bold mt-4">Contact for pricing</span></p>
    <ul class="text-gray-600 mt-4 space-y-2">
        <li class="flex gap-2">
        <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
        </svg>
        100 GBs / month free 
        <br/>
        $0.25 / GB beyond
        </li>
        <li class="flex gap-2">
        <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
        </svg>
        Predictable full platform &
        <br/>
        core user commit pricing
        </li> 
        <li class="flex gap-2" style="opacity:0">
        <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
        </svg>
        $49/Core User
        </li>
    </ul>
    <button class="bg-white text-teal-600 px-4 py-2 rounded-md mt-4 w-full mb-4" style="border : 2px solid">Contact Sales</button>
<ul class="text-gray-600 mt-4 space-y-2">
    <li class="flex gap-2">
    <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
    Unlimited basic users,
    <br/>
    queries, dashboards & alerts
    </li>
    <li class="flex gap-2">
    <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
    Standard retention
    </li>
    <li class="flex gap-2">
    <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
    Enterprise admin, security &
    <br/>
     compliance features
    </li>
    <li class="flex gap-2">
    <svg width="20" height="24" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.25 2L4.0625 8L2 5.85714" stroke="#2C2C2C" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="square"/>
    </svg>
    24x7 designated support +
    <br/>
    priority ticket routing
    </li>
</ul>
    </div>
</div>

        </section>

        <!-- Comparison Table -->
        <section class="bg-white rounded-lg shadow-md my-16 hidden lg:block">
            <h2 class="text-xl font-bold text-center text-gray-800">Compare features and plans</h2>
            <table class="w-full mt-4">
                <thead>
                    <tr>
                        <th class="text-left p-2"></th>
                        <th class="text-center p-2 bg-gray-200 border" style="border-top:4px solid #0AB0BF">Free</th>
                        <th class="text-center p-2 bg-gray-200 border" style="border-top: 4px solid #0069CE">Standard</th>
                        <th class="text-center p-2 bg-gray-200 border" style="border-top:4px solid #FF8853">Pro</th>
                        <th class="text-center p-2 bg-gray-200 border" style="border-top:4px solid #2C2C2C">Enterprise</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border p-2">Data Usage</td>
                        <td class="border p-2"></td>
                        <td class="border p-2"></td>
                        <td class="border p-2"></td>
                        <td class="border p-2"></td>
                    </tr>
                    <tr>
                        <td class="border p-2">Free limits</td>
                        <td class="border p-2 text-center">100GB/month</td>
                        <td class="border p-2 text-center">100GB/month</td>
                        <td class="border p-2 text-center">100GB/month</td>
                        <td class="border p-2 text-center">100GB/month</td>
                    </tr>
                    <tr>
                        <td class="border p-2">Cost per GB</td>
                        <td class="border p-2 text-center">N/A</td>
                        <td class="border p-2 text-center">$0.25/GB beyond free limit</td>
                        <td class="border p-2 text-center">N/A</td>
                        <td class="border p-2 text-center">N/A</td>
                    </tr>
                    <tr>
                        <td class="border p-2">Retention</td>
                        <td class="border p-2 text-center">8+ days</td>
                        <td class="border p-2 text-center">8+ days</td>
                        <td class="border p-2 text-center">Extended</td>
                        <td class="border p-2 text-center">Extended</td>
                    </tr>
                    <tr>
                        <td class="border p-2">HIPAA compliance</td>
                        <td class="border p-2">
                            <svg width="26" height="26" viewBox="0 0 26 26" style="margin:auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#EEEFEF"/>
                            <path d="M19 8.2L17.8 7L13 11.8L8.2 7L7 8.2L11.8 13L7 17.8L8.2 19L13 14.2L17.8 19L19 17.8L14.2 13L19 8.2Z" fill="white"/>
                            </svg>
                        </td>
                        <td class="border p-2">
                            <svg width="26" height="26" viewBox="0 0 26 26" style="margin:auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#EEEFEF"/>
                            <path d="M19 8.2L17.8 7L13 11.8L8.2 7L7 8.2L11.8 13L7 17.8L8.2 19L13 14.2L17.8 19L19 17.8L14.2 13L19 8.2Z" fill="white"/>
                            </svg>
                        </td>
                        <td class="border p-2">
                            <svg width="26" height="26" viewBox="0 0 26 26" style="margin:auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#EEEFEF"/>
                            <path d="M19 8.2L17.8 7L13 11.8L8.2 7L7 8.2L11.8 13L7 17.8L8.2 19L13 14.2L17.8 19L19 17.8L14.2 13L19 8.2Z" fill="white"/>
                            </svg>
                        </td>
                        <td class="border p-2">
                            <svg width="26" height="26" viewBox="0 0 26 26" style="margin:auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#68696E"/>
                            <path d="M7.615 12.846L6 14.461L10.308 18.769L20 9.615L18.385 8L10.308 15.538L7.615 12.846Z" fill="white"/>
                            </svg>
                        </td>
                    </tr>
                    <tr>
                        <td class="border p-2">FedRAMP</td>
                        <td class="border p-2">
                            <svg width="26" height="26" viewBox="0 0 26 26" style="margin:auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#EEEFEF"/>
                            <path d="M19 8.2L17.8 7L13 11.8L8.2 7L7 8.2L11.8 13L7 17.8L8.2 19L13 14.2L17.8 19L19 17.8L14.2 13L19 8.2Z" fill="white"/>
                            </svg>
                        </td>
                        <td class="border p-2">
                            <svg width="26" height="26" viewBox="0 0 26 26" style="margin:auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#EEEFEF"/>
                            <path d="M19 8.2L17.8 7L13 11.8L8.2 7L7 8.2L11.8 13L7 17.8L8.2 19L13 14.2L17.8 19L19 17.8L14.2 13L19 8.2Z" fill="white"/>
                            </svg>
                        </td>
                        <td class="border p-2">
                            <svg width="26" height="26" viewBox="0 0 26 26" style="margin:auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#EEEFEF"/>
                            <path d="M19 8.2L17.8 7L13 11.8L8.2 7L7 8.2L11.8 13L7 17.8L8.2 19L13 14.2L17.8 19L19 17.8L14.2 13L19 8.2Z" fill="white"/>
                            </svg>
                        </td>
                        <td class="border p-2">
                            <svg width="26" height="26" viewBox="0 0 26 26" style="margin:auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z" fill="#68696E"/>
                            <path d="M7.615 12.846L6 14.461L10.308 18.769L20 9.615L18.385 8L10.308 15.538L7.615 12.846Z" fill="white"/>
                            </svg>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>

        <!-- Logos Section -->
        <div class="flex justify-center my-16 overflow-x-auto">
        <img src="/src/images/logos/Homepage_Gray_EpicGames.png" alt="Logo 4" style="height : 80px">
        <img src="src/images/logos/Homepage_Gray_Atlassian.png" alt="Logo 1" style="height : 80px">
        <img src="/src/images/logos/Homepage_Gray_Doordash.png" alt="Logo 3" style="height : 80px">
        <img src="/src/images/logos/Homepage_Gray_Cloudflare.png" alt="Logo 2" style="height : 80px">
        <img src="/src/images/logos/Homepage_Gray_Github.png" alt="Logo 5" style="height : 80px">
         </div>
    

        <!-- Articles Section -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <div class="bg-white  rounded-lg shadow-md">
                <img src="/src/images/cards/card-1.png" class="w-full" alt="Card 1">
                <h3 class="p-6 text-lg font-bold text-gray-800">Compare full-stack observability costs: New Relic, Datadog, and Dynatrace</h3>
                <a href="#" class="p-6 text-teal-600 mt-6 block">Read Article &gt;</a>
            </div>
            <div class="bg-white  rounded-lg shadow-md">
            <img src="/src/images/cards/card-2.png" class="w-full" alt="Card 2">
                <h3 class="p-6 text-lg font-bold text-gray-800">New Relic consumption pricing: Get more value for your money</h3>
                <a href="#" class=" p-6 text-teal-600 mt-6 block">Read Article &gt;</a>
            </div>
            <div class="bg-white  rounded-lg shadow-md">
            <img src="/src/images/cards/card-3.png" class="w-full" alt="Card 3">
                <h3 class="p-6 text-lg font-bold text-gray-800">New Relic annual pool of funds simplifies observability pricing</h3>
                <a href="#" class="p-6 text-teal-600 mt-6 block">Read Article &gt;</a>
            </div>
        </section  
    `;
}


const getFooterUI = function() {
    return `
    <footer class="bg-gray-800 text-white py-8">
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between mb-8">
                <div>
                    <h2 class="text-2xl font-bold mb-4">Try New Relic Today</h2>
                    <p class="mb-6">Monitor all your systems and data with the entire New Relic Platform. It's free forever.</p>
                    <div class="space-x-4">
                        <a href="#" class="bg-teal-600 text-white px-4 py-2 rounded">Start for free</a>
                        <a href="#" class="border border-gray-600 text-white px-4 py-2 rounded">Get a demo</a>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-8">
                    <div>
                        <h3 class="font-semibold mb-4">COMPANY</h3>
                        <ul>
                            <li><a href="#" class="hover:underline">About us</a></li>
                            <li><a href="#" class="hover:underline">Leadership</a></li>
                            <li><a href="#" class="hover:underline">Careers</a></li>
                            <li><a href="#" class="hover:underline">Diversity and Inclusion</a></li>
                            <li><a href="#" class="hover:underline">Social Impact</a></li>
                            <li><a href="#" class="hover:underline">Newsroom</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul class="mt-8">
                            <li><a href="#" class="hover:underline">Customers</a></li>
                            <li><a href="#" class="hover:underline">Partner Program</a></li>
                            <li><a href="#" class="hover:underline">Investor Relations</a></li>
                            <li><a href="#" class="hover:underline">Suppliers Portal</a></li>
                            <li><a href="#" class="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col items-end">
                    <h3 class="font-semibold mb-4">FOLLOW US</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"">
                        <a href="#" class="hover:text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_86_141)">
                            <path d="M20.069 0H3.93103C1.75998 0 0 1.75998 0 3.93103V20.069C0 22.24 1.75998 24 3.93103 24H20.069C22.24 24 24 22.24 24 20.069V3.93103C24 1.75998 22.24 0 20.069 0Z" fill="white"/>
                            <g clip-path="url(#clip1_86_141)">
                            <path d="M15.5633 23.8726V20.4764C15.5944 20.0413 15.5331 19.6046 15.3835 19.1949C15.234 18.7852 14.9995 18.4117 14.6954 18.099C15.5067 18.1316 16.3154 17.9882 17.066 17.6785C17.8166 17.3688 18.4911 16.9002 19.0433 16.3049C19.5956 15.7097 20.0123 15.0019 20.2649 14.2303C20.5175 13.4586 20.6 12.6414 20.5067 11.8349C20.5287 10.5622 20.0551 9.33087 19.186 8.40091C19.6016 7.31998 19.6016 6.12335 19.186 5.04242C19.186 5.04242 18.0916 4.7028 15.5633 6.32544C14.5159 6.05272 13.4382 5.91326 12.3558 5.91034C11.286 5.91602 10.2212 6.05546 9.18599 6.32544C6.77089 4.7028 5.67655 5.00468 5.67655 5.00468C5.19541 6.07823 5.15476 7.29771 5.56335 8.40091C4.69427 9.33087 4.22068 10.5622 4.24259 11.8349C4.14994 12.6431 4.23261 13.4619 4.48497 14.2353C4.73733 15.0087 5.15345 15.7187 5.70497 16.3167C6.25649 16.9148 6.93046 17.387 7.68094 17.7011C8.43143 18.0151 9.2408 18.1637 10.0539 18.1368C9.57119 18.5765 9.2743 19.1838 9.22372 19.8349C8.9071 20.0154 8.55779 20.1314 8.19603 20.176C7.83428 20.2206 7.46727 20.1929 7.11627 20.0946C6.76527 19.9964 6.43727 19.8294 6.15127 19.6034C5.86527 19.3775 5.62696 19.097 5.45014 18.7783C5.25577 18.4299 4.98504 18.1302 4.65827 17.9014C4.33149 17.6727 3.95716 17.5209 3.56335 17.4575C3.56335 17.4575 2.31806 17.4575 3.56335 18.2122C4.20347 18.6825 4.67887 19.3428 4.92184 20.099C4.92184 20.099 5.63882 22.3632 9.18599 21.6085V23.8726C9.18599 24.2122 9.18599 28.3632 8.3558 28.2877C10.9667 29.1433 13.7826 29.1433 16.3935 28.2877C15.752 28.4386 15.5633 24.2877 15.5633 23.8726Z" fill="#2C2C2C"/>
                            </g>
                            </g>
                            <defs>
                            <clipPath id="clip0_86_141">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            <clipPath id="clip1_86_141">
                            <rect width="17.5094" height="24" fill="white" transform="translate(3 5)"/>
                            </clipPath>
                            </defs>
                            </svg>                        
                        </a>
                        <a href="#" class="hover:text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" rx="4" fill="#EEEFEF"/>
                            </svg>                        
                        </a>
                        <a href="#" class="hover:text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0678 0C22.6861 0 24 1.3139 24 2.93222V21.0678C24 22.6861 22.6861 24 21.0678 24H2.93222C1.3139 24 0 22.6861 0 21.0678V2.93222C0 1.3139 1.31386 0 2.93222 0H21.0678ZM9.16494 19.9005C15.5371 19.9005 19.0213 14.6204 19.0213 10.0442C19.0213 9.89334 19.0213 9.74244 19.0141 9.5988C19.6894 9.11028 20.2784 8.49966 20.7454 7.80282C20.1276 8.07582 19.4595 8.2626 18.7555 8.34882C19.4739 7.91772 20.0198 7.24248 20.2784 6.43068C19.6104 6.82578 18.8704 7.11318 18.0802 7.27122C17.448 6.59592 16.55 6.17922 15.5515 6.17922C13.6405 6.17922 12.0888 7.731 12.0888 9.64188C12.0888 9.91488 12.1175 10.1807 12.1822 10.4321C9.30144 10.2884 6.7512 8.90916 5.0414 6.81144C4.74685 7.3215 4.57444 7.91772 4.57444 8.54994C4.57444 9.7497 5.18508 10.8129 6.11898 11.4307C5.55145 11.4163 5.01985 11.2583 4.55287 10.9996V11.0428C4.55287 12.7238 5.74542 14.1175 7.33308 14.4407C7.04574 14.5198 6.7368 14.5629 6.42072 14.5629C6.198 14.5629 5.98252 14.5413 5.76698 14.4982C6.2052 15.8776 7.48392 16.8761 8.9997 16.9048C7.8144 17.8316 6.32016 18.3847 4.6966 18.3847C4.41642 18.3847 4.14342 18.3704 3.87042 18.3344C5.38622 19.3258 7.21092 19.9005 9.16494 19.9005Z" fill="#EEEFEF"/>
                            </svg>
                        </a>
                        <a href="#" class="hover:text-white">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0689 0C21.8463 0.000683366 22.5916 0.309862 23.1412 0.859632C23.6907 1.4094 23.9996 2.15481 24 2.93215V21.0679C23.9993 21.845 23.6903 22.5901 23.1407 23.1396C22.5912 23.6891 21.8461 23.9981 21.0689 23.9988H2.93229C2.15492 23.9985 1.40947 23.6896 0.859674 23.14C0.309877 22.5905 0.000683399 21.8452 0 21.0679L0 2.93215C0.00037282 2.15461 0.309429 1.40902 0.85926 0.859218C1.40909 0.309414 2.15471 0.000372802 2.93229 0L21.0689 0ZM16.2586 24V15.6291H19.056L19.5883 12.1589H16.2586V9.90787C16.2586 8.95847 16.7238 8.03205 18.2151 8.03205H19.729V5.07762C19.729 5.07762 18.3551 4.84314 17.0415 4.84314C14.298 4.84314 12.5067 6.50512 12.5067 9.51395V12.1589H9.45837V15.6291H12.5067V24" fill="#EEEFEF"/>
                            </svg>
                        </a>
                        <a href="#" class="hover:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0678 0C22.6861 0 24 1.3139 24 2.93222V21.0678C24 22.6861 22.6861 24 21.0678 24H2.93222C1.3139 24 0 22.6861 0 21.0678V2.93222C0 1.3139 1.31386 0 2.93222 0H21.0678ZM7.5216 19.8412V9.2607H4.00411V19.8412H7.5216ZM20.2031 19.8412V13.7737C20.2031 10.5237 18.4679 9.01188 16.154 9.01188C14.2882 9.01188 13.4524 10.038 12.9845 10.7587V9.2607H9.46788C9.5145 10.2535 9.46788 19.8412 9.46788 19.8412H12.9844V13.9323C12.9844 13.616 13.0072 13.2998 13.1004 13.0738C13.3542 12.4421 13.9332 11.7878 14.9048 11.7878C16.1768 11.7878 16.6864 12.7585 16.6864 14.1802V19.8412H20.2031ZM5.78662 4.15885C4.58315 4.15885 3.79687 4.95005 3.79687 5.98706C3.79687 7.0023 4.55925 7.8153 5.74008 7.8153H5.76277C6.98928 7.8153 7.75272 7.0023 7.75272 5.98706C7.72998 4.9515 6.99138 4.1611 5.78662 4.15885Z" fill="#EEEFEF"/>
                        </svg>
                        </a>
                        <a href="#" class="hover:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_86_172)">
                        <path d="M12 2.16094C15.2063 2.16094 15.5859 2.175 16.8469 2.23125C18.0188 2.28281 18.6516 2.47969 19.0734 2.64375C19.6313 2.85938 20.0344 3.12188 20.4516 3.53906C20.8734 3.96094 21.1313 4.35938 21.3469 4.91719C21.5109 5.33906 21.7078 5.97656 21.7594 7.14375C21.8156 8.40937 21.8297 8.78906 21.8297 11.9906C21.8297 15.1969 21.8156 15.5766 21.7594 16.8375C21.7078 18.0094 21.5109 18.6422 21.3469 19.0641C21.1313 19.6219 20.8687 20.025 20.4516 20.4422C20.0297 20.8641 19.6313 21.1219 19.0734 21.3375C18.6516 21.5016 18.0141 21.6984 16.8469 21.75C15.5813 21.8062 15.2016 21.8203 12 21.8203C8.79375 21.8203 8.41406 21.8062 7.15313 21.75C5.98125 21.6984 5.34844 21.5016 4.92656 21.3375C4.36875 21.1219 3.96563 20.8594 3.54844 20.4422C3.12656 20.0203 2.86875 19.6219 2.65313 19.0641C2.48906 18.6422 2.29219 18.0047 2.24063 16.8375C2.18438 15.5719 2.17031 15.1922 2.17031 11.9906C2.17031 8.78438 2.18438 8.40469 2.24063 7.14375C2.29219 5.97187 2.48906 5.33906 2.65313 4.91719C2.86875 4.35938 3.13125 3.95625 3.54844 3.53906C3.97031 3.11719 4.36875 2.85938 4.92656 2.64375C5.34844 2.47969 5.98594 2.28281 7.15313 2.23125C8.41406 2.175 8.79375 2.16094 12 2.16094ZM12 0C8.74219 0 8.33438 0.0140625 7.05469 0.0703125C5.77969 0.126563 4.90313 0.332812 4.14375 0.628125C3.35156 0.9375 2.68125 1.34531 2.01563 2.01562C1.34531 2.68125 0.9375 3.35156 0.628125 4.13906C0.332812 4.90313 0.126563 5.775 0.0703125 7.05C0.0140625 8.33437 0 8.74219 0 12C0 15.2578 0.0140625 15.6656 0.0703125 16.9453C0.126563 18.2203 0.332812 19.0969 0.628125 19.8563C0.9375 20.6484 1.34531 21.3188 2.01563 21.9844C2.68125 22.65 3.35156 23.0625 4.13906 23.3672C4.90313 23.6625 5.775 23.8687 7.05 23.925C8.32969 23.9812 8.7375 23.9953 11.9953 23.9953C15.2531 23.9953 15.6609 23.9812 16.9406 23.925C18.2156 23.8687 19.0922 23.6625 19.8516 23.3672C20.6391 23.0625 21.3094 22.65 21.975 21.9844C22.6406 21.3188 23.0531 20.6484 23.3578 19.8609C23.6531 19.0969 23.8594 18.225 23.9156 16.95C23.9719 15.6703 23.9859 15.2625 23.9859 12.0047C23.9859 8.74688 23.9719 8.33906 23.9156 7.05938C23.8594 5.78438 23.6531 4.90781 23.3578 4.14844C23.0625 3.35156 22.6547 2.68125 21.9844 2.01562C21.3188 1.35 20.6484 0.9375 19.8609 0.632812C19.0969 0.3375 18.225 0.13125 16.95 0.075C15.6656 0.0140625 15.2578 0 12 0Z" fill="#EEEFEF"/>
                        <path d="M12 5.83594C8.59688 5.83594 5.83594 8.59688 5.83594 12C5.83594 15.4031 8.59688 18.1641 12 18.1641C15.4031 18.1641 18.1641 15.4031 18.1641 12C18.1641 8.59688 15.4031 5.83594 12 5.83594ZM12 15.9984C9.79219 15.9984 8.00156 14.2078 8.00156 12C8.00156 9.79219 9.79219 8.00156 12 8.00156C14.2078 8.00156 15.9984 9.79219 15.9984 12C15.9984 14.2078 14.2078 15.9984 12 15.9984Z" fill="#EEEFEF"/>
                        <path d="M19.8469 5.59214C19.8469 6.38902 19.2 7.0312 18.4078 7.0312C17.6109 7.0312 16.9688 6.38433 16.9688 5.59214C16.9688 4.79526 17.6156 4.15308 18.4078 4.15308C19.2 4.15308 19.8469 4.79995 19.8469 5.59214Z" fill="#EEEFEF"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_86_172">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                        </a>
                        <a href="#" class="hover:text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.93103 0H20.069C22.24 0 24 1.75998 24 3.93103V20.069C24 22.24 22.24 24 20.069 24H3.93103C1.75998 24 0 22.24 0 20.069V3.93103C0 1.75998 1.75998 0 3.93103 0ZM5.668 6.66773C6.93737 6.3379 11.9949 6.33789 11.9949 6.33789C11.9949 6.33789 17.0624 6.33791 18.3317 6.68773C19.0214 6.86765 19.5711 7.41729 19.751 8.10695C20.1008 9.37632 20.0908 12.0151 20.0908 12.0151C20.0908 12.0151 20.0908 14.6438 19.751 15.9032C19.5711 16.6028 19.0214 17.1425 18.3317 17.3324C17.0624 17.6623 11.9949 17.6623 11.9949 17.6623C11.9949 17.6623 6.94736 17.6623 5.668 17.3224C4.97834 17.1325 4.42869 16.5829 4.23878 15.8932C3.90894 14.6438 3.90894 12.0051 3.90894 12.0051C3.90894 12.0051 3.90894 9.37632 4.23878 8.10695C4.42869 7.41729 4.98834 6.85764 5.668 6.66773ZM14.5936 12.0051L10.3857 9.57633V14.4238L14.5936 12.0051Z" fill="#EEEFEF"/>
                        </svg>                        
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex justify-between text-sm border-t border-gray-700 pt-4">
                <div class="space-x-4">
                    <a href="#" class="hover:underline">Terms of Service</a>
                    <a href="#" class="hover:underline">DMCA Policy</a>
                    <a href="#" class="hover:underline">Privacy Policy</a>
                    <a href="#" class="hover:underline">Cookie Policy</a>
                    <a href="#" class="hover:underline">UK Slavery Act of 2015</a>
                </div>
                <div class="space-x-4">
                    <a href="#" class="hover:underline">日本語</a>
                    <a href="#" class="hover:underline">Français</a>
                    <a href="#" class="hover:underline">Deutsch</a>
                    <a href="#" class="hover:underline">한국어</a>
                </div>
            </div>
            <div class="text-center text-xs mt-4">&copy; 2008-20 New Relic, Inc. All rights reserved</div>
        </div>
    </footer>
    `;
}
