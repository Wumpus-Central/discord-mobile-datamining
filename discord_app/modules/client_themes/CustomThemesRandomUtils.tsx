// === Module 4415: CustomThemesRandomUtils ===

// Module 4415 (CustomThemesRandomUtils)
import _modDef672 from "module_672" /* 672 */;
import size from "module_2" /* 2 */;

let items = ["#94E0CF", "#9AF0B1", "#9A90FF", "#9A53FF", "#FDA6E4", "#FFE6C0", "#EFB4AA", "#56B69F", "#29C566", "#5348CA", "#6D24D4", "#CA48C8", "#F0AE29", "#DF4232"];
let obj = { SOLID: "solid", GRADIENT: "gradient" };
obj = { TWO_COLOR: "two-color", ANALOGOUS: "analogous", COMPLEMENTARY: "complementary", SPLIT_COMPLEMENTARY: "split-complementary", TRIADIC: "triadic" };
let items1 = [, , , ];
({ ANALOGOUS: arr2[0], COMPLEMENTARY: arr2[1], SPLIT_COMPLEMENTARY: arr2[2], TRIADIC: arr2[3] } = obj);
const result = size.fileFinishedImporting("modules/client_themes/CustomThemesRandomUtils.tsx");

export const COLOR_PALETTE = items;
export const ColorType = obj;
export const GradientType = obj;
export const generateRandomColorOptions = function generateRandomColorOptions() {
  const tmp = length2[Math.floor(Math, Math.random(Math) * length2.length)];
  const tmp2 = length[Math.floor(Math, Math.random(Math) * length.length)];
  let str = "path2";
  if (Math.random() < 0.2) {
    str = "path1";
  }
  if ("path1" === str) {
    const _Math = Math;
    const _Math2 = Math;
    let tmp3 = items;
    const rounded = Math.floor(Math.random() * items.length);
    const _Math3 = Math;
    const _Math4 = Math;
    let rounded1 = Math.floor(Math.random() * items.length);
    if (rounded1 === rounded) {
      do {
        let _Math5 = Math;
        let _Math6 = Math;
        rounded1 = Math.floor(Math.random() * items.length);
        tmp3 = items;
      } while (rounded1 === rounded);
    }
    items = [tmp3[rounded], tmp3[rounded1]];
    obj = { type: null, colors: null, angle: null, intensity: null, gradientType: null };
    obj.type = obj.GRADIENT;
    obj.colors = items;
    obj.angle = tmp2;
    obj.intensity = tmp;
    obj.gradientType = obj.TWO_COLOR;
    return obj;
  } else {
    const _Math7 = Math;
    const _Math8 = Math;
    const _Math9 = Math;
    const _Math10 = Math;
    const tmp11 = items1[Math.floor(Math, Math.random(Math) * items1.length)];
    obj = { type: null, colors: null, angle: null, intensity: null, gradientType: null };
    obj.type = obj.GRADIENT;
    obj.colors = (function generateColorHarmony(items, items1) {
      try {
        obj = _modDef672(items);
        value = obj.get("hsl.h");
        value = obj.get("hsl.s");
        const value1 = obj.get("hsl.l");
        if (constants.ANALOGOUS === items1) {
          return (function generateAnalogousColors(items, value, value1, value2) {
            obj = closure_1_0(672);
            items = [closure_1_0(672).hsl(value2 - 30, value, value1).hex(), , ];
            items[1] = items;
            const hslResult = closure_1_0(672).hsl(value2 - 30, value, value1);
            const obj3 = closure_1_0(672);
            items[2] = closure_1_0(672).hsl(value2 + 30, value, value1).hex();
            return items;
          })(items, value, value1, value);
        } else if (constants.COMPLEMENTARY === items1) {
          return (function generateComplementaryColors(items, value, value1, value2) {
            obj = closure_1_0(672);
            const hexResult = closure_1_0(672).hsl((value2 + 180) % 360, value, value1).hex();
            items = [, , ];
            items[0] = items;
            const hslResult = closure_1_0(672).hsl((value2 + 180) % 360, value, value1);
            const obj3 = closure_1_0(672);
            items[1] = closure_1_0(672).mix(items, hexResult, 0.5).hex();
            items[2] = hexResult;
            return items;
          })(items, value, value1, value);
        } else if (constants.SPLIT_COMPLEMENTARY === items1) {
          return (function generateSplitComplementaryColors(items, value, value1, value2) {
            items = [, , ];
            items[0] = items;
            obj = closure_1_0(672);
            items[1] = closure_1_0(672).hsl((value2 + 150) % 360, value, value1).hex();
            const hslResult = closure_1_0(672).hsl((value2 + 150) % 360, value, value1);
            const obj3 = closure_1_0(672);
            items[2] = closure_1_0(672).hsl((value2 + 210) % 360, value, value1).hex();
            return items;
          })(items, value, value1, value);
        } else if (constants.TRIADIC === items1) {
          return (function generateTriadicColors(items, value, value1, value2) {
            items = [, , ];
            items[0] = items;
            obj = closure_1_0(672);
            items[1] = closure_1_0(672).hsl((value2 + 120) % 360, value, value1).hex();
            const hslResult = closure_1_0(672).hsl((value2 + 120) % 360, value, value1);
            const obj3 = closure_1_0(672);
            items[2] = closure_1_0(672).hsl((value2 + 240) % 360, value, value1).hex();
            return items;
          })(items, value, value1, value);
        } else {
          items = [];
          items[0] = items;
          return items;
        }
      } catch (err) {
        items1 = [tmp];
        return items1;
      }
    })(items[Math.floor(Math, Math.random(Math) * items.length)], tmp11);
    obj.angle = tmp2;
    obj.intensity = tmp;
    obj.gradientType = tmp11;
    return obj;
  }
};