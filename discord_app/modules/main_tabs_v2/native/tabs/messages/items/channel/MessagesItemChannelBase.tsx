// discord_app/modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx
import react_native from "../../../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../../../Constants.tsx";
import PlatformUtils from "../../../../../../../utils/PlatformUtils.tsx";
import transitionToChannel from "../../../../../../routing/transitionToChannel.tsx";
import ChannelActionCreatorsDefault from "../../../../../../../actions/ChannelActionCreators.tsx";
import openChannelLongPressActionSheet from "../../../../../../channel/native/openChannelLongPressActionSheet.tsx";
import react from "../../../../../../../../_runtime/00019_react.js";
import PresenceStore from "../../../../../../../stores/PresenceStore.tsx";
import ReadStateStore from "../../../../../../../stores/ReadStateStore.tsx";
import RelationshipStore from "../../../../../../../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../../../../../../../stores/SelectedChannelStore.tsx";
import UserGuildSettingsStore from "../../../../../../../stores/UserGuildSettingsStore.tsx";
import UserStore from "../../../../../../../stores/UserStore.tsx";
import Fragment from "../../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../../_runtime/metro/00002__.js";

let channel;

let closure_12;
let map1;
const View = react_native.View;
const ActivityTypes = Constants.ActivityTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = createStyles.createStyles(() => {
  let rect;
  const obj = {
    pressable: {
      marginBottom: 1,
      borderRadius: nativeDefault.radii.md,
      marginHorizontal: nativeDefault.space.PX_8,
      paddingHorizontal: nativeDefault.space.PX_8,
      marginVertical: nativeDefault.space.PX_4,
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    nameplate: { borderRadius: nativeDefault.radii.md },
    rowActive: { backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE },
    selectedBorder: rect,
    rowSelected: { borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED },
  };
  ({
    marginBottom: 1,
    borderRadius: nativeDefault.radii.md,
    marginHorizontal: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_8,
    marginVertical: nativeDefault.space.PX_4,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  });
  ({ borderRadius: nativeDefault.radii.md });
  ({ backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_ACTIVE });
  rect = {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    borderRadius: nativeDefault.radii.md,
  };
  ({ borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED });
  return obj;
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let activities;
        let blocked;
        let favorite;
        let first;
        let hasUnreadMessages;
        let height;
        let ignored;
        let isIncomingCall;
        let isOngoingCall;
        let isPressed;
        let mentionCount;
        let muted;
        let resolvedUnreadSetting;
        let setIsPressed;
        let status;
        let tmp6;
        let obj = channel(576);
        const cResult = obj.c(105);
        channel = channel.channel;
        ({ height, isPressed, setIsPressed } = channel);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [SelectedChannelStore];
          cResult[0] = items;
          first = items;
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
          tmp6 = fn;
        } else {
          tmp6 = cResult[2];
        }
        const tmpResult = channel(504);
        const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
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
          let tmp12;
          let tmp16;
          let tmp21;
          let tmp24;
          let tmp27;
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const items1 = [PresenceStore];
            cResult[8] = items1;
            tmp12 = items1;
          } else {
            tmp12 = cResult[8];
          }
          if (cResult[9] !== channel) {
            class E {
              constructor() {
                let activities;
                let obj3;
                if (channel.isDM()) {
                  activities = PresenceStore.getActivities(channel.getRecipientId());
                }
                if (channel.isDM()) {
                  obj3 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
                  const obj2 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
                } else {
                  obj3 = { status: "Array", activities: "Set" };
                }
                return obj3;
              }
            }
            cResult[9] = channel;
            cResult[10] = E;
          } else {
            class E {
              constructor() {
                let activities;
                let obj3;
                if (channel.isDM()) {
                  activities = PresenceStore.getActivities(channel.getRecipientId());
                }
                if (channel.isDM()) {
                  obj3 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
                  const obj2 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
                } else {
                  obj3 = { status: "Array", activities: "Set" };
                }
                return obj3;
              }
            }
          }
          const tmpResult8 = channel(504);
          const stateFromStoresObject = tmpResult8.useStateFromStoresObject(tmp12, E);
          ({ status, activities } = stateFromStoresObject);
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor() {
                let activities;
                let obj3;
                if (channel.isDM()) {
                  activities = PresenceStore.getActivities(channel.getRecipientId());
                }
                if (channel.isDM()) {
                  obj3 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
                  const obj2 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
                } else {
                  obj3 = { status: "Array", activities: "Set" };
                }
                return obj3;
              }
            }
            const items2 = [ReadStateStore];
            cResult[11] = items2;
            tmp16 = items2;
          } else {
            class E {
              constructor() {
                let activities;
                let obj3;
                if (channel.isDM()) {
                  activities = PresenceStore.getActivities(channel.getRecipientId());
                }
                if (channel.isDM()) {
                  obj3 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
                  const obj2 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
                } else {
                  obj3 = { status: "Array", activities: "Set" };
                }
                return obj3;
              }
            }
          }
          if (cResult[12] !== channel) {
            class B {
              constructor() {
                let tmp2;
                const mentionCount = ReadStateStore.getMentionCount(channel.id);
                const obj3 = { mentionCount, hasUnreadMessages: tmp2 };
                tmp2 = mentionCount > 0;
                if (!tmp2) {
                  tmp2 = null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
                  null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
                }
                return obj3;
              }
            }
            cResult[12] = channel;
            cResult[13] = B;
          } else {
            class B {
              constructor() {
                let tmp2;
                const mentionCount = ReadStateStore.getMentionCount(channel.id);
                const obj3 = { mentionCount, hasUnreadMessages: tmp2 };
                tmp2 = mentionCount > 0;
                if (!tmp2) {
                  tmp2 = null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
                  null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
                }
                return obj3;
              }
            }
          }
          const tmpResult9 = channel(504);
          const stateFromStoresObject1 = tmpResult9.useStateFromStoresObject(tmp16, B);
          ({ mentionCount, hasUnreadMessages } = stateFromStoresObject1);
          ({ isIncomingCall, isOngoingCall } = setIsPressed(15959)(channel.id));
          const _Symbol3 = Symbol;
          setIsPressed(15959)(channel.id);
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            class B {
              constructor() {
                let tmp2;
                const mentionCount = ReadStateStore.getMentionCount(channel.id);
                const obj3 = { mentionCount, hasUnreadMessages: tmp2 };
                tmp2 = mentionCount > 0;
                if (!tmp2) {
                  tmp2 = null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
                  null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
                }
                return obj3;
              }
            }
            const items3 = [UserGuildSettingsStore];
            cResult[14] = items3;
            tmp21 = items3;
          } else {
            class B {
              constructor() {
                let tmp2;
                const mentionCount = ReadStateStore.getMentionCount(channel.id);
                const obj3 = { mentionCount, hasUnreadMessages: tmp2 };
                tmp2 = mentionCount > 0;
                if (!tmp2) {
                  tmp2 = null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
                  null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
                }
                return obj3;
              }
            }
          }
          if (cResult[15] !== channel) {
            class G {
              constructor() {
                const obj = {
                  resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel),
                  muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id),
                  favorite: UserGuildSettingsStore.isMessagesFavorite(channel.id),
                };
                return obj;
              }
            }
            cResult[15] = channel;
            cResult[16] = G;
          } else {
            class G {
              constructor() {
                const obj = {
                  resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel),
                  muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id),
                  favorite: UserGuildSettingsStore.isMessagesFavorite(channel.id),
                };
                return obj;
              }
            }
          }
          const tmpResult10 = channel(504);
          const stateFromStoresObject2 = tmpResult10.useStateFromStoresObject(tmp21, G);
          ({ resolvedUnreadSetting, muted, favorite } = stateFromStoresObject2);
          const _Symbol4 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class G {
              constructor() {
                const obj = {
                  resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel),
                  muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id),
                  favorite: UserGuildSettingsStore.isMessagesFavorite(channel.id),
                };
                return obj;
              }
            }
            const items4 = [RelationshipStore];
            cResult[17] = items4;
            tmp24 = items4;
          } else {
            class G {
              constructor() {
                const obj = {
                  resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel),
                  muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id),
                  favorite: UserGuildSettingsStore.isMessagesFavorite(channel.id),
                };
                return obj;
              }
            }
          }
          if (cResult[18] !== channel) {
            class Z {
              constructor() {
                let isBlockedResult;
                const obj2 = {
                  ignored: channel.isDM() && RelationshipStore.isIgnored(channel.getRecipientId()),
                  blocked: isBlockedResult,
                };
                isBlockedResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
                return obj2;
              }
            }
            cResult[18] = channel;
            cResult[19] = Z;
          } else {
            class Z {
              constructor() {
                let isBlockedResult;
                const obj2 = {
                  ignored: channel.isDM() && RelationshipStore.isIgnored(channel.getRecipientId()),
                  blocked: isBlockedResult,
                };
                isBlockedResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
                return obj2;
              }
            }
          }
          const tmpResult11 = channel(504);
          const stateFromStoresObject3 = tmpResult11.useStateFromStoresObject(tmp24, Z);
          ({ ignored, blocked } = stateFromStoresObject3);
          const _Symbol5 = Symbol;
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
            class Z {
              constructor() {
                let isBlockedResult;
                const obj2 = {
                  ignored: channel.isDM() && RelationshipStore.isIgnored(channel.getRecipientId()),
                  blocked: isBlockedResult,
                };
                isBlockedResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
                return obj2;
              }
            }
            const items5 = [UserStore];
            cResult[20] = items5;
            tmp27 = items5;
          } else {
            class Z {
              constructor() {
                let isBlockedResult;
                const obj2 = {
                  ignored: channel.isDM() && RelationshipStore.isIgnored(channel.getRecipientId()),
                  blocked: isBlockedResult,
                };
                isBlockedResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
                return obj2;
              }
            }
          }
          if (cResult[21] !== channel) {
            class Z {
              constructor() {
                let isBlockedResult;
                const obj2 = {
                  ignored: channel.isDM() && RelationshipStore.isIgnored(channel.getRecipientId()),
                  blocked: isBlockedResult,
                };
                isBlockedResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
                return obj2;
              }
            }
            cResult[21] = channel;
            cResult[22] = tmp29;
          } else {
            class Z {
              constructor() {
                let isBlockedResult;
                const obj2 = {
                  ignored: channel.isDM() && RelationshipStore.isIgnored(channel.getRecipientId()),
                  blocked: isBlockedResult,
                };
                isBlockedResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
                return obj2;
              }
            }
          }
          const tmpResult12 = channel(504);
          const stateFromStores1 = tmpResult12.useStateFromStores(tmp27, tmp29);
          if (cResult[23] !== stateFromStores1) {
            class Z {
              constructor() {
                let isBlockedResult;
                const obj2 = {
                  ignored: channel.isDM() && RelationshipStore.isIgnored(channel.getRecipientId()),
                  blocked: isBlockedResult,
                };
                isBlockedResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
                return obj2;
              }
            }
            tmp32[0] = stateFromStores1;
            cResult[23] = stateFromStores1;
            cResult[24] = tmp32;
          } else {
            class Z {
              constructor() {
                let isBlockedResult;
                const obj2 = {
                  ignored: channel.isDM() && RelationshipStore.isIgnored(channel.getRecipientId()),
                  blocked: isBlockedResult,
                };
                isBlockedResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
                return obj2;
              }
            }
          }
          const tmpResult13 = channel(7888);
          const nameplate = tmpResult13.useNameplate(tmp32);
          let tmp35 = null != nameplate;
          if (tmp35) {
            class Z {
              constructor() {
                let isBlockedResult;
                const obj2 = {
                  ignored: channel.isDM() && RelationshipStore.isIgnored(channel.getRecipientId()),
                  blocked: isBlockedResult,
                };
                isBlockedResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
                return obj2;
              }
            }
            tmp35 = tmp36;
          }
          const tmpResult14 = channel(1369);
          if (tmpResult14.isIOS()) {
            class Z {
              constructor() {
                let isBlockedResult;
                const obj2 = {
                  ignored: channel.isDM() && RelationshipStore.isIgnored(channel.getRecipientId()),
                  blocked: isBlockedResult,
                };
                isBlockedResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
                return obj2;
              }
            }
            if (!tmp35) {
              class Z {
                constructor() {
                  let isBlockedResult;
                  const obj2 = {
                    ignored: channel.isDM() && RelationshipStore.isIgnored(channel.getRecipientId()),
                    blocked: isBlockedResult,
                  };
                  isBlockedResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
                  return obj2;
                }
              }
            }
          }
          if (cResult[25] === channel.guild_id) {
            class Z {
              constructor() {
                let isBlockedResult;
                const obj2 = {
                  ignored: channel.isDM() && RelationshipStore.isIgnored(channel.getRecipientId()),
                  blocked: isBlockedResult,
                };
                isBlockedResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
                return obj2;
              }
            }
          }
          function re() {
            const obj = ChannelActionCreatorsDefault;
            obj.preload(channel.guild_id, channel.id);
            setIsPressed(true);
          }
          cResult[25] = channel.guild_id;
          cResult[26] = channel.id;
          cResult[27] = setIsPressed;
          cResult[28] = re;
        }
        const items6 = [tmp8.pressable, rowSelected];
        cResult[5] = tmp8.pressable;
        cResult[6] = rowSelected;
        cResult[7] = items6;
      }
    : (channel) => {
        let PressableHighlight;
        let activities;
        let blocked;
        let favorite;
        let ignored;
        let isIncomingCall;
        let isOngoingCall;
        let items13;
        let muted;
        let obj10;
        let obj15;
        let resolvedUnreadSetting;
        let someResult;
        let status;
        let tmp9Result5;
        let tmpResult;
        channel = channel.channel;
        const height = channel.height;
        const isPressed = channel.isPressed;
        const setIsPressed = channel.setIsPressed;
        let closure_6;
        let tmp = channel;
        let tmp2 = isPressed;
        let obj = channel(isPressed[14]);
        let items = [SelectedChannelStore];
        const stateFromStores = obj.useStateFromStores(items, () => {
          let id;
          const channelId = SelectedChannelStore.getChannelId(null);
          if (channel != null) {
            id = channel.id;
          }
          return channelId === id;
        });
        const tmp4 = closure_14();
        let closure_5 = tmp4;
        let obj2 = setIsPressed;
        const items1 = [height];
        const items2 = [tmp4, stateFromStores];
        const memo = setIsPressed.useMemo(() => ({ height, overflow: "hidden" }), items1);
        const memo1 = setIsPressed.useMemo(() => {
          const items = [closure_5.pressable];
          let rowSelected;
          if (stateFromStores) {
            rowSelected = closure_5.rowSelected;
          }
          items[1] = rowSelected;
          return items;
        }, items2);
        let obj3 = channel(isPressed[14]);
        const items3 = [closure_5];
        const stateFromStoresObject = obj3.useStateFromStoresObject(items3, () => {
          let activities;
          let obj3;
          if (channel.isDM()) {
            activities = PresenceStore.getActivities(channel.getRecipientId());
          }
          if (channel.isDM()) {
            obj3 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
            const obj2 = { status: PresenceStore.getStatus(channel.getRecipientId()), activities };
          } else {
            obj3 = { status: "Array", activities: "Set" };
          }
          return obj3;
        });
        ({ status, activities } = stateFromStoresObject);
        const items4 = [closure_6];
        const obj4 = channel(isPressed[14]);
        const stateFromStoresObject1 = obj4.useStateFromStoresObject(items4, () => {
          let tmp2;
          const mentionCount = ReadStateStore.getMentionCount(channel.id);
          const obj3 = { mentionCount, hasUnreadMessages: tmp2 };
          tmp2 = mentionCount > 0;
          if (!tmp2) {
            tmp2 = null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
            null != channel.getGuildId() && ReadStateStore.hasUnread(channel.id);
          }
          return obj3;
        });
        const hasUnreadMessages = stateFromStoresObject1.hasUnreadMessages;
        let mentionCount = stateFromStoresObject1.mentionCount;
        ({ isIncomingCall, isOngoingCall } = height(isPressed[15])(channel.id));
        height(isPressed[15])(channel.id);
        const items5 = [UserGuildSettingsStore];
        const obj5 = channel(isPressed[14]);
        const stateFromStoresObject2 = obj5.useStateFromStoresObject(items5, () => {
          const obj = {
            resolvedUnreadSetting: UserGuildSettingsStore.resolveUnreadSetting(channel),
            muted: UserGuildSettingsStore.isChannelMuted(channel.getGuildId(), channel.id),
            favorite: UserGuildSettingsStore.isMessagesFavorite(channel.id),
          };
          return obj;
        });
        ({ resolvedUnreadSetting, muted, favorite } = stateFromStoresObject2);
        const items6 = [RelationshipStore];
        const obj6 = channel(isPressed[14]);
        const stateFromStoresObject3 = obj6.useStateFromStoresObject(items6, () => {
          let isBlockedResult;
          const obj2 = {
            ignored: channel.isDM() && RelationshipStore.isIgnored(channel.getRecipientId()),
            blocked: isBlockedResult,
          };
          isBlockedResult = channel.isDM() && RelationshipStore.isBlocked(channel.getRecipientId());
          return obj2;
        });
        ({ ignored, blocked } = stateFromStoresObject3);
        const items7 = [UserStore];
        const obj7 = channel(isPressed[14]);
        const stateFromStores1 = obj7.useStateFromStores(items7, () => {
          const getUser = UserStore.getUser;
          let recipientId;
          if (true === channel.isDM()) {
            recipientId = channel.getRecipientId();
          }
          return getUser(recipientId);
        });
        const obj8 = channel(isPressed[16]);
        const nameplate = obj8.useNameplate({ user: stateFromStores1 });
        let tmp15 = null != nameplate;
        if (tmp15) {
          tmp15 = stateFromStores || isPressed;
        }
        closure_6 = tmp15;
        const items8 = [stateFromStores, tmp15, isPressed, tmp4];
        const items9 = [, ,];
        ({ guild_id: arr10[0], id: arr10[1] } = channel);
        items9[2] = setIsPressed;
        const memo2 = obj2.useMemo(() => {
          let tmp = null;
          const obj = PlatformUtils;
          if (obj.isIOS()) {
            let tmp3 = null;
            if (!closure_6) {
              let backgroundColor;
              if (isPressed) {
                backgroundColor = closure_5.rowActive.backgroundColor;
              } else if (stateFromStores) {
                backgroundColor = closure_5.rowSelected.backgroundColor;
              }
              tmp3 = backgroundColor;
            }
            tmp = tmp3;
          }
          return tmp;
        }, items8);
        const items10 = [setIsPressed];
        const callback = obj2.useCallback(() => {
          const obj = ChannelActionCreatorsDefault;
          obj.preload(channel.guild_id, channel.id);
          setIsPressed(true);
        }, items9);
        const items11 = [channel.id];
        const callback1 = obj2.useCallback(() => {
          setIsPressed(false);
        }, items10);
        const items12 = [channel.id];
        const callback2 = obj2.useCallback(() => {
          const obj = transitionToChannel;
          obj.transitionToChannel(channel.id);
        }, items11);
        const obj9 = { style: memo, collapsable: false, children: closure_13(PressableHighlight, obj10) };
        const callback3 = obj2.useCallback(() => {
          const obj = openChannelLongPressActionSheet;
          const result = obj.openChannelLongPressActionSheet(channel.id);
        }, items12);
        obj10 = {
          onPressIn: callback,
          onPressOut: callback1,
          onPress: callback2,
          onLongPress: callback3,
          accessibilityRole: "button",
          accessibilityLabel: height(tmp2[21])({
            channel,
            unread: hasUnreadMessages,
            mentionCount,
            isIncomingCall,
            isOngoingCall,
            ignored,
            blocked,
          }),
          accessibilityHint: tmpResult.getChannelA11yHint({ channel, muted, userStatus: status, isFavorite: favorite }),
          underlayColor: tmp4.rowActive.backgroundColor,
          style: memo1,
          children: items13,
        };
        PressableHighlight = tmp(tmp2[29]).PressableHighlight;
        let tmp26;
        tmpResult = tmp(tmp2[21]);
        const tmp9Result = height(tmp2[22]);
        if (tmp15) {
          tmp26 = nameplate;
        }
        items13 = [, , , ,];
        const obj11 = {
          nameplate: tmp26,
          isFocused: stateFromStores,
          isPressed,
          isMuted: muted || ignored || blocked,
          fadeIn: isPressed,
          style: tmp4.nameplate,
        };
        items13[0] = closure_12(tmp9Result, obj11);
        let tmp22Result = stateFromStores;
        if (tmp22Result) {
          const obj12 = { style: tmp4.selectedBorder, pointerEvents: "none" };
          tmp22Result = closure_12(tmp23, obj12);
        }
        items13[1] = tmp22Result;
        const obj13 = {
          unread: hasUnreadMessages,
          resolvedUnreadSetting,
          muted,
          layout: tmp(tmp2[24]).ChannelListLayoutTypes.COZY_DRAWER_SMOL,
          panelVariant: true,
        };
        const tmp9Result4 = height(tmp2[23]);
        items13[2] = closure_12(tmp9Result4, obj13);
        const obj14 = { backgroundColor: memo2, children: closure_12(tmp9Result5, obj15) };
        const CutoutBackgroundProvider = tmp(tmp2[27]).CutoutBackgroundProvider;
        obj15 = {
          channel,
          channelSelected: stateFromStores,
          hasUnreadMessages,
          muted,
          ignored,
          blocked,
          isStreaming: height(tmp2[25])(activities),
          status,
        };
        tmp9Result5 = height(tmp2[26]);
        items13[3] = closure_12(CutoutBackgroundProvider, obj14);
        const obj16 = {
          channel,
          channelSelected: stateFromStores,
          favorite,
          muted,
          ignored,
          blocked,
          hasActivity: true === someResult,
          hasUnreadMessages,
          resolvedUnreadSetting,
          hasNameplate: tmp15,
        };
        someResult = undefined;
        const tmp9Result6 = height(tmp2[28]);
        if (activities != null) {
          someResult = activities.some((type) => type.type !== constants.CUSTOM_STATUS);
        }
        items13[4] = closure_12(tmp9Result6, obj16);
        return closure_12(stateFromStores, obj9);
      },
);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx",
);

export default memoResult;
export const MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING = 1;
