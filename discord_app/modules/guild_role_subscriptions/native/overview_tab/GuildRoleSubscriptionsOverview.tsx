// discord_app/modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsOverview.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import router_utils from "../../../routing/router_utils.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import NativePaymentHooksDefault from "../../../payments/native/hooks/NativePaymentHooks.android.tsx";
import GroupListingsFetchContext from "../../GroupListingsFetchContext.tsx";
import UnavailableNoticeDefault from "../components/UnavailableNotice.tsx";
import GuildRoleSubscriptionPurchasePageDefault from "../purchase_page/GuildRoleSubscriptionPurchasePage.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import GatewayConnectionStore from "../../../gateway/GatewayConnectionStore.tsx";
import DefaultRouteStore from "../../../../stores/DefaultRouteStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let serverName;

function serverNameHook(children) {
  return jsx(Text_Text.Text, { variant: "heading-lg/extrabold", color: "interactive-text-active", children });
}
let react = react_mod;
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (serverName) => {
      let tmp4;
      let tmp7;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(5);
      serverName = serverName.serverName;
      if (cResult[0] !== serverName) {
        const intl = intl4.intl;
        const obj2 = { serverName, serverNameHook };
        const formatResult = intl.format(intl4.t.uEqG1M, obj2);
        cResult[0] = serverName;
        cResult[1] = formatResult;
        tmp4 = formatResult;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl4.intl;
        const stringResult = intl2.string(intl4.t["+3DKTf"]);
        cResult[2] = stringResult;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        const tmp12 = jsx(UnavailableNoticeDefault, { title: tmp4, description: tmp7 });
        cResult[3] = tmp4;
        cResult[4] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[4];
      }
      return tmp9;
    }
  : (serverName) => {
      serverName = serverName.serverName;
      UnavailableNoticeDefault;
      const intl = intl4.intl;
      const obj2 = { serverName, serverNameHook };
      const intl2 = intl4.intl;
      return <tmp title={intl.format(intl4.t.uEqG1M, obj2)} description={intl2.string(intl4.t["+3DKTf"])} />;
    };
