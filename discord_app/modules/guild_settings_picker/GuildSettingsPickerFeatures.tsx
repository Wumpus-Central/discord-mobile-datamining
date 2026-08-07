// discord_app/modules/guild_settings_picker/GuildSettingsPickerFeatures.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";

const require = arg1;
let obj = { "server-subscriptions-onboarding": require("module_13168"), "server-subscriptions-create-tier-from-template": require("module_13169") };
let closure_6 = {
  title() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.V42OaH);
  },
  description() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["7dJ16X"]);
  },
  selectGuildCta() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LhlgY9);
  },
  createGuildDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.anOisx);
  },
  createGuildCta() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.B44MTm);
  },
  canCreateGuild: true,
  useIsGuildSupported() {
    const items = [getUncachedChannelPermissions];
    return initialize.useStateFromStores(items, () => (guild) => getUncachedChannelPermissions.canAccessGuildSettings(guild), [], initialize.statesWillNeverBeEqual);
  }
};
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/guild_settings_picker/GuildSettingsPickerFeatures.tsx");

export const useGuildSettingsPickerFeature = function useGuildSettingsPickerFeature(feature) {
  let tmp2;
  if (null != feature) {
    tmp2 = obj[feature];
  }
  let first = callback(React.useState(tmp2), 1)[0];
  let closure_0 = closure_6.useIsGuildSupported();
  let isGuildSupported;
  if (first != null) {
    const useIsGuildSupported = first.useIsGuildSupported;
    if (useIsGuildSupported != null) {
      isGuildSupported = useIsGuildSupported();
    }
  }
  obj = {};
  const merged = Object.assign(closure_6);
  if (first == null) {
    first = {};
  }
  const merged1 = Object.assign(first);
  obj = {
    title: obj.title(),
    description: obj.description(),
    selectGuildCta: obj.selectGuildCta(),
    createGuildDescription: obj.createGuildDescription(),
    createGuildCta: obj.createGuildCta(),
    canCreateGuild: obj.canCreateGuild,
    isGuildSupported(arg0, arg1) {
      let tmp = callback(arg0, arg1);
      if (tmp) {
        let tmp3;
        if (isGuildSupported != null) {
          tmp3 = isGuildSupported(arg0, arg1);
        }
        tmp = false !== tmp3;
      }
      return tmp;
    }
  };
  return obj;
};