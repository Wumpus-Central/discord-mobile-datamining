// === Module 8537: parseCollectiblesSequencedOffers ===

// Module 8537 (parseCollectiblesSequencedOffers)
import size from "module_2" /* 2 */;

function parseSequencedOffer(assets) {
  assets = assets.assets;
  return { position: assets.position, cardShape: assets.card_shape, assets: { locked: assets.locked, calendarLocked: assets.calendar_locked, hint: assets.hint, idleAnimation: assets.idle_animation, revealAnimation: assets.reveal_animation } };
}
const result = size.fileFinishedImporting("modules/collectibles/utils/parseCollectiblesSequencedOffers.tsx");

export default function parseCollectiblesSequencedOffers(collectionId) {
  const obj = { collectionId: collectionId.collection_id, startsAt: null, endsAt: null, promotions: null };
  const starts_at = collectionId.starts_at;
  let date = null;
  if (null != starts_at) {
    const _Date = Date;
    date = new Date(starts_at);
  }
  obj.startsAt = date;
  const ends_at = collectionId.ends_at;
  let date1 = null;
  if (null != ends_at) {
    const _Date2 = Date;
    date1 = new Date(ends_at);
  }
  obj.endsAt = date1;
  const promotions = collectionId.promotions;
  obj.promotions = promotions.map(parseSequencedOffer);
  return obj;
};