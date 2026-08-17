// discord_common/js/packages/dynamic-links/generateDynamicLink.tsx
import v1 from "../../../../_runtime/00514_v1.js";
import formatDefault from "../../../../_runtime/00669_format.js";
import setDefault from "getDescription.tsx";
import closure_4 from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "../../../../_runtime/metro/00032__slicedToArray.js";

require = arg1;
let closure_3 = ["utmSource", "androidFallbackLink", "iosFallbackLink"];
let c6 = "https://discordapp.onelink.me";
let result = require("set").fileFinishedImporting("../discord_common/js/packages/dynamic-links/generateDynamicLink.tsx");

export default function generateDynamicLink(arg0, arg1) {
  ({ utmSource, androidFallbackLink, iosFallbackLink } = arg1);
  const tmp = callback(arg1, closure_3);
  const str = new URL(arg0);
  for (const key10018 in tmp) {
    let tmp24 = key10018;
    let tmp25 = tmp[key10018];
    if (null == tmp25) {
      continue;
    } else {
      let searchParams = str.searchParams;
      let result = searchParams.set(key10018, tmp25);
      continue;
    }
    continue;
  }
  const encodeURIComponentResult = encodeURIComponent(str.toString());
  const encodeURIComponentResult1 = encodeURIComponent("discord://app/open#" + str.toString());
  const items = ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"];
  const regExp = new RegExp("(" + items.join("|") + ")", "ig");
  const tmp9 = formatDefault;
  let match;
  if (tmp9 != null) {
    if (tmp9.ua != null) {
      match = str2.match(regExp);
    }
  }
  let tmp5Result = tmp5(669);
  let name;
  if (tmp5Result != null) {
    name = tmp5Result.name;
  }
  tmp5Result = tmp5(669);
  let family;
  if (tmp5Result != null) {
    const os = tmp5Result.os;
    if (os != null) {
      family = os.family;
    }
  }
  let str3 = "false";
  if (tmp18) {
    str3 = "true";
  }
  let encodeURIComponentResult3 = null;
  if (null != androidFallbackLink) {
    const _encodeURIComponent = encodeURIComponent;
    encodeURIComponentResult3 = encodeURIComponent(androidFallbackLink);
  }
  let encodeURIComponentResult4 = null;
  if (null != iosFallbackLink) {
    const _encodeURIComponent2 = encodeURIComponent;
    encodeURIComponentResult4 = encodeURIComponent(iosFallbackLink);
  }
  const combined = "" + c6 + "/Hs5r/?deep_link_value=" + encodeURIComponentResult + "&pid=" + utmSource + "&af_force_deeplink=" + str3 + "&af_og_description=" + encodeURIComponent(setDefault()) + "&af_dp=" + encodeURIComponentResult1;
  let sum = combined;
  if (null != encodeURIComponentResult3) {
    const _HermesInternal = HermesInternal;
    sum = combined + "&af_android_url=" + encodeURIComponentResult3;
  }
  let sum1 = sum;
  if (null != encodeURIComponentResult4) {
    const _HermesInternal2 = HermesInternal;
    sum1 = sum + "&af_ios_url=" + encodeURIComponentResult4;
  }
  return sum1;
};
export const generateAttemptId = function generateAttemptId() {
  return v1.v4();
};
export const parseDynamicLink = function parseDynamicLink(str) {
  if (str.startsWith(c6)) {
    try {
      const _URL = URL;
      const uRL = new URL(str);
      const searchParams = uRL.searchParams;
      let obj = searchParams;
      let value = searchParams.get("deep_link_value");
      if (null == value) {
        return null;
      } else {
        const _decodeURIComponent = decodeURIComponent;
        const _URL2 = URL;
        const uRL1 = new URL(decodeURIComponent(value));
        const searchParams2 = uRL1.searchParams;
        value = obj.get("pid");
        obj = { utmSource: null };
        obj[0] = value;
        const entries = searchParams2.entries();
        const tmp16 = entries[Symbol.iterator]();
        while (tmp16 !== undefined) {
          let tmp20 = callback2;
          let tmp21 = callback2(tmp18, 2);
          let tmp22 = obj;
          obj[tmp21[0]] = tmp21[1];
          continue;
        }
        return obj;
      }
    } catch (err) {
      return null;
    }
  } else {
    return null;
  }
};