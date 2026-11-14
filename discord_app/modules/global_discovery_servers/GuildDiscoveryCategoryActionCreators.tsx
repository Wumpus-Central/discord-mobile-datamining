// discord_app/modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import GuildDiscoveryCategoryStore from "GuildDiscoveryCategoryStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_7 = async function _maybeFetchGuildDiscoveryCategories() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp5;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          locale = locale.locale;
          closure_128_0 = locale;
          if (locale !== fetchedLocale.getFetchedLocale()) {
            const HTTP = require("HTTPUtils").HTTP;
            const request = {
              url: constants.GUILD_DISCOVERY_CATEGORIES,
              query: null,
              oldFormErrors: true,
              rejectWithError: null,
            };
            const obj4 = { locale, primary_only: false };
            request.query = obj4;
            request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
            c2 = 1;
            c3 = 1;
            const obj5 = { value: HTTP.get(request), done: false };
            return obj5;
          } else {
            c3 = 3;
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_1 = value;
        const obj7 = {
          type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
          categories: closure_128_1.body,
          locale: closure_128_0,
        };
        closure_129_1(closure_129_2[5]).dispatch(obj7);
        const obj = closure_129_1(closure_129_2[5]);
      }
      c3 = 3;
      const obj8 = { value, done: true };
      return obj8;
    } catch (tmp17) {
      c3 = tmp;
      throw tmp17;
    }
  }
};
let closure_8 = async function _fetchMetadataForGuild() {
  closure_3 = tmp3;
  closure_130_0 = closure_0;
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.get({ url: Endpoints.GUILD_DISCOVERY_METADATA(closure_0), oldFormErrors: true, rejectWithError: true });
  closure_131_1(closure_131_2[5]).dispatch({ type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL" });
  await "HermesInternal";
  const body = value.body;
  const obj8 = {
    primaryCategoryId: body.primary_category_id,
    secondaryCategoryIds: body.category_ids,
    keywords: body.keywords,
    emojiDiscoverabilityEnabled: body.emoji_discoverability_enabled,
    partnerActionedTimestamp: body.partner_actioned_timestamp,
    partnerApplicationTimestamp: body.partner_application_timestamp,
    isPublished: body.is_published,
    automaticPages: null,
    reasonsToJoin: null,
    socialLinks: null,
    about: null,
  };
  const automatic_pages = body.automatic_pages;
  let automaticPages = automatic_pages;
  if (automatic_pages == null) {
    automaticPages = false;
  }
  obj8.automaticPages = automaticPages;
  obj8.reasonsToJoin = body.reasons_to_join;
  obj8.socialLinks = body.social_links;
  obj8.about = body.about;
  closure_130_2 = obj8;
  closure_131_1(closure_131_2[5]).dispatch({
    type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
    guildId: closure_130_0,
    metadata: closure_130_2,
  });
  return closure_130_2;
};
let closure_9 = async function _fetchSlugForGuild(arg0) {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.get({ url: Endpoints.GUILD_WEB_PAGE(closure_0), rejectWithError: true });
  if (1 === tmp7) {
    c3 = 0;
    closure_130_1(closure_130_2[5]).dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL", guildId: closure_129_0 });
    c5 = 3;
    closure_130_1(closure_130_2[5]);
  } else if (arg0 === 1) {
    c5 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_129_1 = value;
    const _URL = URL;
    const uRL = new URL(closure_129_1.body.seo.canonical_url);
    const pathname = uRL.pathname;
    closure_129_2 = pathname.slice(9);
    closure_130_1(closure_130_2[5]).dispatch({ type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS", slug: closure_129_2 });
    c3 = 0;
    closure_130_1(closure_130_2[5]);
  }
  return value;
};
let closure_10 = async function _saveGuildMetadata(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          closure_130_8 = undefined;
          closure_130_9 = undefined;
          ({
            guildId: closure_130_0,
            primaryCategoryId: closure_130_1,
            keywords: closure_130_2,
            emojiDiscoverabilityEnabled: closure_130_3,
            partnerActionedTimestamp: closure_130_4,
            partnerApplicationTimestamp: closure_130_5,
            isPublished: closure_130_6,
            reasonsToJoin: closure_130_7,
            socialLinks: closure_130_8,
            about: closure_130_9,
          } = closure_0);
          let body;
          let primary_category_id;
          let category_ids;
          let keywords;
          closure_130_14 = undefined;
          closure_130_15 = undefined;
          closure_130_16 = undefined;
          let is_published;
          let automatic_pages;
          let reasons_to_join;
          let social_links;
          let about;
          c6 = 1;
          c7 = 1;
          return { value: "Path", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c5 = 1;
          const HTTP = closure_131_0(closure_131_2[4]).HTTP;
          let patch = HTTP.patch;
          const request = {
            url: closure_131_6.GUILD_DISCOVERY_METADATA(closure_130_0),
            body: null,
            oldFormErrors: true,
            rejectWithError: null,
          };
          let obj6 = {
            primary_category_id: closure_130_1,
            emoji_discoverability_enabled: closure_130_3,
            partner_actioned_timestamp: closure_130_4,
            partner_application_timestamp: closure_130_5,
            keywords: closure_130_2,
          };
          if (undefined !== closure_130_6) {
            const obj7 = { is_published: closure_130_6 };
            let obj8 = obj7;
          } else {
            obj8 = {};
          }
          const merged = Object.assign(obj8);
          obj6.reasons_to_join = closure_130_7;
          obj6.social_links = closure_130_8;
          obj6.about = closure_130_9;
          request.body = obj6;
          obj6 = closure_131_0(closure_131_2[4]);
          request.rejectWithError = obj6.rejectWithMigratedError();
          patch = patch(request);
          c6 = 3;
          c7 = 1;
        }
      } else if (2 === tmp7) {
        c5 = 0;
        closure_130_22 = closure_4;
        const obj9 = {
          type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
          guildId: closure_130_0,
          errors: closure_130_22.body,
        };
        closure_131_1(closure_131_2[5]).dispatch(obj9);
        throw closure_130_22;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        body = value.body;
        primary_category_id = body.primary_category_id;
        category_ids = body.category_ids;
        keywords = body.keywords;
        closure_130_14 = body.emoji_discoverability_enabled;
        closure_130_15 = body.partner_actioned_timestamp;
        closure_130_16 = body.partner_application_timestamp;
        is_published = body.is_published;
        automatic_pages = body.automatic_pages;
        reasons_to_join = body.reasons_to_join;
        social_links = body.social_links;
        about = body.about;
        const obj11 = { type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER", guildId: closure_130_0, metadata: null };
        const obj12 = {
          primaryCategoryId: primary_category_id,
          secondaryCategoryIds: category_ids,
          keywords,
          emojiDiscoverabilityEnabled: closure_130_14,
          partnerActionedTimestamp: closure_130_15,
          partnerApplicationTimestamp: closure_130_16,
          isPublished: is_published,
          automaticPages: null,
          reasonsToJoin: null,
          socialLinks: null,
          about: null,
        };
        let automaticPages = automatic_pages;
        if (automatic_pages == null) {
          automaticPages = false;
        }
        obj12.automaticPages = automaticPages;
        obj12.reasonsToJoin = reasons_to_join;
        obj12.socialLinks = social_links;
        obj12.about = about;
        obj11.metadata = obj12;
        closure_131_1(closure_131_2[5]).dispatch(obj11);
        c5 = 0;
        c7 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp36) {
      closure_4 = tmp36;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp36;
      } else {
        c6 = tmp;
      }
    }
  }
};
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/global_discovery_servers/GuildDiscoveryCategoryActionCreators.tsx");

export function maybeFetchGuildDiscoveryCategories() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function fetchMetadataForGuild() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function fetchSlugForGuild() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function updateGuildPrimaryCategory(guildId, primaryCategoryId) {
  DispatcherDefault.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, primaryCategoryId });
}
export function updateGuildKeywords(guildId, keywords) {
  DispatcherDefault.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, keywords });
}
export function updateGuildEmojiDiscoverabilityEnabled(guildId, emojiDiscoverabilityEnabled) {
  DispatcherDefault.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, emojiDiscoverabilityEnabled });
}
export function updateGuildDiscoveryMetadataIsPublished(guildId, isPublished) {
  DispatcherDefault.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, isPublished });
}
export function updateGuildDiscoveryMetadataAbout(guildId, about) {
  DispatcherDefault.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, about });
}
export function updateGuildDiscoveryMetadataReasonsToJoin(guildId, reasonsToJoin) {
  DispatcherDefault.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, reasonsToJoin });
}
export function updateGuildDiscoveryMetadataSocialLinks(guildId, socialLinks) {
  DispatcherDefault.dispatch({ type: "GUILD_UPDATE_DISCOVERY_METADATA", guildId, socialLinks });
}
export function saveGuildMetadata() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function addGuildCategory(guildId, categoryId) {
  _require = guildId;
  const HTTP = require("HTTPUtils").HTTP;
  const obj = {
    url: Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(guildId, categoryId),
    oldFormErrors: true,
    rejectWithError: require("HTTPUtils").rejectWithMigratedError(),
  };
  const obj2 = require("HTTPUtils");
  const putResult = HTTP.put(obj);
  HTTP.put(obj)
    .then(() => {
      DispatcherDefault.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_ADD", guildId, categoryId });
    })
    .catch((error) => {
      DispatcherDefault.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId, errors: error.body });
    });
}
export function deleteGuildCategory(guildId, categoryId) {
  _require = guildId;
  const HTTP = require("HTTPUtils").HTTP;
  const obj = {
    url: Endpoints.GUILD_DISCOVERY_UPDATE_CATEGORY(guildId, categoryId),
    oldFormErrors: true,
    rejectWithError: require("HTTPUtils").rejectWithMigratedError(),
  };
  const obj2 = require("HTTPUtils");
  const delResult = HTTP.del(obj);
  HTTP.del(obj)
    .then(() => {
      DispatcherDefault.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_DELETE", guildId, categoryId });
    })
    .catch((error) => {
      DispatcherDefault.dispatch({ type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL", guildId, errors: error.body });
    });
}
