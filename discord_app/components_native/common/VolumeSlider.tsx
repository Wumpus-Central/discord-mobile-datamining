// discord_app/components_native/common/VolumeSlider.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import map from "../../design/tokens/native/useToken.tsx";
import VoiceNormalIcon from "../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import _getRequireWildcardCacheDefault from "../../../_runtime/08207__getRequireWildcardCache.js";
import VoiceXIcon from "../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import { View } from "../../../_runtime/00017_get_ActivityIndicator.js";
import { MAX_EMBEDDED_VOLUME_PERCEPTUAL as closure_4 } from "../../../discord_common/js/packages/media-engine/Constants.tsx";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import set from "../../utils/PlatformUtils.tsx";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let num = 16;
if (set.isAndroid()) {
  num = 0;
}
let closure_7 = createCacheKey.createStyles({ volumerSlider: { flexDirection: "row", alignItems: "center" }, leftIcon: { marginRight: num }, rightIcon: { marginLeft: num }, volumerSliderNative: { flex: 1, marginVertical: -10, backgroundColor: "transparent" } });
const result = set.fileFinishedImporting("components_native/common/VolumeSlider.tsx");

export default function VolumeSlider(maxTrackTintColor) {
  let PRIMARY_400 = maxTrackTintColor.maxTrackTintColor;
  if (PRIMARY_400 === undefined) {
    PRIMARY_400 = ThemesDefault.unsafe_rawColors.PRIMARY_400;
  }
  ({ maxVolume, value } = maxTrackTintColor);
  if (maxVolume === undefined) {
    maxVolume = closure_4;
  }
  ({ onValueChange: require, onResponderGrant } = maxTrackTintColor);
  const merged = Object.assign(maxTrackTintColor, Object.create(null));
  const tmp4 = callback2();
  let obj = map;
  let minTrackColor = merged.minTrackColor;
  if (minTrackColor == null) {
    minTrackColor = obj.useToken(ThemesDefault.colors.BACKGROUND_BRAND);
  }
  obj = { style: items, children: null };
  items = [tmp4.volumerSlider, maxTrackTintColor.style];
  obj = { style: tmp4.leftIcon };
  const items1 = [callback(VoiceXIcon.VoiceXIcon, obj), , ];
  obj1 = { style: tmp4.volumerSliderNative, value: null, minimumValue: 0, maximumValue: null, minimumTrackTintColor: null, maximumTrackTintColor: null, accessibilityLabel: null, onValueChange: null, onResponderGrant: null };
  let tmp5Result = tmp5(4919);
  obj1[1] = tmp5Result.amplitudeToPerceptual(value);
  obj1[3] = maxVolume;
  obj1[4] = minTrackColor;
  obj1[5] = PRIMARY_400;
  const intl = tmp5(1236).intl;
  obj1[6] = intl.string(getSystemLocale.t.xPHVBs);
  obj1[7] = function onValueChange(arg0) {
    return callback(closure_1_0(closure_1_2[10]).perceptualToAmplitude(arg0));
  };
  if (onResponderGrant == null) {
    tmp5Result = tmp5(500);
    let fn;
    if (tmp5Result.isAndroid()) {
      fn = () => true;
    }
    onResponderGrant = fn;
  }
  obj1[8] = onResponderGrant;
  items1[1] = callback(_getRequireWildcardCacheDefault, obj1);
  items1[2] = callback(VoiceNormalIcon.VoiceNormalIcon, { style: tmp4.rightIcon });
  obj[1] = items1;
  return closure_6(View, obj);
};