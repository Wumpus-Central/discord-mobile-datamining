// discord_app/modules/slayer_storefront/navigateToSocialLayerStorefront.tsx
import router_utils from "../routing/router_utils.tsx";
import SlayerStorefrontUtils from "SlayerStorefrontUtils.tsx";
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GuildStore from "../../stores/GuildStore.tsx";
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore.tsx";

require = fn;
function navigateToSocialLayerStorefrontWithGuildPreview() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _navigateToSocialLayerStorefrontWithGuildPreview(arg0) {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          ({
            guildId: closure_129_0,
            invite: closure_129_1,
            pageIndex: closure_129_2,
            skuId: closure_129_3,
            slug: closure_129_4,
          } = closure_0);
          closure_129_5 = undefined;
          let guild3;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_129_5 = null;
            if (null != closure_129_1) {
              const guild = closure_129_1.guild;
              let id;
              if (guild != null) {
                id = guild.id;
              }
              closure_129_0 = id;
              const guild2 = closure_129_1.guild;
              let features;
              if (guild2 != null) {
                features = guild2.features;
              }
              const set = new Set(features);
              closure_129_5 = set;
            }
            if (null != closure_129_0) {
              guild3 = closure_130_4.getGuild(closure_129_0);
              let joinedAt;
              if (guild3 != null) {
                joinedAt = guild3.joinedAt;
              }
              if (null == joinedAt) {
                if (null != closure_129_5) {
                  if (!closure_129_5.has(closure_130_6.PREVIEW_ENABLED)) {
                    if (null != closure_129_1) {
                      let obj4 = closure_130_1(closure_130_2[8]);
                      let obj2 = {
                        inviteKey: closure_129_1.code,
                        context: { location: "game_shop" },
                        skipOnboarding: true,
                      };
                      c3 = 3;
                      c4 = 1;
                      const obj3 = { value: obj4.acceptInvite(obj2), done: false };
                      return obj3;
                    }
                  }
                }
                c3 = 2;
                c4 = 1;
                obj4 = {
                  value: closure_130_0(closure_130_2[7]).startLurking(closure_129_0, {}, { shouldNavigate: false }),
                  done: false,
                };
                return obj4;
              }
            } else {
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        obj2 = closure_130_0(closure_130_2[6]);
        c4 = 3;
        const obj6 = {
          value: obj2.transitionTo(
            closure_130_7.CHANNELS_GAME_SHOP(closure_129_0, closure_129_2, closure_129_3, closure_129_4),
          ),
          done: true,
        };
        return obj6;
      }
    } catch (tmp50) {
      c4 = tmp;
      throw tmp50;
    }
  }
};
const Constants = fn(1074);
({ GuildFeatures: metroRequire, Routes: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/navigateToSocialLayerStorefront.tsx");

export default function navigateToSocialLayerStorefront(arg0) {
  ({ applicationId, guildId, pageIndex, invite, skuId, slug } = arg0);
  let applicationIdFromGuildId = applicationId;
  if (applicationId == null) {
    applicationIdFromGuildId = SocialLayerStorefrontStore.getApplicationIdFromGuildId(guildId);
  }
  let socialLayerStorefrontGuildId = guildId;
  if (guildId == null) {
    let obj = SlayerStorefrontUtils;
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
    resolved = Promise.resolve(
      router_utils.transitionTo(React5.COLLECTIBLES_SHOP_GAME_SHOP(applicationIdFromGuildId, pageIndex, skuId, slug)),
    );
  } else {
    obj = { guildId: socialLayerStorefrontGuildId, pageIndex, invite, skuId, slug };
    resolved = navigateToSocialLayerStorefrontWithGuildPreview(obj);
  }
}
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
    const obj = { eager: true, forceFetch: forceFetch.forceFetch };
    const socialLayerStorefront = obj.fetchSocialLayerStorefront(guildId, obj);
  }
};
export const eagerNavigateToSocialLayerStorefrontForApplication =
  function eagerNavigateToSocialLayerStorefrontForApplication(arg0) {
    ({ applicationId, forceFetch } = arg0);
    const socialLayerStorefrontForApplication =
      SocialLayerStorefrontActionCreators.fetchSocialLayerStorefrontForApplication(applicationId, {
        eager: true,
        forceFetch,
      });
  };
export { navigateToSocialLayerStorefrontWithGuildPreview };
