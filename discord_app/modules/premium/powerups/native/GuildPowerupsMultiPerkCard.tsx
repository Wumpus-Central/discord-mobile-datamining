// discord_app/modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx
import openGuildPowerupsMultiPerkBottomSheetDefault from "utils/openGuildPowerupsMultiPerkBottomSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = guildId(576).c(17);
      guildId = guildId.guildId;
      const listing = guildId.listing;
      const tmp5 = listing(12208)(guildId, listing);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function u() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      guildId(504);
      if (cResult[2] === guildId) {
        if (cResult[3] === listing.powerups) {
          let tmp11 = cResult[4];
        }
        const tmp12 = tmp4(12232)(tmp11);
        if (cResult[5] === guildId) {
          if (cResult[6] === listing) {
            let tmp13 = cResult[7];
          }
          if (null != tmp12) {
            if (null != tmp5) {
              const image = tmp5.image;
              const tmp15 = tmp10 ? image.staticUrl : image.animatedUrl;
              if (cResult[8] === tmp5.badge) {
                if (cResult[9] === tmp5.description) {
                  if (cResult[10] === tmp5.title) {
                    if (cResult[11] === tmp13) {
                      if (cResult[12] === tmp12.cost) {
                        if (cResult[13] === tmp12.costDecorator) {
                          if (cResult[14] === tmp12.status) {
                            if (cResult[15] === tmp15) {
                              let tmp16 = cResult[16];
                            }
                            return tmp16;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj2 = {
                title: null,
                description: null,
                cost: null,
                imageUrl: null,
                status: null,
                costDecorator: null,
                onPress: null,
                badge: null,
              };
              ({ title: obj3.title, description: obj3.description } = tmp5);
              obj2.cost = tmp12.cost;
              obj2.imageUrl = tmp15;
              ({ status: obj3.status, costDecorator: obj3.costDecorator } = tmp12);
              obj2.onPress = tmp13;
              obj2.badge = tmp5.badge;
              const tmp18 = jsx(tmp4(12230), {
                title: null,
                description: null,
                cost: null,
                imageUrl: null,
                status: null,
                costDecorator: null,
                onPress: null,
                badge: null,
              });
              cResult[8] = tmp5.badge;
              cResult[9] = tmp5.description;
              cResult[10] = tmp5.title;
              cResult[11] = tmp13;
              cResult[12] = tmp12.cost;
              cResult[13] = tmp12.costDecorator;
              cResult[14] = tmp12.status;
              cResult[15] = tmp15;
              cResult[16] = tmp18;
              tmp16 = tmp18;
            }
          }
          return null;
        }
        const fn2 = function w() {
          openGuildPowerupsMultiPerkBottomSheetDefault({ guildId, listing });
        };
        cResult[5] = guildId;
        cResult[6] = listing;
        cResult[7] = fn2;
        tmp13 = fn2;
      }
      const obj5 = { guildId, powerups: listing.powerups };
      cResult[2] = guildId;
      cResult[3] = listing.powerups;
      cResult[4] = obj5;
      tmp11 = obj5;
      const obj = guildId(576);
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const listing = guildId.listing;
      let badge = listing(12208)(guildId, listing);
      const items = [AccessibilityStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      costDecorator = listing(12232)({ guildId, powerups: listing.powerups });
      const items1 = [guildId, listing];
      let tmp5 = null;
      if (null != costDecorator) {
        tmp5 = null;
        if (null != badge) {
          const obj5 = {
            title: null,
            description: null,
            cost: null,
            imageUrl: null,
            status: null,
            costDecorator: null,
            onPress: null,
            badge: null,
          };
          ({ title: obj3.title, description: obj3.description } = badge);
          obj5.cost = costDecorator.cost;
          const image = badge.image;
          obj5.imageUrl = stateFromStores ? image.staticUrl : image.animatedUrl;
          ({ status: obj3.status, costDecorator } = costDecorator);
          obj5.costDecorator = costDecorator;
          obj5.onPress = tmp4;
          badge = badge.badge;
          obj5.badge = badge;
          jsx(listing(12230), {
            title: null,
            description: null,
            cost: null,
            imageUrl: null,
            status: null,
            costDecorator: null,
            onPress: null,
            badge: null,
          });
        }
      }
      return tmp5;
    };
