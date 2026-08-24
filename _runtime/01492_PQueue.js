// === Module 1492: PQueue ===

// Module 1492 (PQueue)
function PQueue(arg0) {
  closure_0 = arg0;
  closure_1 = [];
  c2 = false;
  return {
    push(arg0) {
      c2 = false;
    },
    peek(arg0) {
      if (!c2) {
        const sorted = arr.sort(f104741);
        c2 = true;
      }
      let diff = arg0;
      if (undefined === arg0) {
        diff = arr.length - 1;
      }
      return arr[diff];
    },
    pop() {
      if (!c2) {
        const sorted = arr.sort(f104741);
        c2 = true;
      }
      return arr.pop();
    },
    size() {
      return arr.length;
    },
    map(arg0) {
      return arr.map(arg0);
    },
    debug() {
      if (!c2) {
        const sorted = arr.sort(f104741);
        c2 = true;
      }
      return arr;
    }
  };
}
class VBox {
  constructor(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    this.r1 = global;
    this.r2 = require;
    this.g1 = importDefault;
    this.g2 = importAll;
    this.b1 = module;
    this.b2 = exports;
    this.histo = dependencyMap;
    return;
  }
}
class CMap {
  constructor() {
    f104741 = (vbox, vbox2) => {
      vbox = vbox.vbox;
      vbox2 = vbox.vbox;
      const vbox3 = vbox2.vbox;
      const result = vbox.count() * vbox2.volume();
      const vbox4 = vbox2.vbox;
      const countResult = vbox.count();
      return f104741.naturalOrder(result, vbox3.count() * vbox4.volume());
    };
    closure_1 = [];
    c2 = false;
    obj = {
      push(arg0) {
            c2 = false;
          },
      peek(arg0) {
            if (!c2) {
              const sorted = arr.sort(f104741);
              c2 = true;
            }
            let diff = arg0;
            if (undefined === arg0) {
              diff = arr.length - 1;
            }
            return arr[diff];
          },
      pop() {
            if (!c2) {
              const sorted = arr.sort(f104741);
              c2 = true;
            }
            return arr.pop();
          },
      size() {
            return arr.length;
          },
      map(arg0) {
            return arr.map(arg0);
          },
      debug() {
            if (!c2) {
              const sorted = arr.sort(f104741);
              c2 = true;
            }
            return arr;
          }
    };
    this.vboxes = obj;
    return;
  }
}
VBox.prototype = {
  volume(arg0) {
    const self = this;
    let _volume = this._volume;
    if (_volume) {
      _volume = !arg0;
    }
    if (!_volume) {
      self._volume = (self.r2 - self.r1 + 1) * (self.g2 - self.g1 + 1) * (self.b2 - self.b1 + 1);
    }
    return self._volume;
  },
  count(arg0) {
    const self = this;
    if (!this._count_set) {
      let sum1 = self.r1;
      let num3 = 0;
      let num4 = 0;
      while (sum1 <= self.r2) {
        let g1 = self.g1;
        let tmp3 = num3;
        let tmp4 = sum1;
        let tmp5 = num3;
        if (g1 <= self.g2) {
          do {
            let b1 = self.b1;
            let sum = tmp3;
            let tmp7 = g1;
            let tmp8 = tmp3;
            if (b1 <= self.b2) {
              do {
                let num5 = tmp[(sum1 << 10) + (g1 << 5) + b1];
                let tmp9 = sum;
                let tmp10 = b1;
                if (!num5) {
                  num5 = 0;
                }
                sum = sum + num5;
                b1 = b1 + 1;
                tmp8 = sum;
              } while (b1 <= self.b2);
            }
            g1 = g1 + 1;
            tmp3 = tmp8;
            tmp5 = tmp8;
          } while (g1 <= self.g2);
        }
        sum1 = sum1 + 1;
        num3 = tmp5;
        num4 = tmp5;
      }
      self._count = num4;
      self._count_set = true;
    }
    return self._count;
  },
  copy() {
    ({ r1, r2, g1, g2, b1, b2, histo } = this);
    const obj = Object.create(VBox.prototype);
    obj.r1 = r1;
    obj.r2 = r2;
    obj.g1 = g1;
    obj.g2 = g2;
    obj.b1 = b1;
    obj.b2 = b2;
    obj.histo = histo;
    return obj;
  },
  avg(arg0) {
    const self = this;
    if (this._avg) {
      if (!arg0) {
        return self._avg;
      }
    }
    let sum4 = self.r1;
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;
    let num5 = 0;
    let num6 = 0;
    let num7 = 0;
    let num8 = 0;
    while (sum4 <= self.r2) {
      let g1 = self.g1;
      let tmp3 = num;
      let tmp4 = num2;
      let tmp5 = num3;
      let tmp6 = num4;
      let tmp7 = sum4;
      let tmp8 = num;
      let tmp9 = num2;
      let tmp10 = num3;
      let tmp11 = num4;
      if (g1 <= self.g2) {
        do {
          let b1 = self.b1;
          let sum3 = tmp3;
          let sum2 = tmp4;
          let sum1 = tmp5;
          let sum = tmp6;
          let tmp16 = g1;
          let tmp17 = tmp3;
          let tmp18 = tmp4;
          let tmp19 = tmp5;
          let tmp20 = tmp6;
          if (b1 <= self.b2) {
            do {
              let num9 = tmp[(sum4 << 10) + (g1 << 5) + b1];
              let tmp21 = sum3;
              let tmp22 = sum2;
              let tmp23 = sum1;
              let tmp24 = sum;
              let tmp25 = b1;
              if (!num9) {
                num9 = 0;
              }
              sum = sum + num9;
              sum1 = sum1 + num9 * (sum4 + 0.5) * 8;
              sum2 = sum2 + num9 * (g1 + 0.5) * 8;
              sum3 = sum3 + num9 * (b1 + 0.5) * 8;
              b1 = b1 + 1;
              tmp17 = sum3;
              tmp18 = sum2;
              tmp19 = sum1;
              tmp20 = sum;
            } while (b1 <= self.b2);
          }
          g1 = g1 + 1;
          tmp3 = tmp17;
          tmp4 = tmp18;
          tmp5 = tmp19;
          tmp6 = tmp20;
          tmp8 = tmp17;
          tmp9 = tmp18;
          tmp10 = tmp19;
          tmp11 = tmp20;
        } while (g1 <= self.g2);
      }
      sum4 = sum4 + 1;
      num = tmp8;
      num2 = tmp9;
      num3 = tmp10;
      num4 = tmp11;
      num5 = tmp8;
      num6 = tmp9;
      num7 = tmp10;
      num8 = tmp11;
    }
    if (num8) {
      const items = [, , ];
      num7 = ~~num7 / num8;
      items[0] = num7;
      num6 = ~~num6 / num8;
      items[1] = num6;
      num5 = ~~num5 / num8;
      items[2] = num5;
      let items1 = items;
    } else {
      items1 = [~~8 * (self.r1 + self.r2 + 1) / 2, ~~8 * (self.g1 + self.g2 + 1) / 2, ~~8 * (self.b1 + self.b2 + 1) / 2];
    }
    self._avg = items1;
  },
  contains(arg0) {
    const self = this;
    globalThis.gval = arg0[1] >> 3;
    globalThis.bval = arg0[2] >> 3;
    let tmp2 = tmp >= this.r1 && tmp <= self.r2;
    if (tmp2) {
      tmp2 = globalThis.gval >= self.g1;
    }
    if (tmp2) {
      tmp2 = globalThis.gval <= self.g2;
    }
    if (tmp2) {
      tmp2 = globalThis.bval >= self.b1;
    }
    if (tmp2) {
      tmp2 = globalThis.bval <= self.b2;
    }
    return tmp2;
  }
};
CMap.prototype = {
  push(avg) {
    const vboxes = this.vboxes;
    vboxes.push({ vbox: avg, color: avg.avg() });
  },
  palette() {
    const vboxes = this.vboxes;
    return vboxes.map((color) => color.color);
  },
  size() {
    const vboxes = this.vboxes;
    return vboxes.size();
  },
  map(arg0) {
    const self = this;
    const vboxes = this.vboxes;
    let num = 0;
    if (0 < vboxes.size()) {
      const vbox = vboxes.peek(num).vbox;
      while (!vbox.contains(arg0)) {
        num = num + 1;
      }
      return vboxes.peek(num).color;
    }
    return self.nearest(arg0);
  },
  nearest(arg0) {
    const vboxes = this.vboxes;
    let num = 0;
    let tmp3;
    if (0 < vboxes.size()) {
      do {
        let _Math = Math;
        let _Math2 = Math;
        let _Math3 = Math;
        let powResult = Math.pow(arg0[0] - vboxes.peek(num).color[0], 2);
        let _Math4 = Math;
        let sum = powResult + Math.pow(arg0[1] - vboxes.peek(num).color[1], 2);
        let sqrtResult = Math.sqrt(sum + Math.pow(arg0[2] - vboxes.peek(num).color[2], 2));
        let tmp7 = sqrtResult < tmp2;
        let tmp8 = num;
        let color = tmp;
        let tmp9 = tmp2;
        if (!tmp7) {
          tmp7 = undefined === tmp9;
        }
        if (tmp7) {
          color = vboxes.peek(num).color;
          tmp9 = sqrtResult;
        }
        num = num + 1;
        tmp = color;
        tmp2 = tmp9;
        tmp3 = color;
      } while (num < vboxes.size());
    }
    return tmp3;
  },
  forcebw() {
    const vboxes = this.vboxes;
    const sorted = vboxes.sort((color, color2) => closure_0.naturalOrder(closure_0.sum(color.color), closure_0.sum(color2.color)));
    const color = vboxes[0].color;
    if (tmp2) {
      vboxes[0].color = [0, 0, 0];
    }
    const diff = vboxes.length - 1;
    const color2 = vboxes[diff].color;
    if (tmp4) {
      vboxes[diff].color = [255, 255, 255];
    }
  }
};

