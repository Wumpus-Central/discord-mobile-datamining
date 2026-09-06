// === Module 8206: ProfileFrameLayerParser ===

// Module 8206 (ProfileFrameLayerParser)
import ProfileFrameLayerType from "ProfileFrameLayerType" /* 8208 */;
import ProfileFrameLayerAnchor from "ProfileFrameLayerAnchor" /* 8209 */;
import _toArray from "_toArray" /* 718 */;

require = fn;
const preview = "preview";
const responsive = "responsive";
let PARSE_ERROR_LABELS = { foreground: fn(8207).ProfileFrameLayerOrder.FRONT, background: fn(8207).ProfileFrameLayerOrder.BACK };
const items = [fn(8208).ProfileFrameLayerType.STAPLE, fn(8208).ProfileFrameLayerType.RAIL, fn(8208).ProfileFrameLayerType.BORDER];
const set = new Set(items);
const items1 = [fn(8209).ProfileFrameLayerAnchor.TOP, fn(8209).ProfileFrameLayerAnchor.BOTTOM, fn(8209).ProfileFrameLayerAnchor.CENTER];
const set1 = new Set(items1);
PARSE_ERROR_LABELS = { WRONG_PART_COUNT: "wrong_part_count", INVALID_INDEX: "invalid_index", INVALID_TYPE: "invalid_type", INVALID_ANCHOR: "invalid_anchor", INVALID_RESPONSIVE: "invalid_responsive", BORDER_HAS_ANCHOR: "border_has_anchor" };
PARSE_ERROR_LABELS = { [PARSE_ERROR_LABELS.WRONG_PART_COUNT]: "wrong filename format", [PARSE_ERROR_LABELS.INVALID_INDEX]: "invalid index" };
const items2 = [...set];
PARSE_ERROR_LABELS[PARSE_ERROR_LABELS.INVALID_TYPE] = "invalid type (expected: " + items2.join(", ") + ")";
const items3 = [...set1];
PARSE_ERROR_LABELS[PARSE_ERROR_LABELS.INVALID_ANCHOR] = "invalid anchor (expected: " + items3.join(", ") + ")";
PARSE_ERROR_LABELS[PARSE_ERROR_LABELS.INVALID_RESPONSIVE] = "invalid suffix (expected '" + "responsive" + "')";
PARSE_ERROR_LABELS[PARSE_ERROR_LABELS.BORDER_HAS_ANCHOR] = "border layers must omit the anchor";
const dependencyMap = { [fn(8207).ProfileFrameLayerOrder.FRONT]: 0, [fn(8207).ProfileFrameLayerOrder.BACK]: 1 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/tooling/ProfileFrameLayerParser.tsx");

export const PREVIEW_FILENAME = "preview";
export const RESPONSIVE_KEYWORD = "responsive";
export const FOLDER_ORDER_MAP = PARSE_ERROR_LABELS;
export const ParseErrorKind = PARSE_ERROR_LABELS;
export { PARSE_ERROR_LABELS };
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
                obj = { parsed: null, errorType: null };
                obj.errorType = obj.BORDER_HAS_ANCHOR;
                return obj;
              }
            }
            if (substr.length > 1) {
              obj = { parsed: null, errorType: null };
              obj.errorType = obj.WRONG_PART_COUNT;
              return obj;
            } else {
              if (1 === substr.length) {
                if (substr[0] !== responsive) {
                  const obj1 = { parsed: null, errorType: obj.INVALID_RESPONSIVE };
                  return obj1;
                }
              }
              const obj2 = { parsed: null, errorType: null };
              const obj3 = { index: null, type: null, anchor: null, responsive: null };
              const _Number2 = Number;
              obj3.index = Number(tmp19);
              obj3.type = tmp20;
              obj3.anchor = ProfileFrameLayerAnchor.ProfileFrameLayerAnchor.CENTER;
              obj3.responsive = 1 === substr.length;
              obj2.parsed = obj3;
              return obj2;
            }
          } else {
            const first = substr[0];
            if (null != first) {
              if (set1.has(first)) {
                if (substr.length > 2) {
                  const obj4 = { parsed: null, errorType: obj.WRONG_PART_COUNT };
                  return obj4;
                } else {
                  if (2 === substr.length) {
                    if (substr[1] !== responsive) {
                      const obj5 = { parsed: null, errorType: obj.INVALID_RESPONSIVE };
                      return obj5;
                    }
                  }
                  const obj6 = { parsed: null, errorType: null };
                  const obj7 = { index: null, type: null, anchor: null, responsive: null };
                  const _Number = Number;
                  obj7.index = Number(tmp19);
                  obj7.type = tmp20;
                  obj7.anchor = first;
                  obj7.responsive = 2 === substr.length || tmp20 === ProfileFrameLayerType.ProfileFrameLayerType.RAIL;
                  obj6.parsed = obj7;
                  return obj6;
                }
              }
            }
            const obj8 = { parsed: null, errorType: obj.INVALID_ANCHOR };
            return obj8;
          }
        } else {
          const obj9 = { parsed: null, errorType: obj.INVALID_TYPE };
          return obj9;
        }
      } else {
        obj = { parsed: null, errorType: null };
        obj.errorType = obj.INVALID_INDEX;
        return obj;
      }
      obj14 = /^\d+$/;
    }
  }
  return { parsed: null, errorType: obj.WRONG_PART_COUNT };
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