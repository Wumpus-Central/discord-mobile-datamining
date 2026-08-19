// === Module 14557: useActiveGuildSubscriptions ===

// Module 14557 (useActiveGuildSubscriptions)
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 14552 */;
import noop from "noop" /* 19 */;
import reset from "reset" /* 4045 */;
import { UserGuildRoleSubscriptionRelationship as closure_6 } from "MAX_SUBSCRIPTION_TIERS" /* 14551 */;

const require = fn;
let closure_7 = [];
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx");

export default function useActiveGuildSubscriptions() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.ensureFresh;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = useUserRoleSubscriptionRelationshipDefault() === constants.SUBSCRIBED;
  importDefault = tmp;
  const items = [closure_5];
  let stateFromStores = flag(589).useStateFromStores(items, () => activeGuildSubscriptions.getActiveGuildSubscriptions());
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
      const subscriptions = ref(dependencyMap[5]).fetchSubscriptions();
      const obj2 = ref(dependencyMap[5]);
    }
  }, items1);
  if (stateFromStores == null) {
    stateFromStores = closure_7;
  }
  return stateFromStores;
};