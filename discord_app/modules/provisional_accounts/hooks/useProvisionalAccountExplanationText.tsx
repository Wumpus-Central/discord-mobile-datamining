// === Module 11736: useProvisionalAccountExplanationText ===

// Module 11736 (useProvisionalAccountExplanationText)
import noop from "noop";
import { HelpdeskArticles } from "ME";

const require = arg1;
const result = require("useProvisionalAccountApplication").fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx");

export const useProvisionalAccountExplanationText = function useProvisionalAccountExplanationText(renderApplicationName) {
  renderApplicationName = renderApplicationName.renderApplicationName;
  let importDefault;
  const tmp = importDefault(11737)(renderApplicationName.userId);
  importDefault = tmp;
  const items = [tmp, renderApplicationName];
  return React.useMemo(() => {
    if (null != _undefined) {
      const intl = renderApplicationName(outer1_2[3]).intl;
      let obj = { helpdeskArticle: null, applicationName: null };
      obj[0] = _undefined(outer1_2[4]).getArticleURL(outer1_4.SLAYER_PROVISIONAL_ACCOUNTS);
      obj[1] = function applicationName() {
        return callback(closure_1);
      };
      let formatResult = intl.format(renderApplicationName(outer1_2[3]).t.rSUACb, obj);
      const obj2 = _undefined(outer1_2[4]);
    } else {
      const intl2 = renderApplicationName(outer1_2[3]).intl;
      obj = { helpdeskArticle: null };
      obj[0] = _undefined(outer1_2[4]).getArticleURL(outer1_4.SLAYER_PROVISIONAL_ACCOUNTS);
      formatResult = intl2.format(renderApplicationName(outer1_2[3]).t["q+N8L6"], obj);
      const obj4 = _undefined(outer1_2[4]);
    }
    return formatResult;
  }, items);
};