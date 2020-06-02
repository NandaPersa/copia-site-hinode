
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
    <title>Universidade Hinode | Grupo Hinode</title>
<meta name="description" content="Cursos, treinamentos, eventos e diversos conte&uacute;dos para seu aperfei&ccedil;oamento. Saiba tudo o que a Universidade Hinode pode oferecer a voc&ecirc;. Confira!">
<link rel="canonical" href="https://grupohinode.com/universidade-hinode"/>
<meta property="og:title" content="Universidade Hinode | Grupo Hinode" />
<meta property="og:description" content="Cursos, treinamentos, eventos e diversos conte&uacute;dos para seu aperfei&ccedil;oamento. Saiba tudo o que a Universidade Hinode pode oferecer a voc&ecirc;. Confira!" />
<meta property="og:image" content="https://grupohinode.com/assets/website/images/grupo-hinode-fb-image.jpg" />

<meta name="twitter:title" content="Universidade Hinode | Grupo Hinode" />
<meta name="twitter:description" content="Cursos, treinamentos, eventos e diversos conte&uacute;dos para seu aperfei&ccedil;oamento. Saiba tudo o que a Universidade Hinode pode oferecer a voc&ecirc;. Confira!" />

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
            <li 
              class='item-menu-main selected'>
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
        
    <div class="wrap-sub-menu">
    <nav class="grid1240">
        <ul class="list-sub-menu itens-center">
                            <li class="item-sub-menu"><a class="link-sub-menu" href="#conteudo">CONTEÚDO</a></li>
                            <li class="item-sub-menu"><a class="link-sub-menu" href="#perolas">PÉROLAS</a></li>
                            <li class="item-sub-menu"><a class="link-sub-menu" href="#cursos">CURSOS</a></li>
                    </ul>
    </nav>
</div>
    <div class="wrap-universidade-mkt">
    <section class="wrap-marketing">
                    <div class="slider-universidade-txt">
                <div class="item background-universidade background-universidade-slider-1">
                    <img src="https://grupohinode.com/assets/website/images/slider-universidade-1.png" alt="">
                    <div class="grid930">
                        <div class="content-txt">
                            <h2 class="title-slider-white">Aprenda com os <br/>melhores</h2>
                            <p class="txt-slider-white">Aqui você tem acesso aos conteúdos <br/>de treinamentos e cursos
                            para <br/>aprimorar suas técnicas de vendas.</p>
                            <a href="https://universidade.grupohinode.com" class="btn-default">ACESSE A UNIVERSIDADE HINODE</a>
                        </div>
                    </div>
                </div>
            </div>
                    <div class="slider-universidade-txt">
                <div class="item background-universidade background-universidade-slider-1">
                    <img src="https://grupohinode.com/assets/website/images/slider-universidade-3.png" alt="">
                    <div class="grid930">
                        <div class="content-txt">
                            <h2 class="title-slider-white">SEJA UM LÍDER <br/>DE SUCESSO</h2>
                            <p class="txt-slider-white">Oferecemos Cursos e Treinamentos <br/>que proporcionam seu
                            desenvolvimento <br/>pessoal e ferramentas para você <br/>desenvolver seu negócio</p>
                            <a href="https://universidade.grupohinode.com" class="btn-default">ACESSE A UNIVERSIDADE HINODE</a>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    <div class="append-arrows append-slider-marketing"></div>
</div>
    <div class="grid100 wrap-100-btn">
    <div class="item">
        <img class="img-university" src="https://grupohinode.com/assets/website/images/wrap-universidade-1.png" alt="">
        <div class="content-slide-txt">
            <h3>MISSÃO</h3>
            <p>Formar os maiores e melhores líderes da indústria do marketing multinível, por meio de um sistema de
                treinamento constante e atualizado.</p>
        </div>
    </div>
    <div class="item">
        <img class="img-university" src="https://grupohinode.com/assets/website/images/wrap-universidade-2.png" alt="">
        <div class="content-slide-txt">
            <h3>VISÃO</h3>
            <p>Ser a maior e mais flexível ferramenta global de ensino colaborativo e compartilhado das boas
                práticas da venda direta.</p>
        </div>
    </div>
