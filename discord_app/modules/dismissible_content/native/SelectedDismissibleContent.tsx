// discord_app/modules/dismissible_content/native/SelectedDismissibleContent.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import useSelectedDismissibleContent from "../hooks/useSelectedDismissibleContent.tsx";
import closure_2 from "../../../../_runtime/metro/00032__slicedToArray.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
({ Fragment: c3, jsx: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/dismissible_content/native/SelectedDismissibleContent.tsx");

export default function SelectedDismissibleContent(arg0) {
  ({ contentTypes, children, groupName, bypassAutoDismiss } = arg0);
  let obj = useSelectedDismissibleContent;
  const tmp = callback(obj.useSelectedDismissibleContent(contentTypes, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
export const SelectedVersionedDismissibleContent = function SelectedVersionedDismissibleContent(contentType) {
  ({ latestVersion, groupName, bypassAutoDismiss, children } = contentType);
  let obj = useSelectedDismissibleContent;
  const tmp = callback(obj.useSelectedVersionedDismissibleContent(contentType.contentType, latestVersion, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
export const SelectedTimeRecurringDismissibleContent = function SelectedTimeRecurringDismissibleContent(contentType) {
  ({ timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  let obj = useSelectedDismissibleContent;
  const tmp = callback(obj.useSelectedTimeRecurringDismissibleContent(contentType.contentType, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
export const SelectedSnowflakeBoundDismissibleContent = function SelectedSnowflakeBoundDismissibleContent(contentType) {
  ({ newSnowflakeId, groupName, bypassAutoDismiss, children } = contentType);
  let obj = useSelectedDismissibleContent;
  const tmp = callback(obj.useSelectedSnowflakeBoundDismissibleContent(contentType.contentType, newSnowflakeId, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
export const SelectedTimeReccuringSnowflakeBoundDismissibleContent = function SelectedTimeReccuringSnowflakeBoundDismissibleContent(contentType) {
  ({ newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  let obj = useSelectedDismissibleContent;
  const tmp = callback(obj.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType.contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};