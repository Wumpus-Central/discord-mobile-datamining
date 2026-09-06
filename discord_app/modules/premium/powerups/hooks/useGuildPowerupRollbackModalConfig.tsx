// === Module 12512: useGuildPowerupRollbackModalConfig ===

// Module 12512 (useGuildPowerupRollbackModalConfig)
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import _modDef2428 from "module_2428" /* 2428 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 12500 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4449 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackModalConfig.tsx");

export default function useGuildPowerupRollbackModalConfig(guildId, location) {
  _require = guildId;
  let obj = require("initialize");
  let items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let flag = require("useHasAllocateBoostPermission")(guildId);
  if (flag == null) {
    flag = false;
  }
  let tmpResult = tmp(tmp2[3]);
  const items1 = [GuildPowerupsStore];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => GuildPowerupsStore.getStateForGuild(closure_0));
  let tmp5;
  if (stateFromStores1 != null) {
    const allPowerups = stateFromStores1.allPowerups;
    if (allPowerups != null) {
      tmp5 = allPowerups[tmp(undefined, tmp2[5]).GUILD_POWERUP_MAX_FILE_SIZE_250_MB_SKU_ID];
    }
  }
  importDefault = tmp5;
  storeRemovalDate = undefined;
  if (tmp5 != null) {
    storeRemovalDate = tmp5.storeRemovalDate;
  }
  tmpResult = tmp(tmp2[6]);
  if (flag) {
    flag = tmpResult.useShouldShowFileUploadRollback(guildId, location);
  }
  if (flag) {
    flag = null != stateFromStores;
  }
  const items2 = [flag, tmp5, storeRemovalDate];
  obj = {
    shouldShow: flag,
    modalConfig: flag.useMemo(() => {
      if (flag) {
        if (null != title) {
          if (null != storeRemovalDate) {
            const tmp6 = getGuildPowerupFormattedDateStringDefault(tmp3);
            let obj = { dismissibleContent: dismissible_content.DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_MODAL, header: null, bodies: null, hasCancelButton: false };
            const intl = util.intl;
            obj = { dateString: tmp6 };
            const _HermesInternal = HermesInternal;
            obj.header = "" + title.title + " " + intl.formatToPlainString(_modDef2428["6e2ry1"], obj);
            const intl2 = util.intl;
            obj = { startDate: tmp6, endDate: tmp6, perkName: null, boostCount: null };
            ({ title: obj3.perkName, cost: obj3.boostCount } = title);
            const items = [intl2.formatToPlainString(_modDef2428.jd8fki, obj)];
            obj.bodies = items;
            return obj;
          }
        }
      }
      return null;
    }, items2)
  };
  return obj;
};