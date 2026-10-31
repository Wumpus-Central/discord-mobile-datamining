// === Module 12561: openConjureUnpublishUserAppAlert ===

// Module 12561 (openConjureUnpublishUserAppAlert)
import useAlertStore from "useAlertStore" /* 5960 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;

require = fn;
function ConjureUnpublishUserAppAlert(project) {
  project = project.project;
  importDefault = undefined;
  let stateFromStores;
  closure_3 = async function _submit() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
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
            importDefault(null);
            dependencyMap = 1;
            c3 = 1;
            const obj4 = { value: tmp2(10941).unpublishUserApp(id.id), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else if (value) {
          const obj7 = { text: null, variant: "success" };
          const intl2 = tmp2(1113).intl;
          const obj8 = { app: closure_129_2 };
          obj7.text = intl2.formatToPlainString(tmp5(3868).b8LN7N, obj8);
          tmp5(5712).open("CONJURE_USER_APP_UNPUBLISHED", obj7);
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } else {
          const intl = tmp2(1113).intl;
          closure_128_0 = intl.string(tmp5(3868)["rE/0SD"]);
          closure_129_1(closure_128_0);
          const _Error = Error;
          const error = new Error(closure_128_0);
          throw error;
        }
      } catch (tmp36) {
        c3 = tmp;
        throw tmp36;
      }
    }
  };
  [tmp2, c1] = noop.useState(null);
  const tmp = _slicedToArray(noop.useState(null), 2);
  const items = [ApplicationStore];
  const items1 = [, ];
  ({ application_id: arr2[0], name: arr2[1] } = project);
  stateFromStores = project(stateFromStores[5]).useStateFromStores(items, () => {
    const application = ApplicationStore.getApplication(project.application_id);
    let name;
    if (application != null) {
      name = application.name;
    }
    if (name == null) {
      name = project.name;
    }
    return name;
  }, items1);
  let obj2 = { title: null, content: null, extraContent: null, actions: null };
  let intl = project(stateFromStores[7]).intl;
  obj2.title = intl.formatToPlainString(require("module_3868").m8KWic, { app: stateFromStores });
  let intl2 = project(stateFromStores[7]).intl;
  obj2.content = intl2.string(require("module_3868").wve4kB);
  let tmp6Result;
  if (null != tmp2) {
    let obj3 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp2 };
    tmp6Result = closure_7(tmp3(tmp4[11]).Text, obj3);
  }
  obj2.extraContent = tmp6Result;
  let obj4 = { children: null };
  const obj5 = { variant: "destructive", text: null, onPress: null };
  const intl3 = tmp3(tmp4[7]).intl;
  obj5.text = intl3.string(require("module_3868").GqcQyH);
  obj5.onPress = function submit() {
    const self = this;
    const apply = closure_3.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const items2 = [closure_7(project(stateFromStores[10]).AlertActionButton, obj5), ];
  let obj6 = { variant: "secondary", text: null };
  const intl4 = tmp3(tmp4[7]).intl;
  obj6.text = intl4.string(project(stateFromStores[7]).t["ETE/oC"]);
  items2[1] = closure_7(project(stateFromStores[10]).AlertActionButton, obj6);
  obj4.children = items2;
  obj2.actions = closure_9(closure_8, obj4);
  return closure_7(project(stateFromStores[10]).AlertModal, obj2);
}
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureUnpublishUserAppAlert.tsx");

export default function openConjureUnpublishUserAppAlert(project) {
  useAlertStore.openAlert("ConjureUnpublishUserApp", React5(ConjureUnpublishUserAppAlert, { project }));
};