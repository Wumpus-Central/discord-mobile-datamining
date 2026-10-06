// === Module 12922: ConjureCustomWidgetSheet ===

// Module 12922 (ConjureCustomWidgetSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import _modDef3753 from "module_3753" /* 3753 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 12923 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let c4, c5, dependencyMap;

let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ ensureConnection: metroImportDefault, sendUserMessage: metroImportAll } = ConjureConnectionStore);
const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const VibegrationsCustomWidgetSheet = "VibegrationsCustomWidgetSheet";
let obj = { body: obj2 };
obj2 = { gap: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/conjure/custom_widget/native/ConjureCustomWidgetSheet.tsx");

export default function ConjureCustomWidgetSheet() {
  let BottomSheetTitleHeader;
  let closure_1;
  let closure_4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let memo;
  let obj2;
  let obj3;
  let tmp5;
  let tmp7;
  let value;
  let tmp = closure_14();
  [value, importDefault] = memo.useState("");
  const tmp4 = _slicedToArray(memo.useState(null), 2);
  [tmp5, dependencyMap] = tmp4;
  [tmp7, _asyncToGenerator] = _slicedToArray(memo.useState(false), 2);
  const tmp6 = _slicedToArray(memo.useState(false), 2);
  _slicedToArray = memo.useRef(false);
  memo = memo.useMemo(() => {
    const obj = first(dependencyMap[10]);
    return obj.resolveConjureWorkspaceGuildId("VibegrationsCustomWidgetSheet");
  }, []);
  const callback = memo.useCallback((arg0) => {
    closure_1(arg0);
    dependencyMap(null);
  }, []);
  const items = [value, memo];
  const callback1 = memo.useCallback(_asyncToGenerator(async () => {
    let closure_0;
    let closure_2;
    let obj4;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let tmp;
        let open;
        let trimmed;
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
            value = tmp4;
            tmp = undefined;
            open = function open(value) {
              const obj = closure_2_0(closure_2_2[13]);
              obj.transitionTo(closure_2_9.CHANNEL(closure_1_5, constants.CONJURE, value));
              const obj2 = closure_2_1(closure_2_2[14]);
              obj2.hideActionSheet(closure_2_13);
              const obj3 = closure_2_1(closure_2_2[14]);
              obj3.hideAllActionSheets();
            };
            trimmed = first.trim();
            if ("" !== trimmed) {
              if (null != memo) {
                if (!ref.current) {
                  ref.current = true;
                  _asyncToGenerator(true);
                  dependencyMap(null);
                  tmp = null;
                  c3 = 2;
                  const obj6 = { guild_id: tmp58, install_scope: "user" };
                  c4 = 3;
                  c5 = 1;
                  const obj7 = { value: obj4.createProject(obj6), done: false };
                  obj4 = value(dependencyMap[15]);
                  return obj7;
                }
              }
            } else {
              const intl = value(dependencyMap[11]).intl;
              dependencyMap(intl.string(tmp(dependencyMap[12]).AuyDIq));
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_4.current = false;
          closure_129_3(false);
          throw dependencyMap;
        } else {
          if (2 === c4) {
            c3 = 1;
            _asyncToGenerator = dependencyMap;
            if (null != tmp) {
              open(tmp);
              c3 = 0;
              closure_129_4.current = false;
              closure_129_3(false);
              c5 = 3;
              return { value: "IconComponent", done: null };
            } else {
              let obj3 = value(dependencyMap[17]);
              closure_129_2(obj3.getConjureCreateErrorMessage(_asyncToGenerator));
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
            tmp = value;
            closure_1_7(tmp);
            let obj = value(dependencyMap[16]);
            closure_1_8(tmp, obj.composeConjureCustomWidgetPrompt(trimmed));
            open(tmp);
            c3 = 1;
          }
          c3 = 0;
          closure_129_4.current = false;
          closure_129_3(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp67) {
        dependencyMap = tmp67;
        if (0 === c3) {
          c5 = 3;
          throw tmp67;
        } else if (1 === tmp69) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }), items);
  let obj = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: closure_11(BottomSheetTitleHeader, obj2), children: closure_12(View, obj3) };
  const ActionSheet = value(6708).ActionSheet;
  obj2 = { title: intl.string(_modDef3753.yI85oV) };
  BottomSheetTitleHeader = value(6651).BottomSheetTitleHeader;
  intl = value(1126).intl;
  obj3 = { style: tmp.body, children: items1 };
  let obj4 = { label: intl2.string(_modDef3753["09BSx3"]), placeholder: intl3.string(_modDef3753.K7zdCZ), description: intl4.string(_modDef3753.SKwzvJ), errorMessage: tmp5, value, onChange: callback, maxLength: tmp12(12921).CONJURE_CUSTOM_WIDGET_PROMPT_MAX_LENGTH, disabled: tmp7 };
  const TextArea = value(6587).TextArea;
  intl2 = value(1126).intl;
  intl3 = value(1126).intl;
  intl4 = value(1126).intl;
  items1 = [closure_11(TextArea, obj4), ];
  let obj5 = { variant: "primary", text: intl5.string(_modDef3753.MDZXiK), onPress: callback1, loading: tmp7, disabled: null == memo };
  const Button = tmp12(5601).Button;
  intl5 = tmp12(1126).intl;
  items1[1] = closure_11(Button, obj5);
  return closure_11(ActionSheet, obj);
};
export const CONJURE_CUSTOM_WIDGET_SHEET_KEY = "VibegrationsCustomWidgetSheet";