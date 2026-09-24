// === Module 12311: CustomTypingIndicatorAnnounceActionSheet ===

// Module 12311 (CustomTypingIndicatorAnnounceActionSheet)
import nativeDefault from "native" /* 576 */;
import openUserSettings from "openUserSettings" /* 7712 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(2041).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4829);
let closure_9 = createStyles.createStyles(() => {
  const obj = { content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, examples: null, betaBadge: null, title: null, body: null, actions: null, row: null, outerRow: null, innerRow: null, outerStack: null, innerStack: null };
  const obj2 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.examples = { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
  const obj3 = { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
  obj.betaBadge = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 };
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnnounceActionSheet.tsx");

export default function CustomTypingIndicatorAnnounceActionSheet(markAsDismissed) {
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
    closure_7(markAsDismissed(7487).ActionSheetHeaderBar, {
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
  const obj7 = { name: "Cap", suggestion: markAsDismissed(1380).TypingSuggestion.UNSPECIFIED, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: null, style: null };
  const items5 = [ref(12314), ref(12315), ref(12314)];
  obj7.emojiSource = items5;
  obj7.style = tmp2.outerStack;
  obj6.children = closure_7(ref(12312), obj7);
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
  const tmp6 = ref(12312);
  obj9.suggestion = markAsDismissed(1380).TypingSuggestion.YAPPING;
  obj9.style = tmp2.innerStack;
  const items8 = [ref(12316), ref(12317), ref(12316)];
  obj9.emojiSource = items8;
  obj8.children = closure_7(ref(12312), obj9);
  items6[1] = closure_7(View, obj8);
  const obj10 = { style: null, children: null };
  const items9 = [, ];
  ({ row: arr10[0], outerRow: arr10[1] } = tmp2);
  obj10.style = items9;
  const obj11 = { name: "Loky", suggestion: null, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, style: null, emojiSource: null };
  const tmp7 = ref(12312);
  obj11.suggestion = markAsDismissed(1380).TypingSuggestion.OVERSHARING;
  obj11.style = tmp2.outerStack;
  const items10 = [ref(12318), ref(12319), ref(12320)];
  obj11.emojiSource = items10;
  obj10.children = closure_7(ref(12312), obj11);
  items6[2] = closure_7(View, obj10);
  obj5.children = items6;
  items3[1] = closure_8(View, obj5);
  const obj12 = { text: null, color: null, style: null };
  const intl = markAsDismissed(1115).intl;
  obj12.text = intl.string(markAsDismissed(1115).t.oW0eUd);
  obj12.color = markAsDismissed(1177).BadgeColors.EXPRESSIVE;
  obj12.style = tmp2.betaBadge;
  items3[2] = closure_7(markAsDismissed(1177).TextBadge, obj12);
  const obj13 = { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: null };
  const intl2 = markAsDismissed(1115).intl;
  obj13.children = intl2.string(ref(3716).uGxDiu);
  items3[3] = closure_7(markAsDismissed(4825).Text, obj13);
  const obj14 = { variant: "text-md/normal", style: tmp2.body, color: "text-muted", children: null };
  const intl3 = markAsDismissed(1115).intl;
  obj14.children = intl3.string(ref(3716).yezU3E);
  items3[4] = closure_7(markAsDismissed(4825).Text, obj14);
  const obj15 = { style: tmp2.actions, children: null };
  const obj16 = { text: null, variant: "primary", size: "lg", onPress: null };
  const intl4 = markAsDismissed(1115).intl;
  obj16.text = intl4.string(ref(3716).TswY68);
  obj16.onPress = callback;
  const items11 = [closure_7(markAsDismissed(5273).Button, obj16), ];
  const obj17 = { text: null, variant: "secondary", size: "lg", onPress: null };
  const intl5 = markAsDismissed(1115).intl;
  obj17.text = intl5.string(markAsDismissed(1115).t.TulDPl);
  obj17.onPress = callback1;
  items11[1] = closure_7(markAsDismissed(5273).Button, obj17);
  obj15.children = items11;
  items3[5] = closure_8(View, obj15);
  obj3.children = items3;
  obj2.children = closure_8(View, obj3);
  obj.children = closure_7(markAsDismissed(7456).SafeAreaPaddingView, obj2);
  return closure_7(markAsDismissed(7483).BottomSheet, obj);
};