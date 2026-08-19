// === Module 12552: UserSettingsVoiceOutputOptions ===

// Module 12552 (UserSettingsVoiceOutputOptions)
import _modDef38 from "module_38" /* 38 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9654 */;
import VolumeSliderDefault from "VolumeSlider" /* 12139 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import reset from "reset" /* 4652 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4529 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ slider: { marginTop: 4 } });
const result = require("obj132").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOutputOptions.tsx");

export default function UserSettingsVoiceOutputOptions() {
  const tmp = callback2();
  let obj = stateFromStores1(589);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outputVolume.getOutputVolume());
  obj1 = stateFromStores1(589);
  const items1 = [closure_5, closure_6];
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
  const items2 = [closure_7];
  const items3 = [stateFromStores1];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
    let num = 0;
    if (null != stateFromStores1) {
      num = closure_1_7.getLocalVolume(tmp.ownerId, MediaEngineContextTypes.STREAM);
    }
    return num;
  });
  const callback = React.useCallback((arg0) => {
    _modDef38(null != stateFromStores1, "Can not set stream volume without active stream");
    trackDeviceChangedDefault.setLocalVolume(stateFromStores1.ownerId, arg0, MediaEngineContextTypes.STREAM);
  }, items3);
  obj = { title: null, hasIcons: false, children: null };
  const intl = stateFromStores1(1236).intl;
  obj[0] = intl.string(stateFromStores1(1236).t.UXxPGB);
  obj = { label: null, subLabel: null };
  const intl2 = stateFromStores1(1236).intl;
  obj[0] = intl2.string(stateFromStores1(1236).t.xPHVBs);
  obj1 = { style: tmp.slider, children: callback(VolumeSliderDefault, obj2) };
  obj2 = {
    style: tmp.slider,
    value: stateFromStores,
    onValueChange(arg0) {
      return callback(table[10]).setOutputVolume(arg0);
    }
  };
  obj[1] = callback(View, obj1);
  const items4 = [callback(stateFromStores1(6291).TableRow, obj), ];
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
    obj4[1] = tmp9(VolumeSliderDefault, obj5);
    obj3[1] = tmp9(View, obj4);
    tmp9Result = tmp9(tmp2(6291).TableRow, obj3);
  }
  items4[1] = tmp9Result;
  obj[2] = items4;
  return callback(stateFromStores1(12547).UserSettingsTableRowGroup, obj);
};