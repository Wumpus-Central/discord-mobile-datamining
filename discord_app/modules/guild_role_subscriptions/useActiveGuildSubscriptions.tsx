// discord_app/modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship.tsx";
import closure_4 from "../../../_runtime/00019_noop.js";
import closure_5 from "../../stores/billing/SubscriptionStore.tsx";
import { UserGuildRoleSubscriptionRelationship as closure_6 } from "GuildRoleSubscriptionsConstants.tsx";

const require = arg1;
let closure_7 = [];
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx");

export default function useActiveGuildSubscriptions() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.ensureFresh;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = undefined;
  closure_2 = undefined;
  const tmp = useUserRoleSubscriptionRelationshipDefault() === constants.SUBSCRIBED;
  importDefault = tmp;
  const items = [closure_5];
  let stateFromStores = flag(586).useStateFromStores(items, () =>
    activeGuildSubscriptions.getActiveGuildSubscriptions(),
  );
  closure_2 = React.useRef(false);
  const items1 = [flag, tmp];
  const effect = React.useEffect(() => {
    const current = ref.current;
    const activeGuildSubscriptions = closure_1_5.getActiveGuildSubscriptions();
    let num;
    if (activeGuildSubscriptions != null) {
      num = activeGuildSubscriptions.length;
    }
    if (num == null) {
      num = 0;
    }
    let tmp5 = !tmp4;
    if (0 !== num || !closure_1) {
      let tmp6 = !tmp;
      if (tmp) {
        tmp6 = current;
      }
      tmp5 = !tmp6;
    }
    if (!tmp5) {
      let tmp7 = !current;
      if (!current) {
        tmp7 = !closure_1_5.hasFetchedSubscriptions();
      }
      tmp5 = tmp7;
    }
    if (tmp5) {
      ref.current = true;
      const subscriptions = ref(closure_1_3[5]).fetchSubscriptions();
      const obj2 = ref(closure_1_3[5]);
    }
  }, items1);
  if (stateFromStores == null) {
    stateFromStores = closure_7;
  }
  return stateFromStores;
}
