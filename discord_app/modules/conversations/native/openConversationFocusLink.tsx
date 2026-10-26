// === Module 10071: openConversationFocusLink ===

// Module 10071 (openConversationFocusLink)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_3 = async function _openConversationFocusLink(arg0) {
  closure_1 = tmp2;
  ({ guildId: closure_129_0, channelId: closure_129_1, conversationId: closure_129_2, messageId: closure_129_3 } = closure_0);
  await "Reflect";
  await closure_130_0(closure_130_1[1]).resolveConversationFocusLink({ channelId: closure_129_1, conversationId: closure_129_2, messageId: closure_129_3 });
  if (2 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else if (value) {
      c3 = 3;
      c4 = 1;
      return { value: closure_130_0(closure_130_1[3])(closure_130_1[2], closure_130_1.paths), done: false };
    } else {
      c4 = 3;
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const result = value.openConversationNavigator({ channelId: closure_129_1, guildId: closure_129_0, focusSelectedConversation: true });
  }
  return value;
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