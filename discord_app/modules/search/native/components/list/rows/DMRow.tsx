// discord_app/modules/search/native/components/list/rows/DMRow.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../../design/void/native.tsx";
import UserUtils from "../../../../../../utils/UserUtils.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import BotTagDefault from "../../../../../applications/native/BotTag.tsx";
import _modDef9753 from "../../../../../../../_runtime/metro/09753__.js";
import ActivityStatusDefault from "../../../../../activity_status/native/ActivityStatus.tsx";
import _modDef13502 from "../../../../../../../_runtime/metro/13502__.js";
import asyncGeneratorStep from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import PresenceStore from "../../../../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../../../../stores/RelationshipStore.tsx";

const UserUtilsDefault = UserUtils;

require = fn;
function FriendPresence(user) {
  user = user.user;
  ({ type, animate, guildId } = user);
  if (type === constants2.PENDING_INCOMING) {
    let obj = { lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: UserUtils.getUserTag(user) };
    let tmp5 = map1(Text_Text.Text, obj);
  } else {
    obj = { userId: user.id, guildId, iconStyle: null, textStyle: null, emojiSize: 16, animate: null };
    ({ activityStatusIcon: obj.iconStyle, activityStatusText: obj.textStyle } = tmp);
    obj.animate = animate;
    tmp5 = map1(ActivityStatusDefault, obj);
  }
  return tmp5;
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ActivityIndicator: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ StatusTypes: closure_11, RelationshipTypes: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4560);
let obj = { activityStatusIcon: { width: 14, height: 14 }, activityStatusText: null, tag: null, title: null };
obj = { color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, fontWeight: "400" };
obj.activityStatusText = obj;
obj.tag = { marginLeft: 4 };
obj.title = { flexDirection: "row" };
let closure_15 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/DMRow.tsx");

export default noop.memo(function DMRow(user) {
  user = user.user;
  ({ nickname: stateFromStores1, premiumSince } = user);
  const isOwner = user.isOwner;
  const type = user.type;
  const guildId = user.guildId;
  const onPress = user.onPress;
  let trailing = user.trailing;
  let isMobileOnline;
  ({ accessibilityActions, onAccessibilityAction } = user);
  const tmp = closure_15();
  const title = tmp;
  let obj = guildId;
  const tmp2 = type(guildId.useState(false), 2);
  const useReducedMotion = tmp2[1];
  let items = [isMobileOnline];
  const stateFromStoresObject = user(premiumSince[14]).useStateFromStoresObject(items, () => ({
    isMobileOnline: PresenceStore.isMobileOnline(user.id),
    isVROnline: PresenceStore.isVROnline(user.id),
    status: PresenceStore.getStatus(user.id),
  }));
  isMobileOnline = stateFromStoresObject.isMobileOnline;
  const isVROnline = stateFromStoresObject.isVROnline;
  const status = stateFromStoresObject.status;
  let obj2 = user(premiumSince[14]);
  const tmp3 = user;
  const items1 = [useReducedMotion];
  const stateFromStores = user(premiumSince[14]).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let obj3 = user(premiumSince[14]);
  const items2 = [isVROnline];
  stateFromStores1 = user(premiumSince[14]).useStateFromStores(items2, () => {
    let nickname = stateFromStores1;
    if (stateFromStores1 == null) {
      nickname = RelationshipStore.getNickname(user.id);
    }
    return nickname;
  });
  const items3 = [onPress, user.id];
  let name = stateFromStores1;
  const callback = guildId.useCallback(
    isOwner(function* (arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp3;
              useReducedMotion(true);
              c3 = 1;
              c1 = 2;
              c4 = 1;
              const obj1 = { value: onPress(user.id), done: false };
              return obj1;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_8(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_8(false);
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_8(false);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp23) {
          closure_2 = tmp23;
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp23;
          } else {
            c1 = tmp;
          }
        }
      }
    }),
    items3,
  );
  if (stateFromStores1 == null) {
    name = stateFromStores1(tmp4[12]).getName(user);
    const obj5 = stateFromStores1(tmp4[12]);
  }
  const items4 = [, , , , ,];
  ({ title: arr5[0], tag: arr5[1] } = tmp);
  items4[2] = name;
  items4[3] = user;
  items4[4] = isOwner;
  items4[5] = premiumSince;
  const items5 = [user, status, isMobileOnline, isVROnline, guildId];
  const memo = obj.useMemo(() => {
    let obj = { style: title.title, children: null };
    obj = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
    const items = [map1(Text_Text.Text, obj), , ,];
    let obj2 = user;
    const bot = user.bot;
    if (!bot) {
      items[1] = bot;
      let tmp4Result = isOwner;
      if (isOwner) {
        obj = { style: tmp3.tag, children: null };
        const obj1 = { size: tmp5(1178).Icon.Sizes.REFRESH_SMALL_16, source: _modDef9753, disableColor: true };
        obj.children = tmp4(tmp5(1178).Icon, obj1);
        tmp4Result = tmp4(tmp2, obj);
      }
      items[2] = tmp4Result;
      tmp4Result = null != premiumSince;
      if (tmp4Result) {
        obj2 = { style: tmp3.tag, children: null };
        const obj3 = { size: tmp5(1178).Icon.Sizes.REFRESH_SMALL_16, source: _modDef13502, disableColor: true };
        obj2.children = tmp4(tmp5(1178).Icon, obj3);
        tmp4Result = tmp4(tmp2, obj2);
      }
      items[3] = tmp4Result;
      obj.children = items;
      return closure_2_14(tmp2, obj);
    } else {
      const obj4 = { style: tmp3.tag, verified: obj2.isVerifiedBot(), type: null };
      const tmp8 = BotTagDefault;
      const Types = BotTagDefault.Types;
      obj4.type = obj2.isSystemUser() ? Types.SYSTEM_DM : Types.BOT;
      tmp4(tmp8, obj4);
      const isSystemUserResult = obj2.isSystemUser();
    }
  }, items4);
  const items6 = [user, guildId, type, stateFromStores];
  const memo1 = obj.useMemo(() => {
    const obj = {
      user,
      guildId,
      status: null,
      isMobileOnline: null,
      isVROnline: null,
      size: null,
      avatarDecoration: null,
      autoStatusCutout: true,
    };
    let tmp5 = null;
    if (constants.OFFLINE !== status) {
      tmp5 = status;
    }
    obj.status = tmp5;
    obj.isMobileOnline = isMobileOnline;
    obj.isVROnline = isVROnline;
    obj.size = native.AvatarSizes.LARGE_48;
    obj.avatarDecoration = user.avatarDecoration;
    return map1(native.Avatar, obj);
  }, items5);
  const memo2 = obj.useMemo(() => {
    let obj = UserUtilsDefault;
    const userTag = obj.getUserTag(user);
    if (null != userTag) {
      if (!tmp2.isProvisional) {
        obj = { variant: "text-sm/medium", color: "text-muted", children: userTag };
        let tmp6 = map1(Text_Text.Text, obj);
      }
      return tmp6;
    }
    let tmp8 = null;
    if (null != type) {
      obj = { user: tmp2, guildId, type: tmp7, animate: !stateFromStores };
      tmp8 = map1(FriendPresence, obj);
    }
    tmp6 = tmp8;
  }, items6);
  obj = {
    label: memo,
    subLabel: memo2,
    icon: memo1,
    onPress: callback,
    trailing: null,
    accessibilityActions: null,
    onAccessibilityAction: null,
  };
  if (tmp2[0]) {
    trailing = tmp14(title, {});
  }
  obj.trailing = trailing;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  return name(tmp3(premiumSince[19]).SearchListRow, obj);
});
