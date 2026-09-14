// discord_app/modules/notification_center/native/ForYouItemImage.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import profile_customization_ProfileCustomizationUtils from "../../profile_customization/native/ProfileCustomizationUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const getGuildAcronym = fn(1975).getGuildAcronym;
const Constants = fn(16523);
({ FRIEND_BACKGROUND, MESSAGE_BACKGROUND, PROFILE_BACKGROUND } = Constants);
const jsx = fn(21).jsx;
let createStyles = fn(4636);
let closure_9 = createStyles.createStyles((arg0) => {
  let num = 48;
  if (arg0) {
    num = 32;
  }
  const size = {
    height: num,
    width: num,
    borderRadius: null,
    marginEnd: null,
    alignItems: "center",
    justifyContent: "center",
  };
  const result = num / 2;
  size.borderRadius = result;
  let num2 = 12;
  if (arg0) {
    num2 = 8;
  }
  const obj = {
    container: size,
    rowImage: { height: num, width: num, borderRadius: result },
    guildFallbackImage: null,
  };
  size.marginEnd = num2;
  const size1 = {
    height: "auto",
    maxHeight: result,
    width: "auto",
    color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  };
  obj.guildFallbackImage = size1;
  return obj;
});
createStyles = fn(4636);
let obj = {
  fallbackImage: { color: nativeDefault.colors.WHITE },
  fallbackImageV2: null,
  brandBackground: null,
  profileBackground: null,
  friendBackground: null,
  messageBackground: null,
  guildGridBackground: null,
};
let obj4 = { color: nativeDefault.colors.WHITE };
obj.fallbackImageV2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj5 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.brandBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.profileBackground = { backgroundColor: PROFILE_BACKGROUND };
obj.friendBackground = { backgroundColor: FRIEND_BACKGROUND };
obj.messageBackground = { backgroundColor: MESSAGE_BACKGROUND };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.guildGridBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = createStyles.createStyles(obj);
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouItemImage.tsx");

