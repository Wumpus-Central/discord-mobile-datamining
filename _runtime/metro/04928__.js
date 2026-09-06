// === Module 4928: ? ===

// Module 4928
import noop from "module_19" /* 19 */;

let context = noop.createContext({ leftDisabled: false, rightDisabled: false, bottomDisabled: false });

export const EdgeInsetApplicationContext = context;
export const useEdgeInsetApplication = function useEdgeInsetApplication(flag, flag2, flag3) {
  let obj = noop;
  context = noop.useContext(context);
  ({ leftDisabled, rightDisabled, bottomDisabled } = context);
  if (!leftDisabled) {
    leftDisabled = flag;
  }
  if (!rightDisabled) {
    rightDisabled = flag2;
  }
  if (!bottomDisabled) {
    bottomDisabled = flag3;
  }
  const items = [leftDisabled, rightDisabled, bottomDisabled];
  obj = { consumeLeftInset: !leftDisabled, consumeRightInset: !rightDisabled, consumeBottomInset: !bottomDisabled, nextContextValue: obj.useMemo(() => ({ leftDisabled, rightDisabled, bottomDisabled }), items) };
  return obj;
};