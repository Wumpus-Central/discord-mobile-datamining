// === Module 16062: MemberVerificationAlertUpdate ===

// Module 16062 (MemberVerificationAlertUpdate)
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5929 */;
import LinkingDefault from "Linking" /* 6012 */;
import FastImageDefault from "FastImage" /* 6020 */;
import common_AlertDefault from "common/Alert" /* 6340 */;
import _modDef16063 from "module_16063" /* 16063 */;
import noop from "module_19" /* 19 */;

require = fn;
const DownloadLinks = fn(1072).DownloadLinks;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5306);
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
  obj2.source = _modDef16063;
  obj2.style = tmp.headerImage;
  items = [React4(FastImageDefault, obj2), , ];
  const obj3 = { style: tmp.header, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = util.intl;
  obj3.children = intl3.string(util.t.kkjNHU);
  items[1] = React4(Text_Text.Text, obj3);
  const obj4 = { style: tmp.text, variant: "body-sm/medium", color: "text-default", children: null };
  const intl4 = util.intl;
  obj4.children = intl4.string(util.t.gnkqzQ);
  items[2] = React4(Text_Text.Text, obj4);
  obj.children = items;
  return hasOwnProperty(tmp2, obj);
};