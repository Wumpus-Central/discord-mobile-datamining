// discord_app/modules/main_tabs_v2/RootNavigationRef.native.tsx
import Link from "../../../_runtime/01506_Link.js";
import size from "../../../_runtime/metro/00002__.js";

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
