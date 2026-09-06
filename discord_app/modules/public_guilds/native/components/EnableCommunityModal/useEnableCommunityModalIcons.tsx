// discord_app/modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

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
      let tmpResult = tmp(17667);
    } else {
      tmpResult = tmp(17668);
    }
    return tmpResult;
  },
  set: undefined,
});
Object.defineProperty(prototype, "channelSetup", {
  get: function channelSetup() {
    return require("ChannelSetup").getChannelSetupSource(this.theme);
  },
  set: undefined,
});
Object.defineProperty(prototype, "finishingTouches", {
  get: function finishingTouches() {
    if (obj.isThemeDark(this.theme)) {
      let tmpResult = tmp(17673);
    } else {
      tmpResult = tmp(17674);
    }
    return tmpResult;
  },
  set: undefined,
});
Object.defineProperty(prototype, "close", {
  get: function close() {
    return require("../../../../../../_runtime/metro/06992__.js");
  },
  set: undefined,
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/public_guilds/native/components/EnableCommunityModal/useEnableCommunityModalIcons.tsx",
);

export default function useEnableCommunityModalIcons() {
  closure_0 = useThemeDefault();
  return _slicedToArray(
    noop.useState(() => {
      if (typeof EnableCommunityModalIcons === "function") {
        const merged = Object.assign({ theme: null });
        merged[0] = ThemeTypes.LIGHT;
        merged.theme = tmp;
        return merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }),
    1,
  )[0];
}
