import noop from "noop";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import calculateAppliedBoosts from "calculateAppliedBoosts";

const require = arg1;
const result = require("calculateAppliedBoosts").fileFinishedImporting("modules/premium/powerups/hooks/useGuildPowerupRollbackModalConfig.tsx");

export default function useGuildPowerupRollbackModalConfig(guildId, location) {
  const _require = guildId;
  let obj = _require(storeRemovalDate[3]);
  let items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuild(closure_0));
  let flag = importDefault(storeRemovalDate[4])(guildId);
  if (flag == null) {
    flag = false;
  }
  let tmpResult = tmp(tmp2[3]);
  const items1 = [calculateAppliedBoosts];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => outer1_5.getStateForGuild(closure_0));
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
        if (null != tmp5) {
          if (null != storeRemovalDate) {
            const tmp6 = storeRemovalDate(storeRemovalDate[7])(tmp3);
            let obj = { dismissibleContent: null, header: null, bodies: null, hasCancelButton: false };
            obj[0] = guildId(storeRemovalDate[8]).DismissibleContent.FILE_UPLOAD_POWERUP_ROLLBACK_MODAL;
            const intl = guildId(storeRemovalDate[9]).intl;
            obj = { dateString: null };
            obj[0] = tmp6;
            const _HermesInternal = HermesInternal;
            obj[1] = "" + tmp.title + " " + intl.formatToPlainString(storeRemovalDate(storeRemovalDate[10])["6e2ry1"], obj);
            const intl2 = guildId(storeRemovalDate[9]).intl;
            obj = { startDate: null, endDate: null, perkName: null, boostCount: null };
            obj[0] = tmp6;
            obj[1] = tmp6;
            ({ title: obj3[2], cost: obj3[3] } = tmp);
            const items = [intl2.formatToPlainString(storeRemovalDate(storeRemovalDate[10]).jd8fki, obj)];
            obj[2] = items;
            return obj;
          }
        }
      }
      return null;
    }, items2)
  };
  return obj;
};