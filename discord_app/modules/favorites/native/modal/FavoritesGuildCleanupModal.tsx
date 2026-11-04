// === Module 18439: FavoritesGuildCleanupModal ===

// Module 18439 (FavoritesGuildCleanupModal)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3577 from "module_3577" /* 3577 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import TableRadioRow from "TableRadioRow" /* 7202 */;
import Modal from "Modal" /* 11670 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function closeCleanup() {
  ModalActionCreatorsDefault.popWithKey("FavoritesGuildCleanupModal");
}
function CleanupScreen() {
  const tmp3 = closure_13(loading(1627)().bottom);
  const tmp4 = loading(18440)(closeCleanup);
  _require = tmp4;
  loading = tmp4.loading;
  let obj = { style: tmp3.container, spacing: 0, children: null };
  const obj2 = { style: tmp3.scroller, contentContainerStyle: tmp3.content, keyboardShouldPersistTaps: "handled", children: null };
  const obj3 = { spacing: loading(575).space.PX_16, children: null };
  const obj4 = { hasIcons: false, children: null };
  const obj5 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  let intl = require("util").intl;
  obj5.label = intl.string(loading(3577).DIyQIF);
  let intl2 = require("util").intl;
  obj5.subLabel = intl2.string(loading(3577).d15FpO);
  obj5.checked = tmp4.autoAdd;
  obj5.disabled = loading;
  obj5.onPress = tmp4.setAutoAdd;
  items = [closure_10(require("TableCheckboxRow").TableCheckboxRow, obj5), ];
  const obj6 = { label: null, subLabel: null, checked: null, disabled: null, onPress: null };
  const intl3 = require("util").intl;
  obj6.label = intl3.string(loading(3577)["bI/czq"]);
  const intl4 = require("util").intl;
  obj6.subLabel = intl4.string(loading(3577).RRsgY0);
  obj6.checked = tmp4.prune;
  obj6.disabled = loading;
  obj6.onPress = tmp4.setPrune;
  items[1] = closure_10(require("TableCheckboxRow").TableCheckboxRow, obj6);
  obj4.children = items;
  const items1 = [closure_11(require("TableRowGroup").TableRowGroup, obj4), , ];
  let tmp5Result = null;
  if (tmp4.prune) {
    const obj7 = { children: null };
    const obj9 = { title: null, hasIcons: false, value: null, onChange: null, children: null };
    const intl5 = tmp6(1113).intl;
    obj9.title = intl5.string(tmp(3577).THUVKS);
    ({ days: obj8.value, setDays: obj8.onChange } = tmp4);
    obj9.children = closure_6.map((days) => {
      if (days === React6) {
        const intl2 = util.intl;
        let stringResult = intl2.string(_modDef3577.EIVQqq);
      } else {
        const intl = util.intl;
        const obj = { days };
        stringResult = intl.formatToPlainString(_modDef3577.eic1d0, obj);
      }
      return closure_2_10(TableRadioRow.TableRadioRow, { label: stringResult, value: days, disabled: loading }, days);
    });
    const items2 = [closure_10(tmp6(7199).TableRadioGroup, obj9), ];
    const obj10 = { title: null, hasIcons: false, value: null, onChange: null, children: null };
    const intl6 = tmp6(1113).intl;
    obj10.title = intl6.string(tmp(3577).KIzpqi);
    obj10.value = tmp4.scope;
    obj10.onChange = function onChange(arg0) {
      return scope.setScope(arg0);
    };
    const obj11 = { label, value: value2, disabled: loading };
    const items3 = [closure_10(tmp6(7202).TableRadioRow, obj11), ];
    const obj12 = { label: null, value: null, disabled: null };
    const intl7 = tmp6(1113).intl;
    obj12.label = intl7.string(tmp(3577)["gOUr+P"]);
    obj12.value = value;
    obj12.disabled = loading;
    items3[1] = closure_10(tmp6(7202).TableRadioRow, obj12);
    obj10.children = items3;
    items2[1] = closure_11(tmp6(7199).TableRadioGroup, obj10);
    obj7.children = items2;
    tmp5Result = closure_11(closure_12, obj7);
  }
  items1[1] = tmp5Result;
  let tmp7Result = null;
  if (tmp4.error) {
    const obj13 = { variant: "body-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: null };
    const intl8 = tmp6(1113).intl;
    obj13.children = intl8.string(tmp(3577).toOYQw);
    tmp7Result = closure_10(tmp6(5761).Text, obj13);
  }
  items1[2] = tmp7Result;
  obj3.children = items1;
  obj2.children = closure_11(require("Stack/Stack").Stack, obj3);
  const items4 = [closure_10(ScrollView, obj2), ];
  const obj14 = { style: tmp3.actions, spacing: loading(575).space.PX_8, children: null };
  const obj27 = { text: null, disabled: null, loading: null, onPress: null };
  const intl9 = tmp6(1113).intl;
  obj27.text = intl9.string(require("util").t["R3BPH+"]);
  let tmp16 = loading;
  if (!loading) {
    tmp16 = !tmp4.canSave;
  }
  obj27.disabled = tmp16;
  obj27.loading = loading;
  obj27.onPress = tmp4.save;
  obj14.children = closure_10(require("components/Button/Button").Button, obj27);
  items4[1] = closure_10(require("Stack/Stack").Stack, obj14);
  obj.children = items4;
  return closure_11(require("Stack/Stack").Stack, obj);
}
const ScrollView = fn(17).ScrollView;
const FavoritesConstants = fn(5003);
({ FAVORITES_AUTO_ADDED_THREADS_CATEGORY_NAME: hasOwnProperty, FAVORITES_PRUNE_INACTIVE_THREADS_DAY_OPTIONS: closure_6, FAVORITES_PRUNE_SCOPE_ALL: metroImportDefault, FAVORITES_PRUNE_SCOPE_AUTO_ADDED: closure_8, FAVORITES_PRUNE_WHEN_ARCHIVED: closure_9 } = FavoritesConstants);
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5141);
let closure_13 = createStyles.createStyles((arg0) => {
  const obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scroller: { flex: 1 }, content: null, actions: null };
  const obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.content = { padding: nativeDefault.space.PX_16 };
  const obj3 = { padding: nativeDefault.space.PX_16 };
  obj.actions = { padding: nativeDefault.space.PX_16, paddingBottom: arg0 + nativeDefault.space.PX_16 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/modal/FavoritesGuildCleanupModal.tsx");

export default function FavoritesGuildCleanupModal() {
  const screens = noop.useMemo(() => {
    const obj = { cleanup: null };
    const obj2 = { title: null, headerLeft: null, render: null };
    const intl = require("util").intl;
    obj2.title = intl.string(_modDef3577.hklnjs);
    obj2.headerLeft = require("NavigatorHeader").getHeaderCloseButton(closeCleanup);
    obj2.render = function render() {
      return closure_1_10(closure_1_15, {});
    };
    obj.cleanup = obj2;
    return obj;
  }, []);
  return closure_1_10(Modal.Modal, { screens, initialRouteName: "cleanup" });
};