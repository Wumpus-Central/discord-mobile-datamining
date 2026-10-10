// === Module 17135: conjureMessageAuthors ===

// Module 17135 (conjureMessageAuthors)
import UserActionCreatorsAll from "UserActionCreators" /* 8305 */;
import UserStore from "UserStore" /* 1390 */;

const set = new Set();
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/conjureMessageAuthors.tsx");

export const resolveMessageAuthor = function resolveMessageAuthor(arg0, user, currentUser) {
  if (null == arg0) {
    let tmp2 = currentUser;
    if (currentUser == null) {
      tmp2 = null;
    }
    let tmp = tmp2;
  } else {
    tmp = user;
    if (user == null) {
      tmp = null;
    }
  }
  return tmp;
};
export const requestMessageAuthor = function requestMessageAuthor(actor_user_id) {
  importAll = actor_user_id;
  if (null != actor_user_id) {
    if (!set.has(actor_user_id)) {
      if (null == UserStore.getUser(actor_user_id)) {
        let num = map.get(actor_user_id);
        if (num == null) {
          num = 0;
        }
        if (num < 3) {
          const result = map.set(actor_user_id, num + 1);
          set.add(actor_user_id);
          const user = UserActionCreatorsAll.getUser(actor_user_id);
          user.finally(() => set.delete(closure_0)).catch(() => {

          });
          const cleanupPromise = user.finally(() => set.delete(closure_0));
        }
      }
    }
  }
};