// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import get_initialized from "../../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl14 from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import utils_StringUtils from "../../../../../../discord_common/js/shared/utils/StringUtils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import CheckmarkLargeIcon from "../../../../../design/components/Icon/native/redesign/generated/CheckmarkLargeIcon.tsx";
import UserUtils from "../../../../../utils/UserUtils.tsx";
import XLargeIcon from "../../../../../design/components/Icon/native/redesign/generated/XLargeIcon.tsx";
import BoostGemIcon2 from "../../../../../design/components/Icon/native/redesign/generated/BoostGemIcon.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ChannelActionCreatorsDefault from "../../../../../actions/ChannelActionCreators.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import ChatIcon from "../../../../../design/components/Icon/native/redesign/generated/ChatIcon.tsx";
import FriendSuggestionActionCreatorsDefault from "../../../../friend_suggestions/FriendSuggestionActionCreators.tsx";
import PhoneCallIcon from "../../../../../design/components/Icon/native/redesign/generated/PhoneCallIcon.tsx";
import RelationshipActionCreatorsDefault from "../../../../../actions/RelationshipActionCreators.tsx";
import UserRowConstants from "UserRowConstants.tsx";
import PeopleUtilsDefault from "../../../../people/PeopleUtils.tsx";
import GameRelationshipActionCreatorsDefault from "../../../../game_relationships/GameRelationshipActionCreators.tsx";
import ActivityStatusDefault from "../../../../activity_status/native/ActivityStatus.tsx";
import ActionButtonDefault from "../../../../../components_native/common/ActionButton.tsx";
import CrownIcon2 from "../../../../../design/components/Icon/native/redesign/generated/CrownIcon.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";
import ApplicationStore from "../../../../applications/ApplicationStore.tsx";
import FriendSuggestionStore from "../../../../friend_suggestions/FriendSuggestionStore.tsx";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PresenceStore from "../../../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../../../stores/RelationshipStore.tsx";
import Constants from "../../../../../Constants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const UserUtilsDefault = UserUtils;
let channel;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let obj2;
let obj3;
const View = react_native.View;
const UserRowModes = UserRowConstants.UserRowModes;
({ RelationshipTypes: closure_12, StatusTypes: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = Fragment);
let closure_17 = {
  CALL: "call",
  MESSAGE: "message",
  ACCEPT: "accept",
  DECLINE: "decline",
  CANCEL: "cancel",
  ACCEPT_SUGGESTION: "accept-suggestion",
  IGNORE_SUGGESTION: "ignore-suggestion",
  TOGGLE: "toggle",
};
let createStyles = createStyles_mod;
let closure_18 = createStyles.createStyles({
  avatar: { flexShrink: 0, flexGrow: 0 },
  actions: { flexDirection: "row" },
  action: { marginLeft: 12, alignSelf: "center" },
  buttonWrapper: { marginLeft: 8 },
  labelContainer: { flexDirection: "row", alignItems: "center" },
  roleDot: { marginRight: 4, paddingTop: 0 },
  usernameLabelContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 },
  usernameLabel: { display: "flex", flexShrink: 1 },
});
createStyles = createStyles_mod;
let obj = { activityText: obj2, gameContainer: obj3, gameIcon: { width: 14, height: 14 } };
obj2 = { color: nativeDefault.colors.TEXT_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: 4, cornerRadius: nativeDefault.radii.xs };
let closure_19 = createStyles(obj);
const Friends_v2 = "Friends_v2";
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isGameRelationship) => {
      let animate;
      let applicationId;
      let first;
      let guildId;
      let items1;
      let tmp15;
      let tmp7;
      let type;
      let user;
      const obj = applicationId(576);
      const cResult = obj.c(28);
      ({ user, type, animate, guildId, applicationId } = isGameRelationship);
      isGameRelationship = isGameRelationship.isGameRelationship;
      const tmp4 = closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ApplicationStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== applicationId) {
        const fn = function s() {
          return ApplicationStore.getApplication(applicationId);
        };
        cResult[1] = applicationId;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = applicationId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      if (type !== constants.PENDING_INCOMING) {
        if (type !== constants.SUGGESTION) {
          let tmp9;
          if (type !== constants.PENDING_OUTGOING) {
            if (cResult[23] === animate) {
              if (cResult[24] === guildId) {
                if (cResult[25] === tmp4.activityText) {
                  if (cResult[26] === user.id) {
                    tmp9 = cResult[27];
                  }
                }
              }
            }
            const obj2 = { userId: user.id, guildId, textStyle: tmp4.activityText, animate };
            const tmp12 = closure_14(ActivityStatusDefault, obj2);
            cResult[23] = animate;
            cResult[24] = guildId;
            cResult[25] = tmp4.activityText;
            cResult[26] = user.id;
            cResult[27] = tmp12;
            tmp9 = tmp12;
          }
          return tmp9;
        }
      }
      if (isGameRelationship) {
        let tmp27;
        if (null == stateFromStores) {
          let tmp31;
          if (cResult[3] !== tmp4.gameIcon) {
            const obj3 = { style: tmp4.gameIcon };
            const tmp34 = closure_14(View, obj3);
            cResult[3] = tmp4.gameIcon;
            cResult[4] = tmp34;
            tmp31 = tmp34;
          } else {
            tmp31 = cResult[4];
          }
          tmp27 = tmp31;
        } else {
          let tmp19;
          let tmp20;
          if (cResult[5] !== stateFromStores) {
            let str = stateFromStores.getIconURL(16);
            if (str == null) {
              str = "";
            }
            cResult[5] = stateFromStores;
            cResult[6] = str;
            tmp19 = str;
          } else {
            tmp19 = cResult[6];
          }
          if (cResult[7] !== tmp19) {
            const obj4 = { uri: tmp19 };
            cResult[7] = tmp19;
            cResult[8] = obj4;
            tmp20 = obj4;
          } else {
            tmp20 = cResult[8];
          }
          if (cResult[9] === stateFromStores.id) {
            if (cResult[10] === tmp4.gameIcon) {
              let tmp21;
              let tmp24;
              if (cResult[11] === tmp20) {
                tmp21 = cResult[12];
              }
              if (cResult[13] !== stateFromStores.name) {
                const obj5 = {
                  lineClamp: 1,
                  variant: "text-xs/medium",
                  color: "text-subtle",
                  children: stateFromStores.name,
                };
                const tmp26 = closure_14(applicationId(4886).Text, obj5);
                cResult[13] = stateFromStores.name;
                cResult[14] = tmp26;
                tmp24 = tmp26;
              } else {
                tmp24 = cResult[14];
              }
              if (cResult[15] === tmp4.gameContainer) {
                if (cResult[16] === tmp21) {
                  if (cResult[17] === tmp24) {
                    tmp27 = cResult[18];
                  }
                }
              }
              const obj6 = { style: tmp4.gameContainer, children: items1 };
              items1 = [tmp21, tmp24];
              const tmp30 = closure_15(View, obj6);
              cResult[15] = tmp4.gameContainer;
              cResult[16] = tmp21;
              cResult[17] = tmp24;
              cResult[18] = tmp30;
              tmp27 = tmp30;
            }
          }
          const obj7 = { style: tmp4.gameIcon, resizeMode: "contain", source: tmp20, disableColor: true };
          const tmp23 = closure_14(applicationId(1188).Icon, obj7, stateFromStores.id);
          cResult[9] = stateFromStores.id;
          cResult[10] = tmp4.gameIcon;
          cResult[11] = tmp20;
          cResult[12] = tmp23;
          tmp21 = tmp23;
        }
        tmp15 = tmp27;
      } else {
        let tmp13;
        if (cResult[19] !== user) {
          const tmpResult2 = applicationId(4722);
          const userTag = tmpResult2.getUserTag(user);
          cResult[19] = user;
          cResult[20] = userTag;
          tmp13 = userTag;
        } else {
          tmp13 = cResult[20];
        }
        if (cResult[21] !== tmp13) {
          const obj8 = { lineClamp: 1, variant: "text-xs/medium", color: "text-muted", children: tmp13 };
          const tmp17 = closure_14(applicationId(4886).Text, obj8);
          cResult[21] = tmp13;
          cResult[22] = tmp17;
          tmp15 = tmp17;
        } else {
          tmp15 = cResult[22];
        }
      }
      tmp9 = tmp15;
    }
  : (arg0) => {
      let animate;
      let guildId;
      let isGameRelationship;
      let items1;
      let obj6;
      let tmp2Result;
      let tmp9;
      let type;
      let user;
      ({ user, type, applicationId: require } = arg0);
      ({ animate, isGameRelationship, guildId } = arg0);
      const tmp = closure_19();
      const items = [ApplicationStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(require));
      if (type !== constants.PENDING_INCOMING) {
        if (type !== constants.SUGGESTION) {
          let tmp7;
          if (type !== constants.PENDING_OUTGOING) {
            const obj2 = { userId: user.id, guildId, textStyle: tmp.activityText, animate };
            tmp7 = closure_14(ActivityStatusDefault, obj2);
          }
          return tmp7;
        }
      }
      if (isGameRelationship) {
        let tmp14Result;
        if (null == stateFromStores) {
          const obj3 = { style: tmp.gameIcon };
          tmp14Result = closure_14(View, obj3);
        } else {
          const obj4 = { style: tmp.gameContainer, children: items1 };
          const obj5 = { style: tmp.gameIcon, resizeMode: "contain", source: obj6, disableColor: true };
          const Icon = native.Icon;
          let str = stateFromStores.getIconURL(16);
          if (str == null) {
            str = "";
          }
          obj6 = { uri: str };
          items1 = [closure_14(Icon, obj5, stateFromStores.id)];
          const obj7 = {
            lineClamp: 1,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: stateFromStores.name,
          };
          items1[1] = closure_14(Text_Text.Text, obj7);
          tmp14Result = closure_15(View, obj4);
        }
        tmp9 = tmp14Result;
      } else {
        const obj8 = {
          lineClamp: 1,
          variant: "text-xs/medium",
          color: "text-muted",
          children: tmp2Result.getUserTag(user),
        };
        const Text = Text_Text.Text;
        tmp2Result = UserUtils;
        tmp9 = closure_14(Text, obj8);
      }
      tmp7 = tmp9;
    };
