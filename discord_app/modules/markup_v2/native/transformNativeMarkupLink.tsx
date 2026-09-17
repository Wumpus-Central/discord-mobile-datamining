// === Module 8252: transformNativeMarkupLink ===

// Module 8252 (transformNativeMarkupLink)
import MarkupTypes from "MarkupTypes" /* 5083 */;
import UnicodeSanitizationUtils from "UnicodeSanitizationUtils" /* 5089 */;
import size from "module_2" /* 2 */;

function stripCredentialsForDisplay(url) {
  try {
    const _URL = URL;
    const uRL = new URL(url);
    uRL.username = "";
    uRL.password = "";
    return UnicodeSanitizationUtils.safelyMakeUrlHumanReadable(uRL);
  } catch (err) {
    return tmp;
  }
}
const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupLink.tsx");

export const transformNativeLink = function transformNativeLink(value, channelId, transformNativeInline) {
  if ("normal" !== value.type) {
    return null;
  } else {
    ({ text, url, title } = value.value);
    if (null != text) {
      if (text.length > 0) {
        const obj2 = { type: MarkupTypes.AST_KEY.LINK, content: transformNativeInline(text, channelId), target: url, title };
        let obj = obj2;
      }
      return obj;
    }
    obj = { type: MarkupTypes.AST_KEY.LINK, content: null, target: null, title: "a" };
    const obj3 = { type: MarkupTypes.AST_KEY.TEXT, content: stripCredentialsForDisplay(url) };
    const items = [obj3];
    obj.content = items;
    obj.target = url;
    const tmp4 = stripCredentialsForDisplay(url);
  }
};