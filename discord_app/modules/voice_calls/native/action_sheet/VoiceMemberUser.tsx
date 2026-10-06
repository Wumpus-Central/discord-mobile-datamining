// discord_app/modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../utils/UserUtils.tsx";
import shared from "../../../../design/shared.tsx";
import NavigationRouteUtils from "../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import AssetRegistryDefault from "../../../../../_runtime/04814_AssetRegistry.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import PrivateChannelCallUtils from "../../../../utils/native/PrivateChannelCallUtils.tsx";
import StreamerApplicationSelectors from "../../../go_live/utils/StreamerApplicationSelectors.tsx";
import useIsSpeakingDefault from "../../../../hooks/useIsSpeaking.tsx";
import CallActionCreatorsDefault from "../../../../actions/CallActionCreators.tsx";
import AssetRegistryDefault2 from "../../../../../_runtime/13614_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../../_runtime/13615_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../../_runtime/13616_AssetRegistry.js";
import AssetRegistryDefault5 from "../../../../../_runtime/13617_AssetRegistry.js";
import AssetRegistryDefault6 from "../../../../../_runtime/13618_AssetRegistry.js";
import AssetRegistryDefault7 from "../../../../../_runtime/13619_AssetRegistry.js";
import _objectWithoutProperties_mod from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import CallStore from "../../../../stores/CallStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import GuildMemberStore_mod from "../../../../stores/GuildMemberStore.tsx";
import MediaEngineStore_mod from "../../../../stores/MediaEngineStore.tsx";
import PresenceStore from "../../../../stores/PresenceStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_12, dependencyMap, importDefault;

