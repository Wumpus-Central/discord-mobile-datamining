// discord_app/modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx
import react from "../../../../_runtime/00576_react.js";
import useGetDismissibleContent from "../useGetDismissibleContent.tsx";
import useSelectedDismissibleContentShared from "../useSelectedDismissibleContentShared.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let tmp6;
      let tmp7;
      const obj = react;
      const cResult = obj.c(3);
      const tmp4 = undefined !== arg2 && arg2;
      const tmpResult = useGetDismissibleContent;
      [tmp6, tmp7] = tmpResult.useGetDismissibleContent(arg0, arg1);
      _slicedToArray(tmpResult.useGetDismissibleContent(arg0, arg1), 2);
      const tmpResult2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = tmpResult2.useSelectedDismissibleContentShared(tmp6, tmp7, tmp4);
      if (cResult[0] === tmp7) {
        let tmp9;
        if (cResult[1] === tmp6) {
          tmp9 = cResult[2];
        }
        return tmp9;
      }
      const items = [tmp6, tmp7];
      cResult[0] = tmp7;
      cResult[1] = tmp6;
      cResult[2] = items;
      tmp9 = items;
    }
  : (arg0, arg1) => {
      let tmp2;
      let tmp3;
      let flag = arg2;
      if (arg2 === undefined) {
        flag = false;
      }
      const obj = useGetDismissibleContent;
      [tmp2, tmp3] = obj.useGetDismissibleContent(arg0, arg1);
      _slicedToArray(obj.useGetDismissibleContent(arg0, arg1), 2);
      const obj2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
      const items = [tmp2, tmp3];
      return items;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3) => {
      let tmp6;
      let tmp7;
      const obj = react;
      const cResult = obj.c(3);
      const tmp4 = undefined !== arg3 && arg3;
      const tmpResult = useGetDismissibleContent;
      [tmp6, tmp7] = tmpResult.useGetSingleUseGuildDismissibleContent_UNSAFE(arg0, arg1, arg2);
      _slicedToArray(tmpResult.useGetSingleUseGuildDismissibleContent_UNSAFE(arg0, arg1, arg2), 2);
      const tmpResult2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = tmpResult2.useSelectedDismissibleContentShared(tmp6, tmp7, tmp4, arg1);
      if (cResult[0] === tmp7) {
        let tmp9;
        if (cResult[1] === tmp6) {
          tmp9 = cResult[2];
        }
        return tmp9;
      }
      const items = [tmp6, tmp7];
      cResult[0] = tmp7;
      cResult[1] = tmp6;
      cResult[2] = items;
      tmp9 = items;
    }
  : (arg0, arg1, arg2) => {
      let tmp2;
      let tmp3;
      let flag = arg3;
      if (arg3 === undefined) {
        flag = false;
      }
      const obj = useGetDismissibleContent;
      [tmp2, tmp3] = obj.useGetSingleUseGuildDismissibleContent_UNSAFE(arg0, arg1, arg2);
      _slicedToArray(obj.useGetSingleUseGuildDismissibleContent_UNSAFE(arg0, arg1, arg2), 2);
      const obj2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag, arg1);
      const items = [tmp2, tmp3];
      return items;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3) => {
      let tmp6;
      let tmp7;
      const obj = react;
      const cResult = obj.c(3);
      const tmp4 = undefined !== arg3 && arg3;
      const tmpResult = useGetDismissibleContent;
      [tmp6, tmp7] = tmpResult.useGetVersionedDismissibleContent(arg0, arg1, arg2);
      _slicedToArray(tmpResult.useGetVersionedDismissibleContent(arg0, arg1, arg2), 2);
      const tmpResult2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = tmpResult2.useSelectedDismissibleContentShared(tmp6, tmp7, tmp4);
      if (cResult[0] === tmp7) {
        let tmp9;
        if (cResult[1] === tmp6) {
          tmp9 = cResult[2];
        }
        return tmp9;
      }
      const items = [tmp6, tmp7];
      cResult[0] = tmp7;
      cResult[1] = tmp6;
      cResult[2] = items;
      tmp9 = items;
    }
  : (arg0, arg1, arg2) => {
      let tmp2;
      let tmp3;
      let flag = arg3;
      if (arg3 === undefined) {
        flag = false;
      }
      const obj = useGetDismissibleContent;
      [tmp2, tmp3] = obj.useGetVersionedDismissibleContent(arg0, arg1, arg2);
      _slicedToArray(obj.useGetVersionedDismissibleContent(arg0, arg1, arg2), 2);
      const obj2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
      const items = [tmp2, tmp3];
      return items;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3) => {
      let tmp6;
      let tmp7;
      const obj = react;
      const cResult = obj.c(3);
      const tmp4 = undefined !== arg3 && arg3;
      const tmpResult = useGetDismissibleContent;
      [tmp6, tmp7] = tmpResult.useGetTimeRecurringDismissibleContent(arg0, arg1, arg2);
      _slicedToArray(tmpResult.useGetTimeRecurringDismissibleContent(arg0, arg1, arg2), 2);
      const tmpResult2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = tmpResult2.useSelectedDismissibleContentShared(tmp6, tmp7, tmp4);
      if (cResult[0] === tmp7) {
        let tmp9;
        if (cResult[1] === tmp6) {
          tmp9 = cResult[2];
        }
        return tmp9;
      }
      const items = [tmp6, tmp7];
      cResult[0] = tmp7;
      cResult[1] = tmp6;
      cResult[2] = items;
      tmp9 = items;
    }
  : (arg0, arg1, arg2) => {
      let tmp2;
      let tmp3;
      let flag = arg3;
      if (arg3 === undefined) {
        flag = false;
      }
      const obj = useGetDismissibleContent;
      [tmp2, tmp3] = obj.useGetTimeRecurringDismissibleContent(arg0, arg1, arg2);
      _slicedToArray(obj.useGetTimeRecurringDismissibleContent(arg0, arg1, arg2), 2);
      const obj2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
      const items = [tmp2, tmp3];
      return items;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3) => {
      let tmp6;
      let tmp7;
      const obj = react;
      const cResult = obj.c(3);
      const tmp4 = undefined !== arg3 && arg3;
      const tmpResult = useGetDismissibleContent;
      [tmp6, tmp7] = tmpResult.useGetSnowflakeBoundDismissibleContent(arg0, arg1, arg2);
      _slicedToArray(tmpResult.useGetSnowflakeBoundDismissibleContent(arg0, arg1, arg2), 2);
      const tmpResult2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = tmpResult2.useSelectedDismissibleContentShared(tmp6, tmp7, tmp4);
      if (cResult[0] === tmp7) {
        let tmp9;
        if (cResult[1] === tmp6) {
          tmp9 = cResult[2];
        }
        return tmp9;
      }
      const items = [tmp6, tmp7];
      cResult[0] = tmp7;
      cResult[1] = tmp6;
      cResult[2] = items;
      tmp9 = items;
    }
  : (arg0, arg1, arg2) => {
      let tmp2;
      let tmp3;
      let flag = arg3;
      if (arg3 === undefined) {
        flag = false;
      }
      const obj = useGetDismissibleContent;
      [tmp2, tmp3] = obj.useGetSnowflakeBoundDismissibleContent(arg0, arg1, arg2);
      _slicedToArray(obj.useGetSnowflakeBoundDismissibleContent(arg0, arg1, arg2), 2);
      const obj2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
      const items = [tmp2, tmp3];
      return items;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3, arg4) => {
      let tmp6;
      let tmp7;
      const obj = react;
      const cResult = obj.c(3);
      const tmp4 = undefined !== arg4 && arg4;
      const tmpResult = useGetDismissibleContent;
      [tmp6, tmp7] = tmpResult.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(arg0, arg2, arg1, arg3);
      _slicedToArray(tmpResult.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(arg0, arg2, arg1, arg3), 2);
      const tmpResult2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = tmpResult2.useSelectedDismissibleContentShared(tmp6, tmp7, tmp4, arg1);
      if (cResult[0] === tmp7) {
        let tmp9;
        if (cResult[1] === tmp6) {
          tmp9 = cResult[2];
        }
        return tmp9;
      }
      const items = [tmp6, tmp7];
      cResult[0] = tmp7;
      cResult[1] = tmp6;
      cResult[2] = items;
      tmp9 = items;
    }
  : (arg0, arg1, arg2, arg3) => {
      let tmp2;
      let tmp3;
      let flag = arg4;
      if (arg4 === undefined) {
        flag = false;
      }
      const obj = useGetDismissibleContent;
      [tmp2, tmp3] = obj.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(arg0, arg2, arg1, arg3);
      _slicedToArray(obj.useGetSnowflakeBoundGuildDismissibleContent_UNSAFE(arg0, arg2, arg1, arg3), 2);
      const obj2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag, arg1);
      const items = [tmp2, tmp3];
      return items;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3, arg4) => {
      let tmp6;
      let tmp7;
      const obj = react;
      const cResult = obj.c(3);
      const tmp4 = undefined !== arg4 && arg4;
      const tmpResult = useGetDismissibleContent;
      [tmp6, tmp7] = tmpResult.useGetTimeRecurringSnowflakeBoundDismissibleContent(arg0, arg2, arg1, arg3);
      _slicedToArray(tmpResult.useGetTimeRecurringSnowflakeBoundDismissibleContent(arg0, arg2, arg1, arg3), 2);
      const tmpResult2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = tmpResult2.useSelectedDismissibleContentShared(tmp6, tmp7, tmp4);
      if (cResult[0] === tmp7) {
        let tmp9;
        if (cResult[1] === tmp6) {
          tmp9 = cResult[2];
        }
        return tmp9;
      }
      const items = [tmp6, tmp7];
      cResult[0] = tmp7;
      cResult[1] = tmp6;
      cResult[2] = items;
      tmp9 = items;
    }
  : (arg0, arg1, arg2, arg3) => {
      let tmp2;
      let tmp3;
      let flag = arg4;
      if (arg4 === undefined) {
        flag = false;
      }
      const obj = useGetDismissibleContent;
      [tmp2, tmp3] = obj.useGetTimeRecurringSnowflakeBoundDismissibleContent(arg0, arg2, arg1, arg3);
      _slicedToArray(obj.useGetTimeRecurringSnowflakeBoundDismissibleContent(arg0, arg2, arg1, arg3), 2);
      const obj2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, flag);
      const items = [tmp2, tmp3];
      return items;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3) => {
      let tmp3;
      let tmp4;
      const obj = react;
      const cResult = obj.c(3);
      const obj2 = useGetDismissibleContent;
      [tmp3, tmp4] = obj2.useGetTimeRecurringGuildDismissibleContent_UNSAFE(arg0, arg1, arg2, arg3);
      _slicedToArray(obj2.useGetTimeRecurringGuildDismissibleContent_UNSAFE(arg0, arg1, arg2, arg3), 2);
      const obj3 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = obj3.useSelectedDismissibleContentShared(tmp3, tmp4, false, arg1);
      if (cResult[0] === tmp4) {
        let tmp6;
        if (cResult[1] === tmp3) {
          tmp6 = cResult[2];
        }
        return tmp6;
      }
      const items = [tmp3, tmp4];
      cResult[0] = tmp4;
      cResult[1] = tmp3;
      cResult[2] = items;
      tmp6 = items;
    }
  : (arg0, arg1, arg2, arg3) => {
      let tmp2;
      let tmp3;
      const obj = useGetDismissibleContent;
      [tmp2, tmp3] = obj.useGetTimeRecurringGuildDismissibleContent_UNSAFE(arg0, arg1, arg2, arg3);
      _slicedToArray(obj.useGetTimeRecurringGuildDismissibleContent_UNSAFE(arg0, arg1, arg2, arg3), 2);
      const obj2 = useSelectedDismissibleContentShared;
      const selectedDismissibleContentShared = obj2.useSelectedDismissibleContentShared(tmp2, tmp3, false, arg1);
      const items = [tmp2, tmp3];
      return items;
    };
const result = size.fileFinishedImporting("modules/dismissible_content/hooks/useSelectedDismissibleContent.tsx");

export const useSelectedDismissibleContent = tmp2;
export const useSelectedSingleUseGuildDismissibleContent = tmp3;
export const useSelectedVersionedDismissibleContent = tmp4;
export const useSelectedTimeRecurringDismissibleContent = tmp5;
export const useSelectedSnowflakeBoundDismissibleContent = tmp6;
export const useSelectedSnowflakeBoundGuildDismissibleContent = tmp7;
export const useSelectedTimeRecurringSnowflakeBoundDismissibleContent = tmp8;
export const useSelectedTimeRecurringGuildDismissibleContent = tmp9;
