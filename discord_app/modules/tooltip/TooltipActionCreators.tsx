// discord_app/modules/tooltip/TooltipActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/tooltip/TooltipActionCreators.tsx");

export default {
  acknowledgeTooltip(GIF_PICKER_TOOLTIP) {
    const obj = { type: "TOOLTIP_ACKNOWLEDGE", tooltip: GIF_PICKER_TOOLTIP };
    obj.dispatch(obj);
  },
  attemptToShowTooltip(tooltip) {
    if (flag === undefined) {
      flag = false;
    }
    const obj = { type: "TOOLTIP_SHOW_ATTEMPT", tooltip, ignoreMaxShownLimit: flag };
    obj.dispatch(obj);
  },
};
