// discord_app/modules/collectibles/profile_frames/native/ProfileFrame.tsx
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import FramePreviewOverrideFrameDefault from "tooling/FramePreviewOverrideFrame.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

function ProfileFrameLayer(skuId) {
  const layer = skuId.layer;
  const overflowTop = skuId.overflowTop;
  const overflowBottom = skuId.overflowBottom;
  const overflowHorizontal = skuId.overflowHorizontal;
  ({ containerWidth, containerHeight } = skuId);
  const tmp = closure_9();
  const sum = containerWidth + 2 * overflowHorizontal;
  c4 = sum;
  const tmp5 = layer(overflowTop[7])({ skuId: skuId.skuId, layer, width: sum });
  const assetUrl = tmp5.assetUrl;
  const imageHeight = tmp5.imageHeight;
  const items = [, , , , ,];
  ({ anchor: arr[0], type: arr[1], order: arr[2] } = layer);
  items[3] = overflowTop;
  items[4] = overflowBottom;
  items[5] = overflowHorizontal;
  const memo = overflowBottom.useMemo(() => {
    const rect = { left: -overflowHorizontal, right: -overflowHorizontal, zIndex: timestampProducer[layer.order] };
    const type = layer.type;
    if ("staple" === type) {
      let obj = {};
      const merged = Object.assign(rect);
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
      const merged1 = Object.assign(rect);
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
      const obj1 = {};
      const merged2 = Object.assign(rect);
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
              obj.style = items1;
              const _Array = Array;
              obj = { length: Math.ceil(containerHeight / imageHeight) };
              obj.children = Array.from(obj, (arg0, arg1) => {
                const size = { source: { uri: assetUrl }, resizeMode: "cover", width, height: imageHeight };
                return jsx(
                  FastImageDefault,
                  { source: { uri: assetUrl }, resizeMode: "cover", width, height: imageHeight },
                  arg1,
                );
              });
              return <overflowHorizontal length={Math.ceil(containerHeight / imageHeight)} />;
            }
          }
          return null;
        } else {
          obj = { style: null, children: null };
          const items2 = [tmp.layer, memo];
          obj.style = items2;
          let size = { source: null, resizeMode: "cover", width: null, height: null };
          let obj1 = { uri: assetUrl };
          size.source = obj1;
          size.width = sum;
          size.height = imageHeight;
          obj.children = jsx(layer(overflowTop[8]), { source: null, resizeMode: "cover", width: null, height: null });
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
  ({ containerHeight: noop, profileThemeType } = frame);
  const frameOrder = frame.frameOrder;
  const filterLayer = frame.filterLayer;
  c6 = undefined;
  c7 = undefined;
  jsx = undefined;
  const items = [frame.layers, frameOrder, profileThemeType, filterLayer];
  const memo = noop.useMemo(() => {
    const layers = frame.layers;
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
      ({
        overflowTop: c6,
        overflowBottom: c7,
        overflowHorizontal: c8,
      } = frame(containerWidth[9])(frame, containerWidth));
      const obj = {
        style: tmp.container,
        children: memo.map((layer) => (
          <ProfileFrameLayer
            key={arg0.id}
            skuId={frame.skuId}
            layer={arg0}
            overflowTop={overflowTop}
            overflowBottom={overflowBottom}
            overflowHorizontal={overflowHorizontal}
            containerWidth={containerWidth}
            containerHeight={containerHeight}
          />
        )),
      };
      return (
        <profileThemeType style={tmp.container}>
          {memo.map((layer) => (
            <ProfileFrameLayer
              key={arg0.id}
              skuId={frame.skuId}
              layer={arg0}
              overflowTop={overflowTop}
              overflowBottom={overflowBottom}
              overflowHorizontal={overflowHorizontal}
              containerWidth={containerWidth}
              containerHeight={containerHeight}
            />
          ))}
        </profileThemeType>
      );
    }
  }
  return null;
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
let closure_4 = fn(8203).useFramePreviewOverrideStore;
const ProfileFrameConstants = fn(8222);
({ PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO: hasOwnProperty, PROFILE_FRAME_Z_INDEX: metroRequire } =
  ProfileFrameConstants);
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
let closure_9 = createStyles.createStyles(createStyles);
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/ProfileFrame.tsx");

export default function ProfileFrame(arg0) {
  const tmp = closure_4((override) => override.override);
  if (null != tmp) {
    let obj = { override: tmp };
    const merged = Object.assign(arg0);
    let tmp7 = jsx(FramePreviewOverrideFrameDefault, { override: tmp });
  } else {
    obj = {};
    const merged1 = Object.assign(arg0);
    tmp7 = <LiveProfileFrame />;
  }
  return tmp7;
}
