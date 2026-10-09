// === Module 4861: BountiesScrollGradientRive ===

// Module 4861 (BountiesScrollGradientRive)
import c from "c" /* 576 */;
import BaseRive from "BaseRive" /* 4805 */;
import RiveErrorBoundary from "RiveErrorBoundary" /* 4858 */;
import _modDef4862 from "module_4862" /* 4862 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
let closure_4 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
const jsx = fn(21).jsx;
const artboardProperties = { "Bounty Scroll Gradient": {} };
const artboardViewModelInstances = { "Bounty Scroll Gradient": [] };
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesScrollGradientRiveInner(arg0) {
  const cResult = c.c(12);
  if (cResult[0] !== arg0) {
    ({ ref, fallback, artboard, stateMachine, defaultViewModelInstance } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = ref;
    cResult[2] = tmp11;
    cResult[3] = stateMachine;
    cResult[4] = artboard;
    cResult[5] = defaultViewModelInstance;
    let tmp8 = defaultViewModelInstance;
    let tmp7 = artboard;
    let tmp6 = stateMachine;
    let tmp5 = tmp11;
    let tmp4 = ref;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  let str = "Bounty Scroll Gradient";
  if (undefined !== tmp7) {
    str = tmp7;
  }
  let tmp12;
  if (undefined !== tmp8) {
    tmp12 = tmp8;
  }
  if (cResult[6] === str) {
    if (cResult[7] === tmp12) {
      if (cResult[8] === tmp4) {
        if (cResult[9] === tmp5) {
          if (cResult[10] === tmp6) {
            let tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
    }
  }
  const merged = Object.assign(tmp5);
  const tmp15 = jsx(BaseRive.BaseRive, { ref: tmp4, src: _modDef4862, artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: tmp12, stateMachine: tmp6 });
  cResult[6] = str;
  cResult[7] = tmp12;
  cResult[8] = tmp4;
  cResult[9] = tmp5;
  cResult[10] = tmp6;
  cResult[11] = tmp15;
  tmp13 = tmp15;
  const obj2 = { ref: tmp4, src: _modDef4862, artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: tmp12, stateMachine: tmp6 };
}) : (function BountiesScrollGradientRiveInner(defaultViewModelInstance) {
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
  const tmp2 = _objectWithoutProperties(defaultViewModelInstance, closure_4);
  const merged = Object.assign(tmp2);
  return jsx(BaseRive.BaseRive, { ref: defaultViewModelInstance.ref, src: _modDef4862, artboard: str, artboardProperties, artboardViewModelInstances, defaultViewModelInstance: tmp, stateMachine: defaultViewModelInstance.stateMachine });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx");

export const BountiesScrollGradientRive = ReactCompilerGating.isReactCompilerEnabled() ? (function BountiesScrollGradientRiveWithBoundary(fallback) {
  const cResult = c.c(5);
  if (cResult[0] !== fallback) {
    const obj2 = {};
    const merged = Object.assign(fallback);
    const tmp10 = <closure_9 />;
    cResult[0] = fallback;
    cResult[1] = tmp10;
    let tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === fallback.fallback) {
    if (cResult[3] === tmp4) {
      let tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
  cResult[2] = fallback.fallback;
  cResult[3] = tmp4;
  cResult[4] = tmp12;
  tmp11 = tmp12;
  const obj3 = { fallback: fallback.fallback, children: tmp4 };
}) : (function BountiesScrollGradientRiveWithBoundary(fallback) {
  const obj = { fallback: fallback.fallback, children: null };
  const merged = Object.assign(fallback);
  obj.children = <closure_9 />;
  return jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: null });
});