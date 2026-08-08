// discord_app/modules/launchpad/native/LaunchPadUnreadServers.tsx
import importAllResult from "renderCategoryItem";
import get_ActivityIndicator from "transitionToChannel";
import ensureGuildLoaded from "ensureGuildLoaded";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ChannelTypes } from "ME";
import jsxProd from "useWindowDimensions";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let unpackModuleId;
const require = arg1;
function HistorySeparator() {
  const tmp = callback2();
  obj = { style: tmp.guildHistorySeparatorWrapper, children: callback(closure_5, obj) };
  obj = { style: tmp.guildHistorySeparator };
  return callback(closure_5, obj);
}
function renderHistorySection() {
  return callback(HistorySeparator, {});
}
let c3 = importAllResult;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let obj = { listWrapper: { marginTop: 8 }, list: { marginBottom: 4, flexShrink: 0 }, maskStrokeStyle: null, privateChannelWrapper: null, privateChannelIcon: null, badgeWrapper: null, guildWrapper: null, guildHistorySeparatorWrapper: null, guildHistorySeparator: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
obj[2] = obj;
obj[3] = { position: "relative", paddingVertical: 2, justifyContent: "center", alignItems: "center" };
obj[4] = { width: 48, height: 48, borderRadius: 24, overflow: "hidden" };
obj[5] = { position: "absolute", top: "50%", left: "50%", marginLeft: 6, marginTop: 6 };
obj[6] = { paddingVertical: 2, justifyContent: "center", alignItems: "center" };
obj[7] = { flex: 1, justifyContent: "center", alignItems: "center" };
createCacheKey = { width: 2, height: 32, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
obj[8] = createCacheKey;
let closure_12 = createCacheKey.createStyles(obj);
let closure_13 = importAllResult.memo(function GuildItemInner(guildId) {
  guildId = guildId.guildId;
  const onGuildSelect = guildId.onGuildSelect;
  const tmp = callback2();
  const items = [guildId, onGuildSelect];
  const items1 = [guildId];
  const callback = importAllResult.useCallback(() => {
    onGuildSelect(guildId);
  }, items);
  let obj = { style: tmp.guildWrapper, children: null };
  const callback1 = importAllResult.useCallback(() => {
    guildId(outer1_2[9]).transitionToGuild(guildId);
  }, items1);
  obj = { size: 48, borderRadius: 16, guildId, selected: guildId.selected, onPress: callback, onLongPress: callback1, backgroundColor: tmp.maskStrokeStyle.backgroundColor };
  obj[1] = callback(onGuildSelect(16036), obj);
  return callback(closure_5, obj);
});
let closure_14 = importAllResult.memo(function PrivateChannelItemInner(channelId) {
  channelId = channelId.channelId;
  let stateFromStores;
  let stateFromStores1;
  const tmp = callback2();
  let obj = channelId(stateFromStores1[11]);
  let items = [ensureGuildLoaded];
  stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(channelId));
  let obj2 = channelId(stateFromStores1[11]);
  const items1 = [mergeGuildAvatar];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let isPrivateResult;
    if (stateFromStores != null) {
      isPrivateResult = obj.isPrivate();
    }
    let user;
    if (isPrivateResult) {
      user = outer1_8.getUser(obj.getRecipientId());
    }
    return user;
  });
  let obj3 = channelId(stateFromStores1[11]);
  const items2 = [generateOldThreadCutoff];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let num = 0;
    if (null != stateFromStores) {
      num = outer1_7.getMentionCount(tmp.id);
    }
    return num;
  });
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === ChannelTypes.DM) {
    if (null != stateFromStores1) {
      obj = { style: null, user: null, guildId: "Array", size: false };
      obj[0] = tmp.privateChannelIcon;
      obj[1] = stateFromStores1;
      obj[3] = tmp2(tmp3[12]).AvatarSizes.LARGE_48;
      let tmp8 = callback(tmp2(tmp3[12]).Avatar, obj);
    }
    const items3 = [stateFromStores1, stateFromStores];
    let tmp19Result = null;
    if (null != stateFromStores) {
      obj = { onPress: null, style: null, accessibilityRole: "button", accessible: true, children: null };
      obj[0] = tmp17;
      obj[1] = tmp.privateChannelWrapper;
      const items4 = [tmp8, ];
      let tmp21 = stateFromStores2 > 0;
      if (tmp21) {
        const obj1 = { style: null, children: null };
        obj1[0] = tmp.badgeWrapper;
        obj2 = { value: null, unread: true, backgroundColor: null };
        obj2[0] = stateFromStores2;
        obj2[2] = tmp.maskStrokeStyle.backgroundColor;
        obj1[1] = callback(stateFromStores(tmp3[18]), obj2);
        tmp21 = callback(closure_5, obj1);
      }
      items4[1] = tmp21;
      obj[4] = items4;
      tmp19Result = closure_11(closure_4, obj);
      const tmp19 = closure_11;
      const tmp20 = closure_4;
    }
    return tmp19Result;
  }
  let isGroupDMResult;
  if (stateFromStores != null) {
    isGroupDMResult = stateFromStores.isGroupDM();
  }
  if (isGroupDMResult) {
    obj3 = { channel: null, size: null };
    obj3[0] = stateFromStores;
    obj3[1] = tmp2(tmp3[12]).AvatarSizes.LARGE_48;
    tmp8 = callback(stateFromStores(tmp3[13]), obj3);
    const tmp14 = stateFromStores(tmp3[13]);
  } else if (null != stateFromStores) {
    const obj4 = { style: null, source: null };
    const items5 = [tmp.privateChannelIcon];
    obj4[0] = items5;
    const tmp11 = stateFromStores(tmp3[14]);
    obj4[1] = tmp2(tmp3[15]).getChannelIconSource(stateFromStores);
    tmp8 = callback(tmp11, obj4);
    const tmp2Result = tmp2(tmp3[15]);
  }
});
const memoResult = importAllResult.memo(function LaunchPadUnreadServers(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const setSelectedGuild = selectedGuildId.setSelectedGuild;
  let prop = selectedGuildId.unreadPrivateChannelIds;
  let unreadGuilds = selectedGuildId.unreadGuilds;
  let guildHistory = selectedGuildId.guildHistory;
  const visible = selectedGuildId.visible;
  let ensureGuildLoaded;
  let callback;
  let ref;
  let list = callback2();
  let AnimatedFastList = selectedGuildId;
  let tmp = prop;
  let obj = selectedGuildId(prop[19]);
  const categoryStyles = obj.useCategoryStyles();
  ensureGuildLoaded = unreadGuilds.useRef(-1);
  const items = [setSelectedGuild, selectedGuildId];
  callback = unreadGuilds.useCallback((arg0) => {
    if (ref.current < 0) {
      if (setSelectedGuild(prop[22])(arg0)) {
        let tmp6;
        if (arg0 !== selectedGuildId) {
          tmp6 = arg0;
        }
        setSelectedGuild(tmp6);
        const _setTimeout = setTimeout;
        tmp.current = setTimeout(() => {
          clearTimeout(ref.current);
          ref.current = -1;
        }, 400);
      }
    }
    clearTimeout(ref.current);
    ref.current = -1;
    selectedGuildId(prop[9]).transitionToGuild(arg0);
  }, items);
  const effect = unreadGuilds.useEffect(() => () => clearTimeout(ref.current), []);
  ref = unreadGuilds.useRef(null);
  const items1 = [visible];
  const effect1 = unreadGuilds.useEffect(() => {
    if (visible) {
      const current = ref.current;
      if (current != null) {
        current.scrollToTop(false);
      }
    }
  }, items1);
  const items2 = [unreadGuilds, prop, selectedGuildId, callback, guildHistory];
  const items3 = [unreadGuilds.length, prop.length, guildHistory.length];
  const callback1 = unreadGuilds.useCallback((arg0, arg1) => {
    if (0 === arg0) {
      let tmp14 = null != tmp12;
      if (tmp14) {
        let obj = { channelId: null };
        obj[0] = tmp12;
        tmp14 = outer1_10(outer1_14, obj);
      }
      return tmp14;
    } else if (arg0 >= 1) {
      if (1 === arg0) {
        let tmp3 = unreadGuilds[arg1];
      } else {
        tmp3 = guildHistory[arg1];
      }
      let tmp6 = null != tmp3;
      if (tmp6) {
        obj = { guildId: null, selected: null, onGuildSelect: null };
        obj[0] = tmp3;
        obj[1] = selectedGuildId === tmp3;
        obj[2] = callback;
        tmp6 = outer1_10(outer1_13, obj);
      }
      return tmp6;
    } else {
      return null;
    }
  }, items2);
  let length = unreadGuilds.useCallback((arg0) => {
    let num = 0;
    if (2 === arg0) {
      num = 0;
      if (guildHistory.length > 0) {
        if (prop.length > 0) {
          num = 10;
        } else {
          num = 0;
        }
      }
    }
    return num;
  }, items3);
  if (!(unreadGuilds.length > 0 || prop.length > 0)) {
    if (guildHistory.length <= 0) {
      return null;
    }
  }
  obj = { style: list.listWrapper, children: null };
  const tmp11 = closure_11;
  const tmp12 = visible;
  let tmp3 = setSelectedGuild(prop[20])("LaunchPadUnreadServers");
  let renderCategoryItem = AnimatedFastList(tmp[19]).renderCategoryItem;
  const intl = AnimatedFastList(tmp[23]).intl;
  const string = intl.string;
  let t = AnimatedFastList(tmp[23]).t;
  if (unreadGuilds.length > 0 || prop.length > 0) {
    let stringResult = string(t.xSY9BH);
  } else {
    stringResult = string(t.kCt2zG);
  }
  t = [renderCategoryItem({ name: stringResult, styles: categoryStyles, isRefreshEnabled: tmp3 }), ];
  renderCategoryItem = callback;
  AnimatedFastList = AnimatedFastList(tmp[24]).AnimatedFastList;
  obj = { ref, style: list, horizontal: true, renderItem: callback1, renderSection: renderHistorySection, sectionSize: length, sections: prop, itemSize: 58, headerSize: 19, footerSize: 19, chunkBase: setSelectedGuild(prop[21])().width, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, stickySectionsVariant: "disabled", keyboardShouldPersistTaps: "always" };
  list = list.list;
  length = prop.length;
  prop = [length, , ];
  unreadGuilds = unreadGuilds.length;
  prop[1] = unreadGuilds;
  guildHistory = guildHistory.length;
  prop[2] = guildHistory;
  tmp = callback(AnimatedFastList, obj);
  t[1] = tmp;
  obj[1] = t;
  tmp11(tmp12, obj);
});
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/launchpad/native/LaunchPadUnreadServers.tsx");

export default memoResult;