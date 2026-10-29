// discord_app/modules/video_calls/native/components/ScreenshareParticipant.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";

const require = fn;
const View = fn(17).View;
const ApplicationStreamStates = fn(1084).ApplicationStreamStates;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5005);
let obj2 = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  title: { textAlign: "center", marginBottom: 8 },
  description: { lineHeight: 18, textAlign: "center", marginBottom: 16 },
};
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareParticipant.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ScreenshareParticipant(participant) {
      const cResult = participant(onDoubleTap[8]).c(32);
      participant = participant.participant;
      const onSingleTap = participant.onSingleTap;
      onDoubleTap = participant.onDoubleTap;
      const containerStyle = participant.containerStyle;
      if (cResult[0] === onSingleTap) {
        if (cResult[1] === participant) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === onDoubleTap) {
          if (cResult[4] === participant) {
            let tmp5 = cResult[5];
          }
          if (cResult[6] === tmp5) {
            if (cResult[7] === tmp4) {
              let tmp6 = cResult[8];
            }
            const tmp8 = onSingleTap(tmp2[9])(tmp6);
            const tmp10 = closure_9();
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const items = [ApplicationStreamingStore];
              class A {
                constructor() {
                  currentUserActiveStream = closure_1_5.getCurrentUserActiveStream();
                  state = undefined;
                  if (currentUserActiveStream != null) {
                    state = currentUserActiveStream.state;
                  }
                  return state === closure_1_6.PAUSED;
                }
              }
              cResult[9] = items;
              cResult[10] = A;
              let tmp13 = A;
              let tmp12 = items;
            } else {
              tmp12 = cResult[9];
              tmp13 = cResult[10];
            }
            const stateFromStores = tmp(tmp2[10]).useStateFromStores(tmp12, tmp13);
            if (cResult[11] === containerStyle) {
              if (cResult[12] === tmp10.container) {
                let tmp16 = cResult[13];
              }
              if (cResult[14] !== stateFromStores) {
                const string = tmp(tmp2[11]).intl.string;
                const t = tmp(tmp2[11]).t;
                class A {
                  constructor() {
                    currentUserActiveStream = closure_1_5.getCurrentUserActiveStream();
                    state = undefined;
                    if (currentUserActiveStream != null) {
                      state = currentUserActiveStream.state;
                    }
                    return state === closure_1_6.PAUSED;
                  }
                }
                cResult[14] = stateFromStores;
                cResult[15] = tmp18;
              } else {
                if (cResult[16] === tmp10.title) {
                  if (cResult[17] === tmp17) {
                    let tmp20 = cResult[18];
                  }
                  if (cResult[19] !== stateFromStores) {
                    const string2 = tmp(tmp2[11]).intl.string;
                    const t2 = tmp(tmp2[11]).t;
                    class A {
                      constructor() {
                        currentUserActiveStream = closure_1_5.getCurrentUserActiveStream();
                        state = undefined;
                        if (currentUserActiveStream != null) {
                          state = currentUserActiveStream.state;
                        }
                        return state === closure_1_6.PAUSED;
                      }
                    }
                    cResult[19] = stateFromStores;
                    cResult[20] = tmp25;
                  } else {
                    if (cResult[21] === tmp10.description) {
                      if (cResult[22] === tmp24) {
                        let tmp27 = cResult[23];
                      }
                      const _Symbol2 = Symbol;
                      class A {
                        constructor() {
                          currentUserActiveStream = closure_1_5.getCurrentUserActiveStream();
                          state = undefined;
                          if (currentUserActiveStream != null) {
                            state = currentUserActiveStream.state;
                          }
                          return state === closure_1_6.PAUSED;
                        }
                      }
                      if (cResult[25] === tmp27) {
                        if (cResult[26] === tmp16) {
                          if (cResult[27] === tmp20) {
                            let tmp33 = cResult[28];
                          }
                          if (cResult[29] === tmp8) {
                            if (cResult[30] === tmp33) {
                              let tmp37 = cResult[31];
                            }
                            return tmp37;
                          }
                          class A {
                            constructor() {
                              currentUserActiveStream = closure_1_5.getCurrentUserActiveStream();
                              state = undefined;
                              if (currentUserActiveStream != null) {
                                state = currentUserActiveStream.state;
                              }
                              return state === closure_1_6.PAUSED;
                            }
                          }
                          tmp39[0] = tmp8;
                          tmp39[1] = tmp33;
                          const tmp40 = closure_7(tmp(tmp2[15]).GestureDetector, tmp39);
                          cResult[29] = tmp8;
                          cResult[30] = tmp33;
                          cResult[31] = tmp40;
                          tmp37 = tmp40;
                        }
                      }
                      const obj2 = { style: tmp16, children: null };
                      const items1 = [tmp20, tmp27, tmp32];
                      obj2.children = items1;
                      const tmp36 = closure_8(View, obj2);
                      cResult[25] = tmp27;
                      cResult[26] = tmp16;
                      cResult[27] = tmp20;
                      cResult[28] = tmp36;
                      tmp33 = tmp36;
                    }
                    class A {
                      constructor() {
                        currentUserActiveStream = closure_1_5.getCurrentUserActiveStream();
                        state = undefined;
                        if (currentUserActiveStream != null) {
                          state = currentUserActiveStream.state;
                        }
                        return state === closure_1_6.PAUSED;
                      }
                    }
                    tmp29[0] = tmp10.description;
                    tmp29[3] = cResult[20];
                    const tmp30 = closure_7(tmp(tmp2[12]).Text, tmp29);
                    cResult[21] = tmp10.description;
                    cResult[22] = cResult[20];
                    cResult[23] = tmp30;
                    tmp27 = tmp30;
                  }
                }
                class A {
                  constructor() {
                    currentUserActiveStream = closure_1_5.getCurrentUserActiveStream();
                    state = undefined;
                    if (currentUserActiveStream != null) {
                      state = currentUserActiveStream.state;
                    }
                    return state === closure_1_6.PAUSED;
                  }
                }
                tmp22[0] = tmp10.title;
                tmp22[4] = cResult[15];
                const tmp23 = closure_7(tmp(tmp2[12]).Text, tmp22);
                cResult[16] = tmp10.title;
                cResult[17] = cResult[15];
                cResult[18] = tmp23;
                tmp20 = tmp23;
              }
            }
            const items2 = [tmp10.container, containerStyle];
            cResult[11] = containerStyle;
            cResult[12] = tmp10.container;
            cResult[13] = items2;
            tmp16 = items2;
            let tmpResult = tmp(tmp2[10]);
          }
          const obj3 = { onSingleTapStart: null, onDoubleTapStart: tmp5 };
          cResult[6] = tmp5;
          cResult[7] = tmp4;
          cResult[8] = obj3;
          tmp6 = obj3;
        }
        const fn2 = function b() {
          let tmpResult;
          if (onDoubleTap != null) {
            tmpResult = tmp(participant);
          }
          return tmpResult;
        };
        cResult[3] = onDoubleTap;
        cResult[4] = participant;
        cResult[5] = fn2;
        tmp5 = fn2;
      }
      const fn = function s() {
        let tmpResult;
        if (onSingleTap != null) {
          tmpResult = tmp(participant);
        }
        return tmpResult;
      };
      cResult[0] = onSingleTap;
      cResult[1] = participant;
      cResult[2] = fn;
      tmp4 = fn;
      const obj = participant(onDoubleTap[8]);
    }
  : function ScreenshareParticipant(participant) {
      participant = participant.participant;
      const onSingleTap = participant.onSingleTap;
      const onDoubleTap = participant.onDoubleTap;
      const items = [onSingleTap, participant];
      const items1 = [onDoubleTap, participant];
      const callback = noop.useCallback(() => {
        let tmpResult;
        if (onSingleTap != null) {
          tmpResult = tmp(participant);
        }
        return tmpResult;
      }, items);
      const callback1 = noop.useCallback(() => {
        let tmpResult;
        if (onDoubleTap != null) {
          tmpResult = tmp(participant);
        }
        return tmpResult;
      }, items1);
      const tmp5 = closure_9();
      const tmp4 = onSingleTap(onDoubleTap[9])({ onSingleTapStart: callback, onDoubleTapStart: callback1 });
      const items2 = [ApplicationStreamingStore];
      const stateFromStores = participant(onDoubleTap[10]).useStateFromStores(items2, () => {
        currentUserActiveStream = currentUserActiveStream.getCurrentUserActiveStream();
        let state;
        if (currentUserActiveStream != null) {
          state = currentUserActiveStream.state;
        }
        return state === constants.PAUSED;
      });
      const obj2 = { gesture: tmp4, children: null };
      const obj3 = { style: null, children: null };
      const items3 = [tmp5.container, participant.containerStyle];
      obj3.style = items3;
      const obj4 = {
        style: tmp5.title,
        accessibilityRole: "header",
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = participant(onDoubleTap[11]).intl;
      const string = intl.string;
      const t = participant(onDoubleTap[11]).t;
      if (stateFromStores) {
        let stringResult = string(t["5q17w5"]);
      } else {
        stringResult = string(t.gMOwov);
      }
      obj4.children = stringResult;
      const items4 = [closure_7(participant(onDoubleTap[12]).Text, obj4), ,];
      const obj5 = {
        style: tmp5.description,
        variant: "text-sm/medium",
        color: "interactive-text-default",
        children: null,
      };
      const intl2 = tmp6(tmp3[11]).intl;
      const string2 = intl2.string;
      const t2 = tmp6(tmp3[11]).t;
      if (stateFromStores) {
        let string2Result = string2(t2.LV1NSN);
      } else {
        string2Result = string2(t2.dKeLGt);
      }
      obj5.children = string2Result;
      items4[1] = closure_7(participant(onDoubleTap[12]).Text, obj5);
      const obj6 = { variant: "primary-overlay", text: null, onPress: null };
      const intl3 = tmp6(tmp3[11]).intl;
      obj6.text = intl3.string(participant(onDoubleTap[11]).t.CpkXwZ);
      obj6.onPress = participant(onDoubleTap[14]).stopScreenshare;
      items4[2] = closure_7(participant(onDoubleTap[13]).Button, obj6);
      obj3.children = items4;
      obj2.children = closure_8(View, obj3);
      return closure_7(participant(onDoubleTap[15]).GestureDetector, obj2);
    };
