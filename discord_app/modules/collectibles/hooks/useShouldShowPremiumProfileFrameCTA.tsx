const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = importDefault(12022)(_location) && !importDefault(8886)(_location);
  if (tmp2) {
    tmp2 = location.product.type === require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};