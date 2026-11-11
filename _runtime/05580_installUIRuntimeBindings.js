// === Module 5580: installUIRuntimeBindings ===

// Module 5580 (installUIRuntimeBindings)
import tagMessage from "tagMessage" /* 5539 */;
import NativeProxy2 from "NativeProxy" /* 5581 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;

export function installUIRuntimeBindings(arg0) {
  _require = arg0;
  require("ghQueueMicrotask").ghQueueMicrotask(() => {
    let tmp3;
    if (closure_0 != null) {
      tmp3 = closure_0();
    }
    globalThis.__RNGH_UI_WORKLET_RUNTIME_HOLDER = tmp3;
    try {
      const NativeProxy = NativeProxy2.NativeProxy;
      if (!NativeProxy.installUIRuntimeBindings()) {
        const _console = console;
        console.warn(tagMessage.tagMessage("Failed to install UI runtime bindings. Please report this at https://github.com/software-mansion/react-native-gesture-handler/issues."));
        const tmp4Result = tagMessage;
      }
      const _globalThis = globalThis;
      globalThis.__RNGH_UI_WORKLET_RUNTIME_HOLDER = undefined;
    } catch (tmp7) {
      tmp.globalThis.__RNGH_UI_WORKLET_RUNTIME_HOLDER = tmp2;
      throw tmp7;
    }
  });
}