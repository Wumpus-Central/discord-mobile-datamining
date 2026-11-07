// === Module 8814: EditCollectiblesCTAButton ===

// Module 8814 (EditCollectiblesCTAButton)
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _modDef1652 from "module_1652" /* 1652 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import HapticUtils from "HapticUtils" /* 5376 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7795 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8815 */;
import EditCollectiblesActionCreators from "EditCollectiblesActionCreators" /* 8817 */;
import openProductDetailsActionSheet from "openProductDetailsActionSheet" /* 8818 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5141 */;

const require = globalThis.__r;

require = fn;
let closure_5 = fn(1074).CollectiblesMobileShopScreen;
let closure_6 = fn(1623).MEDIA_PICKER_SEND_BUTTON_SPRING;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let closure_8 = createStyles.createStyles({ buttonRowContainer: { flexGrow: 0, flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 12, height: 48 }, buttonContainer: { position: "absolute", bottom: 0, left: 0, right: 0, marginLeft: 24, marginRight: 24, flexDirection: "column", justifyContent: "flex-end" } });
let closure_9 = { code: "(function EditCollectiblesCTAButtonTsx1(){let[shouldShowButton,APPLY_BUTTON_BOUNCE_DISTANCE,APPLY_BUTTON_SCALE_TRANSITION,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING]=this.__closure;const targetTranslateY=shouldShowButton.get()?0:APPLY_BUTTON_BOUNCE_DISTANCE;const targetScale=shouldShowButton.get()?1:APPLY_BUTTON_SCALE_TRANSITION;return{transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,MEDIA_PICKER_SEND_BUTTON_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,MEDIA_PICKER_SEND_BUTTON_SPRING)}]};})" };
let closure_10 = { code: "(function EditCollectiblesCTAButtonTsx2(){let[shouldShowButton]=this.__closure;return{pointerEvents:shouldShowButton.get()?'box-none':'none'};})" };
let closure_11 = { code: "(function EditCollectiblesCTAButtonTsx3(){let[shouldShowButton,reducedMotion,withSpring,MEDIA_PICKER_SEND_BUTTON_SPRING]=this.__closure;const targetOpacity=shouldShowButton.get()?1:0;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,{...MEDIA_PICKER_SEND_BUTTON_SPRING,overshootClamping:true})};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditCollectiblesCTAButton.tsx");

export default noop.memo(function EditCollectiblesCTAButton(user) {
  user = user.user;
  _require = user;
  const currentSkuId = user.currentSkuId;
  const selectedSkuId = user.selectedSkuId;
  ({ isTryItOut, onApply } = user);
  noop = onApply;
  const analyticsLocations = user.analyticsLocations;
  c4 = analyticsLocations;
  const analyticsSource = user.analyticsSource;
  isTryItOut = undefined;
  c8 = undefined;
  let isShopStandalonePdpMobileEnabled;
  const tmp = c8();
  items = [c4];
  const stateFromStores = require("initialize").useStateFromStores(items, () => analyticsLocations.useReducedMotion);
  let obj = require("initialize");
  ({ purchase, product } = useCollectiblesDataDefault(selectedSkuId));
  const tmp6 = useCollectiblesDataDefault(selectedSkuId);
  const sharedValue = require("module_1652").useSharedValue(false);
  const items1 = [selectedSkuId, currentSkuId, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(c2 !== c1);
  }, items1);
  let obj2 = require("module_1652");
  const items2 = [isShopStandalonePdpMobileEnabled, sharedValue, 60, 0.9, stateFromStores, require("spring/spring").withSpring, sharedValue];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  [tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items2;
  class EditCollectiblesCTAButtonTsx1 {
    constructor() {
      obj = closure_0;
      num = 0;
      if (!closure_0.get()) {
        num = closure_1;
      }
      num2 = 1;
      if (!obj.get()) {
        num2 = closure_2;
      }
      tmp2 = num;
      tmp = closure_3;
      if (!closure_3) {
        tmp3 = closure_4;
        tmp4 = closure_5;
        tmp2 = closure_4(num, closure_5);
      }
      items = [, ];
      items[0] = { translateY: tmp2 };
      tmp5 = num2;
      if (!tmp) {
        tmp6 = closure_4;
        tmp7 = closure_5;
        tmp5 = closure_4(num2, closure_5);
      }
      items[1] = { scale: tmp5 };
      return { transform: items };
    }
  }
  const items3 = [tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  EditCollectiblesCTAButtonTsx1.__closure = items3;
  EditCollectiblesCTAButtonTsx1.__workletHash = 3346300187216;
  EditCollectiblesCTAButtonTsx1.__initData = tmp10;
  const animatedStyle = require("module_1652").useAnimatedStyle(EditCollectiblesCTAButtonTsx1);
  let obj4 = require("module_1652");
  const tmp9 = sharedValue;
  const items4 = [closure_10, sharedValue];
  _require = undefined;
  [tmp18, tmp19] = items4;
  class EditCollectiblesCTAButtonTsx2 {
    constructor() {
      pointerEvents = "none";
      if (closure_0.get()) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  const items5 = [tmp19];
  EditCollectiblesCTAButtonTsx2.__closure = items5;
  EditCollectiblesCTAButtonTsx2.__workletHash = 2472922412820;
  EditCollectiblesCTAButtonTsx2.__initData = tmp18;
  const animatedProps = require("module_1652").useAnimatedProps(EditCollectiblesCTAButtonTsx2);
  const tmp4Result = require("module_1652");
  const items6 = [closure_11, sharedValue, stateFromStores, require("spring/spring").withSpring, tmp9];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp21, tmp22, tmp23, tmp24, tmp25] = items6;
  class EditCollectiblesCTAButtonTsx3 {
    constructor() {
      num = 0;
      if (closure_0.get()) {
        num = 1;
      }
      opacity = num;
      if (!closure_1) {
        tmp2 = closure_2;
        obj = {};
        tmp3 = closure_3;
        tmp4 = obj;
        merged = Object.assign(closure_3);
        flag = true;
        obj.overshootClamping = true;
        opacity = closure_2(num, obj);
      }
      return { opacity };
    }
  }
  const items7 = [tmp22, tmp23, tmp24, tmp25];
  EditCollectiblesCTAButtonTsx3.__closure = items7;
  EditCollectiblesCTAButtonTsx3.__workletHash = 13264991240196;
  EditCollectiblesCTAButtonTsx3.__initData = tmp21;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(EditCollectiblesCTAButtonTsx3);
  const tmp4Result6 = require("module_1652");
  const canUseCollectiblesResult = PremiumUtilsDefault.canUseCollectibles(user);
  const tmp2Result = PremiumUtilsDefault;
  let result = require("CollectiblesUtils").isPremiumCollectiblesProduct(product);
  if (!result) {
    result = tmp4(7808).isPremiumCollectiblesPurchase(purchase);
    const tmp4Result8 = tmp4(7808);
  }
  let result1 = !canUseCollectiblesResult;
  if (!canUseCollectiblesResult) {
    result1 = tmp4(7808).isPremiumCollectiblesPurchase(purchase);
    const tmp4Result9 = tmp4(7808);
  }
  let tmp30 = null == selectedSkuId;
  if (!tmp30) {
    tmp30 = null != purchase && !result1;
    const tmp31 = null != purchase && !result1;
  }
  if (!tmp30) {
    let tmp32 = result;
    if (result) {
      tmp32 = isTryItOut;
    }
    tmp30 = tmp32;
  }
  isTryItOut = tmp30;
  if (result) {
    result = !canUseCollectiblesResult;
  }
  if (result) {
    result = !isTryItOut;
  }
  c8 = result;
  const tmp4Result7 = require("CollectiblesUtils");
  isShopStandalonePdpMobileEnabled = require("ShopStandalonePdpMobileExperiment").useIsShopStandalonePdpMobileEnabled("edit_collectibles_cta_button");
  const items8 = [tmp30, result, user];
  const items9 = [tmp30, onApply, result, isShopStandalonePdpMobileEnabled, analyticsLocations, analyticsSource, selectedSkuId];
  const memo = obj3.useMemo(() => {
    if (isTryItOut) {
      const intl3 = util.intl;
      let stringResult = intl3.string(util.t.Jh8fJz);
    } else if (c8) {
      const intl2 = util.intl;
      const string = intl2.string;
      let KXLX7l = util.t;
      if (isPremiumResult) {
        KXLX7l = KXLX7l.KXLX7l;
        let stringResult1 = string(KXLX7l);
      } else {
        stringResult1 = string(KXLX7l.mr4K7D);
      }
      isPremiumResult = PremiumUtilsDefault.isPremium(c0);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t.fYfGgK);
    }
    return stringResult;
  }, items8);
  const callback = obj3.useCallback(() => {
    if (isTryItOut) {
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
      stageCollectibleChangeForEditProfile();
    } else if (c8) {
      const result1 = EditCollectiblesActionCreators.navigateToNitroManagement();
    } else {
      if (isShopStandalonePdpMobileEnabled) {
        if (null != initialProductSkuId) {
          const obj2 = { skuId: tmp3, analyticsLocations, stageCollectibleChangeForEditProfile };
          const result2 = openProductDetailsActionSheet.openProductDetailsActionSheetForSku(obj2, "stack");
        }
      }
      const obj4 = { analyticsLocations, analyticsSource, initialProductSkuId, screen: analyticsSource.SHOP_ALL };
      const result3 = CollectiblesActionCreators.openCollectiblesShopMobile(obj4);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items9);
  let obj5 = { style: null, animatedProps, children: null };
  const items10 = [tmp.buttonContainer, animatedStyle1];
  obj5.style = items10;
  let obj6 = { style: null, pointerEvents: "box-none", children: null };
  const items11 = [tmp.buttonRowContainer, animatedStyle, { marginBottom: useSafeAreaInsetsDefault().bottom }];
  obj6.style = items11;
  let str = "primary";
  if (result) {
    str = "active";
  }
  obj6.children = isTryItOut(require("components/Button/Button").Button, { variant: str, onPress: callback, size: "md", text: memo, grow: true });
  obj5.children = isTryItOut(_modDef1652.View, obj6);
  return isTryItOut(_modDef1652.View, obj5);
});