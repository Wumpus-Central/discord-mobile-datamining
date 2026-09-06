// === Module 15616: toggleDismissibleContentDismissState ===

// Module 15616 (toggleDismissibleContentDismissState)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _mod19 from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;
import size from "module_2" /* 2 */;

const UserSettingsProtoActionCreators = obj(1940);
const DismissibleContentTypes = obj(1944);
const DismissibleContentUtils = obj(1945);
const VersionedDismissibleContentUtils = obj(1955);
const DismissibleContentFrameworkActionCreators = obj(10237);
_mod19.useCallback;
let result = size.fileFinishedImporting("modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx");

export default function useToggleDismissibleContentDismissState(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER) {
  _require = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
  let obj = require("initialize");
  const items = [SelectedGuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  obj = { cooldownDurationMs: stateFromStores(1090).Millis.WEEK, guildId: stateFromStores };
  let result = require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj);
  dependencyMap = result;
  const items1 = [APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores, result];
  obj = {
    isDismissed: result,
    handleToggleDismissState: useCallback(() => {
      let obj = require;
      let result1 = dependencyMap;
      if (obj2.isVersionedDismissibleContent(closure_0)) {
        let objResult = VersionedDismissibleContentUtils;
        const versionedDismissibleContentCurrentVersion = objResult.getVersionedDismissibleContentCurrentVersion(tmp2);
        objResult = DismissibleContentUtils;
        const nextNumTimesDismissed = objResult.getNextNumTimesDismissed(tmp2, {});
        let tmp58 = null;
        if (!result) {
          tmp58 = tmp2;
        }
        result = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp58, undefined);
        if (tmp55) {
          obj = UserSettingsProtoActionCreators;
          result1 = obj.removeDismissedRecurringContent(tmp2);
          let flag10 = false;
        } else {
          const result2 = DismissibleContentUtils.addVersionedDismissedContent(tmp2, versionedDismissibleContentCurrentVersion, nextNumTimesDismissed);
          flag10 = true;
          const objResult2 = DismissibleContentUtils;
        }
        const objResult1 = DismissibleContentFrameworkActionCreators;
        tmp55 = result;
      } else {
        if (objResult3.isSnowflakeBoundDismissibleContent(tmp2)) {
          const nextNumTimesDismissed1 = DismissibleContentUtils.getNextNumTimesDismissed(tmp2, {});
          const objResult4 = DismissibleContentUtils;
          const tmp45 = result;
          let tmp47 = null;
          if (!result) {
            tmp47 = tmp2;
          }
          const result3 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp47, undefined);
          if (tmp45) {
            const result4 = UserSettingsProtoActionCreators.removeDismissedRecurringContent(tmp2);
            let flag9 = false;
            const objResult6 = UserSettingsProtoActionCreators;
          } else {
            const objResult7 = DismissibleContentUtils;
            const _Date2 = Date;
            const timestamp = Date.now();
            const result5 = objResult7.addSnowflakeBoundDismissedContent(tmp2, SnowflakeUtilsDefault.fromTimestamp(timestamp + DismissibleContentUtils.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), nextNumTimesDismissed1);
            flag9 = true;
          }
          const objResult5 = DismissibleContentFrameworkActionCreators;
        } else {
          if (objResult8.isTimeRecurringDismissibleContent(tmp2)) {
            let tmp40 = null;
            if (!result) {
              tmp40 = tmp2;
            }
            const result6 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp40, undefined);
            if (tmp39) {
              const result7 = UserSettingsProtoActionCreators.removeDismissedRecurringContent(tmp2);
              let flag8 = false;
              const objResult10 = UserSettingsProtoActionCreators;
            } else {
              const objResult11 = DismissibleContentUtils;
              const result8 = objResult11.addTimeRecurringDismissedContent(tmp2, DismissibleContentUtils.getNextNumTimesDismissed(tmp2, {}));
              flag8 = true;
              const objResult12 = DismissibleContentUtils;
            }
            const objResult9 = DismissibleContentFrameworkActionCreators;
            tmp39 = result;
          } else {
            if (objResult13.isSingleUseGuildDismissibleContent(tmp2)) {
              if (null == stateFromStores) {
                let flag = false;
              } else {
                let num5 = 1;
                let num6 = 1;
                if (null != tmp31) {
                  num6 = DismissibleContentUtils.getGuildNextNumTimesDismissed(tmp2, tmp31);
                  const objResult14 = DismissibleContentUtils;
                }
                let tmp34 = null;
                if (!tmp32) {
                  tmp34 = tmp2;
                }
                const result9 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp34, tmp31);
                const objResult16 = DismissibleContentUtils;
                if (tmp32) {
                  num5 = num6 - num5;
                  const result10 = objResult16.UNSAFE_removeGuildDismissedContent(tmp2, tmp31, num5);
                  let flag7 = false;
                } else {
                  const result11 = objResult16.UNSAFE_addGuildDismissedContent(tmp2, tmp31, num6);
                  flag7 = true;
                }
                const objResult15 = DismissibleContentFrameworkActionCreators;
              }
            } else {
              if (objResult17.isTimeRecurringGuildDismissibleContent(tmp2)) {
                if (null == stateFromStores) {
                  flag = false;
                } else {
                  let num3 = 1;
                  let num4 = 1;
                  if (null != tmp23) {
                    num4 = DismissibleContentUtils.getGuildNextNumTimesDismissed(tmp2, tmp23);
                    const objResult18 = DismissibleContentUtils;
                  }
                  let tmp26 = null;
                  if (!tmp24) {
                    tmp26 = tmp2;
                  }
                  const result12 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp26, tmp23);
                  const objResult20 = DismissibleContentUtils;
                  if (tmp24) {
                    num3 = num4 - num3;
                    const result13 = objResult20.UNSAFE_removeTimeRecurringGuildDismissedContent(tmp2, tmp23, num3);
                    let flag5 = false;
                  } else {
                    const result14 = objResult20.UNSAFE_addTimeRecurringGuildDismissedContent(tmp2, tmp23, num4);
                    flag5 = true;
                  }
                  const objResult19 = DismissibleContentFrameworkActionCreators;
                }
              } else {
                if (objResult21.isSnowflakeBoundGuildDismissibleContent(tmp2)) {
                  if (null == stateFromStores) {
                    flag = false;
                  } else {
                    let num = 1;
                    let num2 = 1;
                    if (null != tmp8) {
                      num2 = DismissibleContentUtils.getGuildNextNumTimesDismissed(tmp2, tmp8);
                      const objResult22 = DismissibleContentUtils;
                    }
                    let tmp11 = null;
                    if (!tmp9) {
                      tmp11 = tmp2;
                    }
                    const result15 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp11, tmp8);
                    const objResult24 = DismissibleContentUtils;
                    if (tmp9) {
                      num = num2 - num;
                      const result16 = objResult24.UNSAFE_removeSnowflakeBoundGuildDismissedContent(tmp2, tmp8, num);
                      let flag3 = false;
                    } else {
                      const _Date = Date;
                      const timestamp1 = Date.now();
                      const result17 = objResult24.UNSAFE_addSnowflakeBoundGuildDismissedContent(tmp2, SnowflakeUtilsDefault.fromTimestamp(timestamp1 + DismissibleContentUtils.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), tmp8, num2);
                      flag3 = true;
                    }
                    const objResult23 = DismissibleContentFrameworkActionCreators;
                  }
                } else {
                  let tmp4 = null;
                  if (!result) {
                    tmp4 = tmp2;
                  }
                  const result18 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp4, undefined);
                  const objResult26 = UserSettingsProtoActionCreators;
                  if (tmp3) {
                    const result19 = objResult26.removeDismissedContent(tmp2);
                    flag = false;
                  } else {
                    objResult26.addDismissedContent(tmp2);
                    flag = true;
                  }
                  const objResult25 = DismissibleContentFrameworkActionCreators;
                  tmp3 = result;
                }
                objResult21 = DismissibleContentTypes;
              }
              objResult17 = DismissibleContentTypes;
            }
            return flag;
          }
          objResult8 = DismissibleContentTypes;
        }
        objResult3 = DismissibleContentTypes;
      }
    }, items1)
  };
  return obj;
};