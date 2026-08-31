// discord_app/modules/user_settings/voice/native/UserSettingsVoiceOutputOptions.tsx
import VolumeSliderDefault from "../../../../components_native/common/VolumeSlider.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/ApplicationStreamingStore.tsx";
import closure_6 from "../../../../stores/AuthenticationStore.tsx";
import closure_7 from "../../../../stores/MediaEngineStore.tsx";
import { MediaEngineContextTypes } from "../../../../../discord_common/js/packages/media-engine/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ slider: { marginTop: 4 } });
const result = require("set").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOutputOptions.tsx");

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
      num = closure_1_7.getLocalVolume(tmp.ownerId, closure_1_8.STREAM);
    }
    return num;
  });
  const callback = React.useCallback((arg0) => {
    closure_1_1(closure_1_2[9])(null != stateFromStores1, "Can not set stream volume without active stream");
    closure_1_1(closure_1_2[10]).setLocalVolume(stateFromStores1.ownerId, arg0, closure_1_8.STREAM);
  }, items3);
  obj = { title: null, hasIcons: false, children: null };
  const intl = stateFromStores1(1236).intl;
  obj[0] = intl.string(stateFromStores1(1236).t.UXxPGB);
  obj = { label: null, subLabel: null };
  const intl2 = stateFromStores1(1236).intl;
  obj[0] = intl2.string(stateFromStores1(1236).t.xPHVBs);
  obj1 = { style: tmp.slider, children: null };
  obj2 = {
    style: tmp.slider,
    value: stateFromStores,
    onValueChange(arg0) {
      return callback(table[10]).setOutputVolume(arg0);
    },
    accessibilityLabel: null
  };
  const intl3 = stateFromStores1(1236).intl;
  obj2[3] = intl3.string(stateFromStores1(1236).t.xPHVBs);
  obj1[1] = callback(VolumeSliderDefault, obj2);
  obj[1] = callback(View, obj1);
  const items4 = [callback(stateFromStores1(5567).TableRow, obj), ];
  let tmp9Result = null != stateFromStores1;
  if (tmp9Result) {
    const obj3 = { label: null, subLabel: null };
    const intl4 = tmp2(1236).intl;
    obj3[0] = intl4.string(tmp2(1236).t.pEAl4b);
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.slider;
    const obj5 = { value: null, onValueChange: null, accessibilityLabel: null };
    obj5[0] = stateFromStores2;
    obj5[1] = callback;
    const intl5 = tmp2(1236).intl;
    obj5[2] = intl5.string(tmp2(1236).t.pEAl4b);
    obj4[1] = tmp9(VolumeSliderDefault, obj5);
    obj3[1] = tmp9(View, obj4);
    tmp9Result = tmp9(tmp2(5567).TableRow, obj3);
    const tmp11Result = VolumeSliderDefault;
  }
  items4[1] = tmp9Result;
  obj[2] = items4;
  return closure_10(stateFromStores1(10023).UserSettingsTableRowGroup, obj);
};