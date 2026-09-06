// === Module 15820: WishlistButtonCoachmark ===

// Module 15820 (WishlistButtonCoachmark)
import util from "util" /* 1114 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/WishlistButtonCoachmark.tsx");

export default function WishlistButtonCoachmark(anchorRef) {
  let hasNeverWishlisted;
  _slicedToArray = undefined;
  let registerDismiss;
  hasNeverWishlisted = hasNeverWishlisted(8770).useHasNeverWishlisted();
  let items = [hasNeverWishlisted];
  const memo = registerDismiss.useMemo(() => {
    if (hasNeverWishlisted) {
      const items = [dismissible_content.DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  let obj = hasNeverWishlisted(8770);
  const tmp3 = _slicedToArray(hasNeverWishlisted(7388).useSelectedDismissibleContent(memo), 2);
  dependencyMap = tmp4;
  const tmp5 = tmp3[0] === hasNeverWishlisted(1943).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
  _slicedToArray = tmp5;
  const obj2 = hasNeverWishlisted(7388);
  registerDismiss = hasNeverWishlisted(15817).useCollectiblesCoachmarkScrollDismissContext().registerDismiss;
  let items1 = [tmp5, registerDismiss, tmp3[1]];
  const effect = registerDismiss.useEffect(() => {
    if (closure_2) {
      return registerDismiss(() => closure_1_1(constants.INDIRECT_ACTION));
    }
  }, items1);
  const items2 = [tmp5, tmp3[1]];
  const memo1 = registerDismiss.useMemo(() => {
    const obj = { title: null, description: null, position: "top", visible: null, onDismiss: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["47Rhc3"]);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t.PXjA0b);
    obj.visible = visible;
    obj.onDismiss = function onDismiss() {
      return closure_1_1(constants.USER_DISMISS);
    };
    return obj;
  }, items2);
  const obj3 = hasNeverWishlisted(15817);
  const coachmark = hasNeverWishlisted(11127).useCoachmark(anchorRef.anchorRef, memo1);
  return null;
};