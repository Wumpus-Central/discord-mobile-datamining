// _runtime/00112_Commands.js
import setRuntimeConfigProviderAll from "00065_setRuntimeConfigProvider.js";
import codegenNativeCommandsDefault from "00113_codegenNativeCommands.js";

const value = setRuntimeConfigProviderAll.get("RCTView", () => ({ uiViewClassName: "RCTView" }));

export default value;
export const Commands = codegenNativeCommandsDefault({ supportedCommands: ["focus", "blur", "hotspotUpdate", "setPressed"] });