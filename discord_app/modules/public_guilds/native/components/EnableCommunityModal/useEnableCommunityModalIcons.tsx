// === Module 18409: useEnableCommunityModalIcons ===

// Module 18409 (useEnableCommunityModalIcons)
import useThemeDefault from "useTheme" /* 5031 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ThemeTypes = fn(1096).ThemeTypes;
class EnableCommunityModalIcons {
  constructor(arg0) {
    merged = Object.assign({ theme: null });
    merged[0] = ThemeTypes.LIGHT;
    merged.theme = global;
    return merged;
  }
}
const prototype = EnableCommunityModalIcons.prototype;
Object.defineProperty(prototype, "safetyCheck", {
  get: function safetyCheck() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = require("module_18410");
    } else {
      tmpResult = require("module_18411");
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelSetup", {
  get: function channelSetup() {
    return require("ChannelSetup").getChannelSetupSource(this.theme);
  },
  set: undefined
});
Object.defineProperty(prototype, "finishingTouches", {
  get: function finishingTouches() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = require("module_18416");
    } else {
      tmpResult = require("module_18417");
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return require("module_7728");
  },
  set: undefined
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useEnableCommunityModalIcons() {
  const cResult = require("c").c(2);
  const tmp2 = useThemeDefault();
  _require = tmp2;
  if (cResult[0] !== tmp2) {
    const fn = function o() {
      if (typeof EnableCommunityModalIcons === "function") {
        const merged = Object.assign({ theme: null });
        merged[0] = ThemeTypes.LIGHT;
        merged.theme = tmp;
        return merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    cResult[0] = tmp2;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  return _slicedToArray(noop.useState(tmp3), 1)[0];
}) : (function useEnableCommunityModalIcons() {
  closure_0 = useThemeDefault();
  return _slicedToArray(noop.useState(() => {
    if (typeof EnableCommunityModalIcons === "function") {
      const merged = Object.assign({ theme: null });
      merged[0] = ThemeTypes.LIGHT;
      merged.theme = tmp;
      return merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }), 1)[0];
});