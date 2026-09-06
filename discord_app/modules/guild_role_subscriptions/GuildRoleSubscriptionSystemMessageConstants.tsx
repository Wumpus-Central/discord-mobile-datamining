// === Module 7993: GuildRoleSubscriptionSystemMessageConstants ===

// Module 7993 (GuildRoleSubscriptionSystemMessageConstants)
import util from "util" /* 1114 */;
import StickersTypes from "StickersTypes" /* 5268 */;
import size from "module_2" /* 2 */;

let obj = { id: "781323471249604648", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco jumps out of gift box", name: "Surprise" };
let items = [obj, , , , ];
obj = { id: "781324642736144424", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco preens against window", name: "Affection" };
items[1] = obj;
obj = { id: "781323769960202280", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco sparkles", name: "OMG" };
items[2] = obj;
items[3] = { id: "781324722394103808", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco cheers", name: "Cheer" };
const obj1 = { id: "781324722394103808", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco cheers", name: "Cheer" };
items[4] = { id: "813951723822645278", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco gives thumbs up", name: "Nice" };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageConstants.tsx");

export const getJoinButtonLabels = function getJoinButtonLabels() {
  const intl = util.intl;
  const items = [intl.string(util.t.b6wEe6), ];
  const intl2 = util.intl;
  items[1] = intl2.string(util.t.i8o9hX);
  return items;
};
export const getRenewButtonLabels = function getRenewButtonLabels() {
  const intl = util.intl;
  const items = [intl.string(util.t.vqnToc), ];
  const intl2 = util.intl;
  items[1] = intl2.string(util.t["9yh+dM"]);
  return items;
};
export const STICKERS = items;