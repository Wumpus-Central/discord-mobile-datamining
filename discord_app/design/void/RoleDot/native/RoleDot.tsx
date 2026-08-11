// discord_app/design/void/RoleDot/native/RoleDot.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { useHasEnhancedRoleColors } from "../../../../modules/premium/powerups/hooks/useHasEnhancedRoleColors.tsx";
import { getFontScale } from "../../../../modules/screen/native/useFontScale.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { flexShrink: 0 }, background: { position: "relative" }, backgroundColor: null, borderBase: null, borderColor: null, dot: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, borderRadius: require("Themes").radii.xs };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { backgroundColor: require("Themes").colors.TEXT_DEFAULT, borderRadius: require("Themes").radii.md };
let obj1 = { backgroundColor: require("Themes").colors.TEXT_DEFAULT, borderRadius: require("Themes").radii.md };
createCacheKey[4] = { borderRadius: require("Themes").radii.md, opacity: 0.4 };
createCacheKey[5] = { borderRadius: 10, position: "absolute" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { borderRadius: require("Themes").radii.md, opacity: 0.4 };
let result = require("jsxProd").fileFinishedImporting("design/void/RoleDot/native/RoleDot.tsx");

export const RoleDot = function RoleDot(background) {
  let color;
  let colors;
  let containerStyles;
  let guildId;
  let size;
  ({ color, colors, size } = background);
  if (size === undefined) {
    size = "normal";
  }
  let flag = background.background;
  if (flag === undefined) {
    flag = true;
  }
  ({ containerStyles, guildId } = background);
  const tmp = createCacheKey();
  let obj = getFontScale;
  const fontScale = obj.useFontScale();
  if (null == color) {
    if (null == colors) {
      return null;
    }
  }
  let num = 16;
  if ("normal" === size) {
    num = 20;
  }
  const result = num * fontScale;
  obj = { paddingRight: 2 * fontScale, paddingTop: null, height: null };
  const tmp5 = importDefault;
  const tmp6 = useHasEnhancedRoleColors(guildId, null);
  if (tmp2Result.isAndroid()) {
    let result1 = 3 * fontScale;
  } else {
    result1 = 2 * fontScale;
  }
  const sum = result / 2 + 2;
  const diff = sum - 2;
  obj[1] = result1;
  obj[2] = result;
  obj = { height: result, width: result, padding: (result - sum) / 2 };
  const obj1 = { height: diff, width: diff, top: result2, left: result2 };
  result2 = diff / 2;
  const obj2 = { style: items, children: null };
  items = [tmp.container, obj, containerStyles];
  const items1 = [tmp.background, , ];
  let backgroundColor = null;
  if (flag) {
    backgroundColor = tmp.backgroundColor;
  }
  const obj3 = { style: items1, children: null };
  items1[1] = backgroundColor;
  items1[2] = obj;
  const obj4 = { style: items2, children: null };
  items2 = [tmp.borderBase];
  const items3 = [tmp.borderColor, { height: sum, width: sum }, { backgroundColor: color }];
  obj4[1] = closure_4(View, { style: items3 });
  const items4 = [closure_4(View, obj4), ];
  if (tmp6) {
    if (null != colors) {
      if (null != colors.secondaryColor) {
        const obj5 = { colors: null, start: null, end: null, style: null };
        const items5 = [, , ];
        ({ primaryColor: arr7[0], secondaryColor: arr7[1], tertiaryColor: arr7[2] } = colors);
        obj5[0] = items5.filter(tmp2(1370).isNotNullish);
        obj5[1] = { x: 0, y: 0 };
        obj5[2] = { x: 1, y: 0 };
        const items6 = [tmp.dot, obj1];
        obj5[3] = items6;
        let tmp12Result = tmp12(tmp5(4725), obj5);
        const tmp5Result = tmp5(4725);
      }
      items4[1] = tmp12Result;
      obj3[1] = items4;
      obj2[1] = closure_5(tmp13, obj3);
      return tmp12(tmp13, obj2);
    }
  }
  const items7 = [tmp.dot, obj1, { backgroundColor: color }];
  tmp12Result = tmp12(tmp13, { style: items7 });
};