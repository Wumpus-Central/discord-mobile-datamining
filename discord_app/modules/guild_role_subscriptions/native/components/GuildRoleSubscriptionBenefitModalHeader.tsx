// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import SafeAreaPaddingView from "../../../../components_native/common/SafeAreaView.tsx";
import renderDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import getRoleEmojisAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { Fonts } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../rebrand/native/TextStyles.tsx";

require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = {
  headerContainer: null,
  headerButtonContainer: null,
  headerButtonStart: null,
  headerButtonEnd: null,
  headerButton: null,
  disabledButton: null,
  titleContainer: null,
  title: null,
  subtitle: null,
};
createCacheKey = {
  alignItems: "center",
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
  flexDirection: "row",
  justifyContent: "space-between",
  paddingBottom: 8,
  paddingHorizontal: 16,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", alignSelf: "center", minWidth: 60 };
createCacheKey[2] = { alignItems: "flex-start" };
createCacheKey[3] = { alignItems: "flex-end" };
const merged = Object.assign(
  importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16),
);
createCacheKey[4] = {};
let obj1 = {};
let obj2 = {};
const merged1 = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_MUTED, 16));
createCacheKey[5] = obj2;
createCacheKey[6] = { flex: 1, flexDirection: "column" };
let obj3 = {};
const importDefaultResult1 = importDefaultResult;
const merged2 = Object.assign(
  importDefaultResult(Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18),
);
obj3.textAlign = "center";
createCacheKey[7] = obj3;
createCacheKey[8] = { textAlign: "center" };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const importDefaultResult2 = importDefaultResult;
const result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitModalHeader.tsx",
);

export default function GuildRoleSubscriptionBenefitModalHeader(canSave) {
  canSave = canSave.canSave;
  ({ title, onSave, onClose, listingId } = canSave);
  const tmp = callback4();
  let obj = getRoleEmojisAll;
  obj = { top: true, style: tmp.headerContainer, children: null };
  obj = { style: items, accessibilityRole: "button", onPress: onClose, children: null };
  items = [,];
  ({ headerButtonContainer: arr[0], headerButtonStart: arr[1] } = tmp);
  obj1 = { style: tmp.headerButton, variant: "text-md/medium", color: "interactive-text-active", children: null };
  const intl = getSystemLocale.intl;
  obj1[3] = intl.string(getSystemLocale.t["ETE/oC"]);
  obj[3] = callback2(Text.Text, obj1);
  const items1 = [callback2(renderDefault, obj), ,];
  const obj2 = { style: tmp.titleContainer, children: null };
  const items2 = [callback2(Button.LegacyText, { style: tmp.title, accessibilityRole: "header", children: title })];
  const obj3 = { style: tmp.title, accessibilityRole: "header", children: title };
  const tmp3 = callback3;
  const tmp6 = renderDefault;
  items2[1] = callback2(Text.Text, {
    style: tmp.subtitle,
    variant: "text-xs/medium",
    color: "text-default",
    children: callback(obj.useName(listingId), 1)[0],
  });
  obj2[1] = items2;
  items1[1] = callback3(View, obj2);
  const obj5 = { style: items3, accessibilityRole: "button", disabled: !canSave, onPress: onSave, children: null };
  items3 = [,];
  ({ headerButtonContainer: arr4[0], headerButtonEnd: arr4[1] } = tmp);
  const obj4 = {
    style: tmp.subtitle,
    variant: "text-xs/medium",
    color: "text-default",
    children: callback(obj.useName(listingId), 1)[0],
  };
  const items4 = [tmp.headerButton];
  let disabledButton = !canSave;
  if (!canSave) {
    disabledButton = tmp.disabledButton;
  }
  const obj6 = { style: items4, children: null };
  items4[1] = disabledButton;
  const intl2 = tmp4(1233).intl;
  obj6[1] = intl2.string(getSystemLocale.t["R3BPH+"]);
  obj5[4] = callback2(Button.LegacyText, obj6);
  items1[2] = callback2(renderDefault, obj5);
  obj[2] = items1;
  return tmp3(SafeAreaPaddingView.SafeAreaPaddingView, obj);
}
