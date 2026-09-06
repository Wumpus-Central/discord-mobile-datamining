// === Module 11969: CustomTypingIndicatorAnnounceActionSheet ===

// Module 11969 (CustomTypingIndicatorAnnounceActionSheet)
import nativeDefault from "native" /* 576 */;
import openUserSettings from "openUserSettings" /* 7382 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles(() => {
  let obj = { content: null, examples: null, betaBadge: null, title: null, body: null, actions: null, row: null, outerRow: null, innerRow: null, outerStack: null, innerStack: null };
  obj = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.content = obj;
  obj = { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
  obj.examples = obj;
  obj.betaBadge = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 };
  const obj1 = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 };
  obj.title = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
  const obj2 = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
  obj.body = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
  const obj3 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
  obj.actions = { gap: nativeDefault.space.PX_12, width: "100%" };
  const obj4 = { gap: nativeDefault.space.PX_12, width: "100%" };
  obj.row = { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: nativeDefault.radii.md };
  const obj5 = { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: nativeDefault.radii.md };
  obj.outerRow = { padding: nativeDefault.space.PX_8, opacity: 0.75 };
  const obj6 = { padding: nativeDefault.space.PX_8, opacity: 0.75 };
  obj.innerRow = { padding: nativeDefault.space.PX_10 };
  obj.outerStack = { width: "auto", maxWidth: "80%", overflow: "hidden" };
  obj.innerStack = { width: "auto", maxWidth: "100%", overflow: "hidden" };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnnounceActionSheet.tsx");

export default function CustomTypingIndicatorAnnounceActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const ref = noop.useRef(null);
  const tmp2 = closure_9();
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    const obj = { screen: UserSettingsSections.TYPING_INDICATOR, params: { source: "announcement_sheet" } };
    obj.openUserSettings(obj, () => {
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
  let obj = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: null };
  obj = { bottom: true, children: null };
  obj = { style: tmp2.content, children: null };
  const items3 = [
    closure_7(markAsDismissed(7154).ActionSheetHeaderBar, {
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
  const obj2 = { style: tmp2.examples, children: null };
  const obj3 = { style: null, children: null };
  const items4 = [, ];
  ({ row: arr5[0], outerRow: arr5[1] } = tmp2);
  obj3.style = items4;
  const obj4 = { name: "Cap", suggestion: markAsDismissed(1379).TypingSuggestion.UNSPECIFIED, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: null, style: null };
  const items5 = [ref(11972), ref(11973), ref(11972)];
  obj4.emojiSource = items5;
  obj4.style = tmp2.outerStack;
  obj3.children = closure_7(ref(11970), obj4);
  const items6 = [closure_7(View, obj3), , ];
  const obj5 = { style: null, children: null };
  const items7 = [, ];
  ({ row: arr8[0], innerRow: arr8[1] } = tmp2);
  obj5.style = items7;
  const obj6 = { name: "Rose", suggestion: null, emojiSize: 28, spacing: 10, textVariant: "text-lg/medium", textColor: "text-default", lineClamp: 1, style: null, emojiSource: null };
  const obj1 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
  const tmp6 = ref(11970);
  obj6.suggestion = markAsDismissed(1379).TypingSuggestion.YAPPING;
  obj6.style = tmp2.innerStack;
  const items8 = [ref(11974), ref(11975), ref(11974)];
  obj6.emojiSource = items8;
  obj5.children = closure_7(ref(11970), obj6);
  items6[1] = closure_7(View, obj5);
  const obj7 = { style: null, children: null };
  const items9 = [, ];
  ({ row: arr10[0], outerRow: arr10[1] } = tmp2);
  obj7.style = items9;
  const obj8 = { name: "Loky", suggestion: null, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, style: null, emojiSource: null };
  const tmp7 = ref(11970);
  obj8.suggestion = markAsDismissed(1379).TypingSuggestion.OVERSHARING;
  obj8.style = tmp2.outerStack;
  const items10 = [ref(11976), ref(11977), ref(11978)];
  obj8.emojiSource = items10;
  obj7.children = closure_7(ref(11970), obj8);
  items6[2] = closure_7(View, obj7);
  obj2.children = items6;
  items3[1] = closure_8(View, obj2);
  const obj9 = { text: null, color: null, style: null };
  const intl = markAsDismissed(1114).intl;
  obj9.text = intl.string(markAsDismissed(1114).t.oW0eUd);
  obj9.color = markAsDismissed(1178).BadgeColors.EXPRESSIVE;
  obj9.style = tmp2.betaBadge;
  items3[2] = closure_7(markAsDismissed(1178).TextBadge, obj9);
  const obj10 = { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: null };
  const intl2 = markAsDismissed(1114).intl;
  obj10.children = intl2.string(ref(3549).uGxDiu);
  items3[3] = closure_7(markAsDismissed(4556).Text, obj10);
  const obj11 = { variant: "text-md/normal", style: tmp2.body, color: "text-muted", children: null };
  const intl3 = markAsDismissed(1114).intl;
  obj11.children = intl3.string(ref(3549).yezU3E);
  items3[4] = closure_7(markAsDismissed(4556).Text, obj11);
  const obj12 = { style: tmp2.actions, children: null };
  const obj13 = { text: null, variant: "primary", size: "lg", onPress: null };
  const intl4 = markAsDismissed(1114).intl;
  obj13.text = intl4.string(ref(3549).TswY68);
  obj13.onPress = callback;
  const items11 = [closure_7(markAsDismissed(4975).Button, obj13), ];
  const obj14 = { text: null, variant: "secondary", size: "lg", onPress: null };
  const intl5 = markAsDismissed(1114).intl;
  obj14.text = intl5.string(markAsDismissed(1114).t.TulDPl);
  obj14.onPress = callback1;
  items11[1] = closure_7(markAsDismissed(4975).Button, obj14);
  obj12.children = items11;
  items3[5] = closure_8(View, obj12);
  obj.children = items3;
  obj.children = closure_8(View, obj);
  obj.children = closure_7(markAsDismissed(7123).SafeAreaPaddingView, obj);
  return closure_7(markAsDismissed(7150).BottomSheet, obj);
};