// _runtime/metro/01036__.js
import NativeModules from "../00866_NativeModules.js";

require = arg1;
const dependencyMap = arg6;
const PrimitiveTagIntegration = "PrimitiveTagIntegration";

export const INTEGRATION_NAME = "PrimitiveTagIntegration";
export () => ({
  name: PrimitiveTagIntegration,
  setup(on) {
    on.on("beforeSendEvent", (tags) => {
      if (tags.tags) {
        const _Object = Object;
        const keys = Object.keys(tags.tags);
        const item = keys.forEach((item) => {
          tags.tags[item] = closure_2_0(closure_2_1[0]).PrimitiveToString(tags.tags[item]);
        });
      }
    });
  },
  afterAllSetup() {
    if (NativeModules.NATIVE.enableNative) {
      const NATIVE = NativeModules.NATIVE;
      const result = NATIVE._setPrimitiveProcessor((arg0) => closure_1_0(closure_1_1[0]).PrimitiveToString(arg0));
    }
  }
})