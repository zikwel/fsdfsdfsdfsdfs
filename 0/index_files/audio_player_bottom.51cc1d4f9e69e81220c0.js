﻿(self.webpackChunkvk=self.webpackChunkvk||[]).push([[1619],{32911:function(e,t,a){"use strict";a.d(t,{audioRepeat:function(){return o}});var o={NONE:0,ALL:1,ONE:2}},41898:function(e,t,a){"use strict";a.d(t,{AudioPlayerBase:function(){return r}});var o=a(2947),i=a(134),s=a(76567),n=a(49849),d=a(79957);class r extends o.Component{constructor(){super(),this.AUDIO_COOKIE="remixcurr_audio",this.AUDIO_COOKIE_OLD="remixmaudio",this.AUDIO_PLAYER_CLASS="vk_audio_player",this.STAT_KEY="mvk_audio_player",this.audio=window.audio,this.state=this.getState(),this.setState({expanded:!1}),this.audio.subscribe(i.events.PLAY,(()=>this.updateState())),this.audio.subscribe(i.events.PLAY_REQUESTED,(()=>this.updateState())),this.audio.subscribe(i.events.PAUSE,(()=>this.updateState())),this.audio.subscribe(i.events.SEEK,(()=>this.updateState())),this.audio.subscribe(i.events.PROGRESS,(()=>this.updateProgress())),this.audio.subscribe(i.events.STOP,(()=>this.updateState())),this.audio.subscribe(i.events.PLAYLIST_CHANGED,(()=>{this.audio.shuffled&&this.audio.shuffle(),this.audio.canRepeat||this.audio.repeat(),this.updateState()})),this.audio.subscribe(i.events.AD_READY,(()=>this.updateState())),this.audio.subscribe(i.events.AD_DEINITED,(()=>this.updateState())),this.audio.subscribe(i.events.AD_STARTED,(()=>this.updateState())),this.audio.subscribe(i.events.AD_COMPLETED,(()=>this.updateState())),window.page.onChange((()=>this.updateState()))}updateProgress(){var e=this.audio.getCurrentProgress(),t=this.audio.duration();this.setState({loaded:this.audio.loaded(),progress:e,listened:this.formatTime(e*t),remained:this.formatTime(-(t-e*t))})}updateState(){this.setState(this.getState())}getState(){var{title:e,subTitle:t,performer:a,mainArtists:o,featArtists:i,isExplicit:d,fullId:r,coverUrl_p:l,coverUrl_s:u}=this.audio.getCurrent()||{};(0,s.setCookie)(this.AUDIO_COOKIE,r,1),e?document.body.classList.add(this.AUDIO_PLAYER_CLASS):document.body.classList.remove(this.AUDIO_PLAYER_CLASS);var h=this.audio.getCurrentProgress(),p=this.audio.duration();return{title:(0,n.decodeHTMLEntities)(e||""),subtitle:(0,n.decodeHTMLEntities)(t||""),performer:(0,n.decodeHTMLEntities)(a||""),mainArtists:this.prepareArtists(o),featArtists:this.prepareArtists(i),cover:l||u||"",explicit:d||!1,loaded:this.audio.loaded(),progress:h,listened:this.formatTime(h*p),remained:this.formatTime(-(p-h*p)),playing:this.audio.isPlaying(),adsplaying:this.audio.isAdsPlaying(),canRepeat:this.audio.canRepeat,shuffled:this.audio.shuffled,show:!!e||this.audio.isAdsPlaying(),onPlay:()=>this.onPlay(),onPause:()=>this.onPause(),onPrev:()=>this.onPrev(),onNext:()=>this.onNext(),onClose:()=>this.onClose(),onShuffle:()=>this.onShuffle(),onDisableAds:()=>this.onDisableAds(),onRepeat:()=>this.onRepeat(),onMiniPlayerClick:()=>this.requestExpanded()}}prepareArtists(e){return e?e.map((e=>[e.id,(0,n.decodeHTMLEntities)(e.name)])):[]}onPlay(){(0,d.statlogsValueEvent)(this.STAT_KEY,"play",this.state.expanded),this.audio.play()}onPause(){(0,d.statlogsValueEvent)(this.STAT_KEY,"pause",this.state.expanded),this.audio.pause()}onClose(){(0,d.statlogsValueEvent)(this.STAT_KEY,"close",this.state.expanded),this.audio.clearCurrentPlaylist(),requestAnimationFrame((()=>{(0,s.setCookie)(this.AUDIO_COOKIE,"",-1),(0,s.setCookie)(this.AUDIO_COOKIE_OLD,"",-1),this.setState({title:"",subtitle:"",performer:"",explicit:!1,progress:0,playing:!1,adsplaying:!1,show:!1,expanded:!1}),document.body.classList.remove(this.AUDIO_PLAYER_CLASS)}))}onPrev(){this.audio.isAdsPlaying()||((0,d.statlogsValueEvent)(this.STAT_KEY,"prev",this.state.expanded),this.audio.prev(!0))}onNext(){this.audio.isAdsPlaying()||((0,d.statlogsValueEvent)(this.STAT_KEY,"next",this.state.expanded),this.audio.next(!0))}onShuffle(){this.audio.isAdsPlaying()||((0,d.statlogsValueEvent)(this.STAT_KEY,"shuffle",this.state.expanded),this.audio.shuffle(),this.updateState())}onDisableAds(){(0,d.statlogsValueEvent)(this.STAT_KEY,"disable_ads",this.state.expanded),this.audio.pause(),nav.go("/combo")}onRepeat(){this.audio.isAdsPlaying()||((0,d.statlogsValueEvent)(this.STAT_KEY,"repeat",this.state.expanded),this.audio.repeat(),this.updateState())}requestExpanded(){window.audio.notify(i.events.REQUEST_EXPANDED)}formatTime(e){var t=Math.abs(e);return(e<0?"-":"")+[Math.floor(t/3600),Math.floor(t/60)%60,Math.floor(t%60)].map((e=>e<10?"0"+e:e)).filter(((e,t)=>"00"!==e||t>0)).join(":")}}},6892:function(e,t,a){"use strict";var o=a(85863),i=a(39871),s=a(64485),n=a(62641),d=a(52822),r=a(32911),l=a(67332),u=a(67378),h=a(66768),p=a(53255),c=a(83218),_=a(91391),g=a(47518),E=a(37427),y=a(90006),P=a(29982),m=a(16559),A=a(63414),f=a(23739),x=a(85073),T=a(38818),C=a(75143),v=a(11885);var S=function(e){var t=e.showCollapsed,a=e.adsplaying,o=a?(0,n.getLang)("mobile_audio_player_ad"):e.title,i=a?"":e.subtitle,S=a?"":e.performer,B=a?[]:e.mainArtists,b=a?[]:e.featArtists,D=e.cover,L=e.loaded,M=e.progress,O=e.listened,R=e.remained,I=e.explicit,w=e.expanded,k=e.playing,N=e.canRepeat,U=e.shuffled,Y=e.onPlay,K=e.onPause,H=e.onPrev,F=e.onNext,q=e.onClose,G=e.onShuffle,W=e.onDisableAds,V=e.onRepeat,X=e.onCollapsedClick,Q=e.onCollapsedKeyDown,j=e.onExpandedClose,$=e.onExpandedMore,z=e.onHandleTouchStart,J=e.onProgressBarTouchStart,Z=e.onProgressBarMouseDown,ee=e.onProgressBarClick,te=e.onProgressKeyDown,ae=e.onTouchMove,oe=e.onTouchEnd,ie=e.onTouchCancel,se=e.onMouseMove,ne=e.onMouseUp;if(!t&&!w)return"";var de=s.default.class("AudioPlayerBottom",{expanded:w,collapsed:!w}),re="",le="",ue="",he="",pe="",ce="",_e="",ge="",Ee="",ye="",Pe="",me="",Ae="",fe="",xe="",Te="",Ce="",ve=(0,g.getRepeatOff24Icon)();if(w){re=s.default.class("AudioPlayerBottomExpanded__playerControls",{playing:k}),le=o?{inner:[o],class:"AudioPlayerBottomExpanded__title",tag:"span"}:"",ue=i?{inner:[i],class:"AudioPlayerBottomExpanded__subtitle",tag:"span"}:"",he=!a&&I?{inner:[(0,d.default)({icon:(0,l.getExplicitGray13Icon)()})],class:"AudioPlayerBottomExpanded__explicit",tag:"span"}:"",pe=B.length>0?[{inner:[B[0][1]],href:"/artist/"+B[0][0],tag:"a"}]:[];for(var Se=1;Se<B.length;Se++)pe.push(", ",{inner:[B[Se][1]],href:"/artist/"+B[Se][0],tag:"a"});ce=b.length>0?[{inner:[b[0][1]],href:"/artist/"+b[0][0],tag:"a"}]:[];for(var Be=1;Be<b.length;Be++)ce.push(", ",{inner:[b[Be][1]],href:"/artist/"+b[Be][0],tag:"a"});_e=0===pe.length&&0===ce.length?S:"",ge=D&&!a?{backgroundImage:"url("+D+")"}:{},Ee=!D||a?(0,d.default)({icon:(0,u.getNote48Icon)()}):"",ye={width:100*L+"%"},Pe={width:100*M+"%"},me={left:100*M+"%"},Ae=s.default.class("AudioPlayerBottomExpanded__shuffle",{active:U}),fe=s.default.class("AudioPlayerBottomExpanded__repeat",{active:!!N,activeAll:N===r.audioRepeat.ALL,activeOne:N===r.audioRepeat.ONE}),N===r.audioRepeat.ALL&&(ve=(0,E.getRepeatAll24Icon)()),N===r.audioRepeat.ONE&&(ve=(0,y.getRepeatOne24Icon)()),xe=k?"AudioPlayerBottomExpanded__pause":"AudioPlayerBottomExpanded__play",Ce=k?(0,P.getPause48Icon)():(0,m.getPlay48Icon)(),Te=k?(0,n.getLang)("mobile_audio_player_pause"):(0,n.getLang)("mobile_audio_player_play")}var be="",De="",Le="",Me="",Oe="",Re="",Ie="";t&&(be=s.default.class("AudioPlayerBottomCollapsed__controls",{playing:k}),De=o?{inner:[o],class:"AudioPlayerBottomCollapsed__title",tag:"span"}:"",Le=i?{inner:[i],class:"AudioPlayerBottomCollapsed__subtitle",tag:"span"}:"",Me=!a&&I?{inner:[(0,d.default)({icon:(0,l.getExplicitGray13Icon)()})],class:"AudioPlayerBottomCollapsed__explicit",tag:"span"}:"",Oe=k?"AudioPlayerBottomCollapsed__pause":"AudioPlayerBottomCollapsed__play",Re=k?(0,A.getPauseBlue24Icon)():(0,f.getPlayBlue24Icon)(),Ie=k?(0,n.getLang)("mobile_audio_player_pause"):(0,n.getLang)("mobile_audio_player_play"));var we=k?K:Y;return{inner:[t&&{inner:[{inner:[{inner:[(0,d.default)({icon:Re})],class:Oe,onClick:we,"aria-label":Ie,tag:"button"}],class:be,tag:"div"},{inner:[{inner:[De,Le,Me],class:"AudioPlayerBottomCollapsed__info1",tag:"div"},{inner:[{inner:[S],class:"AudioPlayerBottomCollapsed__performer",tag:"span"}],class:"AudioPlayerBottomCollapsed__info2",tag:"div"}],class:"AudioPlayerBottomCollapsed__info",onClick:X,onKeyDown:Q,role:"button",tabIndex:"0","aria-label":(0,n.getLang)("mobile_audio_player_open_detail"),"aria-haspopup":"true","aria-expanded":"false","aria-controls":"AudioPlayerBottomExpanded",tag:"div"},{inner:[{inner:[(0,d.default)({icon:k?(0,x.getNextBlue28Icon)():(0,T.getCloseBlue24Icon)()})],class:"AudioPlayerBottomCollapsed__next",onClick:k?F:q,"aria-label":k?(0,n.getLang)("mobile_audio_player_next"):(0,n.getLang)("mobile_audio_player_close"),disabled:k&&a,tag:"button"}],class:"AudioPlayerBottomCollapsed__controls",tag:"div"}],role:"complementary",class:"AudioPlayerBottomCollapsed","aria-hidden":w,tag:"div"},w&&{inner:[{class:"AudioPlayerBottomExpanded__handle",role:"button",onClick:j,"aria-label":(0,n.getLang)("mobile_audio_player_close"),onTouchStart:z,tag:"button"},{inner:[(0,d.default)({icon:(0,h.getCloseWhite16Icon)()})],class:"AudioPlayerBottomExpanded__close",onClick:j,"aria-label":(0,n.getLang)("mobile_audio_player_close"),tag:"button"},{inner:[{inner:[{inner:[{inner:[Ee],class:"AudioPlayerBottomExpanded__photoImage",style:ge,tag:"span"}],class:"AudioPlayerBottomExpanded__photo",tag:"span"},{inner:[{inner:[le,ue,he],class:"AudioPlayerBottomExpanded__info1",tag:"div"},{inner:[{inner:[pe,ce.length>0?{inner:" feat. ",tag:"span"}:"",ce,_e],class:"AudioPlayerBottomExpanded__performer",tag:"span"}],class:"AudioPlayerBottomExpanded__info2",tag:"div"}],class:"AudioPlayerBottomExpanded__info",tag:"div"},{inner:[{inner:[(0,d.default)({icon:(0,p.getMoreGray24Icon)()})],class:"AudioPlayerBottomExpanded__more",onClick:$,"aria-label":(0,n.getLang)("mobile_audio_player_more"),disabled:a,tag:"button"}],class:"AudioPlayerBottomExpanded__controls",tag:"div"}],class:"AudioPlayerBottomExpanded__header",tag:"div"},{inner:[{inner:[{class:"AudioPlayerBottomExpanded__progressLoaded",style:ye,tag:"span"},{class:"AudioPlayerBottomExpanded__progressCurrent",style:Pe,tag:"span"},{class:"AudioPlayerBottomExpanded__progressControl",style:me,onTouchStart:J,onMouseDown:Z,tag:"span"}],class:s.default.class("AudioPlayerBottomExpanded__progressBar",{disabled:a}),onClick:ee,onKeyDown:te,role:"slider",tabindex:"0","aria-label":(0,n.getLang)("mobile_audio_player_progress"),"aria-valuemin":"0","aria-valuemax":"1","aria-valuenow":M,"aria-valuetext":Math.round(100*M)+"%",tag:"div"},{inner:[O],class:"AudioPlayerBottomExpanded__progressTimeListened",tag:"span"},{inner:[R],class:"AudioPlayerBottomExpanded__progressTimeRemained",tag:"span"}],class:"AudioPlayerBottomExpanded__progress",tag:"div"},{inner:[{inner:[(0,d.default)({icon:(0,c.getPrev48Icon)()})],class:"AudioPlayerBottomExpanded__prev",onClick:H,"aria-label":(0,n.getLang)("mobile_audio_player_prev"),disabled:a,tag:"button"},{inner:[(0,d.default)({icon:Ce})],class:xe,onClick:we,"aria-label":Te,tag:"button"},{inner:[(0,d.default)({icon:(0,_.getNext48Icon)()})],class:"AudioPlayerBottomExpanded__next",onClick:F,"aria-label":(0,n.getLang)("mobile_audio_player_next"),disabled:a,tag:"button"}],class:re,tag:"div"},{inner:[{inner:[(0,d.default)({icon:U?(0,C.getShuffleOn24Icon)():(0,v.getShuffleOff24Icon)()})],class:Ae,onClick:G,"aria-label":(0,n.getLang)("mobile_audio_player_shuffle"),disabled:a,tag:"button"},a&&{inner:[(0,n.getLang)("mobile_audio_player_disable_ads")],class:"AudioPlayerBottomExpanded__disableAds",onClick:W,href:"/combo","aria-label":(0,n.getLang)("mobile_audio_player_disable_ads"),"aria-hidden":!a,hidden:!a,tag:"a"},{inner:[(0,d.default)({icon:ve})],class:fe,onClick:V,"aria-label":(0,n.getLang)("mobile_audio_player_repeat"),disabled:a,tag:"button"}],class:"AudioPlayerBottomExpanded__footer",tag:"div"}],class:"AudioPlayerBottomExpanded__container",tag:"div"}],id:"AudioPlayerBottomExpanded",class:"AudioPlayerBottomExpanded",onTouchCancel:ie,onTouchEnd:oe,onTouchMove:ae,onMouseMove:se,onMouseUp:ne,"aria-modal":"true",tag:"div"}],class:de,tag:"div"}},B=a(41898),b=a(20848),D=a(63848),L=a(79957),M=a(134),O=a(12449);class R extends B.AudioPlayerBase{constructor(){super(),this.UP=38,this.DOWN=40,this.RIGHT=39,this.LEFT=37,this.SPACE=32,this.ENTER=13,this.PROGRESS_PERCENT_CHANGE=.05,this.containerOffset=0,this.containerOpacity=0,this.progressBarPosition=0,this.audio.subscribe(M.events.REQUEST_EXPANDED,(()=>{this.openExpanded()}))}updateElementsSelections(){this.audioPlayerExpanded=document.querySelector(".AudioPlayerBottomExpanded"),this.audioPlayerExpandedProggressBar=document.querySelector(".AudioPlayerBottomExpanded__progressBar"),this.audioPlayerExpandedHandle=document.querySelector(".AudioPlayerBottomExpanded__handle"),this.audioPlayerExpandedContainer=document.querySelector(".AudioPlayerBottomExpanded__container"),this.audioPlayerCollapsedInfo=document.querySelector(".AudioPlayerBottomCollapsed__info"),this.bottomMenu=document.querySelector(".BottomMenu"),this.audioPlayerMini=document.querySelector(".MainMenu .AudioPlayerMini")}getState(){var e=super.getState();return this.updateElementsSelections(),(0,o.default)({},e,{showCollapsed:e.show&&this.bottomMenu&&0!==this.bottomMenu.getBoundingClientRect().width&&(!this.audioPlayerMini||0===this.audioPlayerMini.getBoundingClientRect().width),onCollapsedClick:()=>this.onCollapsedClick(),onCollapsedKeyDown:e=>this.onCollapsedKeyDown(e),onExpandedClose:()=>this.onExpandedClose(),onExpandedMore:e=>{(0,L.statlogsValueEvent)(this.STAT_KEY,"more",this.state.expanded),window.audioplayer.morePopup(e)},onHandleTouchStart:e=>this.onHandleTouchStart(e),onProgressBarTouchStart:e=>this.onProgressBarTouchStart(e),onProgressBarMouseDown:e=>this.onProgressBarMouseDown(e),onProgressBarClick:e=>this.onProgressBarClick(e),onProgressKeyDown:e=>this.onProgressKeyDown(e),onTouchMove:e=>this.onTouchMove(e),onTouchEnd:e=>this.onTouchEnd(e),onTouchCancel:e=>this.onTouchEnd(e),onMouseMove:e=>this.onMouseMove(e),onMouseUp:e=>this.onMouseUp(e)})}openExpanded(){(0,L.statlogsValueEvent)(this.STAT_KEY,"open_expanded",this.state.expanded),this.setState({expanded:!0}),requestAnimationFrame((()=>{this.updateElementsSelections(),this.audioPlayerExpanded&&(this.audioPlayerCollapsedInfo&&(this.expandPopup=(0,D.expandPopup)(this.audioPlayerCollapsedInfo)),this.cancelFocusTrap=(0,D.setFocusTrap)(this.audioPlayerExpanded),this.cancelFocusTrap&&(this.cancelFocusTrap.exitIntent=()=>this.closeExpanded()))}))}closeExpanded(){(0,L.statlogsValueEvent)(this.STAT_KEY,"close_expanded",this.state.expanded),this.cancelFocusTrap&&this.cancelFocusTrap(),this.expandPopup&&this.expandPopup(),this.setState({expanded:!1})}onCollapsedClick(){this.updateElementsSelections(),this.openExpanded()}onCollapsedKeyDown(e){e.keyCode!==this.SPACE&&e.keyCode!==this.ENTER||(this.updateElementsSelections(),this.openExpanded())}onExpandedClose(){this.closeExpanded()}onHandleTouchStart(e){this.updateElementsSelections(),this.onTouchEnd(e),e&&e.touches&&1===e.touches.length&&window.innerWidth<=O.TABLET_WIDTH?(this.audioPlayerExpandedHandle.classList.add("AudioPlayerBottomExpanded__handle--touch"),this.handleTouchTime=Date.now(),this.handleTouch=e.touches[0].clientY,this.state.expanded||this.openExpanded()):this.handleTouch=!1,this.onTouchMove(e)}onProgressBarTouchStart(e){var t;(this.onTouchEnd(e),e&&e.touches&&1===e.touches.length)?this.prgressBarTouch=null==(t=this.audioPlayerExpandedProggressBar)?void 0:t.getBoundingClientRect():this.prgressBarTouch=!1;this.onTouchMove(e)}onProgressBarMouseDown(e){var t;this.prgressBarMouse=null==(t=this.audioPlayerExpandedProggressBar)?void 0:t.getBoundingClientRect(),e.preventDefault()}onProgressBarClick(e){if(!this.state.adsplaying&&this.audioPlayerExpandedProggressBar){this.updateElementsSelections();var{left:t,right:a,width:o}=this.audioPlayerExpandedProggressBar.getBoundingClientRect();this.progressBarPosition=(Math.min(a,Math.max(t,e.clientX))-t)/o,requestAnimationFrame((()=>this.audio.setPosition(this.progressBarPosition,!0)))}}onProgressKeyDown(e){if(this.audio.getCurrent())if(e.keyCode===this.UP||e.keyCode===this.RIGHT){var t=Math.max(0,Math.min(1,this.audio.getPosition()/this.audio.duration()+this.PROGRESS_PERCENT_CHANGE));requestAnimationFrame((()=>this.audio.setPosition(t,!0))),e.preventDefault()}else if(e.keyCode===this.DOWN||e.keyCode===this.LEFT){var a=Math.max(0,Math.min(1,this.audio.getPosition()/this.audio.duration()-this.PROGRESS_PERCENT_CHANGE));requestAnimationFrame((()=>this.audio.setPosition(a,!0))),e.preventDefault()}else e.keyCode!==this.SPACE&&e.keyCode!==this.ENTER||(this.audio.isPlaying()?this.audio.pause():this.audio.play(),e.preventDefault())}onTouchMove(e){if(e&&e.touches&&1===e.touches.length&&this.handleTouch&&window.innerWidth<=O.TABLET_WIDTH){var t=Math.max(this.handleTouch,e.touches[0].clientY);this.containerOffset=t-this.handleTouch,this.containerOpacity=1-Math.min(1,Math.max(0,this.containerOffset/this.handleTouch)),(0,b.setStyle)(this.audioPlayerExpandedHandle,{transform:"translateY("+this.containerOffset+"px)"}),(0,b.setStyle)(this.audioPlayerExpandedContainer,{transform:"translateY("+this.containerOffset+"px)"}),(0,b.setStyle)(this.audioPlayerExpanded,{opacity:this.containerOpacity}),e.preventDefault()}if(e&&e.touches&&1===e.touches.length&&this.prgressBarTouch){if(this.state.adsplaying)return;var{left:a,right:o,width:i}=this.prgressBarTouch;this.progressBarPosition=(Math.min(o,Math.max(a,e.touches[0].clientX))-a)/i,requestAnimationFrame((()=>this.audio.setPosition(this.progressBarPosition,!0))),e.preventDefault()}}onTouchEnd(e){this.onTouchMove(e),this.handleTouch&&window.innerWidth<=O.TABLET_WIDTH&&(this.audioPlayerExpandedHandle.classList.remove("AudioPlayerBottomExpanded__handle--touch"),(0,b.setStyle)(this.audioPlayerExpandedHandle,{transform:""}),(0,b.setStyle)(this.audioPlayerExpandedContainer,{transform:""}),(0,b.setStyle)(this.audioPlayerExpanded,{opacity:1}),this.containerOpacity>.7?this.state.expanded||this.openExpanded():this.state.expanded&&this.closeExpanded(),Date.now()-this.handleTouchTime<250&&this.closeExpanded()),this.handleTouch=!1,this.prgressBarTouch=!1}onMouseMove(e){if(this.prgressBarMouse){if(this.state.adsplaying)return;var{left:t,right:a,width:o}=this.prgressBarMouse;this.progressBarPosition=(Math.min(a,Math.max(t,e.clientX))-t)/o,requestAnimationFrame((()=>this.audio.setPosition(this.progressBarPosition,!0))),e.preventDefault()}}onMouseUp(e){this.prgressBarMouse=!1}render(){return i.default.preact(S,(0,o.default)({},this.state))}}var I=R,w=a(2947),k=a(45582);function N(){if(!window.audio||!window.audioplayer){var e="Can't init AudioPlayerBottom. Audio not loaded yet.";return console.error(e),void(0,k.logError)(new Error(e))}var t=$(".AudioPlayerBottomContainer");t&&(0,w.render)((0,w.createElement)(I,(0,n.getState)("AudioPlayer")),t)}(0,a(41313).onServerEvent)("AudioPlayerBottom/init").watch((()=>{N(),window.page&&window.page.onChange(N)}))},134:function(e,t,a){"use strict";a.d(t,{events:function(){return o}});var o={CURRENT_CHANGED:"curr",PLAY:"start",PLAY_REQUESTED:"request_play",PAUSE:"pause",STOP:"stop",UPDATE:"update",LOADED:"loaded",ENDED:"ended",FAILED:"failed",BUFFERED:"buffered",PROGRESS:"progress",VOLUME:"volume",PLAYLIST_CHANGED:"plchange",ADDED:"added",REMOVED:"removed",FREQ_UPDATE:"freq",SEEK:"seek",PLAY_NEXT:"play_next",AD_READY:"ad_ready",AD_DEINITED:"ad_deinit",AD_STARTED:"ad_started",AD_COMPLETED:"ad_completed",START_LOADING:"start_load",CAN_PLAY:"actual_start",SELECT:"select",DESELECT:"deselect",EMPTY_PLAYLIST:"empty_playlist",NOT_FOUND_PLAYLIST:"not_found_playlist",INIT:"init",REQUEST_EXPANDED:"request_expanded",MUSIC_AUDIOS_ADD:"music_audios_add",MUSIC_AUDIOS_DELETE:"music_audios_delete",MUSIC_PLAYLISTS_ADD:"music_playlists_add",MUSIC_OWNERS_FOLLOW:"music_owners_follow",MUSIC_OWNERS_UNFOLLOW:"music_owners_unfollow",CURATOR_FOLLOW:"curator_follow",CURATOR_UNFOLLOW:"curator_unfollow",PLACEHOLDER_REMOVE:"placeholder_remove"}}},function(e){"use strict";e.O(0,[4578,1777,4736,5456,5790,3898,5411,6855,6199,490,410,6444,8592,7219,6429],(function(){return t=6892,e(e.s=t);var t}));e.O()}]);