// discord_app/modules/client_themes/CustomThemesRandomUtils.tsx
import _modDef683 from "../../../_runtime/metro/00683__.js";
import size from "../../../_runtime/metro/00002__.js";

let items = [
  "#94E0CF",
  "#9AF0B1",
  "#9A90FF",
  "#9A53FF",
  "#FDA6E4",
  "#FFE6C0",
  "#EFB4AA",
  "#56B69F",
  "#29C566",
  "#5348CA",
  "#6D24D4",
  "#CA48C8",
  "#F0AE29",
  "#DF4232",
];
const length = [0, 45, 90, 135, 180, 225, 270, 315];
const length2 = [20, 40, 60, 80];
const ColorType = { SOLID: "solid", GRADIENT: "gradient" };
let obj2 = {
  TWO_COLOR: "two-color",
  ANALOGOUS: "analogous",
  COMPLEMENTARY: "complementary",
  SPLIT_COMPLEMENTARY: "split-complementary",
  TRIADIC: "triadic",
};
let items1 = [, , ,];
({ ANALOGOUS: arr2[0], COMPLEMENTARY: arr2[1], SPLIT_COMPLEMENTARY: arr2[2], TRIADIC: arr2[3] } = obj2);
const result = size.fileFinishedImporting("modules/client_themes/CustomThemesRandomUtils.tsx");

export const COLOR_PALETTE = items;
export { ColorType };
export const GradientType = obj2;
export const generateRandomColorOptions = function generateRandomColorOptions() {
  let obj;
  function generateColorHarmony(items, items1) {
    function generateAnalogousColors(items, value3, value4, value) {
      items = [, ,];
      const obj = closure_1_0(closure_1_1[0]);
      const hslResult = obj.hsl(value - 30, value3, value4);
      items[0] = hslResult.hex();
      items[1] = items;
      const obj3 = closure_1_0(closure_1_1[0]);
      const hslResult1 = obj3.hsl(value + 30, value3, value4);
      items[2] = hslResult1.hex();
      return items;
    }
    function generateComplementaryColors(items, value3, value4, value) {
      const obj = closure_1_0(closure_1_1[0]);
      const hslResult = obj.hsl((value + 180) % 360, value3, value4);
      const hexResult = hslResult.hex();
      items = [, ,];
      items[0] = items;
      const obj3 = closure_1_0(closure_1_1[0]);
      const mixResult = obj3.mix(items, hexResult, 0.5);
      items[1] = mixResult.hex();
      items[2] = hexResult;
      return items;
    }
    function generateSplitComplementaryColors(items, value3, value4, value) {
      items = [, ,];
      items[0] = items;
      const obj = closure_1_0(closure_1_1[0]);
      const hslResult = obj.hsl((value + 150) % 360, value3, value4);
      items[1] = hslResult.hex();
      const obj3 = closure_1_0(closure_1_1[0]);
      const hslResult1 = obj3.hsl((value + 210) % 360, value3, value4);
      items[2] = hslResult1.hex();
      return items;
    }
    function generateTriadicColors(items, value3, value4, value) {
      items = [, ,];
      items[0] = items;
      const obj = closure_1_0(closure_1_1[0]);
      const hslResult = obj.hsl((value + 120) % 360, value3, value4);
      items[1] = hslResult.hex();
      const obj3 = closure_1_0(closure_1_1[0]);
      const hslResult1 = obj3.hsl((value + 240) % 360, value3, value4);
      items[2] = hslResult1.hex();
      return items;
    }
    try {
      let obj = _modDef683(items);
      const value = obj.get("hsl.h");
      const value3 = obj.get("hsl.s");
      const value4 = obj.get("hsl.l");
      if (constants.ANALOGOUS === items1) {
        return generateAnalogousColors(items, value3, value4, value);
      } else if (constants.COMPLEMENTARY === items1) {
        return generateComplementaryColors(items, value3, value4, value);
      } else if (constants.SPLIT_COMPLEMENTARY === items1) {
        return generateSplitComplementaryColors(items, value3, value4, value);
      } else if (constants.TRIADIC === items1) {
        return generateTriadicColors(items, value3, value4, value);
      } else {
        items = [];
        items[0] = items;
        return items;
      }
    } catch (err) {
      items1 = [items];
      return items1;
    }
  }
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
    obj = { type: obj.GRADIENT, colors: items, angle: tmp2, intensity: tmp, gradientType: obj2.TWO_COLOR };
    return obj;
  } else {
    const _Math7 = Math;
    const _Math8 = Math;
    const _Math9 = Math;
    const _Math10 = Math;
    const tmp10 = items[Math.floor(Math, Math.random(Math) * items.length)];
    const tmp12 = items1[Math.floor(Math, Math.random(Math) * items1.length)];
    obj2 = {
      type: obj.GRADIENT,
      colors: generateColorHarmony(tmp10, tmp12),
      angle: tmp2,
      intensity: tmp,
      gradientType: tmp12,
    };
    return obj2;
  }
};
