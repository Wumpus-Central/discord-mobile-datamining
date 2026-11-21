// === Module 13075: PollDurationActionSheet ===

// Module 13075 (PollDurationActionSheet)
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4922 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ActionSheet from "ActionSheet" /* 7553 */;
import usePollDurationOptionsDefault from "usePollDurationOptions" /* 13074 */;
import noop from "module_19" /* 19 */;

require = fn;
function PollDurationRadioGroup(onChange) {
  onChange = onChange.onChange;
  const tmp = usePollDurationOptionsDefault();
  importDefault = tmp;
  items = [tmp, onChange];
  const callback = noop.useCallback((arg0) => {
    onChange(arg0);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(closure_1[arg0]);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const obj = { title: null, hasIcons: false, onChange: null, defaultValue: null, children: null };
  const intl = onChange(1112).intl;
  obj.title = intl.string(onChange(1112).t["0ZStp9"]);
  obj.onChange = callback;
  obj.defaultValue = onChange.selectedDuration;
  const entries = Object.entries(tmp);
  obj.children = entries.map((item) => {
    [tmp, tmp2] = item;
    return jsx(onChange(dependencyMap[7]).TableRadioRow, { value: parseInt(tmp), label: tmp2 }, tmp);
  });
  return jsx(onChange(7347).TableRadioGroup, { title: null, hasIcons: false, onChange: null, defaultValue: null, children: null });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/native/PollDurationActionSheet.tsx");

export default function PollDurationActionSheet(arg0) {
  ({ selectedDuration, onChange } = arg0);
  return jsx(ActionSheet.ActionSheet, { children: <PollDurationRadioGroup selectedDuration={selectedDuration} onChange={onChange} /> });
};