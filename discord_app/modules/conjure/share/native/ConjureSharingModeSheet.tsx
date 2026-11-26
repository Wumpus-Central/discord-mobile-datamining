// discord_app/modules/conjure/share/native/ConjureSharingModeSheet.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ConjureSharingModeSheet = "ConjureSharingModeSheet";
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/native/ConjureSharingModeSheet.tsx");

export default function ConjureSharingModeSheet(onChange) {
  ({ options, value } = onChange);
  require = value;
  onChange = onChange.onChange;
  let title = onChange.title;
  items = [onChange, value];
  const callback = noop.useCallback((arg0) => {
    ActionSheetActionCreatorsDefault.hideActionSheet(ConjureSharingModeSheet);
    if (arg0 !== value) {
      onChange(arg0);
    }
  }, items);
  if (title == null) {
    const intl = tmp3(1112).intl;
    title = intl.string(onChange(4245).jDBYrs);
  }
  let obj = {
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }),
    children: jsx(TableRadioGroup.TableRadioGroup, {
      value,
      onChange: callback,
      hasIcons: false,
      children: options.map((value) =>
        jsx(value(dependencyMap[8]).TableRadioRow, { value: value.value, label: value.label }, value.value),
      ),
    }),
  };
  return jsx(ActionSheet.ActionSheet, {
    header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }),
    children: jsx(TableRadioGroup.TableRadioGroup, {
      value,
      onChange: callback,
      hasIcons: false,
      children: options.map((value) =>
        jsx(value(dependencyMap[8]).TableRadioRow, { value: value.value, label: value.label }, value.value),
      ),
    }),
  });
}
export const CONJURE_SHARING_MODE_SHEET_KEY = "ConjureSharingModeSheet";
