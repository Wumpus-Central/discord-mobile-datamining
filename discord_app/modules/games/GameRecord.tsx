// === Module 1917: GameRecord ===

// Module 1917 (GameRecord)
import AvatarUtils from "AvatarUtils" /* 1396 */;
import Server from "Server" /* 1894 */;
import getGameMediaRefURLDefault from "getGameMediaRefURL" /* 1924 */;
import Record from "Record" /* 1386 */;
import ApplicationRecord from "ApplicationRecord" /* 1918 */;

require = fn;
const createExecutable = fn(1918).createExecutable;
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/GameRecord.tsx");
class GameRecord extends tmp2 {
  constructor(arg0) {
    tmp5 = new GameRecord(tmp4, tmp3, tmp2, tmp, new.target, new.target);
    ({ id: tmp5.id, name: tmp5.name, description: tmp5.description, aliases } = global);
    if (aliases == null) {
      aliases = [];
    }
    tmp5.aliases = aliases;
    executables = global.executables;
    if (executables == null) {
      executables = [];
    }
    tmp5.executables = executables.map(createExecutable);
    flag = global.overlay;
    if (flag == null) {
      flag = false;
    }
    tmp5.overlay = flag;
    flag2 = global.overlay_warn;
    if (flag2 == null) {
      flag2 = false;
    }
    tmp5.overlayWarn = flag2;
    flag3 = global.overlay_compatibility_hook;
    if (flag3 == null) {
      flag3 = false;
    }
    tmp5.overlayCompatibilityHook = flag3;
    flag4 = global.hook;
    if (flag4 == null) {
      flag4 = true;
    }
    tmp5.hook = flag4;
    tmp5.supportsOutOfProcessOverlay = closure_3.supportsOutOfProcessOverlay(global.overlay_methods);
    third_party_skus = global.third_party_skus;
    if (third_party_skus == null) {
      third_party_skus = [];
    }
    tmp5.thirdPartySkus = third_party_skus;
    themes = global.themes;
    if (themes == null) {
      themes = [];
    }
    tmp5.themes = themes;
    ({ linked_applications: tmp5.linkedApplications, genres } = global);
    if (genres == null) {
      genres = [];
    }
    tmp5.genres = genres;
    platforms = global.platforms;
    if (platforms == null) {
      platforms = [];
    }
    tmp5.platforms = platforms;
    websites = global.websites;
    if (websites == null) {
      websites = [];
    }
    tmp5.websites = websites;
    ({ companies: tmp5.companies, screenshot_hashes: tmp5.screenshotHashes, screenshot_urls: tmp5.screenshotUrls, trailers: tmp5.trailers, l30_rank: tmp5.l30Rank, summary_localized: tmp5.summaryLocalized, media: tmp5.media, first_release_date: tmp5.firstReleaseDate, shop_collection_ids: tmp5.shopCollectionIds, steam_release_status: tmp5.steamReleaseStatus, reviews } = global);
    steam = undefined;
    if (reviews != null) {
      steam = reviews.steam;
    }
    if (null != steam) {
      tmp9 = undefined;
      if (null != reviews.steam) {
        obj = { rating: null, ratingCount: null, recentRating: null, recentRatingCount: null, localizedRating: null, localizedRatingCount: null };
        obj.rating = reviews.steam.rating;
        obj.ratingCount = reviews.steam.rating_count;
        obj.recentRating = reviews.steam.recent_rating;
        obj.recentRatingCount = reviews.steam.recent_rating_count;
        obj.localizedRating = reviews.steam.localized_rating;
        obj.localizedRatingCount = reviews.steam.localized_rating_count;
        tmp9 = obj;
      }
      obj = { steam: null, opencritic: null };
      obj.steam = tmp9;
      tmp10 = undefined;
      if (null != reviews.opencritic) {
        obj1 = { topCriticRating: null, topCriticRatingCount: null, tier: null };
        obj1.topCriticRating = reviews.opencritic.top_critic_rating;
        obj1.topCriticRatingCount = reviews.opencritic.top_critic_rating_count;
        obj1.tier = reviews.opencritic.tier;
        tmp10 = obj1;
      }
      obj.opencritic = tmp10;
      tmp8 = obj;
    } else {
      opencritic = undefined;
      if (reviews != null) {
        opencritic = reviews.opencritic;
      }
    }
    tmp5.reviews = tmp8;
    ({ opencritic_url: tmp5.opencriticUrl, game_flags } = global);
    if (game_flags == null) {
      game_flags = 0;
    }
    tmp5.gameFlags = game_flags;
    tmp5.contentClassification = global.content_classification;
    return tmp5;
  }
}
const prototype = GameRecord.prototype;
prototype["getOfficialApplicationId"] = function getOfficialApplicationId() {
  const linkedApplications = this.linkedApplications;
  let id;
  if (linkedApplications != null) {
    const found = linkedApplications.find((type) => type.type === Server.GameLinkTypes.OFFICIAL);
    if (found != null) {
      id = found.id;
    }
  }
  return id;
};
prototype["getIconURL"] = function getIconURL(size, format) {
  const media = this.media;
  let icon;
  if (media != null) {
    icon = media.icon;
  }
  return getGameMediaRefURLDefault(this.id, icon, { size, format });
};
prototype["getBannerURL"] = function getBannerURL(size) {
  const media = this.media;
  let banner;
  if (media != null) {
    banner = media.banner;
  }
  return getGameMediaRefURLDefault(this.id, banner, { keepAspectRatio: true, size });
};
prototype["getCoverURL"] = function getCoverURL(size) {
  const media = this.media;
  let cover;
  if (media != null) {
    cover = media.cover;
  }
  let str = "png";
  if (AvatarUtils.SUPPORTS_WEBP) {
    str = "webp";
  }
  return getGameMediaRefURLDefault(this.id, cover, { keepAspectRatio: true, format: str, size });
};
prototype["getArtworkURLs"] = function getArtworkURLs() {
  const self = this;
  const media = this.media;
  let artwork;
  if (media != null) {
    artwork = media.artwork;
  }
  if (artwork == null) {
    artwork = [];
  }
  const mapped = artwork.map((item) => getGameMediaRefURLDefault(self.id, item, { keepAspectRatio: true }));
  return mapped.filter(self(1369).isNotNullish);
};
prototype["getCompanyByRole"] = function getCompanyByRole(DEVELOPER) {
  closure_0 = DEVELOPER;
  const companies = this.companies;
  let found;
  if (companies != null) {
    found = companies.filter((roles) => {
      roles = roles.roles;
      return roles.includes(closure_0);
    });
  }
  if (found == null) {
    found = [];
  }
  return found;
};

export default GameRecord;