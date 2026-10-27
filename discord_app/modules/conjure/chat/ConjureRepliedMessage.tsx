// === Module 12316: ConjureRepliedMessage ===

// Module 12316 (ConjureRepliedMessage)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/chat/ConjureRepliedMessage.tsx");

export const repliedMessagesById = function repliedMessagesById(memo) {
  const map = new Map();
  const iter = memo[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let hasItem = "user" !== nextResult.role;
    if (!hasItem) {
      hasItem = map.has(tmp2.id);
    }
    if (hasItem) {
      continue;
    } else {
      let obj = { id: null, content: null };
      ({ id: obj2.id, content: obj2.content } = tmp2);
      if (null != tmp2.user_id) {
        let obj3 = { userId: null };
        obj3.userId = tmp2.user_id;
        let obj4 = obj3;
      } else {
        obj4 = {};
      }
      let merged = Object.assign(obj4);
      obj.createdAt = tmp2.created_at;
      obj = map.set(tmp2.id, obj);
    }
  }
  return map;
};