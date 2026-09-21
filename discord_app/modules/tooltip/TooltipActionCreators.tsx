// === Module 9779: TooltipActionCreators ===

// Module 9779 (TooltipActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tooltip/TooltipActionCreators.tsx");

export default {
  acknowledgeTooltip(GIF_PICKER_TOOLTIP) {
    DispatcherDefault.dispatch({ type: "TOOLTIP_ACKNOWLEDGE", tooltip: GIF_PICKER_TOOLTIP });
  },
  attemptToShowTooltip(tooltip) {
    if (flag === undefined) {
      flag = false;
    }
    DispatcherDefault.dispatch({ type: "TOOLTIP_SHOW_ATTEMPT", tooltip, ignoreMaxShownLimit: flag });
  }
};