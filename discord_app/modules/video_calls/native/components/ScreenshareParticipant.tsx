// discord_app/modules/video_calls/native/components/ScreenshareParticipant.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";

const require = fn;
const View = fn(17).View;
const ApplicationStreamStates = fn(1087).ApplicationStreamStates;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5191);
let obj2 = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  },
  image: { marginBottom: 12 },
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
      const cResult = participant(onDoubleTap[8]).c(35);
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
              if (cResult[14] !== tmp10.image) {
                const obj2 = { source: null, style: null };
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
                obj2.style = tmp10.image;
                const tmp20 = closure_7(tmp7(tmp2[11]), obj2);
                cResult[14] = tmp10.image;
                cResult[15] = tmp20;
                let tmp17 = tmp20;
                const tmp7Result = tmp7(tmp2[11]);
              } else {
                tmp17 = cResult[15];
              }
              if (cResult[16] !== stateFromStores) {
                const string = tmp(tmp2[13]).intl.string;
                const t = tmp(tmp2[13]).t;
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
                cResult[16] = stateFromStores;
                cResult[17] = tmp22;
              } else {
                if (cResult[18] === tmp10.title) {
                  if (cResult[19] === tmp21) {
                    let tmp24 = cResult[20];
                  }
                  if (cResult[21] !== stateFromStores) {
                    const string2 = tmp(tmp2[13]).intl.string;
                    const t2 = tmp(tmp2[13]).t;
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
                    cResult[21] = stateFromStores;
                    cResult[22] = tmp29;
                  } else {
                    if (cResult[23] === tmp10.description) {
                      if (cResult[24] === tmp28) {
                        let tmp31 = cResult[25];
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
                      if (cResult[27] === tmp31) {
                        if (cResult[28] === tmp16) {
                          if (cResult[29] === tmp17) {
                            if (cResult[30] === tmp24) {
                              let tmp37 = cResult[31];
                            }
                            if (cResult[32] === tmp8) {
                              if (cResult[33] === tmp37) {
                                let tmp41 = cResult[34];
                              }
                              return tmp41;
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
                            tmp43[0] = tmp8;
                            tmp43[1] = tmp37;
                            const tmp44 = closure_7(tmp(tmp2[17]).GestureDetector, tmp43);
                            cResult[32] = tmp8;
                            cResult[33] = tmp37;
                            cResult[34] = tmp44;
                            tmp41 = tmp44;
                          }
                        }
                      }
                      const obj3 = { style: tmp16, children: null };
                      const items1 = [tmp17, tmp24, tmp31, tmp36];
                      obj3.children = items1;
                      const tmp40 = closure_8(View, obj3);
                      cResult[27] = tmp31;
                      cResult[28] = tmp16;
                      cResult[29] = tmp17;
                      cResult[30] = tmp24;
                      cResult[31] = tmp40;
                      tmp37 = tmp40;
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
                    tmp33[0] = tmp10.description;
                    tmp33[3] = cResult[22];
                    const tmp34 = closure_7(tmp(tmp2[14]).Text, tmp33);
                    cResult[23] = tmp10.description;
                    cResult[24] = cResult[22];
                    cResult[25] = tmp34;
                    tmp31 = tmp34;
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
                tmp26[0] = tmp10.title;
                tmp26[4] = cResult[17];
                const tmp27 = closure_7(tmp(tmp2[14]).Text, tmp26);
                cResult[18] = tmp10.title;
                cResult[19] = cResult[17];
                cResult[20] = tmp27;
                tmp24 = tmp27;
              }
            }
            const items2 = [tmp10.container, containerStyle];
            cResult[11] = containerStyle;
            cResult[12] = tmp10.container;
            cResult[13] = items2;
            tmp16 = items2;
            tmp7 = onSingleTap;
            let tmpResult = tmp(tmp2[10]);
          }
          const obj4 = { onSingleTapStart: null, onDoubleTapStart: tmp5 };
          cResult[6] = tmp5;
          cResult[7] = tmp4;
          cResult[8] = obj4;
          tmp6 = obj4;
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
      const obj4 = { source: null, style: null };
      const obj = participant(onDoubleTap[10]);
      obj4.source = onSingleTap(onDoubleTap[12]);
      obj4.style = tmp5.image;
      const items4 = [closure_7(onSingleTap(onDoubleTap[11]), obj4), , ,];
      const obj5 = {
        style: tmp5.title,
        accessibilityRole: "header",
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = participant(onDoubleTap[13]).intl;
      const string = intl.string;
      const t = participant(onDoubleTap[13]).t;
      if (stateFromStores) {
        let stringResult = string(t["5q17w5"]);
      } else {
        stringResult = string(t.gMOwov);
      }
      obj5.children = stringResult;
      items4[1] = closure_7(participant(onDoubleTap[14]).Text, obj5);
      const obj6 = {
        style: tmp5.description,
        variant: "text-sm/medium",
        color: "interactive-text-default",
        children: null,
      };
      const intl2 = tmp6(tmp3[13]).intl;
      const string2 = intl2.string;
      const t2 = tmp6(tmp3[13]).t;
      if (stateFromStores) {
        let string2Result = string2(t2.LV1NSN);
      } else {
        string2Result = string2(t2.dKeLGt);
      }
      obj6.children = string2Result;
      items4[2] = closure_7(participant(onDoubleTap[14]).Text, obj6);
      const obj7 = { variant: "primary-overlay", text: null, onPress: null };
      const intl3 = tmp6(tmp3[13]).intl;
      obj7.text = intl3.string(participant(onDoubleTap[13]).t.CpkXwZ);
      obj7.onPress = participant(onDoubleTap[16]).stopScreenshare;
      items4[3] = closure_7(participant(onDoubleTap[15]).Button, obj7);
      obj3.children = items4;
      obj2.children = closure_8(View, obj3);
      return closure_7(participant(onDoubleTap[17]).GestureDetector, obj2);
    };
