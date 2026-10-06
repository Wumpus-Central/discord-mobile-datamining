// discord_app/modules/video_calls/native/components/HideSelfStreamAndVideoConfirmDialog.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import AlertDefault from "../../../../components_native/common/Alert.tsx";
import UserSettingsActionCreatorsDefault from "../../../../actions/UserSettingsActionCreators.tsx";
import HideSelfStreamAndVideoConstants from "../../../calls/HideSelfStreamAndVideoConstants.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
let closure_3 = ["type", "onConfirm"];
const View = react_native.View;
const constants = HideSelfStreamAndVideoConstants.SelfStreamAndVideoAlertType;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({
  wrapper: { padding: 16 },
  body: { paddingTop: 16 },
  description: { lineHeight: 18 },
  ctaLink: { paddingTop: 8, textAlign: "center", textDecorationLine: "underline" },
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let items;
      let onClose;
      let onConfirm;
      let tmp11;
      let tmp12;
      let tmp15;
      let tmp18;
      let tmp20;
      let tmp4;
      let tmp6;
      let type;
      let obj = require("react");
      const cResult = obj.c(33);
      if (cResult[0] !== arg0) {
        ({ type, onConfirm } = arg0);
        _require = onConfirm;
        const tmp9 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp9;
        cResult[2] = onConfirm;
        cResult[3] = type;
        tmp6 = type;
        tmp4 = tmp9;
      } else {
        tmp4 = cResult[1];
        _require = cResult[2];
        tmp6 = cResult[3];
      }
      const tmp10 = closure_9();
      if (cResult[4] !== onConfirm) {
        const fn = function v() {
          const obj = UserSettingsActionCreatorsDefault;
          const result = obj.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: true });
          closure_0();
        };
        cResult[4] = onConfirm;
        cResult[5] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== tmp6) {
        let stringResult;
        if (tmp6 === constants.STREAM) {
          const intl2 = tmp(1126).intl;
          stringResult = intl2.string(tmp(1126).t["/lFMWr"]);
        } else {
          const intl = tmp(1126).intl;
          stringResult = intl.string(tmp(1126).t.xzxhZS);
        }
        cResult[6] = tmp6;
        cResult[7] = stringResult;
        tmp12 = stringResult;
      } else {
        tmp12 = cResult[7];
      }
      if (cResult[8] !== tmp6) {
        let stringResult1;
        if (tmp6 === constants.STREAM) {
          const intl4 = tmp(1126).intl;
          stringResult1 = intl4.string(tmp(1126).t.xaOX7d);
        } else {
          const intl3 = tmp(1126).intl;
          stringResult1 = intl3.string(tmp(1126).t.oU1p9O);
        }
        cResult[8] = tmp6;
        cResult[9] = stringResult1;
        tmp15 = stringResult1;
      } else {
        tmp15 = cResult[9];
      }
      const wrapper = tmp10.wrapper;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl5 = tmp(1126).intl;
        const stringResult2 = intl5.string(require("intl").t["ETE/oC"]);
        cResult[10] = stringResult2;
        tmp18 = stringResult2;
      } else {
        tmp18 = cResult[10];
      }
      if (tmp4 != null) {
        onClose = tmp4.onClose;
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl6 = tmp(1126).intl;
        const stringResult3 = intl6.string(require("intl").t["cY+Oob"]);
        cResult[11] = stringResult3;
        tmp20 = stringResult3;
      } else {
        tmp20 = cResult[11];
      }
      if (cResult[12] === tmp15) {
        let tmp23;
        if (cResult[13] === tmp10.description) {
          tmp23 = cResult[14];
        }
        if (cResult[15] === tmp10.ctaLink) {
          let tmp25;
          let tmp26;
          if (cResult[16] === tmp10.description) {
            tmp25 = cResult[17];
          }
          const _Symbol = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const intl7 = tmp(1126).intl;
            const stringResult4 = intl7.string(require("intl").t["JdIQ/Y"]);
            cResult[18] = stringResult4;
            tmp26 = stringResult4;
          } else {
            tmp26 = cResult[18];
          }
          if (cResult[19] === tmp11) {
            let tmp28;
            if (cResult[20] === tmp25) {
              tmp28 = cResult[21];
            }
            if (cResult[22] === tmp10.body) {
              if (cResult[23] === tmp28) {
                let tmp31;
                if (cResult[24] === tmp23) {
                  tmp31 = cResult[25];
                }
                if (cResult[26] === tmp4) {
                  if (cResult[27] === onConfirm) {
                    if (cResult[28] === tmp10.wrapper) {
                      if (cResult[29] === tmp31) {
                        if (cResult[30] === onClose) {
                          let tmp35;
                          if (cResult[31] === tmp12) {
                            tmp35 = cResult[32];
                          }
                          return tmp35;
                        }
                      }
                    }
                  }
                }
                const obj2 = {
                  title: tmp12,
                  style: wrapper,
                  cancelText: tmp18,
                  onCancel: onClose,
                  confirmText: tmp20,
                  onConfirm,
                  children: tmp31,
                };
                const tmp38 = AlertDefault;
                const merged = Object.assign(tmp4);
                const tmp42 = closure_7(tmp38, obj2);
                cResult[26] = tmp4;
                cResult[27] = onConfirm;
                cResult[28] = tmp10.wrapper;
                cResult[29] = tmp31;
                cResult[30] = onClose;
                cResult[31] = tmp12;
                cResult[32] = tmp42;
                tmp35 = tmp42;
              }
            }
            const obj3 = { style: tmp22, children: items };
            items = [tmp23, tmp28];
            const tmp34 = closure_8(View, obj3);
            cResult[22] = tmp10.body;
            cResult[23] = tmp28;
            cResult[24] = tmp23;
            cResult[25] = tmp34;
            tmp31 = tmp34;
          }
          const obj4 = {
            accessibilityRole: "link",
            style: tmp25,
            onPress: tmp11,
            variant: "text-sm/medium",
            children: tmp26,
          };
          const tmp30 = closure_7(require("Text/Text").Text, obj4);
          cResult[19] = tmp11;
          cResult[20] = tmp25;
          cResult[21] = tmp30;
          tmp28 = tmp30;
        }
        const items1 = [,];
        ({ ctaLink: arr[0], description: arr[1] } = tmp10);
        cResult[15] = tmp10.ctaLink;
        cResult[16] = tmp10.description;
        cResult[17] = items1;
        tmp25 = items1;
      }
      const obj5 = { style: tmp10.description, variant: "text-sm/medium", children: tmp15 };
      const tmp24 = closure_7(require("Text/Text").Text, obj5);
      cResult[12] = tmp15;
      cResult[13] = tmp10.description;
      cResult[14] = tmp24;
      tmp23 = tmp24;
    }
  : (arg0) => {
      let intl5;
      let intl6;
      let intl7;
      let items;
      let items1;
      let obj2;
      let onClose;
      let onConfirm;
      let stringResult;
      let stringResult1;
      let tmp6;
      let type;
      ({ type, onConfirm } = arg0);
      const merged = Object.assign(arg0, Object.assign({ type: 0, onConfirm: 0 }));
      const tmp2 = closure_9();
      if (type === constants.STREAM) {
        const intl2 = onConfirm(1126).intl;
        stringResult = intl2.string(onConfirm(1126).t["/lFMWr"]);
        tmp6 = onConfirm;
      } else {
        const intl = onConfirm(1126).intl;
        tmp6 = onConfirm;
        stringResult = intl.string(onConfirm(1126).t.xzxhZS);
      }
      if (type === constants.STREAM) {
        const intl4 = tmp6(1126).intl;
        stringResult1 = intl4.string(tmp6(1126).t.xaOX7d);
      } else {
        const intl3 = tmp6(1126).intl;
        stringResult1 = intl3.string(tmp6(1126).t.oU1p9O);
      }
      let obj = {
        title: stringResult,
        style: tmp2.wrapper,
        cancelText: intl5.string(tmp6(1126).t["ETE/oC"]),
        onCancel: onClose,
        confirmText: intl6.string(tmp6(1126).t["cY+Oob"]),
        onConfirm,
        children: closure_8(View, obj2),
      };
      const tmp12 = AlertDefault;
      const merged1 = Object.assign(merged);
      intl5 = tmp6(1126).intl;
      onClose = undefined;
      if (merged != null) {
        onClose = merged.onClose;
      }
      intl6 = tmp6(1126).intl;
      obj2 = { style: tmp2.body, children: items };
      items = [,];
      const obj3 = { style: tmp2.description, variant: "text-sm/medium", children: stringResult1 };
      items[0] = closure_7(tmp6(4892).Text, obj3);
      const obj4 = {
        accessibilityRole: "link",
        style: items1,
        onPress() {
          const obj = UserSettingsActionCreatorsDefault;
          const result = obj.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: true });
          onConfirm();
        },
        variant: "text-sm/medium",
        children: intl7.string(tmp6(1126).t["JdIQ/Y"]),
      };
      items1 = [,];
      ({ ctaLink: arr2[0], description: arr2[1] } = tmp2);
      const Text = tmp6(4892).Text;
      intl7 = tmp6(1126).intl;
      items[1] = closure_7(Text, obj4);
      return closure_7(tmp12, obj);
    };
let result = size.fileFinishedImporting(
  "modules/video_calls/native/components/HideSelfStreamAndVideoConfirmDialog.tsx",
);

export default tmp4;
