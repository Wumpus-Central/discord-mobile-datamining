// === Module 11014: UserRow ===

// Module 11014 (UserRow)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import utils_StringUtils from "utils/StringUtils" /* 1927 */;
import ToastUtils from "ToastUtils" /* 4335 */;
import UserUtils from "UserUtils" /* 4482 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4588 */;
import XLargeIcon from "XLargeIcon" /* 4590 */;
import Text_Text from "Text/Text" /* 4634 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4651 */;
import components_Button_Button from "components/Button/Button" /* 5060 */;
import ChatIcon from "ChatIcon" /* 5156 */;
import FriendSuggestionActionCreatorsDefault from "FriendSuggestionActionCreators" /* 7771 */;
import PhoneCallIcon from "PhoneCallIcon" /* 7996 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9185 */;
import BoostGemIcon from "BoostGemIcon" /* 9518 */;
import PeopleUtilsDefault from "PeopleUtils" /* 11016 */;
import GameRelationshipActionCreatorsDefault from "GameRelationshipActionCreators" /* 11017 */;
import ActivityStatusDefault from "ActivityStatus" /* 11022 */;
import ActionButtonDefault from "ActionButton" /* 11042 */;
import CrownIcon from "CrownIcon" /* 11043 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4630 */;
import ApplicationStore from "ApplicationStore" /* 4866 */;
import FriendSuggestionStore from "FriendSuggestionStore" /* 7770 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import PresenceStore from "PresenceStore" /* 4678 */;
import RelationshipStore from "RelationshipStore" /* 4286 */;

const UserUtilsDefault = UserUtils;

require = fn;
function UserRowSubLabel(arg0) {
  ({ user, type, applicationId: require } = arg0);
  ({ animate, isGameRelationship, guildId } = arg0);
  let gameIcon = closure_19();
  const items = [ApplicationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ApplicationStore.getApplication(require));
  if (type !== constants.PENDING_INCOMING) {
    if (type !== constants.SUGGESTION) {
      if (type !== constants.PENDING_OUTGOING) {
        const obj2 = { userId: user.id, guildId, textStyle: gameIcon.activityText, animate };
        return closure_14(ActivityStatusDefault, obj2);
      }
    }
  }
  if (!isGameRelationship) {
    const obj3 = { lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: UserUtils.getUserTag(user) };
    closure_14(Text_Text.Text, obj3);
    const tmpResult = UserUtils;
  }
  if (null == stateFromStores) {
    const obj4 = { style: null };
    gameIcon = gameIcon.gameIcon;
    obj4.style = gameIcon;
    closure_14(View, obj4);
  } else {
    const obj5 = { style: gameIcon.gameContainer, children: null };
    const obj6 = { style: gameIcon.gameIcon, resizeMode: "contain", source: null, disableColor: true };
    let str = stateFromStores.getIconURL(16);
    if (str == null) {
      str = "";
    }
    const obj7 = { uri: str };
    obj6.source = obj7;
    const items1 = [closure_14(native.Icon, obj6, stateFromStores.id), ];
    const obj8 = { lineClamp: 1, variant: "text-xs/medium", color: "text-subtle", children: stateFromStores.name };
    items1[1] = closure_14(Text_Text.Text, obj8);
    obj5.children = items1;
    closure_15(View, obj5);
  }
}
const View = fn(17).View;
const UserRowModes = fn(11006).UserRowModes;
const Constants = fn(1074);
({ RelationshipTypes: closure_12, StatusTypes: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let closure_17 = { CALL: "call", MESSAGE: "message", ACCEPT: "accept", DECLINE: "decline", CANCEL: "cancel", ACCEPT_SUGGESTION: "accept-suggestion", IGNORE_SUGGESTION: "ignore-suggestion", TOGGLE: "toggle" };
let createStyles = fn(4638);
let closure_18 = createStyles.createStyles({ avatar: { flexShrink: 0, flexGrow: 0 }, actions: { flexDirection: "row" }, action: { marginLeft: 12, alignSelf: "center" }, buttonWrapper: { marginLeft: 8 }, labelContainer: { flexDirection: "row", alignItems: "center" }, roleDot: { marginRight: 4, paddingTop: 0 }, usernameLabelContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, usernameLabel: { display: "flex", flexShrink: 1 } });
createStyles = fn(4638);
let obj = { activityText: { color: nativeDefault.colors.TEXT_SUBTLE }, gameContainer: null, gameIcon: null };
let obj4 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj.gameContainer = { flexDirection: "row", gap: 4, cornerRadius: nativeDefault.radii.xs };
obj.gameIcon = { width: 14, height: 14 };
let closure_19 = createStyles.createStyles(obj);
const Friends_v2 = "Friends_v2";
let obj5 = { flexDirection: "row", gap: 4, cornerRadius: nativeDefault.radii.xs };
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
  let items = [onPress];
  const stateFromStoresObject = type(NONE[21]).useStateFromStoresObject(items, () => ({ useReducedMotion: onPress.useReducedMotion, roleStyle: onPress.roleStyle }));
  const useReducedMotion = stateFromStoresObject.useReducedMotion;
  const roleStyle = stateFromStoresObject.roleStyle;
  let obj = type(NONE[21]);
  let items1 = [usernameColor];
  const stateFromStoresObject1 = type(NONE[21]).useStateFromStoresObject(items1, () => ({ isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id), status: PresenceStore.getStatus(user.id) }));
  const isMobileOnline = stateFromStoresObject1.isMobileOnline;
  const isVROnline = stateFromStoresObject1.isVROnline;
  const status = stateFromStoresObject1.status;
  let obj2 = type(NONE[21]);
  let items2 = [premiumSince];
  stateFromStores = type(NONE[21]).useStateFromStores(items2, () => {
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
  const stateFromStores1 = type(NONE[21]).useStateFromStores(items3, () => FriendSuggestionStore.getSuggestion(user.id));
  let obj4 = type(NONE[21]);
  const avatarDecoration = type(NONE[27]).useAvatarDecoration(user, guildId);
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
      let obj2 = { accessibilityActions: items, actions: "Array" };
      return obj2;
    } else {
      if (constants.PENDING_INCOMING === type) {
        let obj3 = { name: closure_17.DECLINE, label: null };
        const intl6 = util.intl;
        let obj4 = { name: UserUtilsDefault.getName(user) };
        obj3.label = intl6.formatToPlainString(util.t["C9Xe6+"], obj4);
        let obj5 = { name: closure_17.ACCEPT, label: null };
        const intl7 = util.intl;
        const obj7 = { name: null };
        obj7.name = UserUtilsDefault.getName(user);
        obj5.label = intl7.formatToPlainString(util.t["6p0yBo"], obj7);
        items.push(obj3, obj5);
        const obj8 = { style: closure_17.actions, children: null };
        const obj10 = { styles: closure_17.action, IconComponent: null, type: "neutral", onPress: null, accessibilityLabel: null };
        obj10.IconComponent = XLargeIcon.XLargeIcon;
        obj10.onPress = function onPress() {
          const current = closure_1_26.current;
          if (null != applicationId) {
            const obj2 = { userId: current.id, applicationId: tmp };
            const result = user(NONE[18]).cancelGameFriendRequest(obj2);
            const obj4 = user(NONE[18]);
            const result1 = type(NONE[17]).presentGameFriendRequestIgnoredToast();
            const obj6 = type(NONE[17]);
          } else {
            const obj5 = { location: roleStyle };
            user(NONE[19]).cancelFriendRequest(current.id, obj5);
            const obj = user(NONE[19]);
            const result2 = type(NONE[17]).presentFriendRequestIgnoredToast();
            const obj3 = type(NONE[17]);
          }
        };
        const intl8 = util.intl;
        const obj11 = { name: null };
        const tmp29 = ActionButtonDefault;
        obj11.name = UserUtilsDefault.getName(user);
        obj10.accessibilityLabel = intl8.formatToPlainString(util.t["C9Xe6+"], obj11);
        const items1 = [closure_2_14(tmp29, obj10), ];
        const obj12 = { styles: closure_17.action, IconComponent: null, type: "positive", onPress: null, accessibilityLabel: null };
        obj12.IconComponent = CheckmarkLargeIcon.CheckmarkLargeIcon;
        obj12.onPress = function onPress() {
          closure_0 = applicationId;
          let result = user(NONE[16]).maybeConfirmFriendRequestAccept({
            userId: closure_1_26.current.id,
            applicationId,
            location: roleStyle,
            onConfirm() {
              if (null != closure_0) {
                const result = type(4335).presentGameFriendRequestAcceptedToast();
                const obj2 = type(4335);
              } else {
                const result1 = type(4335).presentFriendRequestAcceptedToast();
                const obj = type(4335);
              }
            }
          });
        };
        const intl9 = util.intl;
        const obj14 = { name: null };
        const tmp30 = ActionButtonDefault;
        obj14.name = UserUtilsDefault.getName(user);
        obj12.accessibilityLabel = intl9.formatToPlainString(util.t["6p0yBo"], obj14);
        items1[1] = closure_2_14(tmp30, obj12);
        obj8.children = items1;
        let tmp8 = __initData(View, obj8);
      } else if (constants.PENDING_OUTGOING === type) {
        const obj15 = { name: closure_17.CANCEL, label: null };
        const intl4 = util.intl;
        const obj17 = { name: UserUtilsDefault.getName(user) };
        obj15.label = intl4.formatToPlainString(util.t.JFJ8Cg, obj17);
        items.push(obj15);
        const obj18 = { style: closure_17.actions, children: null };
        const obj20 = { styles: closure_17.action, IconComponent: null, type: "neutral", onPress: null, accessibilityLabel: null };
        obj20.IconComponent = XLargeIcon.XLargeIcon;
        obj20.onPress = function onPress() {
          const current = closure_1_26.current;
          if (null != applicationId) {
            const obj2 = { userId: current.id, applicationId: tmp };
            const result = user(NONE[18]).cancelGameFriendRequest(obj2);
            const obj4 = user(NONE[18]);
            const result1 = type(NONE[17]).presentGameFriendRequestIgnoredToast();
            const obj6 = type(NONE[17]);
          } else {
            const obj5 = { location: roleStyle };
            user(NONE[19]).cancelFriendRequest(current.id, obj5);
            const obj = user(NONE[19]);
            const result2 = type(NONE[17]).presentFriendRequestIgnoredToast();
            const obj3 = type(NONE[17]);
          }
        };
        const intl5 = util.intl;
        const obj21 = { name: null };
        const tmp18 = ActionButtonDefault;
        obj21.name = UserUtilsDefault.getName(user);
        obj20.accessibilityLabel = intl5.formatToPlainString(util.t.JFJ8Cg, obj21);
        obj18.children = closure_2_14(tmp18, obj20);
        tmp8 = closure_2_14(View, obj18);
      } else if (constants.SUGGESTION === type) {
        let obj = { name: closure_17.ACCEPT_SUGGESTION, label: null };
        const intl = util.intl;
        obj.label = intl.string(util.t["ed99+i"]);
        const obj22 = { name: closure_17.IGNORE_SUGGESTION, label: null };
        const intl2 = util.intl;
        obj22.label = intl2.string(util.t["Tw3a/R"]);
        items.push(obj, obj22);
        const obj24 = { style: closure_17.actions, children: null };
        const obj25 = { style: closure_17.buttonWrapper, children: null };
        const obj27 = { variant: "secondary", size: "sm", text: null, onPress: null };
        const intl3 = util.intl;
        obj27.text = utils_StringUtils.truncateText(intl3.string(util.t.OYkgVk), 8);
        obj27.onPress = function onPress() {
          const obj2 = { userId: closure_1_26.current.id, context: { location: roleStyle }, type: "HermesInternal", fromFriendSuggestion: null };
          user(NONE[19]).addRelationship(obj2);
          const obj = user(NONE[19]);
          const obj3 = { location: roleStyle };
          const result = type(NONE[17]).presentAddedFriendToast();
        };
        obj25.children = closure_2_14(components_Button_Button.Button, obj27);
        obj24.children = closure_2_14(View, obj25);
        tmp8 = closure_2_14(View, obj24);
      } else {
        const FRIEND = constants.FRIEND;
        const obj28 = { name: closure_17.CALL, label: null };
        const intl10 = util.intl;
        const obj29 = { name: UserUtilsDefault.getName(user) };
        obj28.label = intl10.formatToPlainString(util.t.Q75ddl, obj29);
        const obj30 = { name: closure_17.MESSAGE, label: null };
        const intl11 = util.intl;
        const obj32 = { name: null };
        obj32.name = UserUtilsDefault.getName(user);
        obj30.label = intl11.formatToPlainString(util.t.zFfSFQ, obj32);
        items.push(obj28, obj30);
        const obj33 = { style: closure_17.actions, children: null };
        const obj35 = { styles: closure_17.action, IconComponent: null, type: "neutral", onPress: null, accessibilityLabel: null };
        obj35.IconComponent = PhoneCallIcon.PhoneCallIcon;
        obj35.onPress = function onPress() {
          const current = closure_1_26.current;
          let obj = user(NONE[13]);
          user(NONE[13]).ensurePrivateChannel(current.id).then((result) => {
            channel = channel.getChannel(result);
            if (null != channel) {
              user(38)(channel.isPrivate(), "must be a DM");
              const obj2 = user(11015)(channel, false);
              if (!obj2.inCall) {
                obj2.onPress();
              }
              const tmp3 = user(38);
              const obj = { recipientIds: current.id };
              user(4651).openPrivateChannel(obj);
              const tmpResult = user(4651);
            }
          });
        };
        const intl12 = util.intl;
        const obj36 = { name: null };
        const tmp43 = ActionButtonDefault;
        obj36.name = UserUtilsDefault.getName(user);
        obj35.accessibilityLabel = intl12.formatToPlainString(util.t.Q75ddl, obj36);
        const items2 = [closure_2_14(tmp43, obj35), ];
        const obj37 = { styles: closure_17.action, IconComponent: null, type: "neutral", onPress: null, accessibilityLabel: null };
        obj37.IconComponent = ChatIcon.ChatIcon;
        obj37.onPress = function onPress() {
          let tmpResult;
          if (handleMessage != null) {
            tmpResult = tmp(closure_1_26.current);
          }
          return tmpResult;
        };
        const intl13 = util.intl;
        const obj39 = { name: null };
        const tmp44 = ActionButtonDefault;
        obj39.name = UserUtilsDefault.getName(user);
        obj37.accessibilityLabel = intl13.formatToPlainString(util.t.zFfSFQ, obj39);
        items2[1] = closure_2_14(tmp44, obj37);
        obj33.children = items2;
        tmp8 = __initData(View, obj33);
      }
      const obj40 = { accessibilityActions: items, actions: tmp8 };
      return obj40;
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
          const obj2 = user(11015)(channel, false);
          if (!obj2.inCall) {
            obj2.onPress();
          }
          const tmp3 = user(38);
          const obj = { recipientIds: current.id };
          user(4651).openPrivateChannel(obj);
          const tmpResult = user(4651);
        }
      });
      const ensurePrivateChannelResult = ChannelActionCreatorsDefault.ensurePrivateChannel(user.id);
    } else if (closure_17.MESSAGE === actionName) {
      let tmp33Result;
      if (handleMessage != null) {
        tmp33Result = tmp33(user);
      }
      return tmp33Result;
    } else if (closure_17.ACCEPT === actionName) {
      closure_0 = applicationId;
      const obj3 = {
        userId: user.id,
        applicationId,
        location: Friends_v2,
        onConfirm() {
            if (null != closure_0) {
              const result = type(4335).presentGameFriendRequestAcceptedToast();
              const obj2 = type(4335);
            } else {
              const result1 = type(4335).presentFriendRequestAcceptedToast();
              const obj = type(4335);
            }
          }
      };
      const result = PeopleUtilsDefault.maybeConfirmFriendRequestAccept(obj3);
    } else {
      if (closure_17.DECLINE !== actionName) {
        if (closure_17.CANCEL !== actionName) {
          if (closure_17.ACCEPT_SUGGESTION === actionName) {
            const obj4 = { userId: user.id, context: null, type: "HermesInternal", fromFriendSuggestion: null };
            const obj7 = { location: Friends_v2 };
            obj4.context = obj7;
            RelationshipActionCreatorsDefault.addRelationship(obj4);
            const result1 = ToastUtils.presentAddedFriendToast();
          } else if (closure_17.IGNORE_SUGGESTION === actionName) {
            FriendSuggestionActionCreatorsDefault.ignore(user.id);
          }
        }
      }
      if (null != applicationId) {
        const obj10 = { userId: user.id, applicationId: tmp14 };
        const result2 = GameRelationshipActionCreatorsDefault.cancelGameFriendRequest(obj10);
        const result3 = ToastUtils.presentGameFriendRequestIgnoredToast();
      } else {
        const obj13 = { location: Friends_v2 };
        RelationshipActionCreatorsDefault.cancelFriendRequest(user.id, obj13);
        const result4 = ToastUtils.presentFriendRequestIgnoredToast();
      }
    }
  }, items7);
  const callback2 = flag2.useCallback(() => {
    if (null == onLongPress) {
      asyncRequireImpl(8308, dependencyMap.paths).then((result) => result.default({ userId: localUser.id, localUser, sourceAnalyticsLocations }));
      const promise = asyncRequireImpl(8308, dependencyMap.paths);
    } else {
      tmp(user);
    }
  }, items8);
  let obj5 = type(NONE[27]);
  const nameplate = type(NONE[38]).useNameplate({ user, guildId });
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
        let name1;
        if (stateFromStores1 != null) {
          name1 = tmp.name;
        }
      }
      name = tmp.name;
    }
  }, items11);
  const items12 = [label, flag3, premiumSince];
  const items13 = [subLabel, user, type, useReducedMotion, flag4, guildId, applicationId];
  const memo4 = obj6.useMemo(() => {
    if (undefined === label) {
      let tmp5 = null;
      if (flag3) {
        const obj = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
        tmp5 = closure_2_14(CrownIcon.CrownIcon, obj);
      }
      const items = [tmp5, ];
      let tmp11 = null;
      if (null != premiumSince) {
        const obj2 = { size: "xs", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
        tmp11 = closure_2_14(BoostGemIcon.BoostGemIcon, obj2);
      }
      const obj3 = { children: null };
      items[1] = tmp11;
      obj3.children = items;
      return __initData(value2, obj3);
    }
  }, items12);
  const items14 = [trailing, flag2, NONE, actions];
  const memo5 = obj6.useMemo(() => {
    let tmp = subLabel;
    if (undefined === subLabel) {
      const obj = { user, type, animate: !useReducedMotion, isGameRelationship: flag4, guildId, applicationId };
      tmp = closure_2_14(UserRowSubLabel, obj);
    }
    return tmp;
  }, items13);
  const memo6 = obj6.useMemo(() => {
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
  let obj7 = type(NONE[38]);
  const processColorStringsArray = type(NONE[42]).useProcessColorStringsArray(roleColors);
  if (tmp25) {
    tmp25 = "username" === roleStyle;
  }
  if (tmp25) {
    tmp25 = processColorStringsArray.length > 1;
  }
  const tmp26 = user(NONE[43])({ userId: user.id, guildId });
  let obj8 = { userId: user.id, guildId };
  const tmp6Result = type(NONE[42]);
  const displayNameStylesFont = type(NONE[44]).useDisplayNameStylesFont({ displayNameStyles: tmp26 });
  const tmp6Result4 = type(NONE[44]);
  const humanizeStatusResult = type(NONE[24]).humanizeStatus(status, { isMobile: isMobileOnline, isVR: isVROnline });
  let formatToPlainStringResult;
  if (typeof memo3 === "string") {
    if (null != humanizeStatusResult) {
      let intl = tmp6(tmp5[28]).intl;
      let obj9 = { label: memo3, status: humanizeStatusResult };
      formatToPlainStringResult = intl.formatToPlainString(tmp6(tmp5[28]).t["/6mw10"], obj9);
    }
  }
  let obj10 = { lineClamp: 1, variant: "text-md/semibold" };
  let obj11 = { style: tmp3.usernameLabelContainer, children: null };
  if (flag6) {
    if (null != tmp26) {
      if (null == guildId) {
        let obj12 = { userId: user.id, userName: memo3, style: null, defaultColor: "mobile-text-heading-primary", accessibilityLabel: null };
        const items15 = [tmp3.usernameLabel, memo1];
        obj12.style = items15;
        obj12.accessibilityLabel = formatToPlainStringResult;
        const merged1 = Object.assign(obj10);
        let tmp32Result6 = label(tmp4(tmp5[45]), obj12);
        let tmp32 = label;
        const tmp4Result = tmp4(tmp5[45]);
      }
      const items16 = [tmp32Result6, memo4, , ];
      if (user.bot) {
        let obj13 = { verified: user.isVerifiedBot(), type: null };
        const tmp4Result2 = tmp4(tmp5[46]);
        obj13.type = tmp6(tmp5[47]).getBotTagTypeFromUser(user);
        let tmp32Result = tmp32(tmp4Result2, obj13);
        const tmp6Result6 = tmp6(tmp5[47]);
      } else {
        let obj14 = { userId: user.id };
        tmp32Result = tmp32(tmp4(tmp5[48]), obj14);
      }
      items16[2] = tmp32Result;
      let tmp32Result4 = null != guildId;
      if (tmp32Result4) {
        let obj15 = { guildId, userId: user.id };
        tmp32Result4 = tmp32(tmp4(tmp5[49]), obj15);
      }
      items16[3] = tmp32Result4;
      obj11.children = items16;
      const tmp30Result = tmp30(tmp31, obj11);
      let tmp45 = "dot" !== roleStyle;
      if (!tmp45) {
        tmp45 = null == usernameColor && null == roleColors;
        const tmp46 = null == usernameColor && null == roleColors;
      }
      let tmp30Result2 = tmp30Result;
      if (!tmp45) {
        let obj16 = { style: tmp3.labelContainer, children: null };
        if (usernameColor == null) {
          usernameColor = null;
        }
        let obj17 = { color: usernameColor, colors: null, containerStyles: null };
        if (roleColors == null) {
          roleColors = null;
        }
        obj17.colors = roleColors;
        obj17.containerStyles = tmp3.roleDot;
        const items17 = [tmp32(tmp6(tmp5[22]).RoleDot, obj17), tmp30Result];
        obj16.children = items17;
        tmp30Result2 = tmp30(tmp31, obj16);
      }
      let obj18 = {};
      const merged2 = Object.assign(merged);
      obj18.disabled = flag2;
      obj18.icon = memo2;
      obj18.onPress = callback;
      obj18.onLongPress = callback2;
      if (accessibilityActions == null) {
        accessibilityActions = memo.accessibilityActions;
      }
      obj18.accessibilityActions = accessibilityActions;
      if (onAccessibilityAction == null) {
        onAccessibilityAction = callback1;
      }
      obj18.onAccessibilityAction = onAccessibilityAction;
      obj18.label = tmp30Result2;
      obj18.subLabel = memo5;
      obj18.height = "100%";
      if (NONE === guildId.TOGGLE) {
        let obj19 = {};
        const merged3 = Object.assign(obj18);
        obj19.checked = flag;
        let tmp32Result5 = tmp32(tmp6(tmp5[50]).TableCheckboxRow, obj19);
      } else {
        if (null != nameplate) {
          if (flag5) {
            let obj20 = {};
            const merged4 = Object.assign(obj18);
            obj20.trailing = memo6;
            obj20.nameplate = nameplate;
            tmp32Result5 = tmp32(tmp6(tmp5[51]).UserNameplateRow, obj20);
          }
        }
        let obj21 = {};
        const merged5 = Object.assign(obj18);
        obj21.trailing = memo6;
        tmp32Result5 = tmp32(tmp6(tmp5[52]).TableRow, obj21);
      }
      return tmp32Result5;
    }
  }
  tmp32 = label;
  let tmp33;
  if (tmp25) {
    tmp33 = processColorStringsArray;
  }
  let obj22 = { gradientColors: tmp33, color: "mobile-text-heading-primary", style: null, accessibilityLabel: null };
  const items18 = [tmp3.usernameLabel, memo1, ];
  if (flag7) {
    flag7 = null != displayNameStylesFont;
  }
  if (flag7) {
    let obj23 = { fontFamily: displayNameStylesFont };
    flag7 = obj23;
  }
  items18[2] = flag7;
  obj22.style = items18;
  obj22.accessibilityLabel = formatToPlainStringResult;
  const merged6 = Object.assign(obj10);
  obj22.children = memo3;
  tmp32Result6 = tmp32(tmp6(tmp5[23]).Text, obj22);
});