import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
function PollDurationRadioGroup(onChange) {
  onChange = onChange.onChange;
  let importDefault;
  const tmp = importDefault(11388)();
  importDefault = tmp;
  const items = [tmp, onChange];
  const callback = React.useCallback((arg0) => {
    onChange(arg0);
    const AccessibilityAnnouncer = onChange(outer1_2[3]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(_undefined[arg0]);
    _undefined(outer1_2[4]).hideActionSheet();
  }, items);
  let obj = { title: null, hasIcons: false, onChange: null, defaultValue: null, children: null };
  const intl = onChange(1236).intl;
  obj[0] = intl.string(onChange(1236).t["0ZStp9"]);
  obj[2] = callback;
  obj[3] = onChange.selectedDuration;
  const entries = Object.entries(tmp);
  obj[4] = entries.map((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const obj = { value: null, label: null };
    obj[0] = parseInt(tmp);
    obj[1] = tmp2;
    return callback(onChange(table[7]).TableRadioRow, obj, tmp);
  });
  return jsx(onChange(7660).TableRadioGroup, { title: null, hasIcons: false, onChange: null, defaultValue: null, children: null });
}
const result = require("usePollDurationOptions").fileFinishedImporting("modules/polls/native/PollDurationActionSheet.tsx");

export default function PollDurationActionSheet(arg0) {
  let onChange;
  let selectedDuration;
  ({ selectedDuration, onChange } = arg0);
  const obj = { children: null };
  obj[0] = <PollDurationRadioGroup selectedDuration={selectedDuration} onChange={onChange} />;
  return jsx(require(5555) /* ActionSheet */.ActionSheet, { children: null });
};