import presentAddedFriendToast from "presentAddedFriendToast";
import jsxProd from "jsxProd";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let c6 = "settings-age-group-reset";
const result = require("useNavigation").fileFinishedImporting("modules/user_settings/age_group/native/SettingsAgeGroupResetAlert.tsx");

export default function SettingsAgeGroupResetAlert() {
  function _handleConfirm(arg0) {
    const self = this;
    const tmp = outer1_3(function*() {
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
              let dependencyMap = 1;
              c1 = 2;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_0(12937).resetAgeVerification();
              return obj1;
            }
          } else if (1 === tmp7) {
            dependencyMap = 0;
            let obj2 = outer1_0(3985);
            const intl = outer1_0(1236).intl;
            obj2.presentError(intl.string(outer1_0(1236).t.fEptJP));
            const _Error = Error;
            const error = new Error("Reset failed");
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
            obj = outer1_0(4625);
            obj.dismissAlert(outer1_6);
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
    const _handleConfirm = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let obj = _require(1480);
  _require = obj.useNavigation();
  obj = { title: null, content: null, actions: null };
  let intl = _require(1236).intl;
  obj[0] = intl.string(_handleConfirm(2803)["bD//cU"]);
  const intl2 = _require(1236).intl;
  obj[1] = intl2.string(_handleConfirm(2803).FbTAmI);
  obj = { children: null };
  let obj1 = {
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
  const intl3 = _require(1236).intl;
  obj1[2] = intl3.string(_handleConfirm(2803).V822Mp);
  const items = [callback(_require(4628).AlertActionButton, obj1, "confirm"), ];
  let obj2 = { variant: "secondary", text: null };
  const intl4 = _require(1236).intl;
  obj2[1] = intl4.string(_require(1236).t["ETE/oC"]);
  items[1] = callback(_require(4628).AlertActionButton, obj2, "cancel");
  obj[0] = items;
  obj[2] = callback2(_require(4628).AlertActions, obj);
  return callback(_require(4628).AlertModal, obj);
};
export const SETTINGS_AGE_GROUP_RESET_ALERT_ID = "settings-age-group-reset";