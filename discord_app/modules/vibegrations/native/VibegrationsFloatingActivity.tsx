// discord_app/modules/vibegrations/native/VibegrationsFloatingActivity.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3723 from "../intl/VibegrationsUntranslated.messages.js";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { root: null, pill: null, pillMain: null, checklistButton: null, panel: null, label: null };
const rect = {
  position: "absolute",
  left: nativeDefault.space.PX_16,
  right: nativeDefault.space.PX_16,
  alignItems: "center",
};
obj2.root = rect;
obj2.pill = {
  flexDirection: "row",
  alignItems: "center",
  maxWidth: "100%",
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  shadowColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  shadowOpacity: 0.3,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 2 },
  elevation: 4,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  maxWidth: "100%",
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  shadowColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  shadowOpacity: 0.3,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 2 },
  elevation: 4,
};
obj2.pillMain = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
obj2.checklistButton = { paddingLeft: nativeDefault.space.PX_12 };
let obj5 = { paddingLeft: nativeDefault.space.PX_12 };
obj2.panel = {
  maxWidth: "100%",
  marginBottom: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  shadowColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  shadowOpacity: 0.3,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 2 },
  elevation: 4,
};
obj2.label = { flexShrink: 1 };
let closure_8 = createStyles.createStyles(obj2);
const __initData = {
  code: "function VibegrationsFloatingActivityTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function VibegrationsFloatingActivityTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const ReactCompilerGating = fn(558);
let obj6 = {
  maxWidth: "100%",
  marginBottom: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  shadowColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  shadowOpacity: 0.3,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 2 },
  elevation: 4,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsFloatingActivity.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = sharedValue(576).c(41);
      ({ line, onJumpToActivity, bottom, todos, todosLive, agents } = arg0);
      const tmp4 = closure_8();
      const obj = sharedValue(576);
      sharedValue = sharedValue(4612).useSharedValue(0);
      if (cResult[0] !== sharedValue) {
        const fn = function h() {
          const result = sharedValue.set(timing.withTiming(1, { duration: 150 }));
          return () => sharedValue(dependencyMap[8]).cancelAnimation(closure_1_0);
        };
        const items = [sharedValue];
        cResult[0] = sharedValue;
        cResult[1] = fn;
        cResult[2] = items;
        let tmp7 = items;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = noop.useEffect(tmp6, tmp7);
      const tmpResult = sharedValue(4612);
      class R {
        constructor() {
          obj = { opacity: closure_0.get() };
          return obj;
        }
      }
      R.__closure = { opacity: sharedValue };
      R.__workletHash = 13383549561987;
      R.__initData = __initData;
      const animatedStyle = sharedValue(4612).useAnimatedStyle(R);
      const tmpResult2 = sharedValue(4612);
      [r10047, importDefault] = noop.useState(false);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            return closure_1((arg0) => !arg0);
          }
        }
        cResult[3] = P;
      } else {
        class P {
          constructor() {
            return closure_1((arg0) => !arg0);
          }
        }
      }
      if (cResult[4] !== bottom) {
        class P {
          constructor() {
            return closure_1((arg0) => !arg0);
          }
        }
        tmp13[0] = bottom;
        cResult[4] = bottom;
        cResult[5] = tmp13;
      } else {
        class P {
          constructor() {
            return closure_1((arg0) => !arg0);
          }
        }
      }
      if (cResult[6] === animatedStyle) {
        class P {
          constructor() {
            return closure_1((arg0) => !arg0);
          }
        }
      }
      const items1 = [tmp4.root, tmp13, animatedStyle];
      cResult[6] = animatedStyle;
      cResult[7] = tmp4.root;
      cResult[8] = tmp13;
      cResult[9] = items1;
      const tmp10 = _slicedToArray(noop.useState(false), 2);
    }
  : (agents) => {
      ({ line, todos, todosLive } = agents);
      ({ onJumpToActivity, bottom } = agents);
      if (todosLive === undefined) {
        todosLive = true;
      }
      let sharedValue;
      importDefault = undefined;
      const tmp = closure_8();
      sharedValue = sharedValue(4612).useSharedValue(0);
      const items = [sharedValue];
      const effect = noop.useEffect(() => {
        const result = sharedValue.set(timing.withTiming(1, { duration: 150 }));
        return () => sharedValue(dependencyMap[8]).cancelAnimation(closure_1_0);
      }, items);
      const obj = sharedValue(4612);
      const fn = function v() {
        return { opacity: sharedValue.get() };
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 15157413879808;
      fn.__initData = __initData2;
      const animatedStyle = sharedValue(4612).useAnimatedStyle(fn);
      const obj2 = sharedValue(4612);
      [tmp8, c1] = noop.useState(false);
      const callback = noop.useCallback(() => _undefined((arg0) => !arg0), []);
      const obj3 = { style: null, pointerEvents: "box-none", children: null };
      const items1 = [tmp.root, { bottom }, animatedStyle];
      obj3.style = items1;
      let tmp12 = null;
      if (tmp8) {
        tmp12 = null;
        if (null != todos) {
          const obj4 = { style: tmp.panel, children: null };
          const obj5 = { todos, agents: agents.agents, live: todosLive, announceProgress: false };
          obj4.children = closure_6(tmp11(16702), obj5);
          tmp12 = closure_6(View, obj4);
        }
      }
      const items2 = [tmp12];
      const obj6 = { style: tmp.pill, children: null };
      const obj7 = {
        style: tmp.pillMain,
        accessibilityRole: "button",
        accessibilityLabel: null,
        hitSlop: 8,
        onPress: null,
        children: null,
      };
      const intl = tmp2(1126).intl;
      obj7.accessibilityLabel = intl.formatToPlainString(_modDef3723.Sk4CzQ, { activity: line });
      obj7.onPress = onJumpToActivity;
      const tmp7 = _slicedToArray(noop.useState(false), 2);
      const items3 = [
        closure_6(sharedValue(12500).MagicWandIcon, { size: "xs", color: nativeDefault.colors.TEXT_BRAND }),
      ];
      const obj8 = { size: "xs", color: nativeDefault.colors.TEXT_BRAND };
      items3[1] = closure_6(View, {
        style: tmp.label,
        children: closure_6(sharedValue(4886).Text, {
          variant: "text-sm/medium",
          color: "text-default",
          lineClamp: 1,
          children: line,
        }),
      });
      obj7.children = items3;
      const items4 = [closure_7(sharedValue(5909).PressableOpacity, obj7)];
      if (null == todos) {
        items4[1] = null;
        obj6.children = items4;
        items2[1] = closure_7(View, obj6);
        obj3.children = items2;
        return closure_7(ReanimatedRexportDefault.View, obj3);
      } else {
        const obj10 = {
          style: tmp.checklistButton,
          accessibilityRole: "button",
          accessibilityState: null,
          accessibilityLabel: null,
          hitSlop: 8,
          onPress: null,
          children: null,
        };
        const obj11 = { expanded: tmp8 };
        obj10.accessibilityState = obj11;
        const intl2 = tmp2(1126).intl;
        obj10.accessibilityLabel = intl2.string(tmp11(3723).OZIOl8);
        obj10.onPress = callback;
        let colors = tmp11(587).colors;
        const obj12 = { size: "xs", color: tmp8 ? colors.TEXT_BRAND : colors.TEXT_MUTED };
        colors = closure_6(tmp2(5928).ClipboardListIcon, obj12);
        obj10.children = colors;
        closure_6(tmp2(5909).PressableOpacity, obj10);
      }
      const obj9 = {
        style: tmp.label,
        children: closure_6(sharedValue(4886).Text, {
          variant: "text-sm/medium",
          color: "text-default",
          lineClamp: 1,
          children: line,
        }),
      };
    };
