// === Module 17761: AllChannelsSwitch ===

// Module 17761 (AllChannelsSwitch)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useA11yRolesNative from "useA11yRolesNative" /* 4277 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9050 */;
import _modDef17762 from "module_17762" /* 17762 */;
import _modDef17763 from "module_17763" /* 17763 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
function Row(arg0) {
  ({ selected, disabled } = arg0);
  ({ icon, label, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_7();
  let obj = useA11yRolesNative;
  const radioA11yNative = obj.useRadioA11yNative({ selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  obj = { style: tmp.row, accessibilityRole, accessibilityState, disabled: null, onPress: null, children: null };
  let tmp7 = selected;
  if (!selected) {
    tmp7 = disabled;
  }
  obj.disabled = tmp7;
  obj.onPress = onPress;
  obj = { size: native.Icon.Sizes.MEDIUM, source: icon };
  const items = [hasOwnProperty(native.Icon, obj), , ];
  const items1 = [tmp.rowLabel, ];
  let rowLabelSelected = selected;
  if (selected) {
    rowLabelSelected = tmp.rowLabelSelected;
  }
  items1[1] = rowLabelSelected;
  items[1] = hasOwnProperty(native.LegacyText, { style: items1, numberOfLines: 1, ellipsizeMode: "tail", children: label });
  items[2] = hasOwnProperty(native.RadioIndicator, { style: tmp.rowIndicator, active: selected });
  obj.children = items;
  return timestampProducer(TouchableHitBoxDefault, obj);
}
const View = fn(17).View;
const AllChannelAccessOptions = fn(15228).AllChannelAccessOptions;
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, row: null, rowLabel: null, rowLabelSelected: null, rowIndicator: null, separator: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
createStyles.container = createStyles;
createStyles.row = { alignSelf: "stretch", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", padding: 16 };
let obj1 = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
obj1.flexShrink = 1;
obj1.marginHorizontal = 16;
createStyles.rowLabel = obj1;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
createStyles.rowLabelSelected = {};
createStyles.rowIndicator = { marginStart: "auto" };
createStyles.separator = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginStart: 56 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default function AllChannelsSwitch(style) {
  ({ channelAccessFormat, setChannelAccessFormat: require, disabled } = style);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_7();
  let obj = { style: null, accessibilityRole: "radiogroup", accessibilityState: { disabled }, children: null };
  const items = [tmp.container, style.style];
  obj.style = items;
  obj = { icon: _modDef17762, label: null, selected: null, onPress: null, disabled: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["vs2T+B"]);
  obj.selected = channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS;
  obj.onPress = function onPress() {
    return require(AllChannelAccessOptions.SOME_CHANNELS_ACCESS);
  };
  obj.disabled = disabled;
  const items1 = [closure_5(Row, obj), , ];
  obj = { style: tmp.separator };
  items1[1] = closure_5(View, obj);
  const obj1 = { icon: _modDef17763, label: null, selected: null, onPress: null, disabled: null };
  const intl2 = util.intl;
  obj1.label = intl2.string(util.t.l4Tr7X);
  obj1.selected = channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS;
  obj1.onPress = function onPress() {
    return require(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
  };
  obj1.disabled = disabled;
  items1[2] = closure_5(Row, obj1);
  obj.children = items1;
  return closure_6(View, obj);
};