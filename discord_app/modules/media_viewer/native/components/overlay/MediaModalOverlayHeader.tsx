// === Module 12449: MediaModalOverlayHeader ===

// Module 12449 (MediaModalOverlayHeader)
import noopAll from "noop" /* 19 */;
import _modDef4120 from "module_4120" /* 4120 */;
import _modDef9078 from "module_9078" /* 9078 */;
import useShouldHideMediaOptionsDefault from "useShouldHideMediaOptions" /* 11210 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { SHARE_PREPARING_MODAL_KEY } from "SHARE_PREPARING_MODAL_KEY" /* 9073 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
noopAll;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ navbarInner: { flex: 1, justifyContent: "space-between" }, navbarLeft: { flexShrink: 1, flexDirection: "row", marginRight: 8 }, navbarRight: { flexShrink: 0, justifyContent: "flex-end", flexDirection: "row", gap: 8 }, navbarName: { flexShrink: 1, alignItems: "center", height: 40, marginLeft: 8 }, navbarNameInner: { borderRadius: 20, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.7)", flex: 1, flexDirection: "row", paddingHorizontal: 18 }, navbarNameShrinkWrapper: { flexShrink: 1 }, contextIcon: { width: 18, height: 18, marginRight: 6 } });
let closure_9 = { code: "function MediaModalOverlayHeaderTsx1(){const{withTiming,isPreparing}=this.__closure;return{opacity:withTiming(isPreparing?0:1)};}" };
const result = require("set").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx");

export const MediaModalOverlayHeader = function MediaModalOverlayHeader(arg0) {
  ({ source, contextName, contextIcon } = arg0);
  let isModalOpen;
  ({ onClose, disableDownload, disableMediaOverlayButton, shareable, animationDriver, channelId } = arg0);
  const tmp = callback();
  let obj = isModalOpen(12446);
  const headerLayoutAnimation = obj.useHeaderLayoutAnimation(animationDriver);
  obj1 = isModalOpen(9044);
  const mediaShareActions = obj1.useMediaShareActions({ source, disableDownload, shareable });
  const tmp7 = useShouldHideMediaOptionsDefault(channelId);
  let obj2 = isModalOpen(4234);
  isModalOpen = obj2.useIsModalOpen(SHARE_PREPARING_MODAL_KEY);
  let obj3 = isModalOpen(4120);
  const fn = function w() {
    let obj = isModalOpen(closure_1_2[10]);
    let num = 1;
    if (isModalOpen) {
      num = 0;
    }
    obj = { opacity: obj.withTiming(num) };
    return obj;
  };
  obj = { withTiming: isModalOpen(4381).withTiming, isPreparing: isModalOpen };
  fn.__closure = obj;
  fn.__workletHash = 13276839935975;
  fn.__initData = closure_9;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  obj = { style: null, children: null };
  obj1 = {};
  let merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj1.bottom = undefined;
  const items = [obj1, headerLayoutAnimation];
  obj[0] = items;
  obj2 = { style: animatedStyle, pointerEvents: null, children: null };
  let str = "box-none";
  if (isModalOpen) {
    str = "none";
  }
  obj2[1] = str;
  obj3 = { style: tmp.navbarInner, children: null };
  const obj4 = { style: tmp.navbarLeft, children: null };
  const obj5 = { accessibilityLabel: null, icon: null, onPress: null };
  let intl = tmp2(1236).intl;
  obj5[0] = intl.string(isModalOpen(1236).t.cpT0Cq);
  obj5[1] = closure_6(isModalOpen(5432).XSmallIcon, { size: "md", color: "interactive-text-active" });
  obj5[2] = onClose;
  const items1 = [closure_6(_modDef9078, obj5), ];
  let tmp10Result = null != contextName;
  if (tmp10Result) {
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.navbarName;
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.navbarNameInner;
    tmp10Result = null != contextIcon;
    if (tmp10Result) {
      const obj8 = { source: null, color: null, size: null, style: null };
      obj8[0] = contextIcon;
      obj8[1] = tmp6(712).unsafe_rawColors.PRIMARY_345;
      obj8[2] = tmp2(1297).Icon.Sizes.CUSTOM;
      obj8[3] = tmp.contextIcon;
      tmp10Result = tmp10(tmp2(1297).Icon, obj8);
    }
    const items2 = [tmp10Result, ];
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.navbarNameShrinkWrapper;
    const obj10 = { accessibilityRole: "header", variant: "heading-md/medium", lineClamp: 1, ellipsizeMode: "tail", color: "text-overlay-light", children: null };
    obj10[5] = contextName;
    obj9[1] = tmp10(tmp2(4376).Text, obj10);
    items2[1] = tmp10(tmp13, obj9);
    obj7[1] = items2;
    obj6[1] = tmp12(tmp13, obj7);
    tmp10Result = tmp10(tmp13, obj6);
  }
  items1[1] = tmp10Result;
  obj4[1] = items1;
  const items3 = [closure_7(closure_4, obj4), ];
  let tmp12Result = !tmp7;
  if (!tmp7) {
    const obj11 = { style: null, children: null };
    obj11[0] = tmp.navbarRight;
    const obj12 = { source: null };
    obj12[0] = source;
    const items4 = [tmp10(tmp6(12450), obj12), ];
    let tmp10Result1 = null;
    if (!disableMediaOverlayButton) {
      const obj13 = { items: null, children: null };
      obj13[0] = mediaShareActions;
      obj13[1] = function children(ref) {
        const merged = Object.assign(ref, Object.create(null));
        const obj = { accessibilityLabel: null, icon: null, ref: null };
        const intl = isModalOpen(1236).intl;
        obj[0] = intl.string(isModalOpen(1236).t.PdRCRg);
        const tmp4 = callback(9078);
        if (obj2.isAndroid()) {
          let tmp2Result = tmp2(tmp5(12451).MoreVerticalIcon, { size: "md", color: "interactive-text-active" });
        } else {
          tmp2Result = tmp2(tmp5(8751).MoreHorizontalIcon, { size: "md", color: "interactive-text-active" });
        }
        obj[1] = tmp2Result;
        obj[2] = ref.ref;
        const merged1 = Object.assign(merged);
        return closure_6(tmp4, obj);
      };
      tmp10Result1 = tmp10(tmp2(8745).ContextMenu, obj13);
    }
    items4[1] = tmp10Result1;
    obj11[1] = items4;
    tmp12Result = tmp12(tmp13, obj11);
  }
  items3[1] = tmp12Result;
  obj3[1] = items3;
  obj2[2] = closure_7(isModalOpen(9077).MediaModalOverlayHeaderWrapper, obj3);
  obj[1] = closure_6(_modDef4120.View, obj2);
  return closure_6(_modDef4120.View, obj);
};