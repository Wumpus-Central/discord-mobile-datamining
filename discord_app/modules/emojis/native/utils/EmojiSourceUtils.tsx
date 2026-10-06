// === Module 16041: EmojiSourceUtils ===

// Module 16041 (EmojiSourceUtils)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2, c4, c6, closure_5, name;

let obj = function _getEmojiSource() {
  obj = _asyncToGenerator(async (arg0) => {
    const user = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    const iter = (async (arg0) => {
      let obj6;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let num11;
          let closure_2;
          let closure_3;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              c6 = 0;
              closure_5 = tmp;
              num11 = closure_1;
              if (closure_1 === undefined) {
                num11 = 32;
              }
              closure_2 = undefined;
              closure_3 = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              const name2 = user.name;
              name = name2;
              const getEmojiUrl = closure_134_0(closure_134_2[1]).getEmojiUrl;
              closure_134_0(closure_134_2[1]);
              if (name2 == null) {
                name = "";
              }
              const obj5 = { name, id: user.id, animated: false };
              const emojiUrl = getEmojiUrl(obj5, num11);
              c2 = emojiUrl;
              if (emojiUrl == null) {
                c2 = "";
              }
              closure_2 = c2;
              if ("" !== closure_2) {
                c8 = 3;
                const obj7 = { value: obj6.makeSource(closure_2), done: true };
                obj6 = closure_134_0(closure_134_2[2]);
                return obj7;
              } else {
                name = user.name;
                c4 = name;
                const getEmojiBase64 = closure_134_1(closure_134_2[3]).getEmojiBase64;
                closure_134_1(closure_134_2[3]);
                if (name == null) {
                  c4 = "";
                }
                c7 = 2;
                c8 = 1;
                const obj8 = { value: getEmojiBase64(c4, num11), done: false };
                return obj8;
              }
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            return { value, done: true };
          } else {
            closure_3 = value;
            const _HermesInternal = HermesInternal;
            c8 = 3;
            const obj10 = { value: obj.makeSource("data:image/png;base64," + closure_3), done: true };
            obj = closure_134_0(closure_134_2[2]);
            return obj10;
          }
        } catch (tmp32) {
          c8 = 3;
          throw tmp32;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/emojis/native/utils/EmojiSourceUtils.tsx");

export const getEmojiSource = function getEmojiSource() {
  return obj(...arguments);
};