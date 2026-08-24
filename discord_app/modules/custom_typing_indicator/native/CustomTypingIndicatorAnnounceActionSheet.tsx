// === Module 11195: CustomTypingIndicatorAnnounceActionSheet ===

// Module 11195 (CustomTypingIndicatorAnnounceActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { UserSettingsSections } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles(() => {
  let obj = { content: null, examples: null, betaBadge: null, title: null, body: null, actions: null, row: null, outerRow: null, innerRow: null, stack: null };
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
  obj[7] = { padding: 8, opacity: 0.75 };
  obj[8] = { padding: 10 };
  obj[9] = { width: "auto" };
  return obj;
});
let closure_10 = ["Cap", "Rose", "Loky"];
const result = require("set").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorAnnounceActionSheet.tsx");

export default function CustomTypingIndicatorAnnounceActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let ref;
  dependencyMap = undefined;
  ref = React.useRef(null);
  const tmp2 = callback3();
  dependencyMap = tmp2;
  let items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = React.useCallback(() => {
    let obj = markAsDismissed(row[7]);
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
    callback(markAsDismissed(7162).ActionSheetHeaderBar, {
      onPress() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
        markAsDismissed(closure_1_6.USER_DISMISS);
      }
    }),
    callback(View, {
      style: tmp2.examples,
      children: closure_10.map((name) => {
        const items = [row.row, ];
        let obj = { style: items, children: null };
        items[1] = 1 === arg1 ? row.innerRow : row.outerRow;
        obj = { name, suggestion: markAsDismissed(row[12]).TypingSuggestion.UNSPECIFIED, emojiSize: null, spacing: null, textVariant: null, textColor: null, lineClamp: 1, style: null };
        let num = 24;
        if (1 === arg1) {
          num = 28;
        }
        obj[2] = num;
        let num2 = 8;
        if (1 === arg1) {
          num2 = 10;
        }
        obj[3] = num2;
        let str = "text-md/medium";
        if (1 === arg1) {
          str = "text-lg/medium";
        }
        obj[4] = str;
        obj[5] = "text-subtle";
        obj[7] = row.stack;
        obj[1] = closure_1_7(ref(row[11]), obj);
        return closure_1_7(closure_1_4, obj, name);
      })
    }),
  ,
  ,
  ,

  ];
  const obj3 = { text: null, color: null, style: null };
  const intl = markAsDismissed(1236).intl;
  obj3[0] = intl.string(markAsDismissed(1236).t.oW0eUd);
  obj3[1] = markAsDismissed(1297).BadgeColors.EXPRESSIVE;
  obj3[2] = tmp2.betaBadge;
  items3[2] = callback(markAsDismissed(1297).TextBadge, obj3);
  const obj4 = { variant: "heading-lg/medium", style: tmp2.title, color: "text-default", children: null };
  const intl2 = markAsDismissed(1236).intl;
  obj4[3] = intl2.string(ref(3406).uGxDiu);
  items3[3] = callback(markAsDismissed(4739).Text, obj4);
  const obj5 = { variant: "text-md/normal", style: tmp2.body, color: "text-muted", children: null };
  const intl3 = markAsDismissed(1236).intl;
  obj5[3] = intl3.string(ref(3406).yezU3E);
  items3[4] = callback(markAsDismissed(4739).Text, obj5);
  const obj6 = { style: tmp2.actions, children: null };
  const obj7 = { text: null, variant: "primary", size: "lg", onPress: null };
  const intl4 = markAsDismissed(1236).intl;
  obj7[0] = intl4.string(ref(3406).TswY68);
  obj7[3] = callback;
  const items4 = [callback(markAsDismissed(4750).Button, obj7), ];
  const obj8 = { text: null, variant: "secondary", size: "lg", onPress: null };
  const intl5 = markAsDismissed(1236).intl;
  obj8[0] = intl5.string(ref(3406).CroLGN);
  obj8[3] = callback1;
  items4[1] = callback(markAsDismissed(4750).Button, obj8);
  obj6[1] = items4;
  items3[5] = callback2(View, obj6);
  obj[1] = items3;
  obj[1] = callback2(View, obj);
  obj[4] = callback(markAsDismissed(6840).SafeAreaPaddingView, obj);
  return callback(markAsDismissed(6988).BottomSheet, obj);
};