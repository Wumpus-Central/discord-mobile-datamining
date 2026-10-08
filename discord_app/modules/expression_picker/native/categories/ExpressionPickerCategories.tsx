// === Module 9510: ExpressionPickerCategories ===

// Module 9510 (ExpressionPickerCategories)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Portal from "Portal" /* 4952 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingHorizontal: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" }, containerRefresh: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingHorizontal: nativeDefault.space.PX_8, flexDirection: "row", alignItems: "center" };
obj2.containerRefresh = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj4 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/categories/ExpressionPickerCategories.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ExpressionPickerCategories(arg0) {
  const cResult = c.c(10);
  ({ children, portalHostName, style } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.container) {
      if (cResult[2] === tmp4.containerRefresh) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] === children) {
        if (cResult[5] === tmp5) {
          let tmp6 = cResult[6];
        }
        if (cResult[7] === portalHostName) {
          if (cResult[8] === tmp6) {
            let tmp10 = cResult[9];
          }
          return tmp10;
        }
        const obj2 = { hostName: portalHostName, children: tmp6 };
        const tmp12 = jsx(Portal.Portal, { hostName: portalHostName, children: tmp6 });
        cResult[7] = portalHostName;
        cResult[8] = tmp6;
        cResult[9] = tmp12;
        tmp10 = tmp12;
      }
      const obj3 = { style: tmp5, children };
      const tmp9 = <View style={tmp5}>{children}</View>;
      cResult[4] = children;
      cResult[5] = tmp5;
      cResult[6] = tmp9;
      tmp6 = tmp9;
    }
  }
  const items = [, , ];
  ({ container: arr[0], containerRefresh: arr[1] } = tmp4);
  items[2] = style;
  cResult[0] = style;
  cResult[1] = tmp4.container;
  cResult[2] = tmp4.containerRefresh;
  cResult[3] = items;
  tmp5 = items;
}) : (function ExpressionPickerCategories(arg0) {
  ({ children, portalHostName, style } = arg0);
  const obj = { hostName: portalHostName, children: null };
  const obj2 = { style: null, children };
  const items = [, , ];
  ({ container: arr[0], containerRefresh: arr[1] } = closure_4());
  items[2] = style;
  obj2.style = items;
  obj.children = <View style={null}>{children}</View>;
  return jsx(Portal.Portal, { hostName: portalHostName, children: null });
});