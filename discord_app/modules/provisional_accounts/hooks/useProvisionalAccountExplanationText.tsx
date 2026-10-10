// discord_app/modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx
import c from "../../../../_runtime/00576_c.js";
import useProvisionalAccountApplicationDefault from "useProvisionalAccountApplication.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const util = rSUACb(1126);
const HelpdeskUtilsDefault = tmp2(2128);
require = fn;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx",
);

export const useProvisionalAccountExplanationText = ReactCompilerGating.isReactCompilerEnabled()
  ? function useProvisionalAccountExplanationText(renderApplicationName) {
      let rSUACb = require;
      let getArticleURL = dependencyMap;
      const cResult = c.c(4);
      renderApplicationName = renderApplicationName.renderApplicationName;
      let tmp2 = importDefault;
      const tmp3 = useProvisionalAccountApplicationDefault(renderApplicationName.userId);
      closure_1 = tmp3;
      if (null != tmp3) {
        if (cResult[0] === tmp3) {
        }
        const intl2 = util.intl;
        rSUACb = util.t.rSUACb;
        const obj2 = { helpdeskArticle: null, applicationName: null };
        tmp2 = HelpdeskUtilsDefault;
        getArticleURL = tmp2.getArticleURL;
        obj2.helpdeskArticle = getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS);
        obj2.applicationName = function applicationName() {
          return renderApplicationName(closure_1);
        };
        const formatResult = intl2.format(rSUACb, obj2);
        cResult[0] = tmp3;
        cResult[1] = renderApplicationName;
        cResult[2] = formatResult;
      } else {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const obj3 = {
            helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS),
          };
          const formatResult1 = intl.format(util.t["q+N8L6"], obj3);
          cResult[3] = formatResult1;
          let tmp4 = formatResult1;
          const tmp2Result = HelpdeskUtilsDefault;
        } else {
          tmp4 = cResult[3];
        }
        return tmp4;
      }
    }
  : function useProvisionalAccountExplanationText(renderApplicationName) {
      renderApplicationName = renderApplicationName.renderApplicationName;
      const tmp = useProvisionalAccountApplicationDefault(renderApplicationName.userId);
      importDefault = tmp;
      const items = [tmp, renderApplicationName];
      return noop.useMemo(() => {
        if (null != closure_1) {
          const intl = util.intl;
          const obj = {
            helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS),
            applicationName() {
              return renderApplicationName(closure_1_1);
            },
          };
          let formatResult = intl.format(util.t.rSUACb, obj);
        } else {
          const intl2 = util.intl;
          const obj3 = {
            helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS),
          };
          formatResult = intl2.format(util.t["q+N8L6"], obj3);
        }
        return formatResult;
      }, items);
    };
