// === Module 15608: ? ===

// Module 15608
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "truncateOldMessageData" /* 13290 */;
import { MAX_STORED_MESSAGES } from "truncateOldMessageData" /* 13290 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import closure_8 from "handleTypingStart" /* 11475 */;
import closure_9 from "mergeGuildAvatar" /* 1923 */;
import { HappeningNowCardTrackingType as closure_10 } from "HAPPENING_NOW_PANELS_CONTAINER_PADDING" /* 14823 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
let c3 = importAllResult;
({ AnalyticEvents: unpackModuleId, Routes: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles({ content: { flexShrink: 1, marginLeft: 4, gap: 2 }, avatarsWrapper: { marginBottom: 2 } });
const memoResult = importAllResult.memo((index) => {
  index = index.index;
  const guildId = index.guildId;
  const channelId = index.channelId;
  let flag = index.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStoresArray;
  const tmp = callback2();
  let obj = index(channelId[10]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getChannel(channelId));
  obj1 = index(channelId[10]);
  const items1 = [closure_8, closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => {
    const keys = guildId(channelId[11]).keys(closure_1_8.getTypingUsers(channelId));
    const mapped = keys.map((arg0) => user.getUser(arg0));
    return mapped.filter(index(channelId[12]).isNotNullish)[0];
  });
  let obj2 = index(channelId[10]);
  const items2 = [closure_5];
  stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    let channelMessageData = closure_1_5.getChannelMessageData(channelId);
    if (channelMessageData == null) {
      channelMessageData = [];
    }
    return channelMessageData;
  });
  const items3 = [stateFromStoresArray];
  const memo = stateFromStoresArray.useMemo(() => {
    const obj = guildId(channelId[13]);
    const arr = guildId(channelId[13]);
    return obj.uniq(guildId(channelId[13]).map(stateFromStoresArray, "userId")).filter(index(channelId[12]).isNotNullish);
  }, items3);
  let obj3 = index(channelId[14]);
  const ensureHydratedUsers = obj3.useEnsureHydratedUsers(guildId, memo);
  let obj4 = index(channelId[10]);
  const items4 = [closure_9];
  const stateFromStoresArray1 = obj4.useStateFromStoresArray(items4, () => {
    const obj = guildId(channelId[13]);
    const arr = guildId(channelId[13]);
    const mapped = obj.uniq(guildId(channelId[13]).map(stateFromStoresArray, "userId")).map((arg0) => user.getUser(arg0));
    return mapped.filter(index(channelId[12]).isNotNullish);
  });
  const items5 = [channelId, index, guildId];
  const callback = stateFromStoresArray.useCallback(() => {
    let obj = guildId(channelId[15]);
    obj = { order: index, guild_id: guildId, type: closure_1_10.ACTIVE_CHANNEL_CARD, destination_channel_id: channelId };
    obj.track(closure_1_11.ACTIVITY_CARD_CLICKED, obj);
    index(channelId[16]).transitionTo(closure_1_12.CHANNEL(guildId, channelId));
  }, items5);
  if (null == stateFromStores) {
    return null;
  } else {
    if (stateFromStoresArray.length < MAX_STORED_MESSAGES) {
      const intl2 = tmp2(tmp3[18]).intl;
      obj = { count: null };
      obj[0] = stateFromStoresArray.length;
      let formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[18]).t.VdpclX, obj);
    } else {
      const intl = tmp2(tmp3[18]).intl;
      formatToPlainStringResult = intl.string(tmp2(tmp3[18]).t.LCutYV);
    }
    const channelIconComponent = tmp2(tmp3[19]).getChannelIconComponent(stateFromStores);
    obj = { onPress: null, width: null, IconComponent: null, panelVariant: null, children: null };
    obj[0] = callback;
    let str = "medium";
    const tmp2Result = tmp2(tmp3[19]);
    if (index.fullwidth) {
      str = "full";
    }
    obj[1] = str;
    obj[2] = channelIconComponent;
    obj[3] = flag;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.content;
    obj2 = { style: null, children: null };
    obj2[0] = tmp.avatarsWrapper;
    obj3 = { isTyping: null, userLimit: 3, users: null, userCount: null, guildId: null };
    obj3[0] = null != stateFromStores1;
    obj3[2] = stateFromStoresArray1;
    obj3[3] = stateFromStoresArray1.length;
    obj3[4] = guildId;
    obj2[1] = closure_13(tmp2(tmp3[21]).HappeningNowAvatarStack, obj3);
    const items6 = [closure_13(View, obj2), , ];
    obj4 = { noMargin: null, children: null };
    obj4[0] = stateFromStoresArray1.length > 0;
    obj4[1] = formatToPlainStringResult;
    items6[1] = closure_13(tmp2(tmp3[20]).HappeningNowCardHeader, obj4);
    const obj5 = { children: null };
    obj5[0] = tmp10;
    items6[2] = closure_13(tmp2(tmp3[20]).HappeningNowCardSubtitle, obj5);
    obj1[1] = items6;
    obj[4] = callback(View, obj1);
    return closure_13(tmp9(tmp3[20]), obj);
  }
  tmp9 = guildId;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActiveChannel.tsx");

export default memoResult;