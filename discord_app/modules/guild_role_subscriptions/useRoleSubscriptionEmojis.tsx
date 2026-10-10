// === Module 18514: useRoleSubscriptionEmojis ===

// Module 18514 (useRoleSubscriptionEmojis)
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 5992 */;
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5987 */;

const require = globalThis.__r;

require = fn;
let items = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useRoleSubscriptionEmojis(arg0) {
  _require = arg0;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [EmojiStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return EmojiStore.getGuildEmoji(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (null != stateFromStores) {
    if (cResult[7] !== arg0) {
      class E {
        constructor(arg0) {
          obj = closure_0(closure_1[5]);
          return obj.isRoleSubscriptionEmoji(arg0, closure_0);
        }
      }
      cResult[7] = arg0;
      cResult[8] = E;
    } else {
      class E {
        constructor(arg0) {
          obj = closure_0(closure_1[5]);
          return obj.isRoleSubscriptionEmoji(arg0, closure_0);
        }
      }
    }
    const found = stateFromStores.filter(E);
    cResult[4] = stateFromStores;
    cResult[5] = arg0;
    cResult[6] = found;
  } else {
    class E {
      constructor(arg0) {
        obj = closure_0(closure_1[5]);
        return obj.isRoleSubscriptionEmoji(arg0, closure_0);
      }
    }
  }
  const tmpResult = require("initialize");
}) : (function useRoleSubscriptionEmojis(arg0) {
  _require = arg0;
  items = [EmojiStore];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => EmojiStore.getGuildEmoji(closure_0), items1);
  const items2 = [stateFromStores, arg0];
  return noop.useMemo(() => {
    if (null == stateFromStores) {
      let found = items;
    } else {
      found = stateFromStores.filter((item) => closure_0(stateFromStores[5]).isRoleSubscriptionEmoji(item, closure_1_0));
    }
    return found;
  }, items2);
});
export const NO_EMOJIS_AVAILABLE = items;