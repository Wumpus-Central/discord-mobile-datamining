// discord_app/modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import getAlertModalItemKey from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import CircleErrorIcon from "../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import closure_2 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { NITRO_UPSELL_ALERT_KEY } from "../DoubleTapToRaectConstants.tsx";
import { UserSettingsSections } from "../../../Constants.tsx";
import { MobileUserSettings } from "../../user_settings/core/native/SettingsConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const result = require("set").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx");

export default function DoubleTapNitroAlert(emojiName) {
  const callback = React.useCallback(() => {
    let obj = callback(7398);
    obj = { screen: constants.TEXT, params: obj };
    obj = { initialSetting: constants2.DOUBLE_TAP_EMOJI };
    obj.openUserSettings(obj);
  }, []);
  const callback1 = React.useCallback(() => {
    let obj = callback(7398);
    obj = { screen: constants.PREMIUM };
    obj.openUserSettings(obj, () => {
      callback(table[8]).dismissAlert(closure_4);
    });
  }, []);
  let obj = { header: null, title: null, content: null, actions: null };
  obj = { style: callback3().icon, children: callback(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) };
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