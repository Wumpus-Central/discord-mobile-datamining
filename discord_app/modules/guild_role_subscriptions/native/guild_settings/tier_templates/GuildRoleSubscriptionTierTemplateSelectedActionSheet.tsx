// === Module 18018: GuildRoleSubscriptionTierTemplateSelectedActionSheet ===

// Module 18018 (GuildRoleSubscriptionTierTemplateSelectedActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, markAsDismissed;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, button: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.radii.xs };
let closure_7 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  let intl;
  let intl2;
  let items;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp29;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = markAsDismissed(576);
  const cResult = obj.c(23);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_7();
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] !== markAsDismissed) {
    const fn = function u() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    };
    cResult[0] = markAsDismissed;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const container = tmp4.container;
  if (cResult[2] !== bottom) {
    const obj2 = { paddingBottom: bottom };
    cResult[2] = bottom;
    cResult[3] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(1126).t.Y0PTc0) };
    const Text = tmp(4892).Text;
    intl = tmp(1126).intl;
    const tmp10 = closure_5(Text, obj3);
    const tmp11 = closure_5(markAsDismissed(1188).Spacer, { size: 12 });
    cResult[4] = tmp10;
    cResult[5] = tmp11;
    tmp8 = tmp11;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "text-sm/normal", color: "text-default", children: intl2.string(markAsDismissed(1126).t["YSI/1/"]) };
    const Text2 = tmp(4892).Text;
    intl2 = tmp(1126).intl;
    const tmp15 = closure_5(Text2, obj4);
    const tmp16 = closure_5(markAsDismissed(1188).Spacer, { size: 48 });
    cResult[6] = tmp15;
    cResult[7] = tmp16;
    tmp13 = tmp16;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult = intl3.string(markAsDismissed(1126).t.MhldXX);
    cResult[8] = stringResult;
    tmp17 = stringResult;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] !== markAsDismissed) {
    class T {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
    cResult[9] = markAsDismissed;
    cResult[10] = T;
  } else {
    class T {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
  }
  if (cResult[11] === tmp4.button) {
    class T {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
    if (cResult[14] === tmp20) {
      class T {
        constructor() {
          return markAsDismissed(ContentDismissActionType.UNKNOWN);
        }
      }
      if (cResult[17] === tmp4.container) {
        class T {
          constructor() {
            return markAsDismissed(ContentDismissActionType.UNKNOWN);
          }
        }
        if (cResult[20] === tmp5) {
          class T {
            constructor() {
              return markAsDismissed(ContentDismissActionType.UNKNOWN);
            }
          }
          return tmp29;
        }
        const obj5 = { backdropOpacity: 0.8, onDismiss: tmp5, children: tmp25 };
        const tmp31 = closure_5(markAsDismissed(6652).BottomSheet, obj5);
        cResult[20] = tmp5;
        cResult[21] = tmp25;
        cResult[22] = tmp31;
        tmp29 = tmp31;
      }
      const obj6 = { style: container, children: tmp22 };
      cResult[17] = tmp4.container;
      cResult[18] = tmp22;
      cResult[19] = closure_5(View, obj6);
      const tmp28 = closure_5(View, obj6);
    }
    const obj7 = { contentContainerStyle: tmp6, children: items };
    items = [tmp7, tmp8, tmp12, tmp13, tmp20];
    cResult[14] = tmp20;
    cResult[15] = tmp6;
    cResult[16] = closure_6(markAsDismissed(6119).BottomSheetScrollView, obj7);
    const tmp24 = closure_6(markAsDismissed(6119).BottomSheetScrollView, obj7);
  }
  const obj8 = { text: tmp17, pillStyle: tmp4.button, onPress: T, grow: true };
  cResult[11] = tmp4.button;
  cResult[12] = T;
  cResult[13] = closure_5(markAsDismissed(5602).BaseTextButton, obj8);
  const tmp21 = closure_5(markAsDismissed(5602).BaseTextButton, obj8);
}) : ((markAsDismissed) => {
  let BottomSheetScrollView;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let obj3;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_7();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    children: closure_5(View, obj2)
  };
  obj2 = { style: tmp.container, children: closure_6(BottomSheetScrollView, obj3) };
  BottomSheet = markAsDismissed(6652).BottomSheet;
  obj3 = { contentContainerStyle: { paddingBottom: bottom }, children: items };
  BottomSheetScrollView = markAsDismissed(6119).BottomSheetScrollView;
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(1126).t.Y0PTc0) };
  const Text = markAsDismissed(4892).Text;
  intl = markAsDismissed(1126).intl;
  items = [closure_5(Text, obj4), closure_5(markAsDismissed(1188).Spacer, { size: 12 }), , , ];
  const obj5 = { variant: "text-sm/normal", color: "text-default", children: intl2.string(markAsDismissed(1126).t["YSI/1/"]) };
  const Text2 = markAsDismissed(4892).Text;
  intl2 = markAsDismissed(1126).intl;
  items[2] = closure_5(Text2, obj5);
  items[3] = closure_5(markAsDismissed(1188).Spacer, { size: 48 });
  const obj6 = {
    text: intl3.string(markAsDismissed(1126).t.MhldXX),
    pillStyle: tmp.button,
    onPress() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    grow: true
  };
  const BaseTextButton = markAsDismissed(5602).BaseTextButton;
  intl3 = markAsDismissed(1126).intl;
  items[4] = closure_5(BaseTextButton, obj6);
  return closure_5(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx");

export default tmp5;