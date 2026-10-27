// === Module 11075: maybeShowUnsavedChangesAlert ===

// Module 11075 (maybeShowUnsavedChangesAlert)
import util from "util" /* 1125 */;
import AlertModal from "AlertModal" /* 5915 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function UnsavedChangesSavePromptAlert(arg0) {
  ({ onReset: require, onContinue: importDefault, onSave: dependencyMap } = arg0);
  c3 = undefined;
  _slicedToArray = async function _saveAndContinue(noop) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (noop === 1) {
        throw value;
      } else if (noop === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (noop === 1) {
            c5 = 3;
            throw value;
          } else if (noop === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp3;
            closure_0 = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            asyncGeneratorStep(true);
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj4 = { value: dependencyMap(), done: false };
            return obj4;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_129_3(false);
          throw tmp27;
        } else if (noop === 1) {
          c5 = 3;
          throw value;
        } else if (noop === 2) {
          c3 = 0;
          closure_129_3(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          const useAlertStore = closure_0(tmp27[4]).useAlertStore;
          const alerts = useAlertStore.getState().alerts;
          closure_128_1 = alerts.some((key) => key.key === closure_1_9);
          let tmp9 = false !== closure_128_0;
          if (tmp9) {
            tmp9 = closure_128_1;
          }
          if (tmp9) {
            closure_129_1();
          }
          c3 = 0;
          closure_129_3(false);
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp27) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp27;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  [tmp2, c3] = noop.useState(false);
  let obj = { title: null, content: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["0Y/qkL"]);
  const intl2 = util.intl;
  obj.content = intl2.string(util.t["/lQiX/"]);
  let obj2 = { children: null };
  let obj3 = { text: null, onPress: null, variant: "primary", loading: null, disabled: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["R3BPH+"]);
  obj3.onPress = function saveAndContinue() {
    const self = this;
    const apply = closure_4.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj3.loading = tmp2;
  obj3.disabled = tmp2;
  const items = [closure_6(AlertModal.AlertActionButton, obj3), ];
  let obj4 = { text: null, onPress: null, variant: "secondary", disabled: null };
  const intl4 = util.intl;
  obj4.text = intl4.string(util.t["6GQDFu"]);
  obj4.onPress = function onPress() {
    require();
    importDefault();
  };
  obj4.disabled = tmp2;
  items[1] = closure_6(AlertModal.AlertActionButton, obj4);
  obj2.children = items;
  obj.actions = closure_8(closure_7, obj2);
  return closure_6(AlertModal.AlertModal, obj);
}
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = "unsaved-changes-save-prompt";
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/maybeShowUnsavedChangesAlert.tsx");

export default function maybeShowUnsavedChangesAlert(onReset) {
  onReset = onReset.onReset;
  const onContinue = onReset.onContinue;
  if (onReset.hasUnsavedChanges) {
    onReset(5160).dismissKeyboard();
    const obj = onReset(5160);
    if (obj2.getIsUserProfileMobileSavePromptEnabled(tmp)) {
      tmp7(5211).hideActionSheet();
      const tmp7Result = tmp7(5211);
      tmp7(5910).close();
      const tmp4Result = tmp4(5911);
      const obj3 = { onReset, onContinue, onSave: tmp2 };
      tmp4Result.openAlert(c9, closure_6(UnsavedChangesSavePromptAlert, obj3), undefined, { dismissable: true });
      const tmp7Result3 = tmp7(5910);
    } else {
      const obj4 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, isDismissable: false };
      const intl = tmp4(1125).intl;
      obj4.title = intl.string(tmp4(1125).t.pvRCSu);
      const intl2 = tmp4(1125).intl;
      obj4.body = intl2.string(tmp4(1125).t.DRi46S);
      const intl3 = tmp4(1125).intl;
      obj4.confirmText = intl3.string(tmp4(1125).t["6GQDFu"]);
      const intl4 = tmp4(1125).intl;
      obj4.cancelText = intl4.string(tmp4(1125).t.DmDzZB);
      obj4.onConfirm = function onConfirm() {
        onReset();
        onContinue();
      };
      obj4.onCancel = function onCancel() {
        onContinue(dependencyMap[10]).close();
      };
      tmp7(5910).show(obj4);
      const tmp7Result4 = tmp7(5910);
    }
    obj2 = onReset(11076);
  } else {
    onContinue();
  }
};