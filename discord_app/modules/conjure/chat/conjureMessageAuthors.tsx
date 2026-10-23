// === Module 12327: conjureMessageAuthors ===

// Module 12327 (conjureMessageAuthors)
import UserActionCreatorsAll from "UserActionCreators" /* 8668 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1392 */;

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
const ReactCompilerGating = fn(558);
function resolveMessageAuthor(arg0, arg1, arg2) {
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
function requestMessageAuthor(actor_user_id) {
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/conjureMessageAuthors.tsx");

export { resolveMessageAuthor };
export { requestMessageAuthor };
export const useMessageAuthorUser = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessageAuthorUser(arg0) {
  _require = arg0;
  const cResult = require("c").c(7);
  if (cResult[0] !== arg0) {
    const fn = function n() {
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
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[3] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function c() {
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
    };
    const items2 = [arg0];
    cResult[4] = arg0;
    cResult[5] = fn2;
    cResult[6] = items2;
    let tmp10 = items2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
    tmp10 = cResult[6];
  }
  let obj = require("c");
  return require("initialize").useStateFromStores(tmp7, tmp9, tmp10);
}) : (function useMessageAuthorUser(arg0) {
  _require = arg0;
  const items = [arg0];
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
  const items2 = [arg0];
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
});