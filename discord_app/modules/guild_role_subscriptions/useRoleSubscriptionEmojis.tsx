// discord_app/modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx
import noop from "../../../_runtime/00019_noop.js";
import getEmojiToGroupId from "../emojis/EmojiStore.tsx";

const require = fn;
let items = [];
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx");

export default function useRoleSubscriptionEmojis(arg0) {
  const _require = arg0;
  items = [closure_3];
  const items1 = [arg0];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => closure_1_3.getGuildEmoji(closure_0), items1);
  const items2 = [stateFromStores, arg0];
  return React.useMemo(() => {
    if (null == stateFromStores) {
      let found = items;
    } else {
      found = stateFromStores.filter((item, index) => closure_1_0(stateFromStores[3]).isRoleSubscriptionEmoji(item, closure_0));
    }
    return found;
  }, items2);
};
export const NO_EMOJIS_AVAILABLE = items;