let Platform;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let obj4;
let obj6;
let obj7;
let obj8;
let obj9;
let user = ["user", "name", "channel", "voiceState", "withStream", "isSpectating", "isActionSheet", "onPress"];
let _objectWithoutProperties = _objectWithoutProperties_mod;
({ View: hasOwnProperty, Platform } = react_native);
let GuildMemberStore = GuildMemberStore_mod;
let MediaEngineStore = MediaEngineStore_mod;
const Fonts = Constants.Fonts;
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  row: { flexDirection: "row" },
  voiceStatusIcon: obj2,
  voiceStatusIconMargin: { marginLeft: 8 },
  streamPreview: { marginHorizontal: 16, marginBottom: 16, alignItems: "center", flex: 1 },
  ringingButton: obj3,
  ringingButtonLabel: obj4,
  autoDisabledVideo: { flexDirection: "row", alignItems: "center" },
  autoDisabledVideoLabel: { marginLeft: 4 },
};
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
createStyles = createStyles.createStyles;
obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
};
obj4 = {
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
  fontSize: 14,
  lineHeight: 18,
  marginHorizontal: 16,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
let closure_16 = createStyles(obj);
createStyles = createStyles_mod;
let obj5 = { labelCallScreen: obj6, voiceStatusIcon: obj7, ringingButton: obj8, ringingButtonLabel: obj9 };
obj6 = { fontFamily: Fonts.PRIMARY_MEDIUM, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const createStyles2 = createStyles.createStyles;
obj7 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginLeft: 8 };
obj8 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.xs,
  height: 32,
  alignItems: "center",
  justifyContent: "center",
};
obj9 = {
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
  fontSize: 14,
  lineHeight: 18,
  marginHorizontal: 16,
  color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE,
};
let closure_17 = createStyles2(obj5);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (user) => {
        let channel;
        let closure_1;
        let closure_10;
        let closure_11;
        let closure_2;
        let closure_4;
        let isActionSheet;
        let isSelfMute;
        let isSpectating;
        let localDeaf;
        let localMute;
        let localVideo;
        let localVideoDisabled;
        let name;
        let obj2;
        let onPress;
        let stateFromStores;
        let tmp10;
        let tmp18;
        let tmp21;
        let voiceState;
        let withStream;
        let tmp = _require;
        let obj = require("react");
        const cResult = obj.c(101);
        if (cResult[0] !== user) {
          user = user.user;
          ({ name, channel } = user);
          _require = channel;
          ({ voiceState, withStream, isSpectating } = user);
          importDefault = isSpectating;
          ({ isActionSheet, onPress } = user);
          dependencyMap = onPress;
          cResult[0] = user;
          cResult[1] = channel;
          cResult[2] = isActionSheet;
          cResult[3] = isSpectating;
          cResult[4] = name;
          cResult[5] = onPress;
          cResult[6] = _objectWithoutProperties(user, user);
          cResult[7] = withStream;
          cResult[8] = user;
          cResult[9] = voiceState;
          obj2 = voiceState;
          tmp10 = withStream;
          const tmp14 = _objectWithoutProperties(user, user);
        } else {
          _require = cResult[1];
          importDefault = cResult[3];
          dependencyMap = cResult[5];
          tmp10 = cResult[7];
          user = cResult[8];
          obj2 = cResult[9];
        }
        _objectWithoutProperties = style();
        style();
        closure_17();
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const id = localMute.getId();
          cResult[10] = id;
          tmp18 = id;
        } else {
          tmp18 = cResult[10];
        }
        let closure_5 = tmp18;
        if (cResult[11] !== tmp11.id) {
          let obj3 = { userId: tmp11.id };
          cResult[11] = tmp11.id;
          cResult[12] = obj3;
          tmp21 = obj3;
        } else {
          tmp21 = cResult[12];
        }
        useIsSpeakingDefault(tmp21);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        if (cResult[13] === guild_id) {
          let tmp24;
          let tmp27;
          let tmp26;
          let tmp30;
          let tmp34;
          if (cResult[14] === tmp11.id) {
            tmp24 = cResult[15];
          }
          const tmpResult = tmp(9157);
          const avatarSpeakingColor = tmpResult.useAvatarSpeakingColor(tmp24);
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
            tmp27 = O;
            tmp26 = items;
          } else {
            tmp26 = cResult[16];
            tmp27 = cResult[17];
          }
          const tmpResult4 = tmp(504);
          stateFromStores = tmpResult4.useStateFromStores(tmp26, tmp27);
          const _Symbol2 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [MediaEngineStore];
            class O {
              constructor() {
                return closure_6.theme;
              }
            }
            cResult[18] = items1;
            tmp30 = items1;
          } else {
            tmp30 = cResult[18];
          }
          if (cResult[19] !== tmp11.id) {
            class X {
              constructor() {
                tmp = closure_3;
                isVideoEnabledResult = closure_5 === closure_3.id;
                isSelfMuteResult = isVideoEnabledResult;
                if (isSelfMuteResult) {
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
                if (isSelfDeafResult) {
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
                if (isSelfMuteResult) {
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
                if (isSelfDeafResult) {
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
          const tmpResult5 = tmp(504);
          const stateFromStoresObject = tmpResult5.useStateFromStoresObject(tmp30, X);
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
                if (isSelfMuteResult) {
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
                if (isSelfDeafResult) {
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
            const items2 = [GuildMemberStore];
            class O {
              constructor() {
                return closure_6.theme;
              }
            }
            cResult[21] = items2;
            tmp34 = items2;
          } else {
            class X {
              constructor() {
                tmp = closure_3;
                isVideoEnabledResult = closure_5 === closure_3.id;
                isSelfMuteResult = isVideoEnabledResult;
                if (isSelfMuteResult) {
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
                if (isSelfDeafResult) {
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
          const tmp35 = cResult[22];
          if (channel != null) {
            class X {
              constructor() {
                tmp = closure_3;
                isVideoEnabledResult = closure_5 === closure_3.id;
                isSelfMuteResult = isVideoEnabledResult;
                if (isSelfMuteResult) {
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
                if (isSelfDeafResult) {
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
          if (tmp35 === undefined) {
            class X {
              constructor() {
                tmp = closure_3;
                isVideoEnabledResult = closure_5 === closure_3.id;
                isSelfMuteResult = isVideoEnabledResult;
                if (isSelfMuteResult) {
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
                if (isSelfDeafResult) {
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
            const tmpResult6 = tmp(504);
            const stateFromStores1 = tmpResult6.useStateFromStores(tmp34, Y);
            class O {
              constructor() {
                return closure_6.theme;
              }
            }
            let c15 = false;
            let c13 = false;
            closure_12 = tmp46;
            GuildMemberStore = localDeaf;
            let closure_14 = tmp47;
            MediaEngineStore = false;
            let flag2 = false;
            let tmp48 = tmp47;
            let flag3 = false;
            let tmp49 = tmp46;
            let flag4 = false;
            let tmp50 = localDeaf;
            if (null != obj2) {
              class X {
                constructor() {
                  tmp = closure_3;
                  isVideoEnabledResult = closure_5 === closure_3.id;
                  isSelfMuteResult = isVideoEnabledResult;
                  if (isSelfMuteResult) {
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
                  if (isSelfDeafResult) {
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
              const tmp51 = (undefined === tmp10 || tmp10) && obj2.selfStream;
              class O {
                constructor() {
                  return closure_6.theme;
                }
              }
              const tmp52 = localMute || isSelfMute || obj2.isVoiceMuted();
              closure_12 = tmp52;
              const tmp53 = localDeaf || obj2.isVoiceDeafened();
              GuildMemberStore = tmp53;
              closure_14 = tmp54;
              const sessionId = obj2.sessionId;
              let tmp55 = null != sessionId && tmp18 === tmp11.id;
              if (tmp55) {
                class X {
                  constructor() {
                    tmp = closure_3;
                    isVideoEnabledResult = closure_5 === closure_3.id;
                    isSelfMuteResult = isVideoEnabledResult;
                    if (isSelfMuteResult) {
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
                    if (isSelfDeafResult) {
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
            cResult[30] = tmp11.id;
            class Y {
              constructor() {
                guild_id = undefined;
                tmp = closure_10;
                isGuestOrLurker = closure_10.isGuestOrLurker;
                if (closure_0 != null) {
                  guild_id = closure_0.guild_id;
                }
                return isGuestOrLurker(guild_id, closure_3.id);
              }
            }
            cResult[32] = undefined === tmp10 || tmp10;
            cResult[33] = tmp50;
            cResult[34] = flag4;
            cResult[35] = tmp49;
            cResult[36] = flag3;
            cResult[37] = tmp48;
            cResult[38] = flag2;
          }
          if (channel != null) {
            class X {
              constructor() {
                tmp = closure_3;
                isVideoEnabledResult = closure_5 === closure_3.id;
                isSelfMuteResult = isVideoEnabledResult;
                if (isSelfMuteResult) {
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
                if (isSelfDeafResult) {
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
              isGuestOrLurker = closure_10.isGuestOrLurker;
              if (closure_0 != null) {
                guild_id = closure_0.guild_id;
              }
              return isGuestOrLurker(guild_id, closure_3.id);
            }
          }
          cResult[22] = undefined;
          cResult[23] = tmp11.id;
          cResult[24] = Y;
        }
        const obj4 = { userId: tmp11.id, guildId: guild_id };
        cResult[13] = guild_id;
        cResult[15] = obj4;
        tmp24 = obj4;
      }
    : (user) => {
        let Avatar;
        let Label;
        let channel;
        let guild_id;
        let guild_id1;
        let intl3;
        let isActionSheet;
        let isSelfMute;
        let items3;
        let items4;
        let items5;
        let items6;
        let labelCallScreen;
        let localDeaf;
        let localMute;
        let localVideo;
        let localVideoAutoDisabled;
        let localVideoDisabled;
        let name;
        let obj16;
        let obj5;
        let stringResult;
        let theme;
        let tmp27Result;
        let voiceState;
        let withStream;
        user = user.user;
        ({ name, channel } = user);
        ({ voiceState, withStream } = user);
        if (withStream === undefined) {
          withStream = true;
        }
        ({ isActionSheet, onPress: dependencyMap } = user);
        const isSpectating = user.isSpectating;
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
        const obj3 = { userId: user.id, guildId: guild_id };
        guild_id = undefined;
        const tmp7 = channel(9051)(obj2);
        const useAvatarSpeakingColor = user(9157).useAvatarSpeakingColor;
        user(9157);
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        const avatarSpeakingColor = useAvatarSpeakingColor(obj3);
        const items = [ThemeStore];
        const tmp8Result = user(504);
        const stateFromStores = tmp8Result.useStateFromStores(items, () => theme.theme);
        const items1 = [MediaEngineStore];
        const tmp8Result4 = user(504);
        const stateFromStoresObject = tmp8Result4.useStateFromStoresObject(items1, () => {
          let isSelfDeafResult;
          let isVideoEnabledResult = id === user.id;
          const isSelfMuteResult = isVideoEnabledResult && MediaEngineStore.isSelfMute();
          const obj = {
            isSelfMute: isSelfMuteResult,
            localMute: MediaEngineStore.isLocalMute(user.id),
            localDeaf: isSelfDeafResult,
            localVideo: isVideoEnabledResult,
            localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id),
            localVideoAutoDisabled: MediaEngineStore.isLocalVideoAutoDisabled(user.id),
          };
          isSelfDeafResult = isVideoEnabledResult && MediaEngineStore.isSelfDeaf();
          if (isVideoEnabledResult) {
            isVideoEnabledResult = MediaEngineStore.isVideoEnabled();
          }
          return obj;
        });
        ({ localMute, localDeaf, localVideo, localVideoDisabled, isSelfMute, localVideoAutoDisabled } =
          stateFromStoresObject);
        const items2 = [GuildMemberStore];
        let tmp15 = localMute;
        const tmp8Result5 = user(504);
        const stateFromStores1 = tmp8Result5.useStateFromStores(items2, () => {
          let guild_id;
          const isGuestOrLurker = GuildMemberStore.isGuestOrLurker;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          return isGuestOrLurker(guild_id, user.id);
        });
        if (!localMute) {
          tmp15 = isSelfMute;
        }
        if (!localVideo) {
          localVideo = localVideoDisabled;
        }
        let flag = false;
        let tmp16 = localVideo;
        let tmp17 = localDeaf;
        let tmp18 = tmp15;
        let flag2 = false;
        let flag3 = false;
        let flag4 = false;
        if (null != voiceState) {
          if (withStream) {
            withStream = voiceState.selfStream;
          }
          const sessionId = voiceState.sessionId;
          const tmp19 = tmp15 || voiceState.isVoiceMuted();
          const tmp20 = localDeaf || voiceState.isVoiceDeafened();
          const tmp21 = localVideo || voiceState.selfVideo;
          const tmp22 = null != sessionId && id === user.id && sessionId !== AuthenticationStore.getSessionId();
          flag3 = true;
          flag = tmp22;
          tmp16 = tmp21;
          tmp17 = tmp20;
          tmp18 = tmp19;
          flag2 = withStream;
          flag4 = tmp22;
        }
        const tmp23 = isActionSheet ? tmp3.voiceStatusIcon : tmp2.voiceStatusIcon;
        const obj4 = {
          onPress() {
            return dependencyMap(user);
          },
          label: name,
          leading: closure_13(Avatar, obj5),
          trailing: tmp27Result,
        };
        obj5 = {
          user,
          guildId: guild_id1,
          size: user(1188).AvatarSizes.REFRESH_MEDIUM_32,
          speaking: tmp7,
          speakingColor: avatarSpeakingColor,
        };
        guild_id1 = undefined;
        Avatar = tmp8(1188).Avatar;
        if (channel != null) {
          guild_id1 = channel.guild_id;
        }
        tmp27Result = null;
        if (flag3) {
          tmp27Result = null;
          if (!flag) {
            let tmp24Result = null;
            const obj6 = { style: tmp2.row, children: items3 };
            if (isSpectating) {
              const obj7 = { size: user(1188).Icon.Sizes.REFRESH_SMALL_16, source: channel(13619), style: tmp23 };
              const Icon = tmp8(1188).Icon;
              tmp24Result = closure_13(Icon, obj7);
            }
            items3 = [tmp24Result, , , ,];
            let tmp24Result5 = null;
            if (tmp18) {
              let tmp5Result;
              const tmp8Result6 = user(4735);
              if (tmp8Result6.isThemeDark(stateFromStores)) {
                tmp5Result = channel(13614);
              } else {
                tmp5Result = channel(13615);
              }
              const obj8 = {
                size: user(1188).Icon.Sizes.REFRESH_SMALL_16,
                source: tmp5Result,
                style: tmp2.voiceStatusIconMargin,
                color: tmp23.tintColor,
                disableColor: localMute,
              };
              const Icon2 = tmp8(1188).Icon;
              tmp24Result5 = closure_13(Icon2, obj8);
            }
            items3[1] = tmp24Result5;
            let tmp24Result6 = null;
            if (tmp17) {
              const obj9 = { size: user(1188).Icon.Sizes.REFRESH_SMALL_16, source: channel(13616), style: tmp23 };
              const Icon3 = tmp8(1188).Icon;
              tmp24Result6 = closure_13(Icon3, obj9);
            }
            items3[2] = tmp24Result6;
            let tmp24Result7 = null;
            if (tmp16) {
              let obj11;
              const Icon4 = tmp8(1188).Icon;
              if (localVideoDisabled) {
                obj11 = {
                  size: user(1188).Icon.Sizes.REFRESH_SMALL_16,
                  source: channel(13617),
                  style: tmp2.voiceStatusIconMargin,
                  disableColor: true,
                };
                const obj10 = {
                  size: user(1188).Icon.Sizes.REFRESH_SMALL_16,
                  source: channel(13617),
                  style: tmp2.voiceStatusIconMargin,
                  disableColor: true,
                };
              } else {
                obj11 = { size: user(1188).Icon.Sizes.REFRESH_SMALL_16, source: channel(13618), style: tmp23 };
              }
              tmp24Result7 = closure_13(Icon4, obj11);
            }
            items3[3] = tmp24Result7;
            let tmp24Result8 = null;
            if (flag2) {
              const obj12 = { style: tmp23 };
              tmp24Result8 = closure_13(tmp8(1188).LiveTag, obj12);
            }
            items3[4] = tmp24Result8;
            tmp27Result = closure_14(closure_5, obj6);
          }
        }
        const obj13 = { disabled: flag4, label: closure_13(Label, obj16), subLabel: stringResult };
        const FormRow = tmp8(8924).FormRow;
        const merged1 = Object.assign(merged);
        const merged2 = Object.assign(obj4);
        let tmp37 = name;
        Label = tmp8(8924).FormRow.Label;
        if (stateFromStores1) {
          const obj14 = { children: items4 };
          items4 = [name];
          const obj15 = { variant: "text-md/semibold", lineClamp: 1, color: "status-positive", children: items5 };
          const Text = tmp8(4892).Text;
          const intl = tmp8(1126).intl;
          items5 = ["\u00A0", intl.string(user(1126).t["pFO/Ph"])];
          items4[1] = closure_14(Text, obj15);
          tmp37 = closure_14(closure_15, obj14);
        }
        obj16 = { text: tmp37, style: labelCallScreen };
        labelCallScreen = null;
        if (isActionSheet) {
          labelCallScreen = tmp3.labelCallScreen;
        }
        if (localVideoAutoDisabled) {
          const obj17 = { style: tmp2.autoDisabledVideo, children: items6 };
          const obj18 = { source: channel(4814), size: user(1188).Icon.Sizes.EXTRA_SMALL, disableColor: true };
          const Icon5 = tmp8(1188).Icon;
          items6 = [closure_13(Icon5, obj18)];
          const obj19 = {
            variant: "text-xs/medium",
            color: "text-default",
            style: tmp2.autoDisabledVideoLabel,
            children: intl3.string(user(1126).t.m2Hyj0),
          };
          const Text2 = tmp8(4892).Text;
          intl3 = tmp8(1126).intl;
          items6[1] = closure_13(Text2, obj19);
          stringResult = closure_14(closure_5, obj17);
        } else {
          stringResult = null;
          if (flag) {
            const intl2 = tmp8(1126).intl;
            stringResult = intl2.string(tmp8(1126).t.IyYqqY);
          }
        }
        return closure_13(FormRow, obj13);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StreamingUserRow(user) {
      let first;
      let items1;
      let obj5;
      let tmp10;
      let tmp30;
      let tmp8;
      let obj = user(576);
      const cResult = obj.c(18);
      const tmp4 = closure_16();
      user = user.user;
      const channel = user.channel;
      const tmp5 = closure_17();
      const isActionSheet = user.isActionSheet;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PresenceStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== user.id) {
        const fn = function l() {
          const obj = StreamerApplicationSelectors;
          return obj.getStreamerActivityByUserId(user.id, PresenceStore);
        };
        cResult[1] = user.id;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = user(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      if (cResult[3] !== stateFromStores) {
        let formatResult;
        if (null != stateFromStores) {
          const intl2 = tmp(1126).intl;
          const format = intl2.format;
          if (null != stateFromStores.details) {
            let name;
            if ("" !== stateFromStores.details) {
              name = stateFromStores.details;
            }
            let obj2 = { name };
            formatResult = format(tmp13, obj2);
          }
          name = stateFromStores.name;
        } else {
          const intl = tmp(1126).intl;
          formatResult = intl.string(tmp(1126).t.eXan7B);
        }
        cResult[3] = stateFromStores;
        cResult[4] = formatResult;
        tmp10 = formatResult;
      } else {
        tmp10 = cResult[4];
      }
      let labelCallScreen = null;
      if (isActionSheet) {
        labelCallScreen = tmp5.labelCallScreen;
      }
      if (cResult[5] === tmp10) {
        let tmp15;
        if (cResult[6] === labelCallScreen) {
          tmp15 = cResult[7];
        }
        if (cResult[8] === user) {
          let tmp17;
          if (cResult[9] === tmp15) {
            tmp17 = cResult[10];
          }
          if (cResult[11] === channel) {
            if (cResult[12] === tmp4) {
              let tmp24;
              if (cResult[13] === user.id) {
                tmp24 = cResult[14];
              }
              if (cResult[15] === tmp17) {
                let tmp32;
                if (cResult[16] === tmp24) {
                  tmp32 = cResult[17];
                }
                return tmp32;
              }
              const obj3 = { children: items1 };
              items1 = [tmp17, tmp24];
              const tmp35 = closure_14(closure_15, obj3);
              cResult[15] = tmp17;
              cResult[16] = tmp24;
              cResult[17] = tmp35;
              tmp32 = tmp35;
            }
          }
          let tmp27Result = user.id !== AuthenticationStore.getId();
          if (tmp27Result) {
            let guildId;
            const obj4 = { style: tmp4.streamPreview, children: closure_13(tmp30, obj5) };
            tmp30 = channel(9755);
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            obj5 = {
              guildId,
              userId: user.id,
              disableTransition: true,
              onPress() {
                let isModalOpenResult = null != channel;
                if (isModalOpenResult) {
                  const isModalOpen = NavigationRouteUtils.isModalOpen;
                  NavigationRouteUtils;
                  const obj = PrivateChannelCallUtils;
                  isModalOpenResult = isModalOpen(obj.getVoiceChannelKey(channel.id));
                }
                if (isModalOpenResult) {
                  const hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
                  ActionSheetActionCreatorsDefault;
                  const obj2 = PrivateChannelCallUtils;
                  hideActionSheet(obj2.getVoiceChannelKey(channel.id));
                }
              },
            };
            tmp27Result = closure_13(closure_5, obj4);
          }
          cResult[11] = channel;
          cResult[12] = tmp4;
          cResult[13] = user.id;
          cResult[14] = tmp27Result;
          tmp24 = tmp27Result;
        }
        const obj6 = { subLabel: tmp15 };
        const merged = Object.assign(user);
        const tmp23 = closure_13(closure_18, obj6);
        cResult[8] = user;
        cResult[9] = tmp15;
        cResult[10] = tmp23;
        tmp17 = tmp23;
      }
      const tmp16 = closure_13(user(8924).FormSubLabel, { text: tmp10, style: labelCallScreen });
      cResult[5] = tmp10;
      cResult[6] = labelCallScreen;
      cResult[7] = tmp16;
      tmp15 = tmp16;
    }
  : function StreamingUserRow(user) {
      let FormSubLabel;
      let formatResult;
      let labelCallScreen;
      let obj4;
      let obj6;
      let tmp17;
      user = user.user;
      const channel = user.channel;
      const isActionSheet = user.isActionSheet;
      const tmp = closure_16();
      const tmp2 = closure_17();
      let obj = user(504);
      const items = [PresenceStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        const obj = StreamerApplicationSelectors;
        return obj.getStreamerActivityByUserId(user.id, PresenceStore);
      });
      if (null != stateFromStores) {
        const intl2 = tmp3(1126).intl;
        const format = intl2.format;
        if (null != stateFromStores.details) {
          let name;
          if ("" !== stateFromStores.details) {
            name = stateFromStores.details;
          }
          let obj2 = { name };
          formatResult = format(tmp7, obj2);
        }
        name = stateFromStores.name;
      } else {
        const intl = tmp3(1126).intl;
        formatResult = intl.string(tmp3(1126).t.eXan7B);
      }
      const obj3 = { subLabel: closure_13(FormSubLabel, obj4) };
      const merged = Object.assign(user);
      obj4 = { text: formatResult, style: labelCallScreen };
      labelCallScreen = null;
      FormSubLabel = tmp3(8924).FormSubLabel;
      if (isActionSheet) {
        labelCallScreen = tmp2.labelCallScreen;
      }
      const children = [closure_13(closure_18, obj3)];
      let tmp10Result = user.id !== AuthenticationStore.getId();
      if (tmp10Result) {
        let guildId;
        const obj5 = { style: tmp.streamPreview, children: closure_13(tmp17, obj6) };
        tmp17 = channel(9755);
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        obj6 = {
          guildId,
          userId: user.id,
          disableTransition: true,
          onPress() {
            let isModalOpenResult = null != channel;
            if (isModalOpenResult) {
              const isModalOpen = NavigationRouteUtils.isModalOpen;
              NavigationRouteUtils;
              const obj = PrivateChannelCallUtils;
              isModalOpenResult = isModalOpen(obj.getVoiceChannelKey(channel.id));
            }
            if (isModalOpenResult) {
              const hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
              ActionSheetActionCreatorsDefault;
              const obj2 = PrivateChannelCallUtils;
              hideActionSheet(obj2.getVoiceChannelKey(channel.id));
            }
          },
        };
        tmp10Result = closure_13(closure_5, obj5);
      }
      children[1] = tmp10Result;
      return closure_14(closure_15, { children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RingButton(channelId) {
      let obj = channelId(576);
      const cResult = obj.c(10);
      channelId = channelId.channelId;
      const userId = channelId.userId;
      const isActionSheet = channelId.isActionSheet;
      const tmp4 = closure_16();
      const tmp5 = closure_17();
      if (null != userId) {
        if (null != channelId) {
          if (cResult[0] === channelId) {
            let tmp6;
            let tmp10;
            let tmp12;
            if (cResult[1] === userId) {
              tmp6 = cResult[2];
            }
            const tmp7 = isActionSheet ? tmp5.ringingButton : tmp4.ringingButton;
            const tmp8 = isActionSheet ? tmp5.ringingButtonLabel : tmp4.ringingButtonLabel;
            const _Symbol = Symbol;
            if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(channelId(1126).t.bHa9kN);
              cResult[3] = stringResult;
              tmp10 = stringResult;
            } else {
              tmp10 = cResult[3];
            }
            if (cResult[4] !== tmp8) {
              const obj2 = { style: tmp8, children: tmp10 };
              const tmp14 = closure_13(channelId(1188).LegacyText, obj2);
              cResult[4] = tmp8;
              cResult[5] = tmp14;
              tmp12 = tmp14;
            } else {
              tmp12 = cResult[5];
            }
            if (cResult[6] === tmp6) {
              if (cResult[7] === tmp7) {
                let tmp15;
                if (cResult[8] === tmp12) {
                  tmp15 = cResult[9];
                }
                return tmp15;
              }
            }
            const obj3 = { onPress: tmp6, accessibilityRole: "button", style: tmp7, children: tmp12 };
            const tmp17 = closure_13(channelId(5916).PressableOpacity, obj3);
            cResult[6] = tmp6;
            cResult[7] = tmp7;
            cResult[8] = tmp12;
            cResult[9] = tmp17;
            tmp15 = tmp17;
          }
          const fn = function n() {
            const items = [userId];
            const obj = CallActionCreatorsDefault;
            obj.ring(channelId, items, "voice_user_action_sheet");
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
      let LegacyText;
      let intl;
      let obj2;
      channelId = channelId.channelId;
      const userId = channelId.userId;
      const isActionSheet = channelId.isActionSheet;
      const tmp = closure_16();
      const tmp2 = closure_17();
      let tmp4Result = null;
      if (null != userId) {
        tmp4Result = null;
        if (null != channelId) {
          let obj = {
            onPress() {
              const items = [userId];
              const obj = CallActionCreatorsDefault;
              obj.ring(channelId, items, "voice_user_action_sheet");
            },
            accessibilityRole: "button",
            style: isActionSheet ? tmp2.ringingButton : tmp.ringingButton,
            children: closure_13(LegacyText, obj2),
          };
          const PressableOpacity = channelId(5916).PressableOpacity;
          obj2 = {
            style: isActionSheet ? tmp2.ringingButtonLabel : tmp.ringingButtonLabel,
            children: intl.string(channelId(1126).t.bHa9kN),
          };
          LegacyText = tmp5(1188).LegacyText;
          intl = tmp5(1126).intl;
          tmp4Result = closure_13(PressableOpacity, obj);
        }
      }
      return tmp4Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function StopRingButton(channelId) {
      let obj = channelId(576);
      const cResult = obj.c(10);
      channelId = channelId.channelId;
      const userId = channelId.userId;
      const isActionSheet = channelId.isActionSheet;
      const tmp4 = closure_16();
      const tmp5 = closure_17();
      if (null != userId) {
        if (null != channelId) {
          if (cResult[0] === channelId) {
            let tmp6;
            let tmp10;
            let tmp12;
            if (cResult[1] === userId) {
              tmp6 = cResult[2];
            }
            const tmp7 = isActionSheet ? tmp5.ringingButton : tmp4.ringingButton;
            const tmp8 = isActionSheet ? tmp5.ringingButtonLabel : tmp4.ringingButtonLabel;
            const _Symbol = Symbol;
            if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(channelId(1126).t.ygslb0);
              cResult[3] = stringResult;
              tmp10 = stringResult;
            } else {
              tmp10 = cResult[3];
            }
            if (cResult[4] !== tmp8) {
              const obj2 = { style: tmp8, children: tmp10 };
              const tmp14 = closure_13(channelId(1188).LegacyText, obj2);
              cResult[4] = tmp8;
              cResult[5] = tmp14;
              tmp12 = tmp14;
            } else {
              tmp12 = cResult[5];
            }
            if (cResult[6] === tmp6) {
              if (cResult[7] === tmp7) {
                let tmp15;
                if (cResult[8] === tmp12) {
                  tmp15 = cResult[9];
                }
                return tmp15;
              }
            }
            const obj3 = { onPress: tmp6, accessibilityRole: "button", style: tmp7, children: tmp12 };
            const tmp17 = closure_13(channelId(5916).PressableOpacity, obj3);
            cResult[6] = tmp6;
            cResult[7] = tmp7;
            cResult[8] = tmp12;
            cResult[9] = tmp17;
            tmp15 = tmp17;
          }
          const fn = function n() {
            const items = [userId];
            const obj = CallActionCreatorsDefault;
            obj.stopRinging(channelId, items);
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
      let LegacyText;
      let intl;
      let obj2;
      channelId = channelId.channelId;
      const userId = channelId.userId;
      const isActionSheet = channelId.isActionSheet;
      const tmp = closure_16();
      const tmp2 = closure_17();
      let tmp4Result = null;
      if (null != userId) {
        tmp4Result = null;
        if (null != channelId) {
          let obj = {
            onPress() {
              const items = [userId];
              const obj = CallActionCreatorsDefault;
              obj.stopRinging(channelId, items);
            },
            accessibilityRole: "button",
            style: isActionSheet ? tmp2.ringingButton : tmp.ringingButton,
            children: closure_13(LegacyText, obj2),
          };
          const PressableOpacity = channelId(5916).PressableOpacity;
          obj2 = {
            style: isActionSheet ? tmp2.ringingButtonLabel : tmp.ringingButtonLabel,
            children: intl.string(channelId(1126).t.ygslb0),
          };
          LegacyText = tmp5(1188).LegacyText;
          intl = tmp5(1126).intl;
          tmp4Result = closure_13(PressableOpacity, obj);
        }
      }
      return tmp4Result;
    };
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo3 = react.memo;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function DisconnectedUserRow(user) {
        let first;
        let isActionSheet;
        let tmp = user;
        let obj = user(isActionSheet[15]);
        const cResult = obj.c(31);
        user = user.user;
        const channel = user.channel;
        isActionSheet = user.isActionSheet;
        const onPress = user.onPress;
        closure_17();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [CallStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === channel.id) {
          let tmp7;
          let tmp8;
          if (cResult[2] === user.id) {
            tmp7 = cResult[3];
            tmp8 = cResult[4];
          }
          const tmpResult = tmp(isActionSheet[18]);
          const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
          if (cResult[5] === channel.guild_id) {
            if (cResult[6] === channel.id) {
              let tmp10;
              if (cResult[7] === user) {
                tmp10 = cResult[8];
              }
              const tmpResult2 = tmp(isActionSheet[39]);
              const canRing = tmpResult2.useCanRing(user);
              if (cResult[9] === canRing) {
                if (cResult[10] === channel.id) {
                  if (cResult[11] === isActionSheet) {
                    if (cResult[12] === stateFromStores) {
                      let tmp14;
                      if (cResult[13] === user.id) {
                        tmp14 = cResult[14];
                      }
                      if (cResult[15] === onPress) {
                        let tmp15;
                        if (cResult[16] === user) {
                          tmp15 = cResult[17];
                        }
                        class E {
                          constructor() {
                            return onPress(user);
                          }
                        }
                        if (cResult[18] === tmp10) {
                          let tmp17;
                          if (cResult[19] === null) {
                            tmp17 = cResult[20];
                          }
                          if (cResult[21] === channel.guild_id) {
                            let tmp20;
                            let tmp22;
                            if (cResult[22] === user) {
                              tmp20 = cResult[23];
                            }
                            if (cResult[24] !== tmp14) {
                              const tmp14Result = tmp14();
                              class E {
                                constructor() {
                                  return onPress(user);
                                }
                              }
                              cResult[25] = tmp14Result;
                              tmp22 = tmp14Result;
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
                            const FormRow = tmp(tmp2[30]).FormRow;
                            const merged = Object.assign(obj2);
                            cResult[26] = tmp22;
                            cResult[27] = tmp15;
                            cResult[28] = tmp17;
                            cResult[29] = tmp20;
                            cResult[30] = closure_13(FormRow, obj4);
                            const tmp29 = closure_13(FormRow, obj4);
                          }
                          class E {
                            constructor() {
                              return onPress(user);
                            }
                          }
                          const obj5 = {
                            user,
                            guildId: channel.guild_id,
                            size: tmp(isActionSheet[22]).AvatarSizes.REFRESH_MEDIUM_32,
                          };
                          const Avatar = tmp(tmp2[22]).Avatar;
                          const tmp21 = closure_13(Avatar, obj5);
                          cResult[21] = channel.guild_id;
                          cResult[22] = user;
                          cResult[23] = tmp21;
                          tmp20 = tmp21;
                        }
                        const obj6 = { text: tmp10, style: null };
                        const tmp19 = closure_13(tmp(isActionSheet[30]).FormRow.Label, obj6);
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
                let tmp = null;
                if (canRing) {
                  const obj = { channelId: channel.id, userId: user.id, isActionSheet };
                  tmp = map1(stateFromStores ? closure_21 : closure_20, obj);
                }
                return tmp;
              }
              cResult[9] = canRing;
              cResult[10] = channel.id;
              cResult[11] = isActionSheet;
              cResult[12] = stateFromStores;
              cResult[13] = user.id;
              cResult[14] = renderVoiceState;
              tmp14 = renderVoiceState;
            }
          }
          const obj3 = channel(isActionSheet[38]);
          const name = obj3.getName(channel.guild_id, channel.id, user);
          cResult[5] = channel.guild_id;
          cResult[6] = channel.id;
          cResult[7] = user;
          cResult[8] = name;
          tmp10 = name;
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
      }
    : function DisconnectedUserRow(user) {
        let Avatar;
        let Label;
        let isActionSheet;
        let labelCallScreen;
        let obj5;
        let obj6;
        let tmp7Result;
        user = user.user;
        const channel = user.channel;
        ({ isActionSheet, onPress: dependencyMap } = user);
        const items = [CallStore];
        const items1 = [channel.id, user.id];
        const tmp = closure_17();
        const obj = user(504);
        const stateFromStores = obj.useStateFromStores(
          items,
          () => {
            const call = CallStore.getCall(channel.id);
            let hasItem = null != call;
            if (hasItem) {
              const ringing = call.ringing;
              hasItem = ringing.includes(user.id);
            }
            return hasItem;
          },
          items1,
        );
        const obj2 = channel(5048);
        const name = obj2.getName(channel.guild_id, channel.id, user);
        const obj4 = {
          onPress() {
            return dependencyMap(user);
          },
          label: closure_13(Label, obj5),
          leading: closure_13(Avatar, obj6),
          trailing: tmp7Result,
        };
        const obj3 = user(9402);
        const canRing = obj3.useCanRing(user);
        obj5 = { text: name, style: labelCallScreen };
        labelCallScreen = null;
        Label = user(8924).FormRow.Label;
        if (isActionSheet) {
          labelCallScreen = tmp.labelCallScreen;
        }
        obj6 = { user, guildId: channel.guild_id, size: user(1188).AvatarSizes.REFRESH_MEDIUM_32 };
        Avatar = tmp2(1188).Avatar;
        tmp7Result = null;
        if (canRing) {
          const obj7 = { channelId: channel.id, userId: user.id, isActionSheet };
          tmp7Result = closure_13(stateFromStores ? closure_21 : closure_20, obj7);
        }
        const obj8 = {};
        const FormRow = tmp2(8924).FormRow;
        const merged = Object.assign(obj4);
        return closure_13(FormRow, obj8);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const memo3Result = memo3(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VoiceMemberUser(voiceState) {
        let first;
        let tmp8;
        const obj = voiceState(576);
        const cResult = obj.c(11);
        const tmp = voiceState;
        voiceState = voiceState.voiceState;
        let nick = voiceState.nick;
        user = voiceState.user;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ChannelStore];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        let channelId;
        const tmp6 = cResult[1];
        if (voiceState != null) {
          channelId = voiceState.channelId;
        }
        if (tmp6 !== channelId) {
          let channelId1;
          if (voiceState != null) {
            channelId1 = voiceState.channelId;
          }
          const fn = function l() {
            let channelId;
            const getChannel = ChannelStore.getChannel;
            if (voiceState != null) {
              channelId = voiceState.channelId;
            }
            return getChannel(channelId);
          };
          cResult[1] = channelId1;
          cResult[2] = fn;
          tmp8 = fn;
        } else {
          tmp8 = cResult[2];
        }
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
        const obj3 = UserUtilsDefault;
        const name = obj3.useName(user);
        if (null != voiceState) {
          if (voiceState.selfStream) {
            let tmp12 = nick;
            if (nick == null) {
              tmp12 = name;
            }
            if (cResult[7] === stateFromStores) {
              if (cResult[8] === voiceState) {
                let tmp13;
                if (cResult[9] === tmp12) {
                  tmp13 = cResult[10];
                }
                return tmp13;
              }
            }
            const obj2 = { name: tmp12, channel: stateFromStores };
            const merged = Object.assign(voiceState);
            const tmp19 = closure_13(closure_19, obj2);
            cResult[7] = stateFromStores;
            cResult[8] = voiceState;
            cResult[9] = tmp12;
            cResult[10] = tmp19;
            tmp13 = tmp19;
          }
        }
        if (nick == null) {
          nick = name;
        }
        if (cResult[3] === stateFromStores) {
          if (cResult[4] === voiceState) {
            let tmp20;
            if (cResult[5] === nick) {
              tmp20 = cResult[6];
            }
            return tmp20;
          }
        }
        const obj4 = { name: nick, channel: stateFromStores, withStream: false };
        const merged1 = Object.assign(voiceState);
        const tmp22 = closure_13(closure_18, obj4);
        cResult[3] = stateFromStores;
        cResult[4] = voiceState;
        cResult[5] = nick;
        cResult[6] = tmp22;
        tmp20 = tmp22;
      }
    : function VoiceMemberUser(voiceState) {
        let tmp6;
        voiceState = voiceState.voiceState;
        let nick = voiceState.nick;
        user = voiceState.user;
        const items = [ChannelStore];
        const obj = voiceState(504);
        const stateFromStores = obj.useStateFromStores(items, () => {
          let channelId;
          const getChannel = ChannelStore.getChannel;
          if (voiceState != null) {
            channelId = voiceState.channelId;
          }
          return getChannel(channelId);
        });
        const obj2 = UserUtilsDefault;
        const name = obj2.useName(user);
        if (null != voiceState) {
          let tmp3Result;
          if (voiceState.selfStream) {
            const obj3 = { name: nick, channel: stateFromStores };
            const merged = Object.assign(voiceState);
            if (nick == null) {
              nick = name;
            }
            tmp3Result = closure_13(closure_19, obj3);
          }
          return tmp3Result;
        }
        const obj4 = { name: tmp6, channel: stateFromStores, withStream: false };
        const merged1 = Object.assign(voiceState);
        tmp6 = nick;
        if (nick == null) {
          tmp6 = name;
        }
        tmp3Result = closure_13(closure_18, obj4);
      },
);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceMemberUser.tsx");

export default memo3Result;
export const STREAM_PREVIEW_MARGIN = 16;
export const DisconnectedUserRow = memo2Result;
