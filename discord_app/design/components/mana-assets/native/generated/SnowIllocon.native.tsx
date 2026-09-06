// discord_app/design/components/mana-assets/native/generated/SnowIllocon.native.tsx
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef6470 from "../../../../../../discord_assets/assets/mana/asset-library/generated/SnowIllocon-2x.png.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SnowIllocon.native.tsx");

export const SnowIllocon = function SnowIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  let obj = {
    fadeDuration: 0,
    source: null,
    style: null,
    accessible: null,
    accessibilityLabel: null,
    resizeMode: null,
  };
  obj = { uri: _modDef6470 };
  obj.source = obj;
  const items = [{ width: num, height: num }];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(FastImageDefault, { uri: _modDef6470 });
};
