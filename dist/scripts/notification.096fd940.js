"use strict";(self.webpackChunkwebpack_multiple_entry=self.webpackChunkwebpack_multiple_entry||[]).push([[599],{3164:function(e,t,s){var i=s(6793),n=s(1153),l=s(2085),c=new class{constructor(){(0,i.Z)(this,"list",document.querySelector(".list-skeleton")),(0,i.Z)(this,"listContent",document.querySelector(".notification-list-content")),(0,i.Z)(this,"entryData",null),(0,i.Z)(this,"maxDelay",1e3),(0,i.Z)(this,"isReceiveClose",!1),(0,i.Z)(this,"performanceCallback",(e=>{if(this.entryData=e,this.isReceiveClose)return this.close();if(e.domContentLoadedEventEnd<this.maxDelay){const t=this.maxDelay-e.domContentLoadedEventEnd;setTimeout((()=>{this.close()}),t)}else this.close();l.Z.removeCallback(this.performanceCallback)})),l.Z.addCallback(this.performanceCallback)}receiveClose(){this.isReceiveClose=!0,this.entryData&&this.close()}close(){this.list?.classList.add("hidden"),this.listContent?.classList.remove("hidden")}};new class{constructor(e){(0,i.Z)(this,"list",document.querySelector(".notification-list-content")),this.list&&new n.Z(this.list).start(),e()}}((()=>{c.receiveClose()}))}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[216,592],(function(){return t(7015),t(3164)})),e.O()}]);