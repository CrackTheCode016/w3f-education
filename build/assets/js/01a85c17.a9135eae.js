"use strict";(self.webpackChunkpolkadot_mooc=self.webpackChunkpolkadot_mooc||[]).push([[13],{6165:function(e,a,t){t.d(a,{Z:function(){return v}});var r=t(3366),l=t(7294),n=t(6010),s=t(261),i=t(6742),c="sidebar_2ahu",m="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",b=t(4973);function p(e){var a=e.sidebar;return 0===a.items.length?null:l.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(m,"margin-bottom--md")},a.title),l.createElement("ul",{className:o},a.items.map((function(e){return l.createElement("li",{key:e.permalink,className:u},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var h=t(571),f=["sidebar","toc","children"];var v=function(e){var a=e.sidebar,t=e.toc,i=e.children,c=(0,r.Z)(e,f),m=a&&a.items.length>0;return l.createElement(s.Z,c,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(p,{sidebar:a})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m})},i),t&&l.createElement("div",{className:"col col--2"},l.createElement(h.Z,{toc:t})))))}},94:function(e,a,t){t.r(a);var r=t(7294),l=t(6742),n=t(6165),s=t(4973),i=t(3018);a.default=function(e){var a=e.tags,t=e.sidebar,c=(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),m={};Object.keys(a).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e);m[a]=m[a]||[],m[a].push(e)}));var o=Object.entries(m).sort((function(e,a){var t=e[0],r=a[0];return t.localeCompare(r)})).map((function(e){var t=e[0],n=e[1];return r.createElement("article",{key:t},r.createElement("h2",null,t),n.map((function(e){return r.createElement(l.Z,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")")})),r.createElement("hr",null))})).filter((function(e){return null!=e}));return r.createElement(n.Z,{title:c,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:t},r.createElement("h1",null,c),r.createElement("section",{className:"margin-vert--lg"},o))}}}]);