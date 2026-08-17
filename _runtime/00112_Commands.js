// _runtime/00112_Commands.js
import setRuntimeConfigProviderAll from "setRuntimeConfigProvider" /* 65 */;
import codegenNativeCommandsDefault from "codegenNativeCommands" /* 113 */;

const value = setRuntimeConfigProviderAll.get("RCTView", () => ({ uiViewClassName: "RCTView" }));

export default value;
export const Commands = codegenNativeCommandsDefault({ supportedCommands: ["focus", "blur", "hotspotUpdate", "setPressed"] });