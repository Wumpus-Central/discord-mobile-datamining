// _runtime/metro/13128__.js
import _mod13129 from "13129__.js";
import setupIntegration from "13106__.js";

export const moduleMetadataIntegration = setupIntegration.defineIntegration(() => ({
  name: "ModuleMetadata",
  setup(on) {
    const options = on;
    on.on("beforeEnvelope", (arg0) => {
      options(closure_1_1[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
        if ("event" === arg1) {
          const _Array = Array;
          let tmp3;
          if (Array.isArray(arg0)) {
            tmp3 = arg0[1];
          }
          if (tmp3) {
            const result = options(dependencyMap[2]).stripMetadataFromStackFrames(tmp3);
            arg0[1] = tmp3;
            const obj = options(dependencyMap[2]);
          }
        }
      });
    });
    on.on("applyFrameMetadata", (type) => {
      if (!type.type) {
        const result = _mod13129.addMetadataToStackFrames(options.getOptions().stackParser, type);
      }
    });
  },
}));
