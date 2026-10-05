// === Module 13611: ProvisionalAccountNoCallAllowed ===

// Module 13611 (ProvisionalAccountNoCallAllowed)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import CircleErrorIcon from "CircleErrorIcon" /* 4800 */;
import AlertModal2 from "AlertModal" /* 5713 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ header: { alignSelf: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl3;
  let obj4;
  let tmp15;
  let tmp18;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
  const tmp4 = closure_5();
  if (cResult[0] !== tmp4.header) {
    const tmp7 = jsx(CircleErrorIcon.CircleErrorIcon, { size: "lg", style: tmp4.header });
    cResult[0] = tmp4.header;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t["vh+Zpq"]);
    const intl2 = intl4.intl;
    const format = intl2.format;
    const obj3 = { helpdeskArticle: obj4.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS) };
    const prop = intl4.t["tx08s+"];
    obj4 = HelpdeskUtilsDefault;
    const formatResult = format(prop, obj3);
    cResult[2] = stringResult;
    cResult[3] = formatResult;
    tmp9 = formatResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const AlertActions = AlertModal2.AlertActions;
    ({ variant: "secondary", text: intl3.string(intl4.t["NX+WJN"]) });
    const AlertActionButton = AlertModal2.AlertActionButton;
    intl3 = intl4.intl;
    const tmp17 = <AlertActions>{null}</AlertActions>;
    cResult[4] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== tmp5) {
    const tmp20 = jsx(AlertModal2.AlertModal, { header: tmp5, title: tmp8, content: tmp9, actions: tmp15 });
    cResult[5] = tmp5;
    cResult[6] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[6];
  }
  return tmp18;
}) : (() => {
  let intl3;
  let obj4;
  const tmp = closure_5();
  const AlertModal = AlertModal2.AlertModal;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  const format = intl2.format;
  const obj3 = { helpdeskArticle: obj4.getArticleURL(HelpdeskArticles.SLAYER_PROVISIONAL_ACCOUNTS) };
  const prop = intl4.t["tx08s+"];
  obj4 = HelpdeskUtilsDefault;
  const AlertActions = AlertModal2.AlertActions;
  ({ variant: "secondary", text: intl3.string(intl4.t["NX+WJN"]) });
  const AlertActionButton = AlertModal2.AlertActionButton;
  intl3 = intl4.intl;
  return <AlertModal header={null} title={intl.string(intl4.t["vh+Zpq"])} content={format(prop, obj3)} actions={null} />;
});
const result = size.fileFinishedImporting("modules/provisional_accounts/native/ProvisionalAccountNoCallAllowed.tsx");

export default tmp3;