// discord_app/modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import isRoleRequiredDefault from "../../../channel/isRoleRequired.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import _modDef10311 from "../../../../../_runtime/metro/10311__.js";
import useIsVoiceChannelFullDefault from "../../useIsVoiceChannelFull.tsx";
import openGroupDMAddMembersDefault from "../../../group_dm/native/openGroupDMAddMembers.tsx";
import CallStateHooks from "../CallStateHooks.tsx";
import OngoingCallStatusLabelDefault from "../components/OngoingCallStatusLabel.tsx";
import OngoingCallTimerDefault from "../components/OngoingCallTimer.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import EmbeddedActivitiesStore from "../../../activities/EmbeddedActivitiesStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

const CallStateHooksDefault = CallStateHooks;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ Permissions: closure_7, AnalyticsPages: closure_8, InstantInviteSources: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  middle: { flex: 1, justifyContent: "space-around", marginHorizontal: 16 },
  icons: { flexDirection: "row", tintColor: nativeDefault.colors.WHITE },
  subtitle: null,
  subtitleWrapper: null,
};
let obj3 = { flexDirection: "row", tintColor: nativeDefault.colors.WHITE };
obj2.subtitle = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.WHITE };
obj2.subtitleWrapper = { flexDirection: "row" };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PrivateChannelSubtitle(channel) {
      const cResult = c.c(16);
      channel = channel.channel;
      const tmp4 = closure_12();
      state = CallStateHooksDefault(channel.id).state;
      if (cResult[0] === channel) {
        if (cResult[1] === tmp4.subtitle) {
          if (cResult[2] === state) {
            let tmp6 = cResult[3];
          }
          if (cResult[4] === tmp4.subtitle) {
            if (cResult[5] === state) {
              let tmp8 = cResult[6];
            }
            if (cResult[7] === channel.id) {
              if (cResult[8] === tmp4.subtitle) {
                if (cResult[9] === state) {
                  let tmp11 = cResult[10];
                }
                if (cResult[11] === tmp4.subtitleWrapper) {
                  if (cResult[12] === tmp6) {
                    if (cResult[13] === tmp8) {
                      if (cResult[14] === tmp11) {
                        let tmp14 = cResult[15];
                      }
                      return tmp14;
                    }
                  }
                }
                const obj2 = { style: tmp4.subtitleWrapper, children: null };
                const items = [tmp6, tmp8, tmp11];
                obj2.children = items;
                const tmp17 = closure_1_11(View, obj2);
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
              tmp12 = collapsed(OngoingCallTimerDefault, obj3);
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
            tmp9 = collapsed(Text_Text.Text, obj4);
          }
          cResult[4] = tmp4.subtitle;
          cResult[5] = state;
          cResult[6] = tmp9;
          tmp8 = tmp9;
        }
      }
      const tmp7 = collapsed(OngoingCallStatusLabelDefault, {
        useAllAloneText: false,
        channel,
        voiceState: state,
        style: tmp4.subtitle,
      });
      cResult[0] = channel;
      cResult[1] = tmp4.subtitle;
      cResult[2] = state;
      cResult[3] = tmp7;
      tmp6 = tmp7;
      const obj5 = { useAllAloneText: false, channel, voiceState: state, style: tmp4.subtitle };
    }
  : function PrivateChannelSubtitle(channel) {
      channel = channel.channel;
      const tmp = closure_12();
      state = CallStateHooksDefault(channel.id).state;
      const obj = { style: tmp.subtitleWrapper, children: null };
      const items = [
        collapsed(OngoingCallStatusLabelDefault, {
          useAllAloneText: false,
          channel,
          voiceState: state,
          style: tmp.subtitle,
        }),
        ,
      ];
      let tmp6Result = state === CallStateHooks.CallStates.CONNECTED;
      if (tmp6Result) {
        const obj3 = { style: tmp.subtitle, variant: "text-xs/medium", color: "text-overlay-light", children: " - " };
        tmp6Result = collapsed(Text_Text.Text, obj3);
      }
      items[1] = tmp6Result;
      let tmp6Result2 = state === CallStateHooks.CallStates.CONNECTED;
      if (tmp6Result2) {
        const obj4 = { channelId: channel.id, style: tmp.subtitle };
        tmp6Result2 = collapsed(OngoingCallTimerDefault, obj4);
      }
      items[2] = tmp6Result2;
      obj.children = items;
      return closure_1_11(View, obj);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VoiceChannelHeader(channel) {
      const cResult = channel(576).c(39);
      channel = channel.channel;
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function v() {
          return GuildStore.getGuild(channel.getGuildId());
        };
        cResult[1] = channel;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = channel(576);
      const stateFromStores = channel(504).useStateFromStores(first, tmp7);
      const tmp10 = stateFromStores1(10806)(channel);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [EmbeddedActivitiesStore];
        cResult[3] = items1;
        let tmp11 = items1;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== channel.id) {
        class A {
          constructor() {
            return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
        cResult[4] = channel.id;
        cResult[5] = A;
      } else {
        class A {
          constructor() {
            return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
      }
      if (cResult[6] !== channel) {
        class A {
          constructor() {
            return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
        tmp15[0] = channel;
        cResult[6] = channel;
        cResult[7] = tmp15;
      } else {
        class A {
          constructor() {
            return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
      }
      const tmp9 = stateFromStores1;
      const tmpResult = channel(504);
      stateFromStores1 = channel(504).useStateFromStores(tmp11, A, tmp15);
      const tmp17 = tmp9(5417)(channel);
      if (stateFromStores != null) {
        class A {
          constructor() {
            return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
      }
      if (cResult[8] === channel) {
        class A {
          constructor() {
            return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
        if (stateFromStores1 != null) {
          class A {
            constructor() {
              return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
            }
          }
        }
        if (cResult[9] === tmp19) {
          class A {
            constructor() {
              return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
            }
          }
          if (!channel.isPrivate()) {
            class A {
              constructor() {
                return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
              }
            }
            if (cResult[18] === tmp4.icons) {
              class A {
                constructor() {
                  return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                }
              }
              if (cResult[21] !== tmp17) {
                class A {
                  constructor() {
                    return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                  }
                }
                if (typeof tmp17 === "string") {
                  class A {
                    constructor() {
                      return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                    }
                  }
                  let obj2 = {
                    lineClamp: 1,
                    lineBreakMode: "tail",
                    variant: "text-md/semibold",
                    color: "text-overlay-light",
                    children: tmp17,
                  };
                  const tmp34 = closure_10(tmp(5086).Text, obj2);
                }
                cResult[21] = tmp17;
                cResult[22] = tmp34;
              } else {
                class A {
                  constructor() {
                    return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                  }
                }
              }
              if (cResult[23] !== tmp18) {
                class A {
                  constructor() {
                    return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                  }
                }
                if (typeof tmp18 === "string") {
                  class A {
                    constructor() {
                      return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                    }
                  }
                  const obj3 = {
                    lineClamp: 1,
                    lineBreakMode: "tail",
                    variant: "text-xs/medium",
                    color: "text-overlay-light",
                    children: tmp18,
                  };
                  const tmp36 = closure_10(tmp(5086).Text, obj3);
                }
                cResult[23] = tmp18;
                cResult[24] = tmp36;
              } else {
                class A {
                  constructor() {
                    return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                  }
                }
              }
              if (cResult[25] === tmp4.middle) {
                class A {
                  constructor() {
                    return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                  }
                }
              }
              const obj4 = { style: tmp4.middle, children: null };
              const items2 = [tmp33, tmp35];
              obj4.children = items2;
              const tmp40 = closure_11(View, obj4);
              cResult[25] = tmp4.middle;
              cResult[26] = tmp35;
              cResult[27] = tmp33;
              cResult[28] = tmp40;
            }
            const obj5 = { size: tmp(1200).Icon.Sizes.MEDIUM, source: tmp29, disableColor: true, style: tmp4.icons };
            const tmp32 = closure_10(tmp(1200).Icon, obj5);
            cResult[18] = tmp4.icons;
            cResult[19] = tmp29;
            cResult[20] = tmp32;
          } else {
            class A {
              constructor() {
                return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
              }
            }
            if (cResult[14] !== channel) {
              class A {
                constructor() {
                  return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                }
              }
              const obj6 = { channel };
              const tmp24 = closure_10(closure_13, obj6);
              cResult[14] = channel;
              cResult[15] = tmp24;
            } else {
              class A {
                constructor() {
                  return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                }
              }
            }
            if (cResult[16] !== channel.id) {
              class O {
                constructor() {
                  return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
                }
              }
              cResult[16] = channel.id;
              cResult[17] = O;
            } else {
              class O {
                constructor() {
                  return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
                }
              }
            }
          }
        }
      }
      if (PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel)) {
        class O {
          constructor() {
            return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
          }
        }
        if (!tmp10) {
          class O {
            constructor() {
              return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
            }
          }
        }
      }
      cResult[8] = channel;
      if (stateFromStores1 != null) {
        class O {
          constructor() {
            return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
          }
        }
      }
      cResult[9] = undefined;
      cResult[10] = tmp10;
      cResult[11] = null;
      const tmpResult2 = channel(504);
    }
  : function VoiceChannelHeader(channel) {
      channel = channel.channel;
      const tmp = closure_12();
      const items = [GuildStore];
      const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
      const obj = channel(504);
      const tmp6 = useIsVoiceChannelFullDefault(channel);
      const items1 = [EmbeddedActivitiesStore];
      const items2 = [channel];
      importDefault = channel(504).useStateFromStores(
        items1,
        () => EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id),
        items2,
      );
      let name;
      let obj2 = channel(504);
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      let A = null;
      if (PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel)) {
        A = null;
        if (!tmp6) {
          A = () => {
            const obj2 = { source: constants3.VOICE_CHANNEL, targetApplicationId: null };
            applicationId = undefined;
            if (applicationId != null) {
              applicationId = applicationId.applicationId;
            }
            obj2.targetApplicationId = applicationId;
            return instant_invite_InstantInviteUtils.showInstantInviteActionSheet(channel, obj2);
          };
        }
      }
      let formatToPlainStringResult = useChannelNameDefault(channel);
      if (channel.isPrivate()) {
        const intl = tmp2(1126).intl;
        const obj3 = { count: channel.recipients.length + 1 };
        formatToPlainStringResult = intl.formatToPlainString(tmp2(1126).t["8bn8Br"], obj3);
        const obj4 = { channel };
        name = closure_10(closure_13, obj4);
        class A {
          constructor() {
            return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
          }
        }
      }
      const obj5 = { style: tmp.container, children: null };
      const obj6 = { size: channel(1200).Icon.Sizes.MEDIUM, source: null, disableColor: true, style: null };
      if (isRoleRequiredDefault(channel)) {
        let tmp5Result = tmp5(13449);
      } else {
        tmp5Result = tmp5(10912);
      }
      obj6.source = tmp5Result;
      obj6.style = tmp.icons;
      const items3 = [closure_10(channel(1200).Icon, obj6), ,];
      const obj7 = { style: tmp.middle, children: null };
      let tmp14Result = formatToPlainStringResult;
      if (typeof formatToPlainStringResult === "string") {
        const obj8 = {
          lineClamp: 1,
          lineBreakMode: "tail",
          variant: "text-md/semibold",
          color: "text-overlay-light",
          children: formatToPlainStringResult,
        };
        tmp14Result = closure_10(tmp2(5086).Text, obj8);
      }
      const items4 = [tmp14Result];
      let tmp14Result3 = name;
      if (typeof name === "string") {
        const obj9 = {
          lineClamp: 1,
          lineBreakMode: "tail",
          variant: "text-xs/medium",
          color: "text-overlay-light",
          children: name,
        };
        tmp14Result3 = closure_10(tmp2(5086).Text, obj9);
      }
      items4[1] = tmp14Result3;
      obj7.children = items4;
      items3[1] = closure_11(View, obj7);
      const obj10 = { style: tmp.icons, children: null };
      let tmp14Result4 = null != A;
      if (tmp14Result4) {
        const obj11 = { onPress: A };
        tmp14Result4 = closure_10(closure_14, obj11);
      }
      obj10.children = tmp14Result4;
      items3[2] = closure_10(View, obj10);
      obj5.children = items3;
      return closure_11(View, obj5);
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AddMemberButton(onPress) {
      const cResult = c.c(4);
      onPress = onPress.onPress;
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["6Qgrev"]);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === onPress) {
        if (cResult[2] === tmp4.icons) {
          let tmp7 = cResult[3];
        }
        return tmp7;
      }
      const tmp8 = collapsed(closure_15, {
        onPress,
        iconSource: _modDef10311,
        iconStyle: tmp4.icons,
        accessibilityLabel: first,
      });
      cResult[1] = onPress;
      cResult[2] = tmp4.icons;
      cResult[3] = tmp8;
      tmp7 = tmp8;
      const obj2 = { onPress, iconSource: _modDef10311, iconStyle: tmp4.icons, accessibilityLabel: first };
    }
  : function AddMemberButton(onPress) {
      const obj = {
        onPress: onPress.onPress,
        iconSource: _modDef10311,
        iconStyle: closure_12().icons,
        accessibilityLabel: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t["6Qgrev"]);
      return collapsed(closure_15, obj);
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function IconButton(arg0) {
      const cResult = c.c(8);
      ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = arg0);
      if (cResult[0] === iconSource) {
        if (cResult[1] === iconStyle) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] === accessibilityLabel) {
          if (cResult[4] === onPress) {
            if (cResult[5] === style) {
              if (cResult[6] === tmp4) {
                let tmp6 = cResult[7];
              }
              return tmp6;
            }
          }
        }
        const obj2 = { accessibilityRole: "button", accessibilityLabel, onPress, style, children: tmp4 };
        const tmp8 = collapsed(Pressables.PressableOpacity, obj2);
        cResult[3] = accessibilityLabel;
        cResult[4] = onPress;
        cResult[5] = style;
        cResult[6] = tmp4;
        cResult[7] = tmp8;
        tmp6 = tmp8;
      }
      const tmp5 = collapsed(native.Icon, { source: iconSource, style: iconStyle });
      cResult[0] = iconSource;
      cResult[1] = iconStyle;
      cResult[2] = tmp5;
      tmp4 = tmp5;
    }
  : function IconButton(arg0) {
      ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = arg0);
      return collapsed(Pressables.PressableOpacity, {
        accessibilityRole: "button",
        accessibilityLabel,
        onPress,
        style,
        children: collapsed(native.Icon, { source: iconSource, style: iconStyle }),
      });
    };
let closure_15 = tmp6;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx");

export default tmp5;
export const VoiceChannelHeader = tmp5;
export const IconButton = tmp6;
