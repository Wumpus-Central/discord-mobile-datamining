// discord_app/modules/main_tabs_v2/native/channel/useChannelSafeAreaBottomStyles.tsx
import set from "set";
import _handleConnectionOpen from "_handleConnectionOpen";
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createRTCConnection from "createRTCConnection";
import { InputModes } from "ME";
import { StaticChannelRoute } from "set";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_11 = { LURKER: "lurker", VOICE: "voice", CHAT: "chat", DIRECTORY: "directory", EXPRESSION_PICKER: "expression", MEDIA: "media", APPS: "apps", NONE: "none" };
let closure_12 = createCacheKey.createStyles((backgroundColor) => {
  let obj = { lurker: null, chat: null, voice: null, expressionPickerBackground: null };
  obj = { backgroundColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_BASE_LOWER };
  obj[0] = obj;
  obj[1] = { backgroundColor };
  obj[2] = { backgroundColor };
  obj = { backgroundColor: require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.MOBILE_KEYBOARD_GAP_BACKGROUND };
  obj[3] = obj;
  return obj;
});
const result = require("initialize").fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaBottomStyles.tsx");

export default function useChannelSafeAreaBottomStyles(arg0) {
  let obj = _require(stateFromStores[16]);
  const refreshToken = _require(stateFromStores[16]).resolveRefreshToken(importDefault(stateFromStores[9]).modules.mobile.CHANNEL_SAFE_AREA_BOTTOM_BACKGROUND, obj.useMobileVisualRefreshConfig({ location: "useChannelSafeAreaBottomStyles" }).chatInputFloating);
  const obj2 = _require(stateFromStores[16]);
  const tmp2 = callback(_require(stateFromStores[17]).useToken(refreshToken));
  _require = tmp2;
  const obj3 = _require(stateFromStores[17]);
  const gradientBottom = _require(stateFromStores[18]).useGradientBottom();
  importDefault = gradientBottom;
  _require = arg0;
  importDefault = undefined;
  stateFromStores = undefined;
  let React;
  importDefault = null != importDefault(stateFromStores[10])(arg0);
  stateFromStores = importDefault(stateFromStores[11])(arg0).needSubscriptionToAccess;
  React = importDefault(stateFromStores[12])();
  const obj4 = _require(stateFromStores[18]);
  const items = [_handleConnectionOpen, ensureGuildLoaded, initialize, _detectH265HardwareDecode, createRTCConnection];
  stateFromStores = _require(stateFromStores[13]).useStateFromStores(items, () => {
    const channel = outer1_6.getChannel(lib);
    if (channel != null) {
      const guildId = channel.getGuildId();
    }
    if (lib !== outer1_10.GUILD_HOME) {
      if (tmp !== outer1_10.ROLE_SUBSCRIPTIONS) {
        if (!stateFromStores) {
          if (outer1_4.isConnected()) {
            if (outer1_7.getMode() !== outer1_9.PUSH_TO_TALK) {
              if (set === lib(stateFromStores[14]).KeyboardTypes.EXPRESSION) {
                let tmp10Result = tmp10(tmp11[15]);
                if (tmp10Result.isAndroid()) {
                  let VOICE = outer1_11.EXPRESSION_PICKER;
                }
              }
              if (set === lib(stateFromStores[14]).KeyboardTypes.MEDIA) {
                tmp10Result = tmp10(tmp11[15]);
                if (tmp10Result.isAndroid()) {
                  VOICE = outer1_11.MEDIA;
                }
              }
              if (set === lib(stateFromStores[14]).KeyboardTypes.APP_LAUNCHER) {
                if (tmp10Result1.isAndroid()) {
                  VOICE = outer1_11.APPS;
                }
                tmp10Result1 = tmp10(tmp11[15]);
              }
              let isDirectoryResult;
              if (channel != null) {
                isDirectoryResult = channel.isDirectory();
              }
              if (true === isDirectoryResult) {
                VOICE = outer1_11.DIRECTORY;
              } else {
                if (null != guildId) {
                  if (outer1_5.isLurking(guildId)) {
                    VOICE = outer1_11.LURKER;
                  }
                }
                let isForumLikeChannelResult;
                if (channel != null) {
                  isForumLikeChannelResult = channel.isForumLikeChannel();
                }
                if (true === isForumLikeChannelResult) {
                  if (!closure_1) {
                    VOICE = outer1_11.CHAT;
                  }
                }
                if (null != tmp) {
                  let NONE2 = outer1_11.CHAT;
                } else {
                  NONE2 = outer1_11.NONE;
                }
              }
            }
            VOICE = outer1_11.VOICE;
          } else if (null == tmp) {
            let NONE = outer1_11.NONE;
          } else {
            NONE = outer1_11.CHAT;
          }
        }
        return NONE;
      }
    }
    NONE = outer1_11.NONE;
  });
  const items1 = [tmp2, gradientBottom, stateFromStores];
  return React.useMemo(() => {
    if (stateFromStores !== outer1_11.NONE) {
      if (tmp !== tmp2.DIRECTORY) {
        if (tmp !== tmp2.EXPRESSION_PICKER) {
          if (tmp !== tmp2.MEDIA) {
            if (tmp !== tmp2.APPS) {
              if (tmp === tmp2.CHAT) {
                let obj = {};
                const merged = Object.assign(lib.chat);
                const merged1 = Object.assign(closure_1);
                let prop = obj;
              } else if (tmp === tmp2.VOICE) {
                obj = {};
                const merged2 = Object.assign(lib.voice);
                const merged3 = Object.assign(closure_1);
                prop = obj;
              } else {
                prop = {};
                const merged4 = Object.assign(lib[tmp]);
                const merged5 = Object.assign(closure_1);
              }
            }
            return prop;
          }
        }
        prop = lib.expressionPickerBackground;
      }
    }
  }, items1);
};