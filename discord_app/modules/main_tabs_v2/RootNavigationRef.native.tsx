// === Module 5112: RootNavigationRef ===

// Module 5112 (RootNavigationRef)
import Link from "Link" /* 1506 */;
import size from "module_2" /* 2 */;

let ready = Link.createNavigationContainerRef();
const result = size.fileFinishedImporting("modules/main_tabs_v2/RootNavigationRef.native.tsx");

export function getRootNavigationRef() {
  return closure_0;
}
export const runWhenRootNavigationReady = function runWhenRootNavigationReady(fn) {
  ready = fn;
  if (ready.isReady()) {
    fn();
  } else {
    closure_1 = ready.addListener("ready", () => {
      closure_1();
      closure_0();
    });
  }
};