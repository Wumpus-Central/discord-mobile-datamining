// === Module 14598: volumeSlider ===

// Module 14598 (volumeSlider)
import _modDef38 from "module_38" /* 38 */;
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4569 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9654 */;
import apexExperimentDefault from "apexExperiment" /* 12136 */;
import reset from "reset" /* 4652 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.pEAl4b);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  maximum: 200,
  useValue: function useStreamVolumeSettingValue() {
    let items = [closure_3, closure_4, closure_5];
    return initialize.useStateFromStores(items, () => {
      const items = [closure_3, closure_4];
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
    const items = [closure_3, closure_4];
    [obj, obj2] = items;
    const lastActiveStream = obj.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== obj2.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    _modDef38(null != tmp2, "Can not set stream volume without active stream");
    trackDeviceChangedDefault.setLocalVolume(tmp2.ownerId, arg0, BaseConnectionEvent.MediaEngineContextTypes.STREAM);
  },
  usePredicate: function useHasStreamVolumeSetting() {
    const obj = apexExperimentDefault;
    let items = [closure_3, closure_4];
    return initialize.useStateFromStores(items, () => {
      const items = [closure_3, closure_4];
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
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx");

export default createToggle;