// discord_app/modules/messages/native/renderer/redactRestrictedContent.tsx
import size from "../../../../../_runtime/metro/00002__.js";

function nodeToText(content) {
  let str = "";
  if (null != content) {
    let tmp = content;
    if (typeof content !== "string") {
      let str2;
      const _Array = Array;
      if (Array.isArray(content)) {
        const mapped = content.map(nodeToText);
        str2 = mapped.join("");
      } else if (typeof content.content === "string") {
        str2 = content.content;
      } else {
        str2 = "";
        if (null != content.content) {
          str2 = nodeToText(content.content);
        }
      }
      tmp = str2;
    }
    str = tmp;
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
              const _HermesInternal = HermesInternal;
              const obj2 = { type: "text", content: ":" + content.alt + ":" };
              return obj2;
            } else {
              let tmp = content;
              if (null != content.content) {
                const obj = { content: redactRestrictedContent(content.content) };
                const merged = Object.assign(content);
                tmp = obj;
              }
              let tmp6 = tmp;
              if (null != content.items) {
                const obj3 = { items: redactRestrictedContent(content.items) };
                const merged1 = Object.assign(tmp);
                tmp6 = obj3;
              }
              return tmp6;
            }
          }
        }
        content = content.content;
        let str4 = "";
        if (null != content) {
          let tmp11 = content;
          if (typeof content !== "string") {
            let str7;
            const _Array2 = Array;
            if (Array.isArray(content)) {
              const mapped = content.map(nodeToText);
              str7 = mapped.join("");
            } else if (typeof content.content === "string") {
              str7 = content.content;
            } else {
              str7 = "";
              if (null != content.content) {
                const content1 = content.content;
                let str5 = "";
                if (null != content1) {
                  let tmp12 = content1;
                  if (typeof content1 !== "string") {
                    let str6;
                    const _Array3 = Array;
                    if (Array.isArray(content1)) {
                      const mapped1 = content1.map(nodeToText);
                      str6 = mapped1.join("");
                    } else if (typeof content1.content === "string") {
                      str6 = content1.content;
                    } else {
                      str6 = "";
                      if (null != content1.content) {
                        str6 = nodeToText(content1.content);
                      }
                    }
                    tmp12 = str6;
                  }
                  str5 = tmp12;
                }
                str7 = str5;
              }
            }
            tmp11 = str7;
          }
          str4 = tmp11;
        }
        return { type: "inlineCode", content: str4 };
      }
    }
  }
  return content;
}

export default redactRestrictedContent;
