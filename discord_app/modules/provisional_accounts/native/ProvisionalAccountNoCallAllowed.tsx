// === Module 13800: ProvisionalAccountNoCallAllowed ===

// Module 13800 (ProvisionalAccountNoCallAllowed)
import util from "util" /* 1114 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import AlertModal from "AlertModal" /* 4910 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6610 */;
import noop from "module_19" /* 19 */;

require = fn;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ header: { alignSelf: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountNoCallAllowed.tsx");

export default function ProvisionalAccountNoCallAllowed() {
  let obj = { header: null, title: null, content: null, actions: null };
  obj = { size: "lg", style: closure_5().header };
  obj.header = jsx(CircleErrorIcon.CircleErrorIcon, { size: "lg", style: closure_5().header });
  const intl = util.intl;
  obj.title = intl.string(util.t["vh+Zpq"]);
  const intl2 = util.intl;
  obj = { helpdeskArticle: null };
  const tmp = closure_5();
  obj.helpdeskArticle = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS);
  obj.content = intl2.format(util.t["tx08s+"], obj);
  const obj1 = { children: null };
  const obj2 = { variant: "secondary", text: null };
  const intl3 = util.intl;
  obj2.text = intl3.string(util.t["NX+WJN"]);
  obj1.children = jsx(AlertModal.AlertActionButton, { variant: "secondary", text: null }, "got-it");
  obj.actions = jsx(AlertModal.AlertActions, { children: null });
  return jsx(AlertModal.AlertModal, { helpdeskArticle: null });
};