// === Module 17392: switchToPhoenix ===

// Module 17392 (switchToPhoenix)
import LoggerDefault from "Logger" /* 3 */;
import PhoenixLaunchState from "PhoenixLaunchState" /* 17387 */;
import LaunchClient from "LaunchClient" /* 17389 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function storeOrToast() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _storeOrToast(arg0) {
  closure_2 = tmp3;
  closure_129_0 = false;
  await PhoenixLaunchState.storeLaunchClient(closure_0);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_1 = closure_3;
    closure_130_5.error("Failed to store the launch client", closure_129_1);
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 0;
    c6 = 3;
    return { value, done: true };
  } else {
    closure_129_0 = value;
    c4 = 0;
  }
  if (!closure_129_0) {
    const obj7 = { text: null };
    const intl = closure_130_0(closure_130_2[5]).intl;
    obj7.text = intl.string(closure_130_0(closure_130_2[5]).t.F8FvUy);
    closure_130_1(closure_130_2[4]).open("PHOENIX_SWITCH_FAILED", obj7);
    closure_130_1(closure_130_2[4]);
  }
  return closure_129_0;
};
let closure_8 = async function _switchToPhoenix() {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_0 = tmp4;
          c1 = 1;
          c2 = 1;
          const obj5 = { value: storeOrToast(LaunchClient.LaunchClient.PHOENIX), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        if (!value) {
          c2 = 3;
        } else {
          if (!obj.isAndroid()) {
            const obj7 = { title: null, body: null };
            const intl = closure_128_0(closure_128_2[5]).intl;
            obj7.title = intl.string(closure_128_1(closure_128_2[9]).a606CH);
            const intl2 = closure_128_0(closure_128_2[5]).intl;
            obj7.body = intl2.string(closure_128_1(closure_128_2[9]).o26UKJ);
            closure_128_1(closure_128_2[8]).show(obj7);
            const obj2 = closure_128_1(closure_128_2[8]);
          }
          obj = closure_128_0(closure_128_2[7]);
        }
        const BundleUpdaterManager = closure_128_4.BundleUpdaterManager;
        BundleUpdaterManager.reload();
      }
    } catch (tmp23) {
      c2 = tmp;
      throw tmp23;
    }
  }
};
let closure_9 = async function _cancelSwitchToPhoenix() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c1 = 1;
          c0 = 1;
          const obj4 = { value: storeOrToast(LaunchClient.LaunchClient.LEGACY), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c0 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp8) {
      c0 = tmp;
      throw tmp8;
    }
  }
};
const NativeModules = fn(17).NativeModules;
let closure_5 = new LoggerDefault("switchToPhoenix");
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/switchToPhoenix.tsx");

export default function switchToPhoenix() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export function cancelSwitchToPhoenix() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}