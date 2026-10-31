// === Module 18186: FavoritesGuildCleanupModal ===

// Module 18186 (FavoritesGuildCleanupModal)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef3450 from "module_3450" /* 3450 */;
import useChannelNameDefault from "useChannelName" /* 5652 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6974 */;
import TableRadioRow from "TableRadioRow" /* 7061 */;
import Modal from "Modal" /* 11481 */;
import useFavoritesCleanupActivityDefault from "useFavoritesCleanupActivity" /* 18189 */;
import noop from "module_19" /* 19 */;

require = fn;
function closeCleanup() {
  ModalActionCreatorsDefault.popWithKey("FavoritesGuildCleanupModal");
}
function CleanupScreen() {
  const tmp3 = closure_9(stage(loading[6])().bottom);
  let validDays = stage(loading[7])(closeCleanup);
  stage = validDays.stage;
  loading = validDays.loading;
  let obj = { style: tmp3.container, spacing: 0, children: null };
  const obj2 = { style: tmp3.scroller, contentContainerStyle: tmp3.content, keyboardShouldPersistTaps: "handled", children: null };
  const obj3 = { spacing: stage(loading[4]).space.PX_16, children: null };
  const obj4 = { variant: "text-md/normal", children: null };
  const intl = validDays(loading[10]).intl;
  obj4.children = intl.string(stage(loading[11]).DbeF7Y);
  let items = [closure_6(validDays(loading[9]).Text, obj4), , ];
  const obj5 = { children: null };
  if ("filter" === stage) {
    const obj6 = { label: null, value: null, onChange: null, keyboardType: "number-pad", maxLength: 5, disabled: null, errorMessage: null };
    const intl6 = tmp5(tmp2[10]).intl;
    obj6.label = intl6.string(tmp(tmp2[11]).VheZQr);
    ({ days: obj14.value, setDays: obj14.onChange } = validDays);
    obj6.disabled = loading;
    let stringResult;
    if ("" !== validDays.days) {
      if (!validDays.validDays) {
        const intl7 = tmp5(tmp2[10]).intl;
        stringResult = intl7.string(tmp(tmp2[11])["wT+K51"]);
      }
    }
    obj6.errorMessage = stringResult;
    const items1 = [closure_6(tmp5(tmp2[12]).TextInput, obj6), ];
    const obj7 = { title: null, hasIcons: false, value: null, onChange: null, children: null };
    const intl8 = tmp5(tmp2[10]).intl;
    obj7.title = intl8.string(tmp(tmp2[11]).KIzpqi);
    let str2 = validDays.categoryId;
    if (str2 == null) {
      str2 = "all";
    }
    obj7.value = str2;
    obj7.onChange = function onChange(arg0) {
      let tmp2 = null;
      if ("all" !== arg0) {
        tmp2 = arg0;
      }
      return validDays.setCategoryId(tmp2);
    };
    const obj8 = { label: null, value: "all", disabled: null };
    const intl9 = tmp5(tmp2[10]).intl;
    obj8.label = intl9.string(tmp(tmp2[11])["gOUr+P"]);
    obj8.disabled = loading;
    const items2 = [closure_6(tmp5(tmp2[14]).TableRadioRow, obj8), ];
    const categories = validDays.categories;
    items2[1] = categories.map((label) => timestampProducer(TableRadioRow.TableRadioRow, { label: label.name, value: label.id, disabled: loading }, label.id));
    obj7.children = items2;
    items1[1] = closure_7(tmp5(tmp2[13]).TableRadioGroup, obj7);
    obj5.children = items1;
    let tmp12 = obj5;
  } else {
    const obj9 = { variant: "text-sm/medium", accessibilityLiveRegion: "polite", children: null };
    const intl2 = tmp5(tmp2[10]).intl;
    const obj10 = { count: length };
    obj9.children = intl2.format(tmp(tmp2[11]).kdvwuo, obj10);
    const items3 = [closure_6(tmp5(tmp2[9]).Text, obj9), , ];
    if (validDays.candidates.length > 0) {
      const obj11 = { spacing: tmp(tmp2[4]).space.PX_8, children: null };
      let Button = tmp5(tmp2[15]).Button;
      let map = tmp5(tmp2[10]).intl;
      let string = map.string;
      let items6 = tmp(tmp2[11]);
      const obj12 = { text: string(validDays.allSelected ? items6.AX7Fmc : items6.ZuaHVJ), variant: "tertiary", size: "sm", disabled: loading, onPress: validDays.toggleSelection };
      items6 = [closure_6(Button, obj12), ];
      const obj13 = { title: null, hasIcons: false, children: null };
      const intl4 = tmp5(tmp2[10]).intl;
      obj13.title = intl4.string(tmp(tmp2[11]).wPednI);
      const candidates = validDays.candidates;
      map = candidates.map;
      string = map((channel) => {
        validDays = channel;
        const obj = {
          channel,
          checked: null,
          disabled: loading,
          onChange(arg0) {
            selectedIds = arg0;
            return selectedIds.setSelectedIds((arr) => {
              if (id) {
                const items = [];
                items[HermesBuiltin.arraySpread(arr, 0)] = id.id;
                let found = items;
              } else {
                found = arr.filter((item) => item !== id.id);
              }
              return found;
            });
          }
        };
        let selectedIds = validDays.selectedIds;
        obj.checked = selectedIds.includes(channel.id);
        return closure_1_6(CleanupCandidateRow, obj, channel.id);
      });
      obj13.children = string;
      Button = closure_6(tmp5(tmp2[16]).TableRowGroup, obj13);
      items6[1] = Button;
      obj11.children = items6;
      closure_7(tmp5(tmp2[8]).Stack, obj11);
    } else {
      const obj15 = { variant: "text-md/normal", children: null };
      const intl3 = tmp5(tmp2[10]).intl;
      obj15.children = intl3.string(tmp(tmp2[11])["4KOdCv"]);
      items3[1] = closure_6(tmp5(tmp2[9]).Text, obj15);
      let tmp6Result = null;
      if (validDays.unknownCount > 0) {
        const obj16 = { variant: "text-sm/normal", children: null };
        const intl5 = tmp5(tmp2[10]).intl;
        const obj17 = { count: validDays.unknownCount };
        obj16.children = intl5.format(tmp(tmp2[11])["rM/wWh"], obj17);
        tmp6Result = closure_6(tmp5(tmp2[9]).Text, obj16);
      }
      items3[2] = tmp6Result;
      obj5.children = items3;
      tmp12 = obj5;
    }
  }
  items[1] = closure_7(closure_8, tmp12);
  let tmp6Result2 = null;
  if (validDays.error) {
    const obj18 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityRole: "alert", children: null };
    const intl10 = tmp5(tmp2[10]).intl;
    obj18.children = intl10.string(tmp(tmp2[11]).toOYQw);
    tmp6Result2 = closure_6(tmp5(tmp2[9]).Text, obj18);
  }
  items[2] = tmp6Result2;
  obj3.children = items;
  obj2.children = closure_7(validDays(loading[8]).Stack, obj3);
  const items4 = [closure_6(closure_5, obj2), ];
  const obj19 = { style: tmp3.actions, spacing: stage(loading[4]).space.PX_8, children: null };
  const intl11 = tmp5(tmp2[10]).intl;
  if ("filter" === stage) {
    let stringResult1 = intl11.string(tmp(tmp2[11]).zAljrZ);
  } else {
    const obj20 = { count: length };
    stringResult1 = intl11.formatToPlainString(tmp(tmp2[11]).jiqJtj, obj20);
  }
  const obj21 = { text: stringResult1, variant: null, disabled: null, loading: null, onPress: null };
  let str3 = "primary";
  if ("review" === stage) {
    str3 = "destructive";
  }
  obj21.variant = str3;
  if (loading) {
    obj21.disabled = loading;
    obj21.loading = loading;
    obj21.onPress = function onPress() {
      React4.dismiss();
      if ("filter" === stage) {
        validDays.review();
      } else {
        validDays.remove();
      }
    };
    const items5 = [closure_6(tmp5(tmp2[15]).Button, obj21), ];
    const intl12 = tmp5(tmp2[10]).intl;
    const t = tmp5(tmp2[10]).t;
    const obj41 = {
      text: intl12.string(tmp9 ? t["ETE/oC"] : t["13/7kX"]),
      variant: "secondary",
      disabled: loading,
      onPress() {
          if ("filter" === stage) {
            ModalActionCreatorsDefault.popWithKey("FavoritesGuildCleanupModal");
          } else {
            validDays.setStage("filter");
          }
        }
    };
    items5[1] = closure_6(tmp5(tmp2[15]).Button, obj41);
    obj19.children = items5;
    items4[1] = closure_7(tmp5(tmp2[8]).Stack, obj19);
    obj.children = items4;
    return closure_7(validDays(loading[8]).Stack, obj);
  } else if (tmp9) {
    validDays = validDays.validDays;
    let tmp17 = !validDays;
  } else {
    tmp17 = 0 === length;
  }
}
function CleanupCandidateRow(channel) {
  channel = channel.channel;
  ({ checked, disabled, onChange } = channel);
  const tmp = useChannelNameDefault(channel);
  const subLabel = useFavoritesCleanupActivityDefault(channel);
  let label = tmp;
  if (tmp == null) {
    label = "";
  }
  return timestampProducer(TableCheckboxRow.TableCheckboxRow, { label, subLabel, checked, disabled, onPress });
}
get_ActivityIndicator = fn(17);
({ Keyboard: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(5014);
let closure_9 = createStyles.createStyles((arg0) => {
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
    let obj = { cleanup: null };
    const obj2 = { title: null, headerLeft: null, render: null };
    let intl = util.intl;
    obj2.title = intl.string(_modDef3450["b081B+"]);
    obj2.headerLeft = function headerLeft() {
      const obj = { text: null, size: "sm", variant: "tertiary", onPress: null };
      const intl = closure_1_0(1113).intl;
      obj.text = intl.string(closure_1_0(1113).t["ETE/oC"]);
      obj.onPress = onPress;
      return closure_1_6(closure_1_0(5634).Button, obj);
    };
    obj2.render = function render() {
      return closure_1_6(closure_1_11, {});
    };
    obj.cleanup = obj2;
    return obj;
  }, []);
  return timestampProducer(Modal.Modal, { screens, initialRouteName: "cleanup" });
};