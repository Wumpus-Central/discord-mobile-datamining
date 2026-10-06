// === Module 12418: HubEmailConnectionWaitlist ===

// Module 12418 (HubEmailConnectionWaitlist)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const Fonts = Constants.Fonts;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: { flex: 1, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 16 }, title: obj2, description: { textAlign: "center", marginBottom: 16 }, redesignButton: { paddingHorizontal: 16, width: "100%" } };
obj2 = { fontFamily: Fonts.PRIMARY_BOLD, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, fontSize: 24, textAlign: "center", marginBottom: 8 };
let closure_8 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let onClose;
  let school;
  let obj = onClose(576);
  const cResult = obj.c(26);
  ({ school, onClose } = arg0);
  const tmp4 = closure_8();
  const obj2 = onClose(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] === navigation) {
    let tmp6;
    let tmp7;
    let tmp10;
    let tmp16;
    let tmp18;
    let tmp21;
    if (cResult[1] === onClose) {
      tmp6 = cResult[2];
      tmp7 = cResult[3];
    }
    const layoutEffect = react.useLayoutEffect(tmp6, tmp7);
    const container = tmp4.container;
    if (cResult[4] !== tmp4.header) {
      const obj3 = { source: navigation(12419), style: tmp4.header };
      const tmp14 = closure_6(closure_5, obj3);
      cResult[4] = tmp4.header;
      cResult[5] = tmp14;
      tmp10 = tmp14;
    } else {
      tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    const title = tmp4.title;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = onClose(1126).intl;
      const stringResult = intl.string(onClose(1126).t.OaloU5);
      cResult[6] = stringResult;
      tmp16 = stringResult;
    } else {
      tmp16 = cResult[6];
    }
    if (cResult[7] !== tmp4.title) {
      const obj4 = { style: title, accessibilityRole: "header", children: tmp16 };
      const tmp20 = closure_6(onClose(1188).LegacyText, obj4);
      cResult[7] = tmp4.title;
      cResult[8] = tmp20;
      tmp18 = tmp20;
    } else {
      tmp18 = cResult[8];
    }
    const description = tmp4.description;
    if (cResult[9] !== school) {
      const intl2 = onClose(1126).intl;
      const obj5 = { school };
      const formatResult = intl2.format(onClose(1126).t.Rs7MXJ, obj5);
      cResult[9] = school;
      cResult[10] = formatResult;
      tmp21 = formatResult;
    } else {
      tmp21 = cResult[10];
    }
    if (cResult[11] === tmp4.description) {
      let tmp23;
      let tmp26;
      let tmp28;
      if (cResult[12] === tmp21) {
        tmp23 = cResult[13];
      }
      const _Symbol2 = Symbol;
      const redesignButton = tmp4.redesignButton;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = onClose(1126).intl;
        const stringResult1 = intl3.string(onClose(1126).t.i4jeWR);
        cResult[14] = stringResult1;
        tmp26 = stringResult1;
      } else {
        tmp26 = cResult[14];
      }
      if (cResult[15] !== onClose) {
        const obj6 = { size: "lg", text: tmp26, onPress: onClose };
        const tmp30 = closure_6(onClose(5601).Button, obj6);
        cResult[15] = onClose;
        cResult[16] = tmp30;
        tmp28 = tmp30;
      } else {
        tmp28 = cResult[16];
      }
      if (cResult[17] === tmp4.redesignButton) {
        let tmp31;
        if (cResult[18] === tmp28) {
          tmp31 = cResult[19];
        }
        if (cResult[20] === tmp4.container) {
          if (cResult[21] === tmp23) {
            if (cResult[22] === tmp31) {
              if (cResult[23] === tmp10) {
                let tmp35;
                if (cResult[24] === tmp18) {
                  tmp35 = cResult[25];
                }
                return tmp35;
              }
            }
          }
        }
        const obj7 = { style: container, children: items };
        items = [tmp10, tmp18, tmp23, tmp31];
        const tmp38 = closure_7(closure_4, obj7);
        cResult[20] = tmp4.container;
        cResult[21] = tmp23;
        cResult[22] = tmp31;
        cResult[23] = tmp10;
        cResult[24] = tmp18;
        cResult[25] = tmp38;
        tmp35 = tmp38;
      }
      const obj8 = { style: redesignButton, children: tmp28 };
      const tmp34 = closure_6(closure_4, obj8);
      cResult[17] = tmp4.redesignButton;
      cResult[18] = tmp28;
      cResult[19] = tmp34;
      tmp31 = tmp34;
    }
    const obj9 = { style: description, variant: "text-sm/medium", color: "text-default", children: tmp21 };
    const tmp25 = closure_6(onClose(4892).Text, obj9);
    cResult[11] = tmp4.description;
    cResult[12] = tmp21;
    cResult[13] = tmp25;
    tmp23 = tmp25;
  }
  const fn = function l() {
    let onPress;
    let obj = {
      headerLeft() {
        let intl;
        const obj = { text: intl.string(onClose(dependencyMap[10]).t.cpT0Cq), onPress };
        const HeaderActionButton = onClose(dependencyMap[9]).HeaderActionButton;
        intl = onClose(dependencyMap[10]).intl;
        return closure_2_6(HeaderActionButton, obj);
      }
    };
    navigation.setOptions(obj);
  };
  const items1 = [navigation, onClose];
  cResult[0] = navigation;
  cResult[1] = onClose;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : ((onClose) => {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj7;
  onClose = onClose.onClose;
  const school = onClose.school;
  const tmp = closure_8();
  let obj = onClose(1490);
  navigation = obj.useNavigation();
  const items = [navigation, onClose];
  const layoutEffect = react.useLayoutEffect(() => {
    let onPress;
    let obj = {
      headerLeft() {
        let intl;
        const obj = { text: intl.string(onClose(dependencyMap[10]).t.cpT0Cq), onPress };
        const HeaderActionButton = onClose(dependencyMap[9]).HeaderActionButton;
        intl = onClose(dependencyMap[10]).intl;
        return closure_2_6(HeaderActionButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items);
  const obj2 = { style: tmp.container, children: items1 };
  items1 = [, , , ];
  const obj3 = { source: navigation(12419), style: tmp.header };
  items1[0] = closure_6(closure_5, obj3);
  const obj4 = { style: tmp.title, accessibilityRole: "header", children: intl.string(onClose(1126).t.OaloU5) };
  const LegacyText = onClose(1188).LegacyText;
  intl = onClose(1126).intl;
  items1[1] = closure_6(LegacyText, obj4);
  const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.format(onClose(1126).t.Rs7MXJ, { school }) };
  const Text = onClose(4892).Text;
  intl2 = onClose(1126).intl;
  items1[2] = closure_6(Text, obj5);
  const obj6 = { style: tmp.redesignButton, children: closure_6(Button, obj7) };
  obj7 = { size: "lg", text: intl3.string(onClose(1126).t.i4jeWR), onPress: onClose };
  Button = onClose(5601).Button;
  intl3 = onClose(1126).intl;
  items1[3] = closure_6(closure_4, obj6);
  return closure_7(closure_4, obj2);
});
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionWaitlist.tsx");

export default tmp4;