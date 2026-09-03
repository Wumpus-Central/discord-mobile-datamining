// === Module 13295: navigateToSocialLayerStorefrontWithGuildPreview ===

// Module 13295 (navigateToSocialLayerStorefrontWithGuildPreview)
import transitionTo from "transitionTo" /* 1219 */;
import getPrice from "getPrice" /* 6082 */;
import _fetchSocialLayerStorefront from "_fetchSocialLayerStorefront" /* 8512 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "createGuildRecordFromRust" /* 1908 */;
import closure_5 from "handleUserSettingsStoreUpdate" /* 6084 */;
import ME from "ME" /* 673 */;

require = arg1;
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
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (guild === 2) {
        guild = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          guild = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              guild = 3;
              throw arg1;
            } else if (arg0 === 2) {
              guild = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              let lib = tmp2;
              id = undefined;
              lib = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              guild = undefined;
              ({ guildId: id, invite: c1, pageIndex: c2, skuId: c3, slug: c4 } = id);
              let set;
              let guild3;
              c3 = 1;
              guild = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                guild = 3;
                throw arg1;
              } else if (arg0 === 2) {
                guild = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                set = null;
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
                  guild3 = guild.getGuild(id);
                  let joinedAt;
                  if (guild3 != null) {
                    joinedAt = guild3.joinedAt;
                  }
                  if (null == joinedAt) {
                    if (null != set) {
                      if (!set.has(guild3.PREVIEW_ENABLED)) {
                        if (null != lib) {
                          let obj4 = lib(8668);
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
                    obj4[0] = id(6195).startLurking(id, {}, { shouldNavigate: false });
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
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            obj2 = id(1219);
            guild = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = obj2.transitionTo(closure_7.CHANNELS_GAME_SHOP(id, dependencyMap, c3, guild));
            return obj6;
          }
        } catch (tmp50) {
          guild = tmp;
          throw tmp50;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ GuildFeatures: closure_6, Routes: error } = ME);
const result = require("set").fileFinishedImporting("modules/slayer_storefront/navigateToSocialLayerStorefront.tsx");

export default function navigateToSocialLayerStorefront(arg0) {
  ({ applicationId, guildId, pageIndex, invite, skuId, slug } = arg0);
  let applicationIdFromGuildId = applicationId;
  if (applicationId == null) {
    applicationIdFromGuildId = applicationIdFromGuildId.getApplicationIdFromGuildId(guildId);
  }
  let socialLayerStorefrontGuildId = guildId;
  if (guildId == null) {
    let obj = getPrice;
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
    resolved = Promise.resolve(transitionTo.transitionTo(closure_7.COLLECTIBLES_SHOP_GAME_SHOP(applicationIdFromGuildId, pageIndex, skuId, slug)));
    const obj3 = transitionTo;
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
    let obj = _fetchSocialLayerStorefront;
    obj = { eager: true, forceFetch: null };
    obj[1] = forceFetch.forceFetch;
    const socialLayerStorefront = obj.fetchSocialLayerStorefront(guildId, obj);
  }
};
export const eagerNavigateToSocialLayerStorefrontForApplication = function eagerNavigateToSocialLayerStorefrontForApplication(arg0) {
  ({ applicationId, forceFetch } = arg0);
  const socialLayerStorefrontForApplication = _fetchSocialLayerStorefront.fetchSocialLayerStorefrontForApplication(applicationId, { eager: true, forceFetch });
};
export { navigateToSocialLayerStorefrontWithGuildPreview };