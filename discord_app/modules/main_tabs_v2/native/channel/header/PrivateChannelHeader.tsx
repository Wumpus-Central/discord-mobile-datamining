// === Module 13126: PrivateChannelHeader ===

// Module 13126 (PrivateChannelHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import ChannelHeader from "ChannelHeader" /* 13123 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PresenceStore from "PresenceStore" /* 4936 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channelId, isMobileOnlineResult, tmp3, tmp5, tmp6;

let c10;
let c9;
let closure_12;
let map1;
let obj2;
let unpackModuleId;
const View = react_native.View;
({ ChannelTypes: c9, StatusTypes: c10 } = Constants);
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
let closure_14 = native.AVATAR_SIZE_MAP[native.AvatarSizes.REFRESH_MEDIUM_32];
let closure_15 = Object.freeze({ onlineCount: null, memberCount: null });
let obj = { activityStatusText: obj2, groupDMIconAnchor: { marginRight: 12, flexShrink: 0 } };
obj2 = { color: nativeDefault.colors.TEXT_MUTED };
let closure_16 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let first;
  let isMobileOnline;
  let isVROnline;
  let stateFromStores;
  let status;
  let tmp12;
  let tmp9;
  let obj = channelId(stateFromStores[12]);
  const cResult = obj.c(39);
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const tmp4 = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
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
  const tmpResult = channelId(stateFromStores[13]);
  stateFromStores = tmpResult.useStateFromStores(first, C);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return closure_5.getChannel(channelId);
      }
    }
    const items1 = [UserStore];
    cResult[3] = items1;
    tmp9 = items1;
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
  const tmpResult3 = channelId(stateFromStores[13]);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp9, U);
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
    tmp12 = items2;
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
  const tmpResult4 = channelId(stateFromStores[13]);
  const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp12, F);
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
    const tmp19 = cResult[12];
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
    if (tmp19 === undefined) {
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
    let tmp23Result = null;
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
      const obj2 = { userId: stateFromStores1.id, guildId: undefined, textStyle: tmp4.activityStatusText };
      const tmp24 = screenIndex(stateFromStores[17]);
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
      tmp23Result = closure_11(tmp24, obj2);
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
    cResult[15] = tmp23Result;
  }
  class L {
    constructor() {
      obj = closure_0(closure_2[14]);
      result = obj.navigateToChannelDetails(channelId, screenIndex, "private-channel-header-title");
      return;
    }
  }
  cResult[9] = channelId;
  cResult[10] = screenIndex;
  cResult[11] = L;
}) : ((channelId) => {
  let channelName;
  let guild_id;
  let guild_id1;
  let guild_id2;
  let id1;
  let isMobileOnline;
  let isVROnline;
  let memberCount;
  let obj9;
  let onlineCount;
  let renderUserAvatarResult;
  let status;
  let tmp14Result;
  let tmp2Result13;
  let tmp2Result16;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const pressable = channelId.pressable;
  let stateFromStores;
  const tmp = closure_16();
  let obj = channelId(stateFromStores[13]);
  const items = [ChannelStore];
  stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [UserStore];
  const obj3 = channelId(stateFromStores[13]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
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
  const items2 = [PresenceStore];
  const obj5 = channelId(stateFromStores[13]);
  const stateFromStoresObject = obj5.useStateFromStoresObject(items2, () => {
    let UNKNOWN;
    let isVROnlineResult;
    const obj = { isMobileOnline: null != stateFromStores1 && PresenceStore.isMobileOnline(stateFromStores1.id), isVROnline: isVROnlineResult, status: UNKNOWN };
    isVROnlineResult = null != stateFromStores1 && PresenceStore.isVROnline(stateFromStores1.id);
    if (null != stateFromStores1) {
      UNKNOWN = PresenceStore.getStatus(stateFromStores1.id);
    } else {
      UNKNOWN = constants2.UNKNOWN;
    }
    return obj;
  });
  ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
  const items3 = [channelId, screenIndex];
  const callback = stateFromStores1.useCallback(() => {
    const obj = ChannelHeader;
    const result = obj.navigateToChannelDetails(channelId, screenIndex, "private-channel-header-title");
  }, items3);
  if (null != stateFromStores) {
    const tmp2Result = channelId(stateFromStores[15]);
    channelName = tmp2Result.computeChannelName(stateFromStores, UserStore, RelationshipStore);
  } else {
    const intl = tmp2(tmp3[16]).intl;
    channelName = intl.string(tmp2(tmp3[16]).t.ai6Lbr);
  }
  let result = null;
  if (null != stateFromStores1) {
    const obj2 = { userId: stateFromStores1.id, guildId: guild_id, textStyle: tmp.activityStatusText };
    guild_id = undefined;
    const tmp12 = screenIndex(stateFromStores[17]);
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    result = closure_11(tmp12, obj2);
  }
  let id;
  const tmp14 = screenIndex;
  const tmp15 = screenIndex(stateFromStores[18]);
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const obj4 = { userId: id, guildId: guild_id1 };
  guild_id1 = undefined;
  if (stateFromStores != null) {
    guild_id1 = stateFromStores.guild_id;
  }
  let isMultiUserDMResult;
  const tmp15Result = tmp15(obj4);
  if (stateFromStores != null) {
    isMultiUserDMResult = stateFromStores.isMultiUserDM();
  }
  let tmp21 = null;
  if (true === isMultiUserDMResult) {
    tmp21 = stateFromStores;
  }
  const tmp19Result = closure_17(tmp21);
  const tmp2Result9 = channelId(stateFromStores[19]);
  const shouldChannelShowLoadingIndicator = tmp2Result9.useShouldChannelShowLoadingIndicator(channelId);
  const tmp24 = null != tmp19Result.onlineCount && null != tmp19Result.memberCount;
  if (shouldChannelShowLoadingIndicator) {
    result = closure_11(tmp2(tmp3[19]).ChannelHeaderLoadingIndicator, {});
  } else if (tmp24) {
    const tmp2Result10 = channelId(stateFromStores[20]);
    result = tmp2Result10.renderMemberCountText(tmp19Result.onlineCount, tmp19Result.memberCount);
  }
  const intl2 = tmp2(tmp3[16]).intl;
  const formatToPlainStringResult = intl2.formatToPlainString(channelId(stateFromStores[16]).t.UbNmGc, { channelName });
  const items4 = [formatToPlainStringResult, , , , ];
  let humanizeStatusResult = null;
  if (null != stateFromStores1) {
    humanizeStatusResult = null;
    if (!stateFromStores1.isSystemUser()) {
      const obj6 = { isMobile: isMobileOnline, isVR: isVROnline };
      const tmp2Result11 = channelId(stateFromStores[21]);
      humanizeStatusResult = tmp2Result11.humanizeStatus(status, obj6);
    }
  }
  items4[1] = humanizeStatusResult;
  items4[2] = tmp15Result;
  let formatToPlainStringResult1 = null;
  if (!shouldChannelShowLoadingIndicator) {
    formatToPlainStringResult1 = null;
    if (null != tmp19Result.onlineCount) {
      formatToPlainStringResult1 = null;
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
        const formatToPlainString = intl3.formatToPlainString;
        const t = tmp2(tmp3[16]).t;
        const obj7 = { count: memberCount };
        formatToPlainStringResult1 = formatToPlainString(tmp29 ? t.PIikks : t.etqpUG, obj7);
      }
    }
  }
  items4[3] = formatToPlainStringResult1;
  const intl4 = tmp2(tmp3[16]).intl;
  items4[4] = intl4.string(channelId(stateFromStores[16]).t.x87QCk);
  const found = items4.filter((item) => null != item);
  const joined = found.join(", ");
  if (null != stateFromStores1) {
    const tmp2Result12 = channelId(stateFromStores[20]);
    renderUserAvatarResult = tmp2Result12.renderUserAvatar(stateFromStores1, status, isMobileOnline, isVROnline);
  } else {
    let isGroupDMResult;
    if (stateFromStores != null) {
      isGroupDMResult = stateFromStores.isGroupDM();
    }
    if (isGroupDMResult) {
      const obj8 = { style: tmp.groupDMIconAnchor, children: closure_11(tmp14Result, obj9, channelId) };
      obj9 = { channelId, location: "GroupDMChannelHeader", children: tmp2Result13.renderGroupDMIcon(stateFromStores) };
      tmp14Result = tmp14(stateFromStores[22]);
      tmp2Result13 = channelId(stateFromStores[20]);
      renderUserAvatarResult = closure_11(View, obj8);
    } else {
      const tmp2Result14 = channelId(stateFromStores[20]);
      renderUserAvatarResult = tmp2Result14.renderEmptyIcon();
    }
  }
  const items5 = [renderUserAvatarResult, ];
  const obj10 = { accessibleTitle: formatToPlainStringResult, subtitle: result, disableArrow: !pressable, userId: id1, guildId: guild_id2 };
  id1 = undefined;
  const renderChannelTitle = channelId(stateFromStores[20]).renderChannelTitle;
  channelId(stateFromStores[20]);
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  guild_id2 = undefined;
  if (stateFromStores != null) {
    guild_id2 = stateFromStores.guild_id;
  }
  const obj11 = { children: items5 };
  items5[1] = renderChannelTitle(channelName, obj10);
  const tmp31Result = closure_13(closure_12, obj11);
  if (pressable) {
    let num2 = 44;
    if (null == result) {
      num2 = closure_14;
    }
    const obj12 = { children: tmp2Result16.renderTitleWrapper(tmp31Result, callback, joined, num2) };
    tmp2Result16 = channelId(stateFromStores[20]);
    return closure_11(closure_12, obj12);
  } else {
    return tmp31Result;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore, PresenceStore];
    let num = 0;
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let id;
      let items;
      const currentUser = UserStore.getCurrentUser();
      if (currentUser != null) {
        id = currentUser.id;
      }
      if (null != closure_0) {
        let obj;
        if (null != id) {
          obj = {
            onlineCount: items.reduce((acc, item) => {
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
                }, 0),
            memberCount: closure_0.recipients.length
          };
          items = [];
          let num = 0;
          items[HermesBuiltin.arraySpread(items, closure_0.recipients, 0)] = id;
        }
        return obj;
      }
      obj = closure_15;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp7, tmp8);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  let items = [UserStore, PresenceStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    let id;
    let items;
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      id = currentUser.id;
    }
    if (null != closure_0) {
      let obj;
      if (null != id) {
        obj = {
          onlineCount: items.reduce((acc, item) => {
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
              }, 0),
          memberCount: closure_0.recipients.length
        };
        items = [];
        let num = 0;
        items[HermesBuiltin.arraySpread(items, closure_0.recipients, 0)] = id;
      }
      return obj;
    }
    obj = closure_15;
  }, items1);
});
const memoResult = react.memo(tmp4);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/header/PrivateChannelHeader.tsx");

export default memoResult;