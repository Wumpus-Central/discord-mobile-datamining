// discord_app/modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx
import useProvisionalAccountApplicationDefault from "useProvisionalAccountApplication.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { HelpdeskArticles } from "../../../Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx");

export const useProvisionalAccountExplanationText = function useProvisionalAccountExplanationText(renderApplicationName) {
  renderApplicationName = renderApplicationName.renderApplicationName;
  const tmp = useProvisionalAccountApplicationDefault(renderApplicationName.userId);
  importDefault = tmp;
  const items = [tmp, renderApplicationName];
  return React.useMemo(() => {
    if (null != callback) {
      const intl = renderApplicationName(dependencyMap[3]).intl;
      let obj = { helpdeskArticle: null, applicationName: null };
      obj[0] = callback(dependencyMap[4]).getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS);
      obj[1] = function applicationName() {
        return callback(closure_1);
      };
      let formatResult = intl.format(renderApplicationName(dependencyMap[3]).t.rSUACb, obj);
      const obj2 = callback(dependencyMap[4]);
    } else {
      const intl2 = renderApplicationName(dependencyMap[3]).intl;
      obj = { helpdeskArticle: null };
      obj[0] = callback(dependencyMap[4]).getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS);
      formatResult = intl2.format(renderApplicationName(dependencyMap[3]).t["q+N8L6"], obj);
      const obj4 = callback(dependencyMap[4]);
    }
    return formatResult;
  }, items);
};