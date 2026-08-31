// === Module 7870: getJoinButtonLabels ===

// Module 7870 (getJoinButtonLabels)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import StickerFormat from "StickerFormat" /* 5180 */;

let obj = { id: "781323471249604648", format_type: StickerFormat.StickerFormat.APNG, description: "Cheerful Choco jumps out of gift box", name: "Surprise" };
let items = [obj, , , , ];
obj = { id: "781324642736144424", format_type: StickerFormat.StickerFormat.APNG, description: "Cheerful Choco preens against window", name: "Affection" };
items[1] = obj;
obj = { id: "781323769960202280", format_type: StickerFormat.StickerFormat.APNG, description: "Cheerful Choco sparkles", name: "OMG" };
items[2] = obj;
items[3] = { id: "781324722394103808", format_type: StickerFormat.StickerFormat.APNG, description: "Cheerful Choco cheers", name: "Cheer" };
const obj1 = { id: "781324722394103808", format_type: StickerFormat.StickerFormat.APNG, description: "Cheerful Choco cheers", name: "Cheer" };
items[4] = { id: "813951723822645278", format_type: StickerFormat.StickerFormat.APNG, description: "Cheerful Choco gives thumbs up", name: "Nice" };
const obj2 = { id: "813951723822645278", format_type: StickerFormat.StickerFormat.APNG, description: "Cheerful Choco gives thumbs up", name: "Nice" };
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageConstants.tsx");

export const getJoinButtonLabels = function getJoinButtonLabels() {
  const intl = getSystemLocale.intl;
  const items = [intl.string(getSystemLocale.t.b6wEe6), ];
  const intl2 = getSystemLocale.intl;
  items[1] = intl2.string(getSystemLocale.t.i8o9hX);
  return items;
};
export const getRenewButtonLabels = function getRenewButtonLabels() {
  const intl = getSystemLocale.intl;
  const items = [intl.string(getSystemLocale.t.vqnToc), ];
  const intl2 = getSystemLocale.intl;
  items[1] = intl2.string(getSystemLocale.t["9yh+dM"]);
  return items;
};
export const STICKERS = items;