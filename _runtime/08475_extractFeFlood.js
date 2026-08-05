import { extractOpacity } from "08443_extractOpacity.js";
import { extractBrush } from "08455_extractBrush.js";
// _runtime/08475_extractFeFlood.js
import noop from "noop";

const re3 = /\s+/;
let obj = { type: 0, payload: require("get ActivityIndicator").processColor("black") };

export default function extractFeFlood(arg0) {
  let floodColor;
  let floodOpacity;
  ({ floodColor, floodOpacity } = arg0);
  if (null == floodColor) {
    let tmp = obj;
  } else {
    tmp = extractBrush(floodColor);
  }
  obj = { floodColor: tmp };
  if (null != floodOpacity) {
    obj.floodOpacity = extractOpacity(floodOpacity);
  }
  return obj;
};
export const extractFilter = (arg0) => ({ x: arg0.x, y: arg0.y, width: arg0.width, height: arg0.height, result: arg0.result });
export const extractIn = (arg0) => {
  if (arg0.in) {
    let obj = { in1: null };
    obj[0] = arg0.in;
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
      obj.values = values.map((num) => {
        let parsed = num;
        if (typeof num !== "number") {
          const _parseFloat = parseFloat;
          parsed = parseFloat(num);
        }
        return parsed;
      });
    } else if (typeof values === "number") {
      const items = [type.values];
      obj.values = items;
    } else if (typeof type.values === "string") {
      const parts = type.values.split(closure_3);
      let _parseFloat = parseFloat;
      const mapped = parts.map(parseFloat);
      obj.values = mapped.filter((arg0) => !isNaN(arg0));
      const str = type.values;
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
  let closure_0 = arg0;
  const obj = { in1: arg0.in || "", in2: tmp2, operator1: tmp3 };
  const items = ["k1", "k2", "k3", "k4"];
  const item = items.forEach((arg0) => {
    if (undefined !== table[arg0]) {
      const _Number = Number;
      obj[arg0] = Number(tmp[arg0]) || 0;
      const tmp2 = obj;
      const tmp4 = Number(tmp[arg0]) || 0;
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
      if (str2.match(closure_3)) {
        const parts = stdDeviation.stdDeviation.split(tmp9);
        const _Number3 = Number;
        obj.stdDeviationX = Number(parts[0]) || 0;
        const _Number4 = Number;
        const str = stdDeviation.stdDeviation;
        const tmp5 = Number(parts[0]) || 0;
        obj.stdDeviationY = Number(parts[1]) || 0;
        const tmp6 = Number(parts[1]) || 0;
      }
      str2 = stdDeviation.stdDeviation;
      tmp9 = closure_3;
    }
    stdDeviation = stdDeviation.stdDeviation;
    let tmp = typeof stdDeviation === "number";
    if (typeof stdDeviation !== "number") {
      const stdDeviation2 = stdDeviation.stdDeviation;
      let tmp10 = typeof stdDeviation2 === "string";
      if (typeof stdDeviation2 === "string") {
        tmp10 = !stdDeviation.stdDeviation.match(closure_3);
        const str3 = stdDeviation.stdDeviation;
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
export const extractFeMerge = (children) => {
  let closure_0 = arg1;
  if (children.children) {
    const Children = React.Children;
    let mapped = Children.map(children.children, (arg0) => outer1_2.cloneElement(arg0, { parent: closure_0 }));
  } else {
    mapped = [];
  }
  const nodes = [];
  for (let num = 0; num < length; num = num + 1) {
    let str = mapped[num].props.in;
    let tmp2 = num;
    if (!str) {
      str = "";
    }
    let arr = nodes.push(str);
  }
  return { nodes };
};