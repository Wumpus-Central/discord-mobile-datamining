// === Module 19224: useConsoleConnectionCoachmark ===

// Module 19224 (useConsoleConnectionCoachmark)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef19228 from "module_19228" /* 19228 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ContentDismissActionType = fn(4986).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/connections/console_coachmark/native/useConsoleConnectionCoachmark.tsx");

export function useConsoleConnectionCoachmark(disabled) {
  _require = undefined;
  let visible;
  const isConsoleConnectionCoachmarkEligible = require("ConsoleConnectionCoachmarkExperiment").useIsConsoleConnectionCoachmarkEligible("YouSettingsCoachmark");
  require("useSelectedDismissibleContent");
  if (isConsoleConnectionCoachmarkEligible) {
    if (!disabled.disabled) {
      items = [tmp(4973).DismissibleContent.CONSOLE_CONNECTION_COACHMARK];
    }
    const tmp7 = _slicedToArray(tmp5(items), 2);
    _require = tmp8;
    const tmp9 = tmp7[0] === tmp(4973).DismissibleContent.CONSOLE_CONNECTION_COACHMARK;
    visible = tmp9;
    const items1 = [tmp9, tmp7[1]];
    let tmp12 = null;
    if (tmp9) {
      let obj2 = { props: tmp11 };
      tmp12 = obj2;
    }
    return tmp12;
  }
  items = [];
  let obj = require("ConsoleConnectionCoachmarkExperiment");
}