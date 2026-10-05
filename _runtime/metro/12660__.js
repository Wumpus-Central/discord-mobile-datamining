// _runtime/metro/12660__.js
import _mod12568 from "12568__.js";
import 12621__ from "12621__.js";

let filterKeys;

let c2 = "_sentryBundlerPluginAppKey:";

export const thirdPartyErrorFilterIntegration = module_12621.defineIntegration((arg0) => {
  const behaviour = arg0;
  let obj = {
    name: "ThirdPartyErrorsFilter",
    setup(on) {
      const options = on;
      on.on("beforeEnvelope", (arg0) => {
        let obj = options(closure_1_1[1]);
        obj.forEachEnvelopeItem(arg0, (arg0, arg1) => {
          if ("event" === arg1) {
            const _Array = Array;
            let tmp3;
            if (Array.isArray(arg0)) {
              tmp3 = arg0[1];
            }
            if (tmp3) {
              const obj = options(closure_1_1[2]);
              const result = obj.stripMetadataFromStackFrames(tmp3);
              arg0[1] = tmp3;
            }
          }
        });
      });
      on.on("applyFrameMetadata", (type) => {
        if (!type.type) {
          const stackParser = options.getOptions().stackParser;
          const obj = options(dependencyMap[2]);
          const result = obj.addMetadataToStackFrames(stackParser, type);
        }
      });
    },
    processEvent(tags) {
      const obj = _mod12568;
      const framesFromEvent = obj.getFramesFromEvent(tags);
      let mapped;
      if (framesFromEvent) {
        let found = framesFromEvent.filter((filename) => filename.filename);
        mapped = found.map((module_metadata) => {
          let length;
          let mapped;
          if (module_metadata.module_metadata) {
            const _Object = Object;
            const keys = Object.keys(module_metadata.module_metadata);
            const found = keys.filter((item) => item.startsWith(length));
            mapped = found.map((arr) => arr.slice(length.length));
          } else {
            mapped = [];
          }
          return mapped;
        });
      }
      if (mapped) {
        let str2;
        if ("drop-error-if-contains-third-party-frames" === behaviour.behaviour) {
          str2 = "some";
        } else {
          str2 = "every";
        }
        if (mapped[str2]((arr) => !arr.some((item) => {
          filterKeys = filterKeys.filterKeys;
          return filterKeys.includes(item);
        }))) {
          if ("drop-error-if-contains-third-party-frames" !== behaviour.behaviour) {
            if ("drop-error-if-exclusively-contains-third-party-frames" !== behaviour.behaviour) {
              const obj2 = { third_party_code: true };
              const merged = Object.assign(tags.tags);
              tags.tags = obj2;
            }
          }
          return null;
        }
      }
      return tags;
    }
  };
  return obj;
});