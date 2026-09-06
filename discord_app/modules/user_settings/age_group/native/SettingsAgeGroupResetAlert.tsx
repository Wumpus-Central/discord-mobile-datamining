// === Module 14761: SettingsAgeGroupResetAlert ===

// Module 14761 (SettingsAgeGroupResetAlert)
import _modDef2946 from "module_2946" /* 2946 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let c6 = "settings-age-group-reset";
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupResetAlert.tsx");

export default function SettingsAgeGroupResetAlert() {
  importDefault = async function _handleConfirm(dependencyMap) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (dependencyMap === 1) {
        throw value;
      } else if (dependencyMap === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            dependencyMap = 1;
            c1 = 2;
            c3 = 1;
            const obj1 = { value: tmp3(13764).resetAgeVerification(), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          let obj2 = tmp3(4258);
          const intl = tmp3(1114).intl;
          obj2.presentError(intl.string(tmp3(1114).t.fEptJP));
          const _Error = Error;
          const error = new Error("Reset failed");
          throw error;
        } else if (dependencyMap === 1) {
          c3 = 3;
          throw value;
        } else if (dependencyMap === 2) {
          dependencyMap = 0;
          c3 = 3;
          obj2 = { value, done: true };
          return obj2;
        } else {
          obj = tmp3(4906);
          obj.dismissAlert(closure_1_6);
          closure_128_0.goBack();
          dependencyMap = 0;
          c3 = 3;
          return { value: "HermesInternal", done: null };
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
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  obj = { title: null, content: null, actions: null };
  let intl = require("util").intl;
  obj.title = intl.string(_modDef2946["bD//cU"]);
  const intl2 = require("util").intl;
  obj.content = intl2.string(_modDef2946.FbTAmI);
  obj = { children: null };
  let obj1 = {
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
    text: null
  };
  const intl3 = require("util").intl;
  obj1.text = intl3.string(_modDef2946.V822Mp);
  const items = [closure_4(require("AlertModal").AlertActionButton, obj1, "confirm"), ];
  let obj2 = { variant: "secondary", text: null };
  const intl4 = require("util").intl;
  obj2.text = intl4.string(require("util").t["ETE/oC"]);
  items[1] = closure_4(require("AlertModal").AlertActionButton, obj2, "cancel");
  obj.children = items;
  obj.actions = closure_5(require("AlertModal").AlertActions, obj);
  return closure_4(require("AlertModal").AlertModal, obj);
};
export const SETTINGS_AGE_GROUP_RESET_ALERT_ID = "settings-age-group-reset";