// === Module 5525: getEmoji ===

// Module 5525 (getEmoji)
import set from "set" /* 2 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import parseRawEmojiObjectDefault from "parseRawEmojiObject" /* 4103 */;
import getEmojiToGroupId from "getEmojiToGroupId" /* 5366 */;
import MAX_TRAITS from "MAX_TRAITS" /* 5526 */;
import GuildProfileVisibility from "GuildProfileVisibility" /* 5527 */;

function getEmoji(guildId) {
  ({ emojiId, emojiName } = guildId);
  const value = EmojiDisambiguations.get(guildId.guildId);
  let byId = null;
  if (null == emojiId) {
    if (byId == emojiName) {
      return null;
    }
  }
  if (byId != emojiId) {
    byId = null;
    if (tmp6) {
      byId = value.getById(emojiId);
    }
    let byName = byId;
    tmp6 = byId != value;
  } else {
    byName = null;
    if (byId != emojiName) {
      byName = parseRawEmojiObjectDefault.getByName(emojiName);
      const obj2 = parseRawEmojiObjectDefault;
    }
  }
}
function buildGuildProfileTraitsFromServer(arg0, arg1) {
  const array = new Array(MAX_TRAITS.MAX_TRAITS);
  const fillResult = array.fill(closure_5);
  const iter = arg1[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp4 = nextResult.position < 0;
    if (!tmp4) {
      let tmp5 = nextResult;
      let tmp6 = require;
      let tmp7 = dependencyMap;
      tmp4 = tmp3.position >= MAX_TRAITS.MAX_TRAITS;
    }
    if (!tmp4) {
      let tmp8 = nextResult;
      let obj = { label: null, emoji: null };
      obj[0] = tmp3.label;
      let tmp9 = getEmoji;
      obj = { guildId: null, emojiId: null, emojiName: null };
      obj[0] = arg0;
      ({ emoji_id: obj3[1], emoji_name: obj3[2], position } = tmp3);
      let tmp10 = getEmoji(obj);
      obj[1] = tmp10;
      fillResult[position] = obj;
    }
    continue;
  }
  return fillResult;
}
function buildGuildProfileFromServer(profile) {
  let reduced = { id: profile.id, name: profile.name, description: null, icon: null, customBanner: null, onlineCount: null, memberCount: null, brandColorPrimary: null, visibility: null, traits: null, gameApplicationIds: null, gameActivity: null, games: null, features: null, tag: null, badge: null, badgeColorPrimary: null, badgeColorSecondary: null, badgeHash: null, premiumSubscriberCount: null, premiumTier: null };
  let str = profile.description;
  if (str == null) {
    str = "";
  }
  reduced[2] = str;
  ({ icon_hash: obj[3], custom_banner_hash: obj[4], online_count: obj[5], member_count: obj[6], brand_color_primary } = profile);
  let tmp = null;
  if (null != brand_color_primary) {
    tmp = null;
    if ("" !== brand_color_primary) {
      tmp = brand_color_primary;
    }
  }
  reduced[7] = tmp;
  ({ visibility: obj[8], traits } = profile);
  if (traits == null) {
    traits = [];
  }
  reduced[9] = buildGuildProfileTraitsFromServer(profile.id, traits);
  let game_application_ids = profile.game_application_ids;
  if (game_application_ids == null) {
    game_application_ids = [];
  }
  reduced[10] = game_application_ids;
  const game_activity = profile.game_activity;
  if (null == game_activity) {
    reduced = {};
  } else {
    const _Object = Object;
    const entries = Object.entries(game_activity);
    reduced = entries.reduce((arg0, arg1) => {
      [tmp, tmp2] = arg1;
      arg0[tmp] = { level: tmp2.activity_level, score: tmp2.activity_score };
      return arg0;
    }, {});
  }
  reduced[11] = reduced;
  ({ games: obj[12], features } = profile);
  if (features == null) {
    features = [];
  }
  reduced[13] = features;
  ({ tag: obj[14], badge: obj[15], badge_color_primary: obj[16], badge_color_secondary: obj[17], badge_hash: obj[18], premium_subscription_count: obj[19], premium_tier: obj[20] } = profile);
  return reduced;
}
const EmojiDisambiguations = getEmojiToGroupId.EmojiDisambiguations;
let closure_5 = { label: "" };
const result = set.fileFinishedImporting("modules/guild_profile/GuildProfileBuilders.tsx");

