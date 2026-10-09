// === Module 10342: useChannelSafeAreaBottomStyles ===

// Module 10342 (useChannelSafeAreaBottomStyles)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import KeyboardTypes from "KeyboardTypes" /* 1629 */;
import useToken from "useToken" /* 4779 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 9279 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5754 */;
import LurkingStore from "LurkingStore" /* 4710 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import MediaEngineStore from "MediaEngineStore" /* 2012 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5109 */;

require = fn;
const InputModes = fn(1085).InputModes;
const StaticChannelRoute = fn(2071).StaticChannelRoute;
const constants = { LURKER: "lurker", VOICE: "voice", CHAT: "chat", DIRECTORY: "directory", EXPRESSION_PICKER: "expression", MEDIA: "media", APPS: "apps", NONE: "none" };
const createStyles = fn(5091);
let closure_12 = createStyles.createStyles((backgroundColor) => {
  const obj = { lurker: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, chat: { backgroundColor }, voice: { backgroundColor }, expressionPickerBackground: { backgroundColor } };
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelSafeAreaBottomType(arg0) {
  _require = arg0;
  const cResult = require("c").c(6);
  const tmp4 = null != require("useCreateThreadViewProps")(arg0);
  importDefault = tmp4;
  needSubscriptionToAccess = require("useChannelRoleSubscriptionStatus")(arg0).needSubscriptionToAccess;
  const tmp5 = require("useKeyboardType")();
  closure_3 = tmp5;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GatewayConnectionStore, ChannelStore, LurkingStore, MediaEngineStore, RTCConnectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === tmp4) {
      if (cResult[3] === tmp5) {
        if (cResult[4] === needSubscriptionToAccess) {
          let tmp12 = cResult[5];
        }
        return tmp(tmp2[17]).useStateFromStores(first, tmp12);
      }
    }
  }
  class S {
    constructor() {
      tmp = closure_0;
      channel = closure_6.getChannel(closure_0);
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      if (tmp !== StaticChannelRoute.GUILD_HOME) {
        if (tmp !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
          tmp27 = needSubscriptionToAccess;
          if (!needSubscriptionToAccess) {
            tmp3 = closure_4;
            if (closure_4.isConnected()) {
              tmp6 = closure_7;
              tmp7 = InputModes;
              if (closure_7.getMode() !== InputModes.PUSH_TO_TALK) {
                tmp9 = closure_3;
                tmp10 = closure_0;
                tmp11 = closure_2;
                if (closure_3 === closure_0(closure_2[15]).KeyboardTypes.EXPRESSION) {
                  tmp10Result = tmp10(tmp11[16]);
                  if (tmp10Result.isAndroid()) {
                    tmp24 = closure_11;
                    VOICE = closure_11.EXPRESSION_PICKER;
                  }
                  tmp26 = VOICE;
                }
                if (tmp9 === tmp10(tmp11[15]).KeyboardTypes.MEDIA) {
                  tmp10Result1 = tmp10(tmp11[16]);
                  if (tmp10Result1.isAndroid()) {
                    tmp23 = closure_11;
                    VOICE = closure_11.MEDIA;
                  }
                }
                if (tmp9 === tmp10(tmp11[15]).KeyboardTypes.APP_LAUNCHER) {
                  tmp10Result2 = tmp10(tmp11[16]);
                  if (tmp10Result2.isAndroid()) {
                    tmp22 = closure_11;
                    VOICE = closure_11.APPS;
                  }
                }
                isDirectoryResult = undefined;
                if (channel != null) {
                  isDirectoryResult = channel.isDirectory();
                }
                flag = true;
                if (true === isDirectoryResult) {
                  tmp21 = closure_11;
                  VOICE = closure_11.DIRECTORY;
                } else {
                  if (null != guildId) {
                    tmp13 = closure_5;
                    if (closure_5.isLurking(guildId)) {
                      tmp20 = closure_11;
                      VOICE = closure_11.LURKER;
                    }
                  }
                  isForumLikeChannelResult = undefined;
                  if (channel != null) {
                    isForumLikeChannelResult = channel.isForumLikeChannel();
                  }
                  if (true === isForumLikeChannelResult) {
                    tmp15 = closure_1;
                    if (!closure_1) {
                      tmp16 = closure_11;
                      VOICE = closure_11.CHAT;
                    }
                  }
                  if (null != tmp) {
                    tmp18 = closure_11;
                    NONE2 = closure_11.CHAT;
                  } else {
                    tmp17 = closure_11;
                    NONE2 = closure_11.NONE;
                  }
                  tmp19 = NONE2;
                }
              } else {
                tmp8 = closure_8;
              }
              tmp25 = closure_11;
              VOICE = closure_11.VOICE;
            } else if (null == tmp) {
              tmp5 = closure_11;
              NONE = closure_11.NONE;
            } else {
              tmp4 = closure_11;
              NONE = closure_11.CHAT;
            }
          }
          return NONE;
        }
      }
      NONE = closure_11.NONE;
      return;
    }
  }
  cResult[1] = arg0;
  cResult[2] = tmp4;
  cResult[3] = tmp5;
  cResult[4] = needSubscriptionToAccess;
  cResult[5] = S;
  tmp12 = S;
  const obj = require("c");
  tmp = _require;
  tmp2 = needSubscriptionToAccess;
}) : (function useChannelSafeAreaBottomType(arg0) {
  _require = arg0;
  importDefault = null != require("useCreateThreadViewProps")(arg0);
  needSubscriptionToAccess = require("useChannelRoleSubscriptionStatus")(arg0).needSubscriptionToAccess;
  closure_3 = require("useKeyboardType")();
  const items = [GatewayConnectionStore, ChannelStore, LurkingStore, MediaEngineStore, RTCConnectionStore];
  return require("useStateFromStores").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    if (channel != null) {
      const guildId = channel.getGuildId();
    }
    if (closure_0 !== StaticChannelRoute.GUILD_HOME) {
      if (closure_0 !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (GatewayConnectionStore.isConnected()) {
            if (MediaEngineStore.getMode() !== InputModes.PUSH_TO_TALK) {
              if (closure_3 === KeyboardTypes.KeyboardTypes.EXPRESSION) {
                if (tmp10Result.isAndroid()) {
                  let VOICE = constants.EXPRESSION_PICKER;
                }
                tmp10Result = PlatformUtils;
              }
              if (closure_3 === KeyboardTypes.KeyboardTypes.MEDIA) {
                if (tmp10Result3.isAndroid()) {
                  VOICE = constants.MEDIA;
                }
                tmp10Result3 = PlatformUtils;
              }
              if (closure_3 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
                if (tmp10Result4.isAndroid()) {
                  VOICE = constants.APPS;
                }
                tmp10Result4 = PlatformUtils;
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
                if (null != closure_0) {
                  let NONE2 = constants.CHAT;
                } else {
                  NONE2 = constants.NONE;
                }
              }
            }
            VOICE = constants.VOICE;
          } else if (null == closure_0) {
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
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/useChannelSafeAreaBottomStyles.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelSafeAreaBottomStyles(arg0) {
  const cResult = c.c(9);
  let backgroundColor = useToken.useToken(nativeDefault.colors.MOBILE_KEYBOARD_GAP_BACKGROUND);
  const gradientBottom = ClientThemesOverrides.useGradientBottom();
  let backgroundColor1;
  if (gradientBottom != null) {
    backgroundColor1 = gradientBottom.backgroundColor;
  }
  if (null != backgroundColor1) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  const tmp4 = closure_12(backgroundColor);
  const tmp5 = closure_13(arg0);
  let prop;
  if (tmp5 !== constants.NONE) {
    if (tmp5 !== constants.DIRECTORY) {
      if (tmp5 !== constants.EXPRESSION_PICKER) {
        if (tmp5 !== constants.MEDIA) {
          if (tmp5 !== constants.APPS) {
            if (tmp5 !== constants.CHAT) {
              if (tmp5 !== constants.VOICE) {
                if (cResult[6] === gradientBottom) {
                }
                const obj4 = {};
                const merged = Object.assign(tmp20);
                const merged1 = Object.assign(gradientBottom);
                cResult[6] = gradientBottom;
                cResult[7] = tmp4[tmp5];
                cResult[8] = obj4;
              } else {
                if (cResult[3] === gradientBottom) {
                  if (cResult[4] === tmp4.voice) {
                    let tmp14 = cResult[5];
                  }
                  prop = tmp14;
                }
                const obj5 = {};
                const merged2 = Object.assign(tmp4.voice);
                const merged3 = Object.assign(gradientBottom);
                cResult[3] = gradientBottom;
                cResult[4] = tmp4.voice;
                cResult[5] = obj5;
                tmp14 = obj5;
              }
            } else {
              if (cResult[0] === gradientBottom) {
                if (cResult[1] === tmp4.chat) {
                  let tmp8 = cResult[2];
                }
                prop = tmp8;
              }
              const obj6 = {};
              const merged4 = Object.assign(tmp4.chat);
              const merged5 = Object.assign(gradientBottom);
              cResult[0] = gradientBottom;
              cResult[1] = tmp4.chat;
              cResult[2] = obj6;
              tmp8 = obj6;
            }
          }
        }
      }
      prop = tmp4.expressionPickerBackground;
    }
  }
  return prop;
}) : (function useChannelSafeAreaBottomStyles(arg0) {
  const token = gradientBottom(4779).useToken(nativeDefault.colors.MOBILE_KEYBOARD_GAP_BACKGROUND);
  let obj = gradientBottom(4779);
  gradientBottom = gradientBottom(9279).useGradientBottom();
  let backgroundColor1;
  if (gradientBottom != null) {
    backgroundColor1 = gradientBottom.backgroundColor;
  }
  let backgroundColor = token;
  if (null != backgroundColor1) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  const tmp4 = closure_12(backgroundColor);
  importDefault = tmp4;
  const tmp5 = closure_13(arg0);
  dependencyMap = tmp5;
  const items = [tmp4, gradientBottom, tmp5];
  return noop.useMemo(() => {
    if (closure_2 !== constants.NONE) {
      if (closure_2 !== constants.DIRECTORY) {
        if (closure_2 !== constants.EXPRESSION_PICKER) {
          if (closure_2 !== constants.MEDIA) {
            if (closure_2 !== constants.APPS) {
              if (closure_2 === constants.CHAT) {
                const obj = {};
                const merged = Object.assign(closure_1.chat);
                const merged1 = Object.assign(gradientBottom);
                let prop = obj;
              } else if (closure_2 === constants.VOICE) {
                const obj2 = {};
                const merged2 = Object.assign(closure_1.voice);
                const merged3 = Object.assign(gradientBottom);
                prop = obj2;
              } else {
                prop = {};
                const merged4 = Object.assign(closure_1[closure_2]);
                const merged5 = Object.assign(gradientBottom);
              }
            }
            return prop;
          }
        }
        prop = closure_1.expressionPickerBackground;
      }
    }
  }, items);
});