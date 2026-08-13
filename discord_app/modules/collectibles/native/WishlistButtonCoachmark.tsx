// discord_app/modules/collectibles/native/WishlistButtonCoachmark.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
const result = require("ContentDismissActionType").fileFinishedImporting("modules/collectibles/native/WishlistButtonCoachmark.tsx");

export default function WishlistButtonCoachmark(anchorRef) {
  let hasNeverWishlisted;
  let dependencyMap;
  let callback;
  let registerDismiss;
  hasNeverWishlisted = hasNeverWishlisted(9402).useHasNeverWishlisted();
  let items = [hasNeverWishlisted];
  const memo = registerDismiss.useMemo(() => {
    if (hasNeverWishlisted) {
      const items = [hasNeverWishlisted(_undefined[4]).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  let obj = hasNeverWishlisted(9402);
  const tmp3 = callback(hasNeverWishlisted(6065).useSelectedDismissibleContent(memo), 2);
  dependencyMap = tmp4;
  const tmp5 = tmp3[0] === hasNeverWishlisted(1377).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
  callback = tmp5;
  const obj2 = hasNeverWishlisted(6065);
  registerDismiss = hasNeverWishlisted(14907).useCollectiblesCoachmarkScrollDismissContext().registerDismiss;
  let items1 = [tmp5, registerDismiss, tmp3[1]];
  const effect = registerDismiss.useEffect(() => {
    if (c2) {
      return registerDismiss(() => callback(outer1_4.INDIRECT_ACTION));
    }
  }, items1);
  const items2 = [tmp5, tmp3[1]];
  const memo1 = registerDismiss.useMemo(() => {
    const obj = { title: null, description: null, position: "top", visible: null, onDismiss: null };
    const intl = hasNeverWishlisted(_undefined[7]).intl;
    obj[0] = intl.string(hasNeverWishlisted(_undefined[7]).t["47Rhc3"]);
    const intl2 = hasNeverWishlisted(_undefined[7]).intl;
    obj[1] = intl2.string(hasNeverWishlisted(_undefined[7]).t.PXjA0b);
    obj[3] = c2;
    obj[4] = function onDismiss() {
      return callback(outer1_4.USER_DISMISS);
    };
    return obj;
  }, items2);
  const obj3 = hasNeverWishlisted(14907);
  const coachmark = hasNeverWishlisted(8702).useCoachmark(anchorRef.anchorRef, memo1);
  return null;
};