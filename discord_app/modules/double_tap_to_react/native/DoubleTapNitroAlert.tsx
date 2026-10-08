// discord_app/modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import CircleErrorIcon from "../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const NITRO_UPSELL_ALERT_KEY = fn(7960).NITRO_UPSELL_ALERT_KEY;
const UserSettingsSections = fn(1085).UserSettingsSections;
const MobileUserSettings = fn(7966).MobileUserSettings;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let closure_10 = createStyles.createStyles({ icon: { alignItems: "center", justifyContent: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapNitroAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DoubleTapNitroAlert(emojiName) {
      const cResult = c.c(13);
      emojiName = emojiName.emojiName;
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
          const obj2 = { screen: constants.TEXT, params: { initialSetting: constants2.DOUBLE_TAP_EMOJI } };
          openUserSettings.openUserSettings(obj2);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function b() {
          openUserSettings.openUserSettings({ screen: constants.PREMIUM }, () => {
            closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
          });
        };
        cResult[1] = fn2;
        let tmp6 = fn2;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { size: "custom", style: { width: 40, height: 40 } };
        const tmp9 = React5(CircleErrorIcon.CircleErrorIcon, obj2);
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] !== tmp4.icon) {
        const obj3 = { style: tmp4.icon, children: tmp7 };
        const tmp13 = React5(View, obj3);
        cResult[3] = tmp4.icon;
        cResult[4] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.HRAWfC);
        cResult[5] = stringResult;
        let tmp14 = stringResult;
      } else {
        tmp14 = cResult[5];
      }
      if (cResult[6] !== emojiName) {
        const intl2 = util.intl;
        const obj4 = { emojiName, onRenewNitro: tmp6 };
        const formatResult = intl2.format(util.t["3u/Je4"], obj4);
        cResult[6] = emojiName;
        cResult[7] = formatResult;
        let tmp16 = formatResult;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { onPress: first, text: null };
        const intl3 = util.intl;
        obj5.text = intl3.string(util.t.LIIHRy);
        const tmp20 = React5(AlertModal.AlertActionButton, obj5, "confirm");
        cResult[8] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { children: null };
        const items = [tmp18];
        const obj7 = { variant: "secondary", text: null };
        const intl4 = util.intl;
        obj7.text = intl4.string(util.t["Nr6v2+"]);
        items[1] = React5(AlertModal.AlertActionButton, obj7, "cancel");
        obj6.children = items;
        const tmp25 = options(closure_1_8, obj6);
        cResult[9] = tmp25;
        let tmp21 = tmp25;
      } else {
        tmp21 = cResult[9];
      }
      if (cResult[10] === tmp10) {
        if (cResult[11] === tmp16) {
          let tmp26 = cResult[12];
        }
        return tmp26;
      }
      const tmp27 = React5(AlertModal.AlertModal, { header: tmp10, title: tmp14, content: tmp16, actions: tmp21 });
      cResult[10] = tmp10;
      cResult[11] = tmp16;
      cResult[12] = tmp27;
      tmp26 = tmp27;
    }
  : function DoubleTapNitroAlert(emojiName) {
      const callback = noop.useCallback(() => {
        const obj2 = { screen: constants.TEXT, params: { initialSetting: constants2.DOUBLE_TAP_EMOJI } };
        openUserSettings.openUserSettings(obj2);
      }, []);
      const callback1 = noop.useCallback(() => {
        openUserSettings.openUserSettings({ screen: constants.PREMIUM }, () => {
          closure_1_0(dependencyMap[10]).dismissAlert(closure_1_4);
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
      obj.actions = options(closure_1_8, obj3);
      return React5(AlertModal.AlertModal, obj);
    };
