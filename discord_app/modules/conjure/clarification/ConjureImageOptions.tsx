// discord_app/modules/conjure/clarification/ConjureImageOptions.tsx
import intl2 from "../../../intl/index.native.tsx";
import _modDef3753 from "../intl/ConjureUntranslated.messages.js";
import MaskedLinkStoreMethodsAdditional from "../../../stores/MaskedLinkStoreMethodsAdditional.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import size_mod from "../../../../_runtime/metro/00002__.js";

let closure_4 = [];
let size = size_mod;
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
    let items1;
    if (null != image.image) {
      const obj = { image: image.image };
      const merged = Object.assign(image);
      const items = [obj];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
};
export const answeredOptionIds = function answeredOptionIds(first1) {
  let tmp2;
  let kind;
  if (first1 != null) {
    kind = first1.kind;
  }
  if ("option" === kind) {
    const items = [first1.optionId];
    tmp2 = items;
  } else {
    tmp2 = closure_4;
  }
  return tmp2;
};
export const imageOptionViewerSize = function imageOptionViewerSize(value) {
  const bound = Math.max(1, 480 / Math.max(value.width, value.height));
  size = { width: Math.round(value.width * bound), height: Math.round(value.height * bound) };
  return size;
};
export const ownImageOption = function ownImageOption(image) {
  let intl;
  const obj = {
    id: "own:" + image.attachment.id,
    label: intl.string(_modDef3753.SUdqCQ),
    image: { attachment_id: image.attachment.id },
  };
  intl = intl2.intl;
  return obj;
};
export const registrableDomain = function registrableDomain(str) {
  str = str.toLowerCase();
  const parts = str.split(".");
  if (parts.length >= 2) {
    const obj2 = /^\d+$/;
    if (!obj2.test(parts[parts.length - 1])) {
      if (!str.includes(":")) {
        let num = -2;
        const tmp2 = _slicedToArray(parts.slice(-2), 2);
        let tmp3 = parts.length > 2;
        const first = tmp2[0];
        if (tmp3) {
          tmp3 = 2 === tmp2[1].length;
        }
        if (tmp3) {
          tmp3 = first.length <= 3;
        }
        const slice = parts.slice;
        if (tmp3) {
          num = -3;
        }
        const substr = slice(num);
        return substr.join(".");
      }
    }
  }
  return str;
};
export const imageOptionCaption = function imageOptionCaption(option) {
  let label;
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
    const obj = MaskedLinkStoreMethodsAdditional;
    str = obj.getHostname(page_url);
  }
  if ("" !== str) {
    const str2 = str.toLowerCase();
    const parts = str2.split(".");
    let joined = str;
    if (parts.length >= 2) {
      joined = str;
      const obj3 = /^\d+$/;
      if (!obj3.test(parts[parts.length - 1])) {
        joined = str;
        if (!str.includes(":")) {
          let num2 = -2;
          const tmp7 = _slicedToArray(parts.slice(-2), 2);
          let tmp8 = parts.length > 2;
          const first = tmp7[0];
          if (tmp8) {
            tmp8 = 2 === tmp7[1].length;
          }
          if (tmp8) {
            tmp8 = first.length <= 3;
          }
          const slice = parts.slice;
          if (tmp8) {
            num2 = -3;
          }
          const substr = slice(num2);
          joined = substr.join(".");
        }
      }
    }
    label = joined;
  } else {
    label = option.label;
  }
  return label;
};
export const ownImageUploadText = function ownImageUploadText(question) {
  const intl = intl2.intl;
  const string = intl.string;
  const obj = /\bicons?\b/i;
  const isMatch = obj.test(question.question);
  const tmp2 = _modDef3753;
  return string(isMatch ? tmp2.qU4WN6 : tmp2.cbMDDB);
};