</div>
    <div class="wrap-valores-solidos" style="background: #00002D;">
    <h4 class="title-default">CONSTRUÍDA COM <br/>VALORES SÓLIDOS</h4>
    <ul class="grid930">
                    <li>
                <h5>INOVAÇÃO</h5>
                <p>Processo contínuo de inovação, na busca das formas de ensino e aprendizagem mais diversas possíveis.</p>
            </li>
                    <li>
                <h5>ÉTICA</h5>
                <p>Acreditamos que liderança e valores são inseparáveis. A ética deve permear todos os campos da
                formação de um grande líder. Valores comunitários de respeito mútuo, integridade e honestidade devem
                estar presentes em todas as interações do aprendizado.</p>
            </li>
                    <li>
                <h5>COMPARTILHAMENTO</h5>
                <p>A UH é coletiva e interdependente e busca promover a socialização do saber. Só poderemos cumprir
                nossa missão se contarmos uns com os outros. Somente através de nosso compromisso pessoal de
                compartilhar nossas experiências poderemos criar o melhor ambiente, onde cada um poderá atingir todo
                o seu potencial.</p>
            </li>
            </ul>
</div>
    <section class="wrap-add-recent">
    <h3 class="title-default" id="conteudo">CONTEÚDO</h3>
    <p class="txt-section-default">Veja alguns vídeos.</p>
    <div class="grid940">
        <div class="list-videos-capacitacao">
            <div class="wrap-principal-video">
                <iframe src="https://www.youtube.com/embed/4CoEDySiALk" allowfullscreen class="principal-video"
                        data-url="4CoEDySiALk" data-time="18:31"
                        title="Treinamento com o Presidente Sandro Rodrigues"></iframe>
            </div>
            <div class="wrap-titulo-ytb">
                <p>Inscreva-se em nosso Canal.</p>2
                <script src="https://apis.google.com/js/platform.js"></script>
                <div class="wrap-yt-subscribe">
                    <div class="g-ytsubscribe ytsubscribe" data-channelid="UCSqcPzOr5qwwT4EkZvNSC6w"
                         data-layout="full" data-count="hidden"></div>
                </div>
            </div>
            <ul class="lista-videos">
                                    <li>
                        <a href="javascript:;" data-url="RzERacY9qS0" data-time="7:13">
                            <div class="wrap-image-principal">
                                <img src="https://i.ytimg.com/vi/RzERacY9qS0/mqdefault.jpg" alt="">
                            </div>
                            <p>Highlights Academia de Treinadores Out/2017</p>
                            <img src="https://grupohinode.com/assets/website/images/btn-play.png" alt="" class="btn-play">
                            <span class="info-time">7:13</span>
                        </a>
                    </li>
                                    <li>
                        <a href="javascript:;" data-url="mhvNteHwk6E" data-time="3:08">
                            <div class="wrap-image-principal">
                                <img src="https://i.ytimg.com/vi/mhvNteHwk6E/mqdefault.jpg" alt="">
                            </div>
                            <p>Diferenças entre Nutracêuticos e Nutricosméticos com Carol Mota</p>
                            <img src="https://grupohinode.com/assets/website/images/btn-play.png" alt="" class="btn-play">
                            <span class="info-time">3:08</span>
                        </a>
                    </li>
                                    <li>
                        <a href="javascript:;" data-url="VQn4LU6iOOk" data-time="2:49">
                            <div class="wrap-image-principal">
                                <img src="https://i.ytimg.com/vi/VQn4LU6iOOk/mqdefault.jpg" alt="">
                            </div>
                            <p>Conheça o Curso Mais e invista na sua carreira!</p>
                            <img src="https://grupohinode.com/assets/website/images/btn-play.png" alt="" class="btn-play">
                            <span class="info-time">2:49</span>
                        </a>
                    </li>
                                    <li>
                        <a href="javascript:;" data-url="L5N0OQNMpFw" data-time="9:14">
                            <div class="wrap-image-principal">
                                <img src="https://i.ytimg.com/vi/L5N0OQNMpFw/mqdefault.jpg" alt="">
                            </div>
                            <p>Informações sobre HND Alta Performance com Carol Mota</p>
                            <img src="https://grupohinode.com/assets/website/images/btn-play.png" alt="" class="btn-play">
                            <span class="info-time">9:14</span>
                        </a>
                    </li>
                                    <li>
                        <a href="javascript:;" data-url="tWSwW4QoOrk" data-time="23:01">
                            <div class="wrap-image-principal">
                                <img src="https://i.ytimg.com/vi/tWSwW4QoOrk/mqdefault.jpg" alt="">
                            </div>
                            <p>Treinamento com Evandro Viana</p>
                            <img src="https://grupohinode.com/assets/website/images/btn-play.png" alt="" class="btn-play">
                            <span class="info-time">23:01</span>
                        </a>
                    </li>
                                    <li>
                        <a href="javascript:;" data-url="WEYZfGa_rsk" data-time="2:40">
                            <div class="wrap-image-principal">
                                <img src="https://i.ytimg.com/vi/WEYZfGa_rsk/mqdefault.jpg" alt="">
                            </div>
                            <p>Shape & Stay - O segredo da sobrancelha perfeita.</p>
                            <img src="https://grupohinode.com/assets/website/images/btn-play.png" alt="" class="btn-play">
                            <span class="info-time">2:40</span>
                        </a>
                    </li>
                            </ul>
        </div>
    </div>
