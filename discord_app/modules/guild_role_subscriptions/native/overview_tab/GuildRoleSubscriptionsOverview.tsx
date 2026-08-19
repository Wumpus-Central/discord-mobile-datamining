// discord_app/modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsOverview.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import notSupportedDefault from "../../../payments/native/hooks/NativePaymentHooks.android.tsx";
import useGroupListingsFetchContext from "../../GroupListingsFetchContext.tsx";
import UnavailableNoticeDefault from "../components/UnavailableNotice.tsx";
import SeparatorDefault from "../purchase_page/GuildRoleSubscriptionPurchasePage.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import _handleConnectionOpen from "../../../gateway/GatewayConnectionStore.tsx";
import initialize from "../../../../stores/DefaultRouteStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
function serverNameHook(children) {
  return jsx(Text.Text, { variant: "heading-lg/extrabold", color: "interactive-text-active", children });
}
class RoleSubscriptionsUnavailableNotice {
  constructor(arg0) {
    obj = { title: null, description: null };
    tmp = require("UnavailableNotice");
    intl = require("getSystemLocale").intl;
    obj = { serverName: global.serverName, serverNameHook };
    obj[0] = intl.format(require("getSystemLocale").t.uEqG1M, obj);
    intl2 = require("getSystemLocale").intl;
    obj[1] = intl2.string(require("getSystemLocale").t["+3DKTf"]);
    return jsx(tmp, obj);
  }
}
function PurchasePage(arg0) {
  ({ guildId, gatedChannelId } = arg0);
  let obj = notSupportedDefault;
  const storeFront = obj.useNativeIAPPayments().storeFront;
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  obj = { guildId, refetchOnMount: null == gatedChannelId, countryCode: country, dontFetchWhileTrue: null == country, children: jsx(SeparatorDefault, { guildId, gatedChannelId }) };
  return jsx(useGroupListingsFetchContext.GroupListingsFetchContextProvider, { guildId, refetchOnMount: null == gatedChannelId, countryCode: country, dontFetchWhileTrue: null == country, children: jsx(SeparatorDefault, { guildId, gatedChannelId }) });
}
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsOverview.tsx");

export default function GuildRoleSubscriptionsOverview(guildId) {
  guildId = guildId.guildId;
  let stateFromStores1;
  let obj = guildId(stateFromStores1[11]);
  const items = [closure_6];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getGuild(guildId), items1);
  const items2 = [closure_4];
  stateFromStores1 = guildId(stateFromStores1[11]).useStateFromStores(items2, () => connected.isConnected());
  const tmp3 = stateFromStores(stateFromStores1[12])(guildId);
  const React = tmp3;
  const obj2 = guildId(stateFromStores1[11]);
  const items3 = [stateFromStores, stateFromStores1, tmp3];
  const canUseRoleSubscriptionIAP = guildId(stateFromStores1[13]).useCanUseRoleSubscriptionIAP(guildId);
  const effect = React.useEffect(() => {
    let tmp = !stateFromStores1;
    if (stateFromStores1) {
      tmp = null != stateFromStores && closure_3;
    }
    if (!tmp) {
      stateFromStores(stateFromStores1[14]);
      const obj = { title: null, body: null, confirmText: null };
      const intl = guildId(stateFromStores1[7]).intl;
      obj[0] = intl.string(guildId(stateFromStores1[7]).t.r0DLNm);
      const intl2 = guildId(stateFromStores1[7]).intl;
      obj[1] = intl2.string(guildId(stateFromStores1[7]).t["6Y0JlN"]);
      const intl3 = guildId(stateFromStores1[7]).intl;
      obj[2] = intl3.string(guildId(stateFromStores1[7]).t.BddRzS);
      obj.show(obj);
      guildId(stateFromStores1[15]).replaceWith(closure_1_5.defaultRoute);
      const obj3 = guildId(stateFromStores1[15]);
    }
  }, items3);
  if (canUseRoleSubscriptionIAP) {
    obj = { guildId: null, gatedChannelId: null };
    obj[0] = guildId;
    obj[1] = guildId.gatedChannelId;
    let tmp6Result = <PurchasePage guildId={null} gatedChannelId={null} />;
  } else {
    let str;
    if (stateFromStores != null) {
      str = stateFromStores.name;
    }
    if (str == null) {
      str = "";
    }
    obj = { serverName: null };
    obj[0] = str;
    tmp6Result = <RoleSubscriptionsUnavailableNotice serverName={null} />;
  }
  return tmp6Result;
};
export { serverNameHook };
export { RoleSubscriptionsUnavailableNotice };