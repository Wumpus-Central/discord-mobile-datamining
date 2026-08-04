import set from "set";
import { View } from "AnnouncementChannelLurkerBar";
import initialize from "initialize";
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import { ChannelTypes } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let unpackModuleId;
const require = arg1;
function NotificationsContainer() {
  let tmp4 = null;
  if (importDefault(4139)().isChatBesideChannelList) {
    const obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj[1] = callback(importDefault(9665), {});
    tmp4 = callback(View, obj);
  }
  return tmp4;
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ container: { position: "absolute", left: 0, right: 0, backgroundColor: "transparent", marginTop: 8 } });
let result = require("initialize").fileFinishedImporting("components_native/ChannelContainer.tsx");

export const ChannelContainer = function ChannelContainer(children) {
  let channel;
  let channelId;
  let isStageChannel;
  let require;
  ({ guildId: require, channelId } = children);
  let dependencyMap;
  let React;
  let c4;
  let obj = require(589) /* initialize */;
  const items = [handleConnectionOpen, ensureGuildLoaded];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const voiceChannelId = outer1_7.getVoiceChannelId();
    const obj = { channel: outer1_6.getChannel(channelId), voiceChannelId, isStageChannel: null };
    const channel = outer1_6.getChannel(voiceChannelId);
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
    tmp5 = channelId(10211)(stateFromStoresObject.voiceChannelId);
  }
  let tmpResult = tmp(589);
  const items1 = [initialize];
  let isPrivateResult = null != channel;
  const stateFromStores = tmpResult.useStateFromStores(items1, () => {
    let isLurkingResult = null != closure_0;
    if (isLurkingResult) {
      isLurkingResult = outer1_5.isLurking(tmp);
    }
    return isLurkingResult;
  });
  if (isPrivateResult) {
    isPrivateResult = channel.isPrivate();
  }
  dependencyMap = isPrivateResult;
  const tmp8 = channelId(8775)(isPrivateResult);
  React = tmp8;
  const tmp9 = channelId(8775)(channelId);
  c4 = tmp9;
  const items2 = [channelId, tmp9, isPrivateResult, tmp8];
  const effect = React.useEffect(() => {
    let tmp = c3;
    let tmp2 = c3;
    if (c3) {
      tmp2 = !_undefined;
    }
    if (!tmp2) {
      if (tmp) {
        tmp = _undefined;
      }
      if (tmp) {
        tmp = channelId !== c4;
      }
      tmp2 = tmp;
    }
    if (tmp2) {
      let obj = outer1_0(_undefined[14]);
      obj = { dismissAction: null };
      obj[0] = outer1_9.AUTO;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(outer1_0(_undefined[15]).DismissibleContent.ACTIVITY_GDM_CALL_TOOLTIP, obj);
    }
  }, items2);
  tmpResult = tmp(10212);
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
      const obj1 = { channel: null };
      obj1[0] = channel;
      tmp15 = callback(tmp4(10213), obj1);
    }
  }
  const items3 = [tmp15, children.children, ];
  if (tmp5) {
    const obj2 = { style: null };
    obj2[0] = channelStyles.callPTTButton;
    tmp5 = callback(tmp4(10228), obj2);
  }
  items3[2] = tmp5;
  obj[1] = items3;
  const items4 = [closure_11(c4, obj), callback(NotificationsContainer, {})];
  obj[1] = items4;
  return closure_11(c4, obj);
};