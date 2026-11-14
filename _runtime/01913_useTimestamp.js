// _runtime/01913_useTimestamp.js
import _mod19 from "metro/00019__.js";
import _mod1894 from "metro/01894__.js";
import _mod1908 from "metro/01908__.js";

const useEffect = _mod19.useEffect;
let closure_3 = {
  code: "(function pnpm_useTimestampTs1({timeSinceFirstFrame:timeSinceFirstFrame}){let[timestamp]=this.__closure;timestamp.value=timeSinceFirstFrame;})",
};

export function useTimestamp() {
  if (flag === undefined) {
    flag = true;
  }
  const sharedValue = _mod1894.useSharedValue(0);
  items = [closure_3, sharedValue];
  c0 = undefined;
  [tmp2, tmp3] = items;
  function pnpm_useTimestampTs1(timeSinceFirstFrame) {
    c0.value = timeSinceFirstFrame.timeSinceFirstFrame;
  }
  const items1 = [tmp3];
  pnpm_useTimestampTs1.__closure = items1;
  pnpm_useTimestampTs1.__workletHash = 17202738437951;
  pnpm_useTimestampTs1.__initData = tmp2;
  const frameCallback = _mod1908.useFrameCallback(pnpm_useTimestampTs1, flag);
  const items2 = [flag, frameCallback];
  useEffect(() => {
    frameCallback.setActive(c0);
  }, items2);
  return sharedValue;
}
