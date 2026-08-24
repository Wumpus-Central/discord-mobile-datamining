// discord_app/modules/user_settings/defs/native/InGameDMsSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import create from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import closure_2 from "../../../../../_runtime/00019_noop.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["ms+Tme"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONNECTED_GAMES,
  useOptions: function useInGameDMsSettingOptions() {
    return React.useMemo(() => {
      let obj = { value: callback(1306).SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL, label: null };
      const intl = callback(1236).intl;
      obj[1] = intl.string(callback(1236).t.JIFnN9);
      const items = [obj, , ];
      obj = { value: callback(1306).SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME, label: null };
      const intl2 = callback(1236).intl;
      obj[1] = intl2.string(callback(1236).t.rRdsk1);
      items[1] = obj;
      obj = { value: callback(1306).SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE, label: null };
      const intl3 = callback(1236).intl;
      obj[1] = intl3.string(callback(1236).t.AolKwN);
      items[2] = obj;
      return items;
    }, []);
  },
  useValue: function useInGameDMsSettingValue() {
    const SlayerSDKReceiveDMsInGame = explicitContentFromProto.SlayerSDKReceiveDMsInGame;
    let SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = SlayerSDKReceiveDMsInGame.useSetting();
    if (SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL === create.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET) {
      SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = create.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
    }
    return SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
  },
  onValueChange: function onInGameDMsSettingValueChange(arg0) {
    const SlayerSDKReceiveDMsInGame = explicitContentFromProto.SlayerSDKReceiveDMsInGame;
    SlayerSDKReceiveDMsInGame.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.XpBObB)];
    return items;
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/InGameDMsSetting.tsx");

export default createToggle;