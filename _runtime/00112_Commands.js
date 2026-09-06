// _runtime/00112_Commands.js
import codegenNativeCommandsDefault from "00113_codegenNativeCommands.js";
import 00065__ from "metro/00065__.js";

const value = module_65.get("RCTView", () => ({ uiViewClassName: "RCTView" }));

export default value;
export const Commands = codegenNativeCommandsDefault({ supportedCommands: ["focus", "blur", "hotspotUpdate", "setPressed"] });