// discord_app/modules/conjure/publish/native/ConjurePublishDestinationSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ConjurePublishDestinationSheet = "ConjurePublishDestinationSheet";
const createStyles = fn(4969);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PublishDestinationSheet(arg0) {
      const cResult = onDone(576).c(27);
      ({ options, onDone } = arg0);
      const tmp4 = closure_9();
      const tmp5 = _slicedToArray(noop.useState(options.selected_destination_id), 2);
      value = tmp5[0];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = onDone(1128).intl;
        const stringResult = intl.string(value(3830).lJrOGW);
        cResult[0] = stringResult;
        let first1 = stringResult;
      } else {
        first1 = cResult[0];
      }
      if (cResult[1] !== onDone) {
        function finish(arg0) {
          onDone(arg0);
          ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishDestinationSheet);
        }
        cResult[1] = onDone;
        cResult[2] = finish;
        let tmp10 = finish;
      } else {
        tmp10 = cResult[2];
      }
      dependencyMap = tmp10;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: first1 };
        const tmp13 = closure_6(onDone(7233).BottomSheetTitleHeader, obj2);
        cResult[3] = tmp13;
      }
      if (cResult[4] !== onDone) {
        const fn = function w() {
          return onDone(null);
        };
        cResult[4] = onDone;
        cResult[5] = fn;
      }
      if (cResult[6] !== options.destinations) {
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor(arg0) {
              value = arg0.id;
              return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value, label: arg0.label }, value);
            }
          }
          cResult[8] = T;
        } else {
          class T {
            constructor(arg0) {
              value = arg0.id;
              return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value, label: arg0.label }, value);
            }
          }
        }
        const destinations = options.destinations;
        const mapped = destinations.map(T);
        options = options.destinations;
        cResult[6] = options;
        cResult[7] = mapped;
      } else {
        class T {
          constructor(arg0) {
            value = arg0.id;
            return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value, label: arg0.label }, value);
          }
        }
        if (cResult[9] === value) {
          class T {
            constructor(arg0) {
              value = arg0.id;
              return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value, label: arg0.label }, value);
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class T {
              constructor(arg0) {
                value = arg0.id;
                return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value, label: arg0.label }, value);
              }
            }
            const stringResult1 = obj4.string(value(3830).zh1Izp);
            cResult[12] = stringResult1;
            const tmp23 = stringResult1;
          } else {
            class T {
              constructor(arg0) {
                value = arg0.id;
                return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value, label: arg0.label }, value);
              }
            }
          }
          if (cResult[13] === value) {
            class T {
              constructor(arg0) {
                value = arg0.id;
                return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value, label: arg0.label }, value);
              }
            }
            const _Symbol3 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class T {
                constructor(arg0) {
                  value = arg0.id;
                  return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value, label: arg0.label }, value);
                }
              }
              const stringResult2 = obj6.string(value(3830).y83r6D);
              cResult[16] = stringResult2;
              const tmp29 = stringResult2;
            } else {
              class T {
                constructor(arg0) {
                  value = arg0.id;
                  return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value, label: arg0.label }, value);
                }
              }
            }
            if (cResult[17] !== tmp10) {
              class T {
                constructor(arg0) {
                  value = arg0.id;
                  return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value, label: arg0.label }, value);
                }
              }
              const obj3 = {
                variant: "secondary",
                text: tmp29,
                onPress() {
                  return dependencyMap(null);
                },
              };
              const tmp33 = closure_6(onDone(5230).Button, obj3);
              cResult[17] = tmp10;
              cResult[18] = tmp33;
            } else {
              class T {
                constructor(arg0) {
                  value = arg0.id;
                  return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value, label: arg0.label }, value);
                }
              }
            }
            if (cResult[19] === tmp4.content) {
              class T {
                constructor(arg0) {
                  value = arg0.id;
                  return closure_1_6(onDone(closure_2[12]).TableRadioRow, { value, label: arg0.label }, value);
                }
              }
            }
            const obj5 = { style: tmp15, children: null };
            const items = [tmp20, tmp26, tmp32];
            obj5.children = items;
            const tmp37 = closure_7(View, obj5);
            cResult[19] = tmp4.content;
            cResult[20] = tmp32;
            cResult[21] = tmp20;
            cResult[22] = tmp26;
            cResult[23] = tmp37;
          }
          const obj7 = {
            variant: "primary",
            text: tmp23,
            onPress() {
              return dependencyMap(first);
            },
          };
          const tmp28 = closure_6(onDone(5230).Button, obj7);
          cResult[13] = value;
          cResult[14] = tmp10;
          cResult[15] = tmp28;
        }
        const obj8 = { hasIcons: false, value, onChange: tmp5[1], accessibilityLabel: first1, children: tmp16 };
        const tmp22 = closure_6(onDone(6970).TableRadioGroup, obj8);
        cResult[9] = value;
        cResult[10] = tmp16;
        cResult[11] = tmp22;
      }
      const obj = onDone(576);
    }
  : function PublishDestinationSheet(arg0) {
      ({ options, onDone: require } = arg0);
      const tmp2 = _slicedToArray(noop.useState(options.selected_destination_id), 2);
      value = tmp2[0];
      const intl = util.intl;
      const stringResult = intl.string(value(3830).lJrOGW);
      const obj = {
        header: closure_6(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: stringResult }),
        onDismiss() {
          return require(null);
        },
        children: null,
      };
      const obj2 = { style: closure_9().content, children: null };
      const obj3 = { hasIcons: false, value, onChange: tmp2[1], accessibilityLabel: stringResult, children: null };
      const destinations = options.destinations;
      obj3.children = destinations.map((label) => {
        const id = label.id;
        return closure_1_6(TableRadioRow.TableRadioRow, { value: id, label: label.label }, id);
      });
      const items = [closure_6(TableRadioGroup.TableRadioGroup, obj3), ,];
      const obj4 = { variant: "primary", text: null, onPress: null };
      const intl2 = util.intl;
      obj4.text = intl2.string(value(3830).zh1Izp);
      obj4.onPress = function onPress() {
        require(first);
        ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishDestinationSheet);
      };
      items[1] = closure_6(components_Button_Button.Button, obj4);
      const obj5 = { variant: "secondary", text: null, onPress: null };
      const intl3 = util.intl;
      obj5.text = intl3.string(value(3830).y83r6D);
      obj5.onPress = function onPress() {
        require(null);
        ActionSheetActionCreatorsDefault.hideActionSheet(ConjurePublishDestinationSheet);
      };
      items[2] = closure_6(components_Button_Button.Button, obj5);
      obj2.children = items;
      obj.children = closure_7(View, obj2);
      return closure_6(ActionSheet.ActionSheet, obj);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishDestinationSheet.tsx");

export default function showConjurePublishDestinationSheet(options) {
  return new Promise((onDone) => {
    const obj2 = { key: ConjurePublishDestinationSheet, content: timestampProducer(closure_10, { options, onDone }) };
    ActionSheetActionCreators.showActionSheet(obj2);
  });
}
