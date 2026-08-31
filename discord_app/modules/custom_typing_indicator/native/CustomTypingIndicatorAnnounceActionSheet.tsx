// === Module 11508: CustomTypingIndicatorAnnounceActionSheet ===

// Module 11508 (CustomTypingIndicatorAnnounceActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserSettingsSections } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1384 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles(() => {
  let obj = { content: null, examples: null, betaBadge: null, title: null, body: null, actions: null, row: null, outerRow: null, innerRow: null, outerStack: null, innerStack: null };
  obj = { alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
  obj[0] = obj;
  obj = { width: "100%", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_16 };
  obj[1] = obj;
  obj[2] = { marginTop: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.round, paddingVertical: 0 };
  obj1 = { marginTop: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.round, paddingVertical: 0 };
  obj[3] = { textAlign: "center", marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_8 };
  const obj2 = { textAlign: "center", marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_8 };
  obj[4] = { textAlign: "center", marginBottom: ThemesDefault.space.PX_24 };
  const obj3 = { textAlign: "center", marginBottom: ThemesDefault.space.PX_24 };
  obj[5] = { gap: ThemesDefault.space.PX_12, width: "100%" };
  const obj4 = { gap: ThemesDefault.space.PX_12, width: "100%" };
  obj[6] = { alignSelf: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: ThemesDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: ThemesDefault.radii.md };
  const obj5 = { alignSelf: "center", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderColor: ThemesDefault.colors.BORDER_NORMAL, borderWidth: 1, borderRadius: ThemesDefault.radii.md };
  obj[7] = { padding: ThemesDefault.space.PX_8, opacity: 0.75 };
  const obj6 = { padding: ThemesDefault.space.PX_8, opacity: 0.75 };
  obj[8] = { padding: ThemesDefault.space.PX_10 };
  obj[9] = { width: "auto", maxWidth: "80%", overflow: "hidden" };
  obj[10] = { width: "auto", maxWidth: "100%", overflow: "hidden" };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnnounceActionSheet.tsx");

export default function CustomTypingIndicatorAnnounceActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let ref;
  ref = React.useRef(null);
  const tmp2 = callback3();
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    let obj = markAsDismissed(closure_1_2[7]);
    obj = { screen: closure_1_5.TYPING_INDICATOR };
    obj.openUserSettings(obj, () => {
      callback(closure_1_6.TAKE_ACTION);
    });
  }, items);
  const items2 = [markAsDismissed];
  const callback1 = React.useCallback(() => {
    markAsDismissed(closure_1_6.USER_DISMISS);
  }, items1);
  const callback2 = React.useCallback(() => {
    markAsDismissed(closure_1_6.USER_DISMISS);
  }, items2);
  let obj = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: null };
  obj = { bottom: true, children: null };
  obj = { style: tmp2.content, children: null };
  const items3 = [
    callback(markAsDismissed(5905).ActionSheetHeaderBar, {
      onPress() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
        markAsDismissed(closure_1_6.USER_DISMISS);
      }
    }),
  ,
  ,
  ,
  ,

  ];
  const obj2 = { style: tmp2.examples, children: null };
  const obj3 = { style: items4, children: null };
  items4 = [, ];
  ({ row: arr5[0], outerRow: arr5[1] } = tmp2);
  const obj4 = { name: "Cap", suggestion: markAsDismissed(1938).TypingSuggestion.UNSPECIFIED, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, emojiSource: null, style: null };
  const items5 = [ref(11511), ref(11512), ref(11511)];
  obj4[7] = items5;
  obj4[8] = tmp2.outerStack;
  obj3[1] = callback(ref(11509), obj4);
  const items6 = [callback(View, obj3), , ];
  const obj5 = { style: items7, children: null };
  items7 = [, ];
  ({ row: arr8[0], innerRow: arr8[1] } = tmp2);
  const obj6 = { name: "Rose", suggestion: null, emojiSize: 28, spacing: 10, textVariant: "text-lg/medium", textColor: "text-default", lineClamp: 1, style: null, emojiSource: null };
  obj1 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(closure_1_6.USER_DISMISS);
    }
  };
  const tmp6 = ref(11509);
  obj6[1] = markAsDismissed(1938).TypingSuggestion.YAPPING;
  obj6[7] = tmp2.innerStack;
  const items8 = [ref(11513), ref(11514), ref(11513)];
  obj6[8] = items8;
  obj5[1] = callback(ref(11509), obj6);
  items6[1] = callback(View, obj5);
  const obj7 = { style: items9, children: null };
  items9 = [, ];
  ({ row: arr10[0], outerRow: arr10[1] } = tmp2);
  const obj8 = { name: "Loky", suggestion: null, emojiSize: 24, spacing: 8, textVariant: "text-md/medium", textColor: "text-subtle", lineClamp: 1, style: null, emojiSource: null };
  const tmp7 = ref(11509);
  obj8[1] = markAsDismissed(1938).TypingSuggestion.OVERSHARING;
  obj8[7] = tmp2.outerStack;
  const items10 = [ref(11515), ref(11516), ref(11517)];
  obj8[8] = items10;
  obj7[1] = callback(ref(11509), obj8);
  items6[2] = callback(View, obj7);
  obj2[1] = items6;
  items3[1] = callback2(View, obj2);
  const obj9 = { text: null, color: null, style: null };
  const intl = markAsDismissed(1236).intl;
  obj9[0] = intl.string(markAsDismissed(1236).t.oW0eUd);
  obj9[1] = markAsDismissed(1297).BadgeColors.EXPRESSIVE;
  obj9[2] = tmp2.betaBadge;
  items3[2] = callback(markAsDismissed(1297).TextBadge, obj9);
  const obj10 = { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: null };
  const intl2 = markAsDismissed(1236).intl;
  obj10[3] = intl2.string(ref(3473).uGxDiu);
  items3[3] = callback(markAsDismissed(4444).Text, obj10);
  const obj11 = { variant: "text-md/normal", style: tmp2.body, color: "text-muted", children: null };
  const intl3 = markAsDismissed(1236).intl;
  obj11[3] = intl3.string(ref(3473).yezU3E);
  items3[4] = callback(markAsDismissed(4444).Text, obj11);
  const obj12 = { style: tmp2.actions, children: null };
  const obj13 = { text: null, variant: "primary", size: "lg", onPress: null };
  const intl4 = markAsDismissed(1236).intl;
  obj13[0] = intl4.string(ref(3473).TswY68);
  obj13[3] = callback;
  const items11 = [callback(markAsDismissed(4896).Button, obj13), ];
  const obj14 = { text: null, variant: "secondary", size: "lg", onPress: null };
  const intl5 = markAsDismissed(1236).intl;
  obj14[0] = intl5.string(markAsDismissed(1236).t.TulDPl);
  obj14[3] = callback1;
  items11[1] = callback(markAsDismissed(4896).Button, obj14);
  obj12[1] = items11;
  items3[5] = callback2(View, obj12);
  obj[1] = items3;
  obj[1] = callback2(View, obj);
  obj[4] = callback(markAsDismissed(5521).SafeAreaPaddingView, obj);
  return callback(markAsDismissed(5590).BottomSheet, obj);
};