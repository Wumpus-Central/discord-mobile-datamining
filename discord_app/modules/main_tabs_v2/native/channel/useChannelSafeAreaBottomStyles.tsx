// === Module 11357: useChannelSafeAreaBottomStyles ===

// Module 11357 (useChannelSafeAreaBottomStyles)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import LurkingStore from "LurkingStore" /* 4200 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;

require = fn;
const InputModes = fn(1074).InputModes;
const StaticChannelRoute = fn(1964).StaticChannelRoute;
let closure_11 = { LURKER: "lurker", VOICE: "voice", CHAT: "chat", DIRECTORY: "directory", EXPRESSION_PICKER: "expression", MEDIA: "media", APPS: "apps", NONE: "none" };
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles((backgroundColor) => {
  let obj = { lurker: null, chat: null, voice: null, expressionPickerBackground: null };
  obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
  obj.lurker = obj;
  obj.chat = { backgroundColor };
  obj.voice = { backgroundColor };
  obj.expressionPickerBackground = { backgroundColor };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaBottomStyles.tsx");

export default function useChannelSafeAreaBottomStyles(arg0) {
  gradientBottom(stateFromStores[16]).useToken(require("native").colors.MOBILE_KEYBOARD_GAP_BACKGROUND);
  let obj = gradientBottom(stateFromStores[16]);
  const tmp = gradientBottom;
  gradientBottom = gradientBottom(stateFromStores[17]).useGradientBottom();
  let backgroundColor;
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (null != backgroundColor) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  const tmp6 = closure_12(backgroundColor);
  importDefault = tmp6;
  closure_129_0 = arg0;
  closure_129_1 = null != tmp3(tmp2[10])(arg0);
  closure_129_2 = tmp3(tmp2[11])(arg0).needSubscriptionToAccess;
  closure_129_3 = tmp3(tmp2[12])();
  const obj2 = gradientBottom(stateFromStores[17]);
  const items = [GatewayConnectionStore, ChannelStore, LurkingStore, MediaEngineStore, RTCConnectionStore];
  stateFromStores = tmp(stateFromStores[13]).useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(gradientBottom);
    if (channel != null) {
      const guildId = channel.getGuildId();
    }
    if (gradientBottom !== StaticChannelRoute.GUILD_HOME) {
      if (gradientBottom !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!stateFromStores) {
          if (GatewayConnectionStore.isConnected()) {
            if (MediaEngineStore.getMode() !== InputModes.PUSH_TO_TALK) {
              if (noop === KeyboardTypes.KeyboardTypes.EXPRESSION) {
                let tmp10Result = PlatformUtils;
                if (tmp10Result.isAndroid()) {
                  let VOICE = constants.EXPRESSION_PICKER;
                }
              }
              if (noop === KeyboardTypes.KeyboardTypes.MEDIA) {
                tmp10Result = PlatformUtils;
                if (tmp10Result.isAndroid()) {
                  VOICE = constants.MEDIA;
                }
              }
              if (noop === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
                if (tmp10Result1.isAndroid()) {
                  VOICE = constants.APPS;
                }
                tmp10Result1 = PlatformUtils;
              }
              let isDirectoryResult;
              if (channel != null) {
                isDirectoryResult = channel.isDirectory();
              }
              if (true === isDirectoryResult) {
                VOICE = constants.DIRECTORY;
              } else {
                if (null != guildId) {
                  if (LurkingStore.isLurking(guildId)) {
                    VOICE = constants.LURKER;
                  }
                }
                let isForumLikeChannelResult;
                if (channel != null) {
                  isForumLikeChannelResult = channel.isForumLikeChannel();
                }
                if (true === isForumLikeChannelResult) {
                  if (!closure_1) {
                    VOICE = constants.CHAT;
                  }
                }
                if (null != gradientBottom) {
                  let NONE2 = constants.CHAT;
                } else {
                  NONE2 = constants.NONE;
                }
              }
            }
            VOICE = constants.VOICE;
          } else if (null == gradientBottom) {
            let NONE = constants.NONE;
          } else {
            NONE = constants.CHAT;
          }
        }
        return NONE;
      }
    }
    NONE = constants.NONE;
  });
  const items1 = [tmp6, gradientBottom, stateFromStores];
  return noop.useMemo(() => {
    if (stateFromStores !== constants.NONE) {
      if (stateFromStores !== constants.DIRECTORY) {
        if (stateFromStores !== constants.EXPRESSION_PICKER) {
          if (stateFromStores !== constants.MEDIA) {
            if (stateFromStores !== constants.APPS) {
              if (stateFromStores === constants.CHAT) {
                let obj = {};
                const merged = Object.assign(closure_1.chat);
                const merged1 = Object.assign(gradientBottom);
                let prop = obj;
              } else if (stateFromStores === constants.VOICE) {
                obj = {};
                const merged2 = Object.assign(closure_1.voice);
                const merged3 = Object.assign(gradientBottom);
                prop = obj;
              } else {
                prop = {};
                const merged4 = Object.assign(closure_1[stateFromStores]);
                const merged5 = Object.assign(gradientBottom);
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