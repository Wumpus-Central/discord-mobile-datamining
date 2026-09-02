// === Module 12391: useProvisionalAccountExplanationText ===

// Module 12391 (useProvisionalAccountExplanationText)
import useProvisionalAccountApplicationDefault from "useProvisionalAccountApplication" /* 12392 */;
import closure_3 from "noop" /* 19 */;
import { HelpdeskArticles } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx");

export const useProvisionalAccountExplanationText = function useProvisionalAccountExplanationText(renderApplicationName) {
  renderApplicationName = renderApplicationName.renderApplicationName;
  importDefault = undefined;
  const tmp = useProvisionalAccountApplicationDefault(renderApplicationName.userId);
  importDefault = tmp;
  const items = [tmp, renderApplicationName];
  return React.useMemo(() => {
    if (null != callback) {
      const intl = renderApplicationName(closure_1_2[3]).intl;
      let obj = { helpdeskArticle: null, applicationName: null };
      obj[0] = callback(closure_1_2[4]).getArticleURL(closure_1_4.SLAYER_PROVISIONAL_ACCOUNTS);
      obj[1] = function applicationName() {
        return callback(closure_1);
      };
      let formatResult = intl.format(renderApplicationName(closure_1_2[3]).t.rSUACb, obj);
      const obj2 = callback(closure_1_2[4]);
    } else {
      const intl2 = renderApplicationName(closure_1_2[3]).intl;
      obj = { helpdeskArticle: null };
      obj[0] = callback(closure_1_2[4]).getArticleURL(closure_1_4.SLAYER_PROVISIONAL_ACCOUNTS);
      formatResult = intl2.format(renderApplicationName(closure_1_2[3]).t["q+N8L6"], obj);
      const obj4 = callback(closure_1_2[4]);
    }
    return formatResult;
  }, items);
};