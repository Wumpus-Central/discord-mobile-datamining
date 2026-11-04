// discord_app/modules/user_settings/profiles/native/ProfileSelectorActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import AutocompleteUtilsDefault from "../../../../utils/AutocompleteUtils.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import ClydeIcon from "../../../../design/components/Icon/native/redesign/generated/ClydeIcon.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";

const GuildIconDefault = GuildIcon;

require = fn;
function getOptionKey(type) {
  let str = "main";
  if ("main" !== type.type) {
    str = type.guild.id;
  }
  return str;
}
const View = fn(17).View;
let closure_8 = fn(16824).PROFILE_SELECTOR_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5141);
let obj = {
  searchBar: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 },
  emptyState: null,
  emptyStateText: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj.emptyState = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
obj.emptyStateText = { textAlign: "center" };
let closure_11 = createStyles.createStyles(obj);
let closure_13 = noop.memo(function ProfileOptionRow(option) {
  option = option.option;
  const onSelect = option.onSelect;
  ({ selected, start, end } = option);
  let str = "main";
  if ("main" !== option.type) {
    str = option.guild.id;
  }
  const obj = {
    value: str,
    label: null,
    labelLineClamp: 1,
    icon: null,
    start: null,
    end: null,
    legacyCompat_selected: null,
    legacyCompat_onPress: null,
  };
  if ("main" === option.type) {
    const intl = util.intl;
    let name = intl.string(util.t["2p07FR"]);
  } else {
    name = option.guild.name;
  }
  obj.label = name;
  if ("main" === option.type) {
    const obj2 = { size: "md", color: nativeDefault.colors.ICON_DEFAULT };
    let tmpResult = React6(ClydeIcon.ClydeIcon, obj2);
  } else {
    const obj3 = { guild: option.guild, size: GuildIcon.GuildIconSizes.XSMALL };
    tmpResult = React6(GuildIconDefault, obj3);
  }
  obj.icon = tmpResult;
  obj.start = start;
  obj.end = end;
  obj.legacyCompat_selected = selected;
  obj.legacyCompat_onPress = function legacyCompat_onPress() {
    return onSelect(option);
  };
  return React6(TableRadioRow.TableRadioRow, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileSelectorActionSheet.tsx");

export default function ProfileSelectorActionSheet(selectedGuildId) {
  selectedGuildId = selectedGuildId.selectedGuildId;
  const onSelectMainProfile = selectedGuildId.onSelectMainProfile;
  const onSelectGuild = selectedGuildId.onSelectGuild;
  let trimmed;
  let stateFromStoresArray;
  let onSelect;
  const tmp = closure_11();
  [str, tmp5] = trimmed(stateFromStoresArray.useState(""), 2);
  trimmed = str.trim();
  closure_129_0 = trimmed;
  const tmp4 = trimmed(stateFromStoresArray.useState(""), 2);
  items = [onSelect, SortedGuildStore];
  const items1 = [trimmed];
  stateFromStoresArray = selectedGuildId(onSelectGuild[13]).useStateFromStoresArray(
    items,
    () => {
      if (0 === selectedGuildId.length) {
        const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
        const mapped = flattenedGuildIds.map((item) => guild.getGuild(item));
        let found = mapped.filter((item) => null != item);
      } else {
        const obj2 = { query: tmp, limit: Infinity };
        found = AutocompleteUtilsDefault.queryGuilds(obj2).map((record) => record.record);
        const queryGuildsResult = AutocompleteUtilsDefault.queryGuilds(obj2);
      }
      return found;
    },
    items1,
  );
  const items2 = [stateFromStoresArray, trimmed];
  const memo = stateFromStoresArray.useMemo(() => {
    const mapped = stateFromStoresArray.map((guild) => ({ type: "guild", guild }));
    let tmp2 = mapped;
    if (0 === trimmed.length) {
      items = [{ type: "main" }];
      HermesBuiltin.arraySpread(mapped, 1);
      tmp2 = items;
    }
    return tmp2;
  }, items2);
  const effect = stateFromStoresArray.useEffect(() => onSelectMainProfile(onSelectGuild[16]), []);
  const items3 = [trimmed, memo.length];
  const effect1 = stateFromStoresArray.useEffect(() => {
    if (trimmed.length > 0) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { count: memo.length };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.ZGVL3g, obj), "polite");
    }
  }, items3);
  const items4 = [onSelectMainProfile, onSelectGuild];
  onSelect = stateFromStoresArray.useCallback((type) => {
    ActionSheetActionCreatorsDefault.hideActionSheet(closure_8);
    if ("main" === type.type) {
      onSelectMainProfile();
    } else {
      onSelectGuild(type.guild);
    }
  }, items4);
  const items5 = [memo, selectedGuildId, onSelect];
  const callback1 = stateFromStoresArray.useCallback((arg0) => {
    ({ item, index } = arg0);
    if ("main" === item.type) {
      let tmp2 = null == selectedGuildId;
    } else {
      tmp2 = item.guild.id === selectedGuildId;
    }
    return React6(closure_13, {
      option: item,
      selected: tmp2,
      start: 0 === index,
      end: index === memo.length - 1,
      onSelect,
    });
  }, items5);
  let obj2 = { scrollable: true, header: null, children: null };
  const obj3 = { title: null };
  let intl = selectedGuildId(onSelectGuild[10]).intl;
  obj3.title = intl.string(selectedGuildId(onSelectGuild[10]).t.MRnpah);
  obj2.header = closure_9(selectedGuildId(onSelectGuild[20]).BottomSheetTitleHeader, obj3);
  const obj4 = { style: tmp.searchBar, children: null };
  const obj5 = { size: "md", accessibilityLabel: null, onChange: null };
  const intl2 = selectedGuildId(onSelectGuild[10]).intl;
  obj5.accessibilityLabel = intl2.string(selectedGuildId(onSelectGuild[10]).t["5h0QOP"]);
  obj5.onChange = tmp5;
  obj4.children = closure_9(selectedGuildId(onSelectGuild[21]).SearchBar, obj5);
  const items6 = [closure_9(memo, obj4)];
  if (0 === memo.length) {
    const obj6 = { style: tmp.emptyState, children: null };
    const obj7 = { variant: "body-md/medium", color: "text-subtle", style: tmp.emptyStateText, children: null };
    const intl3 = tmp7(tmp3[10]).intl;
    obj7.children = intl3.string(tmp7(tmp3[10]).t["Xe+fJM"]);
    obj6.children = closure_9(tmp7(tmp3[22]).Text, obj7);
    let tmp14Result = closure_9(memo, obj6);
  } else {
    const obj8 = {
      accessibilityRole: "radiogroup",
      accessibilityLabel: null,
      keyboardShouldPersistTaps: "handled",
      maintainVisibleContentPosition: null,
      data: null,
      keyExtractor: null,
      renderItem: null,
      contentContainerStyle: null,
    };
    const intl4 = tmp7(tmp3[10]).intl;
    obj8.accessibilityLabel = intl4.string(tmp7(tmp3[10]).t.MRnpah);
    obj8.maintainVisibleContentPosition = { disabled: true };
    obj8.data = memo;
    obj8.keyExtractor = getOptionKey;
    obj8.renderItem = callback1;
    const obj9 = {
      paddingHorizontal: tmp2(tmp3[8]).space.PX_16,
      paddingBottom: tmp2(tmp3[8]).space.PX_16 + onSelectMainProfile(onSelectGuild[15])().insets.bottom,
    };
    obj8.contentContainerStyle = obj9;
    tmp14Result = closure_9(tmp7(tmp3[23]).BottomSheetFlashList, obj8);
  }
  items6[1] = tmp14Result;
  obj2.children = items6;
  return closure_10(selectedGuildId(onSelectGuild[19]).BottomSheet, obj2);
}
