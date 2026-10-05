// discord_app/modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import isRoleRequiredDefault from "../../../channel/isRoleRequired.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import useIsVoiceChannelFullDefault from "../../useIsVoiceChannelFull.tsx";
import AssetRegistryDefault from "../../../../../_runtime/09715_AssetRegistry.js";
import openGroupDMAddMembersDefault from "../../../group_dm/native/openGroupDMAddMembers.tsx";
import CallStateHooks from "../CallStateHooks.tsx";
import OngoingCallStatusLabelDefault from "../components/OngoingCallStatusLabel.tsx";
import OngoingCallTimerDefault from "../components/OngoingCallTimer.tsx";
import react from "../../../../../_runtime/00019_react.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const CallStateHooksDefault = CallStateHooks;
let applicationId, channel, importDefault;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
({ Permissions: metroImportDefault, AnalyticsPages: metroImportAll, InstantInviteSources: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  middle: { flex: 1, justifyContent: "space-around", marginHorizontal: 16 },
  icons: obj2,
  subtitle: obj3,
  subtitleWrapper: { flexDirection: "row" },
};
obj2 = { flexDirection: "row", tintColor: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
obj3 = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.WHITE };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let items;
      const obj = react2;
      const cResult = obj.c(16);
      channel = channel.channel;
      const tmp4 = closure_12();
      const state = CallStateHooksDefault(channel.id).state;
      if (cResult[0] === channel) {
        if (cResult[1] === tmp4.subtitle) {
          let tmp6;
          if (cResult[2] === state) {
            tmp6 = cResult[3];
          }
          if (cResult[4] === tmp4.subtitle) {
            let tmp8;
            if (cResult[5] === state) {
              tmp8 = cResult[6];
            }
            if (cResult[7] === channel.id) {
              if (cResult[8] === tmp4.subtitle) {
                let tmp11;
                if (cResult[9] === state) {
                  tmp11 = cResult[10];
                }
                if (cResult[11] === tmp4.subtitleWrapper) {
                  if (cResult[12] === tmp6) {
                    if (cResult[13] === tmp8) {
                      let tmp14;
                      if (cResult[14] === tmp11) {
                        tmp14 = cResult[15];
                      }
                      return tmp14;
                    }
                  }
                }
                const obj2 = { style: tmp4.subtitleWrapper, children: items };
                items = [tmp6, tmp8, tmp11];
                const tmp17 = unpackModuleId(View, obj2);
                cResult[11] = tmp4.subtitleWrapper;
                cResult[12] = tmp6;
                cResult[13] = tmp8;
                cResult[14] = tmp11;
                cResult[15] = tmp17;
                tmp14 = tmp17;
              }
            }
            let tmp12 = state === CallStateHooks.CallStates.CONNECTED;
            if (tmp12) {
              const obj3 = { channelId: channel.id, style: tmp4.subtitle };
              tmp12 = authStore(OngoingCallTimerDefault, obj3);
            }
            cResult[7] = channel.id;
            cResult[8] = tmp4.subtitle;
            cResult[9] = state;
            cResult[10] = tmp12;
            tmp11 = tmp12;
          }
          let tmp9 = state === CallStateHooks.CallStates.CONNECTED;
          if (tmp9) {
            const obj4 = {
              style: tmp4.subtitle,
              variant: "text-xs/medium",
              color: "text-overlay-light",
              children: " - ",
            };
            tmp9 = authStore(Text_Text.Text, obj4);
          }
          cResult[4] = tmp4.subtitle;
          cResult[5] = state;
          cResult[6] = tmp9;
          tmp8 = tmp9;
        }
      }
      const obj5 = { useAllAloneText: false, channel, voiceState: state, style: tmp4.subtitle };
      const tmp7 = authStore(OngoingCallStatusLabelDefault, obj5);
      cResult[0] = channel;
      cResult[1] = tmp4.subtitle;
      cResult[2] = state;
      cResult[3] = tmp7;
      tmp6 = tmp7;
    }
  : (channel) => {
      let items;
      channel = channel.channel;
      const tmp = closure_12();
      const state = CallStateHooksDefault(channel.id).state;
      const obj = { style: tmp.subtitleWrapper, children: items };
      items = [, ,];
      const obj2 = { useAllAloneText: false, channel, voiceState: state, style: tmp.subtitle };
      items[0] = authStore(OngoingCallStatusLabelDefault, obj2);
      let tmp6Result = state === CallStateHooks.CallStates.CONNECTED;
      if (tmp6Result) {
        const obj3 = { style: tmp.subtitle, variant: "text-xs/medium", color: "text-overlay-light", children: " - " };
        tmp6Result = authStore(Text_Text.Text, obj3);
      }
      items[1] = tmp6Result;
      let tmp6Result2 = state === CallStateHooks.CallStates.CONNECTED;
      if (tmp6Result2) {
        const obj4 = { channelId: channel.id, style: tmp.subtitle };
        tmp6Result2 = authStore(OngoingCallTimerDefault, obj4);
      }
      items[2] = tmp6Result2;
      return unpackModuleId(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let items2;
      let stateFromStores1;
      let tmp11;
      const tmp = channel;
      let obj = channel(576);
      const cResult = obj.c(39);
      channel = channel.channel;
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        class C {
          constructor() {
            return closure_5.getGuild(channel.getGuildId());
          }
        }
        cResult[1] = channel;
        cResult[2] = C;
      } else {
        class C {
          constructor() {
            return closure_5.getGuild(channel.getGuildId());
          }
        }
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, C);
      const tmp10 = stateFromStores1(9600)(channel);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor() {
            return closure_5.getGuild(channel.getGuildId());
          }
        }
        const items1 = [EmbeddedActivitiesStore];
        cResult[3] = items1;
        tmp11 = items1;
      } else {
        class C {
          constructor() {
            return closure_5.getGuild(channel.getGuildId());
          }
        }
      }
      if (cResult[4] !== channel.id) {
        class N {
          constructor() {
            return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
        cResult[4] = channel.id;
        cResult[5] = N;
      } else {
        class N {
          constructor() {
            return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
      }
      if (cResult[6] !== channel) {
        class N {
          constructor() {
            return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
        tmp14[0] = channel;
        cResult[6] = channel;
        cResult[7] = tmp14;
      } else {
        class N {
          constructor() {
            return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
      }
      const tmpResult2 = tmp(504);
      stateFromStores1 = tmpResult2.useStateFromStores(tmp11, N, tmp14);
      let tmp16 = tmp9(5043)(channel);
      if (stateFromStores != null) {
        class N {
          constructor() {
            return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
      }
      if (cResult[8] === channel) {
        class N {
          constructor() {
            return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
        const tmp18 = cResult[9];
        if (stateFromStores1 != null) {
          class N {
            constructor() {
              return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
            }
          }
        }
        if (tmp18 === tmp19) {
          class N {
            constructor() {
              return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
            }
          }
          if (channel.isPrivate()) {
            class N {
              constructor() {
                return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
              }
            }
            if (cResult[14] !== channel) {
              class N {
                constructor() {
                  return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                }
              }
              const obj2 = { channel };
              const tmp25 = closure_10(closure_13, obj2);
              cResult[14] = channel;
              cResult[15] = tmp25;
            } else {
              class N {
                constructor() {
                  return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                }
              }
            }
            if (cResult[16] !== channel.id) {
              class V {
                constructor() {
                  return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
                }
              }
              cResult[16] = channel.id;
              cResult[17] = V;
            } else {
              class V {
                constructor() {
                  return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
                }
              }
            }
            tmp16 = tmp22;
          }
          if (stateFromStores1(5846)(channel)) {
            class V {
              constructor() {
                return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
              }
            }
          } else {
            class V {
              constructor() {
                return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
              }
            }
          }
          if (cResult[18] === tmp4.icons) {
            class V {
              constructor() {
                return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
              }
            }
            if (cResult[21] !== tmp16) {
              let tmp32;
              class V {
                constructor() {
                  return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
                }
              }
              if (typeof tmp16 === "string") {
                class V {
                  constructor() {
                    return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
                  }
                }
                const obj3 = {
                  lineClamp: 1,
                  lineBreakMode: "tail",
                  variant: "text-md/semibold",
                  color: "text-overlay-light",
                  children: tmp16,
                };
                tmp32 = closure_10(tmp(4886).Text, obj3);
              }
              cResult[21] = tmp16;
              cResult[22] = tmp32;
            } else {
              class V {
                constructor() {
                  return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
                }
              }
            }
            if (cResult[23] !== tmp17) {
              let tmp34;
              class V {
                constructor() {
                  return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
                }
              }
              if (typeof tmp17 === "string") {
                class V {
                  constructor() {
                    return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
                  }
                }
                const obj4 = {
                  lineClamp: 1,
                  lineBreakMode: "tail",
                  variant: "text-xs/medium",
                  color: "text-overlay-light",
                  children: tmp17,
                };
                tmp34 = closure_10(tmp(4886).Text, obj4);
              }
              cResult[23] = tmp17;
              cResult[24] = tmp34;
            } else {
              class V {
                constructor() {
                  return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
                }
              }
            }
            if (cResult[25] === tmp4.middle) {
              class V {
                constructor() {
                  return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
                }
              }
            }
            const obj5 = { style: tmp4.middle, children: items2 };
            items2 = [tmp31, tmp33];
            cResult[25] = tmp4.middle;
            cResult[26] = tmp33;
            cResult[27] = tmp31;
            cResult[28] = closure_11(View, obj5);
            const tmp38 = closure_11(View, obj5);
          }
          const obj6 = { size: tmp(1188).Icon.Sizes.MEDIUM, source: tmp27, disableColor: true, style: tmp4.icons };
          const Icon = tmp(1188).Icon;
          cResult[18] = tmp4.icons;
          cResult[19] = tmp27;
          cResult[20] = closure_10(Icon, obj6);
          const tmp30 = closure_10(Icon, obj6);
        }
      }
      if (PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel)) {
        class V {
          constructor() {
            return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
          }
        }
        if (!tmp10) {
          class V {
            constructor() {
              return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
            }
          }
        }
      }
      cResult[8] = channel;
      if (stateFromStores1 != null) {
        class V {
          constructor() {
            return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
          }
        }
      }
      cResult[9] = undefined;
      cResult[10] = tmp10;
      cResult[11] = null;
    }
  : (channel) => {
      let items3;
      let items4;
      let tmp14Result4;
      let tmp5Result;
      channel = channel.channel;
      const tmp = closure_12();
      let obj = channel(504);
      const items = [GuildStore];
      const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
      const items1 = [EmbeddedActivitiesStore];
      const items2 = [channel];
      const tmp6 = useIsVoiceChannelFullDefault(channel);
      const obj2 = channel(504);
      importDefault = obj2.useStateFromStores(
        items1,
        () => EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id),
        items2,
      );
      let name;
      const tmp7 = useChannelNameDefault(channel);
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      let N = null;
      if (PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel)) {
        N = null;
        if (!tmp6) {
          N = () => {
            const obj = { source: constants.VOICE_CHANNEL, targetApplicationId: applicationId };
            applicationId = undefined;
            const showInstantInviteActionSheet = instant_invite_InstantInviteUtils.showInstantInviteActionSheet;
            instant_invite_InstantInviteUtils;
            if (applicationId != null) {
              applicationId = applicationId.applicationId;
            }
            return showInstantInviteActionSheet(channel, obj);
          };
        }
      }
      let formatToPlainStringResult = tmp7;
      if (channel.isPrivate()) {
        const intl = tmp2(1126).intl;
        const obj3 = { count: channel.recipients.length + 1 };
        formatToPlainStringResult = intl.formatToPlainString(tmp2(1126).t["8bn8Br"], obj3);
        const obj4 = { channel };
        name = closure_10(closure_13, obj4);
        class N {
          constructor() {
            return openGroupDMAddMembersDefault(channel.id, metroImportAll.CHANNEL_CALL);
          }
        }
      }
      const obj5 = { style: tmp.container, children: items3 };
      const obj6 = { size: channel(1188).Icon.Sizes.MEDIUM, source: tmp5Result, disableColor: true, style: tmp.icons };
      const Icon = tmp2(1188).Icon;
      if (isRoleRequiredDefault(channel)) {
        tmp5Result = tmp5(13610);
      } else {
        tmp5Result = tmp5(9694);
      }
      items3 = [closure_10(Icon, obj6), ,];
      let tmp14Result = formatToPlainStringResult;
      const obj7 = { style: tmp.middle, children: items4 };
      if (typeof formatToPlainStringResult === "string") {
        const obj8 = {
          lineClamp: 1,
          lineBreakMode: "tail",
          variant: "text-md/semibold",
          color: "text-overlay-light",
          children: formatToPlainStringResult,
        };
        tmp14Result = closure_10(tmp2(4886).Text, obj8);
      }
      items4 = [tmp14Result];
      let tmp14Result3 = name;
      if (typeof name === "string") {
        const obj9 = {
          lineClamp: 1,
          lineBreakMode: "tail",
          variant: "text-xs/medium",
          color: "text-overlay-light",
          children: name,
        };
        tmp14Result3 = closure_10(tmp2(4886).Text, obj9);
      }
      items4[1] = tmp14Result3;
      items3[1] = closure_11(View, obj7);
      const obj10 = { style: tmp.icons, children: tmp14Result4 };
      tmp14Result4 = null != N;
      if (tmp14Result4) {
        const obj11 = { onPress: N };
        tmp14Result4 = closure_10(closure_14, obj11);
      }
      items3[2] = closure_10(View, obj10);
      return closure_11(View, obj5);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onPress) => {
      let first;
      const obj = react2;
      const cResult = obj.c(4);
      onPress = onPress.onPress;
      const tmp4 = closure_12();
      const icons = tmp4.icons;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t["6Qgrev"]);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === onPress) {
        let tmp7;
        if (cResult[2] === tmp4.icons) {
          tmp7 = cResult[3];
        }
        return tmp7;
      }
      const obj2 = { onPress, iconSource: AssetRegistryDefault, iconStyle: icons, accessibilityLabel: first };
      const tmp8 = authStore(closure_15, obj2);
      cResult[1] = onPress;
      cResult[2] = tmp4.icons;
      cResult[3] = tmp8;
      tmp7 = tmp8;
    }
  : (onPress) => {
      let intl;
      let tmp;
      const obj = {
        onPress: onPress.onPress,
        iconSource: AssetRegistryDefault,
        iconStyle: tmp.icons,
        accessibilityLabel: intl.string(intl2.t["6Qgrev"]),
      };
      tmp = closure_12();
      intl = intl2.intl;
      return authStore(closure_15, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let iconSource;
      let iconStyle;
      let onPress;
      let style;
      const obj = react2;
      const cResult = obj.c(8);
      ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = arg0);
      if (cResult[0] === iconSource) {
        let tmp4;
        if (cResult[1] === iconStyle) {
          tmp4 = cResult[2];
        }
        if (cResult[3] === accessibilityLabel) {
          if (cResult[4] === onPress) {
            if (cResult[5] === style) {
              let tmp6;
              if (cResult[6] === tmp4) {
                tmp6 = cResult[7];
              }
              return tmp6;
            }
          }
        }
        const obj2 = { accessibilityRole: "button", accessibilityLabel, onPress, style, children: tmp4 };
        const tmp8 = authStore(Pressables.PressableOpacity, obj2);
        cResult[3] = accessibilityLabel;
        cResult[4] = onPress;
        cResult[5] = style;
        cResult[6] = tmp4;
        cResult[7] = tmp8;
        tmp6 = tmp8;
      }
      const tmp5 = authStore(native.Icon, { source: iconSource, style: iconStyle });
      cResult[0] = iconSource;
      cResult[1] = iconStyle;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : (arg0) => {
      let accessibilityLabel;
      let iconSource;
      let iconStyle;
      let onPress;
      let style;
      ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = arg0);
      const obj = {
        accessibilityRole: "button",
        accessibilityLabel,
        onPress,
        style,
        children: authStore(native.Icon, { source: iconSource, style: iconStyle }),
      };
      const PressableOpacity = Pressables.PressableOpacity;
      return authStore(PressableOpacity, obj);
    };
let closure_15 = tmp7;
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx");

export default tmp6;
export const VoiceChannelHeader = tmp6;
export const IconButton = tmp7;
