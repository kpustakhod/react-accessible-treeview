"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[148],{5804:function(e,n,t){t.r(n),t.d(n,{assets:function(){return w},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return b},metadata:function(){return h},toc:function(){return g}});var a=t(7462),s=t(3366),c=t(7294),i=t(3905),r=t(148),o=(0,r.fK)({name:"",children:[{name:"src",children:[{name:"index.js"},{name:"styles.css"}]},{name:"node_modules",children:[{name:"react-accessible-treeview",children:[{name:"bundle.js"}]},{name:"react",children:[{name:"bundle.js"}]}]},{name:".npmignore"},{name:"package.json"},{name:"webpack.config.js"}]}),l=function(){return c.createElement(r.ZP,{data:o,className:"basic","aria-label":"basic example tree",nodeRenderer:function(e){var n=e.element,t=e.getNodeProps,s=e.level;e.handleSelect;return c.createElement("div",(0,a.Z)({},t(),{style:{paddingLeft:20*(s-1)}}),n.name)}})},d='import React from "react";\nimport TreeView, { flattenTree } from "react-accessible-treeview";\nimport "./styles.css";\n\nconst folder = {\n  name: "",\n  children: [\n    {\n      name: "src",\n      children: [{ name: "index.js" }, { name: "styles.css" }],\n    },\n    {\n      name: "node_modules",\n      children: [\n        {\n          name: "react-accessible-treeview",\n          children: [{ name: "bundle.js" }],\n        },\n        { name: "react", children: [{ name: "bundle.js" }] },\n      ],\n    },\n    {\n      name: ".npmignore",\n    },\n    {\n      name: "package.json",\n    },\n    {\n      name: "webpack.config.js",\n    },\n  ],\n};\n\nconst data = flattenTree(folder);\n\nconst BasicTreeView = () => (\n  <TreeView\n    data={data}\n    className="basic"\n    aria-label="basic example tree"\n    nodeRenderer={({ element, getNodeProps, level, handleSelect }) => (\n      <div {...getNodeProps()} style={{ paddingLeft: 20 * (level - 1) }}>\n        {element.name}\n      </div>\n    )}\n  />\n);\n\nexport default BasicTreeView;\n',m=t(3952),p=t(2805),u=["components"],b={title:"Basic"},f=void 0,h={unversionedId:"examples-Basic",id:"examples-Basic",title:"Basic",description:"The simplest instance of the component, a good base on which a custom component can be built.",source:"@site/docs/examples-Basic.mdx",sourceDirName:".",slug:"/examples-Basic",permalink:"/react-accessible-treeview/docs/examples-Basic",draft:!1,tags:[],version:"current",frontMatter:{title:"Basic"},sidebar:"docs",previous:{title:"API Reference",permalink:"/react-accessible-treeview/docs/api"},next:{title:"Basic with controlled expandable node",permalink:"/react-accessible-treeview/docs/examples-ControlledExpandedNode"}},w={},g=[],v={toc:g},x="wrapper";function k(e){var n=e.components,t=(0,s.Z)(e,u);return(0,i.kt)(x,(0,a.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The simplest instance of the component, a good base on which a custom component can be built."),(0,i.kt)(p.Z,{component:l,js:d,css:m.Z,mdxType:"CodeTabs"}))}k.isMDXComponent=!0},3952:function(e,n){n.Z=".basic.tree {\n  list-style: none;\n  margin: 0;\n  padding: 20px;\n}\n.basic .tree-node,\n.basic .tree-node-group {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.basic .tree-branch-wrapper,\n.basic .tree-node__leaf {\n  outline: none;\n}\n\n.basic .tree-node--focused {\n  outline-color: rgb(77, 144, 254);\n  outline-style: auto;\n  outline-width: 2px;\n  display: block;\n}\n\n.basic .tree-node__branch {\n  display: block;\n}\n\n.basic .tree-node {\n  cursor: pointer;\n}\n"}}]);