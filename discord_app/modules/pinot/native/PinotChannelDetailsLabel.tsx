// === Module 19201: PinotChannelDetailsLabel ===

// Module 19201 (PinotChannelDetailsLabel)
import nativeDefault from "native" /* 575 */;
import _modDef3316 from "module_3316" /* 3316 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5839 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const hitSlop = { top: 8, bottom: 8, left: 4, right: 8 };
const createStyles = fn(5142);
let obj2 = { label: { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", minHeight: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderWidth: 1, borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT }, text: null };
let obj3 = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", minHeight: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderWidth: 1, borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
obj2.text = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelDetailsLabel.tsx");

export function PinotChannelDetailsLabel(channel) {
  let stringResult1;
  const tmp = closure_5();
  if (obj.useIsPinotChannelLabelVisible(channel.channel, "mobile_channel_details_label")) {
    const intl = tmp2(1113).intl;
    const stringResult = intl.string(_modDef3316.uneDIi);
    const intl2 = tmp2(1113).intl;
    stringResult1 = intl2.string(_modDef3316["01KOls"]);
    const obj2 = {
      onPress: function handlePress() {
          ToastActionCreatorsDefault.open("PINOT_CHANNEL_DETAILS_LABEL", { text: stringResult1 });
        },
      hitSlop,
      style: tmp.label,
      accessibilityRole: "button",
      accessibilityLabel: stringResult,
      accessibilityHint: stringResult1,
      children: null
    };
    const obj3 = { variant: "body-xs/medium", color: "none", style: tmp.text, children: stringResult };
    obj2.children = jsx(tmp2(5753).Text, { variant: "body-xs/medium", color: "none", style: tmp.text, children: stringResult });
    return jsx(tmp2(7046).PressableOpacity, {
      onPress: function handlePress() {
          ToastActionCreatorsDefault.open("PINOT_CHANNEL_DETAILS_LABEL", { text: stringResult1 });
        },
      hitSlop,
      style: tmp.label,
      accessibilityRole: "button",
      accessibilityLabel: stringResult,
      accessibilityHint: stringResult1,
      children: null
    });
  } else {
    return null;
  }
  obj = stringResult1(11469);
}