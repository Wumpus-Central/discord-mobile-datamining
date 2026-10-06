// discord_app/modules/conjure/agent_activity/native/ConjureThinkingOverlay.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ConjureChatStore from "../../chat/ConjureChatStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let projectId;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let rect;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { root: rect, opaque: obj2, body: obj3, header: obj4, panel: { maxHeight: 240 } };
rect = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  left: nativeDefault.space.PX_8,
  right: nativeDefault.space.PX_8,
};
createStyles = createStyles.createStyles;
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.modules.mobile.CARD_DEFAULT_RADIUS,
};
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_9 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (projectId) => {
      let first;
      let intl;
      let intl2;
      let items2;
      let items3;
      let obj11;
      let obj9;
      let tmp12;
      let tmp14;
      let tmp18;
      let tmp22;
      let tmp29;
      let tmp8;
      let tmp9;
      const obj = projectId(576);
      const cResult = obj.c(23);
      projectId = projectId.projectId;
      const tmp4 = closure_9();
      const ref = react.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ConjureChatStore];
        cResult[0] = items;
        first = items;
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
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = projectId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
      if (cResult[4] !== (null != stateFromStores && "end" !== stateFromStores.phase)) {
        const obj2 = { streaming: null != stateFromStores && "end" !== stateFromStores.phase };
        cResult[4] = null != stateFromStores && "end" !== stateFromStores.phase;
        cResult[5] = obj2;
        tmp12 = obj2;
      } else {
        tmp12 = cResult[5];
      }
      let str2;
      const useConjureRevealedText = projectId(16688).useConjureRevealedText;
      projectId(16688);
      if (stateFromStores != null) {
        str2 = stateFromStores.text;
      }
      if (str2 == null) {
        str2 = "";
      }
      const text = useConjureRevealedText(str2, tmp12).text;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { size: "xs", color: ref(587).colors.TEXT_BRAND };
        const LightbulbIcon = tmp(9970).LightbulbIcon;
        const tmp17 = closure_7(LightbulbIcon, obj3);
        cResult[6] = tmp17;
        tmp14 = tmp17;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "text-sm/semibold", color: "text-strong", children: intl.string(ref(3753).XXYIeI) };
        const Text = tmp(4892).Text;
        intl = tmp(1126).intl;
        const tmp21 = closure_7(Text, obj4);
        cResult[7] = tmp21;
        tmp18 = tmp21;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] !== tmp4.header) {
        const obj5 = { style: tmp4.header, children: items2 };
        items2 = [tmp14, tmp18];
        const tmp25 = closure_8(closure_5, obj5);
        cResult[8] = tmp4.header;
        cResult[9] = tmp25;
        tmp22 = tmp25;
      } else {
        tmp22 = cResult[9];
      }
      if (cResult[10] === tmp4.panel) {
        let tmp26;
        if (cResult[11] === text) {
          tmp26 = cResult[12];
        }
        if (cResult[13] === tmp4.body) {
          if (cResult[14] === tmp22) {
            let tmp33;
            if (cResult[15] === tmp26) {
              tmp33 = cResult[16];
            }
            if (cResult[17] === tmp4.opaque) {
              let tmp38;
              if (cResult[18] === tmp33) {
                tmp38 = cResult[19];
              }
              if (cResult[20] === tmp4.root) {
                let tmp42;
                if (cResult[21] === tmp38) {
                  tmp42 = cResult[22];
                }
                return tmp42;
              }
              const obj6 = { style: tmp4.root, children: tmp38 };
              const tmp45 = closure_7(closure_5, obj6);
              cResult[20] = tmp4.root;
              cResult[21] = tmp38;
              cResult[22] = tmp45;
              tmp42 = tmp45;
            }
            const obj7 = { style: tmp4.opaque, children: tmp33 };
            const tmp41 = closure_7(closure_5, obj7);
            cResult[17] = tmp4.opaque;
            cResult[18] = tmp33;
            cResult[19] = tmp41;
            tmp38 = tmp41;
          }
        }
        const obj8 = { variant: "primary", shadow: "high", children: closure_8(closure_5, obj9) };
        obj9 = { style: tmp4.body, children: items3 };
        items3 = [tmp22, tmp26];
        const Card = tmp(6002).Card;
        const tmp37 = closure_7(Card, obj8);
        cResult[13] = tmp4.body;
        cResult[14] = tmp22;
        cResult[15] = tmp26;
        cResult[16] = tmp37;
        tmp33 = tmp37;
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
          children: closure_7(ref(16686), obj11),
        };
        obj11 = { source: text };
        tmp29 = closure_7(closure_4, obj10);
      } else {
        const obj12 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(ref(3753).LfoD6c) };
        const Text2 = tmp(4892).Text;
        intl2 = tmp(1126).intl;
        tmp29 = closure_7(Text2, obj12);
      }
      cResult[10] = tmp4.panel;
      cResult[11] = text;
      cResult[12] = tmp29;
      tmp26 = tmp29;
    }
  : (projectId) => {
      let Card;
      let intl;
      let intl2;
      let items2;
      let items3;
      let obj11;
      let obj3;
      let obj9;
      let tmp8Result;
      projectId = projectId.projectId;
      const tmp = closure_9();
      const ref = react.useRef(null);
      const items = [ConjureChatStore];
      const items1 = [projectId];
      const obj = projectId(504);
      const stateFromStores = obj.useStateFromStores(
        items,
        () => ConjureChatStore.getThinkingActivity(projectId),
        items1,
      );
      let str;
      const useConjureRevealedText = projectId(16688).useConjureRevealedText;
      projectId(16688);
      if (stateFromStores != null) {
        str = stateFromStores.text;
      }
      if (str == null) {
        str = "";
      }
      const tmp7 = null != stateFromStores && "end" !== stateFromStores.phase;
      const text = useConjureRevealedText(str, { streaming: tmp7 }).text;
      const obj2 = { style: tmp.root, children: closure_7(closure_5, obj3) };
      obj3 = { style: tmp.opaque, children: closure_7(Card, obj11) };
      const obj4 = { style: tmp.body, children: items3 };
      const obj5 = { style: tmp.header, children: items2 };
      Card = tmp3(6002).Card;
      const obj6 = { size: "xs", color: ref(587).colors.TEXT_BRAND };
      const LightbulbIcon = tmp3(9970).LightbulbIcon;
      items2 = [closure_7(LightbulbIcon, obj6)];
      const obj7 = { variant: "text-sm/semibold", color: "text-strong", children: intl.string(ref(3753).XXYIeI) };
      const Text = tmp3(4892).Text;
      intl = tmp3(1126).intl;
      items2[1] = closure_7(Text, obj7);
      items3 = [closure_8(closure_5, obj5)];
      if ("" !== text) {
        const obj8 = {
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
          children: closure_7(ref(16686), obj9),
        };
        obj9 = { source: text };
        tmp8Result = closure_7(closure_4, obj8);
      } else {
        const obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(ref(3753).LfoD6c) };
        const Text2 = tmp3(4892).Text;
        intl2 = tmp3(1126).intl;
        tmp8Result = closure_7(Text2, obj10);
      }
      items3[1] = tmp8Result;
      obj11 = { variant: "primary", shadow: "high", children: closure_8(closure_5, obj4) };
      return closure_7(closure_5, obj2);
    };
const result = size.fileFinishedImporting("modules/conjure/agent_activity/native/ConjureThinkingOverlay.tsx");

export default tmp5;
