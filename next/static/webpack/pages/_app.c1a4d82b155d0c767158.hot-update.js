webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Lang/index.module.css":
/*!******************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/Lang/index.module.css ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Lang_list__2vGR9 {\\n\\tpadding: 0.75rem 0;\\n\\tbackground: var(--white);\\n\\tmargin-top: 0.75rem;\\n\\tborder-radius: 3px;\\n\\twidth: 180px;\\n\\ttext-align: center;\\n\\tfilter: drop-shadow(0px 0px 22px rgba(0, 0, 0, 0.15));\\n\\tmax-height: 60vh;\\n\\toverflow: auto;\\n}\\n\\n.Lang_lang__1HU9O {\\n\\tposition: relative;\\n\\tmargin-left: 1.25rem;\\n\\tcursor: pointer;\\n\\ttext-decoration: underline;\\n}\\n\\n.Lang_list_item__Cq7qT {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: flex-start;\\n\\tpadding: 0.5rem 0.75rem;\\n\\tfont-size: var(--small-font);\\n\\tfont-weight: 600;\\n\\ttext-decoration: none;\\n}\\n\\n.Lang_list_item__Cq7qT:hover {\\n\\tbackground-color: var(--silver);\\n}\\n\\n.Lang_img__2Rv0b {\\n\\twidth: 14px;\\n\\theight: 9px;\\n\\tmargin-right: 0.5rem;\\n\\tdisplay: flex;\\n}\\n\\n.Lang_wrapper__tCFn5 {\\n\\tdisplay: none;\\n\\tposition: absolute;\\n\\tright: -0.5rem;\\n\\tz-index: 1;\\n}\\n\\n.Lang_lang__1HU9O:hover .Lang_wrapper__tCFn5 {\\n\\tdisplay: block;\\n}\\n\\n@media (max-width: 768px) {\\n\\t.Lang_wrapper__tCFn5 {\\n\\t\\tposition: fixed;\\n\\t\\ttop: 2.5rem;\\n\\t\\tright: 0;\\n\\t\\tleft: 0;\\n\\t\\tbottom: 0;\\n\\t}\\n\\n\\t.Lang_list__2vGR9 {\\n\\t\\tfilter: none;\\n\\t\\twidth: auto;\\n\\t\\tborder-radius: 0;\\n\\t\\tmax-height: calc(100vh - 40px);\\n\\t}\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/Lang/index.module.css\"],\"names\":[],\"mappings\":\"AAAA;CACC,kBAAkB;CAClB,wBAAwB;CACxB,mBAAmB;CACnB,kBAAkB;CAClB,YAAY;CACZ,kBAAkB;CAClB,qDAAqD;CACrD,gBAAgB;CAChB,cAAc;AACf;;AAEA;CACC,kBAAkB;CAClB,oBAAoB;CACpB,eAAe;CACf,0BAA0B;AAC3B;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,2BAA2B;CAC3B,uBAAuB;CACvB,4BAA4B;CAC5B,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,WAAW;CACX,WAAW;CACX,oBAAoB;CACpB,aAAa;AACd;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,cAAc;CACd,UAAU;AACX;;AAEA;CACC,cAAc;AACf;;AAEA;CACC;EACC,eAAe;EACf,WAAW;EACX,QAAQ;EACR,OAAO;EACP,SAAS;CACV;;CAEA;EACC,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,8BAA8B;CAC/B;AACD\",\"sourcesContent\":[\".list {\\n\\tpadding: 0.75rem 0;\\n\\tbackground: var(--white);\\n\\tmargin-top: 0.75rem;\\n\\tborder-radius: 3px;\\n\\twidth: 180px;\\n\\ttext-align: center;\\n\\tfilter: drop-shadow(0px 0px 22px rgba(0, 0, 0, 0.15));\\n\\tmax-height: 60vh;\\n\\toverflow: auto;\\n}\\n\\n.lang {\\n\\tposition: relative;\\n\\tmargin-left: 1.25rem;\\n\\tcursor: pointer;\\n\\ttext-decoration: underline;\\n}\\n\\n.list_item {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: flex-start;\\n\\tpadding: 0.5rem 0.75rem;\\n\\tfont-size: var(--small-font);\\n\\tfont-weight: 600;\\n\\ttext-decoration: none;\\n}\\n\\n.list_item:hover {\\n\\tbackground-color: var(--silver);\\n}\\n\\n.img {\\n\\twidth: 14px;\\n\\theight: 9px;\\n\\tmargin-right: 0.5rem;\\n\\tdisplay: flex;\\n}\\n\\n.wrapper {\\n\\tdisplay: none;\\n\\tposition: absolute;\\n\\tright: -0.5rem;\\n\\tz-index: 1;\\n}\\n\\n.lang:hover .wrapper {\\n\\tdisplay: block;\\n}\\n\\n@media (max-width: 768px) {\\n\\t.wrapper {\\n\\t\\tposition: fixed;\\n\\t\\ttop: 2.5rem;\\n\\t\\tright: 0;\\n\\t\\tleft: 0;\\n\\t\\tbottom: 0;\\n\\t}\\n\\n\\t.list {\\n\\t\\tfilter: none;\\n\\t\\twidth: auto;\\n\\t\\tborder-radius: 0;\\n\\t\\tmax-height: calc(100vh - 40px);\\n\\t}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"list\": \"Lang_list__2vGR9\",\n\t\"lang\": \"Lang_lang__1HU9O\",\n\t\"list_item\": \"Lang_list_item__Cq7qT\",\n\t\"img\": \"Lang_img__2Rv0b\",\n\t\"wrapper\": \"Lang_wrapper__tCFn5\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5nL2luZGV4Lm1vZHVsZS5jc3M/YzhjMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsd0JBQXdCLHVCQUF1QixpQkFBaUIsdUJBQXVCLDBEQUEwRCxxQkFBcUIsbUJBQW1CLEdBQUcsdUJBQXVCLHVCQUF1Qix5QkFBeUIsb0JBQW9CLCtCQUErQixHQUFHLDRCQUE0QixrQkFBa0Isd0JBQXdCLGdDQUFnQyw0QkFBNEIsaUNBQWlDLHFCQUFxQiwwQkFBMEIsR0FBRyxrQ0FBa0Msb0NBQW9DLEdBQUcsc0JBQXNCLGdCQUFnQixnQkFBZ0IseUJBQXlCLGtCQUFrQixHQUFHLDBCQUEwQixrQkFBa0IsdUJBQXVCLG1CQUFtQixlQUFlLEdBQUcsa0RBQWtELG1CQUFtQixHQUFHLCtCQUErQiwwQkFBMEIsc0JBQXNCLGtCQUFrQixlQUFlLGNBQWMsZ0JBQWdCLEtBQUsseUJBQXlCLG1CQUFtQixrQkFBa0IsdUJBQXVCLHFDQUFxQyxLQUFLLEdBQUcsU0FBUyxpR0FBaUcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sZ0NBQWdDLHVCQUF1Qiw2QkFBNkIsd0JBQXdCLHVCQUF1QixpQkFBaUIsdUJBQXVCLDBEQUEwRCxxQkFBcUIsbUJBQW1CLEdBQUcsV0FBVyx1QkFBdUIseUJBQXlCLG9CQUFvQiwrQkFBK0IsR0FBRyxnQkFBZ0Isa0JBQWtCLHdCQUF3QixnQ0FBZ0MsNEJBQTRCLGlDQUFpQyxxQkFBcUIsMEJBQTBCLEdBQUcsc0JBQXNCLG9DQUFvQyxHQUFHLFVBQVUsZ0JBQWdCLGdCQUFnQix5QkFBeUIsa0JBQWtCLEdBQUcsY0FBYyxrQkFBa0IsdUJBQXVCLG1CQUFtQixlQUFlLEdBQUcsMEJBQTBCLG1CQUFtQixHQUFHLCtCQUErQixjQUFjLHNCQUFzQixrQkFBa0IsZUFBZSxjQUFjLGdCQUFnQixLQUFLLGFBQWEsbUJBQW1CLGtCQUFrQix1QkFBdUIscUNBQXFDLEtBQUssR0FBRyxxQkFBcUI7QUFDLy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vY29tcG9uZW50cy9MYW5nL2luZGV4Lm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuTGFuZ19saXN0X18ydkdSOSB7XFxuXFx0cGFkZGluZzogMC43NXJlbSAwO1xcblxcdGJhY2tncm91bmQ6IHZhcigtLXdoaXRlKTtcXG5cXHRtYXJnaW4tdG9wOiAwLjc1cmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDNweDtcXG5cXHR3aWR0aDogMTgwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAyMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSkpO1xcblxcdG1heC1oZWlnaHQ6IDYwdmg7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5MYW5nX2xhbmdfXzFIVTlPIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0bWFyZ2luLWxlZnQ6IDEuMjVyZW07XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uTGFuZ19saXN0X2l0ZW1fX0NxN3FUIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5MYW5nX2xpc3RfaXRlbV9fQ3E3cVQ6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpbHZlcik7XFxufVxcblxcbi5MYW5nX2ltZ19fMlJ2MGIge1xcblxcdHdpZHRoOiAxNHB4O1xcblxcdGhlaWdodDogOXB4O1xcblxcdG1hcmdpbi1yaWdodDogMC41cmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5MYW5nX3dyYXBwZXJfX3RDRm41IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRyaWdodDogLTAuNXJlbTtcXG5cXHR6LWluZGV4OiAxO1xcbn1cXG5cXG4uTGFuZ19sYW5nX18xSFU5Tzpob3ZlciAuTGFuZ193cmFwcGVyX190Q0ZuNSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcblxcdC5MYW5nX3dyYXBwZXJfX3RDRm41IHtcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0XFx0dG9wOiAyLjVyZW07XFxuXFx0XFx0cmlnaHQ6IDA7XFxuXFx0XFx0bGVmdDogMDtcXG5cXHRcXHRib3R0b206IDA7XFxuXFx0fVxcblxcblxcdC5MYW5nX2xpc3RfXzJ2R1I5IHtcXG5cXHRcXHRmaWx0ZXI6IG5vbmU7XFxuXFx0XFx0d2lkdGg6IGF1dG87XFxuXFx0XFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHRcXHRtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDBweCk7XFxuXFx0fVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9MYW5nL2luZGV4Lm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixxREFBcUQ7Q0FDckQsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLHVCQUF1QjtDQUN2Qiw0QkFBNEI7Q0FDNUIsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsb0JBQW9CO0NBQ3BCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDO0VBQ0MsZUFBZTtFQUNmLFdBQVc7RUFDWCxRQUFRO0VBQ1IsT0FBTztFQUNQLFNBQVM7Q0FDVjs7Q0FFQTtFQUNDLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtDQUMvQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5saXN0IHtcXG5cXHRwYWRkaW5nOiAwLjc1cmVtIDA7XFxuXFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcblxcdG1hcmdpbi10b3A6IDAuNzVyZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcblxcdHdpZHRoOiAxODBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDIycHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XFxuXFx0bWF4LWhlaWdodDogNjB2aDtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLmxhbmcge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRtYXJnaW4tbGVmdDogMS4yNXJlbTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5saXN0X2l0ZW0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0cGFkZGluZzogMC41cmVtIDAuNzVyZW07XFxuXFx0Zm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxpc3RfaXRlbTpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcXG59XFxuXFxuLmltZyB7XFxuXFx0d2lkdGg6IDE0cHg7XFxuXFx0aGVpZ2h0OiA5cHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLndyYXBwZXIge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHJpZ2h0OiAtMC41cmVtO1xcblxcdHotaW5kZXg6IDE7XFxufVxcblxcbi5sYW5nOmhvdmVyIC53cmFwcGVyIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuXFx0LndyYXBwZXIge1xcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHRcXHR0b3A6IDIuNXJlbTtcXG5cXHRcXHRyaWdodDogMDtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdGJvdHRvbTogMDtcXG5cXHR9XFxuXFxuXFx0Lmxpc3Qge1xcblxcdFxcdGZpbHRlcjogbm9uZTtcXG5cXHRcXHR3aWR0aDogYXV0bztcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAwO1xcblxcdFxcdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxpc3RcIjogXCJMYW5nX2xpc3RfXzJ2R1I5XCIsXG5cdFwibGFuZ1wiOiBcIkxhbmdfbGFuZ19fMUhVOU9cIixcblx0XCJsaXN0X2l0ZW1cIjogXCJMYW5nX2xpc3RfaXRlbV9fQ3E3cVRcIixcblx0XCJpbWdcIjogXCJMYW5nX2ltZ19fMlJ2MGJcIixcblx0XCJ3cmFwcGVyXCI6IFwiTGFuZ193cmFwcGVyX190Q0ZuNVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Lang/index.module.css\n");

/***/ })

})