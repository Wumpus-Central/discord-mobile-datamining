// discord_app/modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useA11yRolesNative from "../../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import _modDef17917 from "../../../../../_runtime/metro/17917__.js";
import _modDef17918 from "../../../../../_runtime/metro/17918__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";

const require = globalThis.__r;

require = fn;
function Row(arg0) {
  ({ selected, disabled } = arg0);
  ({ icon, label, onPress } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_7();
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative({ selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj2 = { style: tmp.row, accessibilityRole, accessibilityState, disabled: null, onPress: null, children: null };
  let tmp7 = selected;
  if (!selected) {
    tmp7 = disabled;
  }
  obj2.disabled = tmp7;
  obj2.onPress = onPress;
  const tmp6 = TouchableHitBoxDefault;
  const items = [hasOwnProperty(native.Icon, { size: native.Icon.Sizes.MEDIUM, source: icon }), ,];
  const items1 = [tmp.rowLabel];
  let rowLabelSelected = selected;
  if (selected) {
    rowLabelSelected = tmp.rowLabelSelected;
  }
  items1[1] = rowLabelSelected;
  items[1] = hasOwnProperty(native.LegacyText, {
    style: items1,
    numberOfLines: 1,
    ellipsizeMode: "tail",
    children: label,
  });
  items[2] = hasOwnProperty(native.RadioIndicator, { style: tmp.rowIndicator, active: selected });
  obj2.children = items;
  return timestampProducer(tmp6, obj2);
}
const View = fn(17).View;
const AllChannelAccessOptions = fn(15322).AllChannelAccessOptions;
const Fonts = fn(1074).Fonts;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm },
  row: { alignSelf: "stretch", alignItems: "center", flexDirection: "row", justifyContent: "flex-start", padding: 16 },
  rowLabel: null,
  rowLabelSelected: null,
  rowIndicator: null,
  separator: null,
};
let obj4 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
obj4.flexShrink = 1;
obj4.marginHorizontal = 16;
obj2.rowLabel = obj4;
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16));
obj2.rowLabelSelected = {};
obj2.rowIndicator = { marginStart: "auto" };
const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
const obj5 = {};
obj2.separator = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, marginStart: 56 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/AllChannelsSwitch.tsx");

export default function AllChannelsSwitch(style) {
  ({ channelAccessFormat, setChannelAccessFormat: require, disabled } = style);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_7();
  const obj = { style: null, accessibilityRole: "radiogroup", accessibilityState: { disabled }, children: null };
  const items = [tmp.container, style.style];
  obj.style = items;
  const obj2 = { icon: _modDef17917, label: null, selected: null, onPress: null, disabled: null };
  const intl = util.intl;
  obj2.label = intl.string(util.t["vs2T+B"]);
  obj2.selected = channelAccessFormat === AllChannelAccessOptions.SOME_CHANNELS_ACCESS;
  obj2.onPress = function onPress() {
    return require(AllChannelAccessOptions.SOME_CHANNELS_ACCESS);
  };
  obj2.disabled = disabled;
  const items1 = [closure_5(Row, obj2), closure_5(View, { style: tmp.separator })];
  const obj4 = { icon: _modDef17918, label: null, selected: null, onPress: null, disabled: null };
  const intl2 = util.intl;
  obj4.label = intl2.string(util.t.l4Tr7X);
  obj4.selected = channelAccessFormat === AllChannelAccessOptions.ALL_CHANNELS_ACCESS;
  obj4.onPress = function onPress() {
    return require(AllChannelAccessOptions.ALL_CHANNELS_ACCESS);
  };
  obj4.disabled = disabled;
  items1[2] = closure_5(Row, obj4);
  obj.children = items1;
  return closure_6(View, obj);
}
