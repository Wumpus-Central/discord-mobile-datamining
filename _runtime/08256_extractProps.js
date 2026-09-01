// === Module 8256: extractProps ===

// Module 8256 (extractProps)
import pickNotNil from "pickNotNil" /* 8257 */;

require = arg1;
const module = arg2;
const dependencyMap = arg6;
function extractProps(markerMid) {
  ({ id, opacity, onLayout, clipPath, clipRule, display, mask, filter, marker, markerStart } = markerMid);
  if (undefined === markerStart) {
    markerStart = marker;
  }
  let str = markerMid.markerMid;
  if (undefined === str) {
    str = marker;
  }
  let str2 = markerMid.markerEnd;
  if (undefined === str2) {
    str2 = marker;
  }
  ({ testID, accessibilityLabel, accessible } = markerMid);
  const obj = {};
  const items = [];
  module(8248)(obj, markerMid, arg1);
  module(8258)(obj, markerMid, items);
  module(8261)(obj, markerMid, items);
  if (markerMid.color) {
    obj.color = markerMid.color;
  }
  if (items.length) {
    obj.propList = items;
  }
  const tmp6 = module(8249)(markerMid);
  if (null !== tmp6) {
    obj.matrix = tmp6;
  }
  if (null != opacity) {
    obj.opacity = tmp(8247)(opacity);
  }
  if (null != display) {
    let str4;
    if ("none" === display) {
      str4 = "none";
    }
    obj.display = str4;
  }
  if (onLayout) {
    obj.onSvgLayout = onLayout;
  }
  if (markerStart) {
    let tmp7;
    if (markerStart) {
      const match = markerStart.match(pickNotNil.idPattern);
      let tmp10;
      if (match) {
        tmp10 = match[1];
      }
      tmp7 = tmp10;
    }
    obj.markerStart = tmp7;
  }
  if (str) {
    let tmp11;
    if (str) {
      const match1 = str.match(pickNotNil.idPattern);
      let tmp14;
      if (match1) {
        tmp14 = match1[1];
      }
      tmp11 = tmp14;
    }
    obj.markerMid = tmp11;
  }
  if (str2) {
    let tmp15;
    if (str2) {
      const match2 = str2.match(pickNotNil.idPattern);
      let tmp18;
      if (match2) {
        tmp18 = match2[1];
      }
      tmp15 = tmp18;
    }
    obj.markerEnd = tmp15;
  }
  if (id) {
    const _String = String;
    obj.name = String(id);
  }
  if (testID) {
    obj.testID = testID;
  }
  if (accessibilityLabel) {
    obj.accessibilityLabel = accessibilityLabel;
  }
  if (accessible) {
    obj.accessible = accessible;
  }
  if (clipRule) {
    let num = 1;
    if (0 === table[clipRule]) {
      num = 0;
    }
    obj.clipRule = num;
  }
  if (clipPath) {
    const match3 = clipPath.match(pickNotNil.idPattern);
    if (match3) {
      obj.clipPath = match3[1];
    } else {
      const _console = console;
      console.warn(`Invalid \`clipPath\` prop, expected a clipPath like "#id", but got: "${clipPath}"`);
    }
  }
  if (mask) {
    const match4 = mask.match(pickNotNil.idPattern);
    if (match4) {
      obj.mask = match4[1];
    } else {
      const _console2 = console;
      console.warn(`Invalid \`mask\` prop, expected a mask like "#id", but got: "${mask}"`);
    }
  }
  if (filter) {
    const match5 = filter.match(pickNotNil.idPattern);
    if (match5) {
      obj.filter = match5[1];
    } else {
      const _console3 = console;
      console.warn(`Invalid \`filter\` prop, expected a filter like "#id", but got: "${filter}"`);
    }
  }
  return obj;
}
let closure_3 = { evenodd: 0, nonzero: 1 };
arg5.default = extractProps;
arg5.propsAndStyles = function propsAndStyles(props) {
  const style = props.style;
  let tmp = props;
  if (style) {
    const _Array = Array;
    let applyResult = style;
    if (Array.isArray(style)) {
      const _Object = Object;
      const items = [{}];
      HermesBuiltin.arraySpread(style, 1);
      const _Object2 = Object;
      applyResult = HermesBuiltin.apply(items, Object);
    }
    const obj = {};
    const merged = Object.assign(applyResult);
    const merged1 = Object.assign(props);
    tmp = obj;
  }
  return tmp;
};
arg5.extract = function extract(arg0, style) {
  style = style.style;
  let tmp2 = style;
  if (style) {
    const _Array = Array;
    let applyResult = style;
    if (Array.isArray(style)) {
      const _Object = Object;
      const items = [{}];
      HermesBuiltin.arraySpread(style, 1);
      const _Object2 = Object;
      applyResult = HermesBuiltin.apply(items, Object);
    }
    const obj = {};
    const merged = Object.assign(applyResult);
    const merged1 = Object.assign(style);
    tmp2 = obj;
  }
  return extractProps(tmp2, arg0);
};
arg5.withoutXY = function withoutXY(self, props) {
  const style = props.style;
  let tmp2 = props;
  if (style) {
    const _Array = Array;
    let applyResult = style;
    if (Array.isArray(style)) {
      const _Object = Object;
      const items = [{}];
      HermesBuiltin.arraySpread(style, 1);
      const _Object2 = Object;
      applyResult = HermesBuiltin.apply(items, Object);
    }
    let obj = {};
    const merged = Object.assign(applyResult);
    const merged1 = Object.assign(props);
    tmp2 = obj;
  }
  obj = {};
  const merged2 = Object.assign(tmp2);
  obj.x = null;
  obj.y = null;
  return extractProps(obj, self);
};