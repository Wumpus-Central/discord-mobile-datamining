// discord_app/modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import noop from "../../../../_runtime/00019_noop.js";
import handleConnectionOpen from "../../../stores/SelectedGuildStore.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

noop.useCallback;
let result = obj132.fileFinishedImporting("modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx");

export default function useToggleDismissibleContentDismissState(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER) {
  const _require = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  obj = { cooldownDurationMs: stateFromStores(687).Millis.WEEK, guildId: stateFromStores };
  let result = require("../DismissibleContentUnsafeUtils.tsx").useIsDismissibleContentDismissed_UNSAFE(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj);
  dependencyMap = result;
  const items1 = [APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores, result];
  obj = {
    isDismissed: result,
    handleToggleDismissState: useCallback(() => {
      let obj = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
      let result1 = result;
      if (obj2.isVersionedDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
        let objResult = obj(result1[3]);
        const versionedDismissibleContentCurrentVersion = objResult.getVersionedDismissibleContentCurrentVersion(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
        objResult = obj(result1[4]);
        const nextNumTimesDismissed = objResult.getNextNumTimesDismissed(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, {});
        let tmp58 = null;
        if (!closure_2) {
          tmp58 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
        }
        result = obj(result1[2]).overrideDCFLastDCDismissed(tmp58, undefined);
        if (closure_2) {
          obj = obj(result1[5]);
          result1 = obj.removeDismissedRecurringContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
          let flag10 = false;
        } else {
          const result2 = obj(result1[4]).addVersionedDismissedContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, versionedDismissibleContentCurrentVersion, nextNumTimesDismissed);
          flag10 = true;
          const objResult2 = obj(result1[4]);
        }
        const objResult1 = obj(result1[2]);
      } else {
        if (objResult3.isSnowflakeBoundDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
          const nextNumTimesDismissed1 = obj(result1[4]).getNextNumTimesDismissed(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, {});
          const objResult4 = obj(result1[4]);
          let tmp47 = null;
          if (!closure_2) {
            tmp47 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
          }
          const result3 = obj(result1[2]).overrideDCFLastDCDismissed(tmp47, undefined);
          if (closure_2) {
            const result4 = obj(result1[5]).removeDismissedRecurringContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
            let flag9 = false;
            const objResult6 = obj(result1[5]);
          } else {
            const objResult7 = obj(result1[4]);
            const _Date2 = Date;
            const timestamp = Date.now();
            const result5 = objResult7.addSnowflakeBoundDismissedContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores(result1[6]).fromTimestamp(timestamp + obj(result1[4]).SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), nextNumTimesDismissed1);
            flag9 = true;
            const obj27 = stateFromStores(result1[6]);
          }
          const objResult5 = obj(result1[2]);
        } else {
          if (objResult8.isTimeRecurringDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
            let tmp40 = null;
            if (!closure_2) {
              tmp40 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
            }
            const result6 = obj(result1[2]).overrideDCFLastDCDismissed(tmp40, undefined);
            if (closure_2) {
              const result7 = obj(result1[5]).removeDismissedRecurringContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
              let flag8 = false;
              const objResult10 = obj(result1[5]);
            } else {
              const objResult11 = obj(result1[4]);
              const result8 = objResult11.addTimeRecurringDismissedContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj(result1[4]).getNextNumTimesDismissed(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, {}));
              flag8 = true;
              const objResult12 = obj(result1[4]);
            }
            const objResult9 = obj(result1[2]);
          } else {
            if (objResult13.isSingleUseGuildDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
              if (null == stateFromStores) {
                let flag = false;
              } else {
                let num5 = 1;
                let num6 = 1;
                if (null != stateFromStores) {
                  num6 = obj(result1[4]).getGuildNextNumTimesDismissed(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores);
                  const objResult14 = obj(result1[4]);
                }
                let tmp34 = null;
                if (!closure_2) {
                  tmp34 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
                }
                const result9 = obj(result1[2]).overrideDCFLastDCDismissed(tmp34, stateFromStores);
                const objResult16 = obj(result1[4]);
                if (closure_2) {
                  num5 = num6 - num5;
                  const result10 = objResult16.UNSAFE_removeGuildDismissedContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores, num5);
                  let flag7 = false;
                } else {
                  const result11 = objResult16.UNSAFE_addGuildDismissedContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores, num6);
                  flag7 = true;
                }
                const objResult15 = obj(result1[2]);
              }
            } else {
              if (objResult17.isTimeRecurringGuildDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
                if (null == stateFromStores) {
                  flag = false;
                } else {
                  let num3 = 1;
                  let num4 = 1;
                  if (null != stateFromStores) {
                    num4 = obj(result1[4]).getGuildNextNumTimesDismissed(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores);
                    const objResult18 = obj(result1[4]);
                  }
                  let tmp26 = null;
                  if (!closure_2) {
                    tmp26 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
                  }
                  const result12 = obj(result1[2]).overrideDCFLastDCDismissed(tmp26, stateFromStores);
                  const objResult20 = obj(result1[4]);
                  if (closure_2) {
                    num3 = num4 - num3;
                    const result13 = objResult20.UNSAFE_removeTimeRecurringGuildDismissedContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores, num3);
                    let flag5 = false;
                  } else {
                    const result14 = objResult20.UNSAFE_addTimeRecurringGuildDismissedContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores, num4);
                    flag5 = true;
                  }
                  const objResult19 = obj(result1[2]);
                }
              } else {
                if (objResult21.isSnowflakeBoundGuildDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
                  if (null == stateFromStores) {
                    flag = false;
                  } else {
                    let num = 1;
                    let num2 = 1;
                    if (null != stateFromStores) {
                      num2 = obj(result1[4]).getGuildNextNumTimesDismissed(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores);
                      const objResult22 = obj(result1[4]);
                    }
                    let tmp11 = null;
                    if (!closure_2) {
                      tmp11 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
                    }
                    const result15 = obj(result1[2]).overrideDCFLastDCDismissed(tmp11, stateFromStores);
                    const objResult24 = obj(result1[4]);
                    if (closure_2) {
                      num = num2 - num;
                      const result16 = objResult24.UNSAFE_removeSnowflakeBoundGuildDismissedContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores, num);
                      let flag3 = false;
                    } else {
                      const _Date = Date;
                      const timestamp1 = Date.now();
                      const result17 = objResult24.UNSAFE_addSnowflakeBoundGuildDismissedContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores(result1[6]).fromTimestamp(timestamp1 + obj(result1[4]).SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), stateFromStores, num2);
                      flag3 = true;
                      const obj13 = stateFromStores(result1[6]);
                    }
                    const objResult23 = obj(result1[2]);
                  }
                } else {
                  let tmp4 = null;
                  if (!closure_2) {
                    tmp4 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
                  }
                  const result18 = obj(result1[2]).overrideDCFLastDCDismissed(tmp4, undefined);
                  const objResult26 = obj(result1[5]);
                  if (closure_2) {
                    const result19 = objResult26.removeDismissedContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
                    flag = false;
                  } else {
                    objResult26.addDismissedContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
                    flag = true;
                  }
                  const objResult25 = obj(result1[2]);
                }
                objResult21 = obj(result1[10]);
              }
              objResult17 = obj(result1[10]);
            }
            return flag;
          }
          objResult8 = obj(result1[10]);
        }
        objResult3 = obj(result1[10]);
      }
      obj2 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[10]);
    }, items1)
  };
  return obj;
};