export const ForYouItemImage = noop.memo((item) => {
  item = item.item;
  const compactMode = item.compactMode;
  let analyticsLocations;
  let stateFromStores;
  const tmp = closure_9(compactMode);
  let obj = analyticsLocations;
  analyticsLocations = compactMode(analyticsLocations[20])().analyticsLocations;
  const tmp3 = closure_10();
  const other_user = item.other_user;
  let id;
  if (other_user != null) {
    id = other_user.id;
  }
  const items = [UserStore];
  stateFromStores = item(obj[21]).useStateFromStores(items, () => UserStore.getUser(id));
  const items1 = [stateFromStores, compactMode, , , ,];
  ({ acked: arr2[2], guild_id: arr2[3], message_id: arr2[4] } = item);
  items1[5] = analyticsLocations;
  const memo = id.useMemo(() => {
    let avatarDecoration = stateFromStores;
    if (null == stateFromStores) {
      return null;
    } else {
      const obj = {
        onPress() {
          compactMode(analyticsLocations[23])({
            userId: localUser.id,
            localUser,
            messageId: message_id.message_id,
            sourceAnalyticsLocations,
          });
        },
        children: null,
      };
      let obj2 = { source: null, size: null, avatarDecoration: null };
      const obj3 = profile_customization_ProfileCustomizationUtils;
      obj2.source = obj3.getAvatarSource(avatarDecoration, item.guild_id, undefined, item.acked);
      const AvatarSizes = native.AvatarSizes;
      obj2.size = compactMode ? AvatarSizes.REFRESH_MEDIUM_32 : AvatarSizes.LARGE_48;
      avatarDecoration = avatarDecoration.avatarDecoration;
      obj2.avatarDecoration = avatarDecoration;
      obj2 = jsx(native.Avatar, { source: null, size: null, avatarDecoration: null });
      obj.children = obj2;
      jsx(Pressables.PressableOpacity, {
        onPress() {
          compactMode(analyticsLocations[23])({
            userId: localUser.id,
            localUser,
            messageId: message_id.message_id,
            sourceAnalyticsLocations,
          });
        },
        children: null,
      });
    }
  }, items1);
  if (null != item.icon_name) {
    obj = { source: null, color: null };
    obj.source = tmp2("icHighlight" === item.icon_name ? obj[13] : obj[14]);
    obj.color = tmp3.fallbackImage.color;
    jsx(tmp5(obj[17]).Icon, { source: null, color: null });
    const brandBackground2 = tmp3.brandBackground;
    const tmp27 = "icHighlight" === item.icon_name ? obj[13] : obj[14];
  } else {
    if (null != item.icon_url) {
      let brandBackground1 = null;
      let tmp14 = memo;
      if (null == memo) {
        let obj3 = { style: tmp.rowImage, source: null, resizeMode: "contain" };
        const obj4 = { uri: item.icon_url };
        obj3.source = obj4;
        tmp14 = jsx(tmp2(obj[15]), { style: tmp.rowImage, source: null, resizeMode: "contain" });
        brandBackground1 = tmp3.brandBackground;
      }
    } else {
      brandBackground1 = null;
      tmp14 = memo;
      if (null == memo) {
        if ("lifecycle_item" === item.type) {
          const item_enum = item.item_enum;
          if (item_enum === tmp5(obj[9]).ItemEnum.UPDATE_PROFILE) {
            const obj5 = { source: tmp2(obj[16]) };
            let tmp18 = jsx(tmp2(obj[15]), { source: tmp2(obj[16]) });
            const tmp2Result = tmp2(obj[15]);
          } else {
            if (item_enum !== tmp5(obj[9]).ItemEnum.FIND_FRIENDS) {
              if (item_enum !== tmp5(obj[9]).ItemEnum.ADD_FRIEND) {
                if (item_enum === tmp5(obj[9]).ItemEnum.FIRST_MESSAGE) {
                  const obj6 = { source: tmp2(obj[19]), style: { width: "105%" } };
                  tmp18 = jsx(tmp2(obj[15]), { source: tmp2(obj[19]), style: { width: "105%" } });
                  const tmp2Result3 = tmp2(obj[15]);
                } else {
                  const obj7 = { source: tmp2(obj[14]) };
                  tmp18 = jsx(tmp5(obj[17]).Icon, { source: tmp2(obj[14]) });
                }
              }
            }
            const obj9 = {
              source: tmp2(obj[18]),
              size: tmp5(obj[17]).IconSizes.SMALL_20,
              color: tmp2(obj[8]).unsafe_rawColors.WHITE,
            };
            tmp18 = jsx(tmp5(obj[17]).Icon, {
              source: tmp2(obj[18]),
              size: tmp5(obj[17]).IconSizes.SMALL_20,
              color: tmp2(obj[8]).unsafe_rawColors.WHITE,
            });
          }
          const item_enum2 = item.item_enum;
          if (item_enum2 === tmp5(obj[9]).ItemEnum.UPDATE_PROFILE) {
            let profileBackground = tmp3.profileBackground;
          } else {
            if (item_enum2 !== tmp5(obj[9]).ItemEnum.FIND_FRIENDS) {
              if (item_enum2 !== tmp5(obj[9]).ItemEnum.ADD_FRIEND) {
                profileBackground =
                  item_enum2 === tmp5(obj[9]).ItemEnum.FIRST_MESSAGE ? tmp3.messageBackground : tmp3.brandBackground;
              }
            }
            profileBackground = tmp3.friendBackground;
          }
          if (profileBackground == null) {
            profileBackground = null;
          }
          brandBackground1 = profileBackground;
          tmp14 = tmp18;
        } else if (item.type === tmp5(obj[9]).NotificationCenterItems.REFERRAL_PROGRAM_ENTRYPOINT_REMINDER) {
          const obj10 = { source: tmp2(obj[25]), style: tmp.rowImage, resizeMode: "contain" };
          tmp14 = jsx(tmp2(obj[15]), { source: tmp2(obj[25]), style: tmp.rowImage, resizeMode: "contain" });
          brandBackground1 = tmp3.brandBackground;
          const tmp2Result4 = tmp2(obj[15]);
        } else {
          const guild = GuildStore.getGuild(item.guild_id);
          let tmp9 = null;
          if (null != guild) {
            tmp9 = getGuildAcronym(guild);
          }
          const type = item.type;
          if (tmp5(obj[9]).NotificationCenterItems.MISSED_MESSAGES === type) {
            const obj11 = { icon: tmp2(obj[10]), color: tmp3.fallbackImage.color };
            let obj14 = obj11;
          } else if (tmp5(obj[9]).NotificationCenterItems.FRIEND_REQUEST_REMINDER === type) {
            const obj12 = { icon: tmp2(obj[11]), color: tmp3.fallbackImage.color };
            obj14 = obj12;
          } else {
            if (tmp5(obj[9]).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED !== type) {
              if (tmp5(obj[9]).NotificationCenterItems.TOP_MESSAGES !== type) {
                if (tmp5(obj[9]).NotificationCenterItems.MISSED_MESSAGES !== type) {
                  if (tmp5(obj[9]).NotificationCenterItems.TOP_MESSAGES === type) {
                    const obj13 = { icon: tmp2(obj[13]), color: tmp3.fallbackImage.color };
                    obj14 = obj13;
                  } else {
                    obj14 = { icon: tmp2(obj[14]), color: tmp3.fallbackImage.color };
                  }
                }
              }
            }
            const obj15 = {
              icon: tmp2(obj[12]),
              color: tmp3.fallbackImageV2.color,
              backgroundStyle: tmp3.guildGridBackground,
            };
            obj14 = obj15;
          }
          if (obj14.icon === tmp2(obj[12])) {
            if (null != tmp9) {
              let str2 = "text-lg/normal";
              if (tmp9.length > 4) {
                str2 = "text-md/normal";
              }
              const obj16 = { variant: str2, style: null, children: null };
              const items2 = [,];
              ({ rowImage: arr3[0], guildFallbackImage: arr3[1] } = tmp);
              obj16.style = items2;
              obj16.children = tmp9;
              let tmp12Result = jsx(tmp5(obj[26]).Text, { variant: str2, style: null, children: null });
            }
            let brandBackground = obj14.backgroundStyle;
            if (brandBackground == null) {
              brandBackground = tmp3.brandBackground;
            }
            brandBackground1 = brandBackground;
            tmp14 = tmp12Result;
          }
          ({ icon: obj8.source, color: obj8.color } = obj14);
          tmp12Result = jsx(tmp5(obj[17]).Icon, { source: null, color: null });
          const obj17 = { source: null, color: null };
        }
      }
    }
    const obj32 = { style: null, children: null };
    const items3 = [tmp.container, brandBackground1];
    obj32.style = items3;
    obj32.children = tmp14;
    return <stateFromStores style={null}>{null}</stateFromStores>;
  }
  let obj2 = item(obj[21]);
});
