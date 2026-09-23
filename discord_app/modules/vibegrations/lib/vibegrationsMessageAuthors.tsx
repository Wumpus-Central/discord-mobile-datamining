// === Module 17093: vibegrationsMessageAuthors ===

// Module 17093 (vibegrationsMessageAuthors)
import UserActionCreatorsAll from "UserActionCreators" /* 8525 */;
import UserStore from "UserStore" /* 1372 */;

const set = new Set();
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsMessageAuthors.tsx");

export const resolveMessageAuthor = function resolveMessageAuthor(stateFromStores, user, currentUser) {
  if (null == stateFromStores) {
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
export const requestMessageAuthor = function requestMessageAuthor(stateFromStores) {
  importAll = stateFromStores;
  if (null != stateFromStores) {
    if (!set.has(stateFromStores)) {
      if (null == UserStore.getUser(stateFromStores)) {
        let num = map.get(stateFromStores);
        if (num == null) {
          num = 0;
        }
        if (num < 3) {
          const result = map.set(stateFromStores, num + 1);
          set.add(stateFromStores);
          const user = UserActionCreatorsAll.getUser(stateFromStores);
          user.finally(() => set.delete(closure_0)).catch(() => {

          });
          const cleanupPromise = user.finally(() => set.delete(closure_0));
        }
      }
    }
  }
};