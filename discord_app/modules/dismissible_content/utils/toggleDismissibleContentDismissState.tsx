// discord_app/modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserSettingsProtoActionCreators from "../../user_settings/UserSettingsProtoActionCreators.tsx";
import DismissibleContentUtils from "../DismissibleContentUtils.tsx";
import DismissibleContentTypes from "../DismissibleContentTypes.tsx";
import VersionedDismissibleContentUtils from "../VersionedDismissibleContentUtils.tsx";
import DismissibleContentFrameworkActionCreators from "../DismissibleContentFrameworkActionCreators.tsx";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const useCallback = react.useCallback;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let guildId;
      let tmp4;
      let tmp5;
      let tmp8;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedGuildStore];
        const fn = function o() {
          return guildId.getGuildId();
        };
        cResult[0] = items;
        let num2 = 1;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const obj2 = { cooldownDurationMs: stateFromStores(1102).Millis.WEEK, guildId: stateFromStores };
        cResult[2] = stateFromStores;
        let num4 = 3;
        cResult[3] = obj2;
        tmp8 = obj2;
      } else {
        tmp8 = cResult[3];
      }
      const tmpResult2 = require("DismissibleContentUnsafeUtils");
      const result = tmpResult2.useIsDismissibleContentDismissed_UNSAFE(arg0, tmp8);
      dependencyMap = result;
      if (cResult[4] === arg0) {
        if (cResult[5] === stateFromStores) {
          let tmp11;
          if (cResult[6] === result) {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp11) {
            let tmp12;
            if (cResult[9] === result) {
              tmp12 = cResult[10];
            }
            return tmp12;
          }
          const obj3 = { isDismissed: result, handleToggleDismissState: tmp11 };
          cResult[8] = tmp11;
          let num6 = 9;
          cResult[9] = result;
          cResult[10] = obj3;
          tmp12 = obj3;
        }
      }
      class C {
        constructor() {
          let flag;
          const obj = DismissibleContentTypes;
          if (obj.isVersionedDismissibleContent(closure_0)) {
            let flag10;
            const tmpResult = VersionedDismissibleContentUtils;
            const versionedDismissibleContentCurrentVersion =
              tmpResult.getVersionedDismissibleContentCurrentVersion(closure_0);
            const tmpResult29 = DismissibleContentUtils;
            const nextNumTimesDismissed = tmpResult29.getNextNumTimesDismissed(closure_0, {});
            let tmp65 = null;
            const overrideDCFLastDCDismissed7 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
            DismissibleContentFrameworkActionCreators;
            const tmp61 = dependencyMap;
            if (!dependencyMap) {
              tmp65 = closure_0;
            }
            dependencyMap = overrideDCFLastDCDismissed7(tmp65, undefined);
            if (tmp61) {
              const tmpResult31 = UserSettingsProtoActionCreators;
              const result1 = tmpResult31.removeDismissedRecurringContent(closure_0);
              flag10 = false;
            } else {
              const tmpResult32 = DismissibleContentUtils;
              const result2 = tmpResult32.addVersionedDismissedContent(
                closure_0,
                versionedDismissibleContentCurrentVersion,
                nextNumTimesDismissed,
              );
              flag10 = true;
            }
            flag = flag10;
          } else {
            const tmpResult33 = DismissibleContentTypes;
            if (tmpResult33.isSnowflakeBoundDismissibleContent(closure_0)) {
              let flag9;
              const tmpResult34 = DismissibleContentUtils;
              const nextNumTimesDismissed1 = tmpResult34.getNextNumTimesDismissed(closure_0, {});
              let tmp52 = null;
              const overrideDCFLastDCDismissed6 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
              DismissibleContentFrameworkActionCreators;
              const tmp49 = dependencyMap;
              if (!dependencyMap) {
                tmp52 = closure_0;
              }
              const result3 = overrideDCFLastDCDismissed6(tmp52, undefined);
              if (tmp49) {
                const tmpResult36 = UserSettingsProtoActionCreators;
                const result4 = tmpResult36.removeDismissedRecurringContent(closure_0);
                flag9 = false;
              } else {
                const addSnowflakeBoundDismissedContent = DismissibleContentUtils.addSnowflakeBoundDismissedContent;
                DismissibleContentUtils;
                const _Date2 = Date;
                const fromTimestamp2 = SnowflakeUtilsDefault.fromTimestamp;
                SnowflakeUtilsDefault;
                const timestamp = Date.now();
                const result5 = addSnowflakeBoundDismissedContent(
                  closure_0,
                  fromTimestamp2(timestamp + DismissibleContentUtils.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS),
                  nextNumTimesDismissed1,
                );
                flag9 = true;
              }
              flag = flag9;
            } else {
              const tmpResult38 = DismissibleContentTypes;
              if (tmpResult38.isTimeRecurringDismissibleContent(closure_0)) {
                let flag8;
                let tmp44 = null;
                const overrideDCFLastDCDismissed5 =
                  DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                DismissibleContentFrameworkActionCreators;
                const tmp42 = dependencyMap;
                if (!dependencyMap) {
                  tmp44 = closure_0;
                }
                const result6 = overrideDCFLastDCDismissed5(tmp44, undefined);
                if (tmp42) {
                  const tmpResult40 = UserSettingsProtoActionCreators;
                  const result7 = tmpResult40.removeDismissedRecurringContent(closure_0);
                  flag8 = false;
                } else {
                  const addTimeRecurringDismissedContent = DismissibleContentUtils.addTimeRecurringDismissedContent;
                  DismissibleContentUtils;
                  const tmpResult42 = DismissibleContentUtils;
                  const result8 = addTimeRecurringDismissedContent(
                    closure_0,
                    tmpResult42.getNextNumTimesDismissed(closure_0, {}),
                  );
                  flag8 = true;
                }
                flag = flag8;
              } else {
                const tmpResult43 = DismissibleContentTypes;
                if (tmpResult43.isSingleUseGuildDismissibleContent(closure_0)) {
                  let flag6 = false;
                  if (null != stateFromStores) {
                    let flag7;
                    let num6 = 1;
                    if (null != stateFromStores) {
                      const tmpResult44 = DismissibleContentUtils;
                      num6 = tmpResult44.getGuildNextNumTimesDismissed(closure_0, stateFromStores);
                    }
                    let tmp38 = null;
                    const overrideDCFLastDCDismissed4 =
                      DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                    DismissibleContentFrameworkActionCreators;
                    if (!dependencyMap) {
                      tmp38 = closure_0;
                    }
                    const result9 = overrideDCFLastDCDismissed4(tmp38, stateFromStores);
                    const tmpResult46 = DismissibleContentUtils;
                    if (dependencyMap) {
                      const result10 = tmpResult46.UNSAFE_removeGuildDismissedContent(
                        closure_0,
                        stateFromStores,
                        num6 - 1,
                      );
                      flag7 = false;
                    } else {
                      const result11 = tmpResult46.UNSAFE_addGuildDismissedContent(closure_0, stateFromStores, num6);
                      flag7 = true;
                    }
                    flag6 = flag7;
                  }
                  flag = flag6;
                } else {
                  const tmpResult47 = DismissibleContentTypes;
                  if (tmpResult47.isTimeRecurringGuildDismissibleContent(closure_0)) {
                    let flag4 = false;
                    if (null != stateFromStores) {
                      let flag5;
                      let num4 = 1;
                      if (null != stateFromStores) {
                        const tmpResult48 = DismissibleContentUtils;
                        num4 = tmpResult48.getGuildNextNumTimesDismissed(closure_0, stateFromStores);
                      }
                      let tmp30 = null;
                      const overrideDCFLastDCDismissed3 =
                        DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                      DismissibleContentFrameworkActionCreators;
                      if (!dependencyMap) {
                        tmp30 = closure_0;
                      }
                      const result12 = overrideDCFLastDCDismissed3(tmp30, stateFromStores);
                      const tmpResult50 = DismissibleContentUtils;
                      if (dependencyMap) {
                        const result13 = tmpResult50.UNSAFE_removeTimeRecurringGuildDismissedContent(
                          closure_0,
                          stateFromStores,
                          num4 - 1,
                        );
                        flag5 = false;
                      } else {
                        const result14 = tmpResult50.UNSAFE_addTimeRecurringGuildDismissedContent(
                          closure_0,
                          stateFromStores,
                          num4,
                        );
                        flag5 = true;
                      }
                      flag4 = flag5;
                    }
                    flag = flag4;
                  } else {
                    const tmpResult51 = DismissibleContentTypes;
                    if (tmpResult51.isSnowflakeBoundGuildDismissibleContent(closure_0)) {
                      let flag2 = false;
                      if (null != stateFromStores) {
                        let flag3;
                        let num2 = 1;
                        if (null != stateFromStores) {
                          const tmpResult52 = DismissibleContentUtils;
                          num2 = tmpResult52.getGuildNextNumTimesDismissed(closure_0, stateFromStores);
                        }
                        let tmp14 = null;
                        const overrideDCFLastDCDismissed2 =
                          DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                        DismissibleContentFrameworkActionCreators;
                        if (!dependencyMap) {
                          tmp14 = closure_0;
                        }
                        const result15 = overrideDCFLastDCDismissed2(tmp14, stateFromStores);
                        const tmpResult54 = DismissibleContentUtils;
                        if (dependencyMap) {
                          const result16 = tmpResult54.UNSAFE_removeSnowflakeBoundGuildDismissedContent(
                            closure_0,
                            stateFromStores,
                            num2 - 1,
                          );
                          flag3 = false;
                        } else {
                          const UNSAFE_addSnowflakeBoundGuildDismissedContent =
                            tmpResult54.UNSAFE_addSnowflakeBoundGuildDismissedContent;
                          const _Date = Date;
                          const fromTimestamp = SnowflakeUtilsDefault.fromTimestamp;
                          SnowflakeUtilsDefault;
                          const timestamp1 = Date.now();
                          const result17 = UNSAFE_addSnowflakeBoundGuildDismissedContent(
                            closure_0,
                            fromTimestamp(
                              timestamp1 + DismissibleContentUtils.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS,
                            ),
                            stateFromStores,
                            num2,
                          );
                          flag3 = true;
                        }
                        flag2 = flag3;
                      }
                      flag = flag2;
                    } else {
                      let tmp6 = null;
                      const overrideDCFLastDCDismissed =
                        DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                      DismissibleContentFrameworkActionCreators;
                      const tmp4 = dependencyMap;
                      if (!dependencyMap) {
                        tmp6 = closure_0;
                      }
                      const result18 = overrideDCFLastDCDismissed(tmp6, undefined);
                      const tmpResult56 = UserSettingsProtoActionCreators;
                      if (tmp4) {
                        const result19 = tmpResult56.removeDismissedContent(closure_0);
                        flag = false;
                      } else {
                        tmpResult56.addDismissedContent(closure_0);
                        flag = true;
                      }
                    }
                  }
                }
              }
            }
          }
          return flag;
        }
      }
      cResult[4] = arg0;
      cResult[5] = stateFromStores;
      cResult[6] = result;
      cResult[7] = C;
      tmp11 = C;
    }
  : (arg0) => {
      let closure_0;
      let guildId;
      _require = arg0;
      let obj = require("get initialized");
      const items = [SelectedGuildStore];
      const stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
      const obj2 = require("DismissibleContentUnsafeUtils");
      const obj3 = { cooldownDurationMs: stateFromStores(1102).Millis.WEEK, guildId: stateFromStores };
      const result = obj2.useIsDismissibleContentDismissed_UNSAFE(arg0, obj3);
      dependencyMap = result;
      const items1 = [arg0, stateFromStores, result];
      const obj4 = {
        isDismissed: result,
        handleToggleDismissState: useCallback(() => {
          let flag;
          const obj = DismissibleContentTypes;
          if (obj.isVersionedDismissibleContent(closure_0)) {
            let flag10;
            const tmpResult = VersionedDismissibleContentUtils;
            const versionedDismissibleContentCurrentVersion =
              tmpResult.getVersionedDismissibleContentCurrentVersion(closure_0);
            const tmpResult29 = DismissibleContentUtils;
            const nextNumTimesDismissed = tmpResult29.getNextNumTimesDismissed(closure_0, {});
            let tmp65 = null;
            const overrideDCFLastDCDismissed7 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
            DismissibleContentFrameworkActionCreators;
            const tmp61 = dependencyMap;
            if (!dependencyMap) {
              tmp65 = closure_0;
            }
            dependencyMap = overrideDCFLastDCDismissed7(tmp65, undefined);
            if (tmp61) {
              const tmpResult31 = UserSettingsProtoActionCreators;
              const result1 = tmpResult31.removeDismissedRecurringContent(closure_0);
              flag10 = false;
            } else {
              const tmpResult32 = DismissibleContentUtils;
              const result2 = tmpResult32.addVersionedDismissedContent(
                closure_0,
                versionedDismissibleContentCurrentVersion,
                nextNumTimesDismissed,
              );
              flag10 = true;
            }
            flag = flag10;
          } else {
            const tmpResult33 = DismissibleContentTypes;
            if (tmpResult33.isSnowflakeBoundDismissibleContent(closure_0)) {
              let flag9;
              const tmpResult34 = DismissibleContentUtils;
              const nextNumTimesDismissed1 = tmpResult34.getNextNumTimesDismissed(closure_0, {});
              let tmp52 = null;
              const overrideDCFLastDCDismissed6 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
              DismissibleContentFrameworkActionCreators;
              const tmp49 = dependencyMap;
              if (!dependencyMap) {
                tmp52 = closure_0;
              }
              const result3 = overrideDCFLastDCDismissed6(tmp52, undefined);
              if (tmp49) {
                const tmpResult36 = UserSettingsProtoActionCreators;
                const result4 = tmpResult36.removeDismissedRecurringContent(closure_0);
                flag9 = false;
              } else {
                const addSnowflakeBoundDismissedContent = DismissibleContentUtils.addSnowflakeBoundDismissedContent;
                DismissibleContentUtils;
                const _Date2 = Date;
                const fromTimestamp2 = SnowflakeUtilsDefault.fromTimestamp;
                SnowflakeUtilsDefault;
                const timestamp = Date.now();
                const result5 = addSnowflakeBoundDismissedContent(
                  closure_0,
                  fromTimestamp2(timestamp + DismissibleContentUtils.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS),
                  nextNumTimesDismissed1,
                );
                flag9 = true;
              }
              flag = flag9;
            } else {
              const tmpResult38 = DismissibleContentTypes;
              if (tmpResult38.isTimeRecurringDismissibleContent(closure_0)) {
                let flag8;
                let tmp44 = null;
                const overrideDCFLastDCDismissed5 =
                  DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                DismissibleContentFrameworkActionCreators;
                const tmp42 = dependencyMap;
                if (!dependencyMap) {
                  tmp44 = closure_0;
                }
                const result6 = overrideDCFLastDCDismissed5(tmp44, undefined);
                if (tmp42) {
                  const tmpResult40 = UserSettingsProtoActionCreators;
                  const result7 = tmpResult40.removeDismissedRecurringContent(closure_0);
                  flag8 = false;
                } else {
                  const addTimeRecurringDismissedContent = DismissibleContentUtils.addTimeRecurringDismissedContent;
                  DismissibleContentUtils;
                  const tmpResult42 = DismissibleContentUtils;
                  const result8 = addTimeRecurringDismissedContent(
                    closure_0,
                    tmpResult42.getNextNumTimesDismissed(closure_0, {}),
                  );
                  flag8 = true;
                }
                flag = flag8;
              } else {
                const tmpResult43 = DismissibleContentTypes;
                if (tmpResult43.isSingleUseGuildDismissibleContent(closure_0)) {
                  let flag6 = false;
                  if (null != stateFromStores) {
                    let flag7;
                    let num6 = 1;
                    if (null != stateFromStores) {
                      const tmpResult44 = DismissibleContentUtils;
                      num6 = tmpResult44.getGuildNextNumTimesDismissed(closure_0, stateFromStores);
                    }
                    let tmp38 = null;
                    const overrideDCFLastDCDismissed4 =
                      DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                    DismissibleContentFrameworkActionCreators;
                    if (!dependencyMap) {
                      tmp38 = closure_0;
                    }
                    const result9 = overrideDCFLastDCDismissed4(tmp38, stateFromStores);
                    const tmpResult46 = DismissibleContentUtils;
                    if (dependencyMap) {
                      const result10 = tmpResult46.UNSAFE_removeGuildDismissedContent(
                        closure_0,
                        stateFromStores,
                        num6 - 1,
                      );
                      flag7 = false;
                    } else {
                      const result11 = tmpResult46.UNSAFE_addGuildDismissedContent(closure_0, stateFromStores, num6);
                      flag7 = true;
                    }
                    flag6 = flag7;
                  }
                  flag = flag6;
                } else {
                  const tmpResult47 = DismissibleContentTypes;
                  if (tmpResult47.isTimeRecurringGuildDismissibleContent(closure_0)) {
                    let flag4 = false;
                    if (null != stateFromStores) {
                      let flag5;
                      let num4 = 1;
                      if (null != stateFromStores) {
                        const tmpResult48 = DismissibleContentUtils;
                        num4 = tmpResult48.getGuildNextNumTimesDismissed(closure_0, stateFromStores);
                      }
                      let tmp30 = null;
                      const overrideDCFLastDCDismissed3 =
                        DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                      DismissibleContentFrameworkActionCreators;
                      if (!dependencyMap) {
                        tmp30 = closure_0;
                      }
                      const result12 = overrideDCFLastDCDismissed3(tmp30, stateFromStores);
                      const tmpResult50 = DismissibleContentUtils;
                      if (dependencyMap) {
                        const result13 = tmpResult50.UNSAFE_removeTimeRecurringGuildDismissedContent(
                          closure_0,
                          stateFromStores,
                          num4 - 1,
                        );
                        flag5 = false;
                      } else {
                        const result14 = tmpResult50.UNSAFE_addTimeRecurringGuildDismissedContent(
                          closure_0,
                          stateFromStores,
                          num4,
                        );
                        flag5 = true;
                      }
                      flag4 = flag5;
                    }
                    flag = flag4;
                  } else {
                    const tmpResult51 = DismissibleContentTypes;
                    if (tmpResult51.isSnowflakeBoundGuildDismissibleContent(closure_0)) {
                      let flag2 = false;
                      if (null != stateFromStores) {
                        let flag3;
                        let num2 = 1;
                        if (null != stateFromStores) {
                          const tmpResult52 = DismissibleContentUtils;
                          num2 = tmpResult52.getGuildNextNumTimesDismissed(closure_0, stateFromStores);
                        }
                        let tmp14 = null;
                        const overrideDCFLastDCDismissed2 =
                          DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                        DismissibleContentFrameworkActionCreators;
                        if (!dependencyMap) {
                          tmp14 = closure_0;
                        }
                        const result15 = overrideDCFLastDCDismissed2(tmp14, stateFromStores);
                        const tmpResult54 = DismissibleContentUtils;
                        if (dependencyMap) {
                          const result16 = tmpResult54.UNSAFE_removeSnowflakeBoundGuildDismissedContent(
                            closure_0,
                            stateFromStores,
                            num2 - 1,
                          );
                          flag3 = false;
                        } else {
                          const UNSAFE_addSnowflakeBoundGuildDismissedContent =
                            tmpResult54.UNSAFE_addSnowflakeBoundGuildDismissedContent;
                          const _Date = Date;
                          const fromTimestamp = SnowflakeUtilsDefault.fromTimestamp;
                          SnowflakeUtilsDefault;
                          const timestamp1 = Date.now();
                          const result17 = UNSAFE_addSnowflakeBoundGuildDismissedContent(
                            closure_0,
                            fromTimestamp(
                              timestamp1 + DismissibleContentUtils.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS,
                            ),
                            stateFromStores,
                            num2,
                          );
                          flag3 = true;
                        }
                        flag2 = flag3;
                      }
                      flag = flag2;
                    } else {
                      let tmp6 = null;
                      const overrideDCFLastDCDismissed =
                        DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                      DismissibleContentFrameworkActionCreators;
                      const tmp4 = dependencyMap;
                      if (!dependencyMap) {
                        tmp6 = closure_0;
                      }
                      const result18 = overrideDCFLastDCDismissed(tmp6, undefined);
                      const tmpResult56 = UserSettingsProtoActionCreators;
                      if (tmp4) {
                        const result19 = tmpResult56.removeDismissedContent(closure_0);
                        flag = false;
                      } else {
                        tmpResult56.addDismissedContent(closure_0);
                        flag = true;
                      }
                    }
                  }
                }
              }
            }
          }
          return flag;
        }, items1),
      };
      return obj4;
    };
let result = size.fileFinishedImporting("modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx");

export default tmp2;
