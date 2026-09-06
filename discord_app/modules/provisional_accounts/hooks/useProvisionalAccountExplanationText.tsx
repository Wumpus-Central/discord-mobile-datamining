// discord_app/modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx
import util from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import useProvisionalAccountApplicationDefault from "useProvisionalAccountApplication.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx",
);

export const useProvisionalAccountExplanationText = function useProvisionalAccountExplanationText(
  renderApplicationName,
) {
  renderApplicationName = renderApplicationName.renderApplicationName;
  const tmp = useProvisionalAccountApplicationDefault(renderApplicationName.userId);
  importDefault = tmp;
  const items = [tmp, renderApplicationName];
  return noop.useMemo(() => {
    if (null != closure_1) {
      const intl = util.intl;
      let obj = {
        helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS),
        applicationName() {
          return renderApplicationName(closure_1_1);
        },
      };
      let formatResult = intl.format(util.t.rSUACb, obj);
    } else {
      const intl2 = util.intl;
      obj = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS) };
      formatResult = intl2.format(util.t["q+N8L6"], obj);
    }
    return formatResult;
  }, items);
};
