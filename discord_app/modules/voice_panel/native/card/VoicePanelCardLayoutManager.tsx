// === Module 11918: VoicePanelCardLayoutManager ===

// Module 11918 (VoicePanelCardLayoutManager)
import react_native from "react-native" /* 17 */;
import shallowEqualDefault from "shallowEqual" /* 568 */;
import react2 from "react" /* 576 */;
import react_native2 from "react-native" /* 1259 */;
import CallConstants from "CallConstants" /* 4917 */;
import updateSharedValueIfChangedDefault from "updateSharedValueIfChanged" /* 9787 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4912 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11916 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11919 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_18, map, set3;

let c10;
let c9;
let closure_12;
let items;
let items2;
let map1;
let metroImportAll;
let set1;
let set2;
let unpackModuleId;
function getTargetCardSize(windowWidth) {
  let safeAreaLeft;
  let safeAreaRight;
  windowWidth = windowWidth.windowWidth;
  let num = 3;
  ({ safeAreaLeft, safeAreaRight } = windowWidth);
  if (windowWidth > windowWidth.windowHeight) {
    num = 4;
  }
  return Math.max(metroImportAll, (windowWidth - safeAreaLeft - safeAreaRight - map1 * (num - 1)) / num);
}
const PixelRatio = react_native.PixelRatio;
const VoicePanelCardItemType = VoicePanelConstants.VoicePanelCardItemType;
({ BASE_TARGET_CARD_SIZE: metroImportAll, VoicePanelCTACardDimensionKeys: c9, VoicePanelCTACardDimensions: c10, VOICE_PANEL_CHUNK_DIVISOR: unpackModuleId } = VoicePanelConstants);
({ EDGE_GUTTER: closure_12, CALL_TILE_GUTTER: map1 } = VoicePanelCardConstants);
const ParticipantTypes = CallConstants.ParticipantTypes;
let closure_15 = { id: "invalid", type: VoicePanelCardItemType.PARTICIPANT, x: 0, y: 0, width: 0, height: 0, zIndex: 0 };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, getCardCoords) => {
  let closure_0;
  let sharedValue;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(5);
  const useSharedValue = require("ReanimatedRexport").useSharedValue;
  const tmp2 = require("ReanimatedRexport");
  let cardCoords = getCardCoords.getCardCoords(arg0);
  if (cardCoords == null) {
    cardCoords = closure_15;
  }
  const obj2 = {};
  const merged = Object.assign(cardCoords);
  sharedValue = useSharedValue(obj2);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === arg0) {
      let tmp6;
      let tmp7;
      if (cResult[2] === getCardCoords) {
        tmp6 = cResult[3];
        tmp7 = cResult[4];
      }
      const layoutEffect = react.useLayoutEffect(tmp6, tmp7);
      return sharedValue;
    }
  }
  const fn = function o() {
    let cardCoords = getCardCoords.getCardCoords(closure_0);
    if (null != cardCoords) {
      updateSharedValueIfChangedDefault(sharedValue, cardCoords);
    }
    return getCardCoords.subscribeFromItem(function updateSharedValues() {
      cardCoords = cardCoords.getCardCoords(closure_1_0);
      if (null != cardCoords) {
        cardCoords(sharedValue[10])(closure_1_2, cardCoords);
      }
    });
  };
  const items = [arg0, getCardCoords, sharedValue];
  cResult[0] = sharedValue;
  cResult[1] = arg0;
  cResult[2] = getCardCoords;
  cResult[3] = fn;
  cResult[4] = items;
  tmp7 = items;
  tmp6 = fn;
}) : ((arg0, getCardCoords) => {
  let closure_0;
  let sharedValue;
  _require = arg0;
  const useSharedValue = require("ReanimatedRexport").useSharedValue;
  require("ReanimatedRexport");
  let cardCoords = getCardCoords.getCardCoords(arg0);
  if (cardCoords == null) {
    cardCoords = closure_15;
  }
  const obj = {};
  const merged = Object.assign(cardCoords);
  sharedValue = useSharedValue(obj);
  const items = [arg0, getCardCoords, sharedValue];
  const layoutEffect = react.useLayoutEffect(() => {
    let cardCoords = getCardCoords.getCardCoords(closure_0);
    if (null != cardCoords) {
      updateSharedValueIfChangedDefault(sharedValue, cardCoords);
    }
    return getCardCoords.subscribeFromItem(function updateSharedValues() {
      cardCoords = cardCoords.getCardCoords(closure_1_0);
      if (null != cardCoords) {
        cardCoords(sharedValue[10])(closure_1_2, cardCoords);
      }
    });
  }, items);
  return sharedValue;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, getTargetDimensions) => {
  let sharedValue;
  _require = id;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp2 = require("ReanimatedRexport");
  const useSharedValue = tmp2.useSharedValue;
  const obj2 = {};
  const merged = Object.assign(getTargetDimensions.getTargetDimensions(id));
  sharedValue = useSharedValue(obj2);
  if (cResult[0] === id) {
    if (cResult[1] === getTargetDimensions) {
      let tmp5;
      let tmp6;
      if (cResult[2] === sharedValue) {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      const layoutEffect = react.useLayoutEffect(tmp5, tmp6);
      return sharedValue;
    }
  }
  const fn = function o() {
    let targetDimensions = getTargetDimensions.getTargetDimensions(id);
    updateSharedValueIfChangedDefault(sharedValue, targetDimensions);
    return getTargetDimensions.subscribeFromItem(function updateSharedValues() {
      targetDimensions = targetDimensions.getTargetDimensions(id);
      targetDimensions(sharedValue[10])(closure_1_2, targetDimensions);
    });
  };
  const items = [id, getTargetDimensions, sharedValue];
  cResult[0] = id;
  cResult[1] = getTargetDimensions;
  cResult[2] = sharedValue;
  cResult[3] = fn;
  cResult[4] = items;
  tmp6 = items;
  tmp5 = fn;
}) : ((id, getTargetDimensions) => {
  let sharedValue;
  _require = id;
  const useSharedValue = require("ReanimatedRexport").useSharedValue;
  const obj = {};
  require("ReanimatedRexport");
  const merged = Object.assign(getTargetDimensions.getTargetDimensions(id));
  sharedValue = useSharedValue(obj);
  const items = [id, getTargetDimensions, sharedValue];
  const layoutEffect = react.useLayoutEffect(() => {
    let targetDimensions = getTargetDimensions.getTargetDimensions(id);
    updateSharedValueIfChangedDefault(sharedValue, targetDimensions);
    return getTargetDimensions.subscribeFromItem(function updateSharedValues() {
      targetDimensions = targetDimensions.getTargetDimensions(id);
      targetDimensions(sharedValue[10])(closure_1_2, targetDimensions);
    });
  }, items);
  return sharedValue;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((getLayoutKey) => {
  let closure_129_1;
  let tmp2;
  let tmp5;
  let tmp6;
  let closure_0 = getLayoutKey;
  let obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] !== getLayoutKey) {
    const layoutKey = getLayoutKey.getLayoutKey();
    cResult[0] = getLayoutKey;
    cResult[1] = layoutKey;
    tmp2 = layoutKey;
  } else {
    tmp2 = cResult[1];
  }
  const tmp4 = _slicedToArray(react.useState(tmp2), 2);
  [tmp5, closure_129_1] = tmp4;
  if (cResult[2] !== getLayoutKey) {
    const fn = function h() {
      return layoutKey.subscribeToManager(() => closure_1_1(layoutKey.getLayoutKey()));
    };
    cResult[2] = getLayoutKey;
    cResult[3] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[3];
  }
  const layoutEffect = react.useLayoutEffect(tmp6);
  return tmp5;
}) : ((getLayoutKey) => {
  let closure_129_1;
  let tmp2;
  let closure_0 = getLayoutKey;
  [tmp2, closure_129_1] = react.useState(getLayoutKey.getLayoutKey());
  _slicedToArray(react.useState(getLayoutKey.getLayoutKey()), 2);
  const layoutEffect = react.useLayoutEffect(() => layoutKey.subscribeToManager(() => closure_1_1(layoutKey.getLayoutKey())));
  return tmp2;
});
let set = new Set();
let closure_17 = { enlargeSquare: false, fillAspectRatio: false };
let obj = { match: set1, layouts: items, global: true };
set1 = new Set(["1,camera", "2,camera", "2,camera,camera"]);
items = [{ enlargeSquare: true, fillAspectRatio: false }];
let items1 = [obj, ];
let obj2 = { match: set2, layouts: items2 };
set2 = new Set(["1,stream", "2,stream", "3,stream", "2,stream,camera", "3,stream,camera", "3,stream,camera,camera", "3,camera", "3,camera,stream"]);
items2 = [{ enlargeSquare: true, fillAspectRatio: true }, { enlargeSquare: false, fillAspectRatio: false }, { enlargeSquare: false, fillAspectRatio: false }];
items1[1] = obj2;
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCardLayoutManager.tsx");
class VoicePanelCardLayoutManager {
  constructor(channelId) {
    const merged = Object.assign({ dirty: true, targetDimensions: null, cardCoords: null, chunkedCoords: null, contentDimensions: null, layoutCallbacks: null, managerSubscriptions: null, items: null, emitItemChanges: true, mounted: false, layoutKey: 0, emitTimeout: -1, props: null, defaultTargetCoords: null });
    merged[1] = new Map();
    new Map();
    merged[2] = new Map();
    new Map();
    merged[3] = new Map();
    merged[4] = { width: 0, height: 0 };
    new Map();
    merged[5] = new Set();
    new Set();
    merged[6] = new Set();
    merged[7] = [];
    merged[12] = { windowWidth: 0, windowHeight: 0, chunkSize: 0, safeAreaLeft: 0, safeAreaRight: 0, safeAreaTop: 0, safeAreaBottom: 0, gutter: 0, controlBarSize: 0 };
    merged[13] = { width: 0, height: 0 };
    merged.channelId = channelId;
    new Set();
    return merged;
  }
  setDirty(arg0) {
    const self = this;
    const tmp = arg0 && !self.dirty;
    if (tmp) {
      self.dirty = true;
      self.emitItemChanges = true;
    }
  }
  handleLayoutEffect() {
    this.mounted = true;
    this.emitLayoutChanges();
  }
  cleanUp() {
    this.mounted = false;
  }
  updateState(arr, windowHeight) {
    let controlBarSize;
    let safeAreaBottom;
    let safeAreaRight;
    let safeAreaTop;
    const self = this;
    windowHeight = windowHeight.windowHeight;
    const obj = { windowHeight, windowWidth: windowHeight.windowWidth, chunkSize: windowHeight / unpackModuleId, safeAreaLeft: Math.max(windowHeight.safeAreaLeft, closure_12), safeAreaRight: Math.max(safeAreaRight, closure_12), safeAreaBottom: Math.max(safeAreaBottom, closure_12), safeAreaTop, gutter: map1, controlBarSize };
    ({ safeAreaRight, safeAreaTop, safeAreaBottom, controlBarSize } = windowHeight);
    if (!shallowEqualDefault(obj, this.props)) {
      self.props = obj;
      self.setDirty(true);
    }
    const items = self.items;
    let tmp2 = arr.length === items.length;
    const setDirty = self.setDirty;
    if (tmp2) {
      tmp2 = !arr.some((item, index) => items[index] !== item);
    }
    setDirty(!tmp2);
    self.items = arr;
    return self.getContentDimensions();
  }
  getLayoutKey() {
    return this.layoutKey;
  }
  getChunk(arg0) {
    const chunkedCoords = this.chunkedCoords;
    let value = chunkedCoords.get(arg0);
    if (value == null) {
      value = set;
    }
    return value;
  }
  getContentDimensions() {
    const cardsLayout = this.computeCardsLayout();
    return this.contentDimensions;
  }
  getCardCoords(arg0) {
    const cardsLayout = this.computeCardsLayout();
    const cardCoords = this.cardCoords;
    return cardCoords.get(arg0);
  }
  getCardCoordsMap() {
    const cardsLayout = this.computeCardsLayout();
    return this.cardCoords;
  }
  getDefaultTargetDimensions() {
    return this.defaultTargetCoords;
  }
  getTargetDimensions(id) {
    let defaultTargetCoords;
    const self = this;
    if (null == id) {
      defaultTargetCoords = self.defaultTargetCoords;
    } else if (set.has(id)) {
      defaultTargetCoords = authStore[id];
    } else {
      const targetDimensions = self.targetDimensions;
      defaultTargetCoords = targetDimensions.get(id);
      if (defaultTargetCoords == null) {
        defaultTargetCoords = self.defaultTargetCoords;
      }
    }
    return defaultTargetCoords;
  }
  setTargetDimensions(stateFromStores1, width, height) {
    const self = this;
    size = this.getTargetDimensions(stateFromStores1);
    const tmp = size.width === width && size.height === height;
    if (!tmp) {
      const targetDimensions = self.targetDimensions;
      const size1 = { width, height };
      const result = targetDimensions.set(stateFromStores1, size1);
      self.setDirty(true);
      self.deferredLayoutChange();
    }
  }
  resetTargetDimensions(arg0) {
    const self = this;
    const targetDimensions = this.targetDimensions;
    if (targetDimensions.has(arg0)) {
      const targetDimensions2 = self.targetDimensions;
      targetDimensions2.delete(arg0);
      self.setDirty(true);
      self.deferredLayoutChange();
    }
  }
  setTargetAspectRatio(applicationId, landscape) {
    if ("portrait" === landscape) {
      size = { width: 1, height: 2 };
    } else if ("landscape" === landscape) {
      size = { width: 2, height: 1 };
    } else if ("square" === landscape) {
      size = { width: 1, height: 1 };
    }
    const self = this;
    const size2 = this.getTargetDimensions(applicationId);
    const tmp = size2.width === size.width && size2.height === size.height;
    if (!tmp) {
      const targetDimensions = self.targetDimensions;
      const result = targetDimensions.set(applicationId, size);
      self.setDirty(true);
      self.deferredLayoutChange();
    }
  }
  computeCardsLayout() {
    let controlBarSize;
    let safeAreaBottom;
    let safeAreaLeft;
    let safeAreaRight;
    let safeAreaTop;
    function _loop(item10061) {
      let targetDimensions;
      const participant = ChannelRTCStore.getParticipant(self.channelId, item10061.id);
      if (item10061.type === VoicePanelCardItemType.CTA) {
        targetDimensions = self.getTargetDimensions(item10061.id);
      } else if (null != participant) {
        if (participant.type !== ParticipantTypes.USER) {
          let defaultTargetCoords;
          if (participant.type === tmp4.USER) {
            defaultTargetCoords = self.defaultTargetCoords;
          } else {
            defaultTargetCoords = self.getTargetDimensions(item10061.id);
          }
          targetDimensions = defaultTargetCoords;
        }
      }
      if (null != targetDimensions) {
        if (null != participant) {
          const obj2 = { type: "custom", item: item10061, forceSquare: participant.type === ParticipantTypes.USER };
          const type = participant.type;
          if (ParticipantTypes.ACTIVITY === type) {
            set.add(obj2);
          } else if (ParticipantTypes.STREAM === type) {
            set1.add(obj2);
          } else if (ParticipantTypes.USER === type) {
            set2.add(obj2);
          }
          let str = "stream";
          const tmp13 = closure_9;
          if (participant.type !== ParticipantTypes.STREAM) {
            let str2 = "activity";
            if (participant.type === ParticipantTypes.USER) {
              str2 = "camera";
            }
            str = str2;
          }
          closure_9 = `${tmp13},${str}`;
          set3.delete(item10061);
        }
      }
      return 1;
    }
    let self = this;
    if (this.dirty) {
      const _Map = Map;
      let self2 = this;
      let self3 = this;
      map = new Map();
      self.cardCoords = map;
      const _Map2 = Map;
      let self4 = this;
      let self5 = this;
      map1 = new Map();
      self.chunkedCoords = map1;
      const props = self.props;
      const windowWidth = props.windowWidth;
      const windowHeight = props.windowHeight;
      ({ safeAreaLeft, safeAreaRight, safeAreaBottom, gutter } = props);
      let _Set = Set;
      let self6 = this;
      const self7 = this;
      ({ safeAreaTop, controlBarSize } = props);
      set = new Set();
      const _Set2 = Set;
      const self8 = this;
      const self9 = this;
      const set1 = new Set();
      const _Set3 = Set;
      const self10 = this;
      const self11 = this;
      set2 = new Set();
      const _Set4 = Set;
      const self12 = this;
      const self13 = this;
      set3 = new Set(self.items);
      const _HermesInternal = HermesInternal;
      let str = "";
      let tmp13 = set3;
      let closure_9 = "" + self.items.length;
      let bound2 = 0;
      for (const item10061 of set3) {
        if (_loop(item10061)) {
          obj.return();
          break;
        }
        let tmp17 = null;
        let found = null;
        if (0 === set.size) {
          let tmp19 = items1;
          found = items1.find((item) => {
            const match = item.match;
            return match.has(closure_9);
          });
        }
        let _Math = Math;
        let tmp20 = self;
        let tmp21 = windowWidth;
        let rect = { top: safeAreaTop, left: safeAreaLeft, right: safeAreaRight, bottom: safeAreaBottom };
        let bound = Math.max(120, windowHeight - self(windowWidth[13])(rect, found).height - found - controlBarSize - safeAreaBottom);
        let _Math2 = Math;
        if (null == found) {
          let cardSize;
          let bound1;
          let tmp26;
          if (set.size <= 0) {
            let obj2 = { windowWidth, windowHeight, safeAreaLeft, safeAreaRight };
            let num11 = 7;
            let tmp62 = items1(obj2);
            if (self.items.length < 7) {
              if (0 !== self.items.length) {
                let obj3 = { cardCount: self.items.length, gutterSize: gutter, availableWidth: tmp24, availableHeight: bound };
                let tmp25 = tmp20(tmp21[14])(obj3);
                bound2 = tmp25.columns;
                cardSize = tmp25.cardSize;
              }
            }
            let _Math3 = Math;
            let num3 = 1;
            bound1 = Math.max((windowWidth - safeAreaLeft - safeAreaRight) / tmp62 | 0, 1);
            bound2 = bound1;
            let tmp28 = set;
            let tmp29 = obj4;
            cardSize = set.roundToNearestPixel((windowWidth - safeAreaLeft - safeAreaRight - obj4 * (bound1 - 1)) / bound1);
            tmp26 = bound1;
          }
          let _global;
          if (found != null) {
            _global = found.global;
          }
          let flag = true;
          if (true === _global) {
            let closure_11 = found.layouts[0];
          }
          let _Math6 = Math;
          let num7 = 1;
          let rounded = Math.floor(self.items.length / tmp26);
          if (self.items.length % tmp26 == 0) {
            num7 = 0;
          }
          let sum = rounded + num7;
          let diff = cardSize;
          if (null == found) {
            diff = cardSize;
            if (1 === tmp26) {
              diff = cardSize;
              if (sum > 1) {
                diff = cardSize;
                if (0 === set.size) {
                  diff = windowWidth - safeAreaLeft - safeAreaRight;
                }
              }
            }
          }
          size = { width: diff, height: tmp37 };
          let tmp37 = cardSize;
          if (null == found) {
            tmp37 = cardSize;
            if (1 === sum) {
              tmp37 = cardSize;
              if (tmp26 > 1) {
                tmp37 = cardSize;
                if (0 === set.size) {
                  tmp37 = bound;
                }
              }
            }
          }
          if (!tmp20(tmp21[11])(size, self.defaultTargetCoords)) {
            self.defaultTargetCoords = size;
          }
          let obj4 = { cardWidth: self.defaultTargetCoords.width, cardHeight: self.defaultTargetCoords.height, gutter, totalItems: self.items.length, windowWidth };
          let _Array = Array;
          let self14 = this;
          let self15 = this;
          let array = new Array(tmp26);
          let tmp39 = array;
          let items = [array.fill(0)];
          let c15 = -1;
          bound1 = -1;
          closure_17 = -1;
          items1 = [];
          function placeItem(arg0, arg1, arg2, arg3) {

          }
          let closure_0 = 1 === self.items.length;
          let items2 = [set, set1, set2, set3];
          let tmp40 = items2;
          let tmp41 = items2;
          for (const item10196 of items2) {
            function _loop2(item10202) {
              let dimensions;
              let height;
              let item;
              let obj;
              let size2;
              let startCol;
              let startRow;
              let sum5;
              let tmp16;
              let tmp4;
              let width;
              if ("custom" === item10202.type) {
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
                if (!item10202.forceSquare) {
                  size = self.getTargetDimensions(item10202.item.id);
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
                const obj2 = { item: item10202.item, dimensions: tmp16 };
                if ("portrait" === str2) {
                  let size3;
                  if (tmp6.fillAspectRatio) {
                    let size1;
                    if (windowWidth > windowHeight) {
                      size1 = { width: 2, height: 2 };
                    } else {
                      let num5 = 0;
                      if (closure_0) {
                        num5 = 1;
                      }
                      size1 = { width: 2, height: 3 + num5 };
                    }
                    size3 = size1;
                  } else {
                    size3 = { width: 1, height: 2 };
                  }
                  tmp16 = size3;
                } else if ("landscape" === str2) {
                  let size6;
                  if (tmp6.fillAspectRatio) {
                    let size5;
                    if (windowWidth > windowHeight) {
                      let num3 = 0;
                      if (closure_0) {
                        num3 = 1;
                      }
                      const size4 = { width: 3 + num3, height: 2 };
                      size5 = size4;
                    } else {
                      size5 = { width: 2, height: 2 };
                    }
                    size6 = size5;
                  } else {
                    size6 = { width: 2, height: 1 };
                  }
                  tmp16 = size6;
                } else if ("square" === str2) {
                  tmp16 = tmp6.enlargeSquare ? { width: 2, height: 2 } : { width: 1, height: 1 };
                }
                obj = obj2;
              } else {
                obj = { item: item10202, dimensions: tmp4.enlargeSquare ? { width: 2, height: 2 } : { width: 1, height: 1 } };
                tmp4 = closure_11;
                if (closure_11 == null) {
                  tmp4 = closure_17;
                }
              }
              ({ item, dimensions } = obj);
              let num7 = dimensions.height;
              const id = item.id;
              if (typeof placeItem === "function") {
                const _Math = Math;
                const bound = Math.min(tmp17, bound2);
                const tmp19 = c15;
                if (1 === bound2) {
                  num7 = 1;
                }
                let sum = tmp19 + 1;
                let num11 = -1;
                let num12 = -1;
                while (true) {
                  let tmp25;
                  let arr2 = arr[sum];
                  if (null == arr2) {
                    let _Array = Array;
                    self = this;
                    let self2 = this;
                    let array = new Array(bound2);
                    let fillResult = array.fill(0);
                    let arr4 = arr.push(fillResult);
                    arr2 = fillResult;
                  }
                  let num13 = 0;
                  let tmp34 = num11;
                  let tmp35 = num12;
                  if (0 < arr2.length) {
                    while (true) {
                      if (1 === arr2[num13]) {
                        num13 = num13 + 1;
                        tmp34 = num11;
                        tmp35 = num12;
                        if (num13 >= arr2.length) {
                          break;
                        }
                      } else {
                        tmp34 = num13;
                        tmp35 = sum;
                        if (num13 + (bound - 1) < arr2.length) {
                          break;
                        }
                      }
                      break;
                    }
                  }
                  if (-1 !== tmp35) {
                    if (-1 !== tmp34) {
                      let sum2 = tmp35;
                      let tmp39 = tmp34;
                      let tmp40 = tmp35;
                      let tmp41 = tmp34;
                      let tmp42 = tmp35;
                      if (tmp35 <= tmp35 + (num7 - 1)) {
                        while (true) {
                          let tmp43 = arr[sum2];
                          if (null == tmp43) {
                            let _Array2 = Array;
                            let self3 = this;
                            let self4 = this;
                            let array2 = new Array(bound2);
                            let fillResult1 = array2.fill(0);
                            let arr7 = arr.push(fillResult1);
                            tmp43 = fillResult1;
                          }
                          let sum1 = tmp39;
                          let num16 = tmp39;
                          let num17 = tmp40;
                          if (tmp39 <= tmp39 + (bound - 1)) {
                            num16 = -1;
                            num17 = -1;
                            while (0 === tmp43[sum1]) {
                              sum1 = sum1 + 1;
                              num16 = tmp39;
                              num17 = tmp40;
                              if (sum1 > tmp39 + (bound - 1)) {
                                break;
                              }
                            }
                          }
                          tmp41 = num16;
                          tmp42 = num17;
                          if (-1 === num16) {
                            break;
                          } else {
                            tmp41 = num16;
                            tmp42 = num17;
                            if (-1 === num17) {
                              break;
                            } else {
                              sum2 = sum2 + 1;
                              tmp39 = num16;
                              tmp40 = num17;
                              tmp41 = num16;
                              tmp42 = num17;
                              if (sum2 > num17 + (num7 - 1)) {
                                break;
                              }
                            }
                          }
                        }
                      }
                      if (-1 !== tmp42) {
                        if (-1 !== tmp41) {
                          let size7 = { startRow: tmp42, startCol: tmp41, width: bound, height: num7 };
                          let num14 = tmp41;
                          let num15 = tmp42;
                          let sum3 = sum;
                          size2 = size7;
                          num11 = num14;
                          num12 = num15;
                          sum = sum3;
                          tmp25 = size2;
                          if (null != size2) {
                            break;
                          }
                        }
                      }
                      sum3 = sum + 1;
                      num14 = tmp41;
                      num15 = tmp42;
                      size2 = tmp25;
                    }
                  }
                  sum3 = sum + 1;
                  num14 = -1;
                  num15 = -1;
                  size2 = tmp25;
                }
                let tmp60 = c15;
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
                let sum7 = tmp60 + 1;
                while (null != items[sum7]) {
                  if (-1 !== arr3.indexOf(0)) {
                    break;
                  } else {
                    sum7 = sum7 + 1;
                    tmp60 = tmp58;
                    continue;
                  }
                }
                c15 = tmp60;
                const _Math2 = Math;
                const _Math3 = Math;
                closure_17 = Math.min(Math.max(closure_17, size2.startCol + (size2.width - 1)), bound2);
                const size8 = { id, type: tmp18, x: size2.startCol * (obj4.gutter + obj4.cardWidth), y: size2.startRow * (obj4.gutter + obj4.cardHeight), width: obj4.cardWidth * size2.width + (size2.width - 1) * obj4.gutter, height: obj4.cardHeight * size2.height + (size2.height - 1) * obj4.gutter, zIndex: obj4.totalItems - closure_18 };
                const y = size8.y;
                let tmp64 = self;
                const chunkSize = self.props.chunkSize;
                items = [y / chunkSize | 0, (y + size8.height) / chunkSize | 0];
                let first = items[0];
                if (first <= items[1]) {
                  do {
                    let tmp66 = self;
                    let chunkedCoords = self.chunkedCoords;
                    let value = chunkedCoords.get(first);
                    if (null == value) {
                      let _Set = Set;
                      let self5 = this;
                      let self6 = this;
                      set = new Set();
                      let chunkedCoords2 = tmp66.chunkedCoords;
                      let result1 = chunkedCoords2.set(first, set);
                      value = set;
                    }
                    let addResult = value.add(size8);
                    first = first + 1;
                    tmp64 = tmp66;
                  } while (first <= items[1]);
                }
                const cardCoords = tmp64.cardCoords;
                const result2 = cardCoords.set(id, size8);
                const _Math4 = Math;
                bound1 = Math.max(bound1, size2.startRow + size2.height - 1);
                if (bound1 !== c15) {
                  if (1 === size2.height) {
                    if (size2.startRow === bound1) {
                      items1.push(id);
                    }
                    closure_18 = closure_18 + 1;
                  }
                }
                items1.length = 0;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            for (const item10202 of item10196) {
              let tmp44 = _loop2;
              let _loop2Result = _loop2(item10202);
              continue;
            }
            continue;
          }
          if (c15 !== bound1) {
            if (-1 !== c15) {
              let tmp63 = items[bound1];
              let flag2 = 0 === tmp63[0];
              let flag3 = false;
              let num9 = 0;
              let tmp64 = tmp63;
              let tmp46 = tmp63;
              for (const item10211 of tmp63) {
                let tmp48 = num9;
                num9 = num9 + item10211;
                let tmp49 = flag2;
                if (!tmp49) {
                  let tmp51 = 1 === item10211 && flag3;
                  if (tmp51) {
                    flag2 = true;
                  }
                  if (0 === item10211) {
                    flag3 = true;
                  }
                }
                continue;
              }
              if (!flag2) {
                let diff1 = tmp26 - num9;
                for (const item10237 of items1) {
                  let cardCoords = self.cardCoords;
                  let value = cardCoords.get(item10237);
                  let tmp59 = value;
                  if (null != value) {
                    let tmp60 = value;
                    tmp59.x = tmp59.x + tmp55;
                  }
                  continue;
                }
              }
            }
          }
          let size1 = {
            width: (() => {
                    let sum;
                    if (0 === self.items.length) {
                      sum = self.defaultTargetCoords.width * bound2 + (bound2 - 1) * gutter;
                    } else {
                      closure_17 = closure_17 + 1;
                      sum = self.defaultTargetCoords.width * closure_17 + (closure_17 - 1) * gutter;
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
                  })()
          };
          self.contentDimensions = size1;
          let flag4 = false;
          self.dirty = false;
          self.layoutKey = self.layoutKey + 1;
        }
        let obj5 = { windowWidth, windowHeight, safeAreaLeft, safeAreaRight };
        let _Math4 = Math;
        let _Math5 = Math;
        let num5 = 1;
        bound2 = Math.max(Math.min((windowWidth - safeAreaLeft - safeAreaRight) / items1(obj5) | 0, 4), 1);
        cardSize = set.roundToNearestPixel((windowWidth - safeAreaLeft - safeAreaRight - gutter * (bound2 - 1)) / bound2);
        tmp26 = bound2;
      }
    }
  }
  subscribeFromItem(arg0) {
    const self = this;
    let closure_0 = arg0;
    let layoutCallbacks = this.layoutCallbacks;
    layoutCallbacks.add(arg0);
    return () => {
      const layoutCallbacks = self.layoutCallbacks;
      layoutCallbacks.delete(closure_0);
    };
  }
  subscribeToManager(arg0) {
    const self = this;
    let closure_0 = arg0;
    let managerSubscriptions = this.managerSubscriptions;
    managerSubscriptions.add(arg0);
    return () => {
      const managerSubscriptions = self.managerSubscriptions;
      managerSubscriptions.delete(closure_0);
    };
  }
  emitLayoutChanges() {
    const self = this;
    const tmp = this.emitItemChanges && self.mounted;
    if (tmp) {
      self.emitItemChanges = false;
      const obj = react_native2;
      obj.batchUpdates(() => {
        const managerSubscriptions = self.managerSubscriptions;
        for (const item10006 of managerSubscriptions) {
          let item10006Result = item10006();
          continue;
        }
        const layoutCallbacks = self.layoutCallbacks;
        for (const item10015 of layoutCallbacks) {
          let item10015Result = item10015();
          continue;
        }
      });
    }
  }
  deferredLayoutChange() {
    const self = this;
    const tmp = this.emitItemChanges && self.mounted;
    if (tmp) {
      const _setTimeout = setTimeout;
      self.emitTimeout = setTimeout(() => {
        clearTimeout(self.emitTimeout);
        self.emitTimeout = -1;
        self.emitLayoutChanges();
      }, 1);
    }
  }
  checkDimensionsMismatch(width, height) {
    let tmp2;
    const self = this;
    if (this.props.windowWidth !== width) {
      tmp2 = { staleWidth: self.props.windowWidth, staleHeight: self.props.windowHeight, wasDirty: self.dirty };
      const obj = { staleWidth: self.props.windowWidth, staleHeight: self.props.windowHeight, wasDirty: self.dirty };
    } else {
      tmp2 = null;
    }
    return tmp2;
  }
}
const prototype = VoicePanelCardLayoutManager.prototype;

export default VoicePanelCardLayoutManager;
export const useCardLayoutCoordsSubscription = tmp4;
export const useTargetDimensionsSubscription = tmp5;
export const useManagerSubscription = tmp6;