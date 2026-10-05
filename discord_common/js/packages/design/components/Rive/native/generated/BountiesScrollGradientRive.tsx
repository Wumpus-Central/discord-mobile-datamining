// discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx
import Fragment from "../../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../../_runtime/00576_react.js";
import BaseRive2 from "../BaseRive.tsx";
import RiveErrorBoundary2 from "../RiveErrorBoundary.tsx";
import _modDef4663 from "../../../../../../../../discord_assets/assets/mana/rive/native/BountiesScrollGradient.riv.js";
import _objectWithoutProperties from "../../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../../../../../discord_app/modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

let closure_3 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
let closure_4 = ["fallback", "artboard", "stateMachine", "defaultViewModelInstance"];
const jsx = Fragment.jsx;
const artboardProperties = { "Bounty Scroll Gradient": {} };
const artboardViewModelInstances = { "Bounty Scroll Gradient": [] };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = react.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let artboard;
        let defaultViewModelInstance;
        let fallback;
        let stateMachine;
        let tmp4;
        let tmp5;
        let tmp6;
        let tmp7;
        const obj = react2;
        const cResult = obj.c(11);
        if (cResult[0] !== arg0) {
          ({ fallback, artboard, stateMachine, defaultViewModelInstance } = arg0);
          const tmp10 = _objectWithoutProperties(arg0, closure_3);
          cResult[0] = arg0;
          cResult[1] = tmp10;
          cResult[2] = stateMachine;
          cResult[3] = artboard;
          cResult[4] = defaultViewModelInstance;
          tmp7 = defaultViewModelInstance;
          tmp6 = artboard;
          tmp5 = stateMachine;
          tmp4 = tmp10;
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
                let tmp12;
                if (cResult[9] === tmp5) {
                  tmp12 = cResult[10];
                }
                return tmp12;
              }
            }
          }
        }
        const BaseRive = BaseRive2.BaseRive;
        const merged = Object.assign(tmp4);
        const tmp14 = (
          <BaseRive
            ref={ref}
            src={_modDef4663}
            artboard={str}
            artboardProperties={artboardProperties}
            artboardViewModelInstances={artboardViewModelInstances}
            defaultViewModelInstance={tmp11}
            stateMachine={tmp5}
          />
        );
        cResult[5] = str;
        cResult[6] = tmp11;
        cResult[7] = ref;
        cResult[8] = tmp4;
        cResult[9] = tmp5;
        cResult[10] = tmp14;
        tmp12 = tmp14;
      }
    : (defaultViewModelInstance, ref) => {
        let artboard;
        let fallback;
        ({ fallback, artboard } = defaultViewModelInstance);
        let str = "Bounty Scroll Gradient";
        if (undefined !== artboard) {
          str = artboard;
        }
        defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
        let tmp;
        const stateMachine = defaultViewModelInstance.stateMachine;
        if (undefined !== defaultViewModelInstance) {
          tmp = defaultViewModelInstance;
        }
        const tmp2 = _objectWithoutProperties(defaultViewModelInstance, closure_4);
        const BaseRive = BaseRive2.BaseRive;
        const merged = Object.assign(tmp2);
        return (
          <BaseRive
            ref={ref}
            src={_modDef4663}
            artboard={str}
            artboardProperties={artboardProperties}
            artboardViewModelInstances={artboardViewModelInstances}
            defaultViewModelInstance={tmp}
            stateMachine={stateMachine}
          />
        );
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = react.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (fallback, ref) => {
        const obj = react2;
        const cResult = obj.c(6);
        if (cResult[0] === fallback) {
          let tmp4;
          if (cResult[1] === ref) {
            tmp4 = cResult[2];
          }
          if (cResult[3] === fallback.fallback) {
            let tmp7;
            if (cResult[4] === tmp4) {
              tmp7 = cResult[5];
            }
            return tmp7;
          }
          const tmp9 = jsx(RiveErrorBoundary2.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
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
      }
    : (fallback, ref) => {
        const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
        const merged = Object.assign(fallback);
        return <RiveErrorBoundary fallback={fallback.fallback}>{null}</RiveErrorBoundary>;
      },
);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/Rive/native/generated/BountiesScrollGradientRive.tsx",
);

export const BountiesScrollGradientRive = forwardRefResult;
