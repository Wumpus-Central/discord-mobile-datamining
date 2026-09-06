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
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ slider: { marginTop: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOutputOptions.tsx");

export default function UserSettingsVoiceOutputOptions() {
  const tmp = closure_11();
  let obj = stateFromStores1(504);
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => outputVolume.getOutputVolume());
  let obj1 = stateFromStores1(504);
  const items1 = [ApplicationStreamingStore, AuthenticationStore];
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
  let obj2 = stateFromStores1(504);
  const items2 = [MediaEngineStore];
  const items3 = [stateFromStores1];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => {
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
  obj = { title: null, hasIcons: false, children: null };
  const intl = stateFromStores1(1114).intl;
  obj.title = intl.string(stateFromStores1(1114).t.UXxPGB);
  obj = { label: null, subLabel: null };
  const intl2 = stateFromStores1(1114).intl;
  obj.label = intl2.string(stateFromStores1(1114).t.xPHVBs);
  obj1 = { style: tmp.slider, children: null };
  obj2 = {
    style: tmp.slider,
    value: stateFromStores,
    onValueChange(arg0) {
      return AudioActionCreatorsDefault.setOutputVolume(arg0);
    },
    accessibilityLabel: null,
  };
  const intl3 = stateFromStores1(1114).intl;
  obj2.accessibilityLabel = intl3.string(stateFromStores1(1114).t.xPHVBs);
  obj1.children = closure_9(VolumeSliderDefault, obj2);
  obj.subLabel = closure_9(View, obj1);
  const items4 = [closure_9(stateFromStores1(5605).TableRow, obj)];
  let tmp9Result = null != stateFromStores1;
  if (tmp9Result) {
    const obj3 = { label: null, subLabel: null };
    const intl4 = tmp2(1114).intl;
    obj3.label = intl4.string(tmp2(1114).t.pEAl4b);
    const obj4 = { style: tmp.slider, children: null };
    const obj5 = { value: stateFromStores2, onValueChange: callback, accessibilityLabel: null };
    const intl5 = tmp2(1114).intl;
    obj5.accessibilityLabel = intl5.string(tmp2(1114).t.pEAl4b);
    obj4.children = tmp9(VolumeSliderDefault, obj5);
    obj3.subLabel = tmp9(View, obj4);
    tmp9Result = tmp9(tmp2(5605).TableRow, obj3);
    const tmp11Result = VolumeSliderDefault;
  }
  items4[1] = tmp9Result;
  obj.children = items4;
  return closure_10(stateFromStores1(9979).UserSettingsTableRowGroup, obj);
}
