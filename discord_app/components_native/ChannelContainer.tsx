// === Module 10098: NotificationsContainer ===

// Module 10098 (NotificationsContainer)
import initialize from "initialize" /* 589 */;
import useChatLayoutDefault from "useChatLayout" /* 4303 */;
import NotificationsDefault from "Notifications" /* 10099 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "initialize" /* 4091 */;
import closure_6 from "ensureGuildLoaded" /* 1391 */;
import closure_7 from "handleConnectionOpen" /* 1982 */;
import { ChannelTypes } from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

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
    tmp5 = channelId(9490)(stateFromStoresObject.voiceChannelId);
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
  const tmp8 = channelId(8522)(isPrivateResult);
  React = tmp8;
  const tmp9 = channelId(8522)(channelId);
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
  tmpResult = tmp(10898);
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
      tmp15 = callback(tmp4(10899), obj1);
    }
  }
  const items3 = [tmp15, children.children, ];
  if (tmp5) {
    const obj2 = { style: null };
    obj2[0] = channelStyles.callPTTButton;
    tmp5 = callback(tmp4(9604), obj2);
  }
  items3[2] = tmp5;
  obj[1] = items3;
  const items4 = [closure_11(closure_4, obj), callback(NotificationsContainer, {})];
  obj[1] = items4;
  return closure_11(closure_4, obj);
};