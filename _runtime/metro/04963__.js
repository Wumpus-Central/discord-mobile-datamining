// _runtime/metro/04963__.js
import get_synchronousScreenUpdatesEnabled from "../04964_get_synchronousScreenUpdatesEnabled.js";

require = arg1;
const dependencyMap = arg6;

export const RNSLog = {
  log(arg0) {
    const substr = [...arguments].slice();
    if (get_synchronousScreenUpdatesEnabled.featureFlags.stable.debugLogging) {
      const _console = console;
      const items = [arg0];
      HermesBuiltin.arraySpread(substr, 1);
      const _console2 = console;
      HermesBuiltin.apply(items, console);
    }
  },
  warn(arg0) {
    const substr = [...arguments].slice();
    if (get_synchronousScreenUpdatesEnabled.featureFlags.stable.debugLogging) {
      const _console = console;
      const items = [arg0];
      HermesBuiltin.arraySpread(substr, 1);
      const _console2 = console;
      HermesBuiltin.apply(items, console);
    }
  },
  error(arg0) {
    const substr = [...arguments].slice();
    if (get_synchronousScreenUpdatesEnabled.featureFlags.stable.debugLogging) {
      const _console = console;
      const items = [arg0];
      HermesBuiltin.arraySpread(substr, 1);
      const _console2 = console;
      HermesBuiltin.apply(items, console);
    }
  },
  info(arg0) {
    const substr = [...arguments].slice();
    if (get_synchronousScreenUpdatesEnabled.featureFlags.stable.debugLogging) {
      const _console = console;
      const items = [arg0];
      HermesBuiltin.arraySpread(substr, 1);
      const _console2 = console;
      HermesBuiltin.apply(items, console);
    }
  },
};
