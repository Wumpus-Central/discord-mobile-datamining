// _runtime/00837_DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT.js
function truncateTextByBytes(content, c0) {
  if (typeof utf8Bytes === "function") {
    const _TextEncoder = TextEncoder;
    const self = this;
    const self2 = this;
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
        let tmp8 = str;
        let sum = num;
        while (typeof utf8Bytes === "function") {
          let diff;
          let _TextEncoder2 = TextEncoder;
          let self3 = this;
          let self4 = this;
          let encoder2 = new TextEncoder();
          if (encoder2.encode(substr).length <= c0) {
            sum = rounded + 1;
            tmp8 = substr;
            diff = length;
          } else {
            diff = rounded - 1;
          }
          str = tmp8;
          length = diff;
          num = sum;
          str2 = tmp8;
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
function withPartText(item10022, text) {
  let tmp = text;
  if (typeof item10022 !== "string") {
    const obj = { text };
    const merged = Object.assign(item10022);
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
  if (tmp2) {
    let tmp3 =
      "type" in source && typeof source.type === "string" && "source" in source && isContentMedia(source.source);
    if (!tmp3) {
      tmp3 =
        "inlineData" in source &&
        source.inlineData &&
        typeof source.inlineData === "object" &&
        "data" in source.inlineData &&
        typeof source.inlineData.data === "string";
      const tmp5 =
        "inlineData" in source &&
        source.inlineData &&
        typeof source.inlineData === "object" &&
        "data" in source.inlineData &&
        typeof source.inlineData.data === "string";
    }
    if (!tmp3) {
      tmp3 = "media_type" in source && typeof source.media_type === "string" && "data" in source;
      const tmp6 = "media_type" in source && typeof source.media_type === "string" && "data" in source;
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
        tmp8 = "blob" === source.type || "base64" === source.type;
        const tmp9 = "blob" === source.type || "base64" === source.type;
      }
      tmp3 = tmp8;
    }
    if (!tmp3) {
      tmp3 = "b64_json" in source;
    }
    if (!tmp3) {
      tmp3 = "type" in source && "result" in source && "image_generation" === source.type;
      const tmp10 = "type" in source && "result" in source && "image_generation" === source.type;
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
  return (
    "inlineData" in inlineData &&
    inlineData.inlineData &&
    typeof inlineData.inlineData === "object" &&
    "data" in inlineData.inlineData &&
    typeof inlineData.inlineData.data === "string"
  );
}
function stripInlineMediaFromSingleMessage(source) {
  const obj = {};
  const merged = Object.assign(source);
  if (isContentMedia(obj.source)) {
    obj.source = stripInlineMediaFromSingleMessage(obj.source);
  }
  if (hasInlineData(source)) {
    const obj2 = { data };
    const merged1 = Object.assign(source.inlineData);
    obj.inlineData = obj2;
  }
  for (const item10024 of closure_9) {
    if (typeof obj[item10024] === "string") {
      obj[tmp6] = data;
    }
    continue;
  }
  return obj;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c0 = 20000;
function utf8Bytes(arg0) {
  const encoder = new TextEncoder();
  return encoder.encode(arg0).length;
}
function jsonBytes(arg0) {
  if (typeof utf8Bytes === "function") {
    const _TextEncoder = TextEncoder;
    const self = this;
    const self2 = this;
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
  let tmp24;
  let tmp28;
  function truncatePartsMessage(mapped, c0) {
    const parts = mapped.parts;
    let obj = { parts: mapped };
    mapped = parts.map((item) => {
      let str = "";
      if (typeof item !== "string") {
        const obj = { text: "" };
        const merged = Object.assign(item);
        str = obj;
      }
      return str;
    });
    let merged = Object.assign(mapped);
    const diff = c0 - jsonBytes(obj);
    let diff1 = diff;
    if (diff <= 0) {
      return [];
    } else {
      const items = [];
      for (const item10022 of parts) {
        let items1;
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
              let arr2 = items.push(withPartText(item10022, tmp19));
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
          items1 = [];
        } else {
          let obj2 = { parts: items };
          let merged1 = Object.assign(mapped);
          items1 = [obj2];
        }
        return items1;
      }
    }
  }
  const f82013 = (content) => {
    let parts;
    let tmp2;
    const tmp = content && typeof content === "object";
    if (tmp) {
      let tmp9;
      let tmp24;
      let isArray1 = null !== content;
      let isArray = isArray1 && typeof content === "object" && "content" in content;
      if (isArray) {
        const _Array = Array;
        isArray = Array.isArray(content.content);
      }
      if (isArray) {
        const obj2 = { content: content.map(f82013) };
        const merged = Object.assign(content);
        content = content.content;
        tmp9 = obj2;
      } else {
        const tmp7 = "content" in content && isContentMedia(content.content);
        if (tmp7) {
          const obj = { content: stripInlineMediaFromSingleMessage(content.content) };
          const merged1 = Object.assign(content);
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
        const _Array2 = Array;
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
        const obj3 = { parts: parts.map(f82013) };
        const merged2 = Object.assign(tmp19);
        parts = content.parts;
        tmp18 = obj3;
      }
      if (isContentMedia(tmp18)) {
        tmp24 = stripInlineMediaFromSingleMessage(tmp18);
      } else {
        tmp24 = tmp18;
        if (isContentMedia(content)) {
          tmp24 = stripInlineMediaFromSingleMessage(content);
        }
      }
      tmp2 = tmp24;
    }
    if (tmp2 == null) {
      tmp2 = content;
    }
    return tmp2;
  };
  let tmp2 = items;
  if (Array.isArray(items)) {
    tmp2 = items;
    if (0 !== items.length) {
      let mapped = items.map(f82013);
      if (typeof jsonBytes === "function") {
        const _JSON = JSON;
        if (typeof utf8Bytes === "function") {
          const _TextEncoder = TextEncoder;
          const self = this;
          const self2 = this;
          const encoder = new TextEncoder();
          tmp2 = mapped;
          if (encoder.encode(tmp4).length > c0) {
            let substr;
            let length = mapped.length;
            let diff = mapped.length - 1;
            let tmp10 = length;
            let num2 = 0;
            if (0 <= diff) {
              while (true) {
                let tmp6 = tmp32[diff];
                let tmp7 = diff;
                let tmp8 = length;
                let tmp9 = num2;
                if (!tmp6) {
                  let sum = num2;
                  if (tmp6) {
                    sum = num2 + tmp6;
                  }
                  diff = diff - 1;
                  num2 = sum;
                  length = tmp7;
                  tmp10 = tmp7;
                  if (0 > diff) {
                    break;
                  }
                } else {
                  tmp10 = length;
                  if (num2 + tmp6 > c0) {
                    break;
                  }
                }
                break;
              }
            }
            if (tmp10 === mapped.length) {
              if (mapped[mapped.length - 1]) {
                let items2;
                if (typeof mapped[mapped.length - 1] === "object") {
                  let items1;
                  const tmp15 = typeof mapped[mapped.length - 1] === "object";
                  let tmp16 = null;
                  let isArray = null !== tmp14;
                  let tmp18 = isArray && tmp15;
                  if (tmp18) {
                    let str = "content";
                    tmp18 = "content" in tmp14;
                  }
                  if (tmp18) {
                    tmp18 = typeof tmp14.content === "string";
                  }
                  if (tmp18) {
                    let obj = { content: "" };
                    let tmp19 = obj;
                    let merged = Object.assign(tmp14);
                    if (typeof jsonBytes === "function") {
                      const _JSON2 = JSON;
                      if (typeof utf8Bytes === "function") {
                        const _TextEncoder2 = TextEncoder;
                        const self3 = this;
                        const self4 = this;
                        const encoder2 = new TextEncoder();
                        let diff1 = c0 - encoder2.encode(tmp24).length;
                        if (diff1 <= 0) {
                          items = [];
                        } else {
                          let obj2 = { content: tmp28 };
                          let tmp29 = obj2;
                          let tmp30 = tmp14;
                          tmp28 = truncateTextByBytes(tmp14.content, diff1);
                          let merged1 = Object.assign(tmp14);
                          items = [obj2];
                        }
                        items1 = items;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    if (isArray) {
                      isArray = tmp15;
                    }
                    if (isArray) {
                      isArray = "parts" in tmp14;
                    }
                    if (isArray) {
                      let _Array = Array;
                      isArray = Array.isArray(tmp14.parts);
                    }
                    if (isArray) {
                      isArray = tmp14.parts.length > 0;
                    }
                    if (isArray) {
                      items1 = truncatePartsMessage(tmp14, c0);
                    } else {
                      items1 = [];
                    }
                  }
                  items2 = items1;
                }
                substr = items2;
              }
              items2 = [];
            } else {
              substr = mapped.slice(tmp10);
            }
            tmp2 = substr;
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
