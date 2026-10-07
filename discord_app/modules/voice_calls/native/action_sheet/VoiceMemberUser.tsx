// discord_app/modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import _modDef4814 from "../../../../../_runtime/metro/04814__.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import StreamerApplicationSelectors from "../../../go_live/utils/StreamerApplicationSelectors.tsx";
import useIsSpeakingDefault from "../../../../hooks/useIsSpeaking.tsx";
import CallActionCreatorsDefault from "../../../../actions/CallActionCreators.tsx";
import _modDef13614 from "../../../../../_runtime/metro/13614__.js";
import _modDef13615 from "../../../../../_runtime/metro/13615__.js";
import _modDef13616 from "../../../../../_runtime/metro/13616__.js";
import _modDef13617 from "../../../../../_runtime/metro/13617__.js";
import _modDef13618 from "../../../../../_runtime/metro/13618__.js";
import _modDef13619 from "../../../../../_runtime/metro/13619__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import CallStore from "../../../../stores/CallStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import PresenceStore from "../../../../stores/PresenceStore.tsx";

require = fn;
let user = ["user", "name", "channel", "voiceState", "withStream", "isSpectating", "isActionSheet", "onPress"];
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Platform } = get_ActivityIndicator);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let createStyles = fn(4896);
let obj = {
  row: { flexDirection: "row" },
  voiceStatusIcon: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 },
  voiceStatusIconMargin: { marginLeft: 8 },
  streamPreview: { marginHorizontal: 16, marginBottom: 16, alignItems: "center", flex: 1 },
  ringingButton: null,
  ringingButtonLabel: null,
  autoDisabledVideo: null,
  autoDisabledVideoLabel: null,
};
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj.ringingButton = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
};
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
};
obj.ringingButtonLabel = {
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
  fontSize: 14,
  lineHeight: 18,
  marginHorizontal: 16,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
obj.autoDisabledVideo = { flexDirection: "row", alignItems: "center" };
obj.autoDisabledVideoLabel = { marginLeft: 4 };
let closure_16 = createStyles.createStyles(obj);
createStyles = fn(4896);
let obj6 = { labelCallScreen: null, voiceStatusIcon: null, ringingButton: null, ringingButtonLabel: null };
let obj5 = {
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
  fontSize: 14,
  lineHeight: 18,
  marginHorizontal: 16,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
obj6.labelCallScreen = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj8 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj6.voiceStatusIcon = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
let obj9 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj6.ringingButton = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
};
let obj10 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
};
obj6.ringingButtonLabel = {
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
  fontSize: 14,
  lineHeight: 18,
  marginHorizontal: 16,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
let closure_17 = createStyles.createStyles(obj6);
let ReactCompilerGating = fn(558);
let closure_18 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (user) => {
        const cResult = require("c").c(101);
        if (cResult[0] !== user) {
          user = user.user;
          ({ name, channel } = user);
          _require = channel;
          ({ voiceState, withStream, isSpectating } = user);
          importDefault = isSpectating;
          ({ isActionSheet, onPress } = user);
          dependencyMap = onPress;
          const tmp15 = _objectWithoutProperties(user, user);
          cResult[0] = user;
          cResult[1] = channel;
          cResult[2] = isActionSheet;
          cResult[3] = isSpectating;
          cResult[4] = name;
          cResult[5] = onPress;
          cResult[6] = tmp15;
          cResult[7] = withStream;
          cResult[8] = user;
          cResult[9] = voiceState;
          let tmp12 = voiceState;
        } else {
          _require = cResult[1];
          importDefault = cResult[3];
          dependencyMap = cResult[5];
          user = cResult[8];
          tmp12 = cResult[9];
        }
        let obj = require("c");
        _objectWithoutProperties = style();
        closure_17();
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const id = localMute.getId();
          cResult[10] = id;
          let tmp19 = id;
        } else {
          tmp19 = cResult[10];
        }
        closure_5 = tmp19;
        if (cResult[11] !== tmp11.id) {
          let obj2 = { userId: tmp11.id };
          cResult[11] = tmp11.id;
          cResult[12] = obj2;
          let tmp22 = obj2;
        } else {
          tmp22 = cResult[12];
        }
        useIsSpeakingDefault(tmp22);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        if (cResult[13] === guild_id) {
          if (cResult[14] === tmp11.id) {
            let tmp25 = cResult[15];
          }
          const avatarSpeakingColor = tmp(9157).useAvatarSpeakingColor(tmp25);
          const _Symbol = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            let items = [stateFromStores];
            class O {
              constructor() {
                return closure_6.theme;
              }
            }
            cResult[16] = items;
            cResult[17] = O;
            let tmp28 = O;
            let tmp27 = items;
          } else {
            tmp27 = cResult[16];
            tmp28 = cResult[17];
          }
          const tmpResult = tmp(9157);
          stateFromStores = tmp(504).useStateFromStores(tmp27, tmp28);
          const _Symbol2 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [MediaEngineStore];
            class O {
              constructor() {
                return closure_6.theme;
              }
            }
            cResult[18] = items1;
            let tmp31 = items1;
          } else {
            tmp31 = cResult[18];
          }
          if (cResult[19] !== tmp11.id) {
            class X {
              constructor() {
                tmp = closure_3;
                isVideoEnabledResult = closure_5 === closure_3.id;
                isSelfMuteResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp4 = closure_11;
                  isSelfMuteResult = closure_11.isSelfMute();
                }
                obj = {
                  isSelfMute: isSelfMuteResult,
                  localMute: closure_11.isLocalMute(tmp.id),
                  localDeaf: null,
                  localVideo: null,
                  localVideoDisabled: null,
                  localVideoAutoDisabled: null,
                };
                isSelfDeafResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp6 = closure_11;
                  isSelfDeafResult = closure_11.isSelfDeaf();
                }
                obj.localDeaf = isSelfDeafResult;
                if (isVideoEnabledResult) {
                  tmp7 = closure_11;
                  isVideoEnabledResult = closure_11.isVideoEnabled();
                }
                obj.localVideo = isVideoEnabledResult;
                obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                return obj;
              }
            }
            cResult[19] = tmp11.id;
            class O {
              constructor() {
                return closure_6.theme;
              }
            }
            cResult[20] = X;
          } else {
            class X {
              constructor() {
                tmp = closure_3;
                isVideoEnabledResult = closure_5 === closure_3.id;
                isSelfMuteResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp4 = closure_11;
                  isSelfMuteResult = closure_11.isSelfMute();
                }
                obj = {
                  isSelfMute: isSelfMuteResult,
                  localMute: closure_11.isLocalMute(tmp.id),
                  localDeaf: null,
                  localVideo: null,
                  localVideoDisabled: null,
                  localVideoAutoDisabled: null,
                };
                isSelfDeafResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp6 = closure_11;
                  isSelfDeafResult = closure_11.isSelfDeaf();
                }
                obj.localDeaf = isSelfDeafResult;
                if (isVideoEnabledResult) {
                  tmp7 = closure_11;
                  isVideoEnabledResult = closure_11.isVideoEnabled();
                }
                obj.localVideo = isVideoEnabledResult;
                obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                return obj;
              }
            }
          }
          const tmpResult4 = tmp(504);
          const stateFromStoresObject = tmp(504).useStateFromStoresObject(tmp31, X);
          localMute = stateFromStoresObject.localMute;
          ({ localDeaf, localVideo, isSelfMute, localVideoDisabled } = stateFromStoresObject);
          const localVideoAutoDisabled = stateFromStoresObject.localVideoAutoDisabled;
          const _Symbol3 = Symbol;
          if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
            class X {
              constructor() {
                tmp = closure_3;
                isVideoEnabledResult = closure_5 === closure_3.id;
                isSelfMuteResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp4 = closure_11;
                  isSelfMuteResult = closure_11.isSelfMute();
                }
                obj = {
                  isSelfMute: isSelfMuteResult,
                  localMute: closure_11.isLocalMute(tmp.id),
                  localDeaf: null,
                  localVideo: null,
                  localVideoDisabled: null,
                  localVideoAutoDisabled: null,
                };
                isSelfDeafResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp6 = closure_11;
                  isSelfDeafResult = closure_11.isSelfDeaf();
                }
                obj.localDeaf = isSelfDeafResult;
                if (isVideoEnabledResult) {
                  tmp7 = closure_11;
                  isVideoEnabledResult = closure_11.isVideoEnabled();
                }
                obj.localVideo = isVideoEnabledResult;
                obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                return obj;
              }
            }
            const items2 = [localDeaf];
            class O {
              constructor() {
                return closure_6.theme;
              }
            }
            cResult[21] = items2;
            const tmp35 = items2;
          } else {
            class X {
              constructor() {
                tmp = closure_3;
                isVideoEnabledResult = closure_5 === closure_3.id;
                isSelfMuteResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp4 = closure_11;
                  isSelfMuteResult = closure_11.isSelfMute();
                }
                obj = {
                  isSelfMute: isSelfMuteResult,
                  localMute: closure_11.isLocalMute(tmp.id),
                  localDeaf: null,
                  localVideo: null,
                  localVideoDisabled: null,
                  localVideoAutoDisabled: null,
                };
                isSelfDeafResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp6 = closure_11;
                  isSelfDeafResult = closure_11.isSelfDeaf();
                }
                obj.localDeaf = isSelfDeafResult;
                if (isVideoEnabledResult) {
                  tmp7 = closure_11;
                  isVideoEnabledResult = closure_11.isVideoEnabled();
                }
                obj.localVideo = isVideoEnabledResult;
                obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                return obj;
              }
            }
          }
          if (channel != null) {
            class X {
              constructor() {
                tmp = closure_3;
                isVideoEnabledResult = closure_5 === closure_3.id;
                isSelfMuteResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp4 = closure_11;
                  isSelfMuteResult = closure_11.isSelfMute();
                }
                obj = {
                  isSelfMute: isSelfMuteResult,
                  localMute: closure_11.isLocalMute(tmp.id),
                  localDeaf: null,
                  localVideo: null,
                  localVideoDisabled: null,
                  localVideoAutoDisabled: null,
                };
                isSelfDeafResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp6 = closure_11;
                  isSelfDeafResult = closure_11.isSelfDeaf();
                }
                obj.localDeaf = isSelfDeafResult;
                if (isVideoEnabledResult) {
                  tmp7 = closure_11;
                  isVideoEnabledResult = closure_11.isVideoEnabled();
                }
                obj.localVideo = isVideoEnabledResult;
                obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                return obj;
              }
            }
          }
          if (cResult[22] === undefined) {
            class X {
              constructor() {
                tmp = closure_3;
                isVideoEnabledResult = closure_5 === closure_3.id;
                isSelfMuteResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp4 = closure_11;
                  isSelfMuteResult = closure_11.isSelfMute();
                }
                obj = {
                  isSelfMute: isSelfMuteResult,
                  localMute: closure_11.isLocalMute(tmp.id),
                  localDeaf: null,
                  localVideo: null,
                  localVideoDisabled: null,
                  localVideoAutoDisabled: null,
                };
                isSelfDeafResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp6 = closure_11;
                  isSelfDeafResult = closure_11.isSelfDeaf();
                }
                obj.localDeaf = isSelfDeafResult;
                if (isVideoEnabledResult) {
                  tmp7 = closure_11;
                  isVideoEnabledResult = closure_11.isVideoEnabled();
                }
                obj.localVideo = isVideoEnabledResult;
                obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                return obj;
              }
            }
            const stateFromStores1 = tmp(504).useStateFromStores(tmp35, Y);
            class O {
              constructor() {
                return closure_6.theme;
              }
            }
            c15 = false;
            closure_13 = false;
            if (!localMute) {
              class X {
                constructor() {
                  tmp = closure_3;
                  isVideoEnabledResult = closure_5 === closure_3.id;
                  isSelfMuteResult = isVideoEnabledResult;
                  if (isVideoEnabledResult) {
                    tmp4 = closure_11;
                    isSelfMuteResult = closure_11.isSelfMute();
                  }
                  obj = {
                    isSelfMute: isSelfMuteResult,
                    localMute: closure_11.isLocalMute(tmp.id),
                    localDeaf: null,
                    localVideo: null,
                    localVideoDisabled: null,
                    localVideoAutoDisabled: null,
                  };
                  isSelfDeafResult = isVideoEnabledResult;
                  if (isVideoEnabledResult) {
                    tmp6 = closure_11;
                    isSelfDeafResult = closure_11.isSelfDeaf();
                  }
                  obj.localDeaf = isSelfDeafResult;
                  if (isVideoEnabledResult) {
                    tmp7 = closure_11;
                    isVideoEnabledResult = closure_11.isVideoEnabled();
                  }
                  obj.localVideo = isVideoEnabledResult;
                  obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                  obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                  return obj;
                }
              }
            }
            localMute = tmp46;
            if (!localVideo) {
              class X {
                constructor() {
                  tmp = closure_3;
                  isVideoEnabledResult = closure_5 === closure_3.id;
                  isSelfMuteResult = isVideoEnabledResult;
                  if (isVideoEnabledResult) {
                    tmp4 = closure_11;
                    isSelfMuteResult = closure_11.isSelfMute();
                  }
                  obj = {
                    isSelfMute: isSelfMuteResult,
                    localMute: closure_11.isLocalMute(tmp.id),
                    localDeaf: null,
                    localVideo: null,
                    localVideoDisabled: null,
                    localVideoAutoDisabled: null,
                  };
                  isSelfDeafResult = isVideoEnabledResult;
                  if (isVideoEnabledResult) {
                    tmp6 = closure_11;
                    isSelfDeafResult = closure_11.isSelfDeaf();
                  }
                  obj.localDeaf = isSelfDeafResult;
                  if (isVideoEnabledResult) {
                    tmp7 = closure_11;
                    isVideoEnabledResult = closure_11.isVideoEnabled();
                  }
                  obj.localVideo = isVideoEnabledResult;
                  obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                  obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                  return obj;
                }
              }
            }
            localVideo = tmp47;
            MediaEngineStore = false;
            let flag2 = false;
            let tmp48 = tmp47;
            let flag3 = false;
            let tmp49 = tmp46;
            let flag4 = false;
            let tmp50 = localDeaf;
            if (null != tmp12) {
              class X {
                constructor() {
                  tmp = closure_3;
                  isVideoEnabledResult = closure_5 === closure_3.id;
                  isSelfMuteResult = isVideoEnabledResult;
                  if (isVideoEnabledResult) {
                    tmp4 = closure_11;
                    isSelfMuteResult = closure_11.isSelfMute();
                  }
                  obj = {
                    isSelfMute: isSelfMuteResult,
                    localMute: closure_11.isLocalMute(tmp.id),
                    localDeaf: null,
                    localVideo: null,
                    localVideoDisabled: null,
                    localVideoAutoDisabled: null,
                  };
                  isSelfDeafResult = isVideoEnabledResult;
                  if (isVideoEnabledResult) {
                    tmp6 = closure_11;
                    isSelfDeafResult = closure_11.isSelfDeaf();
                  }
                  obj.localDeaf = isSelfDeafResult;
                  if (isVideoEnabledResult) {
                    tmp7 = closure_11;
                    isVideoEnabledResult = closure_11.isVideoEnabled();
                  }
                  obj.localVideo = isVideoEnabledResult;
                  obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                  obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                  return obj;
                }
              }
              c15 = true;
              class O {
                constructor() {
                  return closure_6.theme;
                }
              }
              closure_13 = tmp51;
              if (!tmp46) {
                class X {
                  constructor() {
                    tmp = closure_3;
                    isVideoEnabledResult = closure_5 === closure_3.id;
                    isSelfMuteResult = isVideoEnabledResult;
                    if (isVideoEnabledResult) {
                      tmp4 = closure_11;
                      isSelfMuteResult = closure_11.isSelfMute();
                    }
                    obj = {
                      isSelfMute: isSelfMuteResult,
                      localMute: closure_11.isLocalMute(tmp.id),
                      localDeaf: null,
                      localVideo: null,
                      localVideoDisabled: null,
                      localVideoAutoDisabled: null,
                    };
                    isSelfDeafResult = isVideoEnabledResult;
                    if (isVideoEnabledResult) {
                      tmp6 = closure_11;
                      isSelfDeafResult = closure_11.isSelfDeaf();
                    }
                    obj.localDeaf = isSelfDeafResult;
                    if (isVideoEnabledResult) {
                      tmp7 = closure_11;
                      isVideoEnabledResult = closure_11.isVideoEnabled();
                    }
                    obj.localVideo = isVideoEnabledResult;
                    obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                    obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                    return obj;
                  }
                }
              }
              localMute = tmp52;
              if (!localDeaf) {
                class X {
                  constructor() {
                    tmp = closure_3;
                    isVideoEnabledResult = closure_5 === closure_3.id;
                    isSelfMuteResult = isVideoEnabledResult;
                    if (isVideoEnabledResult) {
                      tmp4 = closure_11;
                      isSelfMuteResult = closure_11.isSelfMute();
                    }
                    obj = {
                      isSelfMute: isSelfMuteResult,
                      localMute: closure_11.isLocalMute(tmp.id),
                      localDeaf: null,
                      localVideo: null,
                      localVideoDisabled: null,
                      localVideoAutoDisabled: null,
                    };
                    isSelfDeafResult = isVideoEnabledResult;
                    if (isVideoEnabledResult) {
                      tmp6 = closure_11;
                      isSelfDeafResult = closure_11.isSelfDeaf();
                    }
                    obj.localDeaf = isSelfDeafResult;
                    if (isVideoEnabledResult) {
                      tmp7 = closure_11;
                      isVideoEnabledResult = closure_11.isVideoEnabled();
                    }
                    obj.localVideo = isVideoEnabledResult;
                    obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                    obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                    return obj;
                  }
                }
              }
              localDeaf = tmp53;
              if (!tmp47) {
                class X {
                  constructor() {
                    tmp = closure_3;
                    isVideoEnabledResult = closure_5 === closure_3.id;
                    isSelfMuteResult = isVideoEnabledResult;
                    if (isVideoEnabledResult) {
                      tmp4 = closure_11;
                      isSelfMuteResult = closure_11.isSelfMute();
                    }
                    obj = {
                      isSelfMute: isSelfMuteResult,
                      localMute: closure_11.isLocalMute(tmp.id),
                      localDeaf: null,
                      localVideo: null,
                      localVideoDisabled: null,
                      localVideoAutoDisabled: null,
                    };
                    isSelfDeafResult = isVideoEnabledResult;
                    if (isVideoEnabledResult) {
                      tmp6 = closure_11;
                      isSelfDeafResult = closure_11.isSelfDeaf();
                    }
                    obj.localDeaf = isSelfDeafResult;
                    if (isVideoEnabledResult) {
                      tmp7 = closure_11;
                      isVideoEnabledResult = closure_11.isVideoEnabled();
                    }
                    obj.localVideo = isVideoEnabledResult;
                    obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                    obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                    return obj;
                  }
                }
              }
              localVideo = tmp54;
              const sessionId = tmp12.sessionId;
              let tmp55 = null != sessionId && tmp19 === tmp11.id;
              if (tmp55) {
                class X {
                  constructor() {
                    tmp = closure_3;
                    isVideoEnabledResult = closure_5 === closure_3.id;
                    isSelfMuteResult = isVideoEnabledResult;
                    if (isVideoEnabledResult) {
                      tmp4 = closure_11;
                      isSelfMuteResult = closure_11.isSelfMute();
                    }
                    obj = {
                      isSelfMute: isSelfMuteResult,
                      localMute: closure_11.isLocalMute(tmp.id),
                      localDeaf: null,
                      localVideo: null,
                      localVideoDisabled: null,
                      localVideoAutoDisabled: null,
                    };
                    isSelfDeafResult = isVideoEnabledResult;
                    if (isVideoEnabledResult) {
                      tmp6 = closure_11;
                      isSelfDeafResult = closure_11.isSelfDeaf();
                    }
                    obj.localDeaf = isSelfDeafResult;
                    if (isVideoEnabledResult) {
                      tmp7 = closure_11;
                      isVideoEnabledResult = closure_11.isVideoEnabled();
                    }
                    obj.localVideo = isVideoEnabledResult;
                    obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                    obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                    return obj;
                  }
                }
                tmp55 = sessionId !== localMute.getSessionId();
              }
              MediaEngineStore = tmp55;
              flag4 = tmp55;
              flag2 = true;
              tmp48 = tmp54;
              flag3 = tmp51;
              tmp49 = tmp52;
              tmp50 = tmp53;
            }
            cResult[25] = isSelfMute;
            cResult[26] = localDeaf;
            cResult[27] = localMute;
            cResult[28] = localVideo;
            cResult[29] = localVideoDisabled;
            class Y {
              constructor() {
                guild_id = undefined;
                tmp = closure_10;
                if (closure_0 != null) {
                  guild_id = closure_0.guild_id;
                }
                return closure_10.isGuestOrLurker(guild_id, closure_3.id);
              }
            }
            cResult[31] = tmp12;
            cResult[32] = tmp16;
            cResult[33] = tmp50;
            cResult[34] = flag4;
            cResult[35] = tmp49;
            cResult[36] = flag3;
            cResult[37] = tmp48;
            cResult[38] = flag2;
            const tmpResult6 = tmp(504);
          }
          if (channel != null) {
            class X {
              constructor() {
                tmp = closure_3;
                isVideoEnabledResult = closure_5 === closure_3.id;
                isSelfMuteResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp4 = closure_11;
                  isSelfMuteResult = closure_11.isSelfMute();
                }
                obj = {
                  isSelfMute: isSelfMuteResult,
                  localMute: closure_11.isLocalMute(tmp.id),
                  localDeaf: null,
                  localVideo: null,
                  localVideoDisabled: null,
                  localVideoAutoDisabled: null,
                };
                isSelfDeafResult = isVideoEnabledResult;
                if (isVideoEnabledResult) {
                  tmp6 = closure_11;
                  isSelfDeafResult = closure_11.isSelfDeaf();
                }
                obj.localDeaf = isSelfDeafResult;
                if (isVideoEnabledResult) {
                  tmp7 = closure_11;
                  isVideoEnabledResult = closure_11.isVideoEnabled();
                }
                obj.localVideo = isVideoEnabledResult;
                obj.localVideoDisabled = closure_11.isLocalVideoDisabled(tmp.id);
                obj.localVideoAutoDisabled = closure_11.isLocalVideoAutoDisabled(tmp.id);
                return obj;
              }
            }
          }
          class Y {
            constructor() {
              guild_id = undefined;
              tmp = closure_10;
              if (closure_0 != null) {
                guild_id = closure_0.guild_id;
              }
              return closure_10.isGuestOrLurker(guild_id, closure_3.id);
            }
          }
          cResult[22] = undefined;
          cResult[23] = tmp11.id;
          cResult[24] = Y;
          const tmpResult5 = tmp(504);
        }
        let obj3 = { userId: tmp11.id, guildId: guild_id };
        cResult[13] = guild_id;
        cResult[15] = obj3;
        tmp25 = obj3;
        const tmp17 = style();
      }
    : (user) => {
        user = user.user;
        ({ name, channel } = user);
        ({ voiceState, withStream } = user);
        if (withStream === undefined) {
          withStream = true;
        }
        ({ isActionSheet, onPress: dependencyMap } = user);
        const merged = Object.assign(
          user,
          Object.assign({
            user: 0,
            name: 0,
            channel: 0,
            voiceState: 0,
            withStream: 0,
            isSpectating: 0,
            isActionSheet: 0,
            onPress: 0,
          }),
        );
        const tmp2 = closure_16();
        const tmp3 = closure_17();
        const id = AuthenticationStore.getId();
        const obj2 = { userId: user.id };
        const tmp7 = channel(9051)({ userId: user.id });
        const obj4 = { userId: user.id, guildId: null };
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        obj4.guildId = guild_id;
        const avatarSpeakingColor = user(9157).useAvatarSpeakingColor(obj4);
        const obj3 = user(9157);
        const items = [ThemeStore];
        const stateFromStores = user(504).useStateFromStores(items, () => theme.theme);
        const tmp8Result = user(504);
        const items1 = [MediaEngineStore];
        const stateFromStoresObject = user(504).useStateFromStoresObject(items1, () => {
          let isVideoEnabledResult = id === user.id;
          let isSelfMuteResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            isSelfMuteResult = MediaEngineStore.isSelfMute();
          }
          const obj = {
            isSelfMute: isSelfMuteResult,
            localMute: MediaEngineStore.isLocalMute(user.id),
            localDeaf: null,
            localVideo: null,
            localVideoDisabled: null,
            localVideoAutoDisabled: null,
          };
          let isSelfDeafResult = isVideoEnabledResult;
          if (isVideoEnabledResult) {
            isSelfDeafResult = MediaEngineStore.isSelfDeaf();
          }
          obj.localDeaf = isSelfDeafResult;
          if (isVideoEnabledResult) {
            isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
          }
          obj.localVideo = isVideoEnabledResult;
          obj.localVideoDisabled = MediaEngineStore.isLocalVideoDisabled(user.id);
          obj.localVideoAutoDisabled = MediaEngineStore.isLocalVideoAutoDisabled(user.id);
          return obj;
        });
        ({ localMute, localDeaf, localVideo, localVideoDisabled, isSelfMute, localVideoAutoDisabled } =
          stateFromStoresObject);
        const tmp8Result4 = user(504);
        const items2 = [GuildMemberStore];
        let tmp14 = localMute;
        const stateFromStores1 = user(504).useStateFromStores(items2, () => {
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          return GuildMemberStore.isGuestOrLurker(guild_id, user.id);
        });
        if (!localMute) {
          tmp14 = isSelfMute;
        }
        if (!localVideo) {
          localVideo = localVideoDisabled;
        }
        let flag = false;
        let tmp15 = localVideo;
        let tmp16 = localDeaf;
        let tmp17 = tmp14;
        let flag2 = false;
        let flag3 = false;
        let flag4 = false;
        if (null != voiceState) {
          if (withStream) {
            withStream = voiceState.selfStream;
          }
          let isVoiceMutedResult = tmp14;
          if (!tmp14) {
            isVoiceMutedResult = voiceState.isVoiceMuted();
          }
          let isVoiceDeafenedResult = localDeaf;
          if (!localDeaf) {
            isVoiceDeafenedResult = voiceState.isVoiceDeafened();
          }
          let selfVideo = localVideo;
          if (!localVideo) {
            selfVideo = voiceState.selfVideo;
          }
          const sessionId = voiceState.sessionId;
          const tmp20 = null != sessionId && id === user.id && sessionId !== AuthenticationStore.getSessionId();
          flag3 = true;
          flag = tmp20;
          tmp15 = selfVideo;
          tmp16 = isVoiceDeafenedResult;
          tmp17 = isVoiceMutedResult;
          flag2 = withStream;
          flag4 = tmp20;
        }
        const tmp21 = isActionSheet ? tmp3.voiceStatusIcon : tmp2.voiceStatusIcon;
        const obj5 = {
          onPress() {
            return dependencyMap(user);
          },
          label: name,
          leading: null,
          trailing: null,
        };
        const obj6 = { user, guildId: null, size: null, speaking: null, speakingColor: null };
        let guild_id1;
        if (channel != null) {
          guild_id1 = channel.guild_id;
        }
        obj6.guildId = guild_id1;
        obj6.size = user(1188).AvatarSizes.REFRESH_MEDIUM_32;
        obj6.speaking = tmp7;
        obj6.speakingColor = avatarSpeakingColor;
        obj5.leading = closure_13(user(1188).Avatar, obj6);
        let tmp25Result = null;
        if (flag3) {
          tmp25Result = null;
          if (!flag) {
            const obj7 = { style: tmp2.row, children: null };
            let tmp22Result = null;
            if (user.isSpectating) {
              const obj8 = { size: tmp8(1188).Icon.Sizes.REFRESH_SMALL_16, source: channel(13619), style: tmp21 };
              tmp22Result = closure_13(tmp8(1188).Icon, obj8);
            }
            const items3 = [tmp22Result, , , ,];
            if (!tmp17) {
              items3[1] = null;
              let tmp22Result5 = null;
              if (tmp16) {
                const obj9 = { size: tmp8(1188).Icon.Sizes.REFRESH_SMALL_16, source: channel(13616), style: tmp21 };
                tmp22Result5 = closure_13(tmp8(1188).Icon, obj9);
              }
              items3[2] = tmp22Result5;
              if (!tmp15) {
                items3[3] = null;
                let tmp22Result6 = null;
                if (flag2) {
                  const obj10 = { style: tmp21 };
                  tmp22Result6 = closure_13(tmp8(1188).LiveTag, obj10);
                }
                items3[4] = tmp22Result6;
                obj7.children = items3;
                tmp25Result = closure_14(closure_5, obj7);
              } else {
                if (localVideoDisabled) {
                  const obj11 = {
                    size: tmp8(1188).Icon.Sizes.REFRESH_SMALL_16,
                    source: channel(13617),
                    style: tmp2.voiceStatusIconMargin,
                    disableColor: true,
                  };
                  let obj12 = obj11;
                } else {
                  obj12 = { size: tmp8(1188).Icon.Sizes.REFRESH_SMALL_16, source: channel(13618), style: tmp21 };
                }
                closure_13(tmp8(1188).Icon, obj12);
              }
            } else {
              if (tmp8Result6.isThemeDark(stateFromStores)) {
                let tmp5Result = channel(13614);
              } else {
                tmp5Result = channel(13615);
              }
              const obj13 = {
                size: tmp8(1188).Icon.Sizes.REFRESH_SMALL_16,
                source: tmp5Result,
                style: tmp2.voiceStatusIconMargin,
                color: tmp21.tintColor,
                disableColor: localMute,
              };
              closure_13(tmp8(1188).Icon, obj13);
              tmp8Result6 = tmp8(4735);
            }
          }
        }
        obj5.trailing = tmp25Result;
        const obj14 = { disabled: flag4 };
        const merged1 = Object.assign(merged);
        const merged2 = Object.assign(obj5);
        let tmp37 = name;
        if (stateFromStores1) {
          const obj15 = { children: null };
          const items4 = [name];
          const obj16 = { variant: "text-md/semibold", lineClamp: 1, color: "status-positive", children: null };
          const intl = tmp8(1126).intl;
          const items5 = ["\u00A0", intl.string(tmp8(1126).t["pFO/Ph"])];
          obj16.children = items5;
          items4[1] = closure_14(tmp8(4892).Text, obj16);
          obj15.children = items4;
          tmp37 = closure_14(closure_15, obj15);
        }
        const obj17 = { text: tmp37, style: null };
        let labelCallScreen = null;
        if (isActionSheet) {
          labelCallScreen = tmp3.labelCallScreen;
        }
        obj17.style = labelCallScreen;
        obj14.label = closure_13(user(8924).FormRow.Label, obj17);
        if (localVideoAutoDisabled) {
          const obj18 = { style: tmp2.autoDisabledVideo, children: null };
          const obj19 = { source: channel(4814), size: tmp8(1188).Icon.Sizes.EXTRA_SMALL, disableColor: true };
          const items6 = [closure_13(tmp8(1188).Icon, obj19)];
          const obj20 = {
            variant: "text-xs/medium",
            color: "text-default",
            style: tmp2.autoDisabledVideoLabel,
            children: null,
          };
          const intl3 = tmp8(1126).intl;
          obj20.children = intl3.string(tmp8(1126).t.m2Hyj0);
          items6[1] = closure_13(tmp8(4892).Text, obj20);
          obj18.children = items6;
          let stringResult = closure_14(closure_5, obj18);
        } else {
          stringResult = null;
          if (flag) {
            const intl2 = tmp8(1126).intl;
            stringResult = intl2.string(tmp8(1126).t.IyYqqY);
          }
        }
        obj14.subLabel = stringResult;
        return closure_13(user(8924).FormRow, obj14);
      },
);
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StreamingUserRow(user) {
      const cResult = user(576).c(18);
      const tmp4 = closure_16();
      user = user.user;
      const channel = user.channel;
      let obj = user(576);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PresenceStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== user.id) {
        const fn = function l() {
          return StreamerApplicationSelectors.getStreamerActivityByUserId(user.id, PresenceStore);
        };
        cResult[1] = user.id;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmp5 = closure_17();
      const stateFromStores = user(504).useStateFromStores(first, tmp8);
      if (cResult[3] !== stateFromStores) {
        if (null == stateFromStores) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.eXan7B);
          cResult[3] = stateFromStores;
          cResult[4] = stringResult;
        }
        const intl2 = tmp(1126).intl;
        if (null == stateFromStores.details) {
          let obj2 = { name: stateFromStores.name };
          intl2.format(tmp13, obj2);
        }
        const details = stateFromStores.details;
      } else {
        let labelCallScreen = null;
        if (user.isActionSheet) {
          labelCallScreen = tmp5.labelCallScreen;
        }
        if (cResult[5] === cResult[4]) {
          if (cResult[6] === labelCallScreen) {
            let tmp18 = cResult[7];
          }
          if (cResult[8] === user) {
            if (cResult[9] === tmp18) {
              let tmp21 = cResult[10];
            }
            if (cResult[11] === channel) {
              if (cResult[12] === tmp4) {
                if (cResult[13] === user.id) {
                  let tmp28 = cResult[14];
                }
                if (cResult[15] === tmp21) {
                  if (cResult[16] === tmp28) {
                    let tmp36 = cResult[17];
                  }
                  return tmp36;
                }
                let obj3 = { children: null };
                const items1 = [tmp21, tmp28];
                obj3.children = items1;
                const tmp39 = closure_14(closure_15, obj3);
                cResult[15] = tmp21;
                cResult[16] = tmp28;
                cResult[17] = tmp39;
                tmp36 = tmp39;
              }
            }
            let tmp31Result = user.id !== AuthenticationStore.getId();
            if (tmp31Result) {
              let obj4 = { style: tmp4.streamPreview, children: null };
              let guildId;
              if (channel != null) {
                guildId = channel.getGuildId();
              }
              const obj5 = {
                guildId,
                userId: user.id,
                disableTransition: true,
                onPress() {
                  let isModalOpenResult = null != channel;
                  if (isModalOpenResult) {
                    const obj = NavigationRouteUtils;
                    isModalOpenResult = obj.isModalOpen(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
                  }
                  if (isModalOpenResult) {
                    const obj3 = ActionSheetActionCreatorsDefault;
                    obj3.hideActionSheet(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
                  }
                },
              };
              obj4.children = closure_13(channel(9755), obj5);
              tmp31Result = closure_13(closure_5, obj4);
              const tmp34 = channel(9755);
            }
            cResult[11] = channel;
            cResult[12] = tmp4;
            cResult[13] = user.id;
            cResult[14] = tmp31Result;
            tmp28 = tmp31Result;
          }
          const obj6 = {};
          const merged = Object.assign(user);
          obj6.subLabel = tmp18;
          const tmp27 = closure_13(closure_18, obj6);
          cResult[8] = user;
          cResult[9] = tmp18;
          cResult[10] = tmp27;
          tmp21 = tmp27;
        }
        const obj7 = { text: cResult[4], style: labelCallScreen };
        const tmp20 = closure_13(tmp(8924).FormSubLabel, obj7);
        cResult[5] = cResult[4];
        cResult[6] = labelCallScreen;
        cResult[7] = tmp20;
        tmp18 = tmp20;
      }
      const tmpResult = user(504);
    }
  : function StreamingUserRow(user) {
      user = user.user;
      const channel = user.channel;
      const tmp = closure_16();
      const tmp2 = closure_17();
      const items = [PresenceStore];
      let stateFromStores = user(504).useStateFromStores(items, () =>
        StreamerApplicationSelectors.getStreamerActivityByUserId(user.id, PresenceStore),
      );
      if (null != stateFromStores) {
        const intl2 = tmp3(1126).intl;
        if (null == stateFromStores.details) {
          stateFromStores = { name: null };
          stateFromStores.name = stateFromStores.name;
          intl2.format(tmp6, stateFromStores);
        }
        const details = stateFromStores.details;
      } else {
        const intl = tmp3(1126).intl;
        let obj2 = {};
        const merged = Object.assign(user);
        let obj3 = { text: intl.string(tmp3(1126).t.eXan7B), style: null };
        let labelCallScreen = null;
        if (user.isActionSheet) {
          labelCallScreen = tmp2.labelCallScreen;
        }
        obj3.style = labelCallScreen;
        obj2.subLabel = closure_13(tmp3(8924).FormSubLabel, obj3);
        const items1 = [closure_13(closure_18, obj2)];
        let tmp10Result = user.id !== AuthenticationStore.getId();
        if (tmp10Result) {
          let obj4 = { style: tmp.streamPreview, children: null };
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          const obj5 = {
            guildId,
            userId: user.id,
            disableTransition: true,
            onPress() {
              let isModalOpenResult = null != channel;
              if (isModalOpenResult) {
                const obj = NavigationRouteUtils;
                isModalOpenResult = obj.isModalOpen(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
              }
              if (isModalOpenResult) {
                const obj3 = ActionSheetActionCreatorsDefault;
                obj3.hideActionSheet(PrivateChannelCallUtils.getVoiceChannelKey(channel.id));
              }
            },
          };
          obj4.children = closure_13(channel(9755), obj5);
          tmp10Result = closure_13(closure_5, obj4);
          const tmp20 = channel(9755);
        }
        const obj6 = { children: null };
        items1[1] = tmp10Result;
        obj6.children = items1;
        return closure_14(closure_15, obj6);
      }
      let obj = user(504);
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RingButton(channelId) {
      const cResult = channelId(576).c(10);
      channelId = channelId.channelId;
      const userId = channelId.userId;
      const isActionSheet = channelId.isActionSheet;
      const tmp4 = closure_16();
      const tmp5 = closure_17();
      if (null != userId) {
        if (null != channelId) {
          if (cResult[0] === channelId) {
            if (cResult[1] === userId) {
              let tmp6 = cResult[2];
            }
            const tmp7 = isActionSheet ? tmp5.ringingButton : tmp4.ringingButton;
            const tmp8 = isActionSheet ? tmp5.ringingButtonLabel : tmp4.ringingButtonLabel;
            const _Symbol = Symbol;
            if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(tmp(1126).t.bHa9kN);
              cResult[3] = stringResult;
              let tmp10 = stringResult;
            } else {
              tmp10 = cResult[3];
            }
            if (cResult[4] !== tmp8) {
              const obj2 = { style: tmp8, children: tmp10 };
              const tmp14 = closure_13(tmp(1188).LegacyText, obj2);
              cResult[4] = tmp8;
              cResult[5] = tmp14;
              let tmp12 = tmp14;
            } else {
              tmp12 = cResult[5];
            }
            if (cResult[6] === tmp6) {
              if (cResult[7] === tmp7) {
                if (cResult[8] === tmp12) {
                  let tmp15 = cResult[9];
                }
                return tmp15;
              }
            }
            const obj3 = { onPress: tmp6, accessibilityRole: "button", style: tmp7, children: tmp12 };
            const tmp17 = closure_13(tmp(5916).PressableOpacity, obj3);
            cResult[6] = tmp6;
            cResult[7] = tmp7;
            cResult[8] = tmp12;
            cResult[9] = tmp17;
            tmp15 = tmp17;
          }
          const fn = function n() {
            const items = [userId];
            CallActionCreatorsDefault.ring(channelId, items, "voice_user_action_sheet");
          };
          cResult[0] = channelId;
          cResult[1] = userId;
          cResult[2] = fn;
          tmp6 = fn;
        }
      }
      return null;
    }
  : function RingButton(channelId) {
      channelId = channelId.channelId;
      const userId = channelId.userId;
      const isActionSheet = channelId.isActionSheet;
      const tmp = closure_16();
      let tmp4Result = closure_17();
      let tmp3 = null;
      if (null != userId) {
        tmp3 = null;
        if (null != channelId) {
          const obj = {
            onPress() {
              const items = [userId];
              CallActionCreatorsDefault.ring(channelId, items, "voice_user_action_sheet");
            },
            accessibilityRole: "button",
            style: isActionSheet ? tmp4Result.ringingButton : tmp.ringingButton,
            children: null,
          };
          const obj2 = {
            style: isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel,
            children: null,
          };
          const intl = tmp5(1126).intl;
          const stringResult = intl.string(tmp5(1126).t.bHa9kN);
          obj2.children = stringResult;
          tmp4Result = closure_13(tmp5(1188).LegacyText, obj2);
          obj.children = tmp4Result;
          closure_13(channelId(5916).PressableOpacity, obj);
        }
      }
      return tmp3;
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StopRingButton(channelId) {
      const cResult = channelId(576).c(10);
      channelId = channelId.channelId;
      const userId = channelId.userId;
      const isActionSheet = channelId.isActionSheet;
      const tmp4 = closure_16();
      const tmp5 = closure_17();
      if (null != userId) {
        if (null != channelId) {
          if (cResult[0] === channelId) {
            if (cResult[1] === userId) {
              let tmp6 = cResult[2];
            }
            const tmp7 = isActionSheet ? tmp5.ringingButton : tmp4.ringingButton;
            const tmp8 = isActionSheet ? tmp5.ringingButtonLabel : tmp4.ringingButtonLabel;
            const _Symbol = Symbol;
            if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(tmp(1126).t.ygslb0);
              cResult[3] = stringResult;
              let tmp10 = stringResult;
            } else {
              tmp10 = cResult[3];
            }
            if (cResult[4] !== tmp8) {
              const obj2 = { style: tmp8, children: tmp10 };
              const tmp14 = closure_13(tmp(1188).LegacyText, obj2);
              cResult[4] = tmp8;
              cResult[5] = tmp14;
              let tmp12 = tmp14;
            } else {
              tmp12 = cResult[5];
            }
            if (cResult[6] === tmp6) {
              if (cResult[7] === tmp7) {
                if (cResult[8] === tmp12) {
                  let tmp15 = cResult[9];
                }
                return tmp15;
              }
            }
            const obj3 = { onPress: tmp6, accessibilityRole: "button", style: tmp7, children: tmp12 };
            const tmp17 = closure_13(tmp(5916).PressableOpacity, obj3);
            cResult[6] = tmp6;
            cResult[7] = tmp7;
            cResult[8] = tmp12;
            cResult[9] = tmp17;
            tmp15 = tmp17;
          }
          const fn = function n() {
            const items = [userId];
            CallActionCreatorsDefault.stopRinging(channelId, items);
          };
          cResult[0] = channelId;
          cResult[1] = userId;
          cResult[2] = fn;
          tmp6 = fn;
        }
      }
      return null;
    }
  : function StopRingButton(channelId) {
      channelId = channelId.channelId;
      const userId = channelId.userId;
      const isActionSheet = channelId.isActionSheet;
      const tmp = closure_16();
      let tmp4Result = closure_17();
      let tmp3 = null;
      if (null != userId) {
        tmp3 = null;
        if (null != channelId) {
          const obj = {
            onPress() {
              const items = [userId];
              CallActionCreatorsDefault.stopRinging(channelId, items);
            },
            accessibilityRole: "button",
            style: isActionSheet ? tmp4Result.ringingButton : tmp.ringingButton,
            children: null,
          };
          const obj2 = {
            style: isActionSheet ? tmp4Result.ringingButtonLabel : tmp.ringingButtonLabel,
            children: null,
          };
          const intl = tmp5(1126).intl;
          const stringResult = intl.string(tmp5(1126).t.ygslb0);
          obj2.children = stringResult;
          tmp4Result = closure_13(tmp5(1188).LegacyText, obj2);
          obj.children = tmp4Result;
          closure_13(channelId(5916).PressableOpacity, obj);
        }
      }
      return tmp3;
    };
fn(558);
let obj11 = {
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
  fontSize: 14,
  lineHeight: 18,
  marginHorizontal: 16,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function DisconnectedUserRow(user) {
        const cResult = user(isActionSheet[15]).c(31);
        user = user.user;
        const channel = user.channel;
        isActionSheet = user.isActionSheet;
        const onPress = user.onPress;
        closure_17();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [CallStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === channel.id) {
          if (cResult[2] === user.id) {
            let tmp7 = cResult[3];
            let tmp8 = cResult[4];
          }
          const stateFromStores = tmp(tmp2[18]).useStateFromStores(first, tmp7, tmp8);
          if (cResult[5] === channel.guild_id) {
            if (cResult[6] === channel.id) {
              if (cResult[7] === user) {
                let tmp10 = cResult[8];
              }
              const canRing = tmp(tmp2[39]).useCanRing(user);
              if (cResult[9] === canRing) {
                if (cResult[10] === channel.id) {
                  if (cResult[11] === isActionSheet) {
                    if (cResult[12] === stateFromStores) {
                      if (cResult[13] === user.id) {
                        let tmp14 = cResult[14];
                      }
                      if (cResult[15] === onPress) {
                        if (cResult[16] === user) {
                          let tmp15 = cResult[17];
                        }
                        class E {
                          constructor() {
                            return onPress(user);
                          }
                        }
                        if (cResult[18] === tmp10) {
                          if (cResult[19] === tmp16) {
                            let tmp17 = cResult[20];
                          }
                          if (cResult[21] === channel.guild_id) {
                            if (cResult[22] === user) {
                              let tmp20 = cResult[23];
                            }
                            if (cResult[24] !== tmp14) {
                              const tmp14Result = tmp14();
                              class E {
                                constructor() {
                                  return onPress(user);
                                }
                              }
                              cResult[25] = tmp14Result;
                              let tmp22 = tmp14Result;
                            } else {
                              tmp22 = cResult[25];
                            }
                            class E {
                              constructor() {
                                return onPress(user);
                              }
                            }
                            const obj2 = { onPress: tmp15, label: tmp17, leading: tmp20, trailing: tmp22 };
                            const obj4 = {};
                            const merged = Object.assign(obj2);
                            const tmp29 = closure_13(tmp(tmp2[30]).FormRow, obj4);
                            cResult[26] = tmp22;
                            cResult[27] = tmp15;
                            cResult[28] = tmp17;
                            cResult[29] = tmp20;
                            cResult[30] = tmp29;
                          }
                          class E {
                            constructor() {
                              return onPress(user);
                            }
                          }
                          const obj5 = {
                            user,
                            guildId: channel.guild_id,
                            size: tmp(tmp2[22]).AvatarSizes.REFRESH_MEDIUM_32,
                          };
                          const tmp21 = closure_13(tmp(tmp2[22]).Avatar, obj5);
                          cResult[21] = channel.guild_id;
                          cResult[22] = user;
                          cResult[23] = tmp21;
                          tmp20 = tmp21;
                        }
                        const obj6 = { text: tmp10, style: null };
                        const tmp19 = closure_13(tmp(tmp2[30]).FormRow.Label, obj6);
                        cResult[18] = tmp10;
                        cResult[19] = null;
                        cResult[20] = tmp19;
                        tmp17 = tmp19;
                      }
                      class E {
                        constructor() {
                          return onPress(user);
                        }
                      }
                      cResult[15] = onPress;
                      cResult[16] = user;
                      cResult[17] = E;
                      tmp15 = E;
                    }
                  }
                }
              }
              function renderVoiceState() {
                if (!canRing) {
                  return null;
                } else {
                  const obj = { channelId: channel.id, userId: user.id, isActionSheet };
                  __initData2(stateFromStores ? closure_21 : closure_20, obj);
                }
              }
              cResult[9] = canRing;
              cResult[10] = channel.id;
              cResult[11] = isActionSheet;
              cResult[12] = stateFromStores;
              cResult[13] = user.id;
              cResult[14] = renderVoiceState;
              tmp14 = renderVoiceState;
              const tmpResult2 = tmp(tmp2[39]);
            }
          }
          const tmpResult = tmp(tmp2[18]);
          const name = channel(tmp2[38]).getName(channel.guild_id, channel.id, user);
          cResult[5] = channel.guild_id;
          cResult[6] = channel.id;
          cResult[7] = user;
          cResult[8] = name;
          tmp10 = name;
          const obj3 = channel(tmp2[38]);
        }
        const fn = function l() {
          const call = CallStore.getCall(channel.id);
          let hasItem = null != call;
          if (hasItem) {
            const ringing = call.ringing;
            hasItem = ringing.includes(user.id);
          }
          return hasItem;
        };
        const items1 = [channel.id, user.id];
        cResult[1] = channel.id;
        cResult[2] = user.id;
        cResult[3] = fn;
        cResult[4] = items1;
        tmp8 = items1;
        tmp7 = fn;
        let obj = user(isActionSheet[15]);
      }
    : function DisconnectedUserRow(user) {
        let id = user.user;
        let id2 = user.channel;
        ({ isActionSheet, onPress: dependencyMap } = user);
        const tmp = closure_17();
        const items = [CallStore];
        const items1 = [id2.id, id.id];
        const stateFromStores = id(504).useStateFromStores(
          items,
          () => {
            const call = CallStore.getCall(id2.id);
            let hasItem = null != call;
            if (hasItem) {
              const ringing = call.ringing;
              hasItem = ringing.includes(id.id);
            }
            return hasItem;
          },
          items1,
        );
        const obj = id(504);
        const name = id2(5048).getName(id2.guild_id, id2.id, id);
        const obj2 = id2(5048);
        const obj4 = {
          onPress() {
            return dependencyMap(id);
          },
          label: null,
          leading: null,
          trailing: null,
        };
        const canRing = id(9402).useCanRing(id);
        const obj5 = { text: name, style: null };
        let labelCallScreen = null;
        if (isActionSheet) {
          labelCallScreen = tmp.labelCallScreen;
        }
        obj5.style = labelCallScreen;
        obj4.label = closure_13(id(8924).FormRow.Label, obj5);
        const obj3 = id(9402);
        obj4.leading = closure_13(id(1188).Avatar, {
          user: id,
          guildId: id2.guild_id,
          size: id(1188).AvatarSizes.REFRESH_MEDIUM_32,
        });
        if (!canRing) {
          obj4.trailing = null;
          const obj7 = {};
          const merged = Object.assign(obj4);
          return closure_13(tmp2(8924).FormRow, obj7);
        } else {
          const obj8 = { channelId: null, userId: null, isActionSheet: null };
          id2 = id2.id;
          obj8.channelId = id2;
          id = id.id;
          obj8.userId = id;
          obj8.isActionSheet = isActionSheet;
          closure_13(stateFromStores ? closure_21 : closure_20, obj8);
        }
        const obj6 = { user: id, guildId: id2.guild_id, size: id(1188).AvatarSizes.REFRESH_MEDIUM_32 };
      },
);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoiceMemberUser(voiceState) {
        const cResult = voiceState(576).c(11);
        voiceState = voiceState.voiceState;
        let nick = voiceState.nick;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        let channelId;
        if (voiceState != null) {
          channelId = voiceState.channelId;
        }
        if (cResult[1] !== channelId) {
          let channelId1;
          if (voiceState != null) {
            channelId1 = voiceState.channelId;
          }
          const fn = function l() {
            let channelId;
            if (voiceState != null) {
              channelId = voiceState.channelId;
            }
            return ChannelStore.getChannel(channelId);
          };
          cResult[1] = channelId1;
          cResult[2] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        const obj = voiceState(576);
        const stateFromStores = voiceState(504).useStateFromStores(first, tmp7);
        const tmpResult = voiceState(504);
        const name = UserUtilsDefault.useName(voiceState.user);
        if (null != voiceState) {
          if (voiceState.selfStream) {
            let tmp11 = nick;
            if (nick == null) {
              tmp11 = name;
            }
            if (cResult[7] === stateFromStores) {
              if (cResult[8] === voiceState) {
                if (cResult[9] === tmp11) {
                  let tmp12 = cResult[10];
                }
                return tmp12;
              }
            }
            const obj2 = {};
            const merged = Object.assign(voiceState);
            obj2.name = tmp11;
            obj2.channel = stateFromStores;
            const tmp18 = closure_13(closure_19, obj2);
            cResult[7] = stateFromStores;
            cResult[8] = voiceState;
            cResult[9] = tmp11;
            cResult[10] = tmp18;
            tmp12 = tmp18;
          }
        }
        if (nick == null) {
          nick = name;
        }
        if (cResult[3] === stateFromStores) {
          if (cResult[4] === voiceState) {
            if (cResult[5] === nick) {
              let tmp19 = cResult[6];
            }
            return tmp19;
          }
        }
        const obj4 = {};
        const merged1 = Object.assign(voiceState);
        obj4.name = nick;
        obj4.channel = stateFromStores;
        obj4.withStream = false;
        const tmp21 = closure_13(closure_18, obj4);
        cResult[3] = stateFromStores;
        cResult[4] = voiceState;
        cResult[5] = nick;
        cResult[6] = tmp21;
        tmp19 = tmp21;
      }
    : function VoiceMemberUser(voiceState) {
        voiceState = voiceState.voiceState;
        let nick = voiceState.nick;
        const items = [ChannelStore];
        const stateFromStores = voiceState(504).useStateFromStores(items, () => {
          let channelId;
          if (voiceState != null) {
            channelId = voiceState.channelId;
          }
          return ChannelStore.getChannel(channelId);
        });
        const obj = voiceState(504);
        const name = UserUtilsDefault.useName(voiceState.user);
        if (null != voiceState) {
          if (voiceState.selfStream) {
            const obj3 = {};
            const merged = Object.assign(voiceState);
            if (nick == null) {
              nick = name;
            }
            obj3.name = nick;
            obj3.channel = stateFromStores;
            let tmp3Result = closure_13(closure_19, obj3);
          }
          return tmp3Result;
        }
        const obj4 = {};
        const merged1 = Object.assign(voiceState);
        let tmp6 = nick;
        if (nick == null) {
          tmp6 = name;
        }
        obj4.name = tmp6;
        obj4.channel = stateFromStores;
        obj4.withStream = false;
        tmp3Result = closure_13(closure_18, obj4);
      },
);
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memoResult;
