// discord_app/components_native/common/VolumeSlider.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import PlatformUtils2 from "../../utils/PlatformUtils.tsx";
import useToken from "../../design/tokens/native/useToken.tsx";
import PerceptualVolumeUtils from "../../utils/PerceptualVolumeUtils.tsx";
import VoiceNormalIcon from "../../design/components/Icon/native/redesign/generated/VoiceNormalIcon.tsx";
import _modDef8380 from "../../../_runtime/metro/08380__.js";
import VoiceXIcon from "../../design/components/Icon/native/redesign/generated/VoiceXIcon.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
let closure_3 = [
  "style",
  "maxTrackTintColor",
  "value",
  "maxVolume",
  "onValueChange",
  "onResponderGrant",
  "accessibilityLabel",
];
const View = fn(17).View;
let closure_6 = fn(5115).MAX_EMBEDDED_VOLUME_PERCEPTUAL;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PlatformUtils = fn(1381);
let num = 16;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
const createStyles = fn(5090);
let closure_9 = createStyles.createStyles({
  volumerSlider: { flexDirection: "row", alignItems: "center" },
  leftIcon: { marginRight: num },
  rightIcon: { marginLeft: num },
  volumerSliderNative: { flex: 1, marginVertical: -10, backgroundColor: "transparent" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/common/VolumeSlider.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function VolumeSlider(arg0) {
      const cResult = require("c").c(38);
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
        let tmp10 = value;
        let tmp9 = maxVolume;
        let PRIMARY_400 = maxTrackTintColor;
        let tmp8 = style;
        let tmp7 = tmp13;
        let tmp5 = onResponderGrant;
        let tmp4 = accessibilityLabel;
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
      const obj = require("c");
      let minTrackColor = tmp7.minTrackColor;
      if (minTrackColor == null) {
        minTrackColor = tmpResult.useToken(nativeDefault.colors.BACKGROUND_BRAND);
      }
      if (cResult[9] === tmp8) {
        if (cResult[12] !== tmp15.leftIcon) {
          const obj2 = { style: tmp15.leftIcon };
          const tmp20 = closure_7(tmp(10869).VoiceXIcon, obj2);
          cResult[12] = tmp15.leftIcon;
          cResult[13] = tmp20;
        }
        if (cResult[14] !== tmp10) {
          const result = tmp(5249).amplitudeToPerceptual(tmp10);
          cResult[14] = tmp10;
          cResult[15] = result;
          let tmp21 = result;
          const tmpResult2 = tmp(5249);
        } else {
          tmp21 = cResult[15];
        }
        if (cResult[16] !== tmp4) {
          let stringResult = tmp4;
          if (tmp4 == null) {
            const intl = tmp(1126).intl;
            stringResult = intl.string(tmp(1126).t.xPHVBs);
          }
          cResult[16] = tmp4;
          cResult[17] = stringResult;
          let tmp23 = stringResult;
        } else {
          tmp23 = cResult[17];
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
            if (obj5.isAndroid()) {
              class L {
                constructor(arg0) {
                  obj = closure_0(closure_2[12]);
                  return closure_0(obj.perceptualToAmplitude(arg0));
                }
              }
            }
          }
          cResult[20] = tmp5;
          cResult[21] = tmp27;
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
        const obj3 = {
          style: tmp15.volumerSliderNative,
          value: tmp21,
          minimumValue: 0,
          maximumValue: tmp9,
          minimumTrackTintColor: minTrackColor,
          maximumTrackTintColor: PRIMARY_400,
          accessibilityLabel: tmp23,
          onValueChange: L,
          onResponderGrant: tmp26,
        };
        const tmp31 = closure_7(_modDef8380, obj3);
        cResult[22] = PRIMARY_400;
        cResult[23] = tmp9;
        cResult[24] = minTrackColor;
        cResult[25] = tmp15.volumerSliderNative;
        cResult[26] = tmp21;
        cResult[27] = tmp23;
        cResult[28] = L;
        cResult[29] = tmp26;
        cResult[30] = tmp31;
      }
      const items = [tmp15.volumerSlider, tmp8];
      cResult[9] = tmp8;
      cResult[10] = tmp15.volumerSlider;
      cResult[11] = items;
      tmpResult = require("useToken");
    }
  : function VolumeSlider(maxTrackTintColor) {
      let PRIMARY_400 = maxTrackTintColor.maxTrackTintColor;
      if (PRIMARY_400 === undefined) {
        PRIMARY_400 = nativeDefault.unsafe_rawColors.PRIMARY_400;
      }
      ({ maxVolume, value } = maxTrackTintColor);
      if (maxVolume === undefined) {
        maxVolume = closure_6;
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
      const tmp4 = closure_9();
      let minTrackColor = merged.minTrackColor;
      if (minTrackColor == null) {
        minTrackColor = obj.useToken(nativeDefault.colors.BACKGROUND_BRAND);
      }
      const obj2 = { style: null, children: null };
      const items = [tmp4.volumerSlider, maxTrackTintColor.style];
      obj2.style = items;
      const items1 = [closure_7(VoiceXIcon.VoiceXIcon, { style: tmp4.leftIcon }), ,];
      const obj4 = {
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
      obj = useToken;
      const obj3 = { style: tmp4.leftIcon };
      const tmp7Result = _modDef8380;
      obj4.value = PerceptualVolumeUtils.amplitudeToPerceptual(value);
      obj4.maximumValue = maxVolume;
      obj4.minimumTrackTintColor = minTrackColor;
      obj4.maximumTrackTintColor = PRIMARY_400;
      if (accessibilityLabel == null) {
        const intl = util.intl;
        accessibilityLabel = intl.string(util.t.xPHVBs);
      }
      obj4.accessibilityLabel = accessibilityLabel;
      obj4.onValueChange = function onValueChange(arg0) {
        return _require(PerceptualVolumeUtils.perceptualToAmplitude(arg0));
      };
      if (onResponderGrant == null) {
        let fn;
        if (tmp5Result2.isAndroid()) {
          fn = () => true;
        }
        onResponderGrant = fn;
        tmp5Result2 = PlatformUtils2;
      }
      obj4.onResponderGrant = onResponderGrant;
      items1[1] = closure_7(tmp7Result, obj4);
      items1[2] = closure_7(VoiceNormalIcon.VoiceNormalIcon, { style: tmp4.rightIcon });
      obj2.children = items1;
      return closure_8(View, obj2);
    };
