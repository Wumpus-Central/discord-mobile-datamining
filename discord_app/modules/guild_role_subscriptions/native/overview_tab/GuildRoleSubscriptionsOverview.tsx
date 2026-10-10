// === Module 16976: GuildRoleSubscriptionsOverview ===

// Module 16976 (GuildRoleSubscriptionsOverview)
import c from "c" /* 576 */;
import router_utils from "router_utils" /* 1112 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 9398 */;
import GroupListingsFetchContext from "GroupListingsFetchContext" /* 15483 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 16977 */;
import GuildRoleSubscriptionPurchasePageDefault from "GuildRoleSubscriptionPurchasePage" /* 16978 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5757 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4943 */;
import GuildStore from "GuildStore" /* 2087 */;

require = fn;
function serverNameHook(children) {
  return jsx(Text_Text.Text, { variant: "heading-lg/extrabold", color: "interactive-text-active", children });
}
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function RoleSubscriptionsUnavailableNotice(serverName) {
  const cResult = c.c(5);
  serverName = serverName.serverName;
  if (cResult[0] !== serverName) {
    const intl = util.intl;
    const obj2 = { serverName, serverNameHook };
    const formatResult = intl.format(util.t.uEqG1M, obj2);
    cResult[0] = serverName;
    cResult[1] = formatResult;
    let tmp4 = formatResult;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult = intl2.string(util.t["+3DKTf"]);
    cResult[2] = stringResult;
    let tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const obj3 = { title: tmp4, description: tmp7 };
    const tmp12 = jsx(UnavailableNoticeDefault, { title: tmp4, description: tmp7 });
    cResult[3] = tmp4;
    cResult[4] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[4];
  }
  return tmp9;
}) : (function RoleSubscriptionsUnavailableNotice(serverName) {
  const obj = { title: null, description: null };
  const intl = util.intl;
  obj.title = intl.format(util.t.uEqG1M, { serverName: serverName.serverName, serverNameHook });
  const intl2 = util.intl;
  obj.description = intl2.string(util.t["+3DKTf"]);
  return jsx(UnavailableNoticeDefault, { title: null, description: null });
});
let closure_9 = tmp2;
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function PurchasePage(arg0) {
  const cResult = c.c(9);
  ({ guildId, gatedChannelId } = arg0);
  const mobileStoreFront = NativePaymentHooksDefault.useMobileStoreFront();
  let country;
  if (mobileStoreFront != null) {
    country = mobileStoreFront.country;
  }
  if (cResult[0] === gatedChannelId) {
    if (cResult[1] === guildId) {
      let tmp9 = cResult[2];
    }
    if (cResult[3] === guildId) {
      if (cResult[4] === country) {
        if (cResult[5] === tmp7) {
          if (cResult[6] === tmp8) {
            if (cResult[7] === tmp9) {
              let tmp11 = cResult[8];
            }
            return tmp11;
          }
        }
      }
    }
    const obj3 = { guildId, refetchOnMount: tmp7, countryCode: country, dontFetchWhileTrue: tmp8, children: tmp9 };
    const tmp13 = jsx(GroupListingsFetchContext.GroupListingsFetchContextProvider, { guildId, refetchOnMount: tmp7, countryCode: country, dontFetchWhileTrue: tmp8, children: tmp9 });
    cResult[3] = guildId;
    cResult[4] = country;
    cResult[5] = tmp7;
    cResult[6] = tmp8;
    cResult[7] = tmp9;
    cResult[8] = tmp13;
    tmp11 = tmp13;
  }
  const tmp10 = jsx(GuildRoleSubscriptionPurchasePageDefault, { guildId, gatedChannelId });
  cResult[0] = gatedChannelId;
  cResult[1] = guildId;
  cResult[2] = tmp10;
  tmp9 = tmp10;
}) : (function PurchasePage(arg0) {
  ({ guildId, gatedChannelId } = arg0);
  const mobileStoreFront = NativePaymentHooksDefault.useMobileStoreFront();
  let country;
  if (mobileStoreFront != null) {
    country = mobileStoreFront.country;
  }
  return jsx(GroupListingsFetchContext.GroupListingsFetchContextProvider, { guildId, refetchOnMount: null == gatedChannelId, countryCode: country, dontFetchWhileTrue: null == country, children: jsx(GuildRoleSubscriptionPurchasePageDefault, { guildId, gatedChannelId }) });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsOverview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionsOverview(guildId) {
  const cResult = guildId(stateFromStores1[7]).c(16);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function f() {
      return GuildStore.getGuild(guildId);
    };
    const items1 = [guildId];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = guildId(stateFromStores1[7]);
  const stateFromStores = guildId(stateFromStores1[13]).useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GatewayConnectionStore];
    class C {
      constructor() {
        return closure_1_4.isConnected();
      }
    }
    cResult[4] = items2;
    cResult[5] = C;
    let tmp10 = C;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const tmpResult = guildId(stateFromStores1[13]);
  stateFromStores1 = guildId(stateFromStores1[13]).useStateFromStores(tmp9, tmp10);
  const tmp13 = stateFromStores(stateFromStores1[14])(guildId);
  noop = tmp13;
  guildId(stateFromStores1[15]);
  if (cResult[6] === stateFromStores) {
    if (cResult[7] === stateFromStores1) {
      if (cResult[8] === tmp13) {
        let tmp15 = cResult[9];
        let tmp16 = cResult[10];
      }
      const effect = noop.useEffect(tmp15, tmp16);
      class C {
        constructor() {
          return closure_1_4.isConnected();
        }
      }
    }
  }
  const fn2 = function _() {
    let tmp = !stateFromStores1;
    if (stateFromStores1) {
      tmp = null != stateFromStores && closure_3;
      const tmp4 = null != stateFromStores && closure_3;
    }
    if (!tmp) {
      const obj2 = { title: null, body: null, confirmText: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.r0DLNm);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t["6Y0JlN"]);
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t.BddRzS);
      actions_AlertActionCreatorsDefault.show(obj2);
      router_utils.replaceWith(DefaultRouteStore.defaultRoute);
    }
  };
  const items3 = [stateFromStores, stateFromStores1, tmp13];
  cResult[6] = stateFromStores;
  cResult[7] = stateFromStores1;
  cResult[8] = tmp13;
  cResult[9] = fn2;
  cResult[10] = items3;
  tmp16 = items3;
  tmp15 = fn2;
  const tmpResult3 = guildId(stateFromStores1[13]);
}) : (function GuildRoleSubscriptionsOverview(guildId) {
  guildId = guildId.guildId;
  let stateFromStores1;
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(stateFromStores1[13]).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj = guildId(stateFromStores1[13]);
  const items2 = [GatewayConnectionStore];
  stateFromStores1 = guildId(stateFromStores1[13]).useStateFromStores(items2, () => connected.isConnected());
  const tmp3 = stateFromStores(stateFromStores1[14])(guildId);
  noop = tmp3;
  let obj2 = guildId(stateFromStores1[13]);
  const items3 = [stateFromStores, stateFromStores1, tmp3];
  const canUseRoleSubscriptionIAP = guildId(stateFromStores1[15]).useCanUseRoleSubscriptionIAP(guildId);
  const effect = noop.useEffect(() => {
    let tmp = !stateFromStores1;
    if (stateFromStores1) {
      tmp = null != stateFromStores && closure_3;
      const tmp4 = null != stateFromStores && closure_3;
    }
    if (!tmp) {
      const obj2 = { title: null, body: null, confirmText: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.r0DLNm);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t["6Y0JlN"]);
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t.BddRzS);
      actions_AlertActionCreatorsDefault.show(obj2);
      router_utils.replaceWith(DefaultRouteStore.defaultRoute);
    }
  }, items3);
  if (canUseRoleSubscriptionIAP) {
    const obj4 = { guildId, gatedChannelId: guildId.gatedChannelId };
    let tmp6Result = <closure_10 guildId={guildId} gatedChannelId={guildId.gatedChannelId} />;
  } else {
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.name;
    }
    if (str == null) {
      str = "";
    }
    const obj5 = { serverName: str };
    tmp6Result = <closure_9 serverName={str} />;
  }
  return tmp6Result;
});
export { serverNameHook };
export const RoleSubscriptionsUnavailableNotice = tmp2;