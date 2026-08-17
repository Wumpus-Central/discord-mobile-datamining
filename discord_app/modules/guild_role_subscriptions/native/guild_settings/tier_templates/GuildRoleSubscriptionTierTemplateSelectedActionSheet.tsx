// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, button: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: ThemesDefault.radii.xs };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: ThemesDefault.radii.xs };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = callback3();
  let obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(closure_1_4.UNKNOWN);
    },
    children: null
  };
  obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: { paddingBottom: useSafeAreaInsetsDefault().bottom }, children: null };
  obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1236).intl;
  obj1[2] = intl.string(markAsDismissed(1236).t.Y0PTc0);
  const items = [callback(markAsDismissed(4734).Text, obj1), callback(markAsDismissed(1297).Spacer, { size: 12 }), , , ];
  const obj2 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = markAsDismissed(1236).intl;
  obj2[2] = intl2.string(markAsDismissed(1236).t["YSI/1/"]);
  items[2] = callback(markAsDismissed(4734).Text, obj2);
  items[3] = callback(markAsDismissed(1297).Spacer, { size: 48 });
  const obj3 = { text: null, pillStyle: null, onPress: null, grow: true };
  const intl3 = markAsDismissed(1236).intl;
  obj3[0] = intl3.string(markAsDismissed(1236).t.MhldXX);
  obj3[1] = tmp.button;
  obj3[2] = function onPress() {
    return markAsDismissed(closure_1_4.UNKNOWN);
  };
  items[4] = callback(markAsDismissed(4746).BaseTextButton, obj3);
  obj[1] = items;
  obj[1] = callback2(markAsDismissed(6952).BottomSheetScrollView, obj);
  obj[2] = callback(View, obj);
  return callback(markAsDismissed(6950).BottomSheet, obj);
};