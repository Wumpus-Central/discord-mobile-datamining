// === Module 8013: ? ===

// Module 8013
import importAllResult from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4437 */;
import { CollectiblesMobileShopScreen as closure_5 } from "items" /* 678 */;
import { MEDIA_PICKER_SEND_BUTTON_SPRING as closure_6 } from "DRAG_HANDLE" /* 1624 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
let c3 = importAllResult;
let closure_8 = createCacheKey.createStyles({ buttonRowContainer: { flexGrow: 0, flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 12, height: 48 }, buttonContainer: { position: "absolute", bottom: 0, left: 0, right: 0, marginLeft: 24, marginRight: 24, flexDirection: "column", justifyContent: "flex-end" } });
let closure_9 = { code: "function EditCollectiblesCTAButtonTsx1(){const{shouldShowButton,APPLY_BUTTON_BOUNCE_DISTANCE,APPLY_BUTTON_SCALE_TRANSITION,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetTranslateY=shouldShowButton.get()?0:APPLY_BUTTON_BOUNCE_DISTANCE;const targetScale=shouldShowButton.get()?1:APPLY_BUTTON_SCALE_TRANSITION;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};}" };
let closure_10 = { code: "function EditCollectiblesCTAButtonTsx2(){const{shouldShowButton}=this.__closure;return{pointerEvents:shouldShowButton.get()?'box-none':'none'};}" };
let closure_11 = { code: "function EditCollectiblesCTAButtonTsx3(){const{shouldShowButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=shouldShowButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};}" };
const memoResult = importAllResult.memo((user) => {
  user = user.user;
  const currentSkuId = user.currentSkuId;
  const selectedSkuId = user.selectedSkuId;
  ({ isTryItOut, onApply } = user);
  const analyticsLocations = user.analyticsLocations;
  const analyticsSource = user.analyticsSource;
  let stateFromStores;
  let sharedValue;
  isTryItOut = undefined;
  c9 = undefined;
  const tmp = isTryItOut();
  let obj = user(selectedSkuId[7]);
  const items = [analyticsLocations];
  stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  ({ purchase, product } = currentSkuId(selectedSkuId[8])(selectedSkuId));
  obj1 = user(selectedSkuId[9]);
  sharedValue = obj1.useSharedValue(false);
  let obj2 = onApply;
  const items1 = [selectedSkuId, currentSkuId, sharedValue];
  const effect = onApply.useEffect(() => {
    const result = sharedValue.set(selectedSkuId !== currentSkuId);
  }, items1);
  const tmp6 = currentSkuId(selectedSkuId[8])(selectedSkuId);
  class O {
    constructor() {
      obj = closure_7;
      num = 60;
      if (closure_7.get()) {
        num = 0;
      }
      num2 = 0.9;
      if (obj.get()) {
        num2 = 1;
      }
      withSpringResult = num;
      tmp = closure_6;
      if (!closure_6) {
        tmp3 = user;
        tmp4 = selectedSkuId;
        obj2 = user(selectedSkuId[10]);
        tmp5 = closure_6;
        withSpringResult = obj2.withSpring(num, closure_6);
      }
      items = [, ];
      items[0] = { translateY: withSpringResult };
      withSpringResult1 = num2;
      if (!tmp) {
        tmp7 = user;
        tmp8 = selectedSkuId;
        obj3 = user(selectedSkuId[10]);
        tmp9 = closure_6;
        withSpringResult1 = obj3.withSpring(num2, closure_6);
      }
      items[1] = { scale: withSpringResult1 };
      return { transform: items };
    }
  }
  obj = { shouldShowButton: sharedValue, APPLY_BUTTON_BOUNCE_DISTANCE: 60, APPLY_BUTTON_SCALE_TRANSITION: 0.9, reducedMotion: stateFromStores, withSpring: user(selectedSkuId[10]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores };
  O.__closure = obj;
  O.__workletHash = 15594859424201;
  O.__initData = c9;
  const animatedStyle = user(selectedSkuId[9]).useAnimatedStyle(O);
  let obj4 = user(selectedSkuId[9]);
  class M {
    constructor() {
      pointerEvents = "none";
      if (closure_7.get()) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  M.__closure = { shouldShowButton: sharedValue };
  M.__workletHash = 16151141699021;
  M.__initData = closure_10;
  const animatedProps = user(selectedSkuId[9]).useAnimatedProps(M);
  const obj6 = user(selectedSkuId[9]);
  class R {
    constructor() {
      num = 0;
      if (closure_7.get()) {
        num = 1;
      }
      withSpringResult = num;
      if (!closure_6) {
        tmp2 = user;
        tmp3 = selectedSkuId;
        obj = user(selectedSkuId[10]);
        obj = {};
        tmp4 = closure_6;
        tmp5 = obj;
        merged = Object.assign(closure_6);
        flag = true;
        obj.overshootClamping = true;
        withSpringResult = obj.withSpring(num, obj);
      }
      return { opacity: withSpringResult };
    }
  }
  obj = { shouldShowButton: sharedValue, reducedMotion: stateFromStores, withSpring: user(selectedSkuId[10]).withSpring, MEDIA_PICKER_SEND_BUTTON_SPRING: stateFromStores };
  R.__closure = obj;
  R.__workletHash = 13351061137085;
  R.__initData = closure_11;
  const animatedStyle1 = user(selectedSkuId[9]).useAnimatedStyle(R);
  const obj7 = user(selectedSkuId[9]);
  const canUseCollectiblesResult = currentSkuId(selectedSkuId[11]).canUseCollectibles(user);
  const obj9 = currentSkuId(selectedSkuId[11]);
  let result = user(selectedSkuId[12]).isPremiumCollectiblesProduct(product);
  if (!result) {
    let tmp4Result = tmp4(tmp3[12]);
    result = tmp4Result.isPremiumCollectiblesPurchase(purchase);
  }
  let result1 = !canUseCollectiblesResult;
  if (!canUseCollectiblesResult) {
    tmp4Result = tmp4(tmp3[12]);
    result1 = tmp4Result.isPremiumCollectiblesPurchase(purchase);
  }
  let tmp15 = null == selectedSkuId;
  if (!tmp15) {
    tmp15 = null != purchase && !result1;
    const tmp16 = null != purchase && !result1;
  }
  if (!tmp15) {
    let tmp17 = result;
    if (result) {
      tmp17 = isTryItOut;
    }
    tmp15 = tmp17;
  }
  isTryItOut = tmp15;
  if (result) {
    result = !canUseCollectiblesResult;
  }
  if (result) {
    result = !isTryItOut;
  }
  c9 = result;
  const items2 = [tmp15, result, user];
  const items3 = [tmp15, onApply, result, analyticsLocations, analyticsSource, selectedSkuId];
  const memo = obj2.useMemo(() => {
    if (isTryItOut) {
      const intl3 = user(selectedSkuId[13]).intl;
      let stringResult = intl3.string(user(selectedSkuId[13]).t.Jh8fJz);
    } else if (c9) {
      const obj = currentSkuId(selectedSkuId[11]);
      const intl2 = user(selectedSkuId[13]).intl;
      const string = intl2.string;
      let KXLX7l = user(selectedSkuId[13]).t;
      if (isPremiumResult) {
        KXLX7l = KXLX7l.KXLX7l;
        let stringResult1 = string(KXLX7l);
      } else {
        stringResult1 = string(KXLX7l.mr4K7D);
      }
      isPremiumResult = currentSkuId(selectedSkuId[11]).isPremium(user);
    } else {
      const intl = user(selectedSkuId[13]).intl;
      stringResult = intl.string(user(selectedSkuId[13]).t.fYfGgK);
    }
    return stringResult;
  }, items2);
  const callback = obj2.useCallback(() => {
    if (isTryItOut) {
      const result = user(selectedSkuId[14]).triggerHapticFeedback(user(selectedSkuId[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
      onApply();
      const obj4 = user(selectedSkuId[14]);
    } else if (c9) {
      let tmp2Result = tmp2(tmp3[15]);
      const result1 = tmp2Result.navigateToNitroManagement();
    } else {
      tmp2Result = tmp2(tmp3[16]);
      const obj = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null, screen: null };
      obj[0] = analyticsLocations;
      obj[1] = analyticsSource;
      obj[2] = selectedSkuId;
      obj[3] = analyticsSource.SHOP_ALL;
      const result2 = tmp2Result.openCollectiblesShopMobile(obj);
    }
    currentSkuId(selectedSkuId[17]).hideActionSheet();
  }, items3);
  obj1 = { style: items4, animatedProps, children: null };
  items4 = [tmp.buttonContainer, animatedStyle1];
  obj2 = { style: items5, pointerEvents: "box-none", children: null };
  items5 = [tmp.buttonRowContainer, animatedStyle, { marginBottom: currentSkuId(selectedSkuId[6])().bottom }];
  let str = "primary";
  if (result) {
    str = "active";
  }
  obj2[2] = sharedValue(user(selectedSkuId[18]).Button, { variant: str, onPress: callback, size: "md", text: memo, grow: true });
  obj1[2] = sharedValue(currentSkuId(selectedSkuId[9]).View, obj2);
  return sharedValue(currentSkuId(selectedSkuId[9]).View, obj1);
});
let result = require("set").fileFinishedImporting("modules/user_profile/native/EditCollectiblesCTAButton.tsx");

export default memoResult;