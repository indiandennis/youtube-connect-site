var app=function(){"use strict";function e(){}function t(e){return e()}function a(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function n(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function s(e,t,a){e.insertBefore(t,a||null)}function l(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function u(){return e=" ",document.createTextNode(e);var e}function d(e,t,a,r){return e.addEventListener(t,a,r),()=>e.removeEventListener(t,a,r)}function p(e,t,a){null==a?e.removeAttribute(t):e.getAttribute(t)!==a&&e.setAttribute(t,a)}function m(e,t){e.value=null==t?"":t}function h(e,t,a,r){e.style.setProperty(t,a,r?"important":"")}let g;function f(e){g=e}const b=[],y=[],v=[],w=[],k=Promise.resolve();let x=!1;function j(e){v.push(e)}let $=!1;const z=new Set;function q(){if(!$){$=!0;do{for(let e=0;e<b.length;e+=1){const t=b[e];f(t),C(t.$$)}for(b.length=0;y.length;)y.pop()();for(let e=0;e<v.length;e+=1){const t=v[e];z.has(t)||(z.add(t),t())}v.length=0}while(b.length);for(;w.length;)w.pop()();x=!1,$=!1,z.clear()}}function C(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const _=new Set;const E="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function S(e,t){-1===e.$$.dirty[0]&&(b.push(e),x||(x=!0,k.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function T(n,i,s,c,u,d,p=[-1]){const m=g;f(n);const h=i.props||{},b=n.$$={fragment:null,ctx:null,props:d,update:e,not_equal:u,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:a(),dirty:p};let y=!1;if(b.ctx=s?s(n,h,(e,t,...a)=>{const r=a.length?a[0]:t;return b.ctx&&u(b.ctx[e],b.ctx[e]=r)&&(b.bound[e]&&b.bound[e](r),y&&S(n,e)),t}):[],b.update(),y=!0,r(b.before_update),b.fragment=!!c&&c(b.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);b.fragment&&b.fragment.l(e),e.forEach(l)}else b.fragment&&b.fragment.c();i.intro&&((v=n.$$.fragment)&&v.i&&(_.delete(v),v.i(w))),function(e,a,n){const{fragment:i,on_mount:s,on_destroy:l,after_update:c}=e.$$;i&&i.m(a,n),j(()=>{const a=s.map(t).filter(o);l?l.push(...a):r(a),e.$$.on_mount=[]}),c.forEach(j)}(n,i.target,i.anchor),q()}var v,w;f(m)}const P=["abandon","ability","able","about","above","absent","absorb","abstract","absurd","abuse","access","accident","account","accuse","achieve","acid","acoustic","acquire","across","act","action","actor","actress","actual","adapt","add","addict","address","adjust","admit","adult","advance","advice","aerobic","affair","afford","afraid","again","age","agent","agree","ahead","aim","air","airport","aisle","alarm","album","alcohol","alert","alien","all","alley","allow","almost","alone","alpha","already","also","alter","always","amateur","amazing","among","amount","amused","analyst","anchor","ancient","anger","angle","angry","animal","ankle","announce","annual","another","answer","antenna","antique","anxiety","any","apart","apology","appear","apple","approve","april","arch","arctic","area","arena","argue","arm","armed","armor","army","around","arrange","arrest","arrive","arrow","art","artefact","artist","artwork","ask","aspect","assault","asset","assist","assume","asthma","athlete","atom","attack","attend","attitude","attract","auction","audit","august","aunt","author","auto","autumn","average","avocado","avoid","awake","aware","away","awesome","awful","awkward","axis","baby","bachelor","bacon","badge","bag","balance","balcony","ball","bamboo","banana","banner","bar","barely","bargain","barrel","base","basic","basket","battle","beach","bean","beauty","because","become","beef","before","begin","behave","behind","believe","below","belt","bench","benefit","best","betray","better","between","beyond","bicycle","bid","bike","bind","biology","bird","birth","bitter","black","blade","blame","blanket","blast","bleak","bless","blind","blood","blossom","blouse","blue","blur","blush","board","boat","body","boil","bomb","bone","bonus","book","boost","border","boring","borrow","boss","bottom","bounce","box","boy","bracket","brain","brand","brass","brave","bread","breeze","brick","bridge","brief","bright","bring","brisk","broccoli","broken","bronze","broom","brother","brown","brush","bubble","buddy","budget","buffalo","build","bulb","bulk","bullet","bundle","bunker","burden","burger","burst","bus","business","busy","butter","buyer","buzz","cabbage","cabin","cable","cactus","cage","cake","call","calm","camera","camp","can","canal","cancel","candy","cannon","canoe","canvas","canyon","capable","capital","captain","car","carbon","card","cargo","carpet","carry","cart","case","cash","casino","castle","casual","cat","catalog","catch","category","cattle","caught","cause","caution","cave","ceiling","celery","cement","census","century","cereal","certain","chair","chalk","champion","change","chaos","chapter","charge","chase","chat","cheap","check","cheese","chef","cherry","chest","chicken","chief","child","chimney","choice","choose","chronic","chuckle","chunk","churn","cigar","cinnamon","circle","citizen","city","civil","claim","clap","clarify","claw","clay","clean","clerk","clever","click","client","cliff","climb","clinic","clip","clock","clog","close","cloth","cloud","clown","club","clump","cluster","clutch","coach","coast","coconut","code","coffee","coil","coin","collect","color","column","combine","come","comfort","comic","common","company","concert","conduct","confirm","congress","connect","consider","control","convince","cook","cool","copper","copy","coral","core","corn","correct","cost","cotton","couch","country","couple","course","cousin","cover","coyote","crack","cradle","craft","cram","crane","crash","crater","crawl","crazy","cream","credit","creek","crew","cricket","crime","crisp","critic","crop","cross","crouch","crowd","crucial","cruel","cruise","crumble","crunch","crush","cry","crystal","cube","culture","cup","cupboard","curious","current","curtain","curve","cushion","custom","cute","cycle","dad","damage","damp","dance","danger","daring","dash","daughter","dawn","day","deal","debate","debris","decade","december","decide","decline","decorate","decrease","deer","defense","define","defy","degree","delay","deliver","demand","demise","denial","dentist","deny","depart","depend","deposit","depth","deputy","derive","describe","desert","design","desk","despair","destroy","detail","detect","develop","device","devote","diagram","dial","diamond","diary","dice","diesel","diet","differ","digital","dignity","dilemma","dinner","dinosaur","direct","dirt","disagree","discover","disease","dish","dismiss","disorder","display","distance","divert","divide","divorce","dizzy","doctor","document","dog","doll","dolphin","domain","donate","donkey","donor","door","dose","double","dove","draft","dragon","drama","drastic","draw","dream","dress","drift","drill","drink","drip","drive","drop","drum","dry","duck","dumb","dune","during","dust","dutch","duty","dwarf","dynamic","eager","eagle","early","earn","earth","easily","east","easy","echo","ecology","economy","edge","edit","educate","effort","egg","eight","either","elbow","elder","electric","elegant","element","elephant","elevator","elite","else","embark","embody","embrace","emerge","emotion","employ","empower","empty","enable","enact","end","endless","endorse","enemy","energy","enforce","engage","engine","enhance","enjoy","enlist","enough","enrich","enroll","ensure","enter","entire","entry","envelope","episode","equal","equip","era","erase","erode","erosion","error","erupt","escape","essay","essence","estate","eternal","ethics","evidence","evil","evoke","evolve","exact","example","excess","exchange","excite","exclude","excuse","execute","exercise","exhaust","exhibit","exile","exist","exit","exotic","expand","expect","expire","explain","expose","express","extend","extra","eye","eyebrow","fabric","face","faculty","fade","faint","faith","fall","false","fame","family","famous","fan","fancy","fantasy","farm","fashion","fat","fatal","father","fatigue","fault","favorite","feature","february","federal","fee","feed","feel","female","fence","festival","fetch","fever","few","fiber","fiction","field","figure","file","film","filter","final","find","fine","finger","finish","fire","firm","first","fiscal","fish","fit","fitness","fix","flag","flame","flash","flat","flavor","flee","flight","flip","float","flock","floor","flower","fluid","flush","fly","foam","focus","fog","foil","fold","follow","food","foot","force","forest","forget","fork","fortune","forum","forward","fossil","foster","found","fox","fragile","frame","frequent","fresh","friend","fringe","frog","front","frost","frown","frozen","fruit","fuel","fun","funny","furnace","fury","future","gadget","gain","galaxy","gallery","game","gap","garage","garbage","garden","garlic","garment","gas","gasp","gate","gather","gauge","gaze","general","genius","genre","gentle","genuine","gesture","ghost","giant","gift","giggle","ginger","giraffe","girl","give","glad","glance","glare","glass","glide","glimpse","globe","gloom","glory","glove","glow","glue","goat","goddess","gold","good","goose","gorilla","gospel","gossip","govern","gown","grab","grace","grain","grant","grape","grass","gravity","great","green","grid","grief","grit","grocery","group","grow","grunt","guard","guess","guide","guilt","guitar","gun","gym","habit","hair","half","hammer","hamster","hand","happy","harbor","hard","harsh","harvest","hat","have","hawk","hazard","head","health","heart","heavy","hedgehog","height","hello","helmet","help","hen","hero","hidden","high","hill","hint","hip","hire","history","hobby","hockey","hold","hole","holiday","hollow","home","honey","hood","hope","horn","horror","horse","hospital","host","hotel","hour","hover","hub","huge","human","humble","humor","hundred","hungry","hunt","hurdle","hurry","hurt","husband","hybrid","ice","icon","idea","identify","idle","ignore","ill","illegal","illness","image","imitate","immense","immune","impact","impose","improve","impulse","inch","include","income","increase","index","indicate","indoor","industry","infant","inflict","inform","inhale","inherit","initial","inject","injury","inmate","inner","innocent","input","inquiry","insane","insect","inside","inspire","install","intact","interest","into","invest","invite","involve","iron","island","isolate","issue","item","ivory","jacket","jaguar","jar","jazz","jealous","jeans","jelly","jewel","job","join","joke","journey","joy","judge","juice","jump","jungle","junior","junk","just","kangaroo","keen","keep","ketchup","key","kick","kid","kidney","kind","kingdom","kiss","kit","kitchen","kite","kitten","kiwi","knee","knife","knock","know","lab","label","labor","ladder","lady","lake","lamp","language","laptop","large","later","latin","laugh","laundry","lava","law","lawn","lawsuit","layer","lazy","leader","leaf","learn","leave","lecture","left","leg","legal","legend","leisure","lemon","lend","length","lens","leopard","lesson","letter","level","liar","liberty","library","license","life","lift","light","like","limb","limit","link","lion","liquid","list","little","live","lizard","load","loan","lobster","local","lock","logic","lonely","long","loop","lottery","loud","lounge","love","loyal","lucky","luggage","lumber","lunar","lunch","luxury","lyrics","machine","mad","magic","magnet","maid","mail","main","major","make","mammal","man","manage","mandate","mango","mansion","manual","maple","marble","march","margin","marine","market","marriage","mask","mass","master","match","material","math","matrix","matter","maximum","maze","meadow","mean","measure","meat","mechanic","medal","media","melody","melt","member","memory","mention","menu","mercy","merge","merit","merry","mesh","message","metal","method","middle","midnight","milk","million","mimic","mind","minimum","minor","minute","miracle","mirror","misery","miss","mistake","mix","mixed","mixture","mobile","model","modify","mom","moment","monitor","monkey","monster","month","moon","moral","more","morning","mosquito","mother","motion","motor","mountain","mouse","move","movie","much","muffin","mule","multiply","muscle","museum","mushroom","music","must","mutual","myself","mystery","myth","naive","name","napkin","narrow","nasty","nation","nature","near","neck","need","negative","neglect","neither","nephew","nerve","nest","net","network","neutral","never","news","next","nice","night","noble","noise","nominee","noodle","normal","north","nose","notable","note","nothing","notice","novel","now","nuclear","number","nurse","nut","oak","obey","object","oblige","obscure","observe","obtain","obvious","occur","ocean","october","odor","off","offer","office","often","oil","okay","old","olive","olympic","omit","once","one","onion","online","only","open","opera","opinion","oppose","option","orange","orbit","orchard","order","ordinary","organ","orient","original","orphan","ostrich","other","outdoor","outer","output","outside","oval","oven","over","own","owner","oxygen","oyster","ozone","pact","paddle","page","pair","palace","palm","panda","panel","panic","panther","paper","parade","parent","park","parrot","party","pass","patch","path","patient","patrol","pattern","pause","pave","payment","peace","peanut","pear","peasant","pelican","pen","penalty","pencil","people","pepper","perfect","permit","person","pet","phone","photo","phrase","physical","piano","picnic","picture","piece","pig","pigeon","pill","pilot","pink","pioneer","pipe","pistol","pitch","pizza","place","planet","plastic","plate","play","please","pledge","pluck","plug","plunge","poem","poet","point","polar","pole","police","pond","pony","pool","popular","portion","position","possible","post","potato","pottery","poverty","powder","power","practice","praise","predict","prefer","prepare","present","pretty","prevent","price","pride","primary","print","priority","prison","private","prize","problem","process","produce","profit","program","project","promote","proof","property","prosper","protect","proud","provide","public","pudding","pull","pulp","pulse","pumpkin","punch","pupil","puppy","purchase","purity","purpose","purse","push","put","puzzle","pyramid","quality","quantum","quarter","question","quick","quit","quiz","quote","rabbit","raccoon","race","rack","radar","radio","rail","rain","raise","rally","ramp","ranch","random","range","rapid","rare","rate","rather","raven","raw","razor","ready","real","reason","rebel","rebuild","recall","receive","recipe","record","recycle","reduce","reflect","reform","refuse","region","regret","regular","reject","relax","release","relief","rely","remain","remember","remind","remove","render","renew","rent","reopen","repair","repeat","replace","report","require","rescue","resemble","resist","resource","response","result","retire","retreat","return","reunion","reveal","review","reward","rhythm","rib","ribbon","rice","rich","ride","ridge","rifle","right","rigid","ring","riot","ripple","risk","ritual","rival","river","road","roast","robot","robust","rocket","romance","roof","rookie","room","rose","rotate","rough","round","route","royal","rubber","rude","rug","rule","run","runway","rural","sad","saddle","sadness","safe","sail","salad","salmon","salon","salt","salute","same","sample","sand","satisfy","satoshi","sauce","sausage","save","say","scale","scan","scare","scatter","scene","scheme","school","science","scissors","scorpion","scout","scrap","screen","script","scrub","sea","search","season","seat","second","secret","section","security","seed","seek","segment","select","sell","seminar","senior","sense","sentence","series","service","session","settle","setup","seven","shadow","shaft","shallow","share","shed","shell","sheriff","shield","shift","shine","ship","shiver","shock","shoe","shoot","shop","short","shoulder","shove","shrimp","shrug","shuffle","shy","sibling","sick","side","siege","sight","sign","silent","silk","silly","silver","similar","simple","since","sing","siren","sister","situate","six","size","skate","sketch","ski","skill","skin","skirt","skull","slab","slam","sleep","slender","slice","slide","slight","slim","slogan","slot","slow","slush","small","smart","smile","smoke","smooth","snack","snake","snap","sniff","snow","soap","soccer","social","sock","soda","soft","solar","soldier","solid","solution","solve","someone","song","soon","sorry","sort","soul","sound","soup","source","south","space","spare","spatial","spawn","speak","special","speed","spell","spend","sphere","spice","spider","spike","spin","spirit","split","spoil","sponsor","spoon","sport","spot","spray","spread","spring","spy","square","squeeze","squirrel","stable","stadium","staff","stage","stairs","stamp","stand","start","state","stay","steak","steel","stem","step","stereo","stick","still","sting","stock","stomach","stone","stool","story","stove","strategy","street","strike","strong","struggle","student","stuff","stumble","style","subject","submit","subway","success","such","sudden","suffer","sugar","suggest","suit","summer","sun","sunny","sunset","super","supply","supreme","sure","surface","surge","surprise","surround","survey","suspect","sustain","swallow","swamp","swap","swarm","swear","sweet","swift","swim","swing","switch","sword","symbol","symptom","syrup","system","table","tackle","tag","tail","talent","talk","tank","tape","target","task","taste","tattoo","taxi","teach","team","tell","ten","tenant","tennis","tent","term","test","text","thank","that","theme","then","theory","there","they","thing","this","thought","three","thrive","throw","thumb","thunder","ticket","tide","tiger","tilt","timber","time","tiny","tip","tired","tissue","title","toast","tobacco","today","toddler","toe","together","toilet","token","tomato","tomorrow","tone","tongue","tonight","tool","tooth","top","topic","topple","torch","tornado","tortoise","toss","total","tourist","toward","tower","town","toy","track","trade","traffic","tragic","train","transfer","trap","trash","travel","tray","treat","tree","trend","trial","tribe","trick","trigger","trim","trip","trophy","trouble","truck","true","truly","trumpet","trust","truth","try","tube","tuition","tumble","tuna","tunnel","turkey","turn","turtle","twelve","twenty","twice","twin","twist","two","type","typical","ugly","umbrella","unable","unaware","uncle","uncover","under","undo","unfair","unfold","unhappy","uniform","unique","unit","universe","unknown","unlock","until","unusual","unveil","update","upgrade","uphold","upon","upper","upset","urban","urge","usage","use","used","useful","useless","usual","utility","vacant","vacuum","vague","valid","valley","valve","van","vanish","vapor","various","vast","vault","vehicle","velvet","vendor","venture","venue","verb","verify","version","very","vessel","veteran","viable","vibrant","vicious","victory","video","view","village","vintage","violin","virtual","virus","visa","visit","visual","vital","vivid","vocal","voice","void","volcano","volume","vote","voyage","wage","wagon","wait","walk","wall","walnut","want","warfare","warm","warrior","wash","wasp","waste","water","wave","way","wealth","weapon","wear","weasel","weather","web","wedding","weekend","weird","welcome","west","wet","whale","what","wheat","wheel","when","where","whip","whisper","wide","width","wife","wild","will","win","window","wine","wing","wink","winner","winter","wire","wisdom","wise","wish","witness","wolf","woman","wonder","wood","wool","word","work","world","worry","worth","wrap","wreck","wrestle","wrist","write","wrong","yard","year","yellow","you","young","youth","zebra","zero","zone","zoo"];const{window:L}=E;function N(e){let t,a,o,n,i;return{c(){t=c("input"),a=u(),o=c("button"),o.textContent="Connect",p(t,"class","long-input"),p(t,"type","text"),p(t,"placeholder","Eight word mnemonic")},m(r,l){s(r,t,l),m(t,e[2]),s(r,a,l),s(r,o,l),n||(i=[d(t,"input",e[12]),d(o,"click",e[3])],n=!0)},p(e,a){4&a&&t.value!==e[2]&&m(t,e[2])},d(e){e&&l(t),e&&l(a),e&&l(o),n=!1,r(i)}}}function A(e){let t,a,o,n,g,f,b,y,v,w,k,x,j,$,z,q,C,_,E;return{c(){t=c("div"),a=c("div"),o=c("button"),o.textContent="Skip -10",n=u(),g=c("button"),g.textContent="Play/Pause",f=u(),b=c("button"),b.textContent="Skip +30",y=u(),v=c("div"),w=c("button"),w.textContent="Mute",k=u(),x=c("input"),j=u(),$=c("div"),z=c("button"),z.textContent="Previous",q=u(),C=c("button"),C.textContent="Next",p(a,"class","controls"),p(x,"type","range"),p(x,"min","0"),p(x,"max","100"),p(v,"class","controls"),h($,"display","flex"),h($,"flex-direction","row"),h($,"justify-content","space-between"),p(t,"class","panel")},m(r,l){s(r,t,l),i(t,a),i(a,o),i(a,n),i(a,g),i(a,f),i(a,b),i(t,y),i(t,v),i(v,w),i(v,k),i(v,x),m(x,e[1].volume),i(t,j),i(t,$),i($,z),i($,q),i($,C),_||(E=[d(o,"click",e[10]),d(g,"click",e[6]),d(b,"click",e[11]),d(w,"click",e[7]),d(x,"change",e[13]),d(x,"input",e[13]),d(z,"click",e[9]),d(C,"click",e[8])],_=!0)},p(e,t){2&t&&m(x,e[1].volume)},d(e){e&&l(t),_=!1,r(E)}}}function M(t){let a,o,n,m,g,f,b,y,v,w=!t[0]&&N(t),k=t[0]&&A(t);return{c(){a=c("main"),o=c("div"),o.innerHTML='<a href="https://youtubeconnect.ameyathakur.com/">Youtube Connect</a> \n    <a href="https://youtubeconnect.ameyathakur.com/">Extension</a>',n=u(),m=c("div"),g=u(),f=c("div"),w&&w.c(),b=u(),k&&k.c(),p(o,"class","header"),h(m,"height","25vh"),p(f,"class","content"),p(a,"class","container svelte-5li0bo")},m(e,r){s(e,a,r),i(a,o),i(a,n),i(a,m),i(a,g),i(a,f),w&&w.m(f,null),i(f,b),k&&k.m(f,null),y||(v=[d(L,"keydown",t[4]),d(L,"hashchange",t[5])],y=!0)},p(e,[t]){e[0]?w&&(w.d(1),w=null):w?w.p(e,t):(w=N(e),w.c(),w.m(f,b)),e[0]?k?k.p(e,t):(k=A(e),k.c(),k.m(f,null)):k&&(k.d(1),k=null)},i:e,o:e,d(e){e&&l(a),w&&w.d(),k&&k.d(),y=!1,r(v)}}}const O="https://api.youtubeconnect.ameyathakur.com";function F(e,t,a){let r,o,n=!1,i="",s=window.location.hash.substr(1);const l=()=>{fetch(O+"/update/"+s,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>{if(200!==e.status)return a(0,n=!1),a(1,r=null),a(14,s=""),void console.log("Looks like there was a problem. Status Code: "+e.status)}).catch(e=>{a(0,n=!1),a(1,r=null),a(14,s=""),console.log("Fetch Error : ",e)}),r&&-1!==r.action&&a(1,r.action=-1,r)},c=()=>{var e=function(e){let t=e.split(" "),a="",r="";if(t.length<8)return"";t.forEach(e=>{P.find((t,r)=>t===e&&(a+=r.toString(2).padStart(11,"0"),!0))});for(var o=0;o<11;o++)r+=String.fromCharCode(parseInt(a.slice(0,8),2)),a=a.slice(8);return btoa(r).replace(/\//g,"_").replace(/\+/g,"-")}(i);""!=e&&a(14,s=e)};return e.$$.update=()=>{var t,i;16384&e.$$.dirty&&""!==s&&(console.log("running fetch"),console.log(s),fetch(O+"/get/"+s).then(e=>{if(200!==e.status)return a(0,n=!1),a(1,r=null),a(14,s=""),void console.log("Looks like there was a problem. Status Code: "+e.status);e.json().then(e=>{a(1,r=e),a(0,n=!0)})}).catch(e=>{a(0,n=!1),a(1,r=null),console.log("Fetch Error : ",e)})),2&e.$$.dirty&&r&&(t=l,i=15,clearTimeout(o),o=setTimeout(()=>{t()},i))},[n,r,i,c,e=>{13===e.keyCode&&c()},()=>{a(14,s=window.location.hash.substr(1))},()=>{!0===r.paused?a(1,r.paused=!1,r):a(1,r.paused=!0,r)},()=>{!0===r.mute?a(1,r.mute=!1,r):a(1,r.mute=!0,r)},()=>{a(1,r.action=1,r)},()=>{a(1,r.action=0,r)},()=>{a(1,r.action=2,r)},()=>{a(1,r.action=3,r)},function(){i=this.value,a(2,i)},function(){var e;r.volume=""===(e=this.value)?void 0:+e,a(1,r),a(14,s)}]}return new class extends class{$destroy(){!function(e,t){const a=e.$$;null!==a.fragment&&(r(a.on_destroy),a.fragment&&a.fragment.d(t),a.on_destroy=a.fragment=null,a.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(t),()=>{const e=a.indexOf(t);-1!==e&&a.splice(e,1)}}$set(){}}{constructor(e){super(),T(this,e,F,M,n,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
