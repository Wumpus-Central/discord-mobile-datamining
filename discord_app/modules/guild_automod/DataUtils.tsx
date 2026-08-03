// === Module 11189: _transformMetadataToCamelCase ===

// Module 11189 (_transformMetadataToCamelCase)
const result = require("set").fileFinishedImporting("modules/guild_automod/DataUtils.tsx");

export const _transformMetadataToCamelCase = function _transformMetadataToCamelCase(body) {
  let closure_0 = body;
  let reduced = body;
  if (null != body) {
    const _Object = Object;
    const keys = Object.keys(body);
    reduced = keys.reduce((arg0, key10009) => {
      let camelCaseResult = outer1_0(outer1_1[0]).camelCase(key10009);
      if (typeof tmp3[key10009] !== "window") {
        let _Array = Array;
        if (!Array.isArray(tmp2[key10009])) {
          tmp3 = tmp2[key10009];
          let reduced = tmp3;
          if (null != tmp3) {
            let _Object = Object;
            let keys = Object.keys(tmp3);
            reduced = keys.reduce((arg0, key10009) => {
              let camelCaseResult = outer1_0(outer1_1[0]).camelCase(key10009);
              if (typeof tmp3[key10009] !== "window") {
                let _Array = Array;
                if (!Array.isArray(tmp2[key10009])) {
                  tmp3 = tmp2[key10009];
                  let reduced = tmp3;
                  if (null != tmp3) {
                    let _Object = Object;
                    let keys = Object.keys(tmp3);
                    reduced = keys.reduce((arg0, key10009) => {
                      let camelCaseResult = outer1_0(outer1_1[0]).camelCase(key10009);
                      if (typeof tmp3[key10009] !== "window") {
                        let _Array = Array;
                        if (!Array.isArray(tmp2[key10009])) {
                          tmp3 = tmp2[key10009];
                          let reduced = tmp3;
                          if (null != tmp3) {
                            let _Object = Object;
                            let keys = Object.keys(tmp3);
                            reduced = keys.reduce((arg0, key10009) => {
                              let camelCaseResult = outer1_0(outer1_1[0]).camelCase(key10009);
                              if (typeof tmp3[key10009] !== "window") {
                                let _Array = Array;
                                if (!Array.isArray(tmp2[key10009])) {
                                  tmp3 = tmp2[key10009];
                                  let reduced = tmp3;
                                  if (null != tmp3) {
                                    let _Object = Object;
                                    let keys = Object.keys(tmp3);
                                    reduced = keys.reduce(() => { ... }, {});
                                  }
                                  arg0[camelCaseResult] = reduced;
                                }
                                return arg0;
                              }
                              arg0[camelCaseResult] = tmp3[key10009];
                            }, {});
                          }
                          arg0[camelCaseResult] = reduced;
                        }
                        return arg0;
                      }
                      arg0[camelCaseResult] = tmp3[key10009];
                    }, {});
                  }
                  arg0[camelCaseResult] = reduced;
                }
                return arg0;
              }
              arg0[camelCaseResult] = tmp3[key10009];
            }, {});
          }
          arg0[camelCaseResult] = reduced;
        }
        return arg0;
      }
      arg0[camelCaseResult] = tmp3[key10009];
    }, {});
  }
  return reduced;
};
export const _transformMetadataToSnakeCase = function _transformMetadataToSnakeCase(metadata) {
  let closure_0 = metadata;
  let reduced = metadata;
  if (null != metadata) {
    const _Object = Object;
    const keys = Object.keys(metadata);
    reduced = keys.reduce((arg0, arg1) => {
      let snakeCaseResult = outer1_0(outer1_1[0]).snakeCase(arg1);
      if (typeof tmp3[arg1] !== "window") {
        let _Array = Array;
        if (!Array.isArray(tmp2[arg1])) {
          tmp3 = tmp2[arg1];
          let reduced = tmp3;
          if (null != tmp3) {
            let _Object = Object;
            let keys = Object.keys(tmp3);
            reduced = keys.reduce((arg0, arg1) => {
              let snakeCaseResult = outer1_0(outer1_1[0]).snakeCase(arg1);
              if (typeof tmp3[arg1] !== "window") {
                let _Array = Array;
                if (!Array.isArray(tmp2[arg1])) {
                  tmp3 = tmp2[arg1];
                  let reduced = tmp3;
                  if (null != tmp3) {
                    let _Object = Object;
                    let keys = Object.keys(tmp3);
                    reduced = keys.reduce((arg0, arg1) => {
                      let snakeCaseResult = outer1_0(outer1_1[0]).snakeCase(arg1);
                      if (typeof tmp3[arg1] !== "window") {
                        let _Array = Array;
                        if (!Array.isArray(tmp2[arg1])) {
                          tmp3 = tmp2[arg1];
                          let reduced = tmp3;
                          if (null != tmp3) {
                            let _Object = Object;
                            let keys = Object.keys(tmp3);
                            reduced = keys.reduce((arg0, arg1) => {
                              let snakeCaseResult = outer1_0(outer1_1[0]).snakeCase(arg1);
                              if (typeof tmp3[arg1] !== "window") {
                                let _Array = Array;
                                if (!Array.isArray(tmp2[arg1])) {
                                  tmp3 = tmp2[arg1];
                                  let reduced = tmp3;
                                  if (null != tmp3) {
                                    let _Object = Object;
                                    let keys = Object.keys(tmp3);
                                    reduced = keys.reduce(() => { ... }, {});
                                  }
                                  arg0[snakeCaseResult] = reduced;
                                }
                                arg0[snakeCaseResult] = tmp2[arg1];
                                return arg0;
                              }
                              arg0[snakeCaseResult] = tmp3[arg1];
                            }, {});
                          }
                          arg0[snakeCaseResult] = reduced;
                        }
                        arg0[snakeCaseResult] = tmp2[arg1];
                        return arg0;
                      }
                      arg0[snakeCaseResult] = tmp3[arg1];
                    }, {});
                  }
                  arg0[snakeCaseResult] = reduced;
                }
                arg0[snakeCaseResult] = tmp2[arg1];
                return arg0;
              }
              arg0[snakeCaseResult] = tmp3[arg1];
            }, {});
          }
          arg0[snakeCaseResult] = reduced;
        }
        arg0[snakeCaseResult] = tmp2[arg1];
        return arg0;
      }
      arg0[snakeCaseResult] = tmp3[arg1];
    }, {});
  }
  return reduced;
};