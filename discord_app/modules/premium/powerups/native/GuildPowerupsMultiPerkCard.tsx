// discord_app/modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx
import openGuildPowerupsMultiPerkBottomSheetDefault from "utils/openGuildPowerupsMultiPerkBottomSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkCard.tsx");

export default function GuildPowerupsMultiPerkCard(guildId) {
  guildId = guildId.guildId;
  const listing = guildId.listing;
  let badge = listing(12549)(guildId, listing);
  let obj = guildId(504);
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { guildId, powerups: listing.powerups };
  costDecorator = listing(12573)(obj);
  const items1 = [guildId, listing];
  let tmp5 = null;
  if (null != costDecorator) {
    tmp5 = null;
    if (null != badge) {
      obj = {
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
      obj.cost = costDecorator.cost;
      const image = badge.image;
      obj.imageUrl = stateFromStores ? image.staticUrl : image.animatedUrl;
      ({ status: obj3.status, costDecorator } = costDecorator);
      obj.costDecorator = costDecorator;
      obj.onPress = tmp4;
      badge = badge.badge;
      obj.badge = badge;
      jsx(listing(12571), {
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
}
