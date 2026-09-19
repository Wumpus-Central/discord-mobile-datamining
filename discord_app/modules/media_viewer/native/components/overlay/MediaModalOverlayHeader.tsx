// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import MediaViewerOverlayButtonDefault from "MediaViewerOverlayButton.tsx";
import useShouldHideMediaOptionsDefault from "../../../../media_channel/useShouldHideMediaOptions.tsx";
import MediaViewerOverlayButtonFavoriteGIFDefault from "MediaViewerOverlayButtonFavoriteGIF.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const SHARE_PREPARING_MODAL_KEY = fn(8634).SHARE_PREPARING_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let closure_8 = createStyles.createStyles({
  navbarInner: { flex: 1, justifyContent: "space-between" },
  navbarLeft: { flexShrink: 1, flexDirection: "row", marginRight: 8 },
  navbarRight: { flexShrink: 0, justifyContent: "flex-end", flexDirection: "row", gap: 8 },
  navbarName: { flexShrink: 1, alignItems: "center", height: 40, marginLeft: 8 },
  navbarNameInner: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 18,
  },
  navbarNameShrinkWrapper: { flexShrink: 1 },
  contextIcon: { width: 18, height: 18, marginRight: 6 },
});
const __initData = {
  code: "function MediaModalOverlayHeaderTsx1(){const{withTiming,isPreparing}=this.__closure;return{opacity:withTiming(isPreparing?0:1)};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx");

export const MediaModalOverlayHeader = function MediaModalOverlayHeader(arg0) {
  ({ source, contextName, contextIcon } = arg0);
  let isModalOpen;
  ({ onClose, disableDownload, disableMediaOverlayButton, shareable, animationDriver, channelId } = arg0);
  const tmp = closure_8();
  const headerLayoutAnimation = isModalOpen(13253).useHeaderLayoutAnimation(animationDriver);
  let obj = isModalOpen(13253);
  const mediaShareActions = isModalOpen(8604).useMediaShareActions({ source, disableDownload, shareable });
  const tmp7 = useShouldHideMediaOptionsDefault(channelId);
  const obj2 = isModalOpen(8604);
  isModalOpen = isModalOpen(4613).useIsModalOpen(SHARE_PREPARING_MODAL_KEY);
  const obj3 = isModalOpen(4613);
  const fn = function w() {
    let num = 1;
    if (isModalOpen) {
      num = 0;
    }
    return { opacity: timing.withTiming(num) };
  };
  const obj4 = isModalOpen(4492);
  fn.__closure = { withTiming: isModalOpen(4757).withTiming, isPreparing: isModalOpen };
  fn.__workletHash = 13276839935975;
  fn.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj6 = { style: null, children: null };
  const obj7 = {};
  let merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj7.bottom = undefined;
  const items = [obj7, headerLayoutAnimation];
  obj6.style = items;
  const obj8 = { style: animatedStyle, pointerEvents: null, children: null };
  let str = "box-none";
  if (isModalOpen) {
    str = "none";
  }
  obj8.pointerEvents = str;
  const obj9 = { style: tmp.navbarInner, children: null };
  const obj10 = { style: tmp.navbarLeft, children: null };
  const obj11 = { accessibilityLabel: null, icon: null, onPress: null };
  const obj5 = { withTiming: isModalOpen(4757).withTiming, isPreparing: isModalOpen };
  let intl = tmp2(1115).intl;
  obj11.accessibilityLabel = intl.string(isModalOpen(1115).t.cpT0Cq);
  obj11.icon = closure_6(isModalOpen(5892).XSmallIcon, { size: "md", color: "interactive-text-active" });
  obj11.onPress = onClose;
  const items1 = [closure_6(MediaViewerOverlayButtonDefault, obj11)];
  let tmp10Result3 = null != contextName;
  if (tmp10Result3) {
    const obj12 = { style: tmp.navbarName, children: null };
    const obj13 = { style: tmp.navbarNameInner, children: null };
    let tmp10Result = null != contextIcon;
    if (tmp10Result) {
      const obj14 = {
        source: contextIcon,
        color: nativeDefault.unsafe_rawColors.PRIMARY_345,
        size: tmp2(1177).Icon.Sizes.CUSTOM,
        style: tmp.contextIcon,
      };
      tmp10Result = closure_6(tmp2(1177).Icon, obj14);
    }
    const items2 = [tmp10Result];
    const obj15 = { style: tmp.navbarNameShrinkWrapper, children: null };
    const obj16 = {
      accessibilityRole: "header",
      variant: "heading-md/medium",
      lineClamp: 1,
      ellipsizeMode: "tail",
      color: "text-overlay-light",
      children: contextName,
    };
    obj15.children = closure_6(tmp2(4752).Text, obj16);
    items2[1] = closure_6(closure_4, obj15);
    obj13.children = items2;
    obj12.children = closure_7(closure_4, obj13);
    tmp10Result3 = closure_6(closure_4, obj12);
  }
  items1[1] = tmp10Result3;
  obj10.children = items1;
  const items3 = [closure_7(closure_4, obj10)];
  let tmp12Result = !tmp7;
  if (!tmp7) {
    const obj17 = { style: tmp.navbarRight, children: null };
    const obj18 = { source };
    const items4 = [closure_6(MediaViewerOverlayButtonFavoriteGIFDefault, obj18)];
    let tmp10Result4 = null;
    if (!disableMediaOverlayButton) {
      const obj19 = {
        items: mediaShareActions,
        children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { accessibilityLabel: null, icon: null, ref: null };
          const intl = isModalOpen(1115).intl;
          obj.accessibilityLabel = intl.string(isModalOpen(1115).t.PdRCRg);
          const tmp4 = MediaViewerOverlayButtonDefault;
          if (obj2.isAndroid()) {
            let tmp2Result = closure_1_6(isModalOpen(13258).MoreVerticalIcon, {
              size: "md",
              color: "interactive-text-active",
            });
          } else {
            tmp2Result = closure_1_6(isModalOpen(8180).MoreHorizontalIcon, {
              size: "md",
              color: "interactive-text-active",
            });
          }
          obj.icon = tmp2Result;
          obj.ref = ref.ref;
          const merged1 = Object.assign(merged);
          return closure_1_6(tmp4, obj);
        },
      };
      tmp10Result4 = closure_6(tmp2(8173).ContextMenu, obj19);
    }
    items4[1] = tmp10Result4;
    obj17.children = items4;
    tmp12Result = closure_7(closure_4, obj17);
  }
  items3[1] = tmp12Result;
  obj9.children = items3;
  obj8.children = closure_7(isModalOpen(8638).MediaModalOverlayHeaderWrapper, obj9);
  obj6.children = closure_6(ReanimatedRexportDefault.View, obj8);
  return closure_6(ReanimatedRexportDefault.View, obj6);
};
