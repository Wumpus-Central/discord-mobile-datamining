// === Module 10639: SelectedDismissibleContent ===

// Module 10639 (SelectedDismissibleContent)
import noopAll from "noop" /* 19 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 6260 */;
import closure_2 from "_slicedToArray" /* 32 */;
import jsxProd from "jsxProd" /* 21 */;

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