// === Module 5315: RootNavigationRef ===

// Module 5315 (RootNavigationRef)
import Link from "Link" /* 1500 */;
import size from "module_2" /* 2 */;

let ready = Link.createNavigationContainerRef();
const result = size.fileFinishedImporting("modules/main_tabs_v2/RootNavigationRef.native.tsx");

export function getRootNavigationRef() {
  return closure_0;
}
export function runWhenRootNavigationReady(fn) {
  ready = fn;
  if (ready.isReady()) {
    fn();
  } else {
    closure_1 = ready.addListener("ready", () => {
      closure_1();
      closure_0();
    });
  }
}