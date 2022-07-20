"use strict";(self.webpackChunkl10nmessages_website=self.webpackChunkl10nmessages_website||[]).push([[101],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,g=u["".concat(o,".").concat(d)]||u[d]||m[d]||s;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=u;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<s;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3683:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const s={title:"Bazel"},l=void 0,i={unversionedId:"installation/bazel",id:"installation/bazel",title:"Bazel",description:"For Bazel main steps are:",source:"@site/docs/installation/bazel.md",sourceDirName:"installation",slug:"/installation/bazel",permalink:"/l10nmessages/docs/installation/bazel",draft:!1,editUrl:"https://github.com/pinterest/l10nmessages/edit/main/docs/docs/installation/bazel.md",tags:[],version:"current",frontMatter:{title:"Bazel"},sidebar:"docs",previous:{title:"Installation",permalink:"/l10nmessages/docs/installation/"},next:{title:"Gradle",permalink:"/l10nmessages/docs/installation/gradle"}},o={},p=[{value:"JDK only",id:"jdk-only",level:2},{value:"With ICU4J",id:"with-icu4j",level:2},{value:"External dependencies",id:"external-dependencies",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"Bazel")," main steps are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add ",(0,r.kt)("a",{parentName:"li",href:"#external-dependencies"},"external dependencies"),", for example using ",(0,r.kt)("inlineCode",{parentName:"li"},"rules_jvm_external")),(0,r.kt)("li",{parentName:"ul"},"Register ",(0,r.kt)("inlineCode",{parentName:"li"},"properties")," files using a ",(0,r.kt)("inlineCode",{parentName:"li"},"filegroup")),(0,r.kt)("li",{parentName:"ul"},"Configure the annotation processor using a ",(0,r.kt)("inlineCode",{parentName:"li"},"java_plugin")),(0,r.kt)("li",{parentName:"ul"},"Add a Java rule with ",(0,r.kt)("inlineCode",{parentName:"li"},"java_binary")," to build the application")),(0,r.kt)("h2",{id:"jdk-only"},"JDK only"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"filegroup")," to register the properties files that you wish to use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=BUILD",title:"BUILD"},'filegroup(\n    name="l10nresources",\n    srcs=glob(["src/main/resources/**/*.properties"])\n)\n')),(0,r.kt)("p",null,"Use a ",(0,r.kt)("inlineCode",{parentName:"p"},"java_plugin")," to configure the annotation processor that processes the registered properties\nfiles"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=BUILD",title:"BUILD"},'java_plugin(\n    name="l10nmessages_proc",\n    processor_class="com.pinterest.l10nmessages.L10nPropertiesProcessor",\n    deps=[\n        "@maven//:com_pinterest_l10nmessages_l10nmessages_proc",\n        "@maven//:com_pinterest_l10nmessages_l10nmessages"\n    ],\n    resources=["l10nresources"]\n)\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"java_binary"),", add the resources previously define in ",(0,r.kt)("inlineCode",{parentName:"p"},"resources"),", register the annotation\nprocessor in ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," and finally add a dependency on the library runtime in ",(0,r.kt)("inlineCode",{parentName:"p"},"deps")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=BUILD",title:"BUILD"},'java_binary(\n    name="l10nbazel",\n    srcs=glob(["src/main/java/**/*.java"]),\n    resources=["l10nresources"],\n    plugins=["l10nmessages_proc"],\n    deps=[\n        "@maven//:com_pinterest_l10nmessages_l10nmessages"\n    ],\n    main_class="com.pinterest.l10nmessages.example.Application",\n)\n')),(0,r.kt)("h2",{id:"with-icu4j"},"With ICU4J"),(0,r.kt)("p",null,'Same as "JDK only" and add the ',(0,r.kt)("inlineCode",{parentName:"p"},"icu4j")," dependency to both the annotation processor and runtime\ndependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title=BUILD",title:"BUILD"},'\nfilegroup(\n    name="l10nresources",\n    srcs=glob(["src/main/resources/**/*.properties"])\n)\n\njava_plugin(\n    name="l10nmessages_proc",\n    processor_class="com.pinterest.l10nmessages.L10nPropertiesProcessor",\n    deps=[\n        "@maven//:com_pinterest_l10nmessages_l10nmessages_proc",\n        "@maven//:com_pinterest_l10nmessages_l10nmessages",\n        "@maven//:com_ibm_icu_icu4j"\n    ],\n    resources=["l10nresources"]\n)\n\njava_binary(\n    name="l10nbazel",\n    srcs=glob(["src/main/java/**/*.java"]),\n    resources=["l10nresources"],\n    plugins=["l10nmessages_proc"],\n    deps=[\n        "@maven//:com_pinterest_l10nmessages_l10nmessages",\n        "@maven//:com_ibm_icu_icu4j"\n    ],\n    main_class="com.pinterest.l10nmessages.example.Application",\n)\n')),(0,r.kt)("h2",{id:"external-dependencies"},"External dependencies"),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bazelbuild/rules_jvm_external"},"rules_jvm_external")," to fetch external\ndependencies from Maven."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"WORKSPACE",WORKSPACE:!0},'RULES_JVM_EXTERNAL_TAG = "4.2"\nRULES_JVM_EXTERNAL_SHA = "cd1a77b7b02e8e008439ca76fd34f5b07aecb8c752961f9640dea15e9e5ba1ca"\n\nhttp_archive(\n    name = "rules_jvm_external",\n    strip_prefix = "rules_jvm_external-%s" % RULES_JVM_EXTERNAL_TAG,\n    sha256 = RULES_JVM_EXTERNAL_SHA,\n    url = "https://github.com/bazelbuild/rules_jvm_external/archive/%s.zip" % RULES_JVM_EXTERNAL_TAG,\n)\n\nload("@rules_jvm_external//:defs.bzl", "maven_install")\n\nmaven_install(\n    artifacts = [\n        "com.ibm.icu:icu4j:70.1"\n        "com.pinterest.l10nmessages:l10nmessages:0.1.0"\n        "com.pinterest.l10nmessages:l10nmessages-proc:0.1.0"\n    ],\n    repositories = [\n        "https://repo1.maven.org/maven2",\n    ],\n)\n')))}m.isMDXComponent=!0}}]);