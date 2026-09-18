// === Module 16132: InGameDMsSetting ===

// Module 16132 (InGameDMsSetting)
import util from "util" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import UserSettings from "UserSettings" /* 1936 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11714);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["ms+Tme"]);
  },
  parent: fn(8194).MobileUserSettings.CONNECTED_GAMES,
  useOptions: function useInGameDMsSettingOptions() {
    return noop.useMemo(() => {
      const obj = { value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL, label: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.JIFnN9);
      const items = [obj, , ];
      const obj2 = { value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME, label: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.rRdsk1);
      items[1] = obj2;
      const obj3 = { value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE, label: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.AolKwN);
      items[2] = obj3;
      return items;
    }, []);
  },
  useValue: function useInGameDMsSettingValue() {
    const SlayerSDKReceiveDMsInGame = UserSettings.SlayerSDKReceiveDMsInGame;
    let SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = SlayerSDKReceiveDMsInGame.useSetting();
    if (SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL === preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET) {
      SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
    }
    return SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
  },
  onValueChange: function onInGameDMsSettingValueChange(arg0) {
    const SlayerSDKReceiveDMsInGame = UserSettings.SlayerSDKReceiveDMsInGame;
    SlayerSDKReceiveDMsInGame.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.XpBObB)];
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InGameDMsSetting.tsx");

export default radio;