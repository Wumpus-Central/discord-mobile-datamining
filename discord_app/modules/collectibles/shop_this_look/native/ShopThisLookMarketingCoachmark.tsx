// === Module 12975: ShopThisLookMarketingCoachmark ===

// Module 12975 (ShopThisLookMarketingCoachmark)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import ShopThisLookAnalyticsUtils from "ShopThisLookAnalyticsUtils" /* 12970 */;
import BumpingFistsSpotIllustration from "BumpingFistsSpotIllustration" /* 12976 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const UserProfileThemeTypes = fn(6891).UserProfileThemeTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_7 = createStyles.createStyles({ imageContainer: { alignItems: "center", justifyContent: "center" } });
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ShopThisLookMarketingCoachmarkImage() {
  const cResult = c.c(3);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = jsx(BumpingFistsSpotIllustration.BumpingFistsSpotIllustration, { width: 100, height: 56, resizeMode: "contain" });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.imageContainer) {
    const obj2 = { style: tmp4.imageContainer, children: first };
    const tmp11 = <View style={tmp4.imageContainer}>{first}</View>;
    cResult[1] = tmp4.imageContainer;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function ShopThisLookMarketingCoachmarkImage() {
  return <View style={closure_7().imageContainer}>{jsx(BumpingFistsSpotIllustration.BumpingFistsSpotIllustration, { width: 100, height: 56, resizeMode: "contain" })}</View>;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/shop_this_look/native/ShopThisLookMarketingCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ShopThisLookMarketingCoachmark(visible) {
  const cResult = visible(onDismiss[7]).c(20);
  visible = visible.visible;
  onDismiss = visible.onDismiss;
  const onPress = visible.onPress;
  closure_3 = onPress.useRef(false);
  if (cResult[0] === onDismiss) {
    if (cResult[1] === onPress) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== onDismiss) {
      const fn2 = function p() {
        closure_3.current = true;
        onDismiss(ContentDismissActionType.USER_DISMISS);
      };
      cResult[3] = onDismiss;
      cResult[4] = fn2;
      let tmp5 = fn2;
    } else {
      tmp5 = cResult[4];
    }
    if (cResult[5] !== visible) {
      class E {
        constructor() {
          if (visible) {
            tmp = closure_0;
            tmp2 = closure_1;
            obj = closure_0(closure_1[9]);
            tmp3 = UserProfileThemeTypes;
            result = obj.trackShopThisLookMenuAction(closure_0(closure_1[9]).ShopThisLookMenuAction.COACHMARK_VIEWED, UserProfileThemeTypes.ACTION_SHEET);
          }
          return;
        }
      }
      const items = [visible];
      cResult[5] = visible;
      cResult[6] = E;
      cResult[7] = items;
      let tmp7 = items;
    } else {
      class E {
        constructor() {
          if (visible) {
            tmp = closure_0;
            tmp2 = closure_1;
            obj = closure_0(closure_1[9]);
            tmp3 = UserProfileThemeTypes;
            result = obj.trackShopThisLookMenuAction(closure_0(closure_1[9]).ShopThisLookMenuAction.COACHMARK_VIEWED, UserProfileThemeTypes.ACTION_SHEET);
          }
          return;
        }
      }
      tmp7 = cResult[7];
    }
    const effect = obj2.useEffect(E, tmp7);
    if (cResult[8] === onDismiss) {
      class E {
        constructor() {
          if (visible) {
            tmp = closure_0;
            tmp2 = closure_1;
            obj = closure_0(closure_1[9]);
            tmp3 = UserProfileThemeTypes;
            result = obj.trackShopThisLookMenuAction(closure_0(closure_1[9]).ShopThisLookMenuAction.COACHMARK_VIEWED, UserProfileThemeTypes.ACTION_SHEET);
          }
          return;
        }
      }
      const effect1 = obj2.useEffect(tmp9, tmp10);
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            if (visible) {
              tmp = closure_0;
              tmp2 = closure_1;
              obj = closure_0(closure_1[9]);
              tmp3 = UserProfileThemeTypes;
              result = obj.trackShopThisLookMenuAction(closure_0(closure_1[9]).ShopThisLookMenuAction.COACHMARK_VIEWED, UserProfileThemeTypes.ACTION_SHEET);
            }
            return;
          }
        }
        const stringResult = obj3.string(tmp(tmp2[10]).t.TrOccu);
        const intl = tmp(tmp2[10]).intl;
        const stringResult1 = intl.string(tmp(tmp2[10]).t["Eh5+1F"]);
        cResult[12] = stringResult;
        cResult[13] = stringResult1;
        let tmp14 = stringResult1;
        const tmp13 = stringResult;
      } else {
        class E {
          constructor() {
            if (visible) {
              tmp = closure_0;
              tmp2 = closure_1;
              obj = closure_0(closure_1[9]);
              tmp3 = UserProfileThemeTypes;
              result = obj.trackShopThisLookMenuAction(closure_0(closure_1[9]).ShopThisLookMenuAction.COACHMARK_VIEWED, UserProfileThemeTypes.ACTION_SHEET);
            }
            return;
          }
        }
        tmp14 = cResult[13];
      }
      const _Symbol2 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            return closure_1_6(closure_1_8, {});
          }
        }
        const intl2 = tmp(tmp2[10]).intl;
        const stringResult2 = intl2.string(tmp(tmp2[10]).t["bqZVd/"]);
        cResult[14] = stringResult2;
        cResult[15] = D;
        let tmp18 = D;
        const tmp17 = stringResult2;
      } else {
        class D {
          constructor() {
            return closure_1_6(closure_1_8, {});
          }
        }
        tmp18 = cResult[15];
      }
      if (cResult[16] === tmp4) {
        class D {
          constructor() {
            return closure_1_6(closure_1_8, {});
          }
        }
      }
      const obj4 = { title: tmp13, description: tmp14, visible, position: "bottom", renderImgComponent: tmp18, buttonLabel: tmp17, buttonVariant: "primary", onButtonPress: tmp4, onDismiss: tmp5 };
      cResult[16] = tmp4;
      cResult[17] = tmp5;
      cResult[18] = visible;
      cResult[19] = obj4;
    }
    const fn3 = function _() {
      return visible ? (() => {
        const result = visible(onDismiss[9]).trackShopThisLookMenuAction(visible(onDismiss[9]).ShopThisLookMenuAction.COACHMARK_DISMISSED, constants2.ACTION_SHEET);
        if (!ref.current) {
          closure_1_1(constants.AUTO_DISMISS);
        }
        const obj = visible(onDismiss[9]);
      }) : undefined;
    };
    const items1 = [visible, onDismiss];
    cResult[8] = onDismiss;
    cResult[9] = visible;
    cResult[10] = fn3;
    cResult[11] = items1;
    tmp10 = items1;
    tmp9 = fn3;
  }
  const fn = function u() {
    closure_3.current = true;
    const result = ShopThisLookAnalyticsUtils.trackShopThisLookMenuAction(ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_CTA_CLICKED, UserProfileThemeTypes.ACTION_SHEET);
    onDismiss(ContentDismissActionType.TAKE_ACTION);
    onPress();
  };
  cResult[0] = onDismiss;
  cResult[1] = onPress;
  cResult[2] = fn;
  tmp4 = fn;
  let obj = visible(onDismiss[7]);
}) : (function ShopThisLookMarketingCoachmark(visible) {
  visible = visible.visible;
  const onDismiss = visible.onDismiss;
  const onPress = visible.onPress;
  closure_3 = onPress.useRef(false);
  const items = [onDismiss, onPress];
  const onButtonPress = onPress.useCallback(() => {
    closure_3.current = true;
    const result = ShopThisLookAnalyticsUtils.trackShopThisLookMenuAction(ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_CTA_CLICKED, UserProfileThemeTypes.ACTION_SHEET);
    onDismiss(ContentDismissActionType.TAKE_ACTION);
    onPress();
  }, items);
  const items1 = [onDismiss];
  const callback1 = onPress.useCallback(() => {
    closure_3.current = true;
    onDismiss(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const items2 = [visible];
  const effect = onPress.useEffect(() => {
    if (visible) {
      const result = ShopThisLookAnalyticsUtils.trackShopThisLookMenuAction(ShopThisLookAnalyticsUtils.ShopThisLookMenuAction.COACHMARK_VIEWED, UserProfileThemeTypes.ACTION_SHEET);
    }
  }, items2);
  const items3 = [visible, onDismiss];
  const effect1 = onPress.useEffect(() => visible ? (() => {
    const result = visible(onDismiss[9]).trackShopThisLookMenuAction(visible(onDismiss[9]).ShopThisLookMenuAction.COACHMARK_DISMISSED, callback1.ACTION_SHEET);
    if (!ref.current) {
      closure_1_1(callback.AUTO_DISMISS);
    }
    const obj = visible(onDismiss[9]);
  }) : undefined, items3);
  const items4 = [visible, onButtonPress, callback1];
  const memo = onPress.useMemo(() => {
    const obj = { title: null, description: null, visible: null, position: "bottom", renderImgComponent: null, buttonLabel: null, buttonVariant: "primary", onButtonPress: null, onDismiss: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.TrOccu);
    const intl2 = util.intl;
    obj.description = intl2.string(util.t["Eh5+1F"]);
    obj.visible = visible;
    obj.renderImgComponent = function renderImgComponent() {
      return closure_1_6(closure_1_8, {});
    };
    const intl3 = util.intl;
    obj.buttonLabel = intl3.string(util.t["bqZVd/"]);
    obj.onButtonPress = onButtonPress;
    obj.onDismiss = callback1;
    return obj;
  }, items4);
  const coachmark = visible(onDismiss[11]).useCoachmark(visible.targetRef, memo);
  return null;
});