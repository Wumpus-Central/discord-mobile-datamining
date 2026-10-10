// === Module 15488: ResubscribedAlert ===

// Module 15488 (ResubscribedAlert)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5088 */;
import common_AlertDefault from "common/Alert" /* 5398 */;
import FastImageDefault from "FastImage" /* 6156 */;
import _modDef15489 from "module_15489" /* 15489 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL }, body: { alignItems: "center", textAlign: "center" }, centerText: { textAlign: "center" }, headerImage: { width: 87, height: 87 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ResubscribedAlert(onClose) {
  const cResult = c.c(20);
  onClose = onClose.onClose;
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["NX+WJN"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  ({ container, body } = tmp4);
  if (cResult[1] !== tmp4.headerImage) {
    const obj2 = { source: _modDef15489, style: tmp4.headerImage };
    const tmp11 = React4(FastImageDefault, obj2);
    cResult[1] = tmp4.headerImage;
    cResult[2] = tmp11;
    let tmp7 = tmp11;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = React4(native.Spacer, { size: 27 });
    cResult[3] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.oPV2cy);
    cResult[4] = stringResult1;
    let tmp15 = stringResult1;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== tmp4.centerText) {
    const obj3 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: tmp4.centerText, children: tmp15 };
    const tmp19 = React4(Text_Text.Text, obj3);
    cResult[5] = tmp4.centerText;
    cResult[6] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp22 = React4(native.Spacer, { size: 12 });
    cResult[7] = tmp22;
    let tmp20 = tmp22;
  } else {
    tmp20 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult2 = intl3.string(util.t.DdRizV);
    cResult[8] = stringResult2;
    let tmp23 = stringResult2;
  } else {
    tmp23 = cResult[8];
  }
  if (cResult[9] !== tmp4.centerText) {
    const obj4 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp4.centerText, children: tmp23 };
    const tmp27 = React4(Text_Text.Text, obj4);
    cResult[9] = tmp4.centerText;
    cResult[10] = tmp27;
    let tmp25 = tmp27;
  } else {
    tmp25 = cResult[10];
  }
  if (cResult[11] === tmp4.body) {
    if (cResult[12] === tmp25) {
      if (cResult[13] === tmp7) {
        if (cResult[14] === tmp17) {
          let tmp28 = cResult[15];
        }
        if (cResult[16] === onClose) {
          if (cResult[17] === tmp4.container) {
            if (cResult[18] === tmp28) {
              let tmp30 = cResult[19];
            }
            return tmp30;
          }
        }
        const obj5 = { confirmText: first, onConfirm: onClose, style: container, children: tmp28 };
        const tmp33 = React4(common_AlertDefault, obj5);
        cResult[16] = onClose;
        cResult[17] = tmp4.container;
        cResult[18] = tmp28;
        cResult[19] = tmp33;
        tmp30 = tmp33;
      }
    }
  }
  const obj6 = { style: body, children: null };
  const items = [tmp7, tmp12, tmp17, tmp20, tmp25];
  obj6.children = items;
  const tmp29 = hasOwnProperty(View, obj6);
  cResult[11] = tmp4.body;
  cResult[12] = tmp25;
  cResult[13] = tmp7;
  cResult[14] = tmp17;
  cResult[15] = tmp29;
  tmp28 = tmp29;
}) : (function ResubscribedAlert(onClose) {
  const tmp = closure_6();
  const obj = { confirmText: null, onConfirm: null, style: null, children: null };
  const intl = util.intl;
  obj.confirmText = intl.string(util.t["NX+WJN"]);
  obj.onConfirm = onClose.onClose;
  obj.style = tmp.container;
  const obj2 = { style: tmp.body, children: null };
  const obj3 = { source: null, style: null };
  const tmp2 = common_AlertDefault;
  obj3.source = _modDef15489;
  obj3.style = tmp.headerImage;
  const items = [React4(FastImageDefault, obj3), React4(native.Spacer, { size: 27 }), , , ];
  const obj4 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.oPV2cy);
  items[2] = React4(Text_Text.Text, obj4);
  items[3] = React4(native.Spacer, { size: 12 });
  const obj5 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl3 = util.intl;
  obj5.children = intl3.string(util.t.DdRizV);
  items[4] = React4(Text_Text.Text, obj5);
  obj2.children = items;
  obj.children = hasOwnProperty(View, obj2);
  return React4(tmp2, obj);
});