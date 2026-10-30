// === Module 13686: CustomTypingIndicatorAnnounceActionSheet ===

// Module 13686 (CustomTypingIndicatorAnnounceActionSheet)
import nativeDefault from "native" /* 575 */;
import openUserSettings from "openUserSettings" /* 7557 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1072).UserSettingsSections;
const ContentDismissActionType = fn(4855).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnnounceActionSheet.tsx");

export default function CustomTypingIndicatorAnnounceActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let analyticsLocations1 = markAsDismissed.analyticsLocations;
  let analyticsLocations;
  const ref = noop.useRef(null);
  const tmp2 = closure_9();
  if (analyticsLocations1 == null) {
    analyticsLocations1 = [];
  }
  analyticsLocations = ref(analyticsLocations[7])(analyticsLocations1, tmp3(tmp4[8]).CUSTOM_TYPING_INDICATOR_ANNOUNCEMENT_SHEET).analyticsLocations;
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
      }
    }),
  ,
  ,
  ,
  ,

  ];
  const obj6 = { style: tmp2.examples, children: null };
  const obj7 = { style: null, children: null };
  const items4 = [, ];
  ({ row: arr6[0], outerRow: arr6[1] } = tmp2);
  obj7.style = items4;
  const obj8 = { name: "Cap", suggestion: null, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: null, style: null };
  const obj5 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
  const tmp5 = ref(analyticsLocations[7]);
  obj8.suggestion = markAsDismissed(analyticsLocations[14]).TypingSuggestion.UNSPECIFIED;
  const items5 = [ref(analyticsLocations[15]), ref(analyticsLocations[16]), ref(analyticsLocations[15])];
  obj8.emojiSource = items5;
  obj8.style = tmp2.outerStack;
  obj7.children = closure_7(ref(analyticsLocations[13]), obj8);
  const items6 = [closure_7(View, obj7), , ];
  const obj9 = { style: null, children: null };
  const items7 = [, ];
  ({ row: arr9[0], innerRow: arr9[1] } = tmp2);
  obj9.style = items7;
  const obj10 = { name: "Rose", suggestion: null, emojiSize: 28, spacing: 10, textVariant: "text-lg/medium", textColor: "text-default", lineClamp: 1, style: null, emojiSource: null };
  const tmp3Result = ref(analyticsLocations[13]);
  obj10.suggestion = markAsDismissed(analyticsLocations[14]).TypingSuggestion.YAPPING;
  obj10.style = tmp2.innerStack;
  const items8 = [ref(analyticsLocations[17]), ref(analyticsLocations[18]), ref(analyticsLocations[17])];
  obj10.emojiSource = items8;
  obj9.children = closure_7(ref(analyticsLocations[13]), obj10);
  items6[1] = closure_7(View, obj9);
  const obj11 = { style: null, children: null };
  const items9 = [, ];
  ({ row: arr11[0], outerRow: arr11[1] } = tmp2);
  obj11.style = items9;
  const obj12 = { name: "Loky", suggestion: null, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, style: null, emojiSource: null };
  const tmp3Result3 = ref(analyticsLocations[13]);
  obj12.suggestion = markAsDismissed(analyticsLocations[14]).TypingSuggestion.OVERSHARING;
  obj12.style = tmp2.outerStack;
  const items10 = [ref(analyticsLocations[19]), ref(analyticsLocations[20]), ref(analyticsLocations[21])];
  obj12.emojiSource = items10;
  obj11.children = closure_7(ref(analyticsLocations[13]), obj12);
  items6[2] = closure_7(View, obj11);
  obj6.children = items6;
  items3[1] = closure_8(View, obj6);
  const obj13 = { text: null, color: null, style: null };
  const intl = markAsDismissed(tmp4[23]).intl;
  obj13.text = intl.string(markAsDismissed(analyticsLocations[23]).t.y2b7CA);
  obj13.color = markAsDismissed(analyticsLocations[22]).BadgeColors.EXPRESSIVE;
  obj13.style = tmp2.newBadge;
  items3[2] = closure_7(markAsDismissed(analyticsLocations[22]).TextBadge, obj13);
  const obj14 = { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: null };
  const intl2 = markAsDismissed(tmp4[23]).intl;
  obj14.children = intl2.string(ref(analyticsLocations[25]).uGxDiu);
  items3[3] = closure_7(markAsDismissed(analyticsLocations[24]).Text, obj14);
  const obj15 = { variant: "text-md/normal", style: tmp2.body, color: "text-muted", children: null };
  const intl3 = markAsDismissed(tmp4[23]).intl;
  obj15.children = intl3.string(ref(analyticsLocations[25]).yezU3E);
  items3[4] = closure_7(markAsDismissed(analyticsLocations[24]).Text, obj15);
  const obj16 = { style: tmp2.actions, children: null };
  const obj17 = { text: null, variant: "primary", size: "lg", onPress: null };
  const intl4 = markAsDismissed(tmp4[23]).intl;
  obj17.text = intl4.string(ref(analyticsLocations[25]).TswY68);
  obj17.onPress = callback;
  const items11 = [closure_7(markAsDismissed(analyticsLocations[26]).Button, obj17), ];
  const obj18 = { text: null, variant: "secondary", size: "lg", onPress: null };
  const intl5 = markAsDismissed(tmp4[23]).intl;
  obj18.text = intl5.string(markAsDismissed(analyticsLocations[23]).t.TulDPl);
  obj18.onPress = callback1;
  items11[1] = closure_7(markAsDismissed(analyticsLocations[26]).Button, obj18);
  obj16.children = items11;
  items3[5] = closure_8(View, obj16);
  obj4.children = items3;
  obj3.children = closure_8(View, obj4);
  obj2.children = closure_7(markAsDismissed(analyticsLocations[11]).SafeAreaPaddingView, obj3);
  return closure_7(markAsDismissed(analyticsLocations[10]).BottomSheet, obj2);
};