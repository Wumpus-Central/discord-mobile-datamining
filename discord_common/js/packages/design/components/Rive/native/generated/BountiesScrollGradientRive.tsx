import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
let closure_6 = { "Bounty Scroll Gradient": {} };
let closure_7 = { "Bounty Scroll Gradient": [] };
let closure_8 = importAllResult.forwardRef(function BountiesScrollGradientRiveInner(defaultViewModelInstance, ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = defaultViewModelInstance);
  let str = "Bounty Scroll Gradient";
  if (undefined !== artboard) {
    str = artboard;
  }
  defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
  let tmp;
  if (undefined !== defaultViewModelInstance) {
    tmp = defaultViewModelInstance;
  }
  const obj = { ref, src: null, artboard: null, artboardProperties: null, artboardViewModelInstances: null, defaultViewModelInstance: null, stateMachine: null };
  obj[1] = importDefault(3975);
  obj[2] = str;
  obj[3] = closure_6;
  obj[4] = closure_7;
  obj[5] = tmp;
  obj[6] = defaultViewModelInstance.stateMachine;
  const merged = Object.assign(callback(defaultViewModelInstance, closure_3));
  return jsx(require(3922) /* BaseRive */.BaseRive, { ref, src: null, artboard: null, artboardProperties: null, artboardViewModelInstances: null, defaultViewModelInstance: null, stateMachine: null });
});
const forwardRefResult = importAllResult.forwardRef(function BountiesScrollGradientRiveWithBoundary(fallback, ref) {
  let obj = { fallback: fallback.fallback, children: null };
  obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_8 ref={arg1} />;
  return jsx(require(3973) /* getDerivedStateFromError */.RiveErrorBoundary, { ref });
});
const result = require("jsxProd").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx");

export const BountiesScrollGradientRive = forwardRefResult;