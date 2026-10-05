// === Module 11580: useTypingUsersIds ===

// Module 11580 (useTypingUsersIds)
import RelationshipStore from "RelationshipStore" /* 4519 */;
import TypingStore from "TypingStore" /* 11579 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  _require = arg0;
  let MAX_SAFE_INTEGER = arg1;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  const tmp2 = MAX_SAFE_INTEGER;
  if (undefined === arg1) {
    const _Number = Number;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore, TypingStore, RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp9;
    let tmp10;
    if (cResult[2] === MAX_SAFE_INTEGER) {
      tmp9 = cResult[3];
      tmp10 = cResult[4];
    }
    const tmpResult = tmp(tmp2[5]);
    return tmpResult.useStateFromStoresArray(first, tmp9, tmp10);
  }
  const fn = function c() {
    let id;
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
    }
    const typingUsers = TypingStore.getTypingUsers(closure_0);
    const items = [];
    for (const key10013 in typingUsers) {
      if (items.length >= MAX_SAFE_INTEGER) {
        break;
      } else {
        let user = UserStore.getUser(key10013);
        if (null == user) {
          continue;
        } else {
          if (user.id === id) {
            continue;
          } else {
            if (RelationshipStore.isBlockedOrIgnored(user.id)) {
              continue;
            } else {
              let arr = items.push(user.id);
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
    return items;
  };
  const items1 = [arg0, MAX_SAFE_INTEGER];
  cResult[1] = arg0;
  cResult[2] = MAX_SAFE_INTEGER;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let MAX_SAFE_INTEGER = arg1;
  if (arg1 === undefined) {
    const _Number = Number;
    MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER;
  }
  let items = [UserStore, TypingStore, RelationshipStore];
  const items1 = [arg0, MAX_SAFE_INTEGER];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    let id;
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
    }
    const typingUsers = TypingStore.getTypingUsers(closure_0);
    const items = [];
    for (const key10013 in typingUsers) {
      if (items.length >= MAX_SAFE_INTEGER) {
        break;
      } else {
        let user = UserStore.getUser(key10013);
        if (null == user) {
          continue;
        } else {
          if (user.id === id) {
            continue;
          } else {
            if (RelationshipStore.isBlockedOrIgnored(user.id)) {
              continue;
            } else {
              let arr = items.push(user.id);
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
    return items;
  }, items1);
});
const result = size.fileFinishedImporting("modules/chat/useTypingUsersIds.tsx");

export const useTypingUserIds = tmp2;