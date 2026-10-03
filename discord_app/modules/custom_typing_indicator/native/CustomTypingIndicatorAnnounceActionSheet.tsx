// === Module 11583: CustomTypingIndicatorAnnounceActionSheet ===

// Module 11583 (CustomTypingIndicatorAnnounceActionSheet)
import nativeDefault from "native" /* 587 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles(() => {
  const obj = { content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, examples: null, newBadge: null, title: null, body: null, actions: null, row: null, outerRow: null, innerRow: null, outerStack: null, innerStack: null };
  const obj2 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.examples = { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
  const obj3 = { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
  obj.newBadge = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 };
  const obj4 = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 };
  obj.title = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
  const obj5 = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
  obj.body = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
  const obj6 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
  obj.actions = { gap: nativeDefault.space.PX_12, width: "100%" };
  const obj7 = { gap: nativeDefault.space.PX_12, width: "100%" };
  obj.row = { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: nativeDefault.radii.md };
  const obj8 = { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: nativeDefault.radii.md };
  obj.outerRow = { padding: nativeDefault.space.PX_8, opacity: 0.75 };
  const obj9 = { padding: nativeDefault.space.PX_8, opacity: 0.75 };
  obj.innerRow = { padding: nativeDefault.space.PX_10 };
  obj.outerStack = { width: "auto", maxWidth: "80%", overflow: "hidden" };
  obj.innerStack = { width: "auto", maxWidth: "100%", overflow: "hidden" };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnnounceActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  const cResult = markAsDismissed(576).c(70);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const ref = noop.useRef(null);
  const tmp5 = closure_9();
  if (cResult[0] !== markAsDismissed) {
    const fn = function p() {
      openUserSettings.openUserSettings({ screen: UserSettingsSections.TYPING_INDICATOR, params: { source: "announcement_sheet" } }, () => {
        markAsDismissed(constants.TAKE_ACTION);
      });
    };
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
  }
  if (cResult[2] !== markAsDismissed) {
    const fn2 = function w() {
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    };
    cResult[2] = markAsDismissed;
    cResult[3] = fn2;
  }
  if (cResult[4] !== markAsDismissed) {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    cResult[4] = markAsDismissed;
    cResult[5] = C;
  } else {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (cResult[6] !== markAsDismissed) {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    const obj2 = {
      onPress() {
          const current = ref.current;
          if (current != null) {
            current.closeActionSheet();
          }
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
    };
    const tmp10 = closure_7(tmp(6649).ActionSheetHeaderBar, obj2);
    cResult[6] = markAsDismissed;
    cResult[7] = tmp10;
  } else {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  if (cResult[8] === tmp5.outerRow) {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      const items = [ref(11584), ref(11585), ref(11584)];
      cResult[11] = items;
      const tmp13 = items;
    } else {
      class C {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    if (cResult[12] !== tmp5.outerStack) {
      class C {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      const obj3 = { name: "Cap", suggestion: tmp(1385).TypingSuggestion.UNSPECIFIED, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: tmp13, style: tmp5.outerStack };
      const tmp17 = closure_7(ref(11586), obj3);
      cResult[12] = tmp5.outerStack;
      cResult[13] = tmp17;
      const tmp16 = ref(11586);
    } else {
      class C {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
    }
    if (cResult[14] === tmp11) {
      class C {
        constructor() {
          tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
          return;
        }
      }
      if (cResult[17] === tmp5.innerRow) {
        class C {
          constructor() {
            tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          const items1 = [ref(11588), ref(11589), ref(11588)];
          cResult[20] = items1;
          const tmp23 = items1;
        } else {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        if (cResult[21] !== tmp5.innerStack) {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          const obj4 = { name: "Rose", suggestion: tmp(1385).TypingSuggestion.YAPPING, emojiSize: 28, spacing: 10, textVariant: "text-lg/medium", textColor: "text-default", lineClamp: 1, style: tmp5.innerStack, emojiSource: tmp23 };
          const tmp27 = closure_7(ref(11586), obj4);
          cResult[21] = tmp5.innerStack;
          cResult[22] = tmp27;
          const tmp26 = ref(11586);
        } else {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        if (cResult[23] === tmp22) {
          class C {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          if (cResult[26] === tmp5.outerRow) {
            class C {
              constructor() {
                tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
            const _Symbol3 = Symbol;
            if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
              class C {
                constructor() {
                  tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  return;
                }
              }
              const items2 = [ref(11590), ref(11591), ref(11592)];
              cResult[29] = items2;
              const tmp33 = items2;
            } else {
              class C {
                constructor() {
                  tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  return;
                }
              }
            }
            if (cResult[30] !== tmp5.outerStack) {
              class C {
                constructor() {
                  tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  return;
                }
              }
              const obj5 = { name: "Loky", suggestion: tmp(1385).TypingSuggestion.OVERSHARING, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, style: tmp5.outerStack, emojiSource: tmp33 };
              const tmp37 = closure_7(ref(11586), obj5);
              cResult[30] = tmp5.outerStack;
              cResult[31] = tmp37;
              const tmp36 = ref(11586);
            } else {
              class C {
                constructor() {
                  tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  return;
                }
              }
            }
            if (cResult[32] === tmp32) {
              class C {
                constructor() {
                  tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  return;
                }
              }
              if (cResult[35] === tmp5.examples) {
                class C {
                  constructor() {
                    tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                    return;
                  }
                }
              }
              const obj6 = { style: tmp5.examples, children: null };
              const items3 = [tmp18, tmp28, tmp38];
              obj6.children = items3;
              const tmp45 = closure_8(View, obj6);
              cResult[35] = tmp5.examples;
              cResult[36] = tmp28;
              cResult[37] = tmp38;
              cResult[38] = tmp18;
              cResult[39] = tmp45;
            }
            const obj7 = { style: tmp32, children: tmp34 };
            const tmp41 = closure_7(View, obj7);
            cResult[32] = tmp32;
            cResult[33] = tmp34;
            cResult[34] = tmp41;
          }
          const items4 = [, ];
          ({ row: arr5[0], outerRow: arr5[1] } = tmp5);
          cResult[26] = tmp5.outerRow;
          cResult[27] = tmp5.row;
          cResult[28] = items4;
        }
        const obj8 = { style: tmp22, children: tmp24 };
        const tmp31 = closure_7(View, obj8);
        cResult[23] = tmp22;
        cResult[24] = tmp24;
        cResult[25] = tmp31;
      }
      const items5 = [, ];
      ({ row: arr3[0], innerRow: arr3[1] } = tmp5);
      cResult[17] = tmp5.innerRow;
      cResult[18] = tmp5.row;
      cResult[19] = items5;
    }
    const obj9 = { style: tmp11, children: tmp14 };
    const tmp21 = closure_7(View, obj9);
    cResult[14] = tmp11;
    cResult[15] = tmp14;
    cResult[16] = tmp21;
  }
  const items6 = [, ];
  ({ row: arr[0], outerRow: arr[1] } = tmp5);
  cResult[8] = tmp5.outerRow;
  cResult[9] = tmp5.row;
  cResult[10] = items6;
  const obj = markAsDismissed(576);
}) : ((markAsDismissed) => {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const ref = noop.useRef(null);
  const tmp2 = closure_9();
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    openUserSettings.openUserSettings({ screen: UserSettingsSections.TYPING_INDICATOR, params: { source: "announcement_sheet" } }, () => {
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
  const obj = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: null };
  const obj2 = { bottom: true, children: null };
  const obj3 = { style: tmp2.content, children: null };
  const items3 = [
    closure_7(markAsDismissed(6649).ActionSheetHeaderBar, {
      onPress() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }),
  ,
  ,
  ,
  ,

  ];
  const obj5 = { style: tmp2.examples, children: null };
  const obj6 = { style: null, children: null };
  const items4 = [, ];
  ({ row: arr5[0], outerRow: arr5[1] } = tmp2);
  obj6.style = items4;
  const obj7 = { name: "Cap", suggestion: markAsDismissed(1385).TypingSuggestion.UNSPECIFIED, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: null, style: null };
  const items5 = [ref(11584), ref(11585), ref(11584)];
  obj7.emojiSource = items5;
  obj7.style = tmp2.outerStack;
  obj6.children = closure_7(ref(11586), obj7);
  const items6 = [closure_7(View, obj6), , ];
  const obj8 = { style: null, children: null };
  const items7 = [, ];
  ({ row: arr8[0], innerRow: arr8[1] } = tmp2);
  obj8.style = items7;
  const obj9 = { name: "Rose", suggestion: null, emojiSize: 28, spacing: 10, textVariant: "text-lg/medium", textColor: "text-default", lineClamp: 1, style: null, emojiSource: null };
  const obj4 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
  const tmp6 = ref(11586);
  obj9.suggestion = markAsDismissed(1385).TypingSuggestion.YAPPING;
  obj9.style = tmp2.innerStack;
  const items8 = [ref(11588), ref(11589), ref(11588)];
  obj9.emojiSource = items8;
  obj8.children = closure_7(ref(11586), obj9);
  items6[1] = closure_7(View, obj8);
  const obj10 = { style: null, children: null };
  const items9 = [, ];
  ({ row: arr10[0], outerRow: arr10[1] } = tmp2);
  obj10.style = items9;
  const obj11 = { name: "Loky", suggestion: null, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, style: null, emojiSource: null };
  const tmp7 = ref(11586);
  obj11.suggestion = markAsDismissed(1385).TypingSuggestion.OVERSHARING;
  obj11.style = tmp2.outerStack;
  const items10 = [ref(11590), ref(11591), ref(11592)];
  obj11.emojiSource = items10;
  obj10.children = closure_7(ref(11586), obj11);
  items6[2] = closure_7(View, obj10);
  obj5.children = items6;
  items3[1] = closure_8(View, obj5);
  const obj12 = { text: null, color: null, style: null };
  const intl = markAsDismissed(1126).intl;
  obj12.text = intl.string(markAsDismissed(1126).t.y2b7CA);
  obj12.color = markAsDismissed(1188).BadgeColors.EXPRESSIVE;
  obj12.style = tmp2.newBadge;
  items3[2] = closure_7(markAsDismissed(1188).TextBadge, obj12);
  const obj13 = { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: null };
  const intl2 = markAsDismissed(1126).intl;
  obj13.children = intl2.string(ref(3725).uGxDiu);
  items3[3] = closure_7(markAsDismissed(4886).Text, obj13);
  const obj14 = { variant: "text-md/normal", style: tmp2.body, color: "text-muted", children: null };
  const intl3 = markAsDismissed(1126).intl;
  obj14.children = intl3.string(ref(3725).yezU3E);
  items3[4] = closure_7(markAsDismissed(4886).Text, obj14);
  const obj15 = { style: tmp2.actions, children: null };
  const obj16 = { text: null, variant: "primary", size: "lg", onPress: null };
  const intl4 = markAsDismissed(1126).intl;
  obj16.text = intl4.string(ref(3725).TswY68);
  obj16.onPress = callback;
  const items11 = [closure_7(markAsDismissed(5594).Button, obj16), ];
  const obj17 = { text: null, variant: "secondary", size: "lg", onPress: null };
  const intl5 = markAsDismissed(1126).intl;
  obj17.text = intl5.string(markAsDismissed(1126).t.TulDPl);
  obj17.onPress = callback1;
  items11[1] = closure_7(markAsDismissed(5594).Button, obj17);
  obj15.children = items11;
  items3[5] = closure_8(View, obj15);
  obj3.children = items3;
  obj2.children = closure_8(View, obj3);
  obj.children = closure_7(markAsDismissed(6619).SafeAreaPaddingView, obj2);
  return closure_7(markAsDismissed(6645).BottomSheet, obj);
});