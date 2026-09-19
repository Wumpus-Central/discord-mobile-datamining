// === Module 13420: AddFriendNicknameModal ===

// Module 13420 (AddFriendNicknameModal)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import TextField from "TextField" /* 6850 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" }, title: { textAlign: "center" }, description: { marginTop: 8, marginBottom: 16, textAlign: "center", lineHeight: 18 } };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/AddFriendNicknameModal.tsx");

export default function AddFriendNicknameModal(arg0) {
  ({ userId: require, showUserProfile } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  noop = undefined;
  let callback1;
  closure_7 = async function _handleSubmit() {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            showUserProfile = tmp7;
            closure_129_0 = undefined;
            if (dependencyMap) {
              c6 = 3;
            } else {
              const current = ref.current;
              let _var = current;
              if (current == null) {
                _var = "";
              }
              closure_129_0 = _var;
              asyncGeneratorStep(true);
              c4 = 1;
              c5 = 2;
              c6 = 1;
              const obj5 = { value: showUserProfile(tmp3[13]).updateRelationship(require, _var), done: false };
              return obj5;
            }
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_130_3(false);
          throw closure_3;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_130_3(false);
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            let tmp30 = closure_130_4;
            if (0 === closure_129_0.length) {
              const intl2 = _var(tmp3[11]).intl;
              let stringResult = intl2.string(_var(tmp3[11]).t.O1Uqo3);
            } else {
              const intl = _var(tmp3[11]).intl;
              const obj7 = { nickname: closure_129_0 };
              stringResult = intl.formatToPlainString(_var(tmp3[11]).t.l4ZOaw, obj7);
            }
            tmp30 = tmp30(stringResult);
            c5 = 3;
            c6 = 1;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_6();
          c4 = 0;
          closure_130_3(false);
        }
        c4 = 0;
        closure_130_3(false);
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp46) {
        closure_3 = tmp46;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp46;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  const tmp = closure_11();
  [c2, c3] = noop.useState(false);
  _slicedToArray = showUserProfile(11190)();
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  const items = [closure_7];
  const stateFromStores = initialize.useStateFromStores(items, () => RelationshipStore.getNickname(require));
  let tmp7 = stateFromStores;
  if (stateFromStores == null) {
    tmp7 = null;
  }
  noop = noop.useRef(tmp7);
  const callback = obj.useCallback((current) => {
    closure_5.current = current;
  }, []);
  const items1 = [UserStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => UserStore.getUser(require));
  if (null == stateFromStores) {
    let intl2 = util.intl;
    let stringResult = intl2.string(util.t.BGYkaH);
  } else {
    let intl = util.intl;
    stringResult = intl.string(util.t["8pOYUE"]);
  }
  const items2 = [showUserProfile];
  callback1 = obj.useCallback(() => {
    ModalActionCreatorsDefault.pop();
    if (showUserProfile != null) {
      showUserProfile();
    }
  }, items2);
  let obj3 = { style: tmp.container, children: null };
  const obj4 = { children: null };
  const tmp5Result = initialize;
  let obj5 = { confirmText: null, onConfirm: null, cancelText: null, onCancel: null, children: null };
  const tmp3Result = showUserProfile(5790);
  const intl3 = util.intl;
  obj5.confirmText = intl3.string(util.t["R3BPH+"]);
  obj5.onConfirm = function handleSubmit() {
    const self = this;
    const apply = closure_7.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const intl4 = util.intl;
  obj5.cancelText = intl4.string(util.t["ETE/oC"]);
  obj5.onCancel = callback1;
  const items3 = [closure_9(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: stringResult }), , ];
  let obj7 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl5 = util.intl;
  obj7.children = intl5.string(util.t["NdQ+lP"]);
  items3[1] = closure_9(Text_Text.Text, obj7);
  const obj8 = { onChange: callback, autoFocus: true, accessibilityLabel: null, placeholder: null, defaultValue: null, maxLength: 32, clearable: true };
  const intl6 = util.intl;
  obj8.accessibilityLabel = intl6.string(util.t.pqG6GS);
  let obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  const tmp3Result3 = showUserProfile(5205);
  obj8.placeholder = showUserProfile(4600).getName(stateFromStores1);
  obj8.defaultValue = stateFromStores;
  items3[2] = closure_9(TextField.TextField, obj8);
  obj5.children = items3;
  obj4.children = closure_10(tmp3Result3, obj5);
  obj3.children = closure_9(tmp3Result, obj4);
  return closure_9(callback1, obj3);
};