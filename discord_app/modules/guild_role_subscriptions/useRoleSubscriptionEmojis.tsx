// discord_app/modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx
import closure_2 from "../../../_runtime/00019_noop.js";
import closure_3 from "../emojis/EmojiStore.tsx";

const require = arg1;
let items = [];
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx");

export default function useRoleSubscriptionEmojis(arg0) {
  const _require = arg0;
  items = [closure_3];
  const items1 = [arg0];
  stateFromStores = _require(stateFromStores[2]).useStateFromStores(items, () => closure_1_3.getGuildEmoji(closure_0), items1);
  const items2 = [stateFromStores, arg0];
  return React.useMemo(() => {
    if (null == stateFromStores) {
      let found = closure_1_4;
    } else {
      found = stateFromStores.filter((roles) => closure_1_0(closure_1_1[3]).isRoleSubscriptionEmoji(roles, closure_0));
    }
    return found;
  }, items2);
};
export const NO_EMOJIS_AVAILABLE = items;