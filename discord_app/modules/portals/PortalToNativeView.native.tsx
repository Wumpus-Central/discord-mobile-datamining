// discord_app/modules/portals/PortalToNativeView.native.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../_runtime/00576_react.js";
import react from "../../../_runtime/00019_react.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const requireNativeComponent = react_native.requireNativeComponent;
const jsx = Fragment.jsx;
let closure_3 = requireNativeComponent("PortalToNativeView");
let closure_4 = createStyles.createStyles({
  portal: { position: "absolute", opacity: 0, height: 0, right: 0, left: 0, top: 0 },
});
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
      const tmp4 = (
        <closure_3 pointerEvents="none" portalId={portalId} style={tmp2.portal}>
          {children}
        </closure_3>
      );
      cResult[0] = children;
      cResult[1] = portalId;
      cResult[2] = tmp2.portal;
      cResult[3] = tmp4;
      tmp3 = tmp4;
    }
  : (arg0) => {
      let children;
      let portalId;
      ({ portalId, children } = arg0);
      return (
        <closure_3 pointerEvents="none" portalId={portalId} style={closure_4().portal}>
          {children}
        </closure_3>
      );
    };
const result = size.fileFinishedImporting("modules/portals/PortalToNativeView.native.tsx");

export default tmp3;
