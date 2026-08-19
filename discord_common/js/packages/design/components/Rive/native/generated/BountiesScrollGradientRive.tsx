// discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx
import BaseRive from "../BaseRive.tsx";
import getDerivedStateFromError from "../RiveErrorBoundary.tsx";
import metadataDefault from "../../../../../../../../discord_assets/assets/mana/rive/native/BountiesScrollGradient.riv.js";
import _objectWithoutProperties from "../../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import importAllResult from "../../../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
let closure_6 = { "Bounty Scroll Gradient": {} };
let closure_7 = { "Bounty Scroll Gradient": [] };
let closure_8 = importAllResult.forwardRef(function BountiesScrollGradientRiveInner(defaultViewModelInstance, ref) {
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
  const tmp2 = callback(defaultViewModelInstance, closure_3);
  const merged = Object.assign(tmp2);
  return jsx(BaseRive.BaseRive, { ref, src: metadataDefault, artboard: str, artboardProperties: closure_6, artboardViewModelInstances: closure_7, defaultViewModelInstance: tmp, stateMachine: defaultViewModelInstance.stateMachine });
});
const forwardRefResult = importAllResult.forwardRef(function BountiesScrollGradientRiveWithBoundary(fallback, ref) {
  const obj = { ref };
  const merged = Object.assign(fallback);
  obj[1] = <closure_8 ref={ref} />;
  return jsx(getDerivedStateFromError.RiveErrorBoundary, { ref });
});
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx");

export const BountiesScrollGradientRive = forwardRefResult;