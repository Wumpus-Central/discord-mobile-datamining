// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorAnnounceActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles(() => {
  const obj = {
    content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 },
    examples: null,
    newBadge: null,
    title: null,
    body: null,
    actions: null,
    row: null,
    outerRow: null,
    innerRow: null,
    outerStack: null,
    innerStack: null,
  };
  const obj2 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.examples = { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
  const obj3 = { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
  obj.newBadge = {
    marginTop: nativeDefault.space.PX_24,
    paddingHorizontal: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.round,
    paddingVertical: 0,
  };
  const obj4 = {
    marginTop: nativeDefault.space.PX_24,
    paddingHorizontal: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.round,
    paddingVertical: 0,
  };
  obj.title = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
  const obj5 = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
  obj.body = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
  const obj6 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
  obj.actions = { gap: nativeDefault.space.PX_12, width: "100%" };
  const obj7 = { gap: nativeDefault.space.PX_12, width: "100%" };
  obj.row = {
    alignSelf: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
    borderColor: nativeDefault.colors.BORDER_NORMAL,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.md,
  };
  const obj8 = {
    alignSelf: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
    borderColor: nativeDefault.colors.BORDER_NORMAL,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.md,
  };
  obj.outerRow = { padding: nativeDefault.space.PX_8, opacity: 0.75 };
  const obj9 = { padding: nativeDefault.space.PX_8, opacity: 0.75 };
  obj.innerRow = { padding: nativeDefault.space.PX_10 };
  obj.outerStack = { width: "auto", maxWidth: "80%", overflow: "hidden" };
  obj.innerStack = { width: "auto", maxWidth: "100%", overflow: "hidden" };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/CustomTypingIndicatorAnnounceActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CustomTypingIndicatorAnnounceActionSheet(markAsDismissed) {
      const cResult = markAsDismissed(analyticsLocations2[8]).c(73);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const analyticsLocations = markAsDismissed.analyticsLocations;
      const ref = noop.useRef(null);
      const tmp5 = closure_9();
      if (cResult[0] !== analyticsLocations) {
        let items = analyticsLocations;
        if (analyticsLocations == null) {
          items = [];
        }
        cResult[0] = analyticsLocations;
        cResult[1] = items;
        let tmp6 = items;
      } else {
        tmp6 = cResult[1];
      }
      const obj = markAsDismissed(analyticsLocations2[8]);
      analyticsLocations2 = ref(analyticsLocations2[9])(
        tmp6,
        ref(tmp2[10]).CUSTOM_TYPING_INDICATOR_ANNOUNCEMENT_SHEET,
      ).analyticsLocations;
      if (cResult[2] === analyticsLocations2) {
        if (cResult[5] !== markAsDismissed) {
          class R {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          cResult[5] = markAsDismissed;
          cResult[6] = R;
        } else {
          class R {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        if (cResult[7] !== markAsDismissed) {
          class A {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          cResult[7] = markAsDismissed;
          cResult[8] = A;
        } else {
          class A {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        const content = tmp5.content;
        if (cResult[9] !== markAsDismissed) {
          class A {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          let obj2 = {
            onPress() {
              const current = ref.current;
              if (current != null) {
                current.closeActionSheet();
              }
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            },
          };
          const tmp13 = closure_7(tmp(tmp2[12]).ActionSheetHeaderBar, obj2);
          cResult[9] = markAsDismissed;
          cResult[10] = tmp13;
        } else {
          class A {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        if (cResult[11] === tmp5.outerRow) {
          class A {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor() {
                tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
            tmp17[0] = tmp7(tmp2[13]);
            tmp17[1] = tmp7(tmp2[14]);
            tmp17[2] = tmp7(tmp2[13]);
            cResult[14] = tmp17;
          } else {
            class A {
              constructor() {
                tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
          }
          if (cResult[15] !== tmp5.outerStack) {
            class A {
              constructor() {
                tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
            const obj3 = {
              name: "Cap",
              suggestion: tmp(tmp2[16]).TypingSuggestion.UNSPECIFIED,
              emojiSize: 24,
              spacing: 8,
              textVariant: "text-md/medium",
              textColor: "text-subtle",
              lineClamp: 1,
              emojiSource: tmp17,
              style: tmp5.outerStack,
            };
            const tmp20 = closure_7(tmp7(tmp2[15]), obj3);
            cResult[15] = tmp5.outerStack;
            cResult[16] = tmp20;
            const tmp7Result = tmp7(tmp2[15]);
          } else {
            class A {
              constructor() {
                tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
          }
          if (cResult[17] === tmp14) {
            class A {
              constructor() {
                tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
            if (cResult[20] === tmp5.innerRow) {
              class A {
                constructor() {
                  tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  return;
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                class A {
                  constructor() {
                    tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                    return;
                  }
                }
                tmp27[0] = tmp7(tmp2[17]);
                tmp27[1] = tmp7(tmp2[18]);
                tmp27[2] = tmp7(tmp2[17]);
                cResult[23] = tmp27;
              } else {
                class A {
                  constructor() {
                    tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                    return;
                  }
                }
              }
              if (cResult[24] !== tmp5.innerStack) {
                class A {
                  constructor() {
                    tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                    return;
                  }
                }
                const obj4 = {
                  name: "Rose",
                  suggestion: tmp(tmp2[16]).TypingSuggestion.YAPPING,
                  emojiSize: 28,
                  spacing: 10,
                  textVariant: "text-lg/medium",
                  textColor: "text-default",
                  lineClamp: 1,
                  style: tmp5.innerStack,
                  emojiSource: tmp27,
                };
                const tmp30 = closure_7(tmp7(tmp2[15]), obj4);
                cResult[24] = tmp5.innerStack;
                cResult[25] = tmp30;
                const tmp7Result3 = tmp7(tmp2[15]);
              } else {
                class A {
                  constructor() {
                    tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                    return;
                  }
                }
              }
              if (cResult[26] === tmp25) {
                class A {
                  constructor() {
                    tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                    return;
                  }
                }
                if (cResult[29] === tmp5.outerRow) {
                  class A {
                    constructor() {
                      tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                      return;
                    }
                  }
                  const _Symbol3 = Symbol;
                  if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                    class A {
                      constructor() {
                        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                        return;
                      }
                    }
                    tmp37[0] = tmp7(tmp2[19]);
                    tmp37[1] = tmp7(tmp2[20]);
                    tmp37[2] = tmp7(tmp2[21]);
                    cResult[32] = tmp37;
                  } else {
                    class A {
                      constructor() {
                        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                        return;
                      }
                    }
                  }
                  if (cResult[33] !== tmp5.outerStack) {
                    class A {
                      constructor() {
                        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                        return;
                      }
                    }
                    const obj5 = {
                      name: "Loky",
                      suggestion: tmp(tmp2[16]).TypingSuggestion.OVERSHARING,
                      emojiSize: 24,
                      spacing: 8,
                      textVariant: "text-md/medium",
                      textColor: "text-subtle",
                      lineClamp: 1,
                      style: tmp5.outerStack,
                      emojiSource: tmp37,
                    };
                    const tmp40 = closure_7(tmp7(tmp2[15]), obj5);
                    cResult[33] = tmp5.outerStack;
                    cResult[34] = tmp40;
                    const tmp7Result4 = tmp7(tmp2[15]);
                  } else {
                    class A {
                      constructor() {
                        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                        return;
                      }
                    }
                  }
                  if (cResult[35] === tmp35) {
                    class A {
                      constructor() {
                        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                        return;
                      }
                    }
                    if (cResult[38] === tmp5.examples) {
                      class A {
                        constructor() {
                          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                          return;
                        }
                      }
                    }
                    const obj6 = { style: tmp5.examples, children: null };
                    const items1 = [tmp21, tmp31, tmp41];
                    obj6.children = items1;
                    cResult[38] = tmp5.examples;
                    cResult[39] = tmp21;
                    cResult[40] = tmp31;
                    cResult[41] = tmp41;
                    cResult[42] = closure_8(View, obj6);
                    class C {
                      constructor() {
                        obj = closure_0(closure_2[11]);
                        obj1 = { screen: UserSettingsSections.TYPING_INDICATOR, params: null };
                        obj4 = { analyticsLocations };
                        obj1.params = obj4;
                        openUserSettingsResult = obj.openUserSettings(obj1, () => {
                          markAsDismissed(constants.TAKE_ACTION);
                        });
                        return;
                      }
                    }
                    const tmp47 = closure_8(View, obj6);
                  }
                  const obj7 = { style: tmp35, children: tmp38 };
                  const tmp44 = closure_7(View, obj7);
                  cResult[35] = tmp35;
                  cResult[36] = tmp38;
                  cResult[37] = tmp44;
                }
                const items2 = [,];
                ({ row: arr4[0], outerRow: arr4[1] } = tmp5);
                cResult[29] = tmp5.outerRow;
                cResult[30] = tmp5.row;
                cResult[31] = items2;
              }
              const obj8 = { style: tmp25, children: tmp28 };
              const tmp34 = closure_7(View, obj8);
              cResult[26] = tmp25;
              cResult[27] = tmp28;
              cResult[28] = tmp34;
            }
            const items3 = [,];
            ({ row: arr3[0], innerRow: arr3[1] } = tmp5);
            cResult[20] = tmp5.innerRow;
            cResult[21] = tmp5.row;
            cResult[22] = items3;
          }
          const obj9 = { style: tmp14, children: tmp18 };
          const tmp24 = closure_7(View, obj9);
          cResult[17] = tmp14;
          cResult[18] = tmp18;
          cResult[19] = tmp24;
        }
        const items4 = [,];
        ({ row: arr2[0], outerRow: arr2[1] } = tmp5);
        cResult[11] = tmp5.outerRow;
        cResult[12] = tmp5.row;
        cResult[13] = items4;
      }
      class C {
        constructor() {
          obj = closure_0(closure_2[11]);
          obj1 = { screen: UserSettingsSections.TYPING_INDICATOR, params: null };
          obj4 = { analyticsLocations };
          obj1.params = obj4;
          openUserSettingsResult = obj.openUserSettings(obj1, () => {
            markAsDismissed(constants.TAKE_ACTION);
          });
          return;
        }
      }
      cResult[2] = analyticsLocations2;
      cResult[3] = markAsDismissed;
      cResult[4] = C;
      const tmp8 = ref(analyticsLocations2[9]);
    }
  : function CustomTypingIndicatorAnnounceActionSheet(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      let analyticsLocations1 = markAsDismissed.analyticsLocations;
      let analyticsLocations;
      const ref = noop.useRef(null);
      const tmp2 = closure_9();
      if (analyticsLocations1 == null) {
        analyticsLocations1 = [];
      }
      analyticsLocations = ref(analyticsLocations[9])(
        analyticsLocations1,
        tmp3(tmp4[10]).CUSTOM_TYPING_INDICATOR_ANNOUNCEMENT_SHEET,
      ).analyticsLocations;
      const items = [markAsDismissed, analyticsLocations];
      const items1 = [markAsDismissed];
      const callback = noop.useCallback(() => {
        const obj2 = { screen: UserSettingsSections.TYPING_INDICATOR, params: { analyticsLocations } };
        openUserSettings.openUserSettings(obj2, () => {
          markAsDismissed(constants.TAKE_ACTION);
        });
      }, items);
      const items2 = [markAsDismissed];
      const callback1 = noop.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items1);
      const callback2 = noop.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items2);
      let obj2 = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: null };
      const obj3 = { bottom: true, children: null };
      const obj4 = { style: tmp2.content, children: null };
      const items3 = [
        closure_7(markAsDismissed(analyticsLocations[12]).ActionSheetHeaderBar, {
          onPress() {
            const current = ref.current;
            if (current != null) {
              current.closeActionSheet();
            }
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          },
        }),
        ,
        ,
        ,
        ,
      ];
      const obj6 = { style: tmp2.examples, children: null };
      const obj7 = { style: null, children: null };
      const items4 = [,];
      ({ row: arr6[0], outerRow: arr6[1] } = tmp2);
      obj7.style = items4;
      const obj8 = {
        name: "Cap",
        suggestion: null,
        emojiSize: 24,
        spacing: 8,
        textVariant: "text-md/medium",
        textColor: "text-subtle",
        lineClamp: 1,
        emojiSource: null,
        style: null,
      };
      const obj5 = {
        onPress() {
          const current = ref.current;
          if (current != null) {
            current.closeActionSheet();
          }
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        },
      };
      const tmp5 = ref(analyticsLocations[9]);
      obj8.suggestion = markAsDismissed(analyticsLocations[16]).TypingSuggestion.UNSPECIFIED;
      const items5 = [ref(analyticsLocations[13]), ref(analyticsLocations[14]), ref(analyticsLocations[13])];
      obj8.emojiSource = items5;
      obj8.style = tmp2.outerStack;
      obj7.children = closure_7(ref(analyticsLocations[15]), obj8);
      const items6 = [closure_7(View, obj7), ,];
      const obj9 = { style: null, children: null };
      const items7 = [,];
      ({ row: arr9[0], innerRow: arr9[1] } = tmp2);
      obj9.style = items7;
      const obj10 = {
        name: "Rose",
        suggestion: null,
        emojiSize: 28,
        spacing: 10,
        textVariant: "text-lg/medium",
        textColor: "text-default",
        lineClamp: 1,
        style: null,
        emojiSource: null,
      };
      const tmp3Result = ref(analyticsLocations[15]);
      obj10.suggestion = markAsDismissed(analyticsLocations[16]).TypingSuggestion.YAPPING;
      obj10.style = tmp2.innerStack;
      const items8 = [ref(analyticsLocations[17]), ref(analyticsLocations[18]), ref(analyticsLocations[17])];
      obj10.emojiSource = items8;
      obj9.children = closure_7(ref(analyticsLocations[15]), obj10);
      items6[1] = closure_7(View, obj9);
      const obj11 = { style: null, children: null };
      const items9 = [,];
      ({ row: arr11[0], outerRow: arr11[1] } = tmp2);
      obj11.style = items9;
      const obj12 = {
        name: "Loky",
        suggestion: null,
        emojiSize: 24,
        spacing: 8,
        textVariant: "text-md/medium",
        textColor: "text-subtle",
        lineClamp: 1,
        style: null,
        emojiSource: null,
      };
      const tmp3Result3 = ref(analyticsLocations[15]);
      obj12.suggestion = markAsDismissed(analyticsLocations[16]).TypingSuggestion.OVERSHARING;
      obj12.style = tmp2.outerStack;
      const items10 = [ref(analyticsLocations[19]), ref(analyticsLocations[20]), ref(analyticsLocations[21])];
      obj12.emojiSource = items10;
      obj11.children = closure_7(ref(analyticsLocations[15]), obj12);
      items6[2] = closure_7(View, obj11);
      obj6.children = items6;
      items3[1] = closure_8(View, obj6);
      const obj13 = { text: null, color: null, style: null };
      const intl = markAsDismissed(tmp4[22]).intl;
      obj13.text = intl.string(markAsDismissed(analyticsLocations[22]).t.y2b7CA);
      obj13.color = markAsDismissed(analyticsLocations[23]).BadgeColors.EXPRESSIVE;
      obj13.style = tmp2.newBadge;
      items3[2] = closure_7(markAsDismissed(analyticsLocations[23]).TextBadge, obj13);
      const obj14 = { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: null };
      const intl2 = markAsDismissed(tmp4[22]).intl;
      obj14.children = intl2.string(ref(analyticsLocations[24]).uGxDiu);
      items3[3] = closure_7(markAsDismissed(analyticsLocations[25]).Text, obj14);
      const obj15 = { variant: "text-md/normal", style: tmp2.body, color: "text-muted", children: null };
      const intl3 = markAsDismissed(tmp4[22]).intl;
      obj15.children = intl3.string(ref(analyticsLocations[24]).yezU3E);
      items3[4] = closure_7(markAsDismissed(analyticsLocations[25]).Text, obj15);
      const obj16 = { style: tmp2.actions, children: null };
      const obj17 = { text: null, variant: "primary", size: "lg", onPress: null };
      const intl4 = markAsDismissed(tmp4[22]).intl;
      obj17.text = intl4.string(ref(analyticsLocations[24]).TswY68);
      obj17.onPress = callback;
      const items11 = [closure_7(markAsDismissed(analyticsLocations[26]).Button, obj17)];
      const obj18 = { text: null, variant: "secondary", size: "lg", onPress: null };
      const intl5 = markAsDismissed(tmp4[22]).intl;
      obj18.text = intl5.string(markAsDismissed(analyticsLocations[22]).t.TulDPl);
      obj18.onPress = callback1;
      items11[1] = closure_7(markAsDismissed(analyticsLocations[26]).Button, obj18);
      obj16.children = items11;
      items3[5] = closure_8(View, obj16);
      obj4.children = items3;
      obj3.children = closure_8(View, obj4);
      obj2.children = closure_7(markAsDismissed(analyticsLocations[27]).SafeAreaPaddingView, obj3);
      return closure_7(markAsDismissed(analyticsLocations[28]).BottomSheet, obj2);
    };
