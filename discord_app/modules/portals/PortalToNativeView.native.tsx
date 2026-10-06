// === Module 6574: PortalToNativeView ===

// Module 6574 (PortalToNativeView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const requireNativeComponent = react_native.requireNativeComponent;
const jsx = Fragment.jsx;
let closure_3 = requireNativeComponent("PortalToNativeView");
let closure_4 = createStyles.createStyles({ portal: { position: "absolute", opacity: 0, height: 0, right: 0, left: 0, top: 0 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let portalId;
  const obj = react2;
  const cResult = obj.c(4);
  ({ portalId, children } = arg0);
  const tmp2 = closure_4();
  if (cResult[0] === children) {
    if (cResult[1] === portalId) {
      let tmp3;
      if (cResult[2] === tmp2.portal) {
        tmp3 = cResult[3];
      }
      return tmp3;
    }
  }
  const tmp4 = <closure_3 pointerEvents="none" portalId={portalId} style={tmp2.portal}>{children}</closure_3>;
  cResult[0] = children;
  cResult[1] = portalId;
  cResult[2] = tmp2.portal;
  cResult[3] = tmp4;
  tmp3 = tmp4;
}) : ((arg0) => {
  let children;
  let portalId;
  ({ portalId, children } = arg0);
  return <closure_3 pointerEvents="none" portalId={portalId} style={closure_4().portal}>{children}</closure_3>;
});
const result = size.fileFinishedImporting("modules/portals/PortalToNativeView.native.tsx");

export default tmp3;