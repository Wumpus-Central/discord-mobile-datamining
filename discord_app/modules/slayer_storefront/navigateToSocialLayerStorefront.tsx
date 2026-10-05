// discord_app/modules/slayer_storefront/navigateToSocialLayerStorefront.tsx
import router_utils from "../routing/router_utils.tsx";
import SlayerStorefrontUtils from "SlayerStorefrontUtils.tsx";
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import GuildStore from "../../stores/GuildStore.tsx";
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
function navigateToSocialLayerStorefrontWithGuildPreview() {
  return obj(...arguments);
}
let obj = function _navigateToSocialLayerStorefrontWithGuildPreview() {
  obj = _asyncToGenerator(async function (arg0) {
    let c1;
    let c2;
    let c3;
    let c4;
    let id;
    let obj3;
    let obj5;
    let obj8;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
        let _Set1;
        let joinedAt;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            id = undefined;
            c2 = undefined;
            ({ guildId: id, invite: c1, pageIndex: c2, skuId: c3, slug: c4 } = closure_0);
            _Set1 = undefined;
            joinedAt = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else {
          if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              _Set1 = null;
              if (null != tmp) {
                const guild = tmp.guild;
                id = undefined;
                if (guild != null) {
                  id = guild.id;
                }
                const guild2 = tmp.guild;
                let features;
                const _Set = Set;
                if (guild2 != null) {
                  features = guild2.features;
                }
                const self = this;
                const self2 = this;
                _Set1 = new _Set(features);
              }
              if (null != id) {
                closure_130_4.getGuild(id);
                joinedAt = undefined;
                if (joinedAt != null) {
                  joinedAt = joinedAt.joinedAt;
                }
                if (null == joinedAt) {
                  if (null != _Set1) {
                    if (!_Set1.has(closure_130_6.PREVIEW_ENABLED)) {
                      if (null != tmp) {
                        const obj7 = { inviteKey: tmp.code, context: { location: "game_shop" }, skipOnboarding: true };
                        c3 = 3;
                        c4 = 1;
                        const obj9 = { value: obj5.acceptInvite(obj7), done: false };
                        obj5 = closure_130_1(closure_130_2[8]);
                        return obj9;
                      }
                    }
                  }
                  c3 = 2;
                  c4 = 1;
                  const obj10 = { value: obj8.startLurking(id, {}, { shouldNavigate: false }), done: false };
                  obj8 = closure_130_0(closure_130_2[7]);
                  return obj10;
                }
              } else {
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            }
          } else if (2 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj11 = { value, done: true };
              return obj11;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
          c4 = 3;
          const obj12 = { value: obj3.transitionTo(closure_130_7.CHANNELS_GAME_SHOP(id, c2, c3, c4)), done: true };
          obj3 = closure_130_0(closure_130_2[6]);
          return obj12;
        }
      } catch (tmp47) {
        c4 = 3;
        throw tmp47;
      }
    }
  });
  return obj(...arguments);
};
({ GuildFeatures: metroRequire, Routes: metroImportDefault } = Constants);
const result = size.fileFinishedImporting("modules/slayer_storefront/navigateToSocialLayerStorefront.tsx");

export default function navigateToSocialLayerStorefront(arg0) {
  let applicationId;
  let guildId;
  let invite;
  let pageIndex;
  let resolved;
  let skuId;
  let slug;
  ({ applicationId, guildId, pageIndex, invite, skuId, slug } = arg0);
  let applicationIdFromGuildId = applicationId;
  if (applicationId == null) {
    applicationIdFromGuildId = SocialLayerStorefrontStore.getApplicationIdFromGuildId(guildId);
  }
  let socialLayerStorefrontGuildId = guildId;
  if (guildId == null) {
    obj = SlayerStorefrontUtils;
    socialLayerStorefrontGuildId = obj.getSocialLayerStorefrontGuildId(applicationId);
  }
  if (null == applicationIdFromGuildId) {
    if (null == socialLayerStorefrontGuildId) {
      if (null == invite) {
        resolved = Promise.resolve();
      }
      return resolved;
    }
  }
  if (null != applicationIdFromGuildId) {
    const obj3 = router_utils;
    resolved = resolve(
      obj3.transitionTo(
        metroImportDefault.COLLECTIBLES_SHOP_GAME_SHOP(applicationIdFromGuildId, pageIndex, skuId, slug),
      ),
    );
  } else {
    const obj2 = { guildId: socialLayerStorefrontGuildId, pageIndex, invite, skuId, slug };
    resolved = navigateToSocialLayerStorefrontWithGuildPreview(obj2);
  }
}
export const eagerNavigateToSocialLayerStorefront = function eagerNavigateToSocialLayerStorefront(forceFetch) {
  let guildId;
  let invite;
  ({ guildId, invite } = forceFetch);
  forceFetch = forceFetch.forceFetch;
  if (null != invite) {
    const guild = invite.guild;
    let id;
    if (guild != null) {
      id = guild.id;
    }
    guildId = id;
  }
  if (null != guildId) {
    const obj2 = { eager: true, forceFetch };
    obj = SocialLayerStorefrontActionCreators;
    const socialLayerStorefront = obj.fetchSocialLayerStorefront(guildId, obj2);
  }
};
export const eagerNavigateToSocialLayerStorefrontForApplication =
  function eagerNavigateToSocialLayerStorefrontForApplication(arg0) {
    let applicationId;
    let forceFetch;
    ({ applicationId, forceFetch } = arg0);
    obj = SocialLayerStorefrontActionCreators;
    const socialLayerStorefrontForApplication = obj.fetchSocialLayerStorefrontForApplication(applicationId, {
      eager: true,
      forceFetch,
    });
  };
export { navigateToSocialLayerStorefrontWithGuildPreview };
