// discord_app/modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx
import util from "../../../intl/index.native.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import CircleErrorIcon from "../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const NITRO_UPSELL_ALERT_KEY = fn(7969).NITRO_UPSELL_ALERT_KEY;
const UserSettingsSections = fn(1074).UserSettingsSections;
const MobileUserSettings = fn(7975).MobileUserSettings;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx");

export default function DoubleTapNitroAlert(emojiName) {
  const callback = noop.useCallback(() => {
    let obj = { screen: constants.TEXT, params: null };
    obj = { initialSetting: constants2.DOUBLE_TAP_EMOJI };
    obj.params = obj;
    obj.openUserSettings(obj);
  }, []);
  const callback1 = noop.useCallback(() => {
    const obj = { screen: constants.PREMIUM };
    obj.openUserSettings(obj, () => {
      closure_1_0(dependencyMap[8]).dismissAlert(closure_1_4);
    });
  }, []);
  let obj = { header: null, title: null, content: null, actions: null };
  obj = {
    style: closure_10().icon,
    children: React5(CircleErrorIcon.CircleErrorIcon, { size: "custom", style: { width: 40, height: 40 } }),
  };
  obj.header = React5(View, obj);
  const intl = util.intl;
  obj.title = intl.string(util.t.HRAWfC);
  const intl2 = util.intl;
  obj.content = intl2.format(util.t["3u/Je4"], { emojiName: emojiName.emojiName, onRenewNitro: callback1 });
  obj = { children: null };
  const obj1 = { onPress: callback, text: null };
  const intl3 = util.intl;
  obj1.text = intl3.string(util.t.LIIHRy);
  const items = [React5(AlertModal.AlertActionButton, obj1, "confirm")];
  const obj2 = { variant: "secondary", text: null };
  const intl4 = util.intl;
  obj2.text = intl4.string(util.t["Nr6v2+"]);
  items[1] = React5(AlertModal.AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = React7(React6, obj);
  return React5(AlertModal.AlertModal, obj);
}
