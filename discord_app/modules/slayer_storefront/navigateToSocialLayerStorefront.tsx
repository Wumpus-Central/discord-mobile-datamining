// === Module 13479: navigateToSocialLayerStorefront ===

// Module 13479 (navigateToSocialLayerStorefront)
import router_utils from "router_utils" /* 1100 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7299 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10887 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildStore from "GuildStore" /* 1979 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 7301 */;

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
  closure_1 = tmp2;
  ({ guildId: closure_129_0, invite: closure_129_1, pageIndex: closure_129_2, skuId: closure_129_3, slug: closure_129_4 } = closure_0);
  await "PX_16";
  if (1 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
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
        closure_129_5 = new Set(features);
        new Set(features);
      }
      if (null != closure_129_0) {
        const guild3 = closure_130_4.getGuild(closure_129_0);
        let joinedAt;
        if (guild3 != null) {
          joinedAt = guild3.joinedAt;
        }
        if (null == joinedAt) {
          if (null != closure_129_5) {
            if (!closure_129_5.has(closure_130_6.PREVIEW_ENABLED)) {
              if (null != closure_129_1) {
                let obj4 = closure_130_1(closure_130_2[8]);
                let obj2 = { inviteKey: closure_129_1.code, context: { location: "game_shop" }, skipOnboarding: true };
                c3 = 3;
                c4 = 1;
                return { value: obj4.acceptInvite(obj2), done: false };
              }
            }
          }
          c3 = 2;
          c4 = 1;
          obj4 = { value: closure_130_0(closure_130_2[7]).startLurking(closure_129_0, {}, { shouldNavigate: false }), done: false };
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
      return { value, done: true };
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  }
  obj2 = closure_130_0(closure_130_2[6]);
  return obj2.transitionTo(closure_130_7.CHANNELS_GAME_SHOP(closure_129_0, closure_129_2, closure_129_3, closure_129_4));
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
    resolved = Promise.resolve(router_utils.transitionTo(React5.COLLECTIBLES_SHOP_GAME_SHOP(applicationIdFromGuildId, pageIndex, skuId, slug)));
  } else {
    obj = { guildId: socialLayerStorefrontGuildId, pageIndex, invite, skuId, slug };
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
    const obj = { eager: true, forceFetch: forceFetch.forceFetch };
    const socialLayerStorefront = obj.fetchSocialLayerStorefront(guildId, obj);
  }
};
export const eagerNavigateToSocialLayerStorefrontForApplication = function eagerNavigateToSocialLayerStorefrontForApplication(arg0) {
  ({ applicationId, forceFetch } = arg0);
  const socialLayerStorefrontForApplication = SocialLayerStorefrontActionCreators.fetchSocialLayerStorefrontForApplication(applicationId, { eager: true, forceFetch });
};
export { navigateToSocialLayerStorefrontWithGuildPreview };