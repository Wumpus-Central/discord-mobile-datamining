// === Module 8105: redactRestrictedContent ===

// Module 8105 (redactRestrictedContent)
import size from "module_2" /* 2 */;

function nodeToText(content) {
  let str = "";
  if (null != content) {
    if (typeof content === "string") {
      str = content;
    } else {
      const _Array = Array;
      if (Array.isArray(content)) {
        const mapped = content.map(nodeToText);
        let str2 = mapped.join("");
      } else if (typeof content.content === "string") {
      } else {
        str2 = "";
        if (null != content.content) {
          str2 = nodeToText(content.content);
        }
      }
    }
  }
  return str;
}
const result = size.fileFinishedImporting("modules/messages/native/renderer/redactRestrictedContent.tsx");
function redactRestrictedContent(content) {
  if (null != content) {
    if (typeof content !== "string") {
      const _Array = Array;
      if (Array.isArray(content)) {
        return content.map(redactRestrictedContent);
      } else {
        if ("link" !== content.type) {
          if ("attachmentLink" !== content.type) {
            if ("customEmoji" === content.type) {
              let obj = { type: "text", content: null };
              const _HermesInternal = HermesInternal;
              obj.content = ":" + content.alt + ":";
              return obj;
            } else {
              let tmp = content;
              if (null != content.content) {
                obj = {};
                const merged = Object.assign(content);
                obj.content = redactRestrictedContent(content.content);
                tmp = obj;
              }
              let tmp6 = tmp;
              if (null != content.items) {
                obj = {};
                const merged1 = Object.assign(tmp);
                obj.items = redactRestrictedContent(content.items);
                tmp6 = obj;
              }
              return tmp6;
            }
          }
        }
        content = content.content;
        let str4 = "";
        if (null != content) {
          if (typeof content === "string") {
            str4 = content;
          } else {
            const _Array2 = Array;
            if (Array.isArray(content)) {
              const mapped = content.map(nodeToText);
              let str7 = mapped.join("");
            } else if (typeof content.content === "string") {
            } else {
              str7 = "";
              if (null != content.content) {
                const content1 = content.content;
                const str5 = "";
                if (null != content1) {
                  if (typeof content1 === "string") {
                  } else {
                    const _Array3 = Array;
                    if (Array.isArray(content1)) {
                      const mapped1 = content1.map(nodeToText);
                      let str6 = mapped1.join("");
                    } else if (typeof content1.content === "string") {
                    } else {
                      str6 = "";
                      if (null != content1.content) {
                        str6 = nodeToText(content1.content);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const obj1 = { type: "inlineCode", content: str4 };
        return obj1;
      }
    }
  }
  return content;
}

export default redactRestrictedContent;