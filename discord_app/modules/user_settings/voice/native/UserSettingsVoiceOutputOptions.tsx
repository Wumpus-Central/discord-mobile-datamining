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
const MediaEngineContextTypes = fn(4854).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
let closure_11 = createStyles.createStyles({ slider: { marginTop: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOutputOptions.tsx");

export default function UserSettingsVoiceOutputOptions() {
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
  const intl = stateFromStores1(1115).intl;
  obj4.title = intl.string(stateFromStores1(1115).t.UXxPGB);
  const obj5 = { label: null, subLabel: null };
  const intl2 = stateFromStores1(1115).intl;
  obj5.label = intl2.string(stateFromStores1(1115).t.xPHVBs);
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
  const intl3 = stateFromStores1(1115).intl;
  obj7.accessibilityLabel = intl3.string(stateFromStores1(1115).t.xPHVBs);
  obj6.children = closure_9(VolumeSliderDefault, obj7);
  obj5.subLabel = closure_9(View, obj6);
  const items4 = [closure_9(stateFromStores1(5912).TableRow, obj5)];
  let tmp9Result = null != stateFromStores1;
  if (tmp9Result) {
    const obj8 = { label: null, subLabel: null };
    const intl4 = tmp2(1115).intl;
    obj8.label = intl4.string(tmp2(1115).t.pEAl4b);
    const obj9 = { style: tmp.slider, children: null };
    const obj10 = { value: stateFromStores2, onValueChange: callback, accessibilityLabel: null };
    const intl5 = tmp2(1115).intl;
    obj10.accessibilityLabel = intl5.string(tmp2(1115).t.pEAl4b);
    obj9.children = closure_9(VolumeSliderDefault, obj10);
    obj8.subLabel = closure_9(View, obj9);
    tmp9Result = closure_9(tmp2(5912).TableRow, obj8);
    const tmp11Result = VolumeSliderDefault;
  }
  items4[1] = tmp9Result;
  obj4.children = items4;
  return closure_10(stateFromStores1(9423).UserSettingsTableRowGroup, obj4);
}
