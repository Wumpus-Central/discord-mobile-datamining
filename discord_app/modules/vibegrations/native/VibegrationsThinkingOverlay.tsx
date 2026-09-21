// discord_app/modules/vibegrations/native/VibegrationsThinkingOverlay.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import VibegrationsChatStore from "../stores/VibegrationsChatStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { root: null, opaque: null, body: null, header: null, panel: null };
const rect = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  left: nativeDefault.space.PX_8,
  right: nativeDefault.space.PX_8,
};
obj2.root = rect;
obj2.opaque = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS,
};
obj2.body = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.header = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.panel = { maxHeight: 240 };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsThinkingOverlay.tsx");

export default function VibegrationsThinkingOverlay(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_9();
  const ref = noop.useRef(null);
  const items = [VibegrationsChatStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(
    items,
    () => VibegrationsChatStore.getThinkingActivity(projectId),
    items1,
  );
  const obj = projectId(504);
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.text;
  }
  if (str == null) {
    str = "";
  }
  let tmp6 = null != stateFromStores;
  if (tmp6) {
    tmp6 = "end" !== stateFromStores.phase;
  }
  const text = projectId(17031).useVibegrationsRevealedText(str, { streaming: tmp6 }).text;
  const obj3 = { style: tmp.root, children: null };
  const obj4 = { style: tmp.opaque, children: null };
  const obj5 = { style: tmp.body, children: null };
  const obj6 = { style: tmp.header, children: null };
  const obj2 = projectId(17031);
  const items2 = [closure_7(projectId(16759).LightbulbIcon, { size: "xs", color: ref(576).colors.TEXT_BRAND })];
  const obj8 = { variant: "text-sm/semibold", color: "text-strong", children: null };
  const intl = tmp3(1115).intl;
  obj8.children = intl.string(ref(3678).ltkR4n);
  items2[1] = closure_7(projectId(4752).Text, obj8);
  obj6.children = items2;
  const items3 = [closure_8(closure_5, obj6)];
  if ("" !== text) {
    const obj9 = {
      ref,
      style: tmp.panel,
      nestedScrollEnabled: true,
      onContentSizeChange() {
        const current = ref.current;
        let scrollToEndResult;
        if (current != null) {
          scrollToEndResult = current.scrollToEnd({ animated: false });
        }
        return scrollToEndResult;
      },
      children: null,
    };
    const obj10 = { source: text };
    obj9.children = closure_7(tmp10(17029), obj10);
    let tmp7Result = closure_7(closure_4, obj9);
  } else {
    const obj11 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl2 = tmp3(1115).intl;
    obj11.children = intl2.string(tmp10(3678).rXPcUx);
    tmp7Result = closure_7(tmp3(4752).Text, obj11);
  }
  const obj7 = { size: "xs", color: ref(576).colors.TEXT_BRAND };
  items3[1] = tmp7Result;
  obj5.children = items3;
  obj4.children = closure_7(projectId(5824).Card, {
    variant: "primary",
    shadow: "high",
    children: closure_8(closure_5, obj5),
  });
  obj3.children = closure_7(closure_5, obj4);
  return closure_7(closure_5, obj3);
}
