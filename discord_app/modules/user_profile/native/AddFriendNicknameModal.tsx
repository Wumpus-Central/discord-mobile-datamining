// === Module 12839: AddFriendNicknameModal ===

// Module 12839 (AddFriendNicknameModal)
import initialize from "initialize" /* 586 */;
import ThemesDefault from "Themes" /* 709 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Text from "Text" /* 4474 */;
import TextField from "TextField" /* 6232 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "markAllUserIdListsStale" /* 4130 */;
import closure_8 from "mergeGuildAvatar" /* 1921 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, title: null, description: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { marginTop: 8, marginBottom: 16, textAlign: "center", lineHeight: 18 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_profile/native/AddFriendNicknameModal.tsx");

export default function AddFriendNicknameModal(arg0) {
  ({ userId: require, showUserProfile } = arg0);
  dependencyMap = undefined;
  c3 = undefined;
  let callback;
  let React;
  let callback1;
  function _handleSubmit() {
    const self = this;
    const tmp = _undefined2(function*() {
      if (v0 === 2) {
        v0 = 3;
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
          v0 = 2;
          if (0 === ref) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              let length;
              if (closure_1_2) {
                v0 = 3;
              } else {
                const current = ref.current;
                length = current;
                if (current == null) {
                  length = "";
                }
                closure_1_3(true);
                c4 = 1;
                let obj3 = closure_1_1(closure_1_2[13]);
                ref = 2;
                v0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj3.updateRelationship(closure_1_0, length);
                return obj1;
              }
            }
          } else if (1 === tmp7) {
            c4 = 0;
            callback(false);
            throw callback;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_1_3(false);
              v0 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              let tmp30 = c4;
              if (0 === length.length) {
                const intl2 = closure_1_0(closure_1_2[11]).intl;
                let stringResult = intl2.string(closure_1_0(closure_1_2[11]).t.O1Uqo3);
              } else {
                const intl = closure_1_0(closure_1_2[11]).intl;
                obj3 = { nickname: null };
                obj3[0] = length;
                stringResult = intl.formatToPlainString(closure_1_0(closure_1_2[11]).t.l4ZOaw, obj3);
              }
              tmp30 = tmp30(stringResult);
              ref = 3;
              v0 = 1;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            v0();
            c4 = 0;
            callback(false);
          }
          c4 = 0;
          callback(false);
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp46) {
          callback = tmp46;
          if (tmp4 === c4) {
            v0 = tmp2;
            throw tmp46;
          } else {
            ref = tmp;
          }
        }
      }
    });
    closure_7 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback4();
  let obj = React;
  [c2, c3] = callback(React.useState(false), 2);
  callback = showUserProfile(10889)();
  obj1 = initialize;
  const items = [_handleSubmit];
  const stateFromStores = obj1.useStateFromStores(items, () => _handleSubmit.getNickname(closure_0));
  let tmp7 = stateFromStores;
  if (stateFromStores == null) {
    tmp7 = null;
  }
  React = React.useRef(tmp7);
  callback = obj.useCallback((current) => {
    closure_5.current = current;
  }, []);
  const tmp2 = callback(React.useState(false), 2);
  const items1 = [closure_8];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => closure_1_8.getUser(closure_0));
  if (null == stateFromStores) {
    let intl2 = tmp5(1233).intl;
    let stringResult = intl2.string(tmp5(1233).t.BGYkaH);
  } else {
    let intl = tmp5(1233).intl;
    stringResult = intl.string(tmp5(1233).t["8pOYUE"]);
  }
  const items2 = [showUserProfile];
  callback1 = obj.useCallback(() => {
    let arr = showUserProfile(_undefined[12]);
    arr = arr.pop();
    if (showUserProfile != null) {
      showUserProfile();
    }
  }, items2);
  obj = { style: tmp.container, children: null };
  obj = { children: null };
  let tmp3Result = tmp3(6058);
  obj1 = { confirmText: null, onConfirm: null, cancelText: null, onCancel: null, children: null };
  tmp3Result = tmp3(4948);
  const intl3 = tmp5(1233).intl;
  obj1[0] = intl3.string(getSystemLocale.t["R3BPH+"]);
  obj1[1] = function handleSubmit() {
    const self = this;
    const apply = _handleSubmit.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  const intl4 = tmp5(1233).intl;
  obj1[2] = intl4.string(getSystemLocale.t["ETE/oC"]);
  obj1[3] = callback1;
  const items3 = [callback2(Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: stringResult }), , ];
  let obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl5 = tmp5(1233).intl;
  obj3[3] = intl5.string(getSystemLocale.t["NdQ+lP"]);
  items3[1] = callback2(Text.Text, obj3);
  const obj4 = { onChange: callback, autoFocus: true, accessibilityLabel: null, placeholder: null, defaultValue: null, maxLength: 32, isClearable: true };
  const intl6 = tmp5(1233).intl;
  obj4[2] = intl6.string(getSystemLocale.t.pqG6GS);
  let obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  const tmp5Result = initialize;
  obj4[3] = showUserProfile(4322).getName(stateFromStores1);
  obj4[4] = stateFromStores;
  items3[2] = callback2(TextField.TextField, obj4);
  obj1[4] = items3;
  obj[0] = callback3(tmp3Result, obj1);
  obj[1] = callback2(tmp3Result, obj);
  return callback2(callback1, obj);
};