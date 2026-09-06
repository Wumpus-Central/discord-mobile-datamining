// === Module 11868: DataUtils ===

// Module 11868 (DataUtils)
import size from "module_2" /* 2 */;

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
        if (!Array.isArray(tmp2[item])) {
          closure_0 = tmp3;
          let reduced = tmp3;
          if (null != tmp2[item]) {
            let _Object = Object;
            let keys = Object.keys(tmp3);
            reduced = keys.reduce((acc, item) => {
              let camelCaseResult = closure_2_0(closure_2_1[0]).camelCase(item);
              if (typeof closure_1_0[item] === "object") {
                let _Array = Array;
                if (!Array.isArray(tmp2[item])) {
                  closure_0 = tmp3;
                  let reduced = tmp3;
                  if (null != tmp2[item]) {
                    let _Object = Object;
                    let keys = Object.keys(tmp3);
                    reduced = keys.reduce((acc, item) => {
                      let camelCaseResult = closure_2_0(closure_2_1[0]).camelCase(item);
                      if (typeof closure_1_0[item] === "object") {
                        let _Array = Array;
                        if (!Array.isArray(tmp2[item])) {
                          closure_0 = tmp3;
                          let reduced = tmp3;
                          if (null != tmp2[item]) {
                            let _Object = Object;
                            let keys = Object.keys(tmp3);
                            reduced = keys.reduce((acc, item) => {
                              let camelCaseResult = closure_2_0(closure_2_1[0]).camelCase(item);
                              if (typeof closure_1_0[item] === "object") {
                                let _Array = Array;
                                if (!Array.isArray(tmp2[item])) {
                                  closure_0 = tmp3;
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
                              acc[camelCaseResult] = closure_1_0[item];
                            }, {});
                          }
                          acc[camelCaseResult] = reduced;
                        }
                        return acc;
                      }
                      acc[camelCaseResult] = closure_1_0[item];
                    }, {});
                  }
                  acc[camelCaseResult] = reduced;
                }
                return acc;
              }
              acc[camelCaseResult] = closure_1_0[item];
            }, {});
          }
          acc[camelCaseResult] = reduced;
        }
        return acc;
      }
      acc[camelCaseResult] = closure_1_0[item];
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
        if (!Array.isArray(tmp2[item])) {
          closure_0 = tmp3;
          let reduced = tmp3;
          if (null != tmp2[item]) {
            let _Object = Object;
            let keys = Object.keys(tmp3);
            reduced = keys.reduce((acc, item) => {
              let snakeCaseResult = closure_2_0(closure_2_1[0]).snakeCase(item);
              if (typeof closure_1_0[item] === "object") {
                let _Array = Array;
                if (!Array.isArray(tmp2[item])) {
                  closure_0 = tmp3;
                  let reduced = tmp3;
                  if (null != tmp2[item]) {
                    let _Object = Object;
                    let keys = Object.keys(tmp3);
                    reduced = keys.reduce((acc, item) => {
                      let snakeCaseResult = closure_2_0(closure_2_1[0]).snakeCase(item);
                      if (typeof closure_1_0[item] === "object") {
                        let _Array = Array;
                        if (!Array.isArray(tmp2[item])) {
                          closure_0 = tmp3;
                          let reduced = tmp3;
                          if (null != tmp2[item]) {
                            let _Object = Object;
                            let keys = Object.keys(tmp3);
                            reduced = keys.reduce((acc, item) => {
                              let snakeCaseResult = closure_2_0(closure_2_1[0]).snakeCase(item);
                              if (typeof closure_1_0[item] === "object") {
                                let _Array = Array;
                                if (!Array.isArray(tmp2[item])) {
                                  closure_0 = tmp3;
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
                              acc[snakeCaseResult] = closure_1_0[item];
                            }, {});
                          }
                          acc[snakeCaseResult] = reduced;
                        }
                        acc[snakeCaseResult] = tmp2[item];
                        return acc;
                      }
                      acc[snakeCaseResult] = closure_1_0[item];
                    }, {});
                  }
                  acc[snakeCaseResult] = reduced;
                }
                acc[snakeCaseResult] = tmp2[item];
                return acc;
              }
              acc[snakeCaseResult] = closure_1_0[item];
            }, {});
          }
          acc[snakeCaseResult] = reduced;
        }
        acc[snakeCaseResult] = tmp2[item];
        return acc;
      }
      acc[snakeCaseResult] = closure_1_0[item];
    }, {});
  }
  return reduced;
};