// discord_app/modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx
import dispatcher from "dispatcher";
import _getSystemLocale from "_getSystemLocale";
import getPrimaryCategories from "getPrimaryCategories";
import { Endpoints } from "ME";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";

const require = arg1;
function _maybeFetchGuildDiscoveryCategories() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let lib = tmp2;
            let locale = tmp5;
            locale = undefined;
            lib = undefined;
            locale = outer1_4.locale;
            if (locale !== outer1_5.getFetchedLocale()) {
              const HTTP = outer1_0(530).HTTP;
              const obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = outer1_6.GUILD_DISCOVERY_CATEGORIES;
              const obj2 = { locale: null, primary_only: false };
              obj2[0] = locale;
              obj1[1] = obj2;
              let obj5 = outer1_0(530);
              obj1[3] = obj5.rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj1);
              return obj3;
            } else {
              c3 = 3;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          lib = arg1;
          obj = lib(709);
          const obj4 = { type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS", categories: null, locale: null };
          obj4[1] = lib.body;
          obj4[2] = locale;
          obj.dispatch(obj4);
        }
        c3 = 3;
        obj5 = { value: null, done: true };
        obj5[0] = arg1;
        return obj5;
      } catch (tmp17) {
        c3 = tmp;
        throw tmp17;
      }
    }
  });
  const _maybeFetchGuildDiscoveryCategories = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchMetadataForGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      let obj4 = tmp3;
      let c4 = 1;
      const HTTP = callback(outer1_2[4]).HTTP;
      const obj1 = { url: null, oldFormErrors: true, rejectWithError: true };
      obj1[0] = c6.GUILD_DISCOVERY_METADATA(callback);
      yield HTTP.get(obj1);
      c4 = 0;
      const obj2 = body(obj4[5]);
      obj2.dispatch({ type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL" });
      yield "HermesInternal";
      body = body.body;
      obj4 = { primaryCategoryId: null, secondaryCategoryIds: null, keywords: null, emojiDiscoverabilityEnabled: null, partnerActionedTimestamp: null, partnerApplicationTimestamp: null, isPublished: null, reasonsToJoin: null, socialLinks: null, about: null };
      obj4[0] = body.primary_category_id;
      obj4[1] = body.category_ids;
      obj4[2] = body.keywords;
      obj4[3] = body.emoji_discoverability_enabled;
      obj4[4] = body.partner_actioned_timestamp;
      obj4[5] = body.partner_application_timestamp;
      obj4[6] = body.is_published;
      obj4[7] = body.reasons_to_join;
      obj4[8] = body.social_links;
      obj4[9] = body.about;
      const obj5 = { type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER", guildId: null, metadata: null };
      obj5[1] = callback;
      obj5[2] = obj4;
      body(obj4[5]).dispatch(obj5);
      c4 = 0;
      return obj4;
    })();
  });
  const _fetchMetadataForGuild = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSlugForGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (function*(arg0, body) {
      const dependencyMap = tmp3;
      let c3 = 1;
      const HTTP = callback(outer1_2[4]).HTTP;
      const obj1 = { url: null, rejectWithError: true };
      obj1[0] = outer1_6.GUILD_DISCOVERY_SLUG(callback);
      yield HTTP.get(obj1);
      if (1 === tmp7) {
        c3 = 0;
        let obj3 = slug(709);
        obj3 = { type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL", guildId: null };
        obj3[1] = callback;
        obj3.dispatch(obj3);
        let c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw body;
      } else if (arg0 !== 2) {
        slug = body.body.slug;
        const obj = slug(709);
        const obj4 = { type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS", slug: null };
        obj4[1] = slug;
        obj.dispatch(obj4);
        c3 = 0;
      }
      c3 = 0;
      return body;
    })();
  });
  const _fetchSlugForGuild = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _saveGuildMetadata() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0, body) {
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
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let dependencyMap = tmp3;
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              c8 = undefined;
              c9 = undefined;
              ({ guildId: c0, primaryCategoryId: c1, keywords: c2, emojiDiscoverabilityEnabled: c3, partnerActionedTimestamp: c4, partnerApplicationTimestamp: c5, isPublished: c6, reasonsToJoin: c7, socialLinks: c8, about: c9 } = callback);
              body = undefined;
              let primary_category_id;
              let category_ids;
              let keywords;
              let closure_14;
              let closure_15;
              let closure_16;
              let is_published;
              let reasons_to_join;
              let social_links;
              let about;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              c4 = 1;
              const HTTP = callback(530).HTTP;
              const obj2 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
              obj2[0] = c6.GUILD_DISCOVERY_METADATA(callback);
              const obj3 = { primary_category_id: null, emoji_discoverability_enabled: null, partner_actioned_timestamp: null, partner_application_timestamp: null, keywords: null, is_published: null, reasons_to_join: null, social_links: null, about: null };
              obj3[0] = callback2;
              obj3[1] = c3;
              obj3[2] = c4;
              obj3[3] = c5;
              obj3[4] = dependencyMap;
              obj3[5] = c6;
              obj3[6] = c7;
              obj3[7] = c8;
              obj3[8] = c9;
              obj2[1] = obj3;
              obj2[3] = callback(530).rejectWithMigratedError();
              c5 = 3;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.patch(obj2);
              return obj4;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            body = c3;
            obj1 = callback2(709);
            const obj5 = { type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: null, errors: null };
            obj5[1] = callback;
            obj5[2] = body.body;
            obj1.dispatch(obj5);
            throw body;
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          } else {
            body = body.body;
            primary_category_id = body.primary_category_id;
            category_ids = body.category_ids;
            keywords = body.keywords;
            closure_14 = body.emoji_discoverability_enabled;
            closure_15 = body.partner_actioned_timestamp;
            closure_16 = body.partner_application_timestamp;
            is_published = body.is_published;
            reasons_to_join = body.reasons_to_join;
            social_links = body.social_links;
            about = body.about;
            let obj7 = callback2(709);
            const obj6 = { type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER", guildId: null, metadata: null };
            obj6[1] = callback;
            obj7 = { primaryCategoryId: null, secondaryCategoryIds: null, keywords: null, emojiDiscoverabilityEnabled: null, partnerActionedTimestamp: null, partnerApplicationTimestamp: null, isPublished: null, reasonsToJoin: null, socialLinks: null, about: null };
            obj7[0] = primary_category_id;
            obj7[1] = category_ids;
            obj7[2] = keywords;
            obj7[3] = closure_14;
            obj7[4] = closure_15;
            obj7[5] = closure_16;
            obj7[6] = is_published;
            obj7[7] = reasons_to_join;
            obj7[8] = social_links;
            obj7[9] = about;
            obj6[2] = obj7;
            obj7.dispatch(obj6);
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp18) {
          c3 = tmp18;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp18;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _saveGuildMetadata = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("getPrimaryCategories").fileFinishedImporting("modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx");

export const maybeFetchGuildDiscoveryCategories = function maybeFetchGuildDiscoveryCategories() {
  const self = this;
  const apply = _maybeFetchGuildDiscoveryCategories.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchMetadataForGuild = function fetchMetadataForGuild() {
  const self = this;
  const apply = _fetchMetadataForGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSlugForGuild = function fetchSlugForGuild() {
  const self = this;
  const apply = _fetchSlugForGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateGuildPrimaryCategory = function updateGuildPrimaryCategory(guildId, primaryCategoryId) {
  let obj = dispatcher;
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, primaryCategoryId };
  obj.dispatch(obj);
};
export const updateGuildKeywords = function updateGuildKeywords(guildId, keywords) {
  let obj = dispatcher;
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, keywords };
  obj.dispatch(obj);
};
export const updateGuildEmojiDiscoverabilityEnabled = function updateGuildEmojiDiscoverabilityEnabled(guildId, emojiDiscoverabilityEnabled) {
  let obj = dispatcher;
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, emojiDiscoverabilityEnabled };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataIsPublished = function updateGuildDiscoveryMetadataIsPublished(guildId, isPublished) {
  let obj = dispatcher;
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, isPublished };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataAbout = function updateGuildDiscoveryMetadataAbout(guildId, about) {
  let obj = dispatcher;
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, about };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataReasonsToJoin = function updateGuildDiscoveryMetadataReasonsToJoin(guildId, reasonsToJoin) {
  let obj = dispatcher;
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, reasonsToJoin };
  obj.dispatch(obj);
};
export const updateGuildDiscoveryMetadataSocialLinks = function updateGuildDiscoveryMetadataSocialLinks(guildId, socialLinks) {
  let obj = dispatcher;
  obj = { type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, socialLinks };
  obj.dispatch(obj);
};
export const saveGuildMetadata = function saveGuildMetadata() {
  const self = this;
  const apply = _saveGuildMetadata.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const addGuildCategory = function addGuildCategory(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const HTTP = _sendRequest.HTTP;
  let obj = { url: Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(arg0, arg1), oldFormErrors: true, rejectWithError: null };
  obj[2] = _sendRequest.rejectWithMigratedError();
  const obj2 = _sendRequest;
  const putResult = HTTP.put(obj);
  HTTP.put(obj).then(() => {
    let obj = callback(outer1_2[5]);
    obj = { type: "GUILD_DISCOVERY_CATEGORY_ADD", guildId: closure_0, categoryId: callback };
    obj.dispatch(obj);
  }).catch((body) => {
    let obj = callback(outer1_2[5]);
    obj = { type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: closure_0, errors: body.body };
    obj.dispatch(obj);
  });
};
export const deleteGuildCategory = function deleteGuildCategory(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  const HTTP = _sendRequest.HTTP;
  let obj = { url: Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(arg0, arg1), oldFormErrors: true, rejectWithError: null };
  obj[2] = _sendRequest.rejectWithMigratedError();
  const obj2 = _sendRequest;
  const delResult = HTTP.del(obj);
  HTTP.del(obj).then(() => {
    let obj = callback(outer1_2[5]);
    obj = { type: "GUILD_DISCOVERY_CATEGORY_DELETE", guildId: closure_0, categoryId: callback };
    obj.dispatch(obj);
  }).catch((body) => {
    let obj = callback(outer1_2[5]);
    obj = { type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId: closure_0, errors: body.body };
    obj.dispatch(obj);
  });
};