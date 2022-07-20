"use strict";(self.webpackChunkl10nmessages_website=self.webpackChunkl10nmessages_website||[]).push([[785],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3323:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={title:"Gradle"},o=void 0,l={unversionedId:"installation/gradle",id:"installation/gradle",title:"Gradle",description:"For Gradle the main steps are:",source:"@site/docs/installation/gradle.md",sourceDirName:"installation",slug:"/installation/gradle",permalink:"/l10nmessages/docs/installation/gradle",draft:!1,editUrl:"https://github.com/pinterest/l10nmessages/edit/main/docs/docs/installation/gradle.md",tags:[],version:"current",frontMatter:{title:"Gradle"},sidebar:"docs",previous:{title:"Bazel",permalink:"/l10nmessages/docs/installation/bazel"},next:{title:"Maven",permalink:"/l10nmessages/docs/installation/maven"}},s={},c=[{value:"JDK only",id:"jdk-only",level:2},{value:"With ICU4J",id:"with-icu4j",level:2}],p={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"Gradle")," the main steps are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add the runtime dependency with ",(0,a.kt)("inlineCode",{parentName:"li"},"implementation()")),(0,a.kt)("li",{parentName:"ul"},"Configure the annotation processor using ",(0,a.kt)("inlineCode",{parentName:"li"},"annotationProcessor()")),(0,a.kt)("li",{parentName:"ul"},"Register ",(0,a.kt)("inlineCode",{parentName:"li"},"properties")," files with the annotation processor to re-process files on changes")),(0,a.kt)("h2",{id:"jdk-only"},"JDK only"),(0,a.kt)("p",null,"The library is added for both runtime (",(0,a.kt)("inlineCode",{parentName:"p"},"implementation"),") and annotation processing\n",(0,a.kt)("inlineCode",{parentName:"p"},"annotationProcessor"),"."),(0,a.kt)("p",null,"The runtime library is added using ",(0,a.kt)("inlineCode",{parentName:"p"},"implementation")," entry the the annotation processor with\n",(0,a.kt)("inlineCode",{parentName:"p"},"annotationProcessor")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=build.gradle.kts",title:"build.gradle.kts"},'dependencies {\n    implementation("com.pinterest.l10nmessages:l10nmessages:0.1.0")\n    annotationProcessor("com.pinterest.l10nmessages:l10nmessages-proc:0.1.0")\n    annotationProcessor(files("src/main/resources/**/*.properties"))\n}\n')),(0,a.kt)("h2",{id:"with-icu4j"},"With ICU4J"),(0,a.kt)("p",null,'Same as "JDK only" and add the ',(0,a.kt)("inlineCode",{parentName:"p"},"icu4j")," dependency to both the annotation processor and runtime\ndependencies"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=build.gradle.kts",title:"build.gradle.kts"},'dependencies {\n    implementation("com.pinterest.l10nmessages:l10nmessages:0.1.0")\n    implementation("com.ibm.icu:icu4j:70.1")\n\n    annotationProcessor("com.pinterest.l10nmessages:l10nmessages-proc:0.1.0")\n    annotationProcessor("com.ibm.icu:icu4j:70.1")\n    annotationProcessor(files("src/main/resources/**/*.properties"))\n}\n')))}m.isMDXComponent=!0}}]);