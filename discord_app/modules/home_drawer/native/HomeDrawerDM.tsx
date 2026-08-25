// discord_app/modules/home_drawer/native/HomeDrawerDM.tsx
import MobileHomeDrawerExperiment2 from "HomeDrawerExperiment.tsx";
import useMessagePreviewDefault from "../../main_tabs_v2/useMessagePreviews.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { isMultiUserDM } from "../../../records/ChannelRecord.tsx";
import closure_6 from "../../../stores/RelationshipStore.tsx";
import closure_7 from "../../../stores/UserGuildSettingsStore.tsx";
import closure_8 from "../../../stores/UserStore.tsx";
import { NOOP } from "../../../../discord_common/js/shared/Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function HomeDrawerDMExpandedChildren(channel) {
  channel = channel.channel;
  importDefault = undefined;
  dependencyMap = undefined;
  let stateFromStores;
  closure_4 = undefined;
  let stateFromStores1;
  let memo;
  const tmp = callback2();
  importDefault = tmp;
  let items = [closure_8];
  dependencyMap = channel(589).useStateFromStores(items, () => closure_1_8.getUser(channel.getRecipientId()));
  let obj = channel(589);
  const items1 = [closure_8, memo];
  stateFromStores = channel(589).useStateFromStores(items1, () => {
    let tmp2 = null;
    if (null != channel) {
      if (stateFromStores1(tmp.type)) {
        let channelName = channel(4574).computeChannelName(tmp, closure_1_8, memo);
        const obj = channel(4574);
      } else {
        channelName = null;
      }
      tmp2 = channelName;
    }
    return tmp2;
  });
  const obj2 = channel(589);
  const tmp3 = useMessagePreviewDefault(channel, { unread: channel(15704).useBaseChannelUnreadBadgeState(channel, false).unread });
  closure_4 = tmp3;
  const obj3 = channel(15704);
  const items2 = [closure_7];
  stateFromStores1 = channel(589).useStateFromStores(items2, () => closure_1_7.getChannelMuteConfig(channel.guild_id, channel.id));
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
        tmp5Result = tmp5(12770);
        let BellSlashIcon = tmp5Result.BellZIcon;
      } else {
        BellSlashIcon = tmp5(9887).BellSlashIcon;
      }
    } else {
      let obj = { style: null, children: null };
      obj[0] = closure_1.title;
      obj = { variant: "text-md/medium", style: null, lineClamp: 1, color: "text-default", children: null };
      obj[1] = closure_1.titleText;
      obj[4] = stateFromStores;
      const items = [closure_1_10(channel(4376).Text, obj), closure_1_10(closure_1_9, { size: "xs" })];
      obj[1] = items;
      return closure_1_11(closure_4, obj);
    }
  }, items4);
  const subtitle = stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != closure_4) {
      const obj = { channel: null, message: null, variant: "text-xs/medium", color: "text-strong", layout: null, muted: null };
      obj[0] = channel;
      obj[1] = tmp;
      obj[4] = channel(4075).ChannelListLayoutTypes.COZY;
      obj[5] = memo.isMuted;
      tmp2 = closure_1_10(channel(9945).ChannelRowPreview, obj);
    }
    return tmp2;
  }, items5);
  return callback(channel(15666).HomeDrawerSharedItem, { title, subtitle });
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ title: { flexDirection: "row", alignItems: "center", gap: 4 }, titleText: { flexShrink: 1 } });
const result = require("set").fileFinishedImporting("modules/home_drawer/native/HomeDrawerDM.tsx");

export default function HomeDrawerDMExpandedChildrenWrapper(channel) {
  const MobileHomeDrawerExperiment = MobileHomeDrawerExperiment2.MobileHomeDrawerExperiment;
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