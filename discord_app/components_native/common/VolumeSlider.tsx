// === Module 9666: VolumeSlider ===

// Module 9666 (VolumeSlider)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import useToken2 from "useToken" /* 4580 */;
import Constants from "Constants" /* 4915 */;
import PerceptualVolumeUtils from "PerceptualVolumeUtils" /* 5683 */;
import VoiceNormalIcon from "VoiceNormalIcon" /* 5885 */;
import _modDef7952 from "module_7952" /* 7952 */;
import VoiceXIcon from "VoiceXIcon" /* 9667 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
let closure_3 = ["style", "maxTrackTintColor", "value", "maxVolume", "onValueChange", "onResponderGrant", "accessibilityLabel"];
const View = react_native.View;
let closure_6 = Constants.MAX_EMBEDDED_VOLUME_PERCEPTUAL;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
let obj = { volumerSlider: { flexDirection: "row", alignItems: "center" }, leftIcon: { marginRight: num }, rightIcon: { marginLeft: num }, volumerSliderNative: { flex: 1, marginVertical: -10, backgroundColor: "transparent" } };
let closure_9 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let PRIMARY_400;
  let accessibilityLabel;
  let closure_0;
  let maxTrackTintColor;
  let maxVolume;
  let onResponderGrant;
  let onValueChange;
  let style;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  let value;
  let obj = require("react");
  const cResult = obj.c(38);
  if (cResult[0] !== arg0) {
    ({ style, maxTrackTintColor, value, maxVolume, onValueChange } = arg0);
    _require = onValueChange;
    ({ onResponderGrant, accessibilityLabel } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = accessibilityLabel;
    cResult[2] = onResponderGrant;
    cResult[3] = onValueChange;
    cResult[4] = tmp13;
    cResult[5] = style;
    cResult[6] = maxTrackTintColor;
    cResult[7] = maxVolume;
    cResult[8] = value;
    tmp10 = value;
    tmp9 = maxVolume;
    PRIMARY_400 = maxTrackTintColor;
    tmp8 = style;
    tmp7 = tmp13;
    tmp5 = onResponderGrant;
    tmp4 = accessibilityLabel;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    PRIMARY_400 = cResult[6];
    tmp9 = cResult[7];
    tmp10 = cResult[8];
  }
  if (undefined === PRIMARY_400) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.PRIMARY_400;
  }
  if (undefined === tmp9) {
    tmp9 = closure_6;
  }
  const tmp15 = closure_9();
  const useToken = require("useToken").useToken;
  let minTrackColor = tmp7.minTrackColor;
  require("useToken");
  if (minTrackColor == null) {
    minTrackColor = useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  if (cResult[9] === tmp8) {
    let tmp22;
    let tmp24;
    if (cResult[12] !== tmp15.leftIcon) {
      const obj2 = { style: tmp15.leftIcon };
      cResult[12] = tmp15.leftIcon;
      cResult[13] = closure_7(require("VoiceXIcon").VoiceXIcon, obj2);
      const tmp21 = closure_7(require("VoiceXIcon").VoiceXIcon, obj2);
    }
    const volumerSliderNative = tmp15.volumerSliderNative;
    if (cResult[14] !== tmp10) {
      const tmpResult2 = require("PerceptualVolumeUtils");
      const result = tmpResult2.amplitudeToPerceptual(tmp10);
      cResult[14] = tmp10;
      cResult[15] = result;
      tmp22 = result;
    } else {
      tmp22 = cResult[15];
    }
    if (cResult[16] !== tmp4) {
      let stringResult = tmp4;
      if (tmp4 == null) {
        const intl = tmp(1126).intl;
        stringResult = intl.string(tmp(1126).t.xPHVBs);
      }
      cResult[16] = tmp4;
      cResult[17] = stringResult;
      tmp24 = stringResult;
    } else {
      tmp24 = cResult[17];
    }
    if (cResult[18] !== onValueChange) {
      class L {
        constructor(arg0) {
          obj = closure_0(closure_2[12]);
          return closure_0(obj.perceptualToAmplitude(arg0));
        }
      }
      cResult[18] = onValueChange;
      cResult[19] = L;
    } else {
      class L {
        constructor(arg0) {
          obj = closure_0(closure_2[12]);
          return closure_0(obj.perceptualToAmplitude(arg0));
        }
      }
    }
    if (cResult[20] !== tmp5) {
      class L {
        constructor(arg0) {
          obj = closure_0(closure_2[12]);
          return closure_0(obj.perceptualToAmplitude(arg0));
        }
      }
      if (tmp5 == null) {
        class L {
          constructor(arg0) {
            obj = closure_0(closure_2[12]);
            return closure_0(obj.perceptualToAmplitude(arg0));
          }
        }
        if (obj4.isAndroid()) {
          class L {
            constructor(arg0) {
              obj = closure_0(closure_2[12]);
              return closure_0(obj.perceptualToAmplitude(arg0));
            }
          }
        }
      }
      cResult[20] = tmp5;
      cResult[21] = tmp28;
    } else {
      class L {
        constructor(arg0) {
          obj = closure_0(closure_2[12]);
          return closure_0(obj.perceptualToAmplitude(arg0));
        }
      }
    }
    if (cResult[22] === PRIMARY_400) {
      class L {
        constructor(arg0) {
          obj = closure_0(closure_2[12]);
          return closure_0(obj.perceptualToAmplitude(arg0));
        }
      }
    }
    const obj3 = { style: volumerSliderNative, value: tmp22, minimumValue: 0, maximumValue: tmp9, minimumTrackTintColor: minTrackColor, maximumTrackTintColor: PRIMARY_400, accessibilityLabel: tmp24, onValueChange: L, onResponderGrant: tmp27 };
    cResult[22] = PRIMARY_400;
    cResult[23] = tmp9;
    cResult[24] = minTrackColor;
    cResult[25] = tmp15.volumerSliderNative;
    cResult[26] = tmp22;
    cResult[27] = tmp24;
    cResult[28] = L;
    cResult[29] = tmp27;
    cResult[30] = closure_7(_modDef7952, obj3);
    const tmp32 = closure_7(_modDef7952, obj3);
  }
  const items = [tmp15.volumerSlider, tmp8];
  cResult[9] = tmp8;
  cResult[10] = tmp15.volumerSlider;
  cResult[11] = items;
}) : ((maxTrackTintColor) => {
  let accessibilityLabel;
  let items;
  let items1;
  let maxVolume;
  let onResponderGrant;
  let require;
  let tmp5Result;
  let value;
  let PRIMARY_400 = maxTrackTintColor.maxTrackTintColor;
  const style = maxTrackTintColor.style;
  if (PRIMARY_400 === undefined) {
    PRIMARY_400 = nativeDefault.unsafe_rawColors.PRIMARY_400;
  }
  ({ maxVolume, value } = maxTrackTintColor);
  if (maxVolume === undefined) {
    maxVolume = closure_6;
  }
  ({ onValueChange: require, onResponderGrant, accessibilityLabel } = maxTrackTintColor);
  const merged = Object.assign(maxTrackTintColor, Object.assign({ style: 0, maxTrackTintColor: 0, value: 0, maxVolume: 0, onValueChange: 0, onResponderGrant: 0, accessibilityLabel: 0 }));
  const tmp4 = closure_9();
  const useToken = useToken2.useToken;
  let minTrackColor = merged.minTrackColor;
  useToken2;
  if (minTrackColor == null) {
    minTrackColor = useToken(nativeDefault.colors.BACKGROUND_BRAND);
  }
  let obj = { style: items, children: items1 };
  items = [tmp4.volumerSlider, style];
  items1 = [, , ];
  const obj2 = { style: tmp4.leftIcon };
  items1[0] = closure_7(VoiceXIcon.VoiceXIcon, obj2);
  const obj3 = {
    style: tmp4.volumerSliderNative,
    value: tmp5Result.amplitudeToPerceptual(value),
    minimumValue: 0,
    maximumValue: maxVolume,
    minimumTrackTintColor: minTrackColor,
    maximumTrackTintColor: PRIMARY_400,
    accessibilityLabel,
    onValueChange(arg0) {
      const obj = PerceptualVolumeUtils;
      return _require(obj.perceptualToAmplitude(arg0));
    },
    onResponderGrant
  };
  const tmp8Result = _modDef7952;
  tmp5Result = PerceptualVolumeUtils;
  if (accessibilityLabel == null) {
    const intl = intl2.intl;
    accessibilityLabel = intl.string(intl2.t.xPHVBs);
  }
  if (onResponderGrant == null) {
    let fn;
    const tmp5Result2 = PlatformUtils;
    if (tmp5Result2.isAndroid()) {
      fn = () => true;
    }
    onResponderGrant = fn;
  }
  items1[1] = closure_7(tmp8Result, obj3);
  const obj4 = { style: tmp4.rightIcon };
  items1[2] = closure_7(VoiceNormalIcon.VoiceNormalIcon, obj4);
  return closure_8(View, obj);
});
let result = size.fileFinishedImporting("components_native/common/VolumeSlider.tsx");

export default tmp4;