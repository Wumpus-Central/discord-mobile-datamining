// === Module 17894: GuildRoleSubscriptionTierTemplateSelectedActionSheet ===

// Module 17894 (GuildRoleSubscriptionTierTemplateSelectedActionSheet)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 }, button: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
obj2.button = { borderRadius: nativeDefault.radii.xs };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_7();
  const obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    children: null
  };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1114).intl;
  obj4.children = intl.string(markAsDismissed(1114).t.Y0PTc0);
  const items = [closure_5(markAsDismissed(4632).Text, obj4), closure_5(markAsDismissed(1176).Spacer, { size: 12 }), , , ];
  const obj5 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = markAsDismissed(1114).intl;
  obj5.children = intl2.string(markAsDismissed(1114).t["YSI/1/"]);
  items[2] = closure_5(markAsDismissed(4632).Text, obj5);
  items[3] = closure_5(markAsDismissed(1176).Spacer, { size: 48 });
  const obj6 = { text: null, pillStyle: null, onPress: null, grow: true };
  const intl3 = markAsDismissed(1114).intl;
  obj6.text = intl3.string(markAsDismissed(1114).t.MhldXX);
  obj6.pillStyle = tmp.button;
  obj6.onPress = function onPress() {
    return markAsDismissed(ContentDismissActionType.UNKNOWN);
  };
  items[4] = closure_5(markAsDismissed(5057).BaseTextButton, obj6);
  obj3.children = items;
  obj2.children = closure_6(markAsDismissed(6728).BottomSheetScrollView, obj3);
  obj.children = closure_5(View, obj2);
  return closure_5(markAsDismissed(7253).BottomSheet, obj);
};