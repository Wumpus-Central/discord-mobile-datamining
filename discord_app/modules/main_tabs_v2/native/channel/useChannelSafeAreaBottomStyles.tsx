// === Module 11357: useChannelSafeAreaBottomStyles ===

// Module 11357 (useChannelSafeAreaBottomStyles)
import ThemesDefault from "Themes" /* 576 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "_handleConnectionOpen" /* 5277 */;
import closure_5 from "initialize" /* 4200 */;
import closure_6 from "ensureGuildLoaded" /* 1957 */;
import closure_7 from "_detectH265HardwareDecode" /* 1908 */;
import closure_8 from "createRTCConnection" /* 4583 */;
import { InputModes } from "ME" /* 1074 */;
import { StaticChannelRoute } from "set" /* 1964 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
let closure_11 = { LURKER: "lurker", VOICE: "voice", CHAT: "chat", DIRECTORY: "directory", EXPRESSION_PICKER: "expression", MEDIA: "media", APPS: "apps", NONE: "none" };
let closure_12 = createCacheKey.createStyles((backgroundColor) => {
  let obj = { lurker: null, chat: null, voice: null, expressionPickerBackground: null };
  obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
  obj[0] = obj;
  obj[1] = { backgroundColor };
  obj[2] = { backgroundColor };
  obj[3] = { backgroundColor };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaBottomStyles.tsx");

export default function useChannelSafeAreaBottomStyles(arg0) {
  let backgroundColor = _require(stateFromStores[16]).useToken(importDefault(stateFromStores[9]).colors.MOBILE_KEYBOARD_GAP_BACKGROUND);
  let obj = _require(stateFromStores[16]);
  const tmp = _require;
  const gradientBottom = _require(stateFromStores[17]).useGradientBottom();
  _require = gradientBottom;
  backgroundColor = undefined;
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (null != backgroundColor) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  const tmp6 = callback(backgroundColor);
  importDefault = tmp6;
  _require = arg0;
  importDefault = undefined;
  stateFromStores = undefined;
  let React;
  importDefault = null != tmp3(tmp2[10])(arg0);
  stateFromStores = tmp3(tmp2[11])(arg0).needSubscriptionToAccess;
  React = tmp3(tmp2[12])();
  const obj2 = _require(stateFromStores[17]);
  const items = [closure_4, closure_6, closure_5, closure_7, closure_8];
  stateFromStores = tmp(stateFromStores[13]).useStateFromStores(items, () => {
    const channel = closure_1_6.getChannel(callback);
    if (channel != null) {
      const guildId = channel.getGuildId();
    }
    if (callback !== closure_1_10.GUILD_HOME) {
      if (tmp !== closure_1_10.ROLE_SUBSCRIPTIONS) {
        if (!stateFromStores) {
          if (closure_1_4.isConnected()) {
            if (closure_1_7.getMode() !== closure_1_9.PUSH_TO_TALK) {
              if (closure_3 === callback(stateFromStores[14]).KeyboardTypes.EXPRESSION) {
                let tmp10Result = tmp10(tmp11[15]);
                if (tmp10Result.isAndroid()) {
                  let VOICE = closure_1_11.EXPRESSION_PICKER;
                }
              }
              if (closure_3 === callback(stateFromStores[14]).KeyboardTypes.MEDIA) {
                tmp10Result = tmp10(tmp11[15]);
                if (tmp10Result.isAndroid()) {
                  VOICE = closure_1_11.MEDIA;
                }
              }
              if (closure_3 === callback(stateFromStores[14]).KeyboardTypes.APP_LAUNCHER) {
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
  const items1 = [tmp6, gradientBottom, stateFromStores];
  return React.useMemo(() => {
    if (stateFromStores !== closure_1_11.NONE) {
      if (tmp !== tmp2.DIRECTORY) {
        if (tmp !== tmp2.EXPRESSION_PICKER) {
          if (tmp !== tmp2.MEDIA) {
            if (tmp !== tmp2.APPS) {
              if (tmp === tmp2.CHAT) {
                let obj = {};
                const merged = Object.assign(closure_1.chat);
                const merged1 = Object.assign(closure_0);
                let prop = obj;
              } else if (tmp === tmp2.VOICE) {
                obj = {};
                const merged2 = Object.assign(closure_1.voice);
                const merged3 = Object.assign(closure_0);
                prop = obj;
              } else {
                prop = {};
                const merged4 = Object.assign(closure_1[tmp]);
                const merged5 = Object.assign(closure_0);
              }
            }
            return prop;
          }
        }
        prop = closure_1.expressionPickerBackground;
      }
    }
  }, items1);
};