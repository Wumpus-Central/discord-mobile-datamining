// === Module 14309: SafetyHubAccountStandingSubwayMarker ===

// Module 14309 (SafetyHubAccountStandingSubwayMarker)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { width: 56, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", rowGap: 8, flex: 1 }, marker: null, empty: null, label: null, firstOption: null, lastOption: null };
createCacheKey = { display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1, padding: ThemesDefault.space.PX_4, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { display: "flex", borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, width: "100%", height: "100%" };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { alignItems: "flex-start", textAlign: "left" };
createCacheKey[5] = { alignItems: "flex-end", textAlign: "right" };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { display: "flex", borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, width: "100%", height: "100%" };
const result = require("set").fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStandingSubwayMarker.tsx");

export default function SafetyHubAccountStandingSubwayMarker(arg0) {
  ({ selectedIcon, style: require, isSelected } = arg0);
  ({ index, size, numOptions } = arg0);
  ({ status, onLayout } = arg0);
  const tmp = callback();
  dependencyMap = tmp;
  let obj = {};
  const merged = Object.assign(tmp.container);
  const merged1 = Object.assign(0 === index ? tmp.firstOption : {});
  const merged2 = Object.assign(index === numOptions - 1 ? tmp.lastOption : {});
  obj = { style: obj, onLayout, children: null };
  if (!isSelected) {
    obj = {};
    const merged3 = Object.assign(tmp.marker);
    obj.width = size;
    obj.height = size;
    let num = 0;
    if (tmp3) {
      num = -isSelected(712).space.PX_4;
    }
    obj.marginLeft = num;
    let num2 = 0;
    if (index === numOptions - 1) {
      num2 = -isSelected(712).space.PX_4;
    }
    obj1 = { style: null, children: null };
    obj.marginRight = num2;
    obj1[0] = obj;
    const obj2 = { style: null };
    obj2[0] = tmp.empty;
    obj1[1] = closure_4(tmp9, obj2);
    selectedIcon = tmp10(tmp9, obj1);
  }
  const items = [selectedIcon, ];
  const intl = getSystemLocale.intl;
  items[1] = intl.format(status, {
    hook(arg0, arg1) {
      if (isSelected) {
        let obj = { style: null, variant: "text-xxs/bold", children: null };
        obj = { color: null };
        obj[0] = color.color;
        obj[0] = obj;
        obj[2] = arg0;
      } else {
        obj = { color: "interactive-text-default", variant: "text-xxs/normal", style: null, children: null };
        obj[2] = label.label;
        obj[3] = arg0;
      }
      return closure_1_4(closure_1_0(label[6]).Text, obj, arg1);
    }
  });
  obj[2] = items;
  return closure_5(View, obj);
};
export const SUBWAY_MARKER_WIDTH = 56;