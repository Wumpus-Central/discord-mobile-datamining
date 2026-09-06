// === Module 12965: MediaModalOverlayHeader ===

// Module 12965 (MediaModalOverlayHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import timing from "timing" /* 4561 */;
import MediaViewerOverlayButtonDefault from "MediaViewerOverlayButton" /* 8369 */;
import useShouldHideMediaOptionsDefault from "useShouldHideMediaOptions" /* 11662 */;
import MediaViewerOverlayButtonFavoriteGIFDefault from "MediaViewerOverlayButtonFavoriteGIF" /* 12966 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const SHARE_PREPARING_MODAL_KEY = fn(8364).SHARE_PREPARING_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ navbarInner: { flex: 1, justifyContent: "space-between" }, navbarLeft: { flexShrink: 1, flexDirection: "row", marginRight: 8 }, navbarRight: { flexShrink: 0, justifyContent: "flex-end", flexDirection: "row", gap: 8 }, navbarName: { flexShrink: 1, alignItems: "center", height: 40, marginLeft: 8 }, navbarNameInner: { borderRadius: 20, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.7)", flex: 1, flexDirection: "row", paddingHorizontal: 18 }, navbarNameShrinkWrapper: { flexShrink: 1 }, contextIcon: { width: 18, height: 18, marginRight: 6 } });
const __initData = { code: "function MediaModalOverlayHeaderTsx1(){const{withTiming,isPreparing}=this.__closure;return{opacity:withTiming(isPreparing?0:1)};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx");

export const MediaModalOverlayHeader = function MediaModalOverlayHeader(arg0) {
  ({ source, contextName, contextIcon } = arg0);
  let isModalOpen;
  ({ onClose, disableDownload, disableMediaOverlayButton, shareable, animationDriver, channelId } = arg0);
  const tmp = closure_8();
  let obj = isModalOpen(12962);
  const headerLayoutAnimation = obj.useHeaderLayoutAnimation(animationDriver);
  let obj1 = isModalOpen(8334);
  const mediaShareActions = obj1.useMediaShareActions({ source, disableDownload, shareable });
  const tmp7 = useShouldHideMediaOptionsDefault(channelId);
  let obj2 = isModalOpen(4417);
  isModalOpen = obj2.useIsModalOpen(SHARE_PREPARING_MODAL_KEY);
  let obj3 = isModalOpen(4296);
  const fn = function w() {
    let obj = timing;
    let num = 1;
    if (isModalOpen) {
      num = 0;
    }
    obj = { opacity: obj.withTiming(num) };
    return obj;
  };
  obj = { withTiming: isModalOpen(4561).withTiming, isPreparing: isModalOpen };
  fn.__closure = obj;
  fn.__workletHash = 13276839935975;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  obj = { style: null, children: null };
  obj1 = {};
  let merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj1.bottom = undefined;
  const items = [obj1, headerLayoutAnimation];
  obj.style = items;
  obj2 = { style: animatedStyle, pointerEvents: null, children: null };
  let str = "box-none";
  if (isModalOpen) {
    str = "none";
  }
  obj2.pointerEvents = str;
  obj3 = { style: tmp.navbarInner, children: null };
  const obj4 = { style: tmp.navbarLeft, children: null };
  const obj5 = { accessibilityLabel: null, icon: null, onPress: null };
  let intl = tmp2(1114).intl;
  obj5.accessibilityLabel = intl.string(isModalOpen(1114).t.cpT0Cq);
  obj5.icon = closure_6(isModalOpen(5680).XSmallIcon, { size: "md", color: "interactive-text-active" });
  obj5.onPress = onClose;
  const items1 = [closure_6(MediaViewerOverlayButtonDefault, obj5), ];
  let tmp10Result = null != contextName;
  if (tmp10Result) {
    const obj6 = { style: tmp.navbarName, children: null };
    const obj7 = { style: tmp.navbarNameInner, children: null };
    tmp10Result = null != contextIcon;
    if (tmp10Result) {
      const obj8 = { source: contextIcon, color: nativeDefault.unsafe_rawColors.PRIMARY_345, size: tmp2(1178).Icon.Sizes.CUSTOM, style: tmp.contextIcon };
      tmp10Result = closure_6(tmp2(1178).Icon, obj8);
    }
    const items2 = [tmp10Result, ];
    const obj9 = { style: tmp.navbarNameShrinkWrapper, children: null };
    const obj10 = { accessibilityRole: "header", variant: "heading-md/medium", lineClamp: 1, ellipsizeMode: "tail", color: "text-overlay-light", children: contextName };
    obj9.children = closure_6(tmp2(4556).Text, obj10);
    items2[1] = closure_6(closure_4, obj9);
    obj7.children = items2;
    obj6.children = closure_7(closure_4, obj7);
    tmp10Result = closure_6(closure_4, obj6);
  }
  items1[1] = tmp10Result;
  obj4.children = items1;
  const items3 = [closure_7(closure_4, obj4), ];
  let tmp12Result = !tmp7;
  if (!tmp7) {
    const obj11 = { style: tmp.navbarRight, children: null };
    const obj12 = { source };
    const items4 = [closure_6(MediaViewerOverlayButtonFavoriteGIFDefault, obj12), ];
    let tmp10Result1 = null;
    if (!disableMediaOverlayButton) {
      const obj13 = {
        items: mediaShareActions,
        children(ref) {
              const merged = Object.assign(ref, Object.assign({ ref: 0 }));
              const obj = { accessibilityLabel: null, icon: null, ref: null };
              const intl = isModalOpen(1114).intl;
              obj.accessibilityLabel = intl.string(isModalOpen(1114).t.PdRCRg);
              const tmp4 = MediaViewerOverlayButtonDefault;
              if (obj2.isAndroid()) {
                let tmp2Result = closure_1_6(isModalOpen(12967).MoreVerticalIcon, { size: "md", color: "interactive-text-active" });
              } else {
                tmp2Result = closure_1_6(isModalOpen(8672).MoreHorizontalIcon, { size: "md", color: "interactive-text-active" });
              }
              obj.icon = tmp2Result;
              obj.ref = ref.ref;
              const merged1 = Object.assign(merged);
              return closure_1_6(tmp4, obj);
            }
      };
      tmp10Result1 = closure_6(tmp2(8666).ContextMenu, obj13);
    }
    items4[1] = tmp10Result1;
    obj11.children = items4;
    tmp12Result = closure_7(closure_4, obj11);
  }
  items3[1] = tmp12Result;
  obj3.children = items3;
  obj2.children = closure_7(isModalOpen(8368).MediaModalOverlayHeaderWrapper, obj3);
  obj.children = closure_6(ReanimatedRexportDefault.View, obj2);
  return closure_6(ReanimatedRexportDefault.View, obj);
};