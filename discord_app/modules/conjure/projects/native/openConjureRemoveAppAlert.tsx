// discord_app/modules/conjure/projects/native/openConjureRemoveAppAlert.tsx
import useAlertStore from "../../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function ConjureRemoveAppAlert(action) {
  ({ project: require, target } = action);
  c3 = undefined;
  _slicedToArray = undefined;
  noop = async function _submit() {
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            asyncGeneratorStep(null);
            let tmp37 = tmp3;
            let deleteProject = dependencyMap;
            if (_slicedToArray) {
              tmp37 = tmp37(10875);
              deleteProject = tmp37.deleteProject;
              let deleteProjectResult = deleteProject(user.id);
            } else {
              const obj5 = { alsoRemovePreviewBot };
              deleteProjectResult = tmp37(10941).unpublishProject(user.id, obj5);
              const tmp37Result = tmp37(10941);
            }
            deleteProjectResult.catch(() => null);
            dependencyMap = 1;
            c3 = 1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_0 = value;
          let ok;
          if (closure_128_0 != null) {
            ok = closure_128_0.ok;
          }
          if (true !== ok) {
            const intl = tmp3(1113).intl;
            const tmp23 = tmp2(3868);
            if (closure_129_4) {
              let PJ2Fkn = tmp23["0XDHob"];
            } else {
              PJ2Fkn = tmp23.PJ2Fkn;
            }
            closure_128_1 = intl.string(PJ2Fkn);
            closure_129_3(closure_128_1);
            const _Error = Error;
            const error = new Error(closure_128_1);
            throw error;
          } else {
            if (!closure_129_4) {
              const obj7 = { text: null, variant: "success" };
              const obj = tmp2(5712);
              obj7.text = tmp3(12548).conjureRemoveAppSuccess(closure_129_1);
              obj.open("CONJURE_APP_REMOVED", obj7);
              const obj3 = tmp3(12548);
            }
            c3 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        }
      } catch (tmp40) {
        c3 = tmp;
        throw tmp40;
      }
    }
  };
  const tmp = _slicedToArray(noop.useState(target.canRemovePreviewBot), 2);
  const checked = tmp[0];
  [tmp4, c3] = noop.useState(null);
  _slicedToArray = tmp5;
  let obj = require("conjureRemoveApp");
  if ("delete" === action.action) {
    let result = obj.conjureDeleteProjectItems(target);
    let tmp8 = tmp7;
    let tmp9 = require;
  } else {
    result = obj.conjureRemoveAppItems(target);
    tmp8 = tmp7;
    tmp9 = require;
  }
  let result1 = null;
  if ("delete" !== action.action) {
    result1 = tmp9(tmp8[5]).conjurePreviewAppItem(target);
    const tmp9Result = tmp9(tmp8[5]);
  }
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  const result2 = tmp9(tmp8[5]).conjureRemoveAppKeptChannels(target);
  const tmp9Result5 = tmp9(tmp8[5]);
  if ("delete" === action.action) {
    let intl = tmp9(tmp8[6]).intl;
    let obj2 = { name: target.projectName };
    let formatToPlainStringResult = intl.formatToPlainString(target(tmp8[7]).CJBhb2, obj2);
    let tmp15 = target;
  } else {
    formatToPlainStringResult = tmp9(tmp8[8]).formatWithAppTag(target(tmp8[7]).x6FvsZ, target.appName);
    tmp15 = target;
    const tmp9Result6 = tmp9(tmp8[8]);
  }
  let obj3 = { title: null, content: null, extraContent: null, actions: null };
  const tmp12 = closure_9();
  obj3.title = tmp9(tmp8[5]).conjureTitleWithAppTag(
    closure_6(tmp9(tmp8[13]).Text, {
      variant: "heading-lg/bold",
      color: "none",
      style: tmp12.title,
      children: formatToPlainStringResult,
    }),
  );
  if ("delete" === action.action) {
    let result3 = tmp9(tmp8[5]).conjureDeleteProjectBody(target);
    const tmp9Result8 = tmp9(tmp8[5]);
  } else {
    const intl2 = tmp9(tmp8[6]).intl;
    result3 = intl2.string(tmp15(tmp8[7])["8OKM1N"]);
  }
  obj3.content = result3;
  if (result.length > 0) {
    let obj5 = { items: result, optionalItem: null };
    let tmp22;
    if (null != result1) {
      let obj6 = { item: result1, checked, onChange: tmp[1], disabled: !target.canRemovePreviewBot };
      tmp22 = obj6;
    }
    obj5.optionalItem = tmp22;
    let tmp17Result = closure_6(tmp15(tmp8[8]), obj5);
    const tmp15Result = tmp15(tmp8[8]);
  } else {
    tmp17Result = null;
  }
  const items = [tmp17Result, ,];
  let tmp17Result3 = null;
  if (null != result2) {
    let obj7 = { variant: "text-sm/normal", color: "text-muted", children: result2 };
    tmp17Result3 = closure_6(tmp9(tmp8[13]).Text, obj7);
  }
  items[1] = tmp17Result3;
  let tmp17Result4 = null;
  if (null != tmp4) {
    const obj8 = { variant: "text-sm/medium", color: "text-feedback-critical", children: tmp4 };
    tmp17Result4 = closure_6(tmp9(tmp8[13]).Text, obj8);
  }
  items[2] = tmp17Result4;
  obj3.extraContent = closure_7(tmp9(tmp8[14]).Stack, { spacing: 12, children: items });
  const intl3 = tmp9(tmp8[6]).intl;
  const tmp15Result2 = tmp15(tmp8[7]);
  const obj9 = { children: null };
  let obj4 = { variant: "heading-lg/bold", color: "none", style: tmp12.title, children: formatToPlainStringResult };
  const tmp9Result7 = tmp9(tmp8[5]);
  const items1 = [
    closure_6(tmp9(tmp8[12]).AlertActionButton, {
      variant: "destructive",
      text: intl3.string("delete" === action.action ? tmp15Result2.aC42bN : tmp15Result2.BGF8VT),
      onPress: function submit() {
        const self = this;
        const apply = closure_5.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
    }),
  ];
  const obj11 = { variant: "secondary", text: null };
  const intl4 = tmp9(tmp8[6]).intl;
  obj11.text = intl4.string(tmp9(tmp8[6]).t["ETE/oC"]);
  items1[1] = closure_6(tmp9(tmp8[12]).AlertActionButton, obj11);
  obj9.children = items1;
  obj3.actions = closure_7(closure_8, obj9);
  return closure_6(tmp9(tmp8[12]).AlertModal, obj3);
}
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5014);
let closure_9 = createStyles.createStyles({ title: { textAlign: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/native/openConjureRemoveAppAlert.tsx");

export default function openConjureRemoveAppAlert(arg0) {
  const merged = Object.assign(arg0);
  useAlertStore.openAlert("ConjureRemoveApp", timestampProducer(ConjureRemoveAppAlert, {}));
}
