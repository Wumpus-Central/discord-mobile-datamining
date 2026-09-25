// === Module 11990: useGuildPowerupRollbackModalConfig ===

// Module 11990 (useGuildPowerupRollbackModalConfig)
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 2028 */;
import _modDef2518 from "module_2518" /* 2518 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 11976 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4719 */;

const require = globalThis.__r;

require = fn;
function getGuildThemeRollbackModalConfig(storeRemovalDate) {
  if (storeRemovalDate != null) {
    storeRemovalDate = storeRemovalDate.storeRemovalDate;
  }
  if (null != storeRemovalDate) {
    if (null != storeRemovalDate) {
      const tmp3 = getGuildPowerupFormattedDateStringDefault(storeRemovalDate);
      const obj = { dismissibleContent: dismissible_content.DismissibleContent.GUILD_THEME_POWERUP_ROLLBACK_MODAL, header: null, bodies: null, hasCancelButton: false };
      const intl = util.intl;
      const obj2 = { dateString: tmp3 };
      const _HermesInternal = HermesInternal;
      obj.header = "" + storeRemovalDate.title + " " + intl.formatToPlainString(_modDef2518["6e2ry1"], obj2);
      const intl2 = util.intl;
      const obj5 = { startDate: tmp3, endDate: tmp3, perkName: null, boostCount: null };
      ({ title: obj3.perkName, cost: obj3.boostCount } = storeRemovalDate);
      const items = [intl2.formatToPlainString(_modDef2518.jd8fki, obj5)];
      obj.bodies = items;
      return obj;
    }
  }
  return null;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackModalConfig.tsx");

export default function useGuildPowerupRollbackModalConfig(guildId, useGuildPowerupNewPerkMarketingVersion) {
  _require = guildId;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  flag = require("useHasAllocateBoostPermission")(guildId);
  if (flag == null) {
    flag = false;
  }
  const obj = require("initialize");
  const items1 = [GuildPowerupsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => GuildPowerupsStore.getStateForGuild(closure_0));
  let tmp5;
  if (stateFromStores1 != null) {
    const allPowerups = stateFromStores1.allPowerups;
    if (allPowerups != null) {
      tmp5 = allPowerups[tmp(undefined, tmp2[9]).GUILD_POWERUP_GUILD_THEME_SKU_ID];
    }
  }
  importDefault = tmp5;
  const tmpResult = require("initialize");
  if (flag) {
    flag = tmpResult2.useShouldShowGuildThemeRollback(guildId, useGuildPowerupNewPerkMarketingVersion);
  }
  if (flag) {
    flag = null != stateFromStores;
  }
  const items2 = [flag, tmp5];
  tmpResult2 = require("guildTheme");
  return {
    shouldShow: flag,
    modalConfig: noop.useMemo(() => {
      let tmp = null;
      if (flag) {
        tmp = getGuildThemeRollbackModalConfig(closure_1);
      }
      return tmp;
    }, items2)
  };
};
export { getGuildThemeRollbackModalConfig };