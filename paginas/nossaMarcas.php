
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
    <link rel="shortcut icon" href="/assets/website/images/favicon.png">
    <script src="../assets/website/js/snazzy-info-window.js"></script>
    <title>Nossas marcas | Grupo Hinode</title>
<meta name="description" content="Conhe&ccedil;a as marcas que comp&otilde;em o Grupo Hinode.">
<link rel="canonical" href="https://grupohinode.com/marcas-da-hinode"/>
<meta property="og:title" content="Nossas marcas | Grupo Hinode" />
<meta property="og:description" content="Conhe&ccedil;a as marcas que comp&otilde;em o Grupo Hinode." />
<meta property="og:image" content="https://grupohinode.com/assets/website/images/grupo-hinode-fb-image.jpg" />

<meta name="twitter:title" content="Nossas marcas | Grupo Hinode" />
<meta name="twitter:description" content="Conhe&ccedil;a as marcas que comp&otilde;em o Grupo Hinode." />

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
               <li class='item-menu-main'>
              <a href="grupoHinode.php" class="link-menu-main">
                <span>O GRUPO HINODE</span>
              </a>
            </li>
            <li 
              class='item-menu-main selected'>
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
        	<div class="grid100 wrap-100-btn wrap-100-marca">
		<div class="item">
			<a href="#marca-hinode">
				<img src="https://grupohinode.com/assets/website//images/img-home-1.png" alt="">
				<p>VOCÊ PODE TUDO</p>
				<div class="btn-slide-down"></div>
			</a>
		</div>
		<div class="item">
			<a href="#marca-hnd">
				<img src="https://grupohinode.com/assets/website//images/img-home-2.png" alt="">
				<p>VIDA FUNCIONAL</p>
				<div class="btn-slide-down"></div>
			</a>
		</div>
	</div>
	<div class="wrap-nossas-marcas-txt">
		<p>O Grupo Hinode desenvolve produtos de altíssima qualidade em beleza e <br />bem estar e é uma empresa que valoriza e respeita um consumidor cada vez <br />mais exigente.</p>
	</div>

	<div class="wrap-voce-pode-tudo" id="marca-hinode" style="background-image: url(https://grupohinode.com/assets/website/images/bg-pode-tudo.png)">
    <div class="grid930">
        <img src="https://grupohinode.com/assets/website/images/logo-hinode-nossas.png" alt="">
        <div class="txt-wrap-pode-tudo">
            <h4>VOCÊ PODE TUDO</h4>
            <p>
                Você sabe né? Você sabe que tem um astral que chama a atenção e <br />
                contagia. Que o espelho não conta nem metade do seu poder. Que <br />
                a sua determinação é o seu melhor look. Que a sua iniciativa <br />
                conquista e que sua coragem brilha. Essa é a beleza de quem sabe <br />
                onde quer chegar, e como chegar lá. E o principal: que a cada vez <br />
                que redescobre sua independência, você reflete a melhor versão de <br />
                si mesma para todos a sua volta. E, quando isso acontece, acredite: <br />
                você cria a sua marca.
            </p>
            <div class="wrap-btns">
                                    <a href="https://hinode.com.br/" class="btn-default" target="_blank">CONHEÇA NOSSOS PRODUTOS</a>
                                    <a href="https://grupohinode.com/consultores-hinode" class="btn-default" target="_self">SEJA UM(A) CONSULTOR(A)</a>
                            </div>
        </div>
    </div>
</div>

<div class="wrap-marcas" id="marca-hinode">
    <div class="slider-brands">
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-femininos/adelaide" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/Adelaide-em-flor.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/emporio/por-marca/aroma-di" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/aromadi.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/divisao-tratamento/por-marca/lignea" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/CORPS.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/cuidados-pessoais/por-marca/dynamic" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/DYNAMIC.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-femininos/ella" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/ella.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-femininos/venyx" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/venyx.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-femininos/feelin" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/Feelin.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/produtos-para-os-cabelos/por-marca/h-expert" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/H-Expert.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/cuidados-pessoais/por-marca/hands" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/HANDS.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/divisao-tratamento/por-marca/hinode-men" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/Hinode-Men.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/cuidados-pessoais/por-marca/hinos-wonderful" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/hinos-wounderful.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hndoficial.com.br/" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/HND.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/cuidados-pessoais/por-marca/ileg" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/ileg.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-masculinos/inebriante" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/Inebriante.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/cuidados-pessoais/por-marca/joli" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/joli.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-masculinos/lattitude" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/Lattitude.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-femininos/leser" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/Leser.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-masculinos/grand" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/Grand.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/cuidados-pessoais/por-marca/pro" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/pro-white.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/cuidados-pessoais/por-marca/strax" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/strax.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/por-marca/spot" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/spot.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-masculinos/empire" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/empire.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-masculinos/enigma" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/enigma.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-femininos/hype" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/hype.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-femininos/dazzle" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/dazzle.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-femininos/eterna" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/eterna.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-femininos/grace" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/grace.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href=" https://hinode.com.br/c/fragrancias/fragrancias-femininos/rebelle" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/rebelle.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/cuidados-pessoais/por-marca/sens" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/sens.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/cuidados-pessoais/por-marca/pcpcleiton" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/solaris.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/cuidados-pessoais/por-marca/routine" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/routine.png" alt="">
                    </a>
                </div>
            </div>
                    <div class="">
                <div class="item-brand">
                    <a href="https://hinode.com.br/c/fragrancias/fragrancias-infantis/mania-de-alegria" target="_blank">
                        <img src="https://grupohinode.com/assets/website/images/marcas-hinode/mania.png" alt="">
                    </a>
                </div>
            </div>
            </div>
    <div class="arrows-brands"></div>
