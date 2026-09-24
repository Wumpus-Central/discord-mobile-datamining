// === Module 17144: vibegrations/VibegrationsRepliedMessage ===

// Module 17144 (vibegrations/VibegrationsRepliedMessage)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsRepliedMessage.tsx");

export const repliedMessage = function repliedMessage(stateFromStores1, in_reply_to) {
  closure_0 = in_reply_to;
  if (null != in_reply_to) {
    const found = stateFromStores1.find((id) => {
      let tmp = id.id === closure_0;
      if (tmp) {
        tmp = "user" === id.role;
      }
      return tmp;
    });
    if (null != found) {
      const obj = { id: null, content: null };
      ({ id: obj.id, content: obj.content } = found);
      if (null != found.user_id) {
        const obj2 = { userId: found.user_id };
        let obj3 = obj2;
      } else {
        obj3 = {};
      }
      const merged = Object.assign(obj3);
      obj.createdAt = found.created_at;
      return obj;
    }
  }
};