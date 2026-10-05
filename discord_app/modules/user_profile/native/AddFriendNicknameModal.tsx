// discord_app/modules/user_profile/native/AddFriendNicknameModal.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl7 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import TextField2 from "../../../design/components/TextField/native/TextField.native.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c5, c6, closure_3, dependencyMap;

let c10;
let c9;
let obj2;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: c9, jsxs: c10 } = Fragment);
let obj = {
  container: obj2,
  title: { textAlign: "center" },
  description: { marginTop: 8, marginBottom: 16, textAlign: "center", lineHeight: 18 },
};
obj2 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM,
  justifyContent: "center",
  alignItems: "center",
};
let closure_11 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/AddFriendNicknameModal.tsx");

export default function AddFriendNicknameModal(arg0) {
  let _undefined;
  let c2;
  let c3;
  let closure_4;
  let closure_5;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items3;
  let obj4;
  let obj5;
  let showUserProfile;
  let stringResult;
  let tmp3Result;
  let tmp3Result3;
  let tmp3Result4;
  ({ userId: require, showUserProfile } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let callback1;
  let obj = function _handleSubmit() {
    let ref;
    obj = _asyncToGenerator(async () => {
      let obj5;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let closure_2;
          let nickname;
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
              closure_2 = tmp;
              let closure_1 = tmp4;
              nickname = undefined;
              if (!closure_2_2) {
                const current = ref.current;
                nickname = current;
                if (current == null) {
                  nickname = "";
                }
                _undefined(true);
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj4 = { value: obj5.updateRelationship(require, nickname), done: false };
                obj5 = closure_1(closure_2[13]);
                return obj4;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_130_3(false);
            throw closure_3;
          } else if (2 === c5) {
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
              let stringResult;
              if (0 === nickname.length) {
                const intl2 = nickname(closure_2[11]).intl;
                stringResult = intl2.string(nickname(closure_2[11]).t.O1Uqo3);
              } else {
                const intl = nickname(closure_2[11]).intl;
                const obj7 = { nickname };
                stringResult = intl.formatToPlainString(nickname(closure_2[11]).t.l4ZOaw, obj7);
              }
              c5 = 3;
              c6 = 1;
              const obj8 = { value: closure_130_4(stringResult), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_130_3(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_130_6();
            c4 = 0;
            closure_130_3(false);
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp42) {
          closure_3 = tmp42;
          if (0 === c4) {
            c6 = 3;
            throw tmp42;
          } else {
            c5 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_11();
  obj = react;
  [c2, c3] = _slicedToArray(react.useState(false), 2);
  const tmp4 = dependencyMap;
  const tmp2 = _slicedToArray(react.useState(false), 2);
  _slicedToArray = showUserProfile(10664)();
  let obj2 = get_initialized;
  const items = [obj];
  const stateFromStores = obj2.useStateFromStores(items, () => RelationshipStore.getNickname(require));
  let tmp7 = stateFromStores;
  const useRef = react.useRef;
  if (stateFromStores == null) {
    tmp7 = null;
  }
  react = useRef(tmp7);
  const callback = obj.useCallback((current) => {
    closure_5.current = current;
  }, []);
  const items1 = [UserStore];
  const tmp5Result = get_initialized;
  const stateFromStores1 = tmp5Result.useStateFromStores(items1, () => UserStore.getUser(require));
  if (null == stateFromStores) {
    let intl2 = intl7.intl;
    stringResult = intl2.string(intl7.t.BGYkaH);
  } else {
    let intl = intl7.intl;
    stringResult = intl.string(intl7.t["8pOYUE"]);
  }
  const items2 = [showUserProfile];
  callback1 = obj.useCallback(() => {
    const arr = ModalActionCreatorsDefault;
    arr.pop();
    if (showUserProfile != null) {
      showUserProfile();
    }
  }, items2);
  let obj3 = { style: tmp.container, children: closure_9(tmp3Result, obj4) };
  obj4 = { children: closure_10(tmp3Result3, obj5) };
  obj5 = {
    confirmText: intl3.string(intl7.t["R3BPH+"]),
    onConfirm: function handleSubmit() {
      return obj(...arguments);
    },
    cancelText: intl4.string(intl7.t["ETE/oC"]),
    onCancel: callback1,
    children: items3,
  };
  tmp3Result = showUserProfile(6537);
  tmp3Result3 = showUserProfile(5783);
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  let obj6 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-lg/extrabold",
    color: "mobile-text-heading-primary",
    children: stringResult,
  };
  items3 = [closure_9(Text_Text.Text, obj6), ,];
  let obj7 = {
    style: tmp.description,
    variant: "text-sm/medium",
    color: "text-default",
    children: intl5.string(intl7.t["NdQ+lP"]),
  };
  const Text = Text_Text.Text;
  intl5 = intl7.intl;
  items3[1] = closure_9(Text, obj7);
  let obj8 = {
    onChange: callback,
    autoFocus: true,
    accessibilityLabel: intl6.string(intl7.t.pqG6GS),
    placeholder: tmp3Result4.getName(stateFromStores1),
    defaultValue: stateFromStores,
    maxLength: 32,
    clearable: true,
  };
  const TextField = TextField2.TextField;
  intl6 = intl7.intl;
  tmp3Result4 = showUserProfile(4722);
  items3[2] = closure_9(TextField, obj8);
  return closure_9(callback1, obj3);
}
