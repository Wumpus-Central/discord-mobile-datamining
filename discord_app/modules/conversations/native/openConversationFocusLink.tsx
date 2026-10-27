// === Module 10073: openConversationFocusLink ===

// Module 10073 (openConversationFocusLink)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_3 = async function _openConversationFocusLink(arg0) {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          ({ guildId: closure_129_0, channelId: closure_129_1, conversationId: closure_129_2, messageId: closure_129_3 } = closure_0);
          c3 = 1;
          c4 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const obj6 = { channelId: closure_129_1, conversationId: closure_129_2, messageId: closure_129_3 };
          c3 = 2;
          c4 = 1;
          const obj7 = { value: closure_130_0(closure_130_1[1]).resolveConversationFocusLink(obj6), done: false };
          return obj7;
        }
      } else {
        if (2 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else if (value) {
            c3 = 3;
            c4 = 1;
            const obj9 = { value: closure_130_0(closure_130_1[3])(closure_130_1[2], closure_130_1.paths), done: false };
            return obj9;
          } else {
            c4 = 3;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const obj = { channelId: closure_129_1, guildId: closure_129_0, focusSelectedConversation: true };
          const result = value.openConversationNavigator(obj);
        }
        c4 = 3;
        const obj10 = { value, done: true };
        return obj10;
      }
    } catch (tmp23) {
      c4 = tmp;
      throw tmp23;
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/native/openConversationFocusLink.tsx");

export default function openConversationFocusLink() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};