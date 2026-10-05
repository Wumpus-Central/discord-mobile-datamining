// _runtime/metro/01047__.js
import _mod877 from "00877__.js";

let tags;

const PrimitiveTagIntegration = "PrimitiveTagIntegration";

export const INTEGRATION_NAME = "PrimitiveTagIntegration";
export const primitiveTagIntegration = () => {
  let obj = {
    name: PrimitiveTagIntegration,
    setup(on) {
      on.on("beforeSendEvent", (tags) => {
        if (tags.tags) {
          const _Object = Object;
          const keys = Object.keys(tags.tags);
          const item = keys.forEach((item) => {
            tags = tags.tags;
            const obj = closure_2_0(closure_2_1[0]);
            tags[item] = obj.PrimitiveToString(tags.tags[item]);
          });
        }
      });
    },
    afterAllSetup() {
      if (_mod877.NATIVE.enableNative) {
        const NATIVE = _mod877.NATIVE;
        const result = NATIVE._setPrimitiveProcessor((arg0) => {
          const obj = closure_1_0(closure_1_1[0]);
          return obj.PrimitiveToString(arg0);
        });
      }
    },
  };
  return obj;
};
