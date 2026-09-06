// discord_app/modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import isRoleRequiredDefault from "../../../channel/isRoleRequired.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import useIsVoiceChannelFullDefault from "../../useIsVoiceChannelFull.tsx";
import _modDef10031 from "../../../../../_runtime/metro/10031__.js";
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
function PrivateChannelSubtitle(channel) {
  channel = channel.channel;
  const tmp = closure_12();
  const state = CallStateHooksDefault(channel.id).state;
  let obj = { style: tmp.subtitleWrapper, children: null };
  obj = { useAllAloneText: false, channel, voiceState: state, style: tmp.subtitle };
  const items = [closure_1_10(OngoingCallStatusLabelDefault, obj), ,];
  let tmp6Result = state === CallStateHooks.CallStates.CONNECTED;
  if (tmp6Result) {
    obj = { style: tmp.subtitle, variant: "text-xs/medium", color: "text-overlay-light", children: " - " };
    tmp6Result = closure_1_10(Text_Text.Text, obj);
  }
  items[1] = tmp6Result;
  tmp6Result = state === CallStateHooks.CallStates.CONNECTED;
  if (tmp6Result) {
    const obj1 = { channelId: channel.id, style: tmp.subtitle };
    tmp6Result = closure_1_10(OngoingCallTimerDefault, obj1);
  }
  items[2] = tmp6Result;
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
    closure_1 = obj2.useStateFromStores(
      items1,
      () => EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(channel.id),
      items2,
    );
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
          const obj = { source: constants3.VOICE_CHANNEL, targetApplicationId: null };
          applicationId = undefined;
          if (applicationId != null) {
            applicationId = applicationId.applicationId;
          }
          obj.targetApplicationId = applicationId;
          return obj.showInstantInviteActionSheet(channel, obj);
        };
      }
    }
    formatToPlainStringResult = tmp7;
    if (channel.isPrivate()) {
      intl = tmp2(tmp3[17]).intl;
      obj = { count: null };
      num = 1;
      obj.count = channel.recipients.length + 1;
      formatToPlainStringResult = intl.formatToPlainString(tmp2(tmp3[17]).t["8bn8Br"], obj);
      tmp10 = jsx;
      tmp11 = PrivateChannelSubtitle;
      obj1 = { channel: null };
      obj1.channel = channel;
      name = jsx(PrivateChannelSubtitle, obj1);
      class E {
        constructor() {
          return closure_1(closure_2[18])(channel.id, AnalyticsPages.CHANNEL_CALL);
        }
      }
    }
    tmp12 = jsxs;
    tmp13 = View;
    obj2 = { style: tmp.container, children: null };
    tmp14 = jsx;
    obj3 = { size: tmp2(tmp3[19]).Icon.Sizes.MEDIUM, source: null, disableColor: true, style: null };
    if (tmp5(tmp3[20])(channel)) {
      tmp5Result = tmp5(tmp3[21]);
    } else {
      tmp5Result = tmp5(tmp3[22]);
    }
    obj3.source = tmp5Result;
    obj3.style = tmp.icons;
    items3 = [, ,];
    items3[0] = tmp14(tmp2(tmp3[19]).Icon, obj3);
    obj4 = { style: tmp.middle, children: null };
    tmp14Result = formatToPlainStringResult;
    if (typeof formatToPlainStringResult === "string") {
      obj5 = {
        lineClamp: 1,
        lineBreakMode: "tail",
        variant: "text-md/semibold",
        color: "text-overlay-light",
        children: null,
      };
      obj5.children = formatToPlainStringResult;
      tmp14Result = tmp14(tmp2(tmp3[11]).Text, obj5);
    }
    items4 = [,];
    items4[0] = tmp14Result;
    tmp14Result1 = name;
    if (typeof name === "string") {
      obj6 = {
        lineClamp: 1,
        lineBreakMode: "tail",
        variant: "text-xs/medium",
        color: "text-overlay-light",
        children: null,
      };
      obj6.children = name;
      tmp14Result1 = tmp14(tmp2(tmp3[11]).Text, obj6);
    }
    items4[1] = tmp14Result1;
    obj4.children = items4;
    items3[1] = tmp12(tmp13, obj4);
    obj7 = { style: tmp.icons, children: null };
    tmp14Result2 = null != E;
    if (tmp14Result2) {
      tmp19 = AddMemberButton;
      obj8 = { onPress: null };
      obj8.onPress = E;
      tmp14Result2 = tmp14(AddMemberButton, obj8);
    }
    obj7.children = tmp14Result2;
    items3[2] = tmp14(tmp13, obj7);
    obj2.children = items3;
    return tmp12(tmp13, obj2);
  }
}
function AddMemberButton(onPress) {
  const obj = {
    onPress: onPress.onPress,
    iconSource: _modDef10031,
    iconStyle: closure_12().icons,
    accessibilityLabel: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["6Qgrev"]);
  return closure_1_10(IconButton, obj);
}
class IconButton {
  constructor(arg0) {
    ({ onPress, iconStyle, iconSource, accessibilityLabel, style } = global);
    obj = {
      accessibilityRole: "button",
      accessibilityLabel,
      onPress,
      style,
      children: jsx(closure_0(closure_2[19]).Icon, { source: iconSource, style: iconStyle }),
    };
    return jsx(closure_0(closure_2[24]).PressableOpacity, obj);
  }
}
const View = fn(17).View;
const Constants = fn(1074);
({ Permissions: closure_7, AnalyticsPages: closure_8, InstantInviteSources: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = {
  container: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  middle: { flex: 1, justifyContent: "space-around", marginHorizontal: 16 },
  icons: null,
  subtitle: null,
  subtitleWrapper: null,
};
createStyles = { flexDirection: "row", tintColor: nativeDefault.colors.WHITE };
createStyles.icons = createStyles;
createStyles.subtitle = { fontSize: 12, lineHeight: 16, color: nativeDefault.colors.WHITE };
createStyles.subtitleWrapper = { flexDirection: "row" };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx");

export default VoiceChannelHeader;
export { VoiceChannelHeader };
export { IconButton };
