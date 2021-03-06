
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-W6GVZV8');</script>
    <!-- End Google Tag Manager -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={licenseKey:"1b953179e8",applicationID:"114541227"};window.NREUM||(NREUM={}),__nr_require=function(e,n,t){function r(t){if(!n[t]){var i=n[t]={exports:{}};e[t][0].call(i.exports,function(n){var i=e[t][1][n];return r(i||n)},i,i.exports)}return n[t].exports}if("function"==typeof __nr_require)return __nr_require;for(var i=0;i<t.length;i++)r(t[i]);return r}({1:[function(e,n,t){function r(){}function i(e,n,t){return function(){return o(e,[u.now()].concat(f(arguments)),n?null:this,t),n?void 0:this}}var o=e("handle"),a=e(4),f=e(5),c=e("ee").get("tracer"),u=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",d=l+"ixn-";a(p,function(e,n){s[n]=i(l+n,!0,"api")}),s.addPageAction=i(l+"addPageAction",!0),s.setCurrentRouteName=i(l+"routeName",!0),n.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,n){var t={},r=this,i="function"==typeof n;return o(d+"tracer",[u.now(),e,t],r),function(){if(c.emit((i?"":"no-")+"fn-start",[u.now(),r,i],t),i)try{return n.apply(this,arguments)}catch(e){throw c.emit("fn-err",[arguments,this,e],t),e}finally{c.emit("fn-end",[u.now()],t)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,n){m[n]=i(d+n)}),newrelic.noticeError=function(e,n){"string"==typeof e&&(e=new Error(e)),o("err",[e,u.now(),!1,n])}},{}],2:[function(e,n,t){function r(e,n){var t=e.getEntries();t.forEach(function(e){"first-paint"===e.name?c("timing",["fp",Math.floor(e.startTime)]):"first-contentful-paint"===e.name&&c("timing",["fcp",Math.floor(e.startTime)])})}function i(e,n){var t=e.getEntries();t.length>0&&c("lcp",[t[t.length-1]])}function o(e){if(e instanceof s&&!l){var n,t=Math.round(e.timeStamp);n=t>1e12?Date.now()-t:u.now()-t,l=!0,c("timing",["fi",t,{type:e.type,fid:n}])}}if(!("init"in NREUM&&"page_view_timing"in NREUM.init&&"enabled"in NREUM.init.page_view_timing&&NREUM.init.page_view_timing.enabled===!1)){var a,f,c=e("handle"),u=e("loader"),s=NREUM.o.EV;if("PerformanceObserver"in window&&"function"==typeof window.PerformanceObserver){a=new PerformanceObserver(r),f=new PerformanceObserver(i);try{a.observe({entryTypes:["paint"]}),f.observe({entryTypes:["largest-contentful-paint"]})}catch(p){}}if("addEventListener"in document){var l=!1,d=["click","keydown","mousedown","pointerdown","touchstart"];d.forEach(function(e){document.addEventListener(e,o,!1)})}}},{}],3:[function(e,n,t){function r(e,n){if(!i)return!1;if(e!==i)return!1;if(!n)return!0;if(!o)return!1;for(var t=o.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==t[a])return!1;return!0}var i=null,o=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var f=navigator.userAgent,c=f.match(a);c&&f.indexOf("Chrome")===-1&&f.indexOf("Chromium")===-1&&(i="Safari",o=c[1])}n.exports={agent:i,version:o,match:r}},{}],4:[function(e,n,t){function r(e,n){var t=[],r="",o=0;for(r in e)i.call(e,r)&&(t[o]=n(r,e[r]),o+=1);return t}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],5:[function(e,n,t){function r(e,n,t){n||(n=0),"undefined"==typeof t&&(t=e?e.length:0);for(var r=-1,i=t-n||0,o=Array(i<0?0:i);++r<i;)o[r]=e[n+r];return o}n.exports=r},{}],6:[function(e,n,t){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,n,t){function r(){}function i(e){function n(e){return e&&e instanceof r?e:e?c(e,f,o):o()}function t(t,r,i,o){if(!l.aborted||o){e&&e(t,r,i);for(var a=n(i),f=v(t),c=f.length,u=0;u<c;u++)f[u].apply(a,r);var p=s[y[t]];return p&&p.push([b,t,r,a]),a}}function d(e,n){h[e]=v(e).concat(n)}function m(e,n){var t=h[e];if(t)for(var r=0;r<t.length;r++)t[r]===n&&t.splice(r,1)}function v(e){return h[e]||[]}function g(e){return p[e]=p[e]||i(t)}function w(e,n){u(e,function(e,t){n=n||"feature",y[t]=n,n in s||(s[n]=[])})}var h={},y={},b={on:d,addEventListener:d,removeEventListener:m,emit:t,get:g,listeners:v,context:n,buffer:w,abort:a,aborted:!1};return b}function o(){return new r}function a(){(s.api||s.feature)&&(l.aborted=!0,s=l.backlog={})}var f="nr@context",c=e("gos"),u=e(4),s={},p={},l=n.exports=i();l.backlog=s},{}],gos:[function(e,n,t){function r(e,n,t){if(i.call(e,n))return e[n];var r=t();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,n,{value:r,writable:!0,enumerable:!1}),r}catch(o){}return e[n]=r,r}var i=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(e,n,t){function r(e,n,t,r){i.buffer([e],r),i.emit(e,n,t)}var i=e("ee").get("handle");n.exports=r,r.ee=i},{}],id:[function(e,n,t){function r(e){var n=typeof e;return!e||"object"!==n&&"function"!==n?-1:e===window?0:a(e,o,function(){return i++})}var i=1,o="nr@id",a=e("gos");n.exports=r},{}],loader:[function(e,n,t){function r(){if(!x++){var e=E.info=NREUM.info,n=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&n))return s.abort();u(y,function(n,t){e[n]||(e[n]=t)}),c("mark",["onload",a()+E.offset],null,"api");var t=d.createElement("script");t.src="https://"+e.agent,n.parentNode.insertBefore(t,n)}}function i(){"complete"===d.readyState&&o()}function o(){c("mark",["domContent",a()+E.offset],null,"api")}function a(){return O.exists&&performance.now?Math.round(performance.now()):(f=Math.max((new Date).getTime(),f))-E.offset}var f=(new Date).getTime(),c=e("handle"),u=e(4),s=e("ee"),p=e(3),l=window,d=l.document,m="addEventListener",v="attachEvent",g=l.XMLHttpRequest,w=g&&g.prototype;NREUM.o={ST:setTimeout,SI:l.setImmediate,CT:clearTimeout,XHR:g,REQ:l.Request,EV:l.Event,PR:l.Promise,MO:l.MutationObserver};var h=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1167.min.js"},b=g&&w&&w[m]&&!/CriOS/.test(navigator.userAgent),E=n.exports={offset:f,now:a,origin:h,features:{},xhrWrappable:b,userAgent:p};e(1),e(2),d[m]?(d[m]("DOMContentLoaded",o,!1),l[m]("load",r,!1)):(d[v]("onreadystatechange",i),l[v]("onload",r)),c("mark",["firstbyte",f],null,"api");var x=0,O=e(6)},{}],"wrap-function":[function(e,n,t){function r(e){return!(e&&e instanceof Function&&e.apply&&!e[a])}var i=e("ee"),o=e(5),a="nr@original",f=Object.prototype.hasOwnProperty,c=!1;n.exports=function(e,n){function t(e,n,t,i){function nrWrapper(){var r,a,f,c;try{a=this,r=o(arguments),f="function"==typeof t?t(r,a):t||{}}catch(u){l([u,"",[r,a,i],f])}s(n+"start",[r,a,i],f);try{return c=e.apply(a,r)}catch(p){throw s(n+"err",[r,a,p],f),p}finally{s(n+"end",[r,a,c],f)}}return r(e)?e:(n||(n=""),nrWrapper[a]=e,p(e,nrWrapper),nrWrapper)}function u(e,n,i,o){i||(i="");var a,f,c,u="-"===i.charAt(0);for(c=0;c<n.length;c++)f=n[c],a=e[f],r(a)||(e[f]=t(a,u?f+i:i,o,f))}function s(t,r,i){if(!c||n){var o=c;c=!0;try{e.emit(t,r,i,n)}catch(a){l([a,t,r,i])}c=o}}function p(e,n){if(Object.defineProperty&&Object.keys)try{var t=Object.keys(e);return t.forEach(function(t){Object.defineProperty(n,t,{get:function(){return e[t]},set:function(n){return e[t]=n,n}})}),n}catch(r){l([r])}for(var i in e)f.call(e,i)&&(n[i]=e[i]);return n}function l(n){try{e.emit("internal-error",n)}catch(t){}}return e||(e=i),t.inPlace=u,t.flag=a,t}},{}]},{},["loader"]);</script>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="google-site-verification" content="Q6zbIJpj-zQZbhRw5SDdhWBP-IcPWRiKUnhvFkYDXCQ" />
    <link rel="stylesheet" href="../assets/website/css/estilo-20190822.css?v=1">
    <script src="../assets/website/js/jquery-3.2.1.min.js"></script>
    <script src="../assets/website/js/jquery.validate.min.js"></script>
    <script src="../assets/website/js/slick.min.js"></script>
    <script src="../assets/website/js/jquery.mask.js"></script>
    <link rel="stylesheet" href="../assets/website/css/slick.css">
    <link rel="stylesheet" href="../assets/website/css/map-styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.3.4/css/inputmask.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.5/handlebars.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBdbJmnnwSV-R5bzygMolEHUkLhVkxS1Jc"></script>
    <script type="text/javascript" src="https://hinode.teleperformance.com.br/HinodeWebApi/AppChat2/chatTP.js"></script>
    <link rel="shortcut icon" href="../assets/website/images/favicon.png">
    <script src="../assets/website/js/snazzy-info-window.js"></script>
    <title>O Grupo Hinode</title>
<meta name="description" content="O que move o Grupo Hinode &eacute; a possibilidade de ajudar pessoas a realizar seus sonhos e promover conquistas. Conhe&ccedil;a nosso trabalho!">
<link rel="canonical" href="https://grupohinode.com/o-grupo-hinode"/>
<meta property="og:title" content="O Grupo Hinode" />
<meta property="og:description" content="O que move o Grupo Hinode &eacute; a possibilidade de ajudar pessoas a realizar seus sonhos e promover conquistas. Conhe&ccedil;a nosso trabalho!" />
<meta property="og:image" content="https://grupohinode.com/assets/website/images/grupo-hinode-fb-image.jpg" />

<meta name="twitter:title" content="O Grupo Hinode" />
<meta name="twitter:description" content="O que move o Grupo Hinode &eacute; a possibilidade de ajudar pessoas a realizar seus sonhos e promover conquistas. Conhe&ccedil;a nosso trabalho!" />

    <style>
        .input-datepicker {
            width: 238px !important;
        }
    </style>
</head>
<body>

   
    <div class="wrap-header-total">
  <header class="header">
    <div class="grid1240">
      <div class="wrap-topo">
      <h1 class="logo-hinode">
        <a href="/">
          <img src="https://grupohinode.com/assets/website/images/logo-hinode.png" alt="">
        </a>
      </h1>
      <div class="wrap-right buttons-menu">
       
        <a href="https://escritorio.hinode.com.br/login" class="btn-entrar" target="_blank">VIRTUAL OFFICE</a>
      </div>
      </div>
      <div class="container-menu">
        <div class="container-right-header">
          <ul class="list-header">
            <li class="item-list-header menu-mob">
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </div>
                <div class="menu-pt">
                <nav class="menu-main">
          <ul class="list-menu-main">
               <li 
              class='item-menu-main selected'>
              <a href="grupoHinode.php" class="link-menu-main">
                <span>O GRUPO HINODE</span>
              </a>
            </li>
            <li class='item-menu-main'>
              <a href="nossaMarcas.php" class="link-menu-main">
                <span>NOSSAS MARCAS</span>
              </a>
            </li>
            <li class='item-menu-main'>
              <a href="consultores.php" class="link-menu-main">
                <span>CONSULTORES(AS)</span>
              </a> 
            </li>
            <li class='item-menu-main'>
              <a href="hinodeCenter.php" class="link-menu-main">
                <span>HINODE CENTER</span>
              </a>
            </li>
            <li class='item-menu-main'>
              <a href="universidadeHinode.php" class="link-menu-main">
                <span>UNIVERSIDADE HINODE</span>
              </a>
            </li>
                        <li class='item-menu-main item-hide-m'>
              <a href="acontece.php" class="link-menu-main">
                <span>ACONTECE</span>
              </a>
            </li>
            <li class='item-menu-main'>
              <a href="calendario.php" class="link-menu-main">
                <span>CALENDÁRIO</span>
              </a>
            </li>
            <li class='item-menu-main sub-menu-item'>
              <a href="javascript:;" class="link-menu-main">
                <span>ACONTECE</span>
              </a>
              <ul class="submenu">
                                   <li><a href="/noticias">NOTÍCIAS</a></li>
                                   <li><a href="/contato">CONTATO</a></li>
                               </ul>
            </li>
            <li class='item-menu-main item-hide-m'>
              <a href="https://www.hinode.com.br?utm_source=site_grupo&utm_medium=botao_home" target="_blank" class="link-menu-main">
                <span>LOJA VIRTUAL</span>
              </a>
            </li>
            <li class='item-menu-main item-hide-m'>
              <a href="https://issuu.com/grupohinodeoficial/docs/ciclo01_20_issu_v3" target="_blank" class="link-menu-main">
                <span>CATÁLOGO</span>
              </a>
            </li>
                      </ul>
        </nav>
                 </div>
              </div>
    </div>
  </header>
</div>

<script>
  $(document).ready(function(){
    $('.sub-menu-item .link-menu-main').click(function(){
      if (!$(this).hasClass('open')) {
        $(this).addClass('open').siblings('.submenu').show();
      }
      else {
        $(this).removeClass('open').siblings('.submenu').hide();        
      }
    });
    $('.itens-lang span').click(function(){
        $(this).siblings('ul').slideToggle();
    });
   $('.btn-close-search-mob').click(function(){
    $('.search-main').removeClass('open');
    $('#header-overlay').removeClass('active');
    $('.btn-search').removeClass('hide');
    $('#header-overlay-bag, #header-overlay').removeClass('active');
    $('.bag').removeClass('hover-active box-shadow');
  });
   if ($(window).width() <= 980) {

    $(document).on('touchstart', function (e) {
      const container = $('.wrap-header-total');
      if (!container.is(e.target) && container.has(e.target).length === 0 && $('.menu-mob').hasClass('menu-active')) {
        $('.bg-menu').fadeOut();
        $('.white-main-menu').css({opacity: 0, visibility: 'hidden'});
        $('.menu-main').fadeOut();
        $('.menu-mob').removeClass('menu-active');
      }
    });
    $('.btn-search,.close-search').click(function () {

      if (!$('.btn-search').hasClass('hide')) {
        $('.search-main').addClass('open').css('opacity', '1');
        $('.btn-search').addClass('hide');

        setTimeout(function () {
          $('.space-header').css('opacity', '1');
        }, 2000);

        $('#header-overlay').addClass('active');

        $('#header-overlay-bag').removeClass('active');
        $('.bag').removeClass('hover-active');
        $('.bag').removeClass('box-shadow');
        $('.menu-main').fadeOut();
        $('.bg-menu').fadeOut();
        $('.menu-mob').removeClass('menu-active');
        $('.input-search').focus();

      } else {

        $('.search-main').removeClass('open');
        $('#header-overlay').removeClass('active');
        $('.btn-search').removeClass('hide');
        $('.menu-main').fadeOut();
        $('.bg-menu').fadeOut();
        $('.menu-mob').removeClass('menu-active');
        $('.input-search').focus();
      }
    });

  } else {

    $('.item-menu-main').mouseover(function () {
      $(this).addClass('menu-main-active');
    });

    $('.item-menu-main').mouseleave(function () {
      $(this).removeClass('menu-main-active');
    });

    $('.link-menu-main, .link-sub-main, .item-menu-main').click(function () {
      setTimeout(function () {
        $('.item-menu-main').removeClass('menu-main-active');
      }, 300);
    });
    $('#header-overlay').click(function () {

      if ($('#header-overlay').hasClass('active')) {
        $('.search-main').removeClass('open');
        $('#header-overlay').removeClass('active');
        $('.btn-search').removeClass('hide');
      }
    });

    $('.btn-search,.close-search').click(function () {

      if (!$('.btn-search').hasClass('hide')) {
        $('.search-main').addClass('open');

        $('#header-overlay').addClass('active');
        $('.btn-search').addClass('hide');
        $('#header-overlay-bag').removeClass('active');
        $('.bag').removeClass('hover-active');
        $('.bag').removeClass('box-shadow');
        $('.input-search').focus();

      } else {

        $('.search-main').removeClass('open');
        $('#header-overlay').removeClass('active');
        $('.btn-search').removeClass('hide');
        $('.input-search').focus();

      }
    });

    $('.user').mouseover(function () {
      $(this).addClass('open-login');
      $('#header-overlay').addClass('active');

    });

    $('.bag').mouseover(function () {
      $('.bag').addClass('hover-active');
      $('#header-overlay-bag').addClass('active');
      if ($('.search-main').hasClass('open')) {
        $('.bag').addClass('box-shadow');
      }

    });

    $('.bag, .drop-bag, .overlay-hover,.user').mouseleave(function () {
      $('#header-overlay-bag, #header-overlay').removeClass('active');
      $('.bag').removeClass('hover-active box-shadow');
      $('.user').removeClass('open-login');
    });
  }
  $('.menu-mob').click(function () {
    if ($('.menu-mob').hasClass('menu-active')) {
      console.log('menu mob COM classe menu-active');
      $('.menu-main').fadeOut();
      $('.bg-menu').fadeOut();
      $('.menu-mob').removeClass('menu-active');
    } else {
      console.log('menu mob SEM classe menu-active');
      $('.menu-main').fadeIn();
      $('.bg-menu').fadeIn();
      $('.menu-mob').addClass('menu-active');
      $('.search-main').removeClass('open');
      $('#header-overlay').removeClass('active');
      $('.btn-search').removeClass('hide');
      $('#header-overlay-bag, #header-overlay').removeClass('active');
      $('.bag').removeClass('hover-active box-shadow');
    }
  });
});
</script>

    <div id="app">
        
	<div class="sub-menu">
    <nav class="grid1240">
        <ul>
                            <li><a href="#estrutura">Estrutura</a></li>
                            <li><a href="#historia">História</a></li>
                            <li><a href="#missao">Missão</a></li>
                            <li><a href="#area-de-atuacao">Área de atuação</a></li>
                            <li><a href="#premios">Prêmios</a></li>
                            <li><a href="#far">FAR</a></li>
                            <li><a href="https://grupohinode.gupy.io">Trabalhe conosco</a></li>
                    </ul>
    </nav>
</div>
	<div class="wrap-banner-top" id="estrutura">
    <div class="wrap-banner">
                    <div class="banner " style="background-image:url(https://grupohinode.com/assets/website/images/slider-grupo-1.png);">
                <div class="grid930">
                    <div class="txt-banner txt-white">
                        <span class="txt-header">FÁBRICA PRÓPRIA</span>

                        <h2>UMA <br />ESTRUTURA <br />VENCEDORA</h2>
                        <p>
                            Com mais de 12 mil m², sendo 9 mil m² <br />
                        de área fabril, temos capacidade <br />
                        instalada para 9 milhões de unidades <br />
                        por mês, podendo dobrar esse valor.
                        </p>
                                            </div>
                </div>
            </div>
                    <div class="banner background-center-bottom" style="background-image:url(https://grupohinode.com/assets/website/images/foto-fabrica.jpg);">
                <div class="grid930">
                    <div class="txt-banner txt-white">
                        <span class="txt-header">EFICIÊNCIA LOGÍSTICA</span>

                        <h2>EFICIÊNCIA<br />LOGÍSTICA</h2>
                        <p>
                            A fábrica, localizada no município de <br />
                        Jandira (SP), é referência no segmento<br />
                        e foi projetada para atender aos mais <br />
                        altos padrões de qualidade, <br />
                        equiparados aos da indústria <br />
                        farmacêutica.
                        </p>
                                            </div>
                </div>
            </div>
                    <div class="banner " style="background-image:url(https://grupohinode.com/assets/website/images/slider-grupo-4.png);">
                <div class="grid930">
                    <div class="txt-banner txt-white">
                        <span class="txt-header">+ DE 450 FRANQUIAS</span>

                        <h2>TEMOS <br />FRANQUIAS EM <br />TODO BRASIL</h2>
                        <p>
                            Muito mais que um local para experimentar <br />
                        e adquirir produtos, o Hinode Center é uma <br />
                        extensão da nossa marca para todo o <br />
                        Brasil.
                        </p>
                                                    <a href="/hinode-center" class="btn-default">ENCONTRE UM HINODE CENTER</a>
                                            </div>
                </div>
            </div>
                    <div class="banner " style="background-image:url(https://grupohinode.com/assets/website/images/slider-grupo-5.png);">
                <div class="grid930">
                    <div class="txt-banner txt-white">
                        <span class="txt-header">EMPRESA DO ANO</span>

                        <h2>EMPRESA DO <br />ANO 2017 PELA <br />ATUALIDADE <br />COSMÉTICA</h2>
                        <p>
                            O Grupo Hinode é uma empresa <br />
                        brasileira sólida, em pleno crescimento <br />
                        no mercado nacional e em expansão <br />
                        no mercado internacional.
                        </p>
                                            </div>
                </div>
            </div>
            </div>
    <div class="grid930 menu-banner">
        <ul>
                            <li  class="selected" ><a href="javascript:void(0);">FÁBRICA<br />PRÓPRIA</a></li>
                            <li ><a href="javascript:void(0);">EFICIÊNCIA<br />LOGÍSTICA</a></li>
                            <li ><a href="javascript:void(0);">+ DE 450<br />FRANQUIAS</a></li>
                            <li ><a href="javascript:void(0);">EMPRESA<br />DO ANO</a></li>
                    </ul>
    </div>
</div>
	<div class="historia-sucesso" id="historia">
    <h2 class="title-default">UMA HISTÓRIA DE SUCESSO</h2>
    <div class="historia-datas">
        <div class="item">1988</div>
        <div class="item">2008</div>
        <div class="item">2012</div>
        <div class="item">2014</div>
        <div class="item">2015</div>
        <div class="item">2016</div>
        <div class="item">2017</div>
        <div class="item">2018</div>
    </div>
    <div class="slider-datas-content">
        <div class="item">
            <div class="grid930">
                <img src="https://grupohinode.com/assets/website/images/item-content-1.png" alt="">
                <p>Na garagem de casa, <br/>Sr. Francisco e Dona Adelaide <br/>começam a Hinode.</p>
            </div>
        </div>
        <div class="item">
            <div class="grid930">
                <img src="https://grupohinode.com/assets/website/images/item-content-2.png" alt="">
                <p>Entrada no marketing <br/>multinível.<br/><br/>
                    <span class="hide-mobile">
						O marketing multinível é um <br/>
						dos grandes modelos de <br/>
						negócio do mundo. Ele é a <br/>
						base de várias empresas de <br/>
						sucesso, incluindo a Hinode. <br/>
						Nesse modelo, cada um tem a <br/>
						chance de construir sua <br/>
						própria rede e aumentar seus <br/>
						ganhos conforme mais <br/>
					pessoas participam.
				</span></p>
            </div>
        </div>
        <div class="item">
            <div class="grid930">
                <img src="https://grupohinode.com/assets/website/images/item-content-3.png" alt="">
                <p>Implementação do modelo<br/>
                    de franquias e sistema de <br/>
                    treinamento.<br/>
                    <span class="hide-mobile">
						Nossos(as) Consultores(as) contam <br/>
						com um local para <br/>
						experimentar e adquirir seus <br/>
						produtos, fazer suas reuniões <br/>
					e treinamentos.</span></p>
            </div>
        </div>
        <div class="item">
            <div class="grid930">
                <img src="https://grupohinode.com/assets/website/images/item-content-4.png" alt="">
                <p>Lançamento da linha <br/>de Bem-Estar.</p>
            </div>
        </div>
        <div class="item">
            <div class="grid930">
                <div class="slider-content-multiplo">
                    <div class="slide">
                        <img src="https://grupohinode.com/assets/website/images/item-content-5.png" alt="">
                        <p>Prêmio de Melhor <br/>Criação Perfumística -<br/>Empire pela ABIHPEC.</p><br/>
                        <img src="https://grupohinode.com/assets/website/images/item-content-txt-5.png" alt=""
                             class="img-txt-mini">
                    </div>
                    <div class="slide">
                        <img src="https://grupohinode.com/assets/website/images/item-content-txt-6.png" alt="">
                        <p>Instituto FAR:<br/><br/>
                            Fundado em 2015, o Instituto <br/>
                            FAR tem como objetivo <br/>
                            promover o crescimento <br/>
                            sustentável por meio de três <br/>
                            esferas de responsabilidade <br/>
                            social, ambiental e econômica <br/>
                            e acredita que, se cada um <br/>
                            fizer a sua parte, é possível <br/>
                            contribuir para um mundo <br/>
                            melhor.</p><br/>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="grid930">
                <div class="slider-content-multiplo">
                    <div class="slide">
                        <div class="col-mobile">
                            <img src="https://grupohinode.com/assets/website/images/item-content-6.png" alt="">
                        </div>
                        <div class="col-mobile">
                            <img src="https://grupohinode.com/assets/website/images/item-content-txt-5.png" alt=""
                                 class="img-txt-mini"><br/>
                            <img src="https://grupohinode.com/assets/website/images/item-content-txt-7.png" alt=""
                                 class="img-txt-mini">
                        </div>
                        <div class="col-mobile txt-img-center">
                            <p>Hinode eleita <br/>empresa do ano<br/>pela ABIHPEC.</p><br/>
                        </div>
                    </div>
                    <div class="slide">
                        <img src="https://grupohinode.com/assets/website/images/item-content-7.png" alt="">
                        <p>Prêmio pela melhor<br/>criação perfumística -<br/>Grace Midnight<br/>(PRÊMIO PELA ATUALIDADE
                            <br/>COSMÉTICA)</p><br/>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="grid930">
                <div class="slider-content-multiplo">
                    <div class="slide">
                        <img src="https://grupohinode.com/assets/website/images/item-content-8.png" alt="">
                        <p>Lançamento novas<br/>marcas Hinode e HND</p><br/>
                    </div>
                    <div class="slide">
                        <img src="https://grupohinode.com/assets/website/images/item-content-9.png" alt="">
                        <p>Inauguração da nova fábrica:<br/><br/>
                            Com mais de 12 mil m2, <br/>
                            sendo 9 mil m2 de área fabril, <br/>
                            temos capacidade instalada <br/>
                            para 8 milhões de unidades <br/>
                            por mês, podendo dobrar <br/>
                            esse valor.</p><br/>
                    </div>
                    <div class="slide">
                        <div class="col-mobile">
                            <img src="https://grupohinode.com/assets/website/images/item-content-10.jpg" style="width: 380px;
                                                                                                height: 366px;
                                                                                                object-fit: cover;
                                                                                                object-position: 35% 0%;" alt="">
                        </div>
                        <div class="col-mobile">
                            <img src="https://grupohinode.com/assets/website/images/item-content-txt-7.png" alt=""
                                 class="img-txt-mini">
                        </div>
                        <div class="col-mobile txt-img-center">
                            <p>Hinode eleita empresa<br/>do ano 2017 pela Atualidade <br/>Cosmética.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item">
            <div class="grid930">
                <div class="slider-content-multiplo">
                    <div class="slide">


                            <img class="img-content-grid-left" src="https://grupohinode.com/assets/website/images/item-content-11.jpg" alt="" >


                            <img class="img-content-grid-right" src="https://grupohinode.com/assets/website/images/item-content-11.1.png" alt="">


                            <p><strong>Prêmio Grandes Cases da Embalagem</strong> <br>  Inebriante e Routine Age Reverse Booster Treatment.<br/></p><br/>
                            <img src="https://grupohinode.com/assets/website/images/item-content-txt-11.png" alt=""
                                 class="img-txt-mini">
                    </div>
                    <div class="slide">
                        <img class="img-content-grid-left" src="https://grupohinode.com/assets/website/images/item-content-11.jpg" alt="" >
                        <p><strong>Prêmio Atualidade Cosmética 2018</strong> <br>Inebriante: Melhor Criação
                            Perfumística e Perfumaria Masculina Latino-Americana.<br/></p><br/>
                        <img src="https://grupohinode.com/assets/website/images/item-content-txt-12.png" alt=""
                             class="img-txt-mini">
                    </div>
                    <div class="slide">
                        <img src="https://grupohinode.com/assets/website/images/item-content-13.jpg" alt="">
                        
                        <p><strong>Prêmio ABRE da Embalagem Brasileira</strong> <br>com as fragrâncias Léser na
                            categoria Tecnologia de Produtos e Venyx na categoria Voto Popular.
                            <br/></p><br/>
                        <img src="https://grupohinode.com/assets/website/images/item-content-txt-13.png" alt=""
                             class="img-txt-mini">
                    </div>
                    <div class="slide">
                        <img src="https://grupohinode.com/assets/website/images/item-content-14.jpg" alt="">
                        
                        
                        <p><strong>Selo de Excelência em Franchising da ABF</strong> <br>abril.
                            <br/></p><br/>
                        <p><strong>As Melhores Franquias do Brasil,</strong> <br>do Guia de Franquias da revista
                            Pequenas Empresas & Grandes Negócios – junho.
                            <br/></p><br/>
                        <img src="https://grupohinode.com/assets/website/images/item-content-txt-14.png" alt=""
                             class="img-txt-mini">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="append-arrows append-arrows-datas-content"></div>
</div>
	<div class="geracao-geracao">
    <div class="grid930">
        <h3>
            Passada <br />de geração <br />a geração
        </h3>
        <p>
            Com muito trabalho e determinação, Sr <br />
            Francisco e Dona Adelaide Rodrigues fundaram <br />
            a Hinode em 1988 com uma missão: oferecer às <br />
            pessoas a oportunidade para mudarem de vida.<br />
            Hoje, seu filho Sandro Rodrigues é o presidente<br />
            do Grupo Hinode e vencedor do troféu<br />
            empresário do ano, conquistando uma gestão<br />
            de sucesso junto aos seus irmãos Alessandro<br />
            Rodrigues, Crisciane Rodrigues e Leandro<br />
            Rodrigues e toda a equipe.
        </p>
        <div class="fundadores pessoas">
            <h4>FRANCISCO E <br />ADELAIDE RODRIGUES</h4>
            <p>Fundadores</p>
        </div>
        <div class="wrap-pessoas">
                            <div class="pessoas">
                    <h4>ALESSANDRO <br />RODRIGUES</h4>
                    <p>VP Marketing</p>
                </div>
                            <div class="pessoas">
                    <h4>CRISCIANE <br />RODRIGUES</h4>
                    <p>VP Comercial</p>
                </div>
                            <div class="pessoas">
                    <h4>LEANDRO <br />RODRIGUES</h4>
                    <p>VP de Operações</p>
                </div>
                            <div class="pessoas">
                    <h4>SANDRO <br />RODRIGUES</h4>
                    <p>Presidente</p>
                </div>
                    </div>
    </div>
</div>
	<div class="wrap-missao" id="missao">
    <img src="https://grupohinode.com/assets/website/images/bg-missao.png" alt="">
    <div class="grid930">
        <div class="gridmeio box-mission">
            <h4>NOSSA MISSÃO</h4>
            <h5>OFERECER ÀS PESSOAS A<br />OPORTUNIDADE PARA MUDAREM DE VIDA</h5>
            <p>
                Acreditamos que temos um papel maior na<br />
                sociedade - ser um agente transformador na vida de<br />
                milhões de pessoas, proporcionando uma<br />
                oportunidade única de mudar de vida. Enxergamos<br />
                em cada pessoa um empreendedor em potencial e,<br />
                por isso, oferecemos todas as ferramentas para que<br />
                possam se desenvolver profissionalmente. Para que<br />
                consigam atingir suas metas pessoais, realizar seus<br />
                sonhos e construir um novo futuro para sua família.<br />
                É essa crença que nos move e nossa verdadeira<br />
                razão de existir.
            </p>
        </div>
    </div>
</div>
	<div class="wrap-valores-solidos">
    <h4 class="title-default">CONSTRUÍDA COM<br />VALORES SÓLIDOS</h4>
    <ul class="grid930">
                    <li>
                <h5>SEM ESFORÇO <br />NÃO HÁ <br />RESULTADO</h5>
                <p>Não tem milagre. Com honestidade, fé e muito trabalho, construímos uma trajetória de superação e atingimos um crescimento exponencial.</p>
            </li>
                   <li>
                <h5>VERDADEIROS <br />LÍDERES INSPIRAM <br />O CRESCIMENTO</h5>
                <p>A liderança faz parte do nosso DNA. Acreditamos que são os líderes que movimentam o mundo, por isso, decidimos desenvolvê-los. Buscamos revelar talentos, motivar e inspirar não só os nossos parceiros, mas a sociedade.</p>
            </li>
                   <li>
                <h5>MAIS QUE <br />UM TIME, <br />UMA FAMÍLIA</h5>
                <p>Acolhemos a todos de braços abertos, criamos relações verdadeiras, compartilhamos ideais e objetivos, comemoramos lado a lado o nosso sucesso. Porque ninguém conquista nada sozinho. Juntos, somos mais fortes.</p>
            </li>
                   <li>
                <h5>ISSO É SÓ <br />O COMEÇO. <br />TEMOS O MUNDO <br />PELA FRENTE</h5>
                <p>Compartilhamos o desejo por algo mais, a vontade de ir além. Temos o espírito empreendedor, a inquietude e o entusiasmo de quem ainda tem muito a conquistar. Para nós, tudo isso é apenas o começo.</p>
            </li>
           </ul>
</div>
	<div class="wrap-premios" id="premios">
    <h3 class="title-default">E MUITOS PRÊMIOS</h3>
    <p>Ao longo de nossa história, tivemos muito <br />reconhecimento em tudo que fizemos.</p>

    <div class="slider-premios">
                    <div class="item">
                <h5>MELHOR CRIAÇÃO <br />PERFUMÍSTICA 2015 <br />PELA ABIHPEC</h5>
                <div class="wrap-thumb"><img src="https://grupohinode.com/assets/website/images/image-premio-1.png" alt=""></div>
                                    <p>FRAGRÂNCIA EMPIRE</p>
                            </div>
                    <div class="item">
                <h5>MELHOR CRIAÇÃO PERFUMÍSTICA 2016 PELA ATUALIDADE COSMÉTICA</h5>
                <div class="wrap-thumb"><img src="https://grupohinode.com/assets/website/images/image-premio-2.png" alt=""></div>
                                    <p>PERFUME GRACE MIDNIGHT</p>
                            </div>
                    <div class="item">
                <h5>EMPRESA DO ANO 2016 PELA ABIHPEC</h5>
                <div class="wrap-thumb"><img src="https://grupohinode.com/assets/website/images/image-premio-3.png" alt=""></div>
                            </div>
                    <div class="item">
                <h5>EMPRESÁRIO DO ANO 2016 PELA ATUALIDADE COSMÉTICA</h5>
                <div class="wrap-thumb"><img src="https://grupohinode.com/assets/website/images/image-premio-4.png" alt=""></div>
                                    <p>SANDRO RODRIGUES</p>
                            </div>
                    <div class="item">
                <h5>CATEGORIA MASTER: EMPREENDEDOR DO ANO PELA ERNST & YOUNG 2016</h5>
                <div class="wrap-thumb"><img src="https://grupohinode.com/assets/website/images/image-premio-5.png" alt=""></div>
                                    <p>SANDRO RODRIGUES</p>
                            </div>
                    <div class="item">
                <h5>EMPRESA DO ANO 2016 PELA <br />ABIHPEC</h5>
                <div class="wrap-thumb"><img src="https://grupohinode.com/assets/website/images/image-premio-6.png" alt=""></div>
                                    <p>ADELAIDE E FRANCISCO RODRIGUES</p>
                            </div>
                    <div class="item">
                <h5>Empresa do Ano 2017 <br />Prêmio Atualidade Cosmética</h5>
                <div class="wrap-thumb"><img src="https://grupohinode.com/assets/website/images/image-premio-9.png" alt=""></div>
                                    <p>Grupo Hinode</p>
                            </div>
                    <div class="item">
                <h5>Prêmio ABRE <br /> Associação Brasileira de Embalagem</h5>
                <div class="wrap-thumb"><img src="https://grupohinode.com/assets/website/images/image-premio-10.png" alt=""></div>
                                    <p>Fragrância Feelin´ para Ela</p>
                            </div>
                    <div class="item">
                <h5>Prêmio Grandes <br />Cases de Embalagem 2017</h5>
                <div class="wrap-thumb"><img src="https://grupohinode.com/assets/website/images/image-premio-11.png" alt=""></div>
                                    <p>Perfume Inebriante</p>
                            </div>
                    <div class="item">
                <h5>Melhor Criação  <br /> Perfumística Masculina 2018</h5>
                <div class="wrap-thumb"><img src="https://grupohinode.com/assets/website/images/image-premio-12.png" alt=""></div>
                                    <p>Perfume Inebriante</p>
                            </div>
                    <div class="item">
                <h5>Prêmio ABRE de  <br /> Embalagem Brasileira </h5>
                <div class="wrap-thumb"><img src="https://grupohinode.com/assets/website/images/image-premio-13.png" alt=""></div>
                                    <p>Fragrância Venyx e  <br />  Eau de Parfum Lesér</p>
                            </div>
                    <div class="item">
                <h5>Prêmio Dow Packaging <br />Global Award</h5>
                <div class="wrap-thumb"><img src="https://grupohinode.com/assets/website/images/image-premio-14.png" alt=""></div>
                                    <p>Fragrância Spot </p>
                            </div>
                    <div class="item">
                <h5>Prêmio Grandes <br />Cases de Embalagem 2018</h5>
                <div class="wrap-thumb"><img src="https://grupohinode.com/assets/website/images/image-premio-11.png" alt=""></div>
                                    <p>Eau de Parfum Inebriante e <br /> Age Reverse Booster Treatment</p>
                            </div>
            </div>
    <div class="append-arrows append-arrows-mkt"></div>
</div>
	<div class="wrap-marketing" id="area-de-atuacao">
    <div class="slider-marketing-multinivel">
        <div class="item">
            <img src="https://grupohinode.com/assets/website/images/bg-o-grupo.png" alt="">
            <div class="grid930">
                <div class="content-txt">
                    <h5>NOSSA ÁREA DE ATUAÇÃO</h5>
                    <h4>GRUPO HINODE</h4>
                    <p>O marketing multinível é um dos grandes modelos de negócio do mundo. Ele é a base de várias empresas de sucesso, incluindo a Hinode. Nesse modelo, cada um tem a chance de construir sua própria rede e aumentar seus ganhos conforme mais pessoas participam.</p>
                </div>
            </div>
        </div>
    </div>
</div>
	<div class="wrap-transformacoes" id="far">
    <div class="grid930">
        <img src="https://grupohinode.com/assets/website/images/img-far.png" alt="">
        <div class="wrap-txt">
            <h4><b>A VONTADE DE IR ALÉM</b></h4>
            <p>O Instituto FAR foi criado para organizar as ações de responsabilidade social do Grupo Hinode. Por meio dele, 
                        apoiamos projetos de outras organizações do terceiro setor, que contribuem para a promoção de uma sociedade mais 
                        justa, buscando o desenvolvimento humano e sustentável.
                        <br/><br/>
                        Baseado nos valores do Grupo Hinode, o Instituto FAR tem como missão ajudar a promover a transformação na vida 
                        das pessoas e para isso, investe em projetos nos seguimentos de:
                        <br/>
                        - educação;
                        <br/>
                        - direitos da criança e adolescente;
                        <br/>
                        - esporte;
                        <br/>
                        - cultura;
                        <br/>
                        - direitos humanos;
                        <br/>
                        - assistência social.</p>
        </div>
        <ul>
                            <li>
                    <img src="https://grupohinode.com/assets/website/images/img-transform-1.png" alt="">
                    <h4>RESPONSABILIDADE SOCIAL</h4>
                    <i><b>Apoiar e participar de projetos que promovam ações de impacto social e contribuam para uma sociedade mais justa.</b></i>
                    <p><b>Segmentos de Atuação</b></p>
                <p>Formação</p>
                <p>Saúde</p>
                <p>Voluntariado</p>
                </li>
                            <li>
                    <img src="https://grupohinode.com/assets/website/images/img-transform-2.png" alt="">
                    <h4>RESPONSABILIDADE AMBIENTAL</h4>
                    <i><b>Contribuir para um ambiente mais limpo e sustentável, diminuindo o impacto do ser humano no meio ambiente.</b></i>
                    <p><b>Como fazemos</b></p>
                <p>Política de destinação dos resíduos gerados no processo fabril.</p>
                <p>Política com fornecedores<br /></p>
                <p>Campanhas<br /><i>(Ex: Lacre Solidário, Reciclagem de Lonas, paletes, etc.)</i></p>
                </li>
                            <li>
                    <img src="https://grupohinode.com/assets/website/images/img-transform-3.png" alt="">
                    <h4>RESPONSABILIDADE ECONÔMICA</h4>
                    <i><b>Crescimento, perpetuação e desenvolvimento do Grupo Hinode, sem comprometer a sustentabilidade social e ambiental.</b></i>
                     <p><b>Objetivos</b></p>
                <p>Potencializar parcerias</p>
                <p>Realizar a gestão do investimento social</p>
                <p>Monitorar o desenvolvimento dos projetos</p>
                <p>Compartilhar experiências e inspirar práticas semelhantes</p>
                </li>
                    </ul>
        <div class="mg-top-20">
            <h5>Acesse o site e conheça um pouco mais sobre essa iniciativa que vem impactando a vida de tantas pessoas: <a href="http://www.institutofar.com.br" target="_blank" >http://www.institutofar.com.br</a></h5>
        </div>
    </div>
</div>
	<div class="wrap-destaque-txt">
    <div class="content">
        <h4 class="title-default">CONHEÇA <br />NOSSAS MARCAS</h4>
        <p>
            O Grupo Hinode possui duas marcas consolidadas no mercado <br />
            com cerca de 600 produtos, dentre eles perfumaria, bem-estar, <br />
            higiene pessoal,  maquiagem e cosméticos. É um enorme <br />
            portfólio para oferecer aos seus clientes os melhores produtos.
        </p>
        <a href="https://grupohinode.com/marcas-da-hinode" class="btn-default btn-saiba-mais">SAIBA MAIS</a>
    </div>
</div>
    </div>

    <div class="bg-menu"></div>

    <footer>
    <div class="grid940">
        <div class="receba-novidades">
            <h3>RECEBA NOVIDADES</h3>
            <form id="newsletter-register" action="/newsletter/registrar">
                <input type="email" required name="email"
                placeholder="Insira seu email aqui" class="ipt-email-novidades">
                <input type="submit" value="ENVIAR" class="btn-default">
            </form>
        </div>
        <nav>
            <div class="columns">
                                <div class="col">
                                        <ul>
                                                <li ><a href="https://grupohinode.com/o-grupo-hinode"
                           ><h3>O GRUPO HINODE</h3></a>
                       </li>
                                               <li ><a href="hinode-40"
                           >Hinode 4.0</a>
                       </li>
                                               <li ><a href="https://grupohinode.com/o-grupo-hinode#estrutura"
                           >Estrutura</a>
                       </li>
                                               <li ><a href="https://grupohinode.com/o-grupo-hinode#historia"
                           >História</a>
                       </li>
                                               <li ><a href="https://grupohinode.com/o-grupo-hinode#missao"
                           >Missão</a>
                       </li>
                                               <li ><a href="https://grupohinode.com/o-grupo-hinode#area-de-atuacao"
                           >Área de atuação</a>
                       </li>
                                               <li ><a href="https://grupohinode.com/o-grupo-hinode#premios"
                           >Prêmios</a>
                       </li>
                                               <li ><a href="https://grupohinode.com/o-grupo-hinode#far"
                           >FAR</a>
                       </li>
                                               <li  class="work-with-us" ><a href="https://grupohinode.gupy.io"
                            target="_blank" >Trabalhe conosco</a>
                       </li>
                                          </ul>
                                  </div>
                               <div class="col">
                                        <ul>
                                                <li ><a href="https://grupohinode.com/marcas-da-hinode"
                           ><h3>NOSSAS MARCAS</h3></a>
                       </li>
                                               <li ><a href="http://www.hinode.com.br"
                            target="_blank" >Hinode</a>
                       </li>
                                               <li ><a href="http://hndoficial.com.br"
                            target="_blank" >HND</a>
                       </li>
                                          </ul>
                                       <ul>
                                                <li ><a href="https://grupohinode.com/consultores-hinode"
                           ><h3>CONSULTORES</h3></a>
                       </li>
                                               <li ><a href="https://grupohinode.com/consultores-hinode"
                           >Quero ser um(a) consultor(a)</a>
                       </li>
                                          </ul>
                                  </div>
                               <div class="col">
                                        <ul>
                                                <li ><a href="https://grupohinode.com/hinode-center"
                           ><h3>HINODE CENTER</h3></a>
                       </li>
                                               <li ><a href="https://grupohinode.com/hinode-center"
                           >Encontre uma Franquia</a>
                       </li>
                                          </ul>
                                       <ul>
                                                <li ><a href="http://hinodestore.com.br"
                            target="_blank" ><h3>HINODE STORE</h3></a>
                       </li>
                                          </ul>
                                       <ul>
                                                <li ><a href="https://issuu.com/grupohinodeoficial/docs/ciclo01_20_issu_v3"
                           ><h3>CATÁLOGO UNIVERSO HINODE</h3></a>
                       </li>
                                          </ul>
                                  </div>
                              <div class="col">
                <div class="info-footer">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/Group.Hinode/" target="_blank">
                                <img alt="" src="https://grupohinode.com/assets/website/images/icon-face-footer.png">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/grupohinodeoficial/" target="_blank">
                                <img alt="" src="https://grupohinode.com/assets/website/images/icon-insta-footer.png">
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/hinodeoficial" target="_blank">
                                <img alt="" src="https://grupohinode.com/assets/website/images/icon-twitter-footer.png">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/CANALHINODE" target="_blank">
                                <img alt="" src="https://grupohinode.com/assets/website/images/icon-youtube-footer.png">
                            </a>
                        </li>
                    </ul>
                    <div class="wrap-atendimento">
                        <h4>CANAIS DE ATENDIMENTO</h4>
                        <ul>
                            <li>
                                <a href="javascript:;" onclick="iniciarChatTipo1().addClass('open');">
                                    <img src="https://grupohinode.com/assets/website/images/bt-rodape-1.png" alt="">
                                    <span>E-MAIL</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" onclick="iniciarChatTipo1().addClass('open');">
                                    <img src="https://grupohinode.com/assets/website/images/bt-rodape-2.png" alt="">
                                    <span>CHAT</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;" onclick="$('.wrap-phone').slideToggle();$(this).toggleClass('selected')">
                                    <img src="https://grupohinode.com/assets/website/images/bt-rodape-3.png" alt="">
                                    <span>TELEFONE</span>
                                </a>
                            </li>
                        </ul>
                        <div class="wrap-phone">
                            <b>4020-2424 / 0800-1446633</b>
                            <p>Segunda a Sexta Feira das 09:00 às 21:00 <br/>e Sábado das 09:00 às 15:00.</p>
                        </div>
                    </div>
                    <a href="https://escritorio.hinode.com.br/login" target="_blank"
                       class="btn-default-transparent">VIRTUAL OFFICE</a>
                   </div>
               </div>
           </div>
       </nav>

   </div>
</footer>
<div class="copyright grid930">
    
    <div class="txt-copyright">
        <a href="/"><img src="https://grupohinode.com/assets/website/images/logo-hinode.png" alt=""></a>
        <p>Alameda Mamoré, 687 – Alphaville<br/>CEP: 06454-040 – Barueri/SP<br/>CNPJ: 43.606.714/0001-50</p>
    </div>
    <script type="text/javascript" async src="//b.smrk.io/jic/rr.php?b=6cfd2ecc531b0634774a1e65f52c19d087bc95ee"></script>
    <script type="text/javascript" src="https://hinode.teleperformance.com.br/HinodeWebApi/AppChat2/chatTP.js"></script>
    <!-- <a>Política de Privacidade</a> -->
</div>


    	
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.3.4/jquery.inputmask.bundle.min.js"></script>

        <script>
            $('#newsletter-register').submit(function (e) {
                e.preventDefault();
                var email = $(this).find('input[name=email]').val();
                axios.post('/newsletter/register', {email: email})
                    .then(function (response) {
                        swal({
                            title: 'Sucesso',
                            text: 'Email adicionado com sucesso',
                            icon: 'success'
                        });
                        console.log('success', response);
                    })
                    .catch(function (e) {
                        swal({
                            title: 'Erro',
                            text: "Não foi possível adicionar seu email a nossa newsletter.\n\nTente novamente mais tarde",
                            icon: 'error'
                        });
                        console.log('error', e);
                    });
                console.log($(this));
            });

            $(document).ready(function() {
                $('.product-list li a').click(function(){
                    var product_id = $(this).attr('data-product-id');
                    swal2({
                        customClass: 'form-product',
                         confirmButtonText:
                        'SEND',
                        html:
                        '<div class="modal">'+
                        '<h3>'+
                        'Thank you for choosing one of our products.<br /><br />Fill in the fields below so you can make your purchase through a Hinode consultant.' +
                        '</h3>' +
                        '<form id="product-form" >' +
                        '<input name="product_id" type="hidden" value="' + product_id + '">' +
                        '<input name="name" type="text" placeholder="Enter your name">' +
                        '<input name="email" type="text" placeholder="Enter your email address">' +
                        '<input name="phone" type="text" placeholder="Phone Number">'+
                        '<input name="zip_code" type="text" placeholder="ZIP Code">'+
                        '<select name="origin">' +
                                                    '<option value="0">How did you learn about us?</option>' +
                                                    '<option value="TV">TV</option>' +
                                                    '<option value="Rádio">Rádio</option>' +
                                                    '<option value="Mobiliário urbano">Mobiliário urbano</option>' +
                                                    '<option value="Revista">Revista</option>' +
                                                    '<option value="Outdoor">Outdoor</option>' +
                                                    '<option value="Internet">Internet</option>' +
                                                    '</select>' +
                        '</form>'+
                        '</div>',
                        preConfirm: function(){
                            swal({
                                title: 'Sending...',
                                text: 'Please wait...',
                                type: 'warning'
                            });

                            $.post('https://grupohinode.com/consultores-hinode/cadastrar', $('#product-form').serialize(), function(){
                                swal({
                                    title: 'Success',
                                    text: 'Product sent',
                                    type: 'success'
                                });
                            })
                                .fail(function () {
                                    swal({
                                        title: 'Error',
                                        text: 'Check your data',
                                        type: 'success'
                                    });
                                });
                        }

                    });
                });
            });
        </script>

        <!-- HTML5 modernizr -->
        <!--[if lt IE 9]>
        <script type="text/javascript"  src="/assets/js/plugins/modernizr.custom.js"></script>
        <![endif]-->
        <!--[if lt IE 8]>
        <![endif]-->
        <!--Fim dos arquivos Javascript-->
        <script src="../assets/website/js/app-20190411.js?v=123"></script>

    

<!-- Neoassist -->
<script type="text/javascript">
    (function() {
        window.NeoAssistTag = {};
        NeoAssistTag.querystring = true;
        NeoAssistTag.pageid = 'brasil';
        NeoAssistTag.clientdomain = 'hinode.neoassist.com';
        var na = document.createElement('script');
        na.type = 'text/javascript';
        na.async = true;
        na.src = '//cdn.atendimen.to/n.js?clientdomain='+NeoAssistTag.clientdomain;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(na, s);
    })();

    function iniciarChatTipo1() {
        var parametrosChat = { Tipo: "1"};
        chatTPIniciar(parametrosChat);
    }
</script>



	<script>
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        });
        $(document).ready(function(){
            $('.wrap-banner').slick({
                swipe: true,
                draggable: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 9999,
                        settings: "unslick"
                    },
                    {
                        breakpoint: 980,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    }
                ]
            });
            $('.historia-datas').slick({
                dots: false,
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,
                infinite: false,
                centerPadding: '40px',
                focusOnSelect: true,
                asNavFor: '.slider-datas-content'
            });
            $('.slider-content-multiplo').slick({
                arrows: false,
                dots: true,
                draggable: false,
                infinite: false
            });
            $('.slider-datas-content').slick({
                arrows: true,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3,
                infinite: false,
                centerPadding: 0,
                focusOnSelect: false,
                asNavFor: '.historia-datas',
                variableWidth: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                appendArrows: '.append-arrows-datas-content',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false
                        }
                    }]
            });
            $('.slider-premios').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: true,
                appendArrows: '.append-arrows-mkt',
                centerPadding: '45px',
                responsive: [
                    {
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });

        $('.menu-banner li').click(function(){
            thisIndex = $(this).index() + 1
            $('.wrap-banner div[class*="banner"]:nth-child('+thisIndex+')').fadeIn(200).siblings().hide();
            $(this).addClass('selected').siblings().removeClass('selected');
        });
	</script>
    <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"1b953179e8","applicationID":"114541227","transactionName":"ZwcHbUIFC0YDVENdX15NJFpEDQpbTUBSVkNZFgAXRAwAGAVFWEFA","queueTime":0,"applicationTime":191,"atts":"S0AEGwofGEg=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>