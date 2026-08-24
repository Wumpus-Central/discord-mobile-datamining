// === Module 4692: context ===

// Module 4692 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
let context = importAllResult.createContext({ leftDisabled: false, rightDisabled: false, bottomDisabled: false });

export const EdgeInsetApplicationContext = context;
export const useEdgeInsetApplication = function useEdgeInsetApplication(flag, flag2, flag3) {
  let obj = leftDisabled;
  context = leftDisabled.useContext(rightDisabled);
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