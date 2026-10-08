// _runtime/01188__Parser.js
import TYPE from "01189_TYPE.js";
import Parser from "01190_Parser.js";
import ErrorKind from "01192_ErrorKind.js";
import e from "01172_e.js";

const require = globalThis.__r;

e.__exportStar(TYPE, exports);

export const parse = function parse(arg0, arg1) {
  let obj = arg1;
  if (undefined === arg1) {
    obj = {};
  }
  const __assignResult = e.__assign({ shouldParseSkeletons: true, requiresOtherClause: true }, obj);
  const parser = new Parser.Parser(arg0, __assignResult);
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
                                              let item = children.forEach(() => { ... });
                                            }
                                          }
                                          style = style.style;
                                          delete tmp[tmp2];
                                        }
                                      }
                                      for (const key10046 in arg0.options) {
                                        delete tmp4[tmp2];
                                        let value = arg0.options[key10046].value;
                                        let item1 = value.forEach(() => { ... });
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
                                        let item = children.forEach(() => { ... });
                                      }
                                    }
                                    style = style.style;
                                    delete tmp[tmp2];
                                  }
                                }
                                for (const key10046 in arg0.options) {
                                  delete tmp4[tmp2];
                                  let value = arg0.options[key10046].value;
                                  let item1 = value.forEach(() => { ... });
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
                                        let item = children.forEach(() => { ... });
                                      }
                                    }
                                    style = style.style;
                                    delete tmp[tmp2];
                                  }
                                }
                                for (const key10046 in arg0.options) {
                                  delete tmp4[tmp2];
                                  let value = arg0.options[key10046].value;
                                  let item1 = value.forEach(() => { ... });
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
                                  let item = children.forEach(() => { ... });
                                }
                              }
                              style = style.style;
                              delete tmp[tmp2];
                            }
                          }
                          for (const key10046 in arg0.options) {
                            delete tmp4[tmp2];
                            let value = arg0.options[key10046].value;
                            let item1 = value.forEach(() => { ... });
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
                                        let item = children.forEach(() => { ... });
                                      }
                                    }
                                    style = style.style;
                                    delete tmp[tmp2];
                                  }
                                }
                                for (const key10046 in arg0.options) {
                                  delete tmp4[tmp2];
                                  let value = arg0.options[key10046].value;
                                  let item1 = value.forEach(() => { ... });
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
                                  let item = children.forEach(() => { ... });
                                }
                              }
                              style = style.style;
                              delete tmp[tmp2];
                            }
                          }
                          for (const key10046 in arg0.options) {
                            delete tmp4[tmp2];
                            let value = arg0.options[key10046].value;
                            let item1 = value.forEach(() => { ... });
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
                                  let item = children.forEach(() => { ... });
                                }
                              }
                              style = style.style;
                              delete tmp[tmp2];
                            }
                          }
                          for (const key10046 in arg0.options) {
                            delete tmp4[tmp2];
                            let value = arg0.options[key10046].value;
                            let item1 = value.forEach(() => { ... });
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
                            let item = children.forEach(() => { ... });
                          }
                        }
                        style = style.style;
                        delete tmp[tmp2];
                      }
                    }
                    for (const key10046 in arg0.options) {
                      delete tmp4[tmp2];
                      let value = arg0.options[key10046].value;
                      let item1 = value.forEach(() => { ... });
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
};
export const _Parser = Parser.Parser;
export const isStructurallySame = require("cloneDeep").isStructurallySame;