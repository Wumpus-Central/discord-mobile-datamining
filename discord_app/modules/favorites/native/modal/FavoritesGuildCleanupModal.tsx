// discord_app/modules/favorites/native/modal/FavoritesGuildCleanupModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3629 from "../../intl/FavoritesGuild.messages.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import Modal from "../../../../design/components/Modal/native/Modal.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function closeCleanup() {
  ModalActionCreatorsDefault.popWithKey("FavoritesGuildCleanupModal");
}
function CleanupScreen() {
  const tmp3 = closure_14(loading(1627)().bottom);
  const tmp4 = loading(18730)(closeCleanup);
  _require = tmp4;
  loading = tmp4.loading;
  let obj = { style: tmp3.container, spacing: 0, children: null };
  const obj2 = {
    style: tmp3.scroller,
    contentContainerStyle: tmp3.content,
    keyboardShouldPersistTaps: "handled",
    children: null,
  };
  const obj3 = { spacing: loading(575).space.PX_16, children: null };
  const obj4 = { title: null, hasIcons: false, value: null, onChange: null, children: null };
  let intl = require("util").intl;
  obj4.title = intl.string(loading(3629).IY55rr);
  obj4.value = tmp4.autoAdd;
  obj4.onChange = function onChange(arg0) {
    return closure_0.setAutoAdd(arg0);
  };
  const obj5 = { label: null, subLabel: null, value: null, disabled: null };
  let intl2 = require("util").intl;
  obj5.label = intl2.string(loading(3629).z6aUMH);
  const intl3 = require("util").intl;
  obj5.subLabel = intl3.string(loading(3629)["5pZtcn"]);
  obj5.value = value3;
  obj5.disabled = loading;
  items = [closure_12(require("TableRadioRow").TableRadioRow, obj5), ,];
  const obj6 = { label: null, subLabel: null, value: null, disabled: null };
  const intl4 = require("util").intl;
  obj6.label = intl4.string(loading(3629).MOBbbf);
  const intl5 = require("util").intl;
  obj6.subLabel = intl5.string(loading(3629)["4wUEWy"]);
  obj6.value = value2;
  obj6.disabled = loading;
  items[1] = closure_12(require("TableRadioRow").TableRadioRow, obj6);
  const obj7 = { label: null, value: null, disabled: null };
  const intl6 = require("util").intl;
  obj7.label = intl6.string(loading(3629)["uJRN0+"]);
  obj7.value = value;
  obj7.disabled = loading;
  items[2] = closure_12(require("TableRadioRow").TableRadioRow, obj7);
  obj4.children = items;
  const items1 = [closure_13(require("TableRadioGroup").TableRadioGroup, obj4), , ,];
  const obj9 = { title: null, description: null, hasIcons: false, value: null, onChange: null, children: null };
  const intl7 = require("util").intl;
  obj9.title = intl7.string(loading(3629).THUVKS);
  const intl8 = require("util").intl;
  obj9.description = intl8.string(loading(3629)["89dcNP"]);
  ({ pruneTiming: obj8.value, setPruneTiming: obj8.onChange } = tmp4);
  const items2 = [
    closure_8.map((days) => {
      if (days === closure_2_11) {
        const intl2 = util.intl;
        let stringResult = intl2.string(_modDef3629.EIVQqq);
      } else {
        const intl = util.intl;
        const obj = { days };
        stringResult = intl.formatToPlainString(_modDef3629.ankeKO, obj);
      }
      return application_id(TableRadioRow.TableRadioRow, { label: stringResult, value: days, disabled: loading }, days);
    }),
  ];
  const obj10 = { label: null, value: null, disabled: null };
  const intl9 = require("util").intl;
  obj10.label = intl9.string(loading(3629).LxrV05);
  obj10.value = require("useFavoritesCleanup").FAVORITES_PRUNE_NEVER;
  obj10.disabled = loading;
  items2[1] = closure_12(require("TableRadioRow").TableRadioRow, obj10);
  obj9.children = items2;
  items1[1] = closure_13(require("TableRadioGroup").TableRadioGroup, obj9);
  const obj11 = { title: null, hasIcons: false, value: null, onChange: null, children: null };
  const intl10 = require("util").intl;
  obj11.title = intl10.string(loading(3629).YFhloA);
  obj11.value = tmp4.scope;
  obj11.onChange = function onChange(arg0) {
    return closure_0.setScope(arg0);
  };
  const obj12 = { label: null, value: null, disabled: null };
  const intl11 = require("util").intl;
  obj12.label = intl11.string(loading(3629).fDT7MF);
  obj12.value = value5;
  let tmp9 = loading;
  if (!loading) {
    tmp9 = !tmp4.prune;
  }
  obj12.disabled = tmp9;
  const items3 = [closure_12(require("TableRadioRow").TableRadioRow, obj12)];
  const obj13 = { label: null, value: null, disabled: null };
  const intl12 = tmp6(1113).intl;
  obj13.label = intl12.string(loading(3629)["gOUr+P"]);
  obj13.value = value4;
  let tmp10 = loading;
  if (!loading) {
    tmp10 = !tmp4.prune;
  }
  obj13.disabled = tmp10;
  items3[1] = closure_12(require("TableRadioRow").TableRadioRow, obj13);
  obj11.children = items3;
  items1[2] = closure_13(require("TableRadioGroup").TableRadioGroup, obj11);
  let tmp7Result = null;
  if (tmp4.error) {
    const obj14 = {
      variant: "body-sm/normal",
      color: "text-feedback-critical",
      accessibilityRole: "alert",
      children: null,
    };
    const intl13 = tmp6(1113).intl;
    obj14.children = intl13.string(tmp(3629).toOYQw);
    tmp7Result = closure_12(tmp6(5866).Text, obj14);
  }
  items1[3] = tmp7Result;
  obj3.children = items1;
  obj2.children = closure_13(require("Stack/Stack").Stack, obj3);
  const items4 = [closure_12(ScrollView, obj2)];
  const obj15 = { style: tmp3.actions, spacing: loading(575).space.PX_8, children: null };
  const obj29 = { text: null, disabled: null, loading: null, onPress: null };
  const intl14 = tmp6(1113).intl;
  obj29.text = intl14.string(require("util").t["R3BPH+"]);
  let tmp12 = loading;
  if (!loading) {
    tmp12 = !tmp4.canSave;
  }
  obj29.disabled = tmp12;
  obj29.loading = loading;
  obj29.onPress = tmp4.save;
  obj15.children = closure_12(require("components/Button/Button").Button, obj29);
  items4[1] = closure_12(require("Stack/Stack").Stack, obj15);
  obj.children = items4;
  return closure_13(require("Stack/Stack").Stack, obj);
}
const ScrollView = fn(17).ScrollView;
const FavoritesConstants = fn(5105);
({
  FAVORITES_AUTO_ADD_THREADS_NEVER: hasOwnProperty,
  FAVORITES_AUTO_ADD_THREADS_OWN_CATEGORY: closure_6,
  FAVORITES_AUTO_ADD_THREADS_PER_GUILD: metroImportDefault,
  FAVORITES_PRUNE_INACTIVE_THREADS_DAY_OPTIONS: closure_8,
  FAVORITES_PRUNE_SCOPE_ALL: closure_9,
  FAVORITES_PRUNE_SCOPE_AUTO_ADDED: closure_10,
  FAVORITES_PRUNE_WHEN_ARCHIVED: closure_11,
} = FavoritesConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5243);
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = {
    container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
    scroller: { flex: 1 },
    content: null,
    actions: null,
  };
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
    obj2.title = intl.string(_modDef3629.hklnjs);
    obj2.headerLeft = require("NavigatorHeader").getHeaderCloseButton(closeCleanup);
    obj2.render = function render() {
      return closure_1_12(closure_1_16, {});
    };
    obj.cleanup = obj2;
    return obj;
  }, []);
  return application_id(Modal.Modal, { screens, initialRouteName: "cleanup" });
}
