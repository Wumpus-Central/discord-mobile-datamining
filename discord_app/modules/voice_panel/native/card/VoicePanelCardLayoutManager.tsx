// === Module 11759: getTargetCardSize ===

// Module 11759 (getTargetCardSize)
import shallowEqualDefault from "shallowEqual" /* 643 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { PixelRatio } from "get ActivityIndicator" /* 17 */;
import closure_6 from "getParticipants" /* 4461 */;
import VoicePanelModes from "VoicePanelModes" /* 11757 */;
import CARD_SIZE from "CARD_SIZE" /* 11760 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4466 */;
import set from "set" /* 2 */;

const require = arg1;
function getTargetCardSize(windowWidth) {
  windowWidth = windowWidth.windowWidth;
  let num = 3;
  ({ safeAreaLeft, safeAreaRight } = windowWidth);
  if (windowWidth > windowWidth.windowHeight) {
    num = 4;
  }
  return Math.max(closure_8, (windowWidth - safeAreaLeft - safeAreaRight - closure_13 * (num - 1)) / num);
}
const VoicePanelCardItemType = VoicePanelModes.VoicePanelCardItemType;
({ BASE_TARGET_CARD_SIZE: closure_8, VoicePanelCTACardDimensionKeys: c9, VoicePanelCTACardDimensions: c10, VOICE_PANEL_CHUNK_DIVISOR: unpackModuleId } = VoicePanelModes);
({ EDGE_GUTTER: closure_12, CALL_TILE_GUTTER: map1 } = CARD_SIZE);
let closure_15 = { id: "invalid", type: VoicePanelCardItemType.PARTICIPANT, x: 0, y: 0, width: 0, height: 0, zIndex: 0 };
let set = new Set();
let closure_17 = { enlargeSquare: false, fillAspectRatio: false };
let obj = { match: new Set(["1,camera", "2,camera", "2,camera,camera"]), layouts: items, global: true };
items = [{ enlargeSquare: true, fillAspectRatio: false }];
let items1 = [obj, ];
obj = { match: null, layouts: null };
let set1 = new Set(["1,camera", "2,camera", "2,camera,camera"]);
obj[0] = new Set(["1,stream", "2,stream", "3,stream", "2,stream,camera", "3,stream,camera", "3,stream,camera,camera", "3,camera", "3,camera,stream"]);
let items2 = [{ enlargeSquare: true, fillAspectRatio: true }, { enlargeSquare: false, fillAspectRatio: false }, { enlargeSquare: false, fillAspectRatio: false }];
obj[1] = items2;
items1[1] = obj;
let result = set.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx");
class VoicePanelCardLayoutManager {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    map = new Map();
    obj[1] = map;
    map1 = new Map();
    obj[2] = map1;
    map2 = new Map();
    obj[3] = map2;
    obj[4] = { width: 0, height: 0 };
    set = new Set();
    obj[5] = set;
    set1 = new Set();
    obj[6] = set1;
    obj[7] = [];
    obj[12] = { windowWidth: 0, windowHeight: 0, chunkSize: 0, safeAreaLeft: 0, safeAreaRight: 0, safeAreaTop: 0, safeAreaBottom: 0, gutter: 0, controlBarSize: 0 };
    obj[13] = { width: 0, height: 0 };
    obj.channelId = global;
    return obj;
  }
}
const prototype = VoicePanelCardLayoutManager.prototype;
prototype["setDirty"] = function setDirty(arg0) {
  const self = this;
  let tmp = arg0;
  if (arg0) {
    tmp = !self.dirty;
  }
  if (tmp) {
    self.dirty = true;
    self.emitItemChanges = true;
  }
};
prototype["handleLayoutEffect"] = function handleLayoutEffect() {
  this.mounted = true;
  this.emitLayoutChanges();
};
prototype["cleanUp"] = function cleanUp() {
  this.mounted = false;
};
prototype["updateState"] = function updateState(arr, windowHeight) {
  const self = this;
  windowHeight = windowHeight.windowHeight;
  const obj = { windowHeight, windowWidth: windowHeight.windowWidth, chunkSize: windowHeight / closure_11, safeAreaLeft: Math.max(windowHeight.safeAreaLeft, closure_12), safeAreaRight: Math.max(safeAreaRight, closure_12), safeAreaBottom: Math.max(safeAreaBottom, closure_12), safeAreaTop, gutter: closure_13, controlBarSize };
  ({ safeAreaRight, safeAreaTop, safeAreaBottom, controlBarSize } = windowHeight);
  if (!shallowEqualDefault(obj, this.props)) {
    self.props = obj;
    self.setDirty(true);
  }
  const items = self.items;
  let tmp2 = arr.length === items.length;
  if (tmp2) {
    tmp2 = !arr.some((arg0, arg1) => items[arg1] !== arg0);
  }
  self.setDirty(!tmp2);
  self.items = arr;
  return self.getContentDimensions();
};
prototype["getLayoutKey"] = function getLayoutKey() {
  return this.layoutKey;
};
prototype["getChunk"] = function getChunk(arg0) {
  const chunkedCoords = this.chunkedCoords;
  let value = chunkedCoords.get(arg0);
  if (value == null) {
    value = set;
  }
  return value;
};
prototype["getContentDimensions"] = function getContentDimensions() {
  const cardsLayout = this.computeCardsLayout();
  return this.contentDimensions;
};
prototype["getCardCoords"] = function getCardCoords(closure_0) {
  const cardsLayout = this.computeCardsLayout();
  const cardCoords = this.cardCoords;
  return cardCoords.get(closure_0);
};
prototype["getCardCoordsMap"] = function getCardCoordsMap() {
  const cardsLayout = this.computeCardsLayout();
  return this.cardCoords;
};
prototype["getDefaultTargetDimensions"] = function getDefaultTargetDimensions() {
  return this.defaultTargetCoords;
};
prototype["getTargetDimensions"] = function getTargetDimensions(id) {
  const self = this;
  if (null == id) {
    let defaultTargetCoords = self.defaultTargetCoords;
  } else if (set.has(id)) {
    defaultTargetCoords = table[id];
  } else {
    const targetDimensions = self.targetDimensions;
    defaultTargetCoords = targetDimensions.get(id);
    if (defaultTargetCoords == null) {
      defaultTargetCoords = self.defaultTargetCoords;
    }
  }
  return defaultTargetCoords;
};
prototype["setTargetDimensions"] = function setTargetDimensions(stateFromStores, width, height) {
  const self = this;
  const size = this.getTargetDimensions(stateFromStores);
  if (!tmp) {
    const targetDimensions = self.targetDimensions;
    const obj = { width: null, height: null };
    obj[0] = width;
    obj[1] = height;
    const result = targetDimensions.set(stateFromStores, obj);
    self.setDirty(true);
    self.deferredLayoutChange();
  }
};
prototype["resetTargetDimensions"] = function resetTargetDimensions(arg0) {
  const self = this;
  const targetDimensions = this.targetDimensions;
  if (targetDimensions.has(arg0)) {
    const targetDimensions2 = self.targetDimensions;
    targetDimensions2.delete(arg0);
    self.setDirty(true);
    self.deferredLayoutChange();
  }
};
prototype["setTargetAspectRatio"] = function setTargetAspectRatio(applicationId, landscape) {
  if ("portrait" === landscape) {
    let size = { width: 1, height: 2 };
  } else if ("landscape" === landscape) {
    size = { width: 2, height: 1 };
  } else if ("square" === landscape) {
    size = { width: 1, height: 1 };
  }
  const self = this;
  const size2 = this.getTargetDimensions(applicationId);
  if (!tmp) {
    const targetDimensions = self.targetDimensions;
    const result = targetDimensions.set(applicationId, size);
    self.setDirty(true);
    self.deferredLayoutChange();
  }
};
prototype["computeCardsLayout"] = function computeCardsLayout() {
  let self = this;
  self = this;
  self = this;
  if (this.dirty) {
    const _Map = Map;
    const map = new Map();
    self.cardCoords = map;
    const _Map2 = Map;
    map1 = new Map();
    self.chunkedCoords = map1;
    const props = self.props;
    const windowWidth = props.windowWidth;
    const windowHeight = props.windowHeight;
    ({ safeAreaLeft, safeAreaRight, safeAreaBottom, gutter } = props);
    let _Set = Set;
    ({ safeAreaTop, controlBarSize } = props);
    set = new Set();
    const _Set2 = Set;
    const set1 = new Set();
    const _Set3 = Set;
    const set2 = new Set();
    const _Set4 = Set;
    const set3 = new Set(self.items);
    const _HermesInternal = HermesInternal;
    closure_9 = "" + self.items.length;
    let bound2 = 0;
    for (const item10061 of set3) {
      if ((function _loop(item10061) {
        let obj = self;
        const participant = set1.getParticipant(self.channelId, item10061.id);
        if (item10061.type === set2.CTA) {
          const targetDimensions = obj.getTargetDimensions(item10061.id);
        } else if (null != participant) {
          if (participant.type === tmp4.USER) {
            let defaultTargetCoords = obj.defaultTargetCoords;
          } else {
            defaultTargetCoords = obj.getTargetDimensions(item10061.id);
          }
          tmp4 = items;
        }
        if (null != targetDimensions) {
          if (null != participant) {
            obj = { type: "custom", item: null, forceSquare: null };
            obj[1] = item10061;
            obj[2] = participant.type === items.USER;
            const type = participant.type;
            if (items.ACTIVITY === type) {
              set.add(obj);
            } else if (tmp17.STREAM === type) {
              set1.add(obj);
            } else if (tmp17.USER === type) {
              set2.add(obj);
            }
            let str = "stream";
            if (participant.type !== items.STREAM) {
              let str2 = "activity";
              if (participant.type === tmp17.USER) {
                str2 = "camera";
              }
              str = str2;
            }
            closure_9 = `${closure_9},${str}`;
            set3.delete(item10061);
          }
        }
        return 1;
      })(item10061)) {
        let tmp28 = obj;
        obj.return();
        break;
      }
      let tmp29 = null;
      let found = null;
      if (0 === set.size) {
        let tmp31 = items1;
        found = items1.find((arg0) => {
          const match = arg0.match;
          return match.has(closure_9);
        });
      }
      let _Math = Math;
      let tmp32 = self;
      let tmp33 = windowWidth;
      let obj = { top: null, left: null, right: null, bottom: null };
      obj[0] = safeAreaTop;
      obj[1] = safeAreaLeft;
      obj[2] = safeAreaRight;
      obj[3] = safeAreaBottom;
      let tmp34 = found;
      let num2 = 120;
      let bound = Math.max(120, windowHeight - self(windowWidth[11])(obj, found).height - found - controlBarSize - safeAreaBottom);
      let _Math2 = Math;
      if (null == found) {
        if (set.size <= 0) {
          let tmp75 = items1;
          obj = { windowWidth: null, windowHeight: null, safeAreaLeft: null, safeAreaRight: null };
          obj[0] = windowWidth;
          obj[1] = windowHeight;
          obj[2] = safeAreaLeft;
          obj[3] = safeAreaRight;
          let num11 = 7;
          let tmp76 = items1(obj);
          if (self.items.length < 7) {
            if (0 !== self.items.length) {
              obj1 = { cardCount: null, gutterSize: null, availableWidth: null, availableHeight: null };
              obj1[0] = self.items.length;
              obj1[1] = gutter;
              obj1[2] = tmp36;
              obj1[3] = bound;
              let tmp37 = tmp32(tmp33[12])(obj1);
              bound2 = tmp37.columns;
              let cardSize = tmp37.cardSize;
            }
          }
          let _Math3 = Math;
          let num3 = 1;
          let bound1 = Math.max((windowWidth - safeAreaLeft - safeAreaRight) / tmp76 | 0, 1);
          bound2 = bound1;
          let tmp40 = set;
          let tmp41 = obj3;
          cardSize = set.roundToNearestPixel((windowWidth - safeAreaLeft - safeAreaRight - obj3 * (bound1 - 1)) / bound1);
          let tmp38 = bound1;
        }
        let _global;
        if (found != null) {
          _global = found.global;
        }
        let flag = true;
        if (true === _global) {
          closure_11 = found.layouts[0];
        }
        let _Math6 = Math;
        let num6 = 1;
        let num7 = 1;
        let rounded = Math.floor(self.items.length / tmp38);
        if (self.items.length % tmp38 == 0) {
          num7 = 0;
        }
        let sum = rounded + num7;
        let diff = cardSize;
        if (null == found) {
          diff = cardSize;
          if (1 === tmp38) {
            diff = cardSize;
            if (sum > 1) {
              diff = cardSize;
              if (0 === set.size) {
                diff = windowWidth - safeAreaLeft - safeAreaRight;
              }
            }
          }
        }
        let obj2 = { width: null, height: null };
        obj2[0] = diff;
        let tmp49 = cardSize;
        if (null == found) {
          tmp49 = cardSize;
          if (1 === sum) {
            tmp49 = cardSize;
            if (tmp38 > 1) {
              tmp49 = cardSize;
              if (0 === set.size) {
                tmp49 = bound;
              }
            }
          }
        }
        obj2[1] = tmp49;
        if (!tmp32(tmp33[9])(obj2, self.defaultTargetCoords)) {
          self.defaultTargetCoords = obj2;
        }
        let obj3 = { cardWidth: null, cardHeight: null, gutter: null, totalItems: null, windowWidth: null };
        obj3[0] = self.defaultTargetCoords.width;
        obj3[1] = self.defaultTargetCoords.height;
        obj3[2] = gutter;
        obj3[3] = self.items.length;
        obj3[4] = windowWidth;
        let _Array = Array;
        let tmp50 = new.target;
        let tmp51 = new.target;
        let tmp52 = tmp38;
        let array = new Array(tmp38);
        let tmp53 = array;
        let items = [array.fill(0)];
        let num8 = -1;
        c15 = -1;
        c16 = -1;
        c17 = -1;
        items1 = 0;
        items1 = [];
        function placeItem(arg0, arg1, arg2, arg3) {

        }
        closure_0 = 1 === self.items.length;
        let items2 = [set, set1, set2, set3];
        let tmp54 = items2;
        let tmp55 = items2;
        for (const item10196 of items2) {
          function _loop2(type) {
            let size2;
            if ("custom" === type.type) {
              let tmp6 = closure_11;
              if (closure_11 == null) {
                let tmp8;
                if (found != null) {
                  tmp8 = found.layouts[closure_18];
                }
                tmp6 = tmp8;
              }
              if (tmp6 == null) {
                tmp6 = c17;
              }
              let str2 = "square";
              if (!type.forceSquare) {
                const size = self.getTargetDimensions(type.item.id);
                const result = size.width / size.height;
                let str3 = "landscape";
                if (result < 1.3) {
                  let str4 = "square";
                  if (result <= 0.8) {
                    str4 = "portrait";
                  }
                  str3 = str4;
                }
                str2 = str3;
              }
              let obj = { item: null, dimensions: null };
              obj[0] = type.item;
              if ("portrait" === str2) {
                if (!tmp6.fillAspectRatio) {
                  obj = { width: 1, height: 2 };
                }
                if (tmp14) {
                  obj1 = { width: 2, height: 2 };
                } else {
                  let num5 = 0;
                  if (tmp15) {
                    num5 = 1;
                  }
                  obj1 = { width: 2, height: null };
                  obj1[1] = 3 + num5;
                }
              } else {
                if ("landscape" === str2) {
                  if (tmp6.fillAspectRatio) {
                    if (tmp14) {
                      let num3 = 0;
                      if (tmp15) {
                        num3 = 1;
                      }
                      const obj2 = { width: null, height: 2 };
                      obj2[0] = 3 + num3;
                      obj3 = obj2;
                    } else {
                      obj3 = { width: 2, height: 2 };
                    }
                  } else {
                    let obj4 = { width: 2, height: 1 };
                  }
                } else if ("square" === str2) {
                  obj4 = tmp6.enlargeSquare ? { width: 2, height: 2 } : { width: 1, height: 1 };
                }
                obj[1] = obj4;
              }
            } else {
              obj = { item: null, dimensions: null };
              obj[0] = type;
              let tmp4 = closure_11;
              if (closure_11 == null) {
                tmp4 = c17;
              }
              obj[1] = tmp4.enlargeSquare ? { width: 2, height: 2 } : { width: 1, height: 1 };
              ({ item, dimensions } = obj);
              let num7 = dimensions.height;
              const id = item.id;
              if (typeof placeItem !== "function") {
                HermesBuiltin.throwTypeError();
              }
              let arr = items;
              const _Math = Math;
              const bound = Math.min(dimensions.width, bound2);
              if (1 === bound2) {
                num7 = 1;
              }
              let sum = c15 + 1;
              let num11 = -1;
              let num12 = -1;
              while (true) {
                let arr1 = arr[sum];
                let tmp27 = num11;
                let tmp28 = num12;
                let tmp29 = sum;
                let tmp30 = tmp26;
                if (null == arr1) {
                  let _Array = Array;
                  let tmp31 = new.target;
                  let tmp32 = new.target;
                  let tmp33 = tmp21;
                  let array = new Array(tmp21);
                  let tmp34 = array;
                  let fillResult = array.fill(0);
                  arr = arr.push(fillResult);
                  arr1 = fillResult;
                }
                let num13 = 0;
                let tmp37 = num11;
                let tmp38 = num12;
                if (0 < arr1.length) {
                  while (true) {
                    let tmp39 = num13;
                    if (1 === arr1[num13]) {
                      num13 = num13 + 1;
                      tmp37 = num11;
                      tmp38 = num12;
                      if (num13 >= arr1.length) {
                        break;
                      }
                    } else {
                      tmp37 = num13;
                      tmp38 = sum;
                      if (num13 + (bound - 1) < arr1.length) {
                        break;
                      }
                    }
                    break;
                  }
                }
                if (-1 !== tmp38) {
                  if (-1 !== tmp37) {
                    let sum2 = tmp38;
                    let tmp42 = tmp37;
                    let tmp43 = tmp38;
                    let tmp44 = tmp37;
                    let tmp45 = tmp38;
                    if (tmp38 <= tmp38 + (num7 - 1)) {
                      while (true) {
                        let tmp46 = arr[sum2];
                        let tmp47 = sum2;
                        let tmp48 = tmp42;
                        let tmp49 = tmp43;
                        if (null == tmp46) {
                          let _Array2 = Array;
                          let tmp50 = new.target;
                          let tmp51 = new.target;
                          let tmp52 = tmp21;
                          array = new Array(tmp21);
                          let tmp53 = array;
                          let fillResult1 = array.fill(0);
                          arr = arr.push(fillResult1);
                          tmp46 = fillResult1;
                        }
                        let sum1 = tmp42;
                        let num16 = tmp42;
                        let num17 = tmp43;
                        if (tmp42 <= tmp42 + (bound - 1)) {
                          let tmp57 = sum1;
                          num16 = -1;
                          num17 = -1;
                          while (0 === tmp46[sum1]) {
                            sum1 = sum1 + 1;
                            num16 = tmp42;
                            num17 = tmp43;
                            if (sum1 > tmp42 + (bound - 1)) {
                              break;
                            }
                          }
                        }
                        tmp44 = num16;
                        tmp45 = num17;
                        if (-1 === num16) {
                          break;
                        } else {
                          tmp44 = num16;
                          tmp45 = num17;
                          if (-1 === num17) {
                            break;
                          } else {
                            sum2 = sum2 + 1;
                            tmp42 = num16;
                            tmp43 = num17;
                            tmp44 = num16;
                            tmp45 = num17;
                            if (sum2 > num17 + (num7 - 1)) {
                              break;
                            }
                          }
                        }
                      }
                    }
                    if (-1 !== tmp45) {
                      if (-1 !== tmp44) {
                        let obj5 = { startRow: null, startCol: null, width: null, height: null };
                        obj5[0] = tmp45;
                        obj5[1] = tmp44;
                        obj5[2] = bound;
                        obj5[3] = num7;
                        let num14 = tmp44;
                        let num15 = tmp45;
                        let sum3 = sum;
                        size2 = obj5;
                        num11 = num14;
                        num12 = num15;
                        sum = sum3;
                        tmp26 = size2;
                        if (null != size2) {
                          break;
                        }
                      }
                    }
                    sum3 = sum + 1;
                    num14 = tmp44;
                    num15 = tmp45;
                    size2 = tmp26;
                  }
                }
                sum3 = sum + 1;
                num14 = -1;
                num15 = -1;
                size2 = tmp26;
              }
              let tmp65 = c15;
              ({ startRow, startCol, width, height } = size2);
              let sum6 = startRow;
              if (startRow < startRow + height) {
                do {
                  let tmp58 = sum6;
                  let sum4 = startCol;
                  if (startCol < startCol + width) {
                    do {
                      arr[sum6][sum4] = 1;
                      sum4 = sum4 + 1;
                      sum5 = startCol + width;
                    } while (sum4 < sum5);
                  }
                  sum6 = sum6 + 1;
                } while (sum6 < startRow + height);
              }
              let sum7 = tmp65 + 1;
              while (null != arr[sum7]) {
                if (-1 !== arr3.indexOf(0)) {
                  break;
                } else {
                  sum7 = sum7 + 1;
                  tmp65 = tmp63;
                  continue;
                }
              }
              c15 = tmp65;
              const _Math2 = Math;
              const _Math3 = Math;
              closure_17 = Math.min(Math.max(closure_17, size2.startCol + (size2.width - 1)), tmp21);
              const obj6 = { id: null, type: null, x: null, y: null, width: null, height: null, zIndex: null };
              obj6[0] = id;
              obj6[1] = item.type;
              obj6[2] = size2.startCol * (obj3.gutter + obj3.cardWidth);
              obj6[3] = size2.startRow * (obj3.gutter + obj3.cardHeight);
              obj6[4] = obj3.cardWidth * size2.width + (size2.width - 1) * obj3.gutter;
              obj6[5] = obj3.cardHeight * size2.height + (size2.height - 1) * obj3.gutter;
              obj6[6] = obj3.totalItems - closure_18;
              const y = obj6.y;
              let tmp69 = self;
              const chunkSize = self.props.chunkSize;
              items = [y / chunkSize | 0, (y + obj6.height) / chunkSize | 0];
              let first = items[0];
              if (first <= items[1]) {
                do {
                  let tmp71 = self;
                  let chunkedCoords = self.chunkedCoords;
                  let value = chunkedCoords.get(first);
                  let tmp72 = first;
                  if (null == value) {
                    let _Set = Set;
                    let tmp73 = new.target;
                    let tmp74 = new.target;
                    set = new Set();
                    let tmp76 = set;
                    let chunkedCoords2 = tmp71.chunkedCoords;
                    let result1 = chunkedCoords2.set(first, set);
                    value = set;
                  }
                  let addResult = value.add(obj6);
                  first = first + 1;
                  tmp69 = tmp71;
                } while (first <= items[1]);
              }
              const cardCoords = tmp69.cardCoords;
              const result2 = cardCoords.set(id, obj6);
              const _Math4 = Math;
              bound1 = Math.max(bound1, size2.startRow + size2.height - 1);
              if (bound1 !== c15) {
                if (1 === size2.height) {
                  if (size2.startRow === bound1) {
                    arr1 = items1.push(id);
                  }
                  closure_18 = closure_18 + 1;
                }
              }
              items1.length = 0;
              const tmp20 = c15;
            }
          }
          let tmp56 = item10196;
          let tmp57 = item10196;
          for (const item10202 of item10196) {
            let tmp58 = _loop2;
            let _loop2Result = _loop2(item10202);
            continue;
          }
          continue;
        }
        if (c15 !== c16) {
          if (-1 !== c15) {
            let tmp77 = items[c16];
            let flag2 = 0 === tmp77[0];
            let flag3 = false;
            let num9 = 0;
            let tmp78 = tmp77;
            let tmp60 = tmp77;
            for (const item10211 of tmp77) {
              let tmp61 = item10211;
              let tmp62 = num9;
              num9 = num9 + item10211;
              let tmp63 = flag2;
              if (!flag2) {
                let tmp64 = item10211;
                let tmp65 = 1 === tmp61;
                if (tmp65) {
                  tmp65 = flag3;
                }
                if (tmp65) {
                  flag2 = true;
                }
                let tmp66 = item10211;
                if (0 === tmp61) {
                  flag3 = true;
                }
              }
              continue;
            }
            if (!flag2) {
              let diff1 = tmp38 - num9;
              let tmp68 = set;
              let num10 = 2;
              let tmp70 = items1;
              let tmp71 = items1;
              for (const item10237 of items1) {
                let cardCoords = self.cardCoords;
                let value = cardCoords.get(item10237);
                let tmp73 = value;
                if (null != value) {
                  let tmp74 = value;
                  tmp73.x = tmp73.x + tmp69;
                }
                continue;
              }
            }
          }
        }
        let obj4 = { width: null, height: null };
        obj4[0] = (() => {
          if (0 === self.items.length) {
            let sum = tmp.defaultTargetCoords.width * bound2 + (bound2 - 1) * gutter;
          } else {
            closure_17 = closure_17 + 1;
            sum = tmp.defaultTargetCoords.width * closure_17 + (closure_17 - 1) * gutter;
          }
          return sum;
        })();
        obj4[1] = (() => {
          if (0 === self.items.length) {
            return 0;
          } else {
            let diff = items.length - 1;
            let tmp4 = diff;
            if (0 <= diff) {
              tmp4 = diff;
              while (null != items[diff]) {
                tmp4 = diff;
                if (arr.indexOf(1) >= 0) {
                  break;
                } else {
                  diff = diff - 1;
                  tmp4 = diff;
                  if (0 > diff) {
                    break;
                  }
                }
              }
            }
            const sum = tmp4 + 1;
            return sum * self.defaultTargetCoords.height + gutter * (sum - 1);
          }
        })();
        self.contentDimensions = obj4;
        let flag4 = false;
        self.dirty = false;
        self.layoutKey = self.layoutKey + 1;
      }
      let tmp42 = items1;
      let obj5 = { windowWidth: null, windowHeight: null, safeAreaLeft: null, safeAreaRight: null };
      obj5[0] = windowWidth;
      obj5[1] = windowHeight;
      obj5[2] = safeAreaLeft;
      obj5[3] = safeAreaRight;
      let _Math4 = Math;
      let _Math5 = Math;
      let num4 = 4;
      let num5 = 1;
      bound2 = Math.max(Math.min((windowWidth - safeAreaLeft - safeAreaRight) / items1(obj5) | 0, 4), 1);
      let tmp44 = set;
      cardSize = set.roundToNearestPixel((windowWidth - safeAreaLeft - safeAreaRight - gutter * (bound2 - 1)) / bound2);
      tmp38 = bound2;
    }
    const tmp25 = set3;
  }
};
prototype["subscribeFromItem"] = function subscribeFromItem(arg0) {
  const self = this;
  closure_0 = arg0;
  this.layoutCallbacks.add(arg0);
  return () => {
    self.layoutCallbacks.delete(closure_0);
  };
};
prototype["subscribeToManager"] = function subscribeToManager(arg0) {
  const self = this;
  closure_0 = arg0;
  let managerSubscriptions = this.managerSubscriptions;
  managerSubscriptions.add(arg0);
  return () => {
    const managerSubscriptions = self.managerSubscriptions;
    managerSubscriptions.delete(closure_0);
  };
};
prototype["emitLayoutChanges"] = function emitLayoutChanges() {
  let self = this;
  self = this;
  if (tmp) {
    self.emitItemChanges = false;
    self(705).batchUpdates(() => {
      for (const item10006 of tmp) {
        let item10006Result = item10006();
        continue;
      }
      for (const item10015 of tmp3) {
        let item10015Result = item10015();
        continue;
      }
    });
    const obj = self(705);
  }
};
prototype["deferredLayoutChange"] = function deferredLayoutChange() {
  let self = this;
  self = this;
  if (tmp) {
    const _setTimeout = setTimeout;
    self.emitTimeout = setTimeout(() => {
      clearTimeout(self.emitTimeout);
      self.emitTimeout = -1;
      self.emitLayoutChanges();
    }, 1);
  }
};
prototype["checkDimensionsMismatch"] = function checkDimensionsMismatch(width, height) {
  const self = this;
  if (this.props.windowWidth !== width) {
    const obj = { staleWidth: null, staleHeight: null, wasDirty: null };
    obj[0] = self.props.windowWidth;
    obj[1] = self.props.windowHeight;
    obj[2] = self.dirty;
    let tmp2 = obj;
  } else {
    tmp2 = null;
  }
  return tmp2;
};

