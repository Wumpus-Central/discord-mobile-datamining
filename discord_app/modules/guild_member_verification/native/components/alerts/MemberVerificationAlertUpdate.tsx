// === Module 7252: MemberVerificationAlertUpdate ===

// Module 7252 (MemberVerificationAlertUpdate)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import LinkingDefault from "Linking" /* 5704 */;
import FastImageDefault from "FastImage" /* 5712 */;
import common_AlertDefault from "common/Alert" /* 6025 */;
import _modDef7253 from "module_7253" /* 7253 */;
import noop from "module_19" /* 19 */;

require = fn;
const DownloadLinks = fn(1072).DownloadLinks;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let closure_6 = createStyles.createStyles({ headerImage: { marginLeft: "auto", marginRight: "auto", marginTop: 8 }, header: { marginTop: 24, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertUpdate.tsx");

export default function MemberVerificationAlertUpdate(onClose) {
  const tmp = closure_6();
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
  const obj2 = { source: null, style: null };
  const tmp2 = common_AlertDefault;
  obj2.source = _modDef7253;
  obj2.style = tmp.headerImage;
  const items = [React4(FastImageDefault, obj2), , ];
  const obj3 = { style: tmp.header, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = util.intl;
  obj3.children = intl3.string(util.t.kkjNHU);
  items[1] = React4(Text_Text.Text, obj3);
  const obj4 = { style: tmp.text, variant: "text-sm/medium", color: "text-default", children: null };
  const intl4 = util.intl;
  obj4.children = intl4.string(util.t.gnkqzQ);
  items[2] = React4(Text_Text.Text, obj4);
  obj.children = items;
  return hasOwnProperty(tmp2, obj);
};