// === Module 17471: AddFriendsContactSyncEmptyState ===

// Module 17471 (AddFriendsContactSyncEmptyState)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12398 */;
import ContactSyncUtils from "ContactSyncUtils" /* 12402 */;
import CompassSpotIllustration from "CompassSpotIllustration" /* 17472 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { content: { alignItems: "center", marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg }, headerIllustration: null, title: null, subtitle: null, subtitleText: null, trailing: null };
let obj3 = { alignItems: "center", marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
obj2.headerIllustration = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
let obj4 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_16 };
obj2.title = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
let obj5 = { marginBottom: nativeDefault.space.PX_8, width: "100%", textAlign: "center" };
obj2.subtitle = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
obj2.subtitleText = { textAlign: "center" };
let obj6 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_48, width: "100%", alignContent: "center" };
obj2.trailing = { width: "100%", paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { width: "100%", paddingBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/AddFriendsContactSyncEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AddFriendsContactSyncEmptyState() {
  const cResult = c.c(22);
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    function handleNext() {
      ContactSyncModalActionCreators.openContactSyncModal({}, "Add Friends Contact Sync Empty State");
    }
    cResult[0] = handleNext;
    let first = handleNext;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = React3(CompassSpotIllustration.CompassSpotIllustration, { width: 240, accessible: false });
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== tmp4.headerIllustration) {
    const obj2 = { style: tmp4.headerIllustration, children: tmp6 };
    const tmp12 = React3(View, obj2);
    cResult[2] = tmp4.headerIllustration;
    cResult[3] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["/G+nci"]);
    cResult[4] = stringResult;
    let tmp13 = stringResult;
  } else {
    tmp13 = cResult[4];
  }
  if (cResult[5] !== tmp4.title) {
    const obj3 = { style: tmp4.title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: tmp13 };
    const tmp17 = React3(Text_Text.Heading, obj3);
    cResult[5] = tmp4.title;
    cResult[6] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[6];
  }
  ({ subtitle, subtitleText } = tmp4);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const obj4 = { learnMoreHook: ContactSyncUtils.handleOpenLearnMoreLink };
    const formatResult = intl2.format(util.t.OXdOPf, obj4);
    cResult[7] = formatResult;
    let tmp18 = formatResult;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] !== tmp4.subtitleText) {
    const obj5 = { style: subtitleText, variant: "text-sm/medium", children: tmp18 };
    const tmp22 = React3(Text_Text.Text, obj5);
    cResult[8] = tmp4.subtitleText;
    cResult[9] = tmp22;
    let tmp20 = tmp22;
  } else {
    tmp20 = cResult[9];
  }
  if (cResult[10] === tmp4.subtitle) {
    if (cResult[11] === tmp20) {
      let tmp23 = cResult[12];
    }
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { variant: "primary", size: "lg", text: null, onPress: null };
      const intl3 = util.intl;
      obj6.text = intl3.string(util.t.QUXSpo);
      obj6.onPress = first;
      const tmp27 = React3(components_Button_Button.Button, obj6);
      cResult[13] = tmp27;
      let tmp25 = tmp27;
    } else {
      tmp25 = cResult[13];
    }
    if (cResult[14] !== tmp4.trailing) {
      const obj7 = { style: tmp4.trailing, children: tmp25 };
      const tmp31 = React3(View, obj7);
      cResult[14] = tmp4.trailing;
      cResult[15] = tmp31;
      let tmp28 = tmp31;
    } else {
      tmp28 = cResult[15];
    }
    if (cResult[16] === tmp4.content) {
      if (cResult[17] === tmp23) {
        if (cResult[18] === tmp28) {
          if (cResult[19] === tmp9) {
            if (cResult[20] === tmp15) {
              let tmp32 = cResult[21];
            }
            return tmp32;
          }
        }
      }
    }
    const obj8 = { style: tmp4.content, children: null };
    const items = [tmp9, tmp15, tmp23, tmp28];
    obj8.children = items;
    const tmp35 = React4(View, obj8);
    cResult[16] = tmp4.content;
    cResult[17] = tmp23;
    cResult[18] = tmp28;
    cResult[19] = tmp9;
    cResult[20] = tmp15;
    cResult[21] = tmp35;
    tmp32 = tmp35;
  }
  const tmp24 = React3(View, { style: subtitle, children: tmp20 });
  cResult[10] = tmp4.subtitle;
  cResult[11] = tmp20;
  cResult[12] = tmp24;
  tmp23 = tmp24;
}) : (function AddFriendsContactSyncEmptyState() {
  const tmp = closure_5();
  const obj = { style: tmp.content, children: null };
  const items = [React3(View, { style: tmp.headerIllustration, children: React3(CompassSpotIllustration.CompassSpotIllustration, { width: 240, accessible: false }) }), , , ];
  const obj3 = { style: tmp.title, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["/G+nci"]);
  items[1] = React3(Text_Text.Heading, obj3);
  const obj4 = { style: tmp.subtitle, children: null };
  const obj5 = { style: tmp.subtitleText, variant: "text-sm/medium", children: null };
  const intl2 = util.intl;
  const obj2 = { style: tmp.headerIllustration, children: React3(CompassSpotIllustration.CompassSpotIllustration, { width: 240, accessible: false }) };
  obj5.children = intl2.format(util.t.OXdOPf, { learnMoreHook: ContactSyncUtils.handleOpenLearnMoreLink });
  obj4.children = React3(Text_Text.Text, obj5);
  items[2] = React3(View, obj4);
  const obj7 = { style: tmp.trailing, children: null };
  const obj8 = { variant: "primary", size: "lg", text: null, onPress: null };
  const intl3 = util.intl;
  obj8.text = intl3.string(util.t.QUXSpo);
  obj8.onPress = function handleNext() {
    ContactSyncModalActionCreators.openContactSyncModal({}, "Add Friends Contact Sync Empty State");
  };
  obj7.children = React3(components_Button_Button.Button, obj8);
  items[3] = React3(View, obj7);
  obj.children = items;
  return React4(View, obj);
});