</div>

<div class="wrap-lancamento">
    <div class="slider-lancamentos">
                    <div class="slide bg-slide-fragrancia">
                <a href="https://hinode.com.br/c/fragrancias" target="_blank">
                    <h4 class="title-default">FRAGRÂNCIAS</h4>
                    <div class="btn-default">SAIBA MAIS</div>
                </a>
            </div>
                    <div class="slide bg-slide-maquiagem">
                <a href="https://hinode.com.br/c/produtos-de-maquiagem" target="_blank">
                    <h4 class="title-default">MAQUIAGEM</h4>
                    <div class="btn-default">CONHEÇA</div>
                </a>
            </div>
                    <div class="slide bg-slide-cuidados">
                <a href="https://hinode.com.br/c/produtos-cosmeticos-para-homens" target="_blank">
                    <h4 class="title-default">CUIDADOS PESSOAIS</h4>
                    <div class="btn-default">SAIBA MAIS</div>
                </a>
            </div>
                    <div class="slide bg-slide-emporio">
                <a href="https://hinode.com.br/c/produtos-para-bem-estar-em-casa" target="_blank">
                    <h4 class="title-default">EMPÓRIO</h4>
                    <div class="btn-default">CONHEÇA</div>
                </a>
            </div>
                    <div class="slide bg-slide-essencial">
                <a href="https://hinode.com.br/c/fragrancias/fragrancias-masculinos/grand" target="_blank">
                    <h4 class="title-default white">ESSENCIAL PARA HOMENS</h4>
                    <div class="btn-default">SAIBA MAIS</div>
                </a>
            </div>
            </div>
</div>

	<div class="wrap-voce-pode-tudo wrap-vida-funcional">
    <div class="grid930">
        <img src="https://grupohinode.com/assets/website/images/hnd.png" alt="">
        <div class="txt-wrap-pode-tudo">
            <h4>VIDA FUNCIONAL</h4>
            <p>
                Eu sou a minha força. Minha saúde depende só de mim. Sou eu, <br />
                minha consciência e minhas escolhas. E a cidade é o cenário de <br />
                cada desafio e cada conquista. Ativa é a minha rotina. E a <br />
                disposição a mais é para ir além. Alto, só o valor que dou para o <br />
                meu corpo. Fora isso, é tudo na medida. A medida certa de <br />
                energia para seguir em frente e chegar ainda mais longe.
            </p>
            <div class="wrap-btns">
                                    <a href="https://hndoficial.com.br" class="btn-default" target="_blank">CONHEÇA NOSSOS PRODUTOS</a>
                                    <a href="https://grupohinode.com/consultores-hinode" class="btn-default" target="_self">SEJA UM(A) CONSULTOR(A)</a>
                            </div>
        </div>
    </div>
</div>

<div class="wrap-lancamento marcas-hnd" id="marca-hnd">
    <div class="slider-lancamentos">
                    <div class="slide bg-slide-bem-estar">
                <a href="https://hndoficial.com.br/c/produtos-nutricosmeticos/por-tipo-de-produto/shake" target="_blank">
                    <h4>BEM-ESTAR</h4>
                    <div class="btn-default">SAIBA MAIS</div>
                </a>
            </div>
                    <div class="slide bg-slide-performance">
                <a href="https://hndoficial.com.br/c/produto-para-performance" target="_blank">
                    <h4>PERFORMANCE</h4>
                    <div class="btn-default">CONHEÇA</div>
                </a>
            </div>
            </div>
</div>
	<h3 class="title-default">PRÊMIOS</h3>
<div class="total-premios-marca">
    <div class="wrap-premios-marca">
                    <div class="slide premio-1"></div>
                    <div class="slide premio-2"></div>
                    <div class="slide premio-3"></div>
                    <div class="slide premio-4"></div>
                    <div class="slide premio-5"></div>
            </div>
    <div class="append-arrows"></div>
</div>

	<div class="wrap-destaque-txt">
    <div class="content">
        <h4 class="title-default">REVENDA NOSSOS PRODUTOS <br />E VENÇA JUNTO COM A GENTE</h4>
        <p>O Grupo Hinode possui duas marcas consolidadas no mercado cerca de 600 produtos, <br />
            dentre eles perfumaria, bem-estar, higiene pessoal,  maquiagem e cosméticos.<br />
            É um enorme portfólio para oferecer aos seus clientes os melhores produtos.</p>
        <a href="https://grupohinode.com/consultores-hinode" class="btn-default btn-default-consultor">QUERO SER UM(A) CONSULTOR(A)</a>
        <p class="disclaimer">
            Ainda está com dúvidas? Acesse as outras seções do site <br />para mais informações ou <a href="">encontre sua dúvida em Ajuda.</a><br /> Caso prefira, <a href="">converse com um de nossos consultores.</a>
        </p>
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
		$('.slider-lancamentos').slick({
			dots: true,
			infinite: true,
			arrows: false
		});
		$('.wrap-premios-marca').slick({
			dots: false,
			appendArrows: '.append-arrows',
			responsive: [
			{
				breakpoint: 980,
				settings: {
					arrows: false,
					dots: true
				}
			}]
		});

		$('.slider-brands').slick({
			dots: false,
			appendArrows: '.arrows-brands',
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 980,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						autoplaySpeed: 3000,
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
            ]
			
		});
	</script>
    <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"1b953179e8","applicationID":"114541227","transactionName":"ZwcHbUIFC0YDVENdX15NJFpEDQpbTUBSVkNZFgAXXxEXGABFVlpUQw==","queueTime":0,"applicationTime":152,"atts":"S0AEGwofGEg=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>