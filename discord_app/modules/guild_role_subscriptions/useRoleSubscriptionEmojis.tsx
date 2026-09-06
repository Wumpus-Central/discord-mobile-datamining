// === Module 17750: useRoleSubscriptionEmojis ===

// Module 17750 (useRoleSubscriptionEmojis)
import noop from "module_19" /* 19 */;
import EmojiStore from "EmojiStore" /* 5459 */;

const require = fn;
let items = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx");

export default function useRoleSubscriptionEmojis(arg0) {
  _require = arg0;
  items = [EmojiStore];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => EmojiStore.getGuildEmoji(closure_0), items1);
  const items2 = [stateFromStores, arg0];
  return noop.useMemo(() => {
    if (null == stateFromStores) {
      let found = items;
    } else {
      found = stateFromStores.filter((item) => closure_0(stateFromStores[3]).isRoleSubscriptionEmoji(item, closure_1_0));
    }
    return found;
  }, items2);
};
export const NO_EMOJIS_AVAILABLE = items;