export default VoicePanelCardLayoutManager;
export const useCardLayoutCoordsSubscription = function useCardLayoutCoordsSubscription(id, layoutManager) {
  const _require = id;
  closure_1 = layoutManager;
  let obj = _require(sharedValue[7]);
  let cardCoords = layoutManager.getCardCoords(id);
  if (cardCoords == null) {
    cardCoords = closure_15;
  }
  obj = {};
  const merged = Object.assign(cardCoords);
  sharedValue = obj.useSharedValue(obj);
  const items = [id, layoutManager, sharedValue];
  const layoutEffect = React.useLayoutEffect(() => {
    let cardCoords = layoutManager.getCardCoords(closure_0);
    if (null != cardCoords) {
      layoutManager(sharedValue[8])(sharedValue, cardCoords);
    }
    return layoutManager.subscribeFromItem(function updateSharedValues() {
      cardCoords = cardCoords.getCardCoords(closure_0);
      if (null != cardCoords) {
        closure_1_1(closure_1_2[8])(closure_2, cardCoords);
      }
    });
  }, items);
  return sharedValue;
};
export const useTargetDimensionsSubscription = function useTargetDimensionsSubscription(participantId, layoutManager) {
  const _require = participantId;
  closure_1 = layoutManager;
  let obj = _require(sharedValue[7]);
  obj = {};
  const merged = Object.assign(layoutManager.getTargetDimensions(participantId));
  sharedValue = obj.useSharedValue(obj);
  const items = [participantId, layoutManager, sharedValue];
  const layoutEffect = React.useLayoutEffect(() => {
    let targetDimensions = layoutManager.getTargetDimensions(closure_0);
    layoutManager(sharedValue[8])(sharedValue, targetDimensions);
    return layoutManager.subscribeFromItem(function updateSharedValues() {
      targetDimensions = targetDimensions.getTargetDimensions(closure_0);
      closure_1_1(closure_1_2[8])(closure_2, targetDimensions);
    });
  }, items);
  return sharedValue;
};
export const useManagerSubscription = function useManagerSubscription(first2) {
  closure_0 = first2;
  [tmp2, importDefault] = callback(React.useState(first2.getLayoutKey()), 2);
  const layoutEffect = React.useLayoutEffect(() => closure_0.subscribeToManager(() => callback(layoutKey.getLayoutKey())));
  return tmp2;
};