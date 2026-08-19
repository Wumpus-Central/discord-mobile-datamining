// === Module 10202: dispatcher ===

// Module 10202 (dispatcher)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/tooltip/TooltipActionCreators.tsx");

export default {
  acknowledgeTooltip(GIF_PICKER_TOOLTIP) {
    const obj = { type: "TOOLTIP_ACKNOWLEDGE", tooltip: GIF_PICKER_TOOLTIP };
    obj.dispatch(obj);
  },
  attemptToShowTooltip(closure_0, flag) {
    if (flag === undefined) {
      flag = false;
    }
    const obj = { type: "TOOLTIP_SHOW_ATTEMPT", tooltip: closure_0, ignoreMaxShownLimit: flag };
    obj.dispatch(obj);
  }
};