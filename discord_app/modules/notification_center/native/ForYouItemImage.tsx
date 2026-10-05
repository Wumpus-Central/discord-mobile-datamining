// === Module 16365: ForYouItemImage ===

// Module 16365 (ForYouItemImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import Pressables from "Pressables" /* 5909 */;
import FastImageDefault from "FastImage" /* 5974 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7125 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import profile_customization_ProfileCustomizationUtils from "profile_customization/ProfileCustomizationUtils" /* 7919 */;
import AssetRegistryDefault from "AssetRegistry" /* 9542 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 16367 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 16368 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 16369 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 16370 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 16371 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 16372 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 16373 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 16366 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let item;

let FRIEND_BACKGROUND;
let MESSAGE_BACKGROUND;
let PROFILE_BACKGROUND;
let obj2;
let obj3;
let obj4;
let obj5;
function getFallbackIcon(type, fallbackImage) {
  if (NotificationCenterItemsTypes.NotificationCenterItems.MISSED_MESSAGES === type) {
    const obj2 = { icon: AssetRegistryDefault, color: fallbackImage.fallbackImage.color };
    return obj2;
  } else if (NotificationCenterItemsTypes.NotificationCenterItems.FRIEND_REQUEST_REMINDER === type) {
    const obj3 = { icon: AssetRegistryDefault2, color: fallbackImage.fallbackImage.color };
    return obj3;
  } else {
    if (NotificationCenterItemsTypes.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED !== type) {
      if (NotificationCenterItemsTypes.NotificationCenterItems.TOP_MESSAGES !== type) {
        if (NotificationCenterItemsTypes.NotificationCenterItems.MISSED_MESSAGES !== type) {
          if (NotificationCenterItemsTypes.NotificationCenterItems.TOP_MESSAGES === type) {
            const obj4 = { icon: AssetRegistryDefault4, color: fallbackImage.fallbackImage.color };
            return obj4;
          } else {
            const obj = { icon: AssetRegistryDefault5, color: fallbackImage.fallbackImage.color };
            return obj;
          }
        }
      }
    }
    const obj5 = { icon: AssetRegistryDefault3, color: fallbackImage.fallbackImageV2.color, backgroundStyle: fallbackImage.guildGridBackground };
    return obj5;
  }
}
function getLifecycleIcon(item_enum) {
  let tmp5;
  if (item_enum === NotificationCenterItemsTypes.ItemEnum.UPDATE_PROFILE) {
    FastImageDefault;
    tmp5 = <tmp13 source={AssetRegistryDefault6} />;
  } else {
    if (item_enum !== NotificationCenterItemsTypes.ItemEnum.FIND_FRIENDS) {
      if (item_enum !== NotificationCenterItemsTypes.ItemEnum.ADD_FRIEND) {
        if (item_enum === NotificationCenterItemsTypes.ItemEnum.FIRST_MESSAGE) {
          FastImageDefault;
          tmp5 = <tmp8 source={AssetRegistryDefault8} style={{ width: "105%" }} />;
        } else {
          const Icon = native.Icon;
          tmp5 = <Icon source={AssetRegistryDefault5} />;
        }
      }
    }
    const Icon2 = native.Icon;
    tmp5 = <Icon2 source={AssetRegistryDefault7} size={native.IconSizes.SMALL_20} color={nativeDefault.unsafe_rawColors.WHITE} />;
  }
  return tmp5;
}
const View = react_native.View;
const getGuildAcronym = GuildRecord.getGuildAcronym;
({ FRIEND_BACKGROUND, MESSAGE_BACKGROUND, PROFILE_BACKGROUND } = Constants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((arg0) => {
  let num2;
  let result;
  let size1;
  let num = 48;
  if (arg0) {
    num = 32;
  }
  size = { height: num, width: num, borderRadius: result, marginEnd: num2, alignItems: "center", justifyContent: "center" };
  result = num / 2;
  num2 = 12;
  if (arg0) {
    num2 = 8;
  }
  const obj = { container: size, rowImage: { height: num, width: num, borderRadius: result }, guildFallbackImage: size1 };
  size1 = { height: "auto", maxHeight: result, width: "auto", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  return obj;
});
createStyles = createStyles_mod;
let obj = { fallbackImage: obj2, fallbackImageV2: obj3, brandBackground: obj4, profileBackground: { backgroundColor: PROFILE_BACKGROUND }, friendBackground: { backgroundColor: FRIEND_BACKGROUND }, messageBackground: { backgroundColor: MESSAGE_BACKGROUND }, guildGridBackground: obj5 };
obj2 = { color: nativeDefault.colors.WHITE };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = createStyles(obj);
let memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((item) => {
  let analyticsLocations;
  let first;
  let id;
  let tmp10;
  let tmp18;
  let obj = item(id[21]);
  const cResult = obj.c(56);
  item = item.item;
  const tmp4 = closure_9(item.compactMode);
  const tmp5 = analyticsLocations;
  analyticsLocations = analyticsLocations(id[22])().analyticsLocations;
  const tmp6 = closure_10();
  const other_user = item.other_user;
  id = undefined;
  if (other_user != null) {
    id = other_user.id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function s() {
      return UserStore.getUser(id);
    };
    cResult[1] = id;
    cResult[2] = fn;
    tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult = item(id[23]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp10);
  if (null != stateFromStores) {
    if (cResult[3] === analyticsLocations) {
      if (cResult[4] === item.message_id) {
        class N {
          constructor() {
            const obj = { userId: stateFromStores.id, localUser: stateFromStores, messageId: item.message_id, sourceAnalyticsLocations: analyticsLocations };
            showUserProfileActionSheetDefault(obj);
          }
        }
        const tmpResult2 = item(id[25]);
        const avatarSource = tmpResult2.getAvatarSource(stateFromStores, item.guild_id, undefined, item.acked);
        cResult[7] = item.acked;
        cResult[8] = item.guild_id;
        cResult[9] = stateFromStores;
        cResult[10] = avatarSource;
      }
    }
    class N {
      constructor() {
        const obj = { userId: stateFromStores.id, localUser: stateFromStores, messageId: item.message_id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      }
    }
    cResult[3] = analyticsLocations;
    cResult[4] = item.message_id;
    cResult[5] = stateFromStores;
    cResult[6] = N;
  }
  if (null != item.icon_name) {
    let tmp24;
    if (cResult[18] !== item.icon_name) {
      class N {
        constructor() {
          const obj = { userId: stateFromStores.id, localUser: stateFromStores, messageId: item.message_id, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj);
        }
      }
      cResult[18] = item.icon_name;
      cResult[19] = tmp25;
      tmp24 = tmp25;
    } else {
      tmp24 = cResult[19];
    }
    class N {
      constructor() {
        const obj = { userId: stateFromStores.id, localUser: stateFromStores, messageId: item.message_id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      }
    }
    cResult[20] = tmp6.fallbackImage.color;
    cResult[21] = tmp24;
    cResult[22] = jsx(item(id[17]).Icon, { source: tmp24, color: tmp6.fallbackImage.color });
    const tmp28 = jsx(item(id[17]).Icon, { source: tmp24, color: tmp6.fallbackImage.color });
  } else if (null != item.icon_url) {
    tmp18 = null;
    class N {
      constructor() {
        const obj = { userId: stateFromStores.id, localUser: stateFromStores, messageId: item.message_id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      }
    }
    if (null == null) {
      let tmp20;
      if (cResult[23] !== item.icon_url) {
        const obj3 = { uri: null };
        class N {
          constructor() {
            const obj = { userId: stateFromStores.id, localUser: stateFromStores, messageId: item.message_id, sourceAnalyticsLocations: analyticsLocations };
            showUserProfileActionSheetDefault(obj);
          }
        }
        cResult[23] = item.icon_url;
        cResult[24] = obj3;
        tmp20 = obj3;
      } else {
        tmp20 = cResult[24];
      }
      class N {
        constructor() {
          const obj = { userId: stateFromStores.id, localUser: stateFromStores, messageId: item.message_id, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj);
        }
      }
      cResult[25] = tmp4.rowImage;
      cResult[26] = tmp20;
      cResult[27] = jsx(tmp5(id[15]), { style: tmp4.rowImage, source: tmp20, resizeMode: "contain" });
      const tmp23 = jsx(tmp5(id[15]), { style: tmp4.rowImage, source: tmp20, resizeMode: "contain" });
    }
  } else {
    tmp18 = null;
    class N {
      constructor() {
        const obj = { userId: stateFromStores.id, localUser: stateFromStores, messageId: item.message_id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      }
    }
    if (null == null) {
      class N {
        constructor() {
          const obj = { userId: stateFromStores.id, localUser: stateFromStores, messageId: item.message_id, sourceAnalyticsLocations: analyticsLocations };
          showUserProfileActionSheetDefault(obj);
        }
      }
    }
  }
  if (cResult[50] === tmp18) {
    let tmp29;
    if (cResult[51] === tmp4.container) {
      tmp29 = cResult[52];
    }
    class N {
      constructor() {
        const obj = { userId: stateFromStores.id, localUser: stateFromStores, messageId: item.message_id, sourceAnalyticsLocations: analyticsLocations };
        showUserProfileActionSheetDefault(obj);
      }
    }
    const tmp33 = <View style={tmp29}>{tmp19}</View>;
    cResult[53] = tmp19;
    cResult[54] = tmp29;
    cResult[55] = tmp33;
  }
  const items1 = [tmp4.container, tmp18];
  cResult[50] = tmp18;
  cResult[51] = tmp4.container;
  cResult[52] = items1;
  tmp29 = items1;
}) : ((item) => {
  let brandBackground1;
  let tmp24Result;
  item = item.item;
  const compactMode = item.compactMode;
  let analyticsLocations;
  let stateFromStores;
  const tmp = closure_9(compactMode);
  analyticsLocations = compactMode(analyticsLocations[22])().analyticsLocations;
  const tmp4 = closure_10();
  const other_user = item.other_user;
  let id;
  if (other_user != null) {
    id = other_user.id;
  }
  let obj = item(tmp3[23]);
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(id));
  const items1 = [stateFromStores, compactMode, , , , ];
  ({ acked: arr2[2], guild_id: arr2[3], message_id: arr2[4] } = item);
  items1[5] = analyticsLocations;
  const memo = id.useMemo(() => {
    let AvatarSizes;
    let message_id;
    let obj3;
    let sourceAnalyticsLocations;
    let tmp3Result = null;
    if (null != stateFromStores) {
      const PressableOpacity = Pressables.PressableOpacity;
      ({ source: obj3.getAvatarSource(stateFromStores, item.guild_id, undefined, item.acked), size: compactMode ? AvatarSizes.REFRESH_MEDIUM_32 : AvatarSizes.LARGE_48, avatarDecoration: stateFromStores.avatarDecoration });
      const Avatar = native.Avatar;
      obj3 = profile_customization_ProfileCustomizationUtils;
      AvatarSizes = native.AvatarSizes;
      tmp3Result = <PressableOpacity onPress={function onPress() {
        const obj = { userId: localUser.id, localUser, messageId: message_id.message_id, sourceAnalyticsLocations };
        compactMode(analyticsLocations[24])(obj);
      }}>{null}</PressableOpacity>;
    }
    return tmp3Result;
  }, items1);
  if (null != item.icon_name) {
    const Icon = tmp6(tmp3[17]).Icon;
    tmp24Result = <Icon source={compactMode("icHighlight" === item.icon_name ? analyticsLocations[13] : analyticsLocations[14])} color={tmp4.fallbackImage.color} />;
    brandBackground1 = tmp4.brandBackground;
  } else if (null != item.icon_url) {
    brandBackground1 = null;
    tmp24Result = memo;
    if (null == memo) {
      const obj5 = { uri: item.icon_url };
      tmp24Result = jsx(tmp2(tmp3[15]), { style: tmp.rowImage, source: obj5, resizeMode: "contain" });
      brandBackground1 = tmp4.brandBackground;
    }
  } else {
    brandBackground1 = null;
    tmp24Result = memo;
    if (null == memo) {
      if ("lifecycle_item" === item.type) {
        let profileBackground;
        const item_enum = item.item_enum;
        const tmp21 = getLifecycleIcon(item.item_enum);
        if (item_enum === item(analyticsLocations[9]).ItemEnum.UPDATE_PROFILE) {
          profileBackground = tmp4.profileBackground;
        } else {
          if (item_enum !== item(analyticsLocations[9]).ItemEnum.FIND_FRIENDS) {
            if (item_enum !== item(analyticsLocations[9]).ItemEnum.ADD_FRIEND) {
              profileBackground = item_enum === tmp6(tmp3[9]).ItemEnum.FIRST_MESSAGE ? tmp4.messageBackground : tmp4.brandBackground;
            }
          }
          profileBackground = tmp4.friendBackground;
        }
        if (profileBackground == null) {
          profileBackground = null;
        }
        brandBackground1 = profileBackground;
        tmp24Result = tmp21;
      } else if (item.type === item(analyticsLocations[9]).NotificationCenterItems.REFERRAL_PROGRAM_ENTRYPOINT_REMINDER) {
        compactMode(analyticsLocations[15]);
        tmp24Result = <tmp2Result source={compactMode(analyticsLocations[27])} style={tmp.rowImage} resizeMode="contain" />;
        brandBackground1 = tmp4.brandBackground;
      } else {
        const guild = GuildStore.getGuild(item.guild_id);
        let tmp10 = null;
        if (null != guild) {
          tmp10 = getGuildAcronym(guild);
        }
        const tmp12 = getFallbackIcon(item.type, tmp4);
        if (tmp12.icon === compactMode(analyticsLocations[12])) {
          let tmp15Result;
          if (null != tmp10) {
            let str2 = "text-lg/normal";
            const Text = tmp6(tmp3[28]).Text;
            if (tmp10.length > 4) {
              str2 = "text-md/normal";
            }
            const items2 = [, ];
            ({ rowImage: arr3[0], guildFallbackImage: arr3[1] } = tmp);
            tmp15Result = <Text variant={str2} style={items2}>{tmp10}</Text>;
          }
          let brandBackground = tmp12.backgroundStyle;
          if (brandBackground == null) {
            brandBackground = tmp4.brandBackground;
          }
          brandBackground1 = brandBackground;
          tmp24Result = tmp15Result;
        }
        ({ icon: obj2.source, color: obj2.color } = tmp12);
        tmp15Result = jsx(tmp6(tmp3[17]).Icon, { source: null, color: null });
      }
    }
  }
  const items3 = [tmp.container, brandBackground1];
  return <stateFromStores style={items3}>{tmp24Result}</stateFromStores>;
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouItemImage.tsx");

export const ForYouItemImage = memoResult;