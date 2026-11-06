// === Module 5482: validateHitSlop ===

// Module 5482 (validateHitSlop)
import _slicedToArray from "module_32" /* 32 */;

let items = [{ code: "(function validateHitSlop_Pnpm_hitSlopTs1(hitSlop){const[left,top,right,bottom,width,height]=hitSlop;if(width!==null&&width<0){throw new Error(\"HitSlop error: 'width' cannot be negative\");}if(height!==null&&height<0){throw new Error(\"HitSlop error: 'height' cannot be negative\");}if(width!==null&&left!==null&&right!==null){throw new Error(\"HitSlop error: cannot have all of 'left', 'right' and 'width' defined\");}if(width!==null&&left===null&&right===null){throw new Error(\"HitSlop error: when 'width' is defined, either 'left' or 'right' has to be defined\");}if(height!==null&&top!==null&&bottom!==null){throw new Error(\"HitSlop error: cannot have all of 'top', 'bottom' and 'height' defined\");}if(height!==null&&top===null&&bottom===null){throw new Error(\"HitSlop error: when 'height' is defined, either 'top' or 'bottom' has to be defined\");}})" }];
[tmp2] = items;
function validateHitSlop(arg0) {
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7] = arg0;
  if (null !== tmp6) {
    if (tmp6 < 0) {
      const _Error6 = Error;
      const error = new Error("HitSlop error: 'width' cannot be negative");
      throw error;
    }
  }
  if (null !== tmp7) {
    if (tmp7 < 0) {
      const _Error5 = Error;
      const error1 = new Error("HitSlop error: 'height' cannot be negative");
      throw error1;
    }
  }
  if (null !== tmp6) {
    if (null !== tmp2) {
      if (null !== tmp4) {
        const _Error4 = Error;
        const error2 = new Error("HitSlop error: cannot have all of 'left', 'right' and 'width' defined");
        throw error2;
      }
    }
  }
  if (null !== tmp6) {
    if (null === tmp2) {
      if (null === tmp4) {
        const _Error3 = Error;
        const error3 = new Error("HitSlop error: when 'width' is defined, either 'left' or 'right' has to be defined");
        throw error3;
      }
    }
  }
  if (null !== tmp7) {
    if (null !== tmp3) {
      if (null !== tmp5) {
        const _Error2 = Error;
        const error4 = new Error("HitSlop error: cannot have all of 'top', 'bottom' and 'height' defined");
        throw error4;
      }
    }
  }
  if (null !== tmp7) {
    if (null === tmp3) {
      if (null === tmp5) {
        const _Error = Error;
        const error5 = new Error("HitSlop error: when 'height' is defined, either 'top' or 'bottom' has to be defined");
        throw error5;
      }
    }
  }
}
validateHitSlop.__workletHash = 2207097745734;
validateHitSlop.__initData = tmp2;
const items1 = [{ code: "(function normalizeHitSlop_Pnpm_hitSlopTs2(hitSlop){let[CLEARED_HIT_SLOP,__DEV__,validateHitSlop]=this.__closure;var _ref,_slop$left,_ref2,_slop$top,_ref3,_slop$right,_ref4,_slop$bottom,_slop$width,_slop$height;if(hitSlop===undefined){return undefined;}if(hitSlop===null){return CLEARED_HIT_SLOP;}if(typeof hitSlop==='number'||Array.isArray(hitSlop)){return hitSlop;}const slop=hitSlop;const{horizontal:horizontal,vertical:vertical}=slop;const normalized=[(_ref=(_slop$left=slop.left)!==null&&_slop$left!==void 0?_slop$left:horizontal)!==null&&_ref!==void 0?_ref:null,(_ref2=(_slop$top=slop.top)!==null&&_slop$top!==void 0?_slop$top:vertical)!==null&&_ref2!==void 0?_ref2:null,(_ref3=(_slop$right=slop.right)!==null&&_slop$right!==void 0?_slop$right:horizontal)!==null&&_ref3!==void 0?_ref3:null,(_ref4=(_slop$bottom=slop.bottom)!==null&&_slop$bottom!==void 0?_slop$bottom:vertical)!==null&&_ref4!==void 0?_ref4:null,(_slop$width=slop.width)!==null&&_slop$width!==void 0?_slop$width:null,(_slop$height=slop.height)!==null&&_slop$height!==void 0?_slop$height:null];if(__DEV__){validateHitSlop(normalized);}return normalized;})" }, [null, null, null, null, null, null], false, validateHitSlop];
let closure_129_0;
let closure_129_1;
let closure_129_2;
[tmp3, tmp4, tmp5, tmp6] = items1;
function normalizeHitSlop(maybeUnpackValueResult) {
  if (undefined !== maybeUnpackValueResult) {
    if (null === maybeUnpackValueResult) {
      return _slicedToArray;
    } else {
      if (typeof maybeUnpackValueResult !== "number") {
        const _Array = Array;
        if (!Array.isArray(maybeUnpackValueResult)) {
          ({ horizontal, vertical, left } = maybeUnpackValueResult);
          if (left == null) {
            left = horizontal;
          }
          if (left == null) {
            left = null;
          }
          items = [left, , , , , ];
          let top = maybeUnpackValueResult.top;
          if (top == null) {
            top = vertical;
          }
          if (top == null) {
            top = null;
          }
          items[1] = top;
          let right = maybeUnpackValueResult.right;
          if (right == null) {
            right = horizontal;
          }
          if (right == null) {
            right = null;
          }
          items[2] = right;
          let bottom = maybeUnpackValueResult.bottom;
          if (bottom == null) {
            bottom = vertical;
          }
          if (bottom == null) {
            bottom = null;
          }
          items[3] = bottom;
          let width = maybeUnpackValueResult.width;
          if (width == null) {
            width = null;
          }
          items[4] = width;
          let height = maybeUnpackValueResult.height;
          if (height == null) {
            height = null;
          }
          items[5] = height;
          if (duration) {
            React2(items);
          }
          return items;
        }
      }
      return maybeUnpackValueResult;
    }
  }
}
const items2 = [tmp4, tmp5, tmp6];
normalizeHitSlop.__closure = items2;
normalizeHitSlop.__workletHash = 776935566732;
normalizeHitSlop.__initData = tmp3;

export const HIT_SLOP_LEFT_IDX = 0;
export const HIT_SLOP_TOP_IDX = 1;
export const HIT_SLOP_RIGHT_IDX = 2;
export const HIT_SLOP_BOTTOM_IDX = 3;
export const HIT_SLOP_WIDTH_IDX = 4;
export const HIT_SLOP_HEIGHT_IDX = 5;
export { normalizeHitSlop };