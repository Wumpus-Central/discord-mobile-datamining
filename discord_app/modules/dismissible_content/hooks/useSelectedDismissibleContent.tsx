// === Module 7099: useSelectedDismissibleContent ===

// Module 7099 (useSelectedDismissibleContent)
import c from "c" /* 576 */;
import useGetDismissibleContent from "useGetDismissibleContent" /* 7100 */;
import useSelectedDismissibleContentShared from "useSelectedDismissibleContentShared" /* 7102 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedDismissibleContent(arg0, arg1) {
  const cResult = c.c(5);
  if (cResult[0] !== arg1) {
    let obj2 = arg1;
    if (undefined === arg1) {
      obj2 = {};
    }
    cResult[0] = arg1;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const bypassAutoDismiss = tmp4.bypassAutoDismiss;
  let tmp5 = undefined !== bypassAutoDismiss;
  if (tmp5) {
    tmp5 = bypassAutoDismiss;
  }
  const tmpResult = useGetDismissibleContent;
  [tmp7, tmp8] = useGetDismissibleContent.useGetDismissibleContent(arg0, tmp4.groupName);
  const tmp6 = _slicedToArray(useGetDismissibleContent.useGetDismissibleContent(arg0, tmp4.groupName), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp7, tmp8, tmp5);
  if (cResult[2] === tmp8) {
    if (cResult[3] === tmp7) {
      let tmp10 = cResult[4];
    }
    return tmp10;
  }
  const items = [tmp7, tmp8];
  cResult[2] = tmp8;
  cResult[3] = tmp7;
  cResult[4] = items;
  tmp10 = items;
  const tmpResult2 = useSelectedDismissibleContentShared;
}) : (function useSelectedDismissibleContent(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  ({ bypassAutoDismiss, groupName } = obj);
  if (bypassAutoDismiss === undefined) {
    bypassAutoDismiss = false;
  }
  [tmp2, tmp3] = useGetDismissibleContent.useGetDismissibleContent(arg0, groupName);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetDismissibleContent(arg0, groupName), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, bypassAutoDismiss);
  const items = [tmp2, tmp3];
  return items;
});
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedSingleUseGuildDismissibleContent(arg0, arg1, arg2, arg3) {
  const cResult = c.c(3);
  const tmp4 = undefined !== arg3 && arg3;
  const tmpResult = useGetDismissibleContent;
  [tmp6, tmp7] = useGetDismissibleContent.useGetSingleUseGuildDismissibleContent_UNSAFE(arg0, arg1, arg2);
  const tmp5 = _slicedToArray(useGetDismissibleContent.useGetSingleUseGuildDismissibleContent_UNSAFE(arg0, arg1, arg2), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp6, tmp7, tmp4, arg1);
  if (cResult[0] === tmp7) {
    if (cResult[1] === tmp6) {
      let tmp9 = cResult[2];
    }
    return tmp9;
  }
  const items = [tmp6, tmp7];
  cResult[0] = tmp7;
  cResult[1] = tmp6;
  cResult[2] = items;
  tmp9 = items;
  const tmpResult2 = useSelectedDismissibleContentShared;
}) : (function useSelectedSingleUseGuildDismissibleContent(arg0, arg1, arg2) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = useGetDismissibleContent.useGetSingleUseGuildDismissibleContent_UNSAFE(arg0, arg1, arg2);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetSingleUseGuildDismissibleContent_UNSAFE(arg0, arg1, arg2), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag, arg1);
  const items = [tmp2, tmp3];
  return items;
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedVersionedDismissibleContent(arg0, arg1, arg2, arg3) {
  const cResult = c.c(3);
  const tmp4 = undefined !== arg3 && arg3;
  const tmpResult = useGetDismissibleContent;
  [tmp6, tmp7] = useGetDismissibleContent.useGetVersionedDismissibleContent(arg0, arg1, arg2);
  const tmp5 = _slicedToArray(useGetDismissibleContent.useGetVersionedDismissibleContent(arg0, arg1, arg2), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp6, tmp7, tmp4);
  if (cResult[0] === tmp7) {
    if (cResult[1] === tmp6) {
      let tmp9 = cResult[2];
    }
    return tmp9;
  }
  const items = [tmp6, tmp7];
  cResult[0] = tmp7;
  cResult[1] = tmp6;
  cResult[2] = items;
  tmp9 = items;
  const tmpResult2 = useSelectedDismissibleContentShared;
}) : (function useSelectedVersionedDismissibleContent(arg0, arg1, arg2) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = useGetDismissibleContent.useGetVersionedDismissibleContent(arg0, arg1, arg2);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetVersionedDismissibleContent(arg0, arg1, arg2), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedTimeRecurringDismissibleContent(arg0, arg1, arg2, arg3) {
  const cResult = c.c(3);
  const tmp4 = undefined !== arg3 && arg3;
  const tmpResult = useGetDismissibleContent;
  [tmp6, tmp7] = useGetDismissibleContent.useGetTimeRecurringDismissibleContent(arg0, arg1, arg2);
  const tmp5 = _slicedToArray(useGetDismissibleContent.useGetTimeRecurringDismissibleContent(arg0, arg1, arg2), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp6, tmp7, tmp4);
  if (cResult[0] === tmp7) {
    if (cResult[1] === tmp6) {
      let tmp9 = cResult[2];
    }
    return tmp9;
  }
  const items = [tmp6, tmp7];
  cResult[0] = tmp7;
  cResult[1] = tmp6;
  cResult[2] = items;
  tmp9 = items;
  const tmpResult2 = useSelectedDismissibleContentShared;
}) : (function useSelectedTimeRecurringDismissibleContent(arg0, arg1, arg2) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = useGetDismissibleContent.useGetTimeRecurringDismissibleContent(arg0, arg1, arg2);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetTimeRecurringDismissibleContent(arg0, arg1, arg2), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedSnowflakeBoundDismissibleContent(arg0, arg1, arg2, arg3) {
  const cResult = c.c(3);
  const tmp4 = undefined !== arg3 && arg3;
  const tmpResult = useGetDismissibleContent;
  [tmp6, tmp7] = useGetDismissibleContent.useGetSnowflakeBoundDismissibleContent(arg0, arg1, arg2);
  const tmp5 = _slicedToArray(useGetDismissibleContent.useGetSnowflakeBoundDismissibleContent(arg0, arg1, arg2), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp6, tmp7, tmp4);
  if (cResult[0] === tmp7) {
    if (cResult[1] === tmp6) {
      let tmp9 = cResult[2];
    }
    return tmp9;
  }
  const items = [tmp6, tmp7];
  cResult[0] = tmp7;
  cResult[1] = tmp6;
  cResult[2] = items;
  tmp9 = items;
  const tmpResult2 = useSelectedDismissibleContentShared;
}) : (function useSelectedSnowflakeBoundDismissibleContent(arg0, arg1, arg2) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = useGetDismissibleContent.useGetSnowflakeBoundDismissibleContent(arg0, arg1, arg2);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetSnowflakeBoundDismissibleContent(arg0, arg1, arg2), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
});
ReactCompilerGating = fn(558);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedSnowflakeBoundGuildDismissibleContent(arg0, arg1, arg2, arg3, arg4) {
  const cResult = c.c(3);
  const tmp4 = undefined !== arg4 && arg4;
  const tmpResult = useGetDismissibleContent;
  [tmp6, tmp7] = useGetDismissibleContent.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(arg0, arg2, arg1, arg3);
  const tmp5 = _slicedToArray(useGetDismissibleContent.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(arg0, arg2, arg1, arg3), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp6, tmp7, tmp4, arg1);
  if (cResult[0] === tmp7) {
    if (cResult[1] === tmp6) {
      let tmp9 = cResult[2];
    }
    return tmp9;
  }
  const items = [tmp6, tmp7];
  cResult[0] = tmp7;
  cResult[1] = tmp6;
  cResult[2] = items;
  tmp9 = items;
  const tmpResult2 = useSelectedDismissibleContentShared;
}) : (function useSelectedSnowflakeBoundGuildDismissibleContent(arg0, arg1, arg2, arg3) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = useGetDismissibleContent.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(arg0, arg2, arg1, arg3);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(arg0, arg2, arg1, arg3), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag, arg1);
  const items = [tmp2, tmp3];
  return items;
});
ReactCompilerGating = fn(558);
const tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedTimeRecurringSnowflakeBoundDismissibleContent(arg0, arg1, arg2, arg3, arg4) {
  const cResult = c.c(3);
  const tmp4 = undefined !== arg4 && arg4;
  const tmpResult = useGetDismissibleContent;
  [tmp6, tmp7] = useGetDismissibleContent.useGetTimeRecurringSnowflakeBoundDismissibleContent(arg0, arg2, arg1, arg3);
  const tmp5 = _slicedToArray(useGetDismissibleContent.useGetTimeRecurringSnowflakeBoundDismissibleContent(arg0, arg2, arg1, arg3), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp6, tmp7, tmp4);
  if (cResult[0] === tmp7) {
    if (cResult[1] === tmp6) {
      let tmp9 = cResult[2];
    }
    return tmp9;
  }
  const items = [tmp6, tmp7];
  cResult[0] = tmp7;
  cResult[1] = tmp6;
  cResult[2] = items;
  tmp9 = items;
  const tmpResult2 = useSelectedDismissibleContentShared;
}) : (function useSelectedTimeRecurringSnowflakeBoundDismissibleContent(arg0, arg1, arg2, arg3) {
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  [tmp2, tmp3] = useGetDismissibleContent.useGetTimeRecurringSnowflakeBoundDismissibleContent(arg0, arg2, arg1, arg3);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetTimeRecurringSnowflakeBoundDismissibleContent(arg0, arg2, arg1, arg3), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
  const items = [tmp2, tmp3];
  return items;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx");

export const useSelectedDismissibleContent = tmp2;
export const useSelectedSingleUseGuildDismissibleContent = tmp3;
export const useSelectedVersionedDismissibleContent = tmp4;
export const useSelectedTimeRecurringDismissibleContent = tmp5;
export const useSelectedSnowflakeBoundDismissibleContent = tmp6;
export const useSelectedSnowflakeBoundGuildDismissibleContent = tmp7;
export const useSelectedTimeRecurringSnowflakeBoundDismissibleContent = tmp8;
export const useSelectedTimeRecurringGuildDismissibleContent = ReactCompilerGating.isReactCompilerEnabled() ? (function useSelectedTimeRecurringGuildDismissibleContent(arg0, arg1, arg2, arg3) {
  const cResult = c.c(3);
  [tmp3, tmp4] = useGetDismissibleContent.useGetTimeRecurringGuildDismissibleContent_UNSAFE(arg0, arg1, arg2, arg3);
  const tmp2 = _slicedToArray(useGetDismissibleContent.useGetTimeRecurringGuildDismissibleContent_UNSAFE(arg0, arg1, arg2, arg3), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp3, tmp4, false, arg1);
  if (cResult[0] === tmp4) {
    if (cResult[1] === tmp3) {
      let tmp6 = cResult[2];
    }
    return tmp6;
  }
  const items = [tmp3, tmp4];
  cResult[0] = tmp4;
  cResult[1] = tmp3;
  cResult[2] = items;
  tmp6 = items;
}) : (function useSelectedTimeRecurringGuildDismissibleContent(arg0, arg1, arg2, arg3) {
  [tmp2, tmp3] = useGetDismissibleContent.useGetTimeRecurringGuildDismissibleContent_UNSAFE(arg0, arg1, arg2, arg3);
  const tmp = _slicedToArray(useGetDismissibleContent.useGetTimeRecurringGuildDismissibleContent_UNSAFE(arg0, arg1, arg2, arg3), 2);
  const selectedDismissibleContentShared = useSelectedDismissibleContentShared.useSelectedDismissibleContentShared(tmp2, tmp3, false, arg1);
  const items = [tmp2, tmp3];
  return items;
});