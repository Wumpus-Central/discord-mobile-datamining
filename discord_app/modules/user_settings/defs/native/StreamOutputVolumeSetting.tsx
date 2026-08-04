// discord_app/modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.pEAl4b);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  maximum: 200,
  useValue: function useStreamVolumeSettingValue() {
    let items = [reset, fetchFingerprint, _detectH265HardwareDecode];
    return require(589) /* initialize */.useStateFromStores(items, () => {
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
    importDefault(38)(null != tmp2, "Can not set stream volume without active stream");
    importDefault(8847).setLocalVolume(tmp2.ownerId, arg0, require(4290) /* BaseConnectionEvent */.MediaEngineContextTypes.STREAM);
  },
  usePredicate: function useHasStreamVolumeSetting() {
    const obj = importDefault(10782);
    let items = [reset, fetchFingerprint];
    const obj2 = require(589) /* initialize */;
    return require(589) /* initialize */.useStateFromStores(items, () => {
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
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t["3182VD"]), ];
    const intl2 = require(1236) /* getSystemLocale */.intl;
    items[1] = intl2.string(require(1236) /* getSystemLocale */.t["DGq/PR"]);
    return items;
  }
};
createToggle = createToggle.createVolumeSlider(createToggle);
const result = require("_detectH265HardwareDecode").fileFinishedImporting("modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx");

export default createToggle;