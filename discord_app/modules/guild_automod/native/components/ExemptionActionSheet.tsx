// === Module 18054: ExemptionActionSheet ===

// Module 18054 (ExemptionActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4794 */;
import fuzzysearchDefault from "fuzzysearch" /* 5820 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { search: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, list: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.list = { flex: 1, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/ExemptionActionSheet.tsx");

export default function ExemptionActionSheet(getSearchText) {
  let items = getSearchText.items;
  ({ initialSelected: importDefault, getId } = getSearchText);
  getSearchText = getSearchText.getSearchText;
  const renderLabel = getSearchText.renderLabel;
  const renderIcon = getSearchText.renderIcon;
  const onSave = getSearchText.onSave;
  closure_8 = undefined;
  ({ title, searchPlaceholder, listId } = getSearchText);
  let tmp = closure_8();
  const tmp3 = getSearchText(renderLabel.useState(() => new Set(importDefault)), 2);
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
      const set = new Set(items);
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
    const obj = { start: 0 === arg1, end: arg1 === memo.length - 1, icon: null, label: null, labelLineClamp: 1, checked: null, onPress: null };
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
    return onSave(items(getId[8]).TableCheckboxRow, obj, tmp2);
  }, items2);
  let obj = { scrollable: true, startExpanded: true, header: null, children: null };
  const obj2 = { title, trailing: null };
  const obj3 = { label: null, onPress: null };
  const intl = items(getId[12]).intl;
  obj3.label = intl.string(items(getId[12]).t.i4jeWR);
  obj3.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onSave(first);
  };
  obj2.trailing = onSave(items(getId[11]).ActionSheetHeaderPressableText, obj3);
  obj.header = onSave(items(getId[10]).BottomSheetTitleHeader, obj2);
  let tmp2 = require("useScaledRowHeight")();
  const items3 = [onSave(renderIcon, { style: tmp.search, children: onSave(items(getId[14]).SearchField, { size: "md", onChange: tmp5[1], placeholder: searchPlaceholder }) }), ];
  const obj5 = { inActionSheet: true, keyboardShouldPersistTaps: "handled", style: tmp.list, listId, estimatedListSize: "windowSize", itemSize: tmp2, sections: null, renderItem: callback1 };
  const items4 = [memo.length];
  obj5.sections = items4;
  items3[1] = onSave(require("FastestList"), obj5);
  obj.children = items3;
  return first(items(getId[9]).BottomSheet, obj);
};