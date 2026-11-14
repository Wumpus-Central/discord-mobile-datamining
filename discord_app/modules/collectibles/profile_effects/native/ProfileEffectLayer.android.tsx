// discord_app/modules/collectibles/profile_effects/native/ProfileEffectLayer.android.tsx
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import ProfileEffectUtils from "ProfileEffectUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectLayer.android.tsx");

export default noop.memo(function ProfileEffectLayerAndroid(layerConfig) {
  layerConfig = layerConfig.layerConfig;
  ({ animate, width, onLoad } = layerConfig);
  items = [layerConfig.src, onLoad];
  ({ paused, accessibilityLabel } = layerConfig);
  const callback = noop.useCallback(() => {
    if (onLoad != null) {
      tmp(layerConfig.src);
    }
  }, items);
  const obj = {
    source: { uri: layerConfig.src },
    paused: null,
    resizeMode: "contain",
    fadeDuration: 0,
    style: null,
    accessibilityLabel: null,
    onLoad: null,
  };
  let tmp5 = !animate;
  if (animate) {
    tmp5 = true === paused;
  }
  obj.paused = tmp5;
  const items1 = [StyleSheet.absoluteFill];
  const size = { position: "absolute", width, height: null, opacity: null };
  size.height = ProfileEffectUtils.calculateProfileEffectHeight(layerConfig, width);
  let num = 0;
  if (animate) {
    num = 1;
  }
  size.opacity = num;
  items1[1] = size;
  obj.style = items1;
  obj.accessibilityLabel = accessibilityLabel;
  obj.onLoad = callback;
  return (
    <tmp4
      source={{ uri: layerConfig.src }}
      paused={null}
      resizeMode="contain"
      fadeDuration={0}
      style={null}
      accessibilityLabel={null}
      onLoad={null}
    />
  );
});