</section>
    <section class="wrap-perolas">
    <div class="grid930">
        <h3 class="title-default" id="perolas">PÉROLAS</h3>
        <iframe width="940" height="530" src="https://www.youtube.com/embed/5QjU5ChQ2_g" frameborder="0"
                gesture="media" allow="encrypted-media" allowfullscreen class="principal-video"></iframe>
        <a href="http://perolas.grupohinode.com" target="_blank" class="btn-default">SEJA UMA PÉROLA</a>
    </div>
</section>
    <h3 class="title-default" id="cursos">CURSOS</h3>
<section class="bg-cursos">
    <div class="grid930">
        <h4>Acompanhe nossos<br/>próximos cursos</h4>
        <p>Temos diversos cursos para otimizar as <br/>suas vendas e aumentar a sua rede.</p>
        <a href="https://escritorio.hinode.com.br/login" target="_blank" class="btn-default">CONHEÇA</a>
    </div>
</section>
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
        $(document).ready(function () {
            $('.wrap-marketing').slick({
                dots: false,
                appendArrows: '.append-slider-marketing',
                arrows: true,
                centerPadding: '45px',
                infinite: true,
                responsive: [
                    {
                        breakpoint: 980,
                        settings: {
                            arrows: false,
                            dots: true
                        }
                    },
                ]
            });
            $('a[href^="#"]').click(function () {
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            });
        });
        $('.lista-videos li a').click(function () {
            dstqVideo = $('.principal-video').attr('data-url');
            dstqTime = $('.principal-video').attr('data-time');
            videoAtual = $(this)
            videoAtualUrl = videoAtual.attr('data-url');
            contentTitleVideo = videoAtual.children('p').html();
            timeAtual = videoAtual.attr('data-time');

            videoAtual.attr('data-url', dstqVideo);

            console.log('timeAtual ' + timeAtual + ' | ' + 'dstqTime ' + dstqTime);

            videoAtual.attr('data-url', dstqVideo).attr('data-time', dstqTime).html('<img src="https://i.ytimg.com/vi/' + dstqVideo + '/mqdefault.jpg" alt="">').append('<p>' + $('.principal-video').attr('title') + '</p><img src="https://grupohinode.com/assets/website/images/btn-play.png" alt="" class="btn-play"><span class="info-time">' + dstqTime + '</span>');

            $('.wrap-principal-video').html('<iframe src="https://www.youtube.com/embed/' + videoAtualUrl + '?rel=0&autoplay=1" allowfullscreen class="principal-video" data-url="' + videoAtualUrl + '" data-time="' + timeAtual + '" title="' + contentTitleVideo + '"></iframe>');

        });
    </script>
    <script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"1b953179e8","applicationID":"114541227","transactionName":"ZwcHbUIFC0YDVENdX15NJFpEDQpbTUBSVkNZFgAXRQoMQwdFRF1ESUwMV1QBHQ==","queueTime":0,"applicationTime":178,"atts":"S0AEGwofGEg=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>