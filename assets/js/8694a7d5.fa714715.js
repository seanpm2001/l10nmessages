"use strict";(self.webpackChunkl10nmessages_website=self.webpackChunkl10nmessages_website||[]).push([[337],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>g});var t=a(7294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=t.createContext({}),m=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=m(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(a),g=s,c=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return a?t.createElement(c,i(i({ref:n},p),{},{components:a})):t.createElement(c,i({ref:n},p))}));function g(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var m=2;m<r;m++)i[m]=a[m];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2991:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var t=a(7462),s=(a(7294),a(3905));const r={title:"Fluent API"},i=void 0,o={unversionedId:"fluent-api",id:"fluent-api",title:"Fluent API",description:"The library provides a fluent API to load and format messages that is built on top of Java standard",source:"@site/docs/fluent-api.md",sourceDirName:".",slug:"/fluent-api",permalink:"/docs/fluent-api",draft:!1,editUrl:"https://github.com/pinterest/l10nmessages/edit/main/docs/docs/fluent-api.md",tags:[],version:"current",frontMatter:{title:"Fluent API"},sidebar:"docs",previous:{title:"Annotation Processor",permalink:"/docs/annotation-processor"},next:{title:"Caching",permalink:"/docs/caching"}},l={},m=[{value:"Create an <code>L10nMessages</code> instance",id:"create-an-l10nmessages-instance",level:2},{value:"With the annotation processor",id:"with-the-annotation-processor",level:3},{value:"Without the annotation processor",id:"without-the-annotation-processor",level:3},{value:"Specify a locale",id:"specify-a-locale",level:2},{value:"Formatting",id:"formatting",level:2},{value:"format()",id:"format",level:3},{value:"Argument names typing",id:"argument-names-typing",level:3},{value:"Base arguments",id:"base-arguments",level:3},{value:"Failure handling",id:"failure-handling",level:2},{value:"Customize formatting error handling",id:"customize-formatting-error-handling",level:3},{value:"Customize missing arguments handling",id:"customize-missing-arguments-handling",level:3},{value:"ICU4J, JDK or JDK with named arguments",id:"icu4j-jdk-or-jdk-with-named-arguments",level:2},{value:"Named vs. Numbered arguments",id:"named-vs-numbered-arguments",level:3},{value:"Named arguments with JDK MessageFormat",id:"named-arguments-with-jdk-messageformat",level:3}],p={toc:m};function u(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The library provides a fluent API to load and format messages that is built on top of Java standard\nlibraries. In addition to simplifying the overall setup, it brings strong typing and compile time\nchecks to the mix when used with the annotation processor."),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"L10nMessages.builder()")," to create instances. Ideally, use the annotation processor to make the\ninitialization ",(0,s.kt)("a",{parentName:"p",href:"#with-the-annotation-processor"},"simpler using the generated enum"),". Customize\n",(0,s.kt)("a",{parentName:"p",href:"#failure-handling"},'"failure handling"')," to add logging or to change default behaviors. Consider\nusing ",(0,s.kt)("a",{parentName:"p",href:"/docs/caching"},"caching")," when performance is sensitive. The builder can also be fully\n",(0,s.kt)("a",{parentName:"p",href:"#without-the-annotation-processor"},"configured manually")," if the annotation processor is not used."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"L10nMessages")," instance provides only one function ",(0,s.kt)("inlineCode",{parentName:"p"},"format()")," with different overloads for ease of\nuse. ",(0,s.kt)("inlineCode",{parentName:"p"},"format()")," takes care of loading the localized message from the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/resource-bundle"},"resource bundle")," for the ",(0,s.kt)("a",{parentName:"p",href:"#specify-a-locale"},"given locale"),". When required, it\nformats the message using the arguments passed to the function and the\n",(0,s.kt)("a",{parentName:"p",href:"#base-arguments"},"base arguments"),"."),(0,s.kt)("h2",{id:"create-an-l10nmessages-instance"},"Create an ",(0,s.kt)("inlineCode",{parentName:"h2"},"L10nMessages")," instance"),(0,s.kt)("h3",{id:"with-the-annotation-processor"},"With the annotation processor"),(0,s.kt)("p",null,"Create the ",(0,s.kt)("inlineCode",{parentName:"p"},"L10nMessages")," instance from the generated ",(0,s.kt)("inlineCode",{parentName:"p"},"enum")," using the ",(0,s.kt)("inlineCode",{parentName:"p"},"builder()"),". It will\nautomatically load the resource bundle ",(0,s.kt)("inlineCode",{parentName:"p"},"baseName")," and the type of ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageFormatAdapterProvider"),"\nthat were defined in the ",(0,s.kt)("inlineCode",{parentName:"p"},"@L10nProperties")," annotation."),(0,s.kt)("p",null,"The first argument of ",(0,s.kt)("inlineCode",{parentName:"p"},"format()")," function will now be\n",(0,s.kt)("a",{parentName:"p",href:"/docs/annotation-processor#enum-generated-by-the-annotation-processor"},"one of the enum values"),". This\nprovides the strong typing of the key and ensures that messages are present at build time."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\n@L10nProperties(baseName = "com.pinterest.l10nmessages.example.Messages")\nclass Example {\n\n  {\n    L10nMessages<Messages> m = L10nMessages.builder(Messages.class).build();\n    System.out.println(m.format(welcome));\n    // Welcome!\n  }\n}\n')),(0,s.kt)("h3",{id:"without-the-annotation-processor"},"Without the annotation processor"),(0,s.kt)("p",null,"Without the ",(0,s.kt)("inlineCode",{parentName:"p"},"enum")," generated by the annotation processor, the resource bundle ",(0,s.kt)("inlineCode",{parentName:"p"},"baseName")," must be\nprovided manually with ",(0,s.kt)("inlineCode",{parentName:"p"},"resourceBundleName()"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},"L10nMessages")," instance is manually typed.\n",(0,s.kt)("inlineCode",{parentName:"p"},"String")," is the most common type and is equivalent to the default Java support with a plain resource\nbundle."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'class Example {\n\n  {\n    L10nMessages<String> m =\n        L10nMessages.builder(String.class)\n            .resourceBundleName("com.pinterest.l10nmessages.example.Messages").build();\n    System.out.println(m.format("welcome"));\n  }\n}\n')),(0,s.kt)("p",null,"But the type can be any type that implements ",(0,s.kt)("inlineCode",{parentName:"p"},"toString()"),", for example a user defined enum:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'class Example {\n\n  enum MyEnum {\n    welcome,\n    welcome_user\n  }\n\n  {\n    L10nMessages<MyEnum> m =\n        L10nMessages.builder(MyEnum.class)\n            .resourceBundleName("com.pinterest.l10nmessages.example.Messages").build();\n    System.out.println(m.format(MyEnum.welcome));\n  }\n}\n')),(0,s.kt)("h2",{id:"specify-a-locale"},"Specify a locale"),(0,s.kt)("p",null,"The builder is created with the system locale: ",(0,s.kt)("inlineCode",{parentName:"p"},"Locale.getDefault()")," as default locale. The locale\ncan then be overridden using the ",(0,s.kt)("inlineCode",{parentName:"p"},"locale()"),". Changing the system locale after the builder has been\ncreated has no impact on the creation of ",(0,s.kt)("inlineCode",{parentName:"p"},"L10nMessages")," instance (since it was set when the builder\nwas created)."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"It is not possible to change the locale of the ",(0,s.kt)("inlineCode",{parentName:"p"},"L10nMessasges")," instance later, so it should be done\non on the builder.")),(0,s.kt)("p",null,"To specify the locale:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'class Example {\n\n  {\n    L10nMessages<Messages> m = L10nMessages.builder(Messages.class)\n        .locale(Locale.forLanguageTag("fr-FR")).build();\n\n    System.out.println(m.format(welcome));\n    // Bienvenue!\n  }\n}\n')),(0,s.kt)("h2",{id:"formatting"},"Formatting"),(0,s.kt)("p",null,"Formatting capabilities depends on which ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageFormat")," implementation is used, see\n",(0,s.kt)("a",{parentName:"p",href:"#icu4j-jdk-or-jdk-with-named-arguments"},"more details here"),". This section covers the basic usages of\n",(0,s.kt)("inlineCode",{parentName:"p"},"format()"),"."),(0,s.kt)("h3",{id:"format"},"format()"),(0,s.kt)("p",null,"The first argument of ",(0,s.kt)("inlineCode",{parentName:"p"},"format()")," is the key of the message to load and optionally format. When using\nthe enum, the key is typed accordingly."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"formatUntyped")," can be used to look up the message using an untyped String as the key."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"L10nMessages")," always use named arguments (even when working with plain JDK and with messages that\nhave numbered arguments). All arguments are provided as map entries. The ",(0,s.kt)("inlineCode",{parentName:"p"},"format()")," function has\noverloads to pass map entries or a full map."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties",metastring:"properties title=src/resources/java/com/pinterest/l10nmessages/example/Messages.properties",properties:!0,title:"src/resources/java/com/pinterest/l10nmessages/example/Messages.properties"},"welcome_user=Welcome {username}!\nwelcome_user_numbered=Welcome {0}!\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'class Example {\n\n  {\n    L10nMessages<Messages> m = L10nMessages.builder(Messages.class).build();\n\n    // format with map entries\n    System.out.println(m.format(welcome_user, "username", "Bob"));\n\n    // format with a map of arguments\n    System.out.println(m.format(welcome_user, ImmutableMap.of("username", "Bob")));\n\n    // Numbered arguments are referenced by name as any other arguments\n    System.out.println(m.format(welcome_user_numbered, "0", "Bob"));\n\n    // It is possible to load a message with an untyped key\n    System.out.println(m.formatUntyped("welcome_user", ImmutableMap.of("username", "Bob")));\n  }\n}\n\n')),(0,s.kt)("p",null,"Check ",(0,s.kt)("a",{parentName:"p",href:"/docs/icu4j"},"ICU4J")," for advance formatting."),(0,s.kt)("h3",{id:"argument-names-typing"},"Argument names typing"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"enumType = WITH_ARGUMENT_BUILDERS"),' to generate additional "argument builders" / ',(0,s.kt)("inlineCode",{parentName:"p"},"FormatContext"),"\nin the ",(0,s.kt)("inlineCode",{parentName:"p"},"enum"),". These provide strong typing on the argument names yet keeping a compact syntax."),(0,s.kt)("p",null,"Use the function ",(0,s.kt)("inlineCode",{parentName:"p"},"Message.welcome_user()")," to obtain the builder and then call the argument setter\n",(0,s.kt)("inlineCode",{parentName:"p"},'username("Mary")'),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\n@L10nProperties(\n    baseName = "com.pinterest.l10nmessages.example.Messages",\n    enumType = EnumType.WITH_ARGUMENT_BUILDERS)\npublic class Example {\n\n  {\n    // Format using an "argument builder" / FormatContext\n    m.format(welcome_user().username("Mary"));\n  }\n}\n')),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The enum value: ",(0,s.kt)("inlineCode",{parentName:"p"},"Message.welcome_user")," references the key, while the method:\n",(0,s.kt)("inlineCode",{parentName:"p"},"Message.welcome_user()")," creates an argument builder / ",(0,s.kt)("inlineCode",{parentName:"p"},"FormatContext"),"."),(0,s.kt)("p",{parentName:"admonition"},"Both style of ",(0,s.kt)("inlineCode",{parentName:"p"},"format()")," functions can be used at the same time for a same message."),(0,s.kt)("p",{parentName:"admonition"},"No builder will be generated for messages with no arguments. Only the ",(0,s.kt)("inlineCode",{parentName:"p"},"key")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"enum")," will be\ngenerated.")),(0,s.kt)("h3",{id:"base-arguments"},"Base arguments"),(0,s.kt)("p",null,"If multiple messages have the same arguments, having to provide them through the ",(0,s.kt)("inlineCode",{parentName:"p"},"format()"),' every\nsingle time can be cumbersome. Instead, "base" arguments can be defined on the ',(0,s.kt)("inlineCode",{parentName:"p"},"L10nMessages"),"\ninstance. Arguments provided to the ",(0,s.kt)("inlineCode",{parentName:"p"},"format()")," override the base arguments."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'class Example {\n\n  {\n    L10nMessages<Messages> m = L10nMessages.builder(Messages.class)\n        .baseArguments(ImmutableMap.of("username", "Mary")).build();\n\n    System.out.println(m.format(welcome_user));\n    // Welcome Mary!\n\n    System.out.println(m.format(bye_user));\n    // Bye Mary...\n\n    System.out.println(m.format(bye_user, "username", "Bob"));\n    // Bye Bob...\n  }\n}\n\n')),(0,s.kt)("h2",{id:"failure-handling"},"Failure handling"),(0,s.kt)("p",null,"In plain Java, following cases will throw an exception and, most likely cause a hard failure at the\napplication level:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"trying to get a resource bundle with no matching properties file"),(0,s.kt)("li",{parentName:"ul"},"looking up for a message using a missing key in a resource bundle"),(0,s.kt)("li",{parentName:"ul"},"trying to create a ",(0,s.kt)("inlineCode",{parentName:"li"},"MessageFormat")," with an invalid message"),(0,s.kt)("li",{parentName:"ul"},"formatting a message with invalid arguments")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"L10nMessages")," will instead, by default, gracefully fail by showing the broken message or the\nmissing key. Use ",(0,s.kt)("inlineCode",{parentName:"p"},"OnFormatErrors.RETHROW")," to propagate exceptions if wanted."),(0,s.kt)("p",null,"On the other hand, in plain Java, missing arguments when formatting a message are not causing an\nexception, and the rendered string just contains the original placeholder untouched."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"L10nMessages")," keeps that behavior as default to be consistent with other formatting issues. It is\npossible to raise an exception instead using ",(0,s.kt)("inlineCode",{parentName:"p"},"OnMissingArguments.THROW")," if hard failure are wanted."),(0,s.kt)("p",null,"Note that when using the annotation processor's default configuration with properties backed\nresource bundle, the invalid messages will be identified at compile time. Missing keys should be\navoided by using the enum."),(0,s.kt)("h3",{id:"customize-formatting-error-handling"},"Customize formatting error handling"),(0,s.kt)("p",null,"The behavior can be customized by providing a customized ",(0,s.kt)("inlineCode",{parentName:"p"},"OnFormatError")," implementation. This\nexample adds logging to the default behavior that fallbacks to the key or the message."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'class Example {\n\n  {\n    L10nMessages<Messages> m = L10nMessages.builder(Messages.class)\n        .messageFormatAdapterProvider(JDK)\n        .onFormatError(\n            (throwable, baseName, key, message) -> {\n              logger.severe(\n                  String.format(\n                      "Can\'t format message for baseName: `%1$s`, key: `%2$s` and message: `%3$s`",\n                      baseName,\n                      key,\n                      message));\n              return OnFormatErrors.MESSAGE_FALLBACK.apply(throwable, baseName, key, message);\n            }).build();\n\n    String format = m.formatUntyped("missing_key", ImmutableMap.of());\n    // SEVERE: Can\'t format message for baseName: `com.pinterest.l10nmessages.example.Messages`, key: `missing_key` and message: `null`\n    System.out.println(format);\n    // missing_key\n\n    String invalidMessage = m.format(welcome, ImmutableMap.of("username", "Mary"));\n    // SEVERE: Can\'t format message for baseName: `com.pinterest.l10nmessages.example.Messages`, key: `welcome` and message: `Welcome {username}!`\n    System.out.println(invalidMessage);\n    // Welcome {username}!\n  }\n}\n')),(0,s.kt)("h3",{id:"customize-missing-arguments-handling"},"Customize missing arguments handling"),(0,s.kt)("p",null,"The behavior can be customized by providing a customized ",(0,s.kt)("inlineCode",{parentName:"p"},"onMissingArgument")," implementation. This\nexample adds logging to the default behavior. It is possible to replace the argument by returning an\n",(0,s.kt)("inlineCode",{parentName:"p"},"Optional")," with the replacement value."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'class Example {\n\n  {\n    L10nMessages<Messages> m =\n        L10nMessages.builder(Messages.class)\n            .onMissingArgument((baseName, key, argumentName) -> {\n              logger.severe(\n                  String.format("Argument: `%3$s` missing for baseName: `%1$s` and key: `%2$s`",\n                      baseName, key, argumentName));\n              return OnMissingArguments.NOOP.apply(baseName, key, argumentName);\n            }).build();\n    System.out.println(m.format(connected_to, "username", "Mary"));\n    // SEVERE: Argument: `username2` missing for baseName: `com.pinterest.l10nmessages.example.Messages` and key: `connected_to`\n    // Mary is connected to {username2}\n  }\n}\n\n')),(0,s.kt)("h2",{id:"icu4j-jdk-or-jdk-with-named-arguments"},"ICU4J, JDK or JDK with named arguments"),(0,s.kt)("p",null,"By default, the fluent API\n(",(0,s.kt)("a",{parentName:"p",href:"/docs/annotation-processor#icu4j-jdk-or-jdk-with-named-arguments"},"as the annotation processor"),") will use\nICU4J if it is available. If not, it will use the JDK extended with\n",(0,s.kt)("a",{parentName:"p",href:"/docs/fluent-api#named-arguments-with-jdk-messageformat"},"named arguments")," support."),(0,s.kt)("p",null,"When initialized from the ",(0,s.kt)("inlineCode",{parentName:"p"},"enum"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"L10nMessages")," will use the same ",(0,s.kt)("inlineCode",{parentName:"p"},"messageFormatAdapterProvider"),"\nthat was used by the annotation processor."),(0,s.kt)("p",null,"To provide a custom implementation:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'class Example {\n\n  {\n    L10nMessages<Messages> m =\n        L10nMessages.builder(Messages.class)\n            .messageFormatAdapterProvider(\n                (message, locale) -> {\n                  logger.info("Using named argument with JDK");\n                  return JDK_NAMED_ARGS.get(message, locale);\n                }).build();\n\n    System.out.println(m.format(welcome_user, "username", "Mary"));\n    // INFO: Using named argument with JDK...\n    // Welcome Mary!\n  }\n}\n')),(0,s.kt)("h3",{id:"named-vs-numbered-arguments"},"Named vs. Numbered arguments"),(0,s.kt)("p",null,"Plain JDK ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageFormat")," only support numbered arguments."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties",metastring:"title=src/resources/java/com/pinterest/l10nmessages/example/Messages.properties",title:"src/resources/java/com/pinterest/l10nmessages/example/Messages.properties"},"welcome_user=Welcome {0}!\n")),(0,s.kt)("p",null,"ICU4J on ther other hand supports both numbered arguments and named arguments"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-properties",metastring:"title=src/resources/java/com/pinterest/l10nmessages/example/MessagesNamed.properties",title:"src/resources/java/com/pinterest/l10nmessages/example/MessagesNamed.properties"},"welcome_user=Welcome {username}!\n")),(0,s.kt)("h3",{id:"named-arguments-with-jdk-messageformat"},"Named arguments with JDK MessageFormat"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"L10nMessages")," provides a lightweight extension to support named arguments on top JDK\n",(0,s.kt)("inlineCode",{parentName:"p"},"MessageFormat"),"s."),(0,s.kt)("p",null,"If you can't or don't wish to integrate with ICU4J because of its size or dependencies but still\nwant named arguments, this is an interesting trade off."),(0,s.kt)("p",null,"By default, the library will use ",(0,s.kt)("inlineCode",{parentName:"p"},"JDK with named argument")," if ",(0,s.kt)("inlineCode",{parentName:"p"},"ICU4J")," is not used. To use plain\n",(0,s.kt)("inlineCode",{parentName:"p"},"JDK")," usually set the ",(0,s.kt)("inlineCode",{parentName:"p"},"messageFormatAdapterProviders")," at the annotation level to get the proper\nmessage format validation."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\n@L10nProperties(\n    baseName = "com.pinterest.l10nmessages.example.Messages",\n    messageFormatAdapterProviders = MessageFormatAdapterProviders.JDK)\nclass Example {\n\n  {\n    L10nMessages<MessagesNamed> m = L10nMessages.builder(Messages.class).build();\n    System.out.println(m.format(MessagesNamed.welcome_user, "0", "Mary"));\n  }\n}\n')),(0,s.kt)("p",null,"Or just set it up on the builder"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'class Example {\n\n  {\n    L10nMessages<String> m = L10nMessages.<String>builder()\n        .resourceBundleName("com.pinterest.l10nmessages.example.Messages")\n        .messageFormatAdapterProvider(MessageFormatAdapterProviders.JDK)\n        .build();\n    System.out.println(m.format("welcome_user", "0", "Mary"));\n  }\n}\n')),(0,s.kt)("admonition",{title:"Also works as an independent formatter Just looking for message formatting with named",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"arguments in Java?"),(0,s.kt)("p",{parentName:"admonition"},"The formatter can be used directly and since the library is lightweight and has no dependencies that\ncan be a good option."),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-java"},'class Example {\n\n  {\n    MessageFormatAdapter mf =\n        MessageFormatAdapterProviders.JDK_NAMED_ARGS.get("Welcome {username}", Locale.ROOT);\n    System.out.println(mf.format(ImmutableMap.of("username", "Mary")));\n  }\n}\n'))))}u.isMDXComponent=!0}}]);