// discord_app/modules/activities/utils/activityShareLink.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import isDiscordProxiedAssetUrlDefault from "../../../utils/URLUtils.tsx";
import trimTrailingPunctuation from "../../coded_links/findCodedLinks.tsx";

const items = [trimTrailingPunctuation.parseQuestsEmbedCode];
const result = obj132.fileFinishedImporting("modules/activities/utils/activityShareLink.tsx");

export const resolveActivityShareMessageContent = function resolveActivityShareMessageContent(c3, closure_14, closure_12) {
  const _require = false;
  const replaced = items.replaceAll(isDiscordProxiedAssetUrlDefault.URL_REGEX, (arg0) => {
    c0 = arg0;
    const someResult = items.some((item, index) => null != item(c0));
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
    const intl = require("../../../intl/index.native.tsx").intl;
    const obj = { applicationName: null, link: null };
    obj[0] = name.name;
    obj[1] = closure_12;
    let _HermesInternal = HermesInternal;
    combined = "" + replaced + "\n\n" + intl.formatToMarkdownString(require("../../../intl/index.native.tsx").t.dZJpdG, obj);
  }
  return combined;
};