// === Module 13888: VoiceChannelHeader ===

// Module 13888 (VoiceChannelHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4635 */;
import useChannelNameDefault from "useChannelName" /* 4792 */;
import isRoleRequiredDefault from "isRoleRequired" /* 5146 */;
import Pressables from "Pressables" /* 5207 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9952 */;
import useIsVoiceChannelFullDefault from "useIsVoiceChannelFull" /* 10069 */;
import _modDef10162 from "module_10162" /* 10162 */;
import openGroupDMAddMembersDefault from "openGroupDMAddMembers" /* 11724 */;
import CallStateHooks from "CallStateHooks" /* 13889 */;
import OngoingCallStatusLabelDefault from "OngoingCallStatusLabel" /* 13890 */;
import OngoingCallTimerDefault from "OngoingCallTimer" /* 13891 */;
import noop from "module_19" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1980 */;
import PermissionStore from "PermissionStore" /* 4278 */;

const CallStateHooksDefault = CallStateHooks;

require = fn;
function PrivateChannelSubtitle(channel) {
  channel = channel.channel;
  const tmp = closure_12();
  const state = CallStateHooksDefault(channel.id).state;
  const obj = { style: tmp.subtitleWrapper, children: null };
  const items = [closure_1_10(OngoingCallStatusLabelDefault, { useAllAloneText: false, channel, voiceState: state, style: tmp.subtitle }), , ];
  let tmp6Result = state === CallStateHooks.CallStates.CONNECTED;
  if (tmp6Result) {
    const obj3 = { style: tmp.subtitle, variant: "text-xs/medium", color: "text-overlay-light", children: " - " };
    tmp6Result = closure_1_10(Text_Text.Text, obj3);
  }
  items[1] = tmp6Result;
  let tmp6Result2 = state === CallStateHooks.CallStates.CONNECTED;
  if (tmp6Result2) {
    const obj4 = { channelId: channel.id, style: tmp.subtitle };
    tmp6Result2 = closure_1_10(OngoingCallTimerDefault, obj4);
  }
  items[2] = tmp6Result2;
  obj.children = items;
  return closure_1_11(View, obj);
}
class VoiceChannelHeader {
  constructor(arg0) {
    channel = global.channel;
    closure_1 = undefined;
    tmp = closure_12();
    tmp2 = channel;
    tmp3 = closure_2;
    obj = channel(closure_2[13]);
    items = [];
    items[0] = closure_5;
    stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.getGuildId()));
    tmp5 = closure_1;
    tmp6 = closure_1(closure_2[14])(channel);
    obj2 = channel(closure_2[13]);
    items1 = [];
    items1[0] = closure_4;
    items2 = [];
    items2[0] = channel;
    closure_1 = obj2.useStateFromStores(items1, () => EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id), items2);
    name = undefined;
    tmp7 = closure_1(closure_2[15])(channel);
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    E = null;
    if (closure_6.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
      E = null;
      if (!tmp6) {
        E = () => {
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
    formatToPlainStringResult = tmp7;
    if (channel.isPrivate()) {
      intl = tmp2(tmp3[17]).intl;
      obj1 = { count: null };
      num = 1;
      obj1.count = channel.recipients.length + 1;
      formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[17]).t["8bn8Br"], obj1);
      tmp10 = jsx;
      tmp11 = PrivateChannelSubtitle;
      obj12 = { channel: null };
      obj12.channel = channel;
      name = jsx(PrivateChannelSubtitle, obj12);
      class E {
        constructor() {
          return closure_1(closure_2[18])(channel.id, AnalyticsPages.CHANNEL_CALL);
        }
      }
    }
    tmp12 = jsxs;
    tmp13 = View;
    obj13 = { style: tmp.container, children: null };
    tmp14 = jsx;
    obj14 = { size: tmp2(tmp3[19]).Icon.Sizes.MEDIUM, source: null, disableColor: true, style: null };
    if (tmp5(tmp3[20])(channel)) {
      tmp5Result = tmp5(tmp3[21]);
    } else {
      tmp5Result = tmp5(tmp3[22]);
    }
    obj14.source = tmp5Result;
    obj14.style = tmp.icons;
    items3 = [, , ];
    items3[0] = tmp14(tmp2(tmp3[19]).Icon, obj14);
    obj15 = { style: tmp.middle, children: null };
    tmp14Result = formatToPlainStringResult;
    if (typeof formatToPlainStringResult === "string") {
      obj16 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-md/semibold", color: "text-overlay-light", children: null };
      obj16.children = formatToPlainStringResult;
      tmp14Result = tmp14(tmp2(tmp3[11]).Text, obj16);
    }
    items4 = [, ];
    items4[0] = tmp14Result;
    tmp14Result1 = name;
    if (typeof name === "string") {
      obj17 = { lineClamp: 1, lineBreakMode: "tail", variant: "text-xs/medium", color: "text-overlay-light", children: null };
      obj17.children = name;
      tmp14Result1 = tmp14(tmp2(tmp3[11]).Text, obj17);
    }
    items4[1] = tmp14Result1;
    obj15.children = items4;
    items3[1] = tmp12(tmp13, obj15);
    obj18 = { style: tmp.icons, children: null };
    tmp14Result2 = null != E;
    if (tmp14Result2) {
      tmp19 = AddMemberButton;
      obj19 = { onPress: null };
      obj19.onPress = E;
      tmp14Result2 = tmp14(AddMemberButton, obj19);
    }
    obj18.children = tmp14Result2;
    items3[2] = tmp14(tmp13, obj18);
    obj13.children = items3;
    return tmp12(tmp13, obj13);
  }
}
function AddMemberButton(onPress) {
  const obj = { onPress: onPress.onPress, iconSource: _modDef10162, iconStyle: closure_12().icons, accessibilityLabel: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["6Qgrev"]);
  return closure_1_10(IconButton, obj);
}
class IconButton {
  constructor(arg0) {
    ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = global);
    obj = { accessibilityRole: "button", accessibilityLabel, onPress, style, children: jsx(closure_0(closure_2[19]).Icon, { source: iconSource, style: iconStyle }) };
    return jsx(closure_0(closure_2[24]).PressableOpacity, obj);
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({ Permissions: closure_7, AnalyticsPages: closure_8, InstantInviteSources: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { alignSelf: "stretch", flexDirection: "row", paddingVertical: 10, paddingHorizontal: 16, alignItems: "center" }, middle: { flex: 1, justifyContent: "space-around", marginHorizontal: 16 }, icons: { flexDirection: "row", tintColor: nativeDefault.colors.WHITE }, subtitle: null, subtitleWrapper: null };
let obj3 = { flexDirection: "row", tintColor: nativeDefault.colors.WHITE };
obj2.subtitle = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.WHITE };
obj2.subtitleWrapper = { flexDirection: "row" };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx");

export default VoiceChannelHeader;
export { VoiceChannelHeader };
export { IconButton };