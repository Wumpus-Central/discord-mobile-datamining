// === Module 18607: openConjureRemoveAppAlert ===

// Module 18607 (openConjureRemoveAppAlert)
import util from "util" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import Text_Text from "Text/Text" /* 5634 */;
import useAlertStore from "useAlertStore" /* 6048 */;
import AlertModal from "AlertModal" /* 6052 */;
import Stack_Stack from "Stack/Stack" /* 6115 */;
import ConjureRemovedItems from "ConjureRemovedItems" /* 12505 */;
import useConjureRemoveFromServer from "useConjureRemoveFromServer" /* 12507 */;
import conjureRemoveApp from "conjureRemoveApp" /* 12508 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const ConjureRemovedItemsDefault = ConjureRemovedItems;
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
        return { value: "HermesInternal", done: "+95" };
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
            const intl = tmp2(1112).intl;
            const error = new Error(intl.string(tmp5(4245).PJ2Fkn));
            throw error;
          } else {
            const obj6 = { text: closure_128_0, variant: "success" };
            tmp5(5725).open("CONJURE_APP_REMOVED", obj6);
            c3 = 3;
            return { value: "HermesInternal", done: "+95" };
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
  const formatWithAppTagResult = require("ConjureRemovedItems").formatWithAppTag(_modDef4245.x6FvsZ, target.appName);
  obj.title = require("conjureRemoveApp").conjureTitleWithAppTag(closure_6(require("Text/Text").Text, { variant: "heading-lg/semibold", color: "none", style: tmp4.title, children: formatWithAppTagResult }));
  obj.content = tmp3.body;
  let tmp5Result = null;
  if (optionalItems.length > 0) {
    let obj5 = { items: [], optionalItems };
    tmp5Result = closure_6(tmp(12505), obj5);
  }
  items = [tmp5Result, notes.map((children) => closure_1_6(_undefined(dependencyMap[12]).Text, { variant: "body-sm/normal", color: "text-muted", children }, children)), ];
  let tmp5Result2 = null;
  if (null != error) {
    let obj6 = { variant: "body-sm/medium", color: "text-feedback-critical", children: error };
    tmp5Result2 = closure_6(tmp6(5634).Text, obj6);
  }
  items[2] = tmp5Result2;
  obj.extraContent = closure_7(require("Stack/Stack").Stack, { spacing: 12, children: items });
  const obj7 = { children: null };
  const obj8 = { variant: "destructive", text: null, onPress: null };
  let intl = tmp6(1112).intl;
  obj8.text = intl.string(_modDef4245.BGF8VT);
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
  const items1 = [closure_6(require("AlertModal").AlertActionButton, obj8), ];
  const obj9 = { variant: "secondary", text: null };
  const intl2 = tmp6(1112).intl;
  obj9.text = intl2.string(require("util").t["ETE/oC"]);
  items1[1] = closure_6(require("AlertModal").AlertActionButton, obj9);
  obj7.children = items1;
  obj.actions = closure_7(closure_8, obj7);
  return closure_6(require("AlertModal").AlertModal, obj);
}
class ConjureRemoveBotAlert {
  constructor(arg0) {
    app = global.app;
    app = undefined;
    ({ applicationId, onPlainConfirm } = global);
    obj = app(closure_2[13]);
    conjureServerApp = obj.useConjureServerApp(app.guildId, applicationId);
    if (conjureServerApp == null) {
      conjureServerApp = app;
    }
    app = conjureServerApp;
    [][0] = conjureServerApp;
    tmp3 = jsx;
    if (app.targetIsPreview) {
      tmp6 = ConjureRemoveTestBotAlert;
      obj1 = { app: null, onPlainConfirm: null };
      obj1.app = conjureServerApp;
      obj1.onPlainConfirm = onPlainConfirm;
      tmp3Result = tmp3(ConjureRemoveTestBotAlert, obj1);
    } else {
      tmp4 = ConjureRemoveFromServerAlert;
      obj4 = { target: null };
      obj4.target = tmp2;
      tmp3Result = tmp3(ConjureRemoveFromServerAlert, obj4);
    }
    return tmp3Result;
  }
}
function ConjureRemoveTestBotAlert(arg0) {
  ({ app, onPlainConfirm: require } = arg0);
  importDefault = undefined;
  dependencyMap = async function _remove2() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+95" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp7;
            closure_128_0 = undefined;
            importDefault(null);
            dependencyMap = 1;
            c3 = 2;
            c4 = 1;
            const obj4 = { value: _require(), done: false };
            return obj4;
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          const intl = closure_0(1112).intl;
          closure_128_0 = intl.string(tmp3(4245).eVp6fL);
          closure_129_1(closure_128_0);
          const _Error = Error;
          const error = new Error(closure_128_0);
          throw error;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 0;
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          dependencyMap = 0;
          c4 = 3;
          return { value: "HermesInternal", done: "+95" };
        }
      } catch (tmp24) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp24;
        } else {
          c3 = tmp;
        }
      }
    }
  };
  const tmp = closure_9();
  [tmp3, c1] = noop.useState(null);
  let obj = { title: null, content: null, extraContent: null, actions: null };
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  const formatWithAppTagResult = ConjureRemovedItems.formatWithAppTag(_modDef4245.x6FvsZ, app.targetAppName);
  obj.title = conjureRemoveApp.conjureTitleWithAppTag(closure_6(Text_Text.Text, { variant: "heading-lg/semibold", color: "none", style: tmp.title, children: formatWithAppTagResult }));
  let intl = util.intl;
  obj.content = intl.formatToPlainString(_modDef4245.f22PGK, { server: app.guildName });
  let tmp4Result;
  if (null != tmp3) {
    const obj6 = { variant: "body-sm/medium", color: "text-feedback-critical", children: tmp3 };
    tmp4Result = closure_6(Text_Text.Text, obj6);
  }
  obj.extraContent = tmp4Result;
  const obj7 = { children: null };
  const obj8 = { variant: "destructive", text: null, onPress: null };
  const intl2 = util.intl;
  obj8.text = intl2.string(_modDef4245.BGF8VT);
  obj8.onPress = function remove() {
    const self = this;
    const apply = closure_2.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  items = [closure_6(AlertModal.AlertActionButton, obj8), ];
  const obj9 = { variant: "secondary", text: null };
  const intl3 = util.intl;
  obj9.text = intl3.string(util.t["ETE/oC"]);
  items[1] = closure_6(AlertModal.AlertActionButton, obj9);
  obj7.children = items;
  obj.actions = closure_7(closure_8, obj7);
  return closure_6(AlertModal.AlertModal, obj);
}
function ConjureDeleteProjectInServerAlert(arg0) {
  ({ project: require, target, otherTargets } = arg0);
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
        return { value: "HermesInternal", done: "+95" };
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
            const obj5 = tmp3(7667);
            dependencyMap = 1;
            c3 = 1;
            const obj4 = { value: tmp3(7667).deleteProject(id.id).catch(() => null), done: false };
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
            const intl = tmp3(1112).intl;
            closure_128_1 = intl.string(tmp2(4245)["0XDHob"]);
            closure_129_1(closure_128_1);
            const _Error = Error;
            const error = new Error(closure_128_1);
            throw error;
          } else {
            c3 = 3;
            return { value: "HermesInternal", done: "+95" };
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
  const result = conjureRemoveApp.conjureDeleteProjectItems(target, otherTargets);
  const result1 = conjureRemoveApp.conjureRemoveAppKeptChannels(target);
  let obj3 = { title: null, content: null, extraContent: null, actions: null };
  let intl = util.intl;
  let obj4 = { name: target.projectName };
  const formatToPlainStringResult = intl.formatToPlainString(_modDef4245.CJBhb2, { name: target.projectName });
  obj3.title = conjureRemoveApp.conjureTitleWithAppTag(closure_6(Text_Text.Text, { variant: "heading-lg/semibold", color: "none", style: tmp.title, children: formatToPlainStringResult }));
  const obj6 = { variant: "heading-lg/semibold", color: "none", style: tmp.title, children: formatToPlainStringResult };
  obj3.content = conjureRemoveApp.conjureDeleteProjectBody(target, otherTargets);
  items = [closure_6(ConjureRemovedItemsDefault, { items: result }), , ];
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
  obj11.text = intl2.string(_modDef4245.aC42bN);
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
  const items1 = [closure_6(AlertModal.AlertActionButton, obj11), ];
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
const createStyles = fn(5043);
let closure_9 = createStyles.createStyles({ title: { textAlign: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureRemoveAppAlert.tsx");

export default function openConjureRemoveAppAlert(action) {
  ({ project, target } = action);
  if ("delete" !== action.action) {
    const obj2 = { target: null };
    const obj4 = useAlertStore;
    obj2.target = useConjureRemoveFromServer.conjureRemoveTargetFromProject(project, target);
    obj4.openAlert("ConjureRemoveApp", timestampProducer(ConjureRemoveFromServerAlert, obj2));
  } else {
    const obj5 = { project, target, otherTargets: null };
    const obj = useAlertStore;
    obj5.otherTargets = conjureRemoveApp.readConjureOtherRemoveTargets(project);
    obj.openAlert("ConjureRemoveApp", timestampProducer(ConjureDeleteProjectInServerAlert, obj5));
  }
};
export { ConjureRemoveBotAlert };
export function openConjureRemoveBotAlert(arg0) {
  const merged = Object.assign(arg0);
  useAlertStore.openAlert("ConjureRemoveApp", timestampProducer(ConjureRemoveBotAlert, {}));
}