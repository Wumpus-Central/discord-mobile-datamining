// === Module 12490: HubEmailConnectionStudentPrompt ===

// Module 12490 (HubEmailConnectionStudentPrompt)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5906 */;

const require = fn;
const View = fn(17).View;
const HubEmailConnectionSteps = fn(12480).HubEmailConnectionSteps;
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }, header: null, row: null };
let obj3 = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj3.textAlign = "center";
obj3.marginBottom = 24;
obj2.header = obj3;
obj2.row = { borderRadius: nativeDefault.radii.sm, marginBottom: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { borderRadius: nativeDefault.radii.sm, marginBottom: 8, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionStudentPrompt.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HubEmailConnectionStudentPrompt(onClose) {
  const cResult = onClose(navigation[9]).c(23);
  onClose = onClose.onClose;
  const invite = onClose.invite;
  const tmp4 = closure_8();
  const obj = onClose(navigation[9]);
  navigation = onClose(navigation[10]).useNavigation();
  if (cResult[0] === invite) {
    if (cResult[1] === navigation) {
      if (cResult[2] === onClose) {
        let tmp6 = cResult[3];
      }
      const _Symbol = Symbol;
      ({ container, header } = tmp4);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(tmp2[12]).intl;
        const stringResult = intl.string(tmp(tmp2[12]).t["+/Pv0h"]);
        cResult[4] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[4];
      }
      if (cResult[5] !== tmp4.header) {
        const obj3 = { style: header, children: tmp8 };
        const tmp12 = closure_6(tmp(tmp2[13]).LegacyText, obj3);
        cResult[5] = tmp4.header;
        cResult[6] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[6];
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { source: invite(tmp2[15]) };
        const tmp17 = closure_6(invite(tmp2[14]), obj4);
        cResult[7] = tmp17;
        let tmp13 = tmp17;
        const tmp16 = invite(tmp2[14]);
      } else {
        tmp13 = cResult[7];
      }
      const _Symbol3 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(tmp2[12]).intl;
        const stringResult1 = intl2.string(tmp(tmp2[12]).t["a7a/D+"]);
        const intl3 = tmp(tmp2[12]).intl;
        const stringResult2 = intl3.string(tmp(tmp2[12]).t.Gsegk8);
        cResult[8] = stringResult1;
        cResult[9] = stringResult2;
        let tmp19 = stringResult2;
        let tmp18 = stringResult1;
      } else {
        tmp18 = cResult[8];
        tmp19 = cResult[9];
      }
      if (cResult[10] === tmp6) {
        if (cResult[11] === tmp4.row) {
          let tmp22 = cResult[12];
        }
        const _Symbol4 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { source: invite(tmp2[17]) };
          const tmp31 = closure_6(invite(tmp2[14]), obj5);
          cResult[13] = tmp31;
          let tmp27 = tmp31;
          const tmp30 = invite(tmp2[14]);
        } else {
          tmp27 = cResult[13];
        }
        const _Symbol5 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(tmp2[12]).intl;
          const stringResult3 = intl4.string(tmp(tmp2[12]).t.GLG9n4);
          cResult[14] = stringResult3;
          let tmp32 = stringResult3;
        } else {
          tmp32 = cResult[14];
        }
        if (cResult[15] === onClose) {
          if (cResult[16] === tmp4.row) {
            let tmp34 = cResult[17];
          }
          if (cResult[18] === tmp4.container) {
            if (cResult[19] === tmp22) {
              if (cResult[20] === tmp34) {
                if (cResult[21] === tmp10) {
                  let tmp39 = cResult[22];
                }
                return tmp39;
              }
            }
          }
          const obj6 = { children: null };
          const obj7 = { style: container, children: null };
          const items = [tmp10, tmp22, tmp34];
          obj7.children = items;
          obj6.children = closure_7(View, obj7);
          const tmp43 = closure_6(tmp(tmp2[18]).HubEmailConnectionScreen, obj6);
          cResult[18] = tmp4.container;
          cResult[19] = tmp22;
          cResult[20] = tmp34;
          cResult[21] = tmp10;
          cResult[22] = tmp43;
          tmp39 = tmp43;
        }
        const obj8 = { DEPRECATED_style: tmp4.row, leading: tmp27, trailing: invite(tmp2[16]).Arrow, label: tmp32, onPress: onClose };
        const tmp38 = closure_6(invite(tmp2[16]), obj8);
        cResult[15] = onClose;
        cResult[16] = tmp4.row;
        cResult[17] = tmp38;
        tmp34 = tmp38;
        const tmp37 = invite(tmp2[16]);
      }
      const obj9 = { DEPRECATED_style: tmp4.row, leading: tmp13, trailing: invite(tmp2[16]).Arrow, label: tmp18, subLabel: tmp19, onPress: tmp6 };
      const tmp26 = closure_6(invite(tmp2[16]), obj9);
      cResult[10] = tmp6;
      cResult[11] = tmp4.row;
      cResult[12] = tmp26;
      tmp22 = tmp26;
      const tmp25 = invite(tmp2[16]);
    }
  }
  function onContinue() {
    AnalyticsUtilsDefault.track(constants.HUB_STUDENT_PROMPT_CLICKED);
    navigation.push(HubEmailConnectionSteps.VERIFY_EMAIL, { onClose, invite });
  }
  cResult[0] = invite;
  cResult[1] = navigation;
  cResult[2] = onClose;
  cResult[3] = onContinue;
  tmp6 = onContinue;
  const obj2 = onClose(navigation[10]);
}) : (function HubEmailConnectionStudentPrompt(onClose) {
  onClose = onClose.onClose;
  const invite = onClose.invite;
  const tmp = closure_8();
  dependencyMap = onClose(1503).useNavigation();
  const obj2 = { children: null };
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.header, children: null };
  const intl = onClose(1126).intl;
  obj4.children = intl.string(onClose(1126).t["+/Pv0h"]);
  const items = [closure_6(onClose(1200).LegacyText, obj4), , ];
  const obj5 = { DEPRECATED_style: tmp.row, leading: null, trailing: null, label: null, subLabel: null, onPress: null };
  const obj = onClose(1503);
  const obj6 = { source: null };
  const tmp2 = invite(6827);
  obj6.source = invite(12491);
  obj5.leading = closure_6(invite(6156), obj6);
  obj5.trailing = invite(6827).Arrow;
  const intl2 = onClose(1126).intl;
  obj5.label = intl2.string(onClose(1126).t["a7a/D+"]);
  const intl3 = onClose(1126).intl;
  obj5.subLabel = intl3.string(onClose(1126).t.Gsegk8);
  obj5.onPress = function onContinue() {
    AnalyticsUtilsDefault.track(constants.HUB_STUDENT_PROMPT_CLICKED);
    closure_2.push(HubEmailConnectionSteps.VERIFY_EMAIL, { onClose, invite });
  };
  items[1] = closure_6(tmp2, obj5);
  const obj7 = { DEPRECATED_style: tmp.row, leading: null, trailing: null, label: null, onPress: null };
  const tmp3 = invite(6156);
  const obj8 = { source: null };
  const tmp4 = invite(6827);
  obj8.source = invite(12492);
  obj7.leading = closure_6(invite(6156), obj8);
  obj7.trailing = invite(6827).Arrow;
  const intl4 = onClose(1126).intl;
  obj7.label = intl4.string(onClose(1126).t.GLG9n4);
  obj7.onPress = onClose;
  items[2] = closure_6(tmp4, obj7);
  obj3.children = items;
  obj2.children = closure_7(View, obj3);
  return closure_6(onClose(12489).HubEmailConnectionScreen, obj2);
});