// === Module 9849: AdCreativeServerUtils ===

// Module 9849 (AdCreativeServerUtils)
import AdCreativeType from "AdCreativeType" /* 6446 */;
import BountyTypes from "BountyTypes" /* 9850 */;
import PlayableTypes from "PlayableTypes" /* 9866 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/ads/utils/AdCreativeServerUtils.tsx");

export function adCreativeFromServer(creative_type) {
  creative_type = undefined;
  if (creative_type != null) {
    creative_type = creative_type.creative_type;
  }
  if (AdCreativeType.AdCreativeType.BOUNTY === creative_type) {
    const obj2 = { type: AdCreativeType.AdCreativeType.BOUNTY, bounty: BountyTypes.bountyFromServer(creative_type.creative_content) };
    return obj2;
  } else if (AdCreativeType.AdCreativeType.PLAYABLE === creative_type) {
    const obj = { type: AdCreativeType.AdCreativeType.PLAYABLE, playable: PlayableTypes.playableFromServer(creative_type.creative_content) };
    return obj;
  } else {
    return null;
  }
}