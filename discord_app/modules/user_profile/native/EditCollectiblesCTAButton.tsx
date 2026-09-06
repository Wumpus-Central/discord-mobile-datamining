// === Module 8172: EditCollectiblesCTAButton ===

// Module 8172 (EditCollectiblesCTAButton)
import util from "util" /* 1114 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import spring from "spring" /* 4974 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import EditCollectiblesActionCreators from "EditCollectiblesActionCreators" /* 8175 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8176 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
let closure_5 = fn(1076).CollectiblesMobileShopScreen;
let closure_6 = fn(1607).MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ buttonRowContainer: { flexGrow: 0, flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 12, height: 48 }, buttonContainer: { position: "absolute", bottom: 0, left: 0, right: 0, marginLeft: 24, marginRight: 24, flexDirection: "column", justifyContent: "flex-end" } });
let __initData = { code: "function EditCollectiblesCTAButtonTsx1(){const{shouldShowButton,APPLY_BUTTON_BOUNCE_DISTANCE,APPLY_BUTTON_SCALE_TRANSITION,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetTranslateY=shouldShowButton.get()?0:APPLY_BUTTON_BOUNCE_DISTANCE;const targetScale=shouldShowButton.get()?1:APPLY_BUTTON_SCALE_TRANSITION;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};}" };
let closure_10 = { code: "function EditCollectiblesCTAButtonTsx2(){const{shouldShowButton}=this.__closure;return{pointerEvents:shouldShowButton.get()?'box-none':'none'};}" };
const __initData2 = { code: "function EditCollectiblesCTAButtonTsx3(){const{shouldShowButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING}=this.__closure;const targetOpacity=shouldShowButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesCTAButton.tsx");

export default noop.memo((user) => {
  user = user.user;
  const currentSkuId = user.currentSkuId;
  const selectedSkuId = user.selectedSkuId;
  ({ isTryItOut, onApply } = user);
  const analyticsLocations = user.analyticsLocations;
  const analyticsSource = user.analyticsSource;
  isTryItOut = undefined;
  __initData = undefined;
  let isShopStandalonePdpMobileEnabled;
  const tmp = isTryItOut();
  let obj = user(selectedSkuId[7]);
  const items = [analyticsLocations];
  const stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  ({ purchase, product } = currentSkuId(selectedSkuId[8])(selectedSkuId));
  let obj1 = user(selectedSkuId[9]);
  const sharedValue = obj1.useSharedValue(false);
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
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj2 = closure_0(closure_2[10]);
        tmp5 = closure_6;
        withSpringResult = obj2.withSpring(num, closure_6);
      }
      items = [, ];
      items[0] = { translateY: withSpringResult };
      withSpringResult1 = num2;
      if (!tmp) {
        tmp7 = closure_0;
        tmp8 = closure_2;
        obj3 = closure_0(closure_2[10]);
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
  O.__initData = __initData;
  const animatedStyle = user(selectedSkuId[9]).useAnimatedStyle(O);
  const obj4 = user(selectedSkuId[9]);
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
  M.__initData = isShopStandalonePdpMobileEnabled;
  const animatedProps = user(selectedSkuId[9]).useAnimatedProps(M);
  let obj6 = user(selectedSkuId[9]);
  class R {
    constructor() {
      num = 0;
      if (closure_7.get()) {
        num = 1;
      }
      withSpringResult = num;
      if (!closure_6) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[10]);
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
  R.__initData = __initData2;
  const animatedStyle1 = user(selectedSkuId[9]).useAnimatedStyle(R);
  let obj7 = user(selectedSkuId[9]);
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
  __initData = result;
  const obj10 = user(selectedSkuId[12]);
  isShopStandalonePdpMobileEnabled = user(selectedSkuId[13]).useIsShopStandalonePdpMobileEnabled("edit_collectibles_cta_button");
  const items2 = [tmp15, result, user];
  const items3 = [tmp15, onApply, result, isShopStandalonePdpMobileEnabled, analyticsLocations, analyticsSource, selectedSkuId];
  const memo = obj2.useMemo(() => {
    if (isTryItOut) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t.Jh8fJz);
    } else if (c9) {
      const intl2 = util.intl;
      const string = intl2.string;
      let KXLX7l = util.t;
      if (isPremiumResult) {
        KXLX7l = KXLX7l.KXLX7l;
        let stringResult1 = string(KXLX7l);
      } else {
        stringResult1 = string(KXLX7l.mr4K7D);
      }
      isPremiumResult = PremiumUtilsDefault.isPremium(user);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.fYfGgK);
    }
    return stringResult;
  }, items2);
  const callback = obj2.useCallback(() => {
    if (isTryItOut) {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      onApply();
    } else if (c9) {
      const result1 = EditCollectiblesActionCreators.navigateToNitroManagement();
    } else {
      if (isShopStandalonePdpMobileEnabled) {
        if (null != selectedSkuId) {
          let obj = { skuId: tmp3, analyticsLocations, stageCollectibleChangeForEditProfile: onApply };
          const result2 = openProductDetailsActionSheet.openProductDetailsActionSheetForSku(obj, "stack");
        }
      }
      obj = { analyticsLocations, analyticsSource, initialProductSkuId: selectedSkuId, screen: analyticsSource.SHOP_ALL };
      const result3 = obj.openCollectiblesShopMobile(obj);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items3);
  obj1 = { style: null, animatedProps, children: null };
  const items4 = [tmp.buttonContainer, animatedStyle1];
  obj1.style = items4;
  obj2 = { style: null, pointerEvents: "box-none", children: null };
  const items5 = [tmp.buttonRowContainer, animatedStyle, { marginBottom: currentSkuId(selectedSkuId[6])().bottom }];
  obj2.style = items5;
  let str = "primary";
  if (result) {
    str = "active";
  }
  obj2.children = sharedValue(user(selectedSkuId[20]).Button, { variant: str, onPress: callback, size: "md", text: memo, grow: true });
  obj1.children = sharedValue(currentSkuId(selectedSkuId[9]).View, obj2);
  return sharedValue(currentSkuId(selectedSkuId[9]).View, obj1);
});