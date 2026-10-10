// discord_app/modules/collectibles/native/WishlistButtonCoachmark.tsx
import util from "../../../intl/index.native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/WishlistButtonCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function WishlistButtonCoachmark(anchorRef) {
      const cResult = require("c").c(14);
      const obj = require("c");
      const hasNeverWishlisted = require("useWishlistNUXActionSheet").useHasNeverWishlisted();
      if (cResult[0] !== hasNeverWishlisted) {
        if (hasNeverWishlisted) {
          const items = [tmp(2049).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK];
          let items1 = items;
        } else {
          items1 = [];
        }
        cResult[0] = hasNeverWishlisted;
        cResult[1] = items1;
      } else {
        const tmp7 = registerDismiss(tmp(7099).useSelectedDismissibleContent(cResult[1]), 2);
        _require = tmp8;
        const tmp9 = tmp7[0] === tmp(2049).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
        dependencyMap = tmp9;
        const tmpResult = tmp(7099);
        registerDismiss = tmp(16194).useCollectiblesCoachmarkScrollDismissContext().registerDismiss;
        if (cResult[2] === tmp9) {
          if (cResult[3] === tmp8) {
            if (cResult[4] === registerDismiss) {
              let tmp10 = cResult[5];
              let tmp11 = cResult[6];
            }
            const effect = noop.useEffect(tmp10, tmp11);
            const _Symbol = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(tmp(1126).t["47Rhc3"]);
              const intl2 = tmp(1126).intl;
              const stringResult1 = intl2.string(tmp(1126).t.PXjA0b);
              cResult[7] = stringResult;
              cResult[8] = stringResult1;
              let tmp16 = stringResult1;
              let tmp15 = stringResult;
            } else {
              tmp15 = cResult[7];
              tmp16 = cResult[8];
            }
            if (cResult[9] !== tmp8) {
              class S {
                constructor() {
                  return closure_0(ContentDismissActionType.USER_DISMISS);
                }
              }
              cResult[9] = tmp8;
              cResult[10] = S;
            } else {
              class S {
                constructor() {
                  return closure_0(ContentDismissActionType.USER_DISMISS);
                }
              }
            }
            if (cResult[11] === tmp9) {
              class S {
                constructor() {
                  return closure_0(ContentDismissActionType.USER_DISMISS);
                }
              }
              const coachmark = tmp(9442).useCoachmark(anchorRef.anchorRef, tmp20);
              return null;
            }
            const obj3 = { title: tmp15, description: tmp16, position: "top", visible: tmp9, onDismiss: S };
            cResult[11] = tmp9;
            cResult[12] = S;
            cResult[13] = obj3;
            tmp20 = obj3;
          }
        }
        const fn = function u() {
          if (closure_1) {
            return registerDismiss(() => closure_1_0(constants.INDIRECT_ACTION));
          }
        };
        const items2 = [tmp9, registerDismiss, tmp7[1]];
        cResult[2] = tmp9;
        cResult[3] = tmp7[1];
        cResult[4] = registerDismiss;
        cResult[5] = fn;
        cResult[6] = items2;
        tmp11 = items2;
        tmp10 = fn;
        const tmpResult3 = tmp(16194);
      }
      const obj2 = require("useWishlistNUXActionSheet");
    }
  : function WishlistButtonCoachmark(anchorRef) {
      let hasNeverWishlisted;
      _slicedToArray = undefined;
      let registerDismiss;
      hasNeverWishlisted = hasNeverWishlisted(8973).useHasNeverWishlisted();
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
      let obj = hasNeverWishlisted(8973);
      const tmp3 = _slicedToArray(hasNeverWishlisted(7099).useSelectedDismissibleContent(memo), 2);
      dependencyMap = tmp4;
      const tmp5 = tmp3[0] === hasNeverWishlisted(2049).DismissibleContent.WISHLIST_MOBILE_NUX_PRODUCT_CARD_COACHMARK;
      _slicedToArray = tmp5;
      const obj2 = hasNeverWishlisted(7099);
      registerDismiss = hasNeverWishlisted(16194).useCollectiblesCoachmarkScrollDismissContext().registerDismiss;
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
      const obj3 = hasNeverWishlisted(16194);
      const coachmark = hasNeverWishlisted(9442).useCoachmark(anchorRef.anchorRef, memo1);
      return null;
    };
