// _runtime/metro/01784__.js
import _createClassDefault from "00042__createClass.js";
import _classCallCheck from "00041__classCallCheck.js";

const LinearEasing = arg1;
const ERROR_MESSAGES = {
  invalidPointsCount() {
    return "Invalid linear easing points count. There should be at least two points";
  },
  invalidInputProgressValue(item) {
    return "Invalid input progress " + item + " value, it should be a percentage between 0% and 100%";
  },
};
const obj2 = {
  inputProgressLessThanPrecedingPoint(arg0, arg1) {
    return (
      "Linear easing point x value " +
      arg0 +
      " is less than value of the preceding control point " +
      arg1 +
      ". Value will be overridden by " +
      arg1
    );
  },
};
function parsePercentage(arg0) {}
function extrapolate(arg0, arg1, arg2) {}
class LinearEasing {
  constructor(arg0) {
    tmp = c2(this, LinearEasing);
    if (global.length < 2) {
      tmp2 = globalThis;
      _Error = Error;
      tmp3 = closure_3;
      _HermesInternal = HermesInternal;
      str = "[Reanimated] ";
      tmp4 = new.target;
      tmp5 = new.target;
      error = new Error("[Reanimated] " + closure_3.invalidPointsCount());
      tmp7 = error;
      throw error;
    } else {
      this.points = global.map((item) => {
        let first = item;
        if (Array.isArray(item)) {
          first = item;
          if (1 === item.length) {
            first = item[0];
          }
        }
        return first;
      });
      return;
    }
  }
}
const entry = {
  key: "toString",
  value: function toString() {
    const points = this.points;
    let mapped = points.map((arr) => {
      let combined = arr;
      if (Array.isArray(arr)) {
        const mapped = arr.map((item) => {
          let combined = item;
          if (typeof item === "string") {
            const _HermesInternal = HermesInternal;
            combined = '"' + item + '"';
          }
          return combined;
        });
        let _HermesInternal = HermesInternal;
        combined = "[" + mapped.join(", ") + "]";
      }
      return combined;
    });
    return "" + LinearEasing.easingName + "(" + mapped.join(", ") + ")";
  },
};
const items = [
  entry,
  {
    key: "normalize",
    value: function normalize() {
      const canonicalizeResult = this.canonicalize();
      if (canonicalizeResult[0].x <= 0) {
        if (canonicalizeResult[canonicalizeResult.length - 1].x >= 1) {
          const obj = { name: LinearEasing.easingName, points: canonicalizeResult };
          return obj;
        } else {
          const point4 = canonicalizeResult[canonicalizeResult.length - 2];
          let point2 = canonicalizeResult[canonicalizeResult.length - 1];
          if (typeof closure_6 === "function") {
            if (point4.x !== point2.x) {
              const point1 = { x: 1, y: point4.y + ((point2.y - point4.y) / (point2.x - point4.x)) * (1 - point4.x) };
              point2 = tmp6(point1);
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      } else {
        [point3, point] = canonicalizeResult;
        if (typeof closure_6 === "function") {
          if (point3.x !== point.x) {
            const point5 = { x: 0, y: point3.y + ((point.y - point3.y) / (point.x - point3.x)) * (0 - point3.x) };
            point = tmp4(point5);
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
  },
  {
    key: "canonicalize",
    value: function canonicalize() {
      const points = this.points;
      const flatMapResult = points.flatMap((item) => {
        if (Array.isArray(item)) {
          const substr = item.slice(1);
          let mapped = substr.map((item) => {
            if (typeof parsePercentage === "function") {
              let result = item;
              if (typeof item !== "number") {
                const PERCENTAGE_REGEX = LinearEasing(dependencyMap[2]).PERCENTAGE_REGEX;
                if (PERCENTAGE_REGEX.test(item)) {
                  const _parseFloat = parseFloat;
                  result = parseFloat(item) / 100;
                }
              }
              if (undefined !== result) {
                if (result >= 0) {
                  if (result <= 1) {
                    const point = { x: result, y: item[0] };
                    return point;
                  }
                }
              }
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("[Reanimated] " + ERROR_MESSAGES.invalidInputProgressValue(item));
              throw error;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
        } else {
          const obj = { y: item };
          mapped = [obj];
        }
        return mapped;
      });
      if (undefined === flatMapResult[0].x) {
        flatMapResult[0].x = 0;
      }
      if (undefined === flatMapResult[flatMapResult.length - 1].x) {
        flatMapResult[flatMapResult.length - 1].x = 1;
      }
      let num2 = -Infinity;
      let num3 = 0;
      if (0 < flatMapResult.length) {
        do {
          let x = flatMapResult[num3].x;
          let tmp3 = num2;
          if (undefined !== x) {
            let tmp4 = x;
            if (x < num2) {
              let logger = LinearEasing(1668).logger;
              let warnResult = logger.warn(obj2.inputProgressLessThanPrecedingPoint(x, num2));
              flatMapResult[num3].x = num2;
              tmp4 = num2;
            }
            tmp3 = tmp4;
          }
          num3 = num3 + 1;
          num2 = tmp3;
        } while (num3 < flatMapResult.length);
      }
      let x2 = flatMapResult[0].x;
      let num4 = 1;
      let num5 = 0;
      if (1 < flatMapResult.length) {
        do {
          let x3 = flatMapResult[num4].x;
          if (undefined !== x3) {
            let tmp12 = x3;
            let num6 = 0;
            if (0 < num5) {
              let num7 = 0;
              num6 = 0;
              tmp12 = x3;
              if (0 < num5) {
                do {
                  sum = num7 + 1;
                  flatMapResult[num4 - num5 + num7].x = x2 + (tmp13 * sum) / tmp14;
                  num6 = 0;
                  tmp12 = x3;
                  num7 = sum;
                } while (sum < num5);
              }
            }
          } else {
            num6 = num5 + 1;
            tmp12 = x2;
          }
          num4 = num4 + 1;
          num5 = num6;
          x2 = tmp12;
        } while (num4 < flatMapResult.length);
      }
      return flatMapResult;
    },
  },
];
let tmp2 = _createClassDefault(LinearEasing, items);
tmp2.easingName = "linear";

export { ERROR_MESSAGES };
export const WARN_MESSAGES = obj2;
export const LinearEasing = tmp2;
