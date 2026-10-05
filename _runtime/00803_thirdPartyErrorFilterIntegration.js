// === Module 803: thirdPartyErrorFilterIntegration ===

// Module 803 (thirdPartyErrorFilterIntegration)
import UNKNOWN_FUNCTION from "UNKNOWN_FUNCTION" /* 709 */;
import module_763 from "module_763" /* 763 */;

let filename, filterKeys;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = "_sentryBundlerPluginAppKey:";
let c3 = "Attempt to invoke user-land function";
let c4 = "fn.apply(this, wrappedArguments)";

export const thirdPartyErrorFilterIntegration = module_763.defineIntegration((arg0) => {
  let closure_0 = arg0;
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
      closure_0 = closure_0.ignoreSentryInternalFrames;
      let obj = UNKNOWN_FUNCTION;
      const framesFromEvent = obj.getFramesFromEvent(tags);
      let mapped;
      if (framesFromEvent) {
        let found = framesFromEvent.filter((filename, index) => {
          let filename1 = filename.filename;
          if (filename1) {
            let tmp3 = null != filename.lineno || null != filename.colno || null != filename.instruction_addr;
            if (tmp3) {
              let tmp5 = !closure_0;
              if (closure_0) {
                let flag = false;
                if (0 === index) {
                  flag = false;
                  if (filename.context_line) {
                    flag = false;
                    if (filename.filename) {
                      filename = filename.filename;
                      flag = false;
                      if (filename.includes("sentry")) {
                        const filename2 = filename.filename;
                        flag = false;
                        if (filename2.includes("helpers")) {
                          const context_line = filename.context_line;
                          flag = false;
                          if (context_line.includes(closure_2_4)) {
                            flag = false;
                            if (filename.pre_context) {
                              let num3 = 0;
                              flag = false;
                              if (0 < filename.pre_context.length) {
                                while (true) {
                                  let obj = filename.pre_context[num3];
                                  let hasItem;
                                  if (obj != null) {
                                    hasItem = obj.includes(closure_2_3);
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
            filename1 = tmp3;
          }
          return filename1;
        });
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
        if ("drop-error-if-contains-third-party-frames" === closure_0.behaviour) {
          str2 = "some";
        } else {
          str2 = "every";
        }
        if (mapped[str2]((arr) => !arr.some((item) => {
          filterKeys = filterKeys.filterKeys;
          return filterKeys.includes(item);
        }))) {
          if ("drop-error-if-contains-third-party-frames" !== closure_0.behaviour) {
            if ("drop-error-if-exclusively-contains-third-party-frames" !== closure_0.behaviour) {
              const obj2 = { third_party_code: true };
              let tmp3 = obj2;
              const merged = Object.assign(tags.tags);
              let flag = true;
              tags.tags = obj2;
            }
          }
          let tmp5 = null;
          return null;
        }
      }
      return tags;
    }
  };
  return obj;
});