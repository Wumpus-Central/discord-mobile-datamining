// _runtime/01176__Parser.js
import TYPE from "01177_TYPE.js";
import Parser from "01178_Parser.js";
import ErrorKind from "01180_ErrorKind.js";
import e from "01160_e.js";

const require = globalThis.__r;

e.__exportStar(TYPE, exports);

export function parse(acknowledgedBadgeLabel, arg1) {
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  const __assignResult = e.__assign({ shouldParseSkeletons: true, requiresOtherClause: true }, obj);
  const parser = new Parser.Parser(acknowledgedBadgeLabel, __assignResult);
  const parsed = parser.parse();
  if (parsed.err) {
    const _SyntaxError = SyntaxError;
    const SyntaxErrorResult = SyntaxError(ErrorKind.ErrorKind[parsed.err.kind]);
    SyntaxErrorResult.location = parsed.err.location;
    SyntaxErrorResult.originalMessage = parsed.err.message;
    throw SyntaxErrorResult;
  } else {
    let captureLocation;
    if (null != __assignResult) {
      captureLocation = __assignResult.captureLocation;
    }
    if (!captureLocation) {
      const item = parsed.val.forEach((style) => {
        delete tmp3[tmp2];
        if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
          if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
            if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
              if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                let children = style.children;
                let item = children.forEach((style) => {
                  delete tmp3[tmp2];
                  if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
                    if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                      if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                        if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                          let children = style.children;
                          let item = children.forEach((style) => {
                            delete tmp3[tmp2];
                            if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
                              if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                                if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                                  if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                                    let children = style.children;
                                    let item = children.forEach((style) => {
                                      delete tmp3[tmp2];
                                      if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
                                        if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                                          if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                                            if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                                              let children = style.children;
                                              let item = children.forEach(/* F80431 */ function() { ... });
                                            }
                                          }
                                          style = style.style;
                                          delete tmp[tmp2];
                                        }
                                      }
                                      for (const key10046 in arg0.options) {
                                        delete tmp4[tmp2];
                                        let value = arg0.options[key10046].value;
                                        let item1 = value.forEach(/* F80431 */ function() { ... });
                                        continue;
                                      }
                                    });
                                  }
                                }
                                style = style.style;
                                delete tmp[tmp2];
                              }
                            }
                            for (const key10046 in arg0.options) {
                              delete tmp4[tmp2];
                              let value = arg0.options[key10046].value;
                              let item1 = value.forEach((style) => {
                                delete tmp3[tmp2];
                                if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
                                  if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                                    if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                                      if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                                        let children = style.children;
                                        let item = children.forEach(/* F80431 */ function() { ... });
                                      }
                                    }
                                    style = style.style;
                                    delete tmp[tmp2];
                                  }
                                }
                                for (const key10046 in arg0.options) {
                                  delete tmp4[tmp2];
                                  let value = arg0.options[key10046].value;
                                  let item1 = value.forEach(/* F80431 */ function() { ... });
                                  continue;
                                }
                              });
                              continue;
                            }
                          });
                        }
                      }
                      style = style.style;
                      delete tmp[tmp2];
                    }
                  }
                  for (const key10046 in arg0.options) {
                    delete tmp4[tmp2];
                    let value = arg0.options[key10046].value;
                    let item1 = value.forEach((style) => {
                      delete tmp3[tmp2];
                      if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
                        if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                          if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                            if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                              let children = style.children;
                              let item = children.forEach((style) => {
                                delete tmp3[tmp2];
                                if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
                                  if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                                    if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                                      if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                                        let children = style.children;
                                        let item = children.forEach(/* F80431 */ function() { ... });
                                      }
                                    }
                                    style = style.style;
                                    delete tmp[tmp2];
                                  }
                                }
                                for (const key10046 in arg0.options) {
                                  delete tmp4[tmp2];
                                  let value = arg0.options[key10046].value;
                                  let item1 = value.forEach(/* F80431 */ function() { ... });
                                  continue;
                                }
                              });
                            }
                          }
                          style = style.style;
                          delete tmp[tmp2];
                        }
                      }
                      for (const key10046 in arg0.options) {
                        delete tmp4[tmp2];
                        let value = arg0.options[key10046].value;
                        let item1 = value.forEach((style) => {
                          delete tmp3[tmp2];
                          if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
                            if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                              if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                                if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                                  let children = style.children;
                                  let item = children.forEach(/* F80431 */ function() { ... });
                                }
                              }
                              style = style.style;
                              delete tmp[tmp2];
                            }
                          }
                          for (const key10046 in arg0.options) {
                            delete tmp4[tmp2];
                            let value = arg0.options[key10046].value;
                            let item1 = value.forEach(/* F80431 */ function() { ... });
                            continue;
                          }
                        });
                        continue;
                      }
                    });
                    continue;
                  }
                });
              }
            }
            style = style.style;
            delete tmp[tmp2];
          }
        }
        for (const key10046 in arg0.options) {
          delete tmp4[tmp2];
          let value = arg0.options[key10046].value;
          let item1 = value.forEach((style) => {
            delete tmp3[tmp2];
            if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
              if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                  if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                    let children = style.children;
                    let item = children.forEach((style) => {
                      delete tmp3[tmp2];
                      if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
                        if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                          if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                            if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                              let children = style.children;
                              let item = children.forEach((style) => {
                                delete tmp3[tmp2];
                                if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
                                  if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                                    if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                                      if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                                        let children = style.children;
                                        let item = children.forEach(/* F80431 */ function() { ... });
                                      }
                                    }
                                    style = style.style;
                                    delete tmp[tmp2];
                                  }
                                }
                                for (const key10046 in arg0.options) {
                                  delete tmp4[tmp2];
                                  let value = arg0.options[key10046].value;
                                  let item1 = value.forEach(/* F80431 */ function() { ... });
                                  continue;
                                }
                              });
                            }
                          }
                          style = style.style;
                          delete tmp[tmp2];
                        }
                      }
                      for (const key10046 in arg0.options) {
                        delete tmp4[tmp2];
                        let value = arg0.options[key10046].value;
                        let item1 = value.forEach((style) => {
                          delete tmp3[tmp2];
                          if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
                            if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                              if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                                if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                                  let children = style.children;
                                  let item = children.forEach(/* F80431 */ function() { ... });
                                }
                              }
                              style = style.style;
                              delete tmp[tmp2];
                            }
                          }
                          for (const key10046 in arg0.options) {
                            delete tmp4[tmp2];
                            let value = arg0.options[key10046].value;
                            let item1 = value.forEach(/* F80431 */ function() { ... });
                            continue;
                          }
                        });
                        continue;
                      }
                    });
                  }
                }
                style = style.style;
                delete tmp[tmp2];
              }
            }
            for (const key10046 in arg0.options) {
              delete tmp4[tmp2];
              let value = arg0.options[key10046].value;
              let item1 = value.forEach((style) => {
                delete tmp3[tmp2];
                if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
                  if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                    if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                      if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                        let children = style.children;
                        let item = children.forEach((style) => {
                          delete tmp3[tmp2];
                          if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
                            if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                              if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                                if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                                  let children = style.children;
                                  let item = children.forEach(/* F80431 */ function() { ... });
                                }
                              }
                              style = style.style;
                              delete tmp[tmp2];
                            }
                          }
                          for (const key10046 in arg0.options) {
                            delete tmp4[tmp2];
                            let value = arg0.options[key10046].value;
                            let item1 = value.forEach(/* F80431 */ function() { ... });
                            continue;
                          }
                        });
                      }
                    }
                    style = style.style;
                    delete tmp[tmp2];
                  }
                }
                for (const key10046 in arg0.options) {
                  delete tmp4[tmp2];
                  let value = arg0.options[key10046].value;
                  let item1 = value.forEach((style) => {
                    delete tmp3[tmp2];
                    if (!closure_1_0(closure_1_1[0]).isSelectElement(style)) {
                      if (!closure_1_0(closure_1_1[0]).isPluralElement(style)) {
                        if (!closure_1_0(closure_1_1[0]).isNumberElement(style)) {
                          if (closure_1_0(closure_1_1[0]).isTagElement(style)) {
                            let children = style.children;
                            let item = children.forEach(/* F80431 */ function() { ... });
                          }
                        }
                        style = style.style;
                        delete tmp[tmp2];
                      }
                    }
                    for (const key10046 in arg0.options) {
                      delete tmp4[tmp2];
                      let value = arg0.options[key10046].value;
                      let item1 = value.forEach(/* F80431 */ function() { ... });
                      continue;
                    }
                  });
                  continue;
                }
              });
              continue;
            }
          });
          continue;
        }
      });
    }
    return parsed.val;
  }
}
export const _Parser = Parser.Parser;
export const isStructurallySame = require("cloneDeep").isStructurallySame;