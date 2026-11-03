// === Module 1719: ? ===

// Module 1719
const items = [{ code: "(function isSynchronizable_Pnpm_isSynchronizableTs1(value){return typeof value==='object'&&value!==null&&!!value.__synchronizableRef;})" }];
[tmp2] = items;
function isSynchronizable(__synchronizableRef) {
  __synchronizableRef = typeof __synchronizableRef === "object";
  if (typeof __synchronizableRef === "object") {
    __synchronizableRef = null !== __synchronizableRef;
  }
  if (__synchronizableRef) {
    __synchronizableRef = __synchronizableRef.__synchronizableRef;
  }
  return __synchronizableRef;
}
isSynchronizable.__workletHash = 15473062699358;
isSynchronizable.__initData = tmp2;

export { isSynchronizable };