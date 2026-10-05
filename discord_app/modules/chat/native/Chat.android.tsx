// discord_app/modules/chat/native/Chat.android.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import LegacyBaseButton from "../../../../_runtime/06140_LegacyBaseButton.js";
import ChatNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ChatNativeComponent.tsx";
import TTIFirstContentfulPaint from "../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import ChatListNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx";
import react from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ chatList: { flex: 1 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let obj3;
      let tmp10;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const Gesture = LegacyBaseButton.Gesture;
        const NativeResult = Gesture.Native();
        const disallowInterruptionResult = NativeResult.disallowInterruption(true);
        const result = disallowInterruptionResult.shouldCancelWhenOutside(false);
        cResult[0] = result;
        first = result;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = hasOwnProperty(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "chat_list_android" });
        cResult[1] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp4.chatList) {
        const obj2 = { gesture: first, children: hasOwnProperty(ChatListNativeComponentDefault, obj3) };
        const GestureDetector = LegacyBaseButton.GestureDetector;
        obj3 = { style: tmp4.chatList, floatingChatInputEnabled: true, children: tmp7 };
        const tmp13 = hasOwnProperty(GestureDetector, obj2);
        cResult[2] = tmp4.chatList;
        cResult[3] = tmp13;
        tmp10 = tmp13;
      } else {
        tmp10 = cResult[3];
      }
      return tmp10;
    }
  : () => {
      let obj2;
      let tmp3;
      const tmp = closure_7();
      const memo = react.useMemo(() => {
        const Gesture = LegacyBaseButton.Gesture;
        const NativeResult = Gesture.Native();
        const disallowInterruptionResult = NativeResult.disallowInterruption(true);
        return disallowInterruptionResult.shouldCancelWhenOutside(false);
      }, []);
      const obj = { gesture: memo, children: hasOwnProperty(tmp3, obj2) };
      const GestureDetector = LegacyBaseButton.GestureDetector;
      obj2 = {
        style: tmp.chatList,
        floatingChatInputEnabled: true,
        children: hasOwnProperty(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "chat_list_android" }),
      };
      tmp3 = ChatListNativeComponentDefault;
      return hasOwnProperty(GestureDetector, obj);
    };
const forwardRef = react.forwardRef;
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (children, ref) => {
        let items1;
        let roleStyle;
        let tmp4;
        let tmp5;
        let tmp8;
        const obj = react2;
        const cResult = obj.c(7);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [AccessibilityStore];
          const fn = function h() {
            return roleStyle.roleStyle;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        const tmpResult = get_initialized;
        const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp11 = hasOwnProperty(closure_8, {});
          cResult[2] = tmp11;
          tmp8 = tmp11;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] === ref) {
          if (cResult[4] === children) {
            let tmp12;
            if (cResult[5] === stateFromStores) {
              tmp12 = cResult[6];
            }
            return tmp12;
          }
        }
        const obj2 = { roleStyle: stateFromStores, ref, children: items1 };
        const tmp13 = ChatNativeComponentDefault;
        const merged = Object.assign(children);
        items1 = [tmp8, children.children];
        const tmp15 = metroRequire(tmp13, obj2);
        cResult[3] = ref;
        cResult[4] = children;
        cResult[5] = stateFromStores;
        cResult[6] = tmp15;
        tmp12 = tmp15;
      }
    : (children, ref) => {
        let items1;
        let roleStyle;
        const items = [AccessibilityStore];
        const obj = get_initialized;
        const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
        const obj2 = { roleStyle: stateFromStores, ref, children: items1 };
        const tmp2 = ChatNativeComponentDefault;
        const merged = Object.assign(children);
        items1 = [hasOwnProperty(closure_8, {}), children.children];
        return metroRequire(tmp2, obj2);
      },
);
let result = size.fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default forwardRefResult;
