// discord_app/modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { NITRO_UPSELL_ALERT_KEY } from "NITRO_UPSELL_ALERT_KEY";
import { UserSettingsSections } from "ME";
import { MobileSetting } from "MobileSetting";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let error;
let metroImportAll;
const require = arg1;
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const result = require("NITRO_UPSELL_ALERT_KEY").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx");

export default function DoubleTapNitroAlert(emojiName) {
  const callback = React.useCallback(() => {
    let obj = callback(6614);
    obj = { screen: constants.TEXT, params: obj };
    obj = { initialSetting: constants2.DOUBLE_TAP_EMOJI };
    obj.openUserSettings(obj);
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = callback(6614);
    obj = { screen: constants.PREMIUM };
    obj.openUserSettings(obj, () => {
      callback(table[8]).dismissAlert(closure_4);
    });
  }, []);
  let obj = { header: null, title: null, content: null, actions: null };
  obj = { style: callback3().icon, children: null };
  obj[1] = callback(require(6733) /* CircleErrorIcon */.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } });
  obj[0] = callback(View, obj);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.HRAWfC);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl2.format(require(1236) /* getSystemLocale */.t["3u/Je4"], { emojiName: emojiName.emojiName, onRenewNitro: callback1 });
  obj = { children: null };
  const obj1 = { onPress: callback, text: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl3.string(require(1236) /* getSystemLocale */.t.LIIHRy);
  const items = [callback(require(4537) /* getAlertModalItemKey */.AlertActionButton, obj1, "confirm"), ];
  const obj2 = { variant: "secondary", text: null };
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj2[1] = intl4.string(require(1236) /* getSystemLocale */.t["Nr6v2+"]);
  items[1] = callback(require(4537) /* getAlertModalItemKey */.AlertActionButton, obj2, "cancel");
  obj[0] = items;
  obj[3] = callback2(closure_8, obj);
  return callback(require(4537) /* getAlertModalItemKey */.AlertModal, obj);
};