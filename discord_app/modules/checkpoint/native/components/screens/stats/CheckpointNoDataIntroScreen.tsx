// discord_app/modules/checkpoint/native/components/screens/stats/CheckpointNoDataIntroScreen.tsx
import _mod17 from "../../../../../../../_runtime/metro/00017__.js";
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckpointNavigation from "../../../../CheckpointNavigation.tsx";
import CheckpointTextDefault from "../../CheckpointText.tsx";
import CheckpointScreenDefault from "../../CheckpointScreen.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = {
  container: {
    flexGrow: 1,
    justifyContent: "center",
    gap: nativeDefault.space.PX_12,
    paddingBottom: nativeDefault.space.PX_64,
  },
};
let closure_6 = createStyles.createStyles(obj);
let obj2 = {
  flexGrow: 1,
  justifyContent: "center",
  gap: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_64,
};
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/screens/stats/CheckpointNoDataIntroScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointNoDataIntroScreen() {
      const cResult = c.c(4);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = React4(CheckpointTextDefault, { variant: "eyebrow", children: "Stats screen" });
        const obj2 = { variant: "display-md", children: CheckpointNavigation.CheckpointStatsScreen.NO_DATA_INTRO };
        const tmp11 = React4(CheckpointTextDefault, obj2);
        cResult[0] = tmp9;
        cResult[1] = tmp11;
        tmp5 = tmp9;
        tmp6 = tmp11;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== tmp4.container) {
        const obj3 = { children: null };
        const obj4 = { style: tmp4.container, children: null };
        const items = [tmp5, tmp6];
        obj4.children = items;
        obj3.children = hasOwnProperty(View, obj4);
        const tmp18 = React4(CheckpointScreenDefault, obj3);
        cResult[2] = tmp4.container;
        cResult[3] = tmp18;
        let tmp12 = tmp18;
      } else {
        tmp12 = cResult[3];
      }
      return tmp12;
    }
  : function CheckpointNoDataIntroScreen() {
      const obj = { children: null };
      const obj2 = { style: closure_6().container, children: null };
      const tmp = closure_6();
      const items = [React4(CheckpointTextDefault, { variant: "eyebrow", children: "Stats screen" })];
      const obj3 = { variant: "display-md", children: null };
      const tmp2 = CheckpointScreenDefault;
      obj3.children = CheckpointNavigation.CheckpointStatsScreen.NO_DATA_INTRO;
      items[1] = React4(CheckpointTextDefault, obj3);
      obj2.children = items;
      obj.children = hasOwnProperty(View, obj2);
      return React4(tmp2, obj);
    };
