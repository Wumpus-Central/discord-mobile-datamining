// discord_app/modules/premium/powerups/native/GuildPowerupsPerksSection.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2525 from "../GuildPowerups.messages.js";
import GuildPowerupsSectionHeaderDefault from "GuildPowerupsSectionHeader.tsx";
import GuildPowerupsSinglePerkCardDefault from "GuildPowerupsSinglePerkCard.tsx";
import GuildPowerupsMultiPerkCardDefault from "GuildPowerupsMultiPerkCard.tsx";
import GuildPowerupsGameServerCardDefault from "GuildPowerupsGameServerCard.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { flexDirection: "column", gap: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj);
let obj2 = { flexDirection: "column", gap: nativeDefault.space.PX_16 };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerksSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = guildId(576).c(9);
      guildId = guildId.guildId;
      const listings = guildId.listings;
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { title: null, description: null };
        const intl = tmp(1126).intl;
        obj2.title = intl.string(_modDef2525.TV3Vm8);
        const intl2 = tmp(1126).intl;
        obj2.description = intl2.string(_modDef2525.STx9hp);
        const tmp9 = closure_4(GuildPowerupsSectionHeaderDefault, obj2);
        cResult[0] = tmp9;
        let first = tmp9;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === guildId) {
        if (cResult[2] === listings) {
          if (cResult[6] === tmp4.container) {
            if (cResult[7] === tmp11) {
              let tmp14 = cResult[8];
            }
            return tmp14;
          }
          const obj3 = { children: null };
          const items = [first];
          const obj4 = { style: tmp10, children: cResult[3] };
          items[1] = closure_4(View, obj4);
          obj3.children = items;
          const tmp19 = closure_6(closure_5, obj3);
          cResult[6] = tmp4.container;
          cResult[7] = cResult[3];
          cResult[8] = tmp19;
          tmp14 = tmp19;
        }
      }
      if (cResult[4] !== guildId) {
        const fn = function v(type, arg1) {
          type = type.type;
          if ("singlePerk" === type) {
            const obj2 = { guildId, powerup: null, badge: null };
            ({ powerup: obj3.powerup, badge: obj3.badge } = type);
            return React4(GuildPowerupsSinglePerkCardDefault, obj2, type.powerup.skuId);
          } else if ("multiPerk" === type) {
            const obj5 = { guildId, listing: type };
            const _HermesInternal2 = HermesInternal;
            return React4(GuildPowerupsMultiPerkCardDefault, obj5, "" + type.group + "-" + arg1);
          } else if ("gameServer" === type) {
            const obj = { guildId };
            const _HermesInternal = HermesInternal;
            return React4(GuildPowerupsGameServerCardDefault, obj, "game-server-" + arg1);
          } else {
            return null;
          }
        };
        cResult[4] = guildId;
        cResult[5] = fn;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[5];
      }
      const mapped = listings.map(tmp12);
      cResult[1] = guildId;
      cResult[2] = listings;
      cResult[3] = mapped;
      let obj = guildId(576);
    }
  : (arg0) => {
      ({ guildId: require, listings } = arg0);
      let obj = { children: null };
      let obj2 = { title: null, description: null };
      const tmp = closure_7();
      const intl = util.intl;
      obj2.title = intl.string(_modDef2525.TV3Vm8);
      const intl2 = util.intl;
      obj2.description = intl2.string(_modDef2525.STx9hp);
      const items = [closure_4(GuildPowerupsSectionHeaderDefault, obj2)];
      items[1] = closure_4(View, {
        style: tmp.container,
        children: listings.map((type, index) => {
          type = type.type;
          if ("singlePerk" === type) {
            const obj2 = { guildId, powerup: null, badge: null };
            ({ powerup: obj3.powerup, badge: obj3.badge } = type);
            return React4(GuildPowerupsSinglePerkCardDefault, obj2, type.powerup.skuId);
          } else if ("multiPerk" === type) {
            const obj5 = { guildId, listing: type };
            const _HermesInternal2 = HermesInternal;
            return React4(GuildPowerupsMultiPerkCardDefault, obj5, "" + type.group + "-" + index);
          } else if ("gameServer" === type) {
            const obj = { guildId };
            const _HermesInternal = HermesInternal;
            return React4(GuildPowerupsGameServerCardDefault, obj, "game-server-" + index);
          } else {
            return null;
          }
        }),
      });
      obj.children = items;
      return closure_6(closure_5, obj);
    };
