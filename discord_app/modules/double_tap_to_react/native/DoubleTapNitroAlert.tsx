// discord_app/modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import Constants from "../../../Constants.tsx";
import intl5 from "../../../intl/index.native.tsx";
import CircleErrorIcon from "../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import AlertModal2 from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import DoubleTapToRaectConstants from "../DoubleTapToRaectConstants.tsx";
import SettingsConstants from "../../user_settings/core/native/SettingsConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let emojiName, openUserSettingsResult;

let c9;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const NITRO_UPSELL_ALERT_KEY = DoubleTapToRaectConstants.NITRO_UPSELL_ALERT_KEY;
const UserSettingsSections = Constants.UserSettingsSections;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (emojiName) => {
      let constants2;
      let first;
      let intl;
      let intl2;
      let items;
      let tmp12;
      let tmp16;
      let tmp18;
      let tmp22;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(13);
      emojiName = emojiName.emojiName;
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          let obj3;
          const obj2 = { screen: constants.TEXT, params: obj3 };
          obj3 = { initialSetting: constants2.DOUBLE_TAP_EMOJI };
          const obj = require("openUserSettings");
          obj.openUserSettings(obj2);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
        cResult[1] = E;
      } else {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
        let obj2 = { size: "custom", style: { width: 40, height: 40 } };
        const tmp8 = metroImportDefault(CircleErrorIcon.CircleErrorIcon, obj2);
        cResult[2] = tmp8;
        tmp7 = tmp8;
      } else {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
      }
      if (cResult[3] !== tmp4.icon) {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
        let obj3 = { style: tmp4.icon, children: tmp7 };
        cResult[3] = tmp4.icon;
        cResult[4] = metroImportDefault(View, obj3);
        const tmp11 = metroImportDefault(View, obj3);
      } else {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
        const stringResult = obj4.string(intl5.t.HRAWfC);
        cResult[5] = stringResult;
        tmp12 = stringResult;
      } else {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
      }
      if (cResult[6] !== emojiName) {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
        const obj6 = { emojiName, onRenewNitro: E };
        cResult[6] = emojiName;
        cResult[7] = obj5.format(intl5.t["3u/Je4"], obj6);
        const formatResult = obj5.format(intl5.t["3u/Je4"], obj6);
      } else {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
        const obj7 = { onPress: first, text: intl.string(intl5.t.LIIHRy) };
        const AlertActionButton = AlertModal2.AlertActionButton;
        intl = intl5.intl;
        const tmp17 = metroImportDefault(AlertActionButton, obj7, "confirm");
        cResult[8] = tmp17;
        tmp16 = tmp17;
      } else {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
        const obj8 = { children: items };
        items = [tmp16];
        const obj9 = { variant: "secondary", text: intl2.string(intl5.t["Nr6v2+"]) };
        const AlertActionButton2 = AlertModal2.AlertActionButton;
        intl2 = intl5.intl;
        items[1] = metroImportDefault(AlertActionButton2, obj9, "cancel");
        const tmp21 = React4(metroImportAll, obj8);
        cResult[9] = tmp21;
        tmp18 = tmp21;
      } else {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
      }
      if (cResult[10] === tmp9) {
        class E {
          constructor() {
            obj = closure_1_0(closure_1_1[9]);
            obj1 = { screen: closure_1_5.PREMIUM };
            openUserSettingsResult = obj.openUserSettings(obj1, () => {
              const obj = closure_1_0(closure_1_1[10]);
              obj.dismissAlert(closure_1_4);
            });
            return;
          }
        }
        return tmp22;
      }
      tmp22 = metroImportDefault(AlertModal2.AlertModal, {
        header: tmp9,
        title: tmp12,
        content: tmp14,
        actions: tmp18,
      });
      cResult[10] = tmp9;
      cResult[11] = tmp14;
      cResult[12] = tmp22;
    }
  : (emojiName) => {
      let constants2;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let obj2;
      let obj3;
      emojiName = emojiName.emojiName;
      const tmp = closure_10();
      const callback = react.useCallback(() => {
        let obj3;
        const obj2 = { screen: constants.TEXT, params: obj3 };
        obj3 = { initialSetting: constants2.DOUBLE_TAP_EMOJI };
        const obj = require("openUserSettings");
        obj.openUserSettings(obj2);
      }, []);
      const callback1 = react.useCallback(() => {
        let obj = require("openUserSettings");
        const obj2 = { screen: constants.PREMIUM };
        obj.openUserSettings(obj2, () => {
          const obj = closure_1_0(closure_1_1[10]);
          obj.dismissAlert(closure_1_4);
        });
      }, []);
      let obj = {
        header: metroImportDefault(View, obj2),
        title: intl.string(intl5.t.HRAWfC),
        content: intl2.format(intl5.t["3u/Je4"], { emojiName, onRenewNitro: callback1 }),
        actions: React4(metroImportAll, obj3),
      };
      obj2 = {
        style: tmp.icon,
        children: metroImportDefault(CircleErrorIcon.CircleErrorIcon, {
          size: "custom",
          style: { width: 40, height: 40 },
        }),
      };
      const AlertModal = AlertModal2.AlertModal;
      intl = intl5.intl;
      intl2 = intl5.intl;
      obj3 = { children: items };
      const obj4 = { onPress: callback, text: intl3.string(intl5.t.LIIHRy) };
      const AlertActionButton = AlertModal2.AlertActionButton;
      intl3 = intl5.intl;
      items = [metroImportDefault(AlertActionButton, obj4, "confirm")];
      const obj5 = { variant: "secondary", text: intl4.string(intl5.t["Nr6v2+"]) };
      const AlertActionButton2 = AlertModal2.AlertActionButton;
      intl4 = intl5.intl;
      items[1] = metroImportDefault(AlertActionButton2, obj5, "cancel");
      return metroImportDefault(AlertModal, obj);
    };
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx");

export default tmp3;
