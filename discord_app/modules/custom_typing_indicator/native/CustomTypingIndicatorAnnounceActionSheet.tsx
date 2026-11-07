// === Module 13968: CustomTypingIndicatorAnnounceActionSheet ===

// Module 13968 (CustomTypingIndicatorAnnounceActionSheet)
import nativeDefault from "native" /* 575 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 4970 */;
import dismissible_content from "dismissible_content" /* 4973 */;
import openUserSettings from "openUserSettings" /* 7635 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1072).UserSettingsSections;
let closure_7 = fn(5389).ACTION_SHEET_BORDER_RADIUS;
const ContentDismissActionType = fn(4986).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = { launch: null, new_presets: null };
let items = [fn(1398).TypingSuggestion.UNSPECIFIED, fn(1398).TypingSuggestion.YAPPING, fn(1398).TypingSuggestion.OVERSHARING];
obj.launch = items;
let items1 = [fn(1398).TypingSuggestion.CHIRPING, fn(1398).TypingSuggestion.KEYSMASHING, fn(1398).TypingSuggestion.PURRING];
obj.new_presets = items1;
const createStyles = fn(5140);
let closure_12 = createStyles.createStyles(() => {
  obj = { gradient: { borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, overflow: "hidden" }, content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, examples: null, newBadge: null, title: null, body: null, actions: null, row: null, outerRow: null, innerRow: null, outerStack: null, innerStack: null };
  const obj2 = { borderTopLeftRadius: borderTopRightRadius, borderTopRightRadius, overflow: "hidden" };
  const obj3 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.examples = { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
  const obj4 = { width: "100%", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
  obj.newBadge = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 };
  const obj5 = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, paddingVertical: 0 };
  obj.title = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
  const obj6 = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
  obj.body = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
  const obj7 = { textAlign: "center", marginBottom: nativeDefault.space.PX_24 };
  obj.actions = { gap: nativeDefault.space.PX_12, width: "100%" };
  const obj8 = { gap: nativeDefault.space.PX_12, width: "100%" };
  obj.row = { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: nativeDefault.radii.md };
  const obj9 = { alignSelf: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: nativeDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: nativeDefault.radii.md };
  obj.outerRow = { padding: nativeDefault.space.PX_8, opacity: 0.75 };
  const obj10 = { padding: nativeDefault.space.PX_8, opacity: 0.75 };
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
  const tmp2 = closure_12();
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  analyticsLocations2 = flag(ref[13])(analyticsLocations, tmp3(tmp4[14]).CUSTOM_TYPING_INDICATOR_ANNOUNCEMENT_SHEET).analyticsLocations;
  items = [markAsDismissed, flag];
  callback = obj.useCallback((arg0) => {
    markAsDismissed(arg0);
    if (flag) {
      UserSettingsProtoActionCreators.addDismissedContent(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_NEW_PRESETS_ACTION_SHEET);
    }
  }, items);
  const tmp5 = flag(ref[13]);
  [tmp8, tmp9, tmp10] = analyticsLocations2(callback[variant], 3);
  if ("launch" === variant) {
    let obj2 = { badge: null, title: null, body: null };
    const intl = markAsDismissed(tmp4[8]).intl;
    obj2.badge = intl.string(markAsDismissed(tmp4[8]).t.y2b7CA);
    const intl2 = markAsDismissed(tmp4[8]).intl;
    obj2.title = intl2.string(tmp3(tmp4[9]).uGxDiu);
    const intl3 = markAsDismissed(tmp4[8]).intl;
    obj2.body = intl3.string(tmp3(tmp4[9]).yezU3E);
    let tmp12 = obj2;
  } else if ("new_presets" === variant) {
    const obj3 = { badge: null, title: null, body: null };
    const intl6 = markAsDismissed(tmp4[8]).intl;
    obj3.badge = intl6.string(markAsDismissed(tmp4[8]).t.oW0eUd);
    const intl7 = markAsDismissed(tmp4[8]).intl;
    obj3.title = intl7.string(tmp3(tmp4[9]).LGMA0i);
    const intl8 = markAsDismissed(tmp4[8]).intl;
    const obj4 = { preset: null };
    const intl9 = markAsDismissed(tmp4[8]).intl;
    obj4.preset = intl9.string(markAsDismissed(tmp4[10]).getCustomTypingIndicatorSuggestionMessage(markAsDismissed(tmp4[7]).TypingSuggestion.KEYSMASHING));
    obj3.body = intl8.formatToPlainString(tmp3(tmp4[9]).ByhEOe, obj4);
    tmp12 = obj3;
    const obj23 = markAsDismissed(tmp4[10]);
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
  let tmp16Result = "new_presets" === variant;
  if (tmp16Result) {
    const obj6 = { color: "nitro-pink", offsetBottom: 0.3, backgroundColor: tmp3(tmp4[12]).colors.MOBILE_ACTIONSHEET_BACKGROUND, style: tmp2.gradient };
    tmp16Result = closure_9(tmp17(tmp4[20]).ExpressiveGradient, obj6);
  }
  const obj7 = { bottom: true, children: null };
  const items4 = [tmp16Result, ];
  const obj8 = { style: tmp2.content, children: null };
  const items5 = [
    closure_9(markAsDismissed(ref[21]).ActionSheetHeaderBar, {
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
  const obj10 = { style: tmp2.examples, children: null };
  const obj11 = { style: null, children: null };
  const items6 = [, ];
  ({ row: arr7[0], outerRow: arr7[1] } = tmp2);
  obj11.style = items6;
  const obj12 = { name: "Cap", suggestion: tmp8, emojiSize: 24, spacing: 8, textVariant: "body-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: null, style: null };
  const obj9 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      callback(ContentDismissActionType.USER_DISMISS);
    }
  };
  const tmp7 = analyticsLocations2(callback[variant], 3);
  const items7 = [flag(ref[23]), flag(ref[24]), flag(ref[23])];
  obj12.emojiSource = items7;
  obj12.style = tmp2.outerStack;
  obj11.children = closure_9(flag(ref[22]), obj12);
  const items8 = [closure_9(View, obj11), , ];
  const obj13 = { style: null, children: null };
  const items9 = [, ];
  ({ row: arr10[0], innerRow: arr10[1] } = tmp2);
  obj13.style = items9;
  const obj14 = { name: "Rose", suggestion: tmp9, emojiSize: 28, spacing: 10, textVariant: "body-lg/medium", textColor: "text-default", lineClamp: 1, style: tmp2.innerStack, emojiSource: null };
  const tmp3Result = flag(ref[22]);
  const items10 = [flag(ref[25]), flag(ref[26]), flag(ref[25])];
  obj14.emojiSource = items10;
  obj13.children = closure_9(flag(ref[22]), obj14);
  items8[1] = closure_9(View, obj13);
  const obj15 = { style: null, children: null };
  const items11 = [, ];
  ({ row: arr12[0], outerRow: arr12[1] } = tmp2);
  obj15.style = items11;
  const obj16 = { name: "Loky", suggestion: tmp10, emojiSize: 24, spacing: 8, textVariant: "body-md/medium", textColor: "text-subtle", lineClamp: 1, style: tmp2.outerStack, emojiSource: null };
  const tmp3Result3 = flag(ref[22]);
  const items12 = [flag(ref[27]), flag(ref[28]), flag(ref[29])];
  obj16.emojiSource = items12;
  obj15.children = closure_9(flag(ref[22]), obj16);
  items8[2] = closure_9(View, obj15);
  obj10.children = items8;
  items5[1] = closure_10(View, obj10);
  const tmp3Result4 = flag(ref[22]);
  items5[2] = closure_9(markAsDismissed(ref[30]).TextBadge, { text: tmp12.badge, color: markAsDismissed(ref[30]).BadgeColors.EXPRESSIVE, style: tmp2.newBadge });
  items5[3] = closure_9(markAsDismissed(ref[31]).Text, { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: tmp12.title });
  items5[4] = closure_9(markAsDismissed(ref[31]).Text, { variant: "body-md/normal", style: tmp2.body, color: "text-muted", children: tmp12.body });
  const obj20 = { style: tmp2.actions, children: null };
  const obj21 = { text: null, variant: "primary", size: "lg", onPress: null };
  const intl4 = tmp17(tmp4[8]).intl;
  obj21.text = intl4.string(flag(ref[9]).TswY68);
  obj21.onPress = callback1;
  const items13 = [closure_9(markAsDismissed(ref[32]).Button, obj21), ];
  const obj22 = { text: null, variant: "secondary", size: "lg", onPress: null };
  const intl5 = tmp17(tmp4[8]).intl;
  obj22.text = intl5.string(markAsDismissed(ref[8]).t.TulDPl);
  obj22.onPress = callback2;
  items13[1] = closure_9(markAsDismissed(ref[32]).Button, obj22);
  obj20.children = items13;
  items5[5] = closure_10(View, obj20);
  obj8.children = items5;
  items4[1] = closure_10(View, obj8);
  obj7.children = items4;
  obj5.children = closure_10(markAsDismissed(ref[19]).SafeAreaPaddingView, obj7);
  return closure_9(markAsDismissed(ref[18]).BottomSheet, obj5);
};