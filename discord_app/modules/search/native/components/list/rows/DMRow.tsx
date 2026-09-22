// === Module 17133: DMRow ===

// Module 17133 (DMRow)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import UserUtils from "UserUtils" /* 4601 */;
import Text_Text from "Text/Text" /* 4753 */;
import BotTagDefault from "BotTag" /* 9558 */;
import _modDef9847 from "module_9847" /* 9847 */;
import ActivityStatusDefault from "ActivityStatus" /* 11144 */;
import _modDef13774 from "module_13774" /* 13774 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;
import PresenceStore from "PresenceStore" /* 4797 */;
import RelationshipStore from "RelationshipStore" /* 4406 */;

const UserUtilsDefault = UserUtils;

require = fn;
function FriendPresence(user) {
  user = user.user;
  ({ type, animate, guildId } = user);
  if (type === constants2.PENDING_INCOMING) {
    const obj2 = { lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: UserUtils.getUserTag(user) };
    let tmp5 = map1(Text_Text.Text, obj2);
  } else {
    const obj = { userId: user.id, guildId, iconStyle: null, textStyle: null, emojiSize: 16, animate: null };
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
const createStyles = fn(4757);
let obj = { activityStatusIcon: { width: 14, height: 14 }, activityStatusText: { color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, fontWeight: "400" }, tag: { marginLeft: 4 }, title: { flexDirection: "row" } };
let closure_15 = createStyles.createStyles(obj);
let obj3 = { color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, fontWeight: "400" };
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
  const tmp2 = type(guildId.useState(false), 2);
  const useReducedMotion = tmp2[1];
  let items = [isMobileOnline];
  const stateFromStoresObject = user(premiumSince[14]).useStateFromStoresObject(items, () => ({ isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id), status: PresenceStore.getStatus(user.id) }));
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
  const callback = guildId.useCallback(isOwner(function*() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp3;
            useReducedMotion(true);
            c3 = 1;
            c1 = 2;
            c4 = 1;
            const obj4 = { value: onPress(user.id), done: false };
            return obj4;
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
          const obj = { value, done: true };
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
  }), items3);
  if (stateFromStores1 == null) {
    name = stateFromStores1(tmp4[12]).getName(user);
    let obj5 = stateFromStores1(tmp4[12]);
  }
  const items4 = [, , , , , ];
  ({ title: arr5[0], tag: arr5[1] } = tmp);
  items4[2] = name;
  items4[3] = user;
  items4[4] = isOwner;
  items4[5] = premiumSince;
  const items5 = [user, status, isMobileOnline, isVROnline, guildId];
  const memo = obj.useMemo(() => {
    const obj = { style: title.title, children: null };
    const items = [map1(Text_Text.Text, { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name }), , , ];
    const bot = user.bot;
    if (!bot) {
      items[1] = bot;
      let tmp4Result = isOwner;
      if (isOwner) {
        const obj4 = { style: title.tag, children: null };
        const obj5 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef9847, disableColor: true };
        obj4.children = map1(native.Icon, obj5);
        tmp4Result = map1(timestampProducer, obj4);
      }
      items[2] = tmp4Result;
      let tmp4Result3 = null != premiumSince;
      if (tmp4Result3) {
        const obj6 = { style: title.tag, children: null };
        const obj7 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef13774, disableColor: true };
        obj6.children = map1(native.Icon, obj7);
        tmp4Result3 = map1(timestampProducer, obj6);
      }
      items[3] = tmp4Result3;
      obj.children = items;
      return closure_2_14(timestampProducer, obj);
    } else {
      const obj8 = { style: title.tag, verified: user.isVerifiedBot(), type: null };
      const tmp8 = BotTagDefault;
      const Types = BotTagDefault.Types;
      obj8.type = user.isSystemUser() ? Types.SYSTEM_DM : Types.BOT;
      map1(tmp8, obj8);
      const isSystemUserResult = user.isSystemUser();
    }
    const obj2 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
  }, items4);
  const items6 = [user, guildId, type, stateFromStores];
  const memo1 = obj.useMemo(() => {
    const obj = { user, guildId, status: null, isMobileOnline: null, isVROnline: null, size: null, avatarDecoration: null, autoStatusCutout: true };
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
    const userTag = UserUtilsDefault.getUserTag(user);
    if (null != userTag) {
      if (!user.isProvisional) {
        const obj2 = { variant: "text-sm/medium", color: "text-muted", children: userTag };
        let tmp6 = map1(Text_Text.Text, obj2);
      }
      return tmp6;
    }
    let tmp8 = null;
    if (null != type) {
      const obj3 = { user, guildId, type: tmp7, animate: !stateFromStores };
      tmp8 = map1(FriendPresence, obj3);
    }
    tmp6 = tmp8;
  }, items6);
  let obj6 = { label: memo, subLabel: memo2, icon: memo1, onPress: callback, trailing: null, accessibilityActions: null, onAccessibilityAction: null };
  if (tmp2[0]) {
    trailing = tmp14(title, {});
  }
  obj6.trailing = trailing;
  obj6.accessibilityActions = accessibilityActions;
  obj6.onAccessibilityAction = onAccessibilityAction;
  return name(tmp3(premiumSince[19]).SearchListRow, obj6);
});