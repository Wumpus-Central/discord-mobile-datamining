// discord_app/modules/user_settings/defs/native/PhoenixLaunchSetting.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import util from "../../../../intl/index.native.tsx";
import NativePhoenixLaunchModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativePhoenixLaunchModule.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_8 = async function _refreshPhoenixLaunchState() {
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
          closure_129_6.error("Failed to read the launch client", closure_128_3);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value;
          hasPhoenix2 = closure_128_0.hasPhoenix;
          client = closure_128_0.client;
          closure_129_0(closure_129_2[5]).batchUpdates(() =>
            state.setState({ hasPhoenix, launchPhoenix: closure_1_2 === c5 }),
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
let closure_9 = async function _handlePhoenixLaunchValueChange(arg0) {
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
          closure_129_0 = launchPhoenix;
          if (null != NativePhoenixLaunchModuleDefault) {
            c4 = 1;
            let str = "legacy";
            if (launchPhoenix) {
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
            closure_130_0(closure_130_2[5]).batchUpdates(() => state.setState({ launchPhoenix }));
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
let closure_6 = new LoggerDefault("PhoenixLaunchSetting");
const identity = fn(1257);
let closure_7 = identity.createWithEqualityFn(() => ({ hasPhoenix: false, launchPhoenix: false }));
const SettingBuilders = fn(11817);
const tmp2 = new LoggerDefault("PhoenixLaunchSetting");
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.paDGCW);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.DXxeZL);
  },
  parent: null,
  IconComponent: fn(7268).MobilePhoneIcon,
  useValue: function usePhoenixLaunchValue() {
    return closure_7((launchPhoenix) => launchPhoenix.launchPhoenix);
  },
  onValueChange: function handlePhoenixLaunchValueChange() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  usePredicate: function usePhoenixLaunchPredicate() {
    enabled = enabled(16021).useStaffOrDeveloperSettingPredicate();
    const obj = enabled(16021);
    if (!enabled) {
      enabled = obj2.useConfig({ location: "PhoenixLaunchSetting" }, { autoTrackExposure: false }).enabled;
    }
    if (enabled) {
      enabled = null != NativePhoenixLaunchModuleDefault;
    }
    items = [enabled];
    const effect = noop.useEffect(() => {
      if (enabled) {
        (function refreshPhoenixLaunchState() {
          const self = this;
          const apply = closure_1_8.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })();
      }
    }, items);
    if (enabled) {
      enabled = closure_7((hasPhoenix) => hasPhoenix.hasPhoenix);
    }
    return enabled;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PhoenixLaunchSetting.tsx");

export default toggle;
