// === Module 6130: ? ===

// Module 6130
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 6131 */;

require = arg1;
const dependencyMap = arg6;

export const RNSLog = {
  log(arg0) {
    const substr = [...arguments].slice();
    if (get_synchronousScreenUpdatesEnabled.featureFlags.stable.debugLogging) {
      const _console = console;
      items = [arg0];
      HermesBuiltin.arraySpread(substr, 1);
      const _console2 = console;
      HermesBuiltin.apply(items, console);
    }
  },
  warn(arg0) {
    const substr = [...arguments].slice();
    if (get_synchronousScreenUpdatesEnabled.featureFlags.stable.debugLogging) {
      const _console = console;
      items = [arg0];
      HermesBuiltin.arraySpread(substr, 1);
      const _console2 = console;
      HermesBuiltin.apply(items, console);
    }
  },
  error(arg0) {
    const substr = [...arguments].slice();
    if (get_synchronousScreenUpdatesEnabled.featureFlags.stable.debugLogging) {
      const _console = console;
      items = [arg0];
      HermesBuiltin.arraySpread(substr, 1);
      const _console2 = console;
      HermesBuiltin.apply(items, console);
    }
  },
  info(arg0) {
    const substr = [...arguments].slice();
    if (get_synchronousScreenUpdatesEnabled.featureFlags.stable.debugLogging) {
      const _console = console;
      items = [arg0];
      HermesBuiltin.arraySpread(substr, 1);
      const _console2 = console;
      HermesBuiltin.apply(items, console);
    }
  }
};