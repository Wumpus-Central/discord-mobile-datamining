// === Module 112: Commands ===

// Module 112 (Commands)
const value = require("setRuntimeConfigProvider").get("RCTView", () => ({ uiViewClassName: "RCTView" }));

export default value;
export const Commands = require("codegenNativeCommands")({ supportedCommands: ["focus", "blur", "hotspotUpdate", "setPressed"] });