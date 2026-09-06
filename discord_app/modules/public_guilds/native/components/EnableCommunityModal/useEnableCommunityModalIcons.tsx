// === Module 17666: useEnableCommunityModalIcons ===

// Module 17666 (useEnableCommunityModalIcons)
import useThemeDefault from "useTheme" /* 4495 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ThemeTypes = fn(1085).ThemeTypes;
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
      let tmpResult = require("module_17667");
    } else {
      tmpResult = require("module_17668");
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
      let tmpResult = require("module_17673");
    } else {
      tmpResult = require("module_17674");
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return require("module_6992");
  },
  set: undefined
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default function useEnableCommunityModalIcons() {
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
};