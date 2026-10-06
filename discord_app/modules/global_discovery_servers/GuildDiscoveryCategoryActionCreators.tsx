// discord_app/modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import GuildDiscoveryCategoryStore from "GuildDiscoveryCategoryStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, locale;

let obj = function _maybeFetchGuildDiscoveryCategories() {
  let fetchedLocale;
  obj = _asyncToGenerator(async () => {
    let obj4;
    let obj6;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let body;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp4;
            locale = undefined;
            body = undefined;
            locale = locale.locale;
            if (locale !== fetchedLocale.getFetchedLocale()) {
              const HTTP = require("HTTPUtils").HTTP;
              const request = {
                url: constants.GUILD_DISCOVERY_CATEGORIES,
                query: obj4,
                oldFormErrors: true,
                rejectWithError: obj6.rejectWithMigratedError(),
              };
              obj4 = { locale, primary_only: false };
              const get = HTTP.get;
              obj6 = require("HTTPUtils");
              c2 = 1;
              c3 = 1;
              const obj5 = { value: get(request), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          body = value;
          const obj8 = { type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS", categories: body.body, locale };
          obj = closure_129_1(closure_129_2[5]);
          obj.dispatch(obj8);
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp16) {
        c3 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchMetadataForGuild() {
  obj = _asyncToGenerator(async (guildId) => {
    let closure_1;
    let closure_2;
    let closure_3;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      const HTTP = require("HTTPUtils").HTTP;
      const get = HTTP.get;
      const obj5 = { url: Endpoints.GUILD_DISCOVERY_METADATA(guildId), oldFormErrors: true, rejectWithError: true };
      await get(obj5);
      const obj3 = closure_130_1(closure_130_2[5]);
      obj3.dispatch({ type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL" });
      await "IconComponent";
      const body = value.body;
      const obj9 = {
        primaryCategoryId: body.primary_category_id,
        secondaryCategoryIds: body.category_ids,
        keywords: body.keywords,
        emojiDiscoverabilityEnabled: body.emoji_discoverability_enabled,
        partnerActionedTimestamp: body.partner_actioned_timestamp,
        partnerApplicationTimestamp: body.partner_application_timestamp,
        isPublished: body.is_published,
        reasonsToJoin: body.reasons_to_join,
        socialLinks: body.social_links,
        about: body.about,
      };
      const obj10 = { type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER", guildId, metadata: obj9 };
      const obj8 = closure_130_1(closure_130_2[5]);
      obj8.dispatch(obj10);
      return obj9;
    })();
  });
  return obj(...arguments);
};
obj = function _fetchSlugForGuild() {
  obj = _asyncToGenerator(async (guildId) => {
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (async (arg0) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let slug;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              slug = undefined;
              c3 = 1;
              const HTTP = require("HTTPUtils").HTTP;
              const get = HTTP.get;
              c4 = 2;
              c5 = 1;
              const obj5 = { url: Endpoints.GUILD_DISCOVERY_SLUG(guildId), rejectWithError: true };
              const obj6 = { value: get(obj5), done: false };
              return obj6;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              const obj7 = { type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL", guildId };
              const obj4 = closure_130_1(closure_130_2[5]);
              obj4.dispatch(obj7);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              return { value, done: true };
            } else {
              slug = value.body.slug;
              const obj9 = { type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS", slug };
              obj = closure_130_1(closure_130_2[5]);
              obj.dispatch(obj9);
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp21) {
          if (0 === c3) {
            c5 = 3;
            throw tmp21;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _saveGuildMetadata() {
  obj = _asyncToGenerator(async (guildId) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    let is_published;
    let obj11;
    let obj13;
    let obj6;
    let partner_application_timestamp;
    if (is_published === 2) {
      is_published = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (guildId === 1) {
        throw value;
      } else if (guildId === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let partner_actioned_timestamp;
      try {
        let emoji_discoverability_enabled;
        let body;
        let primary_category_id;
        let category_ids;
        let keywords;
        let emojiDiscoverabilityEnabled;
        let partnerActionedTimestamp;
        let partnerApplicationTimestamp;
        let reasons_to_join;
        let social_links;
        let about;
        is_published = 2;
        if (0 === partner_application_timestamp) {
          if (guildId === 1) {
            is_published = 3;
            throw value;
          } else if (guildId === 2) {
            is_published = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            guildId = undefined;
            emoji_discoverability_enabled = undefined;
            partner_actioned_timestamp = undefined;
            ({
              guildId: c0,
              primaryCategoryId: c1,
              keywords: c2,
              emojiDiscoverabilityEnabled: c3,
              partnerActionedTimestamp: c4,
              partnerApplicationTimestamp: c5,
              isPublished: c6,
              reasonsToJoin: c7,
              socialLinks: c8,
              about: c9,
            } = closure_0);
            body = undefined;
            primary_category_id = undefined;
            category_ids = undefined;
            keywords = undefined;
            emojiDiscoverabilityEnabled = undefined;
            partnerActionedTimestamp = undefined;
            partnerApplicationTimestamp = undefined;
            reasons_to_join = undefined;
            social_links = undefined;
            about = undefined;
            partner_application_timestamp = 1;
            is_published = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === partner_application_timestamp) {
          if (guildId === 1) {
            is_published = 3;
            throw value;
          } else if (guildId === 2) {
            is_published = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            partner_actioned_timestamp = 1;
            const HTTP = closure_130_0(closure_130_2[4]).HTTP;
            const request = {
              url: closure_130_6.GUILD_DISCOVERY_METADATA(guildId),
              body: obj6,
              oldFormErrors: true,
              rejectWithError: obj13.rejectWithMigratedError(),
            };
            const patch = HTTP.patch;
            obj6 = {
              primary_category_id,
              emoji_discoverability_enabled,
              partner_actioned_timestamp,
              partner_application_timestamp,
              keywords,
              is_published,
              reasons_to_join,
              social_links,
              about,
            };
            obj13 = closure_130_0(closure_130_2[4]);
            partner_application_timestamp = 3;
            is_published = 1;
            const obj7 = { value: patch(request), done: false };
            return obj7;
          }
        } else if (2 === partner_application_timestamp) {
          partner_actioned_timestamp = 0;
          body = closure_3;
          const obj9 = { type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId, errors: body.body };
          const obj2 = closure_130_1(closure_130_2[5]);
          obj2.dispatch(obj9);
          throw body;
        } else if (guildId === 1) {
          is_published = 3;
          throw value;
        } else if (guildId === 2) {
          partner_actioned_timestamp = 0;
          is_published = 3;
          obj = { value, done: true };
          return obj;
        } else {
          body = value.body;
          primary_category_id = body.primary_category_id;
          category_ids = body.category_ids;
          keywords = body.keywords;
          emojiDiscoverabilityEnabled = body.emoji_discoverability_enabled;
          partnerActionedTimestamp = body.partner_actioned_timestamp;
          partnerApplicationTimestamp = body.partner_application_timestamp;
          is_published = body.is_published;
          reasons_to_join = body.reasons_to_join;
          social_links = body.social_links;
          about = body.about;
          const obj10 = { type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER", guildId, metadata: obj11 };
          obj11 = {
            primaryCategoryId: primary_category_id,
            secondaryCategoryIds: category_ids,
            keywords,
            emojiDiscoverabilityEnabled,
            partnerActionedTimestamp,
            partnerApplicationTimestamp,
            isPublished: is_published,
            reasonsToJoin: reasons_to_join,
            socialLinks: social_links,
            about,
          };
          const obj8 = closure_130_1(closure_130_2[5]);
          obj8.dispatch(obj10);
          partner_actioned_timestamp = 0;
          is_published = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp15) {
        closure_3 = tmp15;
        if (0 === partner_actioned_timestamp) {
          is_published = 3;
          throw tmp15;
        } else {
          partner_application_timestamp = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx");

export const maybeFetchGuildDiscoveryCategories = function maybeFetchGuildDiscoveryCategories() {
  return obj(...arguments);
};
export const fetchMetadataForGuild = function fetchMetadataForGuild() {
  return obj(...arguments);
};
export const fetchSlugForGuild = function fetchSlugForGuild() {
  return obj(...arguments);
};
export const updateGuildPrimaryCategory = function updateGuildPrimaryCategory(guildId, primaryCategoryId) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, primaryCategoryId };
  obj.dispatch(obj2);
};
export const updateGuildKeywords = function updateGuildKeywords(guildId, keywords) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, keywords };
  obj.dispatch(obj2);
};
export const updateGuildEmojiDiscoverabilityEnabled = function updateGuildEmojiDiscoverabilityEnabled(
  guildId,
  emojiDiscoverabilityEnabled,
) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, emojiDiscoverabilityEnabled };
  obj.dispatch(obj2);
};
export const updateGuildDiscoveryMetadataIsPublished = function updateGuildDiscoveryMetadataIsPublished(
  guildId,
  isPublished,
) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, isPublished };
  obj.dispatch(obj2);
};
export const updateGuildDiscoveryMetadataAbout = function updateGuildDiscoveryMetadataAbout(guildId, about) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, about };
  obj.dispatch(obj2);
};
export const updateGuildDiscoveryMetadataReasonsToJoin = function updateGuildDiscoveryMetadataReasonsToJoin(
  guildId,
  reasonsToJoin,
) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, reasonsToJoin };
  obj.dispatch(obj2);
};
export const updateGuildDiscoveryMetadataSocialLinks = function updateGuildDiscoveryMetadataSocialLinks(
  guildId,
  socialLinks,
) {
  obj = DispatcherDefault;
  const obj2 = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, socialLinks };
  obj.dispatch(obj2);
};
export const saveGuildMetadata = function saveGuildMetadata() {
  return obj(...arguments);
};
export const addGuildCategory = function addGuildCategory(guildId, categoryId) {
  let obj2;
  _require = guildId;
  const HTTP = require("HTTPUtils").HTTP;
  obj = {
    url: Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(guildId, categoryId),
    oldFormErrors: true,
    rejectWithError: obj2.rejectWithMigratedError(),
  };
  const put = HTTP.put;
  obj2 = require("HTTPUtils");
  const putResult = put(obj);
  const nextPromise = putResult.then(() => {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_DISCOVERY_CATEGORY_ADD", guildId, categoryId };
    obj.dispatch(obj2);
  });
  nextPromise.catch((error) => {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId, errors: error.body };
    obj.dispatch(obj2);
  });
};
export const deleteGuildCategory = function deleteGuildCategory(guildId, categoryId) {
  let obj2;
  _require = guildId;
  const HTTP = require("HTTPUtils").HTTP;
  obj = {
    url: Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(guildId, categoryId),
    oldFormErrors: true,
    rejectWithError: obj2.rejectWithMigratedError(),
  };
  const del = HTTP.del;
  obj2 = require("HTTPUtils");
  const delResult = del(obj);
  const nextPromise = delResult.then(() => {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_DISCOVERY_CATEGORY_DELETE", guildId, categoryId };
    obj.dispatch(obj2);
  });
  nextPromise.catch((error) => {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId, errors: error.body };
    obj.dispatch(obj2);
  });
};
