// discord_common/js/packages/design/components/Rive/native/generated/BoostThisServerRive.tsx
import Fragment from "../../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../../_runtime/00576_react.js";
import BaseRive2 from "../BaseRive.tsx";
import RiveErrorBoundary2 from "../RiveErrorBoundary.tsx";
import _objectWithoutProperties from "../../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../../../../../discord_app/modules/react_compiler/ReactCompilerGating.tsx";
import "ReactCompilerGating";
import size from "../../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

let closure_3 = [
  "fallback",
  "artboard",
  "stateMachine",
  "defaultViewModelInstance",
  "dataBinding",
  "onDataBindingChange",
];
let closure_4 = [
  "fallback",
  "artboard",
  "stateMachine",
  "defaultViewModelInstance",
  "dataBinding",
  "onDataBindingChange",
];
const jsx = Fragment.jsx;
const artboardProperties = {
  "Boost Server": { reducedMotion: "boolean" },
  "Boost Crystal": { reducedMotion: "boolean" },
  "Crystal Side B": {},
  "Crystal Side A": {},
  "Boost Saved": { reducedMotion: "boolean" },
};
const artboardViewModelInstances = {
  "Boost Server": ["Instance"],
  "Boost Crystal": ["Instance"],
  "Crystal Side B": [],
  "Crystal Side A": [],
  "Boost Saved": ["Instance"],
};
let ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  "Boost Server": ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let instance;
        let playIfNeeded;
        let reducedMotionEnabled;
        ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
        obj = BaseRive2;
        const booleanBinding = obj.useBooleanBinding(
          "reducedMotion",
          instance,
          reducedMotionEnabled,
          undefined,
          playIfNeeded,
        );
        return null;
      }
    : (arg0) => {
        let instance;
        let playIfNeeded;
        let reducedMotionEnabled;
        ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
        obj = BaseRive2;
        const booleanBinding = obj.useBooleanBinding(
          "reducedMotion",
          instance,
          reducedMotionEnabled,
          undefined,
          playIfNeeded,
        );
        return null;
      },
  "Boost Crystal": ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let instance;
        let playIfNeeded;
        let reducedMotionEnabled;
        ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
        obj = BaseRive2;
        const booleanBinding = obj.useBooleanBinding(
          "reducedMotion",
          instance,
          reducedMotionEnabled,
          undefined,
          playIfNeeded,
        );
        return null;
      }
    : (arg0) => {
        let instance;
        let playIfNeeded;
        let reducedMotionEnabled;
        ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
        obj = BaseRive2;
        const booleanBinding = obj.useBooleanBinding(
          "reducedMotion",
          instance,
          reducedMotionEnabled,
          undefined,
          playIfNeeded,
        );
        return null;
      },
  "Boost Saved": ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let instance;
        let playIfNeeded;
        let reducedMotionEnabled;
        ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
        obj = BaseRive2;
        const booleanBinding = obj.useBooleanBinding(
          "reducedMotion",
          instance,
          reducedMotionEnabled,
          undefined,
          playIfNeeded,
        );
        return null;
      }
    : (arg0) => {
        let instance;
        let playIfNeeded;
        let reducedMotionEnabled;
        ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
        obj = BaseRive2;
        const booleanBinding = obj.useBooleanBinding(
          "reducedMotion",
          instance,
          reducedMotionEnabled,
          undefined,
          playIfNeeded,
        );
        return null;
      },
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = react.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let artboard;
        let dataBinding;
        let defaultViewModelInstance;
        let fallback;
        let onDataBindingChange;
        let stateMachine;
        let str;
        let tmp6;
        let tmp7;
        let tmp8;
        let tmp9;
        let tmp2 = str;
        obj = require("react");
        const cResult = obj.c(18);
        const tmp = _require;
        if (cResult[0] !== arg0) {
          ({ fallback, artboard, stateMachine, defaultViewModelInstance, dataBinding, onDataBindingChange } = arg0);
          const tmp12 = _objectWithoutProperties(arg0, closure_3);
          _require = dataBinding;
          importDefault = onDataBindingChange;
          cResult[0] = arg0;
          cResult[1] = dataBinding;
          cResult[2] = onDataBindingChange;
          cResult[3] = tmp12;
          cResult[4] = stateMachine;
          cResult[5] = artboard;
          cResult[6] = defaultViewModelInstance;
          tmp9 = defaultViewModelInstance;
          tmp8 = artboard;
          tmp7 = stateMachine;
          tmp6 = tmp12;
        } else {
          _require = cResult[1];
          importDefault = cResult[2];
          tmp6 = cResult[3];
          tmp7 = cResult[4];
          tmp8 = cResult[5];
          tmp9 = cResult[6];
        }
        str = "Boost Server";
        if (undefined !== tmp8) {
          str = tmp8;
        }
        let str2 = "Instance";
        if (undefined !== tmp9) {
          str2 = tmp9;
        }
        if (cResult[7] === str) {
          if (cResult[8] === dataBinding) {
            let tmp13;
            if (cResult[9] === onDataBindingChange) {
              tmp13 = cResult[10];
            }
            if (cResult[11] === str) {
              if (cResult[12] === str2) {
                if (cResult[13] === ref) {
                  if (cResult[14] === tmp13) {
                    if (cResult[15] === tmp6) {
                      let tmp15;
                      if (cResult[16] === tmp7) {
                        tmp15 = cResult[17];
                      }
                      return tmp15;
                    }
                  }
                }
              }
            }
            const BaseRive = tmp(tmp2[4]).BaseRive;
            let merged = Object.assign(tmp6);
            const tmp23 = (
              <BaseRive
                ref={ref}
                src={require("../../../../../../../../discord_assets/assets/mana/rive/native/BoostThisServer.riv.js")}
                artboard={str}
                artboardProperties={artboardProperties}
                artboardViewModelInstances={artboardViewModelInstances}
                defaultViewModelInstance={str2}
                stateMachine={tmp7}
                renderDataBinding={tmp13}
              />
            );
            cResult[11] = str;
            cResult[12] = str2;
            cResult[13] = ref;
            cResult[14] = tmp13;
            cResult[15] = tmp6;
            cResult[16] = tmp7;
            cResult[17] = tmp23;
            tmp15 = tmp23;
          }
        }
        const fn = function w(arg0) {
          let tmp2 = null;
          if (null != obj[str]) {
            const merged = Object.assign(arg0);
            tmp2 = <tmp dataBinding={dataBinding} onDataBindingChange={onDataBindingChange} />;
          }
          return tmp2;
        };
        cResult[7] = str;
        cResult[8] = dataBinding;
        cResult[9] = onDataBindingChange;
        cResult[10] = fn;
        tmp13 = fn;
      }
    : (defaultViewModelInstance, ref) => {
        let artboard;
        let fallback;
        ({ fallback, artboard } = defaultViewModelInstance);
        let str = "Boost Server";
        if (undefined !== artboard) {
          str = artboard;
        }
        defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
        let str2 = "Instance";
        const stateMachine = defaultViewModelInstance.stateMachine;
        if (undefined !== defaultViewModelInstance) {
          str2 = defaultViewModelInstance;
        }
        const dataBinding = defaultViewModelInstance.dataBinding;
        const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
        const items = [str, dataBinding, onDataBindingChange];
        const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_4);
        const callback = react.useCallback((arg0) => {
          let tmp2 = null;
          if (null != obj[str]) {
            const merged = Object.assign(arg0);
            tmp2 = <tmp dataBinding={dataBinding} onDataBindingChange={onDataBindingChange} />;
          }
          return tmp2;
        }, items);
        const BaseRive = str(onDataBindingChange[4]).BaseRive;
        let merged = Object.assign(tmp);
        return (
          <BaseRive
            ref={ref}
            src={dataBinding(onDataBindingChange[6])}
            artboard={str}
            artboardProperties={artboardProperties}
            artboardViewModelInstances={artboardViewModelInstances}
            defaultViewModelInstance={str2}
            stateMachine={stateMachine}
            renderDataBinding={callback}
          />
        );
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = react.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (fallback, ref) => {
        obj = react2;
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
        const tmp6 = <closure_11 ref={ref} />;
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
  "../discord_common/js/packages/design/components/Rive/native/generated/BoostThisServerRive.tsx",
);

export const BoostThisServerRive = forwardRefResult;
