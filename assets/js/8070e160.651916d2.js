"use strict";(self.webpackChunklaravel_time_series_docs=self.webpackChunklaravel_time_series_docs||[]).push([[651],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2257:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={},s="Quickstart",c={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"For the sake of understanding, the upcoming tutorial will focus on a trivial Projection's implementation. More advanced use cases will be documented soon.",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/laravel-time-series-docs/quickstart",editUrl:"https://github.com/timothepearce/laravel-time-series-docs/docs/quickstart.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",next:{title:"What is Time Series?",permalink:"/laravel-time-series-docs/getting-started/what-is-time-series"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Create your projection",id:"create-your-projection",children:[],level:2},{value:"Make your model projectable",id:"make-your-model-projectable",children:[],level:2},{value:"Implement your projection",id:"implement-your-projection",children:[],level:2},{value:"Hook the projection to your model",id:"hook-the-projection-to-your-model",children:[],level:2},{value:"Seed some data",id:"seed-some-data",children:[],level:2},{value:"Query your time series",id:"query-your-time-series",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart"},"Quickstart"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For the sake of understanding, the upcoming tutorial will focus on a trivial Projection's implementation. More advanced use cases will be documented soon."))),(0,a.kt)("p",null,"This tutorial will let you discover what Laravel Time Series can do for you in less than 10 minutes."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"We start by executing the following commands at ",(0,a.kt)("strong",{parentName:"p"},"the root directory")," of your Laravel app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"composer require timothepearce/laravel-time-series\n\nphp artisan migrate\n")),(0,a.kt)("h2",{id:"create-your-projection"},"Create your projection"),(0,a.kt)("p",null,"Next, we create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Projection"),", an Eloquent model with hidden capabilities we will explore in a minute."),(0,a.kt)("p",null,"In this example, we will project the ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," model but feel free to use any model you prefer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"php artisan make:projection UserProjection\n")),(0,a.kt)("h2",{id:"make-your-model-projectable"},"Make your model projectable"),(0,a.kt)("p",null,"Now let's add the ",(0,a.kt)("inlineCode",{parentName:"p"},"Projectable")," trait to the model and assign to the ",(0,a.kt)("inlineCode",{parentName:"p"},"$projections")," attribute an array containing the projection classes you just created"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app/Models/User.php" {10,12,13,14}',title:'"app/Models/User.php"',"{10,12,13,14}":!0},"...\n\nuse App\\Models\\Projections\\UserProjection;\nuse TimothePearce\\TimeSeries\\Projectable;\n\nclass User extends Authenticatable\n{\n    ...\n\n    use Projectable;\n\n    protected array $projections = [\n        UserProjection::class,\n    ];\n\n    ...\n}\n")),(0,a.kt)("h2",{id:"implement-your-projection"},"Implement your projection"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"You can define multiple periods which are documented in the ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/available-periods"},"available periods")," section."))),(0,a.kt)("p",null,"It's now time to implement the logic of your projection."),(0,a.kt)("p",null,"Start by defining the ",(0,a.kt)("inlineCode",{parentName:"p"},"$periods")," attribute and the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultContent")," method as following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app/Models/Projections/UserProjection.php" {8,10,11,12,13,14,15}',title:'"app/Models/Projections/UserProjection.php"',"{8,10,11,12,13,14,15}":!0},"...\n\nuse TimothePearce\\TimeSeries\\Contracts\\ProjectionContract;\nuse TimothePearce\\TimeSeries\\Models\\Projection;\n\nclass UserProjection extends Projection implements ProjectionContract\n{\n    public array $periods = ['1 hour'];\n\n    public function defaultContent(): array\n    {\n        return [\n            'users_count' => 0,\n        ];\n    }\n}\n")),(0,a.kt)("h2",{id:"hook-the-projection-to-your-model"},"Hook the projection to your model"),(0,a.kt)("p",null,"Then we will hook our Projection to our model by defining a ",(0,a.kt)("inlineCode",{parentName:"p"},"userCreated")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php",metastring:'title="app/Models/Projections/UserProjection.php" {7,8,9,10,11,12}',title:'"app/Models/Projections/UserProjection.php"',"{7,8,9,10,11,12}":!0},"...\n\nclass UserProjection extends Projection implements ProjectionContract\n{\n    ...\n\n    public function userCreated(array $content, User $user): array\n    {\n        return [\n            'users_count' => $content['users_count'] + 1,\n        ];\n    }\n}\n")),(0,a.kt)("p",null,"That's it! Every time a ",(0,a.kt)("inlineCode",{parentName:"p"},"User")," is created, a projection containing the ",(0,a.kt)("inlineCode",{parentName:"p"},"user_count")," value will be created (or updated) as well."),(0,a.kt)("p",null,"You get it, you can store anything you want in your projection and bind it to any Model events you're interested in! "),(0,a.kt)("h2",{id:"seed-some-data"},"Seed some data"),(0,a.kt)("p",null,"For the purpose of this example, we will generate fake data with Tinker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'php artisan tinker --execute="User::factory()->count(4)->create()"\n')),(0,a.kt)("h2",{id:"query-your-time-series"},"Query your time series"),(0,a.kt)("p",null,"Thanks to Eloquent and Time Series, we can fluently query your projection and convert it to obtain a time series:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use App\\Models\\Projections\\UserProjection;\n\nUserProjection::period('1 hour')\n    ->toTimeSeries(\n        now()->subDay(), // 2022-01-06 12:04:25\n        now(),           // 2022-01-07 12:04:25\n    );\n")),(0,a.kt)("p",null,"Based on the provided period and dates, this code will output a ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection")," filled with your projected data."),(0,a.kt)("p",null,"In case data is missing (no user has been created in the last 24 hours), Time Series will fill the missing projections with the default content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'TimothePearce\\TimeSeries\\Collections\\ProjectionCollection {\n    items: [\n        0 => [\n            "start_date" => "2022-01-06 12:00:00", // rounded to the floor given the \'1 hour\' period\n            "end_date" => "2022-01-06 12:59:59",\n            "content" => [\n                "users_count" => 0,\n            ]\n        ],\n\n        ...\n\n        22 => [\n            "start_date" => "2022-01-07 12:00:00",\n            "end_date" => "2022-01-07 12:59:59",\n            "content" => [\n                "users_count" => 4,\n            ]\n        ],\n    ],\n}\n')),(0,a.kt)("p",null,"This example walks you through the general structure of a Projection, now it's up to you to store the content of your choice from any model!"),(0,a.kt)("p",null,"You only scratched the surface of Laravel Time Series, if you want to know more about the use cases it can solve, read the ",(0,a.kt)("a",{parentName:"p",href:"/"},"What is Time Series?")," section."))}d.isMDXComponent=!0}}]);