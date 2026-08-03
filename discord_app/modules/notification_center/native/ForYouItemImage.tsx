import importAllResult from "registerAsset";
import { View } from "Button";
import { getGuildAcronym } from "GuildNSFWContentLevel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import PROFILE_BACKGROUND from "PROFILE_BACKGROUND";
import { jsx } from "initialize";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let FRIEND_BACKGROUND;
let MESSAGE_BACKGROUND;
let PROFILE_BACKGROUND;
const require = arg1;
let c3 = importAllResult;
({ FRIEND_BACKGROUND, MESSAGE_BACKGROUND, PROFILE_BACKGROUND } = PROFILE_BACKGROUND);
let closure_9 = createCacheKey.createStyles((arg0) => {
  let num = 48;
  if (arg0) {
    num = 32;
  }
  let obj = { height: num, width: num, borderRadius: result, marginEnd: null, alignItems: "center", justifyContent: "center" };
  result = num / 2;
  let num2 = 12;
  if (arg0) {
    num2 = 8;
  }
  obj = { container: obj, rowImage: { height: num, width: num, borderRadius: result }, guildFallbackImage: null };
  obj[3] = num2;
  obj = { height: "auto", maxHeight: result, width: "auto", color: importDefault(712).colors.INTERACTIVE_TEXT_DEFAULT };
  obj[2] = obj;
  return obj;
});
let obj = { fallbackImage: null, fallbackImageV2: null, brandBackground: null, profileBackground: null, friendBackground: null, messageBackground: null, guildGridBackground: null };
obj = { color: require("Themes").colors.WHITE };
obj[0] = obj;
createCacheKey = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
obj[1] = createCacheKey;
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
obj[2] = createCacheKey;
obj[3] = { backgroundColor: PROFILE_BACKGROUND };
obj[4] = { backgroundColor: FRIEND_BACKGROUND };
obj[5] = { backgroundColor: MESSAGE_BACKGROUND };
obj[6] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = createCacheKey.createStyles(obj);
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
const memoResult = importAllResult.memo((item) => {
  item = item.item;
  const compactMode = item.compactMode;
  let analyticsLocations;
  let id;
  let stateFromStores;
  const tmp = callback(compactMode);
  let obj = analyticsLocations;
  analyticsLocations = compactMode(analyticsLocations[20])().analyticsLocations;
  const tmp3 = callback2();
  const other_user = item.other_user;
  id = undefined;
  if (other_user != null) {
    id = other_user.id;
  }
  let obj1 = item(obj[21]);
  const items = [mergeGuildAvatar];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_7.getUser(id));
  const items1 = [stateFromStores, compactMode, , , , ];
  ({ acked: arr2[2], guild_id: arr2[3], message_id: arr2[4] } = item);
  items1[5] = analyticsLocations;
  const memo = id.useMemo(() => {
    let avatarDecoration = stateFromStores;
    if (null == stateFromStores) {
      return null;
    } else {
      let tmpResult = { onPress: null, children: null };
      tmpResult[0] = function onPress() {
        outer1_1(outer1_2[23])({ userId: id.id, localUser: id, messageId: message_id.message_id, sourceAnalyticsLocations: closure_2 });
      };
      tmpResult = { source: null, size: null, avatarDecoration: null };
      const obj3 = item(analyticsLocations[24]);
      tmpResult[0] = obj3.getAvatarSource(avatarDecoration, item.guild_id, undefined, item.acked);
      const AvatarSizes = item(analyticsLocations[17]).AvatarSizes;
      tmpResult[1] = compactMode ? AvatarSizes.REFRESH_MEDIUM_32 : AvatarSizes.LARGE_48;
      avatarDecoration = avatarDecoration.avatarDecoration;
      tmpResult[2] = avatarDecoration;
      tmpResult = tmp(item(analyticsLocations[17]).Avatar, tmpResult);
      tmpResult[1] = tmpResult;
      tmpResult = tmp(item(analyticsLocations[22]).PressableOpacity, tmpResult);
    }
  }, items1);
  if (null != item.icon_name) {
    obj = { source: null, color: null };
    obj[0] = tmp2("icHighlight" === item.icon_name ? obj[13] : obj[14]);
    obj[1] = tmp3.fallbackImage.color;
    jsx(tmp5(obj[17]).Icon, { source: null, color: null });
    const brandBackground2 = tmp3.brandBackground;
    const tmp26 = jsx;
    const tmp27 = "icHighlight" === item.icon_name ? obj[13] : obj[14];
  } else {
    if (null != item.icon_url) {
      let brandBackground = null;
      let tmp14 = memo;
      if (null == memo) {
        obj = { style: null, source: null, resizeMode: "contain" };
        obj[0] = tmp.rowImage;
        obj = { uri: null };
        obj[0] = item.icon_url;
        obj[1] = obj;
        tmp14 = jsx(tmp2(obj[15]), { uri: null });
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
            obj1[0] = tmp2(obj[16]);
            let tmp18 = <tmp2Result source={null} />;
          } else {
            if (item_enum !== tmp5(obj[9]).ItemEnum.FIND_FRIENDS) {
              if (item_enum !== tmp5(obj[9]).ItemEnum.ADD_FRIEND) {
                if (item_enum === tmp5(obj[9]).ItemEnum.FIRST_MESSAGE) {
                  const obj2 = { source: null, style: null };
                  tmp2Result = tmp2(obj[15]);
                  obj2[0] = tmp2(obj[19]);
                  obj2[1] = { width: "105%" };
                  tmp18 = <tmp2Result source={null} style={null} />;
                } else {
                  let obj3 = { source: null };
                  obj3[0] = tmp2(obj[14]);
                  tmp18 = jsx(tmp5(obj[17]).Icon, { source: null });
                }
              }
            }
            const obj4 = { source: null, size: null, color: null };
            obj4[0] = tmp2(obj[18]);
            obj4[1] = tmp5(obj[17]).IconSizes.SMALL_20;
            obj4[2] = tmp2(obj[8]).unsafe_rawColors.WHITE;
            tmp18 = jsx(tmp5(obj[17]).Icon, { source: null, size: null, color: null });
          }
          const item_enum2 = item.item_enum;
          if (item_enum2 === tmp5(obj[9]).ItemEnum.UPDATE_PROFILE) {
            let profileBackground = tmp3.profileBackground;
          } else {
            if (item_enum2 !== tmp5(obj[9]).ItemEnum.FIND_FRIENDS) {
              if (item_enum2 !== tmp5(obj[9]).ItemEnum.ADD_FRIEND) {
                profileBackground = item_enum2 === tmp5(obj[9]).ItemEnum.FIRST_MESSAGE ? tmp3.messageBackground : tmp3.brandBackground;
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
          const obj5 = { source: null, style: null, resizeMode: "contain" };
          obj5[0] = tmp2(obj[25]);
          obj5[1] = tmp.rowImage;
          tmp14 = jsx(tmp2(obj[15]), { source: null, style: null, resizeMode: "contain" });
          brandBackground = tmp3.brandBackground;
          const tmp2Result1 = tmp2(obj[15]);
        } else {
          guild = guild.getGuild(item.guild_id);
          let tmp9 = null;
          if (null != guild) {
            tmp9 = getGuildAcronym(guild);
          }
          const type = item.type;
          if (tmp5(obj[9]).NotificationCenterItems.MISSED_MESSAGES === type) {
            const obj6 = { icon: null, color: null };
            obj6[0] = tmp2(obj[10]);
            obj6[1] = tmp3.fallbackImage.color;
            let obj9 = obj6;
          } else if (tmp5(obj[9]).NotificationCenterItems.FRIEND_REQUEST_REMINDER === type) {
            const obj7 = { icon: null, color: null };
            obj7[0] = tmp2(obj[11]);
            obj7[1] = tmp3.fallbackImage.color;
            obj9 = obj7;
          } else {
            if (tmp5(obj[9]).NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED !== type) {
              if (tmp5(obj[9]).NotificationCenterItems.TOP_MESSAGES !== type) {
                if (tmp5(obj[9]).NotificationCenterItems.MISSED_MESSAGES !== type) {
                  if (tmp5(obj[9]).NotificationCenterItems.TOP_MESSAGES === type) {
                    const obj8 = { icon: null, color: null };
                    obj8[0] = tmp2(obj[13]);
                    obj8[1] = tmp3.fallbackImage.color;
                    obj9 = obj8;
                  } else {
                    obj9 = { icon: null, color: null };
                    obj9[0] = tmp2(obj[14]);
                    obj9[1] = tmp3.fallbackImage.color;
                  }
                }
              }
            }
            const obj10 = { icon: null, color: null, backgroundStyle: null };
            obj10[0] = tmp2(obj[12]);
            obj10[1] = tmp3.fallbackImageV2.color;
            obj10[2] = tmp3.guildGridBackground;
            obj9 = obj10;
          }
          if (obj9.icon === tmp2(obj[12])) {
            if (null != tmp9) {
              let str2 = "text-lg/normal";
              if (tmp9.length > 4) {
                str2 = "text-md/normal";
              }
              const obj11 = { variant: null, style: null, children: null };
              obj11[0] = str2;
              const items2 = [, ];
              ({ rowImage: arr3[0], guildFallbackImage: arr3[1] } = tmp);
              obj11[1] = items2;
              obj11[2] = tmp9;
              let tmp12Result = jsx(tmp5(obj[26]).Text, { variant: null, style: null, children: null });
              const tmp12 = jsx;
            }
            brandBackground = obj9.backgroundStyle;
            if (brandBackground == null) {
              brandBackground = tmp3.brandBackground;
            }
            tmp14 = tmp12Result;
          }
          ({ icon: obj8[0], color: obj8[1] } = obj9);
          tmp12Result = jsx(tmp5(obj[17]).Icon, { source: null, color: null });
          const obj12 = { source: null, color: null };
        }
      }
    }
    const obj13 = { style: null, children: null };
    const items3 = [tmp.container, brandBackground];
    obj13[0] = items3;
    obj13[1] = tmp14;
    return <stateFromStores style={null}>{null}</stateFromStores>;
  }
});
let result = require("GuildNSFWContentLevel").fileFinishedImporting("modules/notification_center/native/ForYouItemImage.tsx");

export const ForYouItemImage = memoResult;