// discord_app/modules/activities/utils/activityShareLink.tsx
import URLUtilsDefault from "../../../utils/URLUtils.tsx";
import findCodedLinks from "../../coded_links/findCodedLinks.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const items = [findCodedLinks.parseQuestsEmbedCode];
const result = size.fileFinishedImporting("modules/activities/utils/activityShareLink.tsx");

export const resolveActivityShareMessageContent = function resolveActivityShareMessageContent(str, name, link) {
  _require = false;
  const replaced = str.replaceAll(URLUtilsDefault.URL_REGEX, (arg0) => {
    closure_0 = arg0;
    const someResult = items.some((fn) => null != fn(closure_0));
    if (someResult) {
      c0 = true;
    }
    let combined = arg0;
    if (!someResult) {
      const _HermesInternal = HermesInternal;
      combined = "`" + arg0 + "`";
    }
    return combined;
  });
  let combined = replaced;
  if (!_require) {
    const intl = require("util").intl;
    const obj = { applicationName: name.name, link };
    let _HermesInternal = HermesInternal;
    combined = "" + replaced + "\n\n" + intl.formatToMarkdownString(require("util").t.dZJpdG, obj);
  }
  return combined;
};
