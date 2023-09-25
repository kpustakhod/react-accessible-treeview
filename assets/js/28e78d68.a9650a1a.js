"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[507],{842:function(e,n,a){var t=a(3366),r=a(7462),c=a(7294),o=a(9583),s=a(1649),l=a(148),i=a(4184),m=a.n(i),d=["variant"],u=(0,l.fK)({name:"",children:[{name:"Fruits",children:[{name:"Avocados"},{name:"Bananas"},{name:"Berries"},{name:"Oranges"},{name:"Pears"}]},{name:"Drinks",children:[{name:"Apple Juice"},{name:"Chocolate"},{name:"Coffee"},{name:"Tea",children:[{name:"Black Tea"},{name:"Green Tea"},{name:"Red Tea"},{name:"Matcha"}]}]},{name:"Vegetables",children:[{name:"Beets"},{name:"Carrots"},{name:"Celery"},{name:"Lettuce"},{name:"Onions"}]}]});var p=function(e){var n,a,t=e.isOpen,r=e.className,o="arrow",l=m()(o,((n={})[o+"--closed"]=!t,n),((a={})[o+"--open"]=t,a),r);return c.createElement(s.am,{className:l})},h=function(e){var n=e.variant,a=(0,t.Z)(e,d);switch(n){case"all":return c.createElement(o.xik,a);case"none":return c.createElement(o.u9M,a);case"some":return c.createElement(o.kty,a);default:return null}};n.Z=function(){return c.createElement("div",null,c.createElement("div",{className:"checkbox"},c.createElement(l.ZP,{data:u,"aria-label":"Checkbox tree",multiSelect:!0,propagateSelect:!0,propagateSelectUpwards:!0,togglableSelect:!0,nodeRenderer:function(e){var n=e.element,a=e.isBranch,t=e.isExpanded,o=e.isSelected,s=e.isHalfSelected,l=e.getNodeProps,i=e.level,m=e.handleSelect,d=e.handleExpand;return c.createElement("div",(0,r.Z)({},l({onClick:d}),{style:{marginLeft:40*(i-1)}}),a&&c.createElement(p,{isOpen:t}),c.createElement(h,{className:"checkbox-icon",onClick:function(e){m(e),e.stopPropagation()},variant:s?"some":o?"all":"none"}),c.createElement("span",{className:"name"},n.name))}})))}},2986:function(e,n,a){a.r(n),a.d(n,{assets:function(){return h},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return x}});var t=a(7462),r=a(3366),c=(a(7294),a(3905)),o=a(2805),s=a(842),l='import React from "react";\nimport { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";\nimport { IoMdArrowDropright } from "react-icons/io";\nimport TreeView, { flattenTree } from "react-accessible-treeview";\nimport cx from "classnames";\nimport "./styles.css";\n\nconst folder = {\n  name: "",\n  children: [\n    {\n      name: "Fruits",\n      children: [\n        { name: "Avocados" },\n        { name: "Bananas" },\n        { name: "Berries" },\n        { name: "Oranges" },\n        { name: "Pears" },\n      ],\n    },\n    {\n      name: "Drinks",\n      children: [\n        { name: "Apple Juice" },\n        { name: "Chocolate" },\n        { name: "Coffee" },\n        {\n          name: "Tea",\n          children: [\n            { name: "Black Tea" },\n            { name: "Green Tea" },\n            { name: "Red Tea" },\n            { name: "Matcha" },\n          ],\n        },\n      ],\n    },\n    {\n      name: "Vegetables",\n      children: [\n        { name: "Beets" },\n        { name: "Carrots" },\n        { name: "Celery" },\n        { name: "Lettuce" },\n        { name: "Onions" },\n      ],\n    },\n  ],\n};\n\nconst data = flattenTree(folder);\n\nfunction MultiSelectCheckbox() {\n  return (\n    <div>\n      <div className="checkbox">\n        <TreeView\n          data={data}\n          aria-label="Checkbox tree"\n          multiSelect\n          propagateSelect\n          propagateSelectUpwards\n          togglableSelect\n          nodeRenderer={({\n            element,\n            isBranch,\n            isExpanded,\n            isSelected,\n            isHalfSelected,\n            getNodeProps,\n            level,\n            handleSelect,\n            handleExpand,\n          }) => {\n            return (\n              <div\n                {...getNodeProps({ onClick: handleExpand })}\n                style={{ marginLeft: 40 * (level - 1) }}\n              >\n                {isBranch && <ArrowIcon isOpen={isExpanded} />}\n                <CheckBoxIcon\n                  className="checkbox-icon"\n                  onClick={(e) => {\n                    handleSelect(e);\n                    e.stopPropagation();\n                  }}\n                  variant={\n                    isHalfSelected ? "some" : isSelected ? "all" : "none"\n                  }\n                />\n                <span className="name">{element.name}</span>\n              </div>\n            );\n          }}\n        />\n      </div>\n    </div>\n  );\n}\n\nconst ArrowIcon = ({ isOpen, className }) => {\n  const baseClass = "arrow";\n  const classes = cx(\n    baseClass,\n    { [`${baseClass}--closed`]: !isOpen },\n    { [`${baseClass}--open`]: isOpen },\n    className\n  );\n  return <IoMdArrowDropright className={classes} />;\n};\n\nconst CheckBoxIcon = ({ variant, ...rest }) => {\n  switch (variant) {\n    case "all":\n      return <FaCheckSquare {...rest} />;\n    case "none":\n      return <FaSquare {...rest} />;\n    case "some":\n      return <FaMinusSquare {...rest} />;\n    default:\n      return null;\n  }\n};\n\nexport default MultiSelectCheckbox;\n',i=a(1240),m=["components"],d={title:"Checkbox"},u=void 0,p={unversionedId:"examples-MultiSelectCheckbox",id:"examples-MultiSelectCheckbox",title:"Checkbox",description:"This example demonstrates how to create a checkbox tree",source:"@site/docs/examples-MultiSelectCheckbox.mdx",sourceDirName:".",slug:"/examples-MultiSelectCheckbox",permalink:"/react-accessible-treeview/docs/examples-MultiSelectCheckbox",draft:!1,tags:[],version:"current",frontMatter:{title:"Checkbox"},sidebar:"docs",previous:{title:"Filtering",permalink:"/react-accessible-treeview/docs/examples-Filtering"},next:{title:"Asynchronous loading",permalink:"/react-accessible-treeview/docs/examples-MultiSelectCheckboxAsync"}},h={},x=[],b={toc:x},k="wrapper";function f(e){var n=e.components,a=(0,r.Z)(e,m);return(0,c.kt)(k,(0,t.Z)({},b,a,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"This example demonstrates how to create a checkbox tree"),(0,c.kt)(o.Z,{component:s.Z,js:l,css:i.Z,mdxType:"CodeTabs"}))}f.isMDXComponent=!0},1240:function(e,n){n.Z=".checkbox {\n  font-size: 16px;\n  user-select: none;\n  min-height: 320px;\n  padding: 20px;\n  box-sizing: content-box;\n}\n\n.checkbox .tree,\n.checkbox .tree-node,\n.checkbox .tree-node-group {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.checkbox .tree-branch-wrapper,\n.checkbox .tree-node__leaf {\n  outline: none;\n}\n\n.checkbox .tree-node {\n  cursor: pointer;\n}\n\n.checkbox .tree-node .name:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.checkbox .tree-node--focused .name {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.checkbox .tree-node {\n  display: inline-block;\n}\n\n.checkbox .checkbox-icon {\n  margin: 0 5px;\n  vertical-align: middle;\n}\n\n.checkbox button {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n}\n\n.checkbox .arrow {\n  margin-left: 5px;\n  vertical-align: middle;\n}\n\n.checkbox .arrow--open {\n  transform: rotate(90deg);\n}\n"}}]);