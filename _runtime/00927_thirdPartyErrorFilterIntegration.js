// _runtime/00927_thirdPartyErrorFilterIntegration.js
import setupIntegration from "00887_setupIntegration.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = "_sentryBundlerPluginAppKey:";
let c3 = "Attempt to invoke user-land function";
let c4 = "fn.apply(this, wrappedArguments)";

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
      lib = lib.ignoreSentryInternalFrames;
      let obj = lib(dependencyMap[3]);
      const framesFromEvent = obj.getFramesFromEvent(tags);
      let mapped;
      if (framesFromEvent) {
        let found = framesFromEvent.filter((item, index) => {
          let filename = item.filename;
          if (filename) {
            let tmp3 = null != item.lineno || null != item.colno || null != item.instruction_addr;
            if (tmp3) {
              let tmp5 = !closure_0;
              if (closure_0) {
                let flag = false;
                if (0 === index) {
                  flag = false;
                  if (item.context_line) {
                    flag = false;
                    if (item.filename) {
                      filename = item.filename;
                      flag = false;
                      if (filename.includes("sentry")) {
                        const filename2 = item.filename;
                        flag = false;
                        if (filename2.includes("helpers")) {
                          const context_line = item.context_line;
                          flag = false;
                          if (context_line.includes(closure_1_4)) {
                            flag = false;
                            if (item.pre_context) {
                              let num3 = 0;
                              flag = false;
                              if (0 < item.pre_context.length) {
                                while (true) {
                                  let obj = item.pre_context[num3];
                                  let hasItem;
                                  if (obj != null) {
                                    hasItem = obj.includes(closure_1_3);
                                  }
                                  flag = true;
                                  if (hasItem) {
                                    break;
                                  } else {
                                    let sum = num3 + 1;
                                    num3 = sum;
                                    flag = false;
                                    if (sum >= length) {
                                      break;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                tmp5 = !flag;
              }
              tmp3 = tmp5;
            }
            filename = tmp3;
          }
          return filename;
        });
        mapped = found.map((item, index) => {
          if (item.module_metadata) {
            const _Object = Object;
            const keys = Object.keys(item.module_metadata);
            const found = keys.filter((item, index) => item.startsWith(closure_2));
            let mapped = found.map((item, index) => item.slice(length.length));
          } else {
            mapped = [];
          }
          return mapped;
        });
      }
      if (mapped) {
        if ("drop-error-if-contains-third-party-frames" === tmp.behaviour) {
          let str2 = "some";
        } else {
          str2 = "every";
        }
        if (mapped[str2]((arr) => !arr.some((item, index) => {
          filterKeys = filterKeys.filterKeys;
          return filterKeys.includes(item);
        }))) {
          if ("drop-error-if-contains-third-party-frames" !== tmp.behaviour) {
            if ("drop-error-if-exclusively-contains-third-party-frames" !== tmp.behaviour) {
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