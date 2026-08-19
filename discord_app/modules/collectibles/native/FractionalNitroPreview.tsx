// discord_app/modules/collectibles/native/FractionalNitroPreview.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import LinearGradientDefault from "../../../../_runtime/04756_LinearGradient.js";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import metadataDefault from "../../../../discord_assets/assets/orbs/fn_pdp_preview_header.png.js";
import NitroIconDefault from "NitroIcon.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { VerticalGradient } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { flexDirection: "column", alignItems: "center", justifyContent: "center", padding: ThemesDefault.space.PX_24, borderRadius: ThemesDefault.radii.lg, overflow: "hidden", alignSelf: "center", gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
createCacheKey[2] = { width: 211, height: 157, resizeMode: "cover" };
createCacheKey[3] = { alignSelf: "flex-start" };
createCacheKey[4] = { display: "flex", flexDirection: "column", gap: ThemesDefault.space.PX_8 };
createCacheKey[5] = { display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_8, alignItems: "center" };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/collectibles/native/FractionalNitroPreview.tsx");

export const FractionalNitroPreview = function FractionalNitroPreview() {
  const tmp = callback3();
  const _require = tmp;
  let items = [require("../../../intl/index.native.tsx").t.E1NP2x, require("../../../intl/index.native.tsx").t.kpMomJ, require("../../../intl/index.native.tsx").t.xT1Vfn, require("../../../intl/index.native.tsx").t.myyAEr, require("../../../intl/index.native.tsx").t.zTk8Ul];
  let obj = { colors: ["#000000", "#36266d"], start: VerticalGradient.START, end: VerticalGradient.END, style: tmp.gradient };
  const items1 = [callback(LinearGradientDefault, obj), , , ];
  obj = { source: null, style: null };
  obj1 = { uri: metadataDefault };
  obj[0] = obj1;
  obj[1] = tmp.headerImage;
  items1[1] = callback(preloadDefault, obj);
  items1[2] = callback(View, { style: tmp.nitroIconContainer, children: callback(NitroIconDefault, {}) });
  const obj2 = { style: tmp.nitroIconContainer, children: callback(NitroIconDefault, {}) };
  items1[3] = callback(View, {
    style: tmp.benefits,
    children: items.map((item, index) => {
      let obj = { color: ThemesDefault.colors.WHITE };
      const items = [closure_1_5(lib(dependencyMap[11]).CheckmarkSmallIcon, obj), ];
      obj = { variant: "text-sm/medium", color: "text-overlay-light", children: null };
      const intl = lib(dependencyMap[6]).intl;
      obj[2] = intl.string(item);
      items[1] = closure_1_5(lib(dependencyMap[12]).Text, obj);
      obj[1] = items;
      return closure_1_6(View, obj, index);
    })
  });
  obj[1] = items1;
  return callback2(View, obj);
};