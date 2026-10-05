// discord_app/modules/conjure/chat/ConjureRepliedMessage.tsx
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureRepliedMessage.tsx");

export const repliedMessage = function repliedMessage(memo, in_reply_to) {
  let closure_0 = in_reply_to;
  if (null != in_reply_to) {
    const found = memo.find((id) => id.id === in_reply_to && "user" === id.role);
    if (null != found) {
      let obj3;
      const obj = { id: null, content: null, createdAt: found.created_at };
      ({ id: obj.id, content: obj.content } = found);
      if (null != found.user_id) {
        obj3 = { userId: found.user_id };
        const obj2 = { userId: found.user_id };
      } else {
        obj3 = {};
      }
      const merged = Object.assign(obj3);
      return obj;
    }
  }
};
