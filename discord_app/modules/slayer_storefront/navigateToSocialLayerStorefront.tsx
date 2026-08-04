import getPrice from "getPrice";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleUserSettingsStoreUpdate from "handleUserSettingsStoreUpdate";
import ME from "ME";

let closure_6;
let error;
const require = arg1;
function navigateToSocialLayerStorefrontWithGuildPreview(arg0) {
  const self = this;
  const apply = _navigateToSocialLayerStorefrontWithGuildPreview.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _navigateToSocialLayerStorefrontWithGuildPreview() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c1;
      let c2;
      let c3;
      let c4;
      let id;
      const lib = tmp2;
      ({ guildId: id, invite: c1, pageIndex: c2, skuId: c3, slug: c4 } = id);
      yield "ct";
      if (1 === tmp5) {
        if (arg0 === 1) {
          let guild = 3;
          throw arg1;
        } else if (arg0 === 2) {
          guild = 3;
          const obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          let set = null;
          if (null != lib) {
            guild = lib.guild;
            id = undefined;
            if (guild != null) {
              id = guild.id;
            }
            const guild2 = lib.guild;
            let features;
            if (guild2 != null) {
              features = guild2.features;
            }
            set = new Set(features);
          }
          if (null != id) {
            const guild3 = guild.getGuild(id);
            let joinedAt;
            if (guild3 != null) {
              joinedAt = guild3.joinedAt;
            }
            if (null == joinedAt) {
              if (null != set) {
                if (!set.has(guild3.PREVIEW_ENABLED)) {
                  if (null != lib) {
                    let obj4 = lib(7679);
                    let obj2 = { inviteKey: null, context: null, skipOnboarding: true };
                    obj2[0] = lib.code;
                    obj2[1] = { location: "game_shop" };
                    c3 = 3;
                    guild = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = obj4.acceptInvite(obj2);
                    return obj3;
                  }
                }
              }
              c3 = 2;
              guild = 1;
              obj4 = { value: null, done: false };
              obj4[0] = id(5865).startLurking(id, {}, { shouldNavigate: false });
              return obj4;
            }
          } else {
            guild = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          guild = 3;
          throw arg1;
        } else if (arg0 === 2) {
          guild = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        }
      } else if (arg0 === 1) {
        guild = 3;
        throw arg1;
      } else if (arg0 === 2) {
        guild = 3;
        const obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      }
      obj2 = id(1222);
      return obj2.transitionTo(closure_7.CHANNELS_GAME_SHOP(id, dependencyMap, c3, guild));
    })();
    iter.next();
    return iter;
  });
  const _navigateToSocialLayerStorefrontWithGuildPreview = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ GuildFeatures: closure_6, Routes: error } = ME);
const result = require("handleUserSettingsStoreUpdate").fileFinishedImporting("modules/slayer_storefront/navigateToSocialLayerStorefront.tsx");

export default function navigateToSocialLayerStorefront(arg0) {
  let applicationId;
  let guildId;
  let invite;
  let pageIndex;
  let skuId;
  let slug;
  ({ applicationId, guildId, pageIndex, invite, skuId, slug } = arg0);
  let applicationIdFromGuildId = applicationId;
  if (applicationId == null) {
    applicationIdFromGuildId = applicationIdFromGuildId.getApplicationIdFromGuildId(guildId);
  }
  let socialLayerStorefrontGuildId = guildId;
  if (guildId == null) {
    let obj = require(5757) /* getPrice */;
    socialLayerStorefrontGuildId = obj.getSocialLayerStorefrontGuildId(applicationId);
  }
  if (null == applicationIdFromGuildId) {
    if (null == socialLayerStorefrontGuildId) {
      if (null == invite) {
        let resolved = Promise.resolve();
      }
      return resolved;
    }
  }
  if (null != applicationIdFromGuildId) {
    resolved = Promise.resolve(require(1222) /* transitionTo */.transitionTo(closure_7.COLLECTIBLES_SHOP_GAME_SHOP(applicationIdFromGuildId, pageIndex, skuId, slug)));
    const obj3 = require(1222) /* transitionTo */;
  } else {
    obj = { guildId: null, pageIndex: null, invite: null, skuId: null, slug: null };
    obj[0] = socialLayerStorefrontGuildId;
    obj[1] = pageIndex;
    obj[2] = invite;
    obj[3] = skuId;
    obj[4] = slug;
    resolved = navigateToSocialLayerStorefrontWithGuildPreview(obj);
  }
};
export const eagerNavigateToSocialLayerStorefront = function eagerNavigateToSocialLayerStorefront(forceFetch) {
  let guildId;
  let invite;
  ({ guildId, invite } = forceFetch);
  if (null != invite) {
    const guild = invite.guild;
    let id;
    if (guild != null) {
      id = guild.id;
    }
    guildId = id;
  }
  if (null != guildId) {
    let obj = require(7678) /* _fetchSocialLayerStorefront */;
    obj = { eager: true, forceFetch: null };
    obj[1] = forceFetch.forceFetch;
    const socialLayerStorefront = obj.fetchSocialLayerStorefront(guildId, obj);
  }
};
export const eagerNavigateToSocialLayerStorefrontForApplication = function eagerNavigateToSocialLayerStorefrontForApplication(arg0) {
  let applicationId;
  let forceFetch;
  ({ applicationId, forceFetch } = arg0);
  const socialLayerStorefrontForApplication = require(7678) /* _fetchSocialLayerStorefront */.fetchSocialLayerStorefrontForApplication(applicationId, { eager: true, forceFetch });
};
export { navigateToSocialLayerStorefrontWithGuildPreview };