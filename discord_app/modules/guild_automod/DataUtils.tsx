// discord_app/modules/guild_automod/DataUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/guild_automod/DataUtils.tsx");

export const _transformMetadataToCamelCase = function _transformMetadataToCamelCase(body) {
  closure_0 = body;
  let reduced = body;
  if (null != body) {
    const _Object = Object;
    const keys = Object.keys(body);
    reduced = keys.reduce((acc, item, index) => {
      let camelCaseResult = closure_1_0(closure_1_1[0]).camelCase(item);
      if (typeof table[item] === "object") {
        let _Array = Array;
        if (!Array.isArray(tmp2[item])) {
          table = tmp3;
          let reduced = tmp3;
          if (null != tmp2[item]) {
            let _Object = Object;
            let keys = Object.keys(tmp3);
            reduced = keys.reduce((acc, item, index) => {
              let camelCaseResult = closure_1_0(closure_1_1[0]).camelCase(item);
              if (typeof table[item] === "object") {
                let _Array = Array;
                if (!Array.isArray(tmp2[item])) {
                  table = tmp3;
                  let reduced = tmp3;
                  if (null != tmp2[item]) {
                    let _Object = Object;
                    let keys = Object.keys(tmp3);
                    reduced = keys.reduce((acc, item, index) => {
                      let camelCaseResult = closure_1_0(closure_1_1[0]).camelCase(item);
                      if (typeof table[item] === "object") {
                        let _Array = Array;
                        if (!Array.isArray(tmp2[item])) {
                          table = tmp3;
                          let reduced = tmp3;
                          if (null != tmp2[item]) {
                            let _Object = Object;
                            let keys = Object.keys(tmp3);
                            reduced = keys.reduce((acc, item, index) => {
                              let camelCaseResult = closure_1_0(closure_1_1[0]).camelCase(item);
                              if (typeof table[item] === "object") {
                                let _Array = Array;
                                if (!Array.isArray(tmp2[item])) {
                                  table = tmp3;
                                  let reduced = tmp3;
                                  if (null != tmp2[item]) {
                                    let _Object = Object;
                                    let keys = Object.keys(tmp3);
                                    reduced = keys.reduce(() => { ... }, {});
                                  }
                                  acc[camelCaseResult] = reduced;
                                }
                                return acc;
                              }
                              acc[camelCaseResult] = table[item];
                            }, {});
                          }
                          acc[camelCaseResult] = reduced;
                        }
                        return acc;
                      }
                      acc[camelCaseResult] = table[item];
                    }, {});
                  }
                  acc[camelCaseResult] = reduced;
                }
                return acc;
              }
              acc[camelCaseResult] = table[item];
            }, {});
          }
          acc[camelCaseResult] = reduced;
        }
        return acc;
      }
      acc[camelCaseResult] = table[item];
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
    reduced = keys.reduce((acc, item, index) => {
      let snakeCaseResult = closure_1_0(closure_1_1[0]).snakeCase(item);
      if (typeof table[item] === "object") {
        let _Array = Array;
        if (!Array.isArray(tmp2[item])) {
          table = tmp3;
          let reduced = tmp3;
          if (null != tmp2[item]) {
            let _Object = Object;
            let keys = Object.keys(tmp3);
            reduced = keys.reduce((acc, item, index) => {
              let snakeCaseResult = closure_1_0(closure_1_1[0]).snakeCase(item);
              if (typeof table[item] === "object") {
                let _Array = Array;
                if (!Array.isArray(tmp2[item])) {
                  table = tmp3;
                  let reduced = tmp3;
                  if (null != tmp2[item]) {
                    let _Object = Object;
                    let keys = Object.keys(tmp3);
                    reduced = keys.reduce((acc, item, index) => {
                      let snakeCaseResult = closure_1_0(closure_1_1[0]).snakeCase(item);
                      if (typeof table[item] === "object") {
                        let _Array = Array;
                        if (!Array.isArray(tmp2[item])) {
                          table = tmp3;
                          let reduced = tmp3;
                          if (null != tmp2[item]) {
                            let _Object = Object;
                            let keys = Object.keys(tmp3);
                            reduced = keys.reduce((acc, item, index) => {
                              let snakeCaseResult = closure_1_0(closure_1_1[0]).snakeCase(item);
                              if (typeof table[item] === "object") {
                                let _Array = Array;
                                if (!Array.isArray(tmp2[item])) {
                                  table = tmp3;
                                  let reduced = tmp3;
                                  if (null != tmp2[item]) {
                                    let _Object = Object;
                                    let keys = Object.keys(tmp3);
                                    reduced = keys.reduce(() => { ... }, {});
                                  }
                                  acc[snakeCaseResult] = reduced;
                                }
                                acc[snakeCaseResult] = tmp2[item];
                                return acc;
                              }
                              acc[snakeCaseResult] = table[item];
                            }, {});
                          }
                          acc[snakeCaseResult] = reduced;
                        }
                        acc[snakeCaseResult] = tmp2[item];
                        return acc;
                      }
                      acc[snakeCaseResult] = table[item];
                    }, {});
                  }
                  acc[snakeCaseResult] = reduced;
                }
                acc[snakeCaseResult] = tmp2[item];
                return acc;
              }
              acc[snakeCaseResult] = table[item];
            }, {});
          }
          acc[snakeCaseResult] = reduced;
        }
        acc[snakeCaseResult] = tmp2[item];
        return acc;
      }
      acc[snakeCaseResult] = table[item];
    }, {});
  }
  return reduced;
};