// discord_app/modules/premium/powerups/hooks/useDeactivateWarningText.tsx
import noop from "../../../../../_runtime/00019_noop.js";
import handleInviteData from "../../../../stores/GuildMemberCountStore.tsx";
import createGuildRoleRecordFromRust from "../../../../stores/GuildRoleStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/useDeactivateWarningText.tsx");

export default function useDeactivateWarningText(arg0, skuId) {
  const _require = arg0;
  importDefault = skuId;
  let items = [stateFromStores1];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => stateFromStores1.getMemberCount(closure_0));
  const tmp2 = importDefault(stateFromStores[5])(arg0);
  const React = tmp2;
  let obj = _require(stateFromStores[4]);
  const items1 = [closure_6];
  stateFromStores1 = _require(stateFromStores[4]).useStateFromStores(items1, () => {
    const guild = closure_1_6.getGuild(closure_0);
    let vanityURLCode;
    if (guild != null) {
      vanityURLCode = guild.vanityURLCode;
    }
    return null != vanityURLCode;
  });
  let obj2 = _require(stateFromStores[4]);
  const items2 = [stateFromStores2];
  const items3 = [arg0, skuId.skuId, tmp2];
  stateFromStores2 = _require(stateFromStores[4]).useStateFromStores(items2, () => {
    let num = 0;
    if (skuId.skuId === callback(stateFromStores[6]).GUILD_POWERUP_ROLE_COLOR_SKU_ID) {
      num = 0;
      if (null != closure_3) {
        const sortedRoles = stateFromStores2.getSortedRoles(callback);
        num = sortedRoles.reduce((acc, item, index) => {
          const colorStrings = item.colorStrings;
          let secondaryColor;
          if (colorStrings != null) {
            secondaryColor = colorStrings.secondaryColor;
          }
          let sum = acc;
          if (null != secondaryColor) {
            let num = table[item.id];
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
  }, items3);
  const items4 = [skuId, stateFromStores2, stateFromStores, stateFromStores1];
  return React.useMemo(() => {
    skuId = skuId.skuId;
    if (callback(stateFromStores[6]).GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
      if (stateFromStores2 > 0) {
        const intl5 = callback(stateFromStores[7]).intl;
        let obj = { perk: null, memberCount: null };
        obj[0] = tmp.title;
        obj[1] = tmp14;
        let formatToPlainStringResult = intl5.formatToPlainString(skuId(stateFromStores[8])["4jSvr1"], obj);
      } else {
        const intl4 = callback(stateFromStores[7]).intl;
        obj = { perk: null };
        obj[0] = tmp.title;
        formatToPlainStringResult = intl4.formatToPlainString(skuId(stateFromStores[8]).cavtEo, obj);
      }
    } else {
      if (callback(stateFromStores[6]).VANITY_URL_POWERUP_SKU_ID === skuId) {
        const intl3 = callback(stateFromStores[7]).intl;
        const string = intl3.string;
        const tmp11 = skuId(stateFromStores[8]);
        if (stateFromStores1) {
          let stringResult = string(tmp11.hN75yb);
          let tmp13 = tmp10;
        } else {
          stringResult = string(tmp11.Du91Rb);
          tmp13 = tmp10;
        }
        let tmp7 = tmp13;
        let formatToPlainStringResult1 = stringResult;
      } else {
        if (callback(stateFromStores[6]).GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID !== skuId) {
          if (callback(stateFromStores[6]).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID !== skuId) {
            if (callback(stateFromStores[6]).GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID !== skuId) {
              if (callback(stateFromStores[6]).GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID !== skuId) {
                const intl = callback(stateFromStores[7]).intl;
                obj = { perk: null, memberCount: null };
                obj[0] = tmp.title;
                let num = stateFromStores;
                if (stateFromStores == null) {
                  num = 0;
                }
                obj[1] = num;
                formatToPlainStringResult1 = intl.formatToPlainString(skuId(stateFromStores[8])["4jSvr1"], obj);
                tmp7 = skuId;
              }
            }
          }
        }
        const intl2 = callback(stateFromStores[7]).intl;
        formatToPlainStringResult1 = intl2.string(skuId(stateFromStores[8]).Vf2ZcR);
        tmp7 = skuId;
      }
      obj1 = { text: null, critical: null };
      obj1[0] = formatToPlainStringResult1;
      obj1[1] = tmp.skuId === callback(stateFromStores[6]).VANITY_URL_POWERUP_SKU_ID;
      const items = [obj1];
      let tmp20 = stateFromStores1;
      if (stateFromStores1) {
        tmp20 = tmp.skuId === callback(stateFromStores[6]).GUILD_POWERUP_LEVEL_3_SKU_ID;
      }
      if (tmp20) {
        const obj2 = { text: null, critical: true };
        const intl6 = callback(stateFromStores[7]).intl;
        obj2[0] = intl6.string(tmp7(stateFromStores[8]).M4XL5n);
        items.push(obj2);
      }
      return items;
    }
  }, items4);
};