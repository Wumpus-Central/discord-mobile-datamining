// === Module 16533: GuildRoleSubscriptionsOverview ===

// Module 16533 (GuildRoleSubscriptionsOverview)
import router_utils from "router_utils" /* 1100 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import NativePaymentHooksDefault from "NativePaymentHooks" /* 9366 */;
import GroupListingsFetchContext from "GroupListingsFetchContext" /* 15213 */;
import UnavailableNoticeDefault from "UnavailableNotice" /* 16534 */;
import GuildRoleSubscriptionPurchasePageDefault from "GuildRoleSubscriptionPurchasePage" /* 16535 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4385 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
function serverNameHook(children) {
  return jsx(Text_Text.Text, { variant: "heading-lg/extrabold", color: "interactive-text-active", children });
}
class RoleSubscriptionsUnavailableNotice {
  constructor(arg0) {
    obj = { title: null, description: null };
    tmp = closure_1(closure_2[6]);
    intl = closure_0(closure_2[7]).intl;
    obj = { serverName: global.serverName, serverNameHook };
    obj.title = intl.format(closure_0(closure_2[7]).t.uEqG1M, obj);
    intl2 = closure_0(closure_2[7]).intl;
    obj.description = intl2.string(closure_0(closure_2[7]).t["+3DKTf"]);
    return jsx(tmp, obj);
  }
}
function PurchasePage(arg0) {
  ({ guildId, gatedChannelId } = arg0);
  let obj = NativePaymentHooksDefault;
  const storeFront = obj.useNativeIAPPayments().storeFront;
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  obj = { guildId, refetchOnMount: null == gatedChannelId, countryCode: country, dontFetchWhileTrue: null == country, children: jsx(GuildRoleSubscriptionPurchasePageDefault, { guildId, gatedChannelId }) };
  return jsx(GroupListingsFetchContext.GroupListingsFetchContextProvider, { guildId, refetchOnMount: null == gatedChannelId, countryCode: country, dontFetchWhileTrue: null == country, children: jsx(GuildRoleSubscriptionPurchasePageDefault, { guildId, gatedChannelId }) });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsOverview.tsx");

export default function GuildRoleSubscriptionsOverview(guildId) {
  guildId = guildId.guildId;
  let stateFromStores1;
  let obj = guildId(stateFromStores1[11]);
  const items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const items2 = [GatewayConnectionStore];
  stateFromStores1 = guildId(stateFromStores1[11]).useStateFromStores(items2, () => connected.isConnected());
  const tmp3 = stateFromStores(stateFromStores1[12])(guildId);
  noop = tmp3;
  const obj2 = guildId(stateFromStores1[11]);
  const items3 = [stateFromStores, stateFromStores1, tmp3];
  const canUseRoleSubscriptionIAP = guildId(stateFromStores1[13]).useCanUseRoleSubscriptionIAP(guildId);
  const effect = noop.useEffect(() => {
    let tmp = !stateFromStores1;
    if (stateFromStores1) {
      tmp = null != stateFromStores && closure_3;
      const tmp4 = null != stateFromStores && closure_3;
    }
    if (!tmp) {
      const obj = { title: null, body: null, confirmText: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.r0DLNm);
      const intl2 = util.intl;
      obj.body = intl2.string(util.t["6Y0JlN"]);
      const intl3 = util.intl;
      obj.confirmText = intl3.string(util.t.BddRzS);
      obj.show(obj);
      router_utils.replaceWith(DefaultRouteStore.defaultRoute);
    }
  }, items3);
  if (canUseRoleSubscriptionIAP) {
    obj = { guildId, gatedChannelId: guildId.gatedChannelId };
    let tmp6Result = <PurchasePage guildId={guildId} gatedChannelId={guildId.gatedChannelId} />;
  } else {
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.name;
    }
    if (str == null) {
      str = "";
    }
    obj = { serverName: str };
    tmp6Result = <RoleSubscriptionsUnavailableNotice serverName={str} />;
  }
  return tmp6Result;
};
export { serverNameHook };
export { RoleSubscriptionsUnavailableNotice };