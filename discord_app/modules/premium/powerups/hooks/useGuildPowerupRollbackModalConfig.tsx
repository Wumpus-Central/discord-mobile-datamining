// === Module 12664: useGuildPowerupRollbackModalConfig ===

// Module 12664 (useGuildPowerupRollbackModalConfig)
import util from "util" /* 1115 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import _modDef2429 from "module_2429" /* 2429 */;
import getGuildPowerupFormattedDateStringDefault from "getGuildPowerupFormattedDateString" /* 12652 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1980 */;
import GuildPowerupsStore from "GuildPowerupsStore" /* 4528 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackModalConfig.tsx");

export default function useGuildPowerupRollbackModalConfig(guildId, location) {
  _require = guildId;
  let items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let flag = require("useHasAllocateBoostPermission")(guildId);
  if (flag == null) {
    flag = false;
  }
  let obj = require("initialize");
  const items1 = [GuildPowerupsStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => GuildPowerupsStore.getStateForGuild(closure_0));
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
  const tmpResult = require("initialize");
  if (flag) {
    flag = tmpResult2.useShouldShowFileUploadRollback(guildId, location);
  }
  if (flag) {
    flag = null != stateFromStores;
  }
  const items2 = [flag, tmp5, storeRemovalDate];
  tmpResult2 = require("fileUpload");
  return {
    shouldShow: flag,
    modalConfig: flag.useMemo(() => {
      if (flag) {
        if (null != title) {
          if (null != storeRemovalDate) {
            const tmp6 = getGuildPowerupFormattedDateStringDefault(tmp3);
            const obj = { dismissibleContent: dismissible_content.DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_MODAL, header: null, bodies: null, hasCancelButton: false };
            const intl = util.intl;
            const obj2 = { dateString: tmp6 };
            const _HermesInternal = HermesInternal;
            obj.header = "" + title.title + " " + intl.formatToPlainString(_modDef2429["6e2ry1"], obj2);
            const intl2 = util.intl;
            const obj5 = { startDate: tmp6, endDate: tmp6, perkName: null, boostCount: null };
            ({ title: obj3.perkName, cost: obj3.boostCount } = title);
            const items = [intl2.formatToPlainString(_modDef2429.jd8fki, obj5)];
            obj.bodies = items;
            return obj;
          }
        }
      }
      return null;
    }, items2)
  };
};