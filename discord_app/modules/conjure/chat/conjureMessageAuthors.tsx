// === Module 12598: conjureMessageAuthors ===

// Module 12598 (conjureMessageAuthors)
import UserActionCreatorsAll from "UserActionCreators" /* 8744 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1384 */;

const require = globalThis.__r;

const require = fn;
let closure_8 = async function _settle() {
  c2 = 0;
  c1 = 0;
  c3 = 0;
  return (async (arg0) => {
    await value;
    if (1 === tmp6) {
      c3 = 0;
      c1 = 3;
    } else if (arg0 === 1) {
      c1 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c3 = 0;
    }
    return value;
  })();
};
const map = new Map();
const map1 = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/conjureMessageAuthors.tsx");

export function resolveMessageAuthor(arg0, arg1, arg2) {
  if (null == arg0) {
    let tmp2 = arg2;
    if (arg2 == null) {
      tmp2 = null;
    }
    let tmp = tmp2;
  } else {
    tmp = arg1;
    if (arg1 == null) {
      tmp = null;
    }
  }
  return tmp;
}
export function requestMessageAuthor(actor_user_id) {
  closure_0 = actor_user_id;
  if (null != actor_user_id) {
    if (null == UserStore.getUser(actor_user_id)) {
      value = map.get(actor_user_id);
      if (null != value) {
        return value;
      } else {
        let num = map1.get(actor_user_id);
        if (num == null) {
          num = 0;
        }
        if (num >= 3) {
          return Promise.resolve();
        } else {
          const result = map1.set(actor_user_id, num + 1);
          const user = UserActionCreatorsAll.getUser(actor_user_id);
          const tmp4 = (function settle() {
            const self = this;
            const apply = closure_1_8.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(user.finally(() => set.delete(closure_0)));
          const result1 = map.set(actor_user_id, tmp4);
          return tmp4;
        }
      }
    }
  }
  return Promise.resolve();
}
export function useMessageAuthorUser(userId) {
  _require = userId;
  const items = [userId];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      if (null == UserStore.getUser(closure_0)) {
        if (null == map.get(closure_0)) {
          let num = map1.get(closure_0);
          if (num == null) {
            num = 0;
          }
          if (num >= 3) {
            const resolved = Promise.resolve();
          } else {
            const result = map1.set(closure_0, num + 1);
            const user = UserActionCreatorsAll.getUser(closure_0);
            const result1 = map.set(closure_0, (function settle() {
              const self = this;
              const apply = closure_1_8.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(user.finally(() => set.delete(closure_0))));
          }
        }
      }
    }
    const resolved1 = Promise.resolve();
  }, items);
  const items1 = [UserStore];
  const items2 = [userId];
  return require("initialize").useStateFromStores(items1, () => {
    let user = null;
    if (null != closure_0) {
      user = UserStore.getUser(closure_0);
    }
    let currentUser = UserStore.getCurrentUser();
    if (null == closure_0) {
      if (currentUser == null) {
        currentUser = null;
      }
      user = currentUser;
    } else if (user == null) {
      user = null;
    }
    return user;
  }, items2);
}