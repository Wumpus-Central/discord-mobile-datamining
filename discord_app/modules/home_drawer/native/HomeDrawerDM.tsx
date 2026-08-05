// discord_app/modules/home_drawer/native/HomeDrawerDM.tsx
import MobileHomeDrawerExperiment from "MobileHomeDrawerExperiment";
import { View } from "ChannelListLayoutTypes";
import { isMultiUserDM } from "createChannelRecord";
import upsertRelationship from "upsertRelationship";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import mergeGuildAvatar from "mergeGuildAvatar";
import { NOOP } from "sum";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import { useMessagePreview } from "../../main_tabs_v2/useMessagePreviews.tsx";
import { MobileHomeDrawerExperiment } from "HomeDrawerExperiment.tsx";

let c10;
let unpackModuleId;
const require = arg1;
function HomeDrawerDMExpandedChildren(channel) {
  channel = channel.channel;
  let importDefault;
  let dependencyMap;
  let stateFromStores;
  let c4;
  let stateFromStores1;
  let memo;
  const tmp = callback2();
  importDefault = tmp;
  let items = [mergeGuildAvatar];
  dependencyMap = channel(589).useStateFromStores(items, () => outer1_8.getUser(channel.getRecipientId()));
  let obj = channel(589);
  const items1 = [mergeGuildAvatar, memo];
  stateFromStores = channel(589).useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != channel) {
      if (stateFromStores1(tmp.type)) {
        let channelName = channel(4475).computeChannelName(tmp, outer1_8, memo);
        const obj = channel(4475);
      } else {
        channelName = null;
      }
      tmp2 = channelName;
    }
    return tmp2;
  });
  const obj2 = channel(589);
  const tmp3 = useMessagePreview(channel, { unread: channel(15338).useBaseChannelUnreadBadgeState(channel, false).unread });
  c4 = tmp3;
  const obj3 = channel(15338);
  const items2 = [updateUserGuildSettingsInternal];
  stateFromStores1 = channel(589).useStateFromStores(items2, () => outer1_7.getChannelMuteConfig(channel.guild_id, channel.id));
  const items3 = [stateFromStores1];
  memo = stateFromStores.useMemo(() => {
    if (null == stateFromStores1) {
      let obj = { isMuted: false, isTemporary: false };
    } else {
      let tmp2 = null == tmp.end_time;
      if (!tmp2) {
        const _Date = Date;
        const date = new Date(tmp.end_time);
        const _Date2 = Date;
        const date1 = new Date();
        tmp2 = date > date1;
      }
      obj = { isMuted: null, isTemporary: null };
      obj[0] = tmp2;
      obj[1] = null != tmp.end_time;
    }
    return obj;
  }, items3);
  const items4 = [stateFromStores, memo, , ];
  ({ title: arr5[2], titleText: arr5[3] } = tmp);
  const items5 = [channel, tmp3, memo];
  const title = stateFromStores.useMemo(() => {
    let isMuted;
    if (memo != null) {
      isMuted = tmp.isMuted;
    }
    if (isMuted) {
      let isTemporary;
      if (tmp != null) {
        isTemporary = tmp.isTemporary;
      }
      let tmp5Result = dependencyMap;
      if (isTemporary) {
        tmp5Result = tmp5(12470);
        let BellSlashIcon = tmp5Result.BellZIcon;
      } else {
        BellSlashIcon = tmp5(9647).BellSlashIcon;
      }
    } else {
      let obj = { style: null, children: null };
      obj[0] = _undefined.title;
      obj = { variant: "text-md/medium", style: null, lineClamp: 1, color: "text-default", children: null };
      obj[1] = _undefined.titleText;
      obj[4] = stateFromStores;
      const items = [outer1_10(channel(4281).Text, obj), outer1_10(outer1_9, { size: "xs" })];
      obj[1] = items;
      return outer1_11(c4, obj);
    }
  }, items4);
  const subtitle = stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != c4) {
      const obj = { channel: null, message: null, variant: "text-xs/medium", color: "text-strong", layout: null, muted: null };
      obj[0] = channel;
      obj[1] = tmp;
      obj[4] = channel(3963).ChannelListLayoutTypes.COZY;
      obj[5] = memo.isMuted;
      tmp2 = outer1_10(channel(9705).ChannelRowPreview, obj);
    }
    return tmp2;
  }, items5);
  return callback(channel(15302).HomeDrawerSharedItem, { title, subtitle });
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ title: { flexDirection: "row", alignItems: "center", gap: 4 }, titleText: { flexShrink: 1 } });
const result = require("createChannelRecord").fileFinishedImporting("modules/home_drawer/native/HomeDrawerDM.tsx");

export default function HomeDrawerDMExpandedChildrenWrapper(channel) {
  const MobileHomeDrawerExperiment = MobileHomeDrawerExperiment /* MobileHomeDrawerExperiment */.MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      const obj = { channel: null };
      obj[0] = channel.channel;
      tmp2 = callback(HomeDrawerDMExpandedChildren, obj);
    }
  }
  return tmp2;
};