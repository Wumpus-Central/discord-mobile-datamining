// discord_app/modules/conjure/agent_activity/native/ConjureThinkingOverlay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureChatStore from "../../chat/ConjureChatStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
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
const ReactCompilerGating = fn(558);
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureThinkingOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureThinkingOverlay(projectId) {
      const cResult = projectId(576).c(23);
      projectId = projectId.projectId;
      const tmp4 = closure_9();
      let ref = noop.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureChatStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== projectId) {
        const fn = function y() {
          return ConjureChatStore.getThinkingActivity(projectId);
        };
        const items1 = [projectId];
        cResult[1] = projectId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp9 = items1;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const obj = projectId(576);
      const stateFromStores = projectId(504).useStateFromStores(first, tmp8, tmp9);
      let tmp11 = null != stateFromStores;
      if (tmp11) {
        tmp11 = "end" !== stateFromStores.phase;
      }
      if (cResult[4] !== tmp11) {
        const obj2 = { streaming: tmp11 };
        cResult[4] = tmp11;
        cResult[5] = obj2;
        let tmp12 = obj2;
      } else {
        tmp12 = cResult[5];
      }
      const tmpResult = projectId(504);
      let str2;
      if (stateFromStores != null) {
        str2 = stateFromStores.text;
      }
      if (str2 == null) {
        str2 = "";
      }
      const text = projectId(17089).useConjureRevealedText(str2, tmp12).text;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { size: "xs", color: ref(587).colors.TEXT_BRAND };
        const tmp16 = closure_7(tmp(9535).LightbulbIcon, obj3);
        cResult[6] = tmp16;
        let tmp13 = tmp16;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "text-sm/semibold", color: "text-strong", children: null };
        const intl = tmp(1126).intl;
        obj4.children = intl.string(ref(3827).XXYIeI);
        const tmp20 = closure_7(tmp(5087).Text, obj4);
        cResult[7] = tmp20;
        let tmp17 = tmp20;
      } else {
        tmp17 = cResult[7];
      }
      if (cResult[8] !== tmp4.header) {
        const obj5 = { style: tmp4.header, children: null };
        const items2 = [tmp13, tmp17];
        obj5.children = items2;
        const tmp24 = closure_8(closure_5, obj5);
        cResult[8] = tmp4.header;
        cResult[9] = tmp24;
        let tmp21 = tmp24;
      } else {
        tmp21 = cResult[9];
      }
      if (cResult[10] === tmp4.panel) {
        if (cResult[11] === text) {
          if (cResult[13] === tmp4.body) {
            if (cResult[14] === tmp21) {
              if (cResult[15] === tmp25) {
                let tmp32 = cResult[16];
              }
              if (cResult[17] === tmp4.opaque) {
                if (cResult[18] === tmp32) {
                  let tmp37 = cResult[19];
                }
                if (cResult[20] === tmp4.root) {
                  if (cResult[21] === tmp37) {
                    let tmp41 = cResult[22];
                  }
                  return tmp41;
                }
                const obj6 = { style: tmp4.root, children: tmp37 };
                const tmp44 = closure_7(closure_5, obj6);
                cResult[20] = tmp4.root;
                cResult[21] = tmp37;
                cResult[22] = tmp44;
                tmp41 = tmp44;
              }
              const obj7 = { style: tmp4.opaque, children: tmp32 };
              const tmp40 = closure_7(closure_5, obj7);
              cResult[17] = tmp4.opaque;
              cResult[18] = tmp32;
              cResult[19] = tmp40;
              tmp37 = tmp40;
            }
          }
          const obj8 = { variant: "primary", shadow: "high", children: null };
          const obj9 = { style: tmp4.body, children: null };
          const items3 = [tmp21, cResult[12]];
          obj9.children = items3;
          obj8.children = closure_8(closure_5, obj9);
          const tmp36 = closure_7(tmp(6188).Card, obj8);
          cResult[13] = tmp4.body;
          cResult[14] = tmp21;
          cResult[15] = cResult[12];
          cResult[16] = tmp36;
          tmp32 = tmp36;
        }
      }
      if ("" !== text) {
        const obj10 = {
          ref,
          style: tmp4.panel,
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
        ref = ref(17087);
        const obj11 = { source: text };
        obj10.children = closure_7(ref, obj11);
        let tmp28 = closure_7(closure_4, obj10);
      } else {
        const obj12 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl2 = tmp(1126).intl;
        obj12.children = intl2.string(ref(3827).LfoD6c);
        tmp28 = closure_7(tmp(5087).Text, obj12);
      }
      cResult[10] = tmp4.panel;
      cResult[11] = text;
      cResult[12] = tmp28;
      const tmpResult2 = projectId(17089);
    }
  : function ConjureThinkingOverlay(projectId) {
      projectId = projectId.projectId;
      const tmp = closure_9();
      const ref = noop.useRef(null);
      const items = [ConjureChatStore];
      const items1 = [projectId];
      const stateFromStores = projectId(504).useStateFromStores(
        items,
        () => ConjureChatStore.getThinkingActivity(projectId),
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
      const text = projectId(17089).useConjureRevealedText(str, { streaming: tmp6 }).text;
      const obj3 = { style: tmp.root, children: null };
      const obj4 = { style: tmp.opaque, children: null };
      const obj5 = { style: tmp.body, children: null };
      const obj6 = { style: tmp.header, children: null };
      const obj2 = projectId(17089);
      const items2 = [closure_7(projectId(9535).LightbulbIcon, { size: "xs", color: ref(587).colors.TEXT_BRAND })];
      const obj8 = { variant: "text-sm/semibold", color: "text-strong", children: null };
      const intl = tmp3(1126).intl;
      obj8.children = intl.string(ref(3827).XXYIeI);
      items2[1] = closure_7(projectId(5087).Text, obj8);
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
        obj9.children = closure_7(tmp10(17087), obj10);
        let tmp7Result = closure_7(closure_4, obj9);
      } else {
        const obj11 = { variant: "text-sm/normal", color: "text-muted", children: null };
        const intl2 = tmp3(1126).intl;
        obj11.children = intl2.string(tmp10(3827).LfoD6c);
        tmp7Result = closure_7(tmp3(5087).Text, obj11);
      }
      const obj7 = { size: "xs", color: ref(587).colors.TEXT_BRAND };
      items3[1] = tmp7Result;
      obj5.children = items3;
      obj4.children = closure_7(projectId(6188).Card, {
        variant: "primary",
        shadow: "high",
        children: closure_8(closure_5, obj5),
      });
      obj3.children = closure_7(closure_5, obj4);
      return closure_7(closure_5, obj3);
    };
