// discord_app/components_native/common/VolumeSlider.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import PlatformUtils2 from "../../utils/PlatformUtils.tsx";
import useToken from "../../design/tokens/native/useToken.tsx";
import PerceptualVolumeUtils from "../../utils/PerceptualVolumeUtils.tsx";
import VoiceNormalIcon from "../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import _modDef8278 from "../../../_runtime/metro/08278__.js";
import VoiceXIcon from "../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_4 = fn(4585).MAX_EMBEDDED_VOLUME_PERCEPTUAL;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let PlatformUtils = fn(1115);
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
const createStyles = fn(4560);
PlatformUtils = {
  volumerSlider: { flexDirection: "row", alignItems: "center" },
  leftIcon: { marginRight: num },
  rightIcon: { marginLeft: num },
  volumerSliderNative: { flex: 1, marginVertical: -10, backgroundColor: "transparent" },
};
let closure_7 = createStyles.createStyles(PlatformUtils);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/VolumeSlider.tsx");

export default function VolumeSlider(maxTrackTintColor) {
  let PRIMARY_400 = maxTrackTintColor.maxTrackTintColor;
  if (PRIMARY_400 === undefined) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.PRIMARY_400;
  }
  ({ maxVolume, value } = maxTrackTintColor);
  if (maxVolume === undefined) {
    maxVolume = closure_4;
  }
  ({ onValueChange: require, onResponderGrant, accessibilityLabel } = maxTrackTintColor);
  const merged = Object.assign(
    maxTrackTintColor,
    Object.assign({
      style: 0,
      maxTrackTintColor: 0,
      value: 0,
      maxVolume: 0,
      onValueChange: 0,
      onResponderGrant: 0,
      accessibilityLabel: 0,
    }),
  );
  const tmp4 = closure_7();
  let obj = useToken;
  let minTrackColor = merged.minTrackColor;
  if (minTrackColor == null) {
    minTrackColor = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  obj = { style: null, children: null };
  const items = [tmp4.volumerSlider, maxTrackTintColor.style];
  obj.style = items;
  obj = { style: tmp4.leftIcon };
  const items1 = [closure_5(VoiceXIcon.VoiceXIcon, obj), ,];
  const obj1 = {
    style: tmp4.volumerSliderNative,
    value: null,
    minimumValue: 0,
    maximumValue: null,
    minimumTrackTintColor: null,
    maximumTrackTintColor: null,
    accessibilityLabel: null,
    onValueChange: null,
    onResponderGrant: null,
  };
  let tmp5Result = PerceptualVolumeUtils;
  obj1.value = tmp5Result.amplitudeToPerceptual(value);
  obj1.maximumValue = maxVolume;
  obj1.minimumTrackTintColor = minTrackColor;
  obj1.maximumTrackTintColor = PRIMARY_400;
  if (accessibilityLabel == null) {
    const intl = util.intl;
    accessibilityLabel = intl.string(util.t.xPHVBs);
  }
  obj1.accessibilityLabel = accessibilityLabel;
  obj1.onValueChange = function onValueChange(arg0) {
    return closure_1_0(PerceptualVolumeUtils.perceptualToAmplitude(arg0));
  };
  if (onResponderGrant == null) {
    tmp5Result = PlatformUtils2;
    let fn;
    if (tmp5Result.isAndroid()) {
      fn = () => true;
    }
    onResponderGrant = fn;
  }
  obj1.onResponderGrant = onResponderGrant;
  items1[1] = closure_5(_modDef8278, obj1);
  items1[2] = closure_5(VoiceNormalIcon.VoiceNormalIcon, { style: tmp4.rightIcon });
  obj.children = items1;
  return closure_6(View, obj);
}
