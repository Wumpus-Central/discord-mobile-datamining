// === Module 8130: transformNativeMarkupLink ===

// Module 8130 (transformNativeMarkupLink)
import MarkupTypes from "MarkupTypes" /* 5010 */;
import UnicodeSanitizationUtils from "UnicodeSanitizationUtils" /* 5016 */;
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
        let obj = { type: MarkupTypes.AST_KEY.LINK, content: transformNativeInline(text, channelId), target: url, title };
      }
      return obj;
    }
    obj = { type: MarkupTypes.AST_KEY.LINK, content: null, target: null, title: "a" };
    obj = { type: MarkupTypes.AST_KEY.TEXT, content: stripCredentialsForDisplay(url) };
    const items = [obj];
    obj.content = items;
    obj.target = url;
    const tmp4 = stripCredentialsForDisplay(url);
  }
};