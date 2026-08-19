// discord_app/modules/search/native/components/list/rows/DMRow.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import nameFromUser from "../../../../../../utils/UserUtils.tsx";
import Text from "../../../../../../design/components/Text/native/Text.tsx";
import ActivityStatusDefault from "../../../../../activity_status/native/ActivityStatus.tsx";
import asyncGeneratorStep from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import maybeApplyNoTextColorForLightCustomTheme from "../../../../../a11y/AccessibilityStore.tsx";
import sortActivity from "../../../../../../stores/PresenceStore.tsx";
import markAllUserIdListsStale from "../../../../../../stores/RelationshipStore.tsx";
import ME from "../../../../../../Constants.tsx";
import jsxProd from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function FriendPresence(user) {
  user = user.user;
  ({ type, animate, guildId } = user);
  if (type === constants.PENDING_INCOMING) {
    let obj = { lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: null };
    obj[3] = nameFromUser.getUserTag(user);
    let tmp5 = callback(Text.Text, obj);
  } else {
    obj = { userId: null, guildId: null, iconStyle: null, textStyle: null, emojiSize: 16, animate: null };
    obj[0] = user.id;
    obj[1] = guildId;
    ({ activityStatusIcon: obj[2], activityStatusText: obj[3] } = tmp);
    obj[5] = animate;
    tmp5 = callback(ActivityStatusDefault, obj);
  }
  return tmp5;
}
let c5 = importAllResult;
({ View: closure_6, ActivityIndicator: error } = get_ActivityIndicator);
({ StatusTypes: unpackModuleId, RelationshipTypes: closure_12 } = ME);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let obj = { color: ThemesDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, fontWeight: "400" };
obj[1] = obj;
obj[2] = { marginLeft: 4 };
obj[3] = { flexDirection: "row" };
let closure_15 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function DMRow(user) {
  user = user.user;
  ({ nickname: stateFromStores1, premiumSince } = user);
  const isOwner = user.isOwner;
  const type = user.type;
  const guildId = user.guildId;
  const onPress = user.onPress;
  let trailing = user.trailing;
  let isMobileOnline;
  ({ accessibilityActions, onAccessibilityAction } = user);
  const tmp = callback2();
  closure_7 = tmp;
  let obj = guildId;
  const tmp2 = type(guildId.useState(false), 2);
  closure_8 = tmp2[1];
  let items = [isMobileOnline];
  const stateFromStoresObject = user(premiumSince[14]).useStateFromStoresObject(items, () => ({ isMobileOnline: isMobileOnline.isMobileOnline(user.id), isVROnline: isMobileOnline.isVROnline(user.id), status: isMobileOnline.getStatus(user.id) }));
  isMobileOnline = stateFromStoresObject.isMobileOnline;
  const isVROnline = stateFromStoresObject.isVROnline;
  const status = stateFromStoresObject.status;
  let obj2 = user(premiumSince[14]);
  const tmp3 = user;
  const items1 = [closure_8];
  const stateFromStores = user(premiumSince[14]).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let obj3 = user(premiumSince[14]);
  const items2 = [isVROnline];
  stateFromStores1 = user(premiumSince[14]).useStateFromStores(items2, () => {
    let nickname = stateFromStores1;
    if (stateFromStores1 == null) {
      nickname = isVROnline.getNickname(user.id);
    }
    return nickname;
  });
  const items3 = [onPress, user.id];
  let name = stateFromStores1;
  const callback = guildId.useCallback(isOwner(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp3;
            closure_1_8(true);
            c3 = 1;
            c1 = 2;
            c4 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = onPress(user.id);
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          callback(false);
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c3 = 0;
          callback(false);
          c4 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
    const obj5 = stateFromStores1(tmp4[12]);
  }
  const items4 = [, , , , , ];
  ({ title: arr5[0], tag: arr5[1] } = tmp);
  items4[2] = name;
  items4[3] = user;
  items4[4] = isOwner;
  items4[5] = premiumSince;
  const items5 = [user, status, isMobileOnline, isVROnline, guildId];
  const memo = obj.useMemo(() => {
    let obj = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
    const items = [name(user(premiumSince[11]).Text, obj), , , ];
    let obj2 = user;
    const bot = user.bot;
    if (!bot) {
      items[1] = bot;
      let tmp4Result = isOwner;
      if (isOwner) {
        obj = { style: null, children: null };
        obj[0] = title.tag;
        obj1 = { size: null, source: null, disableColor: true };
        obj1[0] = user(premiumSince[16]).Icon.Sizes.REFRESH_SMALL_16;
        obj1[1] = stateFromStores1(premiumSince[17]);
        obj[1] = name(user(premiumSince[16]).Icon, obj1);
        tmp4Result = name(onPress, obj);
      }
      items[2] = tmp4Result;
      tmp4Result = null != premiumSince;
      if (tmp4Result) {
        obj2 = { style: null, children: null };
        obj2[0] = title.tag;
        const obj3 = { size: null, source: null, disableColor: true };
        obj3[0] = user(premiumSince[16]).Icon.Sizes.REFRESH_SMALL_16;
        obj3[1] = stateFromStores1(premiumSince[18]);
        obj2[1] = name(user(premiumSince[16]).Icon, obj3);
        tmp4Result = name(onPress, obj2);
      }
      items[3] = tmp4Result;
      obj[1] = items;
      return closure_1_14(onPress, obj);
    } else {
      const obj4 = { style: null, verified: null, type: null };
      obj4[0] = title.tag;
      obj4[1] = obj2.isVerifiedBot();
      const tmp8 = stateFromStores1(premiumSince[15]);
      const Types = stateFromStores1(premiumSince[15]).Types;
      obj4[2] = obj2.isSystemUser() ? Types.SYSTEM_DM : Types.BOT;
      name(tmp8, obj4);
      const isSystemUserResult = obj2.isSystemUser();
    }
  }, items4);
  const items6 = [user, guildId, type, stateFromStores];
  const memo1 = obj.useMemo(() => {
    const obj = { user, guildId, status: null, isMobileOnline: null, isVROnline: null, size: null, avatarDecoration: null, autoStatusCutout: true };
    let tmp5 = null;
    if (status.OFFLINE !== status) {
      tmp5 = status;
    }
    obj[2] = tmp5;
    obj[3] = isMobileOnline;
    obj[4] = isVROnline;
    obj[5] = user(premiumSince[16]).AvatarSizes.LARGE_48;
    obj[6] = user.avatarDecoration;
    return name(user(premiumSince[16]).Avatar, obj);
  }, items5);
  const memo2 = obj.useMemo(() => {
    let obj = stateFromStores1(premiumSince[12]);
    const userTag = obj.getUserTag(user);
    if (null != userTag) {
      if (!user.isProvisional) {
        obj = { variant: "text-sm/medium", color: "text-muted", children: null };
        obj[2] = userTag;
        let tmp6 = name(user(premiumSince[11]).Text, obj);
      }
      return tmp6;
    }
    let tmp8 = null;
    if (null != type) {
      obj = { user: null, guildId: null, type: null, animate: null };
      obj[0] = user;
      obj[1] = guildId;
      obj[2] = tmp7;
      obj[3] = !stateFromStores;
      tmp8 = name(FriendPresence, obj);
    }
    tmp6 = tmp8;
  }, items6);
  obj = { label: memo, subLabel: memo2, icon: memo1, onPress: callback, trailing: null, accessibilityActions: null, onAccessibilityAction: null };
  if (tmp2[0]) {
    trailing = tmp14(closure_7, {});
  }
  obj[4] = trailing;
  obj[5] = accessibilityActions;
  obj[6] = onAccessibilityAction;
  return name(tmp3(premiumSince[19]).SearchListRow, obj);
});
const result = require("obj132").fileFinishedImporting("modules/search/native/components/list/rows/DMRow.tsx");

export default memoResult;