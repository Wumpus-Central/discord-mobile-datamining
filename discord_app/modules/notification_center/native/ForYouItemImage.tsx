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
const Constants = fn(16426);
({ FRIEND_BACKGROUND, MESSAGE_BACKGROUND, PROFILE_BACKGROUND } = Constants);
const jsx = fn(21).jsx;
let createStyles = fn(4560);
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
fn(4560);
let obj = {
  fallbackImage: null,
  fallbackImageV2: null,
  brandBackground: null,
  profileBackground: null,
  friendBackground: null,
  messageBackground: null,
  guildGridBackground: null,
};
obj = { color: nativeDefault.colors.WHITE };
obj.fallbackImage = obj;
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj.fallbackImageV2 = createStyles;
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj.brandBackground = createStyles;
obj.profileBackground = { backgroundColor: PROFILE_BACKGROUND };
obj.friendBackground = { backgroundColor: FRIEND_BACKGROUND };
obj.messageBackground = { backgroundColor: MESSAGE_BACKGROUND };
obj.guildGridBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = createStyles.createStyles(obj);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
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
  let obj1 = item(obj[21]);
  const items = [UserStore];
  stateFromStores = obj1.useStateFromStores(items, () => UserStore.getUser(id));
  const items1 = [stateFromStores, compactMode, , , ,];
  ({ acked: arr2[2], guild_id: arr2[3], message_id: arr2[4] } = item);
  items1[5] = analyticsLocations;
  const memo = id.useMemo(() => {
    let avatarDecoration = stateFromStores;
    if (null == stateFromStores) {
      return null;
    } else {
      let tmpResult = {
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
      tmpResult = { source: null, size: null, avatarDecoration: null };
      const obj3 = profile_customization_ProfileCustomizationUtils;
      tmpResult.source = obj3.getAvatarSource(avatarDecoration, item.guild_id, undefined, item.acked);
      const AvatarSizes = native.AvatarSizes;
      tmpResult.size = compactMode ? AvatarSizes.REFRESH_MEDIUM_32 : AvatarSizes.LARGE_48;
      avatarDecoration = avatarDecoration.avatarDecoration;
      tmpResult.avatarDecoration = avatarDecoration;
      tmpResult = tmp(native.Avatar, tmpResult);
      tmpResult.children = tmpResult;
      tmpResult = tmp(Pressables.PressableOpacity, tmpResult);
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
      let brandBackground = null;
      let tmp14 = memo;
      if (null == memo) {
        obj = { style: tmp.rowImage, source: null, resizeMode: "contain" };
        obj = { uri: item.icon_url };
        obj.source = obj;
        tmp14 = jsx(tmp2(obj[15]), { uri: item.icon_url });
        brandBackground = tmp3.brandBackground;
      }
    } else {
      brandBackground = null;
      tmp14 = memo;
      if (null == memo) {
        if ("lifecycle_item" === item.type) {
          const item_enum = item.item_enum;
          if (item_enum === tmp5(obj[9]).ItemEnum.UPDATE_PROFILE) {
            obj1 = { source: null };
            let tmp2Result = tmp2(obj[15]);
            obj1.source = tmp2(obj[16]);
            let tmp18 = <tmp2Result source={null} />;
          } else {
            if (item_enum !== tmp5(obj[9]).ItemEnum.FIND_FRIENDS) {
              if (item_enum !== tmp5(obj[9]).ItemEnum.ADD_FRIEND) {
                if (item_enum === tmp5(obj[9]).ItemEnum.FIRST_MESSAGE) {
                  const obj2 = { source: null, style: null };
                  tmp2Result = tmp2(obj[15]);
                  obj2.source = tmp2(obj[19]);
                  obj2.style = { width: "105%" };
                  tmp18 = <tmp2Result source={null} style={null} />;
                } else {
                  let obj3 = { source: tmp2(obj[14]) };
                  tmp18 = jsx(tmp5(obj[17]).Icon, { source: tmp2(obj[14]) });
                }
              }
            }
            const obj4 = {
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
          brandBackground = profileBackground;
          tmp14 = tmp18;
        } else if (item.type === tmp5(obj[9]).NotificationCenterItems.REFERRAL_PROGRAM_ENTRYPOINT_REMINDER) {
          const obj5 = { source: tmp2(obj[25]), style: tmp.rowImage, resizeMode: "contain" };
          tmp14 = jsx(tmp2(obj[15]), { source: tmp2(obj[25]), style: tmp.rowImage, resizeMode: "contain" });
          brandBackground = tmp3.brandBackground;
          const tmp2Result1 = tmp2(obj[15]);
        } else {
          const guild = GuildStore.getGuild(item.guild_id);
          let tmp9 = null;
          if (null != guild) {
            tmp9 = getGuildAcronym(guild);
          }
          const type = item.type;
          if (tmp5(obj[9]).NotificationCenterItems.MISSED_MESSAGES === type) {
            const obj6 = { icon: tmp2(obj[10]), color: tmp3.fallbackImage.color };
            let obj9 = obj6;
          } else if (tmp5(obj[9]).NotificationCenterItems.FRIEND_REQUEST_REMINDER === type) {
            const obj7 = { icon: tmp2(obj[11]), color: tmp3.fallbackImage.color };
            obj9 = obj7;
          } else {
            if (tmp5(obj[9]).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED !== type) {
              if (tmp5(obj[9]).NotificationCenterItems.TOP_MESSAGES !== type) {
                if (tmp5(obj[9]).NotificationCenterItems.MISSED_MESSAGES !== type) {
                  if (tmp5(obj[9]).NotificationCenterItems.TOP_MESSAGES === type) {
                    const obj8 = { icon: tmp2(obj[13]), color: tmp3.fallbackImage.color };
                    obj9 = obj8;
                  } else {
                    obj9 = { icon: tmp2(obj[14]), color: tmp3.fallbackImage.color };
                  }
                }
              }
            }
            const obj10 = {
              icon: tmp2(obj[12]),
              color: tmp3.fallbackImageV2.color,
              backgroundStyle: tmp3.guildGridBackground,
            };
            obj9 = obj10;
          }
          if (obj9.icon === tmp2(obj[12])) {
            if (null != tmp9) {
              let str2 = "text-lg/normal";
              if (tmp9.length > 4) {
                str2 = "text-md/normal";
              }
              const obj11 = { variant: str2, style: null, children: null };
              const items2 = [,];
              ({ rowImage: arr3[0], guildFallbackImage: arr3[1] } = tmp);
              obj11.style = items2;
              obj11.children = tmp9;
              let tmp12Result = jsx(tmp5(obj[26]).Text, { variant: str2, style: null, children: null });
            }
            brandBackground = obj9.backgroundStyle;
            if (brandBackground == null) {
              brandBackground = tmp3.brandBackground;
            }
            tmp14 = tmp12Result;
          }
          ({ icon: obj8.source, color: obj8.color } = obj9);
          tmp12Result = jsx(tmp5(obj[17]).Icon, { source: null, color: null });
          const obj12 = { source: null, color: null };
        }
      }
    }
    const obj13 = { style: null, children: null };
    const items3 = [tmp.container, brandBackground];
    obj13.style = items3;
    obj13.children = tmp14;
    return <stateFromStores style={null}>{null}</stateFromStores>;
  }
});
