// === Module 16923: AddFriendsContactSyncEmptyState ===

// Module 16923 (AddFriendsContactSyncEmptyState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12325 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12329 */;
import _modDef12342 from "module_12342" /* 12342 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { content: { alignItems: "center", marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg }, headerImage: null, title: null, subtitle: null, subtitleText: null, trailing: null };
let size = { height: 135, width: 216, marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
obj2.headerImage = size;
let obj3 = { alignItems: "center", marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
obj2.title = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
let obj4 = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
obj2.subtitle = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
obj2.subtitleText = { textAlign: "center" };
let obj5 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
obj2.trailing = { width: "100%", paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { width: "100%", paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsContactSyncEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(21);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      ContactSyncModalActionCreators.openContactSyncModal({}, "Add Friends Contact Sync Empty State");
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.headerImage) {
    const obj2 = { resizeMode: "contain", style: tmp4.headerImage, source: _modDef12342 };
    const tmp10 = hasOwnProperty(React4, obj2);
    cResult[1] = tmp4.headerImage;
    cResult[2] = tmp10;
    let tmp6 = tmp10;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["/G+nci"]);
    cResult[3] = stringResult;
    let tmp11 = stringResult;
  } else {
    tmp11 = cResult[3];
  }
  if (cResult[4] !== tmp4.title) {
    const obj3 = { style: tmp4.title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: tmp11 };
    const tmp15 = hasOwnProperty(Text_Text.Text, obj3);
    cResult[4] = tmp4.title;
    cResult[5] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[5];
  }
  ({ subtitle, subtitleText } = tmp4);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const obj4 = { learnMoreHook: ContactSyncUtils.handleOpenLearnMoreLink };
    const formatResult = intl2.format(util.t.OXdOPf, obj4);
    cResult[6] = formatResult;
    let tmp16 = formatResult;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] !== tmp4.subtitleText) {
    const obj5 = { style: subtitleText, variant: "text-sm/medium", children: tmp16 };
    const tmp20 = hasOwnProperty(Text_Text.Text, obj5);
    cResult[7] = tmp4.subtitleText;
    cResult[8] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[8];
  }
  if (cResult[9] === tmp4.subtitle) {
    if (cResult[10] === tmp18) {
      let tmp21 = cResult[11];
    }
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { variant: "primary", size: "lg", text: null, onPress: null };
      const intl3 = util.intl;
      obj6.text = intl3.string(util.t.QUXSpo);
      obj6.onPress = first;
      const tmp25 = hasOwnProperty(components_Button_Button.Button, obj6);
      cResult[12] = tmp25;
      let tmp23 = tmp25;
    } else {
      tmp23 = cResult[12];
    }
    if (cResult[13] !== tmp4.trailing) {
      const obj7 = { style: tmp4.trailing, children: tmp23 };
      const tmp29 = hasOwnProperty(React3, obj7);
      cResult[13] = tmp4.trailing;
      cResult[14] = tmp29;
      let tmp26 = tmp29;
    } else {
      tmp26 = cResult[14];
    }
    if (cResult[15] === tmp4.content) {
      if (cResult[16] === tmp21) {
        if (cResult[17] === tmp26) {
          if (cResult[18] === tmp6) {
            if (cResult[19] === tmp13) {
              let tmp30 = cResult[20];
            }
            return tmp30;
          }
        }
      }
    }
    const obj8 = { style: tmp4.content, children: null };
    const items = [tmp6, tmp13, tmp21, tmp26];
    obj8.children = items;
    const tmp33 = timestampProducer(React3, obj8);
    cResult[15] = tmp4.content;
    cResult[16] = tmp21;
    cResult[17] = tmp26;
    cResult[18] = tmp6;
    cResult[19] = tmp13;
    cResult[20] = tmp33;
    tmp30 = tmp33;
  }
  const tmp22 = hasOwnProperty(React3, { style: subtitle, children: tmp18 });
  cResult[9] = tmp4.subtitle;
  cResult[10] = tmp18;
  cResult[11] = tmp22;
  tmp21 = tmp22;
}) : (() => {
  const tmp = closure_7();
  const obj = { style: tmp.content, children: null };
  const items = [hasOwnProperty(React4, { resizeMode: "contain", style: tmp.headerImage, source: _modDef12342 }), , , ];
  const obj3 = { style: tmp.title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["/G+nci"]);
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  const obj4 = { style: tmp.subtitle, children: null };
  const obj5 = { style: tmp.subtitleText, variant: "text-sm/medium", children: null };
  const intl2 = util.intl;
  const obj2 = { resizeMode: "contain", style: tmp.headerImage, source: _modDef12342 };
  obj5.children = intl2.format(util.t.OXdOPf, { learnMoreHook: ContactSyncUtils.handleOpenLearnMoreLink });
  obj4.children = hasOwnProperty(Text_Text.Text, obj5);
  items[2] = hasOwnProperty(React3, obj4);
  const obj7 = { style: tmp.trailing, children: null };
  const obj8 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = util.intl;
  obj8.text = intl3.string(util.t.QUXSpo);
  obj8.onPress = function onPress() {
    ContactSyncModalActionCreators.openContactSyncModal({}, "Add Friends Contact Sync Empty State");
  };
  obj7.children = hasOwnProperty(components_Button_Button.Button, obj8);
  items[3] = hasOwnProperty(React3, obj7);
  obj.children = items;
  return timestampProducer(React3, obj);
});