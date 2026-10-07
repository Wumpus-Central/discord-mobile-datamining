// discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx
import c from "../../../../../../../../_runtime/00576_c.js";
import BaseRive from "../BaseRive.tsx";
import RiveErrorBoundary from "../RiveErrorBoundary.tsx";
import _modDef4669 from "../../../../../../../../discord_assets/assets/mana/rive/native/BountiesScrollGradient.riv.js";
import _objectWithoutProperties from "../../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
let closure_4 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
const jsx = fn(21).jsx;
const artboardProperties = { "Bounty Scroll Gradient": {} };
const artboardViewModelInstances = { "Bounty Scroll Gradient": [] };
let ReactCompilerGating = fn(558);
let closure_9 = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const cResult = c.c(11);
        if (cResult[0] !== arg0) {
          ({ fallback, artboard, stateMachine, defaultViewModelInstance } = arg0);
          const tmp10 = _objectWithoutProperties(arg0, closure_3);
          cResult[0] = arg0;
          cResult[1] = tmp10;
          cResult[2] = stateMachine;
          cResult[3] = artboard;
          cResult[4] = defaultViewModelInstance;
          let tmp7 = defaultViewModelInstance;
          let tmp6 = artboard;
          let tmp5 = stateMachine;
          let tmp4 = tmp10;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        let str = "Bounty Scroll Gradient";
        if (undefined !== tmp6) {
          str = tmp6;
        }
        let tmp11;
        if (undefined !== tmp7) {
          tmp11 = tmp7;
        }
        if (cResult[5] === str) {
          if (cResult[6] === tmp11) {
            if (cResult[7] === ref) {
              if (cResult[8] === tmp4) {
                if (cResult[9] === tmp5) {
                  let tmp12 = cResult[10];
                }
                return tmp12;
              }
            }
          }
        }
        const merged = Object.assign(tmp4);
        const tmp14 = jsx(BaseRive.BaseRive, {
          ref,
          src: _modDef4669,
          artboard: str,
          artboardProperties,
          artboardViewModelInstances,
          defaultViewModelInstance: tmp11,
          stateMachine: tmp5,
        });
        cResult[5] = str;
        cResult[6] = tmp11;
        cResult[7] = ref;
        cResult[8] = tmp4;
        cResult[9] = tmp5;
        cResult[10] = tmp14;
        tmp12 = tmp14;
        const obj2 = {
          ref,
          src: _modDef4669,
          artboard: str,
          artboardProperties,
          artboardViewModelInstances,
          defaultViewModelInstance: tmp11,
          stateMachine: tmp5,
        };
      }
    : (defaultViewModelInstance, ref) => {
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
        return jsx(BaseRive.BaseRive, {
          ref,
          src: _modDef4669,
          artboard: str,
          artboardProperties,
          artboardViewModelInstances,
          defaultViewModelInstance: tmp,
          stateMachine: defaultViewModelInstance.stateMachine,
        });
      },
);
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx",
);

export const BountiesScrollGradientRive = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (fallback, ref) => {
        const cResult = c.c(6);
        if (cResult[0] === fallback) {
          if (cResult[1] === ref) {
            let tmp4 = cResult[2];
          }
          if (cResult[3] === fallback.fallback) {
            if (cResult[4] === tmp4) {
              let tmp7 = cResult[5];
            }
            return tmp7;
          }
          const obj2 = { fallback: fallback.fallback, children: tmp4 };
          const tmp9 = jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
          cResult[3] = fallback.fallback;
          cResult[4] = tmp4;
          cResult[5] = tmp9;
          tmp7 = tmp9;
        }
        const merged = Object.assign(fallback);
        const tmp6 = <closure_9 ref={ref} />;
        cResult[0] = fallback;
        cResult[1] = ref;
        cResult[2] = tmp6;
        tmp4 = tmp6;
        const obj3 = { ref };
      }
    : (fallback, ref) => {
        const obj = { fallback: fallback.fallback, children: null };
        const merged = Object.assign(fallback);
        obj.children = <closure_9 ref={ref} />;
        return jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: null });
      },
);
