// === Module 9678: UserSettingsVoiceOutputOptions ===

// Module 9678 (UserSettingsVoiceOutputOptions)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import Constants from "Constants" /* 4921 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 8079 */;
import VolumeSliderDefault from "VolumeSlider" /* 9679 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4918 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let lastActiveStream;

let c10;
let c9;
const View = react_native.View;
const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ slider: { marginTop: 4 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let id;
  let intl2;
  let intl3;
  let obj3;
  let obj4;
  let obj8;
  let outputVolume;
  let slider;
  let slider2;
  let stateFromStores1;
  let tmp10;
  let tmp14;
  let tmp21;
  let tmp24;
  let tmp37;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp = stateFromStores1;
  let obj = stateFromStores1(576);
  const cResult = obj.c(27);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    const fn = function c() {
      return outputVolume.getOutputVolume();
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
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
    tmp10 = fn2;
    tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult3 = tmp(504);
  stateFromStores1 = tmpResult3.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [MediaEngineStore];
    cResult[4] = items2;
    tmp14 = items2;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== stateFromStores1) {
    class L {
      constructor() {
        let num = 0;
        if (null != stateFromStores1) {
          num = MediaEngineStore.getLocalVolume(tmp.ownerId, MediaEngineContextTypes.STREAM);
        }
        return num;
      }
    }
    cResult[5] = stateFromStores1;
    cResult[6] = L;
  } else {
    class L {
      constructor() {
        let num = 0;
        if (null != stateFromStores1) {
          num = MediaEngineStore.getLocalVolume(tmp.ownerId, MediaEngineContextTypes.STREAM);
        }
        return num;
      }
    }
  }
  const tmpResult4 = tmp(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp14, L);
  if (cResult[7] !== stateFromStores1) {
    class T {
      constructor(arg0) {
        _modDef38(null != stateFromStores1, "Can not set stream volume without active stream");
        const obj = AudioActionCreatorsDefault;
        obj.setLocalVolume(stateFromStores1.ownerId, arg0, MediaEngineContextTypes.STREAM);
      }
    }
    cResult[7] = stateFromStores1;
    cResult[8] = T;
  } else {
    class T {
      constructor(arg0) {
        _modDef38(null != stateFromStores1, "Can not set stream volume without active stream");
        const obj = AudioActionCreatorsDefault;
        obj.setLocalVolume(stateFromStores1.ownerId, arg0, MediaEngineContextTypes.STREAM);
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(arg0) {
        _modDef38(null != stateFromStores1, "Can not set stream volume without active stream");
        const obj = AudioActionCreatorsDefault;
        obj.setLocalVolume(stateFromStores1.ownerId, arg0, MediaEngineContextTypes.STREAM);
      }
    }
    cResult[9] = obj5.string(tmp(1126).t.UXxPGB);
    const stringResult = obj5.string(tmp(1126).t.UXxPGB);
  } else {
    class T {
      constructor(arg0) {
        _modDef38(null != stateFromStores1, "Can not set stream volume without active stream");
        const obj = AudioActionCreatorsDefault;
        obj.setLocalVolume(stateFromStores1.ownerId, arg0, MediaEngineContextTypes.STREAM);
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(arg0) {
        _modDef38(null != stateFromStores1, "Can not set stream volume without active stream");
        const obj = AudioActionCreatorsDefault;
        obj.setLocalVolume(stateFromStores1.ownerId, arg0, MediaEngineContextTypes.STREAM);
      }
    }
    const stringResult1 = obj6.string(tmp(1126).t.xPHVBs);
    cResult[10] = stringResult1;
    tmp21 = stringResult1;
  } else {
    class T {
      constructor(arg0) {
        _modDef38(null != stateFromStores1, "Can not set stream volume without active stream");
        const obj = AudioActionCreatorsDefault;
        obj.setLocalVolume(stateFromStores1.ownerId, arg0, MediaEngineContextTypes.STREAM);
      }
    }
  }
  ({ slider, slider: slider2 } = tmp4);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor(arg0) {
        const obj = AudioActionCreatorsDefault;
        return obj.setOutputVolume(arg0);
      }
    }
    const intl = tmp(1126).intl;
    const stringResult2 = intl.string(tmp(1126).t.xPHVBs);
    cResult[11] = E;
    cResult[12] = stringResult2;
    tmp24 = stringResult2;
  } else {
    class E {
      constructor(arg0) {
        const obj = AudioActionCreatorsDefault;
        return obj.setOutputVolume(arg0);
      }
    }
    tmp24 = cResult[12];
  }
  if (cResult[13] === stateFromStores) {
    class E {
      constructor(arg0) {
        const obj = AudioActionCreatorsDefault;
        return obj.setOutputVolume(arg0);
      }
    }
    if (cResult[16] === tmp4.slider) {
      class E {
        constructor(arg0) {
          const obj = AudioActionCreatorsDefault;
          return obj.setOutputVolume(arg0);
        }
      }
      if (cResult[19] === stateFromStores1) {
        class E {
          constructor(arg0) {
            const obj = AudioActionCreatorsDefault;
            return obj.setOutputVolume(arg0);
          }
        }
      }
      let tmp34 = null != stateFromStores1;
      if (tmp34) {
        class E {
          constructor(arg0) {
            const obj = AudioActionCreatorsDefault;
            return obj.setOutputVolume(arg0);
          }
        }
        const obj2 = { label: intl2.string(tmp(1126).t.pEAl4b), subLabel: closure_9(View, obj3) };
        const TableRow2 = tmp(6000).TableRow;
        intl2 = tmp(1126).intl;
        obj3 = { style: tmp4.slider, children: closure_9(tmp37, obj4) };
        obj4 = { value: stateFromStores2, onValueChange: T, accessibilityLabel: intl3.string(tmp(1126).t.pEAl4b) };
        tmp37 = VolumeSliderDefault;
        intl3 = tmp(1126).intl;
        tmp34 = closure_9(TableRow2, obj2);
      }
      cResult[19] = stateFromStores1;
      cResult[20] = T;
      cResult[21] = stateFromStores2;
      cResult[22] = tmp4.slider;
      cResult[23] = tmp34;
    }
    const obj7 = { label: tmp21, subLabel: closure_9(View, obj8) };
    obj8 = { style: slider, children: tmp26 };
    const TableRow = tmp(6000).TableRow;
    cResult[16] = tmp4.slider;
    cResult[17] = tmp26;
    cResult[18] = closure_9(TableRow, obj7);
    const tmp31 = closure_9(TableRow, obj7);
  }
  cResult[13] = stateFromStores;
  cResult[14] = tmp4.slider;
  cResult[15] = closure_9(VolumeSliderDefault, { style: slider2, value: stateFromStores, onValueChange: E, accessibilityLabel: tmp24 });
  const tmp27 = closure_9(VolumeSliderDefault, { style: slider2, value: stateFromStores, onValueChange: E, accessibilityLabel: tmp24 });
}) : (() => {
  let id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items4;
  let obj10;
  let obj6;
  let obj7;
  let obj9;
  let outputVolume;
  let stateFromStores1;
  let tmp11Result;
  let tmp12;
  const tmp = closure_11();
  let tmp2 = stateFromStores1;
  let obj = stateFromStores1(504);
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => outputVolume.getOutputVolume());
  const items1 = [ApplicationStreamingStore, AuthenticationStore];
  const obj2 = stateFromStores1(504);
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
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
  const items2 = [MediaEngineStore];
  const items3 = [stateFromStores1];
  const obj3 = stateFromStores1(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let num = 0;
    if (null != stateFromStores1) {
      num = MediaEngineStore.getLocalVolume(tmp.ownerId, MediaEngineContextTypes.STREAM);
    }
    return num;
  });
  const callback = react.useCallback((arg0) => {
    _modDef38(null != stateFromStores1, "Can not set stream volume without active stream");
    const obj = AudioActionCreatorsDefault;
    obj.setLocalVolume(stateFromStores1.ownerId, arg0, MediaEngineContextTypes.STREAM);
  }, items3);
  const obj4 = { title: intl.string(stateFromStores1(1126).t.UXxPGB), hasIcons: false, children: items4 };
  const UserSettingsTableRowGroup = stateFromStores1(9670).UserSettingsTableRowGroup;
  intl = stateFromStores1(1126).intl;
  const obj5 = { label: intl2.string(stateFromStores1(1126).t.xPHVBs), subLabel: closure_9(View, obj6) };
  const TableRow = stateFromStores1(6000).TableRow;
  intl2 = stateFromStores1(1126).intl;
  obj6 = { style: tmp.slider, children: closure_9(tmp12, obj7) };
  obj7 = {
    style: tmp.slider,
    value: stateFromStores,
    onValueChange(arg0) {
      const obj = AudioActionCreatorsDefault;
      return obj.setOutputVolume(arg0);
    },
    accessibilityLabel: intl3.string(stateFromStores1(1126).t.xPHVBs)
  };
  tmp12 = VolumeSliderDefault;
  intl3 = stateFromStores1(1126).intl;
  items4 = [closure_9(TableRow, obj5), ];
  let tmp9Result = null != stateFromStores1;
  if (tmp9Result) {
    const obj8 = { label: intl4.string(tmp2(1126).t.pEAl4b), subLabel: closure_9(View, obj9) };
    const TableRow2 = tmp2(6000).TableRow;
    intl4 = tmp2(1126).intl;
    obj9 = { style: tmp.slider, children: closure_9(tmp11Result, obj10) };
    obj10 = { value: stateFromStores2, onValueChange: callback, accessibilityLabel: intl5.string(tmp2(1126).t.pEAl4b) };
    tmp11Result = VolumeSliderDefault;
    intl5 = tmp2(1126).intl;
    tmp9Result = closure_9(TableRow2, obj8);
  }
  items4[1] = tmp9Result;
  return closure_10(UserSettingsTableRowGroup, obj4);
});
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOutputOptions.tsx");

export default tmp3;