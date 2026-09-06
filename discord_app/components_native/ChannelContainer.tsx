// discord_app/components_native/ChannelContainer.tsx
import initialize from "../../discord_common/js/packages/flux/index.tsx";
import dismissible_content from "../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../modules/dismissible_content/DismissibleContentUnsafeUtils.tsx";
import useChatLayoutDefault from "../modules/chat/native/useChatLayout.tsx";
import common_NotificationsDefault from "common/Notifications.tsx";
import noop from "../../_runtime/metro/00019__.js";
import LurkingStore from "../modules/lurker_mode/LurkingStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";

require = fn;
function NotificationsContainer() {
  let tmp4 = null;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    const obj = { style: tmp.container, children: closure_1_10(common_NotificationsDefault, {}) };
    tmp4 = closure_1_10(View, obj);
  }
  return tmp4;
}
const View = fn(17).View;
const ChannelTypes = fn(1074).ChannelTypes;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles({
  container: { position: "absolute", left: 0, right: 0, backgroundColor: "transparent", marginTop: 8 },
});
const size = fn(2);
let result = size.fileFinishedImporting("components_native/ChannelContainer.tsx");

export const ChannelContainer = function ChannelContainer(children) {
  ({ guildId: require, channelId } = children);
  dependencyMap = undefined;
  noop = undefined;
  closure_4 = undefined;
  let obj = initialize;
  const items = [SelectedChannelStore, ChannelStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const voiceChannelId = SelectedChannelStore.getVoiceChannelId();
    const obj = { channel: ChannelStore.getChannel(channelId), voiceChannelId, isStageChannel: null };
    const channel = ChannelStore.getChannel(voiceChannelId);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    obj.isStageChannel = Boolean(isGuildStageVoiceResult);
    return obj;
  });
  ({ channel, isStageChannel } = stateFromStoresObject);
  let tmp5 = !isStageChannel;
  if (isStageChannel) {
    tmp5 = channelId(9583)(stateFromStoresObject.voiceChannelId);
  }
  let tmpResult = tmp(504);
  const items1 = [LurkingStore];
  let isPrivateResult = null != channel;
  const stateFromStores = tmpResult.useStateFromStores(items1, () => {
    let isLurkingResult = null != require;
    if (isLurkingResult) {
      isLurkingResult = LurkingStore.isLurking(tmp);
    }
    return isLurkingResult;
  });
  if (isPrivateResult) {
    isPrivateResult = channel.isPrivate();
  }
  dependencyMap = isPrivateResult;
  const tmp8 = channelId(8272)(isPrivateResult);
  noop = tmp8;
  const tmp9 = channelId(8272)(channelId);
  closure_4 = tmp9;
  const items2 = [channelId, tmp9, isPrivateResult, tmp8];
  const effect = noop.useEffect(() => {
    let tmp = closure_3;
    let tmp2 = closure_3;
    if (closure_3) {
      tmp2 = !c2;
    }
    if (!tmp2) {
      if (tmp) {
        tmp = c2;
      }
      if (tmp) {
        tmp = channelId !== closure_4;
      }
      tmp2 = tmp;
    }
    if (tmp2) {
      const obj = { dismissAction: ContentDismissActionType.AUTO };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP,
        obj,
      );
    }
  }, items2);
  tmpResult = tmp(11323);
  const channelStyles = tmpResult.useChannelStyles();
  obj = { style: channelStyles.scene, children: null };
  obj = { style: channelStyles.flex, children: null };
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let tmp15 = null;
  if (type === ChannelTypes.GUILD_ANNOUNCEMENT) {
    tmp15 = null;
    if (stateFromStores) {
      const obj1 = { channel };
      tmp15 = closure_10(tmp4(11324), obj1);
    }
  }
  const items3 = [tmp15, children.children];
  if (tmp5) {
    const obj2 = { style: channelStyles.callPTTButton };
    tmp5 = closure_10(tmp4(9695), obj2);
  }
  items3[2] = tmp5;
  obj.children = items3;
  const items4 = [closure_11(closure_4, obj), closure_10(NotificationsContainer, {})];
  obj.children = items4;
  return closure_11(closure_4, obj);
};
