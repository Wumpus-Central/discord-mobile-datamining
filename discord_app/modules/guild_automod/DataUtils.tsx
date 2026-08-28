// === Module 11374: _transformMetadataToCamelCase ===

// Module 11374 (_transformMetadataToCamelCase)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/guild_automod/DataUtils.tsx");

export const _transformMetadataToCamelCase = function _transformMetadataToCamelCase(body) {
  closure_0 = body;
  let reduced = body;
  if (null != body) {
    const _Object = Object;
    const keys = Object.keys(body);
    reduced = keys.reduce((arg0, key10009) => {
      let camelCaseResult = closure_1_0(closure_1_1[0]).camelCase(key10009);
      if (typeof table[key10009] === "object") {
        let _Array = Array;
        if (!Array.isArray(tmp2[key10009])) {
          table = tmp3;
          let reduced = tmp3;
          if (null != tmp2[key10009]) {
            let _Object = Object;
            let keys = Object.keys(tmp3);
            reduced = keys.reduce((arg0, key10009) => {
              let camelCaseResult = closure_1_0(closure_1_1[0]).camelCase(key10009);
              if (typeof table[key10009] === "object") {
                let _Array = Array;
                if (!Array.isArray(tmp2[key10009])) {
                  table = tmp3;
                  let reduced = tmp3;
                  if (null != tmp2[key10009]) {
                    let _Object = Object;
                    let keys = Object.keys(tmp3);
                    reduced = keys.reduce((arg0, key10009) => {
                      let camelCaseResult = closure_1_0(closure_1_1[0]).camelCase(key10009);
                      if (typeof table[key10009] === "object") {
                        let _Array = Array;
                        if (!Array.isArray(tmp2[key10009])) {
                          table = tmp3;
                          let reduced = tmp3;
                          if (null != tmp2[key10009]) {
                            let _Object = Object;
                            let keys = Object.keys(tmp3);
                            reduced = keys.reduce((arg0, key10009) => {
                              let camelCaseResult = closure_1_0(closure_1_1[0]).camelCase(key10009);
                              if (typeof table[key10009] === "object") {
                                let _Array = Array;
                                if (!Array.isArray(tmp2[key10009])) {
                                  table = tmp3;
                                  let reduced = tmp3;
                                  if (null != tmp2[key10009]) {
                                    let _Object = Object;
                                    let keys = Object.keys(tmp3);
                                    reduced = keys.reduce(() => { ... }, {});
                                  }
                                  arg0[camelCaseResult] = reduced;
                                }
                                return arg0;
                              }
                              arg0[camelCaseResult] = table[key10009];
                            }, {});
                          }
                          arg0[camelCaseResult] = reduced;
                        }
                        return arg0;
                      }
                      arg0[camelCaseResult] = table[key10009];
                    }, {});
                  }
                  arg0[camelCaseResult] = reduced;
                }
                return arg0;
              }
              arg0[camelCaseResult] = table[key10009];
            }, {});
          }
          arg0[camelCaseResult] = reduced;
        }
        return arg0;
      }
      arg0[camelCaseResult] = table[key10009];
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
    reduced = keys.reduce((arg0, arg1) => {
      let snakeCaseResult = closure_1_0(closure_1_1[0]).snakeCase(arg1);
      if (typeof table[arg1] === "object") {
        let _Array = Array;
        if (!Array.isArray(tmp2[arg1])) {
          table = tmp3;
          let reduced = tmp3;
          if (null != tmp2[arg1]) {
            let _Object = Object;
            let keys = Object.keys(tmp3);
            reduced = keys.reduce((arg0, arg1) => {
              let snakeCaseResult = closure_1_0(closure_1_1[0]).snakeCase(arg1);
              if (typeof table[arg1] === "object") {
                let _Array = Array;
                if (!Array.isArray(tmp2[arg1])) {
                  table = tmp3;
                  let reduced = tmp3;
                  if (null != tmp2[arg1]) {
                    let _Object = Object;
                    let keys = Object.keys(tmp3);
                    reduced = keys.reduce((arg0, arg1) => {
                      let snakeCaseResult = closure_1_0(closure_1_1[0]).snakeCase(arg1);
                      if (typeof table[arg1] === "object") {
                        let _Array = Array;
                        if (!Array.isArray(tmp2[arg1])) {
                          table = tmp3;
                          let reduced = tmp3;
                          if (null != tmp2[arg1]) {
                            let _Object = Object;
                            let keys = Object.keys(tmp3);
                            reduced = keys.reduce((arg0, arg1) => {
                              let snakeCaseResult = closure_1_0(closure_1_1[0]).snakeCase(arg1);
                              if (typeof table[arg1] === "object") {
                                let _Array = Array;
                                if (!Array.isArray(tmp2[arg1])) {
                                  table = tmp3;
                                  let reduced = tmp3;
                                  if (null != tmp2[arg1]) {
                                    let _Object = Object;
                                    let keys = Object.keys(tmp3);
                                    reduced = keys.reduce(() => { ... }, {});
                                  }
                                  arg0[snakeCaseResult] = reduced;
                                }
                                arg0[snakeCaseResult] = tmp2[arg1];
                                return arg0;
                              }
                              arg0[snakeCaseResult] = table[arg1];
                            }, {});
                          }
                          arg0[snakeCaseResult] = reduced;
                        }
                        arg0[snakeCaseResult] = tmp2[arg1];
                        return arg0;
                      }
                      arg0[snakeCaseResult] = table[arg1];
                    }, {});
                  }
                  arg0[snakeCaseResult] = reduced;
                }
                arg0[snakeCaseResult] = tmp2[arg1];
                return arg0;
              }
              arg0[snakeCaseResult] = table[arg1];
            }, {});
          }
          arg0[snakeCaseResult] = reduced;
        }
        arg0[snakeCaseResult] = tmp2[arg1];
        return arg0;
      }
      arg0[snakeCaseResult] = table[arg1];
    }, {});
  }
  return reduced;
};