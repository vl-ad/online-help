webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Lang/index.module.css":
/*!******************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/Lang/index.module.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Lang_list__2vGR9 {\\n\\tpadding: 0.75rem 0;\\n\\tbackground: var(--white);\\n\\tmargin-top: 0.75rem;\\n\\tborder-radius: 3px;\\n\\twidth: 180px;\\n\\ttext-align: center;\\n\\tfilter: drop-shadow(0px 0px 22px rgba(0, 0, 0, 0.15));\\n\\tmax-height: 60vh;\\n\\toverflow: auto;\\n}\\n\\n.Lang_lang__1HU9O {\\n\\tposition: relative;\\n\\tmargin-left: 1.25rem;\\n\\tcursor: pointer;\\n\\ttext-decoration: underline;\\n}\\n\\n.Lang_list_item__Cq7qT {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: flex-start;\\n\\tpadding: 0.5rem 0.75rem;\\n\\tfont-size: var(--small-font);\\n\\tfont-weight: 600;\\n\\ttext-decoration: none;\\n}\\n\\n.Lang_list_item__Cq7qT:hover {\\n\\tbackground-color: var(--silver);\\n}\\n\\n.Lang_img__2Rv0b {\\n\\twidth: 14px;\\n\\theight: 10px;\\n\\tmargin-right: 0.5rem;\\n\\tdisplay: flex;\\n}\\n\\n.Lang_wrapper__tCFn5 {\\n\\tdisplay: none;\\n\\tposition: absolute;\\n\\tright: -0.5rem;\\n\\tz-index: 1;\\n}\\n\\n.Lang_lang__1HU9O:hover .Lang_wrapper__tCFn5 {\\n\\tdisplay: block;\\n}\\n\\n@media (max-width: 768px) {\\n\\t.Lang_wrapper__tCFn5 {\\n\\t\\tposition: fixed;\\n\\t\\ttop: 2.5rem;\\n\\t\\tright: 0;\\n\\t\\tleft: 0;\\n\\t\\tbottom: 0;\\n\\t\\tpointer-events: none;\\n\\t}\\n\\n\\t.Lang_list_item__Cq7qT {\\n\\t\\tfont-size: var(--large-font);\\n\\t\\tfont-weight: 600;\\n\\t}\\n\\n\\t.Lang_list__2vGR9 {\\n\\t\\tfilter: none;\\n\\t\\twidth: auto;\\n\\t\\tborder-radius: 0;\\n\\t\\tmax-height: calc(100vh - 40px);\\n\\t}\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/Lang/index.module.css\"],\"names\":[],\"mappings\":\"AAAA;CACC,kBAAkB;CAClB,wBAAwB;CACxB,mBAAmB;CACnB,kBAAkB;CAClB,YAAY;CACZ,kBAAkB;CAClB,qDAAqD;CACrD,gBAAgB;CAChB,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,oBAAoB;CACpB,eAAe;CACf,0BAA0B;AAC3B;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,2BAA2B;CAC3B,uBAAuB;CACvB,4BAA4B;CAC5B,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,oBAAoB;CACpB,aAAa;AACd;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,cAAc;CACd,UAAU;AACX;;AAEA;CACC,cAAc;AACf;;AAEA;CACC;EACC,eAAe;EACf,WAAW;EACX,QAAQ;EACR,OAAO;EACP,SAAS;EACT,oBAAoB;CACrB;;CAEA;EACC,4BAA4B;EAC5B,gBAAgB;CACjB;;CAEA;EACC,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,8BAA8B;CAC/B;AACD\",\"sourcesContent\":[\".list {\\n\\tpadding: 0.75rem 0;\\n\\tbackground: var(--white);\\n\\tmargin-top: 0.75rem;\\n\\tborder-radius: 3px;\\n\\twidth: 180px;\\n\\ttext-align: center;\\n\\tfilter: drop-shadow(0px 0px 22px rgba(0, 0, 0, 0.15));\\n\\tmax-height: 60vh;\\n\\toverflow: auto;\\n}\\n\\n.lang {\\n\\tposition: relative;\\n\\tmargin-left: 1.25rem;\\n\\tcursor: pointer;\\n\\ttext-decoration: underline;\\n}\\n\\n.list_item {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: flex-start;\\n\\tpadding: 0.5rem 0.75rem;\\n\\tfont-size: var(--small-font);\\n\\tfont-weight: 600;\\n\\ttext-decoration: none;\\n}\\n\\n.list_item:hover {\\n\\tbackground-color: var(--silver);\\n}\\n\\n.img {\\n\\twidth: 14px;\\n\\theight: 10px;\\n\\tmargin-right: 0.5rem;\\n\\tdisplay: flex;\\n}\\n\\n.wrapper {\\n\\tdisplay: none;\\n\\tposition: absolute;\\n\\tright: -0.5rem;\\n\\tz-index: 1;\\n}\\n\\n.lang:hover .wrapper {\\n\\tdisplay: block;\\n}\\n\\n@media (max-width: 768px) {\\n\\t.wrapper {\\n\\t\\tposition: fixed;\\n\\t\\ttop: 2.5rem;\\n\\t\\tright: 0;\\n\\t\\tleft: 0;\\n\\t\\tbottom: 0;\\n\\t\\tpointer-events: none;\\n\\t}\\n\\n\\t.list_item {\\n\\t\\tfont-size: var(--large-font);\\n\\t\\tfont-weight: 600;\\n\\t}\\n\\n\\t.list {\\n\\t\\tfilter: none;\\n\\t\\twidth: auto;\\n\\t\\tborder-radius: 0;\\n\\t\\tmax-height: calc(100vh - 40px);\\n\\t}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"list\": \"Lang_list__2vGR9\",\n\t\"lang\": \"Lang_lang__1HU9O\",\n\t\"list_item\": \"Lang_list_item__Cq7qT\",\n\t\"img\": \"Lang_img__2Rv0b\",\n\t\"wrapper\": \"Lang_wrapper__tCFn5\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5nL2luZGV4Lm1vZHVsZS5jc3M/YzhjMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsd0JBQXdCLHVCQUF1QixpQkFBaUIsdUJBQXVCLDBEQUEwRCxxQkFBcUIsbUJBQW1CLEdBQUcsdUJBQXVCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLCtCQUErQixHQUFHLDRCQUE0QixrQkFBa0Isd0JBQXdCLGdDQUFnQyw0QkFBNEIsaUNBQWlDLHFCQUFxQiwwQkFBMEIsR0FBRyxrQ0FBa0Msb0NBQW9DLEdBQUcsc0JBQXNCLGdCQUFnQixpQkFBaUIseUJBQXlCLGtCQUFrQixHQUFHLDBCQUEwQixrQkFBa0IsdUJBQXVCLG1CQUFtQixlQUFlLEdBQUcsa0RBQWtELG1CQUFtQixHQUFHLCtCQUErQiwwQkFBMEIsc0JBQXNCLGtCQUFrQixlQUFlLGNBQWMsZ0JBQWdCLDJCQUEyQixLQUFLLDhCQUE4QixtQ0FBbUMsdUJBQXVCLEtBQUsseUJBQXlCLG1CQUFtQixrQkFBa0IsdUJBQXVCLHFDQUFxQyxLQUFLLEdBQUcsU0FBUyxpR0FBaUcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLGdDQUFnQyx1QkFBdUIsNkJBQTZCLHdCQUF3Qix1QkFBdUIsaUJBQWlCLHVCQUF1QiwwREFBMEQscUJBQXFCLG1CQUFtQixHQUFHLFdBQVcsdUJBQXVCLHlCQUF5QixvQkFBb0IsK0JBQStCLEdBQUcsZ0JBQWdCLGtCQUFrQix3QkFBd0IsZ0NBQWdDLDRCQUE0QixpQ0FBaUMscUJBQXFCLDBCQUEwQixHQUFHLHNCQUFzQixvQ0FBb0MsR0FBRyxVQUFVLGdCQUFnQixpQkFBaUIseUJBQXlCLGtCQUFrQixHQUFHLGNBQWMsa0JBQWtCLHVCQUF1QixtQkFBbUIsZUFBZSxHQUFHLDBCQUEwQixtQkFBbUIsR0FBRywrQkFBK0IsY0FBYyxzQkFBc0Isa0JBQWtCLGVBQWUsY0FBYyxnQkFBZ0IsMkJBQTJCLEtBQUssa0JBQWtCLG1DQUFtQyx1QkFBdUIsS0FBSyxhQUFhLG1CQUFtQixrQkFBa0IsdUJBQXVCLHFDQUFxQyxLQUFLLEdBQUcscUJBQXFCO0FBQ3Z4RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL2NvbXBvbmVudHMvTGFuZy9pbmRleC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkxhbmdfbGlzdF9fMnZHUjkge1xcblxcdHBhZGRpbmc6IDAuNzVyZW0gMDtcXG5cXHRiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XFxuXFx0bWFyZ2luLXRvcDogMC43NXJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAzcHg7XFxuXFx0d2lkdGg6IDE4MHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMjJweCByZ2JhKDAsIDAsIDAsIDAuMTUpKTtcXG5cXHRtYXgtaGVpZ2h0OiA2MHZoO1xcblxcdG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4uTGFuZ19sYW5nX18xSFU5TyB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLkxhbmdfbGlzdF9pdGVtX19DcTdxVCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcXG5cXHRmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uTGFuZ19saXN0X2l0ZW1fX0NxN3FUOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWx2ZXIpO1xcbn1cXG5cXG4uTGFuZ19pbWdfXzJSdjBiIHtcXG5cXHR3aWR0aDogMTRweDtcXG5cXHRoZWlnaHQ6IDEwcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLkxhbmdfd3JhcHBlcl9fdENGbjUge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAtMC41cmVtO1xcblxcdHotaW5kZXg6IDE7XFxufVxcblxcbi5MYW5nX2xhbmdfXzFIVTlPOmhvdmVyIC5MYW5nX3dyYXBwZXJfX3RDRm41IHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuXFx0Lkxhbmdfd3JhcHBlcl9fdENGbjUge1xcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRcXHR0b3A6IDIuNXJlbTtcXG5cXHRcXHRyaWdodDogMDtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdGJvdHRvbTogMDtcXG5cXHRcXHRwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXHR9XFxuXFxuXFx0LkxhbmdfbGlzdF9pdGVtX19DcTdxVCB7XFxuXFx0XFx0Zm9udC1zaXplOiB2YXIoLS1sYXJnZS1mb250KTtcXG5cXHRcXHRmb250LXdlaWdodDogNjAwO1xcblxcdH1cXG5cXG5cXHQuTGFuZ19saXN0X18ydkdSOSB7XFxuXFx0XFx0ZmlsdGVyOiBub25lO1xcblxcdFxcdHdpZHRoOiBhdXRvO1xcblxcdFxcdGJvcmRlci1yYWRpdXM6IDA7XFxuXFx0XFx0bWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDQwcHgpO1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvTGFuZy9pbmRleC5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIscURBQXFEO0NBQ3JELGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLDJCQUEyQjtDQUMzQix1QkFBdUI7Q0FDdkIsNEJBQTRCO0NBQzVCLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQywrQkFBK0I7QUFDaEM7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLG9CQUFvQjtDQUNwQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQztFQUNDLGVBQWU7RUFDZixXQUFXO0VBQ1gsUUFBUTtFQUNSLE9BQU87RUFDUCxTQUFTO0VBQ1Qsb0JBQW9CO0NBQ3JCOztDQUVBO0VBQ0MsNEJBQTRCO0VBQzVCLGdCQUFnQjtDQUNqQjs7Q0FFQTtFQUNDLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtDQUMvQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5saXN0IHtcXG5cXHRwYWRkaW5nOiAwLjc1cmVtIDA7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdG1hcmdpbi10b3A6IDAuNzVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdHdpZHRoOiAxODBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDIycHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XFxuXFx0bWF4LWhlaWdodDogNjB2aDtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmxhbmcge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtYXJnaW4tbGVmdDogMS4yNXJlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5saXN0X2l0ZW0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0cGFkZGluZzogMC41cmVtIDAuNzVyZW07XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxpc3RfaXRlbTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcXG59XFxuXFxuLmltZyB7XFxuXFx0d2lkdGg6IDE0cHg7XFxuXFx0aGVpZ2h0OiAxMHB4O1xcblxcdG1hcmdpbi1yaWdodDogMC41cmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi53cmFwcGVyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogLTAuNXJlbTtcXG5cXHR6LWluZGV4OiAxO1xcbn1cXG5cXG4ubGFuZzpob3ZlciAud3JhcHBlciB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcblxcdC53cmFwcGVyIHtcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0XFx0dG9wOiAyLjVyZW07XFxuXFx0XFx0cmlnaHQ6IDA7XFxuXFx0XFx0bGVmdDogMDtcXG5cXHRcXHRib3R0b206IDA7XFxuXFx0XFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0fVxcblxcblxcdC5saXN0X2l0ZW0ge1xcblxcdFxcdGZvbnQtc2l6ZTogdmFyKC0tbGFyZ2UtZm9udCk7XFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHR9XFxuXFxuXFx0Lmxpc3Qge1xcblxcdFxcdGZpbHRlcjogbm9uZTtcXG5cXHRcXHR3aWR0aDogYXV0bztcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdFxcdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxpc3RcIjogXCJMYW5nX2xpc3RfXzJ2R1I5XCIsXG5cdFwibGFuZ1wiOiBcIkxhbmdfbGFuZ19fMUhVOU9cIixcblx0XCJsaXN0X2l0ZW1cIjogXCJMYW5nX2xpc3RfaXRlbV9fQ3E3cVRcIixcblx0XCJpbWdcIjogXCJMYW5nX2ltZ19fMlJ2MGJcIixcblx0XCJ3cmFwcGVyXCI6IFwiTGFuZ193cmFwcGVyX190Q0ZuNVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Lang/index.module.css\n");

/***/ })

})