// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import _mod1652 from "../../../../../../_runtime/metro/01652__.js";
import NavigationRouteUtils from "../../../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import timing_timing from "../../../../../design/animation/reanimated/timing/timing.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import XSmallIcon from "../../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import ContextMenu from "../../../../../design/components/ContextMenu/native/ContextMenu.native.tsx";
import MediaShareActions from "../MediaShareActions.tsx";
import MediaModalOverlayHeaderWrapper from "MediaModalOverlayHeaderWrapper.tsx";
import MediaViewerOverlayButtonDefault from "MediaViewerOverlayButton.tsx";
import useShouldHideMediaOptionsDefault from "../../../../media_channel/useShouldHideMediaOptions.tsx";
import useOverlayLayoutDriver from "../../useOverlayLayoutDriver.tsx";
import MediaViewerOverlayButtonFavoriteGIFDefault from "MediaViewerOverlayButtonFavoriteGIF.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const SHARE_PREPARING_MODAL_KEY = fn(10166).SHARE_PREPARING_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5243);
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
let closure_9 = {
  code: "(function MediaModalOverlayHeaderTsx1(){let[withTiming,isPreparing]=this.__closure;return{opacity:withTiming(isPreparing?0:1)};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx");

export function MediaModalOverlayHeader(arg0) {
  ({ source, contextName, contextIcon } = arg0);
  ({ onClose, disableDownload, disableMediaOverlayButton, shareable, animationDriver, channelId } = arg0);
  const tmp = closure_8();
  const headerLayoutAnimation = useOverlayLayoutDriver.useHeaderLayoutAnimation(animationDriver);
  const mediaShareActions = MediaShareActions.useMediaShareActions({ source, disableDownload, shareable });
  const tmp7 = useShouldHideMediaOptionsDefault(channelId);
  const isModalOpen = NavigationRouteUtils.useIsModalOpen(SHARE_PREPARING_MODAL_KEY);
  items = [closure_9, timing_timing.withTiming, isModalOpen];
  c0 = undefined;
  c1 = undefined;
  [tmp9, tmp10, tmp11] = items;
  class MediaModalOverlayHeaderTsx1 {
    constructor() {
      num = 1;
      tmp = closure_0;
      if (closure_1) {
        num = 0;
      }
      obj = { opacity: tmp(num) };
      return obj;
    }
  }
  const items1 = [tmp10, tmp11];
  MediaModalOverlayHeaderTsx1.__closure = items1;
  MediaModalOverlayHeaderTsx1.__workletHash = 9063538094430;
  MediaModalOverlayHeaderTsx1.__initData = tmp9;
  const animatedStyle = _mod1652.useAnimatedStyle(MediaModalOverlayHeaderTsx1);
  const obj5 = { style: null, children: null };
  const obj6 = {};
  let merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj6.bottom = undefined;
  const items2 = [obj6, headerLayoutAnimation];
  obj5.style = items2;
  const obj7 = { style: animatedStyle, pointerEvents: null, children: null };
  let str = "box-none";
  if (isModalOpen) {
    str = "none";
  }
  obj7.pointerEvents = str;
  const obj8 = { style: tmp.navbarInner, children: null };
  const obj9 = { style: tmp.navbarLeft, children: null };
  const obj10 = { accessibilityLabel: null, icon: null, onPress: null };
  let intl = util.intl;
  obj10.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj10.icon = timestampProducer(XSmallIcon.XSmallIcon, { size: "md", color: "interactive-text-active" });
  obj10.onPress = onClose;
  const items3 = [timestampProducer(MediaViewerOverlayButtonDefault, obj10)];
  let tmp13Result3 = null != contextName;
  if (tmp13Result3) {
    const obj11 = { style: tmp.navbarName, children: null };
    const obj12 = { style: tmp.navbarNameInner, children: null };
    let tmp13Result = null != contextIcon;
    if (tmp13Result) {
      const obj13 = {
        source: contextIcon,
        color: nativeDefault.unsafe_rawColors.PRIMARY_345,
        size: native.Icon.Sizes.CUSTOM,
        style: tmp.contextIcon,
      };
      tmp13Result = timestampProducer(native.Icon, obj13);
    }
    const items4 = [tmp13Result];
    const obj14 = { style: tmp.navbarNameShrinkWrapper, children: null };
    const obj15 = {
      accessibilityRole: "header",
      variant: "heading-sm/medium",
      lineClamp: 1,
      ellipsizeMode: "tail",
      color: "text-overlay-light",
      children: contextName,
    };
    obj14.children = timestampProducer(Text_Text.Text, obj15);
    items4[1] = timestampProducer(React4, obj14);
    obj12.children = items4;
    obj11.children = metroImportDefault(React4, obj12);
    tmp13Result3 = timestampProducer(React4, obj11);
  }
  items3[1] = tmp13Result3;
  obj9.children = items3;
  const items5 = [metroImportDefault(React4, obj9)];
  let tmp15Result = !tmp7;
  if (!tmp7) {
    const obj16 = { style: tmp.navbarRight, children: null };
    const obj17 = { source };
    const items6 = [timestampProducer(MediaViewerOverlayButtonFavoriteGIFDefault, obj17)];
    let tmp13Result4 = null;
    if (!disableMediaOverlayButton) {
      const obj18 = {
        items: mediaShareActions,
        children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { accessibilityLabel: null, icon: null, ref: null };
          const intl = _undefined(1113).intl;
          obj.accessibilityLabel = intl.string(_undefined(1113).t.PdRCRg);
          const tmp4 = _undefined2(10171);
          if (obj2.isAndroid()) {
            let tmp2Result = closure_1_6(_undefined(15095).MoreVerticalIcon, {
              size: "md",
              color: "interactive-text-active",
            });
          } else {
            tmp2Result = closure_1_6(_undefined(7356).MoreHorizontalIcon, {
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
      tmp13Result4 = timestampProducer(ContextMenu.ContextMenu, obj18);
    }
    items6[1] = tmp13Result4;
    obj16.children = items6;
    tmp15Result = metroImportDefault(React4, obj16);
  }
  items5[1] = tmp15Result;
  obj8.children = items5;
  obj7.children = metroImportDefault(MediaModalOverlayHeaderWrapper.MediaModalOverlayHeaderWrapper, obj8);
  obj5.children = timestampProducer(_modDef1652.View, obj7);
  return timestampProducer(_modDef1652.View, obj5);
}
