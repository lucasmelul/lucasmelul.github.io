"use strict";(self.webpackChunklm_test=self.webpackChunklm_test||[]).push([[828],{3828:(H,m,o)=>{o.r(m),o.d(m,{HomeModule:()=>x});var c=o(9808),r=o(2382),g=o(4466),s=o(6168),l=o(4004),d=o(3996),n=o(4893),h=o(5536),p=o(8424),C=o(9219),M=o(9175);function O(t,i){if(1&t&&(n.TgZ(0,"div",6),n._UZ(1,"app-card",7),n.qZA()),2&t){const e=i.$implicit;n.xp6(1),n.Q6J("new",e)("showContent",!0)}}function P(t,i){if(1&t&&(n.TgZ(0,"div",4),n.YNc(1,O,2,2,"div",5),n.qZA()),2&t){const e=i.ngIf;n.xp6(1),n.Q6J("ngForOf",e)}}function u(t,i){if(1&t&&(n.TgZ(0,"section",8),n._UZ(1,"app-news-list",9),n.qZA()),2&t){const e=i.$implicit;n.xp6(1),n.Q6J("category",e)}}const f=[{path:"",component:(()=>{class t{constructor(e){this.newsService=e,this.categories=["entertainment","business","sports"],this.news=[],this.currentPage=1,this.limitPage=d.u,this.fetchNews=()=>this.newsService.getNews({page:this.currentPage,pageSize:this.limitPage}).pipe((0,l.U)(a=>a.articles))}ngOnInit(){this.news$=this.fetchNews()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(h.Y))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],decls:6,vars:4,consts:[[1,"home-container"],[1,"main-container"],["class","main-content",4,"ngIf"],["class","section-container",4,"ngFor","ngForOf"],[1,"main-content"],["class","news-list-card",4,"ngFor","ngForOf"],[1,"news-list-card"],[3,"new","showContent"],[1,"section-container"],[3,"category"]],template:function(e,a){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"section",1),n.YNc(2,P,2,1,"div",2),n.ALo(3,"async"),n.qZA(),n.YNc(4,u,2,1,"section",3),n.qZA(),n._UZ(5,"app-loading")),2&e&&(n.xp6(2),n.Q6J("ngIf",n.lcZ(3,2,a.news$)),n.xp6(2),n.Q6J("ngForOf",a.categories))},directives:[c.O5,c.sg,p.N,C.A,M.Q],pipes:[c.Ov],styles:[".home-container[_ngcontent-%COMP%]{margin:20px auto;max-width:1280px;display:flex;flex-direction:column;align-items:center;min-height:calc(100vh - 168px)}.home-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{margin:0 20px}.home-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]{width:100%;max-width:960px;min-height:100vh;display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:repeat(12,90px);grid-column-gap:1rem;column-gap:1rem;grid-row-gap:2rem;row-gap:2rem}.home-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .news-list-card[_ngcontent-%COMP%]:nth-child(1){grid-area:1/1/5/7}.home-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .news-list-card[_ngcontent-%COMP%]:nth-child(2){grid-area:1/7/4/10}.home-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .news-list-card[_ngcontent-%COMP%]:nth-child(3){grid-area:1/10/4/13}.home-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .news-list-card[_ngcontent-%COMP%]:nth-child(4){grid-area:5/1/8/4}.home-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .news-list-card[_ngcontent-%COMP%]:nth-child(5){grid-area:5/4/8/7}.home-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .news-list-card[_ngcontent-%COMP%]:nth-child(6){grid-area:4/7/8/13}.home-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   .news-list-card[_ngcontent-%COMP%]:nth-child(7){grid-area:8/1/13/13}.section-container[_ngcontent-%COMP%]{width:100%}@media (max-width: 680px){.home-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]{max-width:480px;display:flex;flex-direction:column;align-items:center}}@media (max-width: 480px){.home-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]{margin:0}}"]}),t})()}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[s.Bz.forChild(f)],s.Bz]}),t})();var v=o(9842);let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.ez,r.UX,g.m,w,v.NewsListModule]]}),t})()}}]);