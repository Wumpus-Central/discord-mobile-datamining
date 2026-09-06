// discord_app/modules/guild_profile/GuildProfileBuilders.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import EmojiStore from "../emojis/EmojiStore.tsx";
import GuildProfileLimits from "../../../discord_common/js/shared/shared-constants/GuildProfileLimits.tsx";
import GuildProfileTypes from "GuildProfileTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getEmoji(guildId) {
  ({ emojiId, emojiName } = guildId);
  value = EmojiDisambiguations.get(guildId.guildId);
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
      byName = UnicodeEmojisDefault.getByName(emojiName);
    }
  }
}
function buildGuildProfileTraitsFromServer(guildId, traits) {
  const array = new Array(GuildProfileLimits.MAX_TRAITS);
  const fillResult = array.fill(closure_5);
  const iter = traits[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let tmp4 = nextResult.position < 0;
    if (!tmp4) {
      tmp4 = tmp3.position >= GuildProfileLimits.MAX_TRAITS;
    }
    if (!tmp4) {
      let obj = { label: tmp3.label, emoji: null };
      obj = { guildId, emojiId: null, emojiName: null };
      ({ emoji_id: obj3.emojiId, emoji_name: obj3.emojiName, position } = tmp3);
      let tmp10 = getEmoji(obj);
      obj.emoji = tmp10;
      fillResult[position] = obj;
    }
    continue;
  }
  return fillResult;
}
function buildGuildProfileFromServer(profile) {
  let reduced = {
    id: profile.id,
    name: profile.name,
    description: null,
    icon: null,
    customBanner: null,
    onlineCount: null,
    memberCount: null,
    brandColorPrimary: null,
    visibility: null,
    traits: null,
    gameApplicationIds: null,
    gameActivity: null,
    games: null,
    features: null,
    tag: null,
    badge: null,
    badgeColorPrimary: null,
    badgeColorSecondary: null,
    badgeHash: null,
    premiumSubscriberCount: null,
    premiumTier: null,
  };
  let str = profile.description;
  if (str == null) {
    str = "";
  }
  reduced.description = str;
  ({
    icon_hash: obj.icon,
    custom_banner_hash: obj.customBanner,
    online_count: obj.onlineCount,
    member_count: obj.memberCount,
    brand_color_primary,
  } = profile);
  let tmp = null;
  if (null != brand_color_primary) {
    tmp = null;
    if ("" !== brand_color_primary) {
      tmp = brand_color_primary;
    }
  }
  reduced.brandColorPrimary = tmp;
  ({ visibility: obj.visibility, traits } = profile);
  if (traits == null) {
    traits = [];
  }
  reduced.traits = buildGuildProfileTraitsFromServer(profile.id, traits);
  let game_application_ids = profile.game_application_ids;
  if (game_application_ids == null) {
    game_application_ids = [];
  }
  reduced.gameApplicationIds = game_application_ids;
  const game_activity = profile.game_activity;
  if (null == game_activity) {
    reduced = {};
  } else {
    const _Object = Object;
    const entries = Object.entries(game_activity);
    reduced = entries.reduce((acc, item) => {
      [tmp, tmp2] = item;
      acc[tmp] = { level: tmp2.activity_level, score: tmp2.activity_score };
      return acc;
    }, {});
  }
  reduced.gameActivity = reduced;
  ({ games: obj.games, features } = profile);
  if (features == null) {
    features = [];
  }
  reduced.features = features;
  ({
    tag: obj.tag,
    badge: obj.badge,
    badge_color_primary: obj.badgeColorPrimary,
    badge_color_secondary: obj.badgeColorSecondary,
    badge_hash: obj.badgeHash,
    premium_subscription_count: obj.premiumSubscriberCount,
    premium_tier: obj.premiumTier,
  } = profile);
  return reduced;
}
const EmojiDisambiguations = EmojiStore.EmojiDisambiguations;
let closure_5 = { label: "" };
const result = size.fileFinishedImporting("modules/guild_profile/GuildProfileBuilders.tsx");

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
    const mapped = traits.map((label, position) => {
      label = undefined;
      if (label != null) {
        label = label.label;
      }
      let tmp2 = null;
      if (null != label) {
        tmp2 = null;
        if (label.label.length > 0) {
          const obj = { label: label.label, position, emoji_id: null, emoji_name: null, emoji_animated: null };
          const emoji = label.emoji;
          let id;
          if (emoji != null) {
            id = emoji.id;
          }
          obj.emoji_id = id;
          const emoji2 = label.emoji;
          let name;
          if (emoji2 != null) {
            name = emoji2.name;
          }
          obj.emoji_name = name;
          const emoji3 = label.emoji;
          let animated;
          if (emoji3 != null) {
            animated = emoji3.animated;
          }
          obj.emoji_animated = animated;
          tmp2 = obj;
        }
      }
      return tmp2;
    });
    obj.traits = mapped.filter(GlobalUtils.isNotNullish);
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
  return top_games.reduce((acc, game_application_id) => {
    acc[game_application_id.game_application_id] = {
      level: game_application_id.activity_level,
      score: game_application_id.activity_score,
    };
    return acc;
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
      const obj = {
        id: null,
        name: null,
        description: null,
        icon: null,
        customBanner: null,
        onlineCount: null,
        memberCount: null,
        visibility: null,
        traits: null,
        gameApplicationIds: null,
        gameActivity: null,
        features: null,
        brandColorPrimary: null,
        tag: null,
        badge: null,
        badgeHash: null,
        badgeColorPrimary: null,
        badgeColorSecondary: null,
        premiumSubscriberCount: null,
        premiumTier: null,
      };
      ({ id: obj.id, name: obj.name, description } = guild);
      if (description == null) {
        description = "";
      }
      obj.description = description;
      ({ icon: obj.icon, banner: obj.customBanner, approximate_presence_count } = guild);
      if (approximate_presence_count == null) {
        approximate_presence_count = approximate_presence_count.approximate_presence_count;
      }
      if (approximate_presence_count == null) {
        approximate_presence_count = 0;
      }
      obj.onlineCount = approximate_presence_count;
      let num = guild.approximate_member_count;
      if (num == null) {
        num = approximate_presence_count.approximate_member_count;
      }
      if (num == null) {
        num = 0;
      }
      obj.memberCount = num;
      obj.visibility = GuildProfileTypes.GuildProfileVisibility.NOT_SPECIFIED;
      obj.traits = [];
      obj.gameApplicationIds = [];
      obj.gameActivity = {};
      let features = guild.features;
      if (features == null) {
        features = [];
      }
      obj.features = features;
      ({ premium_subscription_count: obj.premiumSubscriberCount, premium_tier: obj.premiumTier } = guild);
      tmp5 = obj;
    }
    tmp = tmp5;
  }
  return tmp;
};
