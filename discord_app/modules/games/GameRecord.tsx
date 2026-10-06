// === Module 2008: GameRecord ===

// Module 2008 (GameRecord)
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AvatarUtils from "AvatarUtils" /* 1402 */;
import Server from "Server" /* 1985 */;
import ApplicationRecord2 from "ApplicationRecord" /* 2009 */;
import getGameMediaRefURLDefault from "getGameMediaRefURL" /* 2017 */;
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

const ApplicationRecord = ApplicationRecord2;
let roles;

const createExecutable = ApplicationRecord2.createExecutable;
const result = size.fileFinishedImporting("modules/games/GameRecord.tsx");
class GameRecord extends Record {
  constructor(item10012) {
    let aliases;
    let game_flags;
    let genres;
    let reviews;
    let tmp10;
    let tmp8;
    const tmp5 = new GameRecord(tmp4, tmp3, tmp2, tmp, new.target, this);
    ({ id: tmp5.id, name: tmp5.name, description: tmp5.description, aliases } = item10012);
    if (aliases == null) {
      aliases = [];
    }
    tmp5.aliases = aliases;
    let executables = item10012.executables;
    if (executables == null) {
      executables = [];
    }
    tmp5.executables = executables.map(createExecutable);
    let flag = item10012.overlay;
    if (flag == null) {
      flag = false;
    }
    tmp5.overlay = flag;
    let flag2 = item10012.overlay_warn;
    if (flag2 == null) {
      flag2 = false;
    }
    tmp5.overlayWarn = flag2;
    let flag3 = item10012.overlay_compatibility_hook;
    if (flag3 == null) {
      flag3 = false;
    }
    tmp5.overlayCompatibilityHook = flag3;
    let flag4 = item10012.hook;
    if (flag4 == null) {
      flag4 = true;
    }
    tmp5.hook = flag4;
    tmp5.supportsOutOfProcessOverlay = ApplicationRecord.supportsOutOfProcessOverlay(item10012.overlay_methods);
    let third_party_skus = item10012.third_party_skus;
    if (third_party_skus == null) {
      third_party_skus = [];
    }
    tmp5.thirdPartySkus = third_party_skus;
    let themes = item10012.themes;
    if (themes == null) {
      themes = [];
    }
    tmp5.themes = themes;
    ({ linked_applications: tmp5.linkedApplications, genres } = item10012);
    if (genres == null) {
      genres = [];
    }
    tmp5.genres = genres;
    let platforms = item10012.platforms;
    if (platforms == null) {
      platforms = [];
    }
    tmp5.platforms = platforms;
    let prop = item10012.platform_availability;
    if (prop == null) {
      prop = [];
    }
    tmp5.platformAvailability = prop;
    let websites = item10012.websites;
    if (websites == null) {
      websites = [];
    }
    tmp5.websites = websites;
    ({ companies: tmp5.companies, screenshot_hashes: tmp5.screenshotHashes, screenshot_urls: tmp5.screenshotUrls, trailers: tmp5.trailers, l30_rank: tmp5.l30Rank, summary_localized: tmp5.summaryLocalized, media: tmp5.media, first_release_date: tmp5.firstReleaseDate, shop_collection_ids: tmp5.shopCollectionIds, community_guild_ids: tmp5.communityGuildIds, steam_release_status: tmp5.steamReleaseStatus, reviews } = item10012);
    let steam;
    if (reviews != null) {
      steam = reviews.steam;
    }
    if (null != steam) {
      let tmp9;
      if (null != reviews.steam) {
        tmp9 = { rating: reviews.steam.rating, ratingCount: reviews.steam.rating_count, recentRating: reviews.steam.recent_rating, recentRatingCount: reviews.steam.recent_rating_count, localizedRating: reviews.steam.localized_rating, localizedRatingCount: reviews.steam.localized_rating_count };
        const obj = { rating: reviews.steam.rating, ratingCount: reviews.steam.rating_count, recentRating: reviews.steam.recent_rating, recentRatingCount: reviews.steam.recent_rating_count, localizedRating: reviews.steam.localized_rating, localizedRatingCount: reviews.steam.localized_rating_count };
      }
      const obj2 = { steam: tmp9, opencritic: tmp10 };
      tmp10 = undefined;
      if (null != reviews.opencritic) {
        tmp10 = { topCriticRating: reviews.opencritic.top_critic_rating, topCriticRatingCount: reviews.opencritic.top_critic_rating_count, tier: reviews.opencritic.tier };
        const obj3 = { topCriticRating: reviews.opencritic.top_critic_rating, topCriticRatingCount: reviews.opencritic.top_critic_rating_count, tier: reviews.opencritic.tier };
      }
      tmp8 = obj2;
    } else {
      let opencritic;
      if (reviews != null) {
        opencritic = reviews.opencritic;
      }
    }
    tmp5.reviews = tmp8;
    ({ opencritic_url: tmp5.opencriticUrl, game_flags } = item10012);
    if (game_flags == null) {
      game_flags = 0;
    }
    tmp5.gameFlags = game_flags;
    tmp5.contentClassification = item10012.content_classification;
    return tmp5;
  }
  getOfficialApplicationId() {
    const linkedApplications = this.linkedApplications;
    let id;
    if (linkedApplications != null) {
      const found = linkedApplications.find((type) => type.type === Server.GameLinkTypes.OFFICIAL);
      if (found != null) {
        id = found.id;
      }
    }
    return id;
  }
  getIconURL(size, format) {
    const media = this.media;
    let icon;
    const id = this.id;
    const tmp = getGameMediaRefURLDefault;
    if (media != null) {
      icon = media.icon;
    }
    const obj = { size, format };
    return tmp(id, icon, obj);
  }
  getBannerURL(size) {
    const media = this.media;
    let banner;
    const id = this.id;
    const tmp = getGameMediaRefURLDefault;
    if (media != null) {
      banner = media.banner;
    }
    const obj = { keepAspectRatio: true, size };
    return tmp(id, banner, obj);
  }
  getCoverURL(c9) {
    const media = this.media;
    let cover;
    const id = this.id;
    const tmp2 = getGameMediaRefURLDefault;
    if (media != null) {
      cover = media.cover;
    }
    let str = "png";
    if (AvatarUtils.SUPPORTS_WEBP) {
      str = "webp";
    }
    const obj = { keepAspectRatio: true, format: str, size };
    return tmp2(id, cover, obj);
  }
  getArtworkURLs(size) {
    let str;
    const self = this;
    const tmp = str;
    str = null;
    const tmp2 = self;
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
    const mapped = artwork.map((item) => {
      const obj = { size, format: str, keepAspectRatio: true };
      return getGameMediaRefURLDefault(self.id, item, obj);
    });
    return mapped.filter(tmp(tmp2[5]).isNotNullish);
  }
  getScreenshotURL(index, size) {
    let str;
    const screenshotUrls = this.screenshotUrls;
    let tmp;
    if (screenshotUrls != null) {
      tmp = screenshotUrls[index];
    }
    let tmp7Result = null;
    if (null != tmp) {
      const id = this.id;
      const obj2 = { size, format: str, keepAspectRatio: true };
      str = null;
      const obj = { type: "url", value: tmp };
      const tmp7 = getGameMediaRefURLDefault;
      if (AvatarUtils.SUPPORTS_WEBP) {
        str = "webp";
      }
      tmp7Result = tmp7(id, obj, obj2);
    }
    return tmp7Result;
  }
  getScreenshotURLs(arg0) {
    const self = this;
    let closure_0 = arg0;
    let screenshotUrls = this.screenshotUrls;
    if (screenshotUrls == null) {
      screenshotUrls = [];
    }
    const mapped = screenshotUrls.map((item, index) => self.getScreenshotURL(index, closure_0));
    return mapped.filter(GlobalUtils.isNotNullish);
  }
  getCompanyByRole(DEVELOPER) {
    let closure_0 = DEVELOPER;
    const companies = this.companies;
    let found;
    if (companies != null) {
      found = companies.filter((roles) => {
        roles = roles.roles;
        return roles.includes(DEVELOPER);
      });
    }
    if (found == null) {
      found = [];
    }
    return found;
  }
}
const prototype = GameRecord.prototype;

export default GameRecord;