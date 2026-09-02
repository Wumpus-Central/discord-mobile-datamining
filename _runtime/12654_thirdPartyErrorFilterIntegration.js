// _runtime/12654_thirdPartyErrorFilterIntegration.js
import setupIntegration from "12615_setupIntegration.js";

let c2 = "_sentryBundlerPluginAppKey:";

export const thirdPartyErrorFilterIntegration = setupIntegration.defineIntegration((arg0) => {
  closure_0 = arg0;
  return {
    name: "ThirdPartyErrorsFilter",
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
    },
    processEvent(tags) {
      let obj = lib(closure_1_1[3]);
      const framesFromEvent = obj.getFramesFromEvent(tags);
      let mapped;
      if (framesFromEvent) {
        let found = framesFromEvent.filter((filename) => filename.filename);
        mapped = found.map((module_metadata) => {
          if (module_metadata.module_metadata) {
            const _Object = Object;
            const keys = Object.keys(module_metadata.module_metadata);
            const found = keys.filter((str) => str.startsWith(closure_2));
            let mapped = found.map((arr) => arr.slice(length.length));
          } else {
            mapped = [];
          }
          return mapped;
        });
      }
      if (mapped) {
        if ("drop-error-if-contains-third-party-frames" === lib.behaviour) {
          let str2 = "some";
        } else {
          str2 = "every";
        }
        if (
          mapped[str2](
            (arr) =>
              !arr.some((arg0) => {
                filterKeys = filterKeys.filterKeys;
                return filterKeys.includes(arg0);
              }),
          )
        ) {
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
    },
  };
});