export { buildGuildProfileFromServer };
export const buildGuildProfileUpdateForServer = function buildGuildProfileUpdateForServer(name) {
  let obj = {};
  if (null != name.name) {
    obj.name = name.name;
  }
  if (null != name.description) {
    obj.description = name.description;
  }
  if (undefined !== name.icon) {
    obj.icon = name.icon;
  }
  if (undefined !== name.customBanner) {
    obj.custom_banner = name.customBanner;
  }
  if (null != name.visibility) {
    obj.visibility = name.visibility;
  }
  if (undefined !== name.brandColorPrimary) {
    obj.brand_color_primary = name.brandColorPrimary;
  }
  if (null != name.traits) {
    const traits = name.traits;
    const mapped = traits.map((label) => {
      label = undefined;
      if (label != null) {
        label = label.label;
      }
      let tmp2 = null;
      if (null != label) {
        tmp2 = null;
        if (label.label.length > 0) {
          const obj = { label: null, position: null, emoji_id: null, emoji_name: null, emoji_animated: null };
          obj[0] = label.label;
          obj[1] = arg1;
          const emoji = label.emoji;
          let id;
          if (emoji != null) {
            id = emoji.id;
          }
          obj[2] = id;
          const emoji2 = label.emoji;
          let name;
          if (emoji2 != null) {
            name = emoji2.name;
          }
          obj[3] = name;
          const emoji3 = label.emoji;
          let animated;
          if (emoji3 != null) {
            animated = emoji3.animated;
          }
          obj[4] = animated;
          tmp2 = obj;
        }
      }
      return tmp2;
    });
    obj.traits = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
  }
  if (null != name.gameApplicationIds) {
    obj.game_application_ids = name.gameApplicationIds;
  }
  if (undefined !== name.tag) {
    obj.tag = name.tag;
  }
  if (undefined !== name.badge) {
    obj.badge = name.badge;
  }
  if (undefined !== name.badgeColorPrimary) {
    obj.badge_color_primary = name.badgeColorPrimary;
  }
  if (undefined !== name.badgeColorSecondary) {
    obj.badge_color_secondary = name.badgeColorSecondary;
  }
  return obj;
};
export const buildTopGamesFromServer = function buildTopGamesFromServer(top_games) {
  return top_games.reduce((arg0, game_application_id) => {
    arg0[game_application_id.game_application_id] = { level: game_application_id.activity_level, score: game_application_id.activity_score };
    return arg0;
  }, {});
};
export const buildGuildProfileFromInvite = function buildGuildProfileFromInvite(approximate_presence_count) {
  ({ guild, profile } = approximate_presence_count);
  let tmp = null;
  if (null != profile) {
    tmp = buildGuildProfileFromServer(profile);
  }
  if (null == tmp) {
    let tmp5 = null;
    if (null != guild) {
      const obj = { id: null, name: null, description: null, icon: null, customBanner: null, onlineCount: null, memberCount: null, visibility: null, traits: null, gameApplicationIds: null, gameActivity: null, features: null, brandColorPrimary: null, tag: null, badge: null, badgeHash: null, badgeColorPrimary: null, badgeColorSecondary: null, premiumSubscriberCount: null, premiumTier: null };
      ({ id: obj[0], name: obj[1], description } = guild);
      if (description == null) {
        description = "";
      }
      obj[2] = description;
      ({ icon: obj[3], banner: obj[4], approximate_presence_count } = guild);
      if (approximate_presence_count == null) {
        approximate_presence_count = approximate_presence_count.approximate_presence_count;
      }
      if (approximate_presence_count == null) {
        approximate_presence_count = 0;
      }
      obj[5] = approximate_presence_count;
      let num = guild.approximate_member_count;
      if (num == null) {
        num = approximate_presence_count.approximate_member_count;
      }
      if (num == null) {
        num = 0;
      }
      obj[6] = num;
      obj[7] = GuildProfileVisibility.GuildProfileVisibility.NOT_SPECIFIED;
      obj[8] = [];
      obj[9] = [];
      obj[10] = {};
      let features = guild.features;
      if (features == null) {
        features = [];
      }
      obj[11] = features;
      ({ premium_subscription_count: obj[18], premium_tier: obj[19] } = guild);
      tmp5 = obj;
    }
    tmp = tmp5;
  }
  return tmp;
};