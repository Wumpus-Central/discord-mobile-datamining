// === Module 12658: ? ===

// Module 12658
import _mod12659 from "module_12659" /* 12659 */;
import setupIntegration from "module_12636" /* 12636 */;


export const moduleMetadataIntegration = setupIntegration.defineIntegration(() => ({
  name: "ModuleMetadata",
  setup(on) {
    options = on;
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
        const result = _mod12659.addMetadataToStackFrames(options.getOptions().stackParser, type);
      }
    });
  }
}));