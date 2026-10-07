// discord_app/modules/chat/native/Chat.android.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import LegacyBaseButton from "../../../../_runtime/06147_LegacyBaseButton.js";
import ChatNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ChatNativeComponent.tsx";
import TTIFirstContentfulPaint from "../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import ChatListNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({ chatList: { flex: 1 } });
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(4);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const Gesture = LegacyBaseButton.Gesture;
        const NativeResult = Gesture.Native();
        const result = Gesture.Native().disallowInterruption(true).shouldCancelWhenOutside(false);
        cResult[0] = result;
        let first = result;
        const disallowInterruptionResult = Gesture.Native().disallowInterruption(true);
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = hasOwnProperty(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "chat_list_android" });
        cResult[1] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== tmp4.chatList) {
        const obj2 = { gesture: first, children: null };
        const obj3 = { style: tmp4.chatList, floatingChatInputEnabled: true, children: tmp7 };
        obj2.children = hasOwnProperty(ChatListNativeComponentDefault, obj3);
        const tmp13 = hasOwnProperty(LegacyBaseButton.GestureDetector, obj2);
        cResult[2] = tmp4.chatList;
        cResult[3] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[3];
      }
      return tmp10;
    }
  : () => {
      const memo = noop.useMemo(() => {
        const Gesture = LegacyBaseButton.Gesture;
        const NativeResult = Gesture.Native();
        return Gesture.Native().disallowInterruption(true).shouldCancelWhenOutside(false);
      }, []);
      const obj = { gesture: memo, children: null };
      const obj2 = { style: closure_7().chatList, floatingChatInputEnabled: true, children: null };
      const tmp = closure_7();
      obj2.children = hasOwnProperty(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "chat_list_android" });
      obj.children = hasOwnProperty(ChatListNativeComponentDefault, obj2);
      return hasOwnProperty(LegacyBaseButton.GestureDetector, obj);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (children, ref) => {
        const cResult = c.c(7);
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
        const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp11 = hasOwnProperty(closure_8, {});
          cResult[2] = tmp11;
          let tmp8 = tmp11;
        } else {
          tmp8 = cResult[2];
        }
        if (cResult[3] === ref) {
          if (cResult[4] === children) {
            if (cResult[5] === stateFromStores) {
              let tmp12 = cResult[6];
            }
            return tmp12;
          }
        }
        const obj2 = {};
        const tmpResult = initialize;
        const merged = Object.assign(children);
        obj2.roleStyle = stateFromStores;
        obj2.ref = ref;
        const items1 = [tmp8, children.children];
        obj2.children = items1;
        const tmp15 = timestampProducer(ChatNativeComponentDefault, obj2);
        cResult[3] = ref;
        cResult[4] = children;
        cResult[5] = stateFromStores;
        cResult[6] = tmp15;
        tmp12 = tmp15;
      }
    : (children, ref) => {
        const items = [AccessibilityStore];
        const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
        const obj2 = {};
        const merged = Object.assign(children);
        obj2.roleStyle = stateFromStores;
        obj2.ref = ref;
        const items1 = [hasOwnProperty(closure_8, {}), children.children];
        obj2.children = items1;
        return timestampProducer(ChatNativeComponentDefault, obj2);
      },
);
