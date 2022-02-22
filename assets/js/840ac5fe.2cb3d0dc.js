"use strict";(self.webpackChunklaravel_time_series_docs=self.webpackChunklaravel_time_series_docs||[]).push([[92],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9468:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Query your projections",p={unversionedId:"getting-started/query-your-projections",id:"getting-started/query-your-projections",title:"Query your projections",description:"A projection is an Eloquent model and is queried the same way, but keep in mind that the projections are all stored in a single table called timeseriesprojections.",source:"@site/docs/getting-started/query-your-projections.md",sourceDirName:"getting-started",slug:"/getting-started/query-your-projections",permalink:"/laravel-time-series-docs/getting-started/query-your-projections",editUrl:"https://github.com/timothepearce/laravel-time-series-docs/docs/getting-started/query-your-projections.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Available events",permalink:"/laravel-time-series-docs/getting-started/available-events"}},c=[{value:"Query a named projection",id:"query-a-named-projection",children:[{value:"Using your projection class",id:"using-your-projection-class",children:[],level:3},{value:"Using the model relationship",id:"using-the-model-relationship",children:[],level:3},{value:"Using the parent class",id:"using-the-parent-class",children:[],level:3}],level:2},{value:"Restrict your query to a period",id:"restrict-your-query-to-a-period",children:[],level:2},{value:"Restrict your query to a key",id:"restrict-your-query-to-a-key",children:[],level:2},{value:"Query the projections between two dates",id:"query-the-projections-between-two-dates",children:[],level:2},{value:"Get and fill the missing projection between two dates",id:"get-and-fill-the-missing-projection-between-two-dates",children:[],level:2},{value:"Query a time series",id:"query-a-time-series",children:[{value:"The time series segment",id:"the-time-series-segment",children:[],level:3},{value:"Get a time series from the projection model",id:"get-a-time-series-from-the-projection-model",children:[],level:3},{value:"Convert a collection to a time series",id:"convert-a-collection-to-a-time-series",children:[],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-your-projections"},"Query your projections"),(0,a.kt)("p",null,"A projection is an Eloquent model and is ",(0,a.kt)("strong",{parentName:"p"},"queried the same way"),", but keep in mind that the projections are all stored in a single table called ",(0,a.kt)("inlineCode",{parentName:"p"},"time_series_projections"),"."),(0,a.kt)("p",null,"That means ",(0,a.kt)("strong",{parentName:"p"},"you'll have to use scope methods")," to get the correct projections regarding the period or even the key you defined earlier. "),(0,a.kt)("h2",{id:"query-a-named-projection"},"Query a named projection"),(0,a.kt)("p",null,"You can build your query in three different ways:"),(0,a.kt)("h3",{id:"using-your-projection-class"},"Using your projection class"),(0,a.kt)("p",null,"To query a projection with a specific name, use your projection class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"MyProjection::all();\n")),(0,a.kt)("p",null,"This query will return an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectionCollection")," collection, which will help you generate a ","[time series]","(/getting-started/query-your-projections#converts-your-projections-to-a-time series) if needed."),(0,a.kt)("h3",{id:"using-the-model-relationship"},"Using the model relationship"),(0,a.kt)("p",null,"Each projection has a ",(0,a.kt)("a",{parentName:"p",href:"https://laravel.com/docs/8.x/eloquent-relationships#many-to-many-polymorphic-relations"},"many to many (polymorphic)")," relationship with the bound model(s):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"MyModel::first()\n    ->projections(MyProjection::class)\n    ->get();\n")),(0,a.kt)("p",null,"Depending on the projection(s) you wish to query, the given parameter can also be ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," or an ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," of projections class names."),(0,a.kt)("h3",{id:"using-the-parent-class"},"Using the parent class"),(0,a.kt)("p",null,"As an alternative, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," scope method of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Projection")," class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use TimothePearce\\TimeSeries\\Models\\Projection;\n\nProjection::name(MyProjection::class)\n    ->get();\n")),(0,a.kt)("h2",{id:"restrict-your-query-to-a-period"},"Restrict your query to a period"),(0,a.kt)("p",null,"To restrict your query to a period use the ",(0,a.kt)("inlineCode",{parentName:"p"},"period")," scope method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"MyProjection::period('1 day')\n    ->get();\n")),(0,a.kt)("h2",{id:"restrict-your-query-to-a-key"},"Restrict your query to a key"),(0,a.kt)("p",null,"To restrict your query to a key use the ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," scope method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$teamId = Team::first()->id;\n\nMyProjection::key($teamId)\n    ->get();\n")),(0,a.kt)("h2",{id:"query-the-projections-between-two-dates"},"Query the projections between two dates"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MissingProjectionPeriodException")," exception will rise if you use the ",(0,a.kt)("inlineCode",{parentName:"p"},"between"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fillBetween")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"toTimeSeries")," method without specifying a period."))),(0,a.kt)("p",null,"When you want to query projections between two dates, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"between")," scope method with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Carbon $startDate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Carbon $endDate")," arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"MyProjection::period('1 day')\n    ->between(\n        today()->subDay(), // start date\n        today(), // end date\n    )\n    ->get();\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"between")," method parameters must be instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Illuminate\\Support\\Carbon")," class."),(0,a.kt)("p",null,"Each date is rounded to the floor by the given period, which means that you ",(0,a.kt)("strong",{parentName:"p"},"don't have to provide the exact dates"),", Time Series will do the maths for you."),(0,a.kt)("p",null,"Note that this method ",(0,a.kt)("strong",{parentName:"p"},"does not fill the missing projections")," between the given dates, instead it returns a query builder."),(0,a.kt)("h2",{id:"get-and-fill-the-missing-projection-between-two-dates"},"Get and fill the missing projection between two dates"),(0,a.kt)("p",null,"If you wish to obtain projections between two dates but also fill the missing ones, Time Series provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"fillBetween")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"MyProjection::period('1 day')\n    ->fillBetween(\n        today()->subDay(),\n        today(),\n    );\n")),(0,a.kt)("p",null,"It works the same way as the ",(0,a.kt)("inlineCode",{parentName:"p"},"between")," method but returns an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectionCollection")," class filled with ",(0,a.kt)("strong",{parentName:"p"},"a merge of the projections stored in your database and the missing ones"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultContent")," method from the projection queried will be use a fallback content value for the missing projections."),(0,a.kt)("h2",{id:"query-a-time-series"},"Query a time series"),(0,a.kt)("p",null,'Time Series defines a "time series" as the ',(0,a.kt)("strong",{parentName:"p"},"final representation of your projections' data"),", represented as an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"segments"),"."),(0,a.kt)("p",null,"Before going any further, let's look at how a ",(0,a.kt)("inlineCode",{parentName:"p"},"segment")," looks like."),(0,a.kt)("h3",{id:"the-time-series-segment"},"The time series segment"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"segment")," is a projection instance converted to an array with ",(0,a.kt)("strong",{parentName:"p"},"all the data you need to easily draw a chart"),"."),(0,a.kt)("p",null,"You can convert a instance of a projection with the ",(0,a.kt)("inlineCode",{parentName:"p"},"segment")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'$projection = MyProjection::period(\'1 day\')->first();\n\n$projection->toSegment();\n\n[\n    "projection_name" => "App\\Models\\Projections\\MyProjection"\n    "period" => "1 day",\n    "start_date" => "2022-01-06 00:00:00",\n    "end_date" => "2022-01-06 23:59:59",\n    "content" => [\n        "update_count" => 12\n    ]\n]\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"start_date")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"end_date")," let you ",(0,a.kt)("strong",{parentName:"p"},"plot your segment on a time axis"),", as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," array which is the entry point to all data stored by the projection. "),(0,a.kt)("h3",{id:"get-a-time-series-from-the-projection-model"},"Get a time series from the projection model"),(0,a.kt)("p",null,"To get a time series from a projection model, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"toTimeSeries")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"MyProjection::period('1 day')\n    ->toTimeSeries(\n        today()->subDay(),\n        today(),\n    );\n")),(0,a.kt)("p",null,"This method return a collection of ",(0,a.kt)("inlineCode",{parentName:"p"},"segments"),", ordered by date."),(0,a.kt)("h3",{id:"convert-a-collection-to-a-time-series"},"Convert a collection to a time series"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Note that the collection must be only filled with projections instances."))),(0,a.kt)("p",null,"If you previously queried a projections and get an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProjectionCollection"),", it is very likely that you want to convert the projections instances in ",(0,a.kt)("inlineCode",{parentName:"p"},"segments"),".\nTo do that, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"toSegments")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$projections = MyProjection::period('1 day')\n    ->fillBetween(\n        today()->subDay(),\n        today(),\n    );\n\n$projections->toSegments();\n")))}u.isMDXComponent=!0}}]);