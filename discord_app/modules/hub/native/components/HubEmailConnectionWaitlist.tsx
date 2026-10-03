// discord_app/modules/hub/native/components/HubEmailConnectionWaitlist.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, Image: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  header: { marginBottom: 16 },
  title: {
    fontFamily: fn(1085).Fonts.PRIMARY_BOLD,
    color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 8,
  },
  description: { textAlign: "center", marginBottom: 16 },
  redesignButton: { paddingHorizontal: 16, width: "100%" },
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  fontFamily: fn(1085).Fonts.PRIMARY_BOLD,
  color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  fontSize: 24,
  textAlign: "center",
  marginBottom: 8,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionWaitlist.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = onClose(576).c(26);
      ({ school, onClose } = arg0);
      const tmp4 = closure_8();
      let obj = onClose(576);
      const navigation = onClose(1490).useNavigation();
      if (cResult[0] === navigation) {
        if (cResult[1] === onClose) {
          let tmp6 = cResult[2];
          let tmp7 = cResult[3];
        }
        const layoutEffect = noop.useLayoutEffect(tmp6, tmp7);
        if (cResult[4] !== tmp4.header) {
          const obj3 = { source: navigation(12404), style: tmp4.header };
          const tmp14 = closure_6(closure_5, obj3);
          cResult[4] = tmp4.header;
          cResult[5] = tmp14;
          let tmp10 = tmp14;
        } else {
          tmp10 = cResult[5];
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = onClose(1126).intl;
          const stringResult = intl.string(onClose(1126).t.OaloU5);
          cResult[6] = stringResult;
          let tmp16 = stringResult;
        } else {
          tmp16 = cResult[6];
        }
        if (cResult[7] !== tmp4.title) {
          const obj4 = { style: tmp4.title, accessibilityRole: "header", children: tmp16 };
          const tmp20 = closure_6(onClose(1188).LegacyText, obj4);
          cResult[7] = tmp4.title;
          cResult[8] = tmp20;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[8];
        }
        if (cResult[9] !== school) {
          const intl2 = onClose(1126).intl;
          const obj5 = { school };
          const formatResult = intl2.format(onClose(1126).t.Rs7MXJ, obj5);
          cResult[9] = school;
          cResult[10] = formatResult;
          let tmp21 = formatResult;
        } else {
          tmp21 = cResult[10];
        }
        if (cResult[11] === tmp4.description) {
          if (cResult[12] === tmp21) {
            let tmp23 = cResult[13];
          }
          const _Symbol2 = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = onClose(1126).intl;
            const stringResult1 = intl3.string(onClose(1126).t.i4jeWR);
            cResult[14] = stringResult1;
            let tmp26 = stringResult1;
          } else {
            tmp26 = cResult[14];
          }
          if (cResult[15] !== onClose) {
            const obj6 = { size: "lg", text: tmp26, onPress: onClose };
            const tmp30 = closure_6(onClose(5594).Button, obj6);
            cResult[15] = onClose;
            cResult[16] = tmp30;
            let tmp28 = tmp30;
          } else {
            tmp28 = cResult[16];
          }
          if (cResult[17] === tmp4.redesignButton) {
            if (cResult[18] === tmp28) {
              let tmp31 = cResult[19];
            }
            if (cResult[20] === tmp4.container) {
              if (cResult[21] === tmp23) {
                if (cResult[22] === tmp31) {
                  if (cResult[23] === tmp10) {
                    if (cResult[24] === tmp18) {
                      let tmp35 = cResult[25];
                    }
                    return tmp35;
                  }
                }
              }
            }
            const obj7 = { style: tmp4.container, children: null };
            const items = [tmp10, tmp18, tmp23, tmp31];
            obj7.children = items;
            const tmp38 = closure_7(closure_4, obj7);
            cResult[20] = tmp4.container;
            cResult[21] = tmp23;
            cResult[22] = tmp31;
            cResult[23] = tmp10;
            cResult[24] = tmp18;
            cResult[25] = tmp38;
            tmp35 = tmp38;
          }
          const obj8 = { style: tmp4.redesignButton, children: tmp28 };
          const tmp34 = closure_6(closure_4, obj8);
          cResult[17] = tmp4.redesignButton;
          cResult[18] = tmp28;
          cResult[19] = tmp34;
          tmp31 = tmp34;
        }
        const obj9 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp21 };
        const tmp25 = closure_6(onClose(4886).Text, obj9);
        cResult[11] = tmp4.description;
        cResult[12] = tmp21;
        cResult[13] = tmp25;
        tmp23 = tmp25;
      }
      const fn = function l() {
        navigation.setOptions({
          headerLeft() {
            const obj = { text: null, onPress: null };
            const intl = onClose(1126).intl;
            obj.text = intl.string(onClose(1126).t.cpT0Cq);
            obj.onPress = onPress;
            return closure_2_6(onClose(6880).HeaderActionButton, obj);
          },
        });
      };
      const items1 = [navigation, onClose];
      cResult[0] = navigation;
      cResult[1] = onClose;
      cResult[2] = fn;
      cResult[3] = items1;
      tmp7 = items1;
      tmp6 = fn;
      const obj2 = onClose(1490);
    }
  : (school) => {
      const onClose = school.onClose;
      const tmp = closure_8();
      const navigation = onClose(1490).useNavigation();
      const items = [navigation, onClose];
      const layoutEffect = noop.useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft() {
            const obj = { text: null, onPress: null };
            const intl = onClose(1126).intl;
            obj.text = intl.string(onClose(1126).t.cpT0Cq);
            obj.onPress = onPress;
            return closure_2_6(onClose(6880).HeaderActionButton, obj);
          },
        });
      }, items);
      const obj2 = { style: tmp.container, children: null };
      let obj = onClose(1490);
      const items1 = [closure_6(closure_5, { source: navigation(12404), style: tmp.header }), , ,];
      const obj4 = { style: tmp.title, accessibilityRole: "header", children: null };
      let intl = onClose(1126).intl;
      obj4.children = intl.string(onClose(1126).t.OaloU5);
      items1[1] = closure_6(onClose(1188).LegacyText, obj4);
      const obj5 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = onClose(1126).intl;
      obj5.children = intl2.format(onClose(1126).t.Rs7MXJ, { school: school.school });
      items1[2] = closure_6(onClose(4886).Text, obj5);
      const obj6 = { style: tmp.redesignButton, children: null };
      const obj7 = { size: "lg", text: null, onPress: null };
      const intl3 = onClose(1126).intl;
      obj7.text = intl3.string(onClose(1126).t.i4jeWR);
      obj7.onPress = onClose;
      obj6.children = closure_6(onClose(5594).Button, obj7);
      items1[3] = closure_6(closure_4, obj6);
      obj2.children = items1;
      return closure_7(closure_4, obj2);
    };
