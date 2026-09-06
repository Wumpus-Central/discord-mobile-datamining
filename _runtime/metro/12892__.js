// === Module 12892: ? ===

// Module 12892
import stackParserFromStackParserOptions from "stackParserFromStackParserOptions" /* 12800 */;
import setupIntegration from "module_12853" /* 12853 */;

let c2 = "_sentryBundlerPluginAppKey:";

export const thirdPartyErrorFilterIntegration = setupIntegration.defineIntegration((arg0) => {
  const behaviour = arg0;
  return {
    name: "ThirdPartyErrorsFilter",
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
          const result = options(dependencyMap[2]).addMetadataToStackFrames(options.getOptions().stackParser, type);
          const obj = options(dependencyMap[2]);
        }
      });
    },
    processEvent(tags) {
      let obj = stackParserFromStackParserOptions;
      const framesFromEvent = obj.getFramesFromEvent(tags);
      let mapped;
      if (framesFromEvent) {
        let found = framesFromEvent.filter((filename) => filename.filename);
        mapped = found.map((module_metadata) => {
          if (module_metadata.module_metadata) {
            const _Object = Object;
            const keys = Object.keys(module_metadata.module_metadata);
            const found = keys.filter((item) => item.startsWith(length));
            let mapped = found.map((arr) => arr.slice(length.length));
          } else {
            mapped = [];
          }
          return mapped;
        });
      }
      if (mapped) {
        if ("drop-error-if-contains-third-party-frames" === behaviour.behaviour) {
          let str2 = "some";
        } else {
          str2 = "every";
        }
        if (mapped[str2]((arr) => !arr.some((item) => {
          filterKeys = filterKeys.filterKeys;
          return filterKeys.includes(item);
        }))) {
          if ("drop-error-if-contains-third-party-frames" !== tmp2.behaviour) {
            if ("drop-error-if-exclusively-contains-third-party-frames" !== tmp2.behaviour) {
              obj = {};
              const merged = Object.assign(tags.tags);
              obj.third_party_code = true;
              tags.tags = obj;
            }
          }
          return null;
        }
      }
      return tags;
    }
  };
});