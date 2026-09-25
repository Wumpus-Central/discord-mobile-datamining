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
import _modDef9480 from "../../../../../_runtime/metro/09480__.js";
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
  const obj = { style: tmp.subtitleWrapper, children: null };
  const items = [
    closure_1_10(OngoingCallStatusLabelDefault, {
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
    items3 = [, ,];
    items3[0] = tmp14(tmp2(tmp3[19]).Icon, obj14);
    obj15 = { style: tmp.middle, children: null };
    tmp14Result = formatToPlainStringResult;
    if (typeof formatToPlainStringResult === "string") {
      obj16 = {
        lineClamp: 1,
        lineBreakMode: "tail",
        variant: "text-md/semibold",
        color: "text-overlay-light",
        children: null,
      };
      obj16.children = formatToPlainStringResult;
      tmp14Result = tmp14(tmp2(tmp3[11]).Text, obj16);
    }
    items4 = [,];
    items4[0] = tmp14Result;
    tmp14Result1 = name;
    if (typeof name === "string") {
      obj17 = {
        lineClamp: 1,
        lineBreakMode: "tail",
        variant: "text-xs/medium",
        color: "text-overlay-light",
        children: null,
      };
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
  const obj = {
    onPress: onPress.onPress,
    iconSource: _modDef9480,
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
const createStyles = fn(4829);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceChannelHeader.tsx");

export default VoiceChannelHeader;
export { VoiceChannelHeader };
export { IconButton };
