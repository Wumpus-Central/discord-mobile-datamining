// discord_app/modules/premium/powerups/hooks/useDeactivateWarningText.tsx
import intl7 from "../../../../intl/index.native.tsx";
import _modDef2553 from "../GuildPowerups.messages.js";
import Powerups from "../../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import useGuildRoleMemberCountsDefault from "../../../guild_role_subscriptions/useGuildRoleMemberCounts.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import GuildMemberCountStore from "../../../../stores/GuildMemberCountStore.tsx";
import GuildRoleStore from "../../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault, tmp, tmp3, tmp4, vanityURLCode;

let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, skuId) => {
      let closure_0;
      let closure_2;
      let first;
      let tmp9;
      _require = arg0;
      importDefault = skuId;
      const obj = require("react");
      const cResult = obj.c(29);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildMemberCountStore];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class S {
          constructor() {
            return closure_4.getMemberCount(closure_0);
          }
        }
        cResult[1] = arg0;
        cResult[2] = S;
      } else {
        class S {
          constructor() {
            return closure_4.getMemberCount(closure_0);
          }
        }
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, S);
      const tmp8 = useGuildRoleMemberCountsDefault(arg0);
      dependencyMap = tmp8;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_4.getMemberCount(closure_0);
          }
        }
        const items1 = [GuildStore];
        cResult[3] = items1;
        tmp9 = items1;
      } else {
        class S {
          constructor() {
            return closure_4.getMemberCount(closure_0);
          }
        }
      }
      if (cResult[4] !== arg0) {
        class U {
          constructor() {
            guild = closure_6.getGuild(closure_0);
            vanityURLCode = undefined;
            if (guild != null) {
              vanityURLCode = guild.vanityURLCode;
            }
            return null != vanityURLCode;
          }
        }
        cResult[4] = arg0;
        cResult[5] = U;
      } else {
        class U {
          constructor() {
            guild = closure_6.getGuild(closure_0);
            vanityURLCode = undefined;
            if (guild != null) {
              vanityURLCode = guild.vanityURLCode;
            }
            return null != vanityURLCode;
          }
        }
      }
      const tmpResult2 = require("get initialized");
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, U);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            guild = closure_6.getGuild(closure_0);
            vanityURLCode = undefined;
            if (guild != null) {
              vanityURLCode = guild.vanityURLCode;
            }
            return null != vanityURLCode;
          }
        }
        const items2 = [GuildRoleStore];
        cResult[6] = items2;
      } else {
        class U {
          constructor() {
            guild = closure_6.getGuild(closure_0);
            vanityURLCode = undefined;
            if (guild != null) {
              vanityURLCode = guild.vanityURLCode;
            }
            return null != vanityURLCode;
          }
        }
      }
      if (cResult[7] === arg0) {
        class U {
          constructor() {
            guild = closure_6.getGuild(closure_0);
            vanityURLCode = undefined;
            if (guild != null) {
              vanityURLCode = guild.vanityURLCode;
            }
            return null != vanityURLCode;
          }
        }
      }
      class D {
        constructor() {
          num = 0;
          if (closure_1.skuId === closure_0(closure_2[8]).GUILD_POWERUP_ROLE_COLOR_SKU_ID) {
            tmp = closure_2;
            tmp2 = null;
            num = 0;
            if (null != closure_2) {
              tmp3 = closure_5;
              tmp4 = closure_0;
              sortedRoles = closure_5.getSortedRoles(closure_0);
              num = sortedRoles.reduce(() => {
                /* body not rendered: F142550 */
              }, 0);
            }
          }
          return num;
        }
      }
      const items3 = [arg0, skuId.skuId, tmp8];
      cResult[7] = arg0;
      cResult[8] = skuId.skuId;
      cResult[9] = tmp8;
      cResult[10] = D;
      cResult[11] = items3;
    }
  : (arg0, skuId) => {
      let closure_0;
      let closure_3;
      let stateFromStores;
      let stateFromStores1;
      let stateFromStores2;
      _require = arg0;
      importDefault = skuId;
      let obj = require("get initialized");
      let items = [stateFromStores1];
      stateFromStores = obj.useStateFromStores(items, () => GuildMemberCountStore.getMemberCount(closure_0));
      const tmp2 = require("useGuildRoleMemberCounts")(arg0);
      react = tmp2;
      let obj2 = require("get initialized");
      const items1 = [GuildStore];
      stateFromStores1 = obj2.useStateFromStores(items1, () => {
        const guild = GuildStore.getGuild(closure_0);
        vanityURLCode = undefined;
        if (guild != null) {
          vanityURLCode = guild.vanityURLCode;
        }
        return null != vanityURLCode;
      });
      let obj3 = require("get initialized");
      const items2 = [stateFromStores2];
      const items3 = [arg0, skuId.skuId, tmp2];
      stateFromStores2 = obj3.useStateFromStores(
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
      return react.useMemo(() => {
        let formatToPlainStringResult1;
        let intl6;
        let num;
        let tmp8;
        skuId = skuId.skuId;
        if (Powerups.GUILD_POWERUP_ROLE_COLOR_SKU_ID === skuId) {
          let formatToPlainStringResult;
          let tmp16;
          if (stateFromStores2 > 0) {
            const intl5 = intl7.intl;
            const obj2 = { perk: skuId.title, memberCount: tmp15 };
            formatToPlainStringResult = intl5.formatToPlainString(_modDef2553["4jSvr1"], obj2);
            tmp16 = importDefault;
          } else {
            const intl4 = intl7.intl;
            tmp16 = importDefault;
            const obj3 = { perk: skuId.title };
            formatToPlainStringResult = intl4.formatToPlainString(_modDef2553.cavtEo, obj3);
          }
          tmp8 = tmp16;
          formatToPlainStringResult1 = formatToPlainStringResult;
        } else if (Powerups.VANITY_URL_POWERUP_SKU_ID === skuId) {
          let stringResult;
          let tmp14;
          const intl3 = intl7.intl;
          const string = intl3.string;
          const tmp12 = _modDef2553;
          if (stateFromStores1) {
            stringResult = string(tmp12.hN75yb);
            tmp14 = importDefault;
          } else {
            stringResult = string(tmp12.Du91Rb);
            tmp14 = importDefault;
          }
          tmp8 = tmp14;
          formatToPlainStringResult1 = stringResult;
        } else {
          if (Powerups.GUILD_TAGS_BADGE_PACK_PETS_POWERUP_SKU_ID !== skuId) {
            if (Powerups.GUILD_TAGS_BADGE_PACK_FLEX_POWERUP_SKU_ID !== skuId) {
              if (Powerups.GUILD_TAGS_BADGE_PACK_PLANT_POWERUP_SKU_ID !== skuId) {
                if (Powerups.GUILD_TAGS_BADGE_PACK_CREEPY_CRAWLIES_POWERUP_SKU_ID !== skuId) {
                  const intl = intl7.intl;
                  const formatToPlainString = intl.formatToPlainString;
                  const obj = { perk: skuId.title, memberCount: num };
                  num = stateFromStores;
                  const v4jSvr1 = _modDef2553["4jSvr1"];
                  if (stateFromStores == null) {
                    num = 0;
                  }
                  formatToPlainStringResult1 = formatToPlainString(v4jSvr1, obj);
                  tmp8 = importDefault;
                }
              }
            }
          }
          const intl2 = intl7.intl;
          formatToPlainStringResult1 = intl2.string(_modDef2553.Vf2ZcR);
          tmp8 = importDefault;
        }
        const items = [
          { text: formatToPlainStringResult1, critical: skuId.skuId === Powerups.VANITY_URL_POWERUP_SKU_ID },
        ];
        let tmp19 = stateFromStores1;
        ({ text: formatToPlainStringResult1, critical: skuId.skuId === Powerups.VANITY_URL_POWERUP_SKU_ID });
        if (tmp19) {
          tmp19 = tmp.skuId === Powerups.GUILD_POWERUP_LEVEL_3_SKU_ID;
        }
        if (tmp19) {
          const push = items.push;
          const obj5 = { text: intl6.string(tmp8(2553).M4XL5n), critical: true };
          intl6 = intl7.intl;
          push(obj5);
        }
        return items;
      }, items4);
    };
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useDeactivateWarningText.tsx");

export default tmp2;
