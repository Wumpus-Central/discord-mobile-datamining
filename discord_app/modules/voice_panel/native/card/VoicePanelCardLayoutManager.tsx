// discord_app/modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx
import discord_common_shallowEqualDefault from "../../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import ReactBatchUpdates from "../../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import updateSharedValueIfChangedDefault from "../../../reanimated/utils/updateSharedValueIfChanged.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";

require = fn;
function getTargetCardSize(windowWidth) {
  windowWidth = windowWidth.windowWidth;
  let num = 3;
  ({ safeAreaLeft, safeAreaRight } = windowWidth);
  if (windowWidth > windowWidth.windowHeight) {
    num = 4;
  }
  return Math.max(React6, (windowWidth - safeAreaLeft - safeAreaRight - gutter * (num - 1)) / num);
}
const PixelRatio = fn(17).PixelRatio;
const VoicePanelConstants = fn(12273);
const VoicePanelCardItemType = VoicePanelConstants.VoicePanelCardItemType;
({
  BASE_TARGET_CARD_SIZE: closure_8,
  VoicePanelCTACardDimensionKeys: closure_9,
  VoicePanelCTACardDimensions: c10,
  VOICE_PANEL_CHUNK_DIVISOR: closure_11,
} = VoicePanelConstants);
const VoicePanelCardConstants = fn(12276);
({ EDGE_GUTTER: closure_12, CALL_TILE_GUTTER: map1 } = VoicePanelCardConstants);
const ParticipantTypes = fn(4581).ParticipantTypes;
let closure_15 = {
  id: "invalid",
  type: VoicePanelCardItemType.PARTICIPANT,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  zIndex: 0,
};
let set = new Set();
let closure_17 = { enlargeSquare: false, fillAspectRatio: false };
let obj = { match: new Set(["1,camera", "2,camera", "2,camera,camera"]), layouts: null, global: true };
let items = [{ enlargeSquare: true, fillAspectRatio: false }];
obj.layouts = items;
let items1 = [obj];
obj = { match: null, layouts: null };
let set1 = new Set(["1,camera", "2,camera", "2,camera,camera"]);
obj.match = new Set([
  "1,stream",
  "2,stream",
  "3,stream",
  "2,stream,camera",
  "3,stream,camera",
  "3,stream,camera,camera",
  "3,camera",
  "3,camera,stream",
]);
let items2 = [
  { enlargeSquare: true, fillAspectRatio: true },
  { enlargeSquare: false, fillAspectRatio: false },
  { enlargeSquare: false, fillAspectRatio: false },
];
obj.layouts = items2;
items1[1] = obj;
let size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx");
class VoicePanelCardLayoutManager {
  constructor(arg0) {
    merged = Object.assign({
      dirty: true,
      targetDimensions: null,
      cardCoords: null,
      chunkedCoords: null,
      contentDimensions: null,
      layoutCallbacks: null,
      managerSubscriptions: null,
      items: null,
      emitItemChanges: true,
      mounted: false,
      layoutKey: 0,
      emitTimeout: -1,
      props: null,
      defaultTargetCoords: null,
    });
    map = new Map();
    merged[1] = map;
    map1 = new Map();
    merged[2] = map1;
    map2 = new Map();
    merged[3] = map2;
    merged[4] = { width: 0, height: 0 };
    set = new Set();
    merged[5] = set;
    set1 = new Set();
    merged[6] = set1;
    merged[7] = [];
    merged[12] = {
      windowWidth: 0,
      windowHeight: 0,
      chunkSize: 0,
      safeAreaLeft: 0,
      safeAreaRight: 0,
      safeAreaTop: 0,
      safeAreaBottom: 0,
      gutter: 0,
      controlBarSize: 0,
    };
    merged[13] = { width: 0, height: 0 };
    merged.channelId = global;
    return merged;
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
  const obj = {
    windowHeight,
    windowWidth: windowHeight.windowWidth,
    chunkSize: windowHeight / closure_1_11,
    safeAreaLeft: Math.max(windowHeight.safeAreaLeft, closure_1_12),
    safeAreaRight: Math.max(safeAreaRight, closure_1_12),
    safeAreaBottom: Math.max(safeAreaBottom, closure_1_12),
    safeAreaTop,
    gutter,
    controlBarSize,
  };
  ({ safeAreaRight, safeAreaTop, safeAreaBottom, controlBarSize } = windowHeight);
  if (!discord_common_shallowEqualDefault(obj, this.props)) {
    self.props = obj;
    self.setDirty(true);
  }
  const items = self.items;
  let tmp2 = arr.length === items.length;
  if (tmp2) {
    tmp2 = !arr.some((item, index) => items[index] !== item);
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
  value = chunkedCoords.get(arg0);
  if (value == null) {
    value = set;
  }
  return value;
};
prototype["getContentDimensions"] = function getContentDimensions() {
  const cardsLayout = this.computeCardsLayout();
  return this.contentDimensions;
};
prototype["getCardCoords"] = function getCardCoords(id) {
  const cardsLayout = this.computeCardsLayout();
  const cardCoords = this.cardCoords;
  return cardCoords.get(id);
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
    defaultTargetCoords = closure_1_10[id];
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
  let size = this.getTargetDimensions(stateFromStores);
  if (!tmp) {
    const targetDimensions = self.targetDimensions;
    size = { width, height };
    const result = targetDimensions.set(stateFromStores, size);
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
  const self = this;
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
      if (
        (function _loop(item10061) {
          let obj = self;
          const participant = ChannelRTCStore.getParticipant(self.channelId, item10061.id);
          if (item10061.type === VoicePanelCardItemType.CTA) {
            const targetDimensions = obj.getTargetDimensions(item10061.id);
          } else if (null != participant) {
            if (participant.type === tmp4.USER) {
              let defaultTargetCoords = obj.defaultTargetCoords;
            } else {
              defaultTargetCoords = obj.getTargetDimensions(item10061.id);
            }
            tmp4 = ParticipantTypes;
          }
          if (null != targetDimensions) {
            if (null != participant) {
              obj = { type: "custom", item: item10061, forceSquare: participant.type === ParticipantTypes.USER };
              const type = participant.type;
              if (ParticipantTypes.ACTIVITY === type) {
                set.add(obj);
              } else if (tmp17.STREAM === type) {
                set1.add(obj);
              } else if (tmp17.USER === type) {
                set2.add(obj);
              }
              let str = "stream";
              if (participant.type !== ParticipantTypes.STREAM) {
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
        })(item10061)
      ) {
        obj.return();
        break;
      }
      let found = null;
      if (0 === set.size) {
        found = items1.find((item) => {
          const match = item.match;
          return match.has(closure_9);
        });
      }
      let _Math = Math;
      let tmp32 = self;
      let tmp33 = windowWidth;
      let rect = { top: safeAreaTop, left: safeAreaLeft, right: safeAreaRight, bottom: safeAreaBottom };
      let bound = Math.max(
        120,
        windowHeight - self(windowWidth[11])(rect, found).height - found - controlBarSize - safeAreaBottom,
      );
      let _Math2 = Math;
      if (null == found) {
        if (set.size <= 0) {
          let obj = { windowWidth, windowHeight, safeAreaLeft, safeAreaRight };
          let tmp76 = items1(obj);
          if (self.items.length < 7) {
            if (0 !== self.items.length) {
              obj = { cardCount: self.items.length, gutterSize: gutter, availableWidth: tmp36, availableHeight: bound };
              let tmp37 = tmp32(tmp33[12])(obj);
              bound2 = tmp37.columns;
              let cardSize = tmp37.cardSize;
            }
          }
          let _Math3 = Math;
          let bound1 = Math.max(((windowWidth - safeAreaLeft - safeAreaRight) / tmp76) | 0, 1);
          bound2 = bound1;
          cardSize = set.roundToNearestPixel(
            (windowWidth - safeAreaLeft - safeAreaRight - obj1 * (bound1 - 1)) / bound1,
          );
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
        let size = { width: diff, height: null };
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
        size.height = tmp49;
        if (!tmp32(tmp33[9])(size, self.defaultTargetCoords)) {
          self.defaultTargetCoords = size;
        }
        let obj1 = {
          cardWidth: self.defaultTargetCoords.width,
          cardHeight: self.defaultTargetCoords.height,
          gutter,
          totalItems: self.items.length,
          windowWidth,
        };
        let _Array = Array;
        let tmp50 = new.target;
        let tmp51 = new.target;
        let array = new Array(tmp38);
        let items = [array.fill(0)];
        c15 = -1;
        bound1 = -1;
        closure_17 = -1;
        items1 = 0;
        items1 = [];
        function placeItem(arg0, arg1, arg2, arg3) {}
        closure_0 = 1 === self.items.length;
        let items2 = [set, set1, set2, set3];
        for (const item10196 of items2) {
          function _loop2(type) {
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
                tmp6 = closure_17;
              }
              let str2 = "square";
              if (!type.forceSquare) {
                let size = self.getTargetDimensions(type.item.id);
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
              let obj = { item: type.item, dimensions: null };
              if ("portrait" === str2) {
                if (!tmp6.fillAspectRatio) {
                  size = { width: 1, height: 2 };
                }
                if (tmp14) {
                  let size1 = { width: 2, height: 2 };
                } else {
                  let num5 = 0;
                  if (tmp15) {
                    num5 = 1;
                  }
                  size1 = { width: 2, height: 3 + num5 };
                }
              } else {
                if ("landscape" === str2) {
                  if (tmp6.fillAspectRatio) {
                    if (tmp14) {
                      let num3 = 0;
                      if (tmp15) {
                        num3 = 1;
                      }
                      let size2 = { width: 3 + num3, height: 2 };
                      let size3 = size2;
                    } else {
                      size3 = { width: 2, height: 2 };
                    }
                  } else {
                    let size4 = { width: 2, height: 1 };
                  }
                } else if ("square" === str2) {
                  size4 = tmp6.enlargeSquare ? { width: 2, height: 2 } : { width: 1, height: 1 };
                }
                obj.dimensions = size4;
              }
            } else {
              obj = { item: type, dimensions: null };
              let tmp4 = closure_11;
              if (closure_11 == null) {
                tmp4 = closure_17;
              }
              obj.dimensions = tmp4.enlargeSquare ? { width: 2, height: 2 } : { width: 1, height: 1 };
              ({ item, dimensions } = obj);
              let num7 = dimensions.height;
              const id = item.id;
              if (typeof placeItem === "function") {
                let arr = items;
                const _Math = Math;
                const bound = Math.min(tmp19, bound2);
                if (1 === bound2) {
                  num7 = 1;
                }
                let sum = c15 + 1;
                let num11 = -1;
                let num12 = -1;
                while (true) {
                  let arr1 = arr[sum];
                  if (null == arr1) {
                    let _Array = Array;
                    let tmp33 = new.target;
                    let tmp34 = new.target;
                    let array = new Array(tmp23);
                    let fillResult = array.fill(0);
                    arr = arr.push(fillResult);
                    arr1 = fillResult;
                  }
                  let num13 = 0;
                  let tmp39 = num11;
                  let tmp40 = num12;
                  if (0 < arr1.length) {
                    while (true) {
                      if (1 === arr1[num13]) {
                        num13 = num13 + 1;
                        tmp39 = num11;
                        tmp40 = num12;
                        if (num13 >= arr1.length) {
                          break;
                        }
                      } else {
                        tmp39 = num13;
                        tmp40 = sum;
                        if (num13 + (bound - 1) < arr1.length) {
                          break;
                        }
                      }
                      break;
                    }
                  }
                  if (-1 !== tmp40) {
                    if (-1 !== tmp39) {
                      let sum2 = tmp40;
                      let tmp44 = tmp39;
                      let tmp45 = tmp40;
                      let tmp46 = tmp39;
                      let tmp47 = tmp40;
                      if (tmp40 <= tmp40 + (num7 - 1)) {
                        while (true) {
                          let tmp48 = arr[sum2];
                          if (null == tmp48) {
                            let _Array2 = Array;
                            let tmp52 = new.target;
                            let tmp53 = new.target;
                            array = new Array(tmp23);
                            let fillResult1 = array.fill(0);
                            arr = arr.push(fillResult1);
                            tmp48 = fillResult1;
                          }
                          let sum1 = tmp44;
                          let num16 = tmp44;
                          let num17 = tmp45;
                          if (tmp44 <= tmp44 + (bound - 1)) {
                            num16 = -1;
                            num17 = -1;
                            while (0 === tmp48[sum1]) {
                              sum1 = sum1 + 1;
                              num16 = tmp44;
                              num17 = tmp45;
                              if (sum1 > tmp44 + (bound - 1)) {
                                break;
                              }
                            }
                          }
                          tmp46 = num16;
                          tmp47 = num17;
                          if (-1 === num16) {
                            break;
                          } else {
                            tmp46 = num16;
                            tmp47 = num17;
                            if (-1 === num17) {
                              break;
                            } else {
                              sum2 = sum2 + 1;
                              tmp44 = num16;
                              tmp45 = num17;
                              tmp46 = num16;
                              tmp47 = num17;
                              if (sum2 > num17 + (num7 - 1)) {
                                break;
                              }
                            }
                          }
                        }
                      }
                      if (-1 !== tmp47) {
                        if (-1 !== tmp46) {
                          let size5 = { startRow: tmp47, startCol: tmp46, width: bound, height: num7 };
                          let num14 = tmp46;
                          let num15 = tmp47;
                          let sum3 = sum;
                          size2 = size5;
                          num11 = num14;
                          num12 = num15;
                          sum = sum3;
                          let tmp28 = size2;
                          if (null != size2) {
                            break;
                          }
                        }
                      }
                      sum3 = sum + 1;
                      num14 = tmp46;
                      num15 = tmp47;
                      size2 = tmp28;
                    }
                  }
                  sum3 = sum + 1;
                  num14 = -1;
                  num15 = -1;
                  size2 = tmp28;
                }
                let tmp67 = c15;
                ({ startRow, startCol, width, height } = size2);
                let sum6 = startRow;
                if (startRow < startRow + height) {
                  do {
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
                let sum7 = tmp67 + 1;
                while (null != arr[sum7]) {
                  if (-1 !== arr3.indexOf(0)) {
                    break;
                  } else {
                    sum7 = sum7 + 1;
                    tmp67 = tmp65;
                    continue;
                  }
                }
                c15 = tmp67;
                const _Math2 = Math;
                const _Math3 = Math;
                closure_17 = Math.min(Math.max(closure_17, size2.startCol + (size2.width - 1)), tmp23);
                const size6 = {
                  id,
                  type: tmp21,
                  x: size2.startCol * (obj1.gutter + obj1.cardWidth),
                  y: size2.startRow * (obj1.gutter + obj1.cardHeight),
                  width: obj1.cardWidth * size2.width + (size2.width - 1) * obj1.gutter,
                  height: obj1.cardHeight * size2.height + (size2.height - 1) * obj1.gutter,
                  zIndex: obj1.totalItems - closure_18,
                };
                const y = size6.y;
                let tmp71 = self;
                const chunkSize = self.props.chunkSize;
                items = [(y / chunkSize) | 0, ((y + size6.height) / chunkSize) | 0];
                let first = items[0];
                if (first <= items[1]) {
                  do {
                    let tmp73 = self;
                    let chunkedCoords = self.chunkedCoords;
                    value = chunkedCoords.get(first);
                    if (null == value) {
                      let _Set = Set;
                      let tmp75 = new.target;
                      let tmp76 = new.target;
                      set = new Set();
                      let chunkedCoords2 = tmp73.chunkedCoords;
                      let result1 = chunkedCoords2.set(first, set);
                      value = set;
                    }
                    let addResult = value.add(size6);
                    first = first + 1;
                    tmp71 = tmp73;
                  } while (first <= items[1]);
                }
                const cardCoords = tmp71.cardCoords;
                const result2 = cardCoords.set(id, size6);
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
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          }
          for (const item10202 of item10196) {
            let _loop2Result = _loop2(item10202);
            continue;
          }
          continue;
        }
        if (c15 !== bound1) {
          if (-1 !== c15) {
            let tmp77 = items[bound1];
            let flag2 = 0 === tmp77[0];
            let flag3 = false;
            let num9 = 0;
            for (const item10211 of tmp77) {
              let tmp61 = item10211;
              num9 = num9 + item10211;
              if (!flag2) {
                let tmp65 = 1 === tmp61;
                if (tmp65) {
                  tmp65 = flag3;
                }
                if (tmp65) {
                  flag2 = true;
                }
                if (0 === tmp61) {
                  flag3 = true;
                }
              }
              continue;
            }
            if (!flag2) {
              let diff1 = tmp38 - num9;
              for (const item10237 of items1) {
                let cardCoords = self.cardCoords;
                value = cardCoords.get(item10237);
                let tmp73 = value;
                if (null != value) {
                  tmp73.x = tmp73.x + tmp69;
                }
                continue;
              }
            }
          }
        }
        let size1 = {
          width: (() => {
            if (0 === self.items.length) {
              let sum = tmp.defaultTargetCoords.width * bound2 + (bound2 - 1) * gutter;
            } else {
              closure_17 = closure_17 + 1;
              sum = tmp.defaultTargetCoords.width * closure_17 + (closure_17 - 1) * gutter;
            }
            return sum;
          })(),
          height: (() => {
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
          })(),
        };
        self.contentDimensions = size1;
        let flag4 = false;
        self.dirty = false;
        self.layoutKey = self.layoutKey + 1;
      }
      let obj2 = { windowWidth, windowHeight, safeAreaLeft, safeAreaRight };
      let _Math4 = Math;
      let _Math5 = Math;
      bound2 = Math.max(Math.min(((windowWidth - safeAreaLeft - safeAreaRight) / items1(obj2)) | 0, 4), 1);
      cardSize = set.roundToNearestPixel((windowWidth - safeAreaLeft - safeAreaRight - gutter * (bound2 - 1)) / bound2);
      tmp38 = bound2;
    }
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
  const self = this;
  if (tmp) {
    self.emitItemChanges = false;
    ReactBatchUpdates.batchUpdates(() => {
      for (const item10006 of tmp) {
        let item10006Result = item10006();
        continue;
      }
      for (const item10015 of tmp3) {
        let item10015Result = item10015();
        continue;
      }
    });
  }
};
prototype["deferredLayoutChange"] = function deferredLayoutChange() {
  const self = this;
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
    const obj = { staleWidth: self.props.windowWidth, staleHeight: self.props.windowHeight, wasDirty: self.dirty };
    let tmp2 = obj;
  } else {
    tmp2 = null;
  }
  return tmp2;
};

export default VoicePanelCardLayoutManager;
export const useCardLayoutCoordsSubscription = function useCardLayoutCoordsSubscription(id, layoutManager) {
  _require = id;
  let obj = require("ReanimatedRexport");
  let cardCoords = layoutManager.getCardCoords(id);
  if (cardCoords == null) {
    cardCoords = closure_15;
  }
  obj = {};
  const merged = Object.assign(cardCoords);
  sharedValue = obj.useSharedValue(obj);
  const items = [id, layoutManager, sharedValue];
  const layoutEffect = noop.useLayoutEffect(() => {
    let cardCoords = layoutManager.getCardCoords(closure_0);
    if (null != cardCoords) {
      updateSharedValueIfChangedDefault(sharedValue, cardCoords);
    }
    return layoutManager.subscribeFromItem(function updateSharedValues() {
      cardCoords = cardCoords.getCardCoords(id);
      if (null != cardCoords) {
        cardCoords(sharedValue[8])(closure_1_2, cardCoords);
      }
    });
  }, items);
  return sharedValue;
};
export const useTargetDimensionsSubscription = function useTargetDimensionsSubscription(participantId, layoutManager) {
  _require = participantId;
  require("ReanimatedRexport");
  const obj = {};
  const merged = Object.assign(layoutManager.getTargetDimensions(participantId));
  sharedValue = obj.useSharedValue(obj);
  const items = [participantId, layoutManager, sharedValue];
  const layoutEffect = noop.useLayoutEffect(() => {
    let targetDimensions = layoutManager.getTargetDimensions(closure_0);
    updateSharedValueIfChangedDefault(sharedValue, targetDimensions);
    return layoutManager.subscribeFromItem(function updateSharedValues() {
      targetDimensions = targetDimensions.getTargetDimensions(participantId);
      targetDimensions(sharedValue[8])(closure_1_2, targetDimensions);
    });
  }, items);
  return sharedValue;
};
export const useManagerSubscription = function useManagerSubscription(first2) {
  closure_0 = first2;
  [tmp2, importDefault] = _slicedToArray(noop.useState(first2.getLayoutKey()), 2);
  const layoutEffect = noop.useLayoutEffect(() =>
    layoutKey.subscribeToManager(() => closure_1_1(layoutKey.getLayoutKey())),
  );
  return tmp2;
};
