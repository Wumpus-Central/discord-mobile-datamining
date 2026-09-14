// discord_app/modules/dismissible_content/native/SelectedDismissibleContent.tsx
import useSelectedDismissibleContent from "../hooks/useSelectedDismissibleContent.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ Fragment: c3, jsx: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/native/SelectedDismissibleContent.tsx");

export default function SelectedDismissibleContent(arg0) {
  ({ contentTypes, children, groupName, bypassAutoDismiss } = arg0);
  const tmp = _slicedToArray(
    useSelectedDismissibleContent.useSelectedDismissibleContent(contentTypes, groupName, bypassAutoDismiss),
    2,
  );
  const obj2 = { children: children({ visibleContent: tmp[0], markAsDismissed: tmp[1] }) };
  return React4(React3, obj2);
}
export const SelectedVersionedDismissibleContent = function SelectedVersionedDismissibleContent(contentType) {
  ({ latestVersion, groupName, bypassAutoDismiss, children } = contentType);
  const tmp = _slicedToArray(
    useSelectedDismissibleContent.useSelectedVersionedDismissibleContent(
      contentType.contentType,
      latestVersion,
      groupName,
      bypassAutoDismiss,
    ),
    2,
  );
  const obj2 = { children: children({ visibleContent: tmp[0], markAsDismissed: tmp[1] }) };
  return React4(React3, obj2);
};
export const SelectedTimeRecurringDismissibleContent = function SelectedTimeRecurringDismissibleContent(contentType) {
  ({ timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  const tmp = _slicedToArray(
    useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent(
      contentType.contentType,
      timeRecurringConfig,
      groupName,
      bypassAutoDismiss,
    ),
    2,
  );
  const obj2 = { children: children({ visibleContent: tmp[0], markAsDismissed: tmp[1] }) };
  return React4(React3, obj2);
};
export const SelectedSnowflakeBoundDismissibleContent = function SelectedSnowflakeBoundDismissibleContent(contentType) {
  ({ newSnowflakeId, groupName, bypassAutoDismiss, children } = contentType);
  const tmp = _slicedToArray(
    useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent(
      contentType.contentType,
      newSnowflakeId,
      groupName,
      bypassAutoDismiss,
    ),
    2,
  );
  const obj2 = { children: children({ visibleContent: tmp[0], markAsDismissed: tmp[1] }) };
  return React4(React3, obj2);
};
export const SelectedTimeReccuringSnowflakeBoundDismissibleContent =
  function SelectedTimeReccuringSnowflakeBoundDismissibleContent(contentType) {
    ({ newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
    const tmp = _slicedToArray(
      useSelectedDismissibleContent.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(
        contentType.contentType,
        newSnowflakeId,
        timeRecurringConfig,
        groupName,
        bypassAutoDismiss,
      ),
      2,
    );
    const obj2 = { children: children({ visibleContent: tmp[0], markAsDismissed: tmp[1] }) };
    return React4(React3, obj2);
  };
