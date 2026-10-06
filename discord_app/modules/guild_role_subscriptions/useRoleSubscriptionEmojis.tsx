// === Module 17991: useRoleSubscriptionEmojis ===

// Module 17991 (useRoleSubscriptionEmojis)
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 5650 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5645 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let items = [];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(9);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [EmojiStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return EmojiStore.getGuildEmoji(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (null != stateFromStores) {
    if (cResult[4] === stateFromStores) {
      let tmp9;
      if (cResult[5] === arg0) {
        tmp9 = cResult[6];
      }
      tmp8 = tmp9;
    }
    if (cResult[7] !== arg0) {
      class S {
        constructor(roles) {
          const obj = RoleSubscriptionEmojiUtils;
          return obj.isRoleSubscriptionEmoji(roles, closure_0);
        }
      }
      cResult[7] = arg0;
      cResult[8] = S;
    } else {
      class S {
        constructor(roles) {
          const obj = RoleSubscriptionEmojiUtils;
          return obj.isRoleSubscriptionEmoji(roles, closure_0);
        }
      }
    }
    const found = stateFromStores.filter(S);
    cResult[4] = stateFromStores;
    cResult[5] = arg0;
    cResult[6] = found;
    tmp9 = found;
  } else {
    class S {
      constructor(roles) {
        const obj = RoleSubscriptionEmojiUtils;
        return obj.isRoleSubscriptionEmoji(roles, closure_0);
      }
    }
  }
  return tmp8;
}) : ((arg0) => {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let obj = require("get initialized");
  items = [EmojiStore];
  const items1 = [arg0];
  stateFromStores = obj.useStateFromStores(items, () => EmojiStore.getGuildEmoji(closure_0), items1);
  const items2 = [stateFromStores, arg0];
  return react.useMemo(() => {
    let found;
    if (null == stateFromStores) {
      found = items;
    } else {
      found = stateFromStores.filter((item) => {
        const obj = closure_0(stateFromStores[5]);
        return obj.isRoleSubscriptionEmoji(item, closure_1_0);
      });
    }
    return found;
  }, items2);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx");

export default tmp2;
export const NO_EMOJIS_AVAILABLE = items;