"use strict";(self.webpackChunknew_blog=self.webpackChunknew_blog||[]).push([[2213],{6880:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"configurations/containers","title":"Containers","description":"Containers I use to segment some applications.","source":"@site/docs/configurations/containers.md","sourceDirName":"configurations","slug":"/configurations/containers","permalink":"/configurations/containers","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8,"slug":"/configurations/containers","description":"Containers I use to segment some applications."},"sidebar":"tutorialSidebar","previous":{"title":"Ventoy","permalink":"/configurations/ventoy"},"next":{"title":"Operations Security (OPSEC)","permalink":"/category/operations-security-opsec"}}');var t=o(4848),s=o(8453);const a={sidebar_position:8,slug:"/configurations/containers",description:"Containers I use to segment some applications."},r="Containers",c={},d=[{value:"Zimit",id:"zimit",level:3},{value:"Excalidraw",id:"excalidraw",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"containers",children:"Containers"})}),"\n",(0,t.jsxs)(n.p,{children:["Initially, my goal was to have a repository full of my compose YAML files for the containers that I would use. However, as I went to do this with Podman, I was unable to due to the Flatpak version of Podman for my system being behind the minimum Podman version required to run compose files: 4.7.0 or greater (Source: ",(0,t.jsx)(n.a,{href:"https://podman-desktop.io/docs/compose/running-compose",children:"https://podman-desktop.io/docs/compose/running-compose"}),"). As such, I will list my containers here for the time being as a quick resource for me to grab these commands as I need them. In addition, this allows me to get more familiar with Podman's command-line interface. So why Podman? I decided to use Podman due to its rootless daemon architecture. It seems like Docker now offers this as well (",(0,t.jsx)(n.a,{href:"https://docs.docker.com/engine/security/rootless/#install",children:"https://docs.docker.com/engine/security/rootless/#install"}),"), but I like the native Linux feel of Podman. It is possible to edit the ",(0,t.jsx)(n.code,{children:"/etc/containers/registries.conf"})," file to add other image/container registries (",(0,t.jsx)(n.a,{href:"https://podman-desktop.io/docs/containers/registries",children:"https://podman-desktop.io/docs/containers/registries"}),"), however, I will add the full commands below for easy usage and for clarification of what repository each image is coming from."]}),"\n",(0,t.jsx)(n.p,{children:"The following are my go-to commands with Podman:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# List running container\npodman ps\n# List all containers created\npodman ps -a\n# Stop specific container\npodman stop excalidraw\n# pull an image only without running\npodman pull docker.io/excalidraw/excalidraw:latest\n# see images\npodman images\n# Remove an image\npodman rmi excalidraw\n# Remove all non-running containers\npodman container prune\n# Remove all stopped containers, networks, dangling images, and dangling build cache\npodman system prune\n"})}),"\n",(0,t.jsx)(n.h3,{id:"zimit",children:"Zimit"}),"\n",(0,t.jsxs)(n.p,{children:["Zimit allows you to create ZIM files of websites. This allows for easy offline browsing of these websites. I use the output ZIM file with ",(0,t.jsx)(n.a,{href:"https://kiwix.org/en/applications/",children:"Kiwix Applications - Access Knowledge Offline on Various Platforms- Kiwix"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Sudo will be required for repositories that are not /tmp - based on my testing\nsudo podman run -v (pwd):/output ghcr.io/openzim/zimit zimit --seeds URL --name myzimfile\n# OR\npodman run -v /tmp:/output ghcr.io/openzim/zimit zimit --seeds URL --name myzimfile\n"})}),"\n",(0,t.jsx)(n.h3,{id:"excalidraw",children:"Excalidraw"}),"\n",(0,t.jsxs)(n.p,{children:["Excalidraw is a whiteboard and diagram creator. I like the hard-drawn nature to the diagrams. I use ",(0,t.jsx)(n.a,{href:"http://mermaid.js.org/",children:"http://mermaid.js.org/"})," for diagrams for the website, but for other diagrams I now use Excalidraw."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"podman run --rm -dit --name excalidraw -p 5000:80 docker.io/excalidraw/excalidraw:latest\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var i=o(6540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);