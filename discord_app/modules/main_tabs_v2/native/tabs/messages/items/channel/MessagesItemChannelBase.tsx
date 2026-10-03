// === Module 15954: MessagesItemChannelBase ===

// Module 15954 (MessagesItemChannelBase)
import nativeDefault from "native" /* 587 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4903 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10651 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1085).ActivityTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4890);
let closure_14 = createStyles.createStyles(() => {
  const obj = { pressable: { marginBottom: 1, borderRadius: nativeDefault.radii.md, marginHorizontal: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", flex: 1 }, nameplate: null, rowActive: null, selectedBorder: null, rowSelected: null };
  const obj2 = { marginBottom: 1, borderRadius: nativeDefault.radii.md, marginHorizontal: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, marginVertical: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", flex: 1 };
  obj.nameplate = { borderRadius: nativeDefault.radii.md };
  const obj3 = { borderRadius: nativeDefault.radii.md };
  obj.rowActive = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  const rect = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, borderRadius: nativeDefault.radii.md };
  obj.selectedBorder = rect;
  const obj4 = { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj.rowSelected = { borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = channel(576).c(105);
  channel = channel.channel;
  ({ height, isPressed, setIsPressed } = channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.id) {
    const fn = function _() {
      let id;
      const channelId = SelectedChannelStore.getChannelId(null);
      if (channel != null) {
        id = channel.id;
      }
      return channelId === id;
    };
    cResult[1] = channel.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = channel(576);
  const stateFromStores = channel(504).useStateFromStores(first, tmp6);
  const tmp8 = closure_14();
  if (cResult[3] !== height) {
    let obj2 = { height, overflow: "hidden" };
    cResult[3] = height;
    cResult[4] = obj2;
  }
  let rowSelected;
  if (stateFromStores) {
    rowSelected = tmp8.rowSelected;
  }
  if (cResult[5] === tmp8.pressable) {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [PresenceStore];
      cResult[8] = items1;
      let tmp12 = items1;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] !== channel) {
      class E {
        constructor() {
          obj = channel;
          if (channel.isDM()) {
            tmp2 = closure_5;
            activities = closure_5.getActivities(obj.getRecipientId());
          }
          if (obj.isDM()) {
            obj1 = { status: null, activities: null };
            tmp3 = closure_5;
            obj1.status = closure_5.getStatus(obj.getRecipientId());
            obj1.activities = activities;
            obj4 = obj1;
          } else {
            obj4 = { status: "Symbol", activities: "current" };
          }
          return obj4;
        }
      }
      cResult[9] = channel;
      cResult[10] = E;
    } else {
      class E {
        constructor() {
          obj = channel;
          if (channel.isDM()) {
            tmp2 = closure_5;
            activities = closure_5.getActivities(obj.getRecipientId());
          }
          if (obj.isDM()) {
            obj1 = { status: null, activities: null };
            tmp3 = closure_5;
            obj1.status = closure_5.getStatus(obj.getRecipientId());
            obj1.activities = activities;
            obj4 = obj1;
          } else {
            obj4 = { status: "Symbol", activities: "current" };
          }
          return obj4;
        }
      }
    }
    const stateFromStoresObject = tmp(504).useStateFromStoresObject(tmp12, E);
    ({ status, activities } = stateFromStoresObject);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class E {
        constructor() {
          obj = channel;
          if (channel.isDM()) {
            tmp2 = closure_5;
            activities = closure_5.getActivities(obj.getRecipientId());
          }
          if (obj.isDM()) {
            obj1 = { status: null, activities: null };
            tmp3 = closure_5;
            obj1.status = closure_5.getStatus(obj.getRecipientId());
            obj1.activities = activities;
            obj4 = obj1;
          } else {
            obj4 = { status: "Symbol", activities: "current" };
          }
          return obj4;
        }
      }
      const items2 = [ReadStateStore];
      cResult[11] = items2;
      const tmp16 = items2;
    } else {
      class E {
        constructor() {
          obj = channel;
          if (channel.isDM()) {
            tmp2 = closure_5;
            activities = closure_5.getActivities(obj.getRecipientId());
          }
          if (obj.isDM()) {
            obj1 = { status: null, activities: null };
            tmp3 = closure_5;
            obj1.status = closure_5.getStatus(obj.getRecipientId());
            obj1.activities = activities;
            obj4 = obj1;
          } else {
            obj4 = { status: "Symbol", activities: "current" };
          }
          return obj4;
        }
      }
    }
    if (cResult[12] !== channel) {
      class B {
        constructor() {
          obj = closure_6;
          obj2 = channel;
          mentionCount = closure_6.getMentionCount(channel.id);
          obj1 = { mentionCount, hasUnreadMessages: null };
          tmp2 = mentionCount > 0;
          if (!tmp2) {
            tmp3 = null;
            tmp4 = null != obj2.getGuildId() && obj.hasUnread(obj2.id);
            tmp2 = tmp4;
          }
          obj1.hasUnreadMessages = tmp2;
          return obj1;
        }
      }
      cResult[12] = channel;
      cResult[13] = B;
    } else {
      class B {
        constructor() {
          obj = closure_6;
          obj2 = channel;
          mentionCount = closure_6.getMentionCount(channel.id);
          obj1 = { mentionCount, hasUnreadMessages: null };
          tmp2 = mentionCount > 0;
          if (!tmp2) {
            tmp3 = null;
            tmp4 = null != obj2.getGuildId() && obj.hasUnread(obj2.id);
            tmp2 = tmp4;
          }
          obj1.hasUnreadMessages = tmp2;
          return obj1;
        }
      }
    }
    const tmpResult8 = tmp(504);
    const stateFromStoresObject1 = tmp(504).useStateFromStoresObject(tmp16, B);
    ({ mentionCount, hasUnreadMessages } = stateFromStoresObject1);
    const tmpResult9 = tmp(504);
    ({ isIncomingCall, isOngoingCall } = setIsPressed(15955)(channel.id));
    const _Symbol3 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          obj = closure_6;
          obj2 = channel;
          mentionCount = closure_6.getMentionCount(channel.id);
          obj1 = { mentionCount, hasUnreadMessages: null };
          tmp2 = mentionCount > 0;
          if (!tmp2) {
            tmp3 = null;
            tmp4 = null != obj2.getGuildId() && obj.hasUnread(obj2.id);
            tmp2 = tmp4;
          }
          obj1.hasUnreadMessages = tmp2;
          return obj1;
        }
      }
      const items3 = [UserGuildSettingsStore];
      cResult[14] = items3;
      const tmp21 = items3;
    } else {
      class B {
        constructor() {
          obj = closure_6;
          obj2 = channel;
          mentionCount = closure_6.getMentionCount(channel.id);
          obj1 = { mentionCount, hasUnreadMessages: null };
          tmp2 = mentionCount > 0;
          if (!tmp2) {
            tmp3 = null;
            tmp4 = null != obj2.getGuildId() && obj.hasUnread(obj2.id);
            tmp2 = tmp4;
          }
          obj1.hasUnreadMessages = tmp2;
          return obj1;
        }
      }
    }
    if (cResult[15] !== channel) {
      class G {
        constructor() {
          obj = { resolvedUnreadSetting: closure_9.resolveUnreadSetting(channel), muted: closure_9.isChannelMuted(channel.getGuildId(), channel.id), favorite: closure_9.isMessagesFavorite(channel.id) };
          return obj;
        }
      }
      cResult[15] = channel;
      cResult[16] = G;
    } else {
      class G {
        constructor() {
          obj = { resolvedUnreadSetting: closure_9.resolveUnreadSetting(channel), muted: closure_9.isChannelMuted(channel.getGuildId(), channel.id), favorite: closure_9.isMessagesFavorite(channel.id) };
          return obj;
        }
      }
    }
    const tmp20 = setIsPressed(15955)(channel.id);
    const stateFromStoresObject2 = tmp(504).useStateFromStoresObject(tmp21, G);
    ({ resolvedUnreadSetting, muted, favorite } = stateFromStoresObject2);
    const _Symbol4 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor() {
          obj = { resolvedUnreadSetting: closure_9.resolveUnreadSetting(channel), muted: closure_9.isChannelMuted(channel.getGuildId(), channel.id), favorite: closure_9.isMessagesFavorite(channel.id) };
          return obj;
        }
      }
      const items4 = [RelationshipStore];
      cResult[17] = items4;
      const tmp24 = items4;
    } else {
      class G {
        constructor() {
          obj = { resolvedUnreadSetting: closure_9.resolveUnreadSetting(channel), muted: closure_9.isChannelMuted(channel.getGuildId(), channel.id), favorite: closure_9.isMessagesFavorite(channel.id) };
          return obj;
        }
      }
    }
    if (cResult[18] !== channel) {
      class Z {
        constructor() {
          obj = channel;
          isIgnoredResult = channel.isDM();
          if (isIgnoredResult) {
            tmp2 = closure_7;
            isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
          }
          obj1 = { ignored: isIgnoredResult, blocked: null };
          isBlockedResult = obj.isDM();
          if (isBlockedResult) {
            tmp4 = closure_7;
            isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
          }
          obj1.blocked = isBlockedResult;
          return obj1;
        }
      }
      cResult[18] = channel;
      cResult[19] = Z;
    } else {
      class Z {
        constructor() {
          obj = channel;
          isIgnoredResult = channel.isDM();
          if (isIgnoredResult) {
            tmp2 = closure_7;
            isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
          }
          obj1 = { ignored: isIgnoredResult, blocked: null };
          isBlockedResult = obj.isDM();
          if (isBlockedResult) {
            tmp4 = closure_7;
            isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
          }
          obj1.blocked = isBlockedResult;
          return obj1;
        }
      }
    }
    const tmpResult10 = tmp(504);
    const stateFromStoresObject3 = tmp(504).useStateFromStoresObject(tmp24, Z);
    ({ ignored, blocked } = stateFromStoresObject3);
    const _Symbol5 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor() {
          obj = channel;
          isIgnoredResult = channel.isDM();
          if (isIgnoredResult) {
            tmp2 = closure_7;
            isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
          }
          obj1 = { ignored: isIgnoredResult, blocked: null };
          isBlockedResult = obj.isDM();
          if (isBlockedResult) {
            tmp4 = closure_7;
            isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
          }
          obj1.blocked = isBlockedResult;
          return obj1;
        }
      }
      const items5 = [UserStore];
      cResult[20] = items5;
      const tmp27 = items5;
    } else {
      class Z {
        constructor() {
          obj = channel;
          isIgnoredResult = channel.isDM();
          if (isIgnoredResult) {
            tmp2 = closure_7;
            isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
          }
          obj1 = { ignored: isIgnoredResult, blocked: null };
          isBlockedResult = obj.isDM();
          if (isBlockedResult) {
            tmp4 = closure_7;
            isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
          }
          obj1.blocked = isBlockedResult;
          return obj1;
        }
      }
    }
    if (cResult[21] !== channel) {
      class Z {
        constructor() {
          obj = channel;
          isIgnoredResult = channel.isDM();
          if (isIgnoredResult) {
            tmp2 = closure_7;
            isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
          }
          obj1 = { ignored: isIgnoredResult, blocked: null };
          isBlockedResult = obj.isDM();
          if (isBlockedResult) {
            tmp4 = closure_7;
            isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
          }
          obj1.blocked = isBlockedResult;
          return obj1;
        }
      }
      cResult[21] = channel;
      cResult[22] = tmp29;
    } else {
      class Z {
        constructor() {
          obj = channel;
          isIgnoredResult = channel.isDM();
          if (isIgnoredResult) {
            tmp2 = closure_7;
            isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
          }
          obj1 = { ignored: isIgnoredResult, blocked: null };
          isBlockedResult = obj.isDM();
          if (isBlockedResult) {
            tmp4 = closure_7;
            isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
          }
          obj1.blocked = isBlockedResult;
          return obj1;
        }
      }
    }
    const tmpResult11 = tmp(504);
    const stateFromStores1 = tmp(504).useStateFromStores(tmp27, tmp29);
    if (cResult[23] !== stateFromStores1) {
      class Z {
        constructor() {
          obj = channel;
          isIgnoredResult = channel.isDM();
          if (isIgnoredResult) {
            tmp2 = closure_7;
            isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
          }
          obj1 = { ignored: isIgnoredResult, blocked: null };
          isBlockedResult = obj.isDM();
          if (isBlockedResult) {
            tmp4 = closure_7;
            isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
          }
          obj1.blocked = isBlockedResult;
          return obj1;
        }
      }
      tmp32[0] = stateFromStores1;
      cResult[23] = stateFromStores1;
      cResult[24] = tmp32;
    } else {
      class Z {
        constructor() {
          obj = channel;
          isIgnoredResult = channel.isDM();
          if (isIgnoredResult) {
            tmp2 = closure_7;
            isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
          }
          obj1 = { ignored: isIgnoredResult, blocked: null };
          isBlockedResult = obj.isDM();
          if (isBlockedResult) {
            tmp4 = closure_7;
            isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
          }
          obj1.blocked = isBlockedResult;
          return obj1;
        }
      }
    }
    const tmpResult12 = tmp(504);
    const nameplate = tmp(7888).useNameplate(tmp32);
    let tmp35 = null != nameplate;
    if (tmp35) {
      class Z {
        constructor() {
          obj = channel;
          isIgnoredResult = channel.isDM();
          if (isIgnoredResult) {
            tmp2 = closure_7;
            isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
          }
          obj1 = { ignored: isIgnoredResult, blocked: null };
          isBlockedResult = obj.isDM();
          if (isBlockedResult) {
            tmp4 = closure_7;
            isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
          }
          obj1.blocked = isBlockedResult;
          return obj1;
        }
      }
      if (!stateFromStores) {
        class Z {
          constructor() {
            obj = channel;
            isIgnoredResult = channel.isDM();
            if (isIgnoredResult) {
              tmp2 = closure_7;
              isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
            }
            obj1 = { ignored: isIgnoredResult, blocked: null };
            isBlockedResult = obj.isDM();
            if (isBlockedResult) {
              tmp4 = closure_7;
              isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
            }
            obj1.blocked = isBlockedResult;
            return obj1;
          }
        }
      }
      tmp35 = tmp36;
    }
    const tmpResult13 = tmp(7888);
    if (tmpResult14.isIOS()) {
      class Z {
        constructor() {
          obj = channel;
          isIgnoredResult = channel.isDM();
          if (isIgnoredResult) {
            tmp2 = closure_7;
            isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
          }
          obj1 = { ignored: isIgnoredResult, blocked: null };
          isBlockedResult = obj.isDM();
          if (isBlockedResult) {
            tmp4 = closure_7;
            isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
          }
          obj1.blocked = isBlockedResult;
          return obj1;
        }
      }
      if (tmp35) {
        class Z {
          constructor() {
            obj = channel;
            isIgnoredResult = channel.isDM();
            if (isIgnoredResult) {
              tmp2 = closure_7;
              isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
            }
            obj1 = { ignored: isIgnoredResult, blocked: null };
            isBlockedResult = obj.isDM();
            if (isBlockedResult) {
              tmp4 = closure_7;
              isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
            }
            obj1.blocked = isBlockedResult;
            return obj1;
          }
        }
      } else {
        class Z {
          constructor() {
            obj = channel;
            isIgnoredResult = channel.isDM();
            if (isIgnoredResult) {
              tmp2 = closure_7;
              isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
            }
            obj1 = { ignored: isIgnoredResult, blocked: null };
            isBlockedResult = obj.isDM();
            if (isBlockedResult) {
              tmp4 = closure_7;
              isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
            }
            obj1.blocked = isBlockedResult;
            return obj1;
          }
        }
      }
    }
    if (cResult[25] === channel.guild_id) {
      class Z {
        constructor() {
          obj = channel;
          isIgnoredResult = channel.isDM();
          if (isIgnoredResult) {
            tmp2 = closure_7;
            isIgnoredResult = closure_7.isIgnored(obj.getRecipientId());
          }
          obj1 = { ignored: isIgnoredResult, blocked: null };
          isBlockedResult = obj.isDM();
          if (isBlockedResult) {
            tmp4 = closure_7;
            isBlockedResult = closure_7.isBlocked(obj.getRecipientId());
          }
          obj1.blocked = isBlockedResult;
          return obj1;
        }
      }
    }
    function re() {
      ChannelActionCreatorsDefault.preload(channel.guild_id, channel.id);
      setIsPressed(true);
    }
    cResult[25] = channel.guild_id;
    cResult[26] = channel.id;
    cResult[27] = setIsPressed;
    cResult[28] = re;
    tmpResult14 = tmp(1369);
  }
  const items6 = [tmp8.pressable, rowSelected];
  cResult[5] = tmp8.pressable;
  cResult[6] = rowSelected;
  cResult[7] = items6;
  const tmpResult = channel(504);
}) : ((channel) => {
  channel = channel.channel;
  const height = channel.height;
  const setIsPressed = channel.setIsPressed;
  let isPressed;
  let items = [SelectedChannelStore];
  const stateFromStores = channel(isPressed[14]).useStateFromStores(items, () => {
    let id;
    const channelId = SelectedChannelStore.getChannelId(null);
    if (channel != null) {
      id = channel.id;
    }
    return channelId === id;
  });
  let tmp4 = closure_14();
  closure_5 = tmp4;
  const items1 = [height];
  const items2 = [tmp4, stateFromStores];
  const memo = setIsPressed.useMemo(() => ({ height, overflow: "hidden" }), items1);
  const memo1 = setIsPressed.useMemo(() => {
    const items = [closure_5.pressable, ];
    let rowSelected;
    if (stateFromStores) {
      rowSelected = closure_5.rowSelected;
    }
    items[1] = rowSelected;
    return items;
  }, items2);
  const obj = channel(isPressed[14]);
  const items3 = [closure_5];
  const stateFromStoresObject = channel(isPressed[14]).useStateFromStoresObject(items3, () => {
    if (channel.isDM()) {
      const activities = PresenceStore.getActivities(channel.getRecipientId());
    }
    if (channel.isDM()) {
      const obj2 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
      let obj3 = obj2;
    } else {
      obj3 = { status: "Symbol", activities: "current" };
    }
    return obj3;
  });
  ({ status, activities } = stateFromStoresObject);
  let obj3 = channel(isPressed[14]);
  const items4 = [isPressed];
  const stateFromStoresObject1 = channel(isPressed[14]).useStateFromStoresObject(items4, () => {
    const mentionCount = ReadStateStore.getMentionCount(channel.id);
    const obj3 = { mentionCount, hasUnreadMessages: null };
    let tmp2 = mentionCount > 0;
    if (!tmp2) {
      tmp2 = null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
      const tmp4 = null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
    }
    obj3.hasUnreadMessages = tmp2;
    return obj3;
  });
  const hasUnreadMessages = stateFromStoresObject1.hasUnreadMessages;
  const obj4 = channel(isPressed[14]);
  ({ isIncomingCall, isOngoingCall } = height(isPressed[15])(channel.id));
  const tmp10 = height(isPressed[15])(channel.id);
  const items5 = [UserGuildSettingsStore];
  const stateFromStoresObject2 = channel(isPressed[14]).useStateFromStoresObject(items5, () => ({ resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel), muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id), favorite: UserGuildSettingsStore.isMessagesFavorite(channel.id) }));
  ({ resolvedUnreadSetting, muted, favorite } = stateFromStoresObject2);
  const obj5 = channel(isPressed[14]);
  const items6 = [RelationshipStore];
  const stateFromStoresObject3 = channel(isPressed[14]).useStateFromStoresObject(items6, () => {
    let isIgnoredResult = channel.isDM();
    if (isIgnoredResult) {
      isIgnoredResult = RelationshipStore.isIgnored(channel.getRecipientId());
    }
    const obj2 = { ignored: isIgnoredResult, blocked: null };
    let isBlockedResult = channel.isDM();
    if (isBlockedResult) {
      isBlockedResult = RelationshipStore.isBlocked(channel.getRecipientId());
    }
    obj2.blocked = isBlockedResult;
    return obj2;
  });
  ({ ignored, blocked } = stateFromStoresObject3);
  const obj6 = channel(isPressed[14]);
  const items7 = [UserStore];
  const stateFromStores1 = channel(isPressed[14]).useStateFromStores(items7, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return UserStore.getUser(recipientId);
  });
  const obj7 = channel(isPressed[14]);
  const nameplate = channel(isPressed[16]).useNameplate({ user: stateFromStores1 });
  let tmp15 = null != nameplate;
  if (tmp15) {
    let tmp16 = stateFromStores;
    if (!stateFromStores) {
      tmp16 = isPressed;
    }
    tmp15 = tmp16;
  }
  isPressed = tmp15;
  const items8 = [stateFromStores, tmp15, isPressed, tmp4];
  const items9 = [, , ];
  ({ guild_id: arr10[0], id: arr10[1] } = channel);
  items9[2] = setIsPressed;
  const memo2 = obj2.useMemo(() => {
    let tmp = null;
    if (obj.isIOS()) {
      if (isPressed) {
        tmp = null;
      } else if (isPressed) {
        let backgroundColor = closure_5.rowActive.backgroundColor;
      } else if (stateFromStores) {
        backgroundColor = closure_5.rowSelected.backgroundColor;
      }
    }
    return tmp;
  }, items8);
  const items10 = [setIsPressed];
  const callback = obj2.useCallback(() => {
    ChannelActionCreatorsDefault.preload(channel.guild_id, channel.id);
    setIsPressed(true);
  }, items9);
  const items11 = [channel.id];
  const callback1 = obj2.useCallback(() => {
    setIsPressed(false);
  }, items10);
  const items12 = [channel.id];
  const callback2 = obj2.useCallback(() => {
    transitionToChannel.transitionToChannel(channel.id);
  }, items11);
  const obj9 = { style: memo, collapsable: false, children: null };
  const callback3 = obj2.useCallback(() => {
    const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
  }, items12);
  const obj10 = { onPressIn: callback, onPressOut: callback1, onPress: callback2, onLongPress: callback3, accessibilityRole: "button", accessibilityLabel: height(isPressed[21])({ channel, unread: hasUnreadMessages, mentionCount: stateFromStoresObject1.mentionCount, isIncomingCall, isOngoingCall, ignored, blocked }), accessibilityHint: null, underlayColor: null, style: null, children: null };
  const obj8 = channel(isPressed[16]);
  obj10.accessibilityHint = channel(isPressed[21]).getChannelA11yHint({ channel, muted, userStatus: status, isFavorite: favorite });
  obj10.underlayColor = tmp4.rowActive.backgroundColor;
  obj10.style = memo1;
  let tmp26;
  const tmpResult = channel(isPressed[21]);
  if (tmp15) {
    tmp26 = nameplate;
  }
  const obj11 = { nameplate: tmp26, isFocused: stateFromStores, isPressed, isMuted: null, fadeIn: null, style: null };
  let tmp27 = muted;
  if (!muted) {
    tmp27 = ignored;
  }
  if (!tmp27) {
    tmp27 = blocked;
  }
  obj11.isMuted = tmp27;
  obj11.fadeIn = isPressed;
  obj11.style = tmp4.nameplate;
  const items13 = [closure_12(height(isPressed[22]), obj11), , , , ];
  let tmp22Result = stateFromStores;
  if (stateFromStores) {
    const obj12 = { style: tmp4.selectedBorder, pointerEvents: "none" };
    tmp22Result = closure_12(tmp23, obj12);
  }
  items13[1] = tmp22Result;
  const obj13 = { unread: hasUnreadMessages, resolvedUnreadSetting, muted, layout: null, panelVariant: true };
  const tmp9Result = height(isPressed[22]);
  obj13.layout = channel(isPressed[24]).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  items13[2] = closure_12(height(isPressed[23]), obj13);
  const obj14 = { backgroundColor: memo2, children: null };
  const obj15 = { channel, channelSelected: stateFromStores, hasUnreadMessages, muted, ignored, blocked, isStreaming: null, status: null };
  const tmp9Result4 = height(isPressed[23]);
  obj15.isStreaming = height(isPressed[25])(activities);
  obj15.status = status;
  obj14.children = closure_12(height(isPressed[26]), obj15);
  items13[3] = closure_12(channel(isPressed[27]).CutoutBackgroundProvider, obj14);
  const obj16 = { channel, channelSelected: stateFromStores, favorite, muted, ignored, blocked, hasActivity: null, hasUnreadMessages: null, resolvedUnreadSetting: null, hasNameplate: null };
  let someResult;
  const tmp9Result5 = height(isPressed[26]);
  if (activities != null) {
    someResult = activities.some((type) => type.type !== constants.CUSTOM_STATUS);
  }
  obj16.hasActivity = true === someResult;
  obj16.hasUnreadMessages = hasUnreadMessages;
  obj16.resolvedUnreadSetting = resolvedUnreadSetting;
  obj16.hasNameplate = tmp15;
  items13[4] = closure_12(height(isPressed[28]), obj16);
  obj10.children = items13;
  obj9.children = closure_13(channel(isPressed[29]).PressableHighlight, obj10);
  return closure_12(stateFromStores, obj9);
}));
export const MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING = 1;