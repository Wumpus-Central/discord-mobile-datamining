// discord_app/modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import _mod19 from "../../../../_runtime/metro/00019__.js";
import SelectedGuildStore from "../../../stores/SelectedGuildStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const UserSettingsProtoActionCreators = obj(2046);
const DismissibleContentUtils = obj(2050);
const DismissibleContentTypes = obj(2056);
const VersionedDismissibleContentUtils = obj(2063);
const DismissibleContentFrameworkActionCreators = obj(10325);
_mod19.useCallback;
let result = size.fileFinishedImporting("modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useToggleDismissibleContentDismissState(arg0) {
      _require = arg0;
      const cResult = require("c").c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SelectedGuildStore];
        const fn = function o() {
          return guildId.getGuildId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        let obj2 = { cooldownDurationMs: stateFromStores(1102).Millis.WEEK, guildId: stateFromStores };
        cResult[2] = stateFromStores;
        cResult[3] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[3];
      }
      const tmpResult = require("initialize");
      let result = require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(arg0, tmp8);
      dependencyMap = result;
      if (cResult[4] === arg0) {
        if (cResult[5] === stateFromStores) {
          if (cResult[6] === result) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === tmp11) {
            if (cResult[9] === result) {
              let tmp12 = cResult[10];
            }
            return tmp12;
          }
          const obj3 = { isDismissed: result, handleToggleDismissState: tmp11 };
          cResult[8] = tmp11;
          cResult[9] = result;
          cResult[10] = obj3;
          tmp12 = obj3;
        }
      }
      class C {
        constructor() {
          obj = closure_0;
          result1 = closure_2;
          obj2 = closure_0(closure_2[12]);
          tmp2 = closure_0;
          if (obj2.isVersionedDismissibleContent(closure_0)) {
            tmp55 = closure_2;
            objResult = obj(result1[3]);
            versionedDismissibleContentCurrentVersion = objResult.getVersionedDismissibleContentCurrentVersion(tmp2);
            objResult1 = obj(result1[4]);
            nextNumTimesDismissed = objResult1.getNextNumTimesDismissed(tmp2, {});
            objResult2 = obj(result1[2]);
            tmp58 = null;
            if (!closure_2) {
              tmp58 = tmp2;
            }
            result = objResult2.overrideDCFLastDCDismissed(tmp58, undefined);
            if (tmp55) {
              obj = obj(result1[5]);
              result1 = obj.removeDismissedRecurringContent(tmp2);
              flag10 = false;
            } else {
              objResult3 = obj(result1[4]);
              result2 = objResult3.addVersionedDismissedContent(
                tmp2,
                versionedDismissibleContentCurrentVersion,
                nextNumTimesDismissed,
              );
              flag10 = true;
            }
            tmp61 = flag10;
          } else {
            objResult4 = obj(result1[12]);
            if (objResult4.isSnowflakeBoundDismissibleContent(tmp2)) {
              tmp45 = closure_2;
              objResult5 = obj(result1[4]);
              nextNumTimesDismissed1 = objResult5.getNextNumTimesDismissed(tmp2, {});
              objResult6 = obj(result1[2]);
              tmp47 = null;
              if (!closure_2) {
                tmp47 = tmp2;
              }
              result3 = objResult6.overrideDCFLastDCDismissed(tmp47, undefined);
              if (tmp45) {
                objResult7 = obj(result1[5]);
                result4 = objResult7.removeDismissedRecurringContent(tmp2);
                flag9 = false;
              } else {
                objResult8 = obj(result1[4]);
                tmp49 = closure_1;
                obj27 = closure_1(result1[6]);
                tmp50 = globalThis;
                _Date2 = Date;
                timestamp = Date.now();
                result5 = objResult8.addSnowflakeBoundDismissedContent(
                  tmp2,
                  obj27.fromTimestamp(timestamp + obj(result1[4]).SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS),
                  nextNumTimesDismissed1,
                );
                flag9 = true;
              }
              tmp54 = flag9;
            } else {
              objResult9 = obj(result1[12]);
              if (objResult9.isTimeRecurringDismissibleContent(tmp2)) {
                tmp39 = closure_2;
                objResult10 = obj(result1[2]);
                tmp40 = null;
                if (!closure_2) {
                  tmp40 = tmp2;
                }
                result6 = objResult10.overrideDCFLastDCDismissed(tmp40, undefined);
                if (tmp39) {
                  objResult11 = obj(result1[5]);
                  result7 = objResult11.removeDismissedRecurringContent(tmp2);
                  flag8 = false;
                } else {
                  objResult12 = obj(result1[4]);
                  objResult13 = obj(result1[4]);
                  result8 = objResult12.addTimeRecurringDismissedContent(
                    tmp2,
                    objResult13.getNextNumTimesDismissed(tmp2, {}),
                  );
                  flag8 = true;
                }
                tmp44 = flag8;
              } else {
                objResult14 = obj(result1[12]);
                if (objResult14.isSingleUseGuildDismissibleContent(tmp2)) {
                  tmp31 = closure_1;
                  tmp32 = closure_2;
                  tmp33 = null;
                  flag6 = false;
                  if (null == closure_1) {
                    flag = false;
                  } else {
                    num5 = 1;
                    num6 = 1;
                    if (null != tmp31) {
                      objResult15 = obj(result1[4]);
                      num6 = objResult15.getGuildNextNumTimesDismissed(tmp2, tmp31);
                    }
                    objResult16 = obj(result1[2]);
                    tmp34 = null;
                    if (!tmp32) {
                      tmp34 = tmp2;
                    }
                    result9 = objResult16.overrideDCFLastDCDismissed(tmp34, tmp31);
                    objResult17 = obj(result1[4]);
                    if (tmp32) {
                      num5 = num6 - num5;
                      result10 = objResult17.UNSAFE_removeGuildDismissedContent(tmp2, tmp31, num5);
                      flag7 = false;
                    } else {
                      result11 = objResult17.UNSAFE_addGuildDismissedContent(tmp2, tmp31, num6);
                      flag7 = true;
                    }
                    tmp38 = flag7;
                  }
                } else {
                  objResult18 = obj(result1[12]);
                  if (objResult18.isTimeRecurringGuildDismissibleContent(tmp2)) {
                    tmp23 = closure_1;
                    tmp24 = closure_2;
                    tmp25 = null;
                    flag4 = false;
                    if (null == closure_1) {
                      flag = false;
                    } else {
                      num3 = 1;
                      num4 = 1;
                      if (null != tmp23) {
                        objResult19 = obj(result1[4]);
                        num4 = objResult19.getGuildNextNumTimesDismissed(tmp2, tmp23);
                      }
                      objResult20 = obj(result1[2]);
                      tmp26 = null;
                      if (!tmp24) {
                        tmp26 = tmp2;
                      }
                      result12 = objResult20.overrideDCFLastDCDismissed(tmp26, tmp23);
                      objResult21 = obj(result1[4]);
                      if (tmp24) {
                        num3 = num4 - num3;
                        result13 = objResult21.UNSAFE_removeTimeRecurringGuildDismissedContent(tmp2, tmp23, num3);
                        flag5 = false;
                      } else {
                        result14 = objResult21.UNSAFE_addTimeRecurringGuildDismissedContent(tmp2, tmp23, num4);
                        flag5 = true;
                      }
                      tmp30 = flag5;
                    }
                  } else {
                    objResult22 = obj(result1[12]);
                    if (objResult22.isSnowflakeBoundGuildDismissibleContent(tmp2)) {
                      tmp8 = closure_1;
                      tmp9 = closure_2;
                      tmp10 = null;
                      flag2 = false;
                      if (null == closure_1) {
                        flag = false;
                      } else {
                        num = 1;
                        num2 = 1;
                        if (null != tmp8) {
                          objResult23 = obj(result1[4]);
                          num2 = objResult23.getGuildNextNumTimesDismissed(tmp2, tmp8);
                        }
                        objResult24 = obj(result1[2]);
                        tmp11 = null;
                        if (!tmp9) {
                          tmp11 = tmp2;
                        }
                        result15 = objResult24.overrideDCFLastDCDismissed(tmp11, tmp8);
                        objResult25 = obj(result1[4]);
                        if (tmp9) {
                          num = num2 - num;
                          result16 = objResult25.UNSAFE_removeSnowflakeBoundGuildDismissedContent(tmp2, tmp8, num);
                          flag3 = false;
                        } else {
                          tmp13 = closure_1;
                          obj13 = closure_1(result1[6]);
                          tmp14 = globalThis;
                          _Date = Date;
                          timestamp1 = Date.now();
                          tmp16 = objResult25;
                          tmp17 = tmp2;
                          tmp18 = tmp8;
                          tmp19 = num2;
                          result17 = objResult25.UNSAFE_addSnowflakeBoundGuildDismissedContent(
                            tmp2,
                            obj13.fromTimestamp(
                              timestamp1 + obj(result1[4]).SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS,
                            ),
                            tmp8,
                            num2,
                          );
                          flag3 = true;
                        }
                        tmp22 = flag3;
                      }
                    } else {
                      tmp3 = closure_2;
                      objResult26 = obj(result1[2]);
                      tmp4 = null;
                      if (!closure_2) {
                        tmp4 = tmp2;
                      }
                      result18 = objResult26.overrideDCFLastDCDismissed(tmp4, undefined);
                      objResult27 = obj(result1[5]);
                      if (tmp3) {
                        result19 = objResult27.removeDismissedContent(tmp2);
                        flag = false;
                      } else {
                        addDismissedContentResult = objResult27.addDismissedContent(tmp2);
                        flag = true;
                      }
                    }
                  }
                }
                return flag;
              }
            }
          }
          return;
        }
      }
      cResult[4] = arg0;
      cResult[5] = stateFromStores;
      cResult[6] = result;
      cResult[7] = C;
      tmp11 = C;
      const tmpResult2 = require("DismissibleContentUnsafeUtils");
    }
  : function useToggleDismissibleContentDismissState(arg0) {
      _require = arg0;
      const items = [SelectedGuildStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => guildId.getGuildId());
      let obj = require("initialize");
      let obj2 = require("DismissibleContentUnsafeUtils");
      let result = obj2.useIsDismissibleContentDismissed_UNSAFE(arg0, {
        cooldownDurationMs: stateFromStores(1102).Millis.WEEK,
        guildId: stateFromStores,
      });
      dependencyMap = result;
      const items1 = [arg0, stateFromStores, result];
      const obj3 = { cooldownDurationMs: stateFromStores(1102).Millis.WEEK, guildId: stateFromStores };
      return {
        isDismissed: result,
        handleToggleDismissState: useCallback(() => {
          let obj = require;
          let result1 = dependencyMap;
          if (obj2.isVersionedDismissibleContent(closure_0)) {
            const versionedDismissibleContentCurrentVersion =
              VersionedDismissibleContentUtils.getVersionedDismissibleContentCurrentVersion(closure_0);
            const objResult = VersionedDismissibleContentUtils;
            const tmp55 = result;
            const nextNumTimesDismissed = DismissibleContentUtils.getNextNumTimesDismissed(closure_0, {});
            const objResult28 = DismissibleContentUtils;
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
              const result2 = DismissibleContentUtils.addVersionedDismissedContent(
                closure_0,
                versionedDismissibleContentCurrentVersion,
                nextNumTimesDismissed,
              );
              flag10 = true;
              const objResult30 = DismissibleContentUtils;
            }
            const objResult29 = DismissibleContentFrameworkActionCreators;
          } else {
            if (objResult31.isSnowflakeBoundDismissibleContent(closure_0)) {
              const nextNumTimesDismissed1 = DismissibleContentUtils.getNextNumTimesDismissed(closure_0, {});
              const objResult32 = DismissibleContentUtils;
              const tmp45 = result;
              let tmp47 = null;
              if (!result) {
                tmp47 = closure_0;
              }
              const result3 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp47, undefined);
              if (tmp45) {
                const result4 = UserSettingsProtoActionCreators.removeDismissedRecurringContent(closure_0);
                let flag9 = false;
                const objResult34 = UserSettingsProtoActionCreators;
              } else {
                const objResult35 = DismissibleContentUtils;
                const _Date2 = Date;
                const timestamp = Date.now();
                const result5 = objResult35.addSnowflakeBoundDismissedContent(
                  closure_0,
                  SnowflakeUtilsDefault.fromTimestamp(
                    timestamp + DismissibleContentUtils.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS,
                  ),
                  nextNumTimesDismissed1,
                );
                flag9 = true;
              }
              const objResult33 = DismissibleContentFrameworkActionCreators;
            } else {
              if (objResult36.isTimeRecurringDismissibleContent(closure_0)) {
                let tmp40 = null;
                if (!result) {
                  tmp40 = closure_0;
                }
                const result6 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp40, undefined);
                if (tmp39) {
                  const result7 = UserSettingsProtoActionCreators.removeDismissedRecurringContent(closure_0);
                  let flag8 = false;
                  const objResult38 = UserSettingsProtoActionCreators;
                } else {
                  const objResult39 = DismissibleContentUtils;
                  const result8 = objResult39.addTimeRecurringDismissedContent(
                    closure_0,
                    DismissibleContentUtils.getNextNumTimesDismissed(closure_0, {}),
                  );
                  flag8 = true;
                  const objResult40 = DismissibleContentUtils;
                }
                const objResult37 = DismissibleContentFrameworkActionCreators;
                tmp39 = result;
              } else {
                if (objResult41.isSingleUseGuildDismissibleContent(closure_0)) {
                  if (null == stateFromStores) {
                    let flag = false;
                  } else {
                    let num5 = 1;
                    let num6 = 1;
                    if (null != stateFromStores) {
                      num6 = DismissibleContentUtils.getGuildNextNumTimesDismissed(closure_0, stateFromStores);
                      const objResult42 = DismissibleContentUtils;
                    }
                    let tmp34 = null;
                    if (!tmp32) {
                      tmp34 = closure_0;
                    }
                    const result9 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(
                      tmp34,
                      stateFromStores,
                    );
                    const objResult44 = DismissibleContentUtils;
                    if (tmp32) {
                      num5 = num6 - num5;
                      const result10 = objResult44.UNSAFE_removeGuildDismissedContent(closure_0, stateFromStores, num5);
                      let flag7 = false;
                    } else {
                      const result11 = objResult44.UNSAFE_addGuildDismissedContent(closure_0, stateFromStores, num6);
                      flag7 = true;
                    }
                    const objResult43 = DismissibleContentFrameworkActionCreators;
                  }
                } else {
                  if (objResult45.isTimeRecurringGuildDismissibleContent(closure_0)) {
                    if (null == stateFromStores) {
                      flag = false;
                    } else {
                      let num3 = 1;
                      let num4 = 1;
                      if (null != stateFromStores) {
                        num4 = DismissibleContentUtils.getGuildNextNumTimesDismissed(closure_0, stateFromStores);
                        const objResult46 = DismissibleContentUtils;
                      }
                      let tmp26 = null;
                      if (!tmp24) {
                        tmp26 = closure_0;
                      }
                      const result12 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(
                        tmp26,
                        stateFromStores,
                      );
                      const objResult48 = DismissibleContentUtils;
                      if (tmp24) {
                        num3 = num4 - num3;
                        const result13 = objResult48.UNSAFE_removeTimeRecurringGuildDismissedContent(
                          closure_0,
                          stateFromStores,
                          num3,
                        );
                        let flag5 = false;
                      } else {
                        const result14 = objResult48.UNSAFE_addTimeRecurringGuildDismissedContent(
                          closure_0,
                          stateFromStores,
                          num4,
                        );
                        flag5 = true;
                      }
                      const objResult47 = DismissibleContentFrameworkActionCreators;
                    }
                  } else {
                    if (objResult49.isSnowflakeBoundGuildDismissibleContent(closure_0)) {
                      if (null == stateFromStores) {
                        flag = false;
                      } else {
                        let num = 1;
                        let num2 = 1;
                        if (null != stateFromStores) {
                          num2 = DismissibleContentUtils.getGuildNextNumTimesDismissed(closure_0, stateFromStores);
                          const objResult50 = DismissibleContentUtils;
                        }
                        let tmp11 = null;
                        if (!tmp9) {
                          tmp11 = closure_0;
                        }
                        const result15 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(
                          tmp11,
                          stateFromStores,
                        );
                        const objResult52 = DismissibleContentUtils;
                        if (tmp9) {
                          num = num2 - num;
                          const result16 = objResult52.UNSAFE_removeSnowflakeBoundGuildDismissedContent(
                            closure_0,
                            stateFromStores,
                            num,
                          );
                          let flag3 = false;
                        } else {
                          const _Date = Date;
                          const timestamp1 = Date.now();
                          const result17 = objResult52.UNSAFE_addSnowflakeBoundGuildDismissedContent(
                            closure_0,
                            SnowflakeUtilsDefault.fromTimestamp(
                              timestamp1 + DismissibleContentUtils.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS,
                            ),
                            stateFromStores,
                            num2,
                          );
                          flag3 = true;
                        }
                        const objResult51 = DismissibleContentFrameworkActionCreators;
                      }
                    } else {
                      let tmp4 = null;
                      if (!result) {
                        tmp4 = closure_0;
                      }
                      const result18 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(
                        tmp4,
                        undefined,
                      );
                      const objResult54 = UserSettingsProtoActionCreators;
                      if (tmp3) {
                        const result19 = objResult54.removeDismissedContent(closure_0);
                        flag = false;
                      } else {
                        objResult54.addDismissedContent(closure_0);
                        flag = true;
                      }
                      const objResult53 = DismissibleContentFrameworkActionCreators;
                      tmp3 = result;
                    }
                    objResult49 = DismissibleContentTypes;
                  }
                  objResult45 = DismissibleContentTypes;
                }
                return flag;
              }
              objResult36 = DismissibleContentTypes;
            }
            objResult31 = DismissibleContentTypes;
          }
          obj2 = DismissibleContentTypes;
        }, items1),
      };
    };
