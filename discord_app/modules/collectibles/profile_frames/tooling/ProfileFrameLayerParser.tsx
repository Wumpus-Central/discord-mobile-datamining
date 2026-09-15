// discord_app/modules/collectibles/profile_frames/tooling/ProfileFrameLayerParser.tsx
import ProfileFrameLayerType from "../../../../../discord_common/js/shared/shared-constants/ProfileFrameLayerType.tsx";
import ProfileFrameLayerAnchor from "../../../../../discord_common/js/shared/shared-constants/ProfileFrameLayerAnchor.tsx";
import _toArray from "../../../../../_runtime/00718__toArray.js";

require = fn;
const preview = "preview";
const responsive = "responsive";
const items = [
  fn(8328).ProfileFrameLayerType.STAPLE,
  fn(8328).ProfileFrameLayerType.RAIL,
  fn(8328).ProfileFrameLayerType.BORDER,
];
const set = new Set(items);
const items1 = [
  fn(8329).ProfileFrameLayerAnchor.TOP,
  fn(8329).ProfileFrameLayerAnchor.BOTTOM,
  fn(8329).ProfileFrameLayerAnchor.CENTER,
];
const set1 = new Set(items1);
let obj2 = {
  WRONG_PART_COUNT: "wrong_part_count",
  INVALID_INDEX: "invalid_index",
  INVALID_TYPE: "invalid_type",
  INVALID_ANCHOR: "invalid_anchor",
  INVALID_RESPONSIVE: "invalid_responsive",
  BORDER_HAS_ANCHOR: "border_has_anchor",
};
let obj3 = { [obj2.WRONG_PART_COUNT]: "wrong filename format", [obj2.INVALID_INDEX]: "invalid index" };
const items2 = [...set];
obj3[obj2.INVALID_TYPE] = "invalid type (expected: " + items2.join(", ") + ")";
const items3 = [...set1];
obj3[obj2.INVALID_ANCHOR] = "invalid anchor (expected: " + items3.join(", ") + ")";
obj3[obj2.INVALID_RESPONSIVE] = "invalid suffix (expected '" + "responsive" + "')";
obj3[obj2.BORDER_HAS_ANCHOR] = "border layers must omit the anchor";
const dependencyMap = { [fn(8327).ProfileFrameLayerOrder.FRONT]: 0, [fn(8327).ProfileFrameLayerOrder.BACK]: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/tooling/ProfileFrameLayerParser.tsx");

export const PREVIEW_FILENAME = "preview";
export const RESPONSIVE_KEYWORD = "responsive";
export const FOLDER_ORDER_MAP = {
  foreground: fn(8327).ProfileFrameLayerOrder.FRONT,
  background: fn(8327).ProfileFrameLayerOrder.BACK,
};
export const ParseErrorKind = obj2;
export const PARSE_ERROR_LABELS = obj3;
export const parseLayerFilename = function parseLayerFilename(str) {
  str = str.replace(/\.\w+$/, "");
  const parts = str.split("_");
  if (parts.length >= 2) {
    if (parts.length <= 4) {
      const arr2 = _toArray(parts);
      [tmp19, tmp20] = arr2;
      const substr = arr2.slice(2);
      if (obj14.test(tmp19)) {
        if (set.has(tmp20)) {
          if (tmp20 === ProfileFrameLayerType.ProfileFrameLayerType.BORDER) {
            if (substr.length > 0) {
              if (set1.has(substr[0])) {
                obj2 = { parsed: null, errorType: null };
                obj2.errorType = obj2.BORDER_HAS_ANCHOR;
                return obj2;
              }
            }
            if (substr.length > 1) {
              const obj3 = { parsed: null, errorType: obj2.WRONG_PART_COUNT };
              return obj3;
            } else {
              if (1 === substr.length) {
                if (substr[0] !== responsive) {
                  const obj4 = { parsed: null, errorType: obj2.INVALID_RESPONSIVE };
                  return obj4;
                }
              }
              const obj5 = { parsed: null, errorType: null };
              const obj6 = { index: null, type: null, anchor: null, responsive: null };
              const _Number2 = Number;
              obj6.index = Number(tmp19);
              obj6.type = tmp20;
              obj6.anchor = ProfileFrameLayerAnchor.ProfileFrameLayerAnchor.CENTER;
              obj6.responsive = 1 === substr.length;
              obj5.parsed = obj6;
              return obj5;
            }
          } else {
            const first = substr[0];
            if (null != first) {
              if (set1.has(first)) {
                if (substr.length > 2) {
                  const obj7 = { parsed: null, errorType: obj2.WRONG_PART_COUNT };
                  return obj7;
                } else {
                  if (2 === substr.length) {
                    if (substr[1] !== responsive) {
                      const obj8 = { parsed: null, errorType: obj2.INVALID_RESPONSIVE };
                      return obj8;
                    }
                  }
                  const obj9 = { parsed: null, errorType: null };
                  const obj10 = { index: null, type: null, anchor: null, responsive: null };
                  const _Number = Number;
                  obj10.index = Number(tmp19);
                  obj10.type = tmp20;
                  obj10.anchor = first;
                  obj10.responsive = 2 === substr.length || tmp20 === ProfileFrameLayerType.ProfileFrameLayerType.RAIL;
                  obj9.parsed = obj10;
                  return obj9;
                }
              }
            }
            const obj11 = { parsed: null, errorType: obj2.INVALID_ANCHOR };
            return obj11;
          }
        } else {
          const obj12 = { parsed: null, errorType: obj2.INVALID_TYPE };
          return obj12;
        }
      } else {
        const obj = { parsed: null, errorType: obj2.INVALID_INDEX };
        return obj;
      }
      obj14 = /^\d+$/;
    }
  }
  return { parsed: null, errorType: obj2.WRONG_PART_COUNT };
};
export const compareLayerFiles = function compareLayerFiles(index, index2) {
  let diff = dependencyMap[index.order] - dependencyMap[index2.order];
  if (0 === diff) {
    diff = index.index - index2.index;
  }
  return diff;
};
export const isPreviewFilename = function isPreviewFilename(str) {
  return str.replace(/\.\w+$/, "") === preview;
};
