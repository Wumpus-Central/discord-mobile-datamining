// discord_common/js/packages/design/components/Rive/native/generated/GameServerHostingRive.tsx
import c from "../../../../../../../../_runtime/00576_c.js";
import BaseRive from "../BaseRive.tsx";
import RiveErrorBoundary from "../RiveErrorBoundary.tsx";
import _objectWithoutProperties from "../../../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = [
  "ref",
  "fallback",
  "artboard",
  "stateMachine",
  "defaultViewModelInstance",
  "dataBinding",
  "onDataBindingChange",
];
let closure_4 = [
  "ref",
  "fallback",
  "artboard",
  "stateMachine",
  "defaultViewModelInstance",
  "dataBinding",
  "onDataBindingChange",
];
const jsx = fn(21).jsx;
const artboardProperties = {
  Game_Server_Hosting_Main: { reducedMotion: "boolean" },
  c_chara_5: {},
  hytale_gameplay: { reducedMotion: "boolean" },
  c_chara_1: {},
  c_chara_4: {},
  c_chara_2: {},
  c_chara_3: {},
};
const artboardViewModelInstances = {
  Game_Server_Hosting_Main: ["Instance"],
  c_chara_5: [],
  hytale_gameplay: ["Instance"],
  c_chara_1: [],
  c_chara_4: [],
  c_chara_2: [],
  c_chara_3: [],
};
let ReactCompilerGating = fn(558);
let obj2 = {
  Game_Server_Hosting_Main: ReactCompilerGating.isReactCompilerEnabled()
    ? function GameServerHostingMainBindings(arg0) {
        ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
        const booleanBinding = BaseRive.useBooleanBinding(
          "reducedMotion",
          instance,
          reducedMotionEnabled,
          undefined,
          playIfNeeded,
        );
        return null;
      }
    : function GameServerHostingMainBindings(arg0) {
        ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
        const booleanBinding = BaseRive.useBooleanBinding(
          "reducedMotion",
          instance,
          reducedMotionEnabled,
          undefined,
          playIfNeeded,
        );
        return null;
      },
  hytale_gameplay: null,
};
ReactCompilerGating = fn(558);
obj2.hytale_gameplay = ReactCompilerGating.isReactCompilerEnabled()
  ? function HytalegameplayBindings(arg0) {
      ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
      const booleanBinding = BaseRive.useBooleanBinding(
        "reducedMotion",
        instance,
        reducedMotionEnabled,
        undefined,
        playIfNeeded,
      );
      return null;
    }
  : function HytalegameplayBindings(arg0) {
      ({ instance, reducedMotionEnabled, playIfNeeded } = arg0);
      const booleanBinding = BaseRive.useBooleanBinding(
        "reducedMotion",
        instance,
        reducedMotionEnabled,
        undefined,
        playIfNeeded,
      );
      return null;
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GameServerHostingRiveInner(arg0) {
      const cResult = require("c").c(19);
      if (cResult[0] !== arg0) {
        ({ ref, fallback, artboard, stateMachine, defaultViewModelInstance, dataBinding, onDataBindingChange } = arg0);
        const tmp13 = _objectWithoutProperties(arg0, closure_3);
        _require = dataBinding;
        importDefault = onDataBindingChange;
        cResult[0] = arg0;
        class C {
          constructor(arg0) {
            tmp = closure_10[closure_2];
            tmp2 = null;
            if (null != tmp) {
              tmp3 = arg0;
              tmp4 = jsx;
              obj = {};
              tmp5 = obj;
              merged = Object.assign(arg0);
              tmp7 = closure_0;
              obj.dataBinding = closure_0;
              tmp8 = closure_1;
              obj.onDataBindingChange = closure_1;
              tmp2 = jsx(tmp, obj);
            }
            return tmp2;
          }
        }
        cResult[1] = dataBinding;
        cResult[2] = onDataBindingChange;
        cResult[3] = ref;
        cResult[4] = tmp13;
        cResult[5] = stateMachine;
        cResult[6] = artboard;
        cResult[7] = defaultViewModelInstance;
        let tmp10 = defaultViewModelInstance;
        let tmp9 = artboard;
        let tmp8 = stateMachine;
        let tmp7 = tmp13;
        let tmp6 = ref;
      } else {
        _require = cResult[1];
        importDefault = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp9 = cResult[6];
        tmp10 = cResult[7];
      }
      str = "Game_Server_Hosting_Main";
      if (undefined !== tmp9) {
        str = tmp9;
      }
      let str2 = "Instance";
      if (undefined !== tmp10) {
        str2 = tmp10;
      }
      if (cResult[8] === str) {
        if (cResult[9] === dataBinding) {
          if (cResult[10] === onDataBindingChange) {
            let tmp14 = cResult[11];
          }
          if (cResult[12] === str) {
            if (cResult[13] === str2) {
              if (cResult[14] === tmp6) {
                if (cResult[15] === tmp14) {
                  if (cResult[16] === tmp7) {
                    if (cResult[17] === tmp8) {
                      let tmp15 = cResult[18];
                    }
                    return tmp15;
                  }
                }
              }
            }
          }
          obj2 = {
            ref: tmp6,
            src: require("../../../../../../../../discord_assets/assets/mana/rive/native/GameServerHosting.riv.js"),
            artboard: str,
            artboardProperties,
            artboardViewModelInstances,
            defaultViewModelInstance: str2,
            stateMachine: null,
            renderDataBinding: null,
          };
          class C {
            constructor(arg0) {
              tmp = closure_10[closure_2];
              tmp2 = null;
              if (null != tmp) {
                tmp3 = arg0;
                tmp4 = jsx;
                obj = {};
                tmp5 = obj;
                merged = Object.assign(arg0);
                tmp7 = closure_0;
                obj.dataBinding = closure_0;
                tmp8 = closure_1;
                obj.onDataBindingChange = closure_1;
                tmp2 = jsx(tmp, obj);
              }
              return tmp2;
            }
          }
          obj2.renderDataBinding = tmp14;
          let merged = Object.assign(tmp7);
          const tmp23 = jsx(tmp(tmp2[4]).BaseRive, {
            ref: tmp6,
            src: require("../../../../../../../../discord_assets/assets/mana/rive/native/GameServerHosting.riv.js"),
            artboard: str,
            artboardProperties,
            artboardViewModelInstances,
            defaultViewModelInstance: str2,
            stateMachine: null,
            renderDataBinding: null,
          });
          cResult[12] = str;
          cResult[13] = str2;
          cResult[14] = tmp6;
          cResult[15] = tmp14;
          cResult[16] = tmp7;
          cResult[17] = tmp8;
          cResult[18] = tmp23;
          tmp15 = tmp23;
        }
      }
      class C {
        constructor(arg0) {
          tmp = closure_10[closure_2];
          tmp2 = null;
          if (null != tmp) {
            tmp3 = arg0;
            tmp4 = jsx;
            obj = {};
            tmp5 = obj;
            merged = Object.assign(arg0);
            tmp7 = closure_0;
            obj.dataBinding = closure_0;
            tmp8 = closure_1;
            obj.onDataBindingChange = closure_1;
            tmp2 = jsx(tmp, obj);
          }
          return tmp2;
        }
      }
      cResult[8] = str;
      cResult[9] = dataBinding;
      cResult[10] = onDataBindingChange;
      cResult[11] = C;
      tmp14 = C;
      let obj = require("c");
      tmp = _require;
    }
  : function GameServerHostingRiveInner(defaultViewModelInstance) {
      ({ fallback, artboard } = defaultViewModelInstance);
      let str = "Game_Server_Hosting_Main";
      if (undefined !== artboard) {
        str = artboard;
      }
      defaultViewModelInstance = defaultViewModelInstance.defaultViewModelInstance;
      let str2 = "Instance";
      if (undefined !== defaultViewModelInstance) {
        str2 = defaultViewModelInstance;
      }
      dataBinding = defaultViewModelInstance.dataBinding;
      const onDataBindingChange = defaultViewModelInstance.onDataBindingChange;
      const items = [str, dataBinding, onDataBindingChange];
      const callback = noop.useCallback((arg0) => {
        let tmp2 = null;
        if (null != obj2[str]) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.dataBinding = dataBinding;
          obj.onDataBindingChange = onDataBindingChange;
          tmp2 = <tmp />;
        }
        return tmp2;
      }, items);
      const tmp = _objectWithoutProperties(defaultViewModelInstance, closure_4);
      let merged = Object.assign(tmp);
      return jsx(str(onDataBindingChange[4]).BaseRive, {
        ref: defaultViewModelInstance.ref,
        src: dataBinding(onDataBindingChange[6]),
        artboard: str,
        artboardProperties,
        artboardViewModelInstances,
        defaultViewModelInstance: str2,
        stateMachine: defaultViewModelInstance.stateMachine,
        renderDataBinding: callback,
      });
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "../discord_common/js/packages/design/components/Rive/native/generated/GameServerHostingRive.tsx",
);

export const GameServerHostingRive = ReactCompilerGating.isReactCompilerEnabled()
  ? function GameServerHostingRiveWithBoundary(fallback) {
      const cResult = c.c(5);
      if (cResult[0] !== fallback) {
        obj2 = {};
        const merged = Object.assign(fallback);
        const tmp10 = <closure_11 />;
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
    }
  : function GameServerHostingRiveWithBoundary(fallback) {
      const obj = { fallback: fallback.fallback, children: null };
      const merged = Object.assign(fallback);
      obj.children = <closure_11 />;
      return jsx(RiveErrorBoundary.RiveErrorBoundary, { fallback: fallback.fallback, children: null });
    };
