// === Module 16980: safetyCheck ===

// Module 16980 (safetyCheck)
import useThemeDefault from "useTheme" /* 4314 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { ThemeTypes } from "sum" /* 505 */;

const require = arg1;
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
      let tmpResult = tmp(16981);
    } else {
      tmpResult = tmp(16982);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelSetup", {
  get: function channelSetup() {
    return require(16983) /* getChannelSetupSource */.getChannelSetupSource(this.theme);
  },
  set: undefined
});
Object.defineProperty(prototype, "finishingTouches", {
  get: function finishingTouches() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = tmp(16987);
    } else {
      tmpResult = tmp(16988);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return require(8182) /* registerAsset */;
  },
  set: undefined
});
const result = require("set").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default function useEnableCommunityModalIcons() {
  closure_0 = useThemeDefault();
  return callback(React.useState(() => {
    if (typeof closure_1_6 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(closure_1_6.prototype);
    obj[0] = closure_1_5.LIGHT;
    obj.theme = closure_0;
    return obj;
  }), 1)[0];
};