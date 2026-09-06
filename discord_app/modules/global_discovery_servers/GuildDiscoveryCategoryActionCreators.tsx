// === Module 16469: GuildDiscoveryCategoryActionCreators ===

// Module 16469 (GuildDiscoveryCategoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import GuildDiscoveryCategoryStore from "GuildDiscoveryCategoryStore" /* 16470 */;

const require = fn;
let closure_7 = async function _maybeFetchGuildDiscoveryCategories(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp5;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          locale = locale.locale;
          closure_128_0 = locale;
          if (locale !== fetchedLocale.getFetchedLocale()) {
            const HTTP = require("HTTPUtils").HTTP;
            const request = { url: constants.GUILD_DISCOVERY_CATEGORIES, query: null, oldFormErrors: true, rejectWithError: null };
            const obj1 = { locale, primary_only: false };
            request.query = obj1;
            request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
            c2 = 1;
            c3 = 1;
            const obj2 = { value: HTTP.get(request), done: false };
            return obj2;
          } else {
            c3 = 3;
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_1 = value;
        obj = closure_129_1(closure_129_2[5]);
        const obj3 = { type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS", categories: closure_128_1.body, locale: closure_128_0 };
        obj.dispatch(obj3);
      }
      c3 = 3;
      const obj4 = { value, done: true };
      return obj4;
    } catch (tmp17) {
      c3 = tmp;
      throw tmp17;
    }
  }
};
let closure_8 = async function _fetchMetadataForGuild() {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.get({ url: Endpoints.GUILD_DISCOVERY_METADATA(closure_0), oldFormErrors: true, rejectWithError: true });
  { url: Endpoints.GUILD_DISCOVERY_METADATA(closure_0), oldFormErrors: true, rejectWithError: true };
  closure_130_1(closure_130_2[5]).dispatch({ type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL" });
  await "HermesInternal";
  const body = arg1.body;
  closure_129_2 = { primaryCategoryId: body.primary_category_id, secondaryCategoryIds: body.category_ids, keywords: body.keywords, emojiDiscoverabilityEnabled: body.emoji_discoverability_enabled, partnerActionedTimestamp: body.partner_actioned_timestamp, partnerApplicationTimestamp: body.partner_application_timestamp, isPublished: body.is_published, reasonsToJoin: body.reasons_to_join, socialLinks: body.social_links, about: body.about };
  closure_130_1(closure_130_2[5]).dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER", guildId: closure_129_0, metadata: closure_129_2 });
  return closure_129_2;
};
let closure_9 = async function _fetchSlugForGuild(arg0, arg1) {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.get({ url: Endpoints.GUILD_DISCOVERY_SLUG(closure_0), rejectWithError: true });
  if (1 === tmp7) {
    c3 = 0;
    closure_130_1(closure_130_2[5]);
    const obj3 = { type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL", guildId: closure_129_0 };
    obj3.dispatch(obj3);
    c5 = 3;
  } else if (arg0 === 1) {
    c5 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    const slug = arg1.body.slug;
    closure_130_1(closure_130_2[5]).dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS", slug });
    c3 = 0;
    closure_130_1(closure_130_2[5]);
  }
  return arg1;
};
let closure_10 = async function _saveGuildMetadata(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          ({ guildId: closure_129_0, primaryCategoryId: closure_129_1, keywords: closure_129_2, emojiDiscoverabilityEnabled: closure_129_3, partnerActionedTimestamp: closure_129_4, partnerApplicationTimestamp: closure_129_5, isPublished: closure_129_6, reasonsToJoin: closure_129_7, socialLinks: closure_129_8, about: closure_129_9 } = closure_0);
          let body;
          let primary_category_id;
          let category_ids;
          let keywords;
          closure_129_14 = undefined;
          closure_129_15 = undefined;
          closure_129_16 = undefined;
          let is_published;
          let reasons_to_join;
          let social_links;
          let about;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          c4 = 1;
          const HTTP = closure_130_0(closure_130_2[4]).HTTP;
          const request = { url: closure_130_6.GUILD_DISCOVERY_METADATA(closure_129_0), body: null, oldFormErrors: true, rejectWithError: null };
          const obj2 = { primary_category_id: closure_129_1, emoji_discoverability_enabled: closure_129_3, partner_actioned_timestamp: closure_129_4, partner_application_timestamp: closure_129_5, keywords: closure_129_2, is_published: closure_129_6, reasons_to_join: closure_129_7, social_links: closure_129_8, about: closure_129_9 };
          request.body = obj2;
          request.rejectWithError = closure_130_0(closure_130_2[4]).rejectWithMigratedError();
          c5 = 3;
          c6 = 1;
          const obj3 = { value: HTTP.patch(request), done: false };
          return obj3;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_21 = closure_3;
        obj1 = closure_130_1(closure_130_2[5]);
        const obj4 = { type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: closure_129_0, errors: closure_129_21.body };
        obj1.dispatch(obj4);
        throw closure_129_21;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        body = value.body;
        primary_category_id = body.primary_category_id;
        category_ids = body.category_ids;
        keywords = body.keywords;
        closure_129_14 = body.emoji_discoverability_enabled;
        closure_129_15 = body.partner_actioned_timestamp;
        closure_129_16 = body.partner_application_timestamp;
        is_published = body.is_published;
        reasons_to_join = body.reasons_to_join;
        social_links = body.social_links;
        about = body.about;
        const obj5 = { type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER", guildId: closure_129_0, metadata: null };
        const obj6 = { primaryCategoryId: primary_category_id, secondaryCategoryIds: category_ids, keywords, emojiDiscoverabilityEnabled: closure_129_14, partnerActionedTimestamp: closure_129_15, partnerApplicationTimestamp: closure_129_16, isPublished: is_published, reasonsToJoin: reasons_to_join, socialLinks: social_links, about };
        obj5.metadata = obj6;
        closure_130_1(closure_130_2[5]).dispatch(obj5);
        c4 = 0;
        c6 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp18) {
      closure_3 = tmp18;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp18;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx");

export const maybeFetchGuildDiscoveryCategories = function maybeFetchGuildDiscoveryCategories() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchMetadataForGuild = function fetchMetadataForGuild() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSlugForGuild = function fetchSlugForGuild() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateGuildPrimaryCategory = function updateGuildPrimaryCategory(guildId, primaryCategoryId) {
  const obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, primaryCategoryId };
  obj.dispatch(obj);
};
export const updateGuildKeywords = function updateGuildKeywords(guildId, keywords) {
  const obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, keywords };
  obj.dispatch(obj);
};
export const updateGuildEmojiDiscoverabilityEnabled = function updateGuildEmojiDiscoverabilityEnabled(guildId, emojiDiscoverabilityEnabled) {
  const obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, emojiDiscoverabilityEnabled };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataIsPublished = function updateGuildDiscoveryMetadataIsPublished(guildId, isPublished) {
  const obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, isPublished };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataAbout = function updateGuildDiscoveryMetadataAbout(guildId, about) {
  const obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, about };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataReasonsToJoin = function updateGuildDiscoveryMetadataReasonsToJoin(guildId, reasonsToJoin) {
  const obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, reasonsToJoin };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataSocialLinks = function updateGuildDiscoveryMetadataSocialLinks(guildId, socialLinks) {
  const obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, socialLinks };
  obj.dispatch(obj);
};
export const saveGuildMetadata = function saveGuildMetadata() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const addGuildCategory = function addGuildCategory(guildId, categoryId) {
  _require = guildId;
  const HTTP = require("HTTPUtils").HTTP;
  let obj = { url: Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(guildId, categoryId), oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
  const obj2 = require("HTTPUtils");
  const putResult = HTTP.put(obj);
  HTTP.put(obj).then(() => {
    const obj = { type: "GUILD_DISCOVERY_CATEGORY_ADD", guildId, categoryId };
    obj.dispatch(obj);
  }).catch((error) => {
    const obj = { type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId, errors: error.body };
    obj.dispatch(obj);
  });
};
export const deleteGuildCategory = function deleteGuildCategory(guildId, categoryId) {
  _require = guildId;
  const HTTP = require("HTTPUtils").HTTP;
  let obj = { url: Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(guildId, categoryId), oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
  const obj2 = require("HTTPUtils");
  const delResult = HTTP.del(obj);
  HTTP.del(obj).then(() => {
    const obj = { type: "GUILD_DISCOVERY_CATEGORY_DELETE", guildId, categoryId };
    obj.dispatch(obj);
  }).catch((error) => {
    const obj = { type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId, errors: error.body };
    obj.dispatch(obj);
  });
};