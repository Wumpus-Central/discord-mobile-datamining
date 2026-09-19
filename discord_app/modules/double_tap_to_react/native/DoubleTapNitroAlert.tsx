// discord_app/modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx
import util from "../../../intl/index.native.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import CircleErrorIcon from "../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const NITRO_UPSELL_ALERT_KEY = fn(8226).NITRO_UPSELL_ALERT_KEY;
const UserSettingsSections = fn(1074).UserSettingsSections;
const MobileUserSettings = fn(8232).MobileUserSettings;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4756);
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
  obj.header = React5(View, {
    style: closure_10().icon,
    children: React5(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }),
  });
  const intl = util.intl;
  obj.title = intl.string(util.t.HRAWfC);
  const intl2 = util.intl;
  obj.content = intl2.format(util.t["3u/Je4"], { emojiName: emojiName.emojiName, onRenewNitro: callback1 });
  const obj3 = { children: null };
  const obj4 = { onPress: callback, text: null };
  const intl3 = util.intl;
  obj4.text = intl3.string(util.t.LIIHRy);
  const items = [React5(AlertModal.AlertActionButton, obj4, "confirm")];
  const obj5 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t["Nr6v2+"]);
  items[1] = React5(AlertModal.AlertActionButton, obj5, "cancel");
  obj3.children = items;
  obj.actions = React7(React6, obj3);
  return React5(AlertModal.AlertModal, obj);
}
