import { useSafeAreaInsets } from "../../../../safe_area/useSafeAreaInsets.native.tsx";
// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, button: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, padding: 24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: require("Themes").radii.xs };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { borderRadius: require("Themes").radii.xs };
const result = require("ContentDismissActionType").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateSelectedActionSheet.tsx");

export default function GuildRoleSubscriptionTierTemplateSelectedActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = createCacheKey();
  let obj = {
    backdropOpacity: 0.8,
    onDismiss() {
      return markAsDismissed(outer1_4.UNKNOWN);
    },
    children: null
  };
  obj = { style: tmp.container, children: null };
  obj = { contentContainerStyle: { paddingBottom: useSafeAreaInsets().bottom }, children: null };
  const obj1 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = markAsDismissed(1236).intl;
  obj1[2] = intl.string(markAsDismissed(1236).t.Y0PTc0);
  const items = [callback(markAsDismissed(4281).Text, obj1), callback(markAsDismissed(1297).Spacer, { size: 12 }), , , ];
  const obj2 = { variant: "text-sm/normal", color: "text-default", children: null };
  const intl2 = markAsDismissed(1236).intl;
  obj2[2] = intl2.string(markAsDismissed(1236).t["YSI/1/"]);
  items[2] = callback(markAsDismissed(4281).Text, obj2);
  items[3] = callback(markAsDismissed(1297).Spacer, { size: 48 });
  const obj3 = { text: null, pillStyle: null, onPress: null, grow: true };
  const intl3 = markAsDismissed(1236).intl;
  obj3[0] = intl3.string(markAsDismissed(1236).t.MhldXX);
  obj3[1] = tmp.button;
  obj3[2] = function onPress() {
    return markAsDismissed(outer1_4.UNKNOWN);
  };
  items[4] = callback(markAsDismissed(4696).BaseTextButton, obj3);
  obj[1] = items;
  obj[1] = callback2(markAsDismissed(5340).BottomSheetScrollView, obj);
  obj[2] = callback(View, obj);
  return callback(markAsDismissed(5338).BottomSheet, obj);
};