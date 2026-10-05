// === Module 16136: HubSidebar ===

// Module 16136 (HubSidebar)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9481 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 11936 */;
import BaseChannelItem from "BaseChannelItem" /* 12016 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;

const BaseChannelItemDefault = BaseChannelItem;

require = fn;
const View = fn(17).View;
const InstantInviteSources = fn(1085).InstantInviteSources;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { marginVertical: fn(11697).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md }, row: { flex: 1 } };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((active) => {
  const cResult = c.c(16);
  ({ IconComponent, label, handleItemClick, unreadCount } = active);
  const tmp4 = closure_9();
  const ChannelModes = BaseChannelItem.ChannelModes;
  const tmp5 = active.active ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  if (cResult[0] === tmp5) {
    if (cResult[1] === label) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === IconComponent) {
      if (cResult[4] === tmp5) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] !== unreadCount) {
        let tmp12 = null;
        if (null != unreadCount) {
          const obj2 = { value: unreadCount };
          tmp12 = React5(native.Badge, obj2);
        }
        cResult[6] = unreadCount;
        cResult[7] = tmp12;
        let tmp11 = tmp12;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === tmp5) {
        if (cResult[9] === handleItemClick) {
          if (cResult[10] === label) {
            if (cResult[11] === tmp4.container) {
              if (cResult[12] === tmp6) {
                if (cResult[13] === tmp8) {
                  if (cResult[14] === tmp11) {
                    let tmp14 = cResult[15];
                  }
                  return tmp14;
                }
              }
            }
          }
        }
      }
      const obj3 = { style: tmp4.container, accessibilityLabel: label, accessibilityRole: "menuitem", onPress: handleItemClick, disableHighlightOnPress: true, mode: tmp5, name: tmp6, icon: tmp8, channelInfo: tmp11 };
      const tmp17 = React5(BaseChannelItemDefault, obj3);
      cResult[8] = tmp5;
      cResult[9] = handleItemClick;
      cResult[10] = label;
      cResult[11] = tmp4.container;
      cResult[12] = tmp6;
      cResult[13] = tmp8;
      cResult[14] = tmp11;
      cResult[15] = tmp17;
      tmp14 = tmp17;
    }
    const obj4 = { mode: tmp5, IconComponent };
    const tmp10 = React5(BaseChannelItem.BaseChannelIcon, obj4);
    cResult[3] = IconComponent;
    cResult[4] = tmp5;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  const tmp7 = React5(BaseChannelItem.BaseChannelName, { name: label, mode: tmp5 });
  cResult[0] = tmp5;
  cResult[1] = label;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((arg0) => {
  ({ label, unreadCount } = arg0);
  ({ IconComponent, handleItemClick, active } = arg0);
  const ChannelModes = BaseChannelItem.ChannelModes;
  if (active) {
    let DEFAULT = ChannelModes.SELECTED;
    let tmp5 = require;
  } else {
    DEFAULT = ChannelModes.DEFAULT;
    tmp5 = require;
  }
  const obj = { style: closure_9().container, accessibilityLabel: label, accessibilityRole: "menuitem", onPress: handleItemClick, disableHighlightOnPress: true, mode: DEFAULT, name: null, icon: null, channelInfo: null };
  const tmp = closure_9();
  obj.name = React5(tmp5(12016).BaseChannelName, { name: label, mode: DEFAULT });
  obj.icon = React5(tmp5(12016).BaseChannelIcon, { mode: DEFAULT, IconComponent });
  let tmp6Result = null;
  if (null != unreadCount) {
    const obj2 = { value: unreadCount };
    tmp6Result = React5(tmp5(1188).Badge, obj2);
  }
  obj.channelInfo = tmp6Result;
  return React5(BaseChannelItemDefault, obj);
});
ReactCompilerGating = fn(558);
let obj3 = { marginVertical: fn(11697).CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
const size = fn(2);
let result = size.fileFinishedImporting("modules/hub/native/components/HubSidebar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const cResult = guild(stateFromStoresObject[10]).c(35);
  guild = guild.guild;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function b() {
      return GuildChannelStore.getDefaultChannel(guild.id);
    };
    const items1 = [guild.id];
    cResult[1] = guild.id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = guild(stateFromStoresObject[10]);
  const stateFromStores = guild(stateFromStoresObject[13]).useStateFromStores(first, tmp6, tmp7);
  closure_9();
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildChannelStore];
    cResult[4] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== guild.id) {
    const fn2 = function _() {
      return GuildChannelStore.getChannels(guild.id);
    };
    cResult[5] = guild.id;
    cResult[6] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
  }
  const tmpResult = guild(stateFromStoresObject[13]);
  stateFromStoresObject = guild(stateFromStoresObject[13]).useStateFromStoresObject(tmp10, tmp12);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [SelectedChannelStore];
    cResult[7] = items3;
    let tmp14 = items3;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] !== stateFromStores) {
    class R {
      constructor() {
        tmp2 = null != closure_1;
        if (tmp2) {
          tmp3 = closure_5;
          tmp2 = closure_5.getChannelId() === tmp.id;
        }
        return tmp2;
      }
    }
    cResult[8] = stateFromStores;
    cResult[9] = R;
  } else {
    class R {
      constructor() {
        tmp2 = null != closure_1;
        if (tmp2) {
          tmp3 = closure_5;
          tmp2 = closure_5.getChannelId() === tmp.id;
        }
        return tmp2;
      }
    }
  }
  const tmpResult4 = guild(stateFromStoresObject[13]);
  const stateFromStores1 = guild(stateFromStoresObject[13]).useStateFromStores(tmp14, R);
  const tmpResult5 = guild(stateFromStoresObject[13]);
  const hubUnreadCount = guild(stateFromStoresObject[14]).useHubUnreadCount(stateFromStores);
  if (null == stateFromStores) {
    class R {
      constructor() {
        tmp2 = null != closure_1;
        if (tmp2) {
          tmp3 = closure_5;
          tmp2 = closure_5.getChannelId() === tmp.id;
        }
        return tmp2;
      }
    }
  } else {
    class R {
      constructor() {
        tmp2 = null != closure_1;
        if (tmp2) {
          tmp3 = closure_5;
          tmp2 = closure_5.getChannelId() === tmp.id;
        }
        return tmp2;
      }
    }
    if (guild.flashList) {
      class R {
        constructor() {
          tmp2 = null != closure_1;
          if (tmp2) {
            tmp3 = closure_5;
            tmp2 = closure_5.getChannelId() === tmp.id;
          }
          return tmp2;
        }
      }
    }
    if (cResult[10] !== guild) {
      class R {
        constructor() {
          tmp2 = null != closure_1;
          if (tmp2) {
            tmp3 = closure_5;
            tmp2 = closure_5.getChannelId() === tmp.id;
          }
          return tmp2;
        }
      }
      const obj2 = { guild };
      const tmp21 = closure_7(stateFromStores(tmp2[15]), obj2);
      cResult[10] = guild;
      cResult[11] = tmp21;
    } else {
      class R {
        constructor() {
          tmp2 = null != closure_1;
          if (tmp2) {
            tmp3 = closure_5;
            tmp2 = closure_5.getChannelId() === tmp.id;
          }
          return tmp2;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor() {
          tmp2 = null != closure_1;
          if (tmp2) {
            tmp3 = closure_5;
            tmp2 = closure_5.getChannelId() === tmp.id;
          }
          return tmp2;
        }
      }
      const stringResult = obj7.string(tmp(tmp2[16]).t.K50GHd);
      cResult[12] = stringResult;
      const tmp22 = stringResult;
    } else {
      class R {
        constructor() {
          tmp2 = null != closure_1;
          if (tmp2) {
            tmp3 = closure_5;
            tmp2 = closure_5.getChannelId() === tmp.id;
          }
          return tmp2;
        }
      }
    }
    if (cResult[13] !== stateFromStores.id) {
      class O {
        constructor() {
          obj = closure_0(closure_2[17]);
          transitionToChannelResult = obj.transitionToChannel(closure_1.id);
          return;
        }
      }
      cResult[13] = stateFromStores.id;
      cResult[14] = O;
    } else {
      class O {
        constructor() {
          obj = closure_0(closure_2[17]);
          transitionToChannelResult = obj.transitionToChannel(closure_1.id);
          return;
        }
      }
    }
    if (cResult[15] === stateFromStores1) {
      class O {
        constructor() {
          obj = closure_0(closure_2[17]);
          transitionToChannelResult = obj.transitionToChannel(closure_1.id);
          return;
        }
      }
    }
    const obj3 = { active: stateFromStores1, IconComponent: tmp(tmp2[18]).CompassIcon, label: tmp22, handleItemClick: O, unreadCount: hubUnreadCount };
    const tmp28 = closure_7(closure_10, obj3);
    cResult[15] = stateFromStores1;
    cResult[16] = O;
    cResult[17] = hubUnreadCount;
    cResult[18] = tmp28;
  }
  const tmpResult6 = guild(stateFromStoresObject[14]);
}) : ((guild) => {
  guild = guild.guild;
  const items = [GuildChannelStore];
  const items1 = [guild.id];
  const stateFromStores = guild(504).useStateFromStores(items, () => GuildChannelStore.getDefaultChannel(guild.id), items1);
  const obj = guild(504);
  const tmp4 = closure_9();
  const items2 = [GuildChannelStore];
  dependencyMap = guild(504).useStateFromStoresObject(items2, () => GuildChannelStore.getChannels(guild.id));
  const obj2 = guild(504);
  const items3 = [SelectedChannelStore];
  const stateFromStores1 = guild(504).useStateFromStores(items3, () => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = SelectedChannelStore.getChannelId() === tmp.id;
    }
    return tmp2;
  });
  guild(16137);
  let tmp9Result = null;
  if (null != stateFromStores) {
    let row = null;
    if (guild.flashList) {
      row = tmp4.row;
    }
    const obj4 = { style: row, children: null };
    const obj5 = { guild };
    const items4 = [closure_7(stateFromStores(16138), obj5), , , ];
    const obj6 = { active: stateFromStores1, IconComponent: tmp(15423).CompassIcon, label: null, handleItemClick: null, unreadCount: null };
    const intl = tmp(1126).intl;
    obj6.label = intl.string(tmp(1126).t.K50GHd);
    obj6.handleItemClick = function handleItemClick() {
      transitionToChannel.transitionToChannel(stateFromStores.id);
    };
    obj6.unreadCount = tmp7;
    items4[1] = closure_7(closure_10, obj6);
    const obj7 = { IconComponent: tmp(10978).PlusMediumIcon, label: null, handleItemClick: null };
    const intl2 = tmp(1126).intl;
    obj7.label = intl2.string(tmp(1126).t.emRpdS);
    obj7.handleItemClick = function handleItemClick() {
      return GuildDirectoryAddModalActionCreatorsDefault.open({ directoryGuildName: guild.name, directoryGuildId: guild.id, directoryChannelId: stateFromStores.id });
    };
    items4[2] = closure_7(closure_10, obj7);
    const obj8 = { IconComponent: tmp(4833).UserPlusIcon, label: null, handleItemClick: null };
    const intl3 = tmp(1126).intl;
    obj8.label = intl3.string(tmp(1126).t.MJQOuJ);
    obj8.handleItemClick = function handleItemClick() {
      const result = instant_invite_InstantInviteUtils.handleOpenInviteActionsheet(guild, stateFromStores.id, closure_2, InstantInviteSources.GUILD_HEADER);
    };
    items4[3] = closure_7(closure_10, obj8);
    obj4.children = items4;
    tmp9Result = closure_8(View, obj4);
  }
  return tmp9Result;
});