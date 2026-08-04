import handleConnectionOpen from "handleConnectionOpen";

require("noop").useCallback;
let result = require("handleDCShownToUser").fileFinishedImporting("modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx");

export default function useToggleDismissibleContentDismissState(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER) {
  const _require = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
  let obj = _require(589);
  const items = [handleConnectionOpen];
  const stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  obj = { cooldownDurationMs: stateFromStores(687).Millis.WEEK, guildId: stateFromStores };
  let result = _require(4101).useIsDismissibleContentDismissed_UNSAFE(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj);
  const dependencyMap = result;
  const items1 = [APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores, result];
  obj = {
    isDismissed: result,
    handleToggleDismissState: useCallback(() => {
      let obj = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
      let result1 = result;
      if (obj2.isVersionedDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
        let objResult = obj(result1[3]);
        const versionedDismissibleContentCurrentVersion = objResult.getVersionedDismissibleContentCurrentVersion(tmp2);
        objResult = obj(result1[4]);
        const nextNumTimesDismissed = objResult.getNextNumTimesDismissed(tmp2, {});
        let tmp58 = null;
        if (!closure_2) {
          tmp58 = tmp2;
        }
        result = obj(result1[2]).overrideDCFLastDCDismissed(tmp58, undefined);
        if (tmp55) {
          obj = obj(result1[5]);
          result1 = obj.removeDismissedRecurringContent(tmp2);
          let flag10 = false;
        } else {
          const result2 = obj(result1[4]).addVersionedDismissedContent(tmp2, versionedDismissibleContentCurrentVersion, nextNumTimesDismissed);
          flag10 = true;
          const objResult2 = obj(result1[4]);
        }
        const objResult1 = obj(result1[2]);
        tmp55 = closure_2;
      } else {
        if (objResult3.isSnowflakeBoundDismissibleContent(tmp2)) {
          const nextNumTimesDismissed1 = obj(result1[4]).getNextNumTimesDismissed(tmp2, {});
          const objResult4 = obj(result1[4]);
          const tmp45 = closure_2;
          let tmp47 = null;
          if (!closure_2) {
            tmp47 = tmp2;
          }
          const result3 = obj(result1[2]).overrideDCFLastDCDismissed(tmp47, undefined);
          if (tmp45) {
            const result4 = obj(result1[5]).removeDismissedRecurringContent(tmp2);
            let flag9 = false;
            const objResult6 = obj(result1[5]);
          } else {
            const objResult7 = obj(result1[4]);
            const _Date2 = Date;
            const timestamp = Date.now();
            const result5 = objResult7.addSnowflakeBoundDismissedContent(tmp2, stateFromStores(result1[6]).fromTimestamp(timestamp + obj(result1[4]).SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), nextNumTimesDismissed1);
            flag9 = true;
            const obj27 = stateFromStores(result1[6]);
          }
          const objResult5 = obj(result1[2]);
        } else {
          if (objResult8.isTimeRecurringDismissibleContent(tmp2)) {
            let tmp40 = null;
            if (!closure_2) {
              tmp40 = tmp2;
            }
            const result6 = obj(result1[2]).overrideDCFLastDCDismissed(tmp40, undefined);
            if (tmp39) {
              const result7 = obj(result1[5]).removeDismissedRecurringContent(tmp2);
              let flag8 = false;
              const objResult10 = obj(result1[5]);
            } else {
              const objResult11 = obj(result1[4]);
              const result8 = objResult11.addTimeRecurringDismissedContent(tmp2, obj(result1[4]).getNextNumTimesDismissed(tmp2, {}));
              flag8 = true;
              const objResult12 = obj(result1[4]);
            }
            const objResult9 = obj(result1[2]);
            tmp39 = closure_2;
          } else {
            if (objResult13.isSingleUseGuildDismissibleContent(tmp2)) {
              if (null == stateFromStores) {
                let flag = false;
              } else {
                let num5 = 1;
                let num6 = 1;
                if (null != tmp31) {
                  num6 = obj(result1[4]).getGuildNextNumTimesDismissed(tmp2, tmp31);
                  const objResult14 = obj(result1[4]);
                }
                let tmp34 = null;
                if (!tmp32) {
                  tmp34 = tmp2;
                }
                const result9 = obj(result1[2]).overrideDCFLastDCDismissed(tmp34, tmp31);
                const objResult16 = obj(result1[4]);
                if (tmp32) {
                  num5 = num6 - num5;
                  const result10 = objResult16.UNSAFE_removeGuildDismissedContent(tmp2, tmp31, num5);
                  let flag7 = false;
                } else {
                  const result11 = objResult16.UNSAFE_addGuildDismissedContent(tmp2, tmp31, num6);
                  flag7 = true;
                }
                const objResult15 = obj(result1[2]);
              }
            } else {
              if (objResult17.isTimeRecurringGuildDismissibleContent(tmp2)) {
                if (null == stateFromStores) {
                  flag = false;
                } else {
                  let num3 = 1;
                  let num4 = 1;
                  if (null != tmp23) {
                    num4 = obj(result1[4]).getGuildNextNumTimesDismissed(tmp2, tmp23);
                    const objResult18 = obj(result1[4]);
                  }
                  let tmp26 = null;
                  if (!tmp24) {
                    tmp26 = tmp2;
                  }
                  const result12 = obj(result1[2]).overrideDCFLastDCDismissed(tmp26, tmp23);
                  const objResult20 = obj(result1[4]);
                  if (tmp24) {
                    num3 = num4 - num3;
                    const result13 = objResult20.UNSAFE_removeTimeRecurringGuildDismissedContent(tmp2, tmp23, num3);
                    let flag5 = false;
                  } else {
                    const result14 = objResult20.UNSAFE_addTimeRecurringGuildDismissedContent(tmp2, tmp23, num4);
                    flag5 = true;
                  }
                  const objResult19 = obj(result1[2]);
                }
              } else {
                if (objResult21.isSnowflakeBoundGuildDismissibleContent(tmp2)) {
                  if (null == stateFromStores) {
                    flag = false;
                  } else {
                    let num = 1;
                    let num2 = 1;
                    if (null != tmp8) {
                      num2 = obj(result1[4]).getGuildNextNumTimesDismissed(tmp2, tmp8);
                      const objResult22 = obj(result1[4]);
                    }
                    let tmp11 = null;
                    if (!tmp9) {
                      tmp11 = tmp2;
                    }
                    const result15 = obj(result1[2]).overrideDCFLastDCDismissed(tmp11, tmp8);
                    const objResult24 = obj(result1[4]);
                    if (tmp9) {
                      num = num2 - num;
                      const result16 = objResult24.UNSAFE_removeSnowflakeBoundGuildDismissedContent(tmp2, tmp8, num);
                      let flag3 = false;
                    } else {
                      const _Date = Date;
                      const timestamp1 = Date.now();
                      const result17 = objResult24.UNSAFE_addSnowflakeBoundGuildDismissedContent(tmp2, stateFromStores(result1[6]).fromTimestamp(timestamp1 + obj(result1[4]).SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), tmp8, num2);
                      flag3 = true;
                      const obj13 = stateFromStores(result1[6]);
                    }
                    const objResult23 = obj(result1[2]);
                  }
                } else {
                  let tmp4 = null;
                  if (!closure_2) {
                    tmp4 = tmp2;
                  }
                  const result18 = obj(result1[2]).overrideDCFLastDCDismissed(tmp4, undefined);
                  const objResult26 = obj(result1[5]);
                  if (tmp3) {
                    const result19 = objResult26.removeDismissedContent(tmp2);
                    flag = false;
                  } else {
                    objResult26.addDismissedContent(tmp2);
                    flag = true;
                  }
                  const objResult25 = obj(result1[2]);
                  tmp3 = closure_2;
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
    }, items1)
  };
  return obj;
};