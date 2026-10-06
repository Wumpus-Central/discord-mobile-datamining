// discord_app/modules/user_settings/age_group/native/SettingsAgeGroupResetAlert.tsx
import _modDef3073 from "../../../age_assurance/AgeAssurance.messages.js";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c1, c3, navigation;

let closure_4;
let hasOwnProperty;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let c6 = "settings-age-group-reset";
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let intl4;
      let items;
      let obj6;
      let tmp12;
      let tmp15;
      let tmp18;
      let tmp21;
      let tmp5;
      let tmp7;
      let tmp8;
      const tmp = navigation;
      let obj = navigation(576);
      const cResult = obj.c(10);
      let obj2 = navigation(1490);
      navigation = obj2.useNavigation();
      if (cResult[0] !== navigation) {
        let closure_0 = _asyncToGenerator(async function () {
          let obj3;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c2;
            try {
              c3 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  navigation = tmp;
                  c2 = 1;
                  c1 = 2;
                  c3 = 1;
                  const obj5 = { value: obj3.resetAgeVerification(), done: false };
                  obj3 = navigation(dependencyMap[5]);
                  return obj5;
                }
              } else if (1 === tmp4) {
                c2 = 0;
                const presentError = navigation(dependencyMap[7]).presentError;
                const tmp15 = navigation(dependencyMap[7]);
                const intl = navigation(dependencyMap[8]).intl;
                presentError(intl.string(navigation(dependencyMap[8]).t.fEptJP));
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error("Reset failed");
                throw error;
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                const obj = navigation(dependencyMap[6]);
                obj.dismissAlert(closure_2_6);
                navigation.goBack();
                c2 = 0;
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp25) {
              if (0 === c2) {
                c3 = 3;
                throw tmp25;
              } else {
                c1 = 1;
              }
            }
          }
        });
        function handleConfirm() {
          return closure_0(...arguments);
        }
        cResult[0] = navigation;
        cResult[1] = handleConfirm;
        tmp5 = handleConfirm;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(_modDef3073["bD//cU"]);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(_modDef3073.FbTAmI);
        cResult[2] = stringResult;
        cResult[3] = stringResult1;
        tmp8 = stringResult1;
        tmp7 = stringResult;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(_modDef3073.V822Mp);
        cResult[4] = stringResult2;
        tmp12 = stringResult2;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== tmp5) {
        let obj3 = { variant: "destructive", onPress: tmp5, text: tmp12 };
        const tmp17 = closure_4(tmp(5720).AlertActionButton, obj3, "confirm");
        cResult[5] = tmp5;
        cResult[6] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        let obj4 = { variant: "secondary", text: intl4.string(tmp(1126).t["ETE/oC"]) };
        const AlertActionButton = tmp(5720).AlertActionButton;
        intl4 = tmp(1126).intl;
        const tmp20 = closure_4(AlertActionButton, obj4, "cancel");
        cResult[7] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] !== tmp15) {
        let obj5 = { title: tmp7, content: tmp8, actions: closure_5(tmp(5720).AlertActions, obj6) };
        const AlertModal = tmp(5720).AlertModal;
        obj6 = { children: items };
        items = [tmp15, tmp18];
        const tmp24 = closure_4(AlertModal, obj5);
        cResult[8] = tmp15;
        cResult[9] = tmp24;
        tmp21 = tmp24;
      } else {
        tmp21 = cResult[9];
      }
      return tmp21;
    }
  : () => {
      let AlertActions;
      let closure_0;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let obj3;
      let obj = function _handleConfirm2() {
        obj = _asyncToGenerator(async function () {
          let obj3;
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c2;
            try {
              c3 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  c2 = 1;
                  c1 = 2;
                  c3 = 1;
                  const obj5 = { value: obj3.resetAgeVerification(), done: false };
                  obj3 = tmp(c2[5]);
                  return obj5;
                }
              } else if (1 === tmp4) {
                c2 = 0;
                const presentError = tmp(c2[7]).presentError;
                const tmp15 = tmp(c2[7]);
                const intl = tmp(c2[8]).intl;
                presentError(intl.string(tmp(c2[8]).t.fEptJP));
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error("Reset failed");
                throw error;
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c3 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                obj = tmp(c2[6]);
                obj.dismissAlert(closure_1_6);
                closure_128_0.goBack();
                c2 = 0;
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp25) {
              if (0 === c2) {
                c3 = 3;
                throw tmp25;
              } else {
                c1 = 1;
              }
            }
          }
        });
        return obj(...arguments);
      };
      obj = require("useNavigation");
      _require = obj.useNavigation();
      let obj2 = {
        title: intl.string(obj(3073)["bD//cU"]),
        content: intl2.string(obj(3073).FbTAmI),
        actions: closure_5(AlertActions, obj3),
      };
      const AlertModal = require("AlertModal").AlertModal;
      intl = require("intl").intl;
      intl2 = require("intl").intl;
      obj3 = { children: items };
      AlertActions = require("AlertModal").AlertActions;
      let obj4 = {
        variant: "destructive",
        onPress: function handleConfirm() {
          return obj(...arguments);
        },
        text: intl3.string(obj(3073).V822Mp),
      };
      const AlertActionButton = require("AlertModal").AlertActionButton;
      intl3 = require("intl").intl;
      items = [closure_4(AlertActionButton, obj4, "confirm")];
      let obj5 = { variant: "secondary", text: intl4.string(require("intl").t["ETE/oC"]) };
      const AlertActionButton2 = require("AlertModal").AlertActionButton;
      intl4 = require("intl").intl;
      items[1] = closure_4(AlertActionButton2, obj5, "cancel");
      return closure_4(AlertModal, obj2);
    };
const result = size.fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupResetAlert.tsx");

export default tmp3;
export const SETTINGS_AGE_GROUP_RESET_ALERT_ID = "settings-age-group-reset";
