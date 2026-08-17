// discord_app/modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import useCheckboxA11yNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import renderDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import registerAssetDefault from "../../../../../_runtime/16983_registerAsset.js";
import registerAssetDefault2 from "../../../../../_runtime/16984_registerAsset.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { AllChannelAccessOptions } from "../../edit_state/GuildRoleSubscriptionEditStore.tsx";
import { Fonts } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../rebrand/native/TextStyles.tsx";

require = arg1;
function Row(arg0) {
  ({ selected, disabled } = arg0);
  ({ icon, label, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = callback3();
  let obj = useCheckboxA11yNative;
  const radioA11yNative = obj.useRadioA11yNative({ selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = { style: tmp.row, accessibilityRole, accessibilityState, disabled: null, onPress: null, children: null };
  let tmp7 = selected;
  if (!selected) {
    tmp7 = disabled;
  }
  obj[3] = tmp7;
  obj[4] = onPress;
  obj = { size: tmp2(1297).Icon.Sizes.MEDIUM, source: icon };
  const items = [callback(Button.Icon, obj), , ];
  const items1 = [tmp.rowLabel, ];
  let rowLabelSelected = selected;
  if (selected) {
    rowLabelSelected = tmp.rowLabelSelected;
  }
  items1[1] = rowLabelSelected;
  items[1] = callback(Button.LegacyText, { style: items1, numberOfLines: 1, ellipsizeMode: "tail", children: label });
  items[2] = callback(Button.RadioIndicator, { style: tmp.rowIndicator, active: selected });
  obj[5] = items;
  return closure_6(renderDefault, obj);
}
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, row: null, rowLabel: null, rowLabelSelected: null, rowIndicator: null, separator: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "stretch", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", padding: 16 };
let obj1 = {};
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.TEXT_SUBTLE, 16));
obj1.flexShrink = 1;
obj1.marginHorizontal = 16;
createCacheKey[2] = obj1;
const obj2 = {};
const merged1 = Object.assign(importDefaultResult(Fonts.PRIMARY_SEMIBOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
createCacheKey[3] = obj2;
createCacheKey[4] = { marginStart: "auto" };
const importDefaultResult1 = importDefaultResult;
createCacheKey[5] = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 1, marginStart: 56 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj3 = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 1, marginStart: 56 };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default function AllChannelsSwitch(style) {
  ({ channelAccessFormat, setChannelAccessFormat: require, disabled } = style);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = callback3();
  let obj = { style: items, accessibilityRole: "radiogroup", accessibilityState: { disabled }, children: null };
  items = [tmp.container, style.style];
  obj = { icon: registerAssetDefault, label: null, selected: null, onPress: null, disabled: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["vs2T+B"]);
  obj[2] = channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS;
  obj[3] = function onPress() {
    return callback(closure_1_4.SOME_CHANNELS_ACCESS);
  };
  obj[4] = disabled;
  const items1 = [callback(Row, obj), , ];
  obj = { style: tmp.separator };
  items1[1] = callback(View, obj);
  obj1 = { icon: registerAssetDefault2, label: null, selected: null, onPress: null, disabled: null };
  const intl2 = getSystemLocale.intl;
  obj1[1] = intl2.string(getSystemLocale.t.l4Tr7X);
  obj1[2] = channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS;
  obj1[3] = function onPress() {
    return callback(closure_1_4.ALL_CHANNELS_ACCESS);
  };
  obj1[4] = disabled;
  items1[2] = callback(Row, obj1);
  obj[3] = items1;
  return callback2(View, obj);
};