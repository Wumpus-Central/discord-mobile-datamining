// === Module 8126: ChangelogImageUtils ===

// Module 8126 (ChangelogImageUtils)
import size from "module_2" /* 2 */;

function toURL(target) {
  try {
    const _URL = URL;
    const uRL = new URL(target);
    return uRL;
  } catch (err) {
    return null;
  }
}
let c0 = "cdn.discordapp.com";
let c1 = "media.discordapp.net";
const re2 = /^\/attachments\/\d+\/\d+\/[^/]+$/;
const re3 = /\.gif$/i;
const re4 = /^(\d{1,5})x(\d{1,5})$/;
let result = size.fileFinishedImporting("../discord_common/js/shared/modules/changelog/ChangelogImageUtils.tsx");

export const CHANGELOG_IMAGE_CDN_HOST = "cdn.discordapp.com";
export const CHANGELOG_IMAGE_MEDIA_PROXY_HOST = "media.discordapp.net";
export const CHANGELOG_IMAGE_WEB_MAX_WIDTH = 432;
export const CHANGELOG_IMAGE_WEB_MAX_HEIGHT = 400;
export const isChangelogImageUrl = function isChangelogImageUrl(target) {
  const url = toURL(target);
  let isMatch = null != url;
  if (isMatch) {
    isMatch = "https:" === url.protocol;
  }
  if (isMatch) {
    let tmp3 = url.host === c0;
    if (!tmp3) {
      tmp3 = url.host === c1;
    }
    isMatch = tmp3;
  }
  if (isMatch) {
    isMatch = re2.test(url.pathname);
  }
  return isMatch;
};
export const parseChangelogImageSize = function parseChangelogImageSize(title) {
  let match = null;
  if (null != title) {
    match = re4.exec(title.trim());
  }
  if (null == match) {
    return null;
  } else {
    const _Number = Number;
    const NumberResult = Number(match[1]);
    const _Number2 = Number;
    const NumberResult1 = Number(match[2]);
    let tmp6 = null;
    if (NumberResult > 0) {
      tmp6 = null;
      if (NumberResult1 > 0) {
        const size = { width: NumberResult, height: NumberResult1 };
        tmp6 = size;
      }
    }
    return tmp6;
  }
};
export const fitChangelogImage = function fitChangelogImage(result1, diff, result) {
  const bound = Math.max(0, Math.min(1, diff / result1.width, result / result1.height));
  const size = { width: Math.max(1, Math.round(result1.width * bound)), height: Math.max(1, Math.round(result1.height * bound)) };
  return size;
};
export const isAnimatedChangelogImage = function isAnimatedChangelogImage(target) {
  const tmp = toURL(target);
  let isMatch = null != tmp;
  if (isMatch) {
    isMatch = re3.test(tmp.pathname);
  }
  return isMatch;
};
export const getChangelogImageStillUrl = function getChangelogImageStillUrl(target) {
  const url = toURL(target);
  let isMatch = null != url;
  if (isMatch) {
    isMatch = "https:" === url.protocol;
  }
  if (isMatch) {
    let tmp3 = url.host === c0;
    if (!tmp3) {
      tmp3 = url.host === host;
    }
    isMatch = tmp3;
  }
  if (isMatch) {
    isMatch = re2.test(url.pathname);
  }
  if (isMatch) {
    const _URL = URL;
    const str2 = new URL(target);
    str2.host = host;
    const searchParams = str2.searchParams;
    const result = searchParams.set("format", "webp");
    return str2.toString();
  } else {
    return null;
  }
};
export const splitParagraphAtImages = function splitParagraphAtImages(content) {
  function flushRun(arg0) {
    if (!arg0) {
      if (!c2) {
        if (obj.some((type) => {
          let tmp = "br" === type.type;
          if (!tmp) {
            tmp = "newline" === type.type;
          }
          if (!tmp) {
            let tmp2 = "text" === type.type && typeof type.content === "string";
            if (tmp2) {
              tmp2 = "" === type.content.trim();
            }
            tmp = tmp2;
          }
          return !tmp;
        })) {
          const obj2 = { type: "text", nodes: tmp13 };
          items.push(obj2);
        }
        closure_1 = [];
      } else {
        const first = arr[0];
        if (null == first) {
          items = [];
        } else {
          if ("text" === first.type) {
            if (typeof first.content === "string") {
              const obj3 = {};
              const merged = Object.assign(first);
              const content2 = first.content;
              obj3.content = content2.trimStart();
              const items1 = [obj3];
              items = items1;
            }
          }
          items = [first];
        }
        const items2 = [];
        HermesBuiltin.arraySpread(arr.slice(1), HermesBuiltin.arraySpread(items, 0));
        const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
      }
    } else {
      const items3 = [];
      let arraySpreadResult4 = HermesBuiltin.arraySpread(arr.slice(0, -1), 0);
      if (null == arr[arr.length - 1]) {
        let items4 = [];
      } else {
        if ("text" === tmp.type) {
          if (typeof tmp.content === "string") {
            const obj4 = {};
            const merged1 = Object.assign(tmp);
            const content = tmp.content;
            obj4.content = content.trimEnd();
            const items5 = [obj4];
            items4 = items5;
          }
        }
        items4 = [tmp];
      }
      arraySpreadResult4 = HermesBuiltin.arraySpread(items4, arraySpreadResult4);
    }
  }
  let items = [];
  closure_1 = [];
  c2 = false;
  const item = content.forEach((type) => {
    if ("image" === type.type) {
      flushRun(true);
      const obj = { type: "image", node: type };
      items.push(obj);
      c2 = true;
    } else {
      closure_1.push(type);
    }
  });
  flushRun(false);
  return items;
};
export const hasImageSegment = function hasImageSegment(arr) {
  return arr.some((type) => "image" === type.type);
};