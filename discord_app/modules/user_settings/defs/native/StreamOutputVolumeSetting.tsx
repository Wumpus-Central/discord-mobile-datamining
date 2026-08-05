// discord_app/modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createToggle from "createToggle";
import { 00038__ } from "../../../../../_runtime/metro/00038__.js";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { BaseConnectionEvent } from "../../../../../discord_common/js/packages/media-engine/index.tsx";
import { trackDeviceChanged } from "../../../../actions/AudioActionCreators.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { apexExperiment } from "../../../media_engine/MobileAudioOutputExperiment.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.pEAl4b);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  maximum: 200,
  useValue: function useStreamVolumeSettingValue() {
    let items = [reset, fetchFingerprint, _detectH265HardwareDecode];
    return initialize.useStateFromStores(items, () => {
      let obj;
      let obj2;
      const items = [reset, fetchFingerprint];
      [obj, obj2] = items;
      const lastActiveStream = obj.getLastActiveStream();
      let tmp2 = null;
      if (null != lastActiveStream) {
        tmp2 = null;
        if (lastActiveStream.ownerId !== obj2.getId()) {
          tmp2 = lastActiveStream;
        }
      }
      let num = 0;
      if (null != tmp2) {
        num = localVolume.getLocalVolume(tmp2.ownerId, callback(table[5]).MediaEngineContextTypes.STREAM);
      }
      return num;
    });
  },
  onValueChange: function onStreamValueSettingValueChange(arg0) {
    let obj;
    let obj2;
    const items = [reset, fetchFingerprint];
    [obj, obj2] = items;
    const lastActiveStream = obj.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== obj2.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    00038__(null != tmp2, "Can not set stream volume without active stream");
    trackDeviceChanged.setLocalVolume(tmp2.ownerId, arg0, BaseConnectionEvent.MediaEngineContextTypes.STREAM);
  },
  usePredicate: function useHasStreamVolumeSetting() {
    const obj = apexExperiment;
    let items = [reset, fetchFingerprint];
    const obj2 = initialize;
    return initialize.useStateFromStores(items, () => {
      let obj;
      let obj2;
      const items = [reset, fetchFingerprint];
      [obj, obj2] = items;
      const lastActiveStream = obj.getLastActiveStream();
      let tmp2 = null;
      if (null != lastActiveStream) {
        tmp2 = null;
        if (lastActiveStream.ownerId !== obj2.getId()) {
          tmp2 = lastActiveStream;
        }
      }
      return null != tmp2;
    }) && obj.getConfig({ location: "StreamOutputVolumeSetting" }).audioOutputPresent;
  },
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t["3182VD"]), ];
    const intl2 = getSystemLocale.intl;
    items[1] = intl2.string(getSystemLocale.t["DGq/PR"]);
    return items;
  }
};
createToggle = createToggle.createVolumeSlider(createToggle);
const result = require("_detectH265HardwareDecode").fileFinishedImporting("modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx");

export default createToggle;