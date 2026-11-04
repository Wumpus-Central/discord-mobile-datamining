// === Module 8572: DoubleTapNitroAlert ===

// Module 8572 (DoubleTapNitroAlert)
import util from "util" /* 1113 */;
import AlertModal from "AlertModal" /* 6099 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7227 */;
import openUserSettings from "openUserSettings" /* 7703 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const NITRO_UPSELL_ALERT_KEY = fn(8568).NITRO_UPSELL_ALERT_KEY;
const UserSettingsSections = fn(1072).UserSettingsSections;
const MobileUserSettings = fn(8573).MobileUserSettings;
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5141);
let closure_10 = createStyles.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx");

export default function DoubleTapNitroAlert(emojiName) {
  const callback = noop.useCallback(() => {
    const obj2 = { screen: constants.TEXT, params: { initialSetting: constants2.DOUBLE_TAP_EMOJI } };
    openUserSettings.openUserSettings(obj2);
  }, []);
  const callback1 = noop.useCallback(() => {
    openUserSettings.openUserSettings({ screen: constants.PREMIUM }, () => {
      closure_1_0(dependencyMap[8]).dismissAlert(closure_1_4);
    });
  }, []);
  const obj = { header: null, title: null, content: null, actions: null };
  const tmp = closure_10();
  obj.header = metroImportDefault(View, { style: closure_10().icon, children: metroImportDefault(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }) });
  const intl = util.intl;
  obj.title = intl.string(util.t.HRAWfC);
  const intl2 = util.intl;
  obj.content = intl2.format(util.t["3u/Je4"], { emojiName: emojiName.emojiName, onRenewNitro: callback1 });
  const obj3 = { children: null };
  const obj4 = { onPress: callback, text: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t.LIIHRy);
  items = [metroImportDefault(AlertModal.AlertActionButton, obj4, "confirm"), ];
  const obj5 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t["Nr6v2+"]);
  items[1] = metroImportDefault(AlertModal.AlertActionButton, obj5, "cancel");
  obj3.children = items;
  obj.actions = React6(React5, obj3);
  return metroImportDefault(AlertModal.AlertModal, obj);
};