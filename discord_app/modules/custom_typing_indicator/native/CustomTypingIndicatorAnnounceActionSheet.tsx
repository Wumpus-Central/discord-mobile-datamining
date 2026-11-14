// === Module 14582: CustomTypingIndicatorAnnounceActionSheet ===

// Module 14582 (CustomTypingIndicatorAnnounceActionSheet)
import nativeDefault from "native" /* 575 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 5136 */;
import dismissible_content from "dismissible_content" /* 5139 */;
import openUserSettings from "openUserSettings" /* 8604 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1072).UserSettingsSections;
const ContentDismissActionType = fn(5152).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { launch: null, new_presets: null };
let items = [fn(1401).TypingSuggestion.UNSPECIFIED, fn(1401).TypingSuggestion.YAPPING, fn(1401).TypingSuggestion.OVERSHARING];
obj.launch = items;
let items1 = [fn(1401).TypingSuggestion.CHIRPING, fn(1401).TypingSuggestion.KEYSMASHING, fn(1401).TypingSuggestion.PURRING];
obj.new_presets = items1;
const createStyles = fn(5306);
let closure_11 = createStyles.createStyles(() => {
  obj = { content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, examples: null, newBadge: null, title: null, body: null, actions: null, row: null, outerRow: null, innerRow: null, outerStack: null, innerStack: null };
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
  ({ analyticsLocations, variant } = markAsDismissed);
  if (variant === undefined) {
    variant = "launch";
  }
  let flag = markAsDismissed.dismissNewPresetsSheet;
  if (flag === undefined) {
    flag = false;
  }
  let analyticsLocations2;
  let callback;
  const ref = callback.useRef(null);
  const tmp2 = closure_11();
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  analyticsLocations2 = flag(ref[12])(analyticsLocations, tmp3(tmp4[13]).CUSTOM_TYPING_INDICATOR_ANNOUNCEMENT_SHEET).analyticsLocations;
  items = [markAsDismissed, flag];
  callback = obj.useCallback((arg0) => {
    markAsDismissed(arg0);
    if (flag) {
      UserSettingsProtoActionCreators.addDismissedContent(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET);
    }
  }, items);
  const tmp5 = flag(ref[12]);
  [tmp8, tmp9, tmp10] = analyticsLocations2(callback[variant], 3);
  if ("launch" === variant) {
    let obj2 = { badge: null, title: null, body: null };
    const intl = markAsDismissed(tmp4[7]).intl;
    obj2.badge = intl.string(markAsDismissed(tmp4[7]).t.y2b7CA);
    const intl2 = markAsDismissed(tmp4[7]).intl;
    obj2.title = intl2.string(tmp3(tmp4[8]).uGxDiu);
    const intl3 = markAsDismissed(tmp4[7]).intl;
    obj2.body = intl3.string(tmp3(tmp4[8]).yezU3E);
    let tmp12 = obj2;
  } else if ("new_presets" === variant) {
    const obj3 = { badge: null, title: null, body: null };
    const intl6 = markAsDismissed(tmp4[7]).intl;
    obj3.badge = intl6.string(markAsDismissed(tmp4[7]).t.oW0eUd);
    const intl7 = markAsDismissed(tmp4[7]).intl;
    obj3.title = intl7.string(tmp3(tmp4[8]).LGMA0i);
    const intl8 = markAsDismissed(tmp4[7]).intl;
    const obj4 = { preset: null };
    const intl9 = markAsDismissed(tmp4[7]).intl;
    obj4.preset = intl9.string(markAsDismissed(tmp4[9]).getCustomTypingIndicatorSuggestionMessage(markAsDismissed(tmp4[6]).TypingSuggestion.KEYSMASHING));
    obj3.body = intl8.formatToPlainString(tmp3(tmp4[8]).ByhEOe, obj4);
    tmp12 = obj3;
    const obj22 = markAsDismissed(tmp4[9]);
  }
  const items1 = [callback, analyticsLocations2];
  const items2 = [callback];
  const callback1 = obj.useCallback(() => {
    const obj2 = { screen: UserSettingsSections.TYPING_INDICATOR, params: { analyticsLocations: analyticsLocations2 } };
    openUserSettings.openUserSettings(obj2, () => {
      callback(constants.TAKE_ACTION);
    });
  }, items1);
  const items3 = [callback];
  const callback2 = obj.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const callback3 = obj.useCallback(() => {
    callback(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const obj5 = { ref, onDismiss: callback3, startExpanded: true, handleDisabled: true, children: null };
  const obj6 = { bottom: true, children: null };
  const obj7 = { style: tmp2.content, children: null };
  const items4 = [
    closure_8(markAsDismissed(ref[19]).ActionSheetHeaderBar, {
      onPress() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
        callback(ContentDismissActionType.USER_DISMISS);
      }
    }),
  ,
  ,
  ,
  ,

  ];
  const obj9 = { style: tmp2.examples, children: null };
  const obj10 = { style: null, children: null };
  const items5 = [, ];
  ({ row: arr6[0], outerRow: arr6[1] } = tmp2);
  obj10.style = items5;
  const obj11 = { name: "Cap", suggestion: tmp8, emojiSize: 24, spacing: 8, textVariant: "body-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: null, style: null };
  const obj8 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      callback(ContentDismissActionType.USER_DISMISS);
    }
  };
  const tmp7 = analyticsLocations2(callback[variant], 3);
  const items6 = [flag(ref[21]), flag(ref[22]), flag(ref[21])];
  obj11.emojiSource = items6;
  obj11.style = tmp2.outerStack;
  obj10.children = closure_8(flag(ref[20]), obj11);
  const items7 = [closure_8(View, obj10), , ];
  const obj12 = { style: null, children: null };
  const items8 = [, ];
  ({ row: arr9[0], innerRow: arr9[1] } = tmp2);
  obj12.style = items8;
  const obj13 = { name: "Rose", suggestion: tmp9, emojiSize: 28, spacing: 10, textVariant: "body-lg/medium", textColor: "text-default", lineClamp: 1, style: tmp2.innerStack, emojiSource: null };
  const tmp3Result = flag(ref[20]);
  const items9 = [flag(ref[23]), flag(ref[24]), flag(ref[23])];
  obj13.emojiSource = items9;
  obj12.children = closure_8(flag(ref[20]), obj13);
  items7[1] = closure_8(View, obj12);
  const obj14 = { style: null, children: null };
  const items10 = [, ];
  ({ row: arr11[0], outerRow: arr11[1] } = tmp2);
  obj14.style = items10;
  const obj15 = { name: "Loky", suggestion: tmp10, emojiSize: 24, spacing: 8, textVariant: "body-md/medium", textColor: "text-subtle", lineClamp: 1, style: tmp2.outerStack, emojiSource: null };
  const tmp3Result3 = flag(ref[20]);
  const items11 = [flag(ref[25]), flag(ref[26]), flag(ref[27])];
  obj15.emojiSource = items11;
  obj14.children = closure_8(flag(ref[20]), obj15);
  items7[2] = closure_8(View, obj14);
  obj9.children = items7;
  items4[1] = closure_9(View, obj9);
  const tmp3Result4 = flag(ref[20]);
  items4[2] = closure_8(markAsDismissed(ref[28]).TextBadge, { text: tmp12.badge, color: markAsDismissed(ref[28]).BadgeColors.EXPRESSIVE, style: tmp2.newBadge });
  items4[3] = closure_8(markAsDismissed(ref[29]).Text, { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: tmp12.title });
  items4[4] = closure_8(markAsDismissed(ref[29]).Text, { variant: "body-md/normal", style: tmp2.body, color: "text-muted", children: tmp12.body });
  const obj19 = { style: tmp2.actions, children: null };
  const obj20 = { text: null, variant: "primary", size: "lg", onPress: null };
  const intl4 = markAsDismissed(tmp4[7]).intl;
  obj20.text = intl4.string(flag(ref[8]).TswY68);
  obj20.onPress = callback1;
  const items12 = [closure_8(markAsDismissed(ref[30]).Button, obj20), ];
  const obj21 = { text: null, variant: "secondary", size: "lg", onPress: null };
  const intl5 = markAsDismissed(tmp4[7]).intl;
  obj21.text = intl5.string(markAsDismissed(ref[7]).t.TulDPl);
  obj21.onPress = callback2;
  items12[1] = closure_8(markAsDismissed(ref[30]).Button, obj21);
  obj19.children = items12;
  items4[5] = closure_9(View, obj19);
  obj7.children = items4;
  obj6.children = closure_9(View, obj7);
  obj5.children = closure_8(markAsDismissed(ref[18]).SafeAreaPaddingView, obj6);
  return closure_8(markAsDismissed(ref[17]).BottomSheet, obj5);
};