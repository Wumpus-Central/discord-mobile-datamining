// === Module 15765: WishlistButtonCoachmark ===

// Module 15765 (WishlistButtonCoachmark)
import intl3 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, anchorRef, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((anchorRef) => {
  let closure_0;
  let closure_1;
  let registerDismiss;
  let tmp19;
  let tmp5;
  const obj = require("react");
  const cResult = obj.c(14);
  anchorRef = anchorRef.anchorRef;
  const obj2 = require("useWishlistNUXActionSheet");
  const hasNeverWishlisted = obj2.useHasNeverWishlisted();
  if (cResult[0] !== hasNeverWishlisted) {
    let items1;
    if (hasNeverWishlisted) {
      const items = [require("dismissible_content").DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = hasNeverWishlisted;
    cResult[1] = items1;
    tmp5 = items1;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = require("useSelectedDismissibleContent");
  const tmp6 = registerDismiss(tmpResult.useSelectedDismissibleContent(tmp5), 2);
  _require = tmp7;
  const tmp8 = tmp6[0] === require("dismissible_content").DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
  dependencyMap = tmp8;
  const tmpResult3 = require("CollectiblesCoachmarkScrollDismissContext");
  registerDismiss = tmpResult3.useCollectiblesCoachmarkScrollDismissContext().registerDismiss;
  if (cResult[2] === tmp8) {
    if (cResult[3] === tmp6[1]) {
      let tmp9;
      let tmp10;
      let tmp15;
      let tmp14;
      if (cResult[4] === registerDismiss) {
        tmp9 = cResult[5];
        tmp10 = cResult[6];
      }
      const effect = react.useEffect(tmp9, tmp10);
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(require("intl").t["47Rhc3"]);
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(require("intl").t.PXjA0b);
        cResult[7] = stringResult;
        cResult[8] = stringResult1;
        tmp15 = stringResult1;
        tmp14 = stringResult;
      } else {
        tmp14 = cResult[7];
        tmp15 = cResult[8];
      }
      if (cResult[9] !== tmp6[1]) {
        class S {
          constructor() {
            return closure_0(ContentDismissActionType.USER_DISMISS);
          }
        }
        cResult[9] = tmp6[1];
        cResult[10] = S;
      } else {
        class S {
          constructor() {
            return closure_0(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (cResult[11] === tmp8) {
        class S {
          constructor() {
            return closure_0(ContentDismissActionType.USER_DISMISS);
          }
        }
        const tmpResult4 = require("useCoachmark");
        const coachmark = tmpResult4.useCoachmark(anchorRef, tmp19);
        return null;
      }
      const obj3 = { title: tmp14, description: tmp15, position: "top", visible: tmp8, onDismiss: S };
      cResult[11] = tmp8;
      cResult[12] = S;
      cResult[13] = obj3;
      tmp19 = obj3;
    }
  }
  const fn = function u() {
    if (closure_1) {
      return registerDismiss(() => closure_1_0(constants.INDIRECT_ACTION));
    }
  };
  const items2 = [tmp8, registerDismiss, tmp6[1]];
  cResult[2] = tmp8;
  cResult[3] = tmp6[1];
  cResult[4] = registerDismiss;
  cResult[5] = fn;
  cResult[6] = items2;
  tmp10 = items2;
  tmp9 = fn;
}) : ((anchorRef) => {
  let closure_1;
  let visible;
  let hasNeverWishlisted;
  _slicedToArray = undefined;
  let registerDismiss;
  anchorRef = anchorRef.anchorRef;
  let obj = hasNeverWishlisted(8457);
  hasNeverWishlisted = obj.useHasNeverWishlisted();
  let items = [hasNeverWishlisted];
  const memo = registerDismiss.useMemo(() => {
    let items1;
    if (hasNeverWishlisted) {
      const items = [dismissible_content.DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items);
  const obj2 = hasNeverWishlisted(6901);
  const tmp3 = _slicedToArray(obj2.useSelectedDismissibleContent(memo), 2);
  dependencyMap = tmp4;
  const tmp5 = tmp3[0] === hasNeverWishlisted(2036).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
  _slicedToArray = tmp5;
  const obj3 = hasNeverWishlisted(15752);
  registerDismiss = obj3.useCollectiblesCoachmarkScrollDismissContext().registerDismiss;
  let items1 = [tmp5, registerDismiss, tmp3[1]];
  const effect = registerDismiss.useEffect(() => {
    if (visible) {
      return registerDismiss(() => closure_1_1(constants.INDIRECT_ACTION));
    }
  }, items1);
  const items2 = [tmp5, tmp3[1]];
  const memo1 = registerDismiss.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(intl3.t["47Rhc3"]),
      description: intl2.string(intl3.t.PXjA0b),
      position: "top",
      visible,
      onDismiss() {
        return closure_1_1(constants.USER_DISMISS);
      }
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items2);
  const obj4 = hasNeverWishlisted(9895);
  const coachmark = obj4.useCoachmark(anchorRef, memo1);
  return null;
});
const result = size.fileFinishedImporting("modules/collectibles/native/WishlistButtonCoachmark.tsx");

export default tmp2;