// discord_app/modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActiveChannel.tsx
import SnowflakeUtilsDefault from "../../../../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../../../../_runtime/metro/00012__.js";
import router_utils from "../../../../routing/router_utils.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ActiveChannelsStore from "../../../../guild_home/ActiveChannelsStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import TypingStore from "../../../../../stores/TypingStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const MAX_STORED_MESSAGES = fn(13965).MAX_STORED_MESSAGES;
let closure_10 = fn(15560).HappeningNowCardTrackingType;
const Constants = fn(1074);
({ AnalyticEvents: closure_11, Routes: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4756);
let closure_15 = createStyles.createStyles({
  content: { flexShrink: 1, marginLeft: 4, gap: 2 },
  avatarsWrapper: { marginBottom: 2 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActiveChannel.tsx",
);

export default noop.memo((index) => {
  index = index.index;
  const guildId = index.guildId;
  const channelId = index.channelId;
  let flag = index.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_15();
  const items = [ChannelStore];
  const stateFromStores = index(channelId[10]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = index(channelId[10]);
  const items1 = [TypingStore, UserStore];
  const stateFromStores1 = index(channelId[10]).useStateFromStores(items1, () => {
    const keys = SnowflakeUtilsDefault.keys(TypingStore.getTypingUsers(channelId));
    const mapped = keys.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish)[0];
  });
  let obj2 = index(channelId[10]);
  const items2 = [ActiveChannelsStore];
  const stateFromStoresArray = index(channelId[10]).useStateFromStoresArray(items2, () => {
    let channelMessageData = ActiveChannelsStore.getChannelMessageData(channelId);
    if (channelMessageData == null) {
      channelMessageData = [];
    }
    return channelMessageData;
  });
  const items3 = [stateFromStoresArray];
  const memo = stateFromStoresArray.useMemo(() => {
    const obj = _modDef12;
    return obj.uniq(_modDef12.map(stateFromStoresArray, "userId")).filter(GlobalUtils.isNotNullish);
  }, items3);
  const obj3 = index(channelId[10]);
  const ensureHydratedUsers = index(channelId[14]).useEnsureHydratedUsers(guildId, memo);
  const obj4 = index(channelId[14]);
  const items4 = [UserStore];
  const stateFromStoresArray1 = index(channelId[10]).useStateFromStoresArray(items4, () => {
    const obj = _modDef12;
    const mapped = obj.uniq(_modDef12.map(stateFromStoresArray, "userId")).map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  const items5 = [channelId, index, guildId];
  const callback = stateFromStoresArray.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.ACTIVITY_CARD_CLICKED, {
      order: index,
      guild_id: guildId,
      type: constants.ACTIVE_CHANNEL_CARD,
      destination_channel_id: channelId,
    });
    const obj2 = {
      order: index,
      guild_id: guildId,
      type: constants.ACTIVE_CHANNEL_CARD,
      destination_channel_id: channelId,
    };
    router_utils.transitionTo(closure_2_12.CHANNEL(guildId, channelId));
  }, items5);
  if (null == stateFromStores) {
    return null;
  } else {
    if (stateFromStoresArray.length < MAX_STORED_MESSAGES) {
      const intl2 = tmp2(tmp3[18]).intl;
      const obj6 = { count: stateFromStoresArray.length };
      let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[18]).t.VdpclX, obj6);
    } else {
      const intl = tmp2(tmp3[18]).intl;
      formatToPlainStringResult = intl.string(tmp2(tmp3[18]).t.LCutYV);
    }
    const channelIconComponent = tmp2(tmp3[19]).getChannelIconComponent(stateFromStores);
    const obj7 = { onPress: callback, width: null, IconComponent: null, panelVariant: null, children: null };
    let str = "medium";
    const tmp2Result = tmp2(tmp3[19]);
    if (index.fullwidth) {
      str = "full";
    }
    obj7.width = str;
    obj7.IconComponent = channelIconComponent;
    obj7.panelVariant = flag;
    const obj8 = { style: tmp.content, children: null };
    const obj9 = { style: tmp.avatarsWrapper, children: null };
    const obj10 = {
      isTyping: null != stateFromStores1,
      userLimit: 3,
      users: stateFromStoresArray1,
      userCount: stateFromStoresArray1.length,
      guildId,
    };
    obj9.children = closure_13(tmp2(tmp3[21]).HappeningNowAvatarStack, obj10);
    const items6 = [closure_13(View, obj9), ,];
    const obj11 = { noMargin: stateFromStoresArray1.length > 0, children: formatToPlainStringResult };
    items6[1] = closure_13(tmp2(tmp3[20]).HappeningNowCardHeader, obj11);
    const obj12 = { children: tmp10 };
    items6[2] = closure_13(tmp2(tmp3[20]).HappeningNowCardSubtitle, obj12);
    obj8.children = items6;
    obj7.children = closure_14(View, obj8);
    return closure_13(tmp9(tmp3[20]), obj7);
  }
  const obj5 = index(channelId[10]);
  tmp9 = guildId;
});
