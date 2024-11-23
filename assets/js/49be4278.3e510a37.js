"use strict";(self.webpackChunknew_blog=self.webpackChunknew_blog||[]).push([[6718],{7799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"open-source-intelligence/breach-data/stealer-logs","title":"Stealer Logs","description":"Discussing a newer form of breach data","source":"@site/docs/open-source-intelligence/breach-data/stealer-logs.md","sourceDirName":"open-source-intelligence/breach-data","slug":"/open-source-intelligence/breach-data/stealer-logs","permalink":"/open-source-intelligence/breach-data/stealer-logs","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"slug":"/open-source-intelligence/breach-data/stealer-logs","description":"Discussing a newer form of breach data"},"sidebar":"tutorialSidebar","previous":{"title":"Breach Data Infrastructure","permalink":"/open-source-intelligence/breach-data/breach-data-infrastructure"},"next":{"title":"Containerization","permalink":"/open-source-intelligence/breach-data/containerization"}}');var i=a(4848),o=a(8453);const s={sidebar_position:4,slug:"/open-source-intelligence/breach-data/stealer-logs",description:"Discussing a newer form of breach data"},r="Stealer Logs",l={},d=[{value:"What are stealer logs?",id:"what-are-stealer-logs",level:2},{value:"OSINT Data Source",id:"osint-data-source",level:2},{value:"Applications",id:"applications",level:3},{value:"Crypto",id:"crypto",level:3},{value:"Valve Data File",id:"valve-data-file",level:3},{value:"Device Information",id:"device-information",level:3},{value:"Auto-fill Information",id:"auto-fill-information",level:3},{value:"Passwords",id:"passwords",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Recommendations",id:"recommendations",level:2},{value:"Sources",id:"sources",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"stealer-logs",children:"Stealer Logs"})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:'I will be using CrowdStrike\'s definition of OSINT: "While most open source data is accessed via the open internet and may be indexed with the help of a search engine like Google, it can also be accessed via more closed forums that are not indexed by search engines. Though most deep web content is inaccessible to general users because it lives behind a paywall or requires a login to access, it is still considered part of the public domain" [4].'})}),"\n",(0,i.jsx)(t.h2,{id:"what-are-stealer-logs",children:"What are stealer logs?"}),"\n",(0,i.jsx)(t.p,{children:'"Information stealer (infostealer) malware\u2014malicious software designed to steal victim information, including passwords\u2014has become one of the most discussed malware types on the cybercriminal underground in 2022" [1]. Stealer logs are the byproduct of this strain of malware. After the data is exfiltrated out of a victims device(s), they can be reused in other attacks against the victim (logging into a bank account, etc.). If not, then this data is offered for sale on dark web marketplaces. There are currently some popular infostealer malware out there, such as Redline, Vidar, and Raccoon. As more and more infostealer malware are deployed, the more stealer logs are created. This leads to more information being offered for sale. Similar to data breaches, after some time, these are available for free. From my research in stealer logs, they are mostly available through dark-web marketplaces and through Telegram channels. They are now also popping up on surface web breach forums as well. The next portion of this blog will dive into what types of information are in these logs, and what that can mean from an OSINT data source perspective.'}),"\n",(0,i.jsx)(t.h2,{id:"osint-data-source",children:"OSINT Data Source"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"I will be looking into a sample of stealer logs from the Redline infostealer. The following information does not define all the information in stealer logs, only the information found in the sample I had access to. Each infostealer and sample is different, but have similar qualities."})}),"\n",(0,i.jsx)(t.p,{children:"I wanted to look into stealer logs to see how it compared to traditional data breaches. I was able to obtain a sample of Redline stealer logs. There were 2000+ files in this sample, so I will describe the types of information in these logs. Just for clarification, this sample did not have one users' information, but is a mix of a lot of people's information. With that being said, let me jump right into the data types."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"I will not discuss all data types, only the logs I saw that were more prevalent and important."})}),"\n",(0,i.jsx)(t.h3,{id:"applications",children:"Applications"}),"\n",(0,i.jsxs)(t.p,{children:["One thing I noticed was that there were file names that indicated where the data was taken from, for example: ",(0,i.jsx)(t.code,{children:"Thunderbird_xxxxxxxx.default-release.txt"}),", ",(0,i.jsx)(t.code,{children:"Vivaldi_Default.txt"}),", and ",(0,i.jsx)(t.code,{children:"Firefox_xxxxxxxx.default.txt"}),". These have cookies and metadata relating to that respective application. The following is a snippet from a random chosen Firefox log file (redacted cookies and session tokens):"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(9019).A+"",width:"1098",height:"417"})}),"\n",(0,i.jsxs)(t.p,{children:["There is a bit of information we can gather from this log. The ",(0,i.jsx)(t.code,{children:".ir"}),'  ccTLD belongs to the country of Iran, so we can assume that some of these logs potentially belong to someone from Iran (no proof of this other than ccTLDs). One of the redacted information in the image above was a Json Web Token. "JWTs are credentials, which can grant access to resources" [2]. These are noticeable by the ',(0,i.jsx)(t.code,{children:"eyJ"})," prefix. I put the JWT onto ",(0,i.jsx)(t.a,{href:"https://jwt.io/",children:"https://jwt.io/"}),", and it was able to tell me the initialization vector, value, and mac for this token:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(3605).A+"",width:"543",height:"171"})}),"\n",(0,i.jsxs)(t.p,{children:["Theoretically, I should be able to use that token and access resources the victim had access to, but that is beyond this blog and ",(0,i.jsx)(t.strong,{children:"illegal"}),". If you are interested in what a threat actor can do with this information, I recommend checking out the following: ",(0,i.jsx)(t.a,{href:"https://developer.okta.com/blog/2018/06/20/what-happens-if-your-jwt-is-stolen#what-happens-if-your-json-web-token-is-stolen",children:"https://developer.okta.com/blog/2018/06/20/what-happens-if-your-jwt-is-stolen#what-happens-if-your-json-web-token-is-stolen"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"crypto",children:"Crypto"}),"\n",(0,i.jsx)(t.p,{children:"There were multiple wallet files in this log collection. Here is the redacted output of one of them to show the types of information:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(9955).A+"",width:"1084",height:"905"})}),"\n",(0,i.jsx)(t.p,{children:'I personally do not know too much about Cryptocurrency, so I reached out to Brandon O\'Shea who I know works on crypto projects. He mentioned the following: "Assuming they are real and accurate, a threat actor would gain complete control of the funds and could immediately liquidate the balance of the wallets the phrases are for". This put into perspective for me of what this log and others like it really meant. If the infostealer malware is deployed on your system, all the money in your crypto wallet can be depleted and transferred out. One point to add here was that if the aforementioned wallet information was legitimate, the threat actor releasing the logs would most likely have cleaned those out before releasing the logs to the public.'}),"\n",(0,i.jsx)(t.h3,{id:"valve-data-file",children:"Valve Data File"}),"\n",(0,i.jsxs)(t.p,{children:["In the sample, I noticed a lot of ",(0,i.jsx)(t.code,{children:".vdf"})," files. I was unsure what these were, so I looked them up. These are plaintext files that are used by the Valve Corporation for graphic settings and configurations for games [3]. You can see information like the following about gyroscopic data:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(9194).A+"",width:"596",height:"137"})}),"\n",(0,i.jsx)(t.p,{children:"The Steam game-pad binding configuration was also in the logs:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(6348).A+"",width:"1104",height:"181"})}),"\n",(0,i.jsx)(t.p,{children:"You are also also able to see more personal information as well, such as Steam account name:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(3861).A+"",width:"514",height:"236"})}),"\n",(0,i.jsx)(t.p,{children:"By this information, I can tell who got hit by the malware, by tracking the username of the Steam account. There are multiple Steam account names in this log sample, which enforces the idea of this sample stemming from multiple individuals."}),"\n",(0,i.jsx)(t.h3,{id:"device-information",children:"Device Information"}),"\n",(0,i.jsx)(t.p,{children:"There was a file in the sample that contained device information, down to the uuid of the user. The file is too large in image height to show all of it, but here is a snippet of it (please forgive the Kali Linux background logo):"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(5079).A+"",width:"1001",height:"1044"})}),"\n",(0,i.jsx)(t.p,{children:"This was not as important as the previous data type, but it still provides more context on not only the victims, but also the context of stealer logs. Based on my research, this information helps the threat actor in two-fold: it provides them with one more log of information, but more importantly, it helps them decide if the device is infected already or not, as they use this information for fingerprinting."}),"\n",(0,i.jsx)(t.h3,{id:"auto-fill-information",children:"Auto-fill Information"}),"\n",(0,i.jsx)(t.p,{children:"There is a lot of auto-fill information obtained in this sample. This includes the following type of information:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"account[email]\naccount[first_name]\naccount[last_name]\naddress\naddress1\naddress-1-city\naddress-1-state\naddress-1-street_address\naddress2\naddressLine1\naddressLine2\naddress_postalCode\naddressSub\naddressSugg\naddress-ui-widgets-enterAddressCity\naddress-ui-widgets-enterAddressLine1\naddress-ui-widgets-enterAddressLine2\naddress-ui-widgets-enterAddressPostalCode\nadmin_email\nbilling_address_1\nbilling_email\nbilling_first_name\nbilling_last_name\nbill_to_address_city\nbill_to_address_line1\nbill_to_address_postal_code\nbill_to_address_state\nbill_to_email\ncitizen_address\ncreate_order_form[contact_info][address][city]\ncreate_order_form[contact_info][address][line1]\ncreate_order_form[contact_info][address][postal_code]\ncreate_order_form[contact_info][first_name]\ncreate_order_form[contact_info][last_name]\ndata[User][email]\ndata[UsersProfile][first_name]\ndata[UsersProfile][last_name]\ndob\ndob-day\ndob_day\ndob-month\ndob-year\ndob_year\nemail\nemail-1\nemail-address\nemail_address\nemailAddress\nemail_address[email]\nemailAgain\nemail_confirm\nEmailForm[email]\nemailLogin\nemail_or_username\nfirst_name\nfirstName\ninput_billing_address_city\ninput_billing_address_one\ninput_billing_address_zip\ninput_billing_phone_number\ninput_recipient_email\nlast_name\nlastName\nlog-in-email\nlogin_email\nphone_number\npin\nregister_email\nsecurityCode\nsecurity_question_1\nsecurity_question_2\nsecurity_question_3\nsecurity_question_4\nsecurity_question_5\nsign-in-email\nsignup[email]\nSignupForm[email]\nssn_last_4\n"})}),"\n",(0,i.jsx)(t.p,{children:"My assumption is that the aforementioned data are from the users' browsers' cache, which will later be used to auto-fill the data."}),"\n",(0,i.jsx)(t.h3,{id:"passwords",children:"Passwords"}),"\n",(0,i.jsxs)(t.p,{children:["There was a file in this sample that just had combinations of usernames, passwords, and the URL those credentials would work on. I have not tested the credentials, as that would be beyond OSINT, and getting into ",(0,i.jsx)(t.strong,{children:"unlawful activity"}),". With that being said, the file had rows and rows of what looked like the following:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:a(1438).A+"",width:"494",height:"482"})}),"\n",(0,i.jsx)(t.p,{children:"If multi-factor authentication is not enabled on these accounts, anyone with the credentials can log in. This is especially significant for banking-related apps."}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(t.p,{children:"There are a couple other types of files as well in the logs, but I wanted to look into the data that would be the fruitful from an OSINT investigation purpose. I wanted this blog to be partially CTI-adjacent as well, to show what information script kiddies and threat actors have after successfully deploying an information stealer malware on a system. Breaches and stealer logs each have their own benefits and downsides, but this was a great learning experience for me overall in the stealer log space."}),"\n",(0,i.jsx)(t.h2,{id:"recommendations",children:"Recommendations"}),"\n",(0,i.jsx)(t.p,{children:"I wanted to provide some recommendations for those trying to prevent being in these logs, based on my knowledge of CTI."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Do not click on unknown links or download unknown files"}),": One of the biggest vectors for malware deployment is users clicking on phishing links and/or downloading phishing attachments. If attachments or links ",(0,i.jsx)(t.strong,{children:"need"})," to be clicked on, use services like VirusTotal to look into the item before you proceed further. If an item is too good to be true...it probably is."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Do not use auto-fill"}),": Auto-fill has gained popularity by allowing ease to users by caching their credentials and information for using on websites. These caches are usually stored locally on the machine. If an infostealer malware was deployed on a machine with information stored in these caches, it will copy that data and provide it to the threat actor."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Those are just a couple of suggestions I had off the top of my head. Will these suggestions prevent all malware deployment? Absolutely not. However, this will lessen the amount of threats by a good amount."}),"\n",(0,i.jsx)(t.h2,{id:"sources",children:"Sources"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.accenture.com/us-en/blogs/security/information-stealer-malware-on-dark-web",children:"https://www.accenture.com/us-en/blogs/security/information-stealer-malware-on-dark-web"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://jwt.io/",children:"https://jwt.io/"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://techstk.com/what-is-a-vdf-valve-data-file-and-how-do-i-open-it/",children:"https://techstk.com/what-is-a-vdf-valve-data-file-and-how-do-i-open-it/"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.crowdstrike.com/cybersecurity-101/osint-open-source-intelligence/",children:"https://www.crowdstrike.com/cybersecurity-101/osint-open-source-intelligence/"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3605:(e,t,a)=>{a.d(t,{A:()=>n});const n="data:image/png;base64,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"},9019:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image111_stealer-f1159dc42719d0eb877815dd7bf853bd.png"},9955:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image752-1b4f0b64b92dc4a49379348c8a105a5a.png"},9194:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image753-28114f4d94eb0f7f39d808a172e3dc81.png"},3861:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image754-7b55d7a91aa20e181d5f544f978645b1.png"},6348:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image755-92d180230532d74e40653b96d25730ad.png"},5079:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image756-cf4973ed6292ad75c92b9078e3b27936.png"},1438:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/image757-86ae533c458d5e00c56246641791b0cf.png"},8453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>r});var n=a(6540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);