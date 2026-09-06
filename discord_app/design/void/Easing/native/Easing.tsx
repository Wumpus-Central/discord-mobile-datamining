// discord_app/design/void/Easing/native/Easing.tsx
import ReanimatedRexport from "../../../../modules/reanimated/ReanimatedRexport.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const Easing = ReanimatedRexport.Easing;
const Easing2 = ReanimatedRexport.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const result = size.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = Easing2.bezier(0, 0, 0.2, 1);
