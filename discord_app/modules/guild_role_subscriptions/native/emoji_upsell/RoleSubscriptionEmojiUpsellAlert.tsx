// discord_app/modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl4 from "../../../../intl/index.native.tsx";
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import AssetRegistryDefault from "../../../../../_runtime/08849_AssetRegistry.js";
import CreatorRevenueButton2 from "../components/CreatorRevenueButton.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, guildId;

const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let first;
      let intl;
      let intl2;
      let obj3;
      let onPress;
      let tmp11;
      let tmp8;
      const tmp = guildId;
      let obj = guildId(576);
      const cResult = obj.c(18);
      guildId = guildId.guildId;
      const onClose = guildId.onClose;
      size = onClose(1484)();
      const diff = Math.min(0.9 * Math.min(size.width, size.height), 500) - 32;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function u() {
          let guild = null;
          if (null != guildId) {
            guild = GuildStore.getGuild(tmp);
          }
          return guild;
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      let name;
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      if (cResult[3] !== name) {
        const obj2 = {
          image: onClose(8849),
          title: intl.string(tmp(1126).t.cBjkcx),
          description: intl2.formatToPlainString(tmp(1126).t["h0u/Hi"], obj3),
        };
        intl = tmp(1126).intl;
        intl2 = tmp(1126).intl;
        obj3 = { serverName: name };
        cResult[3] = name;
        cResult[4] = obj2;
        tmp11 = obj2;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] === guildId) {
        let tmp12;
        let tmp13;
        let tmp15;
        if (cResult[6] === onClose) {
          tmp12 = cResult[7];
        }
        dependencyMap = tmp12;
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult = intl3.string(tmp(1126).t.cpT0Cq);
          cResult[8] = stringResult;
          tmp13 = stringResult;
        } else {
          tmp13 = cResult[8];
        }
        if (cResult[9] !== tmp12) {
          const fn2 = function x() {
            const CreatorRevenueButton = CreatorRevenueButton2.CreatorRevenueButton;
            const intl = intl4.intl;
            return <CreatorRevenueButton onPress={onPress} text={intl.string(intl4.t.p8FG1D)} />;
          };
          cResult[9] = tmp12;
          cResult[10] = fn2;
          tmp15 = fn2;
        } else {
          tmp15 = cResult[10];
        }
        if (cResult[11] === diff) {
          let tmp16;
          if (cResult[12] === tmp11) {
            tmp16 = cResult[13];
          }
          if (cResult[14] === onClose) {
            if (cResult[15] === tmp15) {
              let tmp19;
              if (cResult[16] === tmp16) {
                tmp19 = cResult[17];
              }
              return tmp19;
            }
          }
          const tmp21 = jsx(onClose(5790), { cancelText: tmp13, onClose, renderConfirmButton: tmp15, children: tmp16 });
          cResult[14] = onClose;
          cResult[15] = tmp15;
          cResult[16] = tmp16;
          cResult[17] = tmp21;
          tmp19 = tmp21;
        }
        const tmp18 = jsx(tmp(8857).PremiumUpsellItem, { alertWidth: diff, upsellItem: tmp11 });
        cResult[11] = diff;
        cResult[12] = tmp11;
        cResult[13] = tmp18;
        tmp16 = tmp18;
      }
      class T {
        constructor() {
          const obj = GuildActionCreatorsDefault;
          const result = obj.transitionToGuildSync(guildId, undefined, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
          if (onClose != null) {
            onClose();
          }
        }
      }
      cResult[5] = guildId;
      cResult[6] = onClose;
      cResult[7] = T;
      tmp12 = T;
    }
  : (arg0) => {
      let onClose;
      ({ guildId: require, onClose } = arg0);
      let stateFromStores;
      function handleConfirm() {
        const obj = GuildActionCreatorsDefault;
        const result = obj.transitionToGuildSync(require, undefined, StaticChannelRoute.ROLE_SUBSCRIPTIONS);
        if (onClose != null) {
          onClose();
        }
      }
      size = onClose(stateFromStores[8])();
      const diff = Math.min(0.9 * Math.min(size.width, size.height), 500) - 32;
      let obj = require("get initialized");
      const items = [GuildStore];
      stateFromStores = obj.useStateFromStores(items, () => {
        let guild = null;
        if (null != require) {
          guild = GuildStore.getGuild(tmp);
        }
        return guild;
      });
      let name;
      const useMemo = handleConfirm.useMemo;
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      const items1 = [name];
      const memo = useMemo(() => {
        let intl;
        let intl2;
        let name;
        if (stateFromStores != null) {
          name = stateFromStores.name;
        }
        const obj = {
          image: AssetRegistryDefault,
          title: intl.string(intl4.t.cBjkcx),
          description: intl2.formatToPlainString(intl4.t["h0u/Hi"], { serverName: name }),
        };
        intl = intl4.intl;
        intl2 = intl4.intl;
        return obj;
      }, items1);
      onClose(stateFromStores[13]);
      let intl = require("intl").intl;
      return (
        <tmpResult
          cancelText={intl.string(require("intl").t.cpT0Cq)}
          onClose={onClose}
          renderConfirmButton={function renderConfirmButton() {
            const CreatorRevenueButton = CreatorRevenueButton2.CreatorRevenueButton;
            const intl = intl4.intl;
            return <CreatorRevenueButton onPress={handleConfirm} text={intl.string(intl4.t.p8FG1D)} />;
          }}
        >
          {null}
        </tmpResult>
      );
    };
let size = size_mod;
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/emoji_upsell/RoleSubscriptionEmojiUpsellAlert.tsx",
);

export default tmp2;
