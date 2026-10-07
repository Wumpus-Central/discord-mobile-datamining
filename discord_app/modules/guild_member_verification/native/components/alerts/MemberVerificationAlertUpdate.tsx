// === Module 6592: MemberVerificationAlertUpdate ===

// Module 6592 (MemberVerificationAlertUpdate)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import LinkingDefault from "Linking" /* 4571 */;
import Text_Text from "Text/Text" /* 4892 */;
import common_AlertDefault from "common/Alert" /* 5790 */;
import _modDef6593 from "module_6593" /* 6593 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const DownloadLinks = fn(1085).DownloadLinks;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({ headerImage: { marginLeft: "auto", marginRight: "auto", marginTop: 8 }, header: { marginTop: 24, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertUpdate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  const cResult = c.c(16);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.b8siyY);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t["ETE/oC"]);
    const fn = function u() {
      return LinkingDefault.openURL(constants.IOS);
    };
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    cResult[2] = fn;
    tmp5 = stringResult;
    tmp6 = stringResult1;
    tmp7 = fn;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  if (cResult[3] !== tmp4.headerImage) {
    const obj2 = { source: _modDef6593, style: tmp4.headerImage };
    const tmp14 = hasOwnProperty(Image, obj2);
    cResult[3] = tmp4.headerImage;
    cResult[4] = tmp14;
    let tmp10 = tmp14;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult2 = intl3.string(util.t.kkjNHU);
    cResult[5] = stringResult2;
    let tmp15 = stringResult2;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] !== tmp4.header) {
    const obj3 = { style: tmp4.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp15 };
    const tmp19 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[6] = tmp4.header;
    cResult[7] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = util.intl;
    const stringResult3 = intl4.string(util.t.gnkqzQ);
    cResult[8] = stringResult3;
    let tmp20 = stringResult3;
  } else {
    tmp20 = cResult[8];
  }
  if (cResult[9] !== tmp4.text) {
    const obj4 = { style: tmp4.text, variant: "text-sm/medium", color: "text-default", children: tmp20 };
    const tmp24 = hasOwnProperty(Text_Text.Text, obj4);
    cResult[9] = tmp4.text;
    cResult[10] = tmp24;
    let tmp22 = tmp24;
  } else {
    tmp22 = cResult[10];
  }
  if (cResult[11] === onClose) {
    if (cResult[12] === tmp22) {
      if (cResult[13] === tmp10) {
        if (cResult[14] === tmp17) {
          let tmp25 = cResult[15];
        }
        return tmp25;
      }
    }
  }
  const obj5 = {};
  const merged = Object.assign(onClose);
  obj5.confirmText = tmp5;
  obj5.cancelText = tmp6;
  obj5.onConfirm = tmp7;
  obj5.onCancel = onClose.onClose;
  const items = [tmp10, tmp17, tmp22];
  obj5.children = items;
  const tmp28 = timestampProducer(common_AlertDefault, obj5);
  cResult[11] = onClose;
  cResult[12] = tmp22;
  cResult[13] = tmp10;
  cResult[14] = tmp17;
  cResult[15] = tmp28;
  tmp25 = tmp28;
}) : ((onClose) => {
  const tmp = closure_7();
  const obj = {};
  const merged = Object.assign(onClose);
  const intl = util.intl;
  obj.confirmText = intl.string(util.t.b8siyY);
  const intl2 = util.intl;
  obj.cancelText = intl2.string(util.t["ETE/oC"]);
  obj.onConfirm = function onConfirm() {
    return LinkingDefault.openURL(constants.IOS);
  };
  obj.onCancel = onClose.onClose;
  const tmp2 = common_AlertDefault;
  const items = [hasOwnProperty(Image, { source: _modDef6593, style: tmp.headerImage }), , ];
  const obj3 = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = util.intl;
  obj3.children = intl3.string(util.t.kkjNHU);
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  const obj4 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = util.intl;
  obj4.children = intl4.string(util.t.gnkqzQ);
  items[2] = hasOwnProperty(Text_Text.Text, obj4);
  obj.children = items;
  return timestampProducer(tmp2, obj);
});