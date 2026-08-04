// discord_app/modules/portals/PortalToNativeView.native.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_1 = require("get ActivityIndicator").requireNativeComponent("PortalToNativeView");
let closure_2 = createCacheKey.createStyles({ portal: { position: "absolute", opacity: 0, height: 0, right: 0, left: 0, top: 0 } });
const result = require("jsxProd").fileFinishedImporting("modules/portals/PortalToNativeView.native.tsx");

export default function PortalToNativeView(arg0) {
  let children;
  let portalId;
  ({ portalId, children } = arg0);
  return <closure_1 pointerEvents="none" portalId={portalId} style={callback().portal}>{children}</closure_1>;
};