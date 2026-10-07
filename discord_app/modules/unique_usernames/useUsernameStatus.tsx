// === Module 14533: useUsernameStatus ===

// Module 14533 (useUsernameStatus)
import c from "c" /* 576 */;
import useUsernameLiveCheck from "useUsernameLiveCheck" /* 14534 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/unique_usernames/useUsernameStatus.tsx");

export const useUsernameStatus = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2, arg3) => {
  closure_0 = arg0;
  const cResult = c.c(5);
  let tmp6;
  if (undefined !== arg3) {
    tmp6 = arg3;
  }
  closure_1 = tmp6;
  const tmp4 = undefined === arg1 || arg1;
  const tmp5 = undefined !== arg2 && arg2;
  const usernameLiveCheck = useUsernameLiveCheck.useUsernameLiveCheck(arg0, tmp4, tmp5);
  const tmpResult = useUsernameLiveCheck;
  closure_3 = _slicedToArray(noop.useState(undefined), 2)[1];
  if (cResult[0] === tmp6) {
    if (cResult[1] === arg0) {
      if (cResult[2] === usernameLiveCheck) {
        let tmp10 = cResult[3];
        let tmp11 = cResult[4];
      }
      const effect = noop.useEffect(tmp10, tmp11);
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
  const tmp8 = _slicedToArray(noop.useState(undefined), 2);
}) : ((arg0) => {
  closure_0 = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  closure_1 = tmp;
  const usernameLiveCheck = useUsernameLiveCheck.useUsernameLiveCheck(arg0, flag, flag2);
  const tmp3 = _slicedToArray(noop.useState(undefined), 2);
  closure_3 = tmp3[1];
  const items = [usernameLiveCheck, arg0, arg3];
  const effect = noop.useEffect(() => {
    if ("" !== closure_0) {
      if (tmp !== closure_1) {
        if (null != usernameLiveCheck) {
          closure_3(tmp3);
        }
      }
    }
    closure_3(undefined);
  }, items);
  return tmp3[0];
});