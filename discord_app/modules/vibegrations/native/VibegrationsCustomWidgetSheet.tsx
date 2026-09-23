// === Module 13447: VibegrationsCustomWidgetSheet ===

// Module 13447 (VibegrationsCustomWidgetSheet)
import nativeDefault from "native" /* 576 */;
import _modDef3712 from "module_3712" /* 3712 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const VibegrationsConnectionStore = fn(13448);
({ ensureConnection: closure_7, sendUserMessage: closure_8 } = VibegrationsConnectionStore);
const Routes = fn(1074).Routes;
const StaticChannelRoute = fn(2049).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const VibegrationsCustomWidgetSheet = "VibegrationsCustomWidgetSheet";
const createStyles = fn(4827);
let obj2 = { body: { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 } };
let closure_14 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsCustomWidgetSheet.tsx");

export default function VibegrationsCustomWidgetSheet() {
  [value, importDefault] = memo.useState("");
  const tmp = closure_14();
  [tmp5, dependencyMap] = memo.useState(null);
  const tmp4 = _slicedToArray(memo.useState(null), 2);
  [tmp7, asyncGeneratorStep] = memo.useState(false);
  _slicedToArray = memo.useRef(false);
  memo = memo.useMemo(() => first(5360).resolveVibegrationsWorkspaceGuildId("VibegrationsCustomWidgetSheet"), []);
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
        let obj2 = { value, done: true };
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            value = tmp8;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = function open(arg0) {
              closure_0(1101).transitionTo(closure_2_9.CHANNEL(closure_1_5, constants.VIBEGRATIONS, arg0));
              const obj = closure_0(1101);
              closure_1(4794).hideActionSheet(closure_2_13);
              const obj2 = closure_1(4794);
              closure_1(4794).hideAllActionSheets();
            };
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
                  const obj6 = { guild_id: tmp62, install_scope: "user" };
                  c4 = 3;
                  c5 = 1;
                  const obj7 = { value: value(tmp70[15]).createProject(obj6), done: false };
                  return obj7;
                }
              }
            } else {
              const intl = value(tmp70[11]).intl;
              dependencyMap(intl.string(tmp4(tmp70[12]).Wo5sQv));
            }
            c5 = 3;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_4.current = false;
          closure_129_3(false);
          throw tmp70;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_3 = tmp70;
            if (null == closure_128_1) {
              closure_129_2(value(tmp70[17]).getVibegrationsCreateErrorMessage(closure_128_3));
              const obj3 = value(tmp70[17]);
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
            closure_1_8(closure_128_1, value(tmp70[16]).composeVibegrationsCustomWidgetPrompt(closure_128_0));
            closure_128_2(closure_128_1);
            c3 = 1;
            let obj = value(tmp70[16]);
          }
          c3 = 0;
          closure_129_4.current = false;
          closure_129_3(false);
        }
        closure_128_2(closure_128_1);
        c3 = 0;
        closure_129_4.current = false;
        closure_129_3(false);
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp70) {
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp70;
        } else if (tmp2 === tmp72) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items);
  let obj = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  let obj2 = { title: null };
  let intl = value(1115).intl;
  obj2.title = intl.string(_modDef3712["27bu14"]);
  obj.header = closure_11(value(7480).BottomSheetTitleHeader, obj2);
  let obj3 = { style: tmp.body, children: null };
  const obj4 = { label: null, placeholder: null, description: null, errorMessage: null, value: null, onChange: null, maxLength: null, disabled: null };
  const intl2 = value(1115).intl;
  obj4.label = intl2.string(_modDef3712.DAm99t);
  const intl3 = value(1115).intl;
  obj4.placeholder = intl3.string(_modDef3712.FYN9Rl);
  const intl4 = value(1115).intl;
  obj4.description = intl4.string(_modDef3712.blSmfQ);
  obj4.errorMessage = tmp5;
  obj4.value = value;
  obj4.onChange = callback;
  obj4.maxLength = value(13446).VIBEGRATIONS_CUSTOM_WIDGET_PROMPT_MAX_LENGTH;
  obj4.disabled = tmp7;
  const items1 = [closure_11(value(7416).TextArea, obj4), ];
  let obj5 = { variant: "primary", text: null, onPress: null, loading: null, disabled: null };
  const intl5 = tmp12(1115).intl;
  obj5.text = intl5.string(_modDef3712["f/Jz/R"]);
  obj5.onPress = callback1;
  obj5.loading = tmp7;
  obj5.disabled = null == memo;
  items1[1] = closure_11(value(5271).Button, obj5);
  obj3.children = items1;
  obj.children = closure_12(View, obj3);
  return closure_11(value(7528).ActionSheet, obj);
};
export const VIBEGRATIONS_CUSTOM_WIDGET_SHEET_KEY = "VibegrationsCustomWidgetSheet";