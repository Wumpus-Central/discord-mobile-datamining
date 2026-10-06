// === Module 16093: ChannelItem ===

// Module 16093 (ChannelItem)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import ReadStateConstants from "ReadStateConstants" /* 5078 */;
import LegacyTokens from "LegacyTokens" /* 5627 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5819 */;
import BookCheckIcon2 from "BookCheckIcon" /* 5866 */;
import FastImageDefault from "FastImage" /* 5981 */;
import BaseChannelItem from "BaseChannelItem" /* 12031 */;
import AssetRegistryDefault from "AssetRegistry" /* 16094 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 4936 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, tmp3, tmp4Result, tmp9, transitionToResult, userId;

let closure_14;
let closure_15;
let obj2;
let obj3;
let obj4;
function getChannelMode(selected) {
  let DEFAULT;
  let channel;
  let unread;
  ({ unread, channel } = selected);
  if (selected.selected) {
    let SELECTED;
    const isGuildVocalResult = channel.isGuildVocal();
    const ChannelModes = BaseChannelItem.ChannelModes;
    if (isGuildVocalResult) {
      SELECTED = unread ? ChannelModes.UNREAD_IMPORTANT : ChannelModes.RELEVANT;
    } else {
      SELECTED = ChannelModes.SELECTED;
    }
    DEFAULT = SELECTED;
  } else if (tmp2) {
    DEFAULT = BaseChannelItem.ChannelModes.LOCKED;
  } else if (tmp) {
    DEFAULT = BaseChannelItem.ChannelModes.MUTED;
  } else if (unread) {
    let UNREAD_LESS_IMPORTANT;
    if (selected.resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES) {
      UNREAD_LESS_IMPORTANT = BaseChannelItem.ChannelModes.UNREAD_IMPORTANT;
    } else {
      UNREAD_LESS_IMPORTANT = BaseChannelItem.ChannelModes.UNREAD_LESS_IMPORTANT;
    }
    DEFAULT = UNREAD_LESS_IMPORTANT;
  } else {
    DEFAULT = BaseChannelItem.ChannelModes.DEFAULT;
  }
  return DEFAULT;
}
let closure_3 = ["channel", "subtitle", "hideIcon", "children", "textStyle", "channelInfo", "onPress"];
let closure_4 = ["channel", "subtitle", "hideIcon", "children", "textStyle", "channelInfo", "onPress"];
const View = react_native.View;
const ChannelTypes = Constants.ChannelTypes;
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const UnreadSetting = ReadStateConstants.UnreadSetting;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let items = [, ];
({ GUILD_VOICE: arr[0], GUILD_STAGE_VOICE: arr[1] } = ChannelTypes);
const set = new Set(items);
let createStyles = createStyles_mod;
let obj = { channelIconLive: obj2, dmAvatar: { marginRight: 8 }, avatarStatus: obj3, groupDmAvatar: { width: 20, height: 20, borderRadius: 10, marginRight: 8 }, channelInfoContainer: { paddingStart: 4 }, avatarStatusSelected: obj4 };
obj2 = { tintColor: nativeDefault.unsafe_rawColors.GREEN_360 };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { backgroundColor: LegacyTokens.DARK_393C42_LIGHT_DEE0E4 };
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let isChannelLive;
  let locked;
  let mode;
  let selected;
  const obj = react2;
  const cResult = obj.c(24);
  const tmp4 = closure_17();
  ({ channel, locked, isChannelLive, selected, mode } = arg0);
  if (channel.type === ChannelTypes.DM) {
    let tmp29;
    if (cResult[0] !== channel) {
      const recipientId = channel.getRecipientId();
      cResult[0] = channel;
      cResult[1] = recipientId;
      tmp29 = recipientId;
    } else {
      tmp29 = cResult[1];
    }
    if (selected == null) {
      selected = false;
    }
    if (cResult[2] === tmp29) {
      let tmp32;
      if (cResult[3] === selected) {
        tmp32 = cResult[4];
      }
      return tmp32;
    }
    const obj3 = { userId: tmp29, selected };
    const tmp35 = authStore2(closure_20, obj3);
    cResult[2] = tmp29;
    cResult[3] = selected;
    cResult[4] = tmp35;
    tmp32 = tmp35;
  } else {
    let tmp12;
    let BookCheckIcon;
    let tmp17;
    if (channel.type === tmp6.GROUP_DM) {
      let tmp7;
      if (cResult[5] !== channel) {
        ({ id: obj2.id, icon: obj2.icon } = channel);
        const obj4 = { id: null, icon: null, applicationId: channel.getApplicationId(), size: 20 };
        const getChannelIconSource = AvatarUtilsDefault.getChannelIconSource;
        AvatarUtilsDefault;
        const channelIconSource = getChannelIconSource(obj4);
        cResult[5] = channel;
        cResult[6] = channelIconSource;
        tmp7 = channelIconSource;
      } else {
        tmp7 = cResult[6];
      }
      if (null != tmp7) {
        if (cResult[7] === tmp7) {
          let tmp25;
          if (cResult[8] === tmp4.groupDmAvatar) {
            tmp25 = cResult[9];
          }
          return tmp25;
        }
        const obj5 = { style: tmp4.groupDmAvatar, source: tmp7 };
        const tmp28 = authStore2(FastImageDefault, obj5);
        cResult[7] = tmp7;
        cResult[8] = tmp4.groupDmAvatar;
        cResult[9] = tmp28;
        tmp25 = tmp28;
      }
    }
    if (tmp5) {
      tmp12 = AssetRegistryDefault;
      BookCheckIcon = BookCheckIcon2.BookCheckIcon;
    } else {
      if (cResult[10] === channel) {
        if (cResult[11] === locked) {
          tmp12 = cResult[12];
        }
        if (cResult[13] === channel) {
          if (cResult[14] === locked) {
            BookCheckIcon = cResult[15];
          }
        }
        const obj6 = { isRulesChannel: false, locked };
        const tmpResult = utils_ChannelUtils;
        const channelIconComponent = tmpResult.getChannelIconComponent(channel, obj6);
        cResult[13] = channel;
        cResult[14] = locked;
        cResult[15] = channelIconComponent;
        BookCheckIcon = channelIconComponent;
      }
      const obj7 = { isRulesChannel: false, locked };
      const tmpResult2 = utils_ChannelUtils;
      const channelIcon = tmpResult2.getChannelIcon(channel, obj7);
      cResult[10] = channel;
      cResult[11] = locked;
      cResult[12] = channelIcon;
      tmp12 = channelIcon;
    }
    let channelIconLive;
    if (isChannelLive) {
      channelIconLive = tmp4.channelIconLive;
    }
    if (cResult[16] !== BookCheckIcon) {
      let obj9;
      if (null != BookCheckIcon) {
        obj9 = { IconComponent: BookCheckIcon };
        const obj8 = { IconComponent: BookCheckIcon };
      } else {
        obj9 = {};
      }
      cResult[16] = BookCheckIcon;
      cResult[17] = obj9;
      tmp17 = obj9;
    } else {
      tmp17 = cResult[17];
    }
    if (cResult[18] === tmp12) {
      if (cResult[19] === isChannelLive) {
        if (cResult[20] === mode) {
          if (cResult[21] === channelIconLive) {
            let tmp19;
            if (cResult[22] === tmp17) {
              tmp19 = cResult[23];
            }
            return tmp19;
          }
        }
      }
    }
    const obj10 = { mode, source: tmp12, isChannelLive, style: channelIconLive };
    const BaseChannelIcon = BaseChannelItem.BaseChannelIcon;
    const merged = Object.assign(tmp17);
    const tmp24 = authStore2(BaseChannelIcon, obj10);
    cResult[18] = tmp12;
    cResult[19] = isChannelLive;
    cResult[20] = mode;
    cResult[21] = channelIconLive;
    cResult[22] = tmp17;
    cResult[23] = tmp24;
    tmp19 = tmp24;
  }
}) : ((arg0) => {
  let channel;
  let channelIconLive;
  let isChannelLive;
  let locked;
  let selected;
  const tmp = closure_17();
  ({ channel, locked, isChannelLive, selected } = arg0);
  if (channel.type === ChannelTypes.DM) {
    const obj3 = { userId: channel.getRecipientId(), selected };
    if (selected == null) {
      selected = false;
    }
    return authStore2(closure_20, obj3);
  } else {
    let tmp13;
    let BookCheckIcon;
    let tmp10;
    let obj10;
    if (channel.type === tmp4.GROUP_DM) {
      const obj = { id: null, icon: null, applicationId: channel.getApplicationId(), size: 20 };
      ({ id: obj.id, icon: obj.icon } = channel);
      const getChannelIconSource = AvatarUtilsDefault.getChannelIconSource;
      AvatarUtilsDefault;
      const channelIconSource = getChannelIconSource(obj);
      if (null != channelIconSource) {
        const obj5 = { style: tmp.groupDmAvatar, source: channelIconSource };
        return authStore2(FastImageDefault, obj5);
      }
    }
    if (tmp2) {
      tmp13 = AssetRegistryDefault;
      BookCheckIcon = BookCheckIcon2.BookCheckIcon;
      tmp10 = require;
    } else {
      tmp10 = require;
      const obj6 = { isRulesChannel: false, locked };
      const obj2 = utils_ChannelUtils;
      const channelIcon = obj2.getChannelIcon(channel, obj6);
      const obj7 = { isRulesChannel: false, locked };
      const obj4 = utils_ChannelUtils;
      BookCheckIcon = obj4.getChannelIconComponent(channel, obj7);
      tmp13 = channelIcon;
    }
    const obj8 = { mode: tmp3, source: tmp13, isChannelLive, style: channelIconLive };
    channelIconLive = undefined;
    const BaseChannelIcon = tmp10(12031).BaseChannelIcon;
    if (isChannelLive) {
      channelIconLive = tmp.channelIconLive;
    }
    if (null != BookCheckIcon) {
      obj10 = { IconComponent: BookCheckIcon };
      const obj9 = { IconComponent: BookCheckIcon };
    } else {
      obj10 = {};
    }
    const merged = Object.assign(obj10);
    return authStore2(BaseChannelIcon, obj8);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let first;
  let isMobileOnline;
  let isVROnline;
  let status;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp7;
  let tmp8;
  let obj = userId(576);
  const cResult = obj.c(18);
  userId = userId.userId;
  let avatarStatusSelected = userId.selected;
  const tmp4 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
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
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = userId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [PresenceStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== userId) {
    const fn2 = function v() {
      const obj = { status: PresenceStore.getStatus(userId), isMobileOnline: PresenceStore.isMobileOnline(userId), isVROnline: PresenceStore.isVROnline(userId) };
      return obj;
    };
    const items3 = [userId];
    cResult[5] = userId;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp13 = items3;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult2 = userId(504);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp10, tmp12, tmp13);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  if (avatarStatusSelected) {
    avatarStatusSelected = tmp4.avatarStatusSelected;
  }
  if (cResult[8] === tmp4.avatarStatus) {
    let tmp15;
    if (cResult[9] === avatarStatusSelected) {
      tmp15 = cResult[10];
    }
    if (cResult[11] === isMobileOnline) {
      if (cResult[12] === isVROnline) {
        if (cResult[13] === status) {
          if (cResult[14] === tmp4.dmAvatar) {
            if (cResult[15] === tmp15) {
              let tmp16;
              if (cResult[16] === stateFromStores) {
                tmp16 = cResult[17];
              }
              return tmp16;
            }
          }
        }
      }
    }
    const obj2 = { user: stateFromStores, guildId: "o", size: userId(1188).AvatarSizes.XSMALL_20, style: tmp4.dmAvatar, status, isMobileOnline, isVROnline, statusStyle: tmp15 };
    const Avatar = tmp(1188).Avatar;
    const tmp18 = closure_14(Avatar, obj2);
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
}) : ((userId) => {
  let isMobileOnline;
  let isVROnline;
  let items4;
  let status;
  userId = userId.userId;
  let avatarStatusSelected = userId.selected;
  const tmp = closure_17();
  let obj = userId(504);
  const items = [UserStore];
  const items1 = [userId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId), items1);
  const items2 = [PresenceStore];
  const items3 = [userId];
  const obj2 = userId(504);
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    const obj = { status: PresenceStore.getStatus(userId), isMobileOnline: PresenceStore.isMobileOnline(userId), isVROnline: PresenceStore.isVROnline(userId) };
    return obj;
  }, items3);
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = { user: stateFromStores, guildId: "o", size: userId(1188).AvatarSizes.XSMALL_20, style: tmp.dmAvatar, status, isMobileOnline, isVROnline, statusStyle: items4 };
  const Avatar = userId(1188).Avatar;
  items4 = [tmp.avatarStatus, ];
  if (avatarStatusSelected) {
    avatarStatusSelected = tmp.avatarStatusSelected;
  }
  items4[1] = avatarStatusSelected;
  return closure_14(Avatar, obj3);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let channelInfo;
  let children;
  let closure_1;
  let hideIcon;
  let isSubscriptionGated;
  let items;
  let needSubscriptionToAccess;
  let onPress;
  let subtitle;
  let textStyle;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp18;
  let tmp6;
  let tmp7;
  let tmp8;
  let type;
  let obj = require("react");
  const cResult = obj.c(41);
  const tmp4 = closure_17();
  if (cResult[0] !== channel) {
    channel = channel.channel;
    _require = channel;
    ({ subtitle, hideIcon, children, textStyle, channelInfo, onPress } = channel);
    importDefault = onPress;
    const tmp15 = _objectWithoutProperties(channel, closure_3);
    cResult[0] = channel;
    cResult[1] = channel;
    class P {
      constructor(arg0) {
        tmp = needSubscriptionToAccess;
        if (tmp) {
          tmp2 = closure_16;
          tmp3 = closure_0;
          if (closure_16.has(closure_0.type)) {
            tmp7 = closure_0;
            tmp8 = closure_2;
            obj = closure_0(closure_2[24]);
            tmp9 = Routes;
            tmp10 = StaticChannelRoute;
            transitionToResult = obj.transitionTo(Routes.CHANNEL(tmp3.guild_id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
          }
          return;
        }
        if (closure_1 != null) {
          tmp5 = channel;
          tmp4Result = tmp4(channel);
        }
        return;
      }
    }
    cResult[3] = children;
    cResult[4] = hideIcon;
    cResult[5] = onPress;
    cResult[6] = tmp15;
    cResult[7] = subtitle;
    cResult[8] = textStyle;
    tmp12 = textStyle;
    tmp11 = subtitle;
    tmp10 = tmp15;
    tmp8 = hideIcon;
    tmp7 = children;
    tmp6 = channelInfo;
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
  const tmp17 = require("useChannelRoleSubscriptionStatus")(tmp5.id);
  ({ isSubscriptionGated, needSubscriptionToAccess } = tmp17);
  if (cResult[9] !== channel) {
    const tmp20 = getChannelMode(channel);
    cResult[9] = channel;
    cResult[10] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[10];
  }
  if (cResult[11] === tmp5.guild_id) {
    if (cResult[12] === tmp5.type) {
      if (cResult[13] === needSubscriptionToAccess) {
        let tmp21;
        let tmp25Result;
        if (cResult[14] === onPress) {
          tmp21 = cResult[15];
        }
        if (cResult[16] === tmp6) {
          if (cResult[17] === isSubscriptionGated) {
            if (cResult[18] === needSubscriptionToAccess) {
              let tmp22;
              let tmp30;
              if (cResult[19] === tmp4) {
                tmp22 = cResult[20];
              }
              const tmp29 = tmp18 === require("BaseChannelItem").ChannelModes.UNREAD_IMPORTANT || tmp18 === require("BaseChannelItem").ChannelModes.UNREAD_LESS_IMPORTANT;
              if (cResult[21] !== tmp5) {
                const tmpResult = require("useChannelName");
                const channelName = tmpResult.computeChannelName(tmp5, UserStore, RelationshipStore);
                cResult[21] = tmp5;
                cResult[22] = channelName;
                tmp30 = channelName;
              } else {
                tmp30 = cResult[22];
              }
              if (cResult[23] === tmp18) {
                if (cResult[24] === tmp11) {
                  if (cResult[25] === tmp30) {
                    let tmp34;
                    if (cResult[26] === tmp12) {
                      tmp34 = cResult[27];
                    }
                    if (cResult[28] === tmp18) {
                      let tmp37;
                      if (cResult[29] === channel) {
                        tmp37 = cResult[30];
                      }
                      if (cResult[31] === tmp7) {
                        if (cResult[32] === tmp21) {
                          if (cResult[33] === tmp8) {
                            if (cResult[34] === tmp18) {
                              if (cResult[35] === tmp10) {
                                if (cResult[36] === tmp29) {
                                  if (cResult[37] === tmp34) {
                                    if (cResult[38] === tmp37) {
                                      let tmp44;
                                      if (cResult[39] === tmp22) {
                                        tmp44 = cResult[40];
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
                      const obj2 = { mode: tmp18, unread: tmp29, hideIcon: tmp8, name: tmp34, icon: tmp37, channelInfo: tmp22, onPress: tmp21, children: tmp7 };
                      const tmp16Result = require("BaseChannelItem");
                      const merged = Object.assign(tmp10);
                      const tmp50 = closure_14(tmp16Result, obj2);
                      class P {
                        constructor(arg0) {
                          tmp = needSubscriptionToAccess;
                          if (tmp) {
                            tmp2 = closure_16;
                            tmp3 = closure_0;
                            if (closure_16.has(closure_0.type)) {
                              tmp7 = closure_0;
                              tmp8 = closure_2;
                              obj = closure_0(closure_2[24]);
                              tmp9 = Routes;
                              tmp10 = StaticChannelRoute;
                              transitionToResult = obj.transitionTo(Routes.CHANNEL(tmp3.guild_id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
                            }
                            return;
                          }
                          if (closure_1 != null) {
                            tmp5 = channel;
                            tmp4Result = tmp4(channel);
                          }
                          return;
                        }
                      }
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
                    }
                    const obj3 = { mode: tmp18 };
                    const merged1 = Object.assign(channel);
                    const tmp43 = closure_14(closure_19, obj3);
                    cResult[28] = tmp18;
                    cResult[29] = channel;
                    cResult[30] = tmp43;
                    tmp37 = tmp43;
                  }
                }
              }
              const obj4 = { mode: tmp18, name: tmp30, subtitle: tmp11, textStyle: tmp12 };
              const tmp36 = closure_14(require("BaseChannelItem").BaseChannelName, obj4);
              cResult[23] = tmp18;
              cResult[24] = tmp11;
              cResult[25] = tmp30;
              class P {
                constructor(arg0) {
                  tmp = needSubscriptionToAccess;
                  if (tmp) {
                    tmp2 = closure_16;
                    tmp3 = closure_0;
                    if (closure_16.has(closure_0.type)) {
                      tmp7 = closure_0;
                      tmp8 = closure_2;
                      obj = closure_0(closure_2[24]);
                      tmp9 = Routes;
                      tmp10 = StaticChannelRoute;
                      transitionToResult = obj.transitionTo(Routes.CHANNEL(tmp3.guild_id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
                    }
                    return;
                  }
                  if (closure_1 != null) {
                    tmp5 = channel;
                    tmp4Result = tmp4(channel);
                  }
                  return;
                }
              }
              cResult[26] = tmp12;
              cResult[27] = tmp36;
              tmp34 = tmp36;
            }
          }
        }
        if (null != tmp6) {
          const obj5 = { style: tmp4.channelInfoContainer, children: items };
          items = [tmp6, ];
          let tmp27 = null;
          if (isSubscriptionGated) {
            const obj6 = { locked: needSubscriptionToAccess };
            tmp27 = closure_14(tmp16(needSubscriptionToAccess[25]), obj6);
          }
          items[1] = tmp27;
          tmp25Result = closure_15(View, obj5);
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
  class P {
    constructor(arg0) {
      tmp = needSubscriptionToAccess;
      if (tmp) {
        tmp2 = closure_16;
        tmp3 = closure_0;
        if (closure_16.has(closure_0.type)) {
          tmp7 = closure_0;
          tmp8 = closure_2;
          obj = closure_0(closure_2[24]);
          tmp9 = Routes;
          tmp10 = StaticChannelRoute;
          transitionToResult = obj.transitionTo(Routes.CHANNEL(tmp3.guild_id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
        }
        return;
      }
      if (closure_1 != null) {
        tmp5 = channel;
        tmp4Result = tmp4(channel);
      }
      return;
    }
  }
  cResult[11] = tmp5.guild_id;
  cResult[12] = tmp5.type;
  cResult[13] = needSubscriptionToAccess;
  cResult[14] = onPress;
  cResult[15] = P;
  tmp21 = P;
}) : ((channel) => {
  let BaseChannelName;
  let channelInfo;
  let children;
  let hideIcon;
  let isSubscriptionGated;
  let items;
  let needSubscriptionToAccess;
  let obj4;
  let obj5;
  let subtitle;
  let textStyle;
  let tmp14Result;
  let tmp8Result;
  channel = channel.channel;
  ({ channelInfo, onPress: importDefault } = channel);
  ({ subtitle, hideIcon, children, textStyle } = channel);
  const tmp = closure_17();
  const tmp2 = _objectWithoutProperties(channel, closure_4);
  const tmp5 = require("useChannelRoleSubscriptionStatus")(channel.id);
  ({ isSubscriptionGated, needSubscriptionToAccess } = tmp5);
  const tmp6 = getChannelMode(channel);
  if (null != channelInfo) {
    let obj = { style: tmp.channelInfoContainer, children: items };
    items = [channelInfo, ];
    let tmp10 = null;
    if (isSubscriptionGated) {
      const obj2 = { locked: needSubscriptionToAccess };
      tmp10 = closure_14(require("GuildRoleSubscriptionGatedChannelIcon"), obj2);
    }
    items[1] = tmp10;
    tmp8Result = closure_15(View, obj);
  } else {
    tmp8Result = null;
  }
  const obj3 = {
    mode: tmp6,
    unread: tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_IMPORTANT || tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_LESS_IMPORTANT,
    hideIcon,
    name: closure_14(BaseChannelName, obj4),
    icon: closure_14(closure_19, obj5),
    channelInfo: tmp8Result,
    onPress(arg0) {
      if (needSubscriptionToAccess) {
        if (set.has(channel.type)) {
          const obj = router_utils;
          obj.transitionTo(Routes.CHANNEL(channel.guild_id, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
        }
      }
      if (importDefault != null) {
        tmp4(arg0);
      }
    },
    children
  };
  const tmp3Result = require("BaseChannelItem");
  obj4 = { mode: tmp6, name: tmp14Result.computeChannelName(channel, UserStore, RelationshipStore), subtitle, textStyle };
  tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_IMPORTANT || tmp6 === channel(needSubscriptionToAccess[13]).ChannelModes.UNREAD_LESS_IMPORTANT;
  BaseChannelName = tmp14(needSubscriptionToAccess[13]).BaseChannelName;
  obj5 = { mode: tmp6 };
  tmp14Result = channel(needSubscriptionToAccess[26]);
  const merged = Object.assign(channel);
  const merged1 = Object.assign(tmp2);
  return closure_14(tmp3Result, obj3);
}));
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelItem.tsx");

export default memoResult;
export { getChannelMode };