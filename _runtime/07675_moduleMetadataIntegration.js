// _runtime/07675_moduleMetadataIntegration.js
import setupIntegration from "07653_setupIntegration.js";


export const moduleMetadataIntegration = setupIntegration.defineIntegration(() => ({
  name: "ModuleMetadata",
  setup(on) {
    closure_0 = on;
    on.on("beforeEnvelope", (arg0) => {
      options(table[1]).forEachEnvelopeItem(arg0, (arg0, arg1) => {
        if ("event" === arg1) {
          const _Array = Array;
          let tmp3;
          if (Array.isArray(arg0)) {
            tmp3 = arg0[1];
          }
          if (tmp3) {
            const result = callback(table[2]).stripMetadataFromStackFrames(tmp3);
            arg0[1] = tmp3;
            const obj = callback(table[2]);
          }
        }
      });
    });
    on.on("applyFrameMetadata", (type) => {
      if (!type.type) {
        const result = options(closure_1_1[2]).addMetadataToStackFrames(options.getOptions().stackParser, type);
        const obj = options(closure_1_1[2]);
      }
    });
  }
}));