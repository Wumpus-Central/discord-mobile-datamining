// discord_app/modules/premium/powerups/hooks/useDeactivateWarningText.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef2428 from "../GuildPowerups.messages.js";
import Powerups from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberCountStore from "../../../../stores/GuildMemberCountStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useDeactivateWarningText.tsx");

export default function useDeactivateWarningText(arg0, skuId) {
  _require = arg0;
  importDefault = skuId;
  let items = [stateFromStores1];
  stateFromStores = require("initialize").useStateFromStores(items, () =>
    GuildMemberCountStore.getMemberCount(closure_0),
  );
  const tmp2 = require("useGuildRoleMemberCounts")(arg0);
  noop = tmp2;
  let obj = require("initialize");
  const items1 = [GuildStore];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    const guild = GuildStore.getGuild(closure_0);
    let vanityURLCode;
    if (guild != null) {
      vanityURLCode = guild.vanityURLCode;
    }
    return null != vanityURLCode;
  });
  let obj2 = require("initialize");
  const items2 = [stateFromStores2];
  const items3 = [arg0, skuId.skuId, tmp2];
  stateFromStores2 = require("initialize").useStateFromStores(
    items2,
    () => {
      let num = 0;
      if (skuId.skuId === Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID) {
        num = 0;
        if (null != closure_3) {
          const sortedRoles = GuildRoleStore.getSortedRoles(closure_0);
          num = sortedRoles.reduce((acc, colorStrings) => {
            colorStrings = colorStrings.colorStrings;
            let secondaryColor;
            if (colorStrings != null) {
              secondaryColor = colorStrings.secondaryColor;
            }
            let sum = acc;
            if (null != secondaryColor) {
              let num = closure_1_3[colorStrings.id];
              if (num == null) {
                num = 0;
              }
              sum = acc + num;
            }
            return sum;
          }, 0);
        }
      }
      return num;
    },
    items3,
  );
  const items4 = [skuId, stateFromStores2, stateFromStores, stateFromStores1];
  return noop.useMemo(() => {
    skuId = skuId.skuId;
    if (Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      if (stateFromStores2 > 0) {
        const intl5 = util.intl;
        let obj = { perk: tmp.title, memberCount: tmp14 };
        let formatToPlainStringResult = intl5.formatToPlainString(_modDef2428["4jSvr1"], obj);
      } else {
        const intl4 = util.intl;
        obj = { perk: tmp.title };
        formatToPlainStringResult = intl4.formatToPlainString(_modDef2428.cavtEo, obj);
      }
    } else {
      if (Powerups.VANITY_URL_POWERUP_SKU_ID === skuId) {
        const intl3 = util.intl;
        const string = intl3.string;
        const tmp11 = _modDef2428;
        if (stateFromStores1) {
          let stringResult = string(tmp11.hN75yb);
          let tmp13 = importDefault;
        } else {
          stringResult = string(tmp11.Du91Rb);
          tmp13 = importDefault;
        }
        let tmp7 = tmp13;
        let formatToPlainStringResult1 = stringResult;
      } else {
        if (Powerups.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID !== skuId) {
          if (Powerups.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID !== skuId) {
            if (Powerups.GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID !== skuId) {
              if (Powerups.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID !== skuId) {
                const intl = util.intl;
                obj = { perk: tmp.title, memberCount: null };
                let num = stateFromStores;
                if (stateFromStores == null) {
                  num = 0;
                }
                obj.memberCount = num;
                formatToPlainStringResult1 = intl.formatToPlainString(_modDef2428["4jSvr1"], obj);
                tmp7 = importDefault;
              }
            }
          }
        }
        const intl2 = util.intl;
        formatToPlainStringResult1 = intl2.string(_modDef2428.Vf2ZcR);
        tmp7 = importDefault;
      }
      const obj1 = { text: formatToPlainStringResult1, critical: tmp.skuId === Powerups.VANITY_URL_POWERUP_SKU_ID };
      const items = [obj1];
      let tmp20 = stateFromStores1;
      if (stateFromStores1) {
        tmp20 = tmp.skuId === Powerups.GUILD_POWERUP_LEVEL_3_SKU_ID;
      }
      if (tmp20) {
        const obj2 = { text: null, critical: true };
        const intl6 = util.intl;
        obj2.text = intl6.string(tmp7(2428).M4XL5n);
        items.push(obj2);
      }
      return items;
    }
  }, items4);
}
