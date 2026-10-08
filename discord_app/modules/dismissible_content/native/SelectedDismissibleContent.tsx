// === Module 9964: SelectedDismissibleContent ===

// Module 9964 (SelectedDismissibleContent)
import c from "c" /* 576 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7090 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ Fragment: c3, jsx: closure_4 } = jsxProd);
fn(558);
let ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelectedDismissibleContent(arg0) {
  const cResult = c.c(6);
  ({ children, contentTypes, groupName, bypassAutoDismiss } = arg0);
  [tmp3, tmp4] = useSelectedDismissibleContent.useSelectedDismissibleContent(contentTypes, groupName, bypassAutoDismiss);
  if (cResult[0] === children) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp3) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj3 = { children: tmp5 };
        const tmp10 = React4(React3, obj3);
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const childrenResult = children({ visibleContent: tmp3, markAsDismissed: tmp4 });
  cResult[0] = children;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = childrenResult;
  tmp5 = childrenResult;
  const tmp2 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(contentTypes, groupName, bypassAutoDismiss), 2);
}) : (function SelectedDismissibleContent(arg0) {
  ({ contentTypes, children, groupName, bypassAutoDismiss } = arg0);
  const tmp = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(contentTypes, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children({ visibleContent: tmp[0], markAsDismissed: tmp[1] }) };
  return React4(React3, obj2);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelectedVersionedDismissibleContent(arg0) {
  const cResult = c.c(6);
  ({ contentType, children, latestVersion, groupName, bypassAutoDismiss } = arg0);
  [tmp3, tmp4] = useSelectedDismissibleContent.useSelectedVersionedDismissibleContent(contentType, latestVersion, groupName, bypassAutoDismiss);
  if (cResult[0] === children) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp3) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj3 = { children: tmp5 };
        const tmp10 = React4(React3, obj3);
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const childrenResult = children({ visibleContent: tmp3, markAsDismissed: tmp4 });
  cResult[0] = children;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = childrenResult;
  tmp5 = childrenResult;
  const tmp2 = _slicedToArray(useSelectedDismissibleContent.useSelectedVersionedDismissibleContent(contentType, latestVersion, groupName, bypassAutoDismiss), 2);
}) : (function SelectedVersionedDismissibleContent(contentType) {
  ({ latestVersion, groupName, bypassAutoDismiss, children } = contentType);
  const tmp = _slicedToArray(useSelectedDismissibleContent.useSelectedVersionedDismissibleContent(contentType.contentType, latestVersion, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children({ visibleContent: tmp[0], markAsDismissed: tmp[1] }) };
  return React4(React3, obj2);
});
ReactCompilerGating = fn(558);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelectedTimeRecurringDismissibleContent(arg0) {
  const cResult = c.c(6);
  ({ contentType, children, timeRecurringConfig, groupName, bypassAutoDismiss } = arg0);
  [tmp3, tmp4] = useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent(contentType, timeRecurringConfig, groupName, bypassAutoDismiss);
  if (cResult[0] === children) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp3) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj3 = { children: tmp5 };
        const tmp10 = React4(React3, obj3);
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const childrenResult = children({ visibleContent: tmp3, markAsDismissed: tmp4 });
  cResult[0] = children;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = childrenResult;
  tmp5 = childrenResult;
  const tmp2 = _slicedToArray(useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent(contentType, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
}) : (function SelectedTimeRecurringDismissibleContent(contentType) {
  ({ timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  const tmp = _slicedToArray(useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent(contentType.contentType, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children({ visibleContent: tmp[0], markAsDismissed: tmp[1] }) };
  return React4(React3, obj2);
});
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function SelectedSnowflakeBoundDismissibleContent(arg0) {
  const cResult = c.c(6);
  ({ contentType, children, newSnowflakeId, groupName, bypassAutoDismiss } = arg0);
  [tmp3, tmp4] = useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, groupName, bypassAutoDismiss);
  if (cResult[0] === children) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp3) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj3 = { children: tmp5 };
        const tmp10 = React4(React3, obj3);
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const childrenResult = children({ visibleContent: tmp3, markAsDismissed: tmp4 });
  cResult[0] = children;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = childrenResult;
  tmp5 = childrenResult;
  const tmp2 = _slicedToArray(useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, groupName, bypassAutoDismiss), 2);
}) : (function SelectedSnowflakeBoundDismissibleContent(contentType) {
  ({ newSnowflakeId, groupName, bypassAutoDismiss, children } = contentType);
  const tmp = _slicedToArray(useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent(contentType.contentType, newSnowflakeId, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children({ visibleContent: tmp[0], markAsDismissed: tmp[1] }) };
  return React4(React3, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/native/SelectedDismissibleContent.tsx");

export default tmp4;
export const SelectedVersionedDismissibleContent = tmp5;
export const SelectedTimeRecurringDismissibleContent = tmp6;
export const SelectedSnowflakeBoundDismissibleContent = tmp7;
export const SelectedTimeReccuringSnowflakeBoundDismissibleContent = ReactCompilerGating.isReactCompilerEnabled() ? (function SelectedTimeReccuringSnowflakeBoundDismissibleContent(arg0) {
  const cResult = c.c(6);
  ({ contentType, children, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss } = arg0);
  [tmp3, tmp4] = useSelectedDismissibleContent.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss);
  if (cResult[0] === children) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp3) {
        let tmp5 = cResult[3];
      }
      if (cResult[4] !== tmp5) {
        const obj3 = { children: tmp5 };
        const tmp10 = React4(React3, obj3);
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        let tmp7 = tmp10;
      } else {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const childrenResult = children({ visibleContent: tmp3, markAsDismissed: tmp4 });
  cResult[0] = children;
  cResult[1] = tmp4;
  cResult[2] = tmp3;
  cResult[3] = childrenResult;
  tmp5 = childrenResult;
  const tmp2 = _slicedToArray(useSelectedDismissibleContent.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
}) : (function SelectedTimeReccuringSnowflakeBoundDismissibleContent(contentType) {
  ({ newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss, children } = contentType);
  const tmp = _slicedToArray(useSelectedDismissibleContent.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(contentType.contentType, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss), 2);
  const obj2 = { children: children({ visibleContent: tmp[0], markAsDismissed: tmp[1] }) };
  return React4(React3, obj2);
});