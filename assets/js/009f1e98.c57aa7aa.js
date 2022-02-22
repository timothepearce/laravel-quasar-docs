"use strict";(self.webpackChunklaravel_time_series_docs=self.webpackChunklaravel_time_series_docs||[]).push([[436],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2783:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={},u="Configuration",s={unversionedId:"getting-started/configuration",id:"getting-started/configuration",title:"Configuration",description:"Publish the config file",source:"@site/docs/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/laravel-time-series-docs/getting-started/configuration",editUrl:"https://github.com/timothepearce/laravel-time-series-docs/docs/getting-started/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/laravel-time-series-docs/getting-started/installation"},next:{title:"Make a model projectable",permalink:"/laravel-time-series-docs/getting-started/make-a-model-projectable"}},c=[{value:"Publish the config file",id:"publish-the-config-file",children:[],level:2},{value:"Set up your model namespace",id:"set-up-your-model-namespace",children:[],level:2},{value:"Enable the queue",id:"enable-the-queue",children:[],level:2},{value:"Dispatch your jobs to a specific queue",id:"dispatch-your-jobs-to-a-specific-queue",children:[],level:2},{value:"Set up the first day of the week",id:"set-up-the-first-day-of-the-week",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("h2",{id:"publish-the-config-file"},"Publish the config file"),(0,a.kt)("p",null,"You can publish the config file by executing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'php artisan vendor:publish --tag="time-series-config"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"time-series.php")," file is then accessible in the config folder at the root level."),(0,a.kt)("p",null,"This is the default content of the config file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Carbon\\CarbonInterface;\n\nreturn [\n\n    /*\n     * Your models' namespace.\n     */\n    'models_namespace' => 'App\\\\Models',\n\n    /*\n     * When enabled, Time Series will process the projections on a queue.\n     */\n    'queue' => false,\n\n    /*\n     * The specific queue name used by Time Series.\n     * Leave empty to use the default queue.\n     */\n    'queue_name' => '',\n\n    /*\n     * The first day of the week.\n     */\n    'beginning_of_the_week' => CarbonInterface::MONDAY,\n];\n")),(0,a.kt)("h2",{id:"set-up-your-model-namespace"},"Set up your model namespace"),(0,a.kt)("p",null,"By default, Time Series will resolve your model's namespace following the Laravel conventions: ",(0,a.kt)("inlineCode",{parentName:"p"},"App\\Models"),"."),(0,a.kt)("p",null,"You can overwrite this behavior by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"models_namespace")," attributes to something else."),(0,a.kt)("h2",{id:"enable-the-queue"},"Enable the queue"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Make sure the queues are set up correctly at the ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/queues#running-the-queue-worker"},"framework level")," before enabling this option."))),(0,a.kt)("p",null,"Time Series can compute your projections in background jobs by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"enable_queue")," attribute to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)("p",null,"When enabled, each projection will be created/updated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TimothePearce\\TimeSeries\\Jobs\\ComputeProjection")," job."),(0,a.kt)("h2",{id:"dispatch-your-jobs-to-a-specific-queue"},"Dispatch your jobs to a specific queue"),(0,a.kt)("p",null,"If you enabled the queue, Time Series would use the default one unless you provide something else to the ",(0,a.kt)("inlineCode",{parentName:"p"},"queue_name")," attribute."),(0,a.kt)("h2",{id:"set-up-the-first-day-of-the-week"},"Set up the first day of the week"),(0,a.kt)("p",null,"The day defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"beginning_of_the_week")," attribute will be used to resolve the ",(0,a.kt)("inlineCode",{parentName:"p"},"start_date")," of the weekly Projections.  By default, this attribute is set up on Monday."))}d.isMDXComponent=!0}}]);