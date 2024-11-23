"use strict";(self.webpackChunknew_blog=self.webpackChunknew_blog||[]).push([[2743],{4745:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"red-team-operations/penetration-testing/network/advanced-hash-cracking","title":"Advanced Hash Cracking","description":"Advanced techniques for cracking hashes","source":"@site/docs/red-team-operations/penetration-testing/network/advanced-hash-cracking.md","sourceDirName":"red-team-operations/penetration-testing/network","slug":"/red-team-operations/penetration-testing/network/advanced-hash-cracking","permalink":"/red-team-operations/penetration-testing/network/advanced-hash-cracking","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"slug":"/red-team-operations/penetration-testing/network/advanced-hash-cracking","description":"Advanced techniques for cracking hashes"},"sidebar":"tutorialSidebar","previous":{"title":"Network","permalink":"/category/network"}}');var n=s(4848),r=s(8453);const i={sidebar_position:1,slug:"/red-team-operations/penetration-testing/network/advanced-hash-cracking",description:"Advanced techniques for cracking hashes"},o="Advanced Hash Cracking",h={},c=[{value:"Rules",id:"rules",level:2},{value:"Mask",id:"mask",level:2},{value:"Rule vs. Mask",id:"rule-vs-mask",level:2},{value:"Hybrid",id:"hybrid",level:2},{value:"Purple Rain (princeprocessor)",id:"purple-rain-princeprocessor",level:2},{value:"Alternative Dictionaries",id:"alternative-dictionaries",level:2},{value:"Password Analysis",id:"password-analysis",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Sources",id:"sources",level:2}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"advanced-hash-cracking",children:"Advanced Hash Cracking"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["I mention commands using hashcat in this post. John the Ripper does have ",(0,n.jsx)(t.a,{href:"https://github.com/openwall/john/blob/bleeding-jumbo/doc/RULES",children:"rule"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/openwall/john/blob/bleeding-jumbo/doc/MASK",children:"mask"})," attacks as well. Their syntax might be a bit different, but the idea behind these are the same as hashcat. JtR even has the ",(0,n.jsx)(t.a,{href:"https://github.com/openwall/john/blob/bleeding-jumbo/doc/PRINCE",children:'"Purple Rain Attack"'})," mentioned below."]})}),"\n",(0,n.jsx)(t.p,{children:"I have been doing hash cracking for a couple of years now, and have heard the terms rules and masks thrown around here and there. This blog post will be my journey through learning what rules and masks are, as well as showing some use cases that might not be apparent at first glance."}),"\n",(0,n.jsx)(t.h2,{id:"rules",children:"Rules"}),"\n",(0,n.jsx)(t.p,{children:"Rule-based attacks are considered a programming language in the sense that they notify the cracking software of what to do once the software receives a string. hashcat's Wiki has some great examples of this:"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{width:"156",children:"Name"}),(0,n.jsx)("th",{width:"97",children:"Function"}),(0,n.jsx)("th",{children:"Description"}),(0,n.jsx)("th",{width:"129",children:"Example Rule"}),(0,n.jsx)("th",{width:"124",children:"Input Word"}),(0,n.jsx)("th",{children:"Output Word"})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Nothing"}),(0,n.jsx)("td",{children:":"}),(0,n.jsx)("td",{children:"Do nothing (pass-through)"}),(0,n.jsx)("td",{children:":"}),(0,n.jsx)("td",{children:"p@ssW0rd"}),(0,n.jsx)("td",{children:"p@ssW0rd"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Lowercase"}),(0,n.jsx)("td",{children:"l"}),(0,n.jsx)("td",{children:"Lowercase all letters"}),(0,n.jsx)("td",{children:"l"}),(0,n.jsx)("td",{children:"p@ssW0rd"}),(0,n.jsx)("td",{children:"p@ssw0rd"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Uppercase"}),(0,n.jsx)("td",{children:"u"}),(0,n.jsx)("td",{children:"Uppercase all letters"}),(0,n.jsx)("td",{children:"u"}),(0,n.jsx)("td",{children:"p@ssW0rd"}),(0,n.jsx)("td",{children:"P@SSW0RD"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Capitalize"}),(0,n.jsx)("td",{children:"c"}),(0,n.jsx)("td",{children:"Capitalize the first letter and lower the rest"}),(0,n.jsx)("td",{children:"c"}),(0,n.jsx)("td",{children:"p@ssW0rd"}),(0,n.jsx)("td",{children:"P@ssw0rd"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["These are a couple of examples I had copied over from ",(0,n.jsx)(t.a,{href:"https://hashcat.net/wiki/doku.php?id=rule_based_attack",children:"https://hashcat.net/wiki/doku.php?id=rule_based_attack"}),". Using the above rows as examples, we can create a file that has one rule for the lowercase letters:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"# Lowercase rule\nl\n"})}),"\n",(0,n.jsx)(t.p,{children:'That\'s it. We have created one rule that will lowercase all of the strings we pass through to the cracking software. We can test it by creating a MD5 hash for the word "testing123". We can then create a dictionary list with the following strings in it:'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Hello\nThis\nTesting123\nHashcat\nCracking\n"})}),"\n",(0,n.jsxs)(t.p,{children:['If our rule works as it should, it will lowercase "Testing123" to "testing123", and crack our hash for us. We can use hashcat with the following command to get this output: ',(0,n.jsx)(t.code,{children:"hashcat -m 0 hash -r rule_created.rule hash.dict"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(1833).A+"",width:"381",height:"63"})}),"\n",(0,n.jsxs)(t.p,{children:["We have now created one rule. Rule files usually have a rule on each line and can look like the following (excerpt taken from ",(0,n.jsx)(t.a,{href:"https://github.com/hashcat/hashcat/blob/master/rules/best66.rule",children:"https://github.com/hashcat/hashcat/blob/master/rules/best66.rule"}),"):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"r\n$0\n$1\n$2\n$e\nD2 D2\n+5 ] } } } } '4\n"})}),"\n",(0,n.jsxs)(t.p,{children:["I would encourage you to check out the ",(0,n.jsx)(t.a,{href:"https://hashcat.net/wiki/doku.php?id=rule_based_attack",children:"aforementioned hashcat Wiki documentation"}),". They give a great breakdown of what each of the values mean. There are some rule files that are well known in the industry, such as: ",(0,n.jsx)(t.a,{href:"https://github.com/NotSoSecure/password_cracking_rules",children:"OneRuleToRuleThemAll"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/stealthsploit/OneRuleToRuleThemStill",children:"OneRuleToRuleThemStill"}),", and ",(0,n.jsx)(t.a,{href:"https://github.com/praetorian-inc/Hob0Rules",children:"Hob0Rules"}),". They are created based on statistics and industry standards for passwords. NotSoSecure has some great rule comparison charts on their website: ",(0,n.jsx)(t.a,{href:"https://notsosecure.com/one-rule-to-rule-them-all",children:"https://notsosecure.com/one-rule-to-rule-them-all"}),". "]}),"\n",(0,n.jsx)(t.h2,{id:"mask",children:"Mask"}),"\n",(0,n.jsxs)(t.p,{children:['Mask attacks work by trying all combinations in a specified key-space. I do want to specify that mask attacks do use brute-force, but just in a more "smarter" manner. I\'ll quote the example hashcat uses on their ',(0,n.jsx)(t.a,{href:"https://hashcat.net/wiki/doku.php?id=mask_attack",children:"site"})," to describe this, as I believe it is pretty well written. I have modified the following to be more concise:"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Here is a single example. We want to crack the password: ",(0,n.jsx)(t.em,{children:"Julia1984"})]}),"\n",(0,n.jsxs)(t.p,{children:["In traditional Brute-Force attack we require a charset that contains all upper-case letters, all lower-case letters and all digits (aka \u201cmixalpha-numeric\u201d). The Password length is 9, so we have to iterate through 62^9 (13.537.086.546.263.552) combinations. Lets say we crack with a rate of 100M/s, this requires more than ",(0,n.jsx)(t.strong,{children:"4 years"})," to complete."]}),"\n",(0,n.jsxs)(t.p,{children:["In Mask attack we know about humans and how they design passwords. The above password matches a simple but common pattern. A name and year appended to it. We can also configure the attack to try the upper-case letters only on the first position ... To make it short, with Mask attack we can reduce the keyspace to 52*26*26*26*26*10*10*10*10 (237.627.520.000) combinations. With the same cracking rate of 100M/s, this requires just ",(0,n.jsx)(t.strong,{children:"40 minutes"})," to complete."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"You can think of this as permutation with repetition as well. You have to get the order of each position correctly to crack the hash. However, since we know the types of values used (lowercase char, uppercase char, integer, special character, etc.), we can then reduce the amount of brute-forcing we will have to do. hashcat has a list of built-in charsets for mask attacks:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"?l = abcdefghijklmnopqrstuvwxyz\n?u = ABCDEFGHIJKLMNOPQRSTUVWXYZ\n?d = 0123456789\n?h = 0123456789abcdef\n?H = 0123456789ABCDEF\n?s = \xabspace\xbb!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\n?a = ?l?u?d?s\n?b = 0x00 - 0xff\n"})}),"\n",(0,n.jsx)(t.p,{children:'If we know a password is 8 characters long, and we know the password is all lowercase alphabets, we can set a mask to account for that exactly that. Let use the password "password" as an example:'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"hashcat -m 0 -a 3 5f4dcc3b5aa765d61d8327deb882cf99 ?l?l?l?l?l?l?l?l"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"-m 0"})," means that we are cracking an MD5 hash. The ",(0,n.jsx)(t.code,{children:"-a 3"})," means that we are using the brute-force attack. ",(0,n.jsx)(t.code,{children:"5f4dcc3b5aa765d61d8327deb882cf99"}),' is the MD5 hash for "password".  ',(0,n.jsx)(t.code,{children:"?l?l?l?l?l?l?l?l"})," is the mask."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(2446).A+"",width:"359",height:"46"})}),"\n",(0,n.jsxs)(t.p,{children:["During my research, I did see a repository of masks that are claimed to be used in corporate environments: ",(0,n.jsx)(t.a,{href:"https://github.com/golem445/Corporate_Masks",children:"https://github.com/golem445/Corporate_Masks"}),". I have not used it myself, but it does seem to be promising."]}),"\n",(0,n.jsx)(t.h2,{id:"rule-vs-mask",children:"Rule vs. Mask"}),"\n",(0,n.jsx)(t.p,{children:"While rules modify a complete string (by either appending to it or modifying it completely), a mask modifies each part of a string. In addition, a mask allows you to specify which types of values are at which location. There are times where a mask can be used to crack the same hash as a rule, but they each have different end goals. Based on my research, mask attacks do not use a wordlist, as the mask is the wordlist per-se. "}),"\n",(0,n.jsx)(t.h2,{id:"hybrid",children:"Hybrid"}),"\n",(0,n.jsx)(t.p,{children:"While doing research for this blog, I also discovered an attack that caught my attention. This is an attack that combines a dictionary on one side, and a brute-force value on the other. The brute-force can be done with masks or rules, according to the hashcat Wiki. This would be attack mode 6 or 7 (depending on position of wordlist and mask) from the hashcat arguments:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(1943).A+"",width:"272",height:"190"})}),"\n",(0,n.jsxs)(t.p,{children:['Lets go with the example of "testing123" again. For this we create a .dict file to specify that this will be our dictionary/wordlist to be used for this attack. I will add "testing" to this file. Since we know the password has three numbers at the end, we will use the mask of `?d?d?d`. The full command would be the following:',(0,n.jsx)(t.code,{children:"hashcat -a 6 -m 0 hash hash.dict ?d?d?d"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(8177).A+"",width:"428",height:"41"})}),"\n",(0,n.jsx)(t.p,{children:"The perk of using the Hybrid mode for me is saving the time I would need to use cewl or crunch to generate multiple wordlists and then run each wordlist through hashcat."}),"\n",(0,n.jsx)(t.h2,{id:"purple-rain-princeprocessor",children:"Purple Rain (princeprocessor)"}),"\n",(0,n.jsxs)(t.p,{children:["I had not heard about this attack until I saw it referenced on ",(0,n.jsx)(t.a,{href:"https://github.com/J3rryBl4nks/PasswordCrackingMethodology",children:"J3rryBl4nks' PasswordCrackingMethodology repo"}),". This can be considered as an advanced Combinator attack. The description provided by ",(0,n.jsx)(t.a,{href:"https://www.netmux.com/blog/purple-rain-attack",children:"netmux"})," explains it really well:"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"It's gonna give you password patterns and rule sets that you'd NEVER come up with on your own. It is very useful at chaining together usable patterns and passwords, and when left on it's own, supplied with a simple dictionary, could easily crack 75% of the LinkedIn dataset in 24hrs. Are ALL the patterns and passwords going to be useful? No. Are you going to run this attack many times and NOT crack the critical hashes you need? Yes. BUT one day, at some point, this attack will run and these magical cracked hashes will start slowly trickling down from the password gods filling your terminal."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["If you want to read more about it, I would recommend checking out ",(0,n.jsx)(t.a,{href:"https://reusablesec.blogspot.com/2014/12/tool-deep-dive-prince.html",children:"https://reusablesec.blogspot.com/2014/12/tool-deep-dive-prince.html"})," as well."]}),"\n",(0,n.jsx)(t.p,{children:'I liked the idea behind this attack because it does two things: assists with removing bias and "randomizes" the potential password generation. This definitely has the "so crazy that it might just work" feel to it. The following three items are needed for this attack:'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The hashcat binary"}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/hashcat/princeprocessor",children:"princeprocessor Hashcat Utility"})," (does not seem to be default in Kali installs)"]}),"\n",(0,n.jsxs)(t.li,{children:["List of dictionaries","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["J3rryBl4nks mentions they use the hashkiller-dict.txt wordlist from ",(0,n.jsx)(t.a,{href:"https://hashkiller.io/download",children:"https://hashkiller.io/download"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We can then use the following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"shuf dict.txt | pp64.bin --pw-min=8 | hashcat -a 0 -m MODE_HERE -w 4 -O hashes.txt -g 300000\n# shuf - shuffle our dictionary before piping into PRINCEprocessor\n# dict.txt - Targeted or General Purpose dictionary of your choosing\n# pp64.bin - PRINCEprocessor utility from Hashcat\n# --pw-min=8 - tells PRINCE to generate minimum length of 8+ character passwords\n# hashcat -a 0 - starts Hashcat in Straight mode in order to take stdin input\n# -m MODE_HERE - specify hash mode number, for instance -m 1000 is NTLM\n# -w 4 - tells Hashcat to use highest workload setting\n# hashes.txt - your file containing hashes to crack\n# -g 300000 - tells Hashcat to generate 300,000 random rules\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["Based on ",(0,n.jsx)(t.a,{href:"https://reusablesec.blogspot.com/2014/12/tool-deep-dive-prince.html",children:"Matt Weir's research"}),', it seems that dictionary attacks perform much better than the princeprocessor attack over their cracking sessions. However, since princeprocessor generates its rules automatically on the go, it keeps on running even after a rule set is completed. Based on my own research, this attack seems to be a last resort for cracking hashes, since you can run it and "forget about it". As pen-tests have deadlines, I would recommend running this as soon as you can, while still running the standard dictionary attacks separately (if you have the bandwidth).']})}),"\n",(0,n.jsx)(t.h2,{id:"alternative-dictionaries",children:"Alternative Dictionaries"}),"\n",(0,n.jsxs)(t.p,{children:["When it comes to password cracking wordlists, the defaults that people go to are rockyou.txt and any of the ",(0,n.jsx)(t.a,{href:"https://github.com/danielmiessler/SecLists/tree/master/Passwords",children:"SecLists"})," wordlists. There were times I had participated in Capture The Flag events where rockyou.txt or some of the SecLists wordlists did not crack the hash. This was without any rules or masks attached. For those instances, I relied on other dictionaries. I have listed a couple others below:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://weakpass.com/",children:"Weakpass"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/berzerk0/Probable-Wordlists/tree/master/Real-Passwords",children:"berzerk0/Probable-Wordlists"})}),"\n",(0,n.jsxs)(t.p,{children:["There were also times where I had created my own dictionaries based on the scenario. For those, I ended up using ",(0,n.jsx)(t.a,{href:"https://www.kali.org/tools/crunch/",children:"crunch"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/sc0tfree/mentalist",children:"Mentalist"}),", or ",(0,n.jsx)(t.a,{href:"https://www.harisqazi.com/scripts/wordlist-generator",children:"my own wordlist generator"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"password-analysis",children:"Password Analysis"}),"\n",(0,n.jsx)(t.p,{children:"Password analysis can be used to create rules and masks that might be more specific to an organization or an individual. People are known to re-use passwords for multiple accounts, so analyzing that data can be a great source to work off of for us. Analysis can be done manually or automatically. I personally have done it manually by using other breaches a person has been in to assume what passwords they might use next. Using that assumption, you can create a possible password wordlist, and then add a rule or mask to that to crack the new hash(es). I have found some automated tools that might assist with password analysis as well:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/shmuelamar/cracken",children:"shmuelamar/cracken"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/digininja/pipal",children:"digininja/pipal"})}),"\n",(0,n.jsx)(t.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,n.jsx)(t.p,{children:'There are two main use cases that comes to mind when it comes to using advanced hash cracking strategies. From a pen-testing perspective, it gives you a way to break free from the dictionary itself and be able to manipulate it the way you want. Using masks, or even tools such as cewl and crunch, you can create your own wordlists and are able to do more. If we are given a corporate password policy, we can use that to remove all passwords from rockyou.txt that would not be possible with the policy (ex. passwords that are too short). Using something like the "Purple Rain" attack, we can then have an automated way of creating rules, thus giving us an opportunity to crack unique password formats.'}),"\n",(0,n.jsxs)(t.p,{children:["From an OSINT perspective, you can use hashes cracked from other breaches to assume passwords for other platforms. If you are trying to crack a hash of a whale (high profile executive), you can use items related to them (kids, parents, pets, etc.) to create possible passwords. In addition to that, you can use platforms such as DeHashed and HaveIBeenPwned to see what breaches their personal email was part of. Then cracking those hashes we can assume what their password can be for this platform as well. There have been times where a password has told me more than I needed about a person. First, it told me if they might have other email accounts as well (since you can see other accounts in a breach with the same hash/password). It also told me keywords that might mean something to the user. Those keywords can be pivot points themselves or reemphasize other pivot points you had previously discovered. The goal is not to log into other platforms using a subject's/target's credentials, ",(0,n.jsx)(t.strong,{children:"that is NOT OSINT and is illegal"}),". Using the information in just the password to create pivot points is OSINT."]}),"\n",(0,n.jsx)(t.p,{children:"Are these use cases really niche. Yes, yes they are. They are also realistic and cases I have encountered myself or personally know others who have."}),"\n",(0,n.jsx)(t.h2,{id:"sources",children:"Sources"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://hashcat.net/wiki/doku.php?id=rule_based_attack",children:"https://hashcat.net/wiki/doku.php?id=rule_based_attack"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.4armed.com/blog/hashcat-rule-based-attack/",children:"https://www.4armed.com/blog/hashcat-rule-based-attack/"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.kitploit.com/2022/08/awesome-password-cracking-curated-list.html",children:"https://www.kitploit.com/2022/08/awesome-password-cracking-curated-list.html"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://hashcat.net/wiki/doku.php?id=mask_attack",children:"https://hashcat.net/wiki/doku.php?id=mask_attack"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://hashcat.net/wiki/doku.php?id=hybrid_attack",children:"https://hashcat.net/wiki/doku.php?id=hybrid_attack"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/J3rryBl4nks/PasswordCrackingMethodology",children:"https://github.com/J3rryBl4nks/PasswordCrackingMethodology"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.netmux.com/blog/purple-rain-attack",children:"https://www.netmux.com/blog/purple-rain-attack"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://reusablesec.blogspot.com/2014/12/tool-deep-dive-prince.html",children:"https://reusablesec.blogspot.com/2014/12/tool-deep-dive-prince.html"})}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1833:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/image747-378ac071869208522f05d1389dc81204.png"},2446:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/image748-c206d1853bfdf3f0222b671dfd84f3e9.png"},1943:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/image749-51be9cd91ec16e368c2ed3643583f52a.png"},8177:(e,t,s)=>{s.d(t,{A:()=>a});const a="data:image/png;base64,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"},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var a=s(6540);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);