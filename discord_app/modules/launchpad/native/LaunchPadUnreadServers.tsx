// === Module 17180: LaunchPadUnreadServers ===

// Module 17180 (LaunchPadUnreadServers)
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4649 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4651 */;
import transitionToGuild from "transitionToGuild" /* 7452 */;
import isGuildSelectableDefault from "isGuildSelectable" /* 17186 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import ReadStateStore from "ReadStateStore" /* 4653 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function HistorySeparator() {
  const tmp = closure_12();
  const obj = { style: tmp.guildHistorySeparatorWrapper, children: closure_1_10(hasOwnProperty, { style: tmp.guildHistorySeparator }) };
  return closure_1_10(hasOwnProperty, obj);
}
function renderHistorySection() {
  return closure_1_10(HistorySeparator, {});
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ChannelTypes = fn(1074).ChannelTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4638);
let obj = { listWrapper: { marginTop: 8 }, list: { marginBottom: 4, flexShrink: 0 }, maskStrokeStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, privateChannelWrapper: { position: "relative", paddingVertical: 2, justifyContent: "center", alignItems: "center" }, privateChannelIcon: { width: 48, height: 48, borderRadius: 24, overflow: "hidden" }, badgeWrapper: { position: "absolute", top: "50%", left: "50%", marginLeft: 6, marginTop: 6 }, guildWrapper: { paddingVertical: 2, justifyContent: "center", alignItems: "center" }, guildHistorySeparatorWrapper: { flex: 1, justifyContent: "center", alignItems: "center" }, guildHistorySeparator: null };
let size = { width: 2, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.guildHistorySeparator = size;
let closure_12 = createStyles.createStyles(obj);
let closure_13 = noop.memo(function GuildItemInner(guildId) {
  guildId = guildId.guildId;
  const onGuildSelect = guildId.onGuildSelect;
  const tmp = closure_12();
  const items = [guildId, onGuildSelect];
  const items1 = [guildId];
  const callback = noop.useCallback(() => {
    onGuildSelect(guildId);
  }, items);
  const obj = { style: tmp.guildWrapper, children: null };
  const callback1 = noop.useCallback(() => {
    transitionToGuild.transitionToGuild(guildId);
  }, items1);
  obj.children = closure_10(onGuildSelect(17181), { size: 48, borderRadius: 16, guildId, selected: guildId.selected, onPress: callback, onLongPress: callback1, backgroundColor: tmp.maskStrokeStyle.backgroundColor });
  return closure_10(closure_5, obj);
});
let closure_14 = noop.memo(function PrivateChannelItemInner(channelId) {
  channelId = channelId.channelId;
  let stateFromStores1;
  const tmp = closure_12();
  let items = [ChannelStore];
  const stateFromStores = channelId(stateFromStores1[11]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = channelId(stateFromStores1[11]);
  const items1 = [UserStore];
  stateFromStores1 = channelId(stateFromStores1[11]).useStateFromStores(items1, () => {
    let isPrivateResult;
    if (stateFromStores != null) {
      isPrivateResult = stateFromStores.isPrivate();
    }
    let user;
    if (isPrivateResult) {
      user = UserStore.getUser(stateFromStores.getRecipientId());
    }
    return user;
  });
  let obj3 = channelId(stateFromStores1[11]);
  const items2 = [ReadStateStore];
  const stateFromStores2 = channelId(stateFromStores1[11]).useStateFromStores(items2, () => {
    let num = 0;
    if (null != stateFromStores) {
      num = ReadStateStore.getMentionCount(tmp.id);
    }
    return num;
  });
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === ChannelTypes.DM) {
    if (null != stateFromStores1) {
      let obj2 = { style: tmp.privateChannelIcon, user: stateFromStores1, guildId: "Array", size: tmp2(tmp3[12]).AvatarSizes.LARGE_48 };
      let tmp8 = closure_10(tmp2(tmp3[12]).Avatar, obj2);
    }
    const items3 = [stateFromStores1, stateFromStores];
    let tmp19Result = null;
    if (null != stateFromStores) {
      const obj5 = { onPress: tmp17, style: tmp.privateChannelWrapper, accessibilityRole: "button", accessible: true, children: null };
      const items4 = [tmp8, ];
      let tmp21 = stateFromStores2 > 0;
      if (tmp21) {
        const obj6 = { style: tmp.badgeWrapper, children: null };
        const obj7 = { value: stateFromStores2, unread: true, backgroundColor: tmp.maskStrokeStyle.backgroundColor };
        obj6.children = closure_10(stateFromStores(tmp3[18]), obj7);
        tmp21 = closure_10(closure_5, obj6);
      }
      items4[1] = tmp21;
      obj5.children = items4;
      tmp19Result = closure_11(closure_4, obj5);
    }
    return tmp19Result;
  }
  let isGroupDMResult;
  if (stateFromStores != null) {
    isGroupDMResult = stateFromStores.isGroupDM();
  }
  if (isGroupDMResult) {
    const obj8 = { channel: stateFromStores, size: tmp2(tmp3[12]).AvatarSizes.LARGE_48 };
    tmp8 = closure_10(stateFromStores(tmp3[13]), obj8);
    const tmp14 = stateFromStores(tmp3[13]);
  } else if (null != stateFromStores) {
    const obj9 = { style: null, source: null };
    const items5 = [tmp.privateChannelIcon];
    obj9.style = items5;
    const tmp11 = stateFromStores(tmp3[14]);
    obj9.source = tmp2(tmp3[15]).getChannelIconSource(stateFromStores);
    tmp8 = closure_10(tmp11, obj9);
    const tmp2Result = tmp2(tmp3[15]);
  }
  const obj4 = channelId(stateFromStores1[11]);
});
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadUnreadServers.tsx");

export default noop.memo(function LaunchPadUnreadServers(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const setSelectedGuild = selectedGuildId.setSelectedGuild;
  let prop = selectedGuildId.unreadPrivateChannelIds;
  let unreadGuilds = selectedGuildId.unreadGuilds;
  let guildHistory = selectedGuildId.guildHistory;
  const visible = selectedGuildId.visible;
  let list = closure_12();
  let AnimatedFastList = selectedGuildId;
  let tmp = prop;
  const categoryStyles = selectedGuildId(prop[19]).useCategoryStyles();
  unreadGuilds.useRef(-1);
  const items = [setSelectedGuild, selectedGuildId];
  const onGuildSelect = unreadGuilds.useCallback((id) => {
    if (ref.current < 0) {
      if (isGuildSelectableDefault(id)) {
        let tmp6;
        if (id !== selectedGuildId) {
          tmp6 = id;
        }
        setSelectedGuild(tmp6);
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          clearTimeout(ref.current);
          ref.current = -1;
        }, 400);
      }
    }
    clearTimeout(ref.current);
    ref.current = -1;
    transitionToGuild.transitionToGuild(id);
  }, items);
  const effect = unreadGuilds.useEffect(() => () => clearTimeout(ref.current), []);
  const ref = unreadGuilds.useRef(null);
  const items1 = [visible];
  const effect1 = unreadGuilds.useEffect(() => {
    if (visible) {
      const current = ref.current;
      if (current != null) {
        current.scrollToTop(false);
      }
    }
  }, items1);
  const items2 = [unreadGuilds, prop, selectedGuildId, onGuildSelect, guildHistory];
  const items3 = [unreadGuilds.length, prop.length, guildHistory.length];
  const callback1 = unreadGuilds.useCallback((arg0, arg1) => {
    if (0 === arg0) {
      let tmp14 = null != tmp12;
      if (tmp14) {
        const obj2 = { channelId: tmp12 };
        tmp14 = closure_2_10(closure_14, obj2);
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
        const obj = { guildId: tmp3, selected: selectedGuildId === tmp3, onGuildSelect };
        tmp6 = closure_2_10(closure_13, obj);
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
  let obj2 = { style: list.listWrapper, children: null };
  let obj = selectedGuildId(prop[19]);
  const tmp11 = visible;
  let renderCategoryItem = AnimatedFastList(tmp[19]).renderCategoryItem;
  const intl = AnimatedFastList(tmp[22]).intl;
  const string = intl.string;
  let t = AnimatedFastList(tmp[22]).t;
  if (unreadGuilds.length > 0 || prop.length > 0) {
    let stringResult = string(t.xSY9BH);
  } else {
    stringResult = string(t.kCt2zG);
  }
  t = [renderCategoryItem({ name: stringResult, styles: categoryStyles }), ];
  renderCategoryItem = closure_10;
  AnimatedFastList = AnimatedFastList(tmp[23]).AnimatedFastList;
  const obj3 = { ref, style: null, horizontal: true, renderItem: callback1, renderSection: renderHistorySection, sectionSize: length, sections: null, itemSize: 58, headerSize: 19, footerSize: 19, chunkBase: setSelectedGuild(prop[20])().width, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, stickySectionsVariant: "disabled", keyboardShouldPersistTaps: "always" };
  list = list.list;
  obj3.style = list;
  length = prop.length;
  prop = [length, , ];
  unreadGuilds = unreadGuilds.length;
  prop[1] = unreadGuilds;
  guildHistory = guildHistory.length;
  prop[2] = guildHistory;
  obj3.sections = prop;
  tmp = closure_10(AnimatedFastList, obj3);
  t[1] = tmp;
  obj2.children = t;
  closure_11(tmp11, obj2);
  const AnimatedFastListResult = AnimatedFastList(tmp[19]);
});