let closure_9 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let gatedChannelId;
      let guildId;
      const obj = react2;
      const cResult = obj.c(9);
      ({ guildId, gatedChannelId } = arg0);
      const obj2 = NativePaymentHooksDefault;
      const mobileStoreFront = obj2.useMobileStoreFront();
      let country;
      if (mobileStoreFront != null) {
        country = mobileStoreFront.country;
      }
      if (cResult[0] === gatedChannelId) {
        let tmp9;
        if (cResult[1] === guildId) {
          tmp9 = cResult[2];
        }
        if (cResult[3] === guildId) {
          if (cResult[4] === country) {
            if ((cResult[5] === null) == gatedChannelId) {
              if ((cResult[6] === null) == country) {
                let tmp11;
                if (cResult[7] === tmp9) {
                  tmp11 = cResult[8];
                }
                return tmp11;
              }
            }
          }
        }
        const tmp13 = jsx(GroupListingsFetchContext.GroupListingsFetchContextProvider, {
          guildId,
          refetchOnMount: null == gatedChannelId,
          countryCode: country,
          dontFetchWhileTrue: null == country,
          children: tmp9,
        });
        cResult[3] = guildId;
        cResult[4] = country;
        cResult[5] = null == gatedChannelId;
        cResult[6] = null == country;
        cResult[7] = tmp9;
        cResult[8] = tmp13;
        tmp11 = tmp13;
      }
      const tmp10 = jsx(GuildRoleSubscriptionPurchasePageDefault, { guildId, gatedChannelId });
      cResult[0] = gatedChannelId;
      cResult[1] = guildId;
      cResult[2] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      let gatedChannelId;
      let guildId;
      ({ guildId, gatedChannelId } = arg0);
      const obj = NativePaymentHooksDefault;
      const mobileStoreFront = obj.useMobileStoreFront();
      let country;
      if (mobileStoreFront != null) {
        country = mobileStoreFront.country;
      }
      const GroupListingsFetchContextProvider = GroupListingsFetchContext.GroupListingsFetchContextProvider;
      return (
        <GroupListingsFetchContextProvider
          guildId={guildId}
          refetchOnMount={null == gatedChannelId}
          countryCode={country}
          dontFetchWhileTrue={null == country}
        >
          {null}
        </GroupListingsFetchContextProvider>
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_3;
      let connected;
      let first;
      let stateFromStores1;
      let tmp10;
      let tmp6;
      let tmp7;
      let tmp9;
      let tmp = guildId;
      let obj = guildId(stateFromStores1[7]);
      const cResult = obj.c(16);
      guildId = guildId.guildId;
      const gatedChannelId = guildId.gatedChannelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function h() {
          return GuildStore.getGuild(guildId);
        };
        const items1 = [guildId];
        cResult[1] = guildId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(stateFromStores1[13]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GatewayConnectionStore];
        const fn2 = function p() {
          return connected.isConnected();
        };
        cResult[4] = items2;
        cResult[5] = fn2;
        tmp10 = fn2;
        tmp9 = items2;
      } else {
        tmp9 = cResult[4];
        tmp10 = cResult[5];
      }
      const tmpResult3 = tmp(stateFromStores1[13]);
      stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
      const tmp13 = stateFromStores(stateFromStores1[14])(guildId);
      react = tmp13;
      tmp(stateFromStores1[15]);
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === stateFromStores1) {
          let tmp16;
          let tmp17;
          if (cResult[8] === tmp13) {
            tmp16 = cResult[9];
            tmp17 = cResult[10];
          }
          const effect = react.useEffect(tmp16, tmp17);
          if (tmp15) {
            if (cResult[11] === gatedChannelId) {
              let tmp25;
              if (cResult[12] === guildId) {
                tmp25 = cResult[13];
              }
              return tmp25;
            }
            const tmp28 = <closure_10 guildId={guildId} gatedChannelId={gatedChannelId} />;
            cResult[11] = gatedChannelId;
            cResult[12] = guildId;
            cResult[13] = tmp28;
            tmp25 = tmp28;
          } else {
            let tmp21;
            let str;
            if (stateFromStores != null) {
              str = stateFromStores.name;
            }
            if (str == null) {
              str = "";
            }
            if (cResult[14] !== str) {
              const tmp24 = <closure_9 serverName={str} />;
              cResult[14] = str;
              cResult[15] = tmp24;
              tmp21 = tmp24;
            } else {
              tmp21 = cResult[15];
            }
            return tmp21;
          }
        }
      }
      class F {
        constructor() {
          let intl;
          let intl2;
          let intl3;
          let tmp = !stateFromStores1;
          if (stateFromStores1) {
            tmp = null != stateFromStores && closure_3;
          }
          if (!tmp) {
            const obj = {
              title: intl.string(intl4.t.r0DLNm),
              body: intl2.string(intl4.t["6Y0JlN"]),
              confirmText: intl3.string(intl4.t.BddRzS),
            };
            const show = actions_AlertActionCreatorsDefault.show;
            actions_AlertActionCreatorsDefault;
            intl = intl4.intl;
            intl2 = intl4.intl;
            intl3 = intl4.intl;
            show(obj);
            const obj2 = router_utils;
            obj2.replaceWith(DefaultRouteStore.defaultRoute);
          }
        }
      }
      const items3 = [stateFromStores, stateFromStores1, tmp13];
      cResult[6] = stateFromStores;
      cResult[7] = stateFromStores1;
      cResult[8] = tmp13;
      cResult[9] = F;
      cResult[10] = items3;
      tmp17 = items3;
      tmp16 = F;
    }
  : (guildId) => {
      let closure_3;
      let connected;
      let tmp6Result;
      guildId = guildId.guildId;
      let stateFromStores1;
      const gatedChannelId = guildId.gatedChannelId;
      let obj = guildId(stateFromStores1[13]);
      const items = [GuildStore];
      const items1 = [guildId];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
      let obj2 = guildId(stateFromStores1[13]);
      const items2 = [GatewayConnectionStore];
      stateFromStores1 = obj2.useStateFromStores(items2, () => connected.isConnected());
      const tmp3 = stateFromStores(stateFromStores1[14])(guildId);
      react = tmp3;
      const items3 = [stateFromStores, stateFromStores1, tmp3];
      const obj3 = guildId(stateFromStores1[15]);
      const canUseRoleSubscriptionIAP = obj3.useCanUseRoleSubscriptionIAP(guildId);
      const effect = react.useEffect(() => {
        let intl;
        let intl2;
        let intl3;
        let tmp = !stateFromStores1;
        if (stateFromStores1) {
          tmp = null != stateFromStores && closure_3;
        }
        if (!tmp) {
          const obj = {
            title: intl.string(intl4.t.r0DLNm),
            body: intl2.string(intl4.t["6Y0JlN"]),
            confirmText: intl3.string(intl4.t.BddRzS),
          };
          const show = actions_AlertActionCreatorsDefault.show;
          actions_AlertActionCreatorsDefault;
          intl = intl4.intl;
          intl2 = intl4.intl;
          intl3 = intl4.intl;
          show(obj);
          const obj2 = router_utils;
          obj2.replaceWith(DefaultRouteStore.defaultRoute);
        }
      }, items3);
      if (canUseRoleSubscriptionIAP) {
        tmp6Result = <closure_10 guildId={guildId} gatedChannelId={gatedChannelId} />;
      } else {
        let str;
        if (stateFromStores != null) {
          str = stateFromStores.name;
        }
        if (str == null) {
          str = "";
        }
        tmp6Result = <closure_9 serverName={str} />;
      }
      return tmp6Result;
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsOverview.tsx",
);

export default tmp3;
export { serverNameHook };
export const RoleSubscriptionsUnavailableNotice = tmp2;
