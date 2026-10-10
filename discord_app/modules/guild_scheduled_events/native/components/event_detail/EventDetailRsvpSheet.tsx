// discord_app/modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import BottomSheetModal from "../../../../../../_runtime/06306_BottomSheetModal.js";
import showUserProfileActionSheetDefault from "../../../../user_profile/native/showUserProfileActionSheet.tsx";
import Form from "../../../../../design/void/Form/native/index.tsx";
import StageSparkleDefault from "../../../../stage_channels/native/components/StageSparkle.tsx";
import _modDef8782 from "../../../../../../_runtime/metro/08782__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import PresenceStore from "../../../../../stores/PresenceStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";

require = fn;
function keyExtractor(count) {
  if (obj.isRemainingUsersGroup(count)) {
    const _HermesInternal = HermesInternal;
    let user_id = "RemainingUsersGroup-" + count.count;
  } else {
    user_id = count.user_id;
  }
  return user_id;
}
const View = fn(17).View;
const Fonts = fn(1096).Fonts;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj = {
  staticMessageContentContainer: { flex: 1, padding: 16 },
  userList: { paddingTop: 16 },
  userListRow: { paddingVertical: 8 },
  userName: { color: nativeDefault.colors.TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_SEMIBOLD, fontSize: 16 },
  emptyDisplayContainer: { alignItems: "center", justifyContent: "center", minHeight: 200 },
  staticMessageContent: { height: "100%" },
  emptyDisplayTitle: null,
  remainingUsersIcon: null,
  remainingUsersIconContainer: null,
};
let obj4 = { paddingTop: 24 };
const merged = Object.assign(
  TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 20, { marginBottom: 8 }),
);
obj4.textAlign = "center";
obj.emptyDisplayTitle = obj4;
let size = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, height: 18, width: 18 };
obj.remainingUsersIcon = size;
const size1 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: 16,
  height: 32,
  width: 32,
  alignItems: "center",
  justifyContent: "center",
};
obj.remainingUsersIconContainer = size1;
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EmptyDisplay(arg0) {
      const cResult = c.c(7);
      ({ children, style } = arg0);
      const tmp3 = closure_9();
      if (cResult[0] === style) {
        if (cResult[1] === tmp3.emptyDisplayContainer) {
          let tmp4 = cResult[2];
        }
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { icon: _modDef8782 };
          const tmp10 = React5(StageSparkleDefault, obj2);
          cResult[3] = tmp10;
          let tmp6 = tmp10;
        } else {
          tmp6 = cResult[3];
        }
        if (cResult[4] === children) {
          if (cResult[5] === tmp4) {
            let tmp11 = cResult[6];
          }
          return tmp11;
        }
        const obj3 = { style: tmp4, children: null };
        const items = [tmp6, children];
        obj3.children = items;
        const tmp14 = closure_1_8(View, obj3);
        cResult[4] = children;
        cResult[5] = tmp4;
        cResult[6] = tmp14;
        tmp11 = tmp14;
      }
      const items1 = [tmp3.emptyDisplayContainer, style];
      cResult[0] = style;
      cResult[1] = tmp3.emptyDisplayContainer;
      cResult[2] = items1;
      tmp4 = items1;
    }
  : function EmptyDisplay(arg0) {
      ({ children, style } = arg0);
      const obj = { style: null, children: null };
      const items = [closure_9().emptyDisplayContainer, style];
      obj.style = items;
      const obj2 = { icon: _modDef8782 };
      const items1 = [React5(StageSparkleDefault, obj2), children];
      obj.children = items1;
      return closure_1_8(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function FetchErrorDisplay(style) {
      const cResult = c.c(6);
      style = style.style;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.obChXk);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.emptyDisplayTitle) {
        const obj2 = {
          style: tmp4.emptyDisplayTitle,
          variant: "heading-lg/extrabold",
          color: "mobile-text-heading-primary",
          children: first,
        };
        const tmp9 = React5(Text_Text.Text, obj2);
        cResult[1] = tmp4.emptyDisplayTitle;
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === style) {
        if (cResult[4] === tmp7) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = React5(closure_10, { style, children: tmp7 });
      cResult[3] = style;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : function FetchErrorDisplay(style) {
      const obj = { style: style.style, children: null };
      const obj2 = {
        style: closure_9().emptyDisplayTitle,
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = util.intl;
      obj2.children = intl.string(util.t.obChXk);
      obj.children = React5(Text_Text.Text, obj2);
      return React5(closure_10, obj);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NoUsersDisplay(style) {
      const cResult = c.c(6);
      style = style.style;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.hW0mBR);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.emptyDisplayTitle) {
        const obj2 = {
          style: tmp4.emptyDisplayTitle,
          variant: "heading-lg/extrabold",
          color: "mobile-text-heading-primary",
          children: first,
        };
        const tmp9 = React5(Text_Text.Text, obj2);
        cResult[1] = tmp4.emptyDisplayTitle;
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === style) {
        if (cResult[4] === tmp7) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = React5(closure_10, { style, children: tmp7 });
      cResult[3] = style;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : function NoUsersDisplay(style) {
      const obj = { style: style.style, children: null };
      const obj2 = {
        style: closure_9().emptyDisplayTitle,
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = util.intl;
      obj2.children = intl.string(util.t.hW0mBR);
      obj.children = React5(Text_Text.Text, obj2);
      return React5(closure_10, obj);
    };
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function RemainingUsersRow(remainingUsersGroup) {
      const cResult = c.c(11);
      remainingUsersGroup = remainingUsersGroup.remainingUsersGroup;
      const tmp4 = closure_9();
      if (cResult[0] !== tmp4.remainingUsersIcon) {
        const obj2 = { source: _modDef8782, style: tmp4.remainingUsersIcon };
        const tmp9 = React5(FastImageDefault, obj2);
        cResult[0] = tmp4.remainingUsersIcon;
        cResult[1] = tmp9;
        let tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.remainingUsersIconContainer) {
        if (cResult[3] === tmp5) {
          let tmp10 = cResult[4];
        }
        if (cResult[5] !== remainingUsersGroup.count) {
          const intl = util.intl;
          const obj3 = { userRemainCount: remainingUsersGroup.count };
          const formatToPlainStringResult = intl.formatToPlainString(util.t.BdQTfR, obj3);
          cResult[5] = remainingUsersGroup.count;
          cResult[6] = formatToPlainStringResult;
          let tmp12 = formatToPlainStringResult;
        } else {
          tmp12 = cResult[6];
        }
        if (cResult[7] === tmp4.userListRow) {
          if (cResult[8] === tmp10) {
            if (cResult[9] === tmp12) {
              let tmp14 = cResult[10];
            }
            return tmp14;
          }
        }
        const obj4 = { DEPRECATED_style: tmp4.userListRow, leading: tmp10, label: tmp12 };
        const tmp16 = React5(Form.FormRow, obj4, "userRemaining");
        cResult[7] = tmp4.userListRow;
        cResult[8] = tmp10;
        cResult[9] = tmp12;
        cResult[10] = tmp16;
        tmp14 = tmp16;
      }
      const tmp11 = React5(View, { style: tmp4.remainingUsersIconContainer, children: tmp5 });
      cResult[2] = tmp4.remainingUsersIconContainer;
      cResult[3] = tmp5;
      cResult[4] = tmp11;
      tmp10 = tmp11;
      const obj5 = { style: tmp4.remainingUsersIconContainer, children: tmp5 };
    }
  : function RemainingUsersRow(remainingUsersGroup) {
      const tmp = closure_9();
      const obj = { DEPRECATED_style: tmp.userListRow, leading: null, label: null };
      const obj2 = { style: tmp.remainingUsersIconContainer, children: null };
      const obj3 = { source: _modDef8782, style: tmp.remainingUsersIcon };
      obj2.children = React5(FastImageDefault, obj3);
      obj.leading = React5(View, obj2);
      const intl = util.intl;
      obj.label = intl.formatToPlainString(util.t.BdQTfR, {
        userRemainCount: remainingUsersGroup.remainingUsersGroup.count,
      });
      return React5(Form.FormRow, obj, "userRemaining");
    };
ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function UserRow(eventUser) {
        const cResult = eventUser(576).c(29);
        eventUser = eventUser.eventUser;
        const guildId = eventUser.guildId;
        closure_9();
        analyticsLocations = analyticsLocations(6851)().analyticsLocations;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== eventUser.user_id) {
          const fn = function l() {
            return UserStore.getUser(eventUser.user_id);
          };
          cResult[1] = eventUser.user_id;
          cResult[2] = fn;
          let tmp7 = fn;
        } else {
          tmp7 = cResult[2];
        }
        const obj = eventUser(576);
        const stateFromStores = eventUser(504).useStateFromStores(first, tmp7);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [PresenceStore];
          cResult[3] = items1;
          let tmp9 = items1;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] !== eventUser.user_id) {
          class E {
            constructor() {
              obj = {
                isMobileOnline: closure_5.isMobileOnline(eventUser.user_id),
                isVROnline: closure_5.isVROnline(eventUser.user_id),
                status: closure_5.getStatus(eventUser.user_id),
              };
              return obj;
            }
          }
          const items2 = [eventUser.user_id];
          cResult[4] = eventUser.user_id;
          cResult[5] = E;
          cResult[6] = items2;
          let tmp12 = items2;
        } else {
          class E {
            constructor() {
              obj = {
                isMobileOnline: closure_5.isMobileOnline(eventUser.user_id),
                isVROnline: closure_5.isVROnline(eventUser.user_id),
                status: closure_5.getStatus(eventUser.user_id),
              };
              return obj;
            }
          }
          tmp12 = cResult[6];
        }
        const tmpResult = eventUser(504);
        const stateFromStoresObject = eventUser(504).useStateFromStoresObject(tmp9, E, tmp12);
        ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
        if (cResult[7] === guildId) {
          class E {
            constructor() {
              obj = {
                isMobileOnline: closure_5.isMobileOnline(eventUser.user_id),
                isVROnline: closure_5.isVROnline(eventUser.user_id),
                status: closure_5.getStatus(eventUser.user_id),
              };
              return obj;
            }
          }
        }
        let tmp14 = null;
        if (null != stateFromStores) {
          class E {
            constructor() {
              obj = {
                isMobileOnline: closure_5.isMobileOnline(eventUser.user_id),
                isVROnline: closure_5.isVROnline(eventUser.user_id),
                status: closure_5.getStatus(eventUser.user_id),
              };
              return obj;
            }
          }
          const obj2 = {
            user: stateFromStores,
            guildId,
            isMobileOnline,
            isVROnline,
            status,
            size: tmp(1200).AvatarSizes.REFRESH_MEDIUM_32,
            autoStatusCutout: true,
          };
          tmp14 = closure_7(tmp(1200).Avatar, obj2);
        }
        cResult[7] = guildId;
        cResult[8] = isMobileOnline;
        cResult[9] = isVROnline;
        cResult[10] = status;
        cResult[11] = stateFromStores;
        cResult[12] = tmp14;
        const tmpResult2 = eventUser(504);
      }
    : function UserRow(eventUser) {
        eventUser = eventUser.eventUser;
        let analyticsLocations;
        const tmp = closure_9();
        analyticsLocations = analyticsLocations(6851)().analyticsLocations;
        const items = [UserStore];
        const stateFromStores = eventUser(504).useStateFromStores(items, () => UserStore.getUser(eventUser.user_id));
        const obj = eventUser(504);
        const items1 = [PresenceStore];
        const items2 = [eventUser.user_id];
        const stateFromStoresObject = eventUser(504).useStateFromStoresObject(
          items1,
          () => ({
            isMobileOnline: PresenceStore.isMobileOnline(eventUser.user_id),
            isVROnline: PresenceStore.isVROnline(eventUser.user_id),
            status: PresenceStore.getStatus(eventUser.user_id),
          }),
          items2,
        );
        ({ isMobileOnline, isVROnline, status } = stateFromStoresObject);
        const obj3 = { DEPRECATED_style: tmp.userListRow, leading: null, label: null, onPress: null };
        let tmp7Result = null;
        if (null != stateFromStores) {
          const obj4 = {
            user: stateFromStores,
            guildId: eventUser.guildId,
            isMobileOnline,
            isVROnline,
            status,
            size: tmp4(1200).AvatarSizes.REFRESH_MEDIUM_32,
            autoStatusCutout: true,
          };
          tmp7Result = closure_7(tmp4(1200).Avatar, obj4);
        }
        obj3.leading = tmp7Result;
        const obj6 = { user: stateFromStores, nick: null, usernameStyle: null, nicknameStyle: null };
        const member = eventUser.member;
        let nick;
        const obj2 = eventUser(504);
        if (member != null) {
          nick = member.nick;
        }
        if (nick == null) {
          nick = tmp2(4962).getName(eventUser.user);
          const tmp2Result2 = tmp2(4962);
        }
        obj6.nick = nick;
        ({ userName: obj5.usernameStyle, userName: obj5.nicknameStyle } = tmp);
        obj3.label = closure_7(analyticsLocations(8765), obj6);
        obj3.onPress = function onPress() {
          showUserProfileActionSheetDefault({
            userId: eventUser.user_id,
            sourceAnalyticsLocations: analyticsLocations,
          });
        };
        return closure_7(eventUser(8579).FormRow, obj3, eventUser.user_id);
      },
);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/event_detail/EventDetailRsvpSheet.tsx",
);

