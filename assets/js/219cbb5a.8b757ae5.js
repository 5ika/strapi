"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9150],{5880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(3117),i=(r(7294),r(3905));const o={title:"useFilter",description:"API reference for the useFilter hook in Strapi",tags:["hooks","helper-plugin","i18n"]},s=void 0,a={unversionedId:"docs/core/helper-plugin/hooks/use-filter",id:"docs/core/helper-plugin/hooks/use-filter",title:"useFilter",description:"API reference for the useFilter hook in Strapi",source:"@site/docs/docs/01-core/helper-plugin/hooks/use-filter.mdx",sourceDirName:"docs/01-core/helper-plugin/hooks",slug:"/docs/core/helper-plugin/hooks/use-filter",permalink:"/docs/core/helper-plugin/hooks/use-filter",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/helper-plugin/hooks/use-filter.mdx",tags:[{label:"hooks",permalink:"/tags/hooks"},{label:"helper-plugin",permalink:"/tags/helper-plugin"},{label:"i18n",permalink:"/tags/i-18-n"}],version:"current",frontMatter:{title:"useFilter",description:"API reference for the useFilter hook in Strapi",tags:["hooks","helper-plugin","i18n"]},sidebar:"docs",previous:{title:"useFetchClient",permalink:"/docs/core/helper-plugin/hooks/use-fetch-client"},next:{title:"Event Hub",permalink:"/docs/core/strapi/event-hub"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Typescript",id:"typescript",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides localized string search functionality that is useful for filtering or matching items in a list. Options can be\nprovided to adjust the sensitivity to case, diacritics, and other parameters."),(0,i.kt)("p",null,"Borrowed from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/i18n/src/useFilter.ts"},(0,i.kt)("inlineCode",{parentName:"a"},"react-aria")),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { useIntl } from 'react-intl';\nimport { useFilter } from '@strapi/helper-plugin';\n\nconst MyComponent = () => {\n  const { locale } = useIntl();\n\n  const fruits = ['orange', 'apple', 'kiwi', 'banana'];\n  const searchValue = 'an';\n\n  const { contains } = useFilter(locale, { sensitivity: 'base' });\n\n  /**\n   * This would render the list of fruits in the following order:\n   * orange\n   * banana\n   */\n  return (\n    <div>\n      {fruits\n        .filter((fruit) => includes(fruit, searchValue))\n        .map((fruit) => (\n          <h2 key={fruit}>{fruit}</h2>\n        ))}\n    </div>\n  );\n};\n")),(0,i.kt)("h2",{id:"typescript"},"Typescript"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Filter {\n  /** Returns whether a string starts with a given substring. */\n  startsWith(string: string, substring: string): boolean;\n  /** Returns whether a string ends with a given substring. */\n  endsWith(string: string, substring: string): boolean;\n  /** Returns whether a string contains a given substring. */\n  includes(string: string, substring: string): boolean;\n}\n\nfunction useFilter(locale: string, options?: Intl.CollatorOptions): Filter;\n")))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(r),g=i,h=f["".concat(l,".").concat(g)]||f[g]||u[g]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);