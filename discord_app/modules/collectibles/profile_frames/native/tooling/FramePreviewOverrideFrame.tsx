// === Module 8225: FramePreviewOverrideFrame ===

// Module 8225 (FramePreviewOverrideFrame)
import FastImageDefault from "FastImage" /* 5587 */;
import noop from "module_19" /* 19 */;

function OverrideProfileFrameLayer(layer) {
  layer = layer.layer;
  const uri = layer.uri;
  const overflowTop = layer.overflowTop;
  const overflowBottom = layer.overflowBottom;
  const overflowHorizontal = layer.overflowHorizontal;
  ({ containerWidth, containerHeight } = layer);
  const tmp = closure_8();
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
    const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: hasOwnProperty[layer.order] };
    const type = layer.type;
    if ("staple" === type) {
      let obj = {};
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
      obj = {};
      const merged1 = Object.assign(rect);
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
      const obj1 = {};
      const merged2 = Object.assign(rect);
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
              obj.style = items1;
              const _Array = Array;
              obj = { length: Math.ceil(containerHeight / result) };
              obj.children = Array.from(obj, (arg0, key) => {
                const size = { source: { uri }, resizeMode: "cover", width, height };
                return jsx(FastImageDefault, { source: { uri }, resizeMode: "cover", width, height }, key);
              });
              return <overflowBottom length={Math.ceil(containerHeight / result)} />;
            }
          }
          return null;
        } else {
          obj = { style: null, children: null };
          const items2 = [tmp.layer, memo];
          obj.style = items2;
          let size = { source: null, resizeMode: "cover", width: null, height: null };
          let obj1 = { uri };
          size.source = obj1;
          size.width = sum;
          size.height = result;
          obj.children = jsx(layer(uri[6]), { source: null, resizeMode: "cover", width: null, height: null });
          return <overflowBottom style={null}>{null}</overflowBottom>;
        }
      }
    }
  }
  return null;
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const ProfileFrameConstants = fn(8222);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: closure_4, PROFILE_FRAME_Z_INDEX: hasOwnProperty } = ProfileFrameConstants);
const UserProfileThemeTypes = fn(7208).UserProfileThemeTypes;
let jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, layer: null };
createStyles = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.pointerEvents = "none";
createStyles.container = createStyles;
let obj1 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj1.alignItems = "center";
obj1.overflow = "hidden";
createStyles.layer = obj1;
let closure_8 = createStyles.createStyles(createStyles);
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideFrame.tsx");

export default function FramePreviewOverrideFrame(override) {
  override = override.override;
  const containerWidth = override.containerWidth;
  ({ containerHeight: noop, profileThemeType } = override);
  const frameOrder = override.frameOrder;
  const filterLayer = override.filterLayer;
  let overflowTop;
  jsx = undefined;
  let overflowHorizontal;
  const items = [override.layers, frameOrder, profileThemeType, filterLayer];
  const memo = noop.useMemo(() => {
    const layers = override.layers;
    return layers.filter((order) => {
      let tmp2 = null == frameOrder || tmp === order.order;
      if (tmp2) {
        let tmp4 = null != filterLayer;
        if (tmp4) {
          tmp4 = !tmp3(order);
        }
        let tmp5 = !tmp4;
        if (!tmp4) {
          let tmp8 = profileThemeType === constants.PREVIEW;
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
      const result = containerWidth / override.innerWidth;
      overflowTop = override.overflowTop * result;
      jsx = override.overflowBottom * result;
      overflowHorizontal = override.overflowHorizontal * result;
      let obj = {
        style: tmp.container,
        children: memo.map((layer) => {
              const obj = { layer, uri: null, ratio: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null, containerWidth: null, containerHeight: null };
              let uri;
              if (override.layerAssetById[layer.id] != null) {
                uri = tmp.uri;
              }
              if (uri == null) {
                uri = null;
              }
              obj.uri = uri;
              let num;
              if (override.layerAssetById[layer.id] != null) {
                num = tmp.ratio;
              }
              if (num == null) {
                num = 0;
              }
              obj.ratio = num;
              obj.overflowTop = overflowTop;
              obj.overflowBottom = overflowBottom;
              obj.overflowHorizontal = overflowHorizontal;
              obj.containerWidth = containerWidth;
              obj.containerHeight = containerHeight;
              return <OverrideProfileFrameLayer key={layer.id} layer={layer} uri={null} ratio={null} overflowTop={null} overflowBottom={null} overflowHorizontal={null} containerWidth={null} containerHeight={null} />;
            })
      };
      return <profileThemeType style={tmp.container}>{memo.map((layer) => {
        const obj = { layer, uri: null, ratio: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null, containerWidth: null, containerHeight: null };
        let uri;
        if (override.layerAssetById[layer.id] != null) {
          uri = tmp.uri;
        }
        if (uri == null) {
          uri = null;
        }
        obj.uri = uri;
        let num;
        if (override.layerAssetById[layer.id] != null) {
          num = tmp.ratio;
        }
        if (num == null) {
          num = 0;
        }
        obj.ratio = num;
        obj.overflowTop = overflowTop;
        obj.overflowBottom = overflowBottom;
        obj.overflowHorizontal = overflowHorizontal;
        obj.containerWidth = containerWidth;
        obj.containerHeight = containerHeight;
        return <OverrideProfileFrameLayer key={layer.id} layer={layer} uri={null} ratio={null} overflowTop={null} overflowBottom={null} overflowHorizontal={null} containerWidth={null} containerHeight={null} />;
      })}</profileThemeType>;
    }
  }
  return null;
};