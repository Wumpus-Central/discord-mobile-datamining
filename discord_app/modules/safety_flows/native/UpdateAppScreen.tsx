// discord_app/modules/safety_flows/native/UpdateAppScreen.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2787 from "../SafetyFlows.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ NativeModules: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {
  container: { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_8 },
  buttonContainer: null,
};
let obj2 = { flexDirection: "column", justifyContent: "center", gap: nativeDefault.space.PX_8 };
obj.buttonContainer = { marginTop: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
let obj3 = { marginTop: nativeDefault.space.PX_8 };
const result = size.fileFinishedImporting("modules/safety_flows/native/UpdateAppScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(9);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
          BundleUpdaterManager.reload();
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "heading-lg/semibold", children: null };
        const intl = util.intl;
        obj2.children = intl.string(_modDef2787.yxqMCD);
        const tmp9 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[1] = tmp9;
        let tmp6 = tmp9;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-md/normal", color: "text-muted", children: null };
        const intl2 = util.intl;
        obj3.children = intl2.string(_modDef2787.VBZJJg);
        const tmp13 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[2] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { onPress: first, text: null, variant: "primary", size: "md" };
        const intl3 = util.intl;
        obj4.text = intl3.string(_modDef2787.o4D6fm);
        const tmp17 = hasOwnProperty(components_Button_Button.Button, obj4);
        cResult[3] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] !== tmp4.buttonContainer) {
        const obj5 = { style: tmp4.buttonContainer, children: tmp14 };
        const tmp21 = hasOwnProperty(React4, obj5);
        cResult[4] = tmp4.buttonContainer;
        cResult[5] = tmp21;
        let tmp18 = tmp21;
      } else {
        tmp18 = cResult[5];
      }
      if (cResult[6] === tmp4.container) {
        if (cResult[7] === tmp18) {
          let tmp22 = cResult[8];
        }
        return tmp22;
      }
      const obj6 = { style: tmp4.container, children: null };
      const items = [tmp6, tmp10, tmp18];
      obj6.children = items;
      const tmp23 = timestampProducer(React4, obj6);
      cResult[6] = tmp4.container;
      cResult[7] = tmp18;
      cResult[8] = tmp23;
      tmp22 = tmp23;
    }
  : () => {
      const tmp = closure_7();
      const obj = { style: tmp.container, children: null };
      const obj2 = { variant: "heading-lg/semibold", children: null };
      const intl = util.intl;
      obj2.children = intl.string(_modDef2787.yxqMCD);
      const items = [hasOwnProperty(Text_Text.Text, obj2), ,];
      const obj3 = { variant: "text-md/normal", color: "text-muted", children: null };
      const intl2 = util.intl;
      obj3.children = intl2.string(_modDef2787.VBZJJg);
      items[1] = hasOwnProperty(Text_Text.Text, obj3);
      const obj4 = { style: tmp.buttonContainer, children: null };
      const obj5 = {
        onPress() {
          BundleUpdaterManager = BundleUpdaterManager.BundleUpdaterManager;
          BundleUpdaterManager.reload();
        },
        text: null,
        variant: "primary",
        size: "md",
      };
      const intl3 = util.intl;
      obj5.text = intl3.string(_modDef2787.o4D6fm);
      obj4.children = hasOwnProperty(components_Button_Button.Button, obj5);
      items[2] = hasOwnProperty(React4, obj4);
      obj.children = items;
      return timestampProducer(React4, obj);
    };
