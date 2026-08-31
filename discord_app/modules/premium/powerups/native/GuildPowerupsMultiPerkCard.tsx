// === Module 12103: GuildPowerupsMultiPerkCard ===

// Module 12103 (GuildPowerupsMultiPerkCard)
import closure_3 from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4440 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx");

export default function GuildPowerupsMultiPerkCard(guildId) {
  guildId = guildId.guildId;
  const listing = guildId.listing;
  let badge = listing(12080)(guildId, listing);
  let obj = guildId(589);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { guildId, powerups: listing.powerups };
  costDecorator = listing(12104)(obj);
  const items1 = [guildId, listing];
  let tmp5 = null;
  if (null != costDecorator) {
    tmp5 = null;
    if (null != badge) {
      obj = { title: null, description: null, cost: null, imageUrl: null, status: null, costDecorator: null, onPress: null, badge: null };
      ({ title: obj3[0], description: obj3[1] } = badge);
      obj[2] = costDecorator.cost;
      const image = badge.image;
      obj[3] = stateFromStores ? image.staticUrl : image.animatedUrl;
      ({ status: obj3[4], costDecorator } = costDecorator);
      obj[5] = costDecorator;
      obj[6] = tmp4;
      badge = badge.badge;
      obj[7] = badge;
      jsx(listing(12102), { title: null, description: null, cost: null, imageUrl: null, status: null, costDecorator: null, onPress: null, badge: null });
      const tmp6 = jsx;
    }
  }
  return tmp5;
};