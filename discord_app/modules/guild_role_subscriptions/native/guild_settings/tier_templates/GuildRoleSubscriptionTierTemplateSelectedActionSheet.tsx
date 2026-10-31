// === Module 19986: GuildRoleSubscriptionTierTemplateSelectedActionSheet ===

// Module 19986 (GuildRoleSubscriptionTierTemplateSelectedActionSheet)
import nativeDefault from "native" /* 575 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 } };
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
  const obj2 = { style: closure_7().content, children: null };
  const obj3 = { spacing: nativeDefault.space.PX_8, children: null };
  const obj4 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1113).intl;
  obj4.children = intl.string(markAsDismissed(1113).t.Y0PTc0);
  const items = [closure_5(markAsDismissed(5624).Text, obj4), ];
  const obj5 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = markAsDismissed(1113).intl;
  obj5.children = intl2.string(markAsDismissed(1113).t["YSI/1/"]);
  items[1] = closure_5(markAsDismissed(5624).Text, obj5);
  obj3.children = items;
  const items1 = [closure_6(markAsDismissed(6027).Stack, obj3), ];
  const obj6 = { text: null, onPress: null, grow: true };
  const intl3 = markAsDismissed(1113).intl;
  obj6.text = intl3.string(markAsDismissed(1113).t.MhldXX);
  obj6.onPress = function onPress() {
    return markAsDismissed(ContentDismissActionType.UNKNOWN);
  };
  items1[1] = closure_5(markAsDismissed(5634).Button, obj6);
  obj2.children = items1;
  obj.children = closure_6(View, obj2);
  return closure_5(markAsDismissed(5272).BottomSheet, obj);
};