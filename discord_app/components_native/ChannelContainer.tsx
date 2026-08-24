// discord_app/components_native/ChannelContainer.tsx
import initialize from "../../discord_common/js/packages/flux/index.tsx";
import useChatLayoutDefault from "../modules/chat/native/useChatLayout.tsx";
import NotificationsDefault from "common/Notifications.tsx";
import closure_3 from "../../_runtime/00019_noop.js";
import { View } from "../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../modules/lurker_mode/LurkingStore.tsx";
import closure_6 from "../stores/ChannelStore.tsx";
import closure_7 from "../stores/SelectedChannelStore.tsx";
import { ChannelTypes } from "../Constants.tsx";
import { ContentDismissActionType } from "../modules/dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../design/components/Styles/native/createStyles.tsx";

require = arg1;
function NotificationsContainer() {
  let tmp4 = null;
  if (useChatLayoutDefault().isChatBesideChannelList) {
    const obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj[1] = callback(NotificationsDefault, {});
    tmp4 = callback(View, obj);
  }
  return tmp4;
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ container: { position: "absolute", left: 0, right: 0, backgroundColor: "transparent", marginTop: 8 } });
let result = require("set").fileFinishedImporting("components_native/ChannelContainer.tsx");

export const ChannelContainer = function ChannelContainer(children) {
  ({ guildId: require, channelId } = children);
  dependencyMap = undefined;
  let React;
  closure_4 = undefined;
  let obj = initialize;
  const items = [closure_7, closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const voiceChannelId = closure_1_7.getVoiceChannelId();
    const obj = { channel: closure_1_6.getChannel(channelId), voiceChannelId, isStageChannel: null };
    const channel = closure_1_6.getChannel(voiceChannelId);
    let isGuildStageVoiceResult;
    if (channel != null) {
      isGuildStageVoiceResult = channel.isGuildStageVoice();
    }
    obj[2] = Boolean(isGuildStageVoiceResult);
    return obj;
  });
  ({ channel, isStageChannel } = stateFromStoresObject);
  let tmp5 = !isStageChannel;
  if (isStageChannel) {
    tmp5 = channelId(10565)(stateFromStoresObject.voiceChannelId);
  }
  let tmpResult = tmp(589);
  const items1 = [closure_5];
  let isPrivateResult = null != channel;
  const stateFromStores = tmpResult.useStateFromStores(items1, () => {
    let isLurkingResult = null != closure_0;
    if (isLurkingResult) {
      isLurkingResult = closure_1_5.isLurking(tmp);
    }
    return isLurkingResult;
  });
  if (isPrivateResult) {
    isPrivateResult = channel.isPrivate();
  }
  dependencyMap = isPrivateResult;
  const tmp8 = channelId(6738)(isPrivateResult);
  React = tmp8;
  const tmp9 = channelId(6738)(channelId);
  closure_4 = tmp9;
  const items2 = [channelId, tmp9, isPrivateResult, tmp8];
  const effect = React.useEffect(() => {
    let tmp = closure_3;
    let tmp2 = closure_3;
    if (closure_3) {
      tmp2 = !_undefined;
    }
    if (!tmp2) {
      if (tmp) {
        tmp = _undefined;
      }
      if (tmp) {
        tmp = channelId !== closure_4;
      }
      tmp2 = tmp;
    }
    if (tmp2) {
      let obj = closure_1_0(_undefined[14]);
      obj = { dismissAction: null };
      obj[0] = closure_1_9.AUTO;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_1_0(_undefined[15]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj);
    }
  }, items2);
  tmpResult = tmp(10566);
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
      obj1 = { channel: null };
      obj1[0] = channel;
      tmp15 = callback(tmp4(10567), obj1);
    }
  }
  const items3 = [tmp15, children.children, ];
  if (tmp5) {
    const obj2 = { style: null };
    obj2[0] = channelStyles.callPTTButton;
    tmp5 = callback(tmp4(10583), obj2);
  }
  items3[2] = tmp5;
  obj[1] = items3;
  const items4 = [closure_11(closure_4, obj), callback(NotificationsContainer, {})];
  obj[1] = items4;
  return closure_11(closure_4, obj);
};