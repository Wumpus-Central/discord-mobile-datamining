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
        const versionedDismissibleContentCurrentVersion = objResult.getVersionedDismissibleContentCurrentVersion(closure_0);
        objResult = DismissibleContentUtils;
        const nextNumTimesDismissed = objResult.getNextNumTimesDismissed(closure_0, {});
        let tmp58 = null;
        if (!result) {
          tmp58 = closure_0;
        }
        result = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp58, undefined);
        if (tmp55) {
          obj = UserSettingsProtoActionCreators;
          result1 = obj.removeDismissedRecurringContent(closure_0);
          let flag10 = false;
        } else {
          const result2 = DismissibleContentUtils.addVersionedDismissedContent(closure_0, versionedDismissibleContentCurrentVersion, nextNumTimesDismissed);
          flag10 = true;
          const objResult2 = DismissibleContentUtils;
        }
        const objResult1 = DismissibleContentFrameworkActionCreators;
        tmp55 = result;
      } else {
        if (objResult3.isSnowflakeBoundDismissibleContent(closure_0)) {
          const nextNumTimesDismissed1 = DismissibleContentUtils.getNextNumTimesDismissed(closure_0, {});
          const objResult4 = DismissibleContentUtils;
          const tmp45 = result;
          let tmp47 = null;
          if (!result) {
            tmp47 = closure_0;
          }
          const result3 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp47, undefined);
          if (tmp45) {
            const result4 = UserSettingsProtoActionCreators.removeDismissedRecurringContent(closure_0);
            let flag9 = false;
            const objResult6 = UserSettingsProtoActionCreators;
          } else {
            const objResult7 = DismissibleContentUtils;
            const _Date2 = Date;
            const timestamp = Date.now();
            const result5 = objResult7.addSnowflakeBoundDismissedContent(closure_0, SnowflakeUtilsDefault.fromTimestamp(timestamp + DismissibleContentUtils.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), nextNumTimesDismissed1);
            flag9 = true;
          }
          const objResult5 = DismissibleContentFrameworkActionCreators;
        } else {
          if (objResult8.isTimeRecurringDismissibleContent(closure_0)) {
            let tmp40 = null;
            if (!result) {
              tmp40 = closure_0;
            }
            const result6 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp40, undefined);
            if (tmp39) {
              const result7 = UserSettingsProtoActionCreators.removeDismissedRecurringContent(closure_0);
              let flag8 = false;
              const objResult10 = UserSettingsProtoActionCreators;
            } else {
              const objResult11 = DismissibleContentUtils;
              const result8 = objResult11.addTimeRecurringDismissedContent(closure_0, DismissibleContentUtils.getNextNumTimesDismissed(closure_0, {}));
              flag8 = true;
              const objResult12 = DismissibleContentUtils;
            }
            const objResult9 = DismissibleContentFrameworkActionCreators;
            tmp39 = result;
          } else {
            if (objResult13.isSingleUseGuildDismissibleContent(closure_0)) {
              if (null == stateFromStores) {
                let flag = false;
              } else {
                let num5 = 1;
                let num6 = 1;
                if (null != stateFromStores) {
                  num6 = DismissibleContentUtils.getGuildNextNumTimesDismissed(closure_0, stateFromStores);
                  const objResult14 = DismissibleContentUtils;
                }
                let tmp34 = null;
                if (!tmp32) {
                  tmp34 = closure_0;
                }
                const result9 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp34, stateFromStores);
                const objResult16 = DismissibleContentUtils;
                if (tmp32) {
                  num5 = num6 - num5;
                  const result10 = objResult16.UNSAFE_removeGuildDismissedContent(closure_0, stateFromStores, num5);
                  let flag7 = false;
                } else {
                  const result11 = objResult16.UNSAFE_addGuildDismissedContent(closure_0, stateFromStores, num6);
                  flag7 = true;
                }
                const objResult15 = DismissibleContentFrameworkActionCreators;
              }
            } else {
              if (objResult17.isTimeRecurringGuildDismissibleContent(closure_0)) {
                if (null == stateFromStores) {
                  flag = false;
                } else {
                  let num3 = 1;
                  let num4 = 1;
                  if (null != stateFromStores) {
                    num4 = DismissibleContentUtils.getGuildNextNumTimesDismissed(closure_0, stateFromStores);
                    const objResult18 = DismissibleContentUtils;
                  }
                  let tmp26 = null;
                  if (!tmp24) {
                    tmp26 = closure_0;
                  }
                  const result12 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp26, stateFromStores);
                  const objResult20 = DismissibleContentUtils;
                  if (tmp24) {
                    num3 = num4 - num3;
                    const result13 = objResult20.UNSAFE_removeTimeRecurringGuildDismissedContent(closure_0, stateFromStores, num3);
                    let flag5 = false;
                  } else {
                    const result14 = objResult20.UNSAFE_addTimeRecurringGuildDismissedContent(closure_0, stateFromStores, num4);
                    flag5 = true;
                  }
                  const objResult19 = DismissibleContentFrameworkActionCreators;
                }
              } else {
                if (objResult21.isSnowflakeBoundGuildDismissibleContent(closure_0)) {
                  if (null == stateFromStores) {
                    flag = false;
                  } else {
                    let num = 1;
                    let num2 = 1;
                    if (null != stateFromStores) {
                      num2 = DismissibleContentUtils.getGuildNextNumTimesDismissed(closure_0, stateFromStores);
                      const objResult22 = DismissibleContentUtils;
                    }
                    let tmp11 = null;
                    if (!tmp9) {
                      tmp11 = closure_0;
                    }
                    const result15 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp11, stateFromStores);
                    const objResult24 = DismissibleContentUtils;
                    if (tmp9) {
                      num = num2 - num;
                      const result16 = objResult24.UNSAFE_removeSnowflakeBoundGuildDismissedContent(closure_0, stateFromStores, num);
                      let flag3 = false;
                    } else {
                      const _Date = Date;
                      const timestamp1 = Date.now();
                      const result17 = objResult24.UNSAFE_addSnowflakeBoundGuildDismissedContent(closure_0, SnowflakeUtilsDefault.fromTimestamp(timestamp1 + DismissibleContentUtils.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), stateFromStores, num2);
                      flag3 = true;
                    }
                    const objResult23 = DismissibleContentFrameworkActionCreators;
                  }
                } else {
                  let tmp4 = null;
                  if (!result) {
                    tmp4 = closure_0;
                  }
                  const result18 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp4, undefined);
                  const objResult26 = UserSettingsProtoActionCreators;
                  if (tmp3) {
                    const result19 = objResult26.removeDismissedContent(closure_0);
                    flag = false;
                  } else {
                    objResult26.addDismissedContent(closure_0);
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
      obj2 = DismissibleContentTypes;
    }, items1)
  };
  return obj;
};