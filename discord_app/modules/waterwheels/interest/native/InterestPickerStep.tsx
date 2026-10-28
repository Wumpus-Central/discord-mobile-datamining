// discord_app/modules/waterwheels/interest/native/InterestPickerStep.tsx
import SentryUtilsDefault from "../../../../utils/SentryUtils.native.tsx";
import InterestPickerCatalogs from "InterestPickerCatalogs.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerStep.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function InterestPickerStep(navigation) {
      let tmp2 = setPicks;
      const cResult = navigation(setPicks[3]).c(20);
      navigation = navigation.navigation;
      const onComplete = navigation.route.params.onComplete;
      let obj = navigation(setPicks[3]);
      const tmp = navigation;
      const interestPickerGameList = navigation(setPicks[4]).useInterestPickerGameList("InterestPickerStep");
      let obj2 = navigation(setPicks[4]);
      setPicks = navigation(setPicks[5]).useInterestPickerPicks().setPicks;
      if (null == interestPickerGameList) {
        noop = null;
        jsx = noop.useRef(false);
        if (cResult[2] === navigation) {
          if (cResult[3] === onComplete) {
            if (cResult[4] === setPicks) {
              let tmp7 = cResult[5];
            }
            closure_5 = tmp7;
            if (cResult[6] === null) {
              if (cResult[7] === tmp7) {
                let tmp8 = cResult[8];
                let tmp9 = cResult[9];
              }
              const effect = obj4.useEffect(tmp8, tmp9);
              if (cResult[10] !== tmp7) {
                class S {
                  constructor(arg0) {
                    return closure_5(navigation, false);
                  }
                }
                cResult[10] = tmp7;
                cResult[11] = S;
              } else {
                class S {
                  constructor(arg0) {
                    return closure_5(navigation, false);
                  }
                }
              }
              if (cResult[12] !== tmp7) {
                class S {
                  constructor(arg0) {
                    return closure_5(navigation, false);
                  }
                }
                cResult[12] = tmp7;
                cResult[13] = tmp13;
              } else {
                class S {
                  constructor(arg0) {
                    return closure_5(navigation, false);
                  }
                }
              }
              if (null == null) {
                class S {
                  constructor(arg0) {
                    return closure_5(navigation, false);
                  }
                }
              } else {
                class S {
                  constructor(arg0) {
                    return closure_5(navigation, false);
                  }
                }
                const _Symbol = Symbol;
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  class S {
                    constructor(arg0) {
                      return closure_5(navigation, false);
                    }
                  }
                  const stringResult = obj5.string(onComplete(tmp2[9])["5MUKTF"]);
                  const intl = tmp(tmp2[8]).intl;
                  const stringResult1 = intl.string(onComplete(tmp2[9])["z/57xV"]);
                  cResult[14] = stringResult;
                  cResult[15] = stringResult1;
                  let tmp16 = stringResult1;
                  const tmp15 = stringResult;
                } else {
                  class S {
                    constructor(arg0) {
                      return closure_5(navigation, false);
                    }
                  }
                  tmp16 = cResult[15];
                }
                if (cResult[16] === null) {
                  class S {
                    constructor(arg0) {
                      return closure_5(navigation, false);
                    }
                  }
                }
                const obj6 = {
                  catalog: null,
                  title: tmp15,
                  subtitle: tmp16,
                  minSelection: 1,
                  onContinue: S,
                  onSkip: tmp13,
                };
                tmp2 = jsx(onComplete(tmp2[10]), {
                  catalog: null,
                  title: tmp15,
                  subtitle: tmp16,
                  minSelection: 1,
                  onContinue: S,
                  onSkip: tmp13,
                });
                cResult[16] = null;
                cResult[17] = S;
                cResult[18] = tmp13;
                cResult[19] = tmp2;
              }
            }
            const fn2 = function b() {
              if (null == c3) {
                closure_5([], true);
              }
            };
            const items = [null, tmp7];
            cResult[6] = null;
            cResult[7] = tmp7;
            cResult[8] = fn2;
            cResult[9] = items;
            tmp9 = items;
            tmp8 = fn2;
          }
        }
        const fn = function f(arg0, arg1) {
          if (!ref.current) {
            tmp.current = true;
            setPicks(arg0);
            if (null == onComplete) {
              const obj2 = { tags: { reason: "missing_on_complete" } };
              SentryUtilsDefault.captureMessage("waterwheels picker step missing completion callback", obj2);
              navigation.goBack();
            } else {
              tmp5(arg1);
            }
          }
        };
        cResult[2] = navigation;
        cResult[3] = onComplete;
        cResult[4] = setPicks;
        cResult[5] = fn;
        tmp7 = fn;
        obj4 = noop;
      } else {
        class S {
          constructor(arg0) {
            return closure_5(navigation, false);
          }
        }
      }
      const obj3 = navigation(setPicks[5]);
    }
  : function InterestPickerStep(navigation) {
      navigation = navigation.navigation;
      let interestPickerGameList;
      const onComplete = navigation.route.params.onComplete;
      interestPickerGameList = navigation(interestPickerGameList[4]).useInterestPickerGameList("InterestPickerStep");
      let obj = navigation(interestPickerGameList[4]);
      const setPicks = navigation(interestPickerGameList[5]).useInterestPickerPicks().setPicks;
      const items = [interestPickerGameList];
      const memo = setPicks.useMemo(() => {
        let interestPickerCatalog = null;
        if (null != interestPickerGameList) {
          interestPickerCatalog = InterestPickerCatalogs.getInterestPickerCatalog(tmp);
        }
        return interestPickerCatalog;
      }, items);
      setPicks.useRef(false);
      const items1 = [navigation, onComplete, setPicks];
      const callback = setPicks.useCallback((arg0, arg1) => {
        if (!ref.current) {
          tmp.current = true;
          setPicks(arg0);
          if (null == onComplete) {
            const obj2 = { tags: { reason: "missing_on_complete" } };
            SentryUtilsDefault.captureMessage("waterwheels picker step missing completion callback", obj2);
            navigation.goBack();
          } else {
            tmp5(arg1);
          }
        }
      }, items1);
      const items2 = [memo, callback];
      const effect = setPicks.useEffect(() => {
        if (null == memo) {
          callback([], true);
        }
      }, items2);
      const items3 = [callback];
      [][0] = callback;
      const callback1 = setPicks.useCallback((arg0) => callback(arg0, false), items3);
      let tmp9 = null;
      if (null != memo) {
        const obj3 = { catalog: memo, title: null, subtitle: null, minSelection: 1, onContinue: null, onSkip: null };
        const intl = tmp(tmp2[8]).intl;
        obj3.title = intl.string(onComplete(tmp2[9])["5MUKTF"]);
        const intl2 = tmp(tmp2[8]).intl;
        obj3.subtitle = intl2.string(onComplete(tmp2[9])["z/57xV"]);
        obj3.onContinue = callback1;
        obj3.onSkip = tmp8;
        tmp9 = memo(onComplete(tmp2[10]), obj3);
        const tmp12 = onComplete(tmp2[10]);
      }
      return tmp9;
    };
