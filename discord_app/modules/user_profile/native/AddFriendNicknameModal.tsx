// discord_app/modules/user_profile/native/AddFriendNicknameModal.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import TextField from "../../../design/components/TextField/native/TextField.native.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/RelationshipStore.tsx";
import closure_8 from "../../../stores/UserStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
          if (0 === table) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              if (table) {
                v0 = 3;
              } else {
                closure_1_3(true);
                let ref = 1;
                obj1 = closure_1_1(table[12]);
                const current = ref.current;
                c0 = current;
                if (current == null) {
                  c0 = "";
                }
                table = 2;
                v0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.updateRelationship(closure_1_0, c0);
                return obj1;
              }
            }
          } else if (1 === tmp7) {
            ref = 0;
            callback(false);
            throw callback;
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            v0();
            ref = 0;
            callback(false);
          }
          ref = 0;
          callback(false);
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp29) {
          callback = tmp29;
          if (tmp4 === ref) {
            v0 = tmp2;
            throw tmp29;
          } else {
            table = tmp;
          }
        }
      }
    });
    closure_6 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback4();
  let obj = callback1;
  [c2, c3] = callback(callback1.useState(false), 2);
  obj1 = initialize;
  const items = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_1_7.getNickname(closure_0));
  let tmp6 = stateFromStores;
  if (stateFromStores == null) {
    tmp6 = null;
  }
  callback = callback1.useRef(tmp6);
  callback = obj.useCallback((current) => {
    closure_4.current = current;
  }, []);
  const tmp2 = callback(callback1.useState(false), 2);
  const items1 = [closure_8];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => closure_1_8.getUser(closure_0));
  if (null == stateFromStores) {
    const intl2 = tmp3(1236).intl;
    let stringResult = intl2.string(tmp3(1236).t.BGYkaH);
  } else {
    const intl = tmp3(1236).intl;
    stringResult = intl.string(tmp3(1236).t["8pOYUE"]);
  }
  const items2 = [showUserProfile];
  callback1 = obj.useCallback(() => {
    let arr = showUserProfile(_undefined[11]);
    arr = arr.pop();
    if (showUserProfile != null) {
      showUserProfile();
    }
  }, items2);
  obj = { style: tmp.container, children: null };
  obj = { children: null };
  const tmp3Result = initialize;
  obj1 = { confirmText: null, onConfirm: null, cancelText: null, onCancel: null, children: null };
  const tmp11 = showUserProfile(6001);
  const intl3 = tmp3(1236).intl;
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
  const intl4 = tmp3(1236).intl;
  obj1[2] = intl4.string(getSystemLocale.t["ETE/oC"]);
  obj1[3] = callback1;
  const items3 = [callback2(Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: stringResult }), , ];
  const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl5 = tmp3(1236).intl;
  obj3[3] = intl5.string(getSystemLocale.t["NdQ+lP"]);
  items3[1] = callback2(Text.Text, obj3);
  const obj4 = { onChange: callback, autoFocus: true, accessibilityLabel: null, placeholder: null, defaultValue: null, maxLength: 32, isClearable: true };
  const intl6 = tmp3(1236).intl;
  obj4[2] = intl6.string(getSystemLocale.t.pqG6GS);
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  const tmp12 = showUserProfile(4899);
  obj4[3] = showUserProfile(4289).getName(stateFromStores1);
  obj4[4] = stateFromStores;
  items3[2] = callback2(TextField.TextField, obj4);
  obj1[4] = items3;
  obj[0] = callback3(tmp12, obj1);
  obj[1] = callback2(tmp11, obj);
  return callback2(_handleSubmit, obj);
};