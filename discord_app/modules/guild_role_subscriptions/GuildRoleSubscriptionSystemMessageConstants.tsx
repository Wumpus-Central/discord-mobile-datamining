// === Module 7663: GuildRoleSubscriptionSystemMessageConstants ===

// Module 7663 (GuildRoleSubscriptionSystemMessageConstants)
import intl3 from "intl" /* 1126 */;
import StickersTypes from "StickersTypes" /* 5436 */;
import size from "module_2" /* 2 */;

let items = [{ id: "781323471249604648", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco jumps out of gift box", name: "Surprise" }, , , , ];
({ id: "781323471249604648", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco jumps out of gift box", name: "Surprise" });
items[1] = { id: "781324642736144424", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco preens against window", name: "Affection" };
({ id: "781324642736144424", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco preens against window", name: "Affection" });
items[2] = { id: "781323769960202280", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco sparkles", name: "OMG" };
({ id: "781323769960202280", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco sparkles", name: "OMG" });
items[3] = { id: "781324722394103808", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco cheers", name: "Cheer" };
({ id: "781324722394103808", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco cheers", name: "Cheer" });
items[4] = { id: "813951723822645278", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco gives thumbs up", name: "Nice" };
({ id: "813951723822645278", format_type: StickersTypes.StickerFormat.APNG, description: "Cheerful Choco gives thumbs up", name: "Nice" });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionSystemMessageConstants.tsx");

export const getJoinButtonLabels = function getJoinButtonLabels() {
  const intl = intl3.intl;
  const items = [intl.string(intl3.t.b6wEe6), ];
  const intl2 = intl3.intl;
  items[1] = intl2.string(intl3.t.i8o9hX);
  return items;
};
export const getRenewButtonLabels = function getRenewButtonLabels() {
  const intl = intl3.intl;
  const items = [intl.string(intl3.t.vqnToc), ];
  const intl2 = intl3.intl;
  items[1] = intl2.string(intl3.t["9yh+dM"]);
  return items;
};
export const STICKERS = items;