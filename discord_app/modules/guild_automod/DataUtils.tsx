// discord_app/modules/guild_automod/DataUtils.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_automod/DataUtils.tsx");

export const _transformMetadataToCamelCase = function _transformMetadataToCamelCase(body) {
  closure_0 = body;
  let reduced = body;
  if (null != body) {
    const _Object = Object;
    const keys = Object.keys(body);
    reduced = keys.reduce((acc, item) => {
      let camelCaseResult = closure_2_0(closure_2_1[0]).camelCase(item);
      if (typeof closure_1_0[item] === "object") {
        let _Array = Array;
        if (!Array.isArray(closure_1_0[item])) {
          closure_0 = tmp3;
          let reduced = tmp3;
          if (null != closure_1_0[item]) {
            let _Object = Object;
            let keys = Object.keys(tmp3);
            reduced = keys.reduce((acc, item) => {
              let camelCaseResult = closure_2_0(closure_2_1[0]).camelCase(item);
              if (typeof closure_1_0[item] === "object") {
                let _Array = Array;
                if (!Array.isArray(closure_1_0[item])) {
                  closure_0 = tmp3;
                  let reduced = tmp3;
                  if (null != closure_1_0[item]) {
                    let _Object = Object;
                    let keys = Object.keys(tmp3);
                    reduced = keys.reduce((acc, item) => {
                      let camelCaseResult = closure_2_0(closure_2_1[0]).camelCase(item);
                      if (typeof closure_1_0[item] === "object") {
                        let _Array = Array;
                        if (!Array.isArray(closure_1_0[item])) {
                          closure_0 = tmp3;
                          let reduced = tmp3;
                          if (null != closure_1_0[item]) {
                            let _Object = Object;
                            let keys = Object.keys(tmp3);
                            reduced = keys.reduce((acc, item) => {
                              let camelCaseResult = closure_2_0(closure_2_1[0]).camelCase(item);
                              if (typeof closure_1_0[item] === "object") {
                                let _Array = Array;
                                if (!Array.isArray(closure_1_0[item])) {
                                  closure_0 = tmp3;
                                  let reduced = tmp3;
                                  if (null != closure_1_0[item]) {
                                    let _Object = Object;
                                    let keys = Object.keys(tmp3);
                                    reduced = keys.reduce(() => { ... }, {});
                                  }
                                  acc[camelCaseResult] = reduced;
                                }
                                return acc;
                              }
                              acc[camelCaseResult] = closure_1_0[item];
                              let obj = closure_2_0(closure_2_1[0]);
                            }, {});
                          }
                          acc[camelCaseResult] = reduced;
                        }
                        return acc;
                      }
                      acc[camelCaseResult] = closure_1_0[item];
                      let obj = closure_2_0(closure_2_1[0]);
                    }, {});
                  }
                  acc[camelCaseResult] = reduced;
                }
                return acc;
              }
              acc[camelCaseResult] = closure_1_0[item];
              let obj = closure_2_0(closure_2_1[0]);
            }, {});
          }
          acc[camelCaseResult] = reduced;
        }
        return acc;
      }
      acc[camelCaseResult] = closure_1_0[item];
      let obj = closure_2_0(closure_2_1[0]);
    }, {});
  }
  return reduced;
};
export const _transformMetadataToSnakeCase = function _transformMetadataToSnakeCase(metadata) {
  closure_0 = metadata;
  let reduced = metadata;
  if (null != metadata) {
    const _Object = Object;
    const keys = Object.keys(metadata);
    reduced = keys.reduce((acc, item) => {
      let snakeCaseResult = closure_2_0(closure_2_1[0]).snakeCase(item);
      if (typeof closure_1_0[item] === "object") {
        let _Array = Array;
        if (!Array.isArray(closure_1_0[item])) {
          closure_0 = tmp3;
          let reduced = tmp3;
          if (null != closure_1_0[item]) {
            let _Object = Object;
            let keys = Object.keys(tmp3);
            reduced = keys.reduce((acc, item) => {
              let snakeCaseResult = closure_2_0(closure_2_1[0]).snakeCase(item);
              if (typeof closure_1_0[item] === "object") {
                let _Array = Array;
                if (!Array.isArray(closure_1_0[item])) {
                  closure_0 = tmp3;
                  let reduced = tmp3;
                  if (null != closure_1_0[item]) {
                    let _Object = Object;
                    let keys = Object.keys(tmp3);
                    reduced = keys.reduce((acc, item) => {
                      let snakeCaseResult = closure_2_0(closure_2_1[0]).snakeCase(item);
                      if (typeof closure_1_0[item] === "object") {
                        let _Array = Array;
                        if (!Array.isArray(closure_1_0[item])) {
                          closure_0 = tmp3;
                          let reduced = tmp3;
                          if (null != closure_1_0[item]) {
                            let _Object = Object;
                            let keys = Object.keys(tmp3);
                            reduced = keys.reduce((acc, item) => {
                              let snakeCaseResult = closure_2_0(closure_2_1[0]).snakeCase(item);
                              if (typeof closure_1_0[item] === "object") {
                                let _Array = Array;
                                if (!Array.isArray(closure_1_0[item])) {
                                  closure_0 = tmp3;
                                  let reduced = tmp3;
                                  if (null != closure_1_0[item]) {
                                    let _Object = Object;
                                    let keys = Object.keys(tmp3);
                                    reduced = keys.reduce(() => { ... }, {});
                                  }
                                  acc[snakeCaseResult] = reduced;
                                }
                                acc[snakeCaseResult] = closure_1_0[item];
                                return acc;
                              }
                              acc[snakeCaseResult] = closure_1_0[item];
                              let obj = closure_2_0(closure_2_1[0]);
                            }, {});
                          }
                          acc[snakeCaseResult] = reduced;
                        }
                        acc[snakeCaseResult] = closure_1_0[item];
                        return acc;
                      }
                      acc[snakeCaseResult] = closure_1_0[item];
                      let obj = closure_2_0(closure_2_1[0]);
                    }, {});
                  }
                  acc[snakeCaseResult] = reduced;
                }
                acc[snakeCaseResult] = closure_1_0[item];
                return acc;
              }
              acc[snakeCaseResult] = closure_1_0[item];
              let obj = closure_2_0(closure_2_1[0]);
            }, {});
          }
          acc[snakeCaseResult] = reduced;
        }
        acc[snakeCaseResult] = closure_1_0[item];
        return acc;
      }
      acc[snakeCaseResult] = closure_1_0[item];
      let obj = closure_2_0(closure_2_1[0]);
    }, {});
  }
  return reduced;
};