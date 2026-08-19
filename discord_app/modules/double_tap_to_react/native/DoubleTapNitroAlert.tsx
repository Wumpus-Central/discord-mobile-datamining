// === Module 8197: DoubleTapNitroAlert ===

// Module 8197 (DoubleTapNitroAlert)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4660 */;
import CircleErrorIcon from "CircleErrorIcon" /* 8074 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { NITRO_UPSELL_ALERT_KEY } from "NITRO_UPSELL_ALERT_KEY" /* 8193 */;
import { UserSettingsSections } from "ME" /* 676 */;
import { MobileUserSettings } from "MobileUserSettings" /* 8198 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const result = require("obj132").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx");

export default function DoubleTapNitroAlert(emojiName) {
  const callback = React.useCallback(() => {
    let obj = callback(7360);
    obj = { initialSetting: constants2.DOUBLE_TAP_EMOJI };
    obj.openUserSettings(obj);
  }, []);
  const callback1 = React.useCallback(() => {
    callback(7360);
    const obj = { screen: constants.PREMIUM };
    obj.openUserSettings(obj, () => {
      callback(table[8]).dismissAlert(closure_4);
    });
  }, []);
  let obj = { style: callback3().icon, children: callback(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
  obj[0] = callback(View, obj);
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.HRAWfC);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.format(getSystemLocale.t["3u/Je4"], { emojiName: emojiName.emojiName, onRenewNitro: callback1 });
  obj = { children: null };
  obj1 = { onPress: callback, text: null };
  const intl3 = getSystemLocale.intl;
  obj1[1] = intl3.string(getSystemLocale.t.LIIHRy);
  const items = [callback(getAlertModalItemKey.AlertActionButton, obj1, "confirm"), ];
  const obj2 = { variant: "secondary", text: null };
  const intl4 = getSystemLocale.intl;
  obj2[1] = intl4.string(getSystemLocale.t["Nr6v2+"]);
  items[1] = callback(getAlertModalItemKey.AlertActionButton, obj2, "cancel");
  obj[0] = items;
  obj[3] = callback2(closure_8, obj);
  return callback(getAlertModalItemKey.AlertModal, obj);
};