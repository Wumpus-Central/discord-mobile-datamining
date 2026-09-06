// === Module 17777: GuildRoleSubscriptionTierTemplateSelectedActionSheet ===

// Module 17777 (GuildRoleSubscriptionTierTemplateSelectedActionSheet)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, button: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
createStyles.container = createStyles;
createStyles.button = { borderRadius: nativeDefault.radii.xs };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_7();
  let obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    children: null
  };
  obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1114).intl;
  obj1.children = intl.string(markAsDismissed(1114).t.Y0PTc0);
  const items = [closure_5(markAsDismissed(4556).Text, obj1), closure_5(markAsDismissed(1178).Spacer, { size: 12 }), , , ];
  const obj2 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = markAsDismissed(1114).intl;
  obj2.children = intl2.string(markAsDismissed(1114).t["YSI/1/"]);
  items[2] = closure_5(markAsDismissed(4556).Text, obj2);
  items[3] = closure_5(markAsDismissed(1178).Spacer, { size: 48 });
  const obj3 = { text: null, pillStyle: null, onPress: null, grow: true };
  const intl3 = markAsDismissed(1114).intl;
  obj3.text = intl3.string(markAsDismissed(1114).t.MhldXX);
  obj3.pillStyle = tmp.button;
  obj3.onPress = function onPress() {
    return markAsDismissed(ContentDismissActionType.UNKNOWN);
  };
  items[4] = closure_5(markAsDismissed(4976).BaseTextButton, obj3);
  obj.children = items;
  obj.children = closure_6(markAsDismissed(6627).BottomSheetScrollView, obj);
  obj.children = closure_5(View, obj);
  return closure_5(markAsDismissed(7150).BottomSheet, obj);
};