// === Module 12310: useProvisionalAccountExplanationText ===

// Module 12310 (useProvisionalAccountExplanationText)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import useProvisionalAccountApplicationDefault from "useProvisionalAccountApplication" /* 12311 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, renderApplicationName;

const HelpdeskArticles = Constants.HelpdeskArticles;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((renderApplicationName) => {
  let tmp4Result;
  let tmp4Result2;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(4);
  renderApplicationName = renderApplicationName.renderApplicationName;
  const tmp5 = useProvisionalAccountApplicationDefault(renderApplicationName.userId);
  let closure_1 = tmp5;
  if (null != tmp5) {
    if (cResult[0] === tmp5) {
      let tmp10;
      if (cResult[1] === renderApplicationName) {
        tmp10 = cResult[2];
      }
      tmp6 = tmp10;
    }
    const intl2 = intl3.intl;
    const format2 = intl2.format;
    const obj2 = {
      helpdeskArticle: tmp4Result.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS),
      applicationName() {
          return renderApplicationName(closure_1);
        }
    };
    const rSUACb = intl3.t.rSUACb;
    tmp4Result = HelpdeskUtilsDefault;
    const format2Result = format2(rSUACb, obj2);
    cResult[0] = tmp5;
    cResult[1] = renderApplicationName;
    cResult[2] = format2Result;
    tmp10 = format2Result;
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl3.intl;
      const format = intl.format;
      const obj3 = { helpdeskArticle: tmp4Result2.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS) };
      const prop = intl3.t["q+N8L6"];
      tmp4Result2 = HelpdeskUtilsDefault;
      const formatResult = format(prop, obj3);
      cResult[3] = formatResult;
      tmp6 = formatResult;
    } else {
      tmp6 = cResult[3];
    }
  }
  return tmp6;
}) : ((renderApplicationName) => {
  let closure_1;
  renderApplicationName = renderApplicationName.renderApplicationName;
  const tmp = useProvisionalAccountApplicationDefault(renderApplicationName.userId);
  importDefault = tmp;
  const items = [tmp, renderApplicationName];
  return react.useMemo(() => {
    let formatResult;
    let obj2;
    let obj4;
    if (null != closure_1) {
      const intl = intl3.intl;
      const format = intl.format;
      const obj = {
        helpdeskArticle: obj2.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS),
        applicationName() {
            return renderApplicationName(closure_1_1);
          }
      };
      const rSUACb = intl3.t.rSUACb;
      obj2 = HelpdeskUtilsDefault;
      formatResult = format(rSUACb, obj);
    } else {
      const intl2 = intl3.intl;
      const format2 = intl2.format;
      const obj3 = { helpdeskArticle: obj4.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS) };
      const prop = intl3.t["q+N8L6"];
      obj4 = HelpdeskUtilsDefault;
      formatResult = format2(prop, obj3);
    }
    return formatResult;
  }, items);
});
const result = size.fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountExplanationText.tsx");

export const useProvisionalAccountExplanationText = tmp2;