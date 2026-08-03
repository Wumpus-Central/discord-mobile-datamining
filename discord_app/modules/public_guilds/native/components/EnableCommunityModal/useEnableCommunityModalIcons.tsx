import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ThemeTypes } from "sum";

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
      let tmpResult = tmp(16530);
    } else {
      tmpResult = tmp(16531);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelSetup", {
  get: function channelSetup() {
    return require(16532) /* getChannelSetupSource */.getChannelSetupSource(this.theme);
  },
  set: undefined
});
Object.defineProperty(prototype, "finishingTouches", {
  get: function finishingTouches() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = tmp(16536);
    } else {
      tmpResult = tmp(16537);
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return require(7704) /* registerAsset */;
  },
  set: undefined
});
const result = require("sum").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx");

export default function useEnableCommunityModalIcons() {
  let closure_0 = importDefault(4129)();
  return callback(React.useState(() => {
    if (typeof outer1_6 !== "fileFinishedImporting") {
      HermesBuiltin.throwTypeError();
    }
    const obj = Object.create(outer1_6.prototype);
    obj[0] = outer1_5.LIGHT;
    obj.theme = closure_0;
    return obj;
  }), 1)[0];
};