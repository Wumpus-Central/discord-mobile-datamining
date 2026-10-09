// === Module 8473: MediaModalOverlayHeaderWrapper ===

// Module 8473 (MediaModalOverlayHeaderWrapper)
import c from "c" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import NavigatorConstants from "NavigatorConstants" /* 6263 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles((paddingTop, arg1, arg2) => {
  const obj = { bar: { flexDirection: "row", alignItems: "center", height: NavigatorConstants.NAV_BAR_HEIGHT + paddingTop, paddingTop, paddingLeft: arg1 + 6, paddingRight: arg2 + 6 } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeaderWrapper.tsx");

export const MediaModalOverlayHeaderWrapper = ReactCompilerGating.isReactCompilerEnabled() ? (function MediaModalOverlayHeaderWrapper(arg0) {
  const cResult = c.c(6);
  ({ children, style } = arg0);
  const rect = useSafeAreaInsetsDefault();
  const tmp2 = closure_5(rect.top, rect.left, rect.right);
  if (cResult[0] === style) {
    if (cResult[1] === tmp2.bar) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === tmp3) {
        let tmp4 = cResult[5];
      }
      return tmp4;
    }
    const obj2 = { style: tmp3, pointerEvents: "box-none", children };
    const tmp7 = <View style={tmp3} pointerEvents="box-none">{children}</View>;
    cResult[3] = children;
    cResult[4] = tmp3;
    cResult[5] = tmp7;
    tmp4 = tmp7;
  }
  const items = [tmp2.bar, style];
  cResult[0] = style;
  cResult[1] = tmp2.bar;
  cResult[2] = items;
  tmp3 = items;
}) : (function MediaModalOverlayHeaderWrapper(arg0) {
  ({ children, style } = arg0);
  const rect = useSafeAreaInsetsDefault();
  const obj = { style: null, pointerEvents: "box-none", children: null };
  const items = [closure_5(rect.top, rect.left, rect.right).bar, style];
  obj.style = items;
  obj.children = children;
  return <View style={null} pointerEvents="box-none">{null}</View>;
});