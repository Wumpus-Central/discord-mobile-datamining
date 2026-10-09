// discord_app/modules/portals/PortalToNativeView.native.tsx
import c from "../../../_runtime/00576_c.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let closure_3 = fn(17).requireNativeComponent("PortalToNativeView");
const createStyles = fn(5091);
let closure_4 = createStyles.createStyles({
  portal: { position: "absolute", opacity: 0, height: 0, right: 0, left: 0, top: 0 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/portals/PortalToNativeView.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PortalToNativeView(arg0) {
      const cResult = c.c(4);
      ({ portalId, children } = arg0);
      const tmp2 = closure_4();
      if (cResult[0] === children) {
        if (cResult[1] === portalId) {
          if (cResult[2] === tmp2.portal) {
            let tmp3 = cResult[3];
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
  : function PortalToNativeView(arg0) {
      ({ portalId, children } = arg0);
      return (
        <closure_3 pointerEvents="none" portalId={portalId} style={closure_4().portal}>
          {children}
        </closure_3>
      );
    };
