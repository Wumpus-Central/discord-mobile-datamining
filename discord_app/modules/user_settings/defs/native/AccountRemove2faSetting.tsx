// discord_app/modules/user_settings/defs/native/AccountRemove2faSetting.tsx
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["D+aE7g"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function remove2FA() {
    let obj = importDefault(4532);
    obj = { title: null, body: null, cancelText: null, onConfirm: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t["D+aE7g"]);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.EA4ZEk);
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[2] = intl3.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
    obj[3] = function onConfirm() {
      return callback(table[4]).disable();
    };
    obj.show(obj);
  },
  useIsDisabled() {
    return null !== require(13844) /* getSMSBackupDisabledMessage */.use2FARemoveDisableReason();
  },
  useDescription: require("getSMSBackupDisabledMessage").use2FARemoveDisableReason,
  usePredicate: require("useIs2FAEnabled").useIsTOTPEnabled
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["D+aE7g"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function remove2FA() {
    let obj = importDefault(4532);
    obj = { title: null, body: null, cancelText: null, onConfirm: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[0] = intl.string(require(1236) /* getSystemLocale */.t["D+aE7g"]);
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.EA4ZEk);
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj[2] = intl3.string(require(1236) /* getSystemLocale */.t["ETE/oC"]);
    obj[3] = function onConfirm() {
      return callback(table[4]).disable();
    };
    obj.show(obj);
  },
  useIsDisabled() {
    return null !== require(13844) /* getSMSBackupDisabledMessage */.use2FARemoveDisableReason();
  },
  useDescription: require("getSMSBackupDisabledMessage").use2FARemoveDisableReason,
  usePredicate: require("useIs2FAEnabled").useIsTOTPEnabled
};
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AccountRemove2faSetting.tsx");

export default pressable;