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
  let obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(obj.useSelectedDismissibleContent(contentTypes, groupName, bypassAutoDismiss), 2);
  obj = { children: null };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  obj.children = children(obj);
  return React4(React3, obj);
}
export const SelectedVersionedDismissibleContent = function SelectedVersionedDismissibleContent(contentType) {
  ({ latestVersion, groupName, bypassAutoDismiss, children } = contentType);
  let obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(
    obj.useSelectedVersionedDismissibleContent(contentType.contentType, latestVersion, groupName, bypassAutoDismiss),
    2,
  );
  obj = { children: null };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  obj.children = children(obj);
  return React4(React3, obj);
};
export const SelectedTimeRecurringDismissibleContent = function SelectedTimeRecurringDismissibleContent(contentType) {
  ({ timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  let obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(
    obj.useSelectedTimeRecurringDismissibleContent(
      contentType.contentType,
      timeRecurringConfig,
      groupName,
      bypassAutoDismiss,
    ),
    2,
  );
  obj = { children: null };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  obj.children = children(obj);
  return React4(React3, obj);
};
export const SelectedSnowflakeBoundDismissibleContent = function SelectedSnowflakeBoundDismissibleContent(contentType) {
  ({ newSnowflakeId, groupName, bypassAutoDismiss, children } = contentType);
  let obj = useSelectedDismissibleContent;
  const tmp = _slicedToArray(
    obj.useSelectedSnowflakeBoundDismissibleContent(
      contentType.contentType,
      newSnowflakeId,
      groupName,
      bypassAutoDismiss,
    ),
    2,
  );
  obj = { children: null };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  obj.children = children(obj);
  return React4(React3, obj);
};
export const SelectedTimeReccuringSnowflakeBoundDismissibleContent =
  function SelectedTimeReccuringSnowflakeBoundDismissibleContent(contentType) {
    ({ newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
    let obj = useSelectedDismissibleContent;
    const tmp = _slicedToArray(
      obj.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(
        contentType.contentType,
        newSnowflakeId,
        timeRecurringConfig,
        groupName,
        bypassAutoDismiss,
      ),
      2,
    );
    obj = { children: null };
    obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
    obj.children = children(obj);
    return React4(React3, obj);
  };
