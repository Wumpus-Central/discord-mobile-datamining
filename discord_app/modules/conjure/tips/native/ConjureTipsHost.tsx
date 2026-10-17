// discord_app/modules/conjure/tips/native/ConjureTipsHost.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useConjureTipsDefault from "../useConjureTips.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5191);
let obj2 = {
  tips: {
    gap: nativeDefault.space.PX_8,
    paddingTop: nativeDefault.space.PX_20,
    paddingBottom: nativeDefault.space.PX_4,
  },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = {
  gap: nativeDefault.space.PX_8,
  paddingTop: nativeDefault.space.PX_20,
  paddingBottom: nativeDefault.space.PX_4,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/native/ConjureTipsHost.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureTipsHost(onShow) {
      const cResult = onShow(576).c(13);
      onShow = onShow.onShow;
      ({ projectId, messages, draftHasText, onAskForIdeas } = onShow);
      const tmp2 = closure_6();
      const obj = onShow(576);
      const tmp3Result = useConjureTipsDefault(
        onShow(12139).CONJURE_TIPS,
        projectId,
        messages,
        draftHasText,
        onAskForIdeas,
      );
      if (cResult[0] !== tmp3Result) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function l(tip) {
            return "" + tip.tip.id + ":" + tip.presentation;
          };
          cResult[2] = fn;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const mapped = tmp3Result.map(tmp6);
        const joined = mapped.join(",");
        cResult[0] = tmp3Result;
        cResult[1] = joined;
      } else {
        importDefault = tmp4;
        if (cResult[3] === onShow) {
          if (cResult[4] === tmp4) {
            let tmp9 = cResult[5];
            let tmp10 = cResult[6];
          }
          const layoutEffect = noop.useLayoutEffect(tmp9, tmp10);
          class I {
            constructor() {
              if ("" !== closure_1) {
                tmp2 = null;
                if (onShow != null) {
                  tmpResult = tmp();
                }
              }
              return;
            }
          }
          if (0 === tmp3Result.length) {
            return null;
          } else if (cResult[7] !== tmp3Result) {
            const _Symbol2 = Symbol;
            class I {
              constructor() {
                if ("" !== closure_1) {
                  tmp2 = null;
                  if (onShow != null) {
                    tmpResult = tmp();
                  }
                }
                return;
              }
            }
            if (tmp14 === Symbol.for("react.memo_cache_sentinel")) {
              class P {
                constructor(arg0) {
                  tip = onShow.tip;
                  options = onShow.options;
                  obj = {
                    presentation: onShow.presentation,
                    render(arg0) {
                      return tip.render(arg0, options);
                    },
                  };
                  return closure_1_5(closure_1(closure_1_2[9]), obj, tip.id);
                }
              }
              cResult[9] = P;
              class I {
                constructor() {
                  if ("" !== closure_1) {
                    tmp2 = null;
                    if (onShow != null) {
                      tmpResult = tmp();
                    }
                  }
                  return;
                }
              }
            } else {
              class P {
                constructor(arg0) {
                  tip = onShow.tip;
                  options = onShow.options;
                  obj = {
                    presentation: onShow.presentation,
                    render(arg0) {
                      return tip.render(arg0, options);
                    },
                  };
                  return closure_1_5(closure_1(closure_1_2[9]), obj, tip.id);
                }
              }
            }
            const mapped1 = tmp3Result.map(tmp16);
            cResult[7] = tmp3Result;
            cResult[8] = mapped1;
          } else {
            class P {
              constructor(arg0) {
                tip = onShow.tip;
                options = onShow.options;
                obj = {
                  presentation: onShow.presentation,
                  render(arg0) {
                    return tip.render(arg0, options);
                  },
                };
                return closure_1_5(closure_1(closure_1_2[9]), obj, tip.id);
              }
            }
            if (cResult[10] === tmp2.tips) {
              class P {
                constructor(arg0) {
                  tip = onShow.tip;
                  options = onShow.options;
                  obj = {
                    presentation: onShow.presentation,
                    render(arg0) {
                      return tip.render(arg0, options);
                    },
                  };
                  return closure_1_5(closure_1(closure_1_2[9]), obj, tip.id);
                }
              }
              return tmp19;
            }
            class I {
              constructor() {
                if ("" !== closure_1) {
                  tmp2 = null;
                  if (onShow != null) {
                    tmpResult = tmp();
                  }
                }
                return;
              }
            }
            const obj2 = { style: tmp23, accessibilityLiveRegion: "polite", children: tmp13 };
            const tmp21 = (
              <View style={tmp23} accessibilityLiveRegion="polite">
                {tmp13}
              </View>
            );
            cResult[10] = tmp2.tips;
            cResult[11] = tmp13;
            cResult[12] = tmp21;
            tmp19 = tmp21;
          }
        }
        class I {
          constructor() {
            if ("" !== closure_1) {
              tmp2 = null;
              if (onShow != null) {
                tmpResult = tmp();
              }
            }
            return;
          }
        }
        const items = [cResult[1], onShow];
        cResult[3] = onShow;
        cResult[4] = cResult[1];
        cResult[5] = I;
        cResult[6] = items;
        tmp10 = items;
        tmp9 = I;
      }
    }
  : function ConjureTipsHost(onShow) {
      onShow = onShow.onShow;
      let joined;
      ({ projectId, messages, draftHasText, onAskForIdeas } = onShow);
      const tmp = closure_6();
      const tmp2Result = joined(12129)(onShow(12139).CONJURE_TIPS, projectId, messages, draftHasText, onAskForIdeas);
      const mapped = tmp2Result.map((tip) => "" + tip.tip.id + ":" + tip.presentation);
      joined = mapped.join(",");
      const items = [joined, onShow];
      const layoutEffect = noop.useLayoutEffect(() => {
        if ("" !== joined) {
          if (onShow != null) {
            tmp();
          }
        }
      }, items);
      let tmp5 = null;
      if (0 !== tmp2Result.length) {
        const obj = {
          style: tmp.tips,
          accessibilityLiveRegion: "polite",
          children: tmp2Result.map((presentation) => {
            const tip = presentation.tip;
            const options = presentation.options;
            return jsx(
              joined(dependencyMap[9]),
              {
                presentation: presentation.presentation,
                render(arg0) {
                  return tip.render(arg0, options);
                },
              },
              tip.id,
            );
          }),
        };
        tmp5 = (
          <View style={tmp.tips} accessibilityLiveRegion="polite">
            {tmp2Result.map((presentation) => {
              const tip = presentation.tip;
              const options = presentation.options;
              return jsx(
                joined(dependencyMap[9]),
                {
                  presentation: presentation.presentation,
                  render(arg0) {
                    return tip.render(arg0, options);
                  },
                },
                tip.id,
              );
            })}
          </View>
        );
      }
      return tmp5;
    };
