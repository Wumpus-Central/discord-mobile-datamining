// === Module 13621: VoiceChannelHeader ===

// Module 13621 (VoiceChannelHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import useChannelNameDefault from "useChannelName" /* 5049 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5853 */;
import Pressables from "Pressables" /* 5916 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9494 */;
import useIsVoiceChannelFullDefault from "useIsVoiceChannelFull" /* 9613 */;
import _modDef9728 from "module_9728" /* 9728 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11225 */;
import CallStateHooks from "CallStateHooks" /* 13622 */;
import OngoingCallStatusLabelDefault from "OngoingCallStatusLabel" /* 13623 */;
import OngoingCallTimerDefault from "OngoingCallTimer" /* 13624 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4515 */;

const CallStateHooksDefault = CallStateHooks;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ Permissions: closure_7, AnalyticsPages: closure_8, InstantInviteSources: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { alignSelf: "stretch", flexDirection: "row", paddingVertical: 10, paddingHorizontal: 16, alignItems: "center" }, middle: { flex: 1, justifyContent: "space-around", marginHorizontal: 16 }, icons: { flexDirection: "row", tintColor: nativeDefault.colors.WHITE }, subtitle: null, subtitleWrapper: null };
let obj3 = { flexDirection: "row", tintColor: nativeDefault.colors.WHITE };
obj2.subtitle = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.WHITE };
obj2.subtitleWrapper = { flexDirection: "row" };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
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
          tmp12 = v65535(OngoingCallTimerDefault, obj3);
        }
        cResult[7] = channel.id;
        cResult[8] = tmp4.subtitle;
        cResult[9] = state;
        cResult[10] = tmp12;
        tmp11 = tmp12;
      }
      let tmp9 = state === CallStateHooks.CallStates.CONNECTED;
      if (tmp9) {
        const obj4 = { style: tmp4.subtitle, variant: "text-xs/medium", color: "text-overlay-light", children: " - " };
        tmp9 = v65535(Text_Text.Text, obj4);
      }
      cResult[4] = tmp4.subtitle;
      cResult[5] = state;
      cResult[6] = tmp9;
      tmp8 = tmp9;
    }
  }
  const tmp7 = v65535(OngoingCallStatusLabelDefault, { useAllAloneText: false, channel, voiceState: state, style: tmp4.subtitle });
  cResult[0] = channel;
  cResult[1] = tmp4.subtitle;
  cResult[2] = state;
  cResult[3] = tmp7;
  tmp6 = tmp7;
  const obj5 = { useAllAloneText: false, channel, voiceState: state, style: tmp4.subtitle };
}) : ((channel) => {
  channel = channel.channel;
  const tmp = closure_12();
  state = CallStateHooksDefault(channel.id).state;
  const obj = { style: tmp.subtitleWrapper, children: null };
  const items = [v65535(OngoingCallStatusLabelDefault, { useAllAloneText: false, channel, voiceState: state, style: tmp.subtitle }), , ];
  let tmp6Result = state === CallStateHooks.CallStates.CONNECTED;
  if (tmp6Result) {
    const obj3 = { style: tmp.subtitle, variant: "text-xs/medium", color: "text-overlay-light", children: " - " };
    tmp6Result = v65535(Text_Text.Text, obj3);
  }
  items[1] = tmp6Result;
  let tmp6Result2 = state === CallStateHooks.CallStates.CONNECTED;
  if (tmp6Result2) {
    const obj4 = { channelId: channel.id, style: tmp.subtitle };
    tmp6Result2 = v65535(OngoingCallTimerDefault, obj4);
  }
  items[2] = tmp6Result2;
  obj.children = items;
  return closure_1_11(View, obj);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
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
  const obj = channel(576);
  const stateFromStores = channel(504).useStateFromStores(first, C);
  const tmp10 = stateFromStores1(9613)(channel);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_5.getGuild(channel.getGuildId());
      }
    }
    const items1 = [EmbeddedActivitiesStore];
    cResult[3] = items1;
    const tmp11 = items1;
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
  const tmp9 = stateFromStores1;
  const tmpResult = channel(504);
  stateFromStores1 = channel(504).useStateFromStores(tmp11, N, tmp14);
  const tmp16 = tmp9(5049)(channel);
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
    if (stateFromStores1 != null) {
      class N {
        constructor() {
          return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
        }
      }
    }
    if (cResult[9] === tmp18) {
      class N {
        constructor() {
          return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
        }
      }
      if (!channel.isPrivate()) {
        class N {
          constructor() {
            return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
          }
        }
        if (cResult[18] === tmp4.icons) {
          class N {
            constructor() {
              return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
            }
          }
          if (cResult[21] !== tmp16) {
            class N {
              constructor() {
                return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
              }
            }
            if (typeof tmp16 === "string") {
              class N {
                constructor() {
                  return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                }
              }
              let obj2 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-md/semibold", color: "text-overlay-light", children: tmp16 };
              const tmp33 = closure_10(tmp(4892).Text, obj2);
            }
            cResult[21] = tmp16;
            cResult[22] = tmp33;
          } else {
            class N {
              constructor() {
                return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
              }
            }
          }
          if (cResult[23] !== tmp17) {
            class N {
              constructor() {
                return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
              }
            }
            if (typeof tmp17 === "string") {
              class N {
                constructor() {
                  return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
                }
              }
              const obj3 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-xs/medium", color: "text-overlay-light", children: tmp17 };
              const tmp35 = closure_10(tmp(4892).Text, obj3);
            }
            cResult[23] = tmp17;
            cResult[24] = tmp35;
          } else {
            class N {
              constructor() {
                return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
              }
            }
          }
          if (cResult[25] === tmp4.middle) {
            class N {
              constructor() {
                return closure_4.getSelfEmbeddedActivityForChannel(channel.id);
              }
            }
          }
          const obj4 = { style: tmp4.middle, children: null };
          const items2 = [tmp32, tmp34];
          obj4.children = items2;
          const tmp39 = closure_11(View, obj4);
          cResult[25] = tmp4.middle;
          cResult[26] = tmp34;
          cResult[27] = tmp32;
          cResult[28] = tmp39;
        }
        const obj5 = { size: tmp(1188).Icon.Sizes.MEDIUM, source: tmp28, disableColor: true, style: tmp4.icons };
        const tmp31 = closure_10(tmp(1188).Icon, obj5);
        cResult[18] = tmp4.icons;
        cResult[19] = tmp28;
        cResult[20] = tmp31;
      } else {
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
          const obj6 = { channel };
          const tmp23 = closure_10(closure_13, obj6);
          cResult[14] = channel;
          cResult[15] = tmp23;
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
      }
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
  const tmpResult2 = channel(504);
}) : ((channel) => {
  channel = channel.channel;
  const tmp = closure_12();
  const items = [GuildStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
  const obj = channel(504);
  const tmp6 = useIsVoiceChannelFullDefault(channel);
  const items1 = [EmbeddedActivitiesStore];
  const items2 = [channel];
  importDefault = channel(504).useStateFromStores(items1, () => EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id), items2);
  let name;
  let obj2 = channel(504);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  let N = null;
  if (PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel)) {
    N = null;
    if (!tmp6) {
      N = () => {
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
    class N {
      constructor() {
        return closure_1(closure_2[20])(channel.id, AnalyticsPages.CHANNEL_CALL);
      }
    }
  }
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { size: channel(1188).Icon.Sizes.MEDIUM, source: null, disableColor: true, style: null };
  if (isRoleRequiredDefault(channel)) {
    let tmp5Result = tmp5(13626);
  } else {
    tmp5Result = tmp5(9707);
  }
  obj6.source = tmp5Result;
  obj6.style = tmp.icons;
  const items3 = [closure_10(channel(1188).Icon, obj6), , ];
  const obj7 = { style: tmp.middle, children: null };
  let tmp14Result = formatToPlainStringResult;
  if (typeof formatToPlainStringResult === "string") {
    const obj8 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-md/semibold", color: "text-overlay-light", children: formatToPlainStringResult };
    tmp14Result = closure_10(tmp2(4892).Text, obj8);
  }
  const items4 = [tmp14Result, ];
  let tmp14Result3 = name;
  if (typeof name === "string") {
    const obj9 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-xs/medium", color: "text-overlay-light", children: name };
    tmp14Result3 = closure_10(tmp2(4892).Text, obj9);
  }
  items4[1] = tmp14Result3;
  obj7.children = items4;
  items3[1] = closure_11(View, obj7);
  const obj10 = { style: tmp.icons, children: null };
  let tmp14Result4 = null != N;
  if (tmp14Result4) {
    const obj11 = { onPress: N };
    tmp14Result4 = closure_10(closure_14, obj11);
  }
  obj10.children = tmp14Result4;
  items3[2] = closure_10(View, obj10);
  obj5.children = items3;
  return closure_11(View, obj5);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
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
  const tmp8 = v65535(closure_15, { onPress, iconSource: _modDef9728, iconStyle: tmp4.icons, accessibilityLabel: first });
  cResult[1] = onPress;
  cResult[2] = tmp4.icons;
  cResult[3] = tmp8;
  tmp7 = tmp8;
  const obj2 = { onPress, iconSource: _modDef9728, iconStyle: tmp4.icons, accessibilityLabel: first };
}) : ((onPress) => {
  const obj = { onPress: onPress.onPress, iconSource: _modDef9728, iconStyle: closure_12().icons, accessibilityLabel: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["6Qgrev"]);
  return v65535(closure_15, obj);
});
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
    const tmp8 = v65535(Pressables.PressableOpacity, obj2);
    cResult[3] = accessibilityLabel;
    cResult[4] = onPress;
    cResult[5] = style;
    cResult[6] = tmp4;
    cResult[7] = tmp8;
    tmp6 = tmp8;
  }
  const tmp5 = v65535(native.Icon, { source: iconSource, style: iconStyle });
  cResult[0] = iconSource;
  cResult[1] = iconStyle;
  cResult[2] = tmp5;
  tmp4 = tmp5;
}) : ((arg0) => {
  ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = arg0);
  return v65535(Pressables.PressableOpacity, { accessibilityRole: "button", accessibilityLabel, onPress, style, children: v65535(native.Icon, { source: iconSource, style: iconStyle }) });
});
let closure_15 = tmp6;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx");

export default tmp5;
export const VoiceChannelHeader = tmp5;
export const IconButton = tmp6;