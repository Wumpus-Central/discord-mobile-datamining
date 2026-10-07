// === Module 16738: ConjureImageOptions ===

// Module 16738 (ConjureImageOptions)
import util from "util" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import MaskedLinkStoreMethodsAdditional from "MaskedLinkStoreMethodsAdditional" /* 8060 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
let closure_4 = [];
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/clarification/ConjureImageOptions.tsx");

export const isImageQuestion = function isImageQuestion(options) {
  options = options.options;
  return options.some((image) => null != image.image);
};
export const imageOptionsLayout = function imageOptionsLayout(options) {
  let str = "row";
  if (options.length > 4) {
    str = "gallery";
  }
  return str;
};
export const viewableImageOptions = function viewableImageOptions(options) {
  return options.flatMap((image) => {
    if (null != image.image) {
      const obj = {};
      const merged = Object.assign(image);
      obj.image = image.image;
      const items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
};
export const answeredOptionIds = function answeredOptionIds(first1) {
  let kind;
  if (first1 != null) {
    kind = first1.kind;
  }
  if ("option" === kind) {
    const items = [first1.optionId];
    let tmp2 = items;
  } else {
    tmp2 = closure_4;
  }
  return tmp2;
};
export const imageOptionViewerSize = function imageOptionViewerSize(value) {
  const bound = Math.max(1, 480 / Math.max(value.width, value.height));
  const size = { width: Math.round(value.width * bound), height: Math.round(value.height * bound) };
  return size;
};
export const ownImageOption = function ownImageOption(image) {
  const obj = { id: "own:" + image.attachment.id, label: null, image: null };
  const intl = util.intl;
  obj.label = intl.string(_modDef3753.SUdqCQ);
  obj.image = { attachment_id: image.attachment.id };
  return obj;
};
export const registrableDomain = function registrableDomain(str) {
  str = str.toLowerCase();
  const parts = str.split(".");
  if (parts.length >= 2) {
    if (!obj2.test(parts[parts.length - 1])) {
      if (!str.includes(":")) {
        let num = -2;
        const tmp2 = _slicedToArray(parts.slice(-2), 2);
        let tmp3 = parts.length > 2;
        if (tmp3) {
          tmp3 = 2 === tmp2[1].length;
        }
        if (tmp3) {
          tmp3 = tmp2[0].length <= 3;
        }
        if (tmp3) {
          num = -3;
        }
        const substr = parts.slice(num);
        return substr.join(".");
      }
    }
    obj2 = /^\d+$/;
  }
  return str;
};
export const imageOptionCaption = function imageOptionCaption(option) {
  const image = option.image;
  let page_url;
  if (image != null) {
    page_url = image.page_url;
  }
  if (page_url == null) {
    const image2 = option.image;
    let url;
    if (image2 != null) {
      url = image2.url;
    }
    page_url = url;
  }
  let str = "";
  if (null != page_url) {
    str = MaskedLinkStoreMethodsAdditional.getHostname(page_url);
  }
  if ("" !== str) {
    const parts = str.toLowerCase().split(".");
    let joined = str;
    if (parts.length >= 2) {
      joined = str;
      if (!obj3.test(parts[parts.length - 1])) {
        joined = str;
        if (!str.includes(":")) {
          let num2 = -2;
          const tmp7 = _slicedToArray(parts.slice(-2), 2);
          let tmp8 = parts.length > 2;
          if (tmp8) {
            tmp8 = 2 === tmp7[1].length;
          }
          if (tmp8) {
            tmp8 = tmp7[0].length <= 3;
          }
          if (tmp8) {
            num2 = -3;
          }
          const substr = parts.slice(num2);
          joined = substr.join(".");
        }
      }
      obj3 = /^\d+$/;
    }
    let label = joined;
    const str2 = str.toLowerCase();
  } else {
    label = option.label;
  }
  return label;
};
export const ownImageUploadText = function ownImageUploadText(question) {
  const intl = util.intl;
  const isMatch = /\bicons?\b/i.test(question.question);
  const tmp2 = _modDef3753;
  return intl.string(isMatch ? tmp2.qU4WN6 : tmp2.cbMDDB);
};