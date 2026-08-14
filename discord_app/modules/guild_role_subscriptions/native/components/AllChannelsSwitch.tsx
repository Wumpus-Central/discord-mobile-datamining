// discord_app/modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { AllChannelAccessOptions } from "AllChannelAccessOptions";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";
import { registerAsset } from "../../../../../_runtime/16937_registerAsset.js";
import { registerAsset } from "../../../../../_runtime/16938_registerAsset.js";
import { useCheckboxA11yNative } from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { render } from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let c5;
let closure_6;
const require = arg1;
function Row(arg0) {
  let accessibilityRole;
  let accessibilityState;
  let disabled;
  let icon;
  let label;
  let onPress;
  let selected;
  ({ selected, disabled } = arg0);
  ({ icon, label, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = createCacheKey();
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
  obj = { size: null, source: null };
  obj[0] = Button.Icon.Sizes.MEDIUM;
  obj[1] = icon;
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
  return closure_6(render, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, row: null, rowLabel: null, rowLabelSelected: null, rowIndicator: null, separator: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "stretch", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", padding: 16 };
let obj1 = {};
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("Themes").colors.TEXT_SUBTLE, 16));
obj1.flexShrink = 1;
obj1.marginHorizontal = 16;
createCacheKey[2] = obj1;
const obj2 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_SEMIBOLD, require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
createCacheKey[3] = obj2;
createCacheKey[4] = { marginStart: "auto" };
createCacheKey[5] = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, height: 1, marginStart: 56 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj3 = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, height: 1, marginStart: 56 };
const result = require("AllChannelAccessOptions").fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default function AllChannelsSwitch(style) {
  let channelAccessFormat;
  let disabled;
  let require;
  ({ channelAccessFormat, setChannelAccessFormat: require, disabled } = style);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = createCacheKey();
  let obj = { style: items, accessibilityRole: "radiogroup", accessibilityState: { disabled }, children: null };
  items = [tmp.container, style.style];
  obj = { icon: registerAsset, label: null, selected: null, onPress: null, disabled: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["vs2T+B"]);
  obj[2] = channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS;
  obj[3] = function onPress() {
    return callback(outer1_4.SOME_CHANNELS_ACCESS);
  };
  obj[4] = disabled;
  const items1 = [callback(Row, obj), , ];
  obj = { style: tmp.separator };
  items1[1] = callback(View, obj);
  const obj1 = { icon: registerAsset, label: null, selected: null, onPress: null, disabled: null };
  const intl2 = getSystemLocale.intl;
  obj1[1] = intl2.string(getSystemLocale.t.l4Tr7X);
  obj1[2] = channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS;
  obj1[3] = function onPress() {
    return callback(outer1_4.ALL_CHANNELS_ACCESS);
  };
  obj1[4] = disabled;
  items1[2] = callback(Row, obj1);
  obj[3] = items1;
  return callback2(View, obj);
};