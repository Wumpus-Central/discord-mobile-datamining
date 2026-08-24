// === Module 11427: PollDurationRadioGroup ===

// Module 11427 (PollDurationRadioGroup)
import ActionSheet from "ActionSheet" /* 7213 */;
import usePollDurationOptionsDefault from "usePollDurationOptions" /* 11426 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function PollDurationRadioGroup(onChange) {
  onChange = onChange.onChange;
  importDefault = undefined;
  const tmp = usePollDurationOptionsDefault();
  importDefault = tmp;
  const items = [tmp, onChange];
  const callback = React.useCallback((arg0) => {
    onChange(arg0);
    const AccessibilityAnnouncer = onChange(closure_1_2[3]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(dependencyMap[arg0]);
    dependencyMap(closure_1_2[4]).hideActionSheet();
  }, items);
  const obj = { title: null, hasIcons: false, onChange: null, defaultValue: null, children: null };
  const intl = onChange(1236).intl;
  obj[0] = intl.string(onChange(1236).t["0ZStp9"]);
  obj[2] = callback;
  obj[3] = onChange.selectedDuration;
  const entries = Object.entries(tmp);
  obj[4] = entries.map((arg0) => {
    [tmp, tmp2] = arg0;
    return callback(onChange(table[7]).TableRadioRow, { value: parseInt(tmp), label: tmp2 }, tmp);
  });
  return jsx(onChange(8140).TableRadioGroup, { title: null, hasIcons: false, onChange: null, defaultValue: null, children: null });
}
const result = require("set").fileFinishedImporting("modules/polls/native/PollDurationActionSheet.tsx");

export default function PollDurationActionSheet(arg0) {
  ({ selectedDuration, onChange } = arg0);
  return jsx(ActionSheet.ActionSheet, { children: <PollDurationRadioGroup selectedDuration={selectedDuration} onChange={onChange} /> });
};