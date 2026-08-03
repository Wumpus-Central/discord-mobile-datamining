import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "SelectActionComponentView", directEventTypes: { topTap: { registrationName: "onTap" } }, validAttributes: null };
obj = { model: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onTap: true }));
obj[2] = obj;
const value = setRuntimeConfigProvider.get("SelectActionComponentView", () => obj);
const result = require("set").fileFinishedImporting("../discord_common/js/packages/rtn-codegen/js/SelectActionComponentViewNativeComponent.tsx");

export default value;
export const __INTERNAL_VIEW_CONFIG = obj;