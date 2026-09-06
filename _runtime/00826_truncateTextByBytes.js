// === Module 826: truncateTextByBytes ===

// Module 826 (truncateTextByBytes)
function truncateTextByBytes(content, c0) {
  if (typeof utf8Bytes === "function") {
    const _TextEncoder = TextEncoder;
    const encoder = new TextEncoder();
    if (encoder.encode(content).length <= c0) {
      return content;
    } else {
      let length = content.length;
      let str = "";
      let num = 0;
      let str2 = "";
      if (0 <= length) {
        const _Math = Math;
        const rounded = Math.floor((num + length) / 2);
        const substr = content.slice(0, rounded);
        let tmp10 = str;
        let sum = num;
        while (typeof utf8Bytes === "function") {
          let _TextEncoder2 = TextEncoder;
          let tmp13 = new.target;
          let tmp14 = new.target;
          let encoder2 = new TextEncoder();
          if (encoder2.encode(substr).length <= c0) {
            sum = rounded + 1;
            tmp10 = substr;
            let diff = length;
          } else {
            diff = rounded - 1;
          }
          str = tmp10;
          length = diff;
          num = sum;
          str2 = tmp10;
        }
        throw new TypeError("Trying to call a non-function");
      }
      return str2;
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function getPartText(text) {
  let tmp = text;
  if (typeof text !== "string") {
    let str = "";
    if ("text" in text) {
      str = text.text;
    }
    tmp = str;
  }
  return tmp;
}
function withPartText(str, text) {
  let tmp = text;
  if (typeof str !== "string") {
    const obj = {};
    const merged = Object.assign(str);
    obj.text = text;
    tmp = obj;
  }
  return tmp;
}
function isContentMedia(source) {
  let tmp = !source;
  if (source) {
    tmp = typeof source !== "object";
  }
  let tmp2 = !tmp;
  if (!tmp) {
    let tmp3 = "type" in source && typeof source.type === "string";
    if (tmp3) {
      tmp3 = "source" in source;
    }
    if (tmp3) {
      tmp3 = isContentMedia(source.source);
    }
    if (!tmp3) {
      let tmp5 = "inlineData" in source && source.inlineData && typeof source.inlineData === "object";
      if (tmp5) {
        tmp5 = "data" in source.inlineData;
      }
      if (tmp5) {
        tmp5 = typeof source.inlineData.data === "string";
      }
      tmp3 = tmp5;
    }
    if (!tmp3) {
      let tmp6 = "media_type" in source && typeof source.media_type === "string";
      if (tmp6) {
        tmp6 = "data" in source;
      }
      tmp3 = tmp6;
    }
    if (!tmp3) {
      let startsWithResult = "image_url" in source && typeof source.image_url === "string";
      if (startsWithResult) {
        const image_url = source.image_url;
        startsWithResult = image_url.startsWith("data:");
      }
      tmp3 = startsWithResult;
    }
    if (!tmp3) {
      let tmp8 = "type" in source;
      if (tmp8) {
        let tmp9 = "blob" === source.type;
        if (!tmp9) {
          tmp9 = "base64" === source.type;
        }
        tmp8 = tmp9;
      }
      tmp3 = tmp8;
    }
    if (!tmp3) {
      tmp3 = "b64_json" in source;
    }
    if (!tmp3) {
      let tmp10 = "type" in source;
      if (tmp10) {
        tmp10 = "result" in source;
      }
      if (tmp10) {
        tmp10 = "image_generation" === source.type;
      }
      tmp3 = tmp10;
    }
    if (!tmp3) {
      let startsWithResult1 = "uri" in source && typeof source.uri === "string";
      if (startsWithResult1) {
        const uri = source.uri;
        startsWithResult1 = uri.startsWith("data:");
      }
      tmp3 = startsWithResult1;
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
function hasInlineData(inlineData) {
  let tmp = "inlineData" in inlineData && inlineData.inlineData && typeof inlineData.inlineData === "object";
  if (tmp) {
    tmp = "data" in inlineData.inlineData;
  }
  if (tmp) {
    tmp = typeof inlineData.inlineData.data === "string";
  }
  return tmp;
}
function stripInlineMediaFromSingleMessage(source) {
  let obj = {};
  const merged = Object.assign(source);
  if (isContentMedia(obj.source)) {
    obj.source = stripInlineMediaFromSingleMessage(obj.source);
  }
  if (hasInlineData(source)) {
    obj = {};
    const merged1 = Object.assign(source.inlineData);
    obj.data = data;
    obj.inlineData = obj;
  }
  for (const item10024 of closure_9) {
    if (typeof obj[item10024] === "string") {
      obj[tmp6] = data;
    }
    continue;
  }
  return obj;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c0 = 20000;
function utf8Bytes(arg0) {
  const encoder = new TextEncoder();
  return encoder.encode(arg0).length;
}
function jsonBytes(arg0) {
  if (typeof utf8Bytes === "function") {
    const _TextEncoder = TextEncoder;
    const encoder = new TextEncoder();
    return encoder.encode(tmp).length;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let c8 = "[Filtered]";
let closure_9 = ["image_url", "data", "content", "b64_json", "result", "uri"];

export const DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT = 20000;
export const truncateGenAiMessages = function truncateGenAiMessages(items) {
  let tmp2 = items;
  if (Array.isArray(items)) {
    tmp2 = items;
    if (0 !== items.length) {
      let mapped = items.map((content) => {
        let tmp = content;
        if (content) {
          tmp = typeof content === "object";
        }
        if (!tmp) {
          return tmp2;
        } else {
          let isArray1 = null !== content;
          let isArray = isArray1;
          if (isArray1) {
            isArray = typeof content === "object";
          }
          if (isArray) {
            isArray = "content" in content;
          }
          if (isArray) {
            let _Array = Array;
            isArray = Array.isArray(content.content);
          }
          if (isArray) {
            let obj = {};
            let merged = Object.assign(content);
            content = content.content;
            obj.content = content.map((content) => {
              let tmp = content;
              if (content) {
                tmp = typeof content === "object";
              }
              if (!tmp) {
                return tmp2;
              } else {
                let isArray1 = null !== content;
                let isArray = isArray1;
                if (isArray1) {
                  isArray = typeof content === "object";
                }
                if (isArray) {
                  isArray = "content" in content;
                }
                if (isArray) {
                  let _Array = Array;
                  isArray = Array.isArray(content.content);
                }
                if (isArray) {
                  let obj = {};
                  let merged = Object.assign(content);
                  content = content.content;
                  obj.content = content.map((content) => {
                    let tmp = content;
                    if (content) {
                      tmp = typeof content === "object";
                    }
                    if (!tmp) {
                      return tmp2;
                    } else {
                      let isArray1 = null !== content;
                      let isArray = isArray1;
                      if (isArray1) {
                        isArray = typeof content === "object";
                      }
                      if (isArray) {
                        isArray = "content" in content;
                      }
                      if (isArray) {
                        let _Array = Array;
                        isArray = Array.isArray(content.content);
                      }
                      if (isArray) {
                        let obj = {};
                        let merged = Object.assign(content);
                        content = content.content;
                        obj.content = content.map((content) => {
                          let tmp = content;
                          if (content) {
                            tmp = typeof content === "object";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "object";
                            }
                            if (isArray) {
                              isArray = "content" in content;
                            }
                            if (isArray) {
                              let _Array = Array;
                              isArray = Array.isArray(content.content);
                            }
                            if (isArray) {
                              let obj = {};
                              let merged = Object.assign(content);
                              content = content.content;
                              obj.content = content.map(() => { ... });
                              let tmp9 = obj;
                            } else {
                              let tmp7 = "content" in content;
                              if (tmp7) {
                                tmp7 = closure_1_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_1_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "object";
                            }
                            if (isArray1) {
                              isArray1 = "parts" in content;
                            }
                            if (isArray1) {
                              let _Array2 = Array;
                              isArray1 = Array.isArray(content.parts);
                            }
                            if (isArray1) {
                              isArray1 = content.parts.length > 0;
                            }
                            let tmp18 = tmp9;
                            if (isArray1) {
                              let tmp19 = tmp9;
                              if (tmp9 == null) {
                                tmp19 = content;
                              }
                              obj = {};
                              let merged2 = Object.assign(tmp19);
                              let parts = content.parts;
                              obj.parts = parts.map(() => { ... });
                              tmp18 = obj;
                            }
                            if (closure_1_6(tmp18)) {
                              let tmp24 = closure_1_10(tmp18);
                            } else if (closure_1_6(content)) {
                              tmp24 = closure_1_10(content);
                            }
                          }
                        });
                        let tmp9 = obj;
                      } else {
                        let tmp7 = "content" in content;
                        if (tmp7) {
                          tmp7 = closure_1_6(content.content);
                        }
                        if (tmp7) {
                          obj = {};
                          let merged1 = Object.assign(content);
                          obj.content = closure_1_10(content.content);
                          tmp9 = obj;
                        }
                      }
                      if (isArray1) {
                        isArray1 = typeof content === "object";
                      }
                      if (isArray1) {
                        isArray1 = "parts" in content;
                      }
                      if (isArray1) {
                        let _Array2 = Array;
                        isArray1 = Array.isArray(content.parts);
                      }
                      if (isArray1) {
                        isArray1 = content.parts.length > 0;
                      }
                      let tmp18 = tmp9;
                      if (isArray1) {
                        let tmp19 = tmp9;
                        if (tmp9 == null) {
                          tmp19 = content;
                        }
                        obj = {};
                        let merged2 = Object.assign(tmp19);
                        let parts = content.parts;
                        obj.parts = parts.map((content) => {
                          let tmp = content;
                          if (content) {
                            tmp = typeof content === "object";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "object";
                            }
                            if (isArray) {
                              isArray = "content" in content;
                            }
                            if (isArray) {
                              let _Array = Array;
                              isArray = Array.isArray(content.content);
                            }
                            if (isArray) {
                              let obj = {};
                              let merged = Object.assign(content);
                              content = content.content;
                              obj.content = content.map(() => { ... });
                              let tmp9 = obj;
                            } else {
                              let tmp7 = "content" in content;
                              if (tmp7) {
                                tmp7 = closure_1_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_1_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "object";
                            }
                            if (isArray1) {
                              isArray1 = "parts" in content;
                            }
                            if (isArray1) {
                              let _Array2 = Array;
                              isArray1 = Array.isArray(content.parts);
                            }
                            if (isArray1) {
                              isArray1 = content.parts.length > 0;
                            }
                            let tmp18 = tmp9;
                            if (isArray1) {
                              let tmp19 = tmp9;
                              if (tmp9 == null) {
                                tmp19 = content;
                              }
                              obj = {};
                              let merged2 = Object.assign(tmp19);
                              let parts = content.parts;
                              obj.parts = parts.map(() => { ... });
                              tmp18 = obj;
                            }
                            if (closure_1_6(tmp18)) {
                              let tmp24 = closure_1_10(tmp18);
                            } else if (closure_1_6(content)) {
                              tmp24 = closure_1_10(content);
                            }
                          }
                        });
                        tmp18 = obj;
                      }
                      if (closure_1_6(tmp18)) {
                        let tmp24 = closure_1_10(tmp18);
                      } else if (closure_1_6(content)) {
                        tmp24 = closure_1_10(content);
                      }
                    }
                  });
                  let tmp9 = obj;
                } else {
                  let tmp7 = "content" in content;
                  if (tmp7) {
                    tmp7 = closure_1_6(content.content);
                  }
                  if (tmp7) {
                    obj = {};
                    let merged1 = Object.assign(content);
                    obj.content = closure_1_10(content.content);
                    tmp9 = obj;
                  }
                }
                if (isArray1) {
                  isArray1 = typeof content === "object";
                }
                if (isArray1) {
                  isArray1 = "parts" in content;
                }
                if (isArray1) {
                  let _Array2 = Array;
                  isArray1 = Array.isArray(content.parts);
                }
                if (isArray1) {
                  isArray1 = content.parts.length > 0;
                }
                let tmp18 = tmp9;
                if (isArray1) {
                  let tmp19 = tmp9;
                  if (tmp9 == null) {
                    tmp19 = content;
                  }
                  obj = {};
                  let merged2 = Object.assign(tmp19);
                  let parts = content.parts;
                  obj.parts = parts.map((content) => {
                    let tmp = content;
                    if (content) {
                      tmp = typeof content === "object";
                    }
                    if (!tmp) {
                      return tmp2;
                    } else {
                      let isArray1 = null !== content;
                      let isArray = isArray1;
                      if (isArray1) {
                        isArray = typeof content === "object";
                      }
                      if (isArray) {
                        isArray = "content" in content;
                      }
                      if (isArray) {
                        let _Array = Array;
                        isArray = Array.isArray(content.content);
                      }
                      if (isArray) {
                        let obj = {};
                        let merged = Object.assign(content);
                        content = content.content;
                        obj.content = content.map((content) => {
                          let tmp = content;
                          if (content) {
                            tmp = typeof content === "object";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "object";
                            }
                            if (isArray) {
                              isArray = "content" in content;
                            }
                            if (isArray) {
                              let _Array = Array;
                              isArray = Array.isArray(content.content);
                            }
                            if (isArray) {
                              let obj = {};
                              let merged = Object.assign(content);
                              content = content.content;
                              obj.content = content.map(() => { ... });
                              let tmp9 = obj;
                            } else {
                              let tmp7 = "content" in content;
                              if (tmp7) {
                                tmp7 = closure_1_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_1_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "object";
                            }
                            if (isArray1) {
                              isArray1 = "parts" in content;
                            }
                            if (isArray1) {
                              let _Array2 = Array;
                              isArray1 = Array.isArray(content.parts);
                            }
                            if (isArray1) {
                              isArray1 = content.parts.length > 0;
                            }
                            let tmp18 = tmp9;
                            if (isArray1) {
                              let tmp19 = tmp9;
                              if (tmp9 == null) {
                                tmp19 = content;
                              }
                              obj = {};
                              let merged2 = Object.assign(tmp19);
                              let parts = content.parts;
                              obj.parts = parts.map(() => { ... });
                              tmp18 = obj;
                            }
                            if (closure_1_6(tmp18)) {
                              let tmp24 = closure_1_10(tmp18);
                            } else if (closure_1_6(content)) {
                              tmp24 = closure_1_10(content);
                            }
                          }
                        });
                        let tmp9 = obj;
                      } else {
                        let tmp7 = "content" in content;
                        if (tmp7) {
                          tmp7 = closure_1_6(content.content);
                        }
                        if (tmp7) {
                          obj = {};
                          let merged1 = Object.assign(content);
                          obj.content = closure_1_10(content.content);
                          tmp9 = obj;
                        }
                      }
                      if (isArray1) {
                        isArray1 = typeof content === "object";
                      }
                      if (isArray1) {
                        isArray1 = "parts" in content;
                      }
                      if (isArray1) {
                        let _Array2 = Array;
                        isArray1 = Array.isArray(content.parts);
                      }
                      if (isArray1) {
                        isArray1 = content.parts.length > 0;
                      }
                      let tmp18 = tmp9;
                      if (isArray1) {
                        let tmp19 = tmp9;
                        if (tmp9 == null) {
                          tmp19 = content;
                        }
                        obj = {};
                        let merged2 = Object.assign(tmp19);
                        let parts = content.parts;
                        obj.parts = parts.map((content) => {
                          let tmp = content;
                          if (content) {
                            tmp = typeof content === "object";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "object";
                            }
                            if (isArray) {
                              isArray = "content" in content;
                            }
                            if (isArray) {
                              let _Array = Array;
                              isArray = Array.isArray(content.content);
                            }
                            if (isArray) {
                              let obj = {};
                              let merged = Object.assign(content);
                              content = content.content;
                              obj.content = content.map(() => { ... });
                              let tmp9 = obj;
                            } else {
                              let tmp7 = "content" in content;
                              if (tmp7) {
                                tmp7 = closure_1_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_1_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "object";
                            }
                            if (isArray1) {
                              isArray1 = "parts" in content;
                            }
                            if (isArray1) {
                              let _Array2 = Array;
                              isArray1 = Array.isArray(content.parts);
                            }
                            if (isArray1) {
                              isArray1 = content.parts.length > 0;
                            }
                            let tmp18 = tmp9;
                            if (isArray1) {
                              let tmp19 = tmp9;
                              if (tmp9 == null) {
                                tmp19 = content;
                              }
                              obj = {};
                              let merged2 = Object.assign(tmp19);
                              let parts = content.parts;
                              obj.parts = parts.map(() => { ... });
                              tmp18 = obj;
                            }
                            if (closure_1_6(tmp18)) {
                              let tmp24 = closure_1_10(tmp18);
                            } else if (closure_1_6(content)) {
                              tmp24 = closure_1_10(content);
                            }
                          }
                        });
                        tmp18 = obj;
                      }
                      if (closure_1_6(tmp18)) {
                        let tmp24 = closure_1_10(tmp18);
                      } else if (closure_1_6(content)) {
                        tmp24 = closure_1_10(content);
                      }
                    }
                  });
                  tmp18 = obj;
                }
                if (closure_1_6(tmp18)) {
                  let tmp24 = closure_1_10(tmp18);
                } else if (closure_1_6(content)) {
                  tmp24 = closure_1_10(content);
                }
              }
            });
            let tmp9 = obj;
          } else {
            let tmp7 = "content" in content;
            if (tmp7) {
              tmp7 = closure_1_6(content.content);
            }
            if (tmp7) {
              obj = {};
              let merged1 = Object.assign(content);
              obj.content = closure_1_10(content.content);
              tmp9 = obj;
            }
          }
          if (isArray1) {
            isArray1 = typeof content === "object";
          }
          if (isArray1) {
            isArray1 = "parts" in content;
          }
          if (isArray1) {
            let _Array2 = Array;
            isArray1 = Array.isArray(content.parts);
          }
          if (isArray1) {
            isArray1 = content.parts.length > 0;
          }
          let tmp18 = tmp9;
          if (isArray1) {
            let tmp19 = tmp9;
            if (tmp9 == null) {
              tmp19 = content;
            }
            obj = {};
            let merged2 = Object.assign(tmp19);
            let parts = content.parts;
            obj.parts = parts.map((content) => {
              let tmp = content;
              if (content) {
                tmp = typeof content === "object";
              }
              if (!tmp) {
                return tmp2;
              } else {
                let isArray1 = null !== content;
                let isArray = isArray1;
                if (isArray1) {
                  isArray = typeof content === "object";
                }
                if (isArray) {
                  isArray = "content" in content;
                }
                if (isArray) {
                  let _Array = Array;
                  isArray = Array.isArray(content.content);
                }
                if (isArray) {
                  let obj = {};
                  let merged = Object.assign(content);
                  content = content.content;
                  obj.content = content.map((content) => {
                    let tmp = content;
                    if (content) {
                      tmp = typeof content === "object";
                    }
                    if (!tmp) {
                      return tmp2;
                    } else {
                      let isArray1 = null !== content;
                      let isArray = isArray1;
                      if (isArray1) {
                        isArray = typeof content === "object";
                      }
                      if (isArray) {
                        isArray = "content" in content;
                      }
                      if (isArray) {
                        let _Array = Array;
                        isArray = Array.isArray(content.content);
                      }
                      if (isArray) {
                        let obj = {};
                        let merged = Object.assign(content);
                        content = content.content;
                        obj.content = content.map((content) => {
                          let tmp = content;
                          if (content) {
                            tmp = typeof content === "object";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "object";
                            }
                            if (isArray) {
                              isArray = "content" in content;
                            }
                            if (isArray) {
                              let _Array = Array;
                              isArray = Array.isArray(content.content);
                            }
                            if (isArray) {
                              let obj = {};
                              let merged = Object.assign(content);
                              content = content.content;
                              obj.content = content.map(() => { ... });
                              let tmp9 = obj;
                            } else {
                              let tmp7 = "content" in content;
                              if (tmp7) {
                                tmp7 = closure_1_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_1_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "object";
                            }
                            if (isArray1) {
                              isArray1 = "parts" in content;
                            }
                            if (isArray1) {
                              let _Array2 = Array;
                              isArray1 = Array.isArray(content.parts);
                            }
                            if (isArray1) {
                              isArray1 = content.parts.length > 0;
                            }
                            let tmp18 = tmp9;
                            if (isArray1) {
                              let tmp19 = tmp9;
                              if (tmp9 == null) {
                                tmp19 = content;
                              }
                              obj = {};
                              let merged2 = Object.assign(tmp19);
                              let parts = content.parts;
                              obj.parts = parts.map(() => { ... });
                              tmp18 = obj;
                            }
                            if (closure_1_6(tmp18)) {
                              let tmp24 = closure_1_10(tmp18);
                            } else if (closure_1_6(content)) {
                              tmp24 = closure_1_10(content);
                            }
                          }
                        });
                        let tmp9 = obj;
                      } else {
                        let tmp7 = "content" in content;
                        if (tmp7) {
                          tmp7 = closure_1_6(content.content);
                        }
                        if (tmp7) {
                          obj = {};
                          let merged1 = Object.assign(content);
                          obj.content = closure_1_10(content.content);
                          tmp9 = obj;
                        }
                      }
                      if (isArray1) {
                        isArray1 = typeof content === "object";
                      }
                      if (isArray1) {
                        isArray1 = "parts" in content;
                      }
                      if (isArray1) {
                        let _Array2 = Array;
                        isArray1 = Array.isArray(content.parts);
                      }
                      if (isArray1) {
                        isArray1 = content.parts.length > 0;
                      }
                      let tmp18 = tmp9;
                      if (isArray1) {
                        let tmp19 = tmp9;
                        if (tmp9 == null) {
                          tmp19 = content;
                        }
                        obj = {};
                        let merged2 = Object.assign(tmp19);
                        let parts = content.parts;
                        obj.parts = parts.map((content) => {
                          let tmp = content;
                          if (content) {
                            tmp = typeof content === "object";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "object";
                            }
                            if (isArray) {
                              isArray = "content" in content;
                            }
                            if (isArray) {
                              let _Array = Array;
                              isArray = Array.isArray(content.content);
                            }
                            if (isArray) {
                              let obj = {};
                              let merged = Object.assign(content);
                              content = content.content;
                              obj.content = content.map(() => { ... });
                              let tmp9 = obj;
                            } else {
                              let tmp7 = "content" in content;
                              if (tmp7) {
                                tmp7 = closure_1_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_1_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "object";
                            }
                            if (isArray1) {
                              isArray1 = "parts" in content;
                            }
                            if (isArray1) {
                              let _Array2 = Array;
                              isArray1 = Array.isArray(content.parts);
                            }
                            if (isArray1) {
                              isArray1 = content.parts.length > 0;
                            }
                            let tmp18 = tmp9;
                            if (isArray1) {
                              let tmp19 = tmp9;
                              if (tmp9 == null) {
                                tmp19 = content;
                              }
                              obj = {};
                              let merged2 = Object.assign(tmp19);
                              let parts = content.parts;
                              obj.parts = parts.map(() => { ... });
                              tmp18 = obj;
                            }
                            if (closure_1_6(tmp18)) {
                              let tmp24 = closure_1_10(tmp18);
                            } else if (closure_1_6(content)) {
                              tmp24 = closure_1_10(content);
                            }
                          }
                        });
                        tmp18 = obj;
                      }
                      if (closure_1_6(tmp18)) {
                        let tmp24 = closure_1_10(tmp18);
                      } else if (closure_1_6(content)) {
                        tmp24 = closure_1_10(content);
                      }
                    }
                  });
                  let tmp9 = obj;
                } else {
                  let tmp7 = "content" in content;
                  if (tmp7) {
                    tmp7 = closure_1_6(content.content);
                  }
                  if (tmp7) {
                    obj = {};
                    let merged1 = Object.assign(content);
                    obj.content = closure_1_10(content.content);
                    tmp9 = obj;
                  }
                }
                if (isArray1) {
                  isArray1 = typeof content === "object";
                }
                if (isArray1) {
                  isArray1 = "parts" in content;
                }
                if (isArray1) {
                  let _Array2 = Array;
                  isArray1 = Array.isArray(content.parts);
                }
                if (isArray1) {
                  isArray1 = content.parts.length > 0;
                }
                let tmp18 = tmp9;
                if (isArray1) {
                  let tmp19 = tmp9;
                  if (tmp9 == null) {
                    tmp19 = content;
                  }
                  obj = {};
                  let merged2 = Object.assign(tmp19);
                  let parts = content.parts;
                  obj.parts = parts.map((content) => {
                    let tmp = content;
                    if (content) {
                      tmp = typeof content === "object";
                    }
                    if (!tmp) {
                      return tmp2;
                    } else {
                      let isArray1 = null !== content;
                      let isArray = isArray1;
                      if (isArray1) {
                        isArray = typeof content === "object";
                      }
                      if (isArray) {
                        isArray = "content" in content;
                      }
                      if (isArray) {
                        let _Array = Array;
                        isArray = Array.isArray(content.content);
                      }
                      if (isArray) {
                        let obj = {};
                        let merged = Object.assign(content);
                        content = content.content;
                        obj.content = content.map((content) => {
                          let tmp = content;
                          if (content) {
                            tmp = typeof content === "object";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "object";
                            }
                            if (isArray) {
                              isArray = "content" in content;
                            }
                            if (isArray) {
                              let _Array = Array;
                              isArray = Array.isArray(content.content);
                            }
                            if (isArray) {
                              let obj = {};
                              let merged = Object.assign(content);
                              content = content.content;
                              obj.content = content.map(() => { ... });
                              let tmp9 = obj;
                            } else {
                              let tmp7 = "content" in content;
                              if (tmp7) {
                                tmp7 = closure_1_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_1_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "object";
                            }
                            if (isArray1) {
                              isArray1 = "parts" in content;
                            }
                            if (isArray1) {
                              let _Array2 = Array;
                              isArray1 = Array.isArray(content.parts);
                            }
                            if (isArray1) {
                              isArray1 = content.parts.length > 0;
                            }
                            let tmp18 = tmp9;
                            if (isArray1) {
                              let tmp19 = tmp9;
                              if (tmp9 == null) {
                                tmp19 = content;
                              }
                              obj = {};
                              let merged2 = Object.assign(tmp19);
                              let parts = content.parts;
                              obj.parts = parts.map(() => { ... });
                              tmp18 = obj;
                            }
                            if (closure_1_6(tmp18)) {
                              let tmp24 = closure_1_10(tmp18);
                            } else if (closure_1_6(content)) {
                              tmp24 = closure_1_10(content);
                            }
                          }
                        });
                        let tmp9 = obj;
                      } else {
                        let tmp7 = "content" in content;
                        if (tmp7) {
                          tmp7 = closure_1_6(content.content);
                        }
                        if (tmp7) {
                          obj = {};
                          let merged1 = Object.assign(content);
                          obj.content = closure_1_10(content.content);
                          tmp9 = obj;
                        }
                      }
                      if (isArray1) {
                        isArray1 = typeof content === "object";
                      }
                      if (isArray1) {
                        isArray1 = "parts" in content;
                      }
                      if (isArray1) {
                        let _Array2 = Array;
                        isArray1 = Array.isArray(content.parts);
                      }
                      if (isArray1) {
                        isArray1 = content.parts.length > 0;
                      }
                      let tmp18 = tmp9;
                      if (isArray1) {
                        let tmp19 = tmp9;
                        if (tmp9 == null) {
                          tmp19 = content;
                        }
                        obj = {};
                        let merged2 = Object.assign(tmp19);
                        let parts = content.parts;
                        obj.parts = parts.map((content) => {
                          let tmp = content;
                          if (content) {
                            tmp = typeof content === "object";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "object";
                            }
                            if (isArray) {
                              isArray = "content" in content;
                            }
                            if (isArray) {
                              let _Array = Array;
                              isArray = Array.isArray(content.content);
                            }
                            if (isArray) {
                              let obj = {};
                              let merged = Object.assign(content);
                              content = content.content;
                              obj.content = content.map(() => { ... });
                              let tmp9 = obj;
                            } else {
                              let tmp7 = "content" in content;
                              if (tmp7) {
                                tmp7 = closure_1_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_1_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "object";
                            }
                            if (isArray1) {
                              isArray1 = "parts" in content;
                            }
                            if (isArray1) {
                              let _Array2 = Array;
                              isArray1 = Array.isArray(content.parts);
                            }
                            if (isArray1) {
                              isArray1 = content.parts.length > 0;
                            }
                            let tmp18 = tmp9;
                            if (isArray1) {
                              let tmp19 = tmp9;
                              if (tmp9 == null) {
                                tmp19 = content;
                              }
                              obj = {};
                              let merged2 = Object.assign(tmp19);
                              let parts = content.parts;
                              obj.parts = parts.map(() => { ... });
                              tmp18 = obj;
                            }
                            if (closure_1_6(tmp18)) {
                              let tmp24 = closure_1_10(tmp18);
                            } else if (closure_1_6(content)) {
                              tmp24 = closure_1_10(content);
                            }
                          }
                        });
                        tmp18 = obj;
                      }
                      if (closure_1_6(tmp18)) {
                        let tmp24 = closure_1_10(tmp18);
                      } else if (closure_1_6(content)) {
                        tmp24 = closure_1_10(content);
                      }
                    }
                  });
                  tmp18 = obj;
                }
                if (closure_1_6(tmp18)) {
                  let tmp24 = closure_1_10(tmp18);
                } else if (closure_1_6(content)) {
                  tmp24 = closure_1_10(content);
                }
              }
            });
            tmp18 = obj;
          }
          if (closure_1_6(tmp18)) {
            let tmp24 = closure_1_10(tmp18);
          } else if (closure_1_6(content)) {
            tmp24 = closure_1_10(content);
          }
        }
      });
      if (typeof jsonBytes === "function") {
        const _JSON = JSON;
        if (typeof utf8Bytes === "function") {
          const _TextEncoder = TextEncoder;
          const encoder = new TextEncoder();
          tmp2 = mapped;
          if (encoder.encode(tmp4).length > c0) {
            let length = mapped.length;
            let diff = mapped.length - 1;
            let tmp12 = length;
            let num2 = 0;
            if (0 <= diff) {
              while (true) {
                let tmp8 = tmp38[diff];
                let tmp9 = diff;
                if (!tmp8) {
                  let sum = num2;
                  if (tmp8) {
                    sum = num2 + tmp8;
                  }
                  diff = diff - 1;
                  num2 = sum;
                  length = tmp9;
                  tmp12 = tmp9;
                  if (0 > diff) {
                    break;
                  }
                } else {
                  tmp12 = length;
                  if (num2 + tmp8 > c0) {
                    break;
                  }
                }
                break;
              }
            }
            if (tmp12 !== mapped.length) {
              const substr = mapped.slice(tmp12);
            }
            if (!mapped[mapped.length - 1]) {
              items = [];
            }
            let tmp16 = typeof mapped[mapped.length - 1] === "object";
            let isArray = null !== tmp15;
            let tmp19 = isArray;
            if (isArray) {
              tmp19 = tmp16;
            }
            if (tmp19) {
              tmp19 = "content" in tmp15;
            }
            if (tmp19) {
              tmp19 = typeof tmp15.content === "string";
            }
            if (!tmp19) {
              if (isArray) {
                isArray = tmp16;
              }
              if (isArray) {
                isArray = "parts" in tmp15;
              }
              if (isArray) {
                const _Array = Array;
                isArray = Array.isArray(tmp15.parts);
              }
              if (isArray) {
                isArray = tmp15.parts.length > 0;
              }
              if (isArray) {
                let items1 = (function truncatePartsMessage(mapped, c0) {
                  const parts = mapped.parts;
                  let obj = {};
                  mapped = parts.map((item) => {
                    let str = "";
                    if (typeof item !== "string") {
                      const obj = {};
                      const merged = Object.assign(item);
                      obj.text = "";
                      str = obj;
                    }
                    return str;
                  });
                  let merged = Object.assign(mapped);
                  obj.parts = mapped;
                  const diff = c0 - jsonBytes(obj);
                  let diff1 = diff;
                  if (diff <= 0) {
                    return [];
                  } else {
                    const items = [];
                    for (const item10022 of parts) {
                      let tmp8 = getPartText(item10022);
                      let tmp9 = tmp8;
                      let tmp11 = utf8Bytes(tmp8);
                      if (tmp11 <= diff1) {
                        let arr = items.push(item10022);
                        diff1 = diff1 - tmp12;
                        continue;
                      } else {
                        if (0 === items.length) {
                          let tmp18 = truncateTextByBytes(tmp9, diff1);
                          if (tmp18) {
                            arr = items.push(withPartText(item10022, tmp19));
                          }
                          obj3.return();
                          break;
                        } else {
                          obj3.return();
                          break;
                        }
                        break;
                      }
                      if (items.length <= 0) {
                        let items1 = [];
                      } else {
                        obj = {};
                        let merged1 = Object.assign(arg0);
                        obj.parts = items;
                        items1 = [obj];
                      }
                      return items1;
                    }
                  }
                })(tmp15, c0);
              } else {
                items1 = [];
              }
            }
            let obj = {};
            let merged = Object.assign(tmp15);
            obj.content = "";
            if (typeof jsonBytes === "function") {
              const _JSON2 = JSON;
              if (typeof utf8Bytes === "function") {
                const _TextEncoder2 = TextEncoder;
                const encoder2 = new TextEncoder();
                let diff1 = c0 - encoder2.encode(tmp25).length;
                if (diff1 <= 0) {
                  let items2 = [];
                } else {
                  obj = {};
                  let merged1 = Object.assign(tmp15);
                  obj.content = truncateTextByBytes(tmp15.content, diff1);
                  items2 = [obj];
                  const tmp31 = truncateTextByBytes(tmp15.content, diff1);
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  return tmp2;
};
export const truncateGenAiStringInput = function truncateGenAiStringInput(arr) {
  return truncateTextByBytes(arr, c0);
};