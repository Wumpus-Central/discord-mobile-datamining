// discord_app/modules/user_settings/voice/native/UserSettingsVoiceOutputOptions.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { MediaEngineContextTypes } from "DesktopSources";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { VolumeSlider } from "../../../../components_native/common/VolumeSlider.tsx";

let c10;
let c9;
const require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ slider: { marginTop: 4 } });
const result = require("reset").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOutputOptions.tsx");

export default function UserSettingsVoiceOutputOptions() {
  const tmp = callback2();
  let obj = stateFromStores1(589);
  const items = [_detectH265HardwareDecode];
  const stateFromStores = obj.useStateFromStores(items, () => outputVolume.getOutputVolume());
  let obj1 = stateFromStores1(589);
  const items1 = [reset, fetchFingerprint];
  stateFromStores1 = obj1.useStateFromStores(items1, () => {
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
  let obj2 = stateFromStores1(589);
  const items2 = [_detectH265HardwareDecode];
  const items3 = [stateFromStores1];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let num = 0;
    if (null != stateFromStores1) {
      num = outer1_7.getLocalVolume(tmp.ownerId, outer1_8.STREAM);
    }
    return num;
  });
  const callback = React.useCallback((arg0) => {
    outer1_1(outer1_2[9])(null != stateFromStores1, "Can not set stream volume without active stream");
    outer1_1(outer1_2[10]).setLocalVolume(stateFromStores1.ownerId, arg0, outer1_8.STREAM);
  }, items3);
  obj = { title: null, hasIcons: false, children: null };
  const intl = stateFromStores1(1236).intl;
  obj[0] = intl.string(stateFromStores1(1236).t.UXxPGB);
  obj = { label: null, subLabel: null };
  const intl2 = stateFromStores1(1236).intl;
  obj[0] = intl2.string(stateFromStores1(1236).t.xPHVBs);
  obj1 = { style: tmp.slider, children: callback(VolumeSlider, obj2) };
  obj2 = {
    style: tmp.slider,
    value: stateFromStores,
    onValueChange(arg0) {
      return callback(table[10]).setOutputVolume(arg0);
    }
  };
  obj[1] = callback(View, obj1);
  const items4 = [callback(stateFromStores1(5315).TableRow, obj), ];
  let tmp9Result = null != stateFromStores1;
  if (tmp9Result) {
    const obj3 = { label: null, subLabel: null };
    const intl3 = tmp2(1236).intl;
    obj3[0] = intl3.string(tmp2(1236).t.pEAl4b);
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.slider;
    const obj5 = { value: null, onValueChange: null };
    obj5[0] = stateFromStores2;
    obj5[1] = callback;
    obj4[1] = tmp9(VolumeSlider, obj5);
    obj3[1] = tmp9(View, obj4);
    tmp9Result = tmp9(tmp2(5315).TableRow, obj3);
  }
  items4[1] = tmp9Result;
  obj[2] = items4;
  return closure_10(stateFromStores1(10740).UserSettingsTableRowGroup, obj);
};