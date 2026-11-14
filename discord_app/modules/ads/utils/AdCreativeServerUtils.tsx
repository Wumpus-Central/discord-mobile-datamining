// discord_app/modules/ads/utils/AdCreativeServerUtils.tsx
import AdCreativeType from "../../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import BountyTypes from "../BountyTypes.tsx";
import PlayableTypes from "../PlayableTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/ads/utils/AdCreativeServerUtils.tsx");

export function adCreativeFromServer(creative_type) {
  creative_type = undefined;
  if (creative_type != null) {
    creative_type = creative_type.creative_type;
  }
  if (AdCreativeType.AdCreativeType.BOUNTY === creative_type) {
    const obj2 = {
      type: AdCreativeType.AdCreativeType.BOUNTY,
      bounty: BountyTypes.bountyFromServer(creative_type.creative_content),
    };
    return obj2;
  } else if (AdCreativeType.AdCreativeType.PLAYABLE === creative_type) {
    const obj = {
      type: AdCreativeType.AdCreativeType.PLAYABLE,
      playable: PlayableTypes.playableFromServer(creative_type.creative_content),
    };
    return obj;
  } else {
    return null;
  }
}
