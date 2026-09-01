// discord_app/modules/user_settings/age_group/native/SettingsAgeGroupResetAlert.tsx
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";

const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let c6 = "settings-age-group-reset";
const result = require("set").fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupResetAlert.tsx");

export default function SettingsAgeGroupResetAlert() {
  function _handleConfirm(arg0) {
    const self = this;
    const tmp = closure_1_3(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const navigation = tmp3;
              dependencyMap = 1;
              c1 = 2;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_0(13418).resetAgeVerification();
              return obj1;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            let obj2 = closure_1_0(4193);
            const intl = closure_1_0(1236).intl;
            obj2.presentError(intl.string(closure_1_0(1236).t.fEptJP));
            const _Error = Error;
            error = new Error("Reset failed");
            throw error;
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c3 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            obj = closure_1_0(4859);
            obj.dismissAlert(closure_1_6);
            navigation.goBack();
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
    });
    closure_1 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj = useNavigation;
  _require = obj.useNavigation();
  obj = { title: null, content: null, actions: null };
  let intl = require("../../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(_handleConfirm(2919)["bD//cU"]);
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj[1] = intl2.string(_handleConfirm(2919).FbTAmI);
  obj = { children: null };
  obj1 = {
    variant: "destructive",
    onPress: function handleConfirm() {
      const self = this;
      const apply = _handleConfirm.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    text: null
  };
  const intl3 = require("../../../../intl/index.native.tsx").intl;
  obj1[2] = intl3.string(_handleConfirm(2919).V822Mp);
  const items = [callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx").AlertActionButton, obj1, "confirm"), ];
  let obj2 = { variant: "secondary", text: null };
  const intl4 = require("../../../../intl/index.native.tsx").intl;
  obj2[1] = intl4.string(require("../../../../intl/index.native.tsx").t["ETE/oC"]);
  items[1] = callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx").AlertActionButton, obj2, "cancel");
  obj[0] = items;
  obj[2] = callback2(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx").AlertActions, obj);
  return callback(require("../../../../design/components/AlertModal/native/AlertModal.native.tsx").AlertModal, obj);
};
export const SETTINGS_AGE_GROUP_RESET_ALERT_ID = "settings-age-group-reset";