// === Module 12855: PrivateChannelHeader ===

// Module 12855 (PrivateChannelHeader)
import nativeDefault from "native" /* 587 */;
import ChannelHeader from "ChannelHeader" /* 12852 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import PresenceStore from "PresenceStore" /* 5108 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ ChannelTypes: closure_9, StatusTypes: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
let closure_14 = fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.REFRESH_MEDIUM_32];
let closure_15 = Object.freeze({ onlineCount: null, memberCount: null });
const createStyles = fn(5092);
let obj = { activityStatusText: { color: nativeDefault.colors.TEXT_MUTED }, groupDMIconAnchor: { marginRight: 12, flexShrink: 0 } };
let closure_16 = createStyles.createStyles(obj);
fn(558);
let obj3 = { color: nativeDefault.colors.TEXT_MUTED };
const ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGroupDmMemberCounts(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore, PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const currentUser = UserStore.getCurrentUser();
      if (currentUser != null) {
        const id = currentUser.id;
      }
      if (null != closure_0) {
        if (null != id) {
          let obj = { onlineCount: null, memberCount: null };
          const items = [];
          items[HermesBuiltin.arraySpread(closure_0.recipients, 0)] = id;
          obj.onlineCount = items.reduce((acc, item) => {
            status = status.getStatus(item);
            let num = 0;
            if (status !== constants.INVISIBLE) {
              num = 0;
              if (status !== constants.OFFLINE) {
                num = 0;
                if (status !== constants.UNKNOWN) {
                  num = 1;
                }
              }
            }
            return acc + num;
          }, 0);
          obj.memberCount = closure_0.recipients.length;
        }
        return obj;
      }
      obj = closure_15;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp7, tmp8);
}) : (function useGroupDmMemberCounts(arg0) {
  _require = arg0;
  let items = [UserStore, PresenceStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(items, () => {
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      const id = currentUser.id;
    }
    if (null != closure_0) {
      if (null != id) {
        let obj = { onlineCount: null, memberCount: null };
        const items = [];
        items[HermesBuiltin.arraySpread(closure_0.recipients, 0)] = id;
        obj.onlineCount = items.reduce((acc, item) => {
          status = status.getStatus(item);
          let num = 0;
          if (status !== constants.INVISIBLE) {
            num = 0;
            if (status !== constants.OFFLINE) {
              num = 0;
              if (status !== constants.UNKNOWN) {
                num = 1;
              }
            }
          }
          return acc + num;
        }, 0);
        obj.memberCount = closure_0.recipients.length;
      }
      return obj;
    }
    obj = closure_15;
  }, items1);
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function PrivateChannelHeader(channelId) {
  const cResult = channelId(stateFromStores[12]).c(39);
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    class C {
      constructor() {
        return closure_5.getChannel(channelId);
      }
    }
    cResult[1] = channelId;
    cResult[2] = C;
  } else {
    class C {
      constructor() {
        return closure_5.getChannel(channelId);
      }
    }
  }
  let obj = channelId(stateFromStores[12]);
  stateFromStores = channelId(stateFromStores[13]).useStateFromStores(first, C);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_5.getChannel(channelId);
      }
    }
    const items1 = [UserStore];
    cResult[3] = items1;
    const tmp9 = items1;
  } else {
    class C {
      constructor() {
        return closure_5.getChannel(channelId);
      }
    }
  }
  if (cResult[4] !== stateFromStores) {
    class U {
      constructor() {
        obj = closure_2;
        type = undefined;
        if (closure_2 != null) {
          type = obj.type;
        }
        user = undefined;
        if (type === ChannelTypes.DM) {
          tmp3 = closure_8;
          user = closure_8.getUser(obj.getRecipientId());
        }
        return user;
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = U;
  } else {
    class U {
      constructor() {
        obj = closure_2;
        type = undefined;
        if (closure_2 != null) {
          type = obj.type;
        }
        user = undefined;
        if (type === ChannelTypes.DM) {
          tmp3 = closure_8;
          user = closure_8.getUser(obj.getRecipientId());
        }
        return user;
      }
    }
  }
  const tmpResult = channelId(stateFromStores[13]);
  const stateFromStores1 = channelId(stateFromStores[13]).useStateFromStores(tmp9, U);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        obj = closure_2;
        type = undefined;
        if (closure_2 != null) {
          type = obj.type;
        }
        user = undefined;
        if (type === ChannelTypes.DM) {
          tmp3 = closure_8;
          user = closure_8.getUser(obj.getRecipientId());
        }
        return user;
      }
    }
    const items2 = [PresenceStore];
    cResult[6] = items2;
    const tmp12 = items2;
  } else {
    class U {
      constructor() {
        obj = closure_2;
        type = undefined;
        if (closure_2 != null) {
          type = obj.type;
        }
        user = undefined;
        if (type === ChannelTypes.DM) {
          tmp3 = closure_8;
          user = closure_8.getUser(obj.getRecipientId());
        }
        return user;
      }
    }
  }
  if (cResult[7] !== stateFromStores1) {
    class F {
      constructor() {
        tmp = closure_3;
        isMobileOnlineResult = null != closure_3;
        if (isMobileOnlineResult) {
          tmp3 = closure_6;
          isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
        }
        obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
        isVROnlineResult = null != tmp;
        if (isVROnlineResult) {
          tmp5 = closure_6;
          isVROnlineResult = closure_6.isVROnline(tmp.id);
        }
        obj.isVROnline = isVROnlineResult;
        if (null != tmp) {
          tmp7 = closure_6;
          UNKNOWN = closure_6.getStatus(tmp.id);
        } else {
          tmp6 = StatusTypes;
          UNKNOWN = StatusTypes.UNKNOWN;
        }
        obj.status = UNKNOWN;
        return obj;
      }
    }
    cResult[7] = stateFromStores1;
    cResult[8] = F;
  } else {
    class F {
      constructor() {
        tmp = closure_3;
        isMobileOnlineResult = null != closure_3;
        if (isMobileOnlineResult) {
          tmp3 = closure_6;
          isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
        }
        obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
        isVROnlineResult = null != tmp;
        if (isVROnlineResult) {
          tmp5 = closure_6;
          isVROnlineResult = closure_6.isVROnline(tmp.id);
        }
        obj.isVROnline = isVROnlineResult;
        if (null != tmp) {
          tmp7 = closure_6;
          UNKNOWN = closure_6.getStatus(tmp.id);
        } else {
          tmp6 = StatusTypes;
          UNKNOWN = StatusTypes.UNKNOWN;
        }
        obj.status = UNKNOWN;
        return obj;
      }
    }
  }
  const tmpResult3 = channelId(stateFromStores[13]);
  const stateFromStoresObject = channelId(stateFromStores[13]).useStateFromStoresObject(tmp12, F);
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  if (cResult[9] === channelId) {
    class F {
      constructor() {
        tmp = closure_3;
        isMobileOnlineResult = null != closure_3;
        if (isMobileOnlineResult) {
          tmp3 = closure_6;
          isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
        }
        obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
        isVROnlineResult = null != tmp;
        if (isVROnlineResult) {
          tmp5 = closure_6;
          isVROnlineResult = closure_6.isVROnline(tmp.id);
        }
        obj.isVROnline = isVROnlineResult;
        if (null != tmp) {
          tmp7 = closure_6;
          UNKNOWN = closure_6.getStatus(tmp.id);
        } else {
          tmp6 = StatusTypes;
          UNKNOWN = StatusTypes.UNKNOWN;
        }
        obj.status = UNKNOWN;
        return obj;
      }
    }
    if (null != stateFromStores) {
      class F {
        constructor() {
          tmp = closure_3;
          isMobileOnlineResult = null != closure_3;
          if (isMobileOnlineResult) {
            tmp3 = closure_6;
            isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
          }
          obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
          isVROnlineResult = null != tmp;
          if (isVROnlineResult) {
            tmp5 = closure_6;
            isVROnlineResult = closure_6.isVROnline(tmp.id);
          }
          obj.isVROnline = isVROnlineResult;
          if (null != tmp) {
            tmp7 = closure_6;
            UNKNOWN = closure_6.getStatus(tmp.id);
          } else {
            tmp6 = StatusTypes;
            UNKNOWN = StatusTypes.UNKNOWN;
          }
          obj.status = UNKNOWN;
          return obj;
        }
      }
      let channelName = obj6.computeChannelName(stateFromStores, UserStore, RelationshipStore);
    } else {
      class F {
        constructor() {
          tmp = closure_3;
          isMobileOnlineResult = null != closure_3;
          if (isMobileOnlineResult) {
            tmp3 = closure_6;
            isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
          }
          obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
          isVROnlineResult = null != tmp;
          if (isVROnlineResult) {
            tmp5 = closure_6;
            isVROnlineResult = closure_6.isVROnline(tmp.id);
          }
          obj.isVROnline = isVROnlineResult;
          if (null != tmp) {
            tmp7 = closure_6;
            UNKNOWN = closure_6.getStatus(tmp.id);
          } else {
            tmp6 = StatusTypes;
            UNKNOWN = StatusTypes.UNKNOWN;
          }
          obj.status = UNKNOWN;
          return obj;
        }
      }
      channelName = obj5.string(tmp(tmp2[16]).t.ai6Lbr);
    }
    if (stateFromStores != null) {
      class F {
        constructor() {
          tmp = closure_3;
          isMobileOnlineResult = null != closure_3;
          if (isMobileOnlineResult) {
            tmp3 = closure_6;
            isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
          }
          obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
          isVROnlineResult = null != tmp;
          if (isVROnlineResult) {
            tmp5 = closure_6;
            isVROnlineResult = closure_6.isVROnline(tmp.id);
          }
          obj.isVROnline = isVROnlineResult;
          if (null != tmp) {
            tmp7 = closure_6;
            UNKNOWN = closure_6.getStatus(tmp.id);
          } else {
            tmp6 = StatusTypes;
            UNKNOWN = StatusTypes.UNKNOWN;
          }
          obj.status = UNKNOWN;
          return obj;
        }
      }
    }
    if (cResult[12] === undefined) {
      class F {
        constructor() {
          tmp = closure_3;
          isMobileOnlineResult = null != closure_3;
          if (isMobileOnlineResult) {
            tmp3 = closure_6;
            isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
          }
          obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
          isVROnlineResult = null != tmp;
          if (isVROnlineResult) {
            tmp5 = closure_6;
            isVROnlineResult = closure_6.isVROnline(tmp.id);
          }
          obj.isVROnline = isVROnlineResult;
          if (null != tmp) {
            tmp7 = closure_6;
            UNKNOWN = closure_6.getStatus(tmp.id);
          } else {
            tmp6 = StatusTypes;
            UNKNOWN = StatusTypes.UNKNOWN;
          }
          obj.status = UNKNOWN;
          return obj;
        }
      }
    }
    let tmp22Result = null;
    if (null != stateFromStores1) {
      class F {
        constructor() {
          tmp = closure_3;
          isMobileOnlineResult = null != closure_3;
          if (isMobileOnlineResult) {
            tmp3 = closure_6;
            isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
          }
          obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
          isVROnlineResult = null != tmp;
          if (isVROnlineResult) {
            tmp5 = closure_6;
            isVROnlineResult = closure_6.isVROnline(tmp.id);
          }
          obj.isVROnline = isVROnlineResult;
          if (null != tmp) {
            tmp7 = closure_6;
            UNKNOWN = closure_6.getStatus(tmp.id);
          } else {
            tmp6 = StatusTypes;
            UNKNOWN = StatusTypes.UNKNOWN;
          }
          obj.status = UNKNOWN;
          return obj;
        }
      }
      const obj2 = { userId: stateFromStores1.id, guildId: null, textStyle: null };
      if (stateFromStores != null) {
        class F {
          constructor() {
            tmp = closure_3;
            isMobileOnlineResult = null != closure_3;
            if (isMobileOnlineResult) {
              tmp3 = closure_6;
              isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
            }
            obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
            isVROnlineResult = null != tmp;
            if (isVROnlineResult) {
              tmp5 = closure_6;
              isVROnlineResult = closure_6.isVROnline(tmp.id);
            }
            obj.isVROnline = isVROnlineResult;
            if (null != tmp) {
              tmp7 = closure_6;
              UNKNOWN = closure_6.getStatus(tmp.id);
            } else {
              tmp6 = StatusTypes;
              UNKNOWN = StatusTypes.UNKNOWN;
            }
            obj.status = UNKNOWN;
            return obj;
          }
        }
      }
      obj2.guildId = undefined;
      obj2.textStyle = tmp4.activityStatusText;
      tmp22Result = closure_11(screenIndex(tmp2[17]), obj2);
      const tmp23 = screenIndex(tmp2[17]);
    }
    if (stateFromStores != null) {
      class F {
        constructor() {
          tmp = closure_3;
          isMobileOnlineResult = null != closure_3;
          if (isMobileOnlineResult) {
            tmp3 = closure_6;
            isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
          }
          obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
          isVROnlineResult = null != tmp;
          if (isVROnlineResult) {
            tmp5 = closure_6;
            isVROnlineResult = closure_6.isVROnline(tmp.id);
          }
          obj.isVROnline = isVROnlineResult;
          if (null != tmp) {
            tmp7 = closure_6;
            UNKNOWN = closure_6.getStatus(tmp.id);
          } else {
            tmp6 = StatusTypes;
            UNKNOWN = StatusTypes.UNKNOWN;
          }
          obj.status = UNKNOWN;
          return obj;
        }
      }
    }
    cResult[12] = undefined;
    cResult[13] = tmp4;
    cResult[14] = stateFromStores1;
    cResult[15] = tmp22Result;
  }
  class G {
    constructor() {
      obj = closure_0(closure_2[14]);
      result = obj.navigateToChannelDetails(channelId, screenIndex, "private-channel-header-title");
      return;
    }
  }
  cResult[9] = channelId;
  cResult[10] = screenIndex;
  cResult[11] = G;
  const tmpResult4 = channelId(stateFromStores[13]);
}) : (function PrivateChannelHeader(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const pressable = channelId.pressable;
  let stateFromStores;
  const tmp = closure_16();
  const items = [ChannelStore];
  stateFromStores = channelId(stateFromStores[13]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = channelId(stateFromStores[13]);
  const items1 = [UserStore];
  const stateFromStores1 = channelId(stateFromStores[13]).useStateFromStores(items1, () => {
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    let user;
    if (type === constants.DM) {
      user = UserStore.getUser(stateFromStores.getRecipientId());
    }
    return user;
  });
  const obj3 = channelId(stateFromStores[13]);
  const items2 = [PresenceStore];
  const stateFromStoresObject = channelId(stateFromStores[13]).useStateFromStoresObject(items2, () => {
    let isMobileOnlineResult = null != stateFromStores1;
    if (isMobileOnlineResult) {
      isMobileOnlineResult = PresenceStore.isMobileOnline(stateFromStores1.id);
    }
    const obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
    let isVROnlineResult = null != stateFromStores1;
    if (isVROnlineResult) {
      isVROnlineResult = PresenceStore.isVROnline(stateFromStores1.id);
    }
    obj.isVROnline = isVROnlineResult;
    if (null != stateFromStores1) {
      let UNKNOWN = PresenceStore.getStatus(stateFromStores1.id);
    } else {
      UNKNOWN = constants2.UNKNOWN;
    }
    obj.status = UNKNOWN;
    return obj;
  });
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  const items3 = [channelId, screenIndex];
  const callback = stateFromStores1.useCallback(() => {
    const result = ChannelHeader.navigateToChannelDetails(channelId, screenIndex, "private-channel-header-title");
  }, items3);
  if (null != stateFromStores) {
    let channelName = tmp2(tmp3[15]).computeChannelName(stateFromStores, UserStore, RelationshipStore);
    const tmp2Result = tmp2(tmp3[15]);
  } else {
    const intl = tmp2(tmp3[16]).intl;
    channelName = intl.string(tmp2(tmp3[16]).t.ai6Lbr);
  }
  let result = null;
  if (null != stateFromStores1) {
    const obj2 = { userId: stateFromStores1.id, guildId: null, textStyle: null };
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    obj2.guildId = guild_id;
    obj2.textStyle = tmp.activityStatusText;
    result = closure_11(screenIndex(tmp3[17]), obj2);
    const tmp12 = screenIndex(tmp3[17]);
  }
  let id;
  const obj5 = channelId(stateFromStores[13]);
  const tmp14 = screenIndex;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const obj4 = { userId: id, guildId: null };
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  obj4.guildId = guild_id1;
  let isMultiUserDMResult;
  const tmp15 = screenIndex(stateFromStores[18]);
  if (stateFromStores != null) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  let tmp21 = null;
  if (true === isMultiUserDMResult) {
    tmp21 = stateFromStores;
  }
  const tmp19Result = closure_17(tmp21);
  const tmp15Result = screenIndex(stateFromStores[18])(obj4);
  const shouldChannelShowLoadingIndicator = channelId(stateFromStores[19]).useShouldChannelShowLoadingIndicator(channelId);
  if (shouldChannelShowLoadingIndicator) {
    result = closure_11(tmp2(tmp3[19]).ChannelHeaderLoadingIndicator, {});
  } else if (tmp24) {
    result = tmp2(tmp3[20]).renderMemberCountText(tmp19Result.onlineCount, tmp19Result.memberCount);
    const tmp2Result10 = tmp2(tmp3[20]);
  }
  const intl2 = tmp2(tmp3[16]).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(channelId(stateFromStores[16]).t.UbNmGc, { channelName });
  const items4 = [formatToPlainStringResult, , , , ];
  let humanizeStatusResult = null;
  if (null != stateFromStores1) {
    humanizeStatusResult = null;
    if (!stateFromStores1.isSystemUser()) {
      const obj6 = { isMobile: isMobileOnline, isVR: isVROnline };
      humanizeStatusResult = tmp2(tmp3[21]).humanizeStatus(status, obj6);
      const tmp2Result11 = tmp2(tmp3[21]);
    }
  }
  items4[1] = humanizeStatusResult;
  items4[2] = tmp15Result;
  let tmp28 = null;
  if (!shouldChannelShowLoadingIndicator) {
    tmp28 = null;
    if (null != tmp19Result.onlineCount) {
      tmp28 = null;
      if (null != tmp19Result.memberCount) {
        ({ onlineCount, memberCount } = tmp19Result);
        let str2 = "online";
        if (0 === onlineCount) {
          str2 = "total";
        }
        if ("online" === str2) {
          memberCount = onlineCount;
        }
        const intl3 = tmp2(tmp3[16]).intl;
        tmp2(tmp3[16]).t;
        const t = { count: memberCount };
        intl3.formatToPlainString("online" === str2 ? t.PIikks : t.etqpUG, t);
        const tmp30 = "online" === str2 ? t.PIikks : t.etqpUG;
      }
    }
  }
  items4[3] = tmp28;
  const intl4 = tmp2(tmp3[16]).intl;
  items4[4] = intl4.string(channelId(stateFromStores[16]).t.x87QCk);
  const found = items4.filter((item) => null != item);
  const joined = found.join(", ");
  if (null != stateFromStores1) {
    const tmp2Result12 = tmp2(tmp3[20]);
    let renderUserAvatarResult = tmp2Result12.renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline);
  } else {
    let isGroupDMResult;
    if (stateFromStores != null) {
      isGroupDMResult = stateFromStores.isGroupDM();
    }
    if (isGroupDMResult) {
      const obj7 = { style: tmp.groupDMIconAnchor, children: null };
      const obj8 = { channelId, location: "GroupDMChannelHeader", children: null };
      const tmp14Result = tmp14(tmp3[22]);
      obj8.children = tmp2(tmp3[20]).renderGroupDMIcon(stateFromStores);
      obj7.children = closure_11(tmp14Result, obj8, channelId);
      renderUserAvatarResult = closure_11(View, obj7);
      const tmp2Result13 = tmp2(tmp3[20]);
    } else {
      renderUserAvatarResult = tmp2(tmp3[20]).renderEmptyIcon();
      const tmp2Result14 = tmp2(tmp3[20]);
    }
  }
  const items5 = [renderUserAvatarResult, ];
  tmp24 = null != tmp19Result.onlineCount && null != tmp19Result.memberCount;
  const tmp2Result9 = channelId(stateFromStores[19]);
  const obj9 = { accessibleTitle: formatToPlainStringResult, subtitle: result, disableArrow: !pressable, userId: null, guildId: null };
  let id1;
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  obj9.userId = id1;
  let guild_id2;
  if (stateFromStores != null) {
    guild_id2 = stateFromStores.guild_id;
  }
  const obj10 = { children: null };
  obj9.guildId = guild_id2;
  items5[1] = channelId(stateFromStores[20]).renderChannelTitle(channelName, obj9);
  obj10.children = items5;
  const tmp33Result = closure_13(closure_12, obj10);
  if (pressable) {
    let num2 = 44;
    if (null == result) {
      num2 = closure_14;
    }
    const obj11 = { children: null };
    const tmp2Result16 = tmp2(tmp3[20]);
    obj11.children = tmp2Result16.renderTitleWrapper(tmp33Result, callback, joined, num2);
    return closure_11(closure_12, obj11);
  } else {
    return tmp33Result;
  }
  const tmp2Result15 = channelId(stateFromStores[20]);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function PrivateChannelHeader(channelId) {
  const cResult = channelId(stateFromStores[12]).c(39);
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    class C {
      constructor() {
        return closure_5.getChannel(channelId);
      }
    }
    cResult[1] = channelId;
    cResult[2] = C;
  } else {
    class C {
      constructor() {
        return closure_5.getChannel(channelId);
      }
    }
  }
  let obj = channelId(stateFromStores[12]);
  stateFromStores = channelId(stateFromStores[13]).useStateFromStores(first, C);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_5.getChannel(channelId);
      }
    }
    const items1 = [UserStore];
    cResult[3] = items1;
    const tmp9 = items1;
  } else {
    class C {
      constructor() {
        return closure_5.getChannel(channelId);
      }
    }
  }
  if (cResult[4] !== stateFromStores) {
    class U {
      constructor() {
        obj = closure_2;
        type = undefined;
        if (closure_2 != null) {
          type = obj.type;
        }
        user = undefined;
        if (type === ChannelTypes.DM) {
          tmp3 = closure_8;
          user = closure_8.getUser(obj.getRecipientId());
        }
        return user;
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = U;
  } else {
    class U {
      constructor() {
        obj = closure_2;
        type = undefined;
        if (closure_2 != null) {
          type = obj.type;
        }
        user = undefined;
        if (type === ChannelTypes.DM) {
          tmp3 = closure_8;
          user = closure_8.getUser(obj.getRecipientId());
        }
        return user;
      }
    }
  }
  const tmpResult = channelId(stateFromStores[13]);
  const stateFromStores1 = channelId(stateFromStores[13]).useStateFromStores(tmp9, U);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class U {
      constructor() {
        obj = closure_2;
        type = undefined;
        if (closure_2 != null) {
          type = obj.type;
        }
        user = undefined;
        if (type === ChannelTypes.DM) {
          tmp3 = closure_8;
          user = closure_8.getUser(obj.getRecipientId());
        }
        return user;
      }
    }
    const items2 = [PresenceStore];
    cResult[6] = items2;
    const tmp12 = items2;
  } else {
    class U {
      constructor() {
        obj = closure_2;
        type = undefined;
        if (closure_2 != null) {
          type = obj.type;
        }
        user = undefined;
        if (type === ChannelTypes.DM) {
          tmp3 = closure_8;
          user = closure_8.getUser(obj.getRecipientId());
        }
        return user;
      }
    }
  }
  if (cResult[7] !== stateFromStores1) {
    class F {
      constructor() {
        tmp = closure_3;
        isMobileOnlineResult = null != closure_3;
        if (isMobileOnlineResult) {
          tmp3 = closure_6;
          isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
        }
        obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
        isVROnlineResult = null != tmp;
        if (isVROnlineResult) {
          tmp5 = closure_6;
          isVROnlineResult = closure_6.isVROnline(tmp.id);
        }
        obj.isVROnline = isVROnlineResult;
        if (null != tmp) {
          tmp7 = closure_6;
          UNKNOWN = closure_6.getStatus(tmp.id);
        } else {
          tmp6 = StatusTypes;
          UNKNOWN = StatusTypes.UNKNOWN;
        }
        obj.status = UNKNOWN;
        return obj;
      }
    }
    cResult[7] = stateFromStores1;
    cResult[8] = F;
  } else {
    class F {
      constructor() {
        tmp = closure_3;
        isMobileOnlineResult = null != closure_3;
        if (isMobileOnlineResult) {
          tmp3 = closure_6;
          isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
        }
        obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
        isVROnlineResult = null != tmp;
        if (isVROnlineResult) {
          tmp5 = closure_6;
          isVROnlineResult = closure_6.isVROnline(tmp.id);
        }
        obj.isVROnline = isVROnlineResult;
        if (null != tmp) {
          tmp7 = closure_6;
          UNKNOWN = closure_6.getStatus(tmp.id);
        } else {
          tmp6 = StatusTypes;
          UNKNOWN = StatusTypes.UNKNOWN;
        }
        obj.status = UNKNOWN;
        return obj;
      }
    }
  }
  const tmpResult3 = channelId(stateFromStores[13]);
  const stateFromStoresObject = channelId(stateFromStores[13]).useStateFromStoresObject(tmp12, F);
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  if (cResult[9] === channelId) {
    class F {
      constructor() {
        tmp = closure_3;
        isMobileOnlineResult = null != closure_3;
        if (isMobileOnlineResult) {
          tmp3 = closure_6;
          isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
        }
        obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
        isVROnlineResult = null != tmp;
        if (isVROnlineResult) {
          tmp5 = closure_6;
          isVROnlineResult = closure_6.isVROnline(tmp.id);
        }
        obj.isVROnline = isVROnlineResult;
        if (null != tmp) {
          tmp7 = closure_6;
          UNKNOWN = closure_6.getStatus(tmp.id);
        } else {
          tmp6 = StatusTypes;
          UNKNOWN = StatusTypes.UNKNOWN;
        }
        obj.status = UNKNOWN;
        return obj;
      }
    }
    if (null != stateFromStores) {
      class F {
        constructor() {
          tmp = closure_3;
          isMobileOnlineResult = null != closure_3;
          if (isMobileOnlineResult) {
            tmp3 = closure_6;
            isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
          }
          obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
          isVROnlineResult = null != tmp;
          if (isVROnlineResult) {
            tmp5 = closure_6;
            isVROnlineResult = closure_6.isVROnline(tmp.id);
          }
          obj.isVROnline = isVROnlineResult;
          if (null != tmp) {
            tmp7 = closure_6;
            UNKNOWN = closure_6.getStatus(tmp.id);
          } else {
            tmp6 = StatusTypes;
            UNKNOWN = StatusTypes.UNKNOWN;
          }
          obj.status = UNKNOWN;
          return obj;
        }
      }
      let channelName = obj6.computeChannelName(stateFromStores, UserStore, RelationshipStore);
    } else {
      class F {
        constructor() {
          tmp = closure_3;
          isMobileOnlineResult = null != closure_3;
          if (isMobileOnlineResult) {
            tmp3 = closure_6;
            isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
          }
          obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
          isVROnlineResult = null != tmp;
          if (isVROnlineResult) {
            tmp5 = closure_6;
            isVROnlineResult = closure_6.isVROnline(tmp.id);
          }
          obj.isVROnline = isVROnlineResult;
          if (null != tmp) {
            tmp7 = closure_6;
            UNKNOWN = closure_6.getStatus(tmp.id);
          } else {
            tmp6 = StatusTypes;
            UNKNOWN = StatusTypes.UNKNOWN;
          }
          obj.status = UNKNOWN;
          return obj;
        }
      }
      channelName = obj5.string(tmp(tmp2[16]).t.ai6Lbr);
    }
    if (stateFromStores != null) {
      class F {
        constructor() {
          tmp = closure_3;
          isMobileOnlineResult = null != closure_3;
          if (isMobileOnlineResult) {
            tmp3 = closure_6;
            isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
          }
          obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
          isVROnlineResult = null != tmp;
          if (isVROnlineResult) {
            tmp5 = closure_6;
            isVROnlineResult = closure_6.isVROnline(tmp.id);
          }
          obj.isVROnline = isVROnlineResult;
          if (null != tmp) {
            tmp7 = closure_6;
            UNKNOWN = closure_6.getStatus(tmp.id);
          } else {
            tmp6 = StatusTypes;
            UNKNOWN = StatusTypes.UNKNOWN;
          }
          obj.status = UNKNOWN;
          return obj;
        }
      }
    }
    if (cResult[12] === undefined) {
      class F {
        constructor() {
          tmp = closure_3;
          isMobileOnlineResult = null != closure_3;
          if (isMobileOnlineResult) {
            tmp3 = closure_6;
            isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
          }
          obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
          isVROnlineResult = null != tmp;
          if (isVROnlineResult) {
            tmp5 = closure_6;
            isVROnlineResult = closure_6.isVROnline(tmp.id);
          }
          obj.isVROnline = isVROnlineResult;
          if (null != tmp) {
            tmp7 = closure_6;
            UNKNOWN = closure_6.getStatus(tmp.id);
          } else {
            tmp6 = StatusTypes;
            UNKNOWN = StatusTypes.UNKNOWN;
          }
          obj.status = UNKNOWN;
          return obj;
        }
      }
    }
    let tmp22Result = null;
    if (null != stateFromStores1) {
      class F {
        constructor() {
          tmp = closure_3;
          isMobileOnlineResult = null != closure_3;
          if (isMobileOnlineResult) {
            tmp3 = closure_6;
            isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
          }
          obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
          isVROnlineResult = null != tmp;
          if (isVROnlineResult) {
            tmp5 = closure_6;
            isVROnlineResult = closure_6.isVROnline(tmp.id);
          }
          obj.isVROnline = isVROnlineResult;
          if (null != tmp) {
            tmp7 = closure_6;
            UNKNOWN = closure_6.getStatus(tmp.id);
          } else {
            tmp6 = StatusTypes;
            UNKNOWN = StatusTypes.UNKNOWN;
          }
          obj.status = UNKNOWN;
          return obj;
        }
      }
      const obj2 = { userId: stateFromStores1.id, guildId: null, textStyle: null };
      if (stateFromStores != null) {
        class F {
          constructor() {
            tmp = closure_3;
            isMobileOnlineResult = null != closure_3;
            if (isMobileOnlineResult) {
              tmp3 = closure_6;
              isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
            }
            obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
            isVROnlineResult = null != tmp;
            if (isVROnlineResult) {
              tmp5 = closure_6;
              isVROnlineResult = closure_6.isVROnline(tmp.id);
            }
            obj.isVROnline = isVROnlineResult;
            if (null != tmp) {
              tmp7 = closure_6;
              UNKNOWN = closure_6.getStatus(tmp.id);
            } else {
              tmp6 = StatusTypes;
              UNKNOWN = StatusTypes.UNKNOWN;
            }
            obj.status = UNKNOWN;
            return obj;
          }
        }
      }
      obj2.guildId = undefined;
      obj2.textStyle = tmp4.activityStatusText;
      tmp22Result = closure_11(screenIndex(tmp2[17]), obj2);
      const tmp23 = screenIndex(tmp2[17]);
    }
    if (stateFromStores != null) {
      class F {
        constructor() {
          tmp = closure_3;
          isMobileOnlineResult = null != closure_3;
          if (isMobileOnlineResult) {
            tmp3 = closure_6;
            isMobileOnlineResult = closure_6.isMobileOnline(tmp.id);
          }
          obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
          isVROnlineResult = null != tmp;
          if (isVROnlineResult) {
            tmp5 = closure_6;
            isVROnlineResult = closure_6.isVROnline(tmp.id);
          }
          obj.isVROnline = isVROnlineResult;
          if (null != tmp) {
            tmp7 = closure_6;
            UNKNOWN = closure_6.getStatus(tmp.id);
          } else {
            tmp6 = StatusTypes;
            UNKNOWN = StatusTypes.UNKNOWN;
          }
          obj.status = UNKNOWN;
          return obj;
        }
      }
    }
    cResult[12] = undefined;
    cResult[13] = tmp4;
    cResult[14] = stateFromStores1;
    cResult[15] = tmp22Result;
  }
  class G {
    constructor() {
      obj = closure_0(closure_2[14]);
      result = obj.navigateToChannelDetails(channelId, screenIndex, "private-channel-header-title");
      return;
    }
  }
  cResult[9] = channelId;
  cResult[10] = screenIndex;
  cResult[11] = G;
  const tmpResult4 = channelId(stateFromStores[13]);
}) : (function PrivateChannelHeader(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const pressable = channelId.pressable;
  let stateFromStores;
  const tmp = closure_16();
  const items = [ChannelStore];
  stateFromStores = channelId(stateFromStores[13]).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj = channelId(stateFromStores[13]);
  const items1 = [UserStore];
  const stateFromStores1 = channelId(stateFromStores[13]).useStateFromStores(items1, () => {
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    let user;
    if (type === constants.DM) {
      user = UserStore.getUser(stateFromStores.getRecipientId());
    }
    return user;
  });
  const obj3 = channelId(stateFromStores[13]);
  const items2 = [PresenceStore];
  const stateFromStoresObject = channelId(stateFromStores[13]).useStateFromStoresObject(items2, () => {
    let isMobileOnlineResult = null != stateFromStores1;
    if (isMobileOnlineResult) {
      isMobileOnlineResult = PresenceStore.isMobileOnline(stateFromStores1.id);
    }
    const obj = { isMobileOnline: isMobileOnlineResult, isVROnline: null, status: null };
    let isVROnlineResult = null != stateFromStores1;
    if (isVROnlineResult) {
      isVROnlineResult = PresenceStore.isVROnline(stateFromStores1.id);
    }
    obj.isVROnline = isVROnlineResult;
    if (null != stateFromStores1) {
      let UNKNOWN = PresenceStore.getStatus(stateFromStores1.id);
    } else {
      UNKNOWN = constants2.UNKNOWN;
    }
    obj.status = UNKNOWN;
    return obj;
  });
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  const items3 = [channelId, screenIndex];
  const callback = stateFromStores1.useCallback(() => {
    const result = ChannelHeader.navigateToChannelDetails(channelId, screenIndex, "private-channel-header-title");
  }, items3);
  if (null != stateFromStores) {
    let channelName = tmp2(tmp3[15]).computeChannelName(stateFromStores, UserStore, RelationshipStore);
    const tmp2Result = tmp2(tmp3[15]);
  } else {
    const intl = tmp2(tmp3[16]).intl;
    channelName = intl.string(tmp2(tmp3[16]).t.ai6Lbr);
  }
  let result = null;
  if (null != stateFromStores1) {
    const obj2 = { userId: stateFromStores1.id, guildId: null, textStyle: null };
    let guild_id;
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    obj2.guildId = guild_id;
    obj2.textStyle = tmp.activityStatusText;
    result = closure_11(screenIndex(tmp3[17]), obj2);
    const tmp12 = screenIndex(tmp3[17]);
  }
  let id;
  const obj5 = channelId(stateFromStores[13]);
  const tmp14 = screenIndex;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const obj4 = { userId: id, guildId: null };
  let guild_id1;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  obj4.guildId = guild_id1;
  let isMultiUserDMResult;
  const tmp15 = screenIndex(stateFromStores[18]);
  if (stateFromStores != null) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  let tmp21 = null;
  if (true === isMultiUserDMResult) {
    tmp21 = stateFromStores;
  }
  const tmp19Result = closure_17(tmp21);
  const tmp15Result = screenIndex(stateFromStores[18])(obj4);
  const shouldChannelShowLoadingIndicator = channelId(stateFromStores[19]).useShouldChannelShowLoadingIndicator(channelId);
  if (shouldChannelShowLoadingIndicator) {
    result = closure_11(tmp2(tmp3[19]).ChannelHeaderLoadingIndicator, {});
  } else if (tmp24) {
    result = tmp2(tmp3[20]).renderMemberCountText(tmp19Result.onlineCount, tmp19Result.memberCount);
    const tmp2Result10 = tmp2(tmp3[20]);
  }
  const intl2 = tmp2(tmp3[16]).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(channelId(stateFromStores[16]).t.UbNmGc, { channelName });
  const items4 = [formatToPlainStringResult, , , , ];
  let humanizeStatusResult = null;
  if (null != stateFromStores1) {
    humanizeStatusResult = null;
    if (!stateFromStores1.isSystemUser()) {
      const obj6 = { isMobile: isMobileOnline, isVR: isVROnline };
      humanizeStatusResult = tmp2(tmp3[21]).humanizeStatus(status, obj6);
      const tmp2Result11 = tmp2(tmp3[21]);
    }
  }
  items4[1] = humanizeStatusResult;
  items4[2] = tmp15Result;
  let tmp28 = null;
  if (!shouldChannelShowLoadingIndicator) {
    tmp28 = null;
    if (null != tmp19Result.onlineCount) {
      tmp28 = null;
      if (null != tmp19Result.memberCount) {
        ({ onlineCount, memberCount } = tmp19Result);
        let str2 = "online";
        if (0 === onlineCount) {
          str2 = "total";
        }
        if ("online" === str2) {
          memberCount = onlineCount;
        }
        const intl3 = tmp2(tmp3[16]).intl;
        tmp2(tmp3[16]).t;
        const t = { count: memberCount };
        intl3.formatToPlainString("online" === str2 ? t.PIikks : t.etqpUG, t);
        const tmp30 = "online" === str2 ? t.PIikks : t.etqpUG;
      }
    }
  }
  items4[3] = tmp28;
  const intl4 = tmp2(tmp3[16]).intl;
  items4[4] = intl4.string(channelId(stateFromStores[16]).t.x87QCk);
  const found = items4.filter((item) => null != item);
  const joined = found.join(", ");
  if (null != stateFromStores1) {
    const tmp2Result12 = tmp2(tmp3[20]);
    let renderUserAvatarResult = tmp2Result12.renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline);
  } else {
    let isGroupDMResult;
    if (stateFromStores != null) {
      isGroupDMResult = stateFromStores.isGroupDM();
    }
    if (isGroupDMResult) {
      const obj7 = { style: tmp.groupDMIconAnchor, children: null };
      const obj8 = { channelId, location: "GroupDMChannelHeader", children: null };
      const tmp14Result = tmp14(tmp3[22]);
      obj8.children = tmp2(tmp3[20]).renderGroupDMIcon(stateFromStores);
      obj7.children = closure_11(tmp14Result, obj8, channelId);
      renderUserAvatarResult = closure_11(View, obj7);
      const tmp2Result13 = tmp2(tmp3[20]);
    } else {
      renderUserAvatarResult = tmp2(tmp3[20]).renderEmptyIcon();
      const tmp2Result14 = tmp2(tmp3[20]);
    }
  }
  const items5 = [renderUserAvatarResult, ];
  tmp24 = null != tmp19Result.onlineCount && null != tmp19Result.memberCount;
  const tmp2Result9 = channelId(stateFromStores[19]);
  const obj9 = { accessibleTitle: formatToPlainStringResult, subtitle: result, disableArrow: !pressable, userId: null, guildId: null };
  let id1;
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  obj9.userId = id1;
  let guild_id2;
  if (stateFromStores != null) {
    guild_id2 = stateFromStores.guild_id;
  }
  const obj10 = { children: null };
  obj9.guildId = guild_id2;
  items5[1] = channelId(stateFromStores[20]).renderChannelTitle(channelName, obj9);
  obj10.children = items5;
  const tmp33Result = closure_13(closure_12, obj10);
  if (pressable) {
    let num2 = 44;
    if (null == result) {
      num2 = closure_14;
    }
    const obj11 = { children: null };
    const tmp2Result16 = tmp2(tmp3[20]);
    obj11.children = tmp2Result16.renderTitleWrapper(tmp33Result, callback, joined, num2);
    return closure_11(closure_12, obj11);
  } else {
    return tmp33Result;
  }
  const tmp2Result15 = channelId(stateFromStores[20]);
}));