export default function EventDetailRsvpSheet(arg0) {
  ({ userListItems, guildId } = arg0);
  ({ contentHeight: importDefault, safeBottomPadding } = arg0);
  class StaticMessageContainer {
    constructor(arg0) {
      tmp = closure_9();
      obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
      obj1 = { style: null, children: arg0.children };
      items = [,];
      items[0] = tmp.staticMessageContentContainer;
      obj4 = { minHeight: contentHeight };
      items[1] = obj4;
      obj1.style = items;
      obj.children = jsx(View, obj1);
      return jsx(closure_0(closure_2[24]).BottomSheetScrollView, obj);
    }
  }
  ({ loading, error } = arg0);
  let tmp = closure_9();
  let items = [guildId];
  const callback = noop.useCallback((item) => {
    item = item.item;
    if (obj.isRemainingUsersGroup(item)) {
      const obj2 = { remainingUsersGroup: item };
      let tmpResult = React5(closure_13, obj2);
    } else {
      const obj3 = { eventUser: item, guildId };
      tmpResult = React5(memoResult, obj3);
    }
    return tmpResult;
  }, items);
  if (loading) {
    if (0 === userListItems.length) {
      let obj2 = { children: null };
      let obj3 = { style: null };
      const items1 = [,];
      class StaticMessageContainer {
        constructor(arg0) {
          tmp = closure_9();
          obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
          obj1 = { style: null, children: arg0.children };
          items = [,];
          items[0] = tmp.staticMessageContentContainer;
          obj4 = { minHeight: contentHeight };
          items[1] = obj4;
          obj1.style = items;
          obj.children = jsx(View, obj1);
          return jsx(closure_0(closure_2[24]).BottomSheetScrollView, obj);
        }
      }
      items1[1] = { paddingBottom: safeBottomPadding };
      obj3.style = items1;
      obj2.children = closure_7(guildId(6153).ActivityIndicator, obj3);
      let tmp8 = closure_7(StaticMessageContainer, obj2);
    }
    return tmp8;
  }
  if (null != error) {
    const obj4 = { children: null };
    const obj5 = { style: null };
    const items2 = [tmp.staticMessageContent];
    class StaticMessageContainer {
      constructor(arg0) {
        tmp = closure_9();
        obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
        obj1 = { style: null, children: arg0.children };
        items = [,];
        items[0] = tmp.staticMessageContentContainer;
        obj4 = { minHeight: contentHeight };
        items[1] = obj4;
        obj1.style = items;
        obj.children = jsx(View, obj1);
        return jsx(closure_0(closure_2[24]).BottomSheetScrollView, obj);
      }
    }
    obj5.style = items2;
    obj4.children = closure_7(closure_11, obj5);
    tmp8 = closure_7(StaticMessageContainer, obj4);
  } else if (0 === userListItems.length) {
    const obj6 = { children: null };
    const obj7 = { style: null };
    const items3 = [tmp.staticMessageContent];
    class StaticMessageContainer {
      constructor(arg0) {
        tmp = closure_9();
        obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
        obj1 = { style: null, children: arg0.children };
        items = [,];
        items[0] = tmp.staticMessageContentContainer;
        obj4 = { minHeight: contentHeight };
        items[1] = obj4;
        obj1.style = items;
        obj.children = jsx(View, obj1);
        return jsx(closure_0(closure_2[24]).BottomSheetScrollView, obj);
      }
    }
    obj7.style = items3;
    obj6.children = closure_7(closure_12, obj7);
    tmp8 = closure_7(StaticMessageContainer, obj6);
  } else {
    let obj = {
      contentContainerStyle: null,
      data: null,
      renderItem: null,
      ItemSeparatorComponent: null,
      keyExtractor: null,
    };
    const items4 = [tmp.userList];
    class StaticMessageContainer {
      constructor(arg0) {
        tmp = closure_9();
        obj = { style: tmp.staticMessageContentContainer, scrollEnabled: false, children: null };
        obj1 = { style: null, children: arg0.children };
        items = [,];
        items[0] = tmp.staticMessageContentContainer;
        obj4 = { minHeight: contentHeight };
        items[1] = obj4;
        obj1.style = items;
        obj.children = jsx(View, obj1);
        return jsx(closure_0(closure_2[24]).BottomSheetScrollView, obj);
      }
    }
    tmp6[0] = safeBottomPadding;
    items4[1] = tmp6;
    obj.contentContainerStyle = items4;
    obj.data = userListItems;
    obj.renderItem = callback;
    obj.ItemSeparatorComponent = guildId(8579).FormDivider;
    obj.keyExtractor = keyExtractor;
    tmp8 = closure_7(guildId(6306).BottomSheetFlatList, obj);
  }
}
export const UserRow = memoResult;
