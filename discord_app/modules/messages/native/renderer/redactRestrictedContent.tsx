// === Module 8318: nodeToText ===

// Module 8318 (nodeToText)
import obj132 from "obj132" /* 2 */;

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
      } else if (null != content.content) {
        str2 = nodeToText(content.content);
      }
    }
  }
  return str;
}
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/redactRestrictedContent.tsx");
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
              obj[1] = ":" + content.alt + ":";
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
              const str7 = mapped.join("");
            } else if (typeof content.content === "string") {
            } else if (null != content.content) {
              const content1 = content.content;
              if (null != content1) {
                if (typeof content1 === "string") {
                } else {
                  const _Array3 = Array;
                  if (Array.isArray(content1)) {
                    const mapped1 = content1.map(nodeToText);
                    let str6 = mapped1.join("");
                  } else if (typeof content1.content === "string") {
                  } else if (null != content1.content) {
                    str6 = nodeToText(content1.content);
                  }
                }
              }
            }
          }
        }
        obj1 = { type: "inlineCode", content: null };
        obj1[1] = str4;
        return obj1;
      }
    }
  }
  return content;
}

export default redactRestrictedContent;