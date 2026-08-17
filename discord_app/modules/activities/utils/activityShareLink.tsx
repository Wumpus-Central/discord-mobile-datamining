// discord_app/modules/activities/utils/activityShareLink.tsx
import set from "../../../../_runtime/00002_set.js";
import isDiscordProxiedAssetUrlDefault from "../../../utils/URLUtils.tsx";
import trimTrailingPunctuation from "../../coded_links/findCodedLinks.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

const items = [trimTrailingPunctuation.parseQuestsEmbedCode];
const result = set.fileFinishedImporting("modules/activities/utils/activityShareLink.tsx");

export const resolveActivityShareMessageContent = function resolveActivityShareMessageContent(c3, closure_14, closure_12) {
  const _require = false;
  const replaced = c3.replaceAll(isDiscordProxiedAssetUrlDefault.URL_REGEX, (arg0) => {
    c0 = arg0;
    const someResult = closure_1_3.some((arg0) => null != arg0(c0));
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
    const intl = _getSystemLocale.intl;
    const obj = { applicationName: null, link: null };
    obj[0] = closure_14.name;
    obj[1] = closure_12;
    let _HermesInternal = HermesInternal;
    combined = "" + replaced + "\n\n" + intl.formatToMarkdownString(_getSystemLocale.t.dZJpdG, obj);
  }
  return combined;
};