// discord_app/design/components/mana-assets/native/generated/PlaneIllocon.native.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import preloadDefault from "../../../../../components_native/common/FastImage.tsx";
import metadataDefault from "../../../../../../discord_assets/assets/mana/asset-library/generated/PlaneIllocon-2x.png.js";

const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("design/components/mana-assets/native/generated/PlaneIllocon.native.tsx");

export const PlaneIllocon = function PlaneIllocon(size) {
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const obj = { uri: metadataDefault };
  obj[1] = obj;
  const items = [{ width: num, height: num }];
  obj[2] = items;
  obj[3] = accessible;
  obj[4] = accessibilityLabel;
  obj[5] = resizeMode;
  return jsx(preloadDefault, { uri: metadataDefault });
};