// discord_app/modules/unique_usernames/useUsernameStatus.tsx
import react2 from "../../../_runtime/00576_react.js";
import useUsernameLiveCheck from "useUsernameLiveCheck.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2, arg3) => {
      let closure_0 = arg0;
      const obj = react2;
      const cResult = obj.c(5);
      let tmp6;
      const tmp4 = undefined === arg1 || arg1;
      const tmp5 = undefined !== arg2 && arg2;
      if (undefined !== arg3) {
        tmp6 = arg3;
      }
      let closure_1 = tmp6;
      const tmpResult = useUsernameLiveCheck;
      const usernameLiveCheck = tmpResult.useUsernameLiveCheck(arg0, tmp4, tmp5);
      let closure_3 = _slicedToArray(react.useState(undefined), 2)[1];
      _slicedToArray(react.useState(undefined), 2);
      if (cResult[0] === tmp6) {
        if (cResult[1] === arg0) {
          let tmp10;
          let tmp11;
          if (cResult[2] === usernameLiveCheck) {
            tmp10 = cResult[3];
            tmp11 = cResult[4];
          }
          const effect = react.useEffect(tmp10, tmp11);
          return tmp9;
        }
      }
      const fn = function l() {
        if ("" !== closure_0) {
          if (tmp !== closure_1) {
            if (null != usernameLiveCheck) {
              closure_3(tmp3);
            }
          }
        }
        closure_3(undefined);
      };
      const items = [usernameLiveCheck, arg0, tmp6];
      cResult[0] = tmp6;
      cResult[1] = arg0;
      cResult[2] = usernameLiveCheck;
      cResult[3] = fn;
      cResult[4] = items;
      tmp11 = items;
      tmp10 = fn;
    }
  : (arg0) => {
      let closure_3;
      let first;
      let closure_0 = arg0;
      let flag = arg1;
      if (arg1 === undefined) {
        flag = true;
      }
      let flag2 = arg2;
      if (arg2 === undefined) {
        flag2 = false;
      }
      const tmp = arg3;
      let closure_1 = tmp;
      closure_3 = undefined;
      const obj = useUsernameLiveCheck;
      const usernameLiveCheck = obj.useUsernameLiveCheck(arg0, flag, flag2);
      [first, closure_3] = react.useState(undefined);
      const items = [usernameLiveCheck, arg0, tmp];
      const effect = react.useEffect(() => {
        if ("" !== closure_0) {
          if (tmp !== closure_1) {
            if (null != usernameLiveCheck) {
              closure_3(tmp3);
            }
          }
        }
        closure_3(undefined);
      }, items);
      return first;
    };
const result = size.fileFinishedImporting("modules/unique_usernames/useUsernameStatus.tsx");

export const useUsernameStatus = tmp2;
