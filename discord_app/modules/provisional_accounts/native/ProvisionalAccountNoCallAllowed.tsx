// === Module 14062: ProvisionalAccountNoCallAllowed ===

// Module 14062 (ProvisionalAccountNoCallAllowed)
import util from "util" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import AlertModal from "AlertModal" /* 5114 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6847 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_5 = createStyles.createStyles({ header: { alignSelf: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountNoCallAllowed.tsx");

export default function ProvisionalAccountNoCallAllowed() {
  const obj = { header: null, title: null, content: null, actions: null };
  const tmp = closure_5();
  obj.header = jsx(CircleErrorIcon.CircleErrorIcon, { size: "lg", style: closure_5().header });
  const intl = util.intl;
  obj.title = intl.string(util.t["vh+Zpq"]);
  const intl2 = util.intl;
  const obj3 = { helpdeskArticle: null };
  const obj2 = { size: "lg", style: closure_5().header };
  obj3.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS);
  obj.content = intl2.format(util.t["tx08s+"], obj3);
  const obj5 = { children: null };
  const obj6 = { variant: "secondary", text: null };
  const intl3 = util.intl;
  obj6.text = intl3.string(util.t["NX+WJN"]);
  obj5.children = jsx(AlertModal.AlertActionButton, { variant: "secondary", text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { header: null, title: null, content: null, actions: null });
};