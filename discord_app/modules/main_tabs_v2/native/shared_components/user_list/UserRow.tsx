// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx
import initialize from "../../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ActivityStatusDefault from "../../../../activity_status/native/ActivityStatus.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../a11y/AccessibilityStore.tsx";
import closure_6 from "../../../../applications/ApplicationStore.tsx";
import closure_7 from "../../../../friend_suggestions/FriendSuggestionStore.tsx";
import closure_8 from "../../../../../stores/ChannelStore.tsx";
import closure_9 from "../../../../../stores/PresenceStore.tsx";
import closure_10 from "../../../../../stores/RelationshipStore.tsx";
import { UserRowModes } from "UserRowConstants.tsx";
import ME from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function UserRowSubLabel(arg0) {
  ({ user, type, applicationId: require } = arg0);
  ({ animate, isGameRelationship, guildId } = arg0);
  let gameIcon = callback2();
  let obj = initialize;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getApplication(closure_0));
  if (type !== constants.PENDING_INCOMING) {
    if (type !== tmp3.SUGGESTION) {
      if (type !== tmp3.PENDING_OUTGOING) {
        obj = { userId: null, guildId: null, textStyle: null, animate: null };
        obj[0] = user.id;
        obj[1] = guildId;
        obj[2] = gameIcon.activityText;
        obj[3] = animate;
        return callback(ActivityStatusDefault, obj);
      }
    }
  }
  if (!isGameRelationship) {
    obj = { lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: null };
    obj[3] = tmp(4322).getUserTag(user);
    callback(tmp(4474).Text, obj);
    const tmpResult = tmp(4322);
  }
  if (null == stateFromStores) {
    obj1 = { style: null };
    gameIcon = gameIcon.gameIcon;
    obj1[0] = gameIcon;
    callback(View, obj1);
  } else {
    const obj2 = { style: null, children: null };
    obj2[0] = gameIcon.gameContainer;
    const obj3 = { style: null, resizeMode: "contain", source: null, disableColor: true };
    obj3[0] = gameIcon.gameIcon;
    let str = stateFromStores.getIconURL(16);
    if (str == null) {
      str = "";
    }
    const obj4 = { uri: null };
    obj4[0] = str;
    obj3[2] = obj4;
    const items1 = [callback(tmp(1297).Icon, obj3, stateFromStores.id), ];
    const obj5 = { lineClamp: 1, variant: "text-xs/medium", color: "text-subtle", children: null };
    obj5[3] = stateFromStores.name;
    items1[1] = callback(tmp(4474).Text, obj5);
    obj2[1] = items1;
    closure_15(View, obj2);
    const tmp11 = closure_15;
    const tmp12 = View;
  }
}
let c3 = importAllResult;
({ RelationshipTypes: closure_12, StatusTypes: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let closure_17 = { CALL: "call", MESSAGE: "message", ACCEPT: "accept", DECLINE: "decline", CANCEL: "cancel", ACCEPT_SUGGESTION: "accept-suggestion", IGNORE_SUGGESTION: "ignore-suggestion", TOGGLE: "toggle" };
let closure_18 = createCacheKey.createStyles({ avatar: { flexShrink: 0, flexGrow: 0 }, actions: { flexDirection: "row" }, action: { marginLeft: 12, alignSelf: "center" }, buttonWrapper: { marginLeft: 8 }, labelContainer: { flexDirection: "row", alignItems: "center" }, roleDot: { marginRight: 4, paddingTop: 0 }, usernameLabelContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, usernameLabel: { display: "flex", flexShrink: 1 } });
let obj = { activityText: null, gameContainer: null, gameIcon: null };
obj = { color: ThemesDefault.colors.TEXT_SUBTLE };
obj[0] = obj;
createCacheKey = { flexDirection: "row", gap: 4, cornerRadius: ThemesDefault.radii.xs };
obj[1] = createCacheKey;
obj[2] = { width: 14, height: 14 };
let closure_19 = createCacheKey.createStyles(obj);
const Friends_v2 = "Friends_v2";
const memoResult = importAllResult.memo(function UserRow(type) {
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
  const merged = Object.assign(type, Object.create(null));
  closure_17 = undefined;
  let analyticsLocations;
  let useReducedMotion;
  let roleStyle;
  let isMobileOnline;
  let isVROnline;
  let status;
  let stateFromStores1;
  let avatarDecoration;
  closure_26 = undefined;
  let actions;
  let tmp3 = analyticsLocations();
  closure_17 = tmp3;
  analyticsLocations = user(NONE[26])().analyticsLocations;
  let obj = type(NONE[21]);
  let items = [onPress];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ useReducedMotion: onPress.useReducedMotion, roleStyle: onPress.roleStyle }));
  useReducedMotion = stateFromStoresObject.useReducedMotion;
  roleStyle = stateFromStoresObject.roleStyle;
  obj1 = type(NONE[21]);
  let items1 = [usernameColor];
  const stateFromStoresObject1 = obj1.useStateFromStoresObject(items1, () => ({ isMobileOnline: usernameColor.isMobileOnline(user.id), isVROnline: usernameColor.isVROnline(user.id), status: usernameColor.getStatus(user.id) }));
  isMobileOnline = stateFromStoresObject1.isMobileOnline;
  isVROnline = stateFromStoresObject1.isVROnline;
  status = stateFromStoresObject1.status;
  let obj2 = type(NONE[21]);
  let items2 = [premiumSince];
  stateFromStores = obj2.useStateFromStores(items2, () => {
    let tmp = stateFromStores;
    if (stateFromStores == null) {
      let nickname = null;
      if (null == guildId) {
        nickname = premiumSince.getNickname(user.id);
      }
      tmp = nickname;
    }
    return tmp;
  });
  let obj3 = type(NONE[21]);
  const items3 = [handleMessage];
  stateFromStores1 = obj3.useStateFromStores(items3, () => handleMessage.getSuggestion(user.id));
  let obj4 = type(NONE[27]);
  avatarDecoration = obj4.useAvatarDecoration(user, guildId);
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
    if (NONE !== guildId.ACTIONS) {
      let obj = { accessibilityActions: null, actions: "Array" };
      obj[0] = items;
      return obj;
    } else {
      if (trailing.PENDING_INCOMING === type) {
        obj = { name: null, label: null };
        obj[0] = closure_17.DECLINE;
        const intl6 = type(NONE[28]).intl;
        obj1 = { name: null };
        let obj15 = user(NONE[24]);
        obj1[0] = obj15.getName(user);
        obj[1] = intl6.formatToPlainString(type(NONE[28]).t["C9Xe6+"], obj1);
        let obj2 = { name: null, label: null };
        obj2[0] = closure_17.ACCEPT;
        const intl7 = type(NONE[28]).intl;
        let obj3 = { name: null };
        let obj18 = user(NONE[24]);
        obj3[0] = obj18.getName(user);
        obj2[1] = intl7.formatToPlainString(type(NONE[28]).t["6p0yBo"], obj3);
        items.push(obj, obj2);
        let obj4 = { style: null, children: null };
        obj4[0] = closure_17.actions;
        let obj5 = { styles: null, IconComponent: null, type: "neutral", onPress: null, accessibilityLabel: null };
        obj5[0] = closure_17.action;
        obj5[1] = type(NONE[30]).XLargeIcon;
        obj5[3] = function onPress() {
          const current = closure_26.current;
          if (null != closure_15) {
            let obj = { userId: null, applicationId: null };
            obj[0] = current.id;
            obj[1] = tmp;
            const result = closure_1_1(closure_1_2[18]).cancelGameFriendRequest(obj);
            const obj4 = closure_1_1(closure_1_2[18]);
            const result1 = closure_1_0(closure_1_2[17]).presentGameFriendRequestIgnoredToast();
            const obj6 = closure_1_0(closure_1_2[17]);
          } else {
            obj = closure_1_1(closure_1_2[19]);
            obj = { location: null };
            obj[0] = closure_1_20;
            obj.cancelFriendRequest(current.id, obj);
            const result2 = closure_1_0(closure_1_2[17]).presentFriendRequestIgnoredToast();
            const obj3 = closure_1_0(closure_1_2[17]);
          }
        };
        const intl8 = type(NONE[28]).intl;
        let obj6 = { name: null };
        let obj22 = user(NONE[24]);
        obj6[0] = obj22.getName(user);
        obj5[4] = intl8.formatToPlainString(type(NONE[28]).t["C9Xe6+"], obj6);
        const items1 = [label(user(NONE[29]), obj5), ];
        const obj7 = { styles: null, IconComponent: null, type: "positive", onPress: null, accessibilityLabel: null };
        obj7[0] = closure_17.action;
        const tmp29 = user(NONE[29]);
        obj7[1] = type(NONE[31]).CheckmarkLargeIcon;
        obj7[3] = function onPress() {
          closure_0 = closure_15;
          let obj = closure_1_1(closure_1_2[16]);
          obj = {
            userId: closure_26.current.id,
            applicationId: closure_15,
            location: closure_1_20,
            onConfirm() {
              if (null != callback) {
                const result = callback(closure_1_2[17]).presentGameFriendRequestAcceptedToast();
                const obj2 = callback(closure_1_2[17]);
              } else {
                const result1 = callback(closure_1_2[17]).presentFriendRequestAcceptedToast();
                const obj = callback(closure_1_2[17]);
              }
            }
          };
          let result = obj.maybeConfirmFriendRequestAccept(obj);
        };
        const intl9 = type(NONE[28]).intl;
        let obj8 = { name: null };
        let obj25 = user(NONE[24]);
        obj8[0] = obj25.getName(user);
        obj7[4] = intl9.formatToPlainString(type(NONE[28]).t["6p0yBo"], obj8);
        items1[1] = label(user(NONE[29]), obj7);
        obj4[1] = items1;
        let tmp8 = applicationId(flag3, obj4);
        const tmp30 = user(NONE[29]);
      } else if (tmp32.PENDING_OUTGOING === tmp31) {
        const obj9 = { name: null, label: null };
        obj9[0] = closure_17.CANCEL;
        const intl4 = type(NONE[28]).intl;
        const obj10 = { name: null };
        obj8 = user(NONE[24]);
        obj10[0] = obj8.getName(user);
        obj9[1] = intl4.formatToPlainString(type(NONE[28]).t.JFJ8Cg, obj10);
        items.push(obj9);
        const obj11 = { style: null, children: null };
        obj11[0] = closure_17.actions;
        let obj12 = { styles: null, IconComponent: null, type: "neutral", onPress: null, accessibilityLabel: null };
        obj12[0] = closure_17.action;
        obj12[1] = type(NONE[30]).XLargeIcon;
        obj12[3] = function onPress() {
          const current = closure_26.current;
          if (null != closure_15) {
            let obj = { userId: null, applicationId: null };
            obj[0] = current.id;
            obj[1] = tmp;
            const result = closure_1_1(closure_1_2[18]).cancelGameFriendRequest(obj);
            const obj4 = closure_1_1(closure_1_2[18]);
            const result1 = closure_1_0(closure_1_2[17]).presentGameFriendRequestIgnoredToast();
            const obj6 = closure_1_0(closure_1_2[17]);
          } else {
            obj = closure_1_1(closure_1_2[19]);
            obj = { location: null };
            obj[0] = closure_1_20;
            obj.cancelFriendRequest(current.id, obj);
            const result2 = closure_1_0(closure_1_2[17]).presentFriendRequestIgnoredToast();
            const obj3 = closure_1_0(closure_1_2[17]);
          }
        };
        const intl5 = type(NONE[28]).intl;
        const obj13 = { name: null };
        obj12 = user(NONE[24]);
        obj13[0] = obj12.getName(user);
        obj12[4] = intl5.formatToPlainString(type(NONE[28]).t.JFJ8Cg, obj13);
        obj11[1] = label(user(NONE[29]), obj12);
        tmp8 = label(flag3, obj11);
        const tmp18 = user(NONE[29]);
      } else if (tmp32.SUGGESTION === tmp31) {
        obj = { name: null, label: null };
        obj[0] = closure_17.ACCEPT_SUGGESTION;
        const intl = type(NONE[28]).intl;
        obj[1] = intl.string(type(NONE[28]).t["ed99+i"]);
        const obj14 = { name: null, label: null };
        obj14[0] = closure_17.IGNORE_SUGGESTION;
        const intl2 = type(NONE[28]).intl;
        obj14[1] = intl2.string(type(NONE[28]).t["Tw3a/R"]);
        items.push(obj, obj14);
        obj15 = { style: null, children: null };
        obj15[0] = closure_17.actions;
        const obj16 = { style: null, children: null };
        obj16[0] = closure_17.buttonWrapper;
        const obj17 = { variant: "secondary", size: "sm", text: null, onPress: null };
        obj5 = type(NONE[33]);
        const intl3 = type(NONE[28]).intl;
        obj17[2] = obj5.truncateText(intl3.string(type(NONE[28]).t.OYkgVk), 8);
        obj17[3] = function onPress() {
          let obj = closure_1_1(closure_1_2[19]);
          obj = { userId: closure_26.current.id, context: obj, type: "HermesInternal", fromFriendSuggestion: null };
          obj = { location: closure_1_20 };
          obj.addRelationship(obj);
          const result = closure_1_0(closure_1_2[17]).presentAddedFriendToast();
        };
        obj16[1] = label(type(NONE[32]).Button, obj17);
        obj15[1] = label(flag3, obj16);
        tmp8 = label(flag3, obj15);
      } else {
        const FRIEND = tmp32.FRIEND;
        obj18 = { name: null, label: null };
        obj18[0] = closure_17.CALL;
        const intl10 = type(NONE[28]).intl;
        const obj19 = { name: null };
        obj19[0] = user(NONE[24]).getName(user);
        obj18[1] = intl10.formatToPlainString(type(NONE[28]).t.Q75ddl, obj19);
        const obj20 = { name: null, label: null };
        obj20[0] = closure_17.MESSAGE;
        const intl11 = type(NONE[28]).intl;
        const obj21 = { name: null };
        const obj31 = user(NONE[24]);
        obj21[0] = user(NONE[24]).getName(user);
        obj20[1] = intl11.formatToPlainString(type(NONE[28]).t.zFfSFQ, obj21);
        items.push(obj18, obj20);
        obj22 = { style: null, children: null };
        obj22[0] = closure_17.actions;
        const obj23 = { styles: null, IconComponent: null, type: "neutral", onPress: null, accessibilityLabel: null };
        obj23[0] = closure_17.action;
        const obj34 = user(NONE[24]);
        obj23[1] = type(NONE[34]).PhoneCallIcon;
        obj23[3] = function onPress() {
          const current = closure_26.current;
          let obj = closure_1_1(closure_1_2[13]);
          closure_1_1(closure_1_2[13]).ensurePrivateChannel(current.id).then((arg0) => {
            const channel = closure_1_8.getChannel(arg0);
            if (null != channel) {
              closure_1_1(closure_1_2[14])(channel.isPrivate(), "must be a DM");
              const obj4 = closure_1_1(closure_1_2[15])(channel, false);
              if (!obj4.inCall) {
                obj4.onPress();
              }
              const tmp4 = closure_1_1;
              const tmp5 = closure_1_2;
              const tmp6 = closure_1_1(closure_1_2[14]);
              const obj = { recipientIds: null };
              obj[0] = current.id;
              closure_1_1(closure_1_2[13]).openPrivateChannel(obj);
              const tmp4Result = closure_1_1(closure_1_2[13]);
            }
          });
        };
        const intl12 = type(NONE[28]).intl;
        const obj24 = { name: null };
        const tmp43 = user(NONE[29]);
        obj24[0] = user(NONE[24]).getName(user);
        obj23[4] = intl12.formatToPlainString(type(NONE[28]).t.Q75ddl, obj24);
        const items2 = [label(tmp43, obj23), ];
        obj25 = { styles: null, IconComponent: null, type: "neutral", onPress: null, accessibilityLabel: null };
        obj25[0] = closure_17.action;
        const obj38 = user(NONE[24]);
        obj25[1] = type(NONE[35]).ChatIcon;
        obj25[3] = function onPress() {
          let tmpResult;
          if (closure_7 != null) {
            tmpResult = tmp(closure_26.current);
          }
          return tmpResult;
        };
        const intl13 = type(NONE[28]).intl;
        const obj26 = { name: null };
        const tmp44 = user(NONE[29]);
        obj26[0] = user(NONE[24]).getName(user);
        obj25[4] = intl13.formatToPlainString(type(NONE[28]).t.zFfSFQ, obj26);
        items2[1] = label(tmp44, obj25);
        obj22[1] = items2;
        tmp8 = applicationId(flag3, obj22);
        const obj41 = user(NONE[24]);
      }
      const obj27 = { accessibilityActions: null, actions: null };
      obj27[0] = items;
      obj27[1] = tmp8;
      return obj27;
    }
  }, items6);
  actions = memo.actions;
  const items7 = [user, handleMessage, applicationId];
  const items8 = [onLongPress, user, analyticsLocations];
  const callback1 = flag2.useCallback((nativeEvent) => {
    const actionName = nativeEvent.nativeEvent.actionName;
    if (closure_17.CALL === actionName) {
      closure_0 = user;
      const obj14 = user(NONE[13]);
      user(NONE[13]).ensurePrivateChannel(user.id).then((arg0) => {
        const channel = closure_1_8.getChannel(arg0);
        if (null != channel) {
          closure_1_1(closure_1_2[14])(channel.isPrivate(), "must be a DM");
          const obj4 = closure_1_1(closure_1_2[15])(channel, false);
          if (!obj4.inCall) {
            obj4.onPress();
          }
          const tmp4 = closure_1_1;
          const tmp5 = closure_1_2;
          const tmp6 = closure_1_1(closure_1_2[14]);
          const obj = { recipientIds: null };
          obj[0] = current.id;
          closure_1_1(closure_1_2[13]).openPrivateChannel(obj);
          const tmp4Result = closure_1_1(closure_1_2[13]);
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
      let obj = { userId: null, applicationId: null, location: null, onConfirm: null };
      obj[0] = user.id;
      obj[1] = applicationId;
      obj[2] = roleStyle;
      obj[3] = function onConfirm() {
        if (null != callback) {
          const result = callback(closure_1_2[17]).presentGameFriendRequestAcceptedToast();
          const obj2 = callback(closure_1_2[17]);
        } else {
          const result1 = callback(closure_1_2[17]).presentFriendRequestAcceptedToast();
          const obj = callback(closure_1_2[17]);
        }
      };
      const result = user(NONE[16]).maybeConfirmFriendRequestAccept(obj);
    } else {
      if (tmp.DECLINE !== actionName) {
        if (tmp.CANCEL !== actionName) {
          if (tmp.ACCEPT_SUGGESTION === actionName) {
            obj1 = user(NONE[19]);
            obj = { userId: null, context: null, type: "HermesInternal", fromFriendSuggestion: null };
            obj[0] = user.id;
            obj1 = { location: null };
            obj1[0] = roleStyle;
            obj[1] = obj1;
            obj1.addRelationship(obj);
            const result1 = type(NONE[17]).presentAddedFriendToast();
          } else if (tmp.IGNORE_SUGGESTION === actionName) {
            obj = user(NONE[20]);
            obj.ignore(user.id);
          }
        }
      }
      if (null != applicationId) {
        const obj2 = { userId: null, applicationId: null };
        obj2[0] = tmp13.id;
        obj2[1] = tmp14;
        const result2 = user(NONE[18]).cancelGameFriendRequest(obj2);
        const obj9 = user(NONE[18]);
        const result3 = type(NONE[17]).presentGameFriendRequestIgnoredToast();
        const obj11 = type(NONE[17]);
      } else {
        const obj3 = { location: null };
        obj3[0] = roleStyle;
        user(NONE[19]).cancelFriendRequest(tmp13.id, obj3);
        const obj6 = user(NONE[19]);
        const result4 = type(NONE[17]).presentFriendRequestIgnoredToast();
        const obj8 = type(NONE[17]);
      }
    }
  }, items7);
  const callback2 = flag2.useCallback(() => {
    if (null == onLongPress) {
      type(NONE[37])(NONE[36], NONE.paths).then((arg0) => arg0.default({ userId: id.id, localUser: id, sourceAnalyticsLocations: closure_18 }));
      const promise = type(NONE[37])(NONE[36], NONE.paths);
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
        const obj = { color: null };
        obj[0] = tmp;
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
    if (subLabel.OFFLINE !== status) {
      tmp4 = status;
    }
    obj[3] = tmp4;
    obj[4] = isMobileOnline;
    obj[5] = isVROnline;
    obj[6] = type(NONE[22]).AvatarSizes.REFRESH_MEDIUM_32;
    obj[7] = avatarDecoration;
    return label(type(NONE[22]).Avatar, obj);
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
      if (type !== trailing.SUGGESTION) {
        let name = stateFromStores;
        if (stateFromStores == null) {
          name = user(NONE[24]).getName(user);
          const obj = user(NONE[24]);
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
        let obj = { size: "xs", color: null };
        obj[1] = user(NONE[12]).colors.TEXT_FEEDBACK_WARNING;
        tmp5 = label(type(NONE[39]).CrownIcon, obj);
      }
      const items = [tmp5, ];
      let tmp11 = null;
      if (null != premiumSince) {
        obj = { size: "xs", color: null };
        obj[1] = user(NONE[12]).unsafe_rawColors.GUILD_BOOSTING_PINK;
        tmp11 = label(type(NONE[40]).BoostGemIcon, obj);
      }
      obj = { children: null };
      items[1] = tmp11;
      obj[0] = items;
      return applicationId(flag4, obj);
    }
  }, items12);
  const items14 = [trailing, flag2, NONE, actions];
  const memo5 = obj5.useMemo(() => {
    let tmp = subLabel;
    if (undefined === subLabel) {
      const obj = { user: null, type: null, animate: null, isGameRelationship: null, guildId: null, applicationId: null };
      obj[0] = user;
      obj[1] = type;
      obj[2] = !useReducedMotion;
      obj[3] = flag4;
      obj[4] = guildId;
      obj[5] = applicationId;
      tmp = label(isMobileOnline, obj);
    }
    return tmp;
  }, items13);
  const memo6 = obj5.useMemo(() => {
    let tmp = trailing;
    if (null == trailing) {
      let tmp3 = null;
      if (!flag2) {
        let tmp6;
        if (NONE === guildId.ACTIONS) {
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
      obj = { label: null, status: null };
      obj[0] = memo3;
      obj[1] = humanizeStatusResult;
      formatToPlainStringResult = intl.formatToPlainString(tmp6(tmp5[28]).t["/6mw10"], obj);
    }
  }
  obj1 = { lineClamp: 1, variant: "text-md/semibold" };
  obj2 = { style: tmp3.usernameLabelContainer, children: null };
  if (flag6) {
    if (null != tmp26) {
      if (null == guildId) {
        obj3 = { userId: null, userName: null, style: null, defaultColor: "mobile-text-heading-primary", accessibilityLabel: null };
        obj3[0] = user.id;
        obj3[1] = memo3;
        const items15 = [tmp3.usernameLabel, memo1];
        obj3[2] = items15;
        obj3[4] = formatToPlainStringResult;
        let tmp4Result = tmp4(tmp5[45]);
        const merged1 = Object.assign(obj1);
        let tmp32Result1 = label(tmp4Result, obj3);
        let tmp32 = label;
      }
      const items16 = [tmp32Result1, memo4, ];
      if (user.bot) {
        obj4 = { verified: null, type: null };
        tmp4Result = tmp4(tmp5[46]);
        obj4[0] = user.isVerifiedBot();
        obj4[1] = tmp6(tmp5[47]).getBotTagTypeFromUser(user);
        let tmp32Result = tmp32(tmp4Result, obj4);
        const tmp6Result2 = tmp6(tmp5[47]);
      } else {
        obj5 = { userId: null };
        obj5[0] = user.id;
        tmp32Result = tmp32(tmp4(tmp5[48]), obj5);
      }
      items16[2] = tmp32Result;
      obj2[1] = items16;
      let tmp30Result = tmp30(tmp31, obj2);
      let tmp44 = "dot" !== roleStyle;
      if (!tmp44) {
        tmp44 = null == usernameColor && null == roleColors;
        const tmp45 = null == usernameColor && null == roleColors;
      }
      if (!tmp44) {
        obj6 = { style: null, children: null };
        obj6[0] = tmp3.labelContainer;
        if (usernameColor == null) {
          usernameColor = null;
        }
        let obj7 = { color: null, colors: null, containerStyles: null };
        obj7[0] = usernameColor;
        if (roleColors == null) {
          roleColors = null;
        }
        obj7[1] = roleColors;
        obj7[2] = tmp3.roleDot;
        const items17 = [tmp32(tmp6(tmp5[22]).RoleDot, obj7), tmp30Result];
        obj6[1] = items17;
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
    let obj13 = { fontFamily: null };
    obj13[0] = displayNameStylesFont;
    flag7 = obj13;
  }
  items18[2] = flag7;
  obj12[2] = items18;
  obj12[3] = formatToPlainStringResult;
  const merged6 = Object.assign(obj1);
  obj12.children = memo3;
  tmp32Result1 = tmp32(tmp6(tmp5[23]).Text, obj12);
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx");

export default memoResult;