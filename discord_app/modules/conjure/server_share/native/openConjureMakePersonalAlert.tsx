// === Module 13211: openConjureMakePersonalAlert ===

// Module 13211 (openConjureMakePersonalAlert)
import _modDef4079 from "module_4079" /* 4079 */;
import useAlertStore from "useAlertStore" /* 6207 */;
import useConjureMakePersonalDefault from "useConjureMakePersonal" /* 13209 */;
import ConjureChangeListDefault from "ConjureChangeList" /* 13212 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function ConjureMakePersonalAlert(project) {
  importDefault = async function _submit(dependencyMap) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        if (0 === c2) {
          if (dependencyMap === 1) {
            c3 = 3;
            throw value;
          } else if (dependencyMap === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: _require.submit(), done: false };
            return obj4;
          }
        } else if (dependencyMap === 1) {
          c3 = 3;
          throw value;
        } else if (dependencyMap === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_128_0 = value;
          if (null == closure_128_0) {
            const _Error = Error;
            const error = new Error("make personal failed");
            throw error;
          } else {
            const obj6 = { text: closure_128_0, variant: "success" };
            tmp5(c2[4]).open("CONJURE_MADE_PERSONAL", obj6);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } catch (tmp18) {
        c3 = tmp;
        throw tmp18;
      }
    }
  };
  const tmp3 = useConjureMakePersonalDefault(project.project);
  _require = tmp3;
  ({ keptChannels, error } = tmp3);
  ({ appName, rows } = tmp3);
  const obj = { title: null, extraContent: null, actions: null };
  const intl = require("util").intl;
  obj.title = intl.formatToPlainString(_modDef4079.cAxBIL, { app: appName });
  items = [closure_4(ConjureChangeListDefault, { rows }), , ];
  let tmp4Result = null;
  if (null != keptChannels) {
    let obj2 = { variant: "body-sm/normal", color: "text-muted", children: keptChannels };
    tmp4Result = closure_4(tmp5(5866).Text, obj2);
  }
  items[1] = tmp4Result;
  let tmp4Result2 = null;
  if (null != error) {
    let obj3 = { variant: "body-sm/medium", color: "text-feedback-critical", accessibilityRole: "alert", children: error };
    tmp4Result2 = closure_4(tmp5(5866).Text, obj3);
  }
  items[2] = tmp4Result2;
  obj.extraContent = closure_5(require("Stack/Stack").Stack, { spacing: 12, children: items });
  let obj4 = { children: null };
  let obj5 = { variant: "destructive", text: null, onPress: null };
  const intl2 = tmp5(1113).intl;
  obj5.text = intl2.string(_modDef4079.VAb6aE);
  obj5.onPress = function submit() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const items1 = [closure_4(require("AlertModal").AlertActionButton, obj5), ];
  let obj6 = { variant: "secondary", text: null };
  const intl3 = tmp5(1113).intl;
  obj6.text = intl3.string(require("util").t["ETE/oC"]);
  items1[1] = closure_4(require("AlertModal").AlertActionButton, obj6);
  obj4.children = items1;
  obj.actions = closure_5(closure_6, obj4);
  return closure_4(require("AlertModal").AlertModal, obj);
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: closure_6 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_share/native/openConjureMakePersonalAlert.tsx");

export default function openConjureMakePersonalAlert(arg0) {
  const merged = Object.assign(arg0);
  useAlertStore.openAlert("ConjureMakePersonal", React4(ConjureMakePersonalAlert, {}));
};