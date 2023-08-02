"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[147],{7207:function(e,n,t){t.r(n),t.d(n,{assets:function(){return w},contentTitle:function(){return v},default:function(){return T},frontMatter:function(){return g},metadata:function(){return I},toc:function(){return E}});var a=t(7462),o=t(3366),c=t(7294),r=t(3905),l=t(2805),s=t(9583),i=t(1649),d=t(148),m=t(4184),u=t.n(m),p=["variant"],h=(0,d.fK)({name:"",children:[{name:"Fruits",children:[{name:"Avocados"},{name:"Bananas"},{name:"Berries"},{name:"Oranges"},{name:"Pears"}]},{name:"Drinks",children:[{name:"Apple Juice"},{name:"Chocolate"},{name:"Coffee"},{name:"Tea",children:[{name:"Black Tea"},{name:"Green Tea"},{name:"Red Tea"},{name:"Matcha"}]}]},{name:"Vegetables",children:[{name:"Beets"},{name:"Carrots"},{name:"Celery"},{name:"Lettuce"},{name:"Onions"}]}]});var b=function(e){var n,t,a=e.isOpen,o=e.className,r="arrow",l=u()(r,((n={})[r+"--closed"]=!a,n),((t={})[r+"--open"]=a,t),o);return c.createElement(i.am,{className:l})},x=function(e){var n=e.variant,t=(0,o.Z)(e,p);switch(n){case"all":return c.createElement(s.xik,t);case"none":return c.createElement(s.u9M,t);case"some":return c.createElement(s.kty,t);default:return null}},k=function(){var e=(0,c.useState)([]),n=e[0],t=e[1],o=function(){t(document.querySelector("#txtIdsToSelect").value.split(",").filter((function(e){return!!e.trim()})).map((function(e){return isNaN(parseInt(e.trim()))?e:parseInt(e.trim())})))};return c.createElement("div",null,c.createElement("div",null,c.createElement("label",{htmlFor:"txtIdsToSelect"},"Comma-delimited list of IDs to set:"),c.createElement("input",{id:"txtIdsToSelect",type:"text",onKeyDown:function(e){"Enter"===e.key&&o()}}),c.createElement("button",{onClick:function(){return o()}},"Set")),c.createElement("div",null,c.createElement("button",{onClick:function(){return t([])}},"Clear Selected Nodes")),c.createElement("div",{className:"checkbox"},c.createElement(d.ZP,{data:h,"aria-label":"Checkbox tree",multiSelect:!0,selectedIds:n,defaultExpandedIds:[1],propagateSelect:!0,propagateSelectUpwards:!0,togglableSelect:!0,onSelect:function(e){return console.log("onSelect callback: ",e)},onNodeSelect:function(e){return console.log("onNodeSelect callback: ",e)},nodeRenderer:function(e){var n=e.element,t=e.isBranch,o=e.isExpanded,r=e.isSelected,l=e.isHalfSelected,s=e.isDisabled,i=e.getNodeProps,d=e.level,m=e.handleSelect,u=e.handleExpand;return c.createElement("div",(0,a.Z)({},i({onClick:u}),{style:{marginLeft:40*(d-1),opacity:s?.5:1}}),t&&c.createElement(b,{isOpen:o}),c.createElement(x,{className:"checkbox-icon",onClick:function(e){m(e),e.stopPropagation()},variant:l?"some":r?"all":"none"}),c.createElement("span",{className:"name"},n.name,"-",n.id))}})))},f='import React, { useState } from "react";\nimport { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";\nimport { IoMdArrowDropright } from "react-icons/io";\nimport TreeView, { flattenTree } from "react-accessible-treeview";\nimport cx from "classnames";\nimport "./styles.css";\n\nconst folder = {\n  name: "",\n  children: [\n    {\n      name: "Fruits",\n      children: [\n        { name: "Avocados" },\n        { name: "Bananas" },\n        { name: "Berries" },\n        { name: "Oranges" },\n        { name: "Pears" },\n      ],\n    },\n    {\n      name: "Drinks",\n      children: [\n        { name: "Apple Juice" },\n        { name: "Chocolate" },\n        { name: "Coffee" },\n        {\n          name: "Tea",\n          children: [\n            { name: "Black Tea" },\n            { name: "Green Tea" },\n            { name: "Red Tea" },\n            { name: "Matcha" },\n          ],\n        },\n      ],\n    },\n    {\n      name: "Vegetables",\n      children: [\n        { name: "Beets" },\n        { name: "Carrots" },\n        { name: "Celery" },\n        { name: "Lettuce" },\n        { name: "Onions" },\n      ],\n    },\n  ],\n};\n\nconst data = flattenTree(folder);\n\nfunction MultiSelectCheckboxControlled() {\n  const [selectedIds, setSelectedIds] = useState([]);\n\n  const onKeyDown = (e) => {\n    if (e.key === "Enter") {\n      getAndSetIds();\n    }\n  };\n\n  const getAndSetIds = () => {\n    setSelectedIds(\n      document\n        .querySelector("#txtIdsToSelect")\n        .value.split(",")\n        .filter(val => !!val.trim())\n        .map((x) => {\n          if (isNaN(parseInt(x.trim()))) {\n            return x;\n          }\n          return parseInt(x.trim());\n        })\n    );\n  };\n\n  return (\n    <div>\n      <div>\n        <label htmlFor="txtIdsToSelect">\n          Comma-delimited list of IDs to set:\n        </label>\n        <input id="txtIdsToSelect" type="text" onKeyDown={onKeyDown} />\n        <button onClick={() => getAndSetIds()}>Set</button>\n      </div>\n      <div>\n        <button onClick={() => setSelectedIds([])}>Clear Selected Nodes</button>\n      </div>\n      <div className="checkbox">\n        <TreeView\n          data={data}\n          aria-label="Checkbox tree"\n          multiSelect\n          selectedIds={selectedIds}\n          defaultExpandedIds={[1]}\n          propagateSelect\n          propagateSelectUpwards\n          togglableSelect\n          onSelect={(props) => console.log(\'onSelect callback: \', props)}\n          onNodeSelect={(props) => console.log(\'onNodeSelect callback: \', props)}\n          nodeRenderer={({\n            element,\n            isBranch,\n            isExpanded,\n            isSelected,\n            isHalfSelected,\n            isDisabled,\n            getNodeProps,\n            level,\n            handleSelect,\n            handleExpand,\n          }) => {\n            return (\n              <div\n                {...getNodeProps({ onClick: handleExpand })}\n                style={{\n                  marginLeft: 40 * (level - 1),\n                  opacity: isDisabled ? 0.5 : 1,\n                }}\n              >\n                {isBranch && <ArrowIcon isOpen={isExpanded} />}\n                <CheckBoxIcon\n                  className="checkbox-icon"\n                  onClick={(e) => {\n                    handleSelect(e);\n                    e.stopPropagation();\n                  }}\n                  variant={\n                    isHalfSelected ? "some" : isSelected ? "all" : "none"\n                  }\n                />\n                <span className="name">\n                  {element.name}-{element.id}\n                </span>\n              </div>\n            );\n          }}\n        />\n      </div>\n    </div>\n  );\n}\n\nconst ArrowIcon = ({ isOpen, className }) => {\n  const baseClass = "arrow";\n  const classes = cx(\n    baseClass,\n    { [`${baseClass}--closed`]: !isOpen },\n    { [`${baseClass}--open`]: isOpen },\n    className\n  );\n  return <IoMdArrowDropright className={classes} />;\n};\n\nconst CheckBoxIcon = ({ variant, ...rest }) => {\n  switch (variant) {\n    case "all":\n      return <FaCheckSquare {...rest} />;\n    case "none":\n      return <FaSquare {...rest} />;\n    case "some":\n      return <FaMinusSquare {...rest} />;\n    default:\n      return null;\n  }\n};\n\nexport default MultiSelectCheckboxControlled;\n',S=".checkbox {\n    font-size: 16px;\n    user-select: none;\n    min-height: 320px;\n    padding: 20px;\n    box-sizing: content-box;\n  }\n  \n  .checkbox .tree,\n  .checkbox .tree-node,\n  .checkbox .tree-node-group {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  \n  .checkbox .tree-branch-wrapper,\n  .checkbox .tree-node__leaf {\n    outline: none;\n  }\n  \n  .checkbox .tree-node {\n    cursor: pointer;\n  }\n  \n  .checkbox .tree-node .name:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n  \n  .checkbox .tree-node--focused .name {\n    background: rgba(0, 0, 0, 0.2);\n  }\n  \n  .checkbox .tree-node {\n    display: inline-block;\n  }\n  \n  .checkbox .checkbox-icon {\n    margin: 0 5px;\n    vertical-align: middle;\n  }\n  \n  .checkbox button {\n    border: none;\n    background: transparent;\n    cursor: pointer;\n  }\n  \n  .checkbox .arrow {\n    margin-left: 5px;\n    vertical-align: middle;\n  }\n  \n  .checkbox .arrow--open {\n    transform: rotate(90deg);\n  }\n  ",C=["components"],g={title:"Checkbox with controlled selectedIds"},v=void 0,I={unversionedId:"examples-MultiSelectCheckboxControlled",id:"examples-MultiSelectCheckboxControlled",title:"Checkbox with controlled selectedIds",description:"This example demonstrates how to create a checkbox tree",source:"@site/docs/examples-MultiSelectCheckboxControlled.mdx",sourceDirName:".",slug:"/examples-MultiSelectCheckboxControlled",permalink:"/react-accessible-treeview/docs/examples-MultiSelectCheckboxControlled",draft:!1,tags:[],version:"current",frontMatter:{title:"Checkbox with controlled selectedIds"},sidebar:"docs",previous:{title:"Asynchronous loading",permalink:"/react-accessible-treeview/docs/examples-MultiSelectCheckboxAsync"},next:{title:"Checkbox (single selection)",permalink:"/react-accessible-treeview/docs/examples-SingleSelectCheckbox"}},w={},E=[],y={toc:E},N="wrapper";function T(e){var n=e.components,t=(0,o.Z)(e,C);return(0,r.kt)(N,(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This example demonstrates how to create a checkbox tree"),(0,r.kt)(l.Z,{component:k,js:f,css:S,mdxType:"CodeTabs"}))}T.isMDXComponent=!0}}]);