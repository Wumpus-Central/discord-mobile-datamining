// === Module 12246: GuildPowerupsMultiPerkCard ===

// Module 12246 (GuildPowerupsMultiPerkCard)
import Fragment from "Fragment" /* 21 */;
import openGuildPowerupsMultiPerkBottomSheetDefault from "openGuildPowerupsMultiPerkBottomSheet" /* 12220 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildId;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let tmp6;
  let tmp7;
  let useReducedMotion;
  let obj = guildId(576);
  const cResult = obj.c(17);
  const tmp = guildId;
  guildId = guildId.guildId;
  const listing = guildId.listing;
  const tmp5 = listing(12223)(guildId, listing);
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
  tmp(504);
  if (cResult[2] === guildId) {
    let tmp11;
    if (cResult[3] === listing.powerups) {
      tmp11 = cResult[4];
    }
    const tmp12 = listing(12247)(tmp11);
    if (cResult[5] === guildId) {
      let tmp13;
      if (cResult[6] === listing) {
        tmp13 = cResult[7];
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
                        let tmp16;
                        if (cResult[15] === tmp15) {
                          tmp16 = cResult[16];
                        }
                        return tmp16;
                      }
                    }
                  }
                }
              }
            }
          }
          ({ title: obj3.title, description: obj3.description } = tmp5);
          ({ status: obj3.status, costDecorator: obj3.costDecorator } = tmp12);
          const tmp18 = jsx(listing(12245), { title: null, description: null, cost: tmp12.cost, imageUrl: tmp15, status: null, costDecorator: null, onPress: tmp13, badge: tmp5.badge });
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
      const obj = { guildId, listing };
      openGuildPowerupsMultiPerkBottomSheetDefault(obj);
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
}) : ((guildId) => {
  let useReducedMotion;
  guildId = guildId.guildId;
  const listing = guildId.listing;
  const tmp3 = listing(12223)(guildId, listing);
  let obj = guildId(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { guildId, powerups: listing.powerups };
  const tmp5 = listing(12247)(obj2);
  const items1 = [guildId, listing];
  let tmp8Result = null;
  const tmp = listing;
  if (null != tmp5) {
    tmp8Result = null;
    if (null != tmp3) {
      ({ title: obj3.title, description: obj3.description } = tmp3);
      const image = tmp3.image;
      ({ status: obj3.status, costDecorator: obj3.costDecorator } = tmp5);
      tmp8Result = jsx(tmp(12245), { title: null, description: null, cost: tmp5.cost, imageUrl: stateFromStores ? image.staticUrl : image.animatedUrl, status: null, costDecorator: null, onPress: tmp6, badge: tmp3.badge });
    }
  }
  return tmp8Result;
});
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx");

export default tmp2;