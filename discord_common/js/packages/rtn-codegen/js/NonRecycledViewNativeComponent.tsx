// discord_common/js/packages/rtn-codegen/js/NonRecycledViewNativeComponent.tsx
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "DCDNonRecycledView", validAttributes: {} };
const value = setRuntimeConfigProvider.get("DCDNonRecycledView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/NonRecycledViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;