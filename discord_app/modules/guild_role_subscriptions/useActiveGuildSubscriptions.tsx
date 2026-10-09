// discord_app/modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx
import actions_BillingActionCreatorsAll from "../billing/actions/BillingActionCreators.tsx";
import useUserRoleSubscriptionRelationshipDefault from "useUserRoleSubscriptionRelationship.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import SubscriptionStore from "../../stores/billing/SubscriptionStore.tsx";

const require = globalThis.__r;

const require = fn;
const constants = fn(15413).UserGuildRoleSubscriptionRelationship;
let closure_7 = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useActiveGuildSubscriptions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useActiveGuildSubscriptions(arg0) {
      const cResult = require("c").c(8);
      if (cResult[0] !== arg0) {
        let obj2 = arg0;
        if (undefined === arg0) {
          obj2 = {};
        }
        cResult[0] = arg0;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const ensureFresh = tmp4.ensureFresh;
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
        let tmp8 = S;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp7, tmp8);
      noop.useRef(false);
      if (cResult[4] === (undefined !== ensureFresh && ensureFresh)) {
        if (cResult[5] === tmp6) {
          let tmp11 = cResult[6];
          let tmp12 = cResult[7];
        }
        const effect = noop.useEffect(tmp11, tmp12);
        class S {
          constructor() {
            return closure_1_5.getActiveGuildSubscriptions();
          }
        }
        return stateFromStores;
      }
      const fn = function v() {
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
          let tmp6 = !closure_0;
          if (closure_0) {
            tmp6 = current;
          }
          let tmp7 = !tmp6;
          if (tmp6) {
            let tmp8 = !current;
            if (!current) {
              tmp8 = !SubscriptionStore.hasFetchedSubscriptions();
            }
            tmp7 = tmp8;
          }
          tmp5 = tmp7;
        }
        if (tmp5) {
          ref.current = true;
          const subscriptions = actions_BillingActionCreatorsAll.fetchSubscriptions();
        }
      };
      const items1 = [undefined !== ensureFresh && ensureFresh, tmp6];
      cResult[4] = undefined !== ensureFresh && ensureFresh;
      cResult[5] = tmp6;
      cResult[6] = fn;
      cResult[7] = items1;
      tmp12 = items1;
      tmp11 = fn;
      const tmpResult = require("initialize");
    }
  : function useActiveGuildSubscriptions() {
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
          let tmp7 = !tmp6;
          if (tmp6) {
            let tmp8 = !current;
            if (!current) {
              tmp8 = !SubscriptionStore.hasFetchedSubscriptions();
            }
            tmp7 = tmp8;
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
    };
