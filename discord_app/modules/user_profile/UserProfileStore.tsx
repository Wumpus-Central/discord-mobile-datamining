// === Module 7621: UserProfileStore ===

// Module 7621 (UserProfileStore)
import _modDef12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import Timers from "Timers" /* 4447 */;
import WidgetType from "WidgetType" /* 7622 */;
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7634 */;
import parseUserProfileCollectiblesDefault from "parseUserProfileCollectibles" /* 7635 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import UserRecord from "UserRecord" /* 1385 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 1979 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1073 */;
import PresenceStore from "PresenceStore" /* 4600 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;

require = fn;
function createUserWidgetFromServer(data) {
  const type = data.data.type;
  if (WidgetType.WidgetType.CURRENT_GAMES !== type) {
    if (tmp(7622).WidgetType.FAVORITE_GAMES !== type) {
      if (tmp(7622).WidgetType.PLAYED_GAMES !== type) {
        if (tmp(7622).WidgetType.WANT_TO_PLAY_GAMES !== type) {
          if (tmp(7622).WidgetType.APPLICATION === type) {
            obj = { id: data.id, applicationId: data.data.application_id };
            const applicationWidget = new tmp(7633).ApplicationWidget(obj);
            return applicationWidget;
          } else if (tmp(7622).WidgetType.PERSONAL === type) {
            obj = { id: data.id, header: null, sections: null };
            let str = data.data.header;
            if (str == null) {
              str = "";
            }
            obj.header = str;
            obj.sections = tmp(7630).parsePersonalWidgetSections(data.data.sections);
            const userProfilePersonalWidget = new tmp(7630).UserProfilePersonalWidget(obj);
            return userProfilePersonalWidget;
          } else if (tmp(7622).WidgetType.CLIPS_GALLERY === type) {
            obj = { id: data.id, clips: null };
            const clips = data.data.clips;
            const mapped = clips.map((id) => {
              let tmp = null;
              if (null != id.id) {
                tmp = null;
                if (null != id.file_id) {
                  obj = { status: "saved", id: null, fileId: null, gameId: null, title: null, tags: null, localClipId: null, videoURL: null, thumbnailURL: null };
                  ({ id: obj.id, file_id: obj.fileId, game_id: obj.gameId, title } = id);
                  obj.title = title;
                  ({ tags: obj.tags, local_clip_id } = id);
                  obj.localClipId = local_clip_id;
                  ({ video_url: obj.videoURL, thumbnail_url: obj.thumbnailURL } = id);
                  tmp = obj;
                }
              }
              return tmp;
            });
            obj.clips = mapped.filter(tmp(1369).isNotNullish);
            const clipsGalleryWidget = new tmp(7629).ClipsGalleryWidget(obj);
            return clipsGalleryWidget;
          }
        }
      }
    }
  }
  const games = data.data.games;
  const mapped1 = games.map((gameId) => ({ gameId: gameId.game_id, comment: gameId.comment, tags: gameId.tags }));
  const uniqByResult = _modDef12.uniqBy(mapped1, "gameId");
  const baseGameWidget = new tmp(7623).BaseGameWidget({ id: data.id, type, games: _modDef12.uniqBy(mapped1, "gameId") });
  return baseGameWidget;
}
function createUserWidgetFromSnapshot(type) {
  type = type.type;
  if (WidgetType.WidgetType.CURRENT_GAMES !== type) {
    if (tmp(7622).WidgetType.FAVORITE_GAMES !== type) {
      if (tmp(7622).WidgetType.PLAYED_GAMES !== type) {
        if (tmp(7622).WidgetType.WANT_TO_PLAY_GAMES !== type) {
          if (tmp(7622).WidgetType.APPLICATION === type) {
            ({ id: id3, applicationId } = type);
            obj = { id: id3, applicationId };
            const applicationWidget = new tmp(7633).ApplicationWidget(obj);
            return applicationWidget;
          } else if (tmp(7622).WidgetType.PERSONAL === type) {
            ({ id: id2, header, sections } = type);
            obj = { id: id2, header, sections };
            const userProfilePersonalWidget = new tmp(7630).UserProfilePersonalWidget(obj);
            return userProfilePersonalWidget;
          } else if (tmp(7622).WidgetType.CLIPS_GALLERY === type) {
            ({ id, clips } = type);
            obj = { id, clips };
            const clipsGalleryWidget = new tmp(7629).ClipsGalleryWidget(obj);
            return clipsGalleryWidget;
          } else {
            const type2 = type.type;
          }
        }
      }
    }
  }
  ({ id: id4, type: type3, games } = type);
  const baseGameWidget = new tmp(7623).BaseGameWidget({ id: id4, type: type3, games });
  return baseGameWidget;
}
function checkUserProfileCollectiblesExpiration(id, guild_id) {
  value2 = id;
  closure_0 = id;
  closure_1 = guild_id;
  if (null != guild_id) {
    map2.get(value2);
    value = undefined;
    if (value != null) {
      value = value.get(guild_id);
    }
    let value1 = value;
  } else {
    value1 = map1.get(value2);
  }
  let collectibles;
  if (value1 != null) {
    collectibles = value1.collectibles;
  }
  if (null != collectibles) {
    const items = [];
    const collectibles1 = value1.collectibles;
    const item = collectibles1.forEach((expiresAt) => {
      if (null != expiresAt.expiresAt) {
        expiresAt = expiresAt.expiresAt;
        const _Date = Date;
        const time = expiresAt.getTime();
        const diff = time - Date.now();
        if (diff <= 0) {
          items.push(expiresAt);
        } else {
          if (null == dependencyMap[closure_0]) {
            obj = {};
            obj[closure_10] = {};
            tmp20[tmp21] = obj;
          }
          let tmp2 = closure_1;
          let tmp3 = closure_1;
          if (closure_1 == null) {
            tmp3 = closure_10;
          }
          if (null == dependencyMap[closure_0][tmp3]) {
            let tmp4 = tmp2;
            if (tmp2 == null) {
              tmp4 = closure_10;
            }
            tmp20[tmp21][tmp4] = {};
          }
          let tmp5 = tmp2;
          if (tmp2 == null) {
            tmp5 = closure_10;
          }
          if (null == dependencyMap[closure_0][tmp5][expiresAt.skuId]) {
            let tmp6 = tmp2;
            if (tmp2 == null) {
              tmp6 = closure_10;
            }
            const timeout = new Timers.Timeout();
            tmp20[tmp21][tmp6][expiresAt.skuId] = timeout;
          }
          if (tmp2 == null) {
            tmp2 = closure_10;
          }
          const _Math = Math;
          dependencyMap[closure_0][tmp2][expiresAt.skuId].start(Math.min(MAX_TIMEOUT_MS, diff), () => {
            checkUserProfileCollectiblesExpiration(id, guild_id);
          });
        }
      }
    });
    if (0 !== items.length) {
      const collectibles2 = value1.collectibles;
      value1.collectibles = collectibles2.filter((item) => !items.includes(item));
      const item1 = items.forEach((type) => {
        if (type.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
          value1.profileEffect = undefined;
        } else if (type.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
          value1.profileFrame = undefined;
        }
        if (dependencyMap[closure_0] != null) {
          let tmp8 = closure_1;
          if (closure_1 == null) {
            tmp8 = closure_10;
          }
          if (tmp7[tmp8] != null) {
            const skuId = type.skuId;
            delete tmp2[tmp];
          }
        }
      });
      if ("guildId" in value1) {
        value2 = map2.get(value2);
        if (value2 != null) {
          const result = value2.set(value1.guildId, value1);
        }
      } else {
        const result1 = map1.set(value2, value1);
      }
      userProfileStore.emitChange();
    }
  }
}
function handleLogout() {
  map.clear();
  set.clear();
  map1.clear();
  map2.clear();
  map3.clear();
  map4.clear();
  map5.clear();
  c23 = false;
}
function handleMutualFriendsFetchStart(userId) {
  set.add(userId.userId);
}
function handleMutualFriendsFetchFailure(userId) {
  set.delete(userId.userId);
}
function handleMutualFriendsFetchSuccess(userId) {
  set.delete(userId.userId);
  ({ userId, mutualFriends } = userId);
  const mapped = _modDef12(mutualFriends).map((id) => {
    obj = { key: id.id, user: null, status: null };
    obj = {};
    const merged = Object.assign(id);
    obj.collectibles = set(date1[17]).parseServerUserCollectibles(id.collectibles);
    const obj3 = set(date1[17]);
    obj.user = new UserRecord(obj);
    obj.status = status.getStatus(id.id);
    return obj;
  });
  const arr = _modDef12(mutualFriends);
  const result = map3.set(userId, mapped.sortBy((user) => user.user.username.toLowerCase()).value());
  const result1 = map4.set(userId.userId, userId.mutualFriends.length);
}
function handleProfileFetch(arg0) {
  ({ userProfile, fetchStartedAt, guildId } = arg0);
  set = undefined;
  let date;
  let date1;
  if (guildId == null) {
    const guild_member_profile = userProfile.guild_member_profile;
    let guild_id;
    if (guild_member_profile != null) {
      guild_id = guild_member_profile.guild_id;
    }
    guildId = guild_id;
  }
  if (guildId == null) {
    guildId = closure_10;
  }
  value = map.get(userProfile.user.id);
  if (value != null) {
    value.delete(guildId);
  }
  set.delete(userProfile.user.id);
  if (null != userProfile.mutual_guilds) {
    set = {};
    const mutual_guilds = userProfile.mutual_guilds;
    const item = mutual_guilds.forEach((id) => {
      id = id.id;
      const guild = GuildStore.getGuild(id);
      if (null != guild) {
        obj = { guild, nick: id.nick };
        set[id] = obj;
      }
    });
    const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
    const found = flattenedGuildIds.filter((item) => null != set[item]);
    const result = map5.set(userProfile.user.id, found.map((item) => ({ guild: set[item].guild, nick: set[item].nick })));
  }
  if (null != userProfile.mutual_friends_count) {
    const mutual_friends_count = userProfile.mutual_friends_count;
    const result1 = map4.set(userProfile.user.id, mutual_friends_count);
    if (0 === mutual_friends_count) {
      const result2 = map3.set(userProfile.user.id, closure_19);
    }
  }
  if (null != userProfile.mutual_friends) {
    const mapped = date(date1[9])(userProfile.mutual_friends).map((id) => {
      obj = { key: id.id, user: null, status: null };
      obj = {};
      const merged = Object.assign(id);
      obj.collectibles = set(date1[17]).parseServerUserCollectibles(id.collectibles);
      const obj3 = set(date1[17]);
      obj.user = new UserRecord(obj);
      obj.status = status.getStatus(id.id);
      return obj;
    });
    const arr13 = date(date1[9])(userProfile.mutual_friends);
    const result3 = map3.set(userProfile.user.id, mapped.sortBy((user) => user.user.username.toLowerCase()).value());
    const result4 = map4.set(userProfile.user.id, userProfile.mutual_friends.length);
    const iter = mapped.sortBy((user) => user.user.username.toLowerCase());
  }
  date = null;
  if (null != userProfile.premium_since) {
    const _Date = Date;
    date = new Date(userProfile.premium_since);
  }
  date1 = null;
  if (null != userProfile.premium_guild_since) {
    const _Date2 = Date;
    date1 = new Date(userProfile.premium_guild_since);
  }
  const application = userProfile.application;
  if (null != userProfile.badges) {
    const badges = userProfile.badges;
    let mapped1 = badges.map((id) => {
      obj = TieredTenureBadgeUtils;
      const tieredTenureBadgeData = obj.getTieredTenureBadgeData(id.id);
      if ("premium" === id.id) {
        if (null != date) {
          const intl2 = tmp(1114).intl;
          obj = { date: tmp5 };
          let formatToPlainStringResult = intl2.formatToPlainString(tmp(1114).t["8zbGNR"], obj);
          if (null != tieredTenureBadgeData) {
            const intl3 = tmp(1114).intl;
            obj = { date: tmp5 };
            formatToPlainStringResult = intl3.formatToPlainString(tmp(1114).t.Hu4jfi, obj);
          }
          const obj1 = {};
          const merged = Object.assign(id);
          obj1.description = formatToPlainStringResult;
          return obj1;
        }
      }
      id = id.id;
      let tmp7 = id;
      if (id.startsWith("guild_booster_lvl")) {
        tmp7 = id;
        if (null != date1) {
          const obj2 = {};
          const merged1 = Object.assign(id);
          const intl = tmp(1114).intl;
          const obj3 = { date: tmp8 };
          obj2.description = intl.formatToPlainString(tmp(1114).t.IWkAq7, obj3);
          tmp7 = obj2;
        }
      }
      return tmp7;
    });
  } else {
    mapped1 = [];
  }
  let tmp21 = null != c24;
  if (tmp21) {
    tmp21 = c24.userId === userProfile.user.id;
  }
  if (tmp21) {
    const _Date3 = Date;
    if (Date.now() > c24.expiresAtMs) {
      c24 = null;
    } else if (null != mapped1) {
      const _Set = Set;
      set = new Set(mapped1.map((id) => id.id));
      let found1;
      if (tmp64 != null) {
        const badges1 = tmp64.badges;
        found1 = badges1.filter((id) => !set.has(id.id));
      }
      if (found1.length > 0) {
        const push = mapped1.push;
        const items = [];
        HermesBuiltin.arraySpread(found1, 0);
        HermesBuiltin.apply(items, mapped1);
      }
    }
  }
  const timestamp = Date.now();
  obj = {};
  let merged = Object.assign(date(date1[20])(userProfile.user_profile));
  obj.userId = userProfile.user.id;
  const user_profile = userProfile.user_profile;
  let banner;
  if (user_profile != null) {
    banner = user_profile.banner;
  }
  obj.banner = banner;
  const user_profile2 = userProfile.user_profile;
  let accent_color;
  if (user_profile2 != null) {
    accent_color = user_profile2.accent_color;
  }
  obj.accentColor = accent_color;
  const user_profile3 = userProfile.user_profile;
  let theme_colors;
  if (user_profile3 != null) {
    theme_colors = user_profile3.theme_colors;
  }
  obj.themeColors = theme_colors;
  const user_profile4 = userProfile.user_profile;
  let prop;
  if (user_profile4 != null) {
    prop = user_profile4.popout_animation_particle_type;
  }
  obj.popoutAnimationParticleType = prop;
  const user_profile5 = userProfile.user_profile;
  let str;
  if (user_profile5 != null) {
    str = user_profile5.bio;
  }
  if (str == null) {
    str = "";
  }
  obj.bio = str;
  const user_profile6 = userProfile.user_profile;
  let str2;
  if (user_profile6 != null) {
    str2 = user_profile6.pronouns;
  }
  if (str2 == null) {
    str2 = "";
  }
  obj.pronouns = str2;
  const connected_accounts = userProfile.connected_accounts;
  let found2 = connected_accounts.filter((type) => date(date1[21]).isSupported(type.type));
  if (found2 == null) {
    found2 = [];
  }
  obj.connectedAccounts = found2;
  let prop1 = userProfile.application_role_connections;
  if (prop1 == null) {
    prop1 = [];
  }
  obj.applicationRoleConnections = prop1;
  obj.premiumSince = date;
  obj.premiumType = userProfile.premium_type;
  obj.premiumGuildSince = date1;
  obj.fetchStartedAt = fetchStartedAt;
  obj.fetchEndedAt = timestamp;
  obj.legacyUsername = userProfile.legacy_username;
  let tmp42 = null;
  if (null != application) {
    obj = { id: null, primarySkuId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, flags: null, popularApplicationCommandIds: null, storefront_available: null, name: null, termsOfServiceUrl: null, privacyPolicyUrl: null };
    ({ id: obj3.id, primary_sku_id: obj3.primarySkuId, custom_install_url: obj3.customInstallUrl, install_params: obj3.installParams, integration_types_config: obj3.integrationTypesConfig, flags: obj3.flags, popular_application_command_ids: obj3.popularApplicationCommandIds, storefront_available: obj3.storefront_available, name: obj3.name, terms_of_service_url: obj3.termsOfServiceUrl, privacy_policy_url: obj3.privacyPolicyUrl } = application);
    tmp42 = obj;
  }
  obj.application = tmp42;
  obj.badges = mapped1;
  const widgets = userProfile.widgets;
  let found3;
  if (widgets != null) {
    const mapped2 = widgets.map(createUserWidgetFromServer);
    found3 = mapped2.filter(set(tmp36[14]).isNotNullish);
  }
  obj.widgets = found3;
  ({ wishlist_settings: obj2.wishlistSettings, private: obj2.private } = userProfile);
  const result5 = map1.set(userProfile.user.id, obj);
  checkUserProfileCollectiblesExpiration(userProfile.user.id);
  if (null != userProfile.guild_member_profile) {
    let obj1 = {};
    let merged1 = Object.assign(date(tmp36[20])(userProfile.guild_member_profile));
    obj1.userId = userProfile.user.id;
    obj1.guildId = userProfile.guild_member_profile.guild_id;
    obj1.banner = userProfile.guild_member_profile.banner;
    obj1.accentColor = userProfile.guild_member_profile.accent_color;
    const guild_member_profile3 = userProfile.guild_member_profile;
    let theme_colors1;
    if (guild_member_profile3 != null) {
      theme_colors1 = guild_member_profile3.theme_colors;
    }
    obj1.themeColors = theme_colors1;
    const guild_member_profile2 = userProfile.guild_member_profile;
    let prop2;
    if (guild_member_profile2 != null) {
      prop2 = guild_member_profile2.popout_animation_particle_type;
    }
    obj1.popoutAnimationParticleType = prop2;
    obj1.bio = userProfile.guild_member_profile.bio;
    obj1.pronouns = userProfile.guild_member_profile.pronouns;
    obj1.badges = userProfile.guild_badges;
    obj1.fetchStartedAt = fetchStartedAt;
    obj1.fetchEndedAt = timestamp;
    value = map2.get(userProfile.user.id);
    if (null != value) {
      const result6 = value.set(userProfile.guild_member_profile.guild_id, obj1);
    } else {
      const _Map = Map;
      map = new Map();
      const result7 = map.set(userProfile.guild_member_profile.guild_id, obj1);
      const result8 = obj4.set(userProfile.user.id, map);
    }
    userProfile = userProfile.guild_member_profile.guild_id;
    checkUserProfileCollectiblesExpiration(userProfile.user.id, userProfile);
    obj4 = map2;
  }
}
function handleProfileFetchStart(withMutualFriends) {
  ({ userId, guildId } = withMutualFriends);
  if (guildId == null) {
    guildId = closure_10;
  }
  value = map.get(userId);
  if (null != value) {
    value.add(guildId);
  } else {
    const _Set = Set;
    set = new Set();
    set.add(guildId);
    const result = map.set(userId, set);
  }
  if (withMutualFriends.withMutualFriends) {
    set.add(userId);
  }
}
function handleProfileFetchFailure(arg0) {
  ({ userId, guildId, apiError, fetchStartedAt } = arg0);
  value = map.get(userId);
  if (value != null) {
    let tmp = guildId;
    if (guildId == null) {
      tmp = closure_10;
    }
    value.delete(tmp);
  }
  set.delete(userId);
  value = map1.get(userId);
  if (value == null) {
    obj = { connectedAccounts: [], applicationRoleConnections: [], premiumSince: null, premiumGuildSince: null, application: null, legacyUsername: null, userId, banner: null, accentColor: null, bio: "", pronouns: "", premiumType: null, fetchStartedAt: 0, fetchEndedAt: 0, fetchError: "call" };
    value = obj;
  }
  const timestamp = Date.now();
  value.fetchStartedAt = fetchStartedAt;
  value.fetchEndedAt = timestamp;
  value.fetchError = apiError;
  const result = map1.set(userId, value);
  if (null != guildId) {
    const value1 = map2.get(userId);
    value2 = undefined;
    if (value1 != null) {
      value2 = value1.get(guildId);
    }
    if (null != value2) {
      value2.fetchStartedAt = fetchStartedAt;
      value2.fetchEndedAt = timestamp;
      value2.fetchError = apiError;
    }
  }
  let status;
  if (apiError != null) {
    status = apiError.status;
  }
  if (404 === status) {
    const result1 = map4.set(userId, 0);
    const result2 = map3.set(userId, closure_19);
    const result3 = map5.set(userId, closure_20);
  }
}
function handleProfileUpdateStart() {
  c23 = true;
}
function handleProfileUpdateSuccess(guild_id) {
  c23 = false;
  if (null != guild_id.guild_id) {
    ({ userId, guild_id } = guild_id);
    ({ accent_color, banner, bio, pronouns, popout_animation_particle_type, theme_colors, collectibles } = guild_id);
    value = map2.get(userId);
    if (null != guild_id) {
      if (null != value) {
        value = value.get(guild_id);
        if (null != value) {
          obj = {};
          const merged = Object.assign(value);
          obj = { collectibles };
          const merged1 = Object.assign(parseUserProfileCollectiblesDefault(obj));
          obj.accentColor = accent_color;
          obj.banner = banner;
          obj.bio = bio;
          obj.pronouns = pronouns;
          obj.popoutAnimationParticleType = popout_animation_particle_type;
          obj.themeColors = theme_colors;
          const result = value.set(guild_id, obj);
          checkUserProfileCollectiblesExpiration(userId, guild_id);
        }
      }
    }
  } else {
    const userId2 = guild_id.userId;
    ({ accent_color: accent_color2, banner: banner2, bio: bio2, pronouns: pronouns2, popout_animation_particle_type: popout_animation_particle_type2, theme_colors: theme_colors2, collectibles: collectibles2 } = guild_id);
    const value1 = map1.get(userId2);
    if (null != value1) {
      const obj1 = {};
      const merged2 = Object.assign(value1);
      const obj2 = { collectibles: collectibles2 };
      const merged3 = Object.assign(parseUserProfileCollectiblesDefault(obj2));
      obj1.accentColor = accent_color2;
      obj1.banner = banner2;
      obj1.bio = bio2;
      obj1.pronouns = pronouns2;
      obj1.popoutAnimationParticleType = popout_animation_particle_type2;
      obj1.themeColors = theme_colors2;
      const result1 = obj4.set(userId2, obj1);
      checkUserProfileCollectiblesExpiration(userId2);
    }
    obj4 = map1;
  }
}
function handleProfileUpdateFailure() {
  c23 = false;
}
function handleWidgetsUpdateSuccess(arg0) {
  ({ userId, widgets } = arg0);
  obj = map1;
  value = map1.get(userId);
  if (null == value) {
    return false;
  } else {
    obj = {};
    const merged = Object.assign(value);
    const mapped = widgets.map(createUserWidgetFromServer);
    obj.widgets = mapped.filter(GlobalUtils.isNotNullish);
    const result = obj.set(userId, obj);
  }
}
function handlePinBadgesToProfile(badges) {
  const userId = badges.userId;
  obj = { userId, badges: badges.badges, expiresAtMs: Date.now() + 1000 * badges.ttlInSeconds };
  value = map1.get(userId);
  if (null != value) {
    badges = value.badges;
    if (badges == null) {
      badges = [];
    }
    if (null != badges) {
      const _Set = Set;
      let found;
      set = new Set(badges.map((id) => id.id));
      if (tmp2 != null) {
        const badges1 = tmp2.badges;
        found = badges1.filter((id) => !set.has(id.id));
      }
      if (found.length > 0) {
        const push = badges.push;
        const items = [];
        HermesBuiltin.arraySpread(found, 0);
        HermesBuiltin.apply(items, badges);
      }
    }
    obj = {};
    const merged = Object.assign(value);
    obj.badges = badges;
    const result = map1.set(userId, obj);
  }
}
function handleUserUpdate(user) {
  const id = user.user.id;
  value = map.get(id);
  let num;
  if (value != null) {
    num = value.size;
  }
  if (num == null) {
    num = 0;
  }
  let tmp2 = num <= 0;
  if (tmp2) {
    tmp2 = resetProfileFetch(id);
  }
  return tmp2;
}
function handleGuildStatusChange() {
  const items = [...map1.keys()];
  return items.reduce((acc, item) => resetProfileFetch(item) || acc, false);
}
function handleGuildMemberStatusChange(user) {
  return resetProfileFetch(user.user.id);
}
function handleRelationshipStatusChange(relationship) {
  return resetProfileFetch(relationship.relationship.id);
}
function handleLocaleStoreChange() {
  map.clear();
  set.clear();
  map1.clear();
  map2.clear();
}
function resetProfileFetch(id) {
  if (null == id) {
    return false;
  } else {
    value = map1.get(id);
    if (null == value) {
      return false;
    } else {
      value.fetchStartedAt = 0;
      value.fetchEndedAt = 0;
      value.fetchError = undefined;
      value = map2.get(id);
      if (null != value) {
        const values = value.values();
        for (const item10012 of values) {
          item10012.fetchStartedAt = 0;
          item10012.fetchEndedAt = 0;
          item10012.fetchError = undefined;
          continue;
        }
      }
    }
  }
}
const MAX_TIMEOUT_MS = fn(1074).MAX_TIMEOUT_MS;
let closure_10 = Symbol("NO GUILD ID");
let map = new Map();
let set = new Set();
const map1 = new Map();
const map2 = new Map();
let closure_15 = {};
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
let closure_19 = [];
let closure_20 = [];
let c23 = false;
let UserProfileStore;
class UserProfileStore extends tmp2 {
  constructor() {
    closure_0 = undefined;
    obj = {
      CACHE_LOADED_LAZY() {
            return closure_0.loadCache();
          },
      USER_PROFILE_FETCH_START: handleProfileFetchStart,
      USER_PROFILE_FETCH_FAILURE: handleProfileFetchFailure,
      USER_PROFILE_FETCH_SUCCESS: handleProfileFetch,
      USER_PROFILE_UPDATE_START: handleProfileUpdateStart,
      USER_PROFILE_UPDATE_SUCCESS: handleProfileUpdateSuccess,
      USER_PROFILE_UPDATE_FAILURE: handleProfileUpdateFailure,
      WIDGET_PENDING_SAVE_SUCCESS: handleWidgetsUpdateSuccess,
      USER_PROFILE_PIN_BADGES_ON_CLIENT: handlePinBadgesToProfile,
      MUTUAL_FRIENDS_FETCH_START: handleMutualFriendsFetchStart,
      MUTUAL_FRIENDS_FETCH_SUCCESS: handleMutualFriendsFetchSuccess,
      MUTUAL_FRIENDS_FETCH_FAILURE: handleMutualFriendsFetchFailure,
      USER_UPDATE: handleUserUpdate,
      GUILD_MEMBER_UPDATE: handleUserUpdate,
      GUILD_JOIN: handleGuildStatusChange,
      GUILD_DELETE: handleGuildStatusChange,
      INVITE_ACCEPT_SUCCESS: handleGuildStatusChange,
      GUILD_MEMBER_ADD: handleGuildMemberStatusChange,
      GUILD_MEMBER_REMOVE: handleGuildMemberStatusChange,
      RELATIONSHIP_ADD: handleRelationshipStatusChange,
      RELATIONSHIP_REMOVE: handleRelationshipStatusChange,
      RELATIONSHIP_UPDATE: handleRelationshipStatusChange,
      LOGOUT: handleLogout
    };
    tmp = new tmp(obj, handleRelationshipStatusChange, new.target, tmp);
    closure_0 = tmp;
    tmp.loadCache = function loadCache() {
      const snapshot = closure_0.readSnapshot(UserProfileStore.LATEST_SNAPSHOT_VERSION);
      if (null != snapshot) {
        const item = snapshot.forEach((item) => {
          ({ userId, profile } = item);
          if (null != userId) {
            if (null != profile) {
              obj = {};
              const merged = Object.assign(profile);
              const widgets = profile.widgets;
              let found;
              if (widgets != null) {
                const mapped = widgets.map(closure_1_22);
                found = mapped.filter(closure_1_0(closure_1_2[14]).isNotNullish);
              }
              obj.widgets = found;
              const result = map.set(userId, obj);
            } else {
              map.delete(userId);
            }
          }
        });
      }
    };
    return tmp;
  }
}
const prototype = UserProfileStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(SortedGuildStore);
  const items = [LocaleStore];
  this.syncWith(items, handleLocaleStoreChange);
};
prototype["isFetchingProfile"] = function isFetchingProfile(id, guildId) {
  value = map.get(id);
  let hasItem = null != value;
  if (hasItem) {
    let tmp2 = guildId;
    if (guildId == null) {
      tmp2 = closure_10;
    }
    hasItem = value.has(tmp2);
  }
  return hasItem;
};
prototype["isFetchingFriends"] = function isFetchingFriends(id) {
  return set.has(id);
};
Object.defineProperty(prototype, "isSubmitting", {
  get: function isSubmitting() {
    return c23;
  },
  set: undefined
});
prototype["getUserProfile"] = function getUserProfile(id) {
  return map1.get(id);
};
prototype["getGuildMemberProfile"] = function getGuildMemberProfile(id, guildId) {
  let tmp = null;
  if (null != guildId) {
    map2.get(id);
    value = undefined;
    if (value != null) {
      value = value.get(guildId);
    }
    if (value == null) {
      value = null;
    }
    tmp = value;
  }
  return tmp;
};
prototype["getMutualFriends"] = function getMutualFriends(id) {
  return map3.get(id);
};
prototype["getMutualFriendsCount"] = function getMutualFriendsCount(userId) {
  return map4.get(userId);
};
prototype["getMutualGuilds"] = function getMutualGuilds(id) {
  return map5.get(id);
};
prototype["getWidgets"] = function getWidgets(arg0) {
  value = map1.get(arg0);
  let widgets;
  if (value != null) {
    widgets = value.widgets;
  }
  return widgets;
};
prototype["getWishlistIds"] = function getWishlistIds(id) {
  value = map1.get(id);
  let wishlistSettings;
  if (value != null) {
    wishlistSettings = value.wishlistSettings;
  }
  if (null != wishlistSettings) {
    const _Object = Object;
    let keys = Object.keys(value.wishlistSettings);
  } else {
    keys = [];
  }
  return keys;
};
prototype["getFirstWishlistId"] = function getFirstWishlistId(id) {
  if (null == id) {
    return null;
  } else {
    const self = this;
    const wishlistIds = this.getWishlistIds(id);
    let first = null;
    if (wishlistIds.length > 0) {
      first = wishlistIds[0];
    }
    return first;
  }
};
prototype["getWishlistSettings"] = function getWishlistSettings(userId, wishlistId) {
  value = map1.get(userId);
  let tmp2;
  if (value != null) {
    const wishlistSettings = value.wishlistSettings;
    if (wishlistSettings != null) {
      tmp2 = wishlistSettings[wishlistId];
    }
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  return tmp2;
};
prototype["takeSnapshot"] = function takeSnapshot() {
  const id = AuthenticationStore.getId();
  value = map1.get(id);
  if (null != value) {
    obj = { version: UserProfileStore.LATEST_SNAPSHOT_VERSION, data: null };
    obj = { userId: id, profile: value };
    const items = [obj];
    obj.data = items;
  } else {
    obj = { version: UserProfileStore.LATEST_SNAPSHOT_VERSION, data: [] };
  }
  return obj;
};
UserProfileStore.displayName = "UserProfileStore";
UserProfileStore.LATEST_SNAPSHOT_VERSION = 1;
const userProfileStore = new UserProfileStore();
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/UserProfileStore.tsx");

export default userProfileStore;