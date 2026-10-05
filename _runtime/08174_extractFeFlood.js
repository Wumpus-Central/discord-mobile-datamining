// === Module 8174: extractFeFlood ===

// Module 8174 (extractFeFlood)
import react_native from "react-native" /* 17 */;
import extractOpacityDefault from "extractOpacity" /* 8142 */;
import extractBrushDefault from "extractBrush" /* 8154 */;
import react from "react" /* 19 */;

let size;

const re3 = /\s+/;
const action = { type: 0, payload: react_native.processColor("black") };

export default function extractFeFlood(arg0) {
  let floodColor;
  let floodOpacity;
  let tmp;
  ({ floodColor, floodOpacity } = arg0);
  if (null == floodColor) {
    tmp = action;
  } else {
    tmp = extractBrushDefault(floodColor);
  }
  const obj = { floodColor: tmp };
  if (null != floodOpacity) {
    obj.floodOpacity = extractOpacityDefault(floodOpacity);
  }
  return obj;
};
export const extractFilter = (props) => {
  size = { x: props.x, y: props.y, width: props.width, height: props.height, result: props.result };
  return size;
};
export const extractIn = (props) => {
  let obj;
  if (props.in) {
    obj = { in1: props.in };
    const obj2 = { in1: props.in };
  } else {
    obj = {};
  }
  return obj;
};
export const extractFeBlend = (props) => {
  const obj = {};
  if (props.in2) {
    obj.in2 = props.in2;
  }
  if (props.mode) {
    obj.mode = props.mode;
  }
  return obj;
};
export const extractFeColorMatrix = (props) => {
  const obj = {};
  if (undefined !== props.values) {
    const _Array = Array;
    const values = props.values;
    if (Array.isArray(props.values)) {
      obj.values = values.map((item) => {
        let parsed = item;
        if (typeof item !== "number") {
          const _parseFloat = parseFloat;
          parsed = parseFloat(item);
        }
        return parsed;
      });
    } else if (typeof values === "number") {
      const items = [props.values];
      obj.values = items;
    } else if (typeof props.values === "string") {
      const str = props.values;
      const parts = str.split(re3);
      let _parseFloat = parseFloat;
      const mapped = parts.map(parseFloat);
      obj.values = mapped.filter((item) => !isNaN(item));
    } else {
      const _console = console;
      console.warn("Invalid value for FeColorMatrix `values` prop");
    }
  }
  if (props.type) {
    obj.type = props.type;
  }
  return obj;
};
export const extractFeComposite = (props) => {
  const tmp = props.in || "";
  const obj = { in1: tmp, in2: props.in2 || "", operator1: props.operator || "over" };
  const items = ["k1", "k2", "k3", "k4"];
  const item = items.forEach((item) => {
    if (undefined !== props[item]) {
      const _Number = Number;
      obj[item] = Number(tmp[item]) || 0;
      Number(tmp[item]) || 0;
    }
  });
  return obj;
};
export const extractFeGaussianBlur = (props) => {
  const obj = {};
  if (Array.isArray(props.stdDeviation)) {
    const _Number5 = Number;
    obj.stdDeviationX = Number(props.stdDeviation[0]) || 0;
    const _Number6 = Number;
    Number(props.stdDeviation[0]) || 0;
    obj.stdDeviationY = Number(props.stdDeviation[1]) || 0;
    Number(props.stdDeviation[1]) || 0;
  } else {
    if (typeof props.stdDeviation === "string") {
      const str2 = props.stdDeviation;
      if (str2.match(re3)) {
        const str = props.stdDeviation;
        const parts = str.split(re3);
        const _Number3 = Number;
        obj.stdDeviationX = Number(parts[0]) || 0;
        const _Number4 = Number;
        Number(parts[0]) || 0;
        obj.stdDeviationY = Number(parts[1]) || 0;
        Number(parts[1]) || 0;
      }
    }
    let tmp = typeof props.stdDeviation === "number";
    if (!tmp) {
      const stdDeviation = props.stdDeviation;
      let tmp10 = typeof stdDeviation === "string";
      if (typeof stdDeviation === "string") {
        const str3 = props.stdDeviation;
        tmp10 = !str3.match(re3);
      }
      tmp = tmp10;
    }
    if (tmp) {
      const _Number = Number;
      obj.stdDeviationX = Number(props.stdDeviation) || 0;
      const _Number2 = Number;
      Number(props.stdDeviation) || 0;
      obj.stdDeviationY = Number(props.stdDeviation) || 0;
      Number(props.stdDeviation) || 0;
    }
  }
  if (props.edgeMode) {
    obj.edgeMode = props.edgeMode;
  }
  return obj;
};
export const extractFeMerge = (props, parent) => {
  let mapped;
  let num;
  if (props.children) {
    const Children = react.Children;
    mapped = Children.map(props.children, (onlyResult) => {
      const obj = { parent };
      return react.cloneElement(onlyResult, obj);
    });
  } else {
    mapped = [];
  }
  const nodes = [];
  const length = mapped.length;
  for (let num = 0; num < length; num = num + 1) {
    let str = mapped[num].props.in;
    let push = nodes.push;
    if (!str) {
      str = "";
    }
    let arr = push(str);
  }
  return { nodes };
};