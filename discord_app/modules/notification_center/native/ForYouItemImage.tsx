// === Module 16361: ForYouItemImage ===

// Module 16361 (ForYouItemImage)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Pressables from "Pressables" /* 5909 */;
import FastImageDefault from "FastImage" /* 5974 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7125 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import profile_customization_ProfileCustomizationUtils from "profile_customization/ProfileCustomizationUtils" /* 7919 */;
import _modDef9542 from "module_9542" /* 9542 */;
import _modDef16363 from "module_16363" /* 16363 */;
import _modDef16364 from "module_16364" /* 16364 */;
import _modDef16365 from "module_16365" /* 16365 */;
import _modDef16366 from "module_16366" /* 16366 */;
import _modDef16367 from "module_16367" /* 16367 */;
import _modDef16368 from "module_16368" /* 16368 */;
import _modDef16369 from "module_16369" /* 16369 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
function getFallbackIcon(type, fallbackImage) {
  if (NotificationCenterItemsTypes.NotificationCenterItems.MISSED_MESSAGES === type) {
    const obj2 = { icon: _modDef9542, color: fallbackImage.fallbackImage.color };
    return obj2;
  } else if (NotificationCenterItemsTypes.NotificationCenterItems.FRIEND_REQUEST_REMINDER === type) {
    const obj3 = { icon: _modDef16363, color: fallbackImage.fallbackImage.color };
    return obj3;
  } else {
    if (NotificationCenterItemsTypes.NotificationCenterItems.GUILD_SCHEDULED_EVENT_STARTED !== type) {
      if (NotificationCenterItemsTypes.NotificationCenterItems.TOP_MESSAGES !== type) {
        if (NotificationCenterItemsTypes.NotificationCenterItems.MISSED_MESSAGES !== type) {
          if (NotificationCenterItemsTypes.NotificationCenterItems.TOP_MESSAGES === type) {
            const obj4 = { icon: _modDef16365, color: fallbackImage.fallbackImage.color };
            return obj4;
          } else {
            const obj = { icon: _modDef16366, color: fallbackImage.fallbackImage.color };
            return obj;
          }
        }
      }
    }
    const obj5 = { icon: _modDef16364, color: fallbackImage.fallbackImageV2.color, backgroundStyle: fallbackImage.guildGridBackground };
    return obj5;
  }
}
function getLifecycleIcon(item_enum) {
  if (item_enum === NotificationCenterItemsTypes.ItemEnum.UPDATE_PROFILE) {
    const obj2 = { source: _modDef16367 };
    let tmp5 = jsx(FastImageDefault, { source: _modDef16367 });
  } else {
    if (item_enum !== NotificationCenterItemsTypes.ItemEnum.FIND_FRIENDS) {
      if (item_enum !== NotificationCenterItemsTypes.ItemEnum.ADD_FRIEND) {
        if (item_enum === NotificationCenterItemsTypes.ItemEnum.FIRST_MESSAGE) {
          const obj3 = { source: _modDef16369, style: { width: "105%" } };
          tmp5 = jsx(FastImageDefault, { source: _modDef16369, style: { width: "105%" } });
        } else {
          const obj = { source: _modDef16366 };
          tmp5 = jsx(native.Icon, { source: _modDef16366 });
        }
      }
    }
    const obj4 = { source: _modDef16368, size: native.IconSizes.SMALL_20, color: nativeDefault.unsafe_rawColors.WHITE };
    tmp5 = jsx(native.Icon, { source: _modDef16368, size: native.IconSizes.SMALL_20, color: nativeDefault.unsafe_rawColors.WHITE });
  }
  return tmp5;
}
const View = fn(17).View;
const getGuildAcronym = fn(2070).getGuildAcronym;
const Constants = fn(16362);
({ FRIEND_BACKGROUND, MESSAGE_BACKGROUND, PROFILE_BACKGROUND } = Constants);
const jsx = fn(21).jsx;
let createStyles = fn(4890);
let closure_9 = createStyles.createStyles((arg0) => {
  let num = 48;
  if (arg0) {
    num = 32;
  }
  const size = { height: num, width: num, borderRadius: null, marginEnd: null, alignItems: "center", justifyContent: "center" };
  const result = num / 2;
  size.borderRadius = result;
  let num2 = 12;
  if (arg0) {
    num2 = 8;
  }
  const obj = { container: size, rowImage: { height: num, width: num, borderRadius: result }, guildFallbackImage: null };
  size.marginEnd = num2;
  const size1 = { height: "auto", maxHeight: result, width: "auto", color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj.guildFallbackImage = size1;
  return obj;
});
createStyles = fn(4890);
let obj = { fallbackImage: { color: nativeDefault.colors.WHITE }, fallbackImageV2: null, brandBackground: null, profileBackground: null, friendBackground: null, messageBackground: null, guildGridBackground: null };
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
const ReactCompilerGating = fn(558);
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouItemImage.tsx");

export const ForYouItemImage = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((item) => {
  let color = icon_name;
  let tmp = id;
  const cResult = icon_name(id[21]).c(56);
  icon_name = item.item;
  const tmp3 = closure_9(item.compactMode);
  analyticsLocations = analyticsLocations(id[22])().analyticsLocations;
  const tmp5 = closure_10();
  const other_user = icon_name.other_user;
  id = undefined;
  if (other_user != null) {
    id = other_user.id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function s() {
      return UserStore.getUser(id);
    };
    cResult[1] = id;
    cResult[2] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const obj = icon_name(id[21]);
  const stateFromStores = color(tmp[23]).useStateFromStores(first, tmp9);
  if (null == stateFromStores) {
    if (null != icon_name.icon_name) {
      if (cResult[18] !== icon_name.icon_name) {
        const tmp4Result = tmp4("icHighlight" === icon_name.icon_name ? tmp[13] : tmp[14]);
        icon_name = icon_name.icon_name;
        cResult[18] = icon_name;
        cResult[19] = tmp4Result;
      } else {
        if (cResult[20] === tmp5.fallbackImage.color) {
          const brandBackground2 = tmp5.brandBackground;
        }
        const obj2 = { source: cResult[19], color: tmp5.fallbackImage.color };
        tmp = jsx(color(tmp[17]).Icon, { source: cResult[19], color: tmp5.fallbackImage.color });
        color = tmp5.fallbackImage.color;
        cResult[20] = color;
        cResult[21] = cResult[19];
        cResult[22] = tmp;
      }
    } else {
      if (null != icon_name.icon_url) {
        let brandBackground1 = null;
        let tmp32 = null;
        if (null == null) {
          if (cResult[23] !== icon_name.icon_url) {
            const obj3 = { uri: icon_name.icon_url };
            cResult[23] = icon_name.icon_url;
            cResult[24] = obj3;
            let tmp42 = obj3;
          } else {
            tmp42 = cResult[24];
          }
          if (cResult[25] === tmp3.rowImage) {
            if (cResult[26] === tmp42) {
              let tmp43 = cResult[27];
            }
            brandBackground1 = tmp5.brandBackground;
            tmp32 = tmp43;
          }
          const obj5 = { style: tmp3.rowImage, source: tmp42, resizeMode: "contain" };
          const tmp45 = jsx(tmp4(tmp[15]), { style: tmp3.rowImage, source: tmp42, resizeMode: "contain" });
          cResult[25] = tmp3.rowImage;
          cResult[26] = tmp42;
          cResult[27] = tmp45;
          tmp43 = tmp45;
        }
      } else {
        brandBackground1 = null;
        tmp32 = null;
        if (null == null) {
          if ("lifecycle_item" === icon_name.type) {
            if (cResult[28] !== icon_name.item_enum) {
              const tmp39 = getLifecycleIcon(icon_name.item_enum);
              cResult[28] = icon_name.item_enum;
              cResult[29] = tmp39;
              let tmp37 = tmp39;
            } else {
              tmp37 = cResult[29];
            }
            if (cResult[30] === icon_name.item_enum) {
              if (cResult[31] === tmp5) {
                let tmp40 = cResult[32];
              }
              brandBackground1 = tmp40;
              tmp32 = tmp37;
            }
            const item_enum = icon_name.item_enum;
            if (item_enum === color(tmp[9]).ItemEnum.UPDATE_PROFILE) {
              let profileBackground = tmp5.profileBackground;
            } else {
              if (item_enum !== color(tmp[9]).ItemEnum.FIND_FRIENDS) {
                if (item_enum !== color(tmp[9]).ItemEnum.ADD_FRIEND) {
                  profileBackground = item_enum === color(tmp[9]).ItemEnum.FIRST_MESSAGE ? tmp5.messageBackground : tmp5.brandBackground;
                }
              }
              profileBackground = tmp5.friendBackground;
            }
            if (profileBackground == null) {
              profileBackground = null;
            }
            cResult[30] = icon_name.item_enum;
            cResult[31] = tmp5;
            cResult[32] = profileBackground;
            tmp40 = profileBackground;
          } else if (icon_name.type === color(tmp[9]).NotificationCenterItems.REFERRAL_PROGRAM_ENTRYPOINT_REMINDER) {
            if (cResult[33] !== tmp3.rowImage) {
              const obj6 = { source: tmp4(tmp[27]), style: tmp3.rowImage, resizeMode: "contain" };
              const tmp36 = jsx(tmp4(tmp[15]), { source: tmp4(tmp[27]), style: tmp3.rowImage, resizeMode: "contain" });
              cResult[33] = tmp3.rowImage;
              cResult[34] = tmp36;
              let tmp33 = tmp36;
              const tmp4Result2 = tmp4(tmp[15]);
            } else {
              tmp33 = cResult[34];
            }
            brandBackground1 = tmp5.brandBackground;
            tmp32 = tmp33;
          } else {
            if (cResult[35] !== icon_name.guild_id) {
              guild = GuildStore.getGuild(icon_name.guild_id);
              let tmp18 = null;
              if (null != guild) {
                tmp18 = getGuildAcronym(guild);
              }
              cResult[35] = icon_name.guild_id;
              cResult[36] = tmp18;
              let arr2 = tmp18;
            } else {
              arr2 = cResult[36];
            }
            if (cResult[37] === icon_name.type) {
              if (cResult[38] === tmp5) {
                let tmp20 = cResult[39];
              }
              if (tmp20.icon === tmp4(tmp[12])) {
                if (null != arr2) {
                  let str2 = "text-lg/normal";
                  if (arr2.length > 4) {
                    str2 = "text-md/normal";
                  }
                  if (cResult[40] === tmp3.guildFallbackImage) {
                    if (cResult[41] === tmp3.rowImage) {
                      let tmp26 = cResult[42];
                    }
                    if (cResult[43] === arr2) {
                      if (cResult[44] === str2) {
                      }
                    }
                    const obj7 = { variant: str2, style: tmp26, children: arr2 };
                    const tmp29 = jsx(color(tmp[28]).Text, { variant: str2, style: tmp26, children: arr2 });
                    cResult[43] = arr2;
                    cResult[44] = str2;
                    cResult[45] = tmp26;
                    cResult[46] = tmp29;
                  }
                  const items1 = [, ];
                  ({ rowImage: arr3[0], guildFallbackImage: arr3[1] } = tmp3);
                  cResult[40] = tmp3.guildFallbackImage;
                  cResult[41] = tmp3.rowImage;
                  cResult[42] = items1;
                  tmp26 = items1;
                }
              }
              if (cResult[47] === tmp20.color) {
                if (cResult[48] === tmp20.icon) {
                  let tmp23 = cResult[49];
                }
                let brandBackground = tmp20.backgroundStyle;
                if (brandBackground == null) {
                  brandBackground = tmp5.brandBackground;
                }
                brandBackground1 = brandBackground;
                tmp32 = tmp23;
              }
              ({ icon: obj4.source, color: obj4.color } = tmp20);
              const tmp25 = jsx(color(tmp[17]).Icon, { source: null, color: null });
              cResult[47] = tmp20.color;
              cResult[48] = tmp20.icon;
              cResult[49] = tmp25;
              tmp23 = tmp25;
              const obj8 = { source: null, color: null };
            }
            const tmp22 = getFallbackIcon(icon_name.type, tmp5);
            cResult[37] = icon_name.type;
            cResult[38] = tmp5;
            cResult[39] = tmp22;
            tmp20 = tmp22;
          }
        }
      }
      if (cResult[50] === brandBackground1) {
        if (cResult[51] === tmp3.container) {
          let tmp52 = cResult[52];
        }
        if (cResult[53] === tmp32) {
          if (cResult[54] === tmp52) {
            let tmp53 = cResult[55];
          }
          return tmp53;
        }
        const obj9 = { style: tmp52, children: tmp32 };
        const tmp56 = <View style={tmp52}>{tmp32}</View>;
        cResult[53] = tmp32;
        cResult[54] = tmp52;
        cResult[55] = tmp56;
        tmp53 = tmp56;
      }
      const items2 = [tmp3.container, brandBackground1];
      cResult[50] = brandBackground1;
      cResult[51] = tmp3.container;
      cResult[52] = items2;
      tmp52 = items2;
    }
  } else {
    if (cResult[3] === analyticsLocations) {
      if (cResult[4] === icon_name.message_id) {
        class N {
          constructor() {
            obj = { userId: closure_3.id, localUser: closure_3, messageId: item.message_id, sourceAnalyticsLocations: analyticsLocations };
            tmp = closure_1(closure_2[24])(obj);
            return;
          }
        }
        const colorResult1 = color(tmp[25]);
        const avatarSource = colorResult1.getAvatarSource(stateFromStores, icon_name.guild_id, undefined, icon_name.acked);
        cResult[7] = icon_name.acked;
        cResult[8] = icon_name.guild_id;
        cResult[9] = stateFromStores;
        cResult[10] = avatarSource;
      }
    }
    class N {
      constructor() {
        obj = { userId: closure_3.id, localUser: closure_3, messageId: item.message_id, sourceAnalyticsLocations: analyticsLocations };
        tmp = closure_1(closure_2[24])(obj);
        return;
      }
    }
    cResult[3] = analyticsLocations;
    cResult[4] = icon_name.message_id;
    cResult[5] = stateFromStores;
    cResult[6] = N;
  }
  const colorResult = color(tmp[23]);
}) : ((item) => {
  item = item.item;
  const compactMode = item.compactMode;
  let analyticsLocations;
  let stateFromStores;
  const tmp = closure_9(compactMode);
  let obj = analyticsLocations;
  analyticsLocations = compactMode(analyticsLocations[22])().analyticsLocations;
  const tmp3 = closure_10();
  const other_user = item.other_user;
  let id;
  if (other_user != null) {
    id = other_user.id;
  }
  const items = [UserStore];
  stateFromStores = item(obj[23]).useStateFromStores(items, () => UserStore.getUser(id));
  const items1 = [stateFromStores, compactMode, , , , ];
  ({ acked: arr2[2], guild_id: arr2[3], message_id: arr2[4] } = item);
  items1[5] = analyticsLocations;
  const memo = id.useMemo(() => {
    let avatarDecoration = stateFromStores;
    if (null == stateFromStores) {
      return null;
    } else {
      const obj = {
        onPress() {
            compactMode(analyticsLocations[24])({ userId: localUser.id, localUser, messageId: message_id.message_id, sourceAnalyticsLocations });
          },
        children: null
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
            compactMode(analyticsLocations[24])({ userId: localUser.id, localUser, messageId: message_id.message_id, sourceAnalyticsLocations });
          },
        children: null
      });
    }
  }, items1);
  if (null != item.icon_name) {
    obj = { source: null, color: null };
    obj.source = tmp2("icHighlight" === item.icon_name ? obj[13] : obj[14]);
    obj.color = tmp3.fallbackImage.color;
    jsx(tmp5(obj[17]).Icon, { source: null, color: null });
    const brandBackground2 = tmp3.brandBackground;
    const tmp24 = "icHighlight" === item.icon_name ? obj[13] : obj[14];
  } else {
    if (null != item.icon_url) {
      let brandBackground1 = null;
      let tmp16 = memo;
      if (null == memo) {
        const obj4 = { style: tmp.rowImage, source: null, resizeMode: "contain" };
        const obj5 = { uri: item.icon_url };
        obj4.source = obj5;
        tmp16 = jsx(tmp2(obj[15]), { style: tmp.rowImage, source: null, resizeMode: "contain" });
        brandBackground1 = tmp3.brandBackground;
      }
    } else {
      brandBackground1 = null;
      tmp16 = memo;
      if (null == memo) {
        if ("lifecycle_item" === item.type) {
          const item_enum = item.item_enum;
          if (item_enum === tmp5(obj[9]).ItemEnum.UPDATE_PROFILE) {
            let profileBackground = tmp3.profileBackground;
          } else {
            if (item_enum !== tmp5(obj[9]).ItemEnum.FIND_FRIENDS) {
              if (item_enum !== tmp5(obj[9]).ItemEnum.ADD_FRIEND) {
                profileBackground = item_enum === tmp5(obj[9]).ItemEnum.FIRST_MESSAGE ? tmp3.messageBackground : tmp3.brandBackground;
              }
            }
            profileBackground = tmp3.friendBackground;
          }
          if (profileBackground == null) {
            profileBackground = null;
          }
          brandBackground1 = profileBackground;
          tmp16 = getLifecycleIcon(item.item_enum);
          const tmp20 = getLifecycleIcon(item.item_enum);
        } else if (item.type === tmp5(obj[9]).NotificationCenterItems.REFERRAL_PROGRAM_ENTRYPOINT_REMINDER) {
          const obj6 = { source: tmp2(obj[27]), style: tmp.rowImage, resizeMode: "contain" };
          tmp16 = jsx(tmp2(obj[15]), { source: tmp2(obj[27]), style: tmp.rowImage, resizeMode: "contain" });
          brandBackground1 = tmp3.brandBackground;
          const tmp2Result = tmp2(obj[15]);
        } else {
          guild = GuildStore.getGuild(item.guild_id);
          let tmp9 = null;
          if (null != guild) {
            tmp9 = getGuildAcronym(guild);
          }
          const tmp11 = getFallbackIcon(item.type, tmp3);
          if (tmp11.icon === tmp2(obj[12])) {
            if (null != tmp9) {
              let str2 = "text-lg/normal";
              if (tmp9.length > 4) {
                str2 = "text-md/normal";
              }
              const obj7 = { variant: str2, style: null, children: null };
              const items2 = [, ];
              ({ rowImage: arr3[0], guildFallbackImage: arr3[1] } = tmp);
              obj7.style = items2;
              obj7.children = tmp9;
              let tmp14Result = jsx(tmp5(obj[28]).Text, { variant: str2, style: null, children: null });
            }
            let brandBackground = tmp11.backgroundStyle;
            if (brandBackground == null) {
              brandBackground = tmp3.brandBackground;
            }
            brandBackground1 = brandBackground;
            tmp16 = tmp14Result;
          }
          ({ icon: obj3.source, color: obj3.color } = tmp11);
          tmp14Result = jsx(tmp5(obj[17]).Icon, { source: null, color: null });
          const obj8 = { source: null, color: null };
        }
      }
    }
    const obj14 = { style: null, children: null };
    const items3 = [tmp.container, brandBackground1];
    obj14.style = items3;
    obj14.children = tmp16;
    return <stateFromStores style={null}>{null}</stateFromStores>;
  }
  let obj2 = item(obj[23]);
}));