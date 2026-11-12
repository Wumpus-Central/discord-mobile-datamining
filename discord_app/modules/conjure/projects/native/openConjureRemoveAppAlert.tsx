// discord_app/modules/conjure/projects/native/openConjureRemoveAppAlert.tsx
import util from "../../../../intl/index.native.tsx";
import _modDef4079 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import AlertModal from "../../../../design/components/AlertModal/native/AlertModal.native.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import conjureRemoveApp from "../conjureRemoveApp.tsx";
import useConjureRemoveFromServer from "../useConjureRemoveFromServer.tsx";
import ConjureRemovedItemsDefault from "ConjureRemovedItems.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const useConjureRemoveFromServerDefault = useConjureRemoveFromServer;

require = fn;
function ConjureRemoveFromServerAlert(target) {
  target = target.target;
  _require = undefined;
  importDefault = async function _remove(dependencyMap) {
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
        if (0 === dependencyMap) {
          if (dependencyMap === 1) {
            c3 = 3;
            throw value;
          } else if (dependencyMap === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj4 = { value: _undefined(), done: false };
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
            const intl = tmp2(1113).intl;
            const error = new Error(intl.string(tmp5(4079).PJ2Fkn));
            throw error;
          } else {
            const obj6 = { text: closure_128_0, variant: "success" };
            tmp5(5952).open("CONJURE_APP_REMOVED", obj6);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } catch (tmp23) {
        c3 = tmp;
        throw tmp23;
      }
    }
  };
  const tmp3 = useConjureRemoveFromServerDefault(target);
  ({ optionalItems, notes, error, submit: c0 } = tmp3);
  const obj = { title: null, content: null, extraContent: null, actions: null };
  const tmp4 = closure_9();
  let obj2 = require("ConjureRemovedItems");
  const formatWithAppTagResult = require("ConjureRemovedItems").formatWithAppTag(_modDef4079.x6FvsZ, target.appName);
  obj.title = require("conjureRemoveApp").conjureTitleWithAppTag(
    closure_6(require("Text/Text").Text, {
      variant: "heading-lg/semibold",
      color: "none",
      style: tmp4.title,
      children: formatWithAppTagResult,
    }),
  );
  obj.content = tmp3.body;
  let tmp5Result = null;
  if (optionalItems.length > 0) {
    let obj5 = { items: [], optionalItems };
    tmp5Result = closure_6(tmp(13206), obj5);
  }
  items = [
    tmp5Result,
    notes.map((children) =>
      closure_1_6(
        _undefined(dependencyMap[12]).Text,
        { variant: "body-sm/normal", color: "text-muted", children },
        children,
      ),
    ),
  ];
  let tmp5Result2 = null;
  if (null != error) {
    let obj6 = { variant: "body-sm/medium", color: "text-feedback-critical", children: error };
    tmp5Result2 = closure_6(tmp6(5866).Text, obj6);
  }
  items[2] = tmp5Result2;
  obj.extraContent = closure_7(require("Stack/Stack").Stack, { spacing: 12, children: items });
  const obj7 = { children: null };
  const obj8 = { variant: "destructive", text: null, onPress: null };
  let intl = tmp6(1113).intl;
  obj8.text = intl.string(_modDef4079.BGF8VT);
  obj8.onPress = function remove() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const items1 = [closure_6(require("AlertModal").AlertActionButton, obj8)];
  const obj9 = { variant: "secondary", text: null };
  const intl2 = tmp6(1113).intl;
  obj9.text = intl2.string(require("util").t["ETE/oC"]);
  items1[1] = closure_6(require("AlertModal").AlertActionButton, obj9);
  obj7.children = items1;
  obj.actions = closure_7(closure_8, obj7);
  return closure_6(require("AlertModal").AlertModal, obj);
}
function ConjureDeleteProjectInServerAlert(arg0) {
  ({ project: require, target } = arg0);
  importDefault = undefined;
  dependencyMap = async function _submit() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            importDefault(null);
            const obj5 = tmp3(7265);
            dependencyMap = 1;
            c3 = 1;
            const obj4 = {
              value: tmp3(7265)
                .deleteProject(id.id)
                .catch(() => null),
              done: false,
            };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          let ok;
          if (closure_128_0 != null) {
            ok = closure_128_0.ok;
          }
          if (true !== ok) {
            const intl = tmp3(1113).intl;
            closure_128_1 = intl.string(tmp2(4079)["0XDHob"]);
            closure_129_1(closure_128_1);
            const _Error = Error;
            const error = new Error(closure_128_1);
            throw error;
          } else {
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } catch (tmp23) {
        c3 = tmp;
        throw tmp23;
      }
    }
  };
  const tmp = closure_9();
  [tmp3, c1] = noop.useState(null);
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  const result = conjureRemoveApp.conjureDeleteProjectItems(target);
  const result1 = conjureRemoveApp.conjureRemoveAppKeptChannels(target);
  let obj3 = { title: null, content: null, extraContent: null, actions: null };
  let intl = util.intl;
  let obj4 = { name: target.projectName };
  const formatToPlainStringResult = intl.formatToPlainString(_modDef4079.CJBhb2, { name: target.projectName });
  obj3.title = conjureRemoveApp.conjureTitleWithAppTag(
    closure_6(Text_Text.Text, {
      variant: "heading-lg/semibold",
      color: "none",
      style: tmp.title,
      children: formatToPlainStringResult,
    }),
  );
  const obj6 = { variant: "heading-lg/semibold", color: "none", style: tmp.title, children: formatToPlainStringResult };
  obj3.content = conjureRemoveApp.conjureDeleteProjectBody(target);
  items = [closure_6(ConjureRemovedItemsDefault, { items: result }), ,];
  let tmp8Result = null;
  if (null != result1) {
    const obj8 = { variant: "body-sm/normal", color: "text-muted", children: result1 };
    tmp8Result = closure_6(Text_Text.Text, obj8);
  }
  items[1] = tmp8Result;
  let tmp8Result2 = null;
  if (null != tmp3) {
    const obj9 = { variant: "body-sm/medium", color: "text-feedback-critical", children: tmp3 };
    tmp8Result2 = closure_6(Text_Text.Text, obj9);
  }
  items[2] = tmp8Result2;
  obj3.extraContent = closure_7(Stack_Stack.Stack, { spacing: 12, children: items });
  const obj10 = { children: null };
  const obj11 = { variant: "destructive", text: null, onPress: null };
  const intl2 = util.intl;
  obj11.text = intl2.string(_modDef4079.aC42bN);
  obj11.onPress = function submit() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const items1 = [closure_6(AlertModal.AlertActionButton, obj11)];
  const obj12 = { variant: "secondary", text: null };
  const intl3 = util.intl;
  obj12.text = intl3.string(util.t["ETE/oC"]);
  items1[1] = closure_6(AlertModal.AlertActionButton, obj12);
  obj10.children = items1;
  obj3.actions = closure_7(closure_8, obj10);
  return closure_6(AlertModal.AlertModal, obj3);
}
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5243);
let closure_9 = createStyles.createStyles({ title: { textAlign: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureRemoveAppAlert.tsx");

export default function openConjureRemoveAppAlert(action) {
  ({ project, target } = action);
  if ("delete" !== action.action) {
    const result = useConjureRemoveFromServer.conjureRemoveTargetFromProject(project, target);
    if (null != result) {
      const obj2 = { target: result };
      useAlertStore.openAlert("ConjureRemoveApp", timestampProducer(ConjureRemoveFromServerAlert, obj2));
      const tmp6Result = useAlertStore;
    }
  } else {
    const obj4 = { project, target };
    useAlertStore.openAlert("ConjureRemoveApp", timestampProducer(ConjureDeleteProjectInServerAlert, obj4));
  }
}
