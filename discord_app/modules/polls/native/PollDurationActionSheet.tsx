// discord_app/modules/polls/native/PollDurationActionSheet.tsx
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import usePollDurationOptionsDefault from "../usePollDurationOptions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function PollDurationRadioGroup(onChange) {
  onChange = onChange.onChange;
  const tmp = usePollDurationOptionsDefault();
  importDefault = tmp;
  const items = [tmp, onChange];
  const callback = noop.useCallback((arg0) => {
    onChange(arg0);
    const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(closure_1[arg0]);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const obj = { title: null, hasIcons: false, onChange: null, defaultValue: null, children: null };
  const intl = onChange(1114).intl;
  obj.title = intl.string(onChange(1114).t["0ZStp9"]);
  obj.onChange = callback;
  obj.defaultValue = onChange.selectedDuration;
  const entries = Object.entries(tmp);
  obj.children = entries.map((item) => {
    [tmp, tmp2] = item;
    return jsx(onChange(dependencyMap[7]).TableRadioRow, { value: parseInt(tmp), label: tmp2 }, tmp);
  });
  return jsx(onChange(5685).TableRadioGroup, {
    title: null,
    hasIcons: false,
    onChange: null,
    defaultValue: null,
    children: null,
  });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/polls/native/PollDurationActionSheet.tsx");

export default function PollDurationActionSheet(arg0) {
  ({ selectedDuration, onChange } = arg0);
  return jsx(ActionSheet.ActionSheet, {
    children: <PollDurationRadioGroup selectedDuration={selectedDuration} onChange={onChange} />,
  });
}
