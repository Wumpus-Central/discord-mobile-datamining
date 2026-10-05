// === Module 16013: HappeningNowCardActiveChannel ===

// Module 16013 (HappeningNowCardActiveChannel)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import router_utils from "router_utils" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import ActiveChannelsStore2 from "ActiveChannelsStore" /* 13518 */;
import HappeningNowConstants from "HappeningNowConstants" /* 15114 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import TypingStore from "TypingStore" /* 11579 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ActiveChannelsStore = ActiveChannelsStore2;
let index;

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const View = react_native.View;
const MAX_STORED_MESSAGES = ActiveChannelsStore2.MAX_STORED_MESSAGES;
let closure_10 = HappeningNowConstants.HappeningNowCardTrackingType;
({ AnalyticEvents: unpackModuleId, Routes: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles({ content: { flexShrink: 1, marginLeft: 4, gap: 2 }, avatarsWrapper: { marginBottom: 2 } });
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((index) => {
  let channelId;
  let first;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp19;
  let tmp23;
  let tmp8;
  const tmp = index;
  let obj = index(channelId[11]);
  const cResult = obj.c(45);
  index = index.index;
  const guildId = index.guildId;
  channelId = index.channelId;
  const panelVariant = index.panelVariant;
  closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function _() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(channelId[12]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [TypingStore, UserStore];
    cResult[3] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== channelId) {
    const fn2 = function b() {
      let user;
      const obj = SnowflakeUtilsDefault;
      const keys = obj.keys(TypingStore.getTypingUsers(channelId));
      const mapped = keys.map((item) => user.getUser(item));
      return mapped.filter(GlobalUtils.isNotNullish)[0];
    };
    cResult[4] = channelId;
    cResult[5] = fn2;
    tmp13 = fn2;
  } else {
    tmp13 = cResult[5];
  }
  const tmpResult5 = tmp(channelId[12]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp10, tmp13);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ActiveChannelsStore];
    cResult[6] = items2;
    tmp15 = items2;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] !== channelId) {
    class F {
      constructor() {
        let channelMessageData = ActiveChannelsStore.getChannelMessageData(channelId);
        if (channelMessageData == null) {
          channelMessageData = [];
        }
        return channelMessageData;
      }
    }
    cResult[7] = channelId;
    cResult[8] = F;
  } else {
    class F {
      constructor() {
        let channelMessageData = ActiveChannelsStore.getChannelMessageData(channelId);
        if (channelMessageData == null) {
          channelMessageData = [];
        }
        return channelMessageData;
      }
    }
  }
  const tmpResult6 = tmp(channelId[12]);
  const stateFromStoresArray = tmpResult6.useStateFromStoresArray(tmp15, F);
  if (cResult[9] !== stateFromStoresArray) {
    class F {
      constructor() {
        let channelMessageData = ActiveChannelsStore.getChannelMessageData(channelId);
        if (channelMessageData == null) {
          channelMessageData = [];
        }
        return channelMessageData;
      }
    }
    let uniq = guildId(channelId[15]).uniq;
    guildId(channelId[15]);
    const arr4 = guildId(channelId[15]);
    let uniqResult = uniq(arr4.map(stateFromStoresArray, "userId"));
    const found = uniqResult.filter(tmp(tmp2[14]).isNotNullish);
    cResult[9] = stateFromStoresArray;
    cResult[10] = found;
    tmp19 = found;
  } else {
    class F {
      constructor() {
        let channelMessageData = ActiveChannelsStore.getChannelMessageData(channelId);
        if (channelMessageData == null) {
          channelMessageData = [];
        }
        return channelMessageData;
      }
    }
  }
  const tmpResult7 = tmp(channelId[16]);
  const ensureHydratedGuildUsers = tmpResult7.useEnsureHydratedGuildUsers(guildId, tmp19);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        let channelMessageData = ActiveChannelsStore.getChannelMessageData(channelId);
        if (channelMessageData == null) {
          channelMessageData = [];
        }
        return channelMessageData;
      }
    }
    const items3 = [UserStore];
    cResult[11] = items3;
    tmp23 = items3;
  } else {
    class F {
      constructor() {
        let channelMessageData = ActiveChannelsStore.getChannelMessageData(channelId);
        if (channelMessageData == null) {
          channelMessageData = [];
        }
        return channelMessageData;
      }
    }
  }
  if (cResult[12] !== stateFromStoresArray) {
    class P {
      constructor() {
        let user;
        const uniq = _modDef12.uniq;
        _modDef12;
        const arr = _modDef12;
        const uniqResult = uniq(arr.map(stateFromStoresArray, "userId"));
        const mapped = uniqResult.map((item) => user.getUser(item));
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
    cResult[12] = stateFromStoresArray;
    cResult[13] = P;
  } else {
    class P {
      constructor() {
        let user;
        const uniq = _modDef12.uniq;
        _modDef12;
        const arr = _modDef12;
        const uniqResult = uniq(arr.map(stateFromStoresArray, "userId"));
        const mapped = uniqResult.map((item) => user.getUser(item));
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
  }
  const tmpResult8 = tmp(channelId[12]);
  const stateFromStoresArray1 = tmpResult8.useStateFromStoresArray(tmp23, P);
  if (cResult[14] === channelId) {
    class P {
      constructor() {
        let user;
        const uniq = _modDef12.uniq;
        _modDef12;
        const arr = _modDef12;
        const uniqResult = uniq(arr.map(stateFromStoresArray, "userId"));
        const mapped = uniqResult.map((item) => user.getUser(item));
        return mapped.filter(GlobalUtils.isNotNullish);
      }
    }
  }
  const fn3 = function q() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { order: index, guild_id: guildId, type: unpackModuleId.ACTIVE_CHANNEL_CARD, destination_channel_id: channelId };
    obj.track(unpackModuleId.ACTIVITY_CARD_CLICKED, obj2);
    const obj3 = router_utils;
    obj3.transitionTo(closure_12.CHANNEL(guildId, channelId));
  };
  cResult[14] = channelId;
  cResult[15] = guildId;
  cResult[16] = index;
  cResult[17] = fn3;
}) : ((index) => {
  let items6;
  let obj10;
  let obj8;
  let str;
  index = index.index;
  const guildId = index.guildId;
  const channelId = index.channelId;
  let flag = index.panelVariant;
  const fullwidth = index.fullwidth;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_15();
  let obj = index(channelId[12]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj2 = index(channelId[12]);
  const items1 = [TypingStore, UserStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let user;
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(TypingStore.getTypingUsers(channelId));
    const mapped = keys.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish)[0];
  });
  let obj3 = index(channelId[12]);
  const items2 = [ActiveChannelsStore];
  const stateFromStoresArray = obj3.useStateFromStoresArray(items2, () => {
    let channelMessageData = ActiveChannelsStore.getChannelMessageData(channelId);
    if (channelMessageData == null) {
      channelMessageData = [];
    }
    return channelMessageData;
  });
  const items3 = [stateFromStoresArray];
  const memo = stateFromStoresArray.useMemo(() => {
    const uniq = _modDef12.uniq;
    _modDef12;
    const arr = _modDef12;
    const uniqResult = uniq(arr.map(stateFromStoresArray, "userId"));
    return uniqResult.filter(GlobalUtils.isNotNullish);
  }, items3);
  const obj4 = index(channelId[16]);
  const ensureHydratedGuildUsers = obj4.useEnsureHydratedGuildUsers(guildId, memo);
  const items4 = [UserStore];
  const obj5 = index(channelId[12]);
  const stateFromStoresArray1 = obj5.useStateFromStoresArray(items4, () => {
    let user;
    const uniq = _modDef12.uniq;
    _modDef12;
    const arr = _modDef12;
    const uniqResult = uniq(arr.map(stateFromStoresArray, "userId"));
    const mapped = uniqResult.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  const items5 = [channelId, index, guildId];
  const callback = stateFromStoresArray.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { order: index, guild_id: guildId, type: unpackModuleId.ACTIVE_CHANNEL_CARD, destination_channel_id: channelId };
    obj.track(unpackModuleId.ACTIVITY_CARD_CLICKED, obj2);
    const obj3 = router_utils;
    obj3.transitionTo(closure_12.CHANNEL(guildId, channelId));
  }, items5);
  const tmp9 = guildId;
  if (null == stateFromStores) {
    return null;
  } else {
    let formatToPlainStringResult;
    if (stateFromStoresArray.length < MAX_STORED_MESSAGES) {
      const intl2 = tmp2(tmp3[20]).intl;
      const obj6 = { count: stateFromStoresArray.length };
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(tmp3[20]).t.VdpclX, obj6);
    } else {
      const intl = tmp2(tmp3[20]).intl;
      formatToPlainStringResult = intl.string(tmp2(tmp3[20]).t.LCutYV);
    }
    const tmp2Result = index(channelId[21]);
    const channelIconComponent = tmp2Result.getChannelIconComponent(stateFromStores);
    const obj7 = { onPress: callback, width: str, IconComponent: channelIconComponent, panelVariant: flag, children: closure_14(View, obj8) };
    str = "medium";
    const tmp9Result = tmp9(channelId[23]);
    if (fullwidth) {
      str = "full";
    }
    obj8 = { style: tmp.content, children: items6 };
    const obj9 = { style: tmp.avatarsWrapper, children: closure_13(index(channelId[22]).HappeningNowAvatarStack, obj10) };
    obj10 = { isTyping: null != stateFromStores1, userLimit: 3, users: stateFromStoresArray1, userCount: stateFromStoresArray1.length, guildId };
    items6 = [closure_13(View, obj9), , ];
    const obj11 = { noMargin: stateFromStoresArray1.length > 0, children: formatToPlainStringResult };
    items6[1] = closure_13(index(channelId[23]).HappeningNowCardHeader, obj11);
    const obj12 = { children: tmp10 };
    items6[2] = closure_13(index(channelId[23]).HappeningNowCardSubtitle, obj12);
    return closure_13(tmp9Result, obj7);
  }
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/happening_now/HappeningNowCardActiveChannel.tsx");

export default memoResult;