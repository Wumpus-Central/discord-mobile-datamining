// discord_app/components_native/common/VolumeSlider.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { MAX_EMBEDDED_VOLUME_PERCEPTUAL as closure_4 } from "DesktopSources";
import jsxProd from "jsxProd";
import set from "set";
import createCacheKey from "createCacheKey";
import set from "DesktopSources";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let num = 16;
if (set.isAndroid()) {
  num = 0;
}
let closure_7 = createCacheKey.createStyles({ volumerSlider: { flexDirection: "row", alignItems: "center" }, leftIcon: { marginRight: num }, rightIcon: { marginLeft: num }, volumerSliderNative: { flex: 1, marginVertical: -10, backgroundColor: "transparent" } });
const result = set.fileFinishedImporting("components_native/common/VolumeSlider.tsx");

export default function VolumeSlider(maxTrackTintColor) {
  let maxVolume;
  let onResponderGrant;
  let require;
  let value;
  let PRIMARY_400 = maxTrackTintColor.maxTrackTintColor;
  if (PRIMARY_400 === undefined) {
    PRIMARY_400 = importDefault(712).unsafe_rawColors.PRIMARY_400;
  }
  ({ maxVolume, value } = maxTrackTintColor);
  if (maxVolume === undefined) {
    maxVolume = closure_4;
  }
  ({ onValueChange: require, onResponderGrant } = maxTrackTintColor);
  const merged = Object.assign(maxTrackTintColor, Object.create(null));
  const tmp4 = callback2();
  let obj = require(3989) /* map */;
  let minTrackColor = merged.minTrackColor;
  if (minTrackColor == null) {
    minTrackColor = obj.useToken(importDefault(712).colors.BACKGROUND_BRAND);
  }
  obj = { style: items, children: null };
  items = [tmp4.volumerSlider, maxTrackTintColor.style];
  obj = { style: tmp4.leftIcon };
  const items1 = [callback(require(10748) /* VoiceXIcon */.VoiceXIcon, obj), , ];
  const obj1 = { style: tmp4.volumerSliderNative, value: null, minimumValue: 0, maximumValue: null, minimumTrackTintColor: null, maximumTrackTintColor: null, accessibilityLabel: null, onValueChange: null, onResponderGrant: null };
  let tmp5Result = tmp5(4732);
  obj1[1] = tmp5Result.amplitudeToPerceptual(value);
  obj1[3] = maxVolume;
  obj1[4] = minTrackColor;
  obj1[5] = PRIMARY_400;
  const intl = tmp5(1236).intl;
  obj1[6] = intl.string(require(1236) /* getSystemLocale */.t.xPHVBs);
  obj1[7] = function onValueChange(arg0) {
    return callback(outer1_0(outer1_2[10]).perceptualToAmplitude(arg0));
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
  items1[1] = callback(importDefault(7799), obj1);
  items1[2] = callback(require(4810) /* VoiceNormalIcon */.VoiceNormalIcon, { style: tmp4.rightIcon });
  obj[1] = items1;
  return closure_6(View, obj);
};