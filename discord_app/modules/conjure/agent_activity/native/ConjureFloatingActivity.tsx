// discord_app/modules/conjure/agent_activity/native/ConjureFloatingActivity.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef1652 from "../../../../../_runtime/metro/01652__.js";
import _modDef3995 from "../../intl/ConjureUntranslated.messages.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5141);
const obj2 = { root: null, pill: null, pillMain: null, checklistButton: null, panel: null, label: null };
const rect = {
  position: "absolute",
  left: nativeDefault.space.PX_16,
  right: nativeDefault.space.PX_16,
  alignItems: "center",
};
obj2.root = rect;
const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
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
};
obj2.pillMain = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
obj2.checklistButton = {
  marginVertical: -nativeDefault.space.PX_8,
  marginLeft: nativeDefault.space.PX_4,
  marginRight: -nativeDefault.space.PX_8,
};
let obj5 = {
  marginVertical: -nativeDefault.space.PX_8,
  marginLeft: nativeDefault.space.PX_4,
  marginRight: -nativeDefault.space.PX_8,
};
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
obj2.panel = {
  maxWidth: "100%",
  marginBottom: nativeDefault.space.PX_8,
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.label = { flexShrink: 1 };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = {
  code: "(function ConjureFloatingActivityTsx1(){let[opacity]=this.__closure;return{opacity:opacity.get()};})",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureFloatingActivity.tsx");

export default function ConjureFloatingActivity(agents) {
  ({ line, todos, todosLive } = agents);
  ({ onJumpToActivity, bottom } = agents);
  if (todosLive === undefined) {
    todosLive = true;
  }
  _require = undefined;
  importDefault = undefined;
  const tmp = closure_8();
  const sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(0);
  _require = sharedValue;
  items = [sharedValue];
  const effect = noop.useEffect(() => {
    const result = _undefined.set(timing_timing.withTiming(1, { duration: 150 }));
    return () => c0(dependencyMap[6]).cancelAnimation(_undefined);
  }, items);
  const obj = require("../../../../../_runtime/metro/01652__.js");
  const items1 = [closure_9, sharedValue];
  _require = undefined;
  [tmp6, tmp7] = items1;
  class ConjureFloatingActivityTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp7];
  ConjureFloatingActivityTsx1.__closure = items2;
  ConjureFloatingActivityTsx1.__workletHash = 8355728640531;
  ConjureFloatingActivityTsx1.__initData = tmp6;
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(
    ConjureFloatingActivityTsx1,
  );
  const obj3 = require("../../../../../_runtime/metro/01652__.js");
  [tmp10, c1] = noop.useState(false);
  const callback = noop.useCallback(() => _undefined2((arg0) => !arg0), []);
  const obj4 = { style: null, pointerEvents: "box-none", children: null };
  const items3 = [tmp.root, { bottom }, animatedStyle];
  obj4.style = items3;
  let tmp14 = null;
  if (tmp10) {
    tmp14 = null;
    if (null != todos) {
      const obj5 = { style: tmp.panel, children: null };
      const obj6 = { todos, agents: agents.agents, live: todosLive, announceProgress: false };
      obj5.children = closure_6(tmp13(12937), obj6);
      tmp14 = closure_6(View, obj5);
    }
  }
  const items4 = [tmp14];
  const obj7 = { style: tmp.pill, children: null };
  const obj8 = {
    style: tmp.pillMain,
    accessibilityRole: "button",
    accessibilityLabel: null,
    hitSlop: 8,
    onPress: null,
    children: null,
  };
  const intl = tmp2(1113).intl;
  obj8.accessibilityLabel = intl.formatToPlainString(_modDef3995.xuQfOT, { activity: line });
  obj8.onPress = onJumpToActivity;
  const tmp9 = _slicedToArray(noop.useState(false), 2);
  const items5 = [
    closure_6(require("MagicWandIcon").MagicWandIcon, { size: "xs", color: nativeDefault.colors.TEXT_BRAND }),
  ];
  const obj9 = { size: "xs", color: nativeDefault.colors.TEXT_BRAND };
  items5[1] = closure_6(View, {
    style: tmp.label,
    children: closure_6(require("Text/Text").Text, {
      variant: "body-sm/medium",
      color: "text-default",
      lineClamp: 1,
      children: line,
    }),
  });
  obj8.children = items5;
  const items6 = [closure_7(require("Pressables").PressableOpacity, obj8)];
  let tmp18Result = null;
  if (null != todos) {
    const obj11 = { style: tmp.checklistButton, children: null };
    const obj12 = {
      variant: "default",
      size: "sm",
      icon: tmp13(7049),
      pressed: tmp10,
      accessibilityLabel: null,
      onPress: null,
    };
    const intl2 = tmp2(1113).intl;
    obj12.accessibilityLabel = intl2.string(tmp13(3995).Qp2isI);
    obj12.onPress = callback;
    obj11.children = closure_6(tmp2(13000).ToggleIconButton, obj12);
    tmp18Result = closure_6(View, obj11);
  }
  items6[1] = tmp18Result;
  obj7.children = items6;
  items4[1] = closure_7(View, obj7);
  obj4.children = items4;
  return closure_7(_modDef1652.View, obj4);
}
