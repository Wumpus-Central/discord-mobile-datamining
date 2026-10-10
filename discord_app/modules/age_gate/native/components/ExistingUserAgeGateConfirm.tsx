// discord_app/modules/age_gate/native/components/ExistingUserAgeGateConfirm.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
let closure_10 = createStyles.createStyles({
  container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" },
  header: { textAlign: "center", marginBottom: 8 },
  body: { textAlign: "center", lineHeight: 20, marginBottom: 16 },
  buttonWrapper: { width: "100%" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateConfirm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ExistingUserAgeGateConfirm(arg0) {
      const cResult = c.c(23);
      ({ age, onConfirm } = arg0);
      closure_0 = onConfirm;
      const tmp4 = closure_10();
      const navigation = useNavigation.useNavigation();
      [tmp7, dependencyMap] = noop.useState(false);
      if (cResult[0] === navigation) {
        if (cResult[1] === onConfirm) {
          let tmp8 = cResult[2];
        }
        ({ container, header } = tmp4);
        if (cResult[3] !== age) {
          const intl = util.intl;
          const obj3 = { age };
          const formatResult = intl.format(util.t.wumolR, obj3);
          cResult[3] = age;
          cResult[4] = formatResult;
          let tmp9 = formatResult;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.header) {
          if (cResult[6] === tmp9) {
            let tmp11 = cResult[7];
          }
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = util.intl;
            const obj4 = { helpURL: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.AGE_GATE) };
            const formatResult1 = intl2.format(util.t.n3QjDE, obj4);
            cResult[8] = formatResult1;
            let tmp15 = formatResult1;
          } else {
            tmp15 = cResult[8];
          }
          if (cResult[9] !== tmp4.body) {
            const obj5 = {
              style: tmp4.body,
              variant: "text-md/medium",
              color: "interactive-text-default",
              children: tmp15,
            };
            const tmp21 = closure_1_8(Text_Text.Text, obj5);
            cResult[9] = tmp4.body;
            cResult[10] = tmp21;
            let tmp19 = tmp21;
          } else {
            tmp19 = cResult[10];
          }
          const _Symbol2 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = util.intl;
            const stringResult = intl3.string(util.t["6tahin"]);
            cResult[11] = stringResult;
            let tmp22 = stringResult;
          } else {
            tmp22 = cResult[11];
          }
          if (cResult[12] === tmp8) {
            if (cResult[13] === tmp7) {
              let tmp24 = cResult[14];
            }
            if (cResult[15] === tmp4.buttonWrapper) {
              if (cResult[16] === tmp24) {
                let tmp27 = cResult[17];
              }
              if (cResult[18] === tmp4.container) {
                if (cResult[19] === tmp27) {
                  if (cResult[20] === tmp11) {
                    if (cResult[21] === tmp19) {
                      let tmp31 = cResult[22];
                    }
                    return tmp31;
                  }
                }
              }
              const obj7 = { top: true, style: container, children: null };
              const items = [tmp11, tmp19, tmp27];
              obj7.children = items;
              const tmp33 = options(common_SafeAreaView.SafeAreaPaddingView, obj7);
              cResult[18] = tmp4.container;
              cResult[19] = tmp27;
              cResult[20] = tmp11;
              cResult[21] = tmp19;
              cResult[22] = tmp33;
              tmp31 = tmp33;
            }
            const obj8 = { style: tmp4.buttonWrapper, children: tmp24 };
            const tmp30 = closure_1_8(View, obj8);
            cResult[15] = tmp4.buttonWrapper;
            cResult[16] = tmp24;
            cResult[17] = tmp30;
            tmp27 = tmp30;
          }
          const obj9 = { loading: tmp7, disabled: tmp7, text: tmp22, onPress: tmp8, grow: true };
          const tmp26 = closure_1_8(components_Button_Button.Button, obj9);
          cResult[12] = tmp8;
          cResult[13] = tmp7;
          cResult[14] = tmp26;
          tmp24 = tmp26;
        }
        const obj10 = {
          style: header,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp9,
        };
        const tmp13 = closure_1_8(Text_Text.Heading, obj10);
        cResult[5] = tmp4.header;
        cResult[6] = tmp9;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      }
      closure_0 = asyncGeneratorStep(async () => {
        tmp21(true);
        await tmp3();
        if (1 === tmp7) {
          c3 = 0;
          navigation.pop();
          tmp21(false);
          c4 = 3;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value.shouldShowError) {
            navigation.pop();
          }
          c3 = 0;
        }
        return value;
      });
      function handleConfirm() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[0] = navigation;
      cResult[1] = onConfirm;
      cResult[2] = handleConfirm;
      tmp8 = handleConfirm;
      const tmp6 = _slicedToArray(noop.useState(false), 2);
    }
  : function ExistingUserAgeGateConfirm(age) {
      const onConfirm = age.onConfirm;
      dependencyMap = undefined;
      closure_3 = async function _handleConfirm2() {
        closure_0 = tmp3;
        dependencyMap(true);
        await onConfirm();
        if (1 === tmp7) {
          c3 = 0;
          closure_128_1.pop();
          closure_128_2(false);
          c4 = 3;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value.shouldShowError) {
            closure_128_1.pop();
          }
          c3 = 0;
        }
        return value;
      };
      const tmp = closure_10();
      importDefault = onConfirm(1503).useNavigation();
      const obj = onConfirm(1503);
      [tmp3, c2] = noop.useState(false);
      const obj2 = { top: true, style: tmp.container, children: null };
      const obj3 = {
        style: tmp.header,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = onConfirm(1126).intl;
      obj3.children = intl.format(onConfirm(1126).t.wumolR, { age: age.age });
      const items = [closure_8(onConfirm(5088).Heading, obj3), ,];
      const obj4 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: null };
      const intl2 = onConfirm(1126).intl;
      const obj5 = { helpURL: null };
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      obj5.helpURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.AGE_GATE);
      obj4.children = intl2.format(onConfirm(1126).t.n3QjDE, obj5);
      items[1] = closure_8(onConfirm(5088).Text, obj4);
      const obj7 = { style: tmp.buttonWrapper, children: null };
      const obj8 = { loading: tmp3, disabled: tmp3, text: null, onPress: null, grow: true };
      const intl3 = onConfirm(1126).intl;
      obj8.text = intl3.string(onConfirm(1126).t["6tahin"]);
      obj8.onPress = function handleConfirm() {
        const self = this;
        const apply = closure_3.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj7.children = closure_8(onConfirm(5379).Button, obj8);
      items[2] = closure_8(View, obj7);
      obj2.children = items;
      return closure_9(onConfirm(6813).SafeAreaPaddingView, obj2);
    };
