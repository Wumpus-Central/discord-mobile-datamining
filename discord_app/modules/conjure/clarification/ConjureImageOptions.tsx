// discord_app/modules/conjure/clarification/ConjureImageOptions.tsx
import util from "../../../intl/index.native.tsx";
import _modDef4131 from "../intl/ConjureUntranslated.messages.js";
import MaskedLinkStoreMethodsAdditional from "../../../stores/MaskedLinkStoreMethodsAdditional.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
let closure_4 = [];
let size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/clarification/ConjureImageOptions.tsx");

export function isImageQuestion(upload) {
  let someResult = true === upload.upload;
  if (!someResult) {
    const options = upload.options;
    someResult = options.some((image) => null != image.image);
  }
  return someResult;
}
export function hasTypedAnswer(allow_custom) {
  let tmp = false !== allow_custom.allow_custom;
  if (tmp) {
    let tmp2 = true === allow_custom.upload;
    if (!tmp2) {
      let someResult = true === allow_custom.upload;
      if (!someResult) {
        const options = allow_custom.options;
        someResult = options.some((image) => null != image.image);
      }
      tmp2 = !someResult;
    }
    tmp = tmp2;
  }
  return tmp;
}
export function imageOptionsLayout(options) {
  let str = "row";
  if (options.length > 4) {
    str = "gallery";
  }
  return str;
}
export function viewableImageOptions(items) {
  return items.flatMap((image) => {
    if (null != image.image) {
      const obj = {};
      const merged = Object.assign(image);
      obj.image = image.image;
      items = [obj];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
}
export function answeredOptionIds(kind) {
  kind = undefined;
  if (kind != null) {
    kind = kind.kind;
  }
  if ("option" === kind) {
    items = [kind.optionId];
    let tmp3 = items;
  } else {
    let kind1;
    if (kind != null) {
      kind1 = kind.kind;
    }
    tmp3 = "multi" === kind1 ? kind.optionIds : closure_4;
  }
  return tmp3;
}
export function imageOptionViewerSize(value) {
  const bound = Math.max(1, 480 / Math.max(value.width, value.height));
  const size = { width: Math.round(value.width * bound), height: Math.round(value.height * bound) };
  return size;
}
export function ownImageOption(image) {
  const obj = { id: "own:" + image.attachment.id, label: null, image: null };
  const intl = util.intl;
  obj.label = intl.string(_modDef4131.SUdqCQ);
  obj.image = { attachment_id: image.attachment.id };
  return obj;
}
export function registrableDomain(str) {
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
}
export function imageOptionCaption(option) {
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
}
export function ownImageUploadText(question) {
  const intl = util.intl;
  const isMatch = /\bicons?\b/i.test(question.question);
  const tmp2 = _modDef4131;
  return intl.string(isMatch ? tmp2.qU4WN6 : tmp2.cbMDDB);
}
export function uploadHint(upload) {
  if (true !== upload.upload) {
    return null;
  } else if (0 === upload.options.length) {
    const intl2 = util.intl;
    let stringResult = intl2.string(_modDef4131.ZZ641e);
  } else {
    const intl = util.intl;
    if (1 === upload.options.length) {
      let dkzChE = _modDef4131["2g3gk9"];
    } else {
      dkzChE = _modDef4131.dkzChE;
    }
    stringResult = intl.string(dkzChE);
  }
}
export function noImageAnswer() {
  const obj = { kind: "custom", text: null };
  const intl = util.intl;
  obj.text = intl.string(_modDef4131.zxSq2q);
  return obj;
}
