(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[7],{1160:function(e,t,a){"use strict";a.r(t);var n=a(12),i=a(486),c=a(579),r=a(400),l=a(129),s=a(135),o=a(5),d=a(416),b=a(0),u=a(10),j=a(551),m=a(497),p=a(552),x=a(498),g=a(401),f=a(1092),O=a(1096),h=a(31),v=a(300),y=a(1),k=Object(r.a)((function(e){return{root:{backgroundImage:'url("../../assets/images/backgrounds/header-bg.png")',backgroundColor:"#FAFAFA",color:"#FFFFFF",backgroundSize:"cover",backgroundPosition:"0 50%",backgroundRepeat:"no-repeat","&:before":{content:"''",position:"absolute",top:0,right:0,bottom:0,left:0,zIndex:1,background:"rgba(0, 0, 0, 0.45)"},"&.Jan":{backgroundImage:"url('/assets/images/calendar/winter.jpg')",backgroundPosition:"0 85%"},"&.Feb":{backgroundImage:"url('/assets/images/calendar/winter.jpg')",backgroundPosition:"0 85%"},"&.Mar":{backgroundImage:"url('/assets/images/calendar/spring.jpg')",backgroundPosition:"0 40%"},"&.Apr":{backgroundImage:"url('/assets/images/calendar/spring.jpg')",backgroundPosition:"0 40%"},"&.May":{backgroundImage:"url('/assets/images/calendar/spring.jpg')",backgroundPosition:"0 40%"},"&.Jun":{backgroundImage:"url('/assets/images/calendar/summer.jpg')",backgroundPosition:"0 80%"},"&.Jul":{backgroundImage:"url('/assets/images/calendar/summer.jpg')",backgroundPosition:"0 80%"},"&.Aug":{backgroundImage:"url('/assets/images/calendar/summer.jpg')",backgroundPosition:"0 80%"},"&.Sep":{backgroundImage:"url('/assets/images/calendar/autumn.jpg')",backgroundPosition:"0 40%"},"&.Oct":{backgroundImage:"url('/assets/images/calendar/autumn.jpg')",backgroundPosition:"0 40%"},"&.Nov":{backgroundImage:"url('/assets/images/calendar/autumn.jpg')",backgroundPosition:"0 40%"},"&.Dec":{backgroundImage:"url('/assets/images/calendar/winter.jpg')",backgroundPosition:"0 85%"}}}})),w={dayGridMonth:{title:"Month",icon:"view_module"},timeGridWeek:{title:"Week",icon:"view_week"},timeGridDay:{title:"Day",icon:"view_agenda"}};var D=function(e){var t=e.calendarRef,a=e.currentDate,i=k(e),r=Object(u.d)(h.f),s=function(){var e;return null===(e=t.current)||void 0===e?void 0:e.getApi()};return Object(y.jsx)(f.a,{theme:r,children:Object(y.jsx)("div",{className:Object(o.a)(i.root,"flex h-200 min-h-200 relative",Object(v.a)(new Date((null===a||void 0===a?void 0:a.start)||null),"MMM")),children:Object(y.jsxs)("div",{className:"flex flex-1 flex-col p-12 justify-between z-10 container",children:[Object(y.jsxs)("div",{className:"flex flex-col items-center justify-between sm:flex-row",children:[Object(y.jsxs)("div",{className:"flex items-center my-16 sm:mb-0",children:[Object(y.jsx)(c.a,{component:d.a.span,initial:{scale:0},animate:{scale:1,transition:{delay:.2}},className:"text-24 md:text-32",children:"today"}),Object(y.jsx)(d.a.span,{initial:{x:-20},animate:{x:0,transition:{delay:.2}},delay:300,className:"text-16 md:text-24 mx-12 font-semibold",children:"Calendar"})]}),Object(y.jsxs)("div",{className:"flex items-center",children:[Object(y.jsx)(O.a,{title:"Today",children:Object(y.jsx)("div",{children:Object(y.jsx)(d.a.div,{initial:{scale:0},animate:{scale:1,transition:{delay:.3}},children:Object(y.jsx)(g.a,{"aria-label":"today",onClick:function(){return s().today()},children:Object(y.jsx)(c.a,{children:"today"})})})})}),Object.entries(w).map((function(e){var t=Object(n.a)(e,2),i=t[0],r=t[1];return Object(y.jsx)(O.a,{title:r.title,children:Object(y.jsx)("div",{children:Object(y.jsx)(d.a.div,{initial:{scale:0},animate:{scale:1,transition:{delay:.3}},children:Object(y.jsx)(g.a,{"aria-label":i,onClick:function(){return s().changeView(i)},disabled:(null===a||void 0===a?void 0:a.view.type)===i,children:Object(y.jsx)(c.a,{children:r.icon})})})})},i)}))]})]}),Object(y.jsxs)(d.a.div,{className:"flex items-center justify-center",initial:{opacity:0},animate:{opacity:1,transition:{delay:.3}},children:[Object(y.jsx)(O.a,{title:"Previous",children:Object(y.jsx)(g.a,{"aria-label":"Previous",onClick:function(){return s().prev()},children:Object(y.jsx)(c.a,{children:"ltr"===r.direction?"chevron_left":"chevron_right"})})}),Object(y.jsx)(l.a,{variant:"h6",children:null===a||void 0===a?void 0:a.view.title}),Object(y.jsx)(O.a,{title:"Next",children:Object(y.jsx)(g.a,{"aria-label":"Next",onClick:function(){return s().next()},children:Object(y.jsx)(c.a,{children:"ltr"===r.direction?"chevron_right":"chevron_left"})})})]})]})})})},N=a(7),C=a(81),P=a(168),I=a(20),F=a(180),A=a(1093),M=a(494),V=a(1082),E=a(1109),R=a(1107),S=a(1089),W=a(1090),_=a(1091),G=a(1094),T=a(1121),J=a(32),z=a(16),q=a(88),B={id:F.a.generateGUID(),title:"",allDay:!0,start:Object(P.a)(new Date),end:Object(P.a)(new Date),extendedProps:{desc:""}},U=J.c().shape({title:J.e().required("You must enter a title")});var H=function(e){var t=Object(u.c)(),a=Object(u.d)((function(e){return e.calendarApp.events.eventDialog})),n=Object(I.f)({defaultValues:B,mode:"onChange",resolver:Object(C.a)(U)}),i=n.reset,r=n.formState,s=n.watch,o=n.control,d=(n.getValues,n.handleSubmit),j=r.isValid,m=r.dirtyFields,p=r.errors,x=s("start"),f=s("end"),O=s("id"),h=Object(b.useCallback)((function(){"edit"===a.type&&a.data&&i(Object(N.a)({},a.data)),"new"===a.type&&i(Object(N.a)(Object(N.a)(Object(N.a)({},B),a.data),{},{id:F.a.generateGUID()}))}),[a.data,a.type,i]);Object(b.useEffect)((function(){a.props.open&&h()}),[a.props.open,h]);var v=function(){return"edit"===a.type?t(Object(q.b)()):t(Object(q.c)())};return Object(y.jsxs)(V.a,Object(N.a)(Object(N.a)({},a.props),{},{onClose:v,fullWidth:!0,maxWidth:"xs",component:"form",children:[Object(y.jsx)(A.a,{position:"static",elevation:0,children:Object(y.jsx)(G.a,{className:"flex w-full",children:Object(y.jsx)(l.a,{variant:"subtitle1",color:"inherit",children:"new"===a.type?"New Event":"Edit Event"})})}),Object(y.jsxs)("form",{noValidate:!0,onSubmit:d((function(e){"new"===a.type?t(Object(q.a)(e)):t(Object(q.j)(Object(N.a)(Object(N.a)({},a.data),e))),v()})),children:[Object(y.jsxs)(R.a,{classes:{root:"p-16 pb-0 sm:p-24 sm:pb-0"},children:[Object(y.jsx)(I.a,{name:"title",control:o,render:function(e){var t,a=e.field;return Object(y.jsx)(_.a,Object(N.a)(Object(N.a)({},a),{},{id:"title",label:"Title",className:"mt-8 mb-16",error:!!p.title,helperText:null===p||void 0===p||null===(t=p.title)||void 0===t?void 0:t.message,InputLabelProps:{shrink:!0},variant:"outlined",autoFocus:!0,required:!0,fullWidth:!0}))}}),Object(y.jsx)(I.a,{name:"allDay",control:o,render:function(e){var t=e.field,a=t.onChange,n=t.value;return Object(y.jsx)(S.a,{className:"mt-8 mb-16",label:"All Day",control:Object(y.jsx)(W.a,{onChange:function(e){a(e.target.checked)},checked:n,name:"allDay"})})}}),Object(y.jsx)(I.a,{name:"start",control:o,defaultValue:"",render:function(e){var t=e.field,a=t.onChange,n=t.value;return Object(y.jsx)(T.a,{label:"Start",inputVariant:"outlined",value:n,onChange:a,className:"mt-8 mb-16 w-full",maxDate:f})}}),Object(y.jsx)(I.a,{name:"end",control:o,defaultValue:"",render:function(e){var t=e.field,a=t.onChange,n=t.value;return Object(y.jsx)(T.a,{label:"End",inputVariant:"outlined",value:n,onChange:a,className:"mt-8 mb-16 w-full",minDate:x})}}),Object(y.jsx)(I.a,{name:"extendedProps.desc",control:o,render:function(e){var t=e.field;return Object(y.jsx)(_.a,Object(N.a)(Object(N.a)({},t),{},{className:"mt-8 mb-16",id:"desc",label:"Description",type:"text",multiline:!0,rows:5,variant:"outlined",fullWidth:!0}))}})]}),"new"===a.type?Object(y.jsx)(E.a,{className:"justify-between px-8 sm:px-16 pb-16",children:Object(y.jsx)(M.a,{variant:"contained",color:"primary",type:"submit",disabled:z.a.isEmpty(m)||!j,children:"Add"})}):Object(y.jsxs)(E.a,{className:"justify-between px-8 sm:px-16 pb-16",children:[Object(y.jsx)(M.a,{variant:"contained",color:"primary",type:"submit",disabled:z.a.isEmpty(m)||!j,children:"Save"}),Object(y.jsx)(g.a,{onClick:function(){t(Object(q.h)(O)),v()},children:Object(y.jsx)(c.a,{children:"delete"})})]})]})]}))},L=a(499),Y=Object(r.a)((function(e){return{root:{"& a":{color:e.palette.text.primary,textDecoration:"normal!important"},"&  .fc-media-screen":{minHeight:"100%"},"& .fc-scrollgrid, & .fc-theme-standard td, & .fc-theme-standard th":{borderColor:"".concat(e.palette.divider,"!important")},"&  .fc-scrollgrid-section > td":{border:0},"& .fc-daygrid-day":{"&:last-child":{borderRight:0}},"& .fc-col-header-cell":{borderWidth:"0 0 1px 0",padding:"16px 0","& .fc-col-header-cell-cushion":{color:e.palette.text.secondary,fontWeight:500}},"& .fc-view ":{borderRadius:20,overflow:"hidden",border:"1px solid ".concat(e.palette.divider),"& > .fc-scrollgrid":{border:0}},"& .fc-daygrid-day-number":{color:e.palette.text.secondary,fontWeight:500},"& .fc-event":{backgroundColor:"".concat(e.palette.primary.dark,"!important"),color:"".concat(e.palette.primary.contrastText,"!important"),border:0,padding:"0 6px",borderRadius:"16px!important"}},addButton:{position:"absolute",right:12,top:172,zIndex:99}}}));function K(e){return Object(y.jsxs)("div",{className:"flex items-center",children:[Object(y.jsx)(l.a,{className:"text-12 font-semibold",children:e.timeText}),Object(y.jsx)(l.a,{className:"text-12 px-4 truncate",children:e.event.title})]})}t.default=Object(s.a)("calendarApp",L.a)((function(e){var t=Object(b.useState)(),a=Object(n.a)(t,2),r=a[0],l=a[1],s=Object(u.c)();console.log(q.i);var g=Object(u.d)(q.i),f=Object(b.useRef)(),O=Y(e);return Object(b.useRef)(null),Object(b.useEffect)((function(){s(Object(q.e)())}),[s]),Object(y.jsxs)("div",{className:Object(o.a)(O.root,"flex flex-col flex-auto relative"),children:[Object(y.jsx)(D,{calendarRef:f,currentDate:r}),Object(y.jsxs)("div",{className:"flex flex-1 p-24 container",children:[Object(y.jsx)(d.a.div,{className:"w-full",initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{delay:.2}},children:Object(y.jsx)(j.a,{plugins:[m.a,p.a,x.a],headerToolbar:!1,initialView:"dayGridMonth",editable:!0,selectable:!0,selectMirror:!0,dayMaxEvents:!0,weekends:!0,datesSet:function(e){l(e)},select:function(e){var t=e.start,a=e.end;s(Object(q.g)({start:t,end:a}))},events:g,eventContent:K,eventClick:function(e){var t=e.event,a=t.id,n=t.title,i=t.allDay,c=t.start,r=t.end,l=t.extendedProps;s(Object(q.f)({id:a,title:n,allDay:i,start:c,end:r,extendedProps:l}))},eventAdd:function(e){},eventChange:function(e){},eventRemove:function(e){},eventDrop:function(e){var t=e.event,a=t.id,n=t.title,i=t.allDay,c=t.start,r=t.end,l=t.extendedProps;s(Object(q.j)({id:a,title:n,allDay:i,start:c,end:r,extendedProps:l}))},initialDate:new Date(2021,7,1),ref:f})}),Object(y.jsx)(d.a.div,{className:O.addButton,initial:{scale:0},animate:{scale:1,transition:{delay:.4}},children:Object(y.jsx)(i.a,{color:"secondary","aria-label":"add",onClick:function(){return s(Object(q.g)({start:new Date,end:new Date}))},children:Object(y.jsx)(c.a,{children:"add"})})}),Object(y.jsx)(H,{})]})]})}))}}]);