const memoResult = react.memo(function UserRow(type) {
  let accessibilityActions;
  let applicationId;
  let guildId;
  let items15;
  let items17;
  let items18;
  let onAccessibilityAction;
  let premiumSince;
  let roleColors;
  let stateFromStores;
  let tmp32;
  let tmp6Result6;
  let usernameColor;
  type = type.type;
  const user = type.user;
  let NONE = type.mode;
  if (NONE === undefined) {
    let tmp = guildId;
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
  const merged = Object.assign(
    type,
    Object.assign({
      type: 0,
      user: 0,
      mode: 0,
      selected: 0,
      disabled: 0,
      isOwner: 0,
      onPress: 0,
      onLongPress: 0,
      handleMessage: 0,
      nickname: 0,
      usernameColor: 0,
      roleColors: 0,
      premiumSince: 0,
      guildId: 0,
      trailing: 0,
      subLabel: 0,
      label: 0,
      accessibilityActions: 0,
      onAccessibilityAction: 0,
      applicationId: 0,
      isGameRelationship: 0,
      isNameplatedRow: 0,
      canShowDisplayNameStyles: 0,
      canShowDisplayNameStylesFont: 0,
    }),
  );
  let analyticsLocations;
  let tmp3 = analyticsLocations();
  closure_17 = tmp3;
  let tmp4 = user;
  let tmp5 = NONE;
  analyticsLocations = user(NONE[28])().analyticsLocations;
  let tmp6 = type;
  let obj = type(NONE[23]);
  let items = [onPress];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
    useReducedMotion: onPress.useReducedMotion,
    roleStyle: onPress.roleStyle,
  }));
  const useReducedMotion = stateFromStoresObject.useReducedMotion;
  const roleStyle = stateFromStoresObject.roleStyle;
  let obj2 = type(NONE[23]);
  let items1 = [usernameColor];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => {
    const obj = {
      isMobileOnline: PresenceStore.isMobileOnline(user.id),
      isVROnline: PresenceStore.isVROnline(user.id),
      status: PresenceStore.getStatus(user.id),
    };
    return obj;
  });
  const isMobileOnline = stateFromStoresObject1.isMobileOnline;
  const isVROnline = stateFromStoresObject1.isVROnline;
  const status = stateFromStoresObject1.status;
  let obj3 = type(NONE[23]);
  let items2 = [premiumSince];
  stateFromStores = obj3.useStateFromStores(items2, () => {
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
  let obj4 = type(NONE[23]);
  const items3 = [handleMessage];
  const stateFromStores1 = obj4.useStateFromStores(items3, () => FriendSuggestionStore.getSuggestion(user.id));
  let obj5 = type(NONE[29]);
  const avatarDecoration = obj5.useAvatarDecoration(user, guildId);
  let obj6 = flag2;
  const items4 = [user, onPress];
  const callback = flag2.useCallback(() => {
    if (onPress != null) {
      tmp(user);
    }
  }, items4);
  let closure_26 = flag2.useRef(user);
  const items5 = [user];
  const effect = flag2.useEffect(() => {
    closure_26.current = user;
  }, items5);
  const items6 = [NONE, type, user, handleMessage, applicationId, tmp3];
  const memo = flag2.useMemo(() => {
    let Button;
    let JFJ8Cg;
    let JFJ8Cg2;
    let Q75ddl;
    let Q75ddl2;
    let formatToPlainString;
    let formatToPlainString10;
    let formatToPlainString2;
    let formatToPlainString3;
    let formatToPlainString4;
    let formatToPlainString5;
    let formatToPlainString6;
    let formatToPlainString7;
    let formatToPlainString8;
    let formatToPlainString9;
    let intl;
    let intl2;
    let intl3;
    let items1;
    let items2;
    let obj10;
    let obj12;
    let obj13;
    let obj15;
    let obj16;
    let obj18;
    let obj19;
    let obj20;
    let obj22;
    let obj24;
    let obj25;
    let obj26;
    let obj28;
    let obj30;
    let obj31;
    let obj33;
    let obj35;
    let obj37;
    let obj38;
    let obj4;
    let obj40;
    let obj6;
    let obj8;
    let prop;
    let prop1;
    let tmp19;
    let truncateText;
    let v6p0yBo;
    let v6p0yBo1;
    let zFfSFQ;
    let zFfSFQ2;
    const items = [];
    if (NONE !== UserRowModes.ACTIONS) {
      let obj2 = { accessibilityActions: items, actions: "r" };
      return obj2;
    } else {
      let tmp9;
      if (trailing.PENDING_INCOMING === type) {
        let obj3 = { name: closure_17.DECLINE, label: formatToPlainString3(prop, obj4) };
        const push3 = items.push;
        const intl6 = intl14.intl;
        formatToPlainString3 = intl6.formatToPlainString;
        obj4 = { name: obj15.getName(user) };
        prop = intl14.t["C9Xe6+"];
        obj15 = UserUtilsDefault;
        let obj5 = { name: closure_17.ACCEPT, label: formatToPlainString4(v6p0yBo, obj6) };
        const intl7 = intl14.intl;
        formatToPlainString4 = intl7.formatToPlainString;
        obj6 = { name: obj18.getName(user) };
        v6p0yBo = intl14.t["6p0yBo"];
        obj18 = UserUtilsDefault;
        push3(obj3, obj5);
        const obj7 = { style: closure_17.actions, children: items1 };
        const obj9 = {
          styles: closure_17.action,
          IconComponent: XLargeIcon.XLargeIcon,
          type: "neutral",
          onPress() {
            const current = closure_1_26.current;
            if (null != applicationId) {
              const obj2 = { userId: current.id, applicationId: tmp };
              const obj4 = user(NONE[18]);
              const result = obj4.cancelGameFriendRequest(obj2);
              const obj6 = type(NONE[17]);
              const result1 = obj6.presentGameFriendRequestIgnoredToast();
            } else {
              const obj5 = { location: roleStyle };
              const obj = user(NONE[19]);
              obj.cancelFriendRequest(current.id, obj5);
              const obj3 = type(NONE[17]);
              const result2 = obj3.presentFriendRequestIgnoredToast();
            }
          },
          accessibilityLabel: formatToPlainString5(prop1, obj10),
        };
        const tmp32 = ActionButtonDefault;
        const intl8 = intl14.intl;
        formatToPlainString5 = intl8.formatToPlainString;
        obj10 = { name: obj22.getName(user) };
        prop1 = intl14.t["C9Xe6+"];
        obj22 = UserUtilsDefault;
        items1 = [authStore2(tmp32, obj9)];
        const obj11 = {
          styles: closure_17.action,
          IconComponent: CheckmarkLargeIcon.CheckmarkLargeIcon,
          type: "positive",
          onPress() {
            let closure_0 = applicationId;
            const current = closure_1_26.current;
            let obj = user(NONE[16]);
            let obj2 = {
              userId: current.id,
              applicationId,
              location: roleStyle,
              onConfirm() {
                if (null != closure_0) {
                  const obj2 = closure_2_0(closure_2_2[17]);
                  const result = obj2.presentGameFriendRequestAcceptedToast();
                } else {
                  const obj = closure_2_0(closure_2_2[17]);
                  const result1 = obj.presentFriendRequestAcceptedToast();
                }
              },
            };
            let result = obj.maybeConfirmFriendRequestAccept(obj2);
          },
          accessibilityLabel: formatToPlainString6(v6p0yBo1, obj13),
        };
        const tmp34 = ActionButtonDefault;
        const intl9 = intl14.intl;
        formatToPlainString6 = intl9.formatToPlainString;
        obj13 = { name: obj25.getName(user) };
        v6p0yBo1 = intl14.t["6p0yBo"];
        obj25 = UserUtilsDefault;
        items1[1] = authStore2(tmp34, obj11);
        tmp9 = applicationId(View, obj7);
      } else if (trailing.PENDING_OUTGOING === type) {
        const push2 = items.push;
        const obj14 = { name: closure_17.CANCEL, label: formatToPlainString(JFJ8Cg, obj16) };
        const intl4 = intl14.intl;
        formatToPlainString = intl4.formatToPlainString;
        obj16 = { name: obj8.getName(user) };
        JFJ8Cg = intl14.t.JFJ8Cg;
        obj8 = UserUtilsDefault;
        push2(obj14);
        const obj17 = { style: closure_17.actions, children: authStore2(tmp19, obj19) };
        obj19 = {
          styles: closure_17.action,
          IconComponent: XLargeIcon.XLargeIcon,
          type: "neutral",
          onPress() {
            const current = closure_1_26.current;
            if (null != applicationId) {
              const obj2 = { userId: current.id, applicationId: tmp };
              const obj4 = user(NONE[18]);
              const result = obj4.cancelGameFriendRequest(obj2);
              const obj6 = type(NONE[17]);
              const result1 = obj6.presentGameFriendRequestIgnoredToast();
            } else {
              const obj5 = { location: roleStyle };
              const obj = user(NONE[19]);
              obj.cancelFriendRequest(current.id, obj5);
              const obj3 = type(NONE[17]);
              const result2 = obj3.presentFriendRequestIgnoredToast();
            }
          },
          accessibilityLabel: formatToPlainString2(JFJ8Cg2, obj20),
        };
        tmp19 = ActionButtonDefault;
        const intl5 = intl14.intl;
        formatToPlainString2 = intl5.formatToPlainString;
        obj20 = { name: obj12.getName(user) };
        JFJ8Cg2 = intl14.t.JFJ8Cg;
        obj12 = UserUtilsDefault;
        tmp9 = authStore2(View, obj17);
      } else if (trailing.SUGGESTION === type) {
        let obj = { name: closure_17.ACCEPT_SUGGESTION, label: intl.string(intl14.t["ed99+i"]) };
        const push = items.push;
        intl = intl14.intl;
        const obj21 = { name: closure_17.IGNORE_SUGGESTION, label: intl2.string(intl14.t["Tw3a/R"]) };
        intl2 = intl14.intl;
        push(obj, obj21);
        const obj23 = { style: closure_17.actions, children: authStore2(View, obj24) };
        obj24 = { style: closure_17.buttonWrapper, children: authStore2(Button, obj26) };
        obj26 = {
          variant: "secondary",
          size: "sm",
          text: truncateText(intl3.string(intl14.t.OYkgVk), 8),
          onPress() {
            let obj3;
            const current = closure_1_26.current;
            const obj2 = { userId: current.id, context: obj3, type: "IconComponent", fromFriendSuggestion: null };
            obj3 = { location: roleStyle };
            const obj = user(NONE[19]);
            obj.addRelationship(obj2);
            const obj4 = type(NONE[17]);
            const result = obj4.presentAddedFriendToast();
          },
        };
        Button = components_Button_Button.Button;
        truncateText = utils_StringUtils.truncateText;
        utils_StringUtils;
        intl3 = intl14.intl;
        tmp9 = authStore2(View, obj23);
      } else {
        const FRIEND = trailing.FRIEND;
        const push4 = items.push;
        const obj27 = { name: closure_17.CALL, label: formatToPlainString7(Q75ddl, obj28) };
        const intl10 = intl14.intl;
        formatToPlainString7 = intl10.formatToPlainString;
        obj28 = { name: obj30.getName(user) };
        Q75ddl = intl14.t.Q75ddl;
        obj30 = UserUtilsDefault;
        const obj29 = { name: closure_17.MESSAGE, label: formatToPlainString8(zFfSFQ, obj31) };
        const intl11 = intl14.intl;
        formatToPlainString8 = intl11.formatToPlainString;
        obj31 = { name: obj33.getName(user) };
        zFfSFQ = intl14.t.zFfSFQ;
        obj33 = UserUtilsDefault;
        push4(obj27, obj29);
        const obj32 = { style: closure_17.actions, children: items2 };
        const obj34 = {
          styles: closure_17.action,
          IconComponent: PhoneCallIcon.PhoneCallIcon,
          type: "neutral",
          onPress() {
            const current = closure_1_26.current;
            let obj = user(NONE[13]);
            const ensurePrivateChannelResult = obj.ensurePrivateChannel(current.id);
            ensurePrivateChannelResult.then((result) => {
              channel = channel.getChannel(result);
              if (null != channel) {
                const tmp3 = closure_2_1(closure_2_2[14]);
                tmp3(channel.isPrivate(), "must be a DM");
                const obj2 = closure_2_1(closure_2_2[15])(channel, false);
                if (!obj2.inCall) {
                  obj2.onPress();
                }
                const obj = { recipientIds: current.id };
                const tmpResult = closure_2_1(closure_2_2[13]);
                tmpResult.openPrivateChannel(obj);
              }
            });
          },
          accessibilityLabel: formatToPlainString9(Q75ddl2, obj35),
        };
        const tmp48 = ActionButtonDefault;
        const intl12 = intl14.intl;
        formatToPlainString9 = intl12.formatToPlainString;
        obj35 = { name: obj37.getName(user) };
        Q75ddl2 = intl14.t.Q75ddl;
        obj37 = UserUtilsDefault;
        items2 = [authStore2(tmp48, obj34)];
        const obj36 = {
          styles: closure_17.action,
          IconComponent: ChatIcon.ChatIcon,
          type: "neutral",
          onPress() {
            let tmpResult;
            if (handleMessage != null) {
              tmpResult = tmp(closure_1_26.current);
            }
            return tmpResult;
          },
          accessibilityLabel: formatToPlainString10(zFfSFQ2, obj38),
        };
        const tmp49 = ActionButtonDefault;
        const intl13 = intl14.intl;
        formatToPlainString10 = intl13.formatToPlainString;
        obj38 = { name: obj40.getName(user) };
        zFfSFQ2 = intl14.t.zFfSFQ;
        obj40 = UserUtilsDefault;
        items2[1] = authStore2(tmp49, obj36);
        tmp9 = applicationId(View, obj32);
      }
      return { accessibilityActions: items, actions: tmp9 };
    }
  }, items6);
  const actions = memo.actions;
  const items7 = [user, handleMessage, applicationId];
  const accessibilityActions2 = memo.accessibilityActions;
  const items8 = [onLongPress, user, analyticsLocations];
  const callback1 = flag2.useCallback((nativeEvent) => {
    let obj7;
    const actionName = nativeEvent.nativeEvent.actionName;
    if (closure_17.CALL === actionName) {
      let closure_0 = user;
      const obj14 = ChannelActionCreatorsDefault;
      const ensurePrivateChannelResult = obj14.ensurePrivateChannel(user.id);
      ensurePrivateChannelResult.then((result) => {
        channel = channel.getChannel(result);
        if (null != channel) {
          const tmp3 = closure_2_1(closure_2_2[14]);
          tmp3(channel.isPrivate(), "must be a DM");
          const obj2 = closure_2_1(closure_2_2[15])(channel, false);
          if (!obj2.inCall) {
            obj2.onPress();
          }
          const obj = { recipientIds: current.id };
          const tmpResult = closure_2_1(closure_2_2[13]);
          tmpResult.openPrivateChannel(obj);
        }
      });
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
            const obj2 = closure_2_0(closure_2_2[17]);
            const result = obj2.presentGameFriendRequestAcceptedToast();
          } else {
            const obj = closure_2_0(closure_2_2[17]);
            const result1 = obj.presentFriendRequestAcceptedToast();
          }
        },
      };
      const obj12 = PeopleUtilsDefault;
      const result = obj12.maybeConfirmFriendRequestAccept(obj3);
    } else {
      if (closure_17.DECLINE !== actionName) {
        if (closure_17.CANCEL !== actionName) {
          if (closure_17.ACCEPT_SUGGESTION === actionName) {
            const obj4 = { userId: user.id, context: obj7, type: "IconComponent", fromFriendSuggestion: null };
            obj7 = { location: Friends_v2 };
            const obj2 = RelationshipActionCreatorsDefault;
            obj2.addRelationship(obj4);
            const obj5 = ToastUtils;
            const result1 = obj5.presentAddedFriendToast();
          } else if (closure_17.IGNORE_SUGGESTION === actionName) {
            const obj = FriendSuggestionActionCreatorsDefault;
            obj.ignore(user.id);
          }
        }
      }
      if (null != applicationId) {
        const obj10 = { userId: user.id, applicationId: tmp14 };
        const obj9 = GameRelationshipActionCreatorsDefault;
        const result2 = obj9.cancelGameFriendRequest(obj10);
        const obj11 = ToastUtils;
        const result3 = obj11.presentGameFriendRequestIgnoredToast();
      } else {
        const obj13 = { location: Friends_v2 };
        const obj6 = RelationshipActionCreatorsDefault;
        obj6.cancelFriendRequest(user.id, obj13);
        const obj8 = ToastUtils;
        const result4 = obj8.presentFriendRequestIgnoredToast();
      }
    }
  }, items7);
  const callback2 = flag2.useCallback(() => {
    let localUser;
    let sourceAnalyticsLocations;
    if (null == onLongPress) {
      const promise = asyncRequire(7850, dependencyMap.paths);
      promise.then((result) => {
        const obj = { userId: localUser.id, localUser, sourceAnalyticsLocations };
        return result.default(obj);
      });
    } else {
      tmp(user);
    }
  }, items8);
  let obj7 = type(NONE[40]);
  const nameplate = obj7.useNameplate({ user, guildId });
  const items9 = [usernameColor, roleStyle];
  const memo1 = flag2.useMemo(() => {
    let tmp2;
    if (null != usernameColor) {
      if ("username" === roleStyle) {
        tmp2 = { color: tmp };
        const obj = { color: tmp };
      }
    }
    return tmp2;
  }, items9);
  const items10 = [tmp3.avatar, user, guildId, status, isMobileOnline, isVROnline, avatarDecoration];
  const items11 = [label, type, , ,];
  let name;
  const memo2 = flag2.useMemo(() => {
    let tmp4;
    const obj = {
      style: closure_17.avatar,
      user,
      guildId,
      status: tmp4,
      isMobileOnline,
      isVROnline,
      size: native.AvatarSizes.REFRESH_MEDIUM_32,
      avatarDecoration,
      autoStatusCutout: true,
    };
    tmp4 = null;
    const Avatar = native.Avatar;
    if (map1.OFFLINE !== status) {
      tmp4 = status;
    }
    return authStore2(Avatar, obj);
  }, items10);
  const useMemo = flag2.useMemo;
  if (stateFromStores1 != null) {
    name = stateFromStores1.name;
  }
  items11[2] = name;
  items11[3] = stateFromStores;
  items11[4] = user;
  const memo3 = useMemo(() => {
    let tmp = label;
    if (undefined === label) {
      let name;
      if (type === trailing.SUGGESTION) {
        let name1;
        if (stateFromStores1 != null) {
          name1 = stateFromStores1.name;
        }
        if (null != name1) {
          name = stateFromStores1.name;
        }
        tmp = name;
      }
      name = stateFromStores;
      if (stateFromStores == null) {
        const obj = UserUtilsDefault;
        name = obj.getName(user);
      }
    }
    return tmp;
  }, items11);
  const items12 = [label, flag3, premiumSince];
  const items13 = [subLabel, user, type, useReducedMotion, flag4, guildId, applicationId];
  const memo4 = obj6.useMemo(() => {
    if (undefined === label) {
      let tmp5 = null;
      if (flag3) {
        const obj = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
        const CrownIcon = CrownIcon2.CrownIcon;
        tmp5 = authStore2(CrownIcon, obj);
      }
      const items = [tmp5];
      let tmp11 = null;
      if (null != premiumSince) {
        const obj2 = { size: "xs", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
        const BoostGemIcon = BoostGemIcon2.BoostGemIcon;
        tmp11 = authStore2(BoostGemIcon, obj2);
      }
      const obj3 = { children: items };
      items[1] = tmp11;
      return applicationId(authStore3, obj3);
    }
  }, items12);
  const items14 = [trailing, flag2, NONE, actions];
  const memo5 = obj6.useMemo(() => {
    let tmp = subLabel;
    if (undefined === subLabel) {
      const obj = { user, type, animate: !useReducedMotion, isGameRelationship: flag4, guildId, applicationId };
      tmp = authStore2(closure_21, obj);
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
  let tmp25 = tmp4(tmp5[43])(guildId, user.id);
  const tmp6Result = tmp6(tmp5[44]);
  const processColorStringsArray = tmp6Result.useProcessColorStringsArray(roleColors);
  if (tmp25) {
    tmp25 = "username" === roleStyle;
  }
  if (tmp25) {
    tmp25 = processColorStringsArray.length > 1;
  }
  let obj8 = { userId: user.id, guildId };
  const tmp26 = tmp4(tmp5[45])(obj8);
  const tmp6Result4 = tmp6(tmp5[46]);
  const displayNameStylesFont = tmp6Result4.useDisplayNameStylesFont({ displayNameStyles: tmp26 });
  const tmp6Result5 = tmp6(tmp5[26]);
  const humanizeStatusResult = tmp6Result5.humanizeStatus(status, { isMobile: isMobileOnline, isVR: isVROnline });
  let formatToPlainStringResult;
  if (typeof memo3 === "string") {
    if (null != humanizeStatusResult) {
      let intl = tmp6(tmp5[30]).intl;
      let obj9 = { label: memo3, status: humanizeStatusResult };
      formatToPlainStringResult = intl.formatToPlainString(tmp6(tmp5[30]).t["/6mw10"], obj9);
    }
  }
  let obj10 = { lineClamp: 1, variant: "text-md/semibold" };
  let obj11 = { style: tmp3.usernameLabelContainer, children: null };
  if (flag6) {
    if (null != tmp26) {
      let tmp32Result6;
      let tmp32Result;
      let tmp32Result5;
      if (null == guildId) {
        let obj12 = {
          userId: user.id,
          userName: memo3,
          style: items15,
          defaultColor: "mobile-text-heading-primary",
          accessibilityLabel: formatToPlainStringResult,
        };
        items15 = [tmp3.usernameLabel, memo1];
        const tmp4Result = tmp4(tmp5[47]);
        const merged1 = Object.assign(obj10);
        tmp32Result6 = label(tmp4Result, obj12);
        tmp32 = label;
      }
      const items16 = [tmp32Result6, memo4, ,];
      if (user.bot) {
        let obj13 = { verified: user.isVerifiedBot(), type: tmp6Result6.getBotTagTypeFromUser(user) };
        const tmp4Result2 = tmp4(tmp5[48]);
        tmp6Result6 = tmp6(tmp5[49]);
        tmp32Result = tmp32(tmp4Result2, obj13);
      } else {
        let obj14 = { userId: user.id };
        tmp32Result = tmp32(tmp4(tmp5[50]), obj14);
      }
      items16[2] = tmp32Result;
      let tmp32Result4 = null != guildId;
      if (tmp32Result4) {
        let obj15 = { guildId, userId: user.id };
        tmp32Result4 = tmp32(tmp4(tmp5[51]), obj15);
      }
      items16[3] = tmp32Result4;
      obj11.children = items16;
      const tmp30Result = applicationId(flag3, obj11);
      let tmp45 = "dot" !== roleStyle;
      if (!tmp45) {
        tmp45 = null == usernameColor && null == roleColors;
      }
      let tmp30Result2 = tmp30Result;
      if (!tmp45) {
        let obj16 = { style: tmp3.labelContainer, children: items17 };
        const RoleDot = tmp6(tmp5[24]).RoleDot;
        if (usernameColor == null) {
          usernameColor = null;
        }
        let obj17 = { color: usernameColor, colors: roleColors, containerStyles: tmp3.roleDot };
        if (roleColors == null) {
          roleColors = null;
        }
        items17 = [tmp32(RoleDot, obj17), tmp30Result];
        tmp30Result2 = tmp30(tmp31, obj16);
      }
      let obj18 = {
        disabled: flag2,
        icon: memo2,
        onPress: callback,
        onLongPress: callback2,
        accessibilityActions,
        onAccessibilityAction,
        label: tmp30Result2,
        subLabel: memo5,
        height: "100%",
      };
      let tmp48 = obj18;
      let tmp49 = merged;
      const merged2 = Object.assign(merged);
      if (accessibilityActions == null) {
        accessibilityActions = accessibilityActions2;
      }
      if (onAccessibilityAction == null) {
        onAccessibilityAction = callback1;
      }
      if (NONE === guildId.TOGGLE) {
        let obj19 = { checked: flag };
        const TableCheckboxRow = tmp6(tmp5[52]).TableCheckboxRow;
        const merged3 = Object.assign(obj18);
        tmp32Result5 = tmp32(TableCheckboxRow, obj19);
      } else {
        if (null != nameplate) {
          if (flag5) {
            let obj20 = { trailing: memo6, nameplate };
            const UserNameplateRow = tmp6(tmp5[53]).UserNameplateRow;
            const merged4 = Object.assign(obj18);
            tmp32Result5 = tmp32(UserNameplateRow, obj20);
          }
        }
        let obj21 = { trailing: memo6 };
        const TableRow = tmp6(tmp5[54]).TableRow;
        const merged5 = Object.assign(obj18);
        tmp32Result5 = tmp32(TableRow, obj21);
      }
      return tmp32Result5;
    }
  }
  tmp32 = label;
  let tmp33;
  const Text = tmp6(tmp5[25]).Text;
  if (tmp25) {
    tmp33 = processColorStringsArray;
  }
  let obj22 = {
    gradientColors: tmp33,
    color: "mobile-text-heading-primary",
    style: items18,
    accessibilityLabel: formatToPlainStringResult,
    children: memo3,
  };
  items18 = [tmp3.usernameLabel, memo1];
  if (flag7) {
    flag7 = null != displayNameStylesFont;
  }
  if (flag7) {
    let obj23 = { fontFamily: displayNameStylesFont };
    flag7 = obj23;
  }
  items18[2] = flag7;
  const merged6 = Object.assign(obj10);
  tmp32Result6 = tmp32(Text, obj22);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UserRow.tsx");

export default memoResult;
