// === Module 10468: useChannelSafeAreaBottomStyles ===

// Module 10468 (useChannelSafeAreaBottomStyles)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "_handleConnectionOpen" /* 5168 */;
import closure_5 from "initialize" /* 4090 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "_detectH265HardwareDecode" /* 4495 */;
import closure_8 from "createRTCConnection" /* 4518 */;
import { InputModes } from "ME" /* 676 */;
import { StaticChannelRoute } from "set" /* 1398 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
let closure_11 = { LURKER: "lurker", VOICE: "voice", CHAT: "chat", DIRECTORY: "directory", EXPRESSION_PICKER: "expression", MEDIA: "media", APPS: "apps", NONE: "none" };
let closure_12 = createCacheKey.createStyles((backgroundColor) => {
  let obj = { lurker: null, chat: null, voice: null, expressionPickerBackground: null };
  obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
  obj[0] = obj;
  obj[1] = { backgroundColor };
  obj[2] = { backgroundColor };
  obj = { backgroundColor: ThemesDefault.colors.MOBILE_KEYBOARD_GAP_BACKGROUND };
  obj[3] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaBottomStyles.tsx");

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
  const items = [closure_4, closure_6, closure_5, closure_7, closure_8];
  stateFromStores = _require(stateFromStores[13]).useStateFromStores(items, () => {
    const channel = closure_1_6.getChannel(lib);
    if (channel != null) {
      const guildId = channel.getGuildId();
    }
    if (lib !== closure_1_10.GUILD_HOME) {
      if (tmp !== closure_1_10.ROLE_SUBSCRIPTIONS) {
        if (!stateFromStores) {
          if (closure_1_4.isConnected()) {
            if (closure_1_7.getMode() !== closure_1_9.PUSH_TO_TALK) {
              if (closure_3 === lib(stateFromStores[14]).KeyboardTypes.EXPRESSION) {
                let tmp10Result = tmp10(tmp11[15]);
                if (tmp10Result.isAndroid()) {
                  let VOICE = closure_1_11.EXPRESSION_PICKER;
                }
              }
              if (closure_3 === lib(stateFromStores[14]).KeyboardTypes.MEDIA) {
                tmp10Result = tmp10(tmp11[15]);
                if (tmp10Result.isAndroid()) {
                  VOICE = closure_1_11.MEDIA;
                }
              }
              if (closure_3 === lib(stateFromStores[14]).KeyboardTypes.APP_LAUNCHER) {
                if (tmp10Result1.isAndroid()) {
                  VOICE = closure_1_11.APPS;
                }
                tmp10Result1 = tmp10(tmp11[15]);
              }
              let isDirectoryResult;
              if (channel != null) {
                isDirectoryResult = channel.isDirectory();
              }
              if (true === isDirectoryResult) {
                VOICE = closure_1_11.DIRECTORY;
              } else {
                if (null != guildId) {
                  if (closure_1_5.isLurking(guildId)) {
                    VOICE = closure_1_11.LURKER;
                  }
                }
                let isForumLikeChannelResult;
                if (channel != null) {
                  isForumLikeChannelResult = channel.isForumLikeChannel();
                }
                if (true === isForumLikeChannelResult) {
                  if (!closure_1) {
                    VOICE = closure_1_11.CHAT;
                  }
                }
                if (null != tmp) {
                  let NONE2 = closure_1_11.CHAT;
                } else {
                  NONE2 = closure_1_11.NONE;
                }
              }
            }
            VOICE = closure_1_11.VOICE;
          } else if (null == tmp) {
            let NONE = closure_1_11.NONE;
          } else {
            NONE = closure_1_11.CHAT;
          }
        }
        return NONE;
      }
    }
    NONE = closure_1_11.NONE;
  });
  const items1 = [tmp2, gradientBottom, stateFromStores];
  return React.useMemo(() => {
    if (stateFromStores !== closure_1_11.NONE) {
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