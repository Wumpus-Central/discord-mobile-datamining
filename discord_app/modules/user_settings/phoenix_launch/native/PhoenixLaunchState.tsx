// discord_app/modules/user_settings/phoenix_launch/native/PhoenixLaunchState.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import NativePhoenixLaunchModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativePhoenixLaunchModule.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_9 = async function _readPhoenixLaunchState() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const hasPhoenix = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          let hasPhoenix2;
          let client;
          if (null != NativePhoenixLaunchModuleDefault) {
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj4 = { value: NativePhoenixLaunchModuleDefault.getState(), done: false };
            return obj4;
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          closure_128_3 = closure_2;
          closure_129_8 = null;
          closure_129_6.error("Failed to read the launch client", closure_128_3);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value;
          hasPhoenix2 = closure_128_0.hasPhoenix;
          client = closure_128_0.client;
          closure_129_0(closure_129_2[5]).batchUpdates(() =>
            state.setState({ hasPhoenix, shouldLaunchPhoenix: closure_1_2 === c5 }),
          );
          c3 = 0;
          const obj = closure_129_0(closure_129_2[5]);
        }
        c3 = 0;
        c5 = 3;
        const obj5 = { value, done: true };
        return obj5;
      }
      c5 = 3;
    } catch (tmp23) {
      closure_2 = tmp23;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp23;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_10 = async function _setShouldLaunchPhoenix(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = shouldLaunchPhoenix;
          if (null != NativePhoenixLaunchModuleDefault) {
            c4 = 1;
            let str = "legacy";
            if (shouldLaunchPhoenix) {
              str = phoenix;
            }
            c5 = 2;
            c6 = 1;
            const obj4 = { value: NativePhoenixLaunchModuleDefault.setClient(str), done: false };
            return obj4;
          }
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          closure_130_6.error("Failed to set the launch client", closure_129_1);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value) {
            closure_130_0(closure_130_2[5]).batchUpdates(() => state.setState({ shouldLaunchPhoenix }));
            const obj = closure_130_0(closure_130_2[5]);
          }
          c4 = 0;
        }
        c4 = 0;
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      }
      c6 = 3;
    } catch (tmp21) {
      closure_3 = tmp21;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp21;
      } else {
        c5 = tmp;
      }
    }
  }
};
const phoenix = "phoenix";
let closure_6 = new LoggerDefault("PhoenixLaunchState");
const identity = fn(1257);
let closure_7 = identity.createWithEqualityFn(() => ({ hasPhoenix: false, shouldLaunchPhoenix: false }));
let c8 = null;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixLaunchState.tsx");

export function useIsPhoenixInstalled() {
  const effect = noop.useEffect(() => {
    if (closure_8 == null) {
      closure_8 = (function readPhoenixLaunchState() {
        const self = this;
        const apply = closure_1_9.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, []);
  return closure_7((hasPhoenix) => hasPhoenix.hasPhoenix);
}
export function useShouldLaunchPhoenix() {
  return closure_7((shouldLaunchPhoenix) => shouldLaunchPhoenix.shouldLaunchPhoenix);
}
export function setShouldLaunchPhoenix() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
