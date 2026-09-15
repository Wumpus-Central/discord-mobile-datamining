// discord_app/modules/user_settings/age_group/native/SettingsAgeGroupResetAlert.tsx
import _modDef2947 from "../../../age_assurance/AgeAssurance.messages.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

const require = globalThis.__r;

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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            dependencyMap = 1;
            c1 = 2;
            c3 = 1;
            const obj6 = { value: tmp3(13858).resetAgeVerification(), done: false };
            return obj6;
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          const intl = tmp3(1115).intl;
          tmp3(4337).presentError(intl.string(tmp3(1115).t.fEptJP));
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
          tmp3(4985).dismissAlert(closure_1_6);
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
  _require = require("useNavigation").useNavigation();
  let obj2 = { title: null, content: null, actions: null };
  let intl = require("util").intl;
  obj2.title = intl.string(_modDef2947["bD//cU"]);
  const intl2 = require("util").intl;
  obj2.content = intl2.string(_modDef2947.FbTAmI);
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
  obj4.text = intl3.string(_modDef2947.V822Mp);
  const items = [closure_4(require("AlertModal").AlertActionButton, obj4, "confirm")];
  let obj5 = { variant: "secondary", text: null };
  const intl4 = require("util").intl;
  obj5.text = intl4.string(require("util").t["ETE/oC"]);
  items[1] = closure_4(require("AlertModal").AlertActionButton, obj5, "cancel");
  obj3.children = items;
  obj2.actions = closure_5(require("AlertModal").AlertActions, obj3);
  return closure_4(require("AlertModal").AlertModal, obj2);
}
export const SETTINGS_AGE_GROUP_RESET_ALERT_ID = "settings-age-group-reset";
