// === Module 14907: ConjureCustomWidgetSheet ===

// Module 14907 (ConjureCustomWidgetSheet)
import nativeDefault from "native" /* 575 */;
import _modDef3865 from "module_3865" /* 3865 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ConjureConnectionStore = fn(10830);
({ ensureConnection: closure_7, sendUserMessage: closure_8 } = ConjureConnectionStore);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { body: { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 } };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/custom_widget/native/ConjureCustomWidgetSheet.tsx");

export default function ConjureCustomWidgetSheet() {
  [value, importDefault] = memo.useState("");
  const tmp = closure_11();
  [tmp5, dependencyMap] = memo.useState(null);
  const tmp4 = _slicedToArray(memo.useState(null), 2);
  [tmp7, asyncGeneratorStep] = memo.useState(false);
  _slicedToArray = memo.useRef(false);
  memo = memo.useMemo(() => first(7413).resolveConjureWorkspaceGuildId("ConjureCustomWidgetSheet"), []);
  const callback = memo.useCallback((arg0) => {
    closure_1(arg0);
    dependencyMap(null);
  }, []);
  const items = [value, memo];
  const callback1 = memo.useCallback(asyncGeneratorStep(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            value = tmp8;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            const trimmed = first.trim();
            closure_128_0 = trimmed;
            if ("" !== trimmed) {
              if (null != memo) {
                if (!ref.current) {
                  ref.current = true;
                  asyncGeneratorStep(true);
                  dependencyMap(null);
                  closure_128_1 = null;
                  c3 = 2;
                  const obj6 = { guild_id: tmp65, install_scope: "user" };
                  c4 = 3;
                  c5 = 1;
                  const obj7 = { value: value(tmp73[11]).createProject(obj6), done: false };
                  return obj7;
                }
              }
            } else {
              const intl = value(tmp73[9]).intl;
              dependencyMap(intl.string(tmp4(tmp73[10]).AuyDIq));
            }
            c5 = 3;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_4.current = false;
          closure_129_3(false);
          throw tmp73;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_2 = tmp73;
            if (null == closure_128_1) {
              closure_129_2(value(tmp73[14]).getConjureCreateErrorMessage(closure_128_2));
              const obj3 = value(tmp73[14]);
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_4.current = false;
            closure_129_3(false);
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_128_1 = value;
            closure_1_7(closure_128_1);
            closure_1_8(closure_128_1, value(tmp73[12]).composeConjureCustomWidgetPrompt(closure_128_0));
            tmp4(tmp73[13])(closure_128_1);
            c3 = 1;
            const obj = value(tmp73[12]);
          }
          c3 = 0;
          closure_129_4.current = false;
          closure_129_3(false);
        }
        tmp4(tmp73[13])(closure_128_1);
        c3 = 0;
        closure_129_4.current = false;
        closure_129_3(false);
        c5 = 3;
        const obj9 = { value: undefined, done: true };
        return obj9;
      } catch (tmp73) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp73;
        } else if (tmp2 === tmp75) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items);
  let obj = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj2 = { title: null };
  let intl = value(1114).intl;
  obj2.title = intl.string(_modDef3865.yI85oV);
  obj.header = closure_9(value(7315).BottomSheetTitleHeader, obj2);
  let obj3 = { style: tmp.body, children: null };
  let obj4 = { label: null, placeholder: null, description: null, errorMessage: null, value: null, onChange: null, maxLength: null, disabled: null };
  const intl2 = value(1114).intl;
  obj4.label = intl2.string(_modDef3865["09BSx3"]);
  const intl3 = value(1114).intl;
  obj4.placeholder = intl3.string(_modDef3865.K7zdCZ);
  const intl4 = value(1114).intl;
  obj4.description = intl4.string(_modDef3865.SKwzvJ);
  obj4.errorMessage = tmp5;
  obj4.value = value;
  obj4.onChange = callback;
  obj4.maxLength = value(14906).CONJURE_CUSTOM_WIDGET_PROMPT_MAX_LENGTH;
  obj4.disabled = tmp7;
  const items1 = [closure_9(value(7247).TextArea, obj4), ];
  const obj5 = { variant: "primary", text: null, onPress: null, loading: null, disabled: null };
  const intl5 = tmp12(1114).intl;
  obj5.text = intl5.string(_modDef3865.MDZXiK);
  obj5.onPress = callback1;
  obj5.loading = tmp7;
  obj5.disabled = null == memo;
  items1[1] = closure_9(value(5629).Button, obj5);
  obj3.children = items1;
  obj.children = closure_10(View, obj3);
  return closure_9(value(7360).ActionSheet, obj);
};
export const CONJURE_CUSTOM_WIDGET_SHEET_KEY = "ConjureCustomWidgetSheet";