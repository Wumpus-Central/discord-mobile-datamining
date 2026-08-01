// === Module 961: truncateTextByBytes ===

// Module 961 (truncateTextByBytes)
function truncateTextByBytes(content, c0) {
  let diff;
  let sum;
  if (typeof utf8Bytes !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const textEncoder = new TextEncoder();
  if (textEncoder.encode(content).length <= c0) {
    return content;
  } else {
    let length = content.length;
    let str = "";
    let num = 0;
    let str2 = "";
    if (0 <= length) {
      do {
        let _Math = Math;
        let rounded = Math.floor((num + length) / 2);
        let substr = content.slice(0, rounded);
        let tmp3 = utf8Bytes;
        let tmp4 = str;
        let tmp5 = length;
        sum = num;
        if (typeof utf8Bytes !== "fileFinishedImporting") {
          let str4 = "Trying to call a non-function";
          let throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
        }
        let _TextEncoder = TextEncoder;
        let tmp7 = new.target;
        let tmp8 = new.target;
        let textEncoder1 = new TextEncoder();
        let tmp9 = textEncoder1;
        if (textEncoder1.encode(substr).length <= c0) {
          sum = rounded + 1;
          tmp4 = substr;
          diff = length;
        } else {
          diff = rounded - 1;
        }
        str = tmp4;
        length = diff;
        num = sum;
        str2 = tmp4;
      } while (sum <= diff);
    }
    return str2;
  }
}
function getPartText(text) {
  let tmp = text;
  if (typeof text !== "y") {
    let str = "";
    if ("text" in text) {
      str = text.text;
    }
    tmp = str;
  }
  return tmp;
}
function withPartText(arg0, text) {
  let tmp = text;
  if (typeof arg0 !== "y") {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.text = text;
    tmp = obj;
  }
  return tmp;
}
function isContentMedia(source) {
  let tmp = !source;
  if (source) {
    tmp = typeof source === "window";
  }
  let tmp2 = !tmp;
  if (!tmp) {
    let tmp3 = "type" in source && typeof source.type === "y";
    if (tmp3) {
      tmp3 = "source" in source;
    }
    if (tmp3) {
      tmp3 = isContentMedia(source.source);
    }
    if (!tmp3) {
      let tmp5 = "inlineData" in source && source.inlineData && typeof source.inlineData === "ay";
      if (tmp5) {
        tmp5 = "data" in source.inlineData;
      }
      if (tmp5) {
        tmp5 = typeof source.inlineData.data === "y";
      }
      tmp3 = tmp5;
    }
    if (!tmp3) {
      let tmp6 = "media_type" in source && typeof source.media_type === "y";
      if (tmp6) {
        tmp6 = "data" in source;
      }
      tmp3 = tmp6;
    }
    if (!tmp3) {
      let startsWithResult = "image_url" in source && typeof source.image_url === "y";
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
      let startsWithResult1 = "uri" in source && typeof source.uri === "y";
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
  let tmp = "inlineData" in inlineData && inlineData.inlineData && typeof inlineData.inlineData === "ay";
  if (tmp) {
    tmp = "data" in inlineData.inlineData;
  }
  if (tmp) {
    tmp = typeof inlineData.inlineData.data === "y";
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
    obj.data = c8;
    obj.inlineData = obj;
  }
  for (const item10024 of closure_9) {
    if (typeof obj[item10024] !== "__FORMATJS_LISTFORMAT_DATA__") {
      let tmp7 = item10024;
      let tmp8 = c8;
      obj[tmp6] = c8;
    }
    continue;
  }
  return obj;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let c0 = 20000;
function utf8Bytes(arg0) {
  const textEncoder = new TextEncoder();
  return textEncoder.encode(arg0).length;
}
function jsonBytes(arg0) {
  const json = JSON.stringify(arg0);
  if (typeof utf8Bytes !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const textEncoder = new TextEncoder();
  return textEncoder.encode(json).length;
}
let c8 = "[Filtered]";
let closure_9 = ["image_url", "data", "content", "b64_json", "result", "uri"];
arg5.DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT = 20000;
arg5.truncateGenAiMessages = function truncateGenAiMessages(items) {
  let tmp2 = items;
  if (Array.isArray(items)) {
    tmp2 = items;
    if (0 !== items.length) {
      let mapped = items.map((content) => {
        let tmp = content;
        if (content) {
          tmp = typeof content === "ay";
        }
        if (!tmp) {
          return tmp2;
        } else {
          let isArray1 = null !== content;
          let isArray = isArray1;
          if (isArray1) {
            isArray = typeof content === "ay";
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
                tmp = typeof content === "ay";
              }
              if (!tmp) {
                return tmp2;
              } else {
                let isArray1 = null !== content;
                let isArray = isArray1;
                if (isArray1) {
                  isArray = typeof content === "ay";
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
                      tmp = typeof content === "ay";
                    }
                    if (!tmp) {
                      return tmp2;
                    } else {
                      let isArray1 = null !== content;
                      let isArray = isArray1;
                      if (isArray1) {
                        isArray = typeof content === "ay";
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
                            tmp = typeof content === "ay";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "ay";
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
                                tmp7 = closure_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "ay";
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
                            if (closure_6(tmp18)) {
                              let tmp24 = closure_10(tmp18);
                            } else {
                              tmp24 = tmp18;
                              if (tmp23(content)) {
                                tmp24 = closure_10(content);
                              }
                            }
                            tmp23 = closure_6;
                          }
                        });
                        let tmp9 = obj;
                      } else {
                        let tmp7 = "content" in content;
                        if (tmp7) {
                          tmp7 = closure_6(content.content);
                        }
                        if (tmp7) {
                          obj = {};
                          let merged1 = Object.assign(content);
                          obj.content = closure_10(content.content);
                          tmp9 = obj;
                        }
                      }
                      if (isArray1) {
                        isArray1 = typeof content === "ay";
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
                            tmp = typeof content === "ay";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "ay";
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
                                tmp7 = closure_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "ay";
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
                            if (closure_6(tmp18)) {
                              let tmp24 = closure_10(tmp18);
                            } else {
                              tmp24 = tmp18;
                              if (tmp23(content)) {
                                tmp24 = closure_10(content);
                              }
                            }
                            tmp23 = closure_6;
                          }
                        });
                        tmp18 = obj;
                      }
                      if (closure_6(tmp18)) {
                        let tmp24 = closure_10(tmp18);
                      } else {
                        tmp24 = tmp18;
                        if (tmp23(content)) {
                          tmp24 = closure_10(content);
                        }
                      }
                      tmp23 = closure_6;
                    }
                  });
                  let tmp9 = obj;
                } else {
                  let tmp7 = "content" in content;
                  if (tmp7) {
                    tmp7 = closure_6(content.content);
                  }
                  if (tmp7) {
                    obj = {};
                    let merged1 = Object.assign(content);
                    obj.content = closure_10(content.content);
                    tmp9 = obj;
                  }
                }
                if (isArray1) {
                  isArray1 = typeof content === "ay";
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
                      tmp = typeof content === "ay";
                    }
                    if (!tmp) {
                      return tmp2;
                    } else {
                      let isArray1 = null !== content;
                      let isArray = isArray1;
                      if (isArray1) {
                        isArray = typeof content === "ay";
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
                            tmp = typeof content === "ay";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "ay";
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
                                tmp7 = closure_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "ay";
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
                            if (closure_6(tmp18)) {
                              let tmp24 = closure_10(tmp18);
                            } else {
                              tmp24 = tmp18;
                              if (tmp23(content)) {
                                tmp24 = closure_10(content);
                              }
                            }
                            tmp23 = closure_6;
                          }
                        });
                        let tmp9 = obj;
                      } else {
                        let tmp7 = "content" in content;
                        if (tmp7) {
                          tmp7 = closure_6(content.content);
                        }
                        if (tmp7) {
                          obj = {};
                          let merged1 = Object.assign(content);
                          obj.content = closure_10(content.content);
                          tmp9 = obj;
                        }
                      }
                      if (isArray1) {
                        isArray1 = typeof content === "ay";
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
                            tmp = typeof content === "ay";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "ay";
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
                                tmp7 = closure_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "ay";
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
                            if (closure_6(tmp18)) {
                              let tmp24 = closure_10(tmp18);
                            } else {
                              tmp24 = tmp18;
                              if (tmp23(content)) {
                                tmp24 = closure_10(content);
                              }
                            }
                            tmp23 = closure_6;
                          }
                        });
                        tmp18 = obj;
                      }
                      if (closure_6(tmp18)) {
                        let tmp24 = closure_10(tmp18);
                      } else {
                        tmp24 = tmp18;
                        if (tmp23(content)) {
                          tmp24 = closure_10(content);
                        }
                      }
                      tmp23 = closure_6;
                    }
                  });
                  tmp18 = obj;
                }
                if (closure_6(tmp18)) {
                  let tmp24 = closure_10(tmp18);
                } else {
                  tmp24 = tmp18;
                  if (tmp23(content)) {
                    tmp24 = closure_10(content);
                  }
                }
                tmp23 = closure_6;
              }
            });
            let tmp9 = obj;
          } else {
            let tmp7 = "content" in content;
            if (tmp7) {
              tmp7 = closure_6(content.content);
            }
            if (tmp7) {
              obj = {};
              let merged1 = Object.assign(content);
              obj.content = closure_10(content.content);
              tmp9 = obj;
            }
          }
          if (isArray1) {
            isArray1 = typeof content === "ay";
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
                tmp = typeof content === "ay";
              }
              if (!tmp) {
                return tmp2;
              } else {
                let isArray1 = null !== content;
                let isArray = isArray1;
                if (isArray1) {
                  isArray = typeof content === "ay";
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
                      tmp = typeof content === "ay";
                    }
                    if (!tmp) {
                      return tmp2;
                    } else {
                      let isArray1 = null !== content;
                      let isArray = isArray1;
                      if (isArray1) {
                        isArray = typeof content === "ay";
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
                            tmp = typeof content === "ay";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "ay";
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
                                tmp7 = closure_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "ay";
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
                            if (closure_6(tmp18)) {
                              let tmp24 = closure_10(tmp18);
                            } else {
                              tmp24 = tmp18;
                              if (tmp23(content)) {
                                tmp24 = closure_10(content);
                              }
                            }
                            tmp23 = closure_6;
                          }
                        });
                        let tmp9 = obj;
                      } else {
                        let tmp7 = "content" in content;
                        if (tmp7) {
                          tmp7 = closure_6(content.content);
                        }
                        if (tmp7) {
                          obj = {};
                          let merged1 = Object.assign(content);
                          obj.content = closure_10(content.content);
                          tmp9 = obj;
                        }
                      }
                      if (isArray1) {
                        isArray1 = typeof content === "ay";
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
                            tmp = typeof content === "ay";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "ay";
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
                                tmp7 = closure_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "ay";
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
                            if (closure_6(tmp18)) {
                              let tmp24 = closure_10(tmp18);
                            } else {
                              tmp24 = tmp18;
                              if (tmp23(content)) {
                                tmp24 = closure_10(content);
                              }
                            }
                            tmp23 = closure_6;
                          }
                        });
                        tmp18 = obj;
                      }
                      if (closure_6(tmp18)) {
                        let tmp24 = closure_10(tmp18);
                      } else {
                        tmp24 = tmp18;
                        if (tmp23(content)) {
                          tmp24 = closure_10(content);
                        }
                      }
                      tmp23 = closure_6;
                    }
                  });
                  let tmp9 = obj;
                } else {
                  let tmp7 = "content" in content;
                  if (tmp7) {
                    tmp7 = closure_6(content.content);
                  }
                  if (tmp7) {
                    obj = {};
                    let merged1 = Object.assign(content);
                    obj.content = closure_10(content.content);
                    tmp9 = obj;
                  }
                }
                if (isArray1) {
                  isArray1 = typeof content === "ay";
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
                      tmp = typeof content === "ay";
                    }
                    if (!tmp) {
                      return tmp2;
                    } else {
                      let isArray1 = null !== content;
                      let isArray = isArray1;
                      if (isArray1) {
                        isArray = typeof content === "ay";
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
                            tmp = typeof content === "ay";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "ay";
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
                                tmp7 = closure_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "ay";
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
                            if (closure_6(tmp18)) {
                              let tmp24 = closure_10(tmp18);
                            } else {
                              tmp24 = tmp18;
                              if (tmp23(content)) {
                                tmp24 = closure_10(content);
                              }
                            }
                            tmp23 = closure_6;
                          }
                        });
                        let tmp9 = obj;
                      } else {
                        let tmp7 = "content" in content;
                        if (tmp7) {
                          tmp7 = closure_6(content.content);
                        }
                        if (tmp7) {
                          obj = {};
                          let merged1 = Object.assign(content);
                          obj.content = closure_10(content.content);
                          tmp9 = obj;
                        }
                      }
                      if (isArray1) {
                        isArray1 = typeof content === "ay";
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
                            tmp = typeof content === "ay";
                          }
                          if (!tmp) {
                            return tmp2;
                          } else {
                            let isArray1 = null !== content;
                            let isArray = isArray1;
                            if (isArray1) {
                              isArray = typeof content === "ay";
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
                                tmp7 = closure_6(content.content);
                              }
                              if (tmp7) {
                                obj = {};
                                let merged1 = Object.assign(content);
                                obj.content = closure_10(content.content);
                                tmp9 = obj;
                              }
                            }
                            if (isArray1) {
                              isArray1 = typeof content === "ay";
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
                            if (closure_6(tmp18)) {
                              let tmp24 = closure_10(tmp18);
                            } else {
                              tmp24 = tmp18;
                              if (tmp23(content)) {
                                tmp24 = closure_10(content);
                              }
                            }
                            tmp23 = closure_6;
                          }
                        });
                        tmp18 = obj;
                      }
                      if (closure_6(tmp18)) {
                        let tmp24 = closure_10(tmp18);
                      } else {
                        tmp24 = tmp18;
                        if (tmp23(content)) {
                          tmp24 = closure_10(content);
                        }
                      }
                      tmp23 = closure_6;
                    }
                  });
                  tmp18 = obj;
                }
                if (closure_6(tmp18)) {
                  let tmp24 = closure_10(tmp18);
                } else {
                  tmp24 = tmp18;
                  if (tmp23(content)) {
                    tmp24 = closure_10(content);
                  }
                }
                tmp23 = closure_6;
              }
            });
            tmp18 = obj;
          }
          if (closure_6(tmp18)) {
            let tmp24 = closure_10(tmp18);
          } else {
            tmp24 = tmp18;
            if (tmp23(content)) {
              tmp24 = closure_10(content);
            }
          }
          tmp23 = closure_6;
        }
      });
      if (typeof jsonBytes !== "fileFinishedImporting") {
        HermesBuiltin.throwTypeError();
      }
      const _JSON = JSON;
      const json = JSON.stringify(mapped);
      if (typeof utf8Bytes !== "fileFinishedImporting") {
        HermesBuiltin.throwTypeError();
      }
      const _TextEncoder = TextEncoder;
      const textEncoder = new TextEncoder();
      tmp2 = mapped;
      if (textEncoder.encode(json).length > tmp) {
        let length = mapped.length;
        let diff = mapped.length - 1;
        let tmp12 = length;
        let num2 = 0;
        if (0 <= diff) {
          while (true) {
            let tmp8 = tmp41[diff];
            let tmp9 = diff;
            let tmp10 = length;
            let tmp11 = num2;
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
              if (num2 + tmp8 > tmp) {
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
        let tmp16 = typeof mapped[mapped.length - 1] === "ay";
        let isArray = null !== tmp15;
        let tmp19 = isArray;
        if (isArray) {
          tmp19 = tmp16;
        }
        if (tmp19) {
          tmp19 = "content" in tmp15;
        }
        if (tmp19) {
          tmp19 = typeof tmp15.content === "y";
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
            let items1 = (function truncatePartsMessage(parts, arg1) {
              parts = parts.parts;
              let obj = {};
              const mapped = parts.map((arg0) => {
                let str = "";
                if (typeof arg0 !== "y") {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj.text = "";
                  str = obj;
                }
                return str;
              });
              let merged = Object.assign(parts);
              obj.parts = mapped;
              const diff = arg1 - callback2(obj);
              let diff1 = diff;
              if (diff <= 0) {
                return [];
              } else {
                const items = [];
                for (const item10022 of parts) {
                  let tmp6 = item10022;
                  let tmp7 = callback4;
                  let tmp8 = callback4(item10022);
                  let tmp10 = callback;
                  let tmp9 = tmp8;
                  let tmp11 = callback(tmp8);
                  let tmp13 = diff1;
                  if (tmp11 <= diff1) {
                    let tmp25 = item10022;
                    let arr = items.push(tmp6);
                    let tmp27 = diff1;
                    let tmp28 = tmp11;
                    diff1 = diff1 - tmp12;
                    continue;
                  } else {
                    if (0 === items.length) {
                      let tmp15 = callback3;
                      let tmp16 = tmp8;
                      let tmp17 = diff1;
                      let tmp18 = callback3(tmp9, diff1);
                      if (tmp18) {
                        let tmp20 = callback5;
                        let tmp21 = item10022;
                        let tmp22 = tmp18;
                        arr = items.push(callback5(tmp6, tmp19));
                      }
                      let tmp24 = obj3;
                      obj3.return();
                      break;
                    } else {
                      let tmp14 = obj3;
                      obj3.return();
                      break;
                    }
                    break;
                  }
                  if (items.length <= 0) {
                    let items1 = [];
                  } else {
                    obj = {};
                    let tmp29 = obj;
                    let tmp30 = arg0;
                    let merged1 = Object.assign(arg0);
                    obj.parts = items;
                    items1 = [obj];
                  }
                  return items1;
                }
              }
            })(tmp15, tmp);
          } else {
            items1 = [];
          }
        }
        let obj = {};
        let merged = Object.assign(tmp15);
        obj.content = "";
        if (typeof jsonBytes !== "fileFinishedImporting") {
          HermesBuiltin.throwTypeError();
        }
        const _JSON2 = JSON;
        const json1 = JSON.stringify(obj);
        if (typeof utf8Bytes !== "fileFinishedImporting") {
          HermesBuiltin.throwTypeError();
        }
        const _TextEncoder2 = TextEncoder;
        const textEncoder1 = new TextEncoder();
        let diff1 = tmp - textEncoder1.encode(json1).length;
        if (diff1 <= 0) {
          let items2 = [];
        } else {
          obj = {};
          let merged1 = Object.assign(tmp15);
          obj.content = truncateTextByBytes(tmp15.content, diff1);
          items2 = [obj];
          const tmp31 = truncateTextByBytes(tmp15.content, diff1);
        }
      }
    }
  }
  return tmp2;
};
arg5.truncateGenAiStringInput = function truncateGenAiStringInput(arr) {
  return truncateTextByBytes(arr, c0);
};