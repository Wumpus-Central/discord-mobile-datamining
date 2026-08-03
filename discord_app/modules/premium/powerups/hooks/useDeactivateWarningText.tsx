// === Module 11752: useDeactivateWarningText ===

// Module 11752 (useDeactivateWarningText)
import noop from "noop";
import handleInviteData from "handleInviteData";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";

const require = arg1;
const result = require("createGuildRoleRecordFromRust").fileFinishedImporting("modules/premium/powerups/hooks/useDeactivateWarningText.tsx");

export default function useDeactivateWarningText(arg0, skuId) {
  const _require = arg0;
  const importDefault = skuId;
  let items = [stateFromStores1];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => stateFromStores1.getMemberCount(closure_0));
  const tmp2 = importDefault(stateFromStores[5])(arg0);
  const React = tmp2;
  let obj = _require(stateFromStores[4]);
  const items1 = [createGuildRecordFromRust];
  stateFromStores1 = _require(stateFromStores[4]).useStateFromStores(items1, () => {
    const guild = outer1_6.getGuild(closure_0);
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
      if (null != noop) {
        const sortedRoles = stateFromStores2.getSortedRoles(callback);
        num = sortedRoles.reduce((arg0, colorStrings) => {
          colorStrings = colorStrings.colorStrings;
          let secondaryColor;
          if (colorStrings != null) {
            secondaryColor = colorStrings.secondaryColor;
          }
          let sum = arg0;
          if (null != secondaryColor) {
            let num = table[colorStrings.id];
            if (num == null) {
              num = 0;
            }
            sum = arg0 + num;
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
        const intl5 = tmp2(tmp3[7]).intl;
        let obj = { perk: null, memberCount: null };
        obj[0] = tmp.title;
        obj[1] = tmp14;
        let formatToPlainStringResult = intl5.formatToPlainString(skuId(tmp3[8])["4jSvr1"], obj);
        let tmp15 = skuId;
      } else {
        const intl4 = tmp2(tmp3[7]).intl;
        tmp15 = skuId;
        obj = { perk: null };
        obj[0] = tmp.title;
        formatToPlainStringResult = intl4.formatToPlainString(skuId(tmp3[8]).cavtEo, obj);
      }
    } else {
      if (tmp2(tmp3[6]).VANITY_URL_POWERUP_SKU_ID === skuId) {
        const intl3 = tmp2(tmp3[7]).intl;
        const string = intl3.string;
        const tmp11 = skuId(tmp3[8]);
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
        if (tmp2(tmp3[6]).GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID !== skuId) {
          if (tmp2(tmp3[6]).GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID !== skuId) {
            if (tmp2(tmp3[6]).GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID !== skuId) {
              if (tmp2(tmp3[6]).GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID !== skuId) {
                const intl = tmp2(tmp3[7]).intl;
                obj = { perk: null, memberCount: null };
                obj[0] = tmp.title;
                let num = stateFromStores;
                if (stateFromStores == null) {
                  num = 0;
                }
                obj[1] = num;
                formatToPlainStringResult1 = intl.formatToPlainString(skuId(tmp3[8])["4jSvr1"], obj);
                tmp7 = skuId;
                const tmp4 = skuId;
              }
            }
          }
        }
        const intl2 = tmp2(tmp3[7]).intl;
        formatToPlainStringResult1 = intl2.string(skuId(tmp3[8]).Vf2ZcR);
        tmp7 = skuId;
      }
      const obj1 = { text: null, critical: null };
      obj1[0] = formatToPlainStringResult1;
      obj1[1] = tmp.skuId === tmp2(tmp3[6]).VANITY_URL_POWERUP_SKU_ID;
      const items = [obj1];
      let tmp20 = stateFromStores1;
      if (stateFromStores1) {
        tmp20 = tmp.skuId === tmp2(tmp3[6]).GUILD_POWERUP_LEVEL_3_SKU_ID;
      }
      if (tmp20) {
        const obj2 = { text: null, critical: true };
        const intl6 = tmp2(tmp3[7]).intl;
        obj2[0] = intl6.string(tmp7(tmp3[8]).M4XL5n);
        items.push(obj2);
      }
      return items;
    }
  }, items4);
};