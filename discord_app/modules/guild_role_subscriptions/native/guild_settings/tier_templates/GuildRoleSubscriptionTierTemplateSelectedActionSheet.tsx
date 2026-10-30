// === Module 19928: GuildRoleSubscriptionTierTemplateSelectedActionSheet ===

// Module 19928 (GuildRoleSubscriptionTierTemplateSelectedActionSheet)
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1626 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(4855).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    children: null
  };
  const obj2 = { style: closure_7().container, children: null };
  const obj3 = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1114).intl;
  obj4.children = intl.string(markAsDismissed(1114).t.Y0PTc0);
  const items = [closure_5(markAsDismissed(5619).Text, obj4), closure_5(markAsDismissed(1188).Spacer, { size: 12 }), , , ];
  const obj5 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = markAsDismissed(1114).intl;
  obj5.children = intl2.string(markAsDismissed(1114).t["YSI/1/"]);
  items[2] = closure_5(markAsDismissed(5619).Text, obj5);
  items[3] = closure_5(markAsDismissed(1188).Spacer, { size: 48 });
  const obj6 = { text: null, onPress: null, grow: true };
  const intl3 = markAsDismissed(1114).intl;
  obj6.text = intl3.string(markAsDismissed(1114).t.MhldXX);
  obj6.onPress = function onPress() {
    return markAsDismissed(ContentDismissActionType.UNKNOWN);
  };
  items[4] = closure_5(markAsDismissed(5629).Button, obj6);
  obj3.children = items;
  obj2.children = closure_6(markAsDismissed(5270).BottomSheetScrollView, obj3);
  obj.children = closure_5(View, obj2);
  return closure_5(markAsDismissed(5267).BottomSheet, obj);
};