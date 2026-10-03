// discord_app/modules/collectibles/native/ProductPurchaseSuccessModal.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import spring from "../../../design/animation/reanimated/spring/spring.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import _mod6019 from "../../../../_runtime/metro/06019__.js";
import tinycolorDefault from "../../../../_runtime/07063_tinycolor.js";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import BundleSampleV2Default from "BundleSampleV2.tsx";
import AvatarDecorationSampleV2Default from "AvatarDecorationSampleV2.tsx";
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators.tsx";
import useCollectiblesShopStylesDefault from "../useCollectiblesShopStyles.native.tsx";
import ProfileEffectUserPreviewDefault from "../profile_effects/native/previews/ProfileEffectUserPreview.tsx";
import ProfileFrameUserPreviewDefault from "../profile_frames/native/previews/ProfileFrameUserPreview.tsx";
import NameplatePreview from "../nameplates/native/NameplatePreview.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import _toArray from "../../../../_runtime/00729__toArray.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: metroRequire, ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const Constants = fn(1085);
({ Orientation: c10, VerticalGradient: closure_11 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let createStyles = fn(4890);
let obj2 = { closeButtonIcon: { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY } };
let closure_15 = createStyles.createStyles(obj2);
createStyles = fn(4890);
let closure_16 = createStyles.createStyles((arg0) => {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = {
    root: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
    header: null,
    headerLeading: null,
    imageBackground: null,
    backdrop: null,
    main: null,
    curtain: null,
    body: null,
    preview: null,
    previewBundle: null,
    messages: null,
    title: null,
    footer: null,
    cta: null,
  };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.header = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.headerLeading = { flex: 1, flexDirection: "row", alignItems: "center" };
  obj.imageBackground = { resizeMode: "cover", position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
  obj.backdrop = { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 };
  obj.main = { flex: 1 };
  const rect = {
    position: "absolute",
    backgroundColor: nativeDefault.colors.BLACK,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };
  obj.curtain = rect;
  obj.body = { flexGrow: 1, flexDirection: "column", justifyContent: "center" };
  let num = 0;
  if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    num = 1;
  }
  const obj4 = {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: num,
    marginTop: null,
    marginHorizontal: null,
  };
  let str = 0;
  if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
    str = "20%";
  }
  obj4.marginTop = str;
  let PX_32;
  if (arg0 === CollectiblesItemType.CollectiblesItemType.NAMEPLATE) {
    PX_32 = nativeDefault.space.PX_32;
  }
  obj4.marginHorizontal = PX_32;
  if (flag) {
    if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
      const obj5 = {
        shadowColor: nativeDefault.unsafe_rawColors.PRIMARY_630,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 60,
        elevation: 24,
      };
      let obj10 = obj5;
    }
    const merged = Object.assign(obj10);
    obj.preview = obj4;
    obj.previewBundle = { flex: 1, justifyContent: "flex-start", alignItems: "center", minHeight: 250 };
    const obj6 = {
      paddingTop: nativeDefault.space.PX_24,
      minHeight: null,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: null,
    };
    let str2;
    if (arg0 === CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION) {
      str2 = "32%";
    }
    obj6.minHeight = str2;
    obj6.gap = nativeDefault.space.PX_16;
    obj.messages = obj6;
    const obj7 = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
    obj.title = obj7;
    const obj8 = { marginBottom: nativeDefault.space.PX_16 };
    obj.footer = obj8;
    const obj9 = {
      flexDirection: "row",
      gap: nativeDefault.space.PX_12,
      paddingVertical: nativeDefault.space.PX_16,
      marginHorizontal: nativeDefault.space.PX_24,
      borderRadius: nativeDefault.radii.round,
    };
    obj.cta = obj9;
    return obj;
  }
  obj10 = {};
  const obj3 = { flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
});
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (tintColor) => {
      const cResult = tintColor(576).c(9);
      tintColor = tintColor.tintColor;
      const onCancel = tintColor.onCancel;
      const tmp4 = closure_15();
      dependencyMap = tmp4;
      if (cResult[0] !== onCancel) {
        const fn = function t() {
          if (onCancel != null) {
            tmp();
          }
          ProductPurchaseSuccessActionCreatorsDefault.close();
        };
        cResult[0] = onCancel;
        cResult[1] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.closeButtonIcon) {
        if (cResult[3] === tintColor) {
          let tmp6 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.cpT0Cq);
          cResult[5] = stringResult;
          let tmp8 = stringResult;
        } else {
          tmp8 = cResult[5];
        }
        if (cResult[6] === tmp5) {
          if (cResult[7] === tmp6) {
            let tmp10 = cResult[8];
          }
          return tmp10;
        }
        const obj2 = { onPress: tmp5, backImage: tmp6, accessibilityLabel: tmp8, displayMode: "minimal" };
        const tmp12 = closure_12(tmp(6019).HeaderBackButton, obj2);
        cResult[6] = tmp5;
        cResult[7] = tmp6;
        cResult[8] = tmp12;
        tmp10 = tmp12;
      }
      const fn2 = function c() {
        const obj = { size: "lg", style: null };
        const items = [closeButtonIcon.closeButtonIcon, { tintColor }];
        obj.style = items;
        return __initData(XSmallIcon.XSmallIcon, obj);
      };
      cResult[2] = tmp4.closeButtonIcon;
      cResult[3] = tintColor;
      cResult[4] = fn2;
      tmp6 = fn2;
      let obj = tintColor(576);
    }
  : (arg0) => {
      ({ tintColor: require, onCancel } = arg0);
      dependencyMap = closure_15();
      let items = [onCancel];
      const callback = noop.useCallback(() => {
        if (onCancel != null) {
          tmp();
        }
        ProductPurchaseSuccessActionCreatorsDefault.close();
      }, items);
      let obj = {
        onPress: callback,
        backImage() {
          const obj = { size: "lg", style: null };
          const items = [closeButtonIcon.closeButtonIcon, { tintColor }];
          obj.style = items;
          return __initData(XSmallIcon.XSmallIcon, obj);
        },
        accessibilityLabel: null,
        displayMode: "minimal",
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
      return closure_12(_mod6019.HeaderBackButton, obj);
    };
let c18 = 200;
const __initData = {
  code: "function ProductPurchaseSuccessModalTsx1(){const{interpolate,springInput,isProfilePreview}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfilePreview?0.6:0,1])}]};}",
};
const __initData2 = {
  code: "function ProductPurchaseSuccessModalTsx2(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}",
};
const __initData3 = {
  code: "function ProductPurchaseSuccessModalTsx3(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}",
};
const __initData4 = {
  code: "function ProductPurchaseSuccessModalTsx4(){const{interpolate,springInput,isProfilePreview}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0.1,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[isProfilePreview?0.6:0,1])}]};}",
};
const __initData5 = {
  code: "function ProductPurchaseSuccessModalTsx5(){const{interpolate,springInput}=this.__closure;return{opacity:interpolate(springInput.get(),[0,1],[0,1]),transform:[{scale:interpolate(springInput.get(),[0,1],[0.75,1])}]};}",
};
const __initData6 = {
  code: "function ProductPurchaseSuccessModalTsx6(){const{interpolate,linearInput}=this.__closure;return{opacity:interpolate(linearInput.get(),[0,1],[0.5,0])};}",
};
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, isProfilePreview) => {
      _require = arg0;
      closure_1 = isProfilePreview;
      const cResult = require("c").c(9);
      let obj = require("c");
      sharedValue = require("ReanimatedRexport").useSharedValue(0);
      let obj2 = require("ReanimatedRexport");
      const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
      if (cResult[0] === sharedValue1) {
        if (cResult[1] === arg0) {
          if (cResult[2] === sharedValue) {
            let tmp6 = cResult[3];
            let tmp7 = cResult[4];
          }
          const effect = noop.useEffect(tmp6, tmp7);
          const fn2 = function p() {
            const obj = {
              opacity: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0.1, 1]),
              transform: null,
            };
            let num = 0;
            value = sharedValue.get();
            if (closure_1) {
              num = 0.6;
            }
            const obj4 = { scale: null };
            const items = [num, 1];
            obj4.scale = ReanimatedRexport.interpolate(value, [0, 1], items);
            const items1 = [obj4];
            obj.transform = items1;
            return obj;
          };
          let obj4 = { interpolate: tmp(tmp2[16]).interpolate, springInput: sharedValue, isProfilePreview };
          fn2.__closure = obj4;
          fn2.__workletHash = 15385317790278;
          fn2.__initData = __initData;
          const animatedStyle = tmp(tmp2[16]).useAnimatedStyle(fn2);
          const tmpResult = tmp(tmp2[16]);
          const fn3 = function y() {
            const obj = { opacity: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0, 1]), transform: null };
            const obj3 = { scale: null };
            obj3.scale = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0.75, 1]);
            const items = [obj3];
            obj.transform = items;
            return obj;
          };
          const obj5 = { interpolate: tmp(tmp2[16]).interpolate, springInput: sharedValue };
          fn3.__closure = obj5;
          fn3.__workletHash = 4517716462039;
          fn3.__initData = __initData2;
          const animatedStyle1 = tmp(tmp2[16]).useAnimatedStyle(fn3);
          const tmpResult3 = tmp(tmp2[16]);
          const fn4 = function h() {
            const obj = { opacity: ReanimatedRexport.interpolate(sharedValue1.get(), [0, 1], [0.5, 0]) };
            return obj;
          };
          const obj6 = { interpolate: tmp(tmp2[16]).interpolate, linearInput: sharedValue1 };
          fn4.__closure = obj6;
          fn4.__workletHash = 6018737312;
          fn4.__initData = __initData3;
          const animatedStyle2 = tmp(tmp2[16]).useAnimatedStyle(fn4);
          if (cResult[5] === animatedStyle2) {
            if (cResult[6] === animatedStyle) {
              if (cResult[7] === animatedStyle1) {
                let tmp16 = cResult[8];
              }
              return tmp16;
            }
          }
          const obj7 = {
            previewViewStyle: animatedStyle,
            textViewStyle: animatedStyle1,
            curtainViewStyle: animatedStyle2,
          };
          cResult[5] = animatedStyle2;
          cResult[6] = animatedStyle;
          cResult[7] = animatedStyle1;
          cResult[8] = obj7;
          tmp16 = obj7;
          const tmpResult4 = tmp(tmp2[16]);
        }
      }
      const fn = function l() {
        let num = 1;
        if (!closure_0) {
          const obj = ReanimatedRexport;
          num = obj.withDelay(c18, spring.withSpring(1, { duration: 500, dampingRatio: 0.7 }));
        }
        const result = sharedValue.set(num);
        let num2 = 1;
        if (!closure_0) {
          const obj3 = ReanimatedRexport;
          num2 = obj3.withDelay(c18, timing.withTiming(1, { duration: 200 }));
        }
        const result1 = sharedValue1.set(num2);
      };
      let items = [sharedValue, arg0, sharedValue1];
      cResult[0] = sharedValue1;
      cResult[1] = arg0;
      cResult[2] = sharedValue;
      cResult[3] = fn;
      cResult[4] = items;
      tmp7 = items;
      tmp6 = fn;
      let obj3 = require("ReanimatedRexport");
    }
  : (arg0, isProfilePreview) => {
      _require = arg0;
      closure_1 = isProfilePreview;
      sharedValue = require("ReanimatedRexport").useSharedValue(0);
      let obj = require("ReanimatedRexport");
      const sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
      let items = [sharedValue, arg0, sharedValue1];
      const effect = noop.useEffect(() => {
        let num = 1;
        if (!closure_0) {
          const obj = ReanimatedRexport;
          num = obj.withDelay(c18, spring.withSpring(1, { duration: 500, dampingRatio: 0.7 }));
        }
        const result = sharedValue.set(num);
        let num2 = 1;
        if (!closure_0) {
          const obj3 = ReanimatedRexport;
          num2 = obj3.withDelay(c18, timing.withTiming(1, { duration: 200 }));
        }
        const result1 = sharedValue1.set(num2);
      }, items);
      let obj3 = { previewViewStyle: null, textViewStyle: null, curtainViewStyle: null };
      let obj2 = require("ReanimatedRexport");
      const fn = function l() {
        const obj = { opacity: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0.1, 1]), transform: null };
        let num = 0;
        value = sharedValue.get();
        if (closure_1) {
          num = 0.6;
        }
        const obj4 = { scale: null };
        const items = [num, 1];
        obj4.scale = ReanimatedRexport.interpolate(value, [0, 1], items);
        const items1 = [obj4];
        obj.transform = items1;
        return obj;
      };
      let obj4 = require("ReanimatedRexport");
      fn.__closure = {
        interpolate: require("ReanimatedRexport").interpolate,
        springInput: sharedValue,
        isProfilePreview,
      };
      fn.__workletHash = 10896341320227;
      fn.__initData = __initData4;
      obj3.previewViewStyle = obj4.useAnimatedStyle(fn);
      const obj5 = {
        interpolate: require("ReanimatedRexport").interpolate,
        springInput: sharedValue,
        isProfilePreview,
      };
      const fn2 = function n() {
        const obj = { opacity: ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0, 1]), transform: null };
        const obj3 = { scale: null };
        obj3.scale = ReanimatedRexport.interpolate(sharedValue.get(), [0, 1], [0.75, 1]);
        const items = [obj3];
        obj.transform = items;
        return obj;
      };
      const obj6 = require("ReanimatedRexport");
      fn2.__closure = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue };
      fn2.__workletHash = 9497838659120;
      fn2.__initData = __initData5;
      obj3.textViewStyle = obj6.useAnimatedStyle(fn2);
      const obj7 = { interpolate: require("ReanimatedRexport").interpolate, springInput: sharedValue };
      const fn3 = function s() {
        const obj = { opacity: ReanimatedRexport.interpolate(sharedValue1.get(), [0, 1], [0.5, 0]) };
        return obj;
      };
      const obj8 = require("ReanimatedRexport");
      fn3.__closure = { interpolate: require("ReanimatedRexport").interpolate, linearInput: sharedValue1 };
      fn3.__workletHash = 4654057886085;
      fn3.__initData = __initData6;
      obj3.curtainViewStyle = obj8.useAnimatedStyle(fn3);
      return obj3;
    };
let closure_26 = [80, 79, 78, 75, 72, 50, 45, 35, 70];
function useDrummingHapticFeedbacks() {}
let obj3 = { tintColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_28 = tinycolorDefault("black").toHexString();
ReactCompilerGating = fn(558);
let closure_29 = ReactCompilerGating.isReactCompilerEnabled()
  ? (product) => {
      const cResult = c.c(29);
      product = product.product;
      const tmp4 = closure_16(product.type);
      const backgroundColors = useCollectiblesShopStylesDefault(product.styles).backgroundColors;
      let tertiary1;
      if (backgroundColors != null) {
        tertiary1 = backgroundColors.tertiary;
      }
      const token = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
      const tmpResult = useToken;
      const token1 = useToken.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
      if (null != backgroundColors) {
        if (tmp7) {
          if (cResult[3] !== backgroundColors.primary) {
            const primary3 = backgroundColors.primary;
            const toHexStringResult = primary3.toHexString();
            cResult[3] = backgroundColors.primary;
            cResult[4] = toHexStringResult;
            let tmp20 = toHexStringResult;
          } else {
            tmp20 = cResult[4];
          }
          if (cResult[5] !== backgroundColors.secondary) {
            const secondary2 = backgroundColors.secondary;
            const toHexStringResult1 = secondary2.toHexString();
            cResult[5] = backgroundColors.secondary;
            cResult[6] = toHexStringResult1;
            let tmp22 = toHexStringResult1;
          } else {
            tmp22 = cResult[6];
          }
          if (cResult[7] !== backgroundColors.tertiary) {
            const tertiary = backgroundColors.tertiary;
            const toHexStringResult2 = tertiary.toHexString();
            cResult[7] = backgroundColors.tertiary;
            cResult[8] = toHexStringResult2;
            let tmp24 = toHexStringResult2;
          } else {
            tmp24 = cResult[8];
          }
          if (cResult[9] === tmp20) {
            if (cResult[10] === tmp22) {
            }
          }
          const items = [tmp20, tmp22, tmp24];
          cResult[9] = tmp20;
          cResult[10] = tmp22;
          cResult[11] = tmp24;
          cResult[12] = items;
        } else {
          if (cResult[13] !== backgroundColors.primary) {
            const primary = backgroundColors.primary;
            const toHexStringResult3 = primary.toHexString();
            cResult[13] = backgroundColors.primary;
            cResult[14] = toHexStringResult3;
            let tmp12 = toHexStringResult3;
          } else {
            tmp12 = cResult[14];
          }
          if (cResult[15] !== backgroundColors.primary) {
            const primary2 = backgroundColors.primary;
            const toHexStringResult4 = primary2.toHexString();
            cResult[15] = backgroundColors.primary;
            cResult[16] = toHexStringResult4;
            let tmp14 = toHexStringResult4;
          } else {
            tmp14 = cResult[16];
          }
          if (cResult[17] !== backgroundColors.secondary) {
            const secondary = backgroundColors.secondary;
            const toHexStringResult5 = secondary.toHexString();
            cResult[17] = backgroundColors.secondary;
            cResult[18] = toHexStringResult5;
            let tmp16 = toHexStringResult5;
          } else {
            tmp16 = cResult[18];
          }
          if (cResult[19] === tmp12) {
            if (cResult[20] === tmp14) {
              if (cResult[21] === tmp16) {
                let tmp18 = cResult[22];
              }
              let tmp10 = tmp18;
            }
          }
          const items1 = [tmp12, tmp14, tmp16, closure_28, closure_28];
          cResult[19] = tmp12;
          cResult[20] = tmp14;
          cResult[21] = tmp16;
          cResult[22] = items1;
          tmp18 = items1;
        }
      } else {
        if (cResult[0] === token) {
          if (cResult[1] === token1) {
            tmp10 = cResult[2];
          }
        }
        const items2 = [token, token, token1, closure_28, closure_28];
        cResult[0] = token;
        cResult[1] = token1;
        cResult[2] = items2;
        tmp10 = items2;
      }
      if (cResult[23] !== (null != tertiary1)) {
        const tmp29 = tmp7 ? [0, 0.6, 0.85] : [0, 0.05, 0.6, 0.95, 1];
        cResult[23] = tmp7;
        cResult[24] = tmp29;
      } else {
        if (cResult[25] === tmp10) {
          if (cResult[26] === tmp28) {
            if (cResult[27] === tmp4.backdrop) {
              let tmp31 = cResult[28];
            }
            return tmp31;
          }
        }
        const obj2 = { style: tmp4.backdrop, start: null, end: null, locations: null, colors: null };
        ({ START: obj4.start, END: obj4.end } = constants);
        obj2.locations = cResult[24];
        obj2.colors = tmp10;
        const tmp34 = __initData(LinearGradientDefault, obj2);
        cResult[25] = tmp10;
        cResult[26] = cResult[24];
        cResult[27] = tmp4.backdrop;
        cResult[28] = tmp34;
        tmp31 = tmp34;
      }
      const tmpResult2 = useToken;
    }
  : (product) => {
      product = product.product;
      importDefault = undefined;
      let token;
      let token1;
      const backgroundColors = require("useCollectiblesShopStyles")(product.styles).backgroundColors;
      let tertiary;
      if (backgroundColors != null) {
        tertiary = backgroundColors.tertiary;
      }
      importDefault = tmp5;
      const tmp = closure_16(product.type);
      token = backgroundColors(token[22]).useToken(tmp2(tmp3[8]).colors.BACKGROUND_BASE_LOW);
      const obj = backgroundColors(token[22]);
      token1 = backgroundColors(token[22]).useToken(tmp2(tmp3[8]).colors.BACKGROUND_SURFACE_HIGH);
      let items = [backgroundColors, token, token1, null != tertiary];
      const memo = noop.useMemo(() => {
        if (null == backgroundColors) {
          const items = [token, token, token1, closure_28, closure_28];
          let items2 = items;
        } else {
          const primary2 = backgroundColors.primary;
          const toHexStringResult = primary2.toHexString();
          if (closure_1) {
            const items1 = [toHexStringResult, ,];
            const secondary2 = backgroundColors.secondary;
            items1[1] = secondary2.toHexString();
            const tertiary = backgroundColors.tertiary;
            items1[2] = tertiary.toHexString();
            items2 = items1;
          } else {
            items2 = [toHexStringResult, , , ,];
            const primary = backgroundColors.primary;
            items2[1] = primary.toHexString();
            const secondary = backgroundColors.secondary;
            items2[2] = secondary.toHexString();
            items2[3] = closure_28;
            items2[4] = closure_28;
          }
        }
        return items2;
      }, items);
      return closure_12(require("LinearGradient"), {
        style: tmp.backdrop,
        start: constants.START,
        end: constants.END,
        locations: null != tertiary ? [0, 0.6, 0.85] : [0, 0.05, 0.6, 0.95, 1],
        colors: memo,
      });
    };
ReactCompilerGating = fn(558);
let obj7 = tinycolorDefault("black");
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (product) => {
      const cResult = c.c(99);
      product = product.product;
      const require = product;
      ({
        useCategoryImage,
        renderMessages,
        onSuccess,
        onCancel,
        showOrbBalancePill,
        orbBalancePriorToPurchase,
        stageCollectibleChangeForEditProfile,
      } = product);
      let tmp6 = null;
      if (undefined !== orbBalancePriorToPurchase) {
        tmp6 = orbBalancePriorToPurchase;
      }
      const currentUser = useCurrentUser.useCurrentUser();
      const backgroundColors = currentUser(10815)(product.styles).backgroundColors;
      let tertiary;
      if (backgroundColors != null) {
        tertiary = backgroundColors.tertiary;
      }
      const tmp9 = closure_16(product.type, null != tertiary);
      dependencyMap = tmp9;
      const tmpResult = useCurrentUser;
      const token = useToken.useToken(tmp7(587).colors.INTERACTIVE_TEXT_ACTIVE);
      if (typeof useDrummingHapticFeedbacks === "function") {
        closure_129_0 = item.useRef(closure_26);
        const callback = item.useCallback(() => {
          const arr = _toArray(_undefined.current);
          const first = arr[0];
          const substr = arr.slice(1);
          if (null != first) {
            if (0 === substr.length) {
              const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
            }
            if (null != first) {
              const _setTimeout = setTimeout;
              const timerId = setTimeout(importDefault, first);
            }
            _undefined.current = substr;
          }
          if (substr.length >= length.length / 2) {
            const result1 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          } else {
            const result2 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          }
        }, []);
        closure_129_1 = callback;
        const items = [callback];
        const effect = item.useEffect(() => {
          importDefault();
          return () => {
            _undefined.current = [];
          };
        }, items);
        const avatarDecorationPreviewSizes = tmp(10817).useAvatarDecorationPreviewSizes();
        ({ avatarSize, avatarDecorationSize } = avatarDecorationPreviewSizes);
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [AccessibilityStore];
          class M {
            constructor() {
              return closure_9.useReducedMotion;
            }
          }
          cResult[0] = items1;
          cResult[1] = M;
          tmp16 = items1;
        } else {
          [tmp16, tmp17] = cResult;
        }
        const tmpResult10 = tmp(10817);
        const stateFromStores = tmp(504).useStateFromStores(tmp16, M);
        let tmp20 = product.type === tmp(1980).CollectiblesItemType.PROFILE_EFFECT;
        if (!tmp20) {
          tmp20 = product.type === tmp(1980).CollectiblesItemType.PROFILE_FRAME;
        }
        const tmpResult11 = tmp(504);
        ({ previewViewStyle, textViewStyle, curtainViewStyle } = closure_25(stateFromStores, tmp20));
        const tmp22 = closure_25(stateFromStores, tmp20);
        const category = tmp(10818).useFetchCollectiblesProductCategory(product.skuId).category;
        if (category != null) {
          let imageBackground = category.mobileBgUrl;
        }
        item = avatarDecorationSize(product.items, 1)[0];
        if (cResult[2] === onSuccess) {
          if (cResult[3] === product) {
            if (cResult[4] === stageCollectibleChangeForEditProfile) {
              let tmp25 = cResult[5];
            }
            const handleUseNow = tmp(10819).useHandleUseNow(tmp25);
            class M {
              constructor() {
                return closure_9.useReducedMotion;
              }
            }
            ({ canUseNow, isApplying, handleEditProfile } = handleUseNow);
            if (cResult[6] === avatarSize) {
              if (cResult[7] === currentUser) {
                let tmp28 = cResult[8];
              }
              let avatarSource = tmp28;
              tmp(8509);
              class M {
                constructor() {
                  return closure_9.useReducedMotion;
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                function oe() {
                  product(previewBundle[30]).lockOrientation(onLayout.PORTRAIT);
                  return () => {
                    const result = closure_1_0(previewBundle[30]).restoreDefaultOrientation();
                  };
                }
                const items2 = [];
                class M {
                  constructor() {
                    return closure_9.useReducedMotion;
                  }
                }
                cResult[10] = items2;
                let tmp33 = items2;
                let tmp32 = oe;
              } else {
                tmp32 = cResult[9];
                tmp33 = cResult[10];
              }
              const effect1 = obj5.useEffect(tmp32, tmp33);
              const shopProductItems = tmp(7842).useShopProductItems(product);
              const tmp23Result = avatarDecorationSize(obj5.useState(), 2);
              const first1 = tmp23Result[0];
              AccessibilityStore = tmp23Result[1];
              const _Symbol3 = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                function ce(nativeEvent) {
                  ({ width: closure_0, height: currentUser } = nativeEvent.nativeEvent.layout);
                  closure_9((arg0) => {
                    let size = arg0;
                    if (null != arg0) {
                      return size;
                    }
                    const size1 = { width, height };
                    size = size1;
                  });
                }
                cResult[11] = ce;
                class M {
                  constructor() {
                    return closure_9.useReducedMotion;
                  }
                }
              } else {
                const tmp38 = cResult[11];
              }
              const onLayout = tmp38;
              if (cResult[12] === avatarDecorationSize) {
                if (cResult[13] === shopProductItems) {
                  if (cResult[14] === first1) {
                    if (cResult[15] === currentUser) {
                      if (cResult[16] === item) {
                        if (cResult[17] === product.items[0]) {
                          if (cResult[18] === product.previewAssets) {
                            if (cResult[19] === product.type) {
                              if (cResult[20] === stateFromStores) {
                                if (cResult[21] === tmp9.previewBundle) {
                                  if (cResult[22] === tmp28) {
                                    let tmp39 = cResult[23];
                                  }
                                  if (cResult[24] === imageBackground) {
                                    if (cResult[25] === product) {
                                      if (cResult[26] === tmp9.imageBackground) {
                                        if (cResult[27] === tmp4) {
                                          class M {
                                            constructor() {
                                              return closure_9.useReducedMotion;
                                            }
                                          }
                                          if (cResult[31] === tmp9.main) {
                                            if (cResult[32] === tmp48) {
                                              let tmp49 = cResult[33];
                                            }
                                            if (cResult[34] === tmp31) {
                                              if (cResult[35] === tmp6) {
                                                if (cResult[36] === tmp5) {
                                                  let tmp50 = cResult[37];
                                                }
                                                if (cResult[38] === tmp9.headerLeading) {
                                                  if (cResult[39] === tmp50) {
                                                    let tmp52 = cResult[40];
                                                  }
                                                  class M {
                                                    constructor() {
                                                      return closure_9.useReducedMotion;
                                                    }
                                                  }
                                                  if (cResult[41] === undefined) {
                                                    if (cResult[42] === token) {
                                                      let tmp56 = cResult[43];
                                                    }
                                                    if (cResult[44] === onCancel) {
                                                      if (cResult[45] === tmp56) {
                                                        let tmp59 = cResult[46];
                                                      }
                                                      if (cResult[47] === tmp9.header) {
                                                        if (cResult[48] === tmp52) {
                                                          if (cResult[49] === tmp59) {
                                                            let tmp62 = cResult[50];
                                                          }
                                                          const _Symbol4 = Symbol;
                                                          class M {
                                                            constructor() {
                                                              return closure_9.useReducedMotion;
                                                            }
                                                          }
                                                          if (cResult[52] === previewViewStyle) {
                                                            if (cResult[53] === tmp9.preview) {
                                                              let tmp68 = cResult[54];
                                                            }
                                                            if (cResult[55] !== tmp39) {
                                                              const tmp39Result = tmp39();
                                                              cResult[55] = tmp39;
                                                              class M {
                                                                constructor() {
                                                                  return closure_9.useReducedMotion;
                                                                }
                                                              }
                                                              cResult[56] = tmp39Result;
                                                              let tmp69 = tmp39Result;
                                                            } else {
                                                              tmp69 = cResult[56];
                                                            }
                                                            if (cResult[57] === tmp68) {
                                                              if (cResult[58] === tmp69) {
                                                                let tmp71 = cResult[59];
                                                              }
                                                              if (cResult[60] === tmp9.messages) {
                                                                if (cResult[61] === textViewStyle) {
                                                                  let tmp73 = cResult[62];
                                                                }
                                                                if (cResult[63] === product) {
                                                                  if (cResult[64] === renderMessages) {
                                                                    if (cResult[65] === tmp9.title) {
                                                                      if (cResult[67] === tmp73) {
                                                                        if (cResult[68] === tmp74) {
                                                                          let tmp78 = cResult[69];
                                                                        }
                                                                        if (cResult[70] === tmp9.body) {
                                                                          if (cResult[71] === tmp71) {
                                                                            if (cResult[72] === tmp78) {
                                                                              let tmp82 = cResult[73];
                                                                            }
                                                                            if (cResult[74] === canUseNow) {
                                                                              if (cResult[75] === handleEditProfile) {
                                                                                if (cResult[76] === tmp27) {
                                                                                  if (cResult[77] === isApplying) {
                                                                                    if (cResult[79] === tmp9.cta) {
                                                                                      if (cResult[80] === tmp85) {
                                                                                        let tmp91 = cResult[81];
                                                                                      }
                                                                                      if (cResult[82] === tmp9.footer) {
                                                                                        if (cResult[83] === tmp91) {
                                                                                          let tmp94 = cResult[84];
                                                                                        }
                                                                                        if (cResult[85] === tmp49) {
                                                                                          if (cResult[86] === tmp62) {
                                                                                            if (cResult[87] === tmp82) {
                                                                                              if (
                                                                                                cResult[88] === tmp94
                                                                                              ) {
                                                                                                let tmp97 = cResult[89];
                                                                                              }
                                                                                              if (
                                                                                                cResult[90] ===
                                                                                                curtainViewStyle
                                                                                              ) {
                                                                                                if (
                                                                                                  cResult[91] ===
                                                                                                  tmp9.curtain
                                                                                                ) {
                                                                                                  let tmp101 =
                                                                                                    cResult[92];
                                                                                                }
                                                                                                if (
                                                                                                  cResult[93] ===
                                                                                                  product.skuId
                                                                                                ) {
                                                                                                  if (
                                                                                                    cResult[94] ===
                                                                                                    tmp9.root
                                                                                                  ) {
                                                                                                    if (
                                                                                                      cResult[95] ===
                                                                                                      tmp42
                                                                                                    ) {
                                                                                                      if (
                                                                                                        cResult[96] ===
                                                                                                        tmp97
                                                                                                      ) {
                                                                                                        if (
                                                                                                          cResult[97] ===
                                                                                                          tmp101
                                                                                                        ) {
                                                                                                          let tmp105 =
                                                                                                            cResult[98];
                                                                                                        }
                                                                                                        return tmp105;
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                class M {
                                                                                                  constructor() {
                                                                                                    return closure_9.useReducedMotion;
                                                                                                  }
                                                                                                }
                                                                                                let obj2 = {
                                                                                                  style: tmp40,
                                                                                                  id: tmp41,
                                                                                                  children: null,
                                                                                                };
                                                                                                const items3 = [
                                                                                                  tmp42,
                                                                                                  tmp97,
                                                                                                  tmp101,
                                                                                                ];
                                                                                                obj2.children = items3;
                                                                                                const tmp107 =
                                                                                                  closure_13(
                                                                                                    first1,
                                                                                                    obj2,
                                                                                                  );
                                                                                                cResult[93] =
                                                                                                  product.skuId;
                                                                                                cResult[94] = tmp9.root;
                                                                                                cResult[95] = tmp42;
                                                                                                cResult[96] = tmp97;
                                                                                                cResult[97] = tmp101;
                                                                                                cResult[98] = tmp107;
                                                                                                tmp105 = tmp107;
                                                                                              }
                                                                                              class M {
                                                                                                constructor() {
                                                                                                  return closure_9.useReducedMotion;
                                                                                                }
                                                                                              }
                                                                                              const items4 = [
                                                                                                tmp9.curtain,
                                                                                                curtainViewStyle,
                                                                                              ];
                                                                                              tmp103[0] = items4;
                                                                                              const tmp104 = closure_12(
                                                                                                tmp7(4612).View,
                                                                                                tmp103,
                                                                                              );
                                                                                              cResult[90] =
                                                                                                curtainViewStyle;
                                                                                              cResult[91] =
                                                                                                tmp9.curtain;
                                                                                              cResult[92] = tmp104;
                                                                                              tmp101 = tmp104;
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                        class M {
                                                                                          constructor() {
                                                                                            return closure_9.useReducedMotion;
                                                                                          }
                                                                                        }
                                                                                        tmp99[0] = tmp49;
                                                                                        const items5 = [
                                                                                          tmp62,
                                                                                          tmp82,
                                                                                          tmp94,
                                                                                        ];
                                                                                        tmp99[5] = items5;
                                                                                        const tmp100 = closure_13(
                                                                                          tmp(6619).SafeAreaPaddingView,
                                                                                          tmp99,
                                                                                        );
                                                                                        cResult[85] = tmp49;
                                                                                        cResult[86] = tmp62;
                                                                                        cResult[87] = tmp82;
                                                                                        cResult[88] = tmp94;
                                                                                        cResult[89] = tmp100;
                                                                                        tmp97 = tmp100;
                                                                                      }
                                                                                      class M {
                                                                                        constructor() {
                                                                                          return closure_9.useReducedMotion;
                                                                                        }
                                                                                      }
                                                                                      let obj3 = {
                                                                                        style: tmp9.footer,
                                                                                        children: tmp91,
                                                                                      };
                                                                                      const tmp96 = closure_12(
                                                                                        first1,
                                                                                        obj3,
                                                                                      );
                                                                                      cResult[82] = tmp9.footer;
                                                                                      cResult[83] = tmp91;
                                                                                      cResult[84] = tmp96;
                                                                                      tmp94 = tmp96;
                                                                                    }
                                                                                    class M {
                                                                                      constructor() {
                                                                                        return closure_9.useReducedMotion;
                                                                                      }
                                                                                    }
                                                                                    let obj4 = {
                                                                                      style: tmp9.cta,
                                                                                      children: cResult[78],
                                                                                    };
                                                                                    const tmp93 = closure_12(
                                                                                      first1,
                                                                                      obj4,
                                                                                    );
                                                                                    cResult[79] = tmp9.cta;
                                                                                    cResult[80] = cResult[78];
                                                                                    cResult[81] = tmp93;
                                                                                    tmp91 = tmp93;
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                            class M {
                                                                              constructor() {
                                                                                return closure_9.useReducedMotion;
                                                                              }
                                                                            }
                                                                            if (canUseNow) {
                                                                              const obj6 = {
                                                                                loading: isApplying,
                                                                                disabled: isApplying,
                                                                                onPress: null,
                                                                                text: null,
                                                                                size: "lg",
                                                                                grow: true,
                                                                              };
                                                                              class M {
                                                                                constructor() {
                                                                                  return closure_9.useReducedMotion;
                                                                                }
                                                                              }
                                                                              const intl = tmp(1126).intl;
                                                                              obj6.text = intl.string(
                                                                                tmp(1126).t.MAS7uK,
                                                                              );
                                                                              let obj7 = obj6;
                                                                            } else {
                                                                              obj7 = {
                                                                                onPress: handleEditProfile,
                                                                                text: null,
                                                                                size: "lg",
                                                                                grow: true,
                                                                              };
                                                                              class M {
                                                                                constructor() {
                                                                                  return closure_9.useReducedMotion;
                                                                                }
                                                                              }
                                                                              obj7.text = tmp88(tmp(1126).t["2p2aYz"]);
                                                                            }
                                                                            const tmp86Result = closure_12(tmp87, obj7);
                                                                            cResult[74] = canUseNow;
                                                                            cResult[75] = handleEditProfile;
                                                                            cResult[76] = tmp27;
                                                                            cResult[77] = isApplying;
                                                                            cResult[78] = tmp86Result;
                                                                          }
                                                                        }
                                                                        class M {
                                                                          constructor() {
                                                                            return closure_9.useReducedMotion;
                                                                          }
                                                                        }
                                                                        const obj8 = {
                                                                          style: tmp66,
                                                                          contentContainerStyle: tmp67,
                                                                          alwaysBounceVertical: false,
                                                                          children: null,
                                                                        };
                                                                        const items6 = [tmp71, tmp78];
                                                                        obj8.children = items6;
                                                                        const tmp84 = closure_13(
                                                                          shopProductItems,
                                                                          obj8,
                                                                        );
                                                                        cResult[70] = tmp9.body;
                                                                        cResult[71] = tmp71;
                                                                        cResult[72] = tmp78;
                                                                        cResult[73] = tmp84;
                                                                        tmp82 = tmp84;
                                                                      }
                                                                      class M {
                                                                        constructor() {
                                                                          return closure_9.useReducedMotion;
                                                                        }
                                                                      }
                                                                      tmp80[0] = tmp73;
                                                                      tmp80[1] = cResult[66];
                                                                      const tmp81 = closure_12(tmp7(4612).View, tmp80);
                                                                      cResult[67] = tmp73;
                                                                      cResult[68] = cResult[66];
                                                                      cResult[69] = tmp81;
                                                                      tmp78 = tmp81;
                                                                    }
                                                                  }
                                                                }
                                                                if (null != renderMessages) {
                                                                  let renderMessagesResult = renderMessages();
                                                                } else {
                                                                  class M {
                                                                    constructor() {
                                                                      return closure_9.useReducedMotion;
                                                                    }
                                                                  }
                                                                  tmp111[2] = tmp9.title;
                                                                  const intl2 = tmp(1126).intl;
                                                                  const obj9 = { itemName: product.name };
                                                                  tmp111[3] = intl2.format(tmp(1126).t.YNaxMp, obj9);
                                                                  const items7 = [closure_12(tmp(4886).Text, tmp111)];
                                                                  const obj10 = {
                                                                    variant: "text-md/medium",
                                                                    color: "text-overlay-light",
                                                                    style: tmp9.title,
                                                                    children: null,
                                                                  };
                                                                  let result =
                                                                    tmp(7065).isPremiumCollectiblesProduct(product);
                                                                  const intl3 = tmp(1126).intl;
                                                                  const format = intl3.format;
                                                                  const t = tmp(1126).t;
                                                                  if (result) {
                                                                    let obj11 = { itemName: product.name };
                                                                    let formatResult = format(t.nW6E3m, obj11);
                                                                  } else {
                                                                    const obj12 = { itemName: product.name };
                                                                    formatResult = format(t["4kp0AB"], obj12);
                                                                  }
                                                                  const obj13 = { children: null };
                                                                  obj10.children = formatResult;
                                                                  items7[1] = closure_12(tmp(4886).Text, obj10);
                                                                  obj13.children = items7;
                                                                  renderMessagesResult = closure_13(closure_14, obj13);
                                                                  const tmpResult16 = tmp(7065);
                                                                }
                                                                class M {
                                                                  constructor() {
                                                                    return closure_9.useReducedMotion;
                                                                  }
                                                                }
                                                                cResult[63] = product;
                                                                cResult[64] = renderMessages;
                                                                renderMessages = tmp9.title;
                                                                cResult[65] = renderMessages;
                                                                cResult[66] = renderMessagesResult;
                                                              }
                                                              const items8 = [,];
                                                              class M {
                                                                constructor() {
                                                                  return closure_9.useReducedMotion;
                                                                }
                                                              }
                                                              items8[1] = textViewStyle;
                                                              cResult[60] = tmp9.messages;
                                                              cResult[61] = textViewStyle;
                                                              cResult[62] = items8;
                                                              tmp73 = items8;
                                                            }
                                                            class M {
                                                              constructor() {
                                                                return closure_9.useReducedMotion;
                                                              }
                                                            }
                                                            const obj14 = { style: tmp68, children: tmp69 };
                                                            const tmp72 = closure_12(tmp7(4612).View, obj14);
                                                            cResult[57] = tmp68;
                                                            cResult[58] = tmp69;
                                                            cResult[59] = tmp72;
                                                            tmp71 = tmp72;
                                                          }
                                                          const items9 = [tmp9.preview, previewViewStyle];
                                                          cResult[52] = previewViewStyle;
                                                          cResult[53] = tmp9.preview;
                                                          cResult[54] = items9;
                                                          tmp68 = items9;
                                                        }
                                                      }
                                                      class M {
                                                        constructor() {
                                                          return closure_9.useReducedMotion;
                                                        }
                                                      }
                                                      const obj15 = { style: tmp9.header, children: null };
                                                      const items10 = [tmp52, tmp59];
                                                      obj15.children = items10;
                                                      const tmp64 = closure_13(first1, obj15);
                                                      cResult[47] = tmp9.header;
                                                      cResult[48] = tmp52;
                                                      cResult[49] = tmp59;
                                                      cResult[50] = tmp64;
                                                      tmp62 = tmp64;
                                                    }
                                                    class M {
                                                      constructor() {
                                                        return closure_9.useReducedMotion;
                                                      }
                                                    }
                                                    const obj16 = { tintColor: tmp56, onCancel };
                                                    const tmp61 = closure_12(closure_17, obj16);
                                                    cResult[44] = onCancel;
                                                    cResult[45] = tmp56;
                                                    cResult[46] = tmp61;
                                                    tmp59 = tmp61;
                                                  }
                                                  let toHexStringResult;
                                                  if (backgroundColors != null) {
                                                    const label = backgroundColors.label;
                                                    toHexStringResult = label.toHexString();
                                                  }
                                                  if (toHexStringResult == null) {
                                                    toHexStringResult = token;
                                                  }
                                                  let label1;
                                                  if (backgroundColors != null) {
                                                    label1 = backgroundColors.label;
                                                  }
                                                  cResult[41] = label1;
                                                  cResult[42] = token;
                                                  cResult[43] = toHexStringResult;
                                                  tmp56 = toHexStringResult;
                                                }
                                                class M {
                                                  constructor() {
                                                    return closure_9.useReducedMotion;
                                                  }
                                                }
                                                const obj17 = { style: tmp9.headerLeading, children: tmp50 };
                                                const tmp54 = closure_12(first1, obj17);
                                                cResult[38] = tmp9.headerLeading;
                                                cResult[39] = tmp50;
                                                cResult[40] = tmp54;
                                                tmp52 = tmp54;
                                              }
                                            }
                                            class M {
                                              constructor() {
                                                return closure_9.useReducedMotion;
                                              }
                                            }
                                            cResult[34] = tmp31;
                                            cResult[35] = tmp6;
                                            cResult[36] = tmp5;
                                            cResult[37] = tmp5;
                                            tmp50 = tmp51;
                                          }
                                          const items11 = [tmp9.main, tmp48];
                                          cResult[31] = tmp9.main;
                                          cResult[32] = tmp48;
                                          cResult[33] = items11;
                                          tmp49 = items11;
                                        }
                                      }
                                    }
                                  }
                                  if (!tmp4) {
                                    class M {
                                      constructor() {
                                        return closure_9.useReducedMotion;
                                      }
                                    }
                                    let tmp45 = closure_12(closure_29, { product: null });
                                    cResult[24] = imageBackground;
                                    cResult[25] = product;
                                    imageBackground = tmp9.imageBackground;
                                    cResult[26] = imageBackground;
                                    cResult[27] = tmp4;
                                    cResult[28] = tmp45;
                                    const obj18 = { product: null };
                                  }
                                  class M {
                                    constructor() {
                                      return closure_9.useReducedMotion;
                                    }
                                  }
                                  const obj19 = { source: null, style: null };
                                  const obj20 = { uri: imageBackground };
                                  obj19.source = obj20;
                                  obj19.style = tmp9.imageBackground;
                                  tmp45 = closure_12(avatarSource, obj19);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              function ye() {
                const type = product.type;
                if (CollectiblesItemType.CollectiblesItemType.BUNDLE === type) {
                  const obj2 = { style: previewBundle.previewBundle, onLayout, children: null };
                  let tmp19Result = null != first1;
                  if (tmp19Result) {
                    const obj3 = {
                      deco: null,
                      pfx: null,
                      nameplate: null,
                      previewAssets: null,
                      disableStaticBackground: true,
                      size: "large",
                      targetSize: null,
                    };
                    ({
                      firstAvatarDecoration: obj6.deco,
                      firstProfileEffect: obj6.pfx,
                      firstNameplate: obj6.nameplate,
                    } = shopProductItems);
                    obj3.previewAssets = product.previewAssets;
                    obj3.targetSize = tmp23;
                    tmp19Result = __initData(BundleSampleV2Default, obj3);
                  }
                  obj2.children = tmp19Result;
                  return __initData(closure_2_8, obj2);
                } else if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
                  const obj4 = { item, size: avatarDecorationSize, avatarSource, animate: !stateFromStores };
                  return __initData(AvatarDecorationSampleV2Default, obj4);
                } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
                  const obj5 = { user: currentUser, profileEffect: product.items[0] };
                  return __initData(ProfileEffectUserPreviewDefault, obj5);
                } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
                  const obj11 = { user: currentUser, profileFrame: product.items[0] };
                  return __initData(ProfileFrameUserPreviewDefault, obj11);
                } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
                  const obj = { user: currentUser, nameplate: product.items[0], animate: true };
                  return __initData(NameplatePreview.NameplatePreview, obj);
                } else {
                  return null;
                }
              }
              cResult[12] = avatarDecorationSize;
              cResult[13] = shopProductItems;
              cResult[14] = first1;
              cResult[15] = currentUser;
              cResult[16] = item;
              cResult[17] = product.items[0];
              cResult[18] = product.previewAssets;
              cResult[19] = product.type;
              cResult[20] = stateFromStores;
              cResult[21] = tmp9.previewBundle;
              cResult[22] = tmp28;
              cResult[23] = ye;
              tmp39 = ye;
              const tmpResult15 = tmp(7842);
            }
            avatarSource = currentUser.getAvatarSource(undefined, false, avatarSize);
            cResult[6] = avatarSize;
            cResult[7] = currentUser;
            cResult[8] = avatarSource;
            tmp28 = avatarSource;
            const tmpResult13 = tmp(10819);
          }
        }
        const obj21 = { product, onSuccess, stageCollectibleChangeForEditProfile };
        cResult[2] = onSuccess;
        cResult[3] = product;
        cResult[4] = stageCollectibleChangeForEditProfile;
        cResult[5] = obj21;
        tmp25 = obj21;
        const tmpResult12 = tmp(10818);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const tmpResult9 = useToken;
    }
  : (orbBalancePriorToPurchase) => {
      ({ product, useCategoryImage } = orbBalancePriorToPurchase);
      if (useCategoryImage === undefined) {
        useCategoryImage = false;
      }
      ({ renderMessages, showOrbBalancePill, onSuccess, onCancel } = orbBalancePriorToPurchase);
      if (showOrbBalancePill === undefined) {
        showOrbBalancePill = false;
      }
      let prop = orbBalancePriorToPurchase.orbBalancePriorToPurchase;
      if (prop === undefined) {
        prop = null;
      }
      _require = undefined;
      const currentUser = require("useCurrentUser").useCurrentUser();
      const backgroundColors = useCollectiblesShopStylesDefault(product.styles).backgroundColors;
      let tertiary;
      if (backgroundColors != null) {
        tertiary = backgroundColors.tertiary;
      }
      const tmp6 = closure_16(product.type, null != tertiary);
      require("useToken");
      if (typeof useDrummingHapticFeedbacks === "function") {
        closure_129_0 = noop.useRef(length);
        const callback = noop.useCallback(() => {
          const arr = _toArray(_undefined.current);
          const first = arr[0];
          const substr = arr.slice(1);
          if (null != first) {
            if (0 === substr.length) {
              const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_HEAVY);
            }
            if (null != first) {
              const _setTimeout = setTimeout;
              const timerId = setTimeout(importDefault, first);
            }
            _undefined.current = substr;
          }
          if (substr.length >= length.length / 2) {
            const result1 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          } else {
            const result2 = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          }
        }, []);
        closure_129_1 = callback;
        const items = [callback];
        const effect = noop.useEffect(() => {
          importDefault();
          return () => {
            _undefined.current = [];
          };
        }, items);
        const avatarDecorationPreviewSizes = tmp2(10817).useAvatarDecorationPreviewSizes();
        ({ avatarSize, avatarDecorationSize } = avatarDecorationPreviewSizes);
        const tmp2Result8 = tmp2(10817);
        const items1 = [AccessibilityStore];
        const stateFromStores = tmp2(504).useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
        let tmp15 = product.type === tmp2(1980).CollectiblesItemType.PROFILE_EFFECT;
        if (!tmp15) {
          tmp15 = product.type === tmp2(1980).CollectiblesItemType.PROFILE_FRAME;
        }
        const tmp2Result9 = tmp2(504);
        ({ previewViewStyle, textViewStyle, curtainViewStyle } = closure_25(stateFromStores, tmp15));
        const tmp17 = closure_25(stateFromStores, tmp15);
        const category = tmp2(10818).useFetchCollectiblesProductCategory(product.skuId).category;
        if (category != null) {
          const mobileBgUrl = category.mobileBgUrl;
        }
        const tmp2Result10 = tmp2(10818);
        let obj2 = {
          product,
          onSuccess,
          stageCollectibleChangeForEditProfile: orbBalancePriorToPurchase.stageCollectibleChangeForEditProfile,
        };
        const handleUseNow1 = tmp2(10819).useHandleUseNow(obj2);
        const isApplying = handleUseNow1.isApplying;
        ({ handleUseNow, canUseNow, handleEditProfile } = handleUseNow1);
        const avatarSource = currentUser.getAvatarSource(undefined, false, avatarSize);
        const tmp2Result11 = tmp2(10819);
        const effect1 = noop.useEffect(() => {
          _undefined(dependencyMap[30]).lockOrientation(constants.PORTRAIT);
          return () => {
            const result = _undefined(closure_1_2[30]).restoreDefaultOrientation();
          };
        }, []);
        const tmp2Result12 = tmp2(8509);
        const shopProductItems = tmp2(7842).useShopProductItems(product);
        const tmp2Result13 = tmp2(7842);
        [tmp24, c0] = noop.useState();
        const obj4 = { style: tmp6.root, id: product.skuId, children: null };
        if (useCategoryImage) {
          if (null != mobileBgUrl) {
            const obj5 = { source: null, style: null };
            const obj6 = { uri: mobileBgUrl };
            obj5.source = obj6;
            obj5.style = tmp6.imageBackground;
            let tmp30 = closure_12(closure_6, obj5);
            let tmp31 = closure_12;
            let tmp32 = closure_12;
          }
          const items2 = [tmp30, ,];
          const items3 = [tmp6.main];
          let str;
          if (useCategoryImage) {
            str = "rgba(0, 0, 0, 0.3)";
          }
          const rect = { style: null, top: true, bottom: true, left: true, right: true, children: null };
          const obj7 = { backgroundColor: str };
          items3[1] = obj7;
          rect.style = items3;
          const obj8 = { style: tmp6.header, children: null };
          const obj9 = { style: tmp6.headerLeading, children: null };
          if (showOrbBalancePill) {
            const obj10 = {
              initialRenderedBalance: prop,
              balance: tmp2Result12.useFetchVirtualCurrencyBalance().balance,
            };
            showOrbBalancePill = tmp32(tmp2(11000).BalanceWidgetPill, obj10);
          }
          obj9.children = showOrbBalancePill;
          const items4 = [tmp32(closure_8, obj9)];
          let toHexStringResult;
          if (backgroundColors != null) {
            const label = backgroundColors.label;
            toHexStringResult = label.toHexString();
          }
          if (toHexStringResult == null) {
            toHexStringResult = tmp8;
          }
          const obj11 = { tintColor: toHexStringResult, onCancel };
          items4[1] = tmp32(closure_17, obj11);
          obj8.children = items4;
          const items5 = [closure_13(closure_8, obj8), ,];
          const obj12 = {
            style: { flex: 1 },
            contentContainerStyle: tmp6.body,
            alwaysBounceVertical: false,
            children: null,
          };
          const obj13 = { style: null, children: null };
          const items6 = [tmp6.preview, previewViewStyle];
          obj13.style = items6;
          const type = product.type;
          if (tmp2(1980).CollectiblesItemType.BUNDLE === type) {
            const obj14 = { style: tmp6.previewBundle, onLayout: tmp25, children: null };
            let tmp31Result = null != tmp24;
            if (tmp31Result) {
              const obj15 = {
                deco: null,
                pfx: null,
                nameplate: null,
                previewAssets: null,
                disableStaticBackground: true,
                size: "large",
                targetSize: null,
              };
              ({
                firstAvatarDecoration: obj27.deco,
                firstProfileEffect: obj27.pfx,
                firstNameplate: obj27.nameplate,
              } = shopProductItems);
              obj15.previewAssets = product.previewAssets;
              obj15.targetSize = tmp24;
              tmp31Result = tmp31(BundleSampleV2Default, obj15);
            }
            obj14.children = tmp31Result;
            let tmp31Result2 = tmp31(closure_8, obj14);
          } else if (tmp2(1980).CollectiblesItemType.AVATAR_DECORATION === type) {
            const obj16 = {
              item: _slicedToArray(product.items, 1)[0],
              size: avatarDecorationSize,
              avatarSource,
              animate: !stateFromStores,
            };
            tmp31Result2 = tmp31(AvatarDecorationSampleV2Default, obj16);
          } else if (tmp2(1980).CollectiblesItemType.PROFILE_EFFECT === type) {
            const obj17 = { user: currentUser, profileEffect: product.items[0] };
            tmp31Result2 = tmp31(ProfileEffectUserPreviewDefault, obj17);
          } else if (tmp2(1980).CollectiblesItemType.PROFILE_FRAME === type) {
            const obj18 = { user: currentUser, profileFrame: product.items[0] };
            tmp31Result2 = tmp31(ProfileFrameUserPreviewDefault, obj18);
          } else {
            tmp31Result2 = null;
            if (tmp2(1980).CollectiblesItemType.NAMEPLATE === type) {
              const obj19 = { user: currentUser, nameplate: product.items[0], animate: true };
              tmp31Result2 = tmp31(tmp2(10999).NameplatePreview, obj19);
            }
          }
          obj13.children = tmp31Result2;
          const items7 = [tmp32(ReanimatedRexportDefault.View, obj13)];
          const obj20 = { style: null, children: null };
          const items8 = [tmp6.messages, textViewStyle];
          obj20.style = items8;
          if (null != renderMessages) {
            let renderMessagesResult = renderMessages();
          } else {
            const obj21 = {
              variant: "heading-xl/bold",
              color: "text-overlay-light",
              style: tmp6.title,
              children: null,
            };
            const intl3 = tmp2(1126).intl;
            const obj22 = { itemName: product.name };
            obj21.children = intl3.format(tmp2(1126).t.YNaxMp, obj22);
            const items9 = [tmp32(tmp2(4886).Text, obj21)];
            const obj23 = { variant: "text-md/medium", color: "text-overlay-light", style: tmp6.title, children: null };
            let result = tmp2(7065).isPremiumCollectiblesProduct(product);
            const intl4 = tmp2(1126).intl;
            const format = intl4.format;
            const t = tmp2(1126).t;
            if (result) {
              const obj24 = { itemName: product.name };
              let formatResult = format(t.nW6E3m, obj24);
            } else {
              const obj25 = { itemName: product.name };
              formatResult = format(t["4kp0AB"], obj25);
            }
            const obj26 = { children: null };
            obj23.children = formatResult;
            items9[1] = tmp32(tmp2(4886).Text, obj23);
            obj26.children = items9;
            renderMessagesResult = closure_13(closure_14, obj26);
            const tmp2Result14 = tmp2(7065);
          }
          obj20.children = renderMessagesResult;
          items7[1] = tmp32(ReanimatedRexportDefault.View, obj20);
          obj12.children = items7;
          items5[1] = closure_13(closure_7, obj12);
          const obj28 = { style: tmp6.footer, children: null };
          const obj29 = { style: tmp6.cta, children: null };
          if (canUseNow) {
            const obj30 = {
              loading: isApplying,
              disabled: isApplying,
              onPress: handleUseNow,
              text: null,
              size: "lg",
              grow: true,
            };
            const intl2 = tmp2(1126).intl;
            obj30.text = intl2.string(tmp2(1126).t.MAS7uK);
            let obj31 = obj30;
          } else {
            obj31 = { onPress: handleEditProfile, text: null, size: "lg", grow: true };
            const intl = tmp2(1126).intl;
            obj31.text = intl.string(tmp2(1126).t["2p2aYz"]);
          }
          obj29.children = tmp32(tmp2(5594).Button, obj31);
          obj28.children = tmp32(closure_8, obj29);
          items5[2] = tmp32(closure_8, obj28);
          rect.children = items5;
          items2[1] = closure_13(tmp2(6619).SafeAreaPaddingView, rect);
          const obj32 = { style: null, pointerEvents: "none" };
          const items10 = [tmp6.curtain, curtainViewStyle];
          obj32.style = items10;
          items2[2] = tmp32(ReanimatedRexportDefault.View, obj32);
          obj4.children = items2;
          return closure_13(closure_8, obj4);
        }
        const obj33 = { product };
        tmp30 = closure_12(closure_29, obj33);
        tmp31 = closure_12;
        tmp32 = closure_12;
        const tmp23 = _slicedToArray(noop.useState(), 2);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      let obj = require("useCurrentUser");
    };
