// === Module 7666: ProfileFrame ===

// Module 7666 (ProfileFrame)
import timing from "timing" /* 4837 */;
import FastImageDefault from "FastImage" /* 5899 */;
import FramePreviewOverrideFrameDefault from "FramePreviewOverrideFrame" /* 7671 */;
import noop from "module_19" /* 19 */;

require = fn;
function ProfileFrameLayer(skuId) {
  const layer = skuId.layer;
  const overflowTop = skuId.overflowTop;
  const overflowBottom = skuId.overflowBottom;
  const overflowHorizontal = skuId.overflowHorizontal;
  ({ containerWidth, containerHeight, fade } = skuId);
  const tmp = closure_10();
  const sum = containerWidth + 2 * overflowHorizontal;
  c5 = sum;
  const tmp5 = overflowTop(overflowBottom[7])({ skuId: skuId.skuId, layer, width: sum });
  const assetUrl = tmp5.assetUrl;
  const imageHeight = tmp5.imageHeight;
  const items = [, , , , , ];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = overflowHorizontal.useMemo(() => {
    const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: React5[layer.order] };
    const type = layer.type;
    if ("staple" === type) {
      const obj = {};
      const merged = Object.assign(rect);
      let tmp12;
      if ("top" === layer.anchor) {
        tmp12 = -overflowTop;
      }
      obj.top = tmp12;
      let tmp14;
      if ("bottom" === layer.anchor) {
        tmp14 = -overflowBottom;
      }
      obj.bottom = tmp14;
      return obj;
    } else if ("rail" === type) {
      const obj2 = {};
      const merged1 = Object.assign(rect);
      let str2 = "center";
      if ("center" !== layer.anchor) {
        let str3 = "flex-end";
        if ("top" === layer.anchor) {
          str3 = "flex-start";
        }
        str2 = str3;
      }
      obj2.justifyContent = str2;
      return obj2;
    } else {
      const obj3 = {};
      const merged2 = Object.assign(rect);
      obj3.left = -tmp;
      return obj3;
    }
  }, items);
  let tmp7 = true === layer.responsive;
  if (tmp7) {
    tmp7 = "rail" === layer.type;
  }
  if (tmp7) {
    tmp7 = null != containerHeight;
  }
  if (tmp7) {
    tmp7 = containerWidth / containerHeight >= assetUrl;
  }
  if (0 !== imageHeight) {
    if (null != assetUrl) {
      if (!tmp7) {
        if ("border" === layer.type) {
          if (null != containerHeight) {
            if (0 !== containerHeight) {
              const _Math = Math;
              let obj2 = { style: null, children: null };
              const items1 = [tmp.layer, memo];
              obj2.style = items1;
              const _Array = Array;
              let obj3 = { length: Math.ceil(containerHeight / imageHeight) };
              obj2.children = Array.from(obj3, (arg0, key) => {
                const size = { source: null, resizeMode: "cover", width, height: imageHeight, fade };
                source = { uri: assetUrl };
                size.source = source;
                return jsx(FastImageDefault, { source: null, resizeMode: "cover", width, height: imageHeight, fade }, key);
              });
              return <fade style={null}>{null}</fade>;
            }
          }
          return null;
        } else {
          let obj = { style: null, children: null };
          const items2 = [tmp.layer, memo];
          obj.style = items2;
          let size = { source: null, resizeMode: "cover", width: null, height: null, fade: null };
          const obj4 = { uri: assetUrl };
          size.source = obj4;
          size.width = sum;
          size.height = imageHeight;
          size.fade = fade;
          obj.children = jsx(overflowTop(overflowBottom[8]), { source: null, resizeMode: "cover", width: null, height: null, fade: null });
          return <fade style={null}>{null}</fade>;
        }
      }
    }
  }
  return null;
}
function LiveProfileFrame(frame) {
  frame = frame.frame;
  const containerWidth = frame.containerWidth;
  ({ containerHeight: dependencyMap, profileThemeType } = frame);
  const frameOrder = frame.frameOrder;
  const filterLayer = frame.filterLayer;
  let sharedValue;
  c9 = undefined;
  c10 = undefined;
  c11 = undefined;
  const tmp = c10();
  closure_6 = frame(7669).useIsProfileFrameLayerPreloadEnabled("ProfileFrame");
  let obj = frame(7669);
  const settled = frame(7668).usePreloadLayerImages({ frame, containerWidth, profileThemeType, filterLayer }).settled;
  const items = [frame.layers, frameOrder, profileThemeType, filterLayer];
  const memo = profileThemeType.useMemo(() => {
    const layers = frame.layers;
    return layers.filter((order) => {
      let result = null == frameOrder || tmp === order.order;
      if (result) {
        result = frame(containerHeight[7]).isProfileFrameLayerShown(order, profileThemeType, filterLayer);
        const obj = frame(containerHeight[7]);
      }
      return result;
    });
  }, items);
  const obj2 = frame(7668);
  let num = 0;
  if (settled) {
    num = 1;
  }
  sharedValue = frame(4566).useSharedValue(num);
  const items1 = [settled, sharedValue];
  const effect = profileThemeType.useEffect(() => {
    let num = 0;
    if (settled) {
      const obj = timing;
      num = obj.withTiming(1, obj);
    }
    const result = sharedValue.set(num);
  }, items1);
  if (0 !== memo.length) {
    if (0 !== containerWidth) {
      if (settled) {
        ({ overflowTop: c9, overflowBottom: c10, overflowHorizontal: c11 } = containerWidth(7670)(frame, containerWidth));
        const obj5 = { style: null, children: null };
        const items2 = [tmp.container, ];
        const obj6 = { opacity: sharedValue };
        items2[1] = obj6;
        obj5.style = items2;
        obj5.children = memo.map((layer) => <ProfileFrameLayer key={layer.id} skuId={frame.skuId} layer={layer} overflowTop={overflowTop} overflowBottom={overflowBottom} overflowHorizontal={overflowHorizontal} containerWidth={containerWidth} containerHeight={containerHeight} fade={!closure_6} />);
        return sharedValue(containerWidth(4566).View, obj5);
      }
    }
  }
  return null;
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
let closure_5 = fn(7648).useFramePreviewOverrideStore;
const ProfileFrameConstants = fn(7667);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: metroRequire, PROFILE_FRAME_Z_INDEX: closure_7 } = ProfileFrameConstants);
const jsx = fn(21).jsx;
let source = { duration: 150, easing: null };
const Easing = fn(4566).Easing;
source.easing = Easing.in(fn(4566).Easing.ease);
const createStyles = fn(4836);
let obj3 = { container: null, layer: null };
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.pointerEvents = "none";
obj3.container = obj4;
let obj5 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5.alignItems = "center";
obj5.overflow = "hidden";
obj3.layer = obj5;
let closure_10 = createStyles.createStyles(obj3);
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrame.tsx");

export default function ProfileFrame(arg0) {
  const tmp = closure_5((override) => override.override);
  if (null != tmp) {
    const obj2 = { override: tmp };
    const merged = Object.assign(arg0);
    let tmp7 = jsx(FramePreviewOverrideFrameDefault, { override: tmp });
  } else {
    const obj = {};
    const merged1 = Object.assign(arg0);
    tmp7 = <LiveProfileFrame />;
  }
  return tmp7;
};