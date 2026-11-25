// discord_app/modules/user_settings/phoenix_launch/native/switchToPhoenix.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import PhoenixLaunchState from "PhoenixLaunchState.tsx";
import LaunchClient from "LaunchClient.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_6 = async function _switchToPhoenix() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
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
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = false;
          c3 = 1;
          c4 = 2;
          c5 = 1;
          const obj8 = { value: PhoenixLaunchState.storeLaunchClient(LaunchClient.LaunchClient.PHOENIX), done: false };
          return obj8;
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          closure_128_1 = closure_2;
          closure_129_5.error("Failed to store the launch client", closure_128_1);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          c3 = 0;
        }
        if (closure_128_0) {
          if (obj4.isAndroid()) {
            const BundleUpdaterManager = closure_129_4.BundleUpdaterManager;
            BundleUpdaterManager.reload();
          } else {
            const obj9 = { title: null, body: null };
            const intl2 = closure_129_0(closure_129_2[6]).intl;
            obj9.title = intl2.string(closure_129_1(closure_129_2[9]).a606CH);
            const intl3 = closure_129_0(closure_129_2[6]).intl;
            obj9.body = intl3.string(closure_129_1(closure_129_2[9]).o26UKJ);
            closure_129_1(closure_129_2[8]).show(obj9);
            const obj5 = closure_129_1(closure_129_2[8]);
          }
          obj4 = closure_129_0(closure_129_2[7]);
        } else {
          const obj10 = { text: null };
          const intl = closure_129_0(closure_129_2[6]).intl;
          obj10.text = intl.string(closure_129_0(closure_129_2[6]).t.F8FvUy);
          closure_129_1(closure_129_2[5]).open("PHOENIX_SWITCH_FAILED", obj10);
          const obj2 = closure_129_1(closure_129_2[5]);
        }
        c5 = 3;
      }
    } catch (tmp46) {
      closure_2 = tmp46;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp46;
      } else {
        c4 = tmp;
      }
    }
  }
};
const NativeModules = fn(17).NativeModules;
let closure_5 = new LoggerDefault("switchToPhoenix");
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/switchToPhoenix.tsx");

export default function switchToPhoenix() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
