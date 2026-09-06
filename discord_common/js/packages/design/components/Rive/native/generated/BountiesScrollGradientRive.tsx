// discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx
import BaseRive from "../BaseRive.tsx";
import RiveErrorBoundary from "../RiveErrorBoundary.tsx";
import _modDef4349 from "../../../../../../../../discord_assets/assets/mana/rive/native/BountiesScrollGradient.riv.js";
import _objectWithoutProperties from "../../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
const jsx = fn(21).jsx;
const artboardProperties = { "Bounty Scroll Gradient": {} };
const artboardViewModelInstances = { "Bounty Scroll Gradient": [] };
let closure_8 = noop.forwardRef(function BountiesScrollGradientRiveInner(defaultViewModelInstance, ref) {
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
  const tmp2 = _objectWithoutProperties(defaultViewModelInstance, closure_3);
  const merged = Object.assign(tmp2);
  return jsx(BaseRive.BaseRive, {
    ref,
    src: _modDef4349,
    artboard: str,
    artboardProperties,
    artboardViewModelInstances,
    defaultViewModelInstance: tmp,
    stateMachine: defaultViewModelInstance.stateMachine,
  });
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx",
);

export const BountiesScrollGradientRive = noop.forwardRef(
  function BountiesScrollGradientRiveWithBoundary(fallback, ref) {
    let obj = { fallback: fallback.fallback, children: null };
    obj = { ref };
    const merged = Object.assign(fallback);
    obj.children = <closure_8 ref={ref} />;
    return jsx(RiveErrorBoundary.RiveErrorBoundary, { ref });
  },
);
