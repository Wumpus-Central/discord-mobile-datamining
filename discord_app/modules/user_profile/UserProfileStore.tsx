// === Module 7111: UserProfileStore ===

// Module 7111 (UserProfileStore)
import _modDef12 from "module_12" /* 12 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import Timers from "Timers" /* 2046 */;
import WidgetType from "WidgetType" /* 7112 */;
import UserProfileGameWidgetTypes from "UserProfileGameWidgetTypes" /* 7113 */;
import UserProfileApplicationWidgetTypes from "UserProfileApplicationWidgetTypes" /* 7115 */;
import UserProfilePersonalWidget2 from "UserProfilePersonalWidget" /* 7116 */;
import UserProfileClipsGalleryWidgetTypes from "UserProfileClipsGalleryWidgetTypes" /* 7118 */;
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7119 */;
import parseUserProfileCollectiblesDefault from "parseUserProfileCollectibles" /* 7120 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserRecord from "UserRecord" /* 1391 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 2074 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1084 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c24, set2, set3;

const f94239 = (user) => {
  const str = user.user.username;
  return str.toLowerCase();
};
function createUserWidgetFromServer(data) {
  let mapped;
  let str;
  let tmpResult;
  const type = data.data.type;
  if (WidgetType.WidgetType.CURRENT_GAMES !== type) {
    if (WidgetType.WidgetType.FAVORITE_GAMES !== type) {
      if (WidgetType.WidgetType.PLAYED_GAMES !== type) {
        if (WidgetType.WidgetType.WANT_TO_PLAY_GAMES !== type) {
          if (WidgetType.WidgetType.APPLICATION === type) {
            const self5 = this;
            const self6 = this;
            const obj2 = { id: data.id, applicationId: data.data.application_id };
            const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget(obj2);
            return applicationWidget;
          } else if (WidgetType.WidgetType.PERSONAL === type) {
            const obj3 = { id: data.id, header: str, sections: tmpResult.parsePersonalWidgetSections(data.data.sections) };
            str = data.data.header;
            const UserProfilePersonalWidget = UserProfilePersonalWidget2.UserProfilePersonalWidget;
            if (str == null) {
              str = "";
            }
            const self3 = this;
            const self4 = this;
            tmpResult = UserProfilePersonalWidget2;
            const userProfilePersonalWidget = new UserProfilePersonalWidget(obj3);
            return userProfilePersonalWidget;
          } else if (WidgetType.WidgetType.CLIPS_GALLERY === type) {
            obj = { id: data.id, clips: mapped.filter(GlobalUtils.isNotNullish) };
            const clips = data.data.clips;
            const ClipsGalleryWidget = UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget;
            mapped = clips.map((id) => {
              let local_clip_id;
              let title;
              let tmp = null;
              if (null != id.id) {
                tmp = null;
                if (null != id.file_id) {
                  obj = { status: "saved", id: null, fileId: null, gameId: null, title, tags: null, localClipId: local_clip_id, videoURL: null, thumbnailURL: null, spritesheetImageURL: null, spritesheetVttURL: null };
                  ({ id: obj.id, file_id: obj.fileId, game_id: obj.gameId, title } = id);
                  ({ tags: obj.tags, local_clip_id } = id);
                  ({ video_url: obj.videoURL, thumbnail_url: obj.thumbnailURL, spritesheet_image_url: obj.spritesheetImageURL, spritesheet_vtt_url: obj.spritesheetVttURL } = id);
                  tmp = obj;
                }
              }
              return tmp;
            });
            const self = this;
            const self2 = this;
            const clipsGalleryWidget = new ClipsGalleryWidget(obj);
            return clipsGalleryWidget;
          }
        }
      }
    }
  }
  const games = data.data.games;
  const mapped1 = games.map((gameId) => ({ gameId: gameId.game_id, comment: gameId.comment, tags: gameId.tags }));
  const obj5 = _modDef12;
  const obj4 = { id: data.id, type, games: obj5.uniqBy(mapped1, "gameId") };
  const baseGameWidget = new UserProfileGameWidgetTypes.BaseGameWidget(obj4);
  return baseGameWidget;
}
function createUserWidgetFromSnapshot(type) {
  let applicationId;
  let clips;
  let games;
  let header;
  let id;
  let id2;
  let id3;
  let id4;
  let sections;
  let type3;
  type = type.type;
  if (WidgetType.WidgetType.CURRENT_GAMES !== type) {
    if (WidgetType.WidgetType.FAVORITE_GAMES !== type) {
      if (WidgetType.WidgetType.PLAYED_GAMES !== type) {
        if (WidgetType.WidgetType.WANT_TO_PLAY_GAMES !== type) {
          if (WidgetType.WidgetType.APPLICATION === type) {
            ({ id: id3, applicationId } = type);
            const self5 = this;
            const self6 = this;
            const obj2 = { id: id3, applicationId };
            const applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget(obj2);
            return applicationWidget;
          } else if (WidgetType.WidgetType.PERSONAL === type) {
            ({ id: id2, header, sections } = type);
            const self3 = this;
            const self4 = this;
            const obj3 = { id: id2, header, sections };
            const userProfilePersonalWidget = new UserProfilePersonalWidget2.UserProfilePersonalWidget(obj3);
            return userProfilePersonalWidget;
          } else if (WidgetType.WidgetType.CLIPS_GALLERY === type) {
            ({ id, clips } = type);
            const self = this;
            const self2 = this;
            obj = { id, clips };
            const clipsGalleryWidget = new UserProfileClipsGalleryWidgetTypes.ClipsGalleryWidget(obj);
            return clipsGalleryWidget;
          } else {
            const type2 = type.type;
          }
        }
      }
    }
  }
  ({ id: id4, type: type3, games } = type);
  const obj4 = { id: id4, type: type3, games };
  const baseGameWidget = new UserProfileGameWidgetTypes.BaseGameWidget(obj4);
  return baseGameWidget;
}
function checkUserProfileCollectiblesExpiration(id, guild_id) {
  let value5;
  let closure_0 = id;
  let closure_1 = guild_id;
  if (null != guild_id) {
    const value = map2.get(id);
    let value4;
    if (value != null) {
      value4 = value.get(guild_id);
    }
    value5 = value4;
  } else {
    value5 = map1.get(id);
  }
  let collectibles;
  if (value5 != null) {
    collectibles = value5.collectibles;
  }
  if (null != collectibles) {
    const items = [];
    const collectibles1 = value5.collectibles;
    const item = collectibles1.forEach(function(expiresAt) {
      if (null != expiresAt.expiresAt) {
        expiresAt = expiresAt.expiresAt;
        const _Date = Date;
        const time = expiresAt.getTime();
        const diff = time - Date.now();
        if (diff <= 0) {
          items.push(expiresAt);
        } else {
          if (null == closure_15[id]) {
            obj = {};
            obj[closure_10] = {};
            closure_15[id] = obj;
          }
          let tmp3 = guild_id;
          let tmp4 = guild_id;
          const tmp2 = closure_15[id];
          if (guild_id == null) {
            tmp4 = closure_10;
          }
          if (null == tmp2[tmp4]) {
            let tmp6 = tmp3;
            const tmp5 = closure_15[id];
            if (tmp3 == null) {
              tmp6 = closure_10;
            }
            tmp5[tmp6] = {};
          }
          let tmp8 = tmp3;
          const tmp7 = closure_15[id];
          if (tmp3 == null) {
            tmp8 = closure_10;
          }
          if (null == tmp7[tmp8][expiresAt.skuId]) {
            let tmp10 = tmp3;
            const tmp9 = closure_15[id];
            if (tmp3 == null) {
              tmp10 = closure_10;
            }
            const skuId = expiresAt.skuId;
            const self = this;
            const self2 = this;
            const tmp11 = tmp9[tmp10];
            const timeout = new Timers.Timeout();
            tmp11[skuId] = timeout;
          }
          const tmp16 = closure_15[id];
          if (tmp3 == null) {
            tmp3 = closure_10;
          }
          const _Math = Math;
          const obj2 = tmp16[tmp3][expiresAt.skuId];
          obj2.start(Math.min(MAX_TIMEOUT_MS, diff), () => {
            checkUserProfileCollectiblesExpiration(id, guild_id);
          });
        }
      }
    });
    if (0 !== items.length) {
      const collectibles2 = value5.collectibles;
      value5.collectibles = collectibles2.filter((item) => !items.includes(item));
      const item1 = items.forEach((type) => {
        if (type.type === CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT) {
          value5.profileEffect = undefined;
        } else if (type.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME) {
          value5.profileFrame = undefined;
        }
        if (closure_15[id] != null) {
          let tmp6 = guild_id;
          if (guild_id == null) {
            tmp6 = closure_10;
          }
          if (closure_15[id][tmp6] != null) {
            delete closure_15[id][tmp6][type.skuId];
          }
        }
      });
      if ("guildId" in value5) {
        const value6 = map2.get(id);
        if (value6 != null) {
          const result = value6.set(value5.guildId, value5);
        }
      } else {
        const result1 = map1.set(id, value5);
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
  let mutualFriends;
  set.delete(userId.userId);
  ({ userId, mutualFriends } = userId);
  const arr = _modDef12(mutualFriends);
  const mapped = arr.map((id) => {
    let obj2;
    let obj3;
    obj = { key: id.id, user: new UserRecord(obj2), status: status.getStatus(id.id) };
    obj2 = { collectibles: obj3.parseServerUserCollectibles(id.collectibles) };
    const merged = Object.assign(id);
    obj3 = closure_0(date1[17]);
    new UserRecord(obj2);
    return obj;
  });
  const iter = mapped.sortBy(f94239);
  const result = set(userId, iter.value());
  const result1 = map4.set(userId.userId, userId.mutualFriends.length);
}
function handleProfileFetch(arg0) {
  let accent_color;
  let banner;
  let closure_0;
  let fetchStartedAt;
  let found2;
  let found3;
  let guildId;
  let mapped1;
  let prop;
  let prop1;
  let prop2;
  let status;
  let str;
  let str2;
  let theme_colors;
  let theme_colors1;
  let tmp38;
  let userProfile;
  ({ userProfile, fetchStartedAt, guildId } = arg0);
  _require = undefined;
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
  const value = map.get(userProfile.user.id);
  if (value != null) {
    value.delete(guildId);
  }
  set.delete(userProfile.user.id);
  if (null != userProfile.mutual_guilds) {
    _require = {};
    const mutual_guilds = userProfile.mutual_guilds;
    const item = mutual_guilds.forEach((id) => {
      id = id.id;
      const nick = id.nick;
      const guild = GuildStore.getGuild(id);
      if (null != guild) {
        obj = { guild, nick };
        closure_0[id] = obj;
      }
    });
    let id = userProfile.user.id;
    const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
    const found = flattenedGuildIds.filter((item) => null != closure_0[item]);
    const result = set(id, found.map((item) => ({ guild: closure_0[item].guild, nick: closure_0[item].nick })));
  }
  if (null != userProfile.mutual_friends_count) {
    const mutual_friends_count = userProfile.mutual_friends_count;
    const result1 = map4.set(userProfile.user.id, mutual_friends_count);
    if (0 === mutual_friends_count) {
      const result2 = map3.set(userProfile.user.id, closure_19);
    }
  }
  if (null != userProfile.mutual_friends) {
    const id3 = userProfile.user.id;
    set3 = map3.set;
    const arr13 = date(date1[9])(userProfile.mutual_friends);
    const mapped = arr13.map((id) => {
      let obj2;
      let obj3;
      obj = { key: id.id, user: new UserRecord(obj2), status: status.getStatus(id.id) };
      obj2 = { collectibles: obj3.parseServerUserCollectibles(id.collectibles) };
      const merged = Object.assign(id);
      obj3 = closure_0(date1[17]);
      new UserRecord(obj2);
      return obj;
    });
    const iter = mapped.sortBy(f94239);
    set3(id3, iter.value());
    const result3 = map4.set(userProfile.user.id, userProfile.mutual_friends.length);
  }
  date = null;
  if (null != userProfile.premium_since) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(userProfile.premium_since);
  }
  date1 = null;
  if (null != userProfile.premium_guild_since) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date1 = new Date(userProfile.premium_guild_since);
  }
  const application = userProfile.application;
  if (null != userProfile.badges) {
    const badges = userProfile.badges;
    mapped1 = badges.map((id) => {
      let intl;
      let obj6;
      obj = TieredTenureBadgeUtils;
      const tieredTenureBadgeData = obj.getTieredTenureBadgeData(id.id);
      if ("premium" === id.id) {
        if (null != date) {
          const intl2 = intl4.intl;
          const obj2 = { date };
          let formatToPlainStringResult = intl2.formatToPlainString(intl4.t["8zbGNR"], obj2);
          if (null != tieredTenureBadgeData) {
            const intl3 = intl4.intl;
            const obj3 = { date };
            formatToPlainStringResult = intl3.formatToPlainString(intl4.t.Hu4jfi, obj3);
          }
          const obj4 = { description: formatToPlainStringResult };
          const merged = Object.assign(id);
          return obj4;
        }
      }
      id = id.id;
      let tmp7 = id;
      if (id.startsWith("guild_booster_lvl")) {
        tmp7 = id;
        if (null != date1) {
          const obj5 = { description: intl.formatToPlainString(intl4.t.IWkAq7, obj6) };
          const merged1 = Object.assign(id);
          intl = intl4.intl;
          tmp7 = obj5;
          obj6 = { date: tmp8 };
        }
      }
      return tmp7;
    });
  } else {
    mapped1 = [];
  }
  const tmp17 = null != c24 && c24.userId === userProfile.user.id;
  if (tmp17) {
    const _Date3 = Date;
    if (Date.now() > c24.expiresAtMs) {
      c24 = null;
    } else if (null != mapped1) {
      const _Set = Set;
      const self7 = this;
      const self8 = this;
      let found1;
      new Set(mapped1.map((id) => id.id));
      if (c24 != null) {
        const badges1 = tmp58.badges;
        found1 = badges1.filter((id) => !set1.has(id.id));
      }
      if (found1.length > 0) {
        const push = mapped1.push;
        const items = [];
        HermesBuiltin.arraySpread(items, found1, 0);
        HermesBuiltin.apply(push, items, mapped1);
      }
    }
  }
  const timestamp = Date.now();
  obj = { userId: userProfile.user.id, banner, accentColor: accent_color, themeColors: theme_colors, popoutAnimationParticleType: prop, bio: str, pronouns: str2, connectedAccounts: found2, applicationRoleConnections: prop1, premiumSince: date, premiumType: userProfile.premium_type, premiumGuildSince: date1, fetchStartedAt, fetchEndedAt: timestamp, legacyUsername: userProfile.legacy_username, application: tmp38, badges: mapped1, widgets: found3 };
  const id2 = userProfile.user.id;
  set2 = map1.set;
  let merged = Object.assign(date(date1[20])(userProfile.user_profile));
  const user_profile = userProfile.user_profile;
  banner = undefined;
  const tmp31 = date;
  if (user_profile != null) {
    banner = user_profile.banner;
  }
  const user_profile2 = userProfile.user_profile;
  accent_color = undefined;
  if (user_profile2 != null) {
    accent_color = user_profile2.accent_color;
  }
  const user_profile3 = userProfile.user_profile;
  theme_colors = undefined;
  if (user_profile3 != null) {
    theme_colors = user_profile3.theme_colors;
  }
  const user_profile4 = userProfile.user_profile;
  prop = undefined;
  if (user_profile4 != null) {
    prop = user_profile4.popout_animation_particle_type;
  }
  const user_profile5 = userProfile.user_profile;
  str = undefined;
  if (user_profile5 != null) {
    str = user_profile5.bio;
  }
  if (str == null) {
    str = "";
  }
  const user_profile6 = userProfile.user_profile;
  str2 = undefined;
  if (user_profile6 != null) {
    str2 = user_profile6.pronouns;
  }
  if (str2 == null) {
    str2 = "";
  }
  const connected_accounts = userProfile.connected_accounts;
  found2 = connected_accounts.filter((type) => {
    obj = date(date1[21]);
    return obj.isSupported(type.type);
  });
  if (found2 == null) {
    found2 = [];
  }
  prop1 = userProfile.application_role_connections;
  if (prop1 == null) {
    prop1 = [];
  }
  tmp38 = null;
  if (null != application) {
    let obj5 = { id: null, primarySkuId: null, customInstallUrl: null, installParams: null, integrationTypesConfig: null, flags: null, embeddedSurfaces: null, popularApplicationCommandIds: null, storefront_available: null, name: null, termsOfServiceUrl: null, privacyPolicyUrl: null };
    ({ id: obj3.id, primary_sku_id: obj3.primarySkuId, custom_install_url: obj3.customInstallUrl, install_params: obj3.installParams, integration_types_config: obj3.integrationTypesConfig, flags: obj3.flags, embedded_surfaces: obj3.embeddedSurfaces, popular_application_command_ids: obj3.popularApplicationCommandIds, storefront_available: obj3.storefront_available, name: obj3.name, terms_of_service_url: obj3.termsOfServiceUrl, privacy_policy_url: obj3.privacyPolicyUrl } = application);
    tmp38 = obj5;
  }
  const widgets = userProfile.widgets;
  found3 = undefined;
  if (widgets != null) {
    const mapped2 = widgets.map(createUserWidgetFromServer);
    found3 = mapped2.filter(require("GlobalUtils").isNotNullish);
  }
  ({ wishlist_settings: obj2.wishlistSettings, private: obj2.private } = userProfile);
  set2(id2, obj);
  checkUserProfileCollectiblesExpiration(userProfile.user.id);
  if (null != userProfile.guild_member_profile) {
    let obj6 = { userId: userProfile.user.id, guildId: userProfile.guild_member_profile.guild_id, banner: userProfile.guild_member_profile.banner, accentColor: userProfile.guild_member_profile.accent_color, themeColors: theme_colors1, popoutAnimationParticleType: prop2, bio: userProfile.guild_member_profile.bio, pronouns: userProfile.guild_member_profile.pronouns, badges: userProfile.guild_badges, fetchStartedAt, fetchEndedAt: timestamp };
    let merged1 = Object.assign(tmp31(tmp32[20])(userProfile.guild_member_profile));
    const guild_member_profile3 = userProfile.guild_member_profile;
    theme_colors1 = undefined;
    if (guild_member_profile3 != null) {
      theme_colors1 = guild_member_profile3.theme_colors;
    }
    const guild_member_profile2 = userProfile.guild_member_profile;
    prop2 = undefined;
    if (guild_member_profile2 != null) {
      prop2 = guild_member_profile2.popout_animation_particle_type;
    }
    const value2 = map2.get(userProfile.user.id);
    if (null != value2) {
      const result4 = value2.set(userProfile.guild_member_profile.guild_id, obj6);
    } else {
      const _Map = Map;
      const self5 = this;
      const self6 = this;
      map = new Map();
      const result5 = map.set(userProfile.guild_member_profile.guild_id, obj6);
      const result6 = map2.set(userProfile.user.id, map);
    }
    checkUserProfileCollectiblesExpiration(userProfile.user.id, userProfile.guild_member_profile.guild_id);
  }
}
function handleProfileFetchStart(withMutualFriends) {
  let guildId;
  let userId;
  ({ userId, guildId } = withMutualFriends);
  withMutualFriends = withMutualFriends.withMutualFriends;
  if (guildId == null) {
    guildId = closure_10;
  }
  const value = map.get(userId);
  if (null != value) {
    value.add(guildId);
  } else {
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    set.add(guildId);
    const result = map.set(userId, set);
  }
  if (withMutualFriends) {
    set.add(userId);
  }
}
function handleProfileFetchFailure(arg0) {
  let apiError;
  let fetchStartedAt;
  let guildId;
  let userId;
  ({ userId, guildId, apiError, fetchStartedAt } = arg0);
  const value = map.get(userId);
  if (value != null) {
    let tmp2 = guildId;
    const _delete = value.delete;
    if (guildId == null) {
      tmp2 = closure_10;
    }
    _delete(tmp2);
  }
  set.delete(userId);
  let value4 = map1.get(userId);
  if (value4 == null) {
    value4 = { connectedAccounts: [], applicationRoleConnections: [], premiumSince: null, premiumGuildSince: null, application: null, legacyUsername: null, userId, banner: null, accentColor: null, bio: "", pronouns: "", premiumType: null, fetchStartedAt: 0, fetchEndedAt: 0, fetchError: "unicodeVersion" };
    const obj2 = { connectedAccounts: [], applicationRoleConnections: [], premiumSince: null, premiumGuildSince: null, application: null, legacyUsername: null, userId, banner: null, accentColor: null, bio: "", pronouns: "", premiumType: null, fetchStartedAt: 0, fetchEndedAt: 0, fetchError: "unicodeVersion" };
  }
  const timestamp = Date.now();
  value4.fetchStartedAt = fetchStartedAt;
  value4.fetchEndedAt = timestamp;
  value4.fetchError = apiError;
  const result = map1.set(userId, value4);
  if (null != guildId) {
    const value5 = map2.get(userId);
    let value6;
    if (value5 != null) {
      value6 = value5.get(guildId);
    }
    if (null != value6) {
      value6.fetchStartedAt = fetchStartedAt;
      value6.fetchEndedAt = timestamp;
      value6.fetchError = apiError;
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
  let accent_color;
  let accent_color2;
  let banner;
  let banner2;
  let bio;
  let bio2;
  let collectibles;
  let collectibles2;
  let popout_animation_particle_type;
  let popout_animation_particle_type2;
  let pronouns;
  let pronouns2;
  let theme_colors;
  let theme_colors2;
  let userId;
  c23 = false;
  if (null != guild_id.guild_id) {
    ({ userId, guild_id } = guild_id);
    ({ accent_color, banner, bio, pronouns, popout_animation_particle_type, theme_colors, collectibles } = guild_id);
    const value = map2.get(userId);
    if (null != guild_id) {
      if (null != value) {
        const value3 = value.get(guild_id);
        if (null != value3) {
          obj = { accentColor: accent_color, banner, bio, pronouns, popoutAnimationParticleType: popout_animation_particle_type, themeColors: theme_colors };
          set = value.set;
          const merged = Object.assign(value3);
          const obj2 = { collectibles };
          const merged1 = Object.assign(parseUserProfileCollectiblesDefault(obj2));
          const result = set(guild_id, obj);
          checkUserProfileCollectiblesExpiration(userId, guild_id);
        }
      }
    }
  } else {
    const userId2 = guild_id.userId;
    ({ accent_color: accent_color2, banner: banner2, bio: bio2, pronouns: pronouns2, popout_animation_particle_type: popout_animation_particle_type2, theme_colors: theme_colors2, collectibles: collectibles2 } = guild_id);
    const value4 = map1.get(userId2);
    if (null != value4) {
      const obj3 = { accentColor: accent_color2, banner: banner2, bio: bio2, pronouns: pronouns2, popoutAnimationParticleType: popout_animation_particle_type2, themeColors: theme_colors2 };
      set2 = map1.set;
      const merged2 = Object.assign(value4);
      const obj4 = { collectibles: collectibles2 };
      const merged3 = Object.assign(parseUserProfileCollectiblesDefault(obj4));
      set2(userId2, obj3);
      checkUserProfileCollectiblesExpiration(userId2);
    }
  }
}
function handleProfileUpdateFailure() {
  c23 = false;
}
function handleWidgetsUpdateSuccess(arg0) {
  let mapped;
  let userId;
  let widgets;
  ({ userId, widgets } = arg0);
  const value = map1.get(userId);
  if (null == value) {
    return false;
  } else {
    obj = { widgets: mapped.filter(GlobalUtils.isNotNullish) };
    set = map1.set;
    const merged = Object.assign(value);
    mapped = widgets.map(createUserWidgetFromServer);
    const result = set(userId, obj);
  }
}
function handlePinBadgesToProfile(badges) {
  const userId = badges.userId;
  obj = { userId, badges: badges.badges, expiresAtMs: Date.now() + 1000 * badges.ttlInSeconds };
  const value = map1.get(userId);
  if (null != value) {
    badges = value.badges;
    if (badges == null) {
      badges = [];
    }
    if (null != badges) {
      const _Set = Set;
      let found;
      const self = this;
      const self2 = this;
      const set1 = new Set(badges.map((id) => id.id));
      if (obj != null) {
        const badges1 = tmp3.badges;
        found = badges1.filter((id) => !set1.has(id.id));
      }
      if (found.length > 0) {
        const push = badges.push;
        const items = [];
        HermesBuiltin.arraySpread(items, found, 0);
        HermesBuiltin.apply(push, items, badges);
      }
    }
    const obj2 = { badges };
    set = map1.set;
    const merged = Object.assign(value);
    const result = set(userId, obj2);
  }
}
function handleUserUpdate(user) {
  const id = user.user.id;
  const value = map.get(id);
  let num;
  if (value != null) {
    num = value.size;
  }
  if (num == null) {
    num = 0;
  }
  const tmp2 = num <= 0 && resetProfileFetch(id);
  return tmp2;
}
function handleGuildStatusChange() {
  const items = [...map1.keys()];
  return items.reduce((acc, item) => {
    const tmp = resetProfileFetch(item) || acc;
    return tmp;
  }, false);
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
    const value = map1.get(id);
    if (null == value) {
      return false;
    } else {
      value.fetchStartedAt = 0;
      value.fetchEndedAt = 0;
      value.fetchError = undefined;
      const value2 = map2.get(id);
      if (null != value2) {
        const values = value2.values();
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
const MAX_TIMEOUT_MS = Constants.MAX_TIMEOUT_MS;
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
let obj = null;
class UserProfileStore extends MobileCacheSnapshotStore {
  constructor() {
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
    const tmp2 = new tmp(obj, handleRelationshipStatusChange, new.target, tmp);
    let closure_0 = tmp2;
    tmp2.loadCache = function loadCache() {
      const snapshot = closure_0.readSnapshot(UserProfileStore.LATEST_SNAPSHOT_VERSION);
      if (null != snapshot) {
        const item = snapshot.forEach((item) => {
          let found;
          let profile;
          let userId;
          ({ userId, profile } = item);
          if (null != userId) {
            if (null != profile) {
              obj = { widgets: found };
              const merged = Object.assign(profile);
              const widgets = profile.widgets;
              found = undefined;
              if (widgets != null) {
                const mapped = widgets.map(closure_1_22);
                found = mapped.filter(closure_1_0(closure_1_2[14]).isNotNullish);
              }
              const result = set(userId, obj);
            } else {
              set.delete(userId);
            }
          }
        });
      }
    };
    return tmp2;
  }
  initialize() {
    this.waitFor(SortedGuildStore);
    const items = [LocaleStore];
    this.syncWith(items, handleLocaleStoreChange);
  }
  isFetchingProfile(id, guildId) {
    const value = map.get(id);
    let hasItem = null != value;
    if (hasItem) {
      let tmp3 = guildId;
      const has = value.has;
      if (guildId == null) {
        tmp3 = closure_10;
      }
      hasItem = has(tmp3);
    }
    return hasItem;
  }
  isFetchingFriends(id) {
    return set.has(id);
  }
  getUserProfile(id) {
    return map1.get(id);
  }
  getGuildMemberProfile(id, guildId) {
    let tmp = null;
    if (null != guildId) {
      const value = map2.get(id);
      let value2;
      if (value != null) {
        value2 = value.get(guildId);
      }
      if (value2 == null) {
        value2 = null;
      }
      tmp = value2;
    }
    return tmp;
  }
  getMutualFriends(id) {
    return map3.get(id);
  }
  getMutualFriendsCount(userId) {
    return map4.get(userId);
  }
  getMutualGuilds(id) {
    return map5.get(id);
  }
  getWidgets(arg0) {
    const value = map1.get(arg0);
    let widgets;
    if (value != null) {
      widgets = value.widgets;
    }
    return widgets;
  }
  getWishlistIds(id) {
    let keys;
    const value = map1.get(id);
    let wishlistSettings;
    if (value != null) {
      wishlistSettings = value.wishlistSettings;
    }
    if (null != wishlistSettings) {
      const _Object = Object;
      keys = Object.keys(value.wishlistSettings);
    } else {
      keys = [];
    }
    return keys;
  }
  getFirstWishlistId(id) {
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
  }
  getWishlistSettings(userId, wishlistId) {
    const value = map1.get(userId);
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
  }
  takeSnapshot() {
    let items;
    const id = AuthenticationStore.getId();
    const value = map1.get(id);
    if (null != value) {
      const obj2 = { version: UserProfileStore.LATEST_SNAPSHOT_VERSION, data: items };
      items = [{ userId: id, profile: value }];
      obj = obj2;
      const obj3 = { userId: id, profile: value };
    } else {
      obj = { version: UserProfileStore.LATEST_SNAPSHOT_VERSION, data: [] };
    }
    return obj;
  }
}
Object.defineProperty(UserProfileStore.prototype, "isSubmitting", {
  get: function isSubmitting() {
    return c23;
  },
  set: undefined
});
UserProfileStore.displayName = "UserProfileStore";
UserProfileStore.LATEST_SNAPSHOT_VERSION = 1;
const userProfileStore = new UserProfileStore();
let result = size.fileFinishedImporting("modules/user_profile/UserProfileStore.tsx");

export default userProfileStore;