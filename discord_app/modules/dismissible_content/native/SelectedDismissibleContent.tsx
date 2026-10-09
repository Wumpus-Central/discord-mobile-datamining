// discord_app/modules/dismissible_content/native/SelectedDismissibleContent.tsx
import c from "../../../../_runtime/00576_c.js";
import useSelectedDismissibleContent from "../hooks/useSelectedDismissibleContent.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ Fragment: c3, jsx: closure_4 } = jsxProd);
fn(558);
let ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SelectedDismissibleContent(arg0) {
      const cResult = c.c(9);
      ({ children, groupName, bypassAutoDismiss } = arg0);
      if (cResult[0] === bypassAutoDismiss) {
        if (cResult[1] === groupName) {
          let tmp5 = cResult[2];
        }
        const tmpResult = useSelectedDismissibleContent;
        [tmp8, tmp9] = useSelectedDismissibleContent.useSelectedDismissibleContent(tmp4, tmp5);
        if (cResult[3] === children) {
          if (cResult[4] === tmp9) {
            if (cResult[5] === tmp8) {
              let tmp10 = cResult[6];
            }
            if (cResult[7] !== tmp10) {
              const obj2 = { children: tmp10 };
              const tmp15 = React4(React3, obj2);
              cResult[7] = tmp10;
              cResult[8] = tmp15;
              let tmp12 = tmp15;
            } else {
              tmp12 = cResult[8];
            }
            return tmp12;
          }
        }
        const obj3 = { visibleContent: tmp8, markAsDismissed: tmp9 };
        const childrenResult = children(obj3);
        cResult[3] = children;
        cResult[4] = tmp9;
        cResult[5] = tmp8;
        cResult[6] = childrenResult;
        tmp10 = childrenResult;
        const tmp7 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(tmp4, tmp5), 2);
      }
      const obj4 = { groupName, bypassAutoDismiss };
      cResult[0] = bypassAutoDismiss;
      cResult[1] = groupName;
      cResult[2] = obj4;
      tmp5 = obj4;
    }
  : function SelectedDismissibleContent(arg0) {
      ({ contentTypes, children, groupName, bypassAutoDismiss } = arg0);
      const tmp = _slicedToArray(
        useSelectedDismissibleContent.useSelectedDismissibleContent(contentTypes, { groupName, bypassAutoDismiss }),
        2,
      );
      const obj2 = { children: children({ visibleContent: tmp[0], markAsDismissed: tmp[1] }) };
      return React4(React3, obj2);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SelectedVersionedDismissibleContent(arg0) {
      const cResult = c.c(6);
      ({ contentType, children, latestVersion, groupName, bypassAutoDismiss } = arg0);
      [tmp3, tmp4] = useSelectedDismissibleContent.useSelectedVersionedDismissibleContent(
        contentType,
        latestVersion,
        groupName,
        bypassAutoDismiss,
      );
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
      const tmp2 = _slicedToArray(
        useSelectedDismissibleContent.useSelectedVersionedDismissibleContent(
          contentType,
          latestVersion,
          groupName,
          bypassAutoDismiss,
        ),
        2,
      );
    }
  : function SelectedVersionedDismissibleContent(contentType) {
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
ReactCompilerGating = fn(558);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SelectedTimeRecurringDismissibleContent(arg0) {
      const cResult = c.c(6);
      ({ contentType, children, timeRecurringConfig, groupName, bypassAutoDismiss } = arg0);
      [tmp3, tmp4] = useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent(
        contentType,
        timeRecurringConfig,
        groupName,
        bypassAutoDismiss,
      );
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
      const tmp2 = _slicedToArray(
        useSelectedDismissibleContent.useSelectedTimeRecurringDismissibleContent(
          contentType,
          timeRecurringConfig,
          groupName,
          bypassAutoDismiss,
        ),
        2,
      );
    }
  : function SelectedTimeRecurringDismissibleContent(contentType) {
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
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SelectedSnowflakeBoundDismissibleContent(arg0) {
      const cResult = c.c(6);
      ({ contentType, children, newSnowflakeId, groupName, bypassAutoDismiss } = arg0);
      [tmp3, tmp4] = useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent(
        contentType,
        newSnowflakeId,
        groupName,
        bypassAutoDismiss,
      );
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
      const tmp2 = _slicedToArray(
        useSelectedDismissibleContent.useSelectedSnowflakeBoundDismissibleContent(
          contentType,
          newSnowflakeId,
          groupName,
          bypassAutoDismiss,
        ),
        2,
      );
    }
  : function SelectedSnowflakeBoundDismissibleContent(contentType) {
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/native/SelectedDismissibleContent.tsx");

export default tmp4;
export const SelectedVersionedDismissibleContent = tmp5;
export const SelectedTimeRecurringDismissibleContent = tmp6;
export const SelectedSnowflakeBoundDismissibleContent = tmp7;
export const SelectedTimeReccuringSnowflakeBoundDismissibleContent = ReactCompilerGating.isReactCompilerEnabled()
  ? function SelectedTimeReccuringSnowflakeBoundDismissibleContent(arg0) {
      const cResult = c.c(6);
      ({ contentType, children, newSnowflakeId, timeRecurringConfig, groupName, bypassAutoDismiss } = arg0);
      [tmp3, tmp4] = useSelectedDismissibleContent.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(
        contentType,
        newSnowflakeId,
        timeRecurringConfig,
        groupName,
        bypassAutoDismiss,
      );
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
      const tmp2 = _slicedToArray(
        useSelectedDismissibleContent.useSelectedTimeRecurringSnowflakeBoundDismissibleContent(
          contentType,
          newSnowflakeId,
          timeRecurringConfig,
          groupName,
          bypassAutoDismiss,
        ),
        2,
      );
    }
  : function SelectedTimeReccuringSnowflakeBoundDismissibleContent(contentType) {
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
