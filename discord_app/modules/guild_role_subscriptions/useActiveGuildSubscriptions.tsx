// === Module 15029: useActiveGuildSubscriptions ===

// Module 15029 (useActiveGuildSubscriptions)
import actions_BillingActionCreatorsAll from "actions/BillingActionCreators" /* 5404 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15023 */;
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship" /* 15024 */;
import react from "react" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, activeGuildSubscriptions, importAll, importDefault, tmp10, tmp3, tmp9;

const constants = GuildRoleSubscriptionsConstants.UserGuildRoleSubscriptionRelationship;
let closure_7 = [];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_1;
  let ref;
  let tmp4;
  let tmp7;
  let tmp8;
  const obj = require("react");
  const cResult = obj.c(8);
  const tmp = _require;
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    let num = 0;
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const ensureFresh = tmp4.ensureFresh;
  let tmp5 = undefined !== ensureFresh && ensureFresh;
  _require = tmp5;
  let tmp6 = useUserRoleSubscriptionRelationshipDefault() === constants.SUBSCRIBED;
  importDefault = tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SubscriptionStore];
    class S {
      constructor() {
        return closure_1_5.getActiveGuildSubscriptions();
      }
    }
    cResult[2] = items;
    cResult[3] = S;
    tmp8 = S;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  importAll = react.useRef(false);
  if (cResult[4] === tmp5) {
    let tmp11;
    let tmp12;
    if (cResult[5] === tmp6) {
      tmp11 = cResult[6];
      tmp12 = cResult[7];
    }
    const effect = react.useEffect(tmp11, tmp12);
    class S {
      constructor() {
        return closure_1_5.getActiveGuildSubscriptions();
      }
    }
    return stateFromStores;
  }
  class F {
    constructor() {
      tmp = ensureFresh;
      current = closure_2.current;
      obj = closure_5;
      tmp2 = closure_1;
      tmp3 = closure_2;
      activeGuildSubscriptions = closure_5.getActiveGuildSubscriptions();
      num = undefined;
      if (activeGuildSubscriptions != null) {
        num = activeGuildSubscriptions.length;
      }
      if (num == null) {
        num = 0;
      }
      tmp4 = 0 !== num || !tmp2;
      tmp5 = !tmp4;
      if (tmp4) {
        tmp6 = !tmp;
        if (tmp) {
          tmp6 = current;
        }
        tmp7 = !tmp6;
        if (tmp6) {
          tmp8 = !current && !obj.hasFetchedSubscriptions();
          tmp7 = tmp8;
        }
        tmp5 = tmp7;
      }
      if (tmp5) {
        flag = true;
        tmp3.current = true;
        tmp9 = closure_2;
        tmp10 = closure_3;
        obj2 = closure_2(closure_3[7]);
        subscriptions = obj2.fetchSubscriptions();
      }
      return;
    }
  }
  const items1 = [tmp5, tmp6];
  cResult[4] = tmp5;
  cResult[5] = tmp6;
  cResult[6] = F;
  cResult[7] = items1;
  tmp12 = items1;
  tmp11 = F;
}) : (() => {
  let closure_1;
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
  let obj2 = flag(504);
  const items = [SubscriptionStore];
  let stateFromStores = obj2.useStateFromStores(items, () => activeGuildSubscriptions.getActiveGuildSubscriptions());
  const ref = react.useRef(false);
  const items1 = [flag, tmp];
  const effect = react.useEffect(() => {
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
      if (flag) {
        tmp6 = current;
      }
      let tmp7 = !tmp6;
      if (tmp6) {
        tmp7 = !current && !SubscriptionStore.hasFetchedSubscriptions();
        !current && !SubscriptionStore.hasFetchedSubscriptions();
      }
      tmp5 = tmp7;
    }
    if (tmp5) {
      ref.current = true;
      const obj2 = actions_BillingActionCreatorsAll;
      const subscriptions = obj2.fetchSubscriptions();
    }
  }, items1);
  if (stateFromStores == null) {
    stateFromStores = closure_7;
  }
  return stateFromStores;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx");

export default tmp2;