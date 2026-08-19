// === Module 6609: extractFeFlood ===

// Module 6609 (extractFeFlood)
import extractOpacityDefault from "extractOpacity" /* 6577 */;
import extractBrushDefault from "extractBrush" /* 6589 */;
import noop from "noop" /* 19 */;

const re3 = /\s+/;
let obj = { type: 0, payload: require("get ActivityIndicator").processColor("black") };

export default function extractFeFlood(arg0) {
  ({ floodColor, floodOpacity } = arg0);
  if (null == floodColor) {
    let tmp = obj;
  } else {
    tmp = extractBrushDefault(floodColor);
  }
  obj = { floodColor: tmp };
  if (null != floodOpacity) {
    obj.floodOpacity = extractOpacityDefault(floodOpacity);
  }
  return obj;
};
export const extractFilter = (props) => ({ x: props.x, y: props.y, width: props.width, height: props.height, result: props.result });
export const extractIn = (props) => {
  if (props.in) {
    obj = { in1: null };
    obj[0] = props.in;
  } else {
    obj = {};
  }
  return obj;
};
export const extractFeBlend = (props) => {
  obj = {};
  if (props.in2) {
    obj.in2 = props.in2;
  }
  if (props.mode) {
    obj.mode = props.mode;
  }
  return obj;
};
export const extractFeColorMatrix = (props) => {
  obj = {};
  if (undefined !== props.values) {
    const _Array = Array;
    const values = props.values;
    if (Array.isArray(props.values)) {
      obj.values = values.map((item, index) => {
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
      const parts = props.values.split(closure_3);
      let _parseFloat = parseFloat;
      const mapped = parts.map(parseFloat);
      obj.values = mapped.filter((item, index) => !isNaN(item));
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
  closure_0 = props;
  obj = { in1: props.in || "", in2: tmp2, operator1: tmp3 };
  const items = ["k1", "k2", "k3", "k4"];
  const item = items.forEach((item, index) => {
    if (undefined !== props[item]) {
      const _Number = Number;
      obj[item] = Number(tmp[item]) || 0;
      const tmp4 = Number(tmp[item]) || 0;
    }
  });
  return obj;
};
export const extractFeGaussianBlur = (props) => {
  obj = {};
  if (Array.isArray(props.stdDeviation)) {
    const _Number5 = Number;
    obj.stdDeviationX = Number(props.stdDeviation[0]) || 0;
    const _Number6 = Number;
    const tmp7 = Number(props.stdDeviation[0]) || 0;
    obj.stdDeviationY = Number(props.stdDeviation[1]) || 0;
    const tmp8 = Number(props.stdDeviation[1]) || 0;
  } else {
    if (typeof props.stdDeviation === "string") {
      if (str2.match(closure_3)) {
        const parts = props.stdDeviation.split(closure_3);
        const _Number3 = Number;
        obj.stdDeviationX = Number(parts[0]) || 0;
        const _Number4 = Number;
        const tmp5 = Number(parts[0]) || 0;
        obj.stdDeviationY = Number(parts[1]) || 0;
        const tmp6 = Number(parts[1]) || 0;
      }
      str2 = props.stdDeviation;
    }
    const stdDeviation = props.stdDeviation;
    let tmp = typeof stdDeviation === "number";
    if (typeof stdDeviation !== "number") {
      const stdDeviation2 = props.stdDeviation;
      let tmp10 = typeof stdDeviation2 === "string";
      if (typeof stdDeviation2 === "string") {
        tmp10 = !props.stdDeviation.match(closure_3);
      }
      tmp = tmp10;
    }
    if (tmp) {
      const _Number = Number;
      obj.stdDeviationX = Number(props.stdDeviation) || 0;
      const _Number2 = Number;
      const tmp2 = Number(props.stdDeviation) || 0;
      obj.stdDeviationY = Number(props.stdDeviation) || 0;
      const tmp3 = Number(props.stdDeviation) || 0;
    }
  }
  if (props.edgeMode) {
    obj.edgeMode = props.edgeMode;
  }
  return obj;
};
export const extractFeMerge = (props, arg1) => {
  closure_0 = arg1;
  if (props.children) {
    const Children = React.Children;
    let mapped = Children.map(props.children, (arg0) => closure_1_2.cloneElement(arg0, { parent: closure_0 }));
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