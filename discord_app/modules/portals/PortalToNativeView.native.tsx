// === Module 7070: PortalToNativeView ===

// Module 7070 (PortalToNativeView)
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
let closure_1 = fn(17).requireNativeComponent("PortalToNativeView");
const createStyles = fn(4560);
let closure_2 = createStyles.createStyles({ portal: { position: "absolute", opacity: 0, height: 0, right: 0, left: 0, top: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/portals/PortalToNativeView.native.tsx");

export default function PortalToNativeView(arg0) {
  ({ portalId, children } = arg0);
  return <closure_1 pointerEvents="none" portalId={portalId} style={closure_2().portal}>{children}</closure_1>;
};