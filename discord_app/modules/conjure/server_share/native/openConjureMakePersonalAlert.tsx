// discord_app/modules/conjure/server_share/native/openConjureMakePersonalAlert.tsx
import _modDef4089 from "../../intl/ConjureUntranslated.messages.js";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import ConjureChangeListDefault from "ConjureChangeList.tsx";
import useConjureMakePersonalDefault from "../useConjureMakePersonal.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

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
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "+60" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (dependencyMap === 1) {
            c3 = 3;
            throw value;
          } else if (dependencyMap === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: _require.submit(), done: false };
            return obj5;
          }
        } else if (dependencyMap === 1) {
          c3 = 3;
          throw value;
        } else if (dependencyMap === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_0 = value;
          if (null == closure_128_0) {
            const _Error = Error;
            const error = new Error("make personal failed");
            throw error;
          } else {
            tmp5(5006).hideAllActionSheets();
            const obj = tmp5(5006);
            const obj7 = { text: closure_128_0, variant: "success" };
            tmp5(5474).open("CONJURE_MADE_PERSONAL", obj7);
            c3 = 3;
            return { value: "HermesInternal", done: "+60" };
          }
        }
      } catch (tmp19) {
        c3 = tmp;
        throw tmp19;
      }
    }
  };
  const tmp3 = useConjureMakePersonalDefault(project.project);
  _require = tmp3;
  ({ keptChannels, error } = tmp3);
  ({ appName, rows } = tmp3);
  let obj = { title: null, extraContent: null, actions: null };
  const intl = require("util").intl;
  obj.title = intl.formatToPlainString(_modDef4089.cAxBIL, { app: appName });
  items = [closure_4(ConjureChangeListDefault, { rows }), ,];
  let tmp4Result = null;
  if (null != keptChannels) {
    const obj2 = { variant: "body-sm/normal", color: "text-muted", children: keptChannels };
    tmp4Result = closure_4(tmp5(5383).Text, obj2);
  }
  items[1] = tmp4Result;
  let tmp4Result2 = null;
  if (null != error) {
    let obj3 = {
      variant: "body-sm/medium",
      color: "text-feedback-critical",
      accessibilityRole: "alert",
      children: error,
    };
    tmp4Result2 = closure_4(tmp5(5383).Text, obj3);
  }
  items[2] = tmp4Result2;
  obj.extraContent = closure_5(require("Stack/Stack").Stack, { spacing: 12, children: items });
  let obj4 = { children: null };
  let obj5 = { variant: "destructive", text: null, onPress: null };
  const intl2 = tmp5(1113).intl;
  obj5.text = intl2.string(_modDef4089.j1NMdG);
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
  const items1 = [closure_4(require("AlertModal").AlertActionButton, obj5)];
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
}
