// discord_app/modules/collectibles/profile_frames/native/ProfileFrame.tsx
import OverrideProfileFrameLayerDefault from "tooling/FramePreviewOverrideFrame.tsx";
import closure_2 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { useFramePreviewOverrideStore as closure_4 } from "tooling/FramePreviewOverrideStore.tsx";
import PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO from "ProfileFrameConstants.tsx";
import { UserProfileThemeTypes } from "../../../user_profile/native/Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

function ProfileFrameLayer(skuId) {
  const layer = skuId.layer;
  const overflowTop = skuId.overflowTop;
  const overflowBottom = skuId.overflowBottom;
  const overflowHorizontal = skuId.overflowHorizontal;
  ({ containerWidth, containerHeight } = skuId);
  c4 = undefined;
  let assetUrl;
  let imageHeight;
  const tmp = callback2();
  const sum = containerWidth + 2 * overflowHorizontal;
  c4 = sum;
  const tmp5 = layer(overflowTop[7])({ skuId: skuId.skuId, layer, width: sum });
  assetUrl = tmp5.assetUrl;
  imageHeight = tmp5.imageHeight;
  const items = [, , , , , ];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = overflowBottom.useMemo(() => {
    let obj = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: imageHeight[layer.order] };
    const type = layer.type;
    if ("staple" === type) {
      obj = {};
      const merged = Object.assign(obj);
      let tmp12;
      if ("top" === tmp2.anchor) {
        tmp12 = -overflowTop;
      }
      obj.top = tmp12;
      let tmp14;
      if ("bottom" === tmp2.anchor) {
        tmp14 = -overflowBottom;
      }
      obj.bottom = tmp14;
      return obj;
    } else if ("rail" === type) {
      obj = {};
      const merged1 = Object.assign(obj);
      let str2 = "center";
      if ("center" !== tmp2.anchor) {
        let str3 = "flex-end";
        if ("top" === tmp2.anchor) {
          str3 = "flex-start";
        }
        str2 = str3;
      }
      obj.justifyContent = str2;
      return obj;
    } else {
      obj1 = {};
      const merged2 = Object.assign(obj);
      obj1.left = -tmp;
      return obj1;
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
              let obj = { style: null, children: null };
              const items1 = [tmp.layer, memo];
              obj[0] = items1;
              const _Array = Array;
              obj = { length: null };
              obj[0] = Math.ceil(containerHeight / imageHeight);
              obj[1] = Array.from(obj, (arg0, arg1) => {
                obj = { source: obj, resizeMode: "cover", width: c4, height: imageHeight };
                obj = { uri: assetUrl };
                return closure_1_8(layer(overflowTop[8]), obj, arg1);
              });
              return <overflowHorizontal length={null} />;
            }
          }
          return null;
        } else {
          obj = { style: null, children: null };
          const items2 = [tmp.layer, memo];
          obj[0] = items2;
          obj1 = { source: null, resizeMode: "cover", width: null, height: null };
          const obj2 = { uri: null };
          obj2[0] = assetUrl;
          obj1[0] = obj2;
          obj1[2] = sum;
          obj1[3] = imageHeight;
          obj[1] = jsx(layer(overflowTop[8]), { source: null, resizeMode: "cover", width: null, height: null });
          return <overflowHorizontal style={null}>{null}</overflowHorizontal>;
        }
      }
    }
  }
  return null;
}
function LiveProfileFrame(frame) {
  frame = frame.frame;
  const containerWidth = frame.containerWidth;
  ({ containerHeight: closure_2, profileThemeType } = frame);
  const frameOrder = frame.frameOrder;
  const filterLayer = frame.filterLayer;
  c6 = undefined;
  c7 = undefined;
  jsx = undefined;
  const items = [frame.layers, frameOrder, profileThemeType, filterLayer];
  const memo = React.useMemo(() => {
    const layers = frame.layers;
    return layers.filter((order) => {
      let tmp2 = null == closure_4 || tmp === order.order;
      if (tmp2) {
        let tmp4 = null != closure_5;
        if (tmp4) {
          tmp4 = !tmp3(order);
        }
        let tmp5 = !tmp4;
        if (!tmp4) {
          let tmp8 = closure_3 === closure_1_7.PREVIEW;
          if (!tmp8) {
            let tmp9 = "top" === order.anchor;
            if (tmp9) {
              tmp9 = "staple" === order.type;
            }
            tmp8 = tmp9;
          }
          tmp5 = tmp8;
        }
        tmp2 = tmp5;
      }
      return tmp2;
    });
  }, items);
  if (0 !== memo.length) {
    if (0 !== containerWidth) {
      ({ overflowTop: c6, overflowBottom: c7, overflowHorizontal: c8 } = frame(containerWidth[9])(frame, containerWidth));
      const obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj[1] = memo.map((id) => _undefined(closure_1_10, { skuId: frame.skuId, layer: id, overflowTop: c6, overflowBottom: c7, overflowHorizontal: _undefined, containerWidth, containerHeight: closure_2 }, id.id));
      return <profileThemeType style={null}>{null}</profileThemeType>;
    }
  }
  return null;
}
({ View: c3, StyleSheet } = get_ActivityIndicator);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: c5, PROFILE_FRAME_Z_INDEX: closure_6 } = PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO);
createCacheKey = { container: null, layer: null };
createCacheKey = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.pointerEvents = "none";
createCacheKey[0] = createCacheKey;
let obj1 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1.alignItems = "center";
obj1.overflow = "hidden";
createCacheKey[1] = obj1;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrame.tsx");

export default function ProfileFrame(arg0) {
  const tmp = callback((override) => override.override);
  if (null != tmp) {
    let obj = { override: null };
    obj[0] = tmp;
    const merged = Object.assign(arg0);
    let tmp7 = jsx(OverrideProfileFrameLayerDefault, { override: null });
    const tmp11 = OverrideProfileFrameLayerDefault;
  } else {
    obj = {};
    const merged1 = Object.assign(arg0);
    tmp7 = <LiveProfileFrame />;
  }
  return tmp7;
};