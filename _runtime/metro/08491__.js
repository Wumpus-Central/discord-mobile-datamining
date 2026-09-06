// _runtime/metro/08491__.js
import extractOpacityDefault from "../08459_extractOpacity.js";
import extractBrushDefault from "../08471_extractBrush.js";
import noop from "00019__.js";

const re3 = /\s+/;
const action = { type: 0, payload: fn(17).processColor("black") };

export default function extractFeFlood(arg0) {
  ({ floodColor, floodOpacity } = arg0);
  if (null == floodColor) {
    let tmp = action;
  } else {
    tmp = extractBrushDefault(floodColor);
  }
  const obj = { floodColor: tmp };
  if (null != floodOpacity) {
    obj.floodOpacity = extractOpacityDefault(floodOpacity);
  }
  return obj;
}
export const extractFilter = (arg0) => {
  const size = { x: arg0.x, y: arg0.y, width: arg0.width, height: arg0.height, result: arg0.result };
  return size;
};
export const extractIn = (arg0) => {
  if (arg0.in) {
    let obj = { in1: arg0.in };
  } else {
    obj = {};
  }
  return obj;
};
export const extractFeBlend = (in2) => {
  const obj = {};
  if (in2.in2) {
    obj.in2 = in2.in2;
  }
  if (in2.mode) {
    obj.mode = in2.mode;
  }
  return obj;
};
export const extractFeColorMatrix = (type) => {
  const obj = {};
  if (undefined !== type.values) {
    const _Array = Array;
    const values = type.values;
    if (Array.isArray(type.values)) {
      obj.values = values.map((item) => {
        let parsed = item;
        if (typeof item !== "number") {
          const _parseFloat = parseFloat;
          parsed = parseFloat(item);
        }
        return parsed;
      });
    } else if (typeof values === "number") {
      const items = [type.values];
      obj.values = items;
    } else if (typeof type.values === "string") {
      const parts = type.values.split(re3);
      let _parseFloat = parseFloat;
      const mapped = parts.map(parseFloat);
      obj.values = mapped.filter((item) => !isNaN(item));
    } else {
      const _console = console;
      console.warn("Invalid value for FeColorMatrix `values` prop");
    }
  }
  if (type.type) {
    obj.type = type.type;
  }
  return obj;
};
export const extractFeComposite = (arg0) => {
  closure_0 = arg0;
  const obj = { in1: arg0.in || "", in2: arg0.in2 || "", operator1: arg0.operator || "over" };
  const items = ["k1", "k2", "k3", "k4"];
  const item = items.forEach((item) => {
    if (undefined !== closure_0[item]) {
      const _Number = Number;
      obj[item] = Number(tmp[item]) || 0;
      const tmp4 = Number(tmp[item]) || 0;
    }
  });
  return obj;
};
export const extractFeGaussianBlur = (stdDeviation) => {
  const obj = {};
  if (Array.isArray(stdDeviation.stdDeviation)) {
    const _Number5 = Number;
    obj.stdDeviationX = Number(stdDeviation.stdDeviation[0]) || 0;
    const _Number6 = Number;
    const tmp7 = Number(stdDeviation.stdDeviation[0]) || 0;
    obj.stdDeviationY = Number(stdDeviation.stdDeviation[1]) || 0;
    const tmp8 = Number(stdDeviation.stdDeviation[1]) || 0;
  } else {
    if (typeof stdDeviation.stdDeviation === "string") {
      if (str2.match(re3)) {
        const parts = stdDeviation.stdDeviation.split(tmp9);
        const _Number3 = Number;
        obj.stdDeviationX = Number(parts[0]) || 0;
        const _Number4 = Number;
        const tmp5 = Number(parts[0]) || 0;
        obj.stdDeviationY = Number(parts[1]) || 0;
        const tmp6 = Number(parts[1]) || 0;
      }
      str2 = stdDeviation.stdDeviation;
      tmp9 = re3;
    }
    stdDeviation = stdDeviation.stdDeviation;
    let tmp = typeof stdDeviation === "number";
    if (typeof stdDeviation !== "number") {
      const stdDeviation2 = stdDeviation.stdDeviation;
      let tmp10 = typeof stdDeviation2 === "string";
      if (typeof stdDeviation2 === "string") {
        tmp10 = !stdDeviation.stdDeviation.match(re3);
      }
      tmp = tmp10;
    }
    if (tmp) {
      const _Number = Number;
      obj.stdDeviationX = Number(stdDeviation.stdDeviation) || 0;
      const _Number2 = Number;
      const tmp2 = Number(stdDeviation.stdDeviation) || 0;
      obj.stdDeviationY = Number(stdDeviation.stdDeviation) || 0;
      const tmp3 = Number(stdDeviation.stdDeviation) || 0;
    }
  }
  if (stdDeviation.edgeMode) {
    obj.edgeMode = stdDeviation.edgeMode;
  }
  return obj;
};
export const extractFeMerge = (children, parent) => {
  if (children.children) {
    const Children = noop.Children;
    let mapped = Children.map(children.children, (arg0) => noop.cloneElement(arg0, { parent }));
  } else {
    mapped = [];
  }
  const nodes = [];
  for (let num = 0; num < length; num = num + 1) {
    let str = mapped[num].props.in;
    if (!str) {
      str = "";
    }
    let arr = nodes.push(str);
  }
  return { nodes };
};
