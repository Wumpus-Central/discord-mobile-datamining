// discord_app/modules/activities/utils/activityShareLink.tsx
import URLUtilsDefault from "../../../utils/URLUtils.tsx";
import findCodedLinks from "../../coded_links/findCodedLinks.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c0;

const items = [findCodedLinks.parseQuestsEmbedCode];
const result = size.fileFinishedImporting("modules/activities/utils/activityShareLink.tsx");

export const resolveActivityShareMessageContent = function resolveActivityShareMessageContent(c3, name, link) {
  _require = false;
  const replaced = items.replaceAll(URLUtilsDefault.URL_REGEX, (arg0) => {
    let closure_0 = arg0;
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
    const intl = require("intl").intl;
    let _HermesInternal = HermesInternal;
    const obj = { applicationName: name.name, link };
    combined = "" + replaced + "\n\n" + intl.formatToMarkdownString(require("intl").t.dZJpdG, obj);
  }
  return combined;
};
