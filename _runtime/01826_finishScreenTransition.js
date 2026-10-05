// _runtime/01826_finishScreenTransition.js
import startScreenTransition from "01827_startScreenTransition.js";
import ScreenTransition from "01831_ScreenTransition.js";

const startScreenTransition_export = startScreenTransition.startScreenTransition;
const ScreenTransition_export = ScreenTransition.ScreenTransition;

export const finishScreenTransition = startScreenTransition.finishScreenTransition;
export { startScreenTransition_export as startScreenTransition };
export { ScreenTransition_export as ScreenTransition };
