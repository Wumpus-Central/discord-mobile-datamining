// === Module 1471: items ===

// Module 1471 (items)
import obj132 from "obj132" /* 2 */;

const items = [128, 192, 256, 320, 384, 512, 640, 768, 1024, 1280, 1536, 2048, 3072, 4096];
let result = obj132.fileFinishedImporting("modules/image_upload/AttachmentImageLadder.tsx");

export const ATTACHMENT_LADDER = items;
export const ATTACHMENT_LADDER_MAX_UPSCALE = 1.1;
export const getSnapDownMaxUpscale = function getSnapDownMaxUpscale(minSnapDownDpr, arg1) {
  let maxUpscale = null;
  if (arg1 >= minSnapDownDpr.minSnapDownDpr) {
    maxUpscale = minSnapDownDpr.maxUpscale;
  }
  return maxUpscale;
};
export const snapAttachmentDimensions = function snapAttachmentDimensions(arg0) {
  ({ targetWidth, targetHeight, sourceWidth, sourceHeight, maxUpscale } = arg0);
  const bound = Math.max(targetWidth, targetHeight);
  if (bound <= 0) {
    let obj = { width: null, height: null };
    obj[0] = targetWidth;
    obj[1] = targetHeight;
    return obj;
  } else {
    let found = bound.find((item, index) => bound <= item);
    if (found == null) {
      found = arr[arr.length - 1];
    }
    let tmp4 = null != sourceWidth && null != sourceHeight;
    if (tmp4) {
      const _Math = Math;
      tmp4 = Math.max(sourceWidth, sourceHeight) <= found;
    }
    let tmp5 = found;
    if (null != maxUpscale) {
      tmp5 = found;
      if (maxUpscale > 1) {
        tmp5 = found;
        if (!tmp4) {
          for (const item10027 of arr) {
            if (item10027 <= bound) {
              continue;
            } else {
              obj.return();
              break;
            }
            let tmp11 = null != item10027;
            if (tmp11) {
              tmp11 = bound <= item10027 * maxUpscale;
            }
            tmp5 = found;
            if (tmp11) {
              tmp5 = item10027;
            }
          }
        }
      }
    }
    if (null != sourceWidth) {
      if (null != sourceHeight) {
        const _Math2 = Math;
        if (Math.max(sourceWidth, sourceHeight) <= tmp5) {
          obj = { width: null, height: null };
          obj[0] = sourceWidth;
          obj[1] = sourceHeight;
          return obj;
        }
      }
    }
    const result = tmp5 / bound;
    const _Math3 = Math;
    const _Math4 = Math;
    const bound1 = Math.max(1, Math.round(targetWidth * result));
    const _Math5 = Math;
    const _Math6 = Math;
    const bound2 = Math.max(1, Math.round(targetHeight * result));
    let bound3 = bound1;
    if (null != sourceWidth) {
      const _Math7 = Math;
      bound3 = Math.min(bound1, sourceWidth);
    }
    obj1 = { width: null, height: null };
    obj1[0] = bound3;
    let bound4 = bound2;
    if (null != sourceHeight) {
      const _Math8 = Math;
      bound4 = Math.min(bound2, sourceHeight);
    }
    obj1[1] = bound4;
    return obj1;
  }
};