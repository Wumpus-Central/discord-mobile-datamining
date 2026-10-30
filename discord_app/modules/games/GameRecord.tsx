// === Module 2016: GameRecord ===

// Module 2016 (GameRecord)
import GlobalUtils from "GlobalUtils" /* 1380 */;
import AvatarUtils from "AvatarUtils" /* 1410 */;
import Server from "Server" /* 1993 */;
import getGameMediaRefURLDefault from "getGameMediaRefURL" /* 2027 */;
import Record from "Record" /* 1399 */;
import ApplicationRecord from "ApplicationRecord" /* 2017 */;

require = fn;
const createExecutable = fn(2017).createExecutable;
const size = fn(2);
const result = size.fileFinishedImporting("modules/games/GameRecord.tsx");
class GameRecord extends tmp2 {
  constructor(arg0) {
    tmp7 = new GameRecord(tmp6, tmp5, tmp4, tmp3, tmp2, tmp);
    ({ id: tmp7.id, name: tmp7.name, description: tmp7.description, aliases } = global);
    if (aliases == null) {
      aliases = [];
    }
    tmp7.aliases = aliases;
    executables = global.executables;
    if (executables == null) {
      executables = [];
    }
    tmp7.executables = executables.map(createExecutable);
    flag = global.overlay;
    if (flag == null) {
      flag = false;
    }
    tmp7.overlay = flag;
    flag2 = global.overlay_warn;
    if (flag2 == null) {
      flag2 = false;
    }
    tmp7.overlayWarn = flag2;
    flag3 = global.overlay_compatibility_hook;
    if (flag3 == null) {
      flag3 = false;
    }
    tmp7.overlayCompatibilityHook = flag3;
    flag4 = global.hook;
    if (flag4 == null) {
      flag4 = true;
    }
    tmp7.hook = flag4;
    tmp7.supportsOutOfProcessOverlay = closure_3.supportsOutOfProcessOverlay(global.overlay_methods);
    third_party_skus = global.third_party_skus;
    if (third_party_skus == null) {
      third_party_skus = [];
    }
    tmp7.thirdPartySkus = third_party_skus;
    themes = global.themes;
    if (themes == null) {
      themes = [];
    }
    tmp7.themes = themes;
    ({ linked_applications: tmp7.linkedApplications, genres } = global);
    if (genres == null) {
      genres = [];
    }
    tmp7.genres = genres;
    platforms = global.platforms;
    if (platforms == null) {
      platforms = [];
    }
    tmp7.platforms = platforms;
    prop = global.platform_availability;
    if (prop == null) {
      prop = [];
    }
    tmp7.platformAvailability = prop;
    websites = global.websites;
    if (websites == null) {
      websites = [];
    }
    tmp7.websites = websites;
    ({ companies: tmp7.companies, screenshot_hashes: tmp7.screenshotHashes, screenshot_urls: tmp7.screenshotUrls, trailers: tmp7.trailers, l30_rank: tmp7.l30Rank, summary_localized: tmp7.summaryLocalized, media: tmp7.media, first_release_date: tmp7.firstReleaseDate, shop_collection_ids: tmp7.shopCollectionIds, community_guild_ids: tmp7.communityGuildIds, steam_release_status: tmp7.steamReleaseStatus, reviews } = global);
    steam = undefined;
    if (reviews != null) {
      steam = reviews.steam;
    }
    if (null == steam) {
      app_store1 = undefined;
      if (reviews != null) {
        app_store1 = reviews.app_store;
      }
      if (null == app_store1) {
        google_play1 = undefined;
        if (reviews != null) {
          google_play1 = reviews.google_play;
        }
        if (null == google_play1) {
          opencritic = undefined;
          if (reviews != null) {
            opencritic = reviews.opencritic;
          }
        }
        tmp7.reviews = tmp12;
        ({ opencritic_url: tmp7.opencriticUrl, game_flags } = global);
        if (game_flags == null) {
          game_flags = 0;
        }
        tmp7.gameFlags = game_flags;
        tmp7.contentClassification = global.content_classification;
        return tmp7;
      }
    }
    tmp13 = undefined;
    if (null != reviews.steam) {
      obj = { rating: null, ratingCount: null, recentRating: null, recentRatingCount: null, localizedRating: null, localizedRatingCount: null };
      obj.rating = reviews.steam.rating;
      obj.ratingCount = reviews.steam.rating_count;
      obj.recentRating = reviews.steam.recent_rating;
      obj.recentRatingCount = reviews.steam.recent_rating_count;
      obj.localizedRating = reviews.steam.localized_rating;
      obj.localizedRatingCount = reviews.steam.localized_rating_count;
      tmp13 = obj;
    }
    obj1 = { steam: tmp13, appStore: null, googlePlay: null, opencritic: null };
    app_store = reviews.app_store;
    tmp14 = undefined;
    if (null != app_store) {
      obj6 = { rating: null, ratingCount: null };
      ({ rating: obj3.rating, rating_count } = app_store);
      if (rating_count == null) {
        rating_count = app_store.global_rating_count;
      }
      obj6.ratingCount = rating_count;
      tmp14 = obj6;
    }
    obj1.appStore = tmp14;
    google_play = reviews.google_play;
    tmp15 = undefined;
    if (null != google_play) {
      obj7 = { rating: null, ratingCount: null };
      ({ rating: obj4.rating, rating_count: rating_count2 } = google_play);
      if (rating_count2 == null) {
        rating_count2 = google_play.global_rating_count;
      }
      obj7.ratingCount = rating_count2;
      tmp15 = obj7;
    }
    obj1.googlePlay = tmp15;
    tmp16 = undefined;
    if (null != reviews.opencritic) {
      obj8 = { topCriticRating: null, topCriticRatingCount: null, tier: null };
      obj8.topCriticRating = reviews.opencritic.top_critic_rating;
      obj8.topCriticRatingCount = reviews.opencritic.top_critic_rating_count;
      obj8.tier = reviews.opencritic.tier;
      tmp16 = obj8;
    }
    obj1.opencritic = tmp16;
    tmp12 = obj1;
    return;
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
prototype["getCoverURL"] = function getCoverURL(imageSize) {
  const media = this.media;
  let cover;
  if (media != null) {
    cover = media.cover;
  }
  let str = "png";
  if (AvatarUtils.SUPPORTS_WEBP) {
    str = "webp";
  }
  return getGameMediaRefURLDefault(this.id, cover, { keepAspectRatio: true, format: str, size: imageSize });
};
prototype["getArtworkURLs"] = function getArtworkURLs(size) {
  const self = this;
  let str = null;
  if (str(self[4]).SUPPORTS_WEBP) {
    str = "webp";
  }
  const media = this.media;
  let artwork;
  if (media != null) {
    artwork = media.artwork;
  }
  if (artwork == null) {
    artwork = [];
  }
  const mapped = artwork.map((item) => getGameMediaRefURLDefault(self.id, item, { size, format: str, keepAspectRatio: true }));
  return mapped.filter(str(self[5]).isNotNullish);
};
prototype["getScreenshotURL"] = function getScreenshotURL(index, size) {
  const screenshotUrls = this.screenshotUrls;
  let tmp;
  if (screenshotUrls != null) {
    tmp = screenshotUrls[index];
  }
  let tmp7Result = null;
  if (null != tmp) {
    const obj = { type: "url", value: tmp };
    const obj2 = { size, format: null, keepAspectRatio: true };
    let str = null;
    if (AvatarUtils.SUPPORTS_WEBP) {
      str = "webp";
    }
    obj2.format = str;
    tmp7Result = getGameMediaRefURLDefault(this.id, obj, obj2);
  }
  return tmp7Result;
};
prototype["getScreenshotURLs"] = function getScreenshotURLs(arg0) {
  const self = this;
  closure_0 = arg0;
  let screenshotUrls = this.screenshotUrls;
  if (screenshotUrls == null) {
    screenshotUrls = [];
  }
  const mapped = screenshotUrls.map((item, index) => self.getScreenshotURL(index, closure_0));
  return mapped.filter(GlobalUtils.isNotNullish);
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