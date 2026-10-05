// === Module 9618: TooltipActionCreators ===

// Module 9618 (TooltipActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

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
  }
};
const result = size.fileFinishedImporting("modules/tooltip/TooltipActionCreators.tsx");

export default obj;