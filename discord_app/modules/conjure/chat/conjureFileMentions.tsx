// === Module 12484: conjureFileMentions ===

// Module 12484 (conjureFileMentions)
import _modDef1943 from "module_1943" /* 1943 */;
import noop from "module_19" /* 19 */;

let c2 = "<file:(\\d{16}-[a-z0-9]{6})>";
let regExp = new RegExp("<file:(\\d{16}-[a-z0-9]{6})>", "g");
const regExp1 = new RegExp("<file:(\\d{16}-[a-z0-9]{6})>");
const context = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/chat/conjureFileMentions.tsx");

export const CONJURE_FILE_MENTION = regExp;
export const ConjureFileMentionProjectContext = context;
export function hasConjureFileMentions(arg0) {
  return regExp1.test(arg0);
}
export function conjureFileMentionIds(str) {
  const items = [...new Set(Array.from(str.matchAll(regExp), (arg0) => arg0[1]))];
  return items;
}
export function filterConjureFileCandidates(arr, text) {
  let formatted = text.toLowerCase();
  if ("" === formatted) {
    const items = [];
    HermesBuiltin.arraySpread(arr, 0);
    let found = items;
  } else {
    found = arr.filter((name) => {
      formatted = name.name.toLowerCase();
      let startsWithResult = formatted.startsWith(formatted);
      if (!startsWithResult) {
        const parts = name.name.toLowerCase().split(/[\s._\-()]+/);
        startsWithResult = parts.some((item) => item.startsWith(formatted));
        const str3 = name.name.toLowerCase();
      }
      return startsWithResult;
    });
  }
  return found;
}
export function withoutInlineFileMentions(attachments, content) {
  if (null != attachments) {
    if (regExp1.test(content)) {
      const _Set = Set;
      const _Set2 = Set;
      const _Array = Array;
      const set = new Set(Array.from(content.matchAll(regExp), (arg0) => arg0[1]));
      const items = [];
      HermesBuiltin.arraySpread(set, 0);
      return attachments.filter((id) => {
        let tmp = null == id.id;
        if (!tmp) {
          tmp = !set1.has(id.id);
        }
        return tmp;
      });
    }
  }
  return attachments;
}
export function createConjureFileMentionRule(arg0) {
  closure_0 = arg0;
  regExp = new RegExp("^" + c2);
  return {
    order: _modDef1943.defaultRules.autolink.order - 0.5,
    requiredFirstCharacters: ["<"],
    match(arg0) {
      return regExp.exec(arg0);
    },
    parse(attachmentId) {
      return { attachmentId: attachmentId[1] };
    },
    react(attachmentId, arg1, key) {
      return closure_0(attachmentId.attachmentId, key.key);
    }
  };
}