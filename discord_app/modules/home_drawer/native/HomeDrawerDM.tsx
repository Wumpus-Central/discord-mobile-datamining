// === Module 17956: HomeDrawerDM ===

// Module 17956 (HomeDrawerDM)
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 5099 */;
import Text_Text from "Text/Text" /* 5508 */;
import useChannelName from "useChannelName" /* 5533 */;
import ChannelListLayoutTypes from "ChannelListLayoutTypes" /* 5578 */;
import ChannelRowPreview from "ChannelRowPreview" /* 10494 */;
import BellSlashIcon2 from "BellSlashIcon" /* 11351 */;
import BellZIcon from "BellZIcon" /* 11589 */;
import useMessagePreviewsDefault from "useMessagePreviews" /* 16757 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4859 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6041 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
function HomeDrawerDMExpandedChildren(channel) {
  channel = channel.channel;
  let memo;
  const tmp = closure_12();
  importDefault = tmp;
  items = [UserStore];
  dependencyMap = channel(504).useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  let obj = channel(504);
  const items1 = [UserStore, memo];
  const stateFromStores = channel(504).useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != channel) {
      if (isMultiUserDM(channel.type)) {
        let channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      } else {
        channelName = null;
      }
      tmp2 = channelName;
    }
    return tmp2;
  });
  let obj2 = channel(504);
  const tmp3 = useMessagePreviewsDefault(channel, { unread: channel(17957).useBaseChannelUnreadBadgeState(channel, false).unread });
  closure_4 = tmp3;
  const obj3 = channel(17957);
  const items2 = [UserGuildSettingsStore];
  const stateFromStores1 = channel(504).useStateFromStores(items2, () => UserGuildSettingsStore.getChannelMuteConfig(channel.guild_id, channel.id));
  const items3 = [stateFromStores1];
  memo = stateFromStores.useMemo(() => {
    if (null == stateFromStores1) {
      let obj = { isMuted: false, isTemporary: false };
    } else {
      let tmp2 = null == stateFromStores1.end_time;
      if (!tmp2) {
        const _Date = Date;
        const date = new Date(stateFromStores1.end_time);
        const _Date2 = Date;
        const date1 = new Date();
        tmp2 = date > date1;
      }
      obj = { isMuted: tmp2, isTemporary: null != stateFromStores1.end_time };
    }
    return obj;
  }, items3);
  const items4 = [stateFromStores, memo, , ];
  ({ title: arr5[2], titleText: arr5[3] } = tmp);
  const items5 = [channel, tmp3, memo];
  const title = stateFromStores.useMemo(() => {
    let isMuted;
    if (memo != null) {
      isMuted = memo.isMuted;
    }
    if (isMuted) {
      let isTemporary;
      if (memo != null) {
        isTemporary = memo.isTemporary;
      }
      let tmp5Result = dependencyMap;
      if (isTemporary) {
        tmp5Result = BellZIcon;
        let BellSlashIcon = tmp5Result.BellZIcon;
      } else {
        BellSlashIcon = BellSlashIcon2.BellSlashIcon;
      }
    } else {
      const obj = { style: closure_1.title, children: null };
      const obj2 = { variant: "body-md/medium", style: closure_1.titleText, lineClamp: 1, color: "text-default", children: stateFromStores };
      items = [refs(Text_Text.Text, obj2), refs(NOOP, { size: "xs" })];
      obj.children = items;
      return closure_2_11(View, obj);
    }
  }, items4);
  const subtitle = stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != closure_4) {
      const obj = { channel, message: tmp, variant: "body-xs/medium", color: "text-strong", layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY, muted: memo.isMuted };
      tmp2 = refs(ChannelRowPreview.ChannelRowPreview, obj);
    }
    return tmp2;
  }, items5);
  return closure_10(channel(17924).HomeDrawerSharedItem, { title, subtitle });
}
const View = fn(17).View;
const isMultiUserDM = fn(4770).isMultiUserDM;
const NOOP = fn(1082).NOOP;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4917);
let closure_12 = createStyles.createStyles({ title: { flexDirection: "row", alignItems: "center", gap: 4 }, titleText: { flexShrink: 1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerDM.tsx");

export default function HomeDrawerDMExpandedChildrenWrapper(channel) {
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      const obj = { channel: channel.channel };
      tmp2 = refs(HomeDrawerDMExpandedChildren, obj);
    }
  }
  return tmp2;
};