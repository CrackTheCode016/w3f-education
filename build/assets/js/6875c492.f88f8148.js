"use strict";(self.webpackChunkpolkadot_mooc=self.webpackChunkpolkadot_mooc||[]).push([[610],{6165:function(e,t,a){a.d(t,{Z:function(){return v}});var l=a(3366),r=a(7294),n=a(6010),s=a(261),i=a(6742),m="sidebar_2ahu",c="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",d="sidebarItem_2UVv",u="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",h=a(4973);function p(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,h.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var E=a(571),b=["sidebar","toc","children"];var v=function(e){var t=e.sidebar,a=e.toc,i=e.children,m=(0,l.Z)(e,b),c=t&&t.items.length>0;return r.createElement(s.Z,m,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(p,{sidebar:t})),r.createElement("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c})},i),a&&r.createElement("div",{className:"col col--2"},r.createElement(E.Z,{toc:a})))))}},3146:function(e,t,a){a.d(t,{Z:function(){return p}});var l=a(7294),r=a(6010),n=a(3905),s=a(4973),i=a(6742),m=a(3018),c=a(633),o=a(1217),d=a(6146),u="blogPostTitle_GeHD",g="blogPostData_291c",h="blogPostDetailsFull_3kfx";var p=function(e){var t,a,p,E=(a=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=e.children,v=e.frontMatter,f=e.metadata,N=e.truncated,_=e.isBlogPostPage,Z=void 0!==_&&_,k=f.date,T=f.formattedDate,w=f.permalink,P=f.tags,M=f.readingTime,I=f.title,L=f.editUrl,x=v.author,y=v.image,U=v.keywords,A=v.author_url||v.authorURL,C=v.author_title||v.authorTitle,R=v.author_image_url||v.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(o.Z,{keywords:U,image:y}),l.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(p=Z?"h1":"h2",l.createElement("header",null,l.createElement(p,{className:u},Z?I:l.createElement(i.Z,{to:w},I)),l.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},l.createElement("time",{dateTime:k},T),M&&l.createElement(l.Fragment,null," \xb7 ",E(M))),l.createElement("div",{className:"avatar margin-vert--md"},R&&l.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:A},l.createElement("img",{src:R,alt:x})),l.createElement("div",{className:"avatar__intro"},x&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(i.Z,{href:A},x)),l.createElement("small",{className:"avatar__subtitle"},C)))))),l.createElement("div",{className:"markdown"},l.createElement(n.Zo,{components:c.Z},b)),(P.length>0||N)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[h]=Z,t))},P.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),P.map((function(e){var t=e.label,a=e.permalink;return l.createElement(i.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&L&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:L})),!Z&&N&&l.createElement("div",{className:"col text--right"},l.createElement(i.Z,{to:f.permalink,"aria-label":"Read more about "+I},l.createElement("b",null,l.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},9404:function(e,t,a){a.r(t);var l=a(7294),r=a(6742),n=a(6165),s=a(3146),i=a(4973),m=a(3018);t.default=function(e){var t,a=e.metadata,c=e.items,o=e.sidebar,d=a.allTagsPath,u=a.name,g=a.count,h=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,i.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),p=(0,i.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:h(g),tagName:u});return l.createElement(n.Z,{title:p,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:o},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,p),l.createElement(r.Z,{href:d},l.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},l.createElement(t,null))})))}},6146:function(e,t,a){a.d(t,{Z:function(){return d}});var l=a(7294),r=a(4973),n=a(7462),s=a(3366),i=a(6010),m="iconEdit_2_ui",c=["className"],o=function(e){var t=e.className,a=(0,s.Z)(e,c);return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(m,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function d(e){var t=e.editUrl;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},l.createElement(o,null),l.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}}}]);