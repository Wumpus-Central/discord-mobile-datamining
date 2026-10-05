// discord_app/modules/user_settings/defs/native/InGameDMsSetting.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const SlayerSDKReceiveDMsInGame = UserSettings.SlayerSDKReceiveDMsInGame;
      let SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = SlayerSDKReceiveDMsInGame.useSetting();
      if (
        SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL ===
        preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET
      ) {
        SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL =
          preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
      }
      return SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
    }
  : () => {
      const SlayerSDKReceiveDMsInGame = UserSettings.SlayerSDKReceiveDMsInGame;
      let SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL = SlayerSDKReceiveDMsInGame.useSetting();
      if (
        SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL ===
        preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET
      ) {
        SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL =
          preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
      }
      return SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let intl2;
      let intl3;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
          label: intl.string(intl4.t.JIFnN9),
        };
        intl = intl4.intl;
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {
          value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
          label: intl2.string(intl4.t.rRdsk1),
        };
        intl2 = intl4.intl;
        cResult[1] = obj3;
        tmp5 = obj3;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [first, tmp5];
        const obj4 = {
          value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
          label: intl3.string(intl4.t.AolKwN),
        };
        intl3 = intl4.intl;
        items[2] = obj4;
        cResult[2] = items;
        tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      return tmp6;
    }
  : () =>
      react.useMemo(() => {
        let intl;
        let intl2;
        let intl3;
        const obj = {
          value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
          label: intl.string(intl4.t.JIFnN9),
        };
        intl = intl4.intl;
        const items = [obj, ,];
        const obj2 = {
          value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
          label: intl2.string(intl4.t.rRdsk1),
        };
        intl2 = intl4.intl;
        items[1] = obj2;
        const obj3 = {
          value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
          label: intl3.string(intl4.t.AolKwN),
        };
        intl3 = intl4.intl;
        items[2] = obj3;
        return items;
      }, []);
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t["ms+Tme"]);
  },
  parent: MobileUserSettings.CONNECTED_GAMES,
  useOptions: tmp3,
  useValue: tmp2,
  onValueChange: function onInGameDMsSettingValueChange(arg0) {
    const SlayerSDKReceiveDMsInGame = UserSettings.SlayerSDKReceiveDMsInGame;
    SlayerSDKReceiveDMsInGame.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = intl4.intl;
    const items = [intl.string(intl4.t.XpBObB)];
    return items;
  },
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InGameDMsSetting.tsx");

export default radio;
