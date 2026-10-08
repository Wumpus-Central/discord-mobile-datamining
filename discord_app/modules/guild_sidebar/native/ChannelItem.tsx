// === Module 16353: ChannelItem ===

// Module 16353 (ChannelItem)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import FastImageDefault from "FastImage" /* 6164 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 8134 */;
import BookCheckIcon2 from "BookCheckIcon" /* 8178 */;
import BaseChannelItem from "BaseChannelItem" /* 12104 */;
import _modDef16354 from "module_16354" /* 16354 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 5106 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

require = fn;
function getChannelMode(selected) {
  ({ unread, channel } = selected);
  if (selected.selected) {
    const ChannelModes = BaseChannelItem.ChannelModes;
    if (!isGuildVocalResult) {
      const SELECTED = ChannelModes.SELECTED;
    }
    isGuildVocalResult = channel.isGuildVocal();
  } else {
    if (tmp2) {
      let DEFAULT = BaseChannelItem.ChannelModes.LOCKED;
    } else if (tmp) {
      DEFAULT = BaseChannelItem.ChannelModes.MUTED;
    } else if (unread) {
      if (selected.resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
        let UNREAD_LESS_IMPORTANT = BaseChannelItem.ChannelModes.UNREAD_IMPORTANT;
      } else {
        UNREAD_LESS_IMPORTANT = BaseChannelItem.ChannelModes.UNREAD_LESS_IMPORTANT;
      }
    } else {
      DEFAULT = BaseChannelItem.ChannelModes.DEFAULT;
    }
    return DEFAULT;
  }
}
let closure_3 = ["channel", "subtitle", "hideIcon", "children", "textStyle", "channelInfo", "onPress"];
let closure_4 = ["channel", "subtitle", "hideIcon", "children", "textStyle", "channelInfo", "onPress"];
const View = fn(17).View;
const Constants = fn(1085);
const ChannelTypes = Constants.ChannelTypes;
const Routes = Constants.Routes;
const StaticChannelRoute = fn(2070).StaticChannelRoute;
const UnreadSetting = fn(5972).UnreadSetting;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let items = [, ];
({ GUILD_VOICE: arr[0], GUILD_STAGE_VOICE: arr[1] } = ChannelTypes);
const set = new Set(items);
const createStyles = fn(5090);
let obj = { channelIconLive: { tintColor: nativeDefault.unsafe_rawColors.GREEN_360 }, dmAvatar: { marginRight: 8 }, avatarStatus: null, groupDmAvatar: null, channelInfoContainer: null, avatarStatusSelected: null };
let obj3 = { tintColor: nativeDefault.unsafe_rawColors.GREEN_360 };
obj.avatarStatus = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.groupDmAvatar = { width: 20, height: 20, borderRadius: 10, marginRight: 8 };
obj.channelInfoContainer = { paddingStart: 4 };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.avatarStatusSelected = { backgroundColor: fn(5974).DARK_393C42_LIGHT_DEE0E4 };
let closure_17 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelIcon(arg0) {
  const cResult = c.c(24);
  const tmp4 = closure_17();
  ({ channel, locked, isChannelLive, selected, mode } = arg0);
  if (channel.type === ChannelTypes.DM) {
    if (cResult[0] !== channel) {
      const recipientId = channel.getRecipientId();
      cResult[0] = channel;
      cResult[1] = recipientId;
      let tmp28 = recipientId;
    } else {
      tmp28 = cResult[1];
    }
    if (selected == null) {
      selected = false;
    }
    if (cResult[2] === tmp28) {
      if (cResult[3] === selected) {
        let tmp31 = cResult[4];
      }
      return tmp31;
    }
    const obj4 = { userId: tmp28, selected };
    const tmp34 = state(closure_20, obj4);
    cResult[2] = tmp28;
    cResult[3] = selected;
    cResult[4] = tmp34;
    tmp31 = tmp34;
  } else {
    if (channel.type === tmp6.GROUP_DM) {
      if (cResult[5] !== channel) {
        const obj5 = { id: null, icon: null, applicationId: null, size: 20 };
        ({ id: obj3.id, icon: obj3.icon } = channel);
        obj5.applicationId = channel.getApplicationId();
        const channelIconSource = AvatarUtilsDefault.getChannelIconSource(obj5);
        cResult[5] = channel;
        cResult[6] = channelIconSource;
        let tmp7 = channelIconSource;
      } else {
        tmp7 = cResult[6];
      }
      if (null != tmp7) {
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp4.groupDmAvatar) {
            let tmp24 = cResult[9];
          }
          return tmp24;
        }
        const obj6 = { style: tmp4.groupDmAvatar, source: tmp7 };
        const tmp27 = state(FastImageDefault, obj6);
        cResult[7] = tmp7;
        cResult[8] = tmp4.groupDmAvatar;
        cResult[9] = tmp27;
        tmp24 = tmp27;
      }
    }
    if (tmp5) {
      let tmp11 = _modDef16354;
      let BookCheckIcon = BookCheckIcon2.BookCheckIcon;
    } else {
      if (cResult[10] === channel) {
        if (cResult[11] === locked) {
          tmp11 = cResult[12];
        }
        if (cResult[13] === channel) {
          if (cResult[14] === locked) {
            BookCheckIcon = cResult[15];
          }
        }
        const obj7 = { isRulesChannel: false, locked };
        const channelIconComponent = utils_ChannelUtils.getChannelIconComponent(channel, obj7);
        cResult[13] = channel;
        cResult[14] = locked;
        cResult[15] = channelIconComponent;
        BookCheckIcon = channelIconComponent;
        const tmpResult = utils_ChannelUtils;
      }
      const obj8 = { isRulesChannel: false, locked };
      const channelIcon = utils_ChannelUtils.getChannelIcon(channel, obj8);
      cResult[10] = channel;
      cResult[11] = locked;
      cResult[12] = channelIcon;
      tmp11 = channelIcon;
      const tmpResult2 = utils_ChannelUtils;
    }
    if (isChannelLive) {
      const channelIconLive = tmp4.channelIconLive;
    }
    if (cResult[16] !== BookCheckIcon) {
      if (null != BookCheckIcon) {
        const obj9 = { IconComponent: BookCheckIcon };
        let obj10 = obj9;
      } else {
        obj10 = {};
      }
      cResult[16] = BookCheckIcon;
      cResult[17] = obj10;
    } else {
      if (cResult[18] === tmp11) {
        if (cResult[19] === isChannelLive) {
          if (cResult[20] === mode) {
            if (cResult[21] === channelIconLive) {
              if (cResult[22] === tmp15) {
                let tmp18 = cResult[23];
              }
              return tmp18;
            }
          }
        }
      }
      const obj11 = { mode, source: tmp11, isChannelLive, style: channelIconLive };
      const merged = Object.assign(tmp15);
      const tmp23 = state(BaseChannelItem.BaseChannelIcon, obj11);
      cResult[18] = tmp11;
      cResult[19] = isChannelLive;
      cResult[20] = mode;
      cResult[21] = channelIconLive;
      cResult[22] = cResult[17];
      cResult[23] = tmp23;
      tmp18 = tmp23;
    }
  }
}) : (function ChannelIcon(arg0) {
  const tmp = closure_17();
  ({ channel, locked, isChannelLive, selected } = arg0);
  if (channel.type === ChannelTypes.DM) {
    const obj4 = { userId: channel.getRecipientId(), selected: null };
    if (selected == null) {
      selected = false;
    }
    obj4.selected = selected;
    return state(closure_20, obj4);
  } else {
    if (channel.type === tmp4.GROUP_DM) {
      const obj6 = { id: null, icon: null, applicationId: null, size: 20 };
      ({ id: obj2.id, icon: obj2.icon } = channel);
      obj6.applicationId = channel.getApplicationId();
      const channelIconSource = AvatarUtilsDefault.getChannelIconSource(obj6);
      if (null != channelIconSource) {
        const obj7 = { style: tmp.groupDmAvatar, source: channelIconSource };
        return state(FastImageDefault, obj7);
      }
    }
    if (tmp2) {
      let tmp12 = _modDef16354;
      let BookCheckIcon = BookCheckIcon2.BookCheckIcon;
      let tmp9 = require;
    } else {
      tmp9 = require;
      const obj8 = { isRulesChannel: false, locked };
      const channelIcon = utils_ChannelUtils.getChannelIcon(channel, obj8);
      const obj9 = { isRulesChannel: false, locked };
      BookCheckIcon = utils_ChannelUtils.getChannelIconComponent(channel, obj9);
      tmp12 = channelIcon;
    }
    const obj10 = { mode: tmp3, source: tmp12, isChannelLive, style: null };
    let channelIconLive;
    if (isChannelLive) {
      channelIconLive = tmp.channelIconLive;
    }
    obj10.style = channelIconLive;
    if (null != BookCheckIcon) {
      const obj11 = { IconComponent: BookCheckIcon };
      let obj19 = obj11;
    } else {
      obj19 = {};
    }
    const merged = Object.assign(obj19);
    return state(tmp9(12104).BaseChannelIcon, obj10);
  }
});
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function DMChannelIcon(userId) {
  const cResult = userId(576).c(18);
  userId = userId.userId;
  let avatarStatusSelected = userId.selected;
  const tmp4 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function l() {
      return UserStore.getUser(userId);
    };
    const items1 = [userId];
    cResult[1] = userId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = userId(576);
  const stateFromStores = userId(504).useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PresenceStore];
    cResult[4] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== userId) {
    const fn2 = function v() {
      return { status: PresenceStore.getStatus(userId), isMobileOnline: PresenceStore.isMobileOnline(userId), isVROnline: PresenceStore.isVROnline(userId) };
    };
    const items3 = [userId];
    cResult[5] = userId;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp13 = items3;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult = userId(504);
  const stateFromStoresObject = userId(504).useStateFromStoresObject(tmp10, tmp12, tmp13);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  if (avatarStatusSelected) {
    avatarStatusSelected = tmp4.avatarStatusSelected;
  }
  if (cResult[8] === tmp4.avatarStatus) {
    if (cResult[9] === avatarStatusSelected) {
      let tmp15 = cResult[10];
    }
    if (cResult[11] === isMobileOnline) {
      if (cResult[12] === isVROnline) {
        if (cResult[13] === status) {
          if (cResult[14] === tmp4.dmAvatar) {
            if (cResult[15] === tmp15) {
              if (cResult[16] === stateFromStores) {
                let tmp16 = cResult[17];
              }
              return tmp16;
            }
          }
        }
      }
    }
    const obj2 = { user: stateFromStores, guildId: "o", size: tmp(1200).AvatarSizes.XSMALL_20, style: tmp4.dmAvatar, status, isMobileOnline, isVROnline, statusStyle: tmp15 };
    const tmp18 = closure_14(tmp(1200).Avatar, obj2);
    cResult[11] = isMobileOnline;
    cResult[12] = isVROnline;
    cResult[13] = status;
    cResult[14] = tmp4.dmAvatar;
    cResult[15] = tmp15;
    cResult[16] = stateFromStores;
    cResult[17] = tmp18;
    tmp16 = tmp18;
  }
  const items4 = [tmp4.avatarStatus, avatarStatusSelected];
  cResult[8] = tmp4.avatarStatus;
  cResult[9] = avatarStatusSelected;
  cResult[10] = items4;
  tmp15 = items4;
  const tmpResult2 = userId(504);
}) : (function DMChannelIcon(userId) {
  userId = userId.userId;
  let avatarStatusSelected = userId.selected;
  const tmp = closure_17();
  const items = [UserStore];
  const items1 = [userId];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const obj = userId(504);
  const items2 = [PresenceStore];
  const items3 = [userId];
  const stateFromStoresObject = userId(504).useStateFromStoresObject(items2, () => ({ status: PresenceStore.getStatus(userId), isMobileOnline: PresenceStore.isMobileOnline(userId), isVROnline: PresenceStore.isVROnline(userId) }), items3);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = { user: stateFromStores, guildId: "o", size: userId(1200).AvatarSizes.XSMALL_20, style: tmp.dmAvatar, status, isMobileOnline, isVROnline, statusStyle: "hash" };
  const items4 = [tmp.avatarStatus, ];
  if (avatarStatusSelected) {
    avatarStatusSelected = tmp.avatarStatusSelected;
  }
  items4[1] = avatarStatusSelected;
  obj3.statusStyle = items4;
  return closure_14(userId(1200).Avatar, obj3);
});
ReactCompilerGating = fn(558);
let obj5 = { backgroundColor: fn(5974).DARK_393C42_LIGHT_DEE0E4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelItem.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelItem(channel) {
  const cResult = require("c").c(41);
  const tmp4 = closure_17();
  if (cResult[0] !== channel) {
    channel = channel.channel;
    _require = channel;
    ({ subtitle, hideIcon, children, textStyle, channelInfo, onPress } = channel);
    importDefault = onPress;
    const tmp15 = _objectWithoutProperties(channel, closure_3);
    cResult[0] = channel;
    cResult[1] = channel;
    cResult[2] = channelInfo;
    cResult[3] = children;
    cResult[4] = hideIcon;
    cResult[5] = onPress;
    cResult[6] = tmp15;
    cResult[7] = subtitle;
    cResult[8] = textStyle;
    let tmp12 = textStyle;
    let tmp11 = subtitle;
    let tmp10 = tmp15;
    let tmp8 = hideIcon;
    let tmp7 = children;
    let tmp6 = channelInfo;
  } else {
    _require = cResult[1];
    tmp6 = cResult[2];
    tmp7 = cResult[3];
    tmp8 = cResult[4];
    importDefault = cResult[5];
    tmp10 = cResult[6];
    tmp11 = cResult[7];
    tmp12 = cResult[8];
  }
  let obj = require("c");
  ({ isSubscriptionGated, needSubscriptionToAccess } = require("useChannelRoleSubscriptionStatus")(tmp5.id));
  if (cResult[9] !== channel) {
    const tmp20 = getChannelMode(channel);
    cResult[9] = channel;
    cResult[10] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] === tmp5.guild_id) {
    if (cResult[12] === tmp5.type) {
      if (cResult[13] === needSubscriptionToAccess) {
        if (cResult[14] === onPress) {
          let tmp21 = cResult[15];
        }
        if (cResult[16] === tmp6) {
          if (cResult[17] === isSubscriptionGated) {
            if (cResult[18] === needSubscriptionToAccess) {
              if (cResult[19] === tmp4) {
                let tmp22 = cResult[20];
              }
              const tmp29 = tmp18 === tmp(needSubscriptionToAccess[13]).ChannelModes.UNREAD_IMPORTANT || tmp18 === tmp(needSubscriptionToAccess[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
              if (cResult[21] !== tmp5) {
                const channelName = tmp(needSubscriptionToAccess[26]).computeChannelName(tmp5, UserStore, RelationshipStore);
                cResult[21] = tmp5;
                cResult[22] = channelName;
                let tmp30 = channelName;
                const tmpResult = tmp(needSubscriptionToAccess[26]);
              } else {
                tmp30 = cResult[22];
              }
              if (cResult[23] === tmp18) {
                if (cResult[24] === tmp11) {
                  if (cResult[25] === tmp30) {
                    if (cResult[26] === tmp12) {
                      let tmp34 = cResult[27];
                    }
                    if (cResult[28] === tmp18) {
                      if (cResult[29] === channel) {
                        let tmp37 = cResult[30];
                      }
                      if (cResult[31] === tmp7) {
                        if (cResult[32] === tmp21) {
                          if (cResult[33] === tmp8) {
                            if (cResult[34] === tmp18) {
                              if (cResult[35] === tmp10) {
                                if (cResult[36] === tmp29) {
                                  if (cResult[37] === tmp34) {
                                    if (cResult[38] === tmp37) {
                                      if (cResult[39] === tmp22) {
                                        let tmp44 = cResult[40];
                                      }
                                      return tmp44;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj2 = { mode: tmp18, unread: tmp29, hideIcon: tmp8, name: tmp34, icon: tmp37, channelInfo: tmp22, onPress: tmp21 };
                      const merged = Object.assign(tmp10);
                      obj2.children = tmp7;
                      const tmp50 = closure_14(tmp16(needSubscriptionToAccess[13]), obj2);
                      cResult[31] = tmp7;
                      cResult[32] = tmp21;
                      cResult[33] = tmp8;
                      cResult[34] = tmp18;
                      cResult[35] = tmp10;
                      cResult[36] = tmp29;
                      cResult[37] = tmp34;
                      cResult[38] = tmp37;
                      cResult[39] = tmp22;
                      cResult[40] = tmp50;
                      tmp44 = tmp50;
                      const tmp16Result = tmp16(needSubscriptionToAccess[13]);
                    }
                    const obj3 = {};
                    const merged1 = Object.assign(channel);
                    obj3.mode = tmp18;
                    const tmp43 = closure_14(closure_19, obj3);
                    cResult[28] = tmp18;
                    cResult[29] = channel;
                    cResult[30] = tmp43;
                    tmp37 = tmp43;
                  }
                }
              }
              const obj4 = { mode: tmp18, name: tmp30, subtitle: tmp11, textStyle: tmp12 };
              const tmp36 = closure_14(tmp(needSubscriptionToAccess[13]).BaseChannelName, obj4);
              cResult[23] = tmp18;
              cResult[24] = tmp11;
              cResult[25] = tmp30;
              cResult[26] = tmp12;
              cResult[27] = tmp36;
              tmp34 = tmp36;
            }
          }
        }
        if (null != tmp6) {
          const obj5 = { style: tmp4.channelInfoContainer, children: null };
          const items = [tmp6, ];
          let tmp27 = null;
          if (isSubscriptionGated) {
            const obj6 = { locked: needSubscriptionToAccess };
            tmp27 = closure_14(tmp16(needSubscriptionToAccess[25]), obj6);
          }
          items[1] = tmp27;
          obj5.children = items;
          let tmp25Result = closure_15(View, obj5);
        } else {
          tmp25Result = null;
        }
        cResult[16] = tmp6;
        cResult[17] = isSubscriptionGated;
        cResult[18] = needSubscriptionToAccess;
        cResult[19] = tmp4;
        cResult[20] = tmp25Result;
        tmp22 = tmp25Result;
      }
    }
  }
  function handlePress(arg0) {
    if (needSubscriptionToAccess) {
      if (set.has(type.type)) {
        router_utils.transitionTo(Routes.CHANNEL(type.guild_id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
      }
    }
    if (closure_1 != null) {
      tmp3(arg0);
    }
  }
  cResult[11] = tmp5.guild_id;
  cResult[12] = tmp5.type;
  cResult[13] = needSubscriptionToAccess;
  cResult[14] = onPress;
  cResult[15] = handlePress;
  tmp21 = handlePress;
  const tmp17 = require("useChannelRoleSubscriptionStatus")(tmp5.id);
}) : (function ChannelItem(channel) {
  channel = channel.channel;
  ({ channelInfo, onPress: importDefault } = channel);
  ({ subtitle, hideIcon, children, textStyle } = channel);
  const tmp = closure_17();
  const tmp2 = _objectWithoutProperties(channel, closure_4);
  ({ isSubscriptionGated, needSubscriptionToAccess } = require("useChannelRoleSubscriptionStatus")(channel.id));
  const tmp6 = getChannelMode(channel);
  if (null != channelInfo) {
    let obj = { style: tmp.channelInfoContainer, children: null };
    const items = [channelInfo, ];
    let tmp10 = null;
    if (isSubscriptionGated) {
      const obj2 = { locked: needSubscriptionToAccess };
      tmp10 = closure_14(require("GuildRoleSubscriptionGatedChannelIcon"), obj2);
    }
    items[1] = tmp10;
    obj.children = items;
    let tmp8Result = closure_15(View, obj);
  } else {
    tmp8Result = null;
  }
  const obj3 = { mode: tmp6, unread: null, hideIcon: null, name: null, icon: null, channelInfo: null, onPress: null };
  const tmp5 = require("useChannelRoleSubscriptionStatus")(channel.id);
  const tmp3Result = require("BaseChannelItem");
  obj3.unread = tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_IMPORTANT || tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
  obj3.hideIcon = hideIcon;
  const obj4 = { mode: tmp6, name: null, subtitle: null, textStyle: null };
  const tmp15 = tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_IMPORTANT || tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
  obj4.name = channel(needSubscriptionToAccess[26]).computeChannelName(channel, UserStore, RelationshipStore);
  obj4.subtitle = subtitle;
  obj4.textStyle = textStyle;
  obj3.name = closure_14(channel(needSubscriptionToAccess[13]).BaseChannelName, obj4);
  const obj5 = {};
  const merged = Object.assign(channel);
  obj5.mode = tmp6;
  obj3.icon = closure_14(closure_19, obj5);
  obj3.channelInfo = tmp8Result;
  obj3.onPress = function handlePress(arg0) {
    if (needSubscriptionToAccess) {
      if (set.has(channel.type)) {
        router_utils.transitionTo(Routes.CHANNEL(channel.guild_id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
      }
    }
    if (importDefault != null) {
      tmp3(arg0);
    }
  };
  const merged1 = Object.assign(tmp2);
  obj3.children = children;
  return closure_14(tmp3Result, obj3);
}));
export { getChannelMode };