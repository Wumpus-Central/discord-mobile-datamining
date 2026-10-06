// === Module 16619: ConjureStaffAccessNotice ===

// Module 16619 (ConjureStaffAccessNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import router_utils from "router_utils" /* 1112 */;
import _modDef3753 from "module_3753" /* 3753 */;
import LinkingDefault from "Linking" /* 4571 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
const Routes = Constants.Routes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { row: obj2, copy: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let conjureStaffAccessTarget;
  let items;
  let obj6;
  let tmp6;
  let obj = conjureStaffAccessTarget(576);
  const cResult = obj.c(11);
  const tmp4 = closure_8();
  let obj2 = conjureStaffAccessTarget(16620);
  conjureStaffAccessTarget = obj2.useConjureStaffAccessTarget();
  if (cResult[0] !== conjureStaffAccessTarget) {
    const fn = function n() {
      if (null != conjureStaffAccessTarget) {
        if ("channel" === conjureStaffAccessTarget.kind) {
          const obj2 = router_utils;
          obj2.transitionTo(Routes.CHANNEL(conjureStaffAccessTarget.guildId, conjureStaffAccessTarget.channelId));
        } else {
          const obj = LinkingDefault;
          obj.openURL(conjureStaffAccessTarget.url);
        }
      }
    };
    cResult[0] = conjureStaffAccessTarget;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (null == conjureStaffAccessTarget) {
    return null;
  } else {
    let tmp7;
    let tmp11;
    const _Symbol = Symbol;
    const row = tmp4.row;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_INFO };
      const CircleInformationIcon = tmp(4818).CircleInformationIcon;
      const tmp10 = closure_6(CircleInformationIcon, obj3);
      cResult[2] = tmp10;
      tmp7 = tmp10;
    } else {
      tmp7 = cResult[2];
    }
    const copy = tmp4.copy;
    if (cResult[3] !== tmp6) {
      const intl = tmp(1126).intl;
      const format = intl.format;
      const obj4 = { channel: conjureStaffAccessTarget(16620).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp6 };
      const v6anmu1 = _modDef3753["6anmu1"];
      const formatResult = format(v6anmu1, obj4);
      cResult[3] = tmp6;
      cResult[4] = formatResult;
      tmp11 = formatResult;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp4.copy) {
      let tmp15;
      if (cResult[6] === tmp11) {
        tmp15 = cResult[7];
      }
      if (cResult[8] === tmp4.row) {
        let tmp18;
        if (cResult[9] === tmp15) {
          tmp18 = cResult[10];
        }
        return tmp18;
      }
      const obj5 = { variant: "primary", children: closure_7(View, obj6) };
      obj6 = { style: row, children: items };
      items = [tmp7, tmp15];
      const Card = tmp(6002).Card;
      const tmp22 = closure_6(Card, obj5);
      cResult[8] = tmp4.row;
      cResult[9] = tmp15;
      cResult[10] = tmp22;
      tmp18 = tmp22;
    }
    const obj7 = { variant: "text-sm/normal", color: "text-default", style: copy, children: tmp11 };
    const tmp17 = closure_6(conjureStaffAccessTarget(4892).Text, obj7);
    cResult[5] = tmp4.copy;
    cResult[6] = tmp11;
    cResult[7] = tmp17;
    tmp15 = tmp17;
  }
}) : (() => {
  let conjureStaffAccessTarget;
  let format;
  let items;
  let obj3;
  let obj6;
  let v6anmu1;
  const tmp = closure_8();
  let obj = conjureStaffAccessTarget(16620);
  conjureStaffAccessTarget = obj.useConjureStaffAccessTarget();
  [][0] = conjureStaffAccessTarget;
  let tmp6 = null;
  if (null != conjureStaffAccessTarget) {
    let obj2 = { variant: "primary", children: closure_7(View, obj3) };
    obj3 = { style: tmp.row, children: items };
    const Card = tmp2(6002).Card;
    const obj4 = { size: "sm", color: nativeDefault.colors.TEXT_FEEDBACK_INFO };
    const CircleInformationIcon = tmp2(4818).CircleInformationIcon;
    items = [closure_6(CircleInformationIcon, obj4), ];
    const obj5 = { variant: "text-sm/normal", color: "text-default", style: tmp.copy, children: format(v6anmu1, obj6) };
    const Text = tmp2(4892).Text;
    const intl = tmp2(1126).intl;
    format = intl.format;
    obj6 = { channel: conjureStaffAccessTarget(16620).CONJURE_STAFF_ACCESS_CHANNEL_NAME, onNavigate: tmp5 };
    v6anmu1 = _modDef3753["6anmu1"];
    items[1] = closure_6(Text, obj5);
    tmp6 = closure_6(Card, obj2);
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/conjure/builder/native/ConjureStaffAccessNotice.tsx");

export default tmp3;