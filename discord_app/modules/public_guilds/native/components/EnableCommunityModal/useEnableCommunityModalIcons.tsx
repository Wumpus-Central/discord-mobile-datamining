// === Module 16887: safetyCheck ===

// Module 16887 (safetyCheck)
import useThemeDefault from "useTheme" /* 4310 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { ThemeTypes } from "sum" /* 505 */;

const require = fn;
class EnableCommunityModalIcons {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[0] = ThemeTypes.LIGHT;
    obj.theme = global;
    return obj;
  }
}
const prototype = EnableCommunityModalIcons.prototype;
Object.defineProperty(prototype, "safetyCheck", {
  get: function safetyCheck() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = require(16888) /* registerAsset */;
    } else {
      tmpResult = require(16889) /* registerAsset */;
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelSetup", {
  get: function channelSetup() {
    return require(16890) /* getChannelSetupSource */.getChannelSetupSource(this.theme);
  },
  set: undefined
});
Object.defineProperty(prototype, "finishingTouches", {
  get: function finishingTouches() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = require(16894) /* registerAsset */;
    } else {
      tmpResult = require(16895) /* registerAsset */;
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return require(8143) /* registerAsset */;
  },
  set: undefined
});
const result = require("obj132").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default function useEnableCommunityModalIcons() {
  closure_0 = useThemeDefault();
  return callback(React.useState(() => {
    if (typeof EnableCommunityModalIcons !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(EnableCommunityModalIcons.prototype);
    obj[0] = ThemeTypes.LIGHT;
    obj.theme = closure_0;
    return obj;
  }), 1)[0];
};