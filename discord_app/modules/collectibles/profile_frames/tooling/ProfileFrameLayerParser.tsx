// === Module 8950: set ===

// Module 8950 (set)
import ProfileFrameLayerType from "ProfileFrameLayerType" /* 8952 */;
import ProfileFrameLayerAnchor from "ProfileFrameLayerAnchor" /* 8953 */;
import _toArray from "_toArray" /* 853 */;

require = fn;
const preview = "preview";
const responsive = "responsive";
{ foreground: require("ProfileFrameLayerOrder").ProfileFrameLayerOrder.FRONT, background: require("ProfileFrameLayerOrder").ProfileFrameLayerOrder.BACK };
const items = [require("ProfileFrameLayerType").ProfileFrameLayerType.STAPLE, require("ProfileFrameLayerType").ProfileFrameLayerType.RAIL, require("ProfileFrameLayerType").ProfileFrameLayerType.BORDER];
const set = new Set(items);
const items1 = [require("ProfileFrameLayerAnchor").ProfileFrameLayerAnchor.TOP, require("ProfileFrameLayerAnchor").ProfileFrameLayerAnchor.BOTTOM, require("ProfileFrameLayerAnchor").ProfileFrameLayerAnchor.CENTER];
const set1 = new Set(items1);
let obj = { WRONG_PART_COUNT: "wrong_part_count", INVALID_INDEX: "invalid_index", INVALID_TYPE: "invalid_type", INVALID_ANCHOR: "invalid_anchor", INVALID_RESPONSIVE: "invalid_responsive", BORDER_HAS_ANCHOR: "border_has_anchor" };
obj = { [obj.WRONG_PART_COUNT]: "wrong filename format", [obj.INVALID_INDEX]: "invalid index" };
const items2 = [...set];
obj[obj.INVALID_TYPE] = "invalid type (expected: " + items2.join(", ") + ")";
const items3 = [...set1];
obj[obj.INVALID_ANCHOR] = "invalid anchor (expected: " + items3.join(", ") + ")";
obj[obj.INVALID_RESPONSIVE] = "invalid suffix (expected '" + "responsive" + "')";
obj[obj.BORDER_HAS_ANCHOR] = "border layers must omit the anchor";
let closure_8 = { [fn(8951).ProfileFrameLayerOrder.FRONT]: 0, [fn(8951).ProfileFrameLayerOrder.BACK]: 1 };
const result = require("obj132").fileFinishedImporting("modules/collectibles/profile_frames/tooling/ProfileFrameLayerParser.tsx");

export const PREVIEW_FILENAME = "preview";
export const RESPONSIVE_KEYWORD = "responsive";
export const FOLDER_ORDER_MAP = obj;
export const ParseErrorKind = obj;
export const PARSE_ERROR_LABELS = obj;
export const parseLayerFilename = function parseLayerFilename(c7) {
  const parts = obj.replace(/\.\w+$/, "").split("_");
  if (parts.length >= 2) {
    if (parts.length <= 4) {
      const arr2 = callback(parts);
      [tmp19, tmp20] = arr2;
      const substr = arr2.slice(2);
      if (obj14.test(tmp19)) {
        if (set.has(tmp20)) {
          if (tmp20 === ProfileFrameLayerType.ProfileFrameLayerType.BORDER) {
            if (substr.length > 0) {
              if (set1.has(substr[0])) {
                obj = { parsed: null, errorType: null };
                obj[1] = obj.BORDER_HAS_ANCHOR;
                return obj;
              }
            }
            if (substr.length > 1) {
              obj = { parsed: null, errorType: null };
              obj[1] = obj.WRONG_PART_COUNT;
              return obj;
            } else {
              if (1 === substr.length) {
                if (substr[0] !== responsive) {
                  obj1 = { parsed: null, errorType: null };
                  obj1[1] = obj.INVALID_RESPONSIVE;
                  return obj1;
                }
              }
              const obj2 = { parsed: null, errorType: null };
              const obj3 = { index: null, type: null, anchor: null, responsive: null };
              const _Number2 = Number;
              obj3[0] = Number(tmp19);
              obj3[1] = tmp20;
              obj3[2] = ProfileFrameLayerAnchor.ProfileFrameLayerAnchor.CENTER;
              obj3[3] = 1 === substr.length;
              obj2[0] = obj3;
              return obj2;
            }
          } else {
            const first = substr[0];
            if (null != first) {
              if (set1.has(first)) {
                if (substr.length > 2) {
                  const obj4 = { parsed: null, errorType: null };
                  obj4[1] = obj.WRONG_PART_COUNT;
                  return obj4;
                } else {
                  if (2 === substr.length) {
                    if (substr[1] !== responsive) {
                      const obj5 = { parsed: null, errorType: null };
                      obj5[1] = obj.INVALID_RESPONSIVE;
                      return obj5;
                    }
                  }
                  const obj6 = { parsed: null, errorType: null };
                  const obj7 = { index: null, type: null, anchor: null, responsive: null };
                  const _Number = Number;
                  obj7[0] = Number(tmp19);
                  obj7[1] = tmp20;
                  obj7[2] = first;
                  obj7[3] = 2 === substr.length || tmp20 === ProfileFrameLayerType.ProfileFrameLayerType.RAIL;
                  obj6[0] = obj7;
                  return obj6;
                }
              }
            }
            const obj8 = { parsed: null, errorType: null };
            obj8[1] = obj.INVALID_ANCHOR;
            return obj8;
          }
        } else {
          const obj9 = { parsed: null, errorType: null };
          obj9[1] = obj.INVALID_TYPE;
          return obj9;
        }
      } else {
        obj = { parsed: null, errorType: null };
        obj[1] = obj.INVALID_INDEX;
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