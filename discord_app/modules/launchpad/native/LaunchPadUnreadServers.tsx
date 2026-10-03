// === Module 17366: LaunchPadUnreadServers ===

// Module 17366 (LaunchPadUnreadServers)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4903 */;
import transitionToGuild from "transitionToGuild" /* 6845 */;
import isGuildSelectableDefault from "isGuildSelectable" /* 17372 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
function renderHistorySection() {
  return v65535(closure_15, {});
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const ChannelTypes = fn(1085).ChannelTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj = { listWrapper: { marginTop: 8 }, list: { marginBottom: 4, flexShrink: 0 }, maskStrokeStyle: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, privateChannelWrapper: { position: "relative", paddingVertical: 2, justifyContent: "center", alignItems: "center" }, privateChannelIcon: { width: 48, height: 48, borderRadius: 24, overflow: "hidden" }, badgeWrapper: { position: "absolute", top: "50%", left: "50%", marginLeft: 6, marginTop: 6 }, guildWrapper: { paddingVertical: 2, justifyContent: "center", alignItems: "center" }, guildHistorySeparatorWrapper: { flex: 1, justifyContent: "center", alignItems: "center" }, guildHistorySeparator: null };
let size = { width: 2, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.guildHistorySeparator = size;
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_13 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(576).c(14);
  guildId = guildId.guildId;
  ({ selected, onGuildSelect } = guildId);
  const tmp3 = closure_12();
  if (cResult[0] === guildId) {
    if (cResult[1] === onGuildSelect) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== guildId) {
      const fn2 = function p() {
        transitionToGuild.transitionToGuild(guildId);
      };
      cResult[3] = guildId;
      cResult[4] = fn2;
      let tmp5 = fn2;
    } else {
      tmp5 = cResult[4];
    }
    if (cResult[5] === guildId) {
      if (cResult[6] === tmp5) {
        if (cResult[7] === tmp4) {
          if (cResult[8] === selected) {
            if (cResult[9] === tmp3.maskStrokeStyle.backgroundColor) {
              let tmp6 = cResult[10];
            }
            if (cResult[11] === tmp3.guildWrapper) {
              if (cResult[12] === tmp6) {
                let tmp10 = cResult[13];
              }
              return tmp10;
            }
            const obj2 = { style: tmp3.guildWrapper, children: tmp6 };
            const tmp13 = closure_10(closure_5, obj2);
            cResult[11] = tmp3.guildWrapper;
            cResult[12] = tmp6;
            cResult[13] = tmp13;
            tmp10 = tmp13;
          }
        }
      }
    }
    const obj3 = { size: 48, borderRadius: 16, guildId, selected, onPress: tmp4, onLongPress: tmp5, backgroundColor: tmp3.maskStrokeStyle.backgroundColor };
    const tmp9 = closure_10(onGuildSelect(17367), obj3);
    cResult[5] = guildId;
    cResult[6] = tmp5;
    cResult[7] = tmp4;
    cResult[8] = selected;
    cResult[9] = tmp3.maskStrokeStyle.backgroundColor;
    cResult[10] = tmp9;
    tmp6 = tmp9;
  }
  const fn = function n() {
    onGuildSelect(guildId);
  };
  cResult[0] = guildId;
  cResult[1] = onGuildSelect;
  cResult[2] = fn;
  tmp4 = fn;
  const obj = guildId(576);
}) : ((guildId) => {
  guildId = guildId.guildId;
  onGuildSelect = guildId.onGuildSelect;
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
  obj.children = closure_10(onGuildSelect(17367), { size: 48, borderRadius: 16, guildId, selected: guildId.selected, onPress: callback, onLongPress: callback1, backgroundColor: tmp.maskStrokeStyle.backgroundColor });
  return closure_10(closure_5, obj);
}));
ReactCompilerGating = fn(558);
let closure_14 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  const cResult = channelId(stateFromStores1[10]).c(30);
  channelId = channelId.channelId;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function p() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = channelId(stateFromStores1[10]);
  const stateFromStores = channelId(stateFromStores1[13]).useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn2 = function k() {
      let isPrivateResult;
      if (stateFromStores != null) {
        isPrivateResult = stateFromStores.isPrivate();
      }
      let user;
      if (isPrivateResult) {
        user = UserStore.getUser(stateFromStores.getRecipientId());
      }
      return user;
    };
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = channelId(stateFromStores1[13]);
  stateFromStores1 = channelId(stateFromStores1[13]).useStateFromStores(tmp8, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ReadStateStore];
    cResult[6] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== stateFromStores) {
    const fn3 = function z() {
      let num = 0;
      if (null != stateFromStores) {
        num = ReadStateStore.getMentionCount(tmp.id);
      }
      return num;
    };
    cResult[7] = stateFromStores;
    cResult[8] = fn3;
    let tmp14 = fn3;
  } else {
    tmp14 = cResult[8];
  }
  const tmpResult4 = channelId(stateFromStores1[13]);
  const stateFromStores2 = channelId(stateFromStores1[13]).useStateFromStores(tmp12, tmp14);
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === ChannelTypes.DM) {
    if (null != stateFromStores1) {
      if (cResult[9] === tmp4.privateChannelIcon) {
      }
      let obj2 = { style: tmp4.privateChannelIcon, user: stateFromStores1, guildId: "Array", size: tmp(tmp2[14]).AvatarSizes.LARGE_48 };
      const tmp33 = closure_10(tmp(tmp2[14]).Avatar, obj2);
      cResult[9] = tmp4.privateChannelIcon;
      cResult[10] = stateFromStores1;
      cResult[11] = tmp33;
    }
  }
  let isGroupDMResult;
  if (stateFromStores != null) {
    isGroupDMResult = stateFromStores.isGroupDM();
  }
  if (isGroupDMResult) {
    if (cResult[12] !== stateFromStores) {
      let obj3 = { channel: stateFromStores, size: tmp(tmp2[14]).AvatarSizes.LARGE_48 };
      const tmp30 = closure_10(stateFromStores(tmp2[15]), obj3);
      cResult[12] = stateFromStores;
      cResult[13] = tmp30;
      let tmp26 = tmp30;
      const tmp29 = stateFromStores(tmp2[15]);
    } else {
      tmp26 = cResult[13];
    }
    let tmp18 = tmp26;
  } else if (null != stateFromStores) {
    if (cResult[14] !== tmp4.privateChannelIcon) {
      const items3 = [tmp4.privateChannelIcon];
      cResult[14] = tmp4.privateChannelIcon;
      cResult[15] = items3;
      let tmp19 = items3;
    } else {
      tmp19 = cResult[15];
    }
    if (cResult[16] !== stateFromStores) {
      const channelIconSource = tmp(tmp2[16]).getChannelIconSource(stateFromStores);
      cResult[16] = stateFromStores;
      cResult[17] = channelIconSource;
      let tmp20 = channelIconSource;
      const tmpResult6 = tmp(tmp2[16]);
    } else {
      tmp20 = cResult[17];
    }
    if (cResult[18] === tmp19) {
      if (cResult[19] === tmp20) {
        let tmp22 = cResult[20];
      }
      tmp18 = tmp22;
    }
    const obj4 = { style: tmp19, source: tmp20 };
    const tmp25 = closure_10(stateFromStores(tmp2[17]), obj4);
    cResult[18] = tmp19;
    cResult[19] = tmp20;
    cResult[20] = tmp25;
    tmp22 = tmp25;
  }
  if (cResult[21] === stateFromStores) {
    if (cResult[22] === stateFromStores1) {
      let tmp35 = cResult[23];
    }
    if (cResult[24] === stateFromStores2) {
      if (cResult[25] === stateFromStores) {
        if (cResult[26] === tmp35) {
          if (cResult[27] === tmp18) {
            if (cResult[28] === tmp4) {
              let tmp36 = cResult[29];
            }
            return tmp36;
          }
        }
      }
    }
    let tmp38Result = null;
    if (null != stateFromStores) {
      const obj5 = { onPress: tmp35, style: tmp4.privateChannelWrapper, accessibilityRole: "button", accessible: true, children: null };
      const items4 = [tmp18, ];
      let tmp40 = stateFromStores2 > 0;
      if (tmp40) {
        const obj6 = { style: tmp4.badgeWrapper, children: null };
        const obj7 = { value: stateFromStores2, unread: true, backgroundColor: tmp4.maskStrokeStyle.backgroundColor };
        obj6.children = closure_10(stateFromStores(tmp2[20]), obj7);
        tmp40 = closure_10(closure_5, obj6);
      }
      items4[1] = tmp40;
      obj5.children = items4;
      tmp38Result = closure_11(closure_4, obj5);
    }
    cResult[24] = stateFromStores2;
    cResult[25] = stateFromStores;
    cResult[26] = tmp35;
    cResult[27] = tmp18;
    cResult[28] = tmp4;
    cResult[29] = tmp38Result;
    tmp36 = tmp38Result;
  }
  const fn4 = function w() {
    if (null != stateFromStores) {
      if (stateFromStores.type === ChannelTypes.DM) {
        if (null != stateFromStores1) {
          const obj3 = { recipientIds: null };
          const items = [tmp2.id];
          obj3.recipientIds = items;
          ChannelActionCreatorsDefault.openPrivateChannel(obj3);
        }
      }
      transitionToChannel.transitionToChannel(stateFromStores.id, { navigationReplace: true });
    }
  };
  cResult[21] = stateFromStores;
  cResult[22] = stateFromStores1;
  cResult[23] = fn4;
  tmp35 = fn4;
  const tmpResult5 = channelId(stateFromStores1[13]);
}) : ((channelId) => {
  channelId = channelId.channelId;
  let stateFromStores1;
  const tmp = closure_12();
  let items = [ChannelStore];
  const stateFromStores = channelId(stateFromStores1[13]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = channelId(stateFromStores1[13]);
  const items1 = [UserStore];
  stateFromStores1 = channelId(stateFromStores1[13]).useStateFromStores(items1, () => {
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
  let obj3 = channelId(stateFromStores1[13]);
  const items2 = [ReadStateStore];
  const stateFromStores2 = channelId(stateFromStores1[13]).useStateFromStores(items2, () => {
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
      let obj2 = { style: tmp.privateChannelIcon, user: stateFromStores1, guildId: "Array", size: tmp2(tmp3[14]).AvatarSizes.LARGE_48 };
      let tmp9Result = closure_10(tmp2(tmp3[14]).Avatar, obj2);
    }
    const items3 = [stateFromStores1, stateFromStores];
    let tmp20Result = null;
    if (null != stateFromStores) {
      const obj5 = { onPress: tmp18, style: tmp.privateChannelWrapper, accessibilityRole: "button", accessible: true, children: null };
      const items4 = [tmp9Result, ];
      let tmp22 = stateFromStores2 > 0;
      if (tmp22) {
        const obj6 = { style: tmp.badgeWrapper, children: null };
        const obj7 = { value: stateFromStores2, unread: true, backgroundColor: tmp.maskStrokeStyle.backgroundColor };
        obj6.children = closure_10(stateFromStores(tmp3[20]), obj7);
        tmp22 = closure_10(closure_5, obj6);
      }
      items4[1] = tmp22;
      obj5.children = items4;
      tmp20Result = closure_11(closure_4, obj5);
    }
    return tmp20Result;
  }
  let isGroupDMResult;
  if (stateFromStores != null) {
    isGroupDMResult = stateFromStores.isGroupDM();
  }
  if (isGroupDMResult) {
    const obj8 = { channel: stateFromStores, size: tmp2(tmp3[14]).AvatarSizes.LARGE_48 };
    tmp9Result = closure_10(stateFromStores(tmp3[15]), obj8);
    const tmp15 = stateFromStores(tmp3[15]);
  } else if (null != stateFromStores) {
    const obj9 = { style: null, source: null };
    const items5 = [tmp.privateChannelIcon];
    obj9.style = items5;
    const tmp11 = stateFromStores(tmp3[17]);
    const channelIconSource = tmp2(tmp3[16]).getChannelIconSource(stateFromStores);
    obj9.source = channelIconSource;
    tmp9Result = closure_10(tmp11, obj9);
    const tmp2Result = tmp2(tmp3[16]);
  }
  const obj4 = channelId(stateFromStores1[13]);
}));
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(5);
  const tmp2 = closure_12();
  if (cResult[0] !== tmp2.guildHistorySeparator) {
    const obj2 = { style: tmp2.guildHistorySeparator };
    const tmp6 = v65535(hasOwnProperty, obj2);
    cResult[0] = tmp2.guildHistorySeparator;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === tmp2.guildHistorySeparatorWrapper) {
    if (cResult[3] === tmp3) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = v65535(hasOwnProperty, { style: tmp2.guildHistorySeparatorWrapper, children: tmp3 });
  cResult[2] = tmp2.guildHistorySeparatorWrapper;
  cResult[3] = tmp3;
  cResult[4] = tmp8;
  tmp7 = tmp8;
  const obj3 = { style: tmp2.guildHistorySeparatorWrapper, children: tmp3 };
}) : (() => {
  const tmp = closure_12();
  const obj = { style: tmp.guildHistorySeparatorWrapper, children: v65535(hasOwnProperty, { style: tmp.guildHistorySeparator }) };
  return v65535(hasOwnProperty, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadUnreadServers.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((selectedGuildId) => {
  const cResult = selectedGuildId(unreadPrivateChannelIds[10]).c(28);
  selectedGuildId = selectedGuildId.selectedGuildId;
  const setSelectedGuild = selectedGuildId.setSelectedGuild;
  unreadPrivateChannelIds = selectedGuildId.unreadPrivateChannelIds;
  const unreadGuilds = selectedGuildId.unreadGuilds;
  const guildHistory = selectedGuildId.guildHistory;
  const visible = selectedGuildId.visible;
  closure_12();
  let obj = selectedGuildId(unreadPrivateChannelIds[10]);
  const categoryStyles = selectedGuildId(unreadPrivateChannelIds[21]).useCategoryStyles();
  const width = setSelectedGuild(unreadPrivateChannelIds[22])().width;
  unreadGuilds.useRef(-1);
  if (cResult[0] === selectedGuildId) {
    if (cResult[1] === setSelectedGuild) {
      let tmp4 = cResult[2];
    }
    onGuildSelect = tmp4;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor() {
          return () => clearTimeout(ref.current);
        }
      }
      const items = [];
      cResult[3] = T;
      cResult[4] = items;
      let tmp7 = items;
    } else {
      class T {
        constructor() {
          return () => clearTimeout(ref.current);
        }
      }
      tmp7 = cResult[4];
    }
    const effect = obj3.useEffect(T, tmp7);
    obj3.useRef(null);
    if (cResult[5] !== visible) {
      class H {
        constructor() {
          if (visible) {
            tmp = closure_8;
            current = closure_8.current;
            tmp2 = null;
            if (current != null) {
              flag = false;
              scrollToTopResult = current.scrollToTop(false);
            }
          }
          return;
        }
      }
      const items1 = [visible];
      cResult[5] = visible;
      cResult[6] = H;
      cResult[7] = items1;
      let tmp12 = items1;
    } else {
      class H {
        constructor() {
          if (visible) {
            tmp = closure_8;
            current = closure_8.current;
            tmp2 = null;
            if (current != null) {
              flag = false;
              scrollToTopResult = current.scrollToTop(false);
            }
          }
          return;
        }
      }
      tmp12 = cResult[7];
    }
    const effect1 = obj3.useEffect(H, tmp12);
    if (cResult[8] === guildHistory) {
      class H {
        constructor() {
          if (visible) {
            tmp = closure_8;
            current = closure_8.current;
            tmp2 = null;
            if (current != null) {
              flag = false;
              scrollToTopResult = current.scrollToTop(false);
            }
          }
          return;
        }
      }
    }
    class A {
      constructor(arg0, arg1) {
        if (0 === selectedGuildId) {
          tmp11 = unreadPrivateChannelIds;
          tmp12 = unreadPrivateChannelIds[arg1];
          tmp13 = null;
          tmp14 = null != tmp12;
          if (tmp14) {
            tmp15 = jsx;
            tmp16 = closure_14;
            obj1 = { channelId: null };
            obj1.channelId = tmp12;
            tmp14 = jsx(closure_14, obj1);
          }
          return tmp14;
        } else {
          num = 1;
          if (selectedGuildId >= 1) {
            if (1 === selectedGuildId) {
              tmp4 = unreadGuilds;
              tmp3 = unreadGuilds[arg1];
            } else {
              tmp2 = guildHistory;
              tmp3 = guildHistory[arg1];
            }
            tmp5 = null;
            tmp6 = null != tmp3;
            if (tmp6) {
              tmp7 = jsx;
              tmp8 = closure_13;
              obj = { guildId: null, selected: null, onGuildSelect: null };
              obj.guildId = tmp3;
              tmp9 = selectedGuildId;
              obj.selected = selectedGuildId === tmp3;
              tmp10 = closure_7;
              obj.onGuildSelect = closure_7;
              tmp6 = jsx(closure_13, obj);
            }
            return tmp6;
          } else {
            tmp = null;
            return null;
          }
        }
      }
    }
    cResult[8] = guildHistory;
    cResult[9] = tmp4;
    cResult[10] = selectedGuildId;
    cResult[11] = unreadGuilds;
    cResult[12] = unreadPrivateChannelIds;
    cResult[13] = A;
  }
  const fn = function l(id) {
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
  };
  cResult[0] = selectedGuildId;
  cResult[1] = setSelectedGuild;
  cResult[2] = fn;
  tmp4 = fn;
  let obj2 = selectedGuildId(unreadPrivateChannelIds[21]);
}) : ((selectedGuildId) => {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const setSelectedGuild = selectedGuildId.setSelectedGuild;
  let prop = selectedGuildId.unreadPrivateChannelIds;
  let unreadGuilds = selectedGuildId.unreadGuilds;
  let guildHistory = selectedGuildId.guildHistory;
  const visible = selectedGuildId.visible;
  let list = closure_12();
  let AnimatedFastList = selectedGuildId;
  let tmp = prop;
  const categoryStyles = selectedGuildId(prop[21]).useCategoryStyles();
  unreadGuilds.useRef(-1);
  const items = [setSelectedGuild, selectedGuildId];
  onGuildSelect = unreadGuilds.useCallback((id) => {
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
        tmp14 = v65535(closure_14, obj2);
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
        tmp6 = v65535(closure_13, obj);
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
  let obj = selectedGuildId(prop[21]);
  const tmp11 = visible;
  let renderCategoryItem = AnimatedFastList(tmp[21]).renderCategoryItem;
  const intl = AnimatedFastList(tmp[24]).intl;
  const string = intl.string;
  let t = AnimatedFastList(tmp[24]).t;
  if (unreadGuilds.length > 0 || prop.length > 0) {
    let stringResult = string(t.xSY9BH);
  } else {
    stringResult = string(t.kCt2zG);
  }
  t = [renderCategoryItem({ name: stringResult, styles: categoryStyles }), ];
  renderCategoryItem = closure_10;
  AnimatedFastList = AnimatedFastList(tmp[25]).AnimatedFastList;
  const obj3 = { ref, style: null, horizontal: true, renderItem: callback1, renderSection: renderHistorySection, sectionSize: length, sections: null, itemSize: 58, headerSize: 19, footerSize: 19, chunkBase: setSelectedGuild(prop[22])().width, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false, stickySectionsVariant: "disabled", keyboardShouldPersistTaps: "always" };
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
  const AnimatedFastListResult = AnimatedFastList(tmp[21]);
}));