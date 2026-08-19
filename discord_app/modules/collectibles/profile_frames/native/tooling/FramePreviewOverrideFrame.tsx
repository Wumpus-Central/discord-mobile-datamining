// discord_app/modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideFrame.tsx
import noop from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO from "../ProfileFrameConstants.tsx";
import { UserProfileThemeTypes } from "../../../../user_profile/native/Constants.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

function OverrideProfileFrameLayer(layer) {
  layer = layer.layer;
  const uri = layer.uri;
  const overflowTop = layer.overflowTop;
  const overflowBottom = layer.overflowBottom;
  const overflowHorizontal = layer.overflowHorizontal;
  ({ containerWidth, containerHeight } = layer);
  const tmp = callback();
  const sum = containerWidth + 2 * overflowHorizontal;
  c5 = sum;
  const result = layer.ratio * sum;
  c6 = result;
  const items = [, , , , , ];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = overflowTop.useMemo(() => {
    let obj = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: _undefined[layer.order] };
    const type = layer.type;
    if ("staple" === type) {
      obj = {};
      const merged = Object.assign(obj);
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
      obj = {};
      const merged1 = Object.assign(obj);
      let str2 = "center";
      if ("center" !== layer.anchor) {
        let str3 = "flex-end";
        if ("top" === layer.anchor) {
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
  let tmp5 = true === layer.responsive;
  if (tmp5) {
    tmp5 = "rail" === layer.type;
  }
  if (tmp5) {
    tmp5 = null != containerHeight;
  }
  if (tmp5) {
    tmp5 = containerWidth / containerHeight >= overflowHorizontal;
  }
  if (0 !== result) {
    if (null != uri) {
      if (!tmp5) {
        if ("border" === layer.type) {
          if (null != containerHeight) {
            if (0 !== containerHeight) {
              const _Math = Math;
              let obj = { style: null, children: null };
              const items1 = [tmp.layer, memo];
              obj[0] = items1;
              const _Array = Array;
              obj = { length: null };
              obj[0] = Math.ceil(containerHeight / result);
              obj[1] = Array.from(obj, (arg0, arg1) => jsx(layer(uri[6]), { uri }, arg1));
              return <overflowBottom length={null} />;
            }
          }
          return null;
        } else {
          obj = { style: null, children: null };
          const items2 = [tmp.layer, memo];
          obj[0] = items2;
          obj1 = { source: null, resizeMode: "cover", width: null, height: null };
          const obj2 = { uri: null };
          obj2[0] = uri;
          obj1[0] = obj2;
          obj1[2] = sum;
          obj1[3] = result;
          obj[1] = jsx(layer(uri[6]), { source: null, resizeMode: "cover", width: null, height: null });
          return <overflowBottom style={null}>{null}</overflowBottom>;
        }
      }
    }
  }
  return null;
}
({ View: c3, StyleSheet } = get_ActivityIndicator);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: c4, PROFILE_FRAME_Z_INDEX: c5 } = PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO);
const createCacheKey = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.pointerEvents = "none";
createCacheKey[0] = createCacheKey;
let obj1 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1.alignItems = "center";
obj1.overflow = "hidden";
createCacheKey[1] = obj1;
let closure_8 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideFrame.tsx");

export default function FramePreviewOverrideFrame(override) {
  override = override.override;
  const containerWidth = override.containerWidth;
  ({ containerHeight: closure_2, profileThemeType } = override);
  const frameOrder = override.frameOrder;
  const filterLayer = override.filterLayer;
  closure_6 = undefined;
  jsx = undefined;
  let callback;
  const items = [override.layers, frameOrder, profileThemeType, filterLayer];
  const memo = React.useMemo(() => {
    const layers = override.layers;
    return layers.filter((item, index) => {
      let tmp2 = null == closure_4 || tmp === item.order;
      if (tmp2) {
        let tmp4 = null != closure_5;
        if (tmp4) {
          tmp4 = !tmp3(item);
        }
        let tmp5 = !tmp4;
        if (!tmp4) {
          let tmp8 = closure_3 === closure_1_6.PREVIEW;
          if (!tmp8) {
            let tmp9 = "top" === item.anchor;
            if (tmp9) {
              tmp9 = "staple" === item.type;
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
      const result = containerWidth / override.innerWidth;
      closure_6 = override.overflowTop * result;
      jsx = override.overflowBottom * result;
      callback = override.overflowHorizontal * result;
      let obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj[1] = memo.map((item, index) => {
        const obj = { layer: item, uri: null, ratio: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null, containerWidth: null, containerHeight: null };
        let uri;
        if (override.layerAssetById[item.id] != null) {
          uri = tmp.uri;
        }
        if (uri == null) {
          uri = null;
        }
        obj[1] = uri;
        let num;
        if (override.layerAssetById[item.id] != null) {
          num = tmp.ratio;
        }
        if (num == null) {
          num = 0;
        }
        obj[2] = num;
        obj[3] = closure_6;
        obj[4] = callback;
        obj[5] = closure_8;
        obj[6] = containerWidth;
        obj[7] = closure_2;
        return callback(OverrideProfileFrameLayer, obj, item.id);
      });
      return <profileThemeType style={null}>{null}</profileThemeType>;
    }
  }
  return null;
};