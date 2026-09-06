// === Module 16969: LaunchPadUnreadServers ===

// Module 16969 (LaunchPadUnreadServers)
import nativeDefault from "native" /* 576 */;
import transitionToChannel from "transitionToChannel" /* 4571 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import transitionToGuild from "transitionToGuild" /* 7342 */;
import isGuildSelectableDefault from "isGuildSelectable" /* 16975 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function HistorySeparator() {
  const tmp = closure_12();
  let obj = { style: tmp.guildHistorySeparatorWrapper, children: null };
  obj = { style: tmp.guildHistorySeparator };
  obj.children = closure_1_10(hasOwnProperty, obj);
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
const createStyles = fn(4560);
let obj = { listWrapper: { marginTop: 8 }, list: { marginBottom: 4, flexShrink: 0 }, maskStrokeStyle: null, privateChannelWrapper: null, privateChannelIcon: null, badgeWrapper: null, guildWrapper: null, guildHistorySeparatorWrapper: null, guildHistorySeparator: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.maskStrokeStyle = obj;
obj.privateChannelWrapper = { position: "relative", paddingVertical: 2, justifyContent: "center", alignItems: "center" };
obj.privateChannelIcon = { width: 48, height: 48, borderRadius: 24, overflow: "hidden" };
obj.badgeWrapper = { position: "absolute", top: "50%", left: "50%", marginLeft: 6, marginTop: 6 };
obj.guildWrapper = { paddingVertical: 2, justifyContent: "center", alignItems: "center" };
obj.guildHistorySeparatorWrapper = { flex: 1, justifyContent: "center", alignItems: "center" };
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
  let obj = { style: tmp.guildWrapper, children: null };
  const callback1 = noop.useCallback(() => {
    transitionToGuild.transitionToGuild(guildId);
  }, items1);
  obj = { size: 48, borderRadius: 16, guildId, selected: guildId.selected, onPress: callback, onLongPress: callback1, backgroundColor: tmp.maskStrokeStyle.backgroundColor };
  obj.children = closure_10(onGuildSelect(16970), obj);
  return closure_10(closure_5, obj);
});
let closure_14 = noop.memo(function PrivateChannelItemInner(channelId) {
  channelId = channelId.channelId;
  let stateFromStores1;
  const tmp = closure_12();
  let obj = channelId(stateFromStores1[11]);
  let items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(stateFromStores1[11]);
  const items1 = [UserStore];
  stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let isPrivateResult;
    if (stateFromStores != null) {
      isPrivateResult = obj.isPrivate();
    }
    let user;
    if (isPrivateResult) {
      user = UserStore.getUser(obj.getRecipientId());
    }
    return user;
  });
  let obj3 = channelId(stateFromStores1[11]);
  const items2 = [ReadStateStore];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
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
      obj = { style: tmp.privateChannelIcon, user: stateFromStores1, guildId: "Array", size: tmp2(tmp3[12]).AvatarSizes.LARGE_48 };
      let tmp8 = closure_10(tmp2(tmp3[12]).Avatar, obj);
    }
    const items3 = [stateFromStores1, stateFromStores];
    let tmp19Result = null;
    if (null != stateFromStores) {
      obj = { onPress: tmp17, style: tmp.privateChannelWrapper, accessibilityRole: "button", accessible: true, children: null };
      const items4 = [tmp8, ];
      let tmp21 = stateFromStores2 > 0;
      if (tmp21) {
        const obj1 = { style: tmp.badgeWrapper, children: null };
        obj2 = { value: stateFromStores2, unread: true, backgroundColor: tmp.maskStrokeStyle.backgroundColor };
        obj1.children = closure_10(stateFromStores(tmp3[18]), obj2);
        tmp21 = closure_10(closure_5, obj1);
      }
      items4[1] = tmp21;
      obj.children = items4;
      tmp19Result = closure_11(closure_4, obj);
    }
    return tmp19Result;
  }
  let isGroupDMResult;
  if (stateFromStores != null) {
    isGroupDMResult = stateFromStores.isGroupDM();
  }
  if (isGroupDMResult) {
    obj3 = { channel: stateFromStores, size: tmp2(tmp3[12]).AvatarSizes.LARGE_48 };
    tmp8 = closure_10(stateFromStores(tmp3[13]), obj3);
    const tmp14 = stateFromStores(tmp3[13]);
  } else if (null != stateFromStores) {
    const obj4 = { style: null, source: null };
    const items5 = [tmp.privateChannelIcon];
    obj4.style = items5;
    const tmp11 = stateFromStores(tmp3[14]);
    obj4.source = tmp2(tmp3[15]).getChannelIconSource(stateFromStores);
    tmp8 = closure_10(tmp11, obj4);
    const tmp2Result = tmp2(tmp3[15]);
  }
});
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
  let obj = selectedGuildId(prop[19]);
  const categoryStyles = obj.useCategoryStyles();
  unreadGuilds.useRef(-1);
  const items = [setSelectedGuild, selectedGuildId];
  const onGuildSelect = unreadGuilds.useCallback((arg0) => {
    if (ref.current < 0) {
      if (isGuildSelectableDefault(arg0)) {
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
    transitionToGuild.transitionToGuild(arg0);
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
        let obj = { channelId: tmp12 };
        tmp14 = closure_2_10(closure_14, obj);
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
        obj = { guildId: tmp3, selected: selectedGuildId === tmp3, onGuildSelect };
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
  obj = { style: list.listWrapper, children: null };
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
  obj = { ref, style: null, horizontal: true, renderItem: callback1, renderSection: renderHistorySection, sectionSize: length, sections: null, itemSize: 58, headerSize: 19, footerSize: 19, chunkBase: setSelectedGuild(prop[20])().width, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, stickySectionsVariant: "disabled", keyboardShouldPersistTaps: "always" };
  list = list.list;
  obj.style = list;
  length = prop.length;
  prop = [length, , ];
  unreadGuilds = unreadGuilds.length;
  prop[1] = unreadGuilds;
  guildHistory = guildHistory.length;
  prop[2] = guildHistory;
  obj.sections = prop;
  tmp = closure_10(AnimatedFastList, obj);
  t[1] = tmp;
  obj.children = t;
  closure_11(visible, obj);
});