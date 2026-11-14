// === Module 1733: setupSetImmediate ===

// Module 1733 (setupSetImmediate)
const items = [{ code: "(function setupSetImmediate_Pnpm_setImmediatePolyfillTs1(){const setImmediatePolyfill=function(callback,...args){return setTimeout(callback,0,...args);};const clearImmediatePolyfill=function(immediateHandle){clearTimeout(immediateHandle);};globalThis.setImmediate=setImmediatePolyfill;globalThis.clearImmediate=clearImmediatePolyfill;})" }];
[tmp2] = items;
function setupSetImmediate() {
  globalThis.setImmediate = (arg0) => setTimeout(0, ...HermesBuiltin.copyRestArgs());
  globalThis.clearImmediate = (arg0) => {
    clearTimeout(arg0);
  };
}
setupSetImmediate.__workletHash = 14340714576738;
setupSetImmediate.__initData = tmp2;

export { setupSetImmediate };