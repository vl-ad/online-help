webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Sidebar/index.module.css":
/*!*********************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-2-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-2-2!./components/Sidebar/index.module.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".Sidebar_Sidebar__3VeHD {\\n\\tflex-shrink: 0;\\n\\twidth: 240px;\\n\\tpadding-bottom: 5rem;\\n\\tborder-right: 1px solid var(--silver-gray);\\n\\tmargin-right: 40px;\\n\\talign-self: start;\\n\\tfont-size: var(--medium-font);\\n}\\n\\n.Sidebar_links__1rb-1 {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n}\\n\\n.Sidebar_link__31OLt {\\n\\tfont-size: var(--medium-font);\\n\\tfont-weight: 600;\\n\\tpadding: 0.5rem 0;\\n\\tcursor: pointer;\\n\\tpadding-left: 40px;\\n}\\n\\n.Sidebar_item__39SbW {\\n\\ttext-decoration: none;\\n}\\n\\n.Sidebar_link__31OLt.Sidebar_active__nmc5w {\\n\\tcolor: var(--accent);\\n\\tborder-right: 3px solid var(--accent);\\n}\\n\\n.Sidebar_link__31OLt:hover {\\n\\tbackground-color: var(--silver);\\n}\\n\\n.Sidebar_lang__CazJG {\\n\\tdisplay: none;\\n}\\n\\n@media (max-width: 768px) {\\n\\t.Sidebar_Sidebar__3VeHD {\\n\\t\\tposition: fixed;\\n\\t\\tbackground-color: var(--white);\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\tbottom: 0;\\n\\t\\ttop: 70px;\\n\\t\\twidth: auto;\\n\\t\\tmargin-right: 0;\\n\\t}\\n\\n\\t.Sidebar_hidden___cLdE {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\t.Sidebar_links__1rb-1 {\\n\\t\\tpadding-bottom: 1.5rem;\\n\\t\\tmargin-bottom: 1.5rem;\\n\\t\\tborder-bottom: 1px solid var(--silver-gray);\\n\\t\\tfont-size: var(--large-font);\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t.Sidebar_title__3wp5L {\\n\\t\\tpadding-left: 30px;\\n\\t}\\n\\n\\t.Sidebar_link__31OLt {\\n\\t\\tpadding-left: 30px;\\n\\t}\\n\\n\\t.Sidebar_lang__CazJG {\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\t.Sidebar_lang__CazJG > * {\\n\\t\\tmargin-left: 2rem;\\n\\t\\tmargin-bottom: 1rem;\\n\\t}\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://components/Sidebar/index.module.css\"],\"names\":[],\"mappings\":\"AAAA;CACC,cAAc;CACd,YAAY;CACZ,oBAAoB;CACpB,0CAA0C;CAC1C,kBAAkB;CAClB,iBAAiB;CACjB,6BAA6B;AAC9B;;AAEA;CACC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,6BAA6B;CAC7B,gBAAgB;CAChB,iBAAiB;CACjB,eAAe;CACf,kBAAkB;AACnB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,oBAAoB;CACpB,qCAAqC;AACtC;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,aAAa;AACd;;AAEA;CACC;EACC,eAAe;EACf,8BAA8B;EAC9B,OAAO;EACP,QAAQ;EACR,SAAS;EACT,SAAS;EACT,WAAW;EACX,eAAe;CAChB;;CAEA;EACC,aAAa;CACd;;CAEA;EACC,sBAAsB;EACtB,qBAAqB;EACrB,2CAA2C;EAC3C,4BAA4B;EAC5B,gBAAgB;CACjB;;CAEA;EACC,kBAAkB;CACnB;;CAEA;EACC,kBAAkB;CACnB;;CAEA;EACC,cAAc;CACf;;CAEA;EACC,iBAAiB;EACjB,mBAAmB;CACpB;AACD\",\"sourcesContent\":[\".Sidebar {\\n\\tflex-shrink: 0;\\n\\twidth: 240px;\\n\\tpadding-bottom: 5rem;\\n\\tborder-right: 1px solid var(--silver-gray);\\n\\tmargin-right: 40px;\\n\\talign-self: start;\\n\\tfont-size: var(--medium-font);\\n}\\n\\n.links {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n}\\n\\n.link {\\n\\tfont-size: var(--medium-font);\\n\\tfont-weight: 600;\\n\\tpadding: 0.5rem 0;\\n\\tcursor: pointer;\\n\\tpadding-left: 40px;\\n}\\n\\n.item {\\n\\ttext-decoration: none;\\n}\\n\\n.link.active {\\n\\tcolor: var(--accent);\\n\\tborder-right: 3px solid var(--accent);\\n}\\n\\n.link:hover {\\n\\tbackground-color: var(--silver);\\n}\\n\\n.lang {\\n\\tdisplay: none;\\n}\\n\\n@media (max-width: 768px) {\\n\\t.Sidebar {\\n\\t\\tposition: fixed;\\n\\t\\tbackground-color: var(--white);\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\tbottom: 0;\\n\\t\\ttop: 70px;\\n\\t\\twidth: auto;\\n\\t\\tmargin-right: 0;\\n\\t}\\n\\n\\t.hidden {\\n\\t\\tdisplay: none;\\n\\t}\\n\\n\\t.links {\\n\\t\\tpadding-bottom: 1.5rem;\\n\\t\\tmargin-bottom: 1.5rem;\\n\\t\\tborder-bottom: 1px solid var(--silver-gray);\\n\\t\\tfont-size: var(--large-font);\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t.title {\\n\\t\\tpadding-left: 30px;\\n\\t}\\n\\n\\t.link {\\n\\t\\tpadding-left: 30px;\\n\\t}\\n\\n\\t.lang {\\n\\t\\tdisplay: block;\\n\\t}\\n\\n\\t.lang > * {\\n\\t\\tmargin-left: 2rem;\\n\\t\\tmargin-bottom: 1rem;\\n\\t}\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"Sidebar\": \"Sidebar_Sidebar__3VeHD\",\n\t\"links\": \"Sidebar_links__1rb-1\",\n\t\"link\": \"Sidebar_link__31OLt\",\n\t\"item\": \"Sidebar_item__39SbW\",\n\t\"active\": \"Sidebar_active__nmc5w\",\n\t\"lang\": \"Sidebar_lang__CazJG\",\n\t\"hidden\": \"Sidebar_hidden___cLdE\",\n\t\"title\": \"Sidebar_title__3wp5L\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyL2luZGV4Lm1vZHVsZS5jc3M/YTYwMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLG9IQUF5RDtBQUNuRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsNEJBQTRCLG1CQUFtQixpQkFBaUIseUJBQXlCLCtDQUErQyx1QkFBdUIsc0JBQXNCLGtDQUFrQyxHQUFHLDJCQUEyQixrQkFBa0IsMkJBQTJCLEdBQUcsMEJBQTBCLGtDQUFrQyxxQkFBcUIsc0JBQXNCLG9CQUFvQix1QkFBdUIsR0FBRywwQkFBMEIsMEJBQTBCLEdBQUcsZ0RBQWdELHlCQUF5QiwwQ0FBMEMsR0FBRyxnQ0FBZ0Msb0NBQW9DLEdBQUcsMEJBQTBCLGtCQUFrQixHQUFHLCtCQUErQiw2QkFBNkIsc0JBQXNCLHFDQUFxQyxjQUFjLGVBQWUsZ0JBQWdCLGdCQUFnQixrQkFBa0Isc0JBQXNCLEtBQUssOEJBQThCLG9CQUFvQixLQUFLLDZCQUE2Qiw2QkFBNkIsNEJBQTRCLGtEQUFrRCxtQ0FBbUMsdUJBQXVCLEtBQUssNkJBQTZCLHlCQUF5QixLQUFLLDRCQUE0Qix5QkFBeUIsS0FBSyw0QkFBNEIscUJBQXFCLEtBQUssZ0NBQWdDLHdCQUF3QiwwQkFBMEIsS0FBSyxHQUFHLFNBQVMsb0dBQW9HLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLG1DQUFtQyxtQkFBbUIsaUJBQWlCLHlCQUF5QiwrQ0FBK0MsdUJBQXVCLHNCQUFzQixrQ0FBa0MsR0FBRyxZQUFZLGtCQUFrQiwyQkFBMkIsR0FBRyxXQUFXLGtDQUFrQyxxQkFBcUIsc0JBQXNCLG9CQUFvQix1QkFBdUIsR0FBRyxXQUFXLDBCQUEwQixHQUFHLGtCQUFrQix5QkFBeUIsMENBQTBDLEdBQUcsaUJBQWlCLG9DQUFvQyxHQUFHLFdBQVcsa0JBQWtCLEdBQUcsK0JBQStCLGNBQWMsc0JBQXNCLHFDQUFxQyxjQUFjLGVBQWUsZ0JBQWdCLGdCQUFnQixrQkFBa0Isc0JBQXNCLEtBQUssZUFBZSxvQkFBb0IsS0FBSyxjQUFjLDZCQUE2Qiw0QkFBNEIsa0RBQWtELG1DQUFtQyx1QkFBdUIsS0FBSyxjQUFjLHlCQUF5QixLQUFLLGFBQWEseUJBQXlCLEtBQUssYUFBYSxxQkFBcUIsS0FBSyxpQkFBaUIsd0JBQXdCLDBCQUEwQixLQUFLLEdBQUcscUJBQXFCO0FBQzk3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL2NvbXBvbmVudHMvU2lkZWJhci9pbmRleC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlNpZGViYXJfU2lkZWJhcl9fM1ZlSEQge1xcblxcdGZsZXgtc2hyaW5rOiAwO1xcblxcdHdpZHRoOiAyNDBweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNXJlbTtcXG5cXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1zaWx2ZXItZ3JheSk7XFxuXFx0bWFyZ2luLXJpZ2h0OiA0MHB4O1xcblxcdGFsaWduLXNlbGY6IHN0YXJ0O1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tbWVkaXVtLWZvbnQpO1xcbn1cXG5cXG4uU2lkZWJhcl9saW5rc19fMXJiLTEge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLlNpZGViYXJfbGlua19fMzFPTHQge1xcblxcdGZvbnQtc2l6ZTogdmFyKC0tbWVkaXVtLWZvbnQpO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0cGFkZGluZzogMC41cmVtIDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHBhZGRpbmctbGVmdDogNDBweDtcXG59XFxuXFxuLlNpZGViYXJfaXRlbV9fMzlTYlcge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLlNpZGViYXJfbGlua19fMzFPTHQuU2lkZWJhcl9hY3RpdmVfX25tYzV3IHtcXG5cXHRjb2xvcjogdmFyKC0tYWNjZW50KTtcXG5cXHRib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4uU2lkZWJhcl9saW5rX18zMU9MdDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lsdmVyKTtcXG59XFxuXFxuLlNpZGViYXJfbGFuZ19fQ2F6Skcge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcblxcdC5TaWRlYmFyX1NpZGViYXJfXzNWZUhEIHtcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xcblxcdFxcdGxlZnQ6IDA7XFxuXFx0XFx0cmlnaHQ6IDA7XFxuXFx0XFx0Ym90dG9tOiAwO1xcblxcdFxcdHRvcDogNzBweDtcXG5cXHRcXHR3aWR0aDogYXV0bztcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDA7XFxuXFx0fVxcblxcblxcdC5TaWRlYmFyX2hpZGRlbl9fX2NMZEUge1xcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0fVxcblxcblxcdC5TaWRlYmFyX2xpbmtzX18xcmItMSB7XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG5cXHRcXHRtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXNpbHZlci1ncmF5KTtcXG5cXHRcXHRmb250LXNpemU6IHZhcigtLWxhcmdlLWZvbnQpO1xcblxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxuXFx0fVxcblxcblxcdC5TaWRlYmFyX3RpdGxlX18zd3A1TCB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAzMHB4O1xcblxcdH1cXG5cXG5cXHQuU2lkZWJhcl9saW5rX18zMU9MdCB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAzMHB4O1xcblxcdH1cXG5cXG5cXHQuU2lkZWJhcl9sYW5nX19DYXpKRyB7XFxuXFx0XFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0fVxcblxcblxcdC5TaWRlYmFyX2xhbmdfX0NhekpHID4gKiB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDJyZW07XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL1NpZGViYXIvaW5kZXgubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osb0JBQW9CO0NBQ3BCLDBDQUEwQztDQUMxQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyw2QkFBNkI7Q0FDN0IsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDO0VBQ0MsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxhQUFhO0NBQ2Q7O0NBRUE7RUFDQyxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDJDQUEyQztFQUMzQyw0QkFBNEI7RUFDNUIsZ0JBQWdCO0NBQ2pCOztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25COztDQUVBO0VBQ0Msa0JBQWtCO0NBQ25COztDQUVBO0VBQ0MsY0FBYztDQUNmOztDQUVBO0VBQ0MsaUJBQWlCO0VBQ2pCLG1CQUFtQjtDQUNwQjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5TaWRlYmFyIHtcXG5cXHRmbGV4LXNocmluazogMDtcXG5cXHR3aWR0aDogMjQwcHg7XFxuXFx0cGFkZGluZy1ib3R0b206IDVyZW07XFxuXFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tc2lsdmVyLWdyYXkpO1xcblxcdG1hcmdpbi1yaWdodDogNDBweDtcXG5cXHRhbGlnbi1zZWxmOiBzdGFydDtcXG5cXHRmb250LXNpemU6IHZhcigtLW1lZGl1bS1mb250KTtcXG59XFxuXFxuLmxpbmtzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5saW5rIHtcXG5cXHRmb250LXNpemU6IHZhcigtLW1lZGl1bS1mb250KTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdHBhZGRpbmc6IDAuNXJlbSAwO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5pdGVtIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5saW5rLmFjdGl2ZSB7XFxuXFx0Y29sb3I6IHZhcigtLWFjY2VudCk7XFxuXFx0Ym9yZGVyLXJpZ2h0OiAzcHggc29saWQgdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuLmxpbms6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpbHZlcik7XFxufVxcblxcbi5sYW5nIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG5cXHQuU2lkZWJhciB7XFxuXFx0XFx0cG9zaXRpb246IGZpeGVkO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcXG5cXHRcXHRsZWZ0OiAwO1xcblxcdFxcdHJpZ2h0OiAwO1xcblxcdFxcdGJvdHRvbTogMDtcXG5cXHRcXHR0b3A6IDcwcHg7XFxuXFx0XFx0d2lkdGg6IGF1dG87XFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiAwO1xcblxcdH1cXG5cXG5cXHQuaGlkZGVuIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXG5cXHQubGlua3Mge1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMS41cmVtO1xcblxcdFxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zaWx2ZXItZ3JheSk7XFxuXFx0XFx0Zm9udC1zaXplOiB2YXIoLS1sYXJnZS1mb250KTtcXG5cXHRcXHRmb250LXdlaWdodDogNTAwO1xcblxcdH1cXG5cXG5cXHQudGl0bGUge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMzBweDtcXG5cXHR9XFxuXFxuXFx0Lmxpbmsge1xcblxcdFxcdHBhZGRpbmctbGVmdDogMzBweDtcXG5cXHR9XFxuXFxuXFx0Lmxhbmcge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdH1cXG5cXG5cXHQubGFuZyA+ICoge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAycmVtO1xcblxcdFxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJTaWRlYmFyXCI6IFwiU2lkZWJhcl9TaWRlYmFyX18zVmVIRFwiLFxuXHRcImxpbmtzXCI6IFwiU2lkZWJhcl9saW5rc19fMXJiLTFcIixcblx0XCJsaW5rXCI6IFwiU2lkZWJhcl9saW5rX18zMU9MdFwiLFxuXHRcIml0ZW1cIjogXCJTaWRlYmFyX2l0ZW1fXzM5U2JXXCIsXG5cdFwiYWN0aXZlXCI6IFwiU2lkZWJhcl9hY3RpdmVfX25tYzV3XCIsXG5cdFwibGFuZ1wiOiBcIlNpZGViYXJfbGFuZ19fQ2F6SkdcIixcblx0XCJoaWRkZW5cIjogXCJTaWRlYmFyX2hpZGRlbl9fX2NMZEVcIixcblx0XCJ0aXRsZVwiOiBcIlNpZGViYXJfdGl0bGVfXzN3cDVMXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/Sidebar/index.module.css\n");

/***/ })

})