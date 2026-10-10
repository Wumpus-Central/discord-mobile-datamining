// discord_app/modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_32 } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_32 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function RemediationsElement(children) {
      const cResult = c.c(6);
      children = children.children;
      const tmp4 = closure_4();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["k+QA9N"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== children) {
        const obj2 = { title: first, hasIcons: true, children };
        const tmp9 = jsx(TableRowGroup.TableRowGroup, { title: first, hasIcons: true, children });
        cResult[1] = children;
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.container) {
        if (cResult[4] === tmp7) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = <View style={tmp4.container}>{tmp7}</View>;
      cResult[3] = tmp4.container;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : function RemediationsElement(children) {
      const obj = { style: closure_4().container, children: null };
      const obj2 = { title: null, hasIcons: true, children: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t["k+QA9N"]);
      obj2.children = children.children;
      obj.children = jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: true, children: null });
      return <View style={closure_4().container}>{null}</View>;
    };
