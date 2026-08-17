// _runtime/00350_noop.js
import noopAll from "00019_noop.js";
import codegenNativeCommandsDefault from "00113_codegenNativeCommands.js";

noopAll;

export default codegenNativeCommandsDefault({ supportedCommands: ["flashScrollIndicators", "scrollTo", "scrollToEnd", "zoomToRect"] });