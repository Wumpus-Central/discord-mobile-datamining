// discord_app/modules/user_settings/defs/native/InGameDMsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../../UserSettings.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
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
const SettingBuilders = fn(11142);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
          label: null,
        };
        const intl = util.intl;
        obj2.label = intl.string(util.t.JIFnN9);
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {
          value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
          label: null,
        };
        const intl2 = util.intl;
        obj3.label = intl2.string(util.t.rRdsk1);
        cResult[1] = obj3;
        let tmp5 = obj3;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [first, tmp5];
        const obj4 = {
          value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
          label: null,
        };
        const intl3 = util.intl;
        obj4.label = intl3.string(util.t.AolKwN);
        items[2] = obj4;
        cResult[2] = items;
        let tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      return tmp6;
    }
  : () =>
      noop.useMemo(() => {
        const obj = {
          value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
          label: null,
        };
        const intl = util.intl;
        obj.label = intl.string(util.t.JIFnN9);
        const items = [obj, ,];
        const obj2 = {
          value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
          label: null,
        };
        const intl2 = util.intl;
        obj2.label = intl2.string(util.t.rRdsk1);
        items[1] = obj2;
        const obj3 = {
          value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
          label: null,
        };
        const intl3 = util.intl;
        obj3.label = intl3.string(util.t.AolKwN);
        items[2] = obj3;
        return items;
      }, []);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["ms+Tme"]);
  },
  parent: fn(7645).MobileUserSettings.CONNECTED_GAMES,
  useOptions: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(3);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = {
            value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
            label: null,
          };
          const intl = util.intl;
          obj2.label = intl.string(util.t.JIFnN9);
          cResult[0] = obj2;
          let first = obj2;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = {
            value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
            label: null,
          };
          const intl2 = util.intl;
          obj3.label = intl2.string(util.t.rRdsk1);
          cResult[1] = obj3;
          let tmp5 = obj3;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [first, tmp5];
          const obj4 = {
            value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
            label: null,
          };
          const intl3 = util.intl;
          obj4.label = intl3.string(util.t.AolKwN);
          items[2] = obj4;
          cResult[2] = items;
          let tmp6 = items;
        } else {
          tmp6 = cResult[2];
        }
        return tmp6;
      }
    : () =>
        noop.useMemo(() => {
          const obj = {
            value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
            label: null,
          };
          const intl = util.intl;
          obj.label = intl.string(util.t.JIFnN9);
          const items = [obj, ,];
          const obj2 = {
            value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
            label: null,
          };
          const intl2 = util.intl;
          obj2.label = intl2.string(util.t.rRdsk1);
          items[1] = obj2;
          const obj3 = {
            value: preloaded_user_settings.SlayerSDKReceiveInGameDMs.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
            label: null,
          };
          const intl3 = util.intl;
          obj3.label = intl3.string(util.t.AolKwN);
          items[2] = obj3;
          return items;
        }, []),
  useValue: tmp2,
  onValueChange: function onInGameDMsSettingValueChange(arg0) {
    const SlayerSDKReceiveDMsInGame = UserSettings.SlayerSDKReceiveDMsInGame;
    SlayerSDKReceiveDMsInGame.updateSetting(Number(arg0));
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.XpBObB)];
    return items;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InGameDMsSetting.tsx");

export default radio;