export default function quantize(arr) {
  let sizeResult;
  let sizeResult1;
  if (arr.length) {
    if (arg1 >= 2) {
      if (arg1 <= 256) {
        function iter(BottomSheetDraggableContext, arg1, closure_0, closure_1) {
          let num = 0;
          let num2 = 1;
          while (true) {
            let arr = BottomSheetDraggableContext.pop();
            let tmp = num;
            let tmp2 = num2;
            if (arr.count()) {
              let tmp6 = sum8;
              let tmp7;
              if (arr.count()) {
                let sum = arr.r2 - arr.r1 + 1;
                let sum1 = arr.g2 - arr.g1 + 1;
                let tmp10 = f104741;
                let items = [sum, sum1, arr.b2 - arr.b1 + 1];
                let maxResult = f104741.max(items);
                if (1 == arr.count()) {
                  let items1 = [arr.copy()];
                  tmp7 = items1;
                } else {
                  sum8 = 0;
                  let items2 = [];
                  let items3 = [];
                  if (maxResult == sum) {
                    sum = arr.r1;
                    let num12 = 0;
                    let num7 = 0;
                    while (sum <= arr.r2) {
                      let g13 = arr.g1;
                      let tmp28 = sum;
                      let tmp29 = num12;
                      let num13 = 0;
                      let num14 = 0;
                      while (g13 <= arr.g2) {
                        let b13 = arr.b1;
                        let sum2 = num13;
                        let tmp31 = g13;
                        let tmp32 = num13;
                        if (b13 <= arr.b2) {
                          do {
                            let num15 = tmp6[(sum << 10) + (g13 << 5) + b13];
                            let tmp33 = sum2;
                            let tmp34 = b13;
                            if (!num15) {
                              num15 = 0;
                            }
                            sum2 = sum2 + num15;
                            b13 = b13 + 1;
                            tmp32 = sum2;
                          } while (b13 <= arr.b2);
                        }
                        g13 = g13 + 1;
                        num13 = tmp32;
                        num14 = tmp32;
                      }
                      let sum3 = num12 + num14;
                      sum8 = sum3;
                      items2[sum] = sum3;
                      sum = sum + 1;
                      num12 = sum3;
                      num7 = sum3;
                    }
                  } else if (maxResult == sum1) {
                    let g12 = arr.g1;
                    let num8 = 0;
                    num7 = 0;
                    while (g12 <= arr.g2) {
                      let r1 = arr.r1;
                      let tmp20 = g12;
                      let tmp21 = num8;
                      let num9 = 0;
                      let num10 = 0;
                      while (r1 <= arr.r2) {
                        let b12 = arr.b1;
                        let sum4 = num9;
                        let tmp23 = r1;
                        let tmp24 = num9;
                        if (b12 <= arr.b2) {
                          do {
                            let num11 = tmp6[(r1 << 10) + (g12 << 5) + b12];
                            let tmp25 = sum4;
                            let tmp26 = b12;
                            if (!num11) {
                              num11 = 0;
                            }
                            sum4 = sum4 + num11;
                            b12 = b12 + 1;
                            tmp24 = sum4;
                          } while (b12 <= arr.b2);
                        }
                        r1 = r1 + 1;
                        num9 = tmp24;
                        num10 = tmp24;
                      }
                      let sum5 = num8 + num10;
                      sum8 = sum5;
                      items2[g12] = sum5;
                      g12 = g12 + 1;
                      num8 = sum5;
                      num7 = sum5;
                    }
                  } else {
                    let b1 = arr.b1;
                    let num6 = 0;
                    num7 = 0;
                    while (b1 <= arr.b2) {
                      let sum7 = arr.r1;
                      let tmp12 = b1;
                      let tmp13 = num6;
                      let num3 = 0;
                      let num4 = 0;
                      while (sum7 <= arr.r2) {
                        let g1 = arr.g1;
                        let sum6 = num3;
                        let tmp15 = sum7;
                        let tmp16 = num3;
                        if (g1 <= arr.g2) {
                          do {
                            let num5 = tmp6[(sum7 << 10) + (g1 << 5) + b1];
                            let tmp17 = sum6;
                            let tmp18 = g1;
                            if (!num5) {
                              num5 = 0;
                            }
                            sum6 = sum6 + num5;
                            g1 = g1 + 1;
                            tmp16 = sum6;
                          } while (g1 <= arr.g2);
                        }
                        sum7 = sum7 + 1;
                        num3 = tmp16;
                        num4 = tmp16;
                      }
                      sum8 = num6 + num4;
                      items2[b1] = sum8;
                      b1 = b1 + 1;
                      num6 = sum8;
                      num7 = sum8;
                    }
                  }
                  let item = items2.forEach((arg0, arg1) => {
                    items3[arg1] = sum8 - arg0;
                  });
                  let str = "r";
                  if (maxResult != sum) {
                    let str2 = "b";
                    if (maxResult == sum1) {
                      str2 = "g";
                    }
                    str = str2;
                  }
                  let text = `${str}1`;
                  let text1 = `${str}2`;
                  let tmp39 = arr[`${str}1`];
                  let tmp41;
                  if (tmp39 <= arr[`${str}2`]) {
                    let tmp42 = tmp39;
                    while (items2[tmp39] <= tmp40) {
                      let sum9 = tmp39 + 1;
                      tmp39 = sum9;
                    }
                    let copyResult = arr.copy();
                    let copyResult1 = arr.copy();
                    let diff = tmp39 - arr[text];
                    let diff1 = arr[text1] - tmp39;
                    if (diff <= diff1) {
                      let _Math2 = Math;
                      let bound = Math.min(arr[text1] - 1, ~~tmp39 + diff1 / 2);
                    } else {
                      let _Math = Math;
                      bound = Math.max(arr[text], ~~tmp39 - 1 - diff / 2);
                    }
                    let tmp49 = bound;
                    let tmp50 = bound;
                    if (!items2[bound]) {
                      do {
                        let sum10 = tmp49 + 1;
                        tmp49 = sum10;
                        tmp50 = sum10;
                        tmp52 = items2[sum10];
                      } while (!tmp52);
                    }
                    let tmp53 = tmp50;
                    if (!items3[tmp50]) {
                      let tmp54 = tmp50;
                      tmp53 = tmp50;
                      if (items2[tmp50 - 1]) {
                        let diff2 = tmp54 - 1;
                        tmp53 = diff2;
                        while (!items3[diff2]) {
                          tmp54 = diff2;
                          tmp53 = diff2;
                          if (!items2[diff2 - 1]) {
                            break;
                          }
                        }
                      }
                    }
                    copyResult[text1] = tmp53;
                    copyResult1[text] = copyResult[text1] + 1;
                    let items4 = [copyResult, copyResult1];
                    tmp41 = items4;
                  }
                  tmp7 = tmp41;
                }
              }
              [tmp56, tmp57] = tmp7;
              if (!tmp56) {
                break;
              } else {
                arr = BottomSheetDraggableContext.push(tmp56);
                let sum11 = num2;
                if (tmp57) {
                  let arr1 = BottomSheetDraggableContext.push(tmp57);
                  sum11 = num2 + 1;
                }
                if (sum11 < arg1) {
                  let sum12 = num + 1;
                  let tmp5 = sum11;
                }
              }
            } else {
              let arr2 = BottomSheetDraggableContext.push(arr);
              sum12 = num + 1;
              tmp5 = num2;
            }
            num = sum12;
            num2 = tmp5;
          }
        }
        const _Array = Array;
        const array = new Array(32768);
        CMap = array;
        let item = arr.forEach((arg0) => {
          closure_0 = arg0[0] >> 3;
          closure_1 = arg0[1] >> 3;
          const sum = (closure_0 << 10) + (closure_1 << 5) + (arg0[2] >> 3);
          let num = table[sum];
          if (!num) {
            num = 0;
          }
          table[sum] = num + 1;
        });
        let f104741 = array;
        const item1 = array.forEach(() => {

        });
        f104741 = undefined;
        VBox = undefined;
        CMap = undefined;
        c3 = 1000000;
        c4 = 0;
        c5 = 1000000;
        c6 = 0;
        c7 = 1000000;
        c8 = 0;
        const item2 = arr.forEach((arg0) => {
          closure_0 = arg0[0] >> 3;
          closure_1 = arg0[1] >> 3;
          closure_2 = tmp;
          if (closure_0 < closure_3) {
            closure_3 = tmp2;
          } else if (tmp2 > closure_4) {
            closure_4 = tmp2;
          }
          if (closure_1 < closure_5) {
            closure_5 = tmp4;
          } else if (tmp4 > closure_6) {
            closure_6 = tmp4;
          }
          if (arg0[2] >> 3 < closure_7) {
            closure_7 = tmp;
          } else if (closure_8 < tmp) {
            closure_8 = tmp;
          }
        });
        let obj = Object.create(VBox.prototype);
        obj.r1 = c3;
        obj.r2 = c4;
        obj.g1 = c5;
        obj.g2 = c6;
        obj.b1 = c7;
        obj.b2 = c8;
        obj.histo = array;
        const prototype2 = f104741.prototype;
        f104741 = (count, count2) => f104741.naturalOrder(count.count(), count2.count());
        VBox = [];
        CMap = false;
        obj = { push: null, peek: null, pop: null, size: null, map: null, debug: null };
        obj[0] = function push(arg0) {
          c2 = false;
        };
        obj[1] = function peek(arg0) {
          if (!c2) {
            const sorted = arr.sort(f104741);
            c2 = true;
          }
          let diff = arg0;
          if (undefined === arg0) {
            diff = arr.length - 1;
          }
          return arr[diff];
        };
        obj[2] = function pop() {
          if (!c2) {
            const sorted = arr.sort(f104741);
            c2 = true;
          }
          return arr.pop();
        };
        obj[3] = function size() {
          return arr.length;
        };
        obj[4] = function map(arg0) {
          return arr.map(arg0);
        };
        obj[5] = function debug() {
          if (!c2) {
            const sorted = arr.sort(f104741);
            c2 = true;
          }
          return arr;
        };
        obj.push(obj);
        iter(obj, 0.75 * arg1);
        const prototype3 = f104741.prototype;
        f104741 = (count, count2) => {
          const result = count.count() * count.volume();
          const countResult = count.count();
          return f104741.naturalOrder(result, count2.count() * count2.volume());
        };
        VBox = [];
        CMap = false;
        obj1 = { push: null, peek: null, pop: null, size: null, map: null, debug: null };
        obj1[0] = function push(arg0) {
          c2 = false;
        };
        obj1[1] = function peek(arg0) {
          if (!c2) {
            const sorted = arr.sort(f104741);
            c2 = true;
          }
          let diff = arg0;
          if (undefined === arg0) {
            diff = arr.length - 1;
          }
          return arr[diff];
        };
        obj1[2] = function pop() {
          if (!c2) {
            const sorted = arr.sort(f104741);
            c2 = true;
          }
          return arr.pop();
        };
        obj1[3] = function size() {
          return arr.length;
        };
        obj1[4] = function map(arg0) {
          return arr.map(arg0);
        };
        obj1[5] = function debug() {
          if (!c2) {
            const sorted = arr.sort(f104741);
            c2 = true;
          }
          return arr;
        };
        if (obj.size()) {
          do {
            arr = obj1.push(obj.pop());
            sizeResult = obj.size();
          } while (sizeResult);
        }
        iter(obj1, arg1 - obj1.size());
        const obj2 = Object.create(CMap.prototype);
        const prototype = f104741.prototype;
        f104741 = (vbox, vbox2) => {
          vbox = vbox.vbox;
          vbox2 = vbox.vbox;
          const vbox3 = vbox2.vbox;
          const result = vbox.count() * vbox2.volume();
          const vbox4 = vbox2.vbox;
          const countResult = vbox.count();
          return f104741.naturalOrder(result, vbox3.count() * vbox4.volume());
        };
        VBox = [];
        CMap = false;
        obj = { push: null, peek: null, pop: null, size: null, map: null, debug: null };
        obj[0] = function push(arg0) {
          c2 = false;
        };
        obj[1] = function peek(arg0) {
          if (!c2) {
            const sorted = arr.sort(f104741);
            c2 = true;
          }
          let diff = arg0;
          if (undefined === arg0) {
            diff = arr.length - 1;
          }
          return arr[diff];
        };
        obj[2] = function pop() {
          if (!c2) {
            const sorted = arr.sort(f104741);
            c2 = true;
          }
          return arr.pop();
        };
        obj[3] = function size() {
          return arr.length;
        };
        obj[4] = function map(arg0) {
          return arr.map(arg0);
        };
        obj[5] = function debug() {
          if (!c2) {
            const sorted = arr.sort(f104741);
            c2 = true;
          }
          return arr;
        };
        obj2.vboxes = obj;
        if (obj1.size()) {
          do {
            let arr1 = obj2.push(obj1.pop());
            sizeResult1 = obj1.size();
          } while (sizeResult1);
        }
        return obj2;
      }
    }
  }
  return false;
};