// === Module 12422: MediaModalOverlayHeader ===

// Module 12422 (MediaModalOverlayHeader)
import "MoreVerticalIcon";
import get_ActivityIndicator from "ContextMenu";
import jsxProd from "set";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { navbarInner: null, navbarLeft: null, navbarRight: null, navbarName: null, navbarNameInner: null, navbarNameShrinkWrapper: null, contextIcon: null };
createCacheKey = { flex: 1, alignItems: "center", flexDirection: "row", height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, paddingHorizontal: 6, justifyContent: "space-between" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 1, flexDirection: "row", marginRight: 8 };
createCacheKey[2] = { flexShrink: 0, justifyContent: "flex-end", flexDirection: "row", gap: 8 };
createCacheKey[3] = { flexShrink: 1, alignItems: "center", height: 40, marginLeft: 8 };
createCacheKey[4] = { borderRadius: 20, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.7)", flex: 1, flexDirection: "row", paddingHorizontal: 18 };
createCacheKey[5] = { flexShrink: 1 };
createCacheKey[6] = { width: 18, height: 18, marginRight: 6 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeader.tsx");

export const MediaModalOverlayHeader = function MediaModalOverlayHeader(arg0) {
  let animationDriver;
  let channelId;
  let contextIcon;
  let contextName;
  let disableDownload;
  let disableMediaOverlayButton;
  let onClose;
  let shareable;
  let source;
  ({ source, contextName, contextIcon } = arg0);
  ({ onClose, disableDownload, disableMediaOverlayButton, shareable, animationDriver, channelId } = arg0);
  const tmp = createCacheKey();
  let obj = require(12419) /* useOverlayLayoutDriver */;
  const headerLayoutAnimation = obj.useHeaderLayoutAnimation(animationDriver);
  let obj1 = require(8480) /* useMediaShareActions */;
  const mediaShareActions = obj1.useMediaShareActions({ source, disableDownload, shareable });
  const tmp7 = importDefault(9717)(channelId);
  obj = { style: null, children: null };
  obj = {};
  let merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.bottom = undefined;
  const items = [obj, headerLayoutAnimation];
  obj[0] = items;
  obj1 = { style: tmp.navbarInner, pointerEvents: "box-none", children: null };
  const obj2 = { style: tmp.navbarLeft, children: null };
  const obj3 = { accessibilityLabel: null, icon: null, onPress: null };
  let intl = require(1236) /* getSystemLocale */.intl;
  obj3[0] = intl.string(require(1236) /* getSystemLocale */.t.cpT0Cq);
  obj3[1] = callback(require(5241) /* XSmallIcon */.XSmallIcon, { size: "md", color: "interactive-text-active" });
  obj3[2] = onClose;
  const items1 = [callback(importDefault(12423), obj3), ];
  let tmp8Result = null != contextName;
  if (tmp8Result) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.navbarName;
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.navbarNameInner;
    tmp8Result = null != contextIcon;
    if (tmp8Result) {
      const obj6 = { source: null, color: null, size: null, style: null };
      obj6[0] = contextIcon;
      obj6[1] = tmp6(712).unsafe_rawColors.PRIMARY_345;
      obj6[2] = tmp2(1297).Icon.Sizes.CUSTOM;
      obj6[3] = tmp.contextIcon;
      tmp8Result = tmp8(tmp2(1297).Icon, obj6);
    }
    const items2 = [tmp8Result, ];
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.navbarNameShrinkWrapper;
    const obj8 = { accessibilityRole: "header", variant: "heading-md/medium", lineClamp: 1, ellipsizeMode: "tail", color: "text-overlay-light", children: null };
    obj8[5] = contextName;
    obj7[1] = tmp8(tmp2(4251).Text, obj8);
    items2[1] = tmp8(tmp11, obj7);
    obj5[1] = items2;
    obj4[1] = tmp10(tmp11, obj5);
    tmp8Result = tmp8(tmp11, obj4);
  }
  items1[1] = tmp8Result;
  obj2[1] = items1;
  const items3 = [closure_6(closure_4, obj2), ];
  let tmp10Result = !tmp7;
  if (!tmp7) {
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.navbarRight;
    const obj10 = { source: null };
    obj10[0] = source;
    const items4 = [tmp8(tmp6(12424), obj10), ];
    let tmp8Result1 = null;
    if (!disableMediaOverlayButton) {
      const obj11 = { items: null, children: null };
      obj11[0] = mediaShareActions;
      obj11[1] = function children(ref) {
        const merged = Object.assign(ref, Object.create(null));
        const obj = { accessibilityLabel: null, icon: null, ref: null };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t.PdRCRg);
        const tmp4 = callback2(12423);
        if (obj2.isAndroid()) {
          let tmp2Result = tmp2(tmp5(12425).MoreVerticalIcon, { size: "md", color: "interactive-text-active" });
        } else {
          tmp2Result = tmp2(tmp5(9149).MoreHorizontalIcon, { size: "md", color: "interactive-text-active" });
        }
        obj[1] = tmp2Result;
        obj[2] = ref.ref;
        const merged1 = Object.assign(merged);
        return closure_5(tmp4, obj);
      };
      tmp8Result1 = tmp8(tmp2(9482).ContextMenu, obj11);
    }
    items4[1] = tmp8Result1;
    obj9[1] = items4;
    tmp10Result = tmp10(tmp11, obj9);
  }
  const tmp12 = importDefault(12423);
  items3[1] = tmp10Result;
  obj1[2] = items3;
  obj[1] = callback(require(5243) /* SafeAreaPaddingView */.SafeAreaPaddingView, { top: true, left: true, right: true, pointerEvents: "box-none", children: closure_6(closure_4, obj1) });
  return callback(importDefault(4116).View, obj);
};