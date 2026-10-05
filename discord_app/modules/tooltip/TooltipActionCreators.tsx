// discord_app/modules/tooltip/TooltipActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let obj = {
  acknowledgeTooltip(GIF_PICKER_TOOLTIP) {
    const obj = DispatcherDefault;
    const obj2 = { type: "TOOLTIP_ACKNOWLEDGE", tooltip: GIF_PICKER_TOOLTIP };
    obj.dispatch(obj2);
  },
  attemptToShowTooltip(tooltip) {
    const obj = DispatcherDefault;
    const obj2 = { type: "TOOLTIP_SHOW_ATTEMPT", tooltip, ignoreMaxShownLimit: flag };
    obj.dispatch(obj2);
  },
};
const result = size.fileFinishedImporting("modules/tooltip/TooltipActionCreators.tsx");

export default obj;
