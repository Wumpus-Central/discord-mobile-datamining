// === Module 15051: ResubscribedAlert ===

// Module 15051 (ResubscribedAlert)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import AlertDefault from "Alert" /* 5790 */;
import AssetRegistryDefault from "AssetRegistry" /* 15052 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onClose;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, body: { alignItems: "center", textAlign: "center" }, centerText: { textAlign: "center" }, headerImage: { width: 87, height: 87 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_7 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let body;
  let container;
  let first;
  let items;
  let tmp12;
  let tmp15;
  let tmp17;
  let tmp20;
  let tmp23;
  let tmp25;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(20);
  onClose = onClose.onClose;
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t["NX+WJN"]);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  ({ container, body } = tmp4);
  if (cResult[1] !== tmp4.headerImage) {
    const obj2 = { source: AssetRegistryDefault, style: tmp4.headerImage };
    const tmp11 = hasOwnProperty(React3, obj2);
    cResult[1] = tmp4.headerImage;
    cResult[2] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = hasOwnProperty(native.Spacer, { size: 27 });
    cResult[3] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  const centerText = tmp4.centerText;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t.oPV2cy);
    cResult[4] = stringResult1;
    tmp15 = stringResult1;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== tmp4.centerText) {
    const obj3 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: centerText, children: tmp15 };
    const tmp19 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[5] = tmp4.centerText;
    cResult[6] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp22 = hasOwnProperty(native.Spacer, { size: 12 });
    cResult[7] = tmp22;
    tmp20 = tmp22;
  } else {
    tmp20 = cResult[7];
  }
  const centerText2 = tmp4.centerText;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl4.intl;
    const stringResult2 = intl3.string(intl4.t.DdRizV);
    cResult[8] = stringResult2;
    tmp23 = stringResult2;
  } else {
    tmp23 = cResult[8];
  }
  if (cResult[9] !== tmp4.centerText) {
    const obj4 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: centerText2, children: tmp23 };
    const tmp27 = hasOwnProperty(Text_Text.Text, obj4);
    cResult[9] = tmp4.centerText;
    cResult[10] = tmp27;
    tmp25 = tmp27;
  } else {
    tmp25 = cResult[10];
  }
  if (cResult[11] === tmp4.body) {
    if (cResult[12] === tmp25) {
      if (cResult[13] === tmp7) {
        let tmp28;
        if (cResult[14] === tmp17) {
          tmp28 = cResult[15];
        }
        if (cResult[16] === onClose) {
          if (cResult[17] === tmp4.container) {
            let tmp30;
            if (cResult[18] === tmp28) {
              tmp30 = cResult[19];
            }
            return tmp30;
          }
        }
        const obj5 = { confirmText: first, onConfirm: onClose, style: container, children: tmp28 };
        const tmp33 = hasOwnProperty(AlertDefault, obj5);
        cResult[16] = onClose;
        cResult[17] = tmp4.container;
        cResult[18] = tmp28;
        cResult[19] = tmp33;
        tmp30 = tmp33;
      }
    }
  }
  const obj6 = { style: body, children: items };
  items = [tmp7, tmp12, tmp17, tmp20, tmp25];
  const tmp29 = metroRequire(_false, obj6);
  cResult[11] = tmp4.body;
  cResult[12] = tmp25;
  cResult[13] = tmp7;
  cResult[14] = tmp17;
  cResult[15] = tmp29;
  tmp28 = tmp29;
}) : ((onClose) => {
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  onClose = onClose.onClose;
  const tmp = closure_7();
  const obj = { confirmText: intl.string(intl4.t["NX+WJN"]), onConfirm: onClose, style: tmp.container, children: metroRequire(_false, obj2) };
  const tmp2 = AlertDefault;
  intl = intl4.intl;
  obj2 = { style: tmp.body, children: items };
  items = [, , , , ];
  const obj3 = { source: AssetRegistryDefault, style: tmp.headerImage };
  items[0] = hasOwnProperty(React3, obj3);
  items[1] = hasOwnProperty(native.Spacer, { size: 27 });
  const obj4 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centerText, children: intl2.string(intl4.t.oPV2cy) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = hasOwnProperty(Text, obj4);
  items[3] = hasOwnProperty(native.Spacer, { size: 12 });
  const obj5 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.centerText, children: intl3.string(intl4.t.DdRizV) };
  const Text2 = Text_Text.Text;
  intl3 = intl4.intl;
  items[4] = hasOwnProperty(Text2, obj5);
  return hasOwnProperty(tmp2, obj);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx");

export default tmp5;