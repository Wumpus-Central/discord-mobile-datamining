// discord_app/modules/user_settings/voice/native/UserSettingsVoiceOutputOptions.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import VolumeSliderDefault from "../../../../components_native/common/VolumeSlider.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

const require = fn;
const View = fn(17).View;
const MediaEngineContextTypes = fn(4921).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let closure_11 = createStyles.createStyles({ slider: { marginTop: 4 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOutputOptions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = stateFromStores1(576).c(27);
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function c() {
          return outputVolume.getOutputVolume();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const obj = stateFromStores1(576);
      const stateFromStores = stateFromStores1(504).useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ApplicationStreamingStore, AuthenticationStore];
        const fn2 = function p() {
          lastActiveStream = lastActiveStream.getLastActiveStream();
          let tmp2 = null;
          if (null != lastActiveStream) {
            tmp2 = null;
            if (lastActiveStream.ownerId !== id.getId()) {
              tmp2 = lastActiveStream;
            }
          }
          return tmp2;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp10 = fn2;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = stateFromStores1(504);
      stateFromStores1 = stateFromStores1(504).useStateFromStores(tmp9, tmp10);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [MediaEngineStore];
        cResult[4] = items2;
        let tmp14 = items2;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] !== stateFromStores1) {
        class L {
          constructor() {
            num = 0;
            if (null != closure_0) {
              tmp2 = closure_7;
              tmp3 = MediaEngineContextTypes;
              num = closure_7.getLocalVolume(tmp.ownerId, MediaEngineContextTypes.STREAM);
            }
            return num;
          }
        }
        cResult[5] = stateFromStores1;
        cResult[6] = L;
      } else {
        class L {
          constructor() {
            num = 0;
            if (null != closure_0) {
              tmp2 = closure_7;
              tmp3 = MediaEngineContextTypes;
              num = closure_7.getLocalVolume(tmp.ownerId, MediaEngineContextTypes.STREAM);
            }
            return num;
          }
        }
      }
      const tmpResult3 = stateFromStores1(504);
      const stateFromStores2 = stateFromStores1(504).useStateFromStores(tmp14, L);
      if (cResult[7] !== stateFromStores1) {
        class T {
          constructor(arg0) {
            tmp = closure_1(closure_2[11])(null != closure_0, "Can not set stream volume without active stream");
            obj = closure_1(closure_2[12]);
            setLocalVolumeResult = obj.setLocalVolume(closure_0.ownerId, arg0, MediaEngineContextTypes.STREAM);
            return;
          }
        }
        cResult[7] = stateFromStores1;
        cResult[8] = T;
      } else {
        class T {
          constructor(arg0) {
            tmp = closure_1(closure_2[11])(null != closure_0, "Can not set stream volume without active stream");
            obj = closure_1(closure_2[12]);
            setLocalVolumeResult = obj.setLocalVolume(closure_0.ownerId, arg0, MediaEngineContextTypes.STREAM);
            return;
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(arg0) {
            tmp = closure_1(closure_2[11])(null != closure_0, "Can not set stream volume without active stream");
            obj = closure_1(closure_2[12]);
            setLocalVolumeResult = obj.setLocalVolume(closure_0.ownerId, arg0, MediaEngineContextTypes.STREAM);
            return;
          }
        }
        const stringResult = obj5.string(tmp(1126).t.UXxPGB);
        cResult[9] = stringResult;
      } else {
        class T {
          constructor(arg0) {
            tmp = closure_1(closure_2[11])(null != closure_0, "Can not set stream volume without active stream");
            obj = closure_1(closure_2[12]);
            setLocalVolumeResult = obj.setLocalVolume(closure_0.ownerId, arg0, MediaEngineContextTypes.STREAM);
            return;
          }
        }
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor(arg0) {
            tmp = closure_1(closure_2[11])(null != closure_0, "Can not set stream volume without active stream");
            obj = closure_1(closure_2[12]);
            setLocalVolumeResult = obj.setLocalVolume(closure_0.ownerId, arg0, MediaEngineContextTypes.STREAM);
            return;
          }
        }
        const stringResult1 = obj6.string(tmp(1126).t.xPHVBs);
        cResult[10] = stringResult1;
        const tmp21 = stringResult1;
      } else {
        class T {
          constructor(arg0) {
            tmp = closure_1(closure_2[11])(null != closure_0, "Can not set stream volume without active stream");
            obj = closure_1(closure_2[12]);
            setLocalVolumeResult = obj.setLocalVolume(closure_0.ownerId, arg0, MediaEngineContextTypes.STREAM);
            return;
          }
        }
      }
      ({ slider, slider: slider2 } = tmp4);
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(arg0) {
            obj = closure_1_1(closure_1_2[12]);
            return obj.setOutputVolume(arg0);
          }
        }
        const intl = tmp(1126).intl;
        const stringResult2 = intl.string(tmp(1126).t.xPHVBs);
        cResult[11] = E;
        cResult[12] = stringResult2;
        let tmp24 = stringResult2;
      } else {
        class E {
          constructor(arg0) {
            obj = closure_1_1(closure_1_2[12]);
            return obj.setOutputVolume(arg0);
          }
        }
        tmp24 = cResult[12];
      }
      if (cResult[13] === stateFromStores) {
        class E {
          constructor(arg0) {
            obj = closure_1_1(closure_1_2[12]);
            return obj.setOutputVolume(arg0);
          }
        }
        if (cResult[16] === tmp4.slider) {
          class E {
            constructor(arg0) {
              obj = closure_1_1(closure_1_2[12]);
              return obj.setOutputVolume(arg0);
            }
          }
          if (cResult[19] === stateFromStores1) {
            class E {
              constructor(arg0) {
                obj = closure_1_1(closure_1_2[12]);
                return obj.setOutputVolume(arg0);
              }
            }
          }
          let tmp34 = null != stateFromStores1;
          if (tmp34) {
            class E {
              constructor(arg0) {
                obj = closure_1_1(closure_1_2[12]);
                return obj.setOutputVolume(arg0);
              }
            }
            const obj2 = { label: null, subLabel: null };
            const intl2 = tmp(1126).intl;
            obj2.label = intl2.string(tmp(1126).t.pEAl4b);
            const obj3 = { style: tmp4.slider, children: null };
            const obj4 = { value: stateFromStores2, onValueChange: T, accessibilityLabel: null };
            const intl3 = tmp(1126).intl;
            obj4.accessibilityLabel = intl3.string(tmp(1126).t.pEAl4b);
            obj3.children = closure_9(VolumeSliderDefault, obj4);
            obj2.subLabel = closure_9(View, obj3);
            tmp34 = closure_9(tmp(6000).TableRow, obj2);
          }
          cResult[19] = stateFromStores1;
          cResult[20] = T;
          cResult[21] = stateFromStores2;
          cResult[22] = tmp4.slider;
          cResult[23] = tmp34;
        }
        const obj7 = { label: tmp21, subLabel: null };
        const obj8 = { style: slider, children: tmp26 };
        obj7.subLabel = closure_9(View, obj8);
        const tmp31 = closure_9(tmp(6000).TableRow, obj7);
        cResult[16] = tmp4.slider;
        cResult[17] = tmp26;
        cResult[18] = tmp31;
      }
      const tmp27 = closure_9(VolumeSliderDefault, {
        style: slider2,
        value: stateFromStores,
        onValueChange: E,
        accessibilityLabel: tmp24,
      });
      cResult[13] = stateFromStores;
      cResult[14] = tmp4.slider;
      cResult[15] = tmp27;
      const tmpResult4 = stateFromStores1(504);
    }
  : () => {
      const tmp = closure_11();
      const items = [MediaEngineStore];
      const stateFromStores = stateFromStores1(504).useStateFromStores(items, () => outputVolume.getOutputVolume());
      const obj = stateFromStores1(504);
      const items1 = [ApplicationStreamingStore, AuthenticationStore];
      stateFromStores1 = stateFromStores1(504).useStateFromStores(items1, () => {
        lastActiveStream = lastActiveStream.getLastActiveStream();
        let tmp2 = null;
        if (null != lastActiveStream) {
          tmp2 = null;
          if (lastActiveStream.ownerId !== id.getId()) {
            tmp2 = lastActiveStream;
          }
        }
        return tmp2;
      });
      const obj2 = stateFromStores1(504);
      const items2 = [MediaEngineStore];
      const items3 = [stateFromStores1];
      const stateFromStores2 = stateFromStores1(504).useStateFromStores(items2, () => {
        let num = 0;
        if (null != stateFromStores1) {
          num = MediaEngineStore.getLocalVolume(tmp.ownerId, MediaEngineContextTypes.STREAM);
        }
        return num;
      });
      const callback = noop.useCallback((arg0) => {
        _modDef38(null != stateFromStores1, "Can not set stream volume without active stream");
        AudioActionCreatorsDefault.setLocalVolume(stateFromStores1.ownerId, arg0, MediaEngineContextTypes.STREAM);
      }, items3);
      const obj4 = { title: null, hasIcons: false, children: null };
      const intl = stateFromStores1(1126).intl;
      obj4.title = intl.string(stateFromStores1(1126).t.UXxPGB);
      const obj5 = { label: null, subLabel: null };
      const intl2 = stateFromStores1(1126).intl;
      obj5.label = intl2.string(stateFromStores1(1126).t.xPHVBs);
      const obj6 = { style: tmp.slider, children: null };
      const obj7 = {
        style: tmp.slider,
        value: stateFromStores,
        onValueChange(arg0) {
          return AudioActionCreatorsDefault.setOutputVolume(arg0);
        },
        accessibilityLabel: null,
      };
      const obj3 = stateFromStores1(504);
      const intl3 = stateFromStores1(1126).intl;
      obj7.accessibilityLabel = intl3.string(stateFromStores1(1126).t.xPHVBs);
      obj6.children = closure_9(VolumeSliderDefault, obj7);
      obj5.subLabel = closure_9(View, obj6);
      const items4 = [closure_9(stateFromStores1(6000).TableRow, obj5)];
      let tmp9Result = null != stateFromStores1;
      if (tmp9Result) {
        const obj8 = { label: null, subLabel: null };
        const intl4 = tmp2(1126).intl;
        obj8.label = intl4.string(tmp2(1126).t.pEAl4b);
        const obj9 = { style: tmp.slider, children: null };
        const obj10 = { value: stateFromStores2, onValueChange: callback, accessibilityLabel: null };
        const intl5 = tmp2(1126).intl;
        obj10.accessibilityLabel = intl5.string(tmp2(1126).t.pEAl4b);
        obj9.children = closure_9(VolumeSliderDefault, obj10);
        obj8.subLabel = closure_9(View, obj9);
        tmp9Result = closure_9(tmp2(6000).TableRow, obj8);
        const tmp11Result = VolumeSliderDefault;
      }
      items4[1] = tmp9Result;
      obj4.children = items4;
      return closure_10(stateFromStores1(9670).UserSettingsTableRowGroup, obj4);
    };
