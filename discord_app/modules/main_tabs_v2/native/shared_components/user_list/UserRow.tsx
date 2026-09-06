// === Module 10868: UserRow ===

// Module 10868 (UserRow)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import utils_StringUtils from "utils/StringUtils" /* 1926 */;
import ToastUtils from "ToastUtils" /* 4258 */;
import UserUtilsDefault from "UserUtils" /* 4404 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4511 */;
import XLargeIcon from "XLargeIcon" /* 4513 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4573 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import ChatIcon from "ChatIcon" /* 5071 */;
import FriendSuggestionActionCreatorsDefault from "FriendSuggestionActionCreators" /* 7663 */;
import PhoneCallIcon from "PhoneCallIcon" /* 7880 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9042 */;
import BoostGemIcon from "BoostGemIcon" /* 9375 */;
import PeopleUtilsDefault from "PeopleUtils" /* 10870 */;
import GameRelationshipActionCreatorsDefault from "GameRelationshipActionCreators" /* 10871 */;
import ActivityStatusDefault from "ActivityStatus" /* 10876 */;
import ActionButtonDefault from "ActionButton" /* 10896 */;
import CrownIcon from "CrownIcon" /* 10897 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7662 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

require = fn;
function UserRowSubLabel(arg0) {
  ({ user, type, applicationId: require } = arg0);
  ({ animate, isGameRelationship, guildId } = arg0);
  let gameIcon = closure_19();
  let obj = initialize;
  const items = [ApplicationStore];
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(require));
  if (type !== constants.PENDING_INCOMING) {
    if (type !== tmp3.SUGGESTION) {
      if (type !== tmp3.PENDING_OUTGOING) {
        obj = { userId: user.id, guildId, textStyle: gameIcon.activityText, animate };
        return closure_14(ActivityStatusDefault, obj);
      }
    }
  }
  if (!isGameRelationship) {
    obj = { lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: tmp(4404).getUserTag(user) };
    closure_14(tmp(4556).Text, obj);
    const tmpResult = tmp(4404);
  }
  if (null == stateFromStores) {
    const obj1 = { style: null };
    gameIcon = gameIcon.gameIcon;
    obj1.style = gameIcon;
    closure_14(View, obj1);
  } else {
    const obj2 = { style: gameIcon.gameContainer, children: null };
    const obj3 = { style: gameIcon.gameIcon, resizeMode: "contain", source: null, disableColor: true };
    let str = stateFromStores.getIconURL(16);
    if (str == null) {
      str = "";
    }
    const obj4 = { uri: str };
    obj3.source = obj4;
    const items1 = [closure_14(tmp(1178).Icon, obj3, stateFromStores.id), ];
    const obj5 = { lineClamp: 1, variant: "text-xs/medium", color: "text-subtle", children: stateFromStores.name };
    items1[1] = closure_14(tmp(4556).Text, obj5);
    obj2.children = items1;
    closure_15(View, obj2);
  }
}
const View = fn(17).View;
const UserRowModes = fn(10860).UserRowModes;
const Constants = fn(1074);
({ RelationshipTypes: closure_12, StatusTypes: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let closure_17 = { CALL: "call", MESSAGE: "message", ACCEPT: "accept", DECLINE: "decline", CANCEL: "cancel", ACCEPT_SUGGESTION: "accept-suggestion", IGNORE_SUGGESTION: "ignore-suggestion", TOGGLE: "toggle" };
let createStyles = fn(4560);
let closure_18 = createStyles.createStyles({ avatar: { flexShrink: 0, flexGrow: 0 }, actions: { flexDirection: "row" }, action: { marginLeft: 12, alignSelf: "center" }, buttonWrapper: { marginLeft: 8 }, labelContainer: { flexDirection: "row", alignItems: "center" }, roleDot: { marginRight: 4, paddingTop: 0 }, usernameLabelContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, usernameLabel: { display: "flex", flexShrink: 1 } });
fn(4560);
let obj = { activityText: null, gameContainer: null, gameIcon: null };
obj = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.activityText = obj;
createStyles = { flexDirection: "row", gap: 4, cornerRadius: nativeDefault.radii.xs };
obj.gameContainer = createStyles;
obj.gameIcon = { width: 14, height: 14 };
let closure_19 = createStyles.createStyles(obj);
const Friends_v2 = "Friends_v2";
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx");

export default noop.memo(function UserRow(type) {
  type = type.type;
  const user = type.user;
  let NONE = type.mode;
  if (NONE === undefined) {
    NONE = guildId.NONE;
  }
  let flag = type.selected;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = type.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = type.isOwner;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const onPress = type.onPress;
  const onLongPress = type.onLongPress;
  const handleMessage = type.handleMessage;
  ({ nickname: stateFromStores, usernameColor } = type);
  ({ roleColors, premiumSince } = type);
  guildId = type.guildId;
  const trailing = type.trailing;
  const subLabel = type.subLabel;
  const label = type.label;
  ({ accessibilityActions, onAccessibilityAction, applicationId } = type);
  let flag4 = type.isGameRelationship;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = type.isNameplatedRow;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = type.canShowDisplayNameStyles;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = type.canShowDisplayNameStylesFont;
  if (flag7 === undefined) {
    flag7 = false;
  }
  const merged = Object.assign(type, Object.assign({ type: 0, user: 0, mode: 0, selected: 0, disabled: 0, isOwner: 0, onPress: 0, onLongPress: 0, handleMessage: 0, nickname: 0, usernameColor: 0, roleColors: 0, premiumSince: 0, guildId: 0, trailing: 0, subLabel: 0, label: 0, accessibilityActions: 0, onAccessibilityAction: 0, applicationId: 0, isGameRelationship: 0, isNameplatedRow: 0, canShowDisplayNameStyles: 0, canShowDisplayNameStylesFont: 0 }));
  let analyticsLocations;
  let tmp3 = analyticsLocations();
  closure_17 = tmp3;
  analyticsLocations = user(NONE[26])().analyticsLocations;
  let obj = type(NONE[21]);
  let items = [onPress];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ useReducedMotion: onPress.useReducedMotion, roleStyle: onPress.roleStyle }));
  const useReducedMotion = stateFromStoresObject.useReducedMotion;
  const roleStyle = stateFromStoresObject.roleStyle;
  let obj1 = type(NONE[21]);
  let items1 = [usernameColor];
  const stateFromStoresObject1 = obj1.useStateFromStoresObject(items1, () => ({ isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id), status: PresenceStore.getStatus(user.id) }));
  const isMobileOnline = stateFromStoresObject1.isMobileOnline;
  const isVROnline = stateFromStoresObject1.isVROnline;
  const status = stateFromStoresObject1.status;
  let obj2 = type(NONE[21]);
  let items2 = [premiumSince];
  stateFromStores = obj2.useStateFromStores(items2, () => {
    let tmp = stateFromStores;
    if (stateFromStores == null) {
      let nickname = null;
      if (null == guildId) {
        nickname = RelationshipStore.getNickname(user.id);
      }
      tmp = nickname;
    }
    return tmp;
  });
  let obj3 = type(NONE[21]);
  const items3 = [handleMessage];
  const stateFromStores1 = obj3.useStateFromStores(items3, () => FriendSuggestionStore.getSuggestion(user.id));
  let obj4 = type(NONE[27]);
  const avatarDecoration = obj4.useAvatarDecoration(user, guildId);
  let obj5 = flag2;
  const items4 = [user, onPress];
  const callback = flag2.useCallback(() => {
    if (onPress != null) {
      tmp(user);
    }
  }, items4);
  closure_26 = flag2.useRef(user);
  const items5 = [user];
  const effect = flag2.useEffect(() => {
    closure_26.current = user;
  }, items5);
  const items6 = [NONE, type, user, handleMessage, applicationId, tmp3];
  const memo = flag2.useMemo(() => {
    const items = [];
    if (NONE !== UserRowModes.ACTIONS) {
      let obj = { accessibilityActions: items, actions: "a" };
      return obj;
    } else {
      if (constants.PENDING_INCOMING === type) {
        obj = { name: closure_17.DECLINE, label: null };
        const intl6 = util.intl;
        const obj1 = { name: null };
        let obj15 = UserUtilsDefault;
        obj1.name = obj15.getName(user);
        obj.label = intl6.formatToPlainString(util.t["C9Xe6+"], obj1);
        let obj2 = { name: closure_17.ACCEPT, label: null };
        const intl7 = util.intl;
        let obj3 = { name: null };
        let obj18 = UserUtilsDefault;
        obj3.name = obj18.getName(user);
        obj2.label = intl7.formatToPlainString(util.t["6p0yBo"], obj3);
        items.push(obj, obj2);
        let obj4 = { style: closure_17.actions, children: null };
        let obj5 = {
          styles: closure_17.action,
          IconComponent: XLargeIcon.XLargeIcon,
          type: "neutral",
          onPress() {
                const current = closure_1_26.current;
                if (null != applicationId) {
                  let obj = { userId: current.id, applicationId: tmp };
                  const result = user(NONE[18]).cancelGameFriendRequest(obj);
                  const obj4 = user(NONE[18]);
                  const result1 = type(NONE[17]).presentGameFriendRequestIgnoredToast();
                  const obj6 = type(NONE[17]);
                } else {
                  user(NONE[19]);
                  obj = { location: roleStyle };
                  obj.cancelFriendRequest(current.id, obj);
                  const result2 = type(NONE[17]).presentFriendRequestIgnoredToast();
                  const obj3 = type(NONE[17]);
                }
              },
          accessibilityLabel: null
        };
        const intl8 = util.intl;
        let obj6 = { name: null };
        let obj22 = UserUtilsDefault;
        obj6.name = obj22.getName(user);
        obj5.accessibilityLabel = intl8.formatToPlainString(util.t["C9Xe6+"], obj6);
        const items1 = [closure_2_14(ActionButtonDefault, obj5), ];
        const obj7 = { styles: closure_17.action, IconComponent: null, type: "positive", onPress: null, accessibilityLabel: null };
        obj7.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
        obj7.onPress = function onPress() {
          closure_0 = applicationId;
          user(NONE[16]);
          let obj = {
            userId: closure_1_26.current.id,
            applicationId,
            location: roleStyle,
            onConfirm() {
              if (null != closure_0) {
                const result = type(4258).presentGameFriendRequestAcceptedToast();
                const obj2 = type(4258);
              } else {
                const result1 = type(4258).presentFriendRequestAcceptedToast();
                const obj = type(4258);
              }
            }
          };
          let result = obj.maybeConfirmFriendRequestAccept(obj);
        };
        const intl9 = util.intl;
        let obj8 = { name: null };
        let obj25 = UserUtilsDefault;
        obj8.name = obj25.getName(user);
        obj7.accessibilityLabel = intl9.formatToPlainString(util.t["6p0yBo"], obj8);
        items1[1] = closure_2_14(ActionButtonDefault, obj7);
        obj4.children = items1;
        let tmp8 = __initData(View, obj4);
      } else if (tmp32.PENDING_OUTGOING === tmp31) {
        const obj9 = { name: closure_17.CANCEL, label: null };
        const intl4 = util.intl;
        const obj10 = { name: null };
        obj8 = UserUtilsDefault;
        obj10.name = obj8.getName(user);
        obj9.label = intl4.formatToPlainString(util.t.JFJ8Cg, obj10);
        items.push(obj9);
        const obj11 = { style: closure_17.actions, children: null };
        let obj12 = {
          styles: closure_17.action,
          IconComponent: XLargeIcon.XLargeIcon,
          type: "neutral",
          onPress() {
                const current = closure_1_26.current;
                if (null != applicationId) {
                  let obj = { userId: current.id, applicationId: tmp };
                  const result = user(NONE[18]).cancelGameFriendRequest(obj);
                  const obj4 = user(NONE[18]);
                  const result1 = type(NONE[17]).presentGameFriendRequestIgnoredToast();
                  const obj6 = type(NONE[17]);
                } else {
                  user(NONE[19]);
                  obj = { location: roleStyle };
                  obj.cancelFriendRequest(current.id, obj);
                  const result2 = type(NONE[17]).presentFriendRequestIgnoredToast();
                  const obj3 = type(NONE[17]);
                }
              },
          accessibilityLabel: null
        };
        const intl5 = util.intl;
        const obj13 = { name: null };
        obj12 = UserUtilsDefault;
        obj13.name = obj12.getName(user);
        obj12.accessibilityLabel = intl5.formatToPlainString(util.t.JFJ8Cg, obj13);
        obj11.children = closure_2_14(ActionButtonDefault, obj12);
        tmp8 = closure_2_14(View, obj11);
      } else if (tmp32.SUGGESTION === tmp31) {
        obj = { name: closure_17.ACCEPT_SUGGESTION, label: null };
        const intl = util.intl;
        obj.label = intl.string(util.t["ed99+i"]);
        const obj14 = { name: closure_17.IGNORE_SUGGESTION, label: null };
        const intl2 = util.intl;
        obj14.label = intl2.string(util.t["Tw3a/R"]);
        items.push(obj, obj14);
        obj15 = { style: closure_17.actions, children: null };
        const obj16 = { style: closure_17.buttonWrapper, children: null };
        const obj17 = { variant: "secondary", size: "sm", text: null, onPress: null };
        obj5 = utils_StringUtils;
        const intl3 = util.intl;
        obj17.text = obj5.truncateText(intl3.string(util.t.OYkgVk), 8);
        obj17.onPress = function onPress() {
          user(NONE[19]);
          let obj = { userId: closure_1_26.current.id, context: null, type: "HermesInternal", fromFriendSuggestion: null };
          obj = { location: roleStyle };
          obj.context = obj;
          obj.addRelationship(obj);
          const result = type(NONE[17]).presentAddedFriendToast();
        };
        obj16.children = closure_2_14(components_Button_Button.Button, obj17);
        obj15.children = closure_2_14(View, obj16);
        tmp8 = closure_2_14(View, obj15);
      } else {
        const FRIEND = tmp32.FRIEND;
        obj18 = { name: closure_17.CALL, label: null };
        const intl10 = util.intl;
        const obj19 = { name: UserUtilsDefault.getName(user) };
        obj18.label = intl10.formatToPlainString(util.t.Q75ddl, obj19);
        const obj20 = { name: closure_17.MESSAGE, label: null };
        const intl11 = util.intl;
        const obj21 = { name: null };
        obj21.name = UserUtilsDefault.getName(user);
        obj20.label = intl11.formatToPlainString(util.t.zFfSFQ, obj21);
        items.push(obj18, obj20);
        obj22 = { style: closure_17.actions, children: null };
        const obj23 = { styles: closure_17.action, IconComponent: null, type: "neutral", onPress: null, accessibilityLabel: null };
        obj23.IconComponent = PhoneCallIcon.PhoneCallIcon;
        obj23.onPress = function onPress() {
          const current = closure_1_26.current;
          let obj = user(NONE[13]);
          user(NONE[13]).ensurePrivateChannel(current.id).then((result) => {
            channel = channel.getChannel(result);
            if (null != channel) {
              user(38)(channel.isPrivate(), "must be a DM");
              const obj2 = user(10869)(channel, false);
              if (!obj2.inCall) {
                obj2.onPress();
              }
              const tmp3 = user(38);
              const obj = { recipientIds: current.id };
              user(4573).openPrivateChannel(obj);
              const tmpResult = user(4573);
            }
          });
        };
        const intl12 = util.intl;
        const obj24 = { name: null };
        const tmp43 = ActionButtonDefault;
        obj24.name = UserUtilsDefault.getName(user);
        obj23.accessibilityLabel = intl12.formatToPlainString(util.t.Q75ddl, obj24);
        const items2 = [closure_2_14(tmp43, obj23), ];
        obj25 = { styles: closure_17.action, IconComponent: null, type: "neutral", onPress: null, accessibilityLabel: null };
        obj25.IconComponent = ChatIcon.ChatIcon;
        obj25.onPress = function onPress() {
          let tmpResult;
          if (handleMessage != null) {
            tmpResult = tmp(closure_1_26.current);
          }
          return tmpResult;
        };
        const intl13 = util.intl;
        const obj26 = { name: null };
        const tmp44 = ActionButtonDefault;
        obj26.name = UserUtilsDefault.getName(user);
        obj25.accessibilityLabel = intl13.formatToPlainString(util.t.zFfSFQ, obj26);
        items2[1] = closure_2_14(tmp44, obj25);
        obj22.children = items2;
        tmp8 = __initData(View, obj22);
      }
      const obj27 = { accessibilityActions: items, actions: tmp8 };
      return obj27;
    }
  }, items6);
  const actions = memo.actions;
  const items7 = [user, handleMessage, applicationId];
  const items8 = [onLongPress, user, analyticsLocations];
  const callback1 = flag2.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (closure_17.CALL === actionName) {
      closure_0 = user;
      ChannelActionCreatorsDefault.ensurePrivateChannel(user.id).then((result) => {
        channel = channel.getChannel(result);
        if (null != channel) {
          user(38)(channel.isPrivate(), "must be a DM");
          const obj2 = user(10869)(channel, false);
          if (!obj2.inCall) {
            obj2.onPress();
          }
          const tmp3 = user(38);
          const obj = { recipientIds: current.id };
          user(4573).openPrivateChannel(obj);
          const tmpResult = user(4573);
        }
      });
    } else if (tmp.MESSAGE === actionName) {
      let tmp33Result;
      if (handleMessage != null) {
        tmp33Result = tmp33(user);
      }
      return tmp33Result;
    } else if (tmp.ACCEPT === actionName) {
      closure_0 = applicationId;
      let obj = {
        userId: user.id,
        applicationId,
        location: Friends_v2,
        onConfirm() {
            if (null != closure_0) {
              const result = type(4258).presentGameFriendRequestAcceptedToast();
              const obj2 = type(4258);
            } else {
              const result1 = type(4258).presentFriendRequestAcceptedToast();
              const obj = type(4258);
            }
          }
      };
      const result = PeopleUtilsDefault.maybeConfirmFriendRequestAccept(obj);
    } else {
      if (tmp.DECLINE !== actionName) {
        if (tmp.CANCEL !== actionName) {
          if (tmp.ACCEPT_SUGGESTION === actionName) {
            obj = { userId: user.id, context: null, type: "HermesInternal", fromFriendSuggestion: null };
            const obj1 = { location: Friends_v2 };
            obj.context = obj1;
            obj1.addRelationship(obj);
            const result1 = ToastUtils.presentAddedFriendToast();
          } else if (tmp.IGNORE_SUGGESTION === actionName) {
            obj = FriendSuggestionActionCreatorsDefault;
            obj.ignore(user.id);
          }
        }
      }
      if (null != applicationId) {
        const obj2 = { userId: tmp13.id, applicationId: tmp14 };
        const result2 = GameRelationshipActionCreatorsDefault.cancelGameFriendRequest(obj2);
        const result3 = ToastUtils.presentGameFriendRequestIgnoredToast();
      } else {
        const obj3 = { location: Friends_v2 };
        RelationshipActionCreatorsDefault.cancelFriendRequest(tmp13.id, obj3);
        const result4 = ToastUtils.presentFriendRequestIgnoredToast();
      }
    }
  }, items7);
  const callback2 = flag2.useCallback(() => {
    if (null == onLongPress) {
      asyncRequireImpl(8179, dependencyMap.paths).then((result) => result.default({ userId: localUser.id, localUser, sourceAnalyticsLocations }));
      const promise = asyncRequireImpl(8179, dependencyMap.paths);
    } else {
      tmp(user);
    }
  }, items8);
  let obj6 = type(NONE[38]);
  const nameplate = obj6.useNameplate({ user, guildId });
  const items9 = [usernameColor, roleStyle];
  const memo1 = flag2.useMemo(() => {
    let tmp2;
    if (null != usernameColor) {
      if ("username" === roleStyle) {
        const obj = { color: tmp };
        tmp2 = obj;
      }
    }
    return tmp2;
  }, items9);
  const items10 = [tmp3.avatar, user, guildId, status, isMobileOnline, isVROnline, avatarDecoration];
  const items11 = [label, type, , , ];
  let name;
  const memo2 = flag2.useMemo(() => {
    const obj = { style: closure_17.avatar, user, guildId, status: null, isMobileOnline: null, isVROnline: null, size: null, avatarDecoration: null, autoStatusCutout: true };
    let tmp4 = null;
    if (constants2.OFFLINE !== status) {
      tmp4 = status;
    }
    obj.status = tmp4;
    obj.isMobileOnline = isMobileOnline;
    obj.isVROnline = isVROnline;
    obj.size = native.AvatarSizes.REFRESH_MEDIUM_32;
    obj.avatarDecoration = avatarDecoration;
    return closure_2_14(native.Avatar, obj);
  }, items10);
  if (stateFromStores1 != null) {
    name = stateFromStores1.name;
  }
  items11[2] = name;
  items11[3] = stateFromStores;
  items11[4] = user;
  const memo3 = flag2.useMemo(() => {
    if (undefined !== label) {
      return label;
    } else {
      let tmp = type;
      if (type !== constants.SUGGESTION) {
        let name = stateFromStores;
        if (stateFromStores == null) {
          name = UserUtilsDefault.getName(user);
        }
      } else {
        tmp = stateFromStores1;
        name = undefined;
        if (stateFromStores1 != null) {
          name = tmp.name;
        }
      }
      name = tmp.name;
    }
  }, items11);
  const items12 = [label, flag3, premiumSince];
  const items13 = [subLabel, user, type, useReducedMotion, flag4, guildId, applicationId];
  const memo4 = obj5.useMemo(() => {
    if (undefined === label) {
      let tmp5 = null;
      if (flag3) {
        let obj = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
        tmp5 = closure_2_14(CrownIcon.CrownIcon, obj);
      }
      const items = [tmp5, ];
      let tmp11 = null;
      if (null != premiumSince) {
        obj = { size: "xs", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
        tmp11 = closure_2_14(BoostGemIcon.BoostGemIcon, obj);
      }
      obj = { children: null };
      items[1] = tmp11;
      obj.children = items;
      return __initData(value2, obj);
    }
  }, items12);
  const items14 = [trailing, flag2, NONE, actions];
  const memo5 = obj5.useMemo(() => {
    let tmp = subLabel;
    if (undefined === subLabel) {
      const obj = { user, type, animate: !useReducedMotion, isGameRelationship: flag4, guildId, applicationId };
      tmp = closure_2_14(UserRowSubLabel, obj);
    }
    return tmp;
  }, items13);
  const memo6 = obj5.useMemo(() => {
    let tmp = trailing;
    if (null == trailing) {
      let tmp3 = null;
      if (!flag2) {
        let tmp6;
        if (NONE === UserRowModes.ACTIONS) {
          tmp6 = actions;
        }
        tmp3 = tmp6;
      }
      tmp = tmp3;
    }
    return tmp;
  }, items14);
  let tmp25 = tmp4(tmp5[41])(guildId, user.id);
  let tmp6Result = tmp6(tmp5[42]);
  const processColorStringsArray = tmp6Result.useProcessColorStringsArray(roleColors);
  if (tmp25) {
    tmp25 = "username" === roleStyle;
  }
  if (tmp25) {
    tmp25 = processColorStringsArray.length > 1;
  }
  obj = { userId: user.id, guildId };
  const tmp26 = user(NONE[43])(obj);
  tmp6Result = tmp6(tmp5[44]);
  const displayNameStylesFont = tmp6Result.useDisplayNameStylesFont({ displayNameStyles: tmp26 });
  const humanizeStatusResult = type(NONE[24]).humanizeStatus(status, { isMobile: isMobileOnline, isVR: isVROnline });
  let formatToPlainStringResult;
  if (typeof memo3 === "string") {
    if (null != humanizeStatusResult) {
      let intl = tmp6(tmp5[28]).intl;
      obj = { label: memo3, status: humanizeStatusResult };
      formatToPlainStringResult = intl.formatToPlainString(tmp6(tmp5[28]).t["/6mw10"], obj);
    }
  }
  obj1 = { lineClamp: 1, variant: "text-md/semibold" };
  obj2 = { style: tmp3.usernameLabelContainer, children: null };
  if (flag6) {
    if (null != tmp26) {
      if (null == guildId) {
        obj3 = { userId: user.id, userName: memo3, style: null, defaultColor: "mobile-text-heading-primary", accessibilityLabel: null };
        const items15 = [tmp3.usernameLabel, memo1];
        obj3.style = items15;
        obj3.accessibilityLabel = formatToPlainStringResult;
        let tmp4Result = tmp4(tmp5[45]);
        const merged1 = Object.assign(obj1);
        let tmp32Result1 = label(tmp4Result, obj3);
        let tmp32 = label;
      }
      const items16 = [tmp32Result1, memo4, ];
      if (user.bot) {
        obj4 = { verified: null, type: null };
        tmp4Result = tmp4(tmp5[46]);
        obj4.verified = user.isVerifiedBot();
        obj4.type = tmp6(tmp5[47]).getBotTagTypeFromUser(user);
        let tmp32Result = tmp32(tmp4Result, obj4);
        const tmp6Result2 = tmp6(tmp5[47]);
      } else {
        obj5 = { userId: user.id };
        tmp32Result = tmp32(tmp4(tmp5[48]), obj5);
      }
      items16[2] = tmp32Result;
      obj2.children = items16;
      let tmp30Result = tmp30(tmp31, obj2);
      let tmp44 = "dot" !== roleStyle;
      if (!tmp44) {
        tmp44 = null == usernameColor && null == roleColors;
        const tmp45 = null == usernameColor && null == roleColors;
      }
      if (!tmp44) {
        obj6 = { style: tmp3.labelContainer, children: null };
        if (usernameColor == null) {
          usernameColor = null;
        }
        let obj7 = { color: usernameColor, colors: null, containerStyles: null };
        if (roleColors == null) {
          roleColors = null;
        }
        obj7.colors = roleColors;
        obj7.containerStyles = tmp3.roleDot;
        const items17 = [tmp32(tmp6(tmp5[22]).RoleDot, obj7), tmp30Result];
        obj6.children = items17;
        tmp30Result = tmp30(tmp31, obj6);
      }
      let obj8 = {};
      const merged2 = Object.assign(merged);
      obj8.disabled = flag2;
      obj8.icon = memo2;
      obj8.onPress = callback;
      obj8.onLongPress = callback2;
      if (accessibilityActions == null) {
        accessibilityActions = memo.accessibilityActions;
      }
      obj8.accessibilityActions = accessibilityActions;
      if (onAccessibilityAction == null) {
        onAccessibilityAction = callback1;
      }
      obj8.onAccessibilityAction = onAccessibilityAction;
      obj8.label = tmp30Result;
      obj8.subLabel = memo5;
      obj8.height = "100%";
      if (NONE === guildId.TOGGLE) {
        let obj9 = {};
        const merged3 = Object.assign(obj8);
        obj9.checked = flag;
        tmp32Result = tmp32(tmp6(tmp5[49]).TableCheckboxRow, obj9);
      } else {
        if (null != nameplate) {
          if (flag5) {
            let obj10 = {};
            const merged4 = Object.assign(obj8);
            obj10.trailing = memo6;
            obj10.nameplate = nameplate;
            tmp32Result = tmp32(tmp6(tmp5[50]).UserNameplateRow, obj10);
          }
        }
        let obj11 = {};
        const merged5 = Object.assign(obj8);
        obj11.trailing = memo6;
        tmp32Result = tmp32(tmp6(tmp5[51]).TableRow, obj11);
      }
      return tmp32Result;
    }
  }
  tmp32 = label;
  let tmp33;
  if (tmp25) {
    tmp33 = processColorStringsArray;
  }
  let obj12 = { gradientColors: tmp33, color: "mobile-text-heading-primary", style: null, accessibilityLabel: null };
  const items18 = [tmp3.usernameLabel, memo1, ];
  if (flag7) {
    flag7 = null != displayNameStylesFont;
  }
  if (flag7) {
    let obj13 = { fontFamily: displayNameStylesFont };
    flag7 = obj13;
  }
  items18[2] = flag7;
  obj12.style = items18;
  obj12.accessibilityLabel = formatToPlainStringResult;
  const merged6 = Object.assign(obj1);
  obj12.children = memo3;
  tmp32Result1 = tmp32(tmp6(tmp5[23]).Text, obj12);
});