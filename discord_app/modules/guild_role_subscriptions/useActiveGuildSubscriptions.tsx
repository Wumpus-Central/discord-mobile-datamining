// === Module 14314: useActiveGuildSubscriptions ===

// Module 14314 (useActiveGuildSubscriptions)
import noop from "noop";
import reset from "reset";
import { UserGuildRoleSubscriptionRelationship as closure_6 } from "MAX_SUBSCRIPTION_TIERS";

const require = arg1;
let closure_7 = [];
const result = require("MAX_SUBSCRIPTION_TIERS").fileFinishedImporting("modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx");

export default function useActiveGuildSubscriptions() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.ensureFresh;
  if (flag === undefined) {
    flag = false;
  }
  let importDefault;
  let closure_2;
  const tmp = importDefault(14309)() === constants.SUBSCRIBED;
  importDefault = tmp;
  const items = [reset];
  let stateFromStores = flag(589).useStateFromStores(items, () => activeGuildSubscriptions.getActiveGuildSubscriptions());
  closure_2 = React.useRef(false);
  const items1 = [flag, tmp];
  const effect = React.useEffect(() => {
    const current = ref.current;
    const activeGuildSubscriptions = outer1_5.getActiveGuildSubscriptions();
    let num;
    if (activeGuildSubscriptions != null) {
      num = activeGuildSubscriptions.length;
    }
    if (num == null) {
      num = 0;
    }
    let tmp5 = !tmp4;
    if (0 !== num || !c1) {
      let tmp6 = !tmp;
      if (tmp) {
        tmp6 = current;
      }
      tmp5 = !tmp6;
    }
    if (!tmp5) {
      let tmp7 = !current;
      if (!current) {
        tmp7 = !outer1_5.hasFetchedSubscriptions();
      }
      tmp5 = tmp7;
    }
    if (tmp5) {
      ref.current = true;
      const subscriptions = ref(outer1_3[5]).fetchSubscriptions();
      const obj2 = ref(outer1_3[5]);
    }
  }, items1);
  if (stateFromStores == null) {
    stateFromStores = closure_7;
  }
  return stateFromStores;
};