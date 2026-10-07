// === Module 16041: EmojiSourceUtils ===

// Module 16041 (EmojiSourceUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _getEmojiSource(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c6 = 0;
          closure_5 = tmp2;
          closure_133_1 = undefined;
          closure_133_0 = closure_0;
          let num11 = closure_1;
          if (closure_1 === undefined) {
            num11 = 32;
          }
          closure_133_1 = num11;
          closure_133_2 = undefined;
          closure_133_3 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const name2 = closure_133_0.name;
          let name = name2;
          if (name2 == null) {
            name = "";
          }
          const obj6 = { name, id: closure_133_0.id, animated: false };
          const emojiUrl = closure_134_0(closure_134_2[1]).getEmojiUrl(obj6, closure_133_1);
          c2 = emojiUrl;
          if (emojiUrl == null) {
            c2 = "";
          }
          closure_133_2 = c2;
          if ("" !== closure_133_2) {
            c8 = 3;
            const obj8 = { value: closure_134_0(closure_134_2[2]).makeSource(closure_133_2), done: true };
            return obj8;
          } else {
            name = closure_133_0.name;
            c4 = name;
            if (name == null) {
              c4 = "";
            }
            c7 = 2;
            c8 = 1;
            const obj9 = { value: closure_134_1(closure_134_2[3]).getEmojiBase64(c4, closure_133_1), done: false };
            return obj9;
          }
          const obj12 = closure_134_0(closure_134_2[1]);
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        closure_133_3 = value;
        const _HermesInternal = HermesInternal;
        c8 = 3;
        const obj11 = { value: closure_134_0(closure_134_2[2]).makeSource("data:image/png;base64," + closure_133_3), done: true };
        return obj11;
      }
    } catch (tmp32) {
      c8 = tmp;
      throw tmp32;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/native/utils/EmojiSourceUtils.tsx");

export const getEmojiSource = function getEmojiSource() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};