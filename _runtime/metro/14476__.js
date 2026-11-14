// === Module 14476: ? ===

// Module 14476
const exports = {
  linear(arg0, arg1, arg2, arg3) {
    return (arg2 - arg1) * arg0 / arg3 + arg1;
  },
  easeInQuad(arg0, arg1, arg2, arg3) {
    const result = arg0 / arg3;
    return (arg2 - arg1) * result * result + arg1;
  },
  easeOutQuad(arg0, arg1, arg2, arg3) {
    const result = arg0 / arg3;
    return -arg2 - arg1 * result * (result - 2) + arg1;
  },
  easeInOutQuad(arg0, arg1, arg2, arg3) {
    const diff = arg2 - arg1;
    const result = arg0 / (arg3 / 2);
    if (result < 1) {
      let sum = diff / 2 * result * result + arg1;
    } else {
      const diff1 = result - 1;
      sum = -diff / 2 * (diff1 * (diff1 - 2) - 1) + arg1;
    }
    return sum;
  },
  easeInCubic(arg0, arg1, arg2, arg3) {
    const result = arg0 / arg3;
    return (arg2 - arg1) * result * result * result + arg1;
  },
  easeOutCubic(bound, arg1, arg2, hasOwnProperty) {
    const diff = bound / hasOwnProperty - 1;
    return (arg2 - arg1) * (diff * diff * diff + 1) + arg1;
  },
  easeInOutCubic(arg0, arg1, arg2, arg3) {
    const diff = arg2 - arg1;
    const result = arg0 / (arg3 / 2);
    if (result < 1) {
      let sum = diff / 2 * result * result * result + arg1;
    } else {
      const diff1 = result - 2;
      sum = diff / 2 * (diff1 * diff1 * diff1 + 2) + arg1;
    }
    return sum;
  },
  easeInQuart(arg0, arg1, arg2, arg3) {
    const result = arg0 / arg3;
    return (arg2 - arg1) * result * result * result * result + arg1;
  },
  easeOutQuart(arg0, arg1, arg2, arg3) {
    const diff = arg0 / arg3 - 1;
    return -arg2 - arg1 * (diff * diff * diff * diff - 1) + arg1;
  },
  easeInOutQuart(arg0, arg1, arg2, arg3) {
    const diff = arg2 - arg1;
    const result = arg0 / (arg3 / 2);
    if (result < 1) {
      let sum = diff / 2 * result * result * result * result + arg1;
    } else {
      const diff1 = result - 2;
      sum = -diff / 2 * (diff1 * diff1 * diff1 * diff1 - 2) + arg1;
    }
    return sum;
  },
  easeInQuint(arg0, arg1, arg2, arg3) {
    const result = arg0 / arg3;
    return (arg2 - arg1) * result * result * result * result * result + arg1;
  },
  easeOutQuint(arg0, arg1, arg2, arg3) {
    const diff = arg0 / arg3 - 1;
    return (arg2 - arg1) * (diff * diff * diff * diff * diff + 1) + arg1;
  },
  easeInOutQuint(arg0, arg1, arg2, arg3) {
    const diff = arg2 - arg1;
    const result = arg0 / (arg3 / 2);
    if (result < 1) {
      let sum = diff / 2 * result * result * result * result * result + arg1;
    } else {
      const diff1 = result - 2;
      sum = diff / 2 * (diff1 * diff1 * diff1 * diff1 * diff1 + 2) + arg1;
    }
    return sum;
  },
  easeInSine(arg0, arg1, arg2, arg3) {
    const diff = arg2 - arg1;
    return -diff * Math.cos(arg0 / arg3 * (Math.PI / 2)) + diff + arg1;
  },
  easeOutSine(arg0, arg1, arg2, arg3) {
    const diff = arg2 - arg1;
    return diff * Math.sin(arg0 / arg3 * (Math.PI / 2)) + arg1;
  },
  easeInOutSine(arg0, arg1, arg2, arg3) {
    const result = -arg2 - arg1 / 2;
    return result * (Math.cos(Math.PI * arg0 / arg3) - 1) + arg1;
  },
  easeInExpo(arg0, arg1, arg2, arg3) {
    let sum = arg1;
    if (0 != arg0) {
      const _Math = Math;
      const diff = arg2 - arg1;
      sum = diff * Math.pow(2, 10 * (arg0 / arg3 - 1)) + arg1;
    }
    return sum;
  },
  easeOutExpo(arg0, arg1, arg2, arg3) {
    const diff = arg2 - arg1;
    if (arg0 == arg3) {
      let sum = arg1 + diff;
    } else {
      const _Math = Math;
      sum = diff * (1 - Math.pow(2, -10 * arg0 / arg3)) + arg1;
    }
    return sum;
  },
  easeInOutExpo(arg0, arg1, arg2, arg3) {
    const diff = arg2 - arg1;
    if (0 === arg0) {
      return arg1;
    } else if (arg0 === arg3) {
      let sum = arg1 + diff;
    } else {
      const result = arg0 / (arg3 / 2);
      if (result < 1) {
        const _Math2 = Math;
        const result1 = diff / 2;
        sum = result1 * Math.pow(2, 10 * (result - 1)) + arg1;
      } else {
        const _Math = Math;
        const result2 = diff / 2;
        sum = result2 * (2 - Math.pow(2, -10 * (result - 1))) + arg1;
      }
    }
  },
  easeInCirc(arg0, arg1, arg2, arg3) {
    const result = arg0 / arg3;
    const diff = arg2 - arg1;
    return -diff * (Math.sqrt(1 - result * result) - 1) + arg1;
  },
  easeOutCirc(arg0, arg1, arg2, arg3) {
    const diff = arg0 / arg3 - 1;
    const diff1 = arg2 - arg1;
    return diff1 * Math.sqrt(1 - diff * diff) + arg1;
  },
  easeInOutCirc(arg0, arg1, arg2, arg3) {
    const diff = arg2 - arg1;
    const result = arg0 / (arg3 / 2);
    if (result < 1) {
      const _Math2 = Math;
      const result1 = -diff / 2;
      let sum = result1 * (Math.sqrt(1 - result * result) - 1) + arg1;
    } else {
      const _Math = Math;
      const diff1 = result - 2;
      const result2 = diff / 2;
      sum = result2 * (Math.sqrt(1 - diff1 * diff1) + 1) + arg1;
    }
    return sum;
  },
  easeInElastic(arg0, arg1, arg2, arg3) {
    const diff = arg2 - arg1;
    if (0 === arg0) {
      return arg1;
    } else {
      const result = arg0 / arg3;
      if (1 == result) {
        let sum = arg1 + diff;
      } else {
        const result1 = 0.3 * arg3;
        const _Math6 = Math;
        if (diff < Math.abs(diff)) {
          let result2 = result1 / 4;
        } else {
          const _Math = Math;
          const _Math2 = Math;
          const result3 = 2 * Math.PI;
          result2 = result1 / result3 * Math.asin(diff / diff);
        }
        const _Math3 = Math;
        const diff1 = result - 1;
        const _Math4 = Math;
        const _Math5 = Math;
        const result4 = -diff * Math.pow(2, 10 * diff1);
        sum = result4 * Math.sin((diff1 * arg3 - result2) * (2 * Math.PI) / result1) + arg1;
      }
    }
  },
  easeOutElastic(arg0, arg1, arg2, arg3) {
    const diff = arg2 - arg1;
    if (0 === arg0) {
      return arg1;
    } else {
      const result = arg0 / arg3;
      if (1 == result) {
        let sum = arg1 + diff;
      } else {
        const result1 = 0.3 * arg3;
        const _Math6 = Math;
        if (diff < Math.abs(diff)) {
          let result2 = result1 / 4;
        } else {
          const _Math = Math;
          const _Math2 = Math;
          const result3 = 2 * Math.PI;
          result2 = result1 / result3 * Math.asin(diff / diff);
        }
        const _Math3 = Math;
        const _Math4 = Math;
        const _Math5 = Math;
        const result4 = diff * Math.pow(2, -10 * result);
        sum = result4 * Math.sin((result * arg3 - result2) * (2 * Math.PI) / result1) + diff + arg1;
      }
    }
  },
  easeInOutElastic(arg0, arg1, arg2, arg3) {
    const diff = arg2 - arg1;
    if (0 === arg0) {
      return arg1;
    } else {
      const result = arg0 / (arg3 / 2);
      if (2 === result) {
        let sum = arg1 + diff;
      } else {
        const result1 = 0.44999999999999996 * arg3;
        const _Math9 = Math;
        if (diff < Math.abs(diff)) {
          let result2 = result1 / 4;
        } else {
          const _Math = Math;
          const _Math2 = Math;
          const result3 = 2 * Math.PI;
          result2 = result1 / result3 * Math.asin(diff / diff);
        }
        if (result < 1) {
          const _Math6 = Math;
          const diff1 = result - 1;
          const _Math7 = Math;
          const _Math8 = Math;
          const result4 = diff * Math.pow(2, 10 * diff1);
          sum = result4 * Math.sin((diff1 * arg3 - result2) * (2 * Math.PI) / result1) * -0.5 + arg1;
        } else {
          const _Math3 = Math;
          const diff2 = result - 1;
          const _Math4 = Math;
          const _Math5 = Math;
          const result5 = diff * Math.pow(2, -10 * diff2);
          sum = result5 * Math.sin((diff2 * arg3 - result2) * (2 * Math.PI) / result1) * 0.5 + diff + arg1;
        }
      }
    }
  },
  easeInBack(arg0, arg1, arg2, arg3, arg4) {
    let num = arg4;
    if (undefined === arg4) {
      num = 1.70158;
    }
    const result = arg0 / arg3;
    return (arg2 - arg1) * result * result * ((num + 1) * result - num) + arg1;
  },
  easeOutBack(arg0, arg1, arg2, arg3, arg4) {
    let num = arg4;
    if (undefined === arg4) {
      num = 1.70158;
    }
    const diff = arg0 / arg3 - 1;
    return (arg2 - arg1) * (diff * diff * ((num + 1) * diff + num) + 1) + arg1;
  },
  easeInOutBack(arg0, arg1, arg2, arg3, arg4) {
    let num = arg4;
    const diff = arg2 - arg1;
    if (undefined === arg4) {
      num = 1.70158;
    }
    const result = arg0 / (arg3 / 2);
    if (result < 1) {
      const result1 = num * 1.525;
      let sum = diff / 2 * (result * result * ((1 + result1) * result - result1)) + arg1;
    } else {
      const diff1 = result - 2;
      const result2 = num * 1.525;
      sum = diff / 2 * (diff1 * diff1 * ((1 + result2) * diff1 + result2) + 2) + arg1;
    }
    return sum;
  },
  easeInBounce(arg0, arg1, diff, arg3) {
    diff = diff - arg1;
    return diff - obj.easeOutBounce(arg3 - arg0, 0, diff, arg3) + arg1;
  },
  easeOutBounce(arg0, arg1, diff, arg3) {
    diff = diff - arg1;
    const result = arg0 / arg3;
    if (result < 0.36363636363636365) {
      let sum = diff * (7.5625 * result * result) + arg1;
    } else if (result < 0.7272727272727273) {
      const diff1 = result - 0.5454545454545454;
      sum = diff * (7.5625 * diff1 * diff1 + 0.75) + arg1;
    } else if (result < 0.9090909090909091) {
      const diff2 = result - 0.8181818181818182;
      sum = diff * (7.5625 * diff2 * diff2 + 0.9375) + arg1;
    } else {
      const diff3 = result - 0.9545454545454546;
      sum = diff * (7.5625 * diff3 * diff3 + 0.984375) + arg1;
    }
    return sum;
  },
  easeInOutBounce(arg0, arg1, arg2, arg3) {
    const diff = arg2 - arg1;
    if (arg0 < arg3 / 2) {
      let sum = 0.5 * obj.easeInBounce(2 * arg0, 0, diff, arg3) + arg1;
    } else {
      sum = 0.5 * obj.easeOutBounce(2 * arg0 - arg3, 0, diff, arg3) + 0.5 * diff + arg1;
    }
    return sum;
  }
};

export default exports;