// discord_app/modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx
import actions_BillingActionCreatorsAll from "../billing/actions/BillingActionCreators.tsx";
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import SubscriptionStore from "../../stores/billing/SubscriptionStore.tsx";

const require = fn;
const constants = fn(15205).UserGuildRoleSubscriptionRelationship;
let closure_7 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx");

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
  const items = [SubscriptionStore];
  let stateFromStores = flag(504).useStateFromStores(items, () =>
    activeGuildSubscriptions.getActiveGuildSubscriptions(),
  );
  noop.useRef(false);
  const items1 = [flag, tmp];
  const effect = noop.useEffect(() => {
    const current = ref.current;
    activeGuildSubscriptions = SubscriptionStore.getActiveGuildSubscriptions();
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
        tmp7 = !SubscriptionStore.hasFetchedSubscriptions();
      }
      tmp5 = tmp7;
    }
    if (tmp5) {
      ref.current = true;
      const subscriptions = actions_BillingActionCreatorsAll.fetchSubscriptions();
    }
  }, items1);
  if (stateFromStores == null) {
    stateFromStores = closure_7;
  }
  return stateFromStores;
}
