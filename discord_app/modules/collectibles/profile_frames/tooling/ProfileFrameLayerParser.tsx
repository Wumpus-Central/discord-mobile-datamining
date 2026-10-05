// discord_app/modules/collectibles/profile_frames/tooling/ProfileFrameLayerParser.tsx
import ProfileFrameLayerOrder from "../../../../../discord_common/js/shared/shared-constants/ProfileFrameLayerOrder.tsx";
import ProfileFrameLayerType from "../../../../../discord_common/js/shared/shared-constants/ProfileFrameLayerType.tsx";
import ProfileFrameLayerAnchor from "../../../../../discord_common/js/shared/shared-constants/ProfileFrameLayerAnchor.tsx";
import _toArray from "../../../../../_runtime/00729__toArray.js";
import size from "../../../../../_runtime/metro/00002__.js";

const preview = "preview";
const responsive = "responsive";
const obj = {
  foreground: ProfileFrameLayerOrder.ProfileFrameLayerOrder.FRONT,
  background: ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK,
};
const items = [
  ProfileFrameLayerType.ProfileFrameLayerType.STAPLE,
  ProfileFrameLayerType.ProfileFrameLayerType.RAIL,
  ProfileFrameLayerType.ProfileFrameLayerType.BORDER,
];
const set = new Set(items);
const items1 = [
  ProfileFrameLayerAnchor.ProfileFrameLayerAnchor.TOP,
  ProfileFrameLayerAnchor.ProfileFrameLayerAnchor.BOTTOM,
  ProfileFrameLayerAnchor.ProfileFrameLayerAnchor.CENTER,
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
const obj3 = { [obj2.WRONG_PART_COUNT]: "wrong filename format", [obj2.INVALID_INDEX]: "invalid index" };
const items2 = [...set];
obj3[obj2.INVALID_TYPE] = "invalid type (expected: " + items2.join(", ") + ")";
const items3 = [...set1];
obj3[obj2.INVALID_ANCHOR] = "invalid anchor (expected: " + items3.join(", ") + ")";
obj3[obj2.INVALID_RESPONSIVE] = "invalid suffix (expected '" + "responsive" + "')";
obj3[obj2.BORDER_HAS_ANCHOR] = "border layers must omit the anchor";
let closure_8 = {
  [ProfileFrameLayerOrder.ProfileFrameLayerOrder.FRONT]: 0,
  [ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK]: 1,
};
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/tooling/ProfileFrameLayerParser.tsx");

export const PREVIEW_FILENAME = "preview";
export const RESPONSIVE_KEYWORD = "responsive";
export const FOLDER_ORDER_MAP = obj;
export const ParseErrorKind = obj2;
export const PARSE_ERROR_LABELS = obj3;
export const parseLayerFilename = function parseLayerFilename(filename) {
  let obj10;
  let obj6;
  let tmp19;
  let tmp20;
  let tmp7;
  const str = filename.replace(/\.\w+$/, "");
  const parts = str.split("_");
  if (parts.length >= 2) {
    if (parts.length <= 4) {
      const arr2 = _toArray(parts);
      [tmp19, tmp20] = arr2;
      const substr = arr2.slice(2);
      const obj14 = /^\d+$/;
      if (obj14.test(tmp19)) {
        if (set.has(tmp20)) {
          if (tmp20 === ProfileFrameLayerType.ProfileFrameLayerType.BORDER) {
            if (substr.length > 0) {
              if (set1.has(substr[0])) {
                obj2 = { parsed: null, errorType: obj2.BORDER_HAS_ANCHOR };
                return obj2;
              }
            }
            if (substr.length > 1) {
              return { parsed: null, errorType: obj2.WRONG_PART_COUNT };
            } else {
              if (1 === substr.length) {
                if (substr[0] !== responsive) {
                  return { parsed: null, errorType: obj2.INVALID_RESPONSIVE };
                }
              }
              const obj5 = { parsed: obj6, errorType: null };
              const _Number2 = Number;
              obj6 = {
                index: Number(tmp19),
                type: tmp20,
                anchor: ProfileFrameLayerAnchor.ProfileFrameLayerAnchor.CENTER,
                responsive: 1 === length,
              };
              return obj5;
            }
          } else {
            const first = substr[0];
            if (null != first) {
              if (set1.has(first)) {
                if (substr.length > 2) {
                  return { parsed: null, errorType: obj2.WRONG_PART_COUNT };
                } else {
                  if (2 === substr.length) {
                    if (substr[1] !== responsive) {
                      return { parsed: null, errorType: obj2.INVALID_RESPONSIVE };
                    }
                  }
                  const obj9 = { parsed: obj10, errorType: null };
                  const _Number = Number;
                  obj10 = { index: Number(tmp19), type: tmp20, anchor: first, responsive: tmp7 };
                  tmp7 = 2 === substr.length || tmp20 === ProfileFrameLayerType.ProfileFrameLayerType.RAIL;
                  return obj9;
                }
              }
            }
            return { parsed: null, errorType: obj2.INVALID_ANCHOR };
          }
        } else {
          return { parsed: null, errorType: obj2.INVALID_TYPE };
        }
      } else {
        return { parsed: null, errorType: obj2.INVALID_INDEX };
      }
    }
  }
  return { parsed: null, errorType: obj2.WRONG_PART_COUNT };
};
export const compareLayerFiles = function compareLayerFiles(index, index2) {
  let diff = closure_8[index.order] - closure_8[index2.order];
  if (0 === diff) {
    diff = index.index - index2.index;
  }
  return diff;
};
export const isPreviewFilename = function isPreviewFilename(str) {
  return str.replace(/\.\w+$/, "") === preview;
};
