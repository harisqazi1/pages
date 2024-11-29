"use strict";(self.webpackChunknew_blog=self.webpackChunknew_blog||[]).push([[420],{6350:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"configurations/digital-backups","title":"Backups","description":"Discussion on Backups","source":"@site/docs/configurations/digital-backups.md","sourceDirName":"configurations","slug":"/configurations/digital-backups","permalink":"/configurations/digital-backups","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"slug":"/configurations/digital-backups","description":"Discussion on Backups"},"sidebar":"tutorialSidebar","previous":{"title":"PC Gaming","permalink":"/configurations/pc-gaming"},"next":{"title":"Operations Security (OPSEC)","permalink":"/category/operations-security-opsec"}}');var a=n(4848),i=n(8453);const r={sidebar_position:6,slug:"/configurations/digital-backups",description:"Discussion on Backups"},o="Backups",c={},l=[{value:"Physical and Digital Data",id:"physical-and-digital-data",level:2},{value:"Backup Protocols",id:"backup-protocols",level:2},{value:"Drive Testing",id:"drive-testing",level:2},{value:"Encryption",id:"encryption",level:2},{value:"Backup Lifestyle",id:"backup-lifestyle",level:2},{value:"Practical Application",id:"practical-application",level:2},{value:"Sources",id:"sources",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"backups",children:"Backups"})}),"\n",(0,a.jsx)(t.p,{children:"Backups are a necessity in case of failure. Whether it is disk/drive or software failure, you want to have backups in place to make sure you are able to get back on track. This post is the current configuration I use for backing up my data."}),"\n",(0,a.jsx)(t.h2,{id:"physical-and-digital-data",children:"Physical and Digital Data"}),"\n",(0,a.jsxs)(t.p,{children:["It is important to have all of your data in one place. I prefer the digital world, as this makes backing up that much easier. I scan all of my documents using a scanner application (which has network access disabled). If you prefer a more robust option, Michael Bazzell mentions Vuescan (",(0,a.jsx)(t.a,{href:"https://www.hamrick.com/",children:"https://www.hamrick.com/"}),") in his books. This paid solution has drivers that work with 7400 scanners, allowing you to continue using a scanner/printer you already have lying around."]}),"\n",(0,a.jsxs)(t.p,{children:["You can also choose the physical option here and have everything printed out on paper. One option for that would be ",(0,a.jsx)(t.a,{href:"https://terraslatepaper.com/",children:"TerraSlate"}),", who sell waterproof paper. This can protect your paper from water/liquid damage."]}),"\n",(0,a.jsx)(t.h2,{id:"backup-protocols",children:"Backup Protocols"}),"\n",(0,a.jsx)(t.p,{children:"One of the most popular personal backup strategies is the 3-2-1 backup method. This snippet from Seagate says it well [1]:"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"3 Copies of Data \u2013 Maintain three copies of data\u2014the original, and at least two copies."}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"2 Different Media \u2013 Use two different media types for storage. This can help reduce any impact that may be attributable to one specific storage media type. It\u2019s your decision as to which storage medium will contain the original data and which will contain any of the additional copies."}),"\n"]}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"1 Copy Offsite \u2013 Keep one copy offsite to prevent the possibility of data loss due to a site-specific failure."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:'Using this format will help you get back up and running much faster than starting off from scratch. One thing to note with backups is that they work off of a proactive approach. This means you have to not only do this once, but maintain a healthy backup lifestyle in order to prevent data loss as much as you can. You can also have your own "3-2-1-#-#-#" strategy where you add your own customization to the basic strategy. You do have to take the cost of the storage devices into mind, whether it is cloud storage providers or even for a hard drive purchase. Here is my current setup.'}),"\n",(0,a.jsx)(t.p,{children:"There are multiple ways of following the rule. Here are some of the other location suggestions:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Backups on disk (DAS, SAN, NAS, and appliances)"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Backups on tape"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Backups on removable storage"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Storage snapshots"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"External storage stored at a friends/relatives house"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"External storage stored in a bank vault"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"There are a lot of complications to consider for backups as well:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Weather"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Potential Fire"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Electric Static (while moving the device(s))"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Home Invasion"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Police Confiscation"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Drive/Disk Failure"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"etc."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Using the 3-2-1 is great a way of being proactive and making your data be redundant in case of the aforementioned complications."}),"\n",(0,a.jsxs)(t.p,{children:["I won't share my ",(0,a.jsx)(t.strong,{children:"exact"})," strategy due to OPSEC measures, but it is a more mature and robust version of the 3-2-1 protocol."]}),"\n",(0,a.jsx)(t.h2,{id:"drive-testing",children:"Drive Testing"}),"\n",(0,a.jsxs)(t.p,{children:["In order to make sure that the drives you have are functioning properly, there are checks you can\ndo to make sure of that. You can kind of think of this as stress testing the system to make sure\nit is able to function as expected. There are a lot of good recommendations on r/DataHoarder\nat ",(0,a.jsx)(t.a,{href:"https://www.reddit.com/r/DataHoarder/wiki/index/#wiki_possible_pages.2Farticles_for_wiki",children:"Reddit - r/Datahoarder - Wiki"})," (Check 5.3.1-5.3.4). From my research, they essentially break down to the following tests (some are for Linux and others for Windows):"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Test"}),(0,a.jsx)(t.th,{children:"Command(s)"}),(0,a.jsx)(t.th,{children:"Note"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"SMART long test"}),(0,a.jsxs)(t.td,{children:[(0,a.jsx)(t.code,{children:"smartctl -A /dev/sdxx"}),"\xa0then\xa0",(0,a.jsx)(t.code,{children:"smartctl -t long /dev/sdxx"})]}),(0,a.jsx)(t.td,{children:"Device has to be SMART compatible"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"SMART short test"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"smartctl -t short /dev/sdxx"})}),(0,a.jsx)(t.td,{children:"Device has to be SMART compatible"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"badblocks"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"badblocks -wsv -b 4096 -t 0x55 -o\xa0~/output_file.txt /dev/sdxx"})}),(0,a.jsx)(t.td,{children:"badblocks is a Linux utility to check for bad sectors on a disk/drive"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"fio"}),(0,a.jsx)(t.td,{children:(0,a.jsx)(t.code,{children:"sudo fio --filename=/dev/sdxx --name=randwrite\xa0--ioengine=sync --iodepth=1 --rw=randrw\xa0--rwmixread=50 --rwmixwrite=50 --bs=4k\xa0--direct=0 --numjobs=8 --size=300G\xa0--runtime=7200 --group_reporting"})}),(0,a.jsx)(t.td,{children:"fio spawns a number of threads or processes during a particular type of I/O action"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"h2testw"}),(0,a.jsxs)(t.td,{children:["Has GUI, read more: ",(0,a.jsx)(t.a,{href:"https://3ds.hacks.guide/h2testw-(windows).html",children:"H2testw (Windows) | 3DS Hacks Guide"})]}),(0,a.jsx)(t.td,{})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Hard Disk Sentinel"}),(0,a.jsxs)(t.td,{children:["Has GUI, read more: ",(0,a.jsx)(t.a,{href:"https://www.hdsentinel.com/",children:"https://www.hdsentinel.com/"})]}),(0,a.jsx)(t.td,{})]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["I would also recommend checking out ",(0,a.jsx)(t.a,{href:"https://github.com/Spearfoot/disk-burnin-and-testing",children:"GitHub - Spearfoot/disk-burnin-and-testing: Shell script for burn-in and testing of new or re-purposed drives"})," for\nthose who use Linux. Do your own research on these before using them. I have seen\npeople use SMART tests for health checking drives and the rest of the software for actually\nstress testing the drive. Everybody has a different preference for how much to stress test their\nsystems. I myself used the following command ",(0,a.jsx)(t.code,{children:"sudo badblocks -wsv -b 4096 -t 0x55 -o output.txt /dev/sdxx"}),", and it took 23 hours 54 minutes and 51 seconds to complete for a 6 TB hard drive. After this, I encrypted the drive."]}),"\n",(0,a.jsx)(t.h2,{id:"encryption",children:"Encryption"}),"\n",(0,a.jsx)(t.p,{children:"From the CIA triad (Confidentiality, Integrity, and Availability), encryption falls under the Confidentiality principle. This means that only authorized users are allowed to access/modify the data. In order to apply this principle to our data, we need to encrypt our data so only we can see it. Although there are brute force attempts possible to find out a password, I will not go deep into that here. Here are some tools I use for encryption:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"VeraCrypt (External Drive - Full Disk Encryption)"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Cryptomator (Cloud Storage)"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"LUKS (Linux Full Disk Encryption)"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["There is more software mentioned at: ",(0,a.jsx)(t.a,{href:"https://www.privacyguides.org/encryption/",children:"https://www.privacyguides.org/encryption/"})," if you are interested. For encryption passwords, make sure you use a password manager and create long passwords or create long passphrases."]}),"\n",(0,a.jsx)(t.h2,{id:"backup-lifestyle",children:"Backup Lifestyle"}),"\n",(0,a.jsx)(t.p,{children:'After your device is encrypted, and your file system of choice is chosen, the last step is to actually back up the data. The first time you are backing up data, it is usually a full backup. "The primary advantage to performing a full backup during every operation is that a complete copy of all data is available with a single set of media". This takes the longest time due to the amount of data being transferred. After the full backup is completed, the next two backup operations become available to you: incremental backups and differential backups. Incremental backups will copy only the data that has changed since the last backup operation of any type. Incremental backups keep on adding files that are new or modified from the last backup. Incremental backups do not take into account if you previously did a full backup or an incremental backup. Differential backups, on the other hand, do take that into account. A differential is similar to an incremental in the first time it is run. "However, each time it is run afterwards, it will continue to copy all data changed since the previous full backup. Thus, it will store more backed up data than an incremental on subsequent operations, although typically far less than a full backup. Moreover, differential backups require more space and time to complete than incremental backups, although less than full backups". With that being said, here are some tools I use for backups:'}),"\n",(0,a.jsx)(t.p,{children:"Tools:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"FreeFileSync"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"D\xe9j\xe0 Dup Backups (for backing up Linux home directory files)"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"rsync (for syncing files from one folder to another)"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"BorgBackup (Restic is another alternative)"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"All of these work off of a incremental backup format, at least in my usage. After the backups are complete, you have to setup a cadence at which you will keep backing up on. For some it's daily, for others, its monthly. It is different for everybody."}),"\n",(0,a.jsx)(t.h2,{id:"practical-application",children:"Practical Application"}),"\n",(0,a.jsxs)(t.p,{children:["I have multiple data sets: personal data, and what I consider larger sets of data. As such, I am still able to follow the 3-2-1 rule for both sets. I won't go into too much detail of my own data, but I will use gaming as an example here. ",(0,a.jsx)(t.strong,{children:"This is how I back up my data and maintain a backup life cycle."})]}),"\n",(0,a.jsx)(t.p,{children:"In this example, you have 10 GB of personal data. This includes invoices/receipts, tax documents, backups of software configurations, house deeds, etc. You also have about 200 GB of DRM-free video games purchased from GOG and/or Itch. Your cloud only has a 50 GB limit for cloud storage."}),"\n",(0,a.jsx)(t.p,{children:"Here is one way you can go about applying a backup policy:"}),"\n",(0,a.jsx)(t.mermaid,{value:"flowchart LR\n   A[Full-Disk Encrypted PC - 10 GB personal data & 200 GB game data] ==> B[Veracrypt-encrypted 250 GB Hard Drive #1 - 10 GB personal data & 200 GB game data]\n   A[Full-Disk Encrypted PC - 10 GB personal data & 200 GB game data] ==> C[Veracrypt-encrypted 250 GB Hard Drive #2 - 10 GB personal data & 200 GB game data]\n   A[Full-Disk Encrypted PC - 10 GB personal data & 200 GB game data] ==> D[Privacy-respecting Cloud with 50GB limit - 10 GB personal data in Cryptomator Container]\n   A[Full-Disk Encrypted PC - 10 GB personal data & 200 GB game data] ==> E[Veracrypt-encrypted 200 GB Hard Drive #3 at a Self Storage Unit - 200 GB game data]"}),"\n",(0,a.jsxs)(t.p,{children:["This is not my workflow exactly, but this is a close version of it. When the initial backup is completed, every X (days, weeks, months) frequency, you update the data in all of those locations. You can use FreeFileSync, rsync. rclone, restic, borg, etc. to begin syncing the files across the locations. For example, I sometimes use the following rsync command, mentioned by someone I know: ",(0,a.jsx)(t.code,{children:"rsync -aAXv source destination"}),". This does the following: archives the data, syncs ACLs, update the destination extended attributes, and outputs with verbosity. ",(0,a.jsx)(t.code,{children:"rsync -av source destination"})," works well as well for my use."]}),"\n",(0,a.jsx)(t.h2,{id:"sources",children:"Sources"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.seagate.com/blog/what-is-a-3-2-1-backup-strategy/",children:"https://www.seagate.com/blog/what-is-a-3-2-1-backup-strategy/"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.veeam.com/blog/321-backup-rule.html",children:"https://www.veeam.com/blog/321-backup-rule.html"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.csoonline.com/article/3519908/the-cia-triad-definition-components-and-examples.html",children:"https://www.csoonline.com/article/3519908/the-cia-triad-definition-components-and-examples.html"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://flathub.org/apps/details/org.gnome.DejaDup",children:"https://flathub.org/apps/details/org.gnome.DejaDup"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://rsync.samba.org/",children:"https://rsync.samba.org/"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://www.techtarget.com/searchdatabackup/feature/Full-incremental-or-differential-How-to-choose-the-correct-backup-type",children:"https://www.techtarget.com/searchdatabackup/feature/Full-incremental-or-differential-How-to-choose-the-correct-backup-type"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);