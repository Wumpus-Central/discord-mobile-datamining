// discord_app/modules/chat/native/Chat.android.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import LegacyBaseButton from "../../../../_runtime/06326_LegacyBaseButton.js";
import ChatNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ChatNativeComponent.tsx";
import useNavigationTTIContentPainted from "../../tti_analytics/native/navigation/useNavigationTTIContentPainted.tsx";
import TTIFirstContentfulPaint from "../../tti_analytics/native/TTIFirstContentfulPaint.tsx";
import ChatListNativeComponentDefault from "../../../../discord_common/js/packages/rtn-codegen/js/ChatListNativeComponent.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
let closure_3 = ["ref"];
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let closure_9 = createStyles.createStyles({ chatList: { flex: 1 } });
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DCDChatList() {
      const cResult = c.c(7);
      const tmp4 = closure_9();
      const navigationTTIContentPainted = useNavigationTTIContentPainted.useNavigationTTIContentPainted();
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
      if (cResult[1] !== navigationTTIContentPainted) {
        const fn = function s(nativeEvent) {
          return navigationTTIContentPainted(nativeEvent.nativeEvent);
        };
        cResult[1] = navigationTTIContentPainted;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = React5(TTIFirstContentfulPaint.TTIFirstContentfulPaint, { label: "chat_list_android" });
        cResult[3] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp8) {
        if (cResult[5] === tmp4.chatList) {
          let tmp12 = cResult[6];
        }
        return tmp12;
      }
      const obj3 = {
        gesture: first,
        children: React5(ChatListNativeComponentDefault, {
          style: tmp4.chatList,
          floatingChatInputEnabled: true,
          onContentPaintStateChange: tmp8,
          children: tmp9,
        }),
      };
      const tmp13 = React5(LegacyBaseButton.GestureDetector, obj3);
      cResult[4] = tmp8;
      cResult[5] = tmp4.chatList;
      cResult[6] = tmp13;
      tmp12 = tmp13;
      const obj4 = {
        style: tmp4.chatList,
        floatingChatInputEnabled: true,
        onContentPaintStateChange: tmp8,
        children: tmp9,
      };
    }
  : function DCDChatList() {
      const tmp = closure_9();
      navigationTTIContentPainted = navigationTTIContentPainted(11512).useNavigationTTIContentPainted();
      const items = [navigationTTIContentPainted];
      const memo = noop.useMemo(() => {
        const Gesture = navigationTTIContentPainted(dependencyMap[8]).Gesture;
        const NativeResult = Gesture.Native();
        return Gesture.Native().disallowInterruption(true).shouldCancelWhenOutside(false);
      }, []);
      const callback = noop.useCallback((nativeEvent) => navigationTTIContentPainted(nativeEvent.nativeEvent), items);
      const obj2 = { gesture: memo, children: null };
      const obj3 = {
        style: tmp.chatList,
        floatingChatInputEnabled: true,
        onContentPaintStateChange: callback,
        children: null,
      };
      const obj = navigationTTIContentPainted(11512);
      obj3.children = closure_7(navigationTTIContentPainted(11518).TTIFirstContentfulPaint, {
        label: "chat_list_android",
      });
      obj2.children = closure_7(ChatListNativeComponentDefault, obj3);
      return closure_7(navigationTTIContentPainted(6326).GestureDetector, obj2);
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat/native/Chat.android.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function Chat(ref) {
      const cResult = c.c(10);
      if (cResult[0] !== ref) {
        const tmp8 = _objectWithoutProperties(ref.ref, closure_3);
        cResult[0] = ref.ref;
        cResult[1] = ref.ref;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let tmp4 = ref;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function v() {
          return roleStyle.roleStyle;
        };
        cResult[3] = items;
        cResult[4] = fn;
        let tmp10 = fn;
        let tmp9 = items;
      } else {
        tmp9 = cResult[3];
        tmp10 = cResult[4];
      }
      const stateFromStores = initialize.useStateFromStores(tmp9, tmp10);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = React5(closure_10, {});
        cResult[5] = tmp16;
        let tmp13 = tmp16;
      } else {
        tmp13 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === stateFromStores) {
            let tmp17 = cResult[9];
          }
          return tmp17;
        }
      }
      const obj2 = {};
      const tmpResult = initialize;
      const merged = Object.assign(tmp5);
      obj2.roleStyle = stateFromStores;
      obj2.ref = tmp4;
      const items1 = [tmp13, tmp5.children];
      obj2.children = items1;
      const tmp20 = closure_1_8(ChatNativeComponentDefault, obj2);
      cResult[6] = tmp4;
      cResult[7] = tmp5;
      cResult[8] = stateFromStores;
      cResult[9] = tmp20;
      tmp17 = tmp20;
    }
  : function Chat(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const items = [AccessibilityStore];
      const stateFromStores = initialize.useStateFromStores(items, () => roleStyle.roleStyle);
      const obj2 = {};
      const merged1 = Object.assign(merged);
      obj2.roleStyle = stateFromStores;
      obj2.ref = ref.ref;
      const items1 = [React5(closure_10, {}), merged.children];
      obj2.children = items1;
      return closure_1_8(ChatNativeComponentDefault, obj2);
    };
