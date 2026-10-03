// discord_app/modules/search/native/components/list/rows/DMRow.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../../design/void/native.tsx";
import UserUtilsDefault from "../../../../../../utils/UserUtils.tsx";
import BotTagDefault from "../../../../../applications/native/BotTag.tsx";
import _modDef9233 from "../../../../../../../_runtime/metro/09233__.js";
import ActivityStatusDefault from "../../../../../activity_status/native/ActivityStatus.tsx";
import _modDef13305 from "../../../../../../../_runtime/metro/13305__.js";
import asyncGeneratorStep from "../../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../../a11y/AccessibilityStore.tsx";
import PresenceStore from "../../../../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../../../../stores/RelationshipStore.tsx";

const UserUtils = Text(4722);
const Text_Text = Text(4886);
require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ActivityIndicator: closure_7 } = get_ActivityIndicator);
const Constants = fn(1085);
({ StatusTypes: closure_11, RelationshipTypes: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4890);
let obj = {
  activityStatusIcon: { width: 14, height: 14 },
  activityStatusText: { color: nativeDefault.colors.TEXT_SUBTLE, fontSize: 14, lineHeight: 18, fontWeight: "400" },
  tag: { marginLeft: 4 },
  title: { flexDirection: "row" },
};
let closure_15 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (type) => {
      let Text = require;
      let tmp = dependencyMap;
      const cResult = c.c(10);
      ({ user, animate, guildId } = type);
      const tmp3 = closure_15();
      if (type.type === constants2.PENDING_INCOMING) {
        if (cResult[0] !== user) {
          const userTag = UserUtils.getUserTag(user);
          cResult[0] = user;
          cResult[1] = userTag;
          let tmp8 = userTag;
          const TextResult = UserUtils;
        } else {
          tmp8 = cResult[1];
        }
        if (cResult[2] !== tmp8) {
          Text = Text_Text.Text;
          const obj3 = { lineClamp: 1, variant: "text-sm/medium", color: "text-default", children: tmp8 };
          tmp = __initData2(Text, obj3);
          cResult[2] = tmp8;
          cResult[3] = tmp;
        }
      } else {
        if (cResult[4] === animate) {
          if (cResult[5] === guildId) {
            if (cResult[6] === tmp3.activityStatusIcon) {
              if (cResult[7] === tmp3.activityStatusText) {
                if (cResult[8] === user.id) {
                  let tmp4 = cResult[9];
                }
                return tmp4;
              }
            }
          }
        }
        const obj4 = { userId: user.id, guildId, iconStyle: null, textStyle: null, emojiSize: 16, animate: null };
        ({ activityStatusIcon: obj2.iconStyle, activityStatusText: obj2.textStyle } = tmp3);
        obj4.animate = animate;
        const tmp7 = __initData2(ActivityStatusDefault, obj4);
        cResult[4] = animate;
        cResult[5] = guildId;
        cResult[6] = tmp3.activityStatusIcon;
        cResult[7] = tmp3.activityStatusText;
        cResult[8] = user.id;
        cResult[9] = tmp7;
        tmp4 = tmp7;
      }
    }
  : (user) => {
      user = user.user;
      ({ type, animate, guildId } = user);
      if (type === constants2.PENDING_INCOMING) {
        const obj2 = {
          lineClamp: 1,
          variant: "text-sm/medium",
          color: "text-default",
          children: UserUtils.getUserTag(user),
        };
        let tmp5 = __initData2(Text_Text.Text, obj2);
      } else {
        const obj = { userId: user.id, guildId, iconStyle: null, textStyle: null, emojiSize: 16, animate: null };
        ({ activityStatusIcon: obj.iconStyle, activityStatusText: obj.textStyle } = tmp);
        obj.animate = animate;
        tmp5 = __initData2(ActivityStatusDefault, obj);
      }
      return tmp5;
    };
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
  const stateFromStoresObject = user(premiumSince[16]).useStateFromStoresObject(items, () => ({
    isMobileOnline: PresenceStore.isMobileOnline(user.id),
    isVROnline: PresenceStore.isVROnline(user.id),
    status: PresenceStore.getStatus(user.id),
  }));
  isMobileOnline = stateFromStoresObject.isMobileOnline;
  const isVROnline = stateFromStoresObject.isVROnline;
  const status = stateFromStoresObject.status;
  let obj2 = user(premiumSince[16]);
  const tmp3 = user;
  const items1 = [useReducedMotion];
  const stateFromStores = user(premiumSince[16]).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let obj3 = user(premiumSince[16]);
  const items2 = [isVROnline];
  stateFromStores1 = user(premiumSince[16]).useStateFromStores(items2, () => {
    let nickname = stateFromStores1;
    if (stateFromStores1 == null) {
      nickname = RelationshipStore.getNickname(user.id);
    }
    return nickname;
  });
  const items3 = [onPress, user.id];
  let name = stateFromStores1;
  const callback = guildId.useCallback(
    isOwner(function* () {
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
          return { value: "IconComponent", done: "IconComponent" };
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
            return { value: "IconComponent", done: "IconComponent" };
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
    name = stateFromStores1(tmp4[13]).getName(user);
    let obj5 = stateFromStores1(tmp4[13]);
  }
  const items4 = [, , , , ,];
  ({ title: arr5[0], tag: arr5[1] } = tmp);
  items4[2] = name;
  items4[3] = user;
  items4[4] = isOwner;
  items4[5] = premiumSince;
  const items5 = [user, status, isMobileOnline, isVROnline, guildId];
  const memo = obj.useMemo(() => {
    const obj = { style: title.title, children: null };
    const items = [
      __initData2(Text_Text.Text, {
        lineClamp: 1,
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children: name,
      }),
      ,
      ,
    ];
    const bot = user.bot;
    if (!bot) {
      items[1] = bot;
      let tmp4Result = isOwner;
      if (isOwner) {
        const obj4 = { style: title.tag, children: null };
        const obj5 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef9233, disableColor: true };
        obj4.children = __initData2(native.Icon, obj5);
        tmp4Result = __initData2(timestampProducer, obj4);
      }
      items[2] = tmp4Result;
      let tmp4Result3 = null != premiumSince;
      if (tmp4Result3) {
        const obj6 = { style: title.tag, children: null };
        const obj7 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef13305, disableColor: true };
        obj6.children = __initData2(native.Icon, obj7);
        tmp4Result3 = __initData2(timestampProducer, obj6);
      }
      items[3] = tmp4Result3;
      obj.children = items;
      return state(timestampProducer, obj);
    } else {
      const obj8 = { style: title.tag, verified: user.isVerifiedBot(), type: null };
      const tmp8 = BotTagDefault;
      const Types = BotTagDefault.Types;
      obj8.type = user.isSystemUser() ? Types.SYSTEM_DM : Types.BOT;
      __initData2(tmp8, obj8);
      const isSystemUserResult = user.isSystemUser();
    }
    const obj2 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: name };
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
    return __initData2(native.Avatar, obj);
  }, items5);
  const memo2 = obj.useMemo(() => {
    const userTag = UserUtilsDefault.getUserTag(user);
    if (null != userTag) {
      if (!user.isProvisional) {
        const obj2 = { variant: "text-sm/medium", color: "text-muted", children: userTag };
        let tmp6 = __initData2(Text_Text.Text, obj2);
      }
      return tmp6;
    }
    let tmp8 = null;
    if (null != type) {
      const obj3 = { user, guildId, type: tmp7, animate: !stateFromStores };
      tmp8 = __initData2(closure_16, obj3);
    }
    tmp6 = tmp8;
  }, items6);
  let obj6 = {
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
  obj6.trailing = trailing;
  obj6.accessibilityActions = accessibilityActions;
  obj6.onAccessibilityAction = onAccessibilityAction;
  return name(tmp3(premiumSince[21]).SearchListRow, obj6);
});
