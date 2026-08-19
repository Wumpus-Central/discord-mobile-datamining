// discord_app/modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import { ThemeTypes } from "../../../../../../discord_common/js/shared/Constants.tsx";
import { registerAsset } from "../../../../../../_runtime/08143_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/16888_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/16889_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/16894_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/16895_registerAsset.js";
import { getChannelSetupSource } from "../../../../../design/components/Illustration/native/redesign/generated/ChannelSetup.tsx";

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
      let tmpResult = registerAsset;
    } else {
      tmpResult = registerAsset;
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "channelSetup", {
  get: function channelSetup() {
    return getChannelSetupSource /* getChannelSetupSource */.getChannelSetupSource(this.theme);
  },
  set: undefined
});
Object.defineProperty(prototype, "finishingTouches", {
  get: function finishingTouches() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = registerAsset;
    } else {
      tmpResult = registerAsset;
    }
    return tmpResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return registerAsset;
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