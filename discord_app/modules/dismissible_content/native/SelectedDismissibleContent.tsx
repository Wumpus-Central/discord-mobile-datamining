import _slicedToArray from "_slicedToArray";
import "noop";
import jsxProd from "jsxProd";

let c3;
let c4;
const require = arg1;
({ Fragment: c3, jsx: c4 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/dismissible_content/native/SelectedDismissibleContent.tsx");

export default function SelectedDismissibleContent(arg0) {
  let bypassAutoDismiss;
  let children;
  let contentTypes;
  let groupName;
  ({ contentTypes, children, groupName, bypassAutoDismiss } = arg0);
  let obj = require(8451) /* useSelectedDismissibleContent */;
  const tmp = callback(obj.useSelectedDismissibleContent(contentTypes, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
export const SelectedVersionedDismissibleContent = function SelectedVersionedDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let latestVersion;
  ({ latestVersion, groupName, bypassAutoDismiss, children } = contentType);
  let obj = require(8451) /* useSelectedDismissibleContent */;
  const tmp = callback(obj.useSelectedVersionedDismissibleContent(contentType.contentType, latestVersion, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
export const SelectedTimeRecurringDismissibleContent = function SelectedTimeRecurringDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let timeRecurringConfig;
  ({ timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  let obj = require(8451) /* useSelectedDismissibleContent */;
  const tmp = callback(obj.useSelectedTimeRecurringDismissibleContent(contentType.contentType, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
export const SelectedSnowflakeBoundDismissibleContent = function SelectedSnowflakeBoundDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let newSnowflakeId;
  ({ newSnowflakeId, groupName, bypassAutoDismiss, children } = contentType);
  let obj = require(8451) /* useSelectedDismissibleContent */;
  const tmp = callback(obj.useSelectedSnowflakeBoundDismissibleContent(contentType.contentType, newSnowflakeId, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};
export const SelectedTimeReccuringSnowflakeBoundDismissibleContent = function SelectedTimeReccuringSnowflakeBoundDismissibleContent(contentType) {
  let bypassAutoDismiss;
  let children;
  let groupName;
  let newSnowflakeId;
  let timeRecurringConfig;
  ({ newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  let obj = require(8451) /* useSelectedDismissibleContent */;
  const tmp = callback(obj.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType.contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  obj = { children: children(obj) };
  obj = { visibleContent: tmp[0], markAsDismissed: tmp[1] };
  return callback2(closure_3, obj);
};