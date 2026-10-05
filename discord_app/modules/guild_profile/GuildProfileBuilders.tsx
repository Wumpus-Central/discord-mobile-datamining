// discord_app/modules/guild_profile/GuildProfileBuilders.tsx
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import UnicodeEmojisDefault from "../emojis/UnicodeEmojis.tsx";
import EmojiStore from "../emojis/EmojiStore.tsx";
import GuildProfileLimits from "../../../discord_common/js/shared/shared-constants/GuildProfileLimits.tsx";
import GuildProfileTypes from "GuildProfileTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

let label;

function getEmoji(guildId) {
  let emojiId;
  let emojiName;
  let tmp;
  ({ emojiId, emojiName } = guildId);
  const value = EmojiDisambiguations.get(guildId.guildId);
  if (null != emojiId) {
    let byName;
    if (null != emojiId) {
      let byId = null;
      if (null != value) {
        byId = value.getById(emojiId);
      }
      byName = byId;
    } else {
      byName = null;
      if (null != emojiName) {
        const obj2 = UnicodeEmojisDefault;
        byName = obj2.getByName(emojiName);
      }
    }
    tmp = byName;
  } else {
    tmp = null;
  }
  return tmp;
}
function buildGuildProfileTraitsFromServer(guildId, traits) {
  let position;
  let tmp10;
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
      let obj = { label: tmp3.label, emoji: tmp10 };
      let obj2 = { guildId, emojiId: null, emojiName: null };
      ({ emoji_id: obj3.emojiId, emoji_name: obj3.emojiName, position } = tmp3);
      tmp10 = getEmoji(obj2);
      fillResult[position] = obj;
    }
    continue;
  }
  return fillResult;
}
function buildGuildProfileFromServer(profile) {
  let brand_color_primary;
  let features;
  let game_application_ids;
  let id;
  let obj2;
  let str;
  let tmp;
  let traits;
  const obj = {
    id: profile.id,
    name: profile.name,
    description: str,
    icon: null,
    customBanner: null,
    onlineCount: null,
    memberCount: null,
    brandColorPrimary: tmp,
    visibility: null,
    traits: buildGuildProfileTraitsFromServer(id, traits),
    gameApplicationIds: game_application_ids,
    gameActivity: obj2,
    games: null,
    features,
    tag: null,
    badge: null,
    badgeColorPrimary: null,
    badgeColorSecondary: null,
    badgeHash: null,
    premiumSubscriberCount: null,
    premiumTier: null,
  };
  str = profile.description;
  if (str == null) {
    str = "";
  }
  ({
    icon_hash: obj.icon,
    custom_banner_hash: obj.customBanner,
    online_count: obj.onlineCount,
    member_count: obj.memberCount,
    brand_color_primary,
  } = profile);
  tmp = null;
  if (null != brand_color_primary) {
    tmp = null;
    if ("" !== brand_color_primary) {
      tmp = brand_color_primary;
    }
  }
  ({ visibility: obj.visibility, traits } = profile);
  id = profile.id;
  if (traits == null) {
    traits = [];
  }
  game_application_ids = profile.game_application_ids;
  if (game_application_ids == null) {
    game_application_ids = [];
  }
  const game_activity = profile.game_activity;
  if (null == game_activity) {
    obj2 = {};
  } else {
    const _Object = Object;
    const entries = Object.entries(game_activity);
    obj2 = entries.reduce((acc, item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      acc[tmp] = { level: tmp2.activity_level, score: tmp2.activity_score };
      return acc;
    }, {});
  }
  ({ games: obj.games, features } = profile);
  if (features == null) {
    features = [];
  }
  ({
    tag: obj.tag,
    badge: obj.badge,
    badge_color_primary: obj.badgeColorPrimary,
    badge_color_secondary: obj.badgeColorSecondary,
    badge_hash: obj.badgeHash,
    premium_subscription_count: obj.premiumSubscriberCount,
    premium_tier: obj.premiumTier,
  } = profile);
  return obj;
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
      let animated;
      let id;
      let name;
      label = undefined;
      if (label != null) {
        label = label.label;
      }
      let tmp2 = null;
      if (null != label) {
        tmp2 = null;
        if (label.label.length > 0) {
          const emoji = label.emoji;
          const obj = { label: label.label, position, emoji_id: id, emoji_name: name, emoji_animated: animated };
          id = undefined;
          if (emoji != null) {
            id = emoji.id;
          }
          const emoji2 = label.emoji;
          name = undefined;
          if (emoji2 != null) {
            name = emoji2.name;
          }
          const emoji3 = label.emoji;
          animated = undefined;
          if (emoji3 != null) {
            animated = emoji3.animated;
          }
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
  let description;
  let features;
  let guild;
  let num;
  let profile;
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
        description,
        icon: null,
        customBanner: null,
        onlineCount: approximate_presence_count,
        memberCount: num,
        visibility: GuildProfileTypes.GuildProfileVisibility.NOT_SPECIFIED,
        traits: [],
        gameApplicationIds: [],
        gameActivity: {},
        features,
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
      ({ icon: obj.icon, banner: obj.customBanner, approximate_presence_count } = guild);
      if (approximate_presence_count == null) {
        approximate_presence_count = approximate_presence_count.approximate_presence_count;
      }
      if (approximate_presence_count == null) {
        approximate_presence_count = 0;
      }
      num = guild.approximate_member_count;
      if (num == null) {
        num = approximate_presence_count.approximate_member_count;
      }
      if (num == null) {
        num = 0;
      }
      features = guild.features;
      if (features == null) {
        features = [];
      }
      ({ premium_subscription_count: obj.premiumSubscriberCount, premium_tier: obj.premiumTier } = guild);
      tmp5 = obj;
    }
    tmp = tmp5;
  }
  return tmp;
};
