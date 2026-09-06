// === Module 12629: useProvisionalAccountExplanationText ===

// Module 12629 (useProvisionalAccountExplanationText)
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import useProvisionalAccountApplicationDefault from "useProvisionalAccountApplication" /* 12630 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const size = fn(2);
const result = size.fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx");

export const useProvisionalAccountExplanationText = function useProvisionalAccountExplanationText(renderApplicationName) {
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
          }
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