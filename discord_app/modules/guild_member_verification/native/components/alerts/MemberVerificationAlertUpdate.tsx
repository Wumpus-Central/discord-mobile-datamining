// === Module 7204: MemberVerificationAlertUpdate ===

// Module 7204 (MemberVerificationAlertUpdate)
import util from "util" /* 1115 */;
import LinkingDefault from "Linking" /* 4334 */;
import Text_Text from "Text/Text" /* 4636 */;
import common_AlertDefault from "common/Alert" /* 5081 */;
import _modDef7205 from "module_7205" /* 7205 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const DownloadLinks = fn(1074).DownloadLinks;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4640);
let closure_7 = createStyles.createStyles({ headerImage: { marginLeft: "auto", marginRight: "auto", marginTop: 8 }, header: { marginTop: 24, textAlign: "center" }, text: { marginVertical: 8, lineHeight: 18, textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/alerts/MemberVerificationAlertUpdate.tsx");

export default function MemberVerificationAlertUpdate(onClose) {
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
  const items = [hasOwnProperty(Image, { source: _modDef7205, style: tmp.headerImage }), , ];
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
};