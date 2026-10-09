// discord_app/modules/guild_automod/native/components/ExemptionActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import fuzzysearchDefault from "../../../../../_runtime/06101_fuzzysearch.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  search: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 },
  list: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.list = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj4 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ExemptionActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ExemptionActionSheet(getId) {
      const cResult = initialSelected(getSearchText[7]).c(39);
      ({ title, searchPlaceholder, listId, items, initialSelected } = getId);
      getId = getId.getId;
      getSearchText = getId.getSearchText;
      const renderLabel = getId.renderLabel;
      const renderIcon = getId.renderIcon;
      const onSave = getId.onSave;
      closure_8();
      getId(getSearchText[8])();
      if (cResult[0] !== initialSelected) {
        class S {
          constructor() {
            set = new Set(initialSelected);
            return set;
          }
        }
        cResult[0] = initialSelected;
        cResult[1] = S;
      } else {
        class S {
          constructor() {
            set = new Set(initialSelected);
            return set;
          }
        }
      }
      let num3 = 2;
      const tmp5 = renderLabel(renderIcon.useState(S), 2);
      const first = tmp5[0];
      closure_7 = tmp5[1];
      let obj = initialSelected(getSearchText[7]);
      const str = renderLabel(renderIcon.useState(""), 2)[0];
      if ("" === str) {
        class S {
          constructor() {
            set = new Set(initialSelected);
            return set;
          }
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor(arg0) {
              closure_0 = getId;
              tmp = closure_7((items) => {
                set = new Set(items);
                if (!set.delete(closure_0)) {
                  set.add(closure_0);
                }
                return set;
              });
              return;
            }
          }
          cResult[6] = D;
        } else {
          class D {
            constructor(arg0) {
              closure_0 = getId;
              tmp = closure_7((items) => {
                set = new Set(items);
                if (!set.delete(closure_0)) {
                  set.add(closure_0);
                }
                return set;
              });
              return;
            }
          }
        }
        closure_10 = D;
        if (cResult[7] === onSave) {
          class D {
            constructor(arg0) {
              closure_0 = getId;
              tmp = closure_7((items) => {
                set = new Set(items);
                if (!set.delete(closure_0)) {
                  set.add(closure_0);
                }
                return set;
              });
              return;
            }
          }
          if (cResult[10] === getId) {
            class D {
              constructor(arg0) {
                closure_0 = getId;
                tmp = closure_7((items) => {
                  set = new Set(items);
                  if (!set.delete(closure_0)) {
                    set.add(closure_0);
                  }
                  return set;
                });
                return;
              }
            }
          }
          class V {
            constructor(arg0, arg1) {
              tmp = items[arg1];
              tmp2 = getId(tmp);
              closure_0 = tmp2;
              tmp3 = closure_6;
              obj = {
                start: 0 === arg1,
                end: arg1 === items.length - 1,
                icon: null,
                label: null,
                labelLineClamp: 1,
                checked: null,
                onPress: null,
              };
              tmp4 = undefined;
              if (renderIcon != null) {
                tmp4 = renderIcon(tmp);
              }
              obj.icon = tmp4;
              obj.label = renderLabel(tmp);
              obj.checked = closure_6.has(tmp2);
              obj.onPress = function onPress() {
                return closure_10(closure_0);
              };
              return tmp3(initialSelected(getSearchText[11]).TableCheckboxRow, obj, tmp2);
            }
          }
          cResult[10] = getId;
          cResult[11] = renderIcon;
          cResult[12] = renderLabel;
          cResult[13] = first;
          cResult[14] = items;
          cResult[15] = V;
        }
        function handleDone() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          onSave(first);
        }
        cResult[7] = onSave;
        cResult[8] = first;
        cResult[9] = handleDone;
      } else {
        class D {
          constructor(arg0) {
            closure_0 = getId;
            tmp = closure_7((items) => {
              set = new Set(items);
              if (!set.delete(closure_0)) {
                set.add(closure_0);
              }
              return set;
            });
            return;
          }
        }
        closure_8 = str.toLowerCase();
        class V {
          constructor(arg0, arg1) {
            tmp = items[arg1];
            tmp2 = getId(tmp);
            closure_0 = tmp2;
            tmp3 = closure_6;
            obj = {
              start: 0 === arg1,
              end: arg1 === items.length - 1,
              icon: null,
              label: null,
              labelLineClamp: 1,
              checked: null,
              onPress: null,
            };
            tmp4 = undefined;
            if (renderIcon != null) {
              tmp4 = renderIcon(tmp);
            }
            obj.icon = tmp4;
            obj.label = renderLabel(tmp);
            obj.checked = closure_6.has(tmp2);
            obj.onPress = function onPress() {
              return closure_10(closure_0);
            };
            return tmp3(initialSelected(getSearchText[11]).TableCheckboxRow, obj, tmp2);
          }
        }
        cResult[num3] = getSearchText;
        cResult[3] = items;
        cResult[4] = str;
        num3 = 5;
        cResult[5] = tmp9;
      }
      const tmp7 = renderLabel(renderIcon.useState(""), 2);
    }
  : function ExemptionActionSheet(getSearchText) {
      let items = getSearchText.items;
      ({ initialSelected: importDefault, getId } = getSearchText);
      getSearchText = getSearchText.getSearchText;
      const renderLabel = getSearchText.renderLabel;
      const renderIcon = getSearchText.renderIcon;
      const onSave = getSearchText.onSave;
      closure_8 = undefined;
      ({ title, searchPlaceholder, listId } = getSearchText);
      let tmp = closure_8();
      const tmp3 = getSearchText(
        renderLabel.useState(() => new Set(importDefault)),
        2,
      );
      const first = tmp3[0];
      closure_8 = tmp3[1];
      const tmp5 = getSearchText(renderLabel.useState(""), 2);
      const first1 = tmp5[0];
      const items1 = [items, first1, getSearchText];
      const memo = renderLabel.useMemo(() => {
        if ("" === first1) {
          return items;
        } else {
          items = first1.toLowerCase();
          return items.filter((item) => {
            const tmp = fuzzysearchDefault;
            return tmp(closure_0, getSearchText(item).toLowerCase());
          });
        }
      }, items1);
      const callback = renderLabel.useCallback((arg0) => {
        closure_0 = arg0;
        closure_8((items) => {
          set = new Set(items);
          if (!set.delete(closure_0)) {
            set.add(closure_0);
          }
          return set;
        });
      }, []);
      const items2 = [memo, first, getId, renderIcon, renderLabel, callback];
      const callback1 = renderLabel.useCallback((arg0, arg1) => {
        const tmp2 = getId(memo[arg1]);
        closure_0 = tmp2;
        const obj = {
          start: 0 === arg1,
          end: arg1 === memo.length - 1,
          icon: null,
          label: null,
          labelLineClamp: 1,
          checked: null,
          onPress: null,
        };
        let tmp4;
        if (renderIcon != null) {
          tmp4 = renderIcon(tmp);
        }
        obj.icon = tmp4;
        obj.label = renderLabel(memo[arg1]);
        obj.checked = first.has(tmp2);
        obj.onPress = function onPress() {
          return callback(closure_0);
        };
        return onSave(items(getId[11]).TableCheckboxRow, obj, tmp2);
      }, items2);
      let obj = { scrollable: true, startExpanded: true, header: null, children: null };
      const obj2 = { title, trailing: null };
      const obj3 = { label: null, onPress: null };
      const intl = items(getId[12]).intl;
      obj3.label = intl.string(items(getId[12]).t.i4jeWR);
      obj3.onPress = function handleDone() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        onSave(first);
      };
      obj2.trailing = onSave(items(getId[13]).ActionSheetHeaderPressableText, obj3);
      obj.header = onSave(items(getId[14]).BottomSheetTitleHeader, obj2);
      let tmp2 = require("useScaledRowHeight")();
      const items3 = [
        onSave(renderIcon, {
          style: tmp.search,
          children: onSave(items(getId[15]).SearchField, {
            size: "md",
            onChange: tmp5[1],
            placeholder: searchPlaceholder,
          }),
        }),
      ];
      const obj5 = {
        inActionSheet: true,
        keyboardShouldPersistTaps: "handled",
        style: tmp.list,
        listId,
        estimatedListSize: "windowSize",
        itemSize: tmp2,
        sections: null,
        renderItem: callback1,
      };
      const items4 = [memo.length];
      obj5.sections = items4;
      items3[1] = onSave(require("FastestList"), obj5);
      obj.children = items3;
      return first(items(getId[17]).BottomSheet, obj);
    };
