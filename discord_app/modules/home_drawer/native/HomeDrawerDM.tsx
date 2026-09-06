// discord_app/modules/home_drawer/native/HomeDrawerDM.tsx
import HomeDrawerExperiment from "HomeDrawerExperiment.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import ChannelListLayoutTypes from "../../main_tabs_v2/ChannelListLayoutTypes.tsx";
import ChannelRowPreview from "../../main_tabs_v2/native/shared_components/ChannelRowPreview.tsx";
import useMessagePreviewsDefault from "../../main_tabs_v2/useMessagePreviews.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function HomeDrawerDMExpandedChildren(channel) {
  channel = channel.channel;
  let memo;
  const tmp = closure_12();
  importDefault = tmp;
  let items = [UserStore];
  dependencyMap = channel(504).useStateFromStores(items, () => UserStore.getUser(channel.getRecipientId()));
  let obj = channel(504);
  const items1 = [UserStore, memo];
  const stateFromStores = channel(504).useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != channel) {
      if (isMultiUserDM(tmp.type)) {
        let channelName = useChannelName.computeChannelName(tmp, UserStore, RelationshipStore);
      } else {
        channelName = null;
      }
      tmp2 = channelName;
    }
    return tmp2;
  });
  const obj2 = channel(504);
  const tmp3 = useMessagePreviewsDefault(channel, {
    unread: channel(16343).useBaseChannelUnreadBadgeState(channel, false).unread,
  });
  closure_4 = tmp3;
  const obj3 = channel(16343);
  const items2 = [UserGuildSettingsStore];
  const stateFromStores1 = channel(504).useStateFromStores(items2, () =>
    UserGuildSettingsStore.getChannelMuteConfig(channel.guild_id, channel.id),
  );
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
      obj = { isMuted: tmp2, isTemporary: null != tmp.end_time };
    }
    return obj;
  }, items3);
  const items4 = [stateFromStores, memo, ,];
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
        tmp5Result = tmp5(13287);
        let BellSlashIcon = tmp5Result.BellZIcon;
      } else {
        BellSlashIcon = tmp5(9059).BellSlashIcon;
      }
    } else {
      let obj = { style: closure_1.title, children: null };
      obj = {
        variant: "text-md/medium",
        style: closure_1.titleText,
        lineClamp: 1,
        color: "text-default",
        children: stateFromStores,
      };
      const items = [closure_2_10(Text_Text.Text, obj), closure_2_10(NOOP, { size: "xs" })];
      obj.children = items;
      return closure_2_11(View, obj);
    }
  }, items4);
  const subtitle = stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != closure_4) {
      const obj = {
        channel,
        message: tmp,
        variant: "text-xs/medium",
        color: "text-strong",
        layout: ChannelListLayoutTypes.ChannelListLayoutTypes.COZY,
        muted: memo.isMuted,
      };
      tmp2 = closure_2_10(ChannelRowPreview.ChannelRowPreview, obj);
    }
    return tmp2;
  }, items5);
  return closure_10(channel(16305).HomeDrawerSharedItem, { title, subtitle });
}
const View = fn(17).View;
const isMultiUserDM = fn(1961).isMultiUserDM;
const NOOP = fn(1085).NOOP;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles({
  title: { flexDirection: "row", alignItems: "center", gap: 4 },
  titleText: { flexShrink: 1 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerDM.tsx");

export default function HomeDrawerDMExpandedChildrenWrapper(channel) {
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      const obj = { channel: channel.channel };
      tmp2 = closure_1_10(HomeDrawerDMExpandedChildren, obj);
    }
  }
  return tmp2;
}
