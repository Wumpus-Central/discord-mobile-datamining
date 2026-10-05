// discord_app/modules/user_settings/age_group/native/SettingsAgeGroupResetAlert.tsx
import _modDef3045 from "../../../age_assurance/AgeAssurance.messages.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

const require = globalThis.__r;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = "settings-age-group-reset";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupResetAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(10);
      const obj = require("c");
      const navigation = require("useNavigation").useNavigation();
      _require = navigation;
      if (cResult[0] !== navigation) {
        _require = asyncGeneratorStep(async () => {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c3 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  c2 = 1;
                  c1 = 2;
                  c3 = 1;
                  const obj6 = { value: tmp3(13575).resetAgeVerification(), done: false };
                  return obj6;
                }
              } else if (1 === tmp7) {
                c2 = 0;
                const intl = tmp3(1126).intl;
                tmp3(4567).presentError(intl.string(tmp3(1126).t.fEptJP));
                const _Error = Error;
                const error = new Error("Reset failed");
                throw error;
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c3 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                tmp3(5709).dismissAlert(closure_2_6);
                tmp3.goBack();
                c2 = 0;
                c3 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp29) {
              if (tmp4 === c2) {
                c3 = tmp2;
                throw tmp29;
              } else {
                c1 = tmp;
              }
            }
          }
        });
        function handleConfirm() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        }
        cResult[0] = navigation;
        cResult[1] = handleConfirm;
        let tmp5 = handleConfirm;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(_modDef3045["bD//cU"]);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(_modDef3045.FbTAmI);
        cResult[2] = stringResult;
        cResult[3] = stringResult1;
        let tmp8 = stringResult1;
        let tmp7 = stringResult;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(_modDef3045.V822Mp);
        cResult[4] = stringResult2;
        let tmp12 = stringResult2;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== tmp5) {
        const obj3 = { variant: "destructive", onPress: tmp5, text: tmp12 };
        const tmp17 = closure_4(tmp(5713).AlertActionButton, obj3, "confirm");
        cResult[5] = tmp5;
        cResult[6] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "secondary", text: null };
        const intl4 = tmp(1126).intl;
        obj4.text = intl4.string(tmp(1126).t["ETE/oC"]);
        const tmp20 = closure_4(tmp(5713).AlertActionButton, obj4, "cancel");
        cResult[7] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] !== tmp15) {
        let obj5 = { title: tmp7, content: tmp8, actions: null };
        let obj6 = { children: null };
        const items = [tmp15, tmp18];
        obj6.children = items;
        obj5.actions = closure_5(tmp(5713).AlertActions, obj6);
        const tmp24 = closure_4(tmp(5713).AlertModal, obj5);
        cResult[8] = tmp15;
        cResult[9] = tmp24;
        let tmp21 = tmp24;
      } else {
        tmp21 = cResult[9];
      }
      return tmp21;
    }
  : () => {
      importDefault = async function _handleConfirm2(dependencyMap) {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
          if (dependencyMap === 1) {
            throw value;
          } else if (dependencyMap === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === c1) {
              if (dependencyMap === 1) {
                c3 = 3;
                throw value;
              } else if (dependencyMap === 2) {
                c3 = 3;
                const obj5 = { value, done: true };
                return obj5;
              } else {
                dependencyMap = 1;
                c1 = 2;
                c3 = 1;
                const obj6 = { value: tmp3(13575).resetAgeVerification(), done: false };
                return obj6;
              }
            } else if (1 === tmp7) {
              dependencyMap = 0;
              const intl = tmp3(1126).intl;
              tmp3(4567).presentError(intl.string(tmp3(1126).t.fEptJP));
              const _Error = Error;
              const error = new Error("Reset failed");
              throw error;
            } else if (dependencyMap === 1) {
              c3 = 3;
              throw value;
            } else if (dependencyMap === 2) {
              dependencyMap = 0;
              c3 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              tmp3(5709).dismissAlert(closure_1_6);
              closure_128_0.goBack();
              dependencyMap = 0;
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp29) {
            if (tmp4 === dependencyMap) {
              c3 = tmp2;
              throw tmp29;
            } else {
              c1 = tmp;
            }
          }
        }
      };
      _require = require("useNavigation").useNavigation();
      let obj2 = { title: null, content: null, actions: null };
      let intl = require("util").intl;
      obj2.title = intl.string(_modDef3045["bD//cU"]);
      const intl2 = require("util").intl;
      obj2.content = intl2.string(_modDef3045.FbTAmI);
      const obj3 = { children: null };
      const obj4 = {
        variant: "destructive",
        onPress: function handleConfirm() {
          const self = this;
          const apply = closure_1.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
        text: null,
      };
      const intl3 = require("util").intl;
      obj4.text = intl3.string(_modDef3045.V822Mp);
      const items = [closure_4(require("AlertModal").AlertActionButton, obj4, "confirm")];
      let obj5 = { variant: "secondary", text: null };
      const intl4 = require("util").intl;
      obj5.text = intl4.string(require("util").t["ETE/oC"]);
      items[1] = closure_4(require("AlertModal").AlertActionButton, obj5, "cancel");
      obj3.children = items;
      obj2.actions = closure_5(require("AlertModal").AlertActions, obj3);
      return closure_4(require("AlertModal").AlertModal, obj2);
    };
export const SETTINGS_AGE_GROUP_RESET_ALERT_ID = "settings-age-group-reset";
