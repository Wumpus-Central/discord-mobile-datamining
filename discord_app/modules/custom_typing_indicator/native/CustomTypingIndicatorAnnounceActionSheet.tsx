// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorAnnounceActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, markAsDismissed;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles(() => {
  const obj = {
    content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 },
    examples: { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 },
    newBadge: {
      marginTop: nativeDefault.space.PX_24,
      paddingHorizontal: nativeDefault.space.PX_8,
      borderRadius: nativeDefault.radii.round,
      paddingVertical: 0,
    },
    title: { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 },
    body: { textAlign: "center", marginBottom: nativeDefault.space.PX_24 },
    actions: { gap: nativeDefault.space.PX_12, width: "100%" },
    row: {
      alignSelf: "center",
      backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
      borderColor: nativeDefault.colors.BORDER_NORMAL,
      borderWidth: 1,
      borderRadius: nativeDefault.radii.md,
    },
    outerRow: { padding: nativeDefault.space.PX_8, opacity: 0.75 },
    innerRow: { padding: nativeDefault.space.PX_10 },
    outerStack: { width: "auto", maxWidth: "80%", overflow: "hidden" },
    innerStack: { width: "auto", maxWidth: "100%", overflow: "hidden" },
  };
  ({ alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 });
  ({ width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 });
  ({
    marginTop: nativeDefault.space.PX_24,
    paddingHorizontal: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.round,
    paddingVertical: 0,
  });
  ({ textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 });
  ({ textAlign: "center", marginBottom: nativeDefault.space.PX_24 });
  ({ gap: nativeDefault.space.PX_12, width: "100%" });
  ({
    alignSelf: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
    borderColor: nativeDefault.colors.BORDER_NORMAL,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.md,
  });
  ({ padding: nativeDefault.space.PX_8, opacity: 0.75 });
  ({ padding: nativeDefault.space.PX_10 });
  return obj;
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let items3;
      let obj = markAsDismissed(576);
      const cResult = obj.c(70);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const ref = react.useRef(null);
      const tmp5 = closure_9();
      if (cResult[0] !== markAsDismissed) {
        const fn = function p() {
          const obj = openUserSettings;
          const obj2 = { screen: UserSettingsSections.TYPING_INDICATOR, params: { source: "announcement_sheet" } };
          obj.openUserSettings(obj2, () => {
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
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        cResult[4] = markAsDismissed;
        cResult[5] = C;
      } else {
        class C {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[6] !== markAsDismissed) {
        class C {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
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
        cResult[6] = markAsDismissed;
        cResult[7] = closure_7(markAsDismissed(6649).ActionSheetHeaderBar, obj2);
        const tmp10 = closure_7(markAsDismissed(6649).ActionSheetHeaderBar, obj2);
      } else {
        class C {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[8] === tmp5.outerRow) {
        let tmp13;
        class C {
          constructor() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          }
        }
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class C {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          const items = [ref(11584), ref(11585), ref(11584)];
          cResult[11] = items;
          tmp13 = items;
        } else {
          class C {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (cResult[12] !== tmp5.outerStack) {
          class C {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          const obj3 = {
            name: "Cap",
            suggestion: markAsDismissed(1385).TypingSuggestion.UNSPECIFIED,
            emojiSize: 24,
            spacing: 8,
            textVariant: "text-md/medium",
            textColor: "text-subtle",
            lineClamp: 1,
            emojiSource: tmp13,
            style: tmp5.outerStack,
          };
          const tmp16 = ref(11586);
          cResult[12] = tmp5.outerStack;
          cResult[13] = closure_7(tmp16, obj3);
          const tmp17 = closure_7(tmp16, obj3);
        } else {
          class C {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (cResult[14] === tmp11) {
          class C {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          if (cResult[17] === tmp5.innerRow) {
            let tmp23;
            class C {
              constructor() {
                markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
            const _Symbol2 = Symbol;
            if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
              class C {
                constructor() {
                  markAsDismissed(ContentDismissActionType.USER_DISMISS);
                }
              }
              const items1 = [ref(11588), ref(11589), ref(11588)];
              cResult[20] = items1;
              tmp23 = items1;
            } else {
              class C {
                constructor() {
                  markAsDismissed(ContentDismissActionType.USER_DISMISS);
                }
              }
            }
            if (cResult[21] !== tmp5.innerStack) {
              class C {
                constructor() {
                  markAsDismissed(ContentDismissActionType.USER_DISMISS);
                }
              }
              const obj4 = {
                name: "Rose",
                suggestion: markAsDismissed(1385).TypingSuggestion.YAPPING,
                emojiSize: 28,
                spacing: 10,
                textVariant: "text-lg/medium",
                textColor: "text-default",
                lineClamp: 1,
                style: tmp5.innerStack,
                emojiSource: tmp23,
              };
              const tmp26 = ref(11586);
              cResult[21] = tmp5.innerStack;
              cResult[22] = closure_7(tmp26, obj4);
              const tmp27 = closure_7(tmp26, obj4);
            } else {
              class C {
                constructor() {
                  markAsDismissed(ContentDismissActionType.USER_DISMISS);
                }
              }
            }
            if (cResult[23] === tmp22) {
              class C {
                constructor() {
                  markAsDismissed(ContentDismissActionType.USER_DISMISS);
                }
              }
              if (cResult[26] === tmp5.outerRow) {
                let tmp33;
                class C {
                  constructor() {
                    markAsDismissed(ContentDismissActionType.USER_DISMISS);
                  }
                }
                const _Symbol3 = Symbol;
                if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                  class C {
                    constructor() {
                      markAsDismissed(ContentDismissActionType.USER_DISMISS);
                    }
                  }
                  const items2 = [ref(11590), ref(11591), ref(11592)];
                  cResult[29] = items2;
                  tmp33 = items2;
                } else {
                  class C {
                    constructor() {
                      markAsDismissed(ContentDismissActionType.USER_DISMISS);
                    }
                  }
                }
                if (cResult[30] !== tmp5.outerStack) {
                  class C {
                    constructor() {
                      markAsDismissed(ContentDismissActionType.USER_DISMISS);
                    }
                  }
                  const obj5 = {
                    name: "Loky",
                    suggestion: markAsDismissed(1385).TypingSuggestion.OVERSHARING,
                    emojiSize: 24,
                    spacing: 8,
                    textVariant: "text-md/medium",
                    textColor: "text-subtle",
                    lineClamp: 1,
                    style: tmp5.outerStack,
                    emojiSource: tmp33,
                  };
                  const tmp36 = ref(11586);
                  cResult[30] = tmp5.outerStack;
                  cResult[31] = closure_7(tmp36, obj5);
                  const tmp37 = closure_7(tmp36, obj5);
                } else {
                  class C {
                    constructor() {
                      markAsDismissed(ContentDismissActionType.USER_DISMISS);
                    }
                  }
                }
                if (cResult[32] === tmp32) {
                  class C {
                    constructor() {
                      markAsDismissed(ContentDismissActionType.USER_DISMISS);
                    }
                  }
                  if (cResult[35] === tmp5.examples) {
                    class C {
                      constructor() {
                        markAsDismissed(ContentDismissActionType.USER_DISMISS);
                      }
                    }
                  }
                  const obj6 = { style: tmp5.examples, children: items3 };
                  items3 = [tmp18, tmp28, tmp38];
                  cResult[35] = tmp5.examples;
                  cResult[36] = tmp28;
                  cResult[37] = tmp38;
                  cResult[38] = tmp18;
                  cResult[39] = closure_8(View, obj6);
                  const tmp45 = closure_8(View, obj6);
                }
                const obj7 = { style: tmp32, children: tmp34 };
                cResult[32] = tmp32;
                cResult[33] = tmp34;
                cResult[34] = closure_7(View, obj7);
                const tmp41 = closure_7(View, obj7);
              }
              const items4 = [,];
              ({ row: arr5[0], outerRow: arr5[1] } = tmp5);
              cResult[26] = tmp5.outerRow;
              cResult[27] = tmp5.row;
              cResult[28] = items4;
            }
            const obj8 = { style: tmp22, children: tmp24 };
            cResult[23] = tmp22;
            cResult[24] = tmp24;
            cResult[25] = closure_7(View, obj8);
            const tmp31 = closure_7(View, obj8);
          }
          const items5 = [,];
          ({ row: arr3[0], innerRow: arr3[1] } = tmp5);
          cResult[17] = tmp5.innerRow;
          cResult[18] = tmp5.row;
          cResult[19] = items5;
        }
        const obj9 = { style: tmp11, children: tmp14 };
        cResult[14] = tmp11;
        cResult[15] = tmp14;
        cResult[16] = closure_7(View, obj9);
        const tmp21 = closure_7(View, obj9);
      }
      const items6 = [,];
      ({ row: arr[0], outerRow: arr[1] } = tmp5);
      cResult[8] = tmp5.outerRow;
      cResult[9] = tmp5.row;
      cResult[10] = items6;
    }
  : (markAsDismissed) => {
      let SafeAreaPaddingView;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items10;
      let items11;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let items9;
      let obj11;
      let obj2;
      let obj3;
      let obj7;
      let obj9;
      let tmp6;
      let tmp7;
      let tmp8;
      markAsDismissed = markAsDismissed.markAsDismissed;
      const ref = react.useRef(null);
      const tmp2 = closure_9();
      const items = [markAsDismissed];
      const items1 = [markAsDismissed];
      const callback = react.useCallback(() => {
        const obj = openUserSettings;
        const obj2 = { screen: UserSettingsSections.TYPING_INDICATOR, params: { source: "announcement_sheet" } };
        obj.openUserSettings(obj2, () => {
          markAsDismissed(constants.TAKE_ACTION);
        });
      }, items);
      const items2 = [markAsDismissed];
      const callback1 = react.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items1);
      const callback2 = react.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items2);
      let obj = {
        ref,
        onDismiss: callback2,
        startExpanded: true,
        handleDisabled: true,
        children: closure_7(SafeAreaPaddingView, obj2),
      };
      BottomSheet = markAsDismissed(6645).BottomSheet;
      obj2 = { bottom: true, children: closure_8(View, obj3) };
      obj3 = { style: tmp2.content, children: items3 };
      SafeAreaPaddingView = markAsDismissed(6619).SafeAreaPaddingView;
      items3 = [, , , , ,];
      const obj4 = {
        onPress() {
          const current = ref.current;
          if (current != null) {
            current.closeActionSheet();
          }
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        },
      };
      items3[0] = closure_7(markAsDismissed(6649).ActionSheetHeaderBar, obj4);
      const obj5 = { style: tmp2.examples, children: items6 };
      const obj6 = { style: items4, children: closure_7(tmp6, obj7) };
      items4 = [,];
      ({ row: arr5[0], outerRow: arr5[1] } = tmp2);
      obj7 = {
        name: "Cap",
        suggestion: markAsDismissed(1385).TypingSuggestion.UNSPECIFIED,
        emojiSize: 24,
        spacing: 8,
        textVariant: "text-md/medium",
        textColor: "text-subtle",
        lineClamp: 1,
        emojiSource: items5,
        style: tmp2.outerStack,
      };
      tmp6 = ref(11586);
      items5 = [ref(11584), ref(11585), ref(11584)];
      items6 = [closure_7(View, obj6), ,];
      const obj8 = { style: items7, children: closure_7(tmp7, obj9) };
      items7 = [,];
      ({ row: arr8[0], innerRow: arr8[1] } = tmp2);
      obj9 = {
        name: "Rose",
        suggestion: markAsDismissed(1385).TypingSuggestion.YAPPING,
        emojiSize: 28,
        spacing: 10,
        textVariant: "text-lg/medium",
        textColor: "text-default",
        lineClamp: 1,
        style: tmp2.innerStack,
        emojiSource: items8,
      };
      tmp7 = ref(11586);
      items8 = [ref(11588), ref(11589), ref(11588)];
      items6[1] = closure_7(View, obj8);
      const obj10 = { style: items9, children: closure_7(tmp8, obj11) };
      items9 = [,];
      ({ row: arr10[0], outerRow: arr10[1] } = tmp2);
      obj11 = {
        name: "Loky",
        suggestion: markAsDismissed(1385).TypingSuggestion.OVERSHARING,
        emojiSize: 24,
        spacing: 8,
        textVariant: "text-md/medium",
        textColor: "text-subtle",
        lineClamp: 1,
        style: tmp2.outerStack,
        emojiSource: items10,
      };
      tmp8 = ref(11586);
      items10 = [ref(11590), ref(11591), ref(11592)];
      items6[2] = closure_7(View, obj10);
      items3[1] = closure_8(View, obj5);
      const obj12 = {
        text: intl.string(markAsDismissed(1126).t.y2b7CA),
        color: markAsDismissed(1188).BadgeColors.EXPRESSIVE,
        style: tmp2.newBadge,
      };
      const TextBadge = markAsDismissed(1188).TextBadge;
      intl = markAsDismissed(1126).intl;
      items3[2] = closure_7(TextBadge, obj12);
      const obj13 = {
        variant: "heading-lg/medium",
        style: tmp2.title,
        color: "text-default",
        children: intl2.string(ref(3725).uGxDiu),
      };
      const Text = markAsDismissed(4886).Text;
      intl2 = markAsDismissed(1126).intl;
      items3[3] = closure_7(Text, obj13);
      const obj14 = {
        variant: "text-md/normal",
        style: tmp2.body,
        color: "text-muted",
        children: intl3.string(ref(3725).yezU3E),
      };
      const Text2 = markAsDismissed(4886).Text;
      intl3 = markAsDismissed(1126).intl;
      items3[4] = closure_7(Text2, obj14);
      const obj15 = { style: tmp2.actions, children: items11 };
      const obj16 = { text: intl4.string(ref(3725).TswY68), variant: "primary", size: "lg", onPress: callback };
      const Button = markAsDismissed(5594).Button;
      intl4 = markAsDismissed(1126).intl;
      items11 = [closure_7(Button, obj16)];
      const obj17 = {
        text: intl5.string(markAsDismissed(1126).t.TulDPl),
        variant: "secondary",
        size: "lg",
        onPress: callback1,
      };
      const Button2 = markAsDismissed(5594).Button;
      intl5 = markAsDismissed(1126).intl;
      items11[1] = closure_7(Button2, obj17);
      items3[5] = closure_8(View, obj15);
      return closure_7(BottomSheet, obj);
    };
const result = size.fileFinishedImporting(
  "modules/custom_typing_indicator/native/CustomTypingIndicatorAnnounceActionSheet.tsx",
);

export default tmp3;
