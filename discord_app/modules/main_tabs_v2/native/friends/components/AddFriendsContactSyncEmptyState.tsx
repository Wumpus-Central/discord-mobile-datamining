// === Module 16968: AddFriendsContactSyncEmptyState ===

// Module 16968 (AddFriendsContactSyncEmptyState)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12340 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12344 */;
import AssetRegistryDefault from "AssetRegistry" /* 12357 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, headerImage: size, title: obj3, subtitle: obj4, subtitleText: { textAlign: "center" }, trailing: obj5 };
obj2 = { alignItems: "center", marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
size = { height: 135, width: 216, marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
obj3 = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
obj4 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
obj5 = { width: "100%", paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_7 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl3;
  let items;
  let subtitle;
  let subtitleText;
  let tmp11;
  let tmp13;
  let tmp16;
  let tmp18;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(21);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = ContactSyncModalActionCreators;
      obj.openContactSyncModal({}, "Add Friends Contact Sync Empty State");
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const content = tmp4.content;
  if (cResult[1] !== tmp4.headerImage) {
    const obj2 = { resizeMode: "contain", style: tmp4.headerImage, source: AssetRegistryDefault };
    const tmp10 = hasOwnProperty(React3, obj2);
    cResult[1] = tmp4.headerImage;
    cResult[2] = tmp10;
    tmp6 = tmp10;
  } else {
    tmp6 = cResult[2];
  }
  const title = tmp4.title;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t["/G+nci"]);
    cResult[3] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== tmp4.title) {
    const obj3 = { style: title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: tmp11 };
    const tmp15 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[4] = tmp4.title;
    cResult[5] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  ({ subtitle, subtitleText } = tmp4);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const format = intl2.format;
    const obj4 = { learnMoreHook: ContactSyncUtils.handleOpenLearnMoreLink };
    const OXdOPf = intl4.t.OXdOPf;
    const formatResult = format(OXdOPf, obj4);
    cResult[6] = formatResult;
    tmp16 = formatResult;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] !== tmp4.subtitleText) {
    const obj5 = { style: subtitleText, variant: "text-sm/medium", children: tmp16 };
    const tmp20 = hasOwnProperty(Text_Text.Text, obj5);
    cResult[7] = tmp4.subtitleText;
    cResult[8] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] === tmp4.subtitle) {
    let tmp21;
    let tmp23;
    let tmp26;
    if (cResult[10] === tmp18) {
      tmp21 = cResult[11];
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { variant: "primary", size: "lg", text: intl3.string(intl4.t.QUXSpo), onPress: first };
      const Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      const tmp25 = hasOwnProperty(Button, obj6);
      cResult[12] = tmp25;
      tmp23 = tmp25;
    } else {
      tmp23 = cResult[12];
    }
    if (cResult[13] !== tmp4.trailing) {
      const obj7 = { style: tmp4.trailing, children: tmp23 };
      const tmp29 = hasOwnProperty(_false, obj7);
      cResult[13] = tmp4.trailing;
      cResult[14] = tmp29;
      tmp26 = tmp29;
    } else {
      tmp26 = cResult[14];
    }
    if (cResult[15] === tmp4.content) {
      if (cResult[16] === tmp21) {
        if (cResult[17] === tmp26) {
          if (cResult[18] === tmp6) {
            let tmp30;
            if (cResult[19] === tmp13) {
              tmp30 = cResult[20];
            }
            return tmp30;
          }
        }
      }
    }
    const obj8 = { style: content, children: items };
    items = [tmp6, tmp13, tmp21, tmp26];
    const tmp33 = metroRequire(_false, obj8);
    cResult[15] = tmp4.content;
    cResult[16] = tmp21;
    cResult[17] = tmp26;
    cResult[18] = tmp6;
    cResult[19] = tmp13;
    cResult[20] = tmp33;
    tmp30 = tmp33;
  }
  const tmp22 = hasOwnProperty(_false, { style: subtitle, children: tmp18 });
  cResult[9] = tmp4.subtitle;
  cResult[10] = tmp18;
  cResult[11] = tmp22;
  tmp21 = tmp22;
}) : (() => {
  let Button;
  let OXdOPf;
  let Text2;
  let format;
  let intl;
  let intl3;
  let items;
  let obj5;
  let obj6;
  let obj8;
  const tmp = closure_7();
  let obj = { style: tmp.content, children: items };
  items = [, , , ];
  const obj2 = { resizeMode: "contain", style: tmp.headerImage, source: AssetRegistryDefault };
  items[0] = hasOwnProperty(React3, obj2);
  const obj3 = { style: tmp.title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["/G+nci"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = hasOwnProperty(Text, obj3);
  const obj4 = { style: tmp.subtitle, children: hasOwnProperty(Text2, obj5) };
  obj5 = { style: tmp.subtitleText, variant: "text-sm/medium", children: format(OXdOPf, obj6) };
  Text2 = Text_Text.Text;
  const intl2 = intl4.intl;
  format = intl2.format;
  obj6 = { learnMoreHook: ContactSyncUtils.handleOpenLearnMoreLink };
  OXdOPf = intl4.t.OXdOPf;
  items[2] = hasOwnProperty(_false, obj4);
  const obj7 = { style: tmp.trailing, children: hasOwnProperty(Button, obj8) };
  obj8 = {
    variant: "primary",
    size: "lg",
    text: intl3.string(intl4.t.QUXSpo),
    onPress() {
      const obj = ContactSyncModalActionCreators;
      obj.openContactSyncModal({}, "Add Friends Contact Sync Empty State");
    }
  };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items[3] = hasOwnProperty(_false, obj7);
  return metroRequire(_false, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsContactSyncEmptyState.tsx");

export default tmp6;