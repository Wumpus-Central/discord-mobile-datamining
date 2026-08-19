// discord_app/modules/collectibles/native/WishlistButtonCoachmark.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/WishlistButtonCoachmark.tsx");

export default function WishlistButtonCoachmark(anchorRef) {
  let hasNeverWishlisted;
  let callback;
  let registerDismiss;
  hasNeverWishlisted = hasNeverWishlisted(9179).useHasNeverWishlisted();
  let items = [hasNeverWishlisted];
  const memo = registerDismiss.useMemo(() => {
    if (hasNeverWishlisted) {
      const items = [hasNeverWishlisted(1377).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  let obj = hasNeverWishlisted(9179);
  const tmp3 = callback(hasNeverWishlisted(7366).useSelectedDismissibleContent(memo), 2);
  dependencyMap = tmp4;
  const tmp5 = tmp3[0] === hasNeverWishlisted(1377).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
  callback = tmp5;
  const obj2 = hasNeverWishlisted(7366);
  registerDismiss = hasNeverWishlisted(14961).useCollectiblesCoachmarkScrollDismissContext().registerDismiss;
  let items1 = [tmp5, registerDismiss, tmp3[1]];
  const effect = registerDismiss.useEffect(() => {
    if (closure_2) {
      return registerDismiss(() => callback(closure_1_4.INDIRECT_ACTION));
    }
  }, items1);
  const items2 = [tmp5, tmp3[1]];
  const memo1 = registerDismiss.useMemo(() => {
    const obj = { title: null, description: null, position: "top", visible: null, onDismiss: null };
    const intl = hasNeverWishlisted(1236).intl;
    obj[0] = intl.string(hasNeverWishlisted(1236).t["47Rhc3"]);
    const intl2 = hasNeverWishlisted(1236).intl;
    obj[1] = intl2.string(hasNeverWishlisted(1236).t.PXjA0b);
    obj[3] = closure_2;
    obj[4] = function onDismiss() {
      return callback(closure_1_4.USER_DISMISS);
    };
    return obj;
  }, items2);
  const obj3 = hasNeverWishlisted(14961);
  const coachmark = hasNeverWishlisted(9314).useCoachmark(anchorRef.anchorRef, memo1);
  return null;
};