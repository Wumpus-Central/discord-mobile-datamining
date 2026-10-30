// === Module 16461: UserPrimaryGuildListBottomSheet ===

// Module 16461 (UserPrimaryGuildListBottomSheet)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5018 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import GuildIconDefault from "GuildIcon" /* 6951 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import Form from "Form" /* 8169 */;
import openGuildTagCreateFlowDefault from "openGuildTagCreateFlow" /* 14692 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildTagBadgeSize = fn(8385).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5009);
let obj = { titleContainer: { paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "center" }, guildIcon: { marginLeft: 4 }, tag: { padding: 2 }, tagStyles: null, divider: null, itemTrailingStyle: null, searchContainer: null, searchRow: null, searchField: null, emptyState: null, noResults: null };
const PlatformUtils = fn(1376);
let num = 18;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
obj.tagStyles = { lineHeight: num };
obj.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.itemTrailingStyle = { flexDirection: "row", alignItems: "center", gap: 8, height: 20 };
obj.searchContainer = { paddingHorizontal: 16, paddingTop: 16 };
obj.searchRow = { flexDirection: "row", alignItems: "center", gap: 8 };
obj.searchField = { flex: 1 };
obj.emptyState = { alignItems: "center" };
obj.noResults = { padding: 16, textAlign: "center" };
let closure_10 = createStyles.createStyles(obj);
let closure_11 = noop.memo(function Item(item) {
  item = item.item;
  ({ selected, onSelectGuild: importDefault } = item);
  ({ start, end } = item);
  const tmp = closure_10();
  if (item != null) {
    const profile = item.profile;
  }
  let guildTagBadgeUrl = null != item;
  if (guildTagBadgeUrl) {
    let badge;
    if (profile != null) {
      badge = profile.badge;
    }
    guildTagBadgeUrl = item(8728).getGuildTagBadgeUrl(item.id, badge, GuildTagBadgeSize.SIZE_24);
    let obj = item(8728);
  }
  const radioA11yNative = item(5077).useRadioA11yNative({ selected });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const obj3 = {
    start,
    end,
    onPress() {
      let id;
      if (item != null) {
        id = item.id;
      }
      if (id == null) {
        id = null;
      }
      closure_1_1(id);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    label: null,
    icon: null,
    accessibilityRole: null,
    accessibilityState: null,
    trailing: null
  };
  if (null != item) {
    let name = item.name;
  } else {
    const intl = tmp7(1114).intl;
    name = intl.string(tmp7(1114).t.PoWNfe);
  }
  obj3.label = name;
  let tmp10Result = null;
  if (null != item) {
    const obj4 = { style: tmp.guildIcon, guild: item, size: tmp7(6951).GuildIconSizes.SMALL_32 };
    tmp10Result = closure_7(GuildIconDefault, obj4);
  }
  obj3.icon = tmp10Result;
  obj3.accessibilityRole = accessibilityRole;
  obj3.accessibilityState = accessibilityState;
  const obj5 = { style: tmp.itemTrailingStyle, children: null };
  let tmp10Result2 = null != item;
  if (tmp10Result2) {
    tmp10Result2 = null != profile;
  }
  if (tmp10Result2) {
    const obj10 = { containerStyles: null, textStyle: null, guildTag: null, guildBadge: null, badgeSize: null, textVariant: "heading-md/semibold", textColor: "text-strong" };
    ({ tag: obj6.containerStyles, tagStyles: obj6.textStyle } = tmp);
    const tag = profile.tag;
    obj10.guildTag = tag;
    obj10.guildBadge = guildTagBadgeUrl;
    obj10.badgeSize = GuildTagBadgeSize.SIZE_16;
    tmp10Result2 = closure_7(tmp7(9276).BaseGuildTagChiplet, obj10);
  }
  const items = [tmp10Result2, closure_7(item(7056).FormRadio, { selected })];
  obj5.children = items;
  obj3.trailing = closure_8(View, obj5);
  return closure_7(item(6969).TableRow, obj3);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx");

export default function UserPrimaryGuildListBottomSheet(availableGuilds) {
  availableGuilds = availableGuilds.availableGuilds;
  const selectedGuildId = availableGuilds.selectedGuildId;
  const onSelectGuild = availableGuilds.onSelectGuild;
  first = undefined;
  c6 = undefined;
  function handleCreateGuildTag() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    openGuildTagCreateFlowDefault(c6, AnalyticsLocationDefault.USER_SETTINGS_USER_PROFILE);
  }
  const tmp = closure_10();
  _slicedToArray = tmp;
  [first, obj6.onChange] = first.useState("");
  const ref = first.useRef(null);
  const guildTagCreationUpsell = availableGuilds(onSelectGuild[16]).useGuildTagCreationUpsell("UserPrimaryGuildListBottomSheet");
  ({ creatableGuilds: c6, isUpsellVisible } = guildTagCreationUpsell);
  let items = [availableGuilds];
  const memo = first.useMemo(() => _modDef12.sortBy(availableGuilds, (name) => name.name.toLowerCase()), items);
  const items1 = [memo, first];
  const memo1 = first.useMemo(() => {
    let formatted = first.trim().toLowerCase();
    if ("" === formatted) {
      const items = [null];
      HermesBuiltin.arraySpread(memo, 1);
      let found = items;
    } else {
      found = memo.filter((name) => {
        formatted = name.name.toLowerCase();
        let hasItem = formatted.includes(formatted);
        if (!hasItem) {
          const profile = name.profile;
          let flag;
          if (profile != null) {
            if (profile.tag != null) {
              const formatted1 = str2.toLowerCase();
              flag = formatted1.includes(formatted);
            }
          }
          if (flag == null) {
            flag = false;
          }
          hasItem = flag;
        }
        return hasItem;
      });
    }
    return found;
  }, items1);
  const items2 = [first];
  const effect = first.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToOffset({ offset: 0, animated: false });
    }
  }, items2);
  const items3 = [memo1, first];
  const effect1 = first.useEffect(() => {
    if ("" !== first.trim()) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { count: memo1.length };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.ZGVL3g, obj), "polite");
    }
  }, items3);
  if (0 === availableGuilds.length) {
    if (null == selectedGuildId) {
      if (isUpsellVisible) {
        const obj2 = { children: null };
        const obj3 = { title: null, subtitle: null };
        const intl8 = tmp5(tmp6[12]).intl;
        obj3.title = intl8.string(tmp5(tmp6[12]).t.Fo0g9x);
        const intl9 = tmp5(tmp6[12]).intl;
        obj3.subtitle = intl9.string(tmp5(tmp6[12]).t["NV+MBV"]);
        const items4 = [memo(tmp5(tmp6[22]).BottomSheetTitleHeader, obj3), ];
        const obj4 = { style: tmp.emptyState, children: null };
        const obj5 = { text: null, onPress: null };
        const intl10 = tmp5(tmp6[12]).intl;
        obj5.text = intl10.string(tmp5(tmp6[12]).t["65zBhE"]);
        obj5.onPress = handleCreateGuildTag;
        obj4.children = memo(tmp5(tmp6[23]).Button, obj5);
        items4[1] = memo(ref, obj4);
        obj2.children = items4;
        return memo1(tmp5(tmp6[21]).ActionSheet, obj2);
      }
    }
  }
  const obj6 = { placeholder: null, accessibilityLabel: null, onChange: null };
  let intl = tmp5(tmp6[12]).intl;
  obj6.placeholder = intl.string(availableGuilds(onSelectGuild[12]).t.uohsSv);
  const intl2 = tmp5(tmp6[12]).intl;
  obj6.accessibilityLabel = intl2.string(availableGuilds(onSelectGuild[12]).t.uohsSv);
  const tmp13 = memo(availableGuilds(onSelectGuild[24]).SearchBar, obj6);
  const obj7 = { style: tmp.titleContainer, children: null };
  const obj8 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  const intl3 = tmp5(tmp6[12]).intl;
  obj8.children = intl3.string(availableGuilds(onSelectGuild[12]).t.Fo0g9x);
  obj7.children = memo(availableGuilds(onSelectGuild[26]).Text, obj8);
  const items5 = [memo(ref, obj7), ];
  const obj9 = { style: tmp.searchContainer, children: null };
  let tmp14Result = tmp13;
  if (isUpsellVisible) {
    const obj10 = { style: tmp.searchRow, children: null };
    const obj11 = { style: tmp.searchField, children: tmp13 };
    const items6 = [tmp12(tmp16, obj11), ];
    const obj12 = { text: null, accessibilityLabel: null, variant: "secondary", size: "lg", onPress: null };
    const intl4 = tmp5(tmp6[12]).intl;
    obj12.text = intl4.string(tmp5(tmp6[12]).t.CumH4u);
    const intl5 = tmp5(tmp6[12]).intl;
    obj12.accessibilityLabel = intl5.string(tmp5(tmp6[12]).t.xO5QzM);
    obj12.onPress = handleCreateGuildTag;
    items6[1] = tmp12(tmp5(tmp6[23]).Button, obj12);
    obj10.children = items6;
    tmp14Result = tmp14(tmp16, obj10);
  }
  const obj13 = { scrollable: true, startExpanded: true, header: null, children: null };
  const obj14 = { children: null };
  obj9.children = tmp14Result;
  items5[1] = memo(ref, obj9);
  obj14.children = items5;
  obj13.header = memo1(closure_9, obj14);
  const obj15 = { ref, maintainVisibleContentPosition: { disabled: true }, accessibilityRole: "radiogroup", accessibilityLabel: null, keyboardShouldPersistTaps: "handled", ListEmptyComponent: null, ItemSeparatorComponent: null, data: null, contentContainerStyle: null, keyExtractor: null, renderItem: null };
  const intl6 = tmp5(tmp6[12]).intl;
  obj15.accessibilityLabel = intl6.string(availableGuilds(onSelectGuild[12]).t.Fo0g9x);
  const obj16 = { variant: "text-md/normal", color: "text-muted", style: tmp.noResults, children: null };
  const intl7 = tmp5(tmp6[12]).intl;
  obj16.children = intl7.formatToPlainString(availableGuilds(onSelectGuild[12]).t.ZGVL3g, { count: 0 });
  obj15.ListEmptyComponent = memo(availableGuilds(onSelectGuild[26]).Text, obj16);
  obj15.ItemSeparatorComponent = function ItemSeparatorComponent() {
    return React5(Form.FormDivider, { iconPush: true, style: divider.divider });
  };
  obj15.data = memo1;
  obj15.contentContainerStyle = { padding: 16 };
  obj15.keyExtractor = function keyExtractor(id) {
    let str = "none-guild-type";
    if (null != id) {
      str = id.id;
    }
    return str;
  };
  obj15.renderItem = function renderItem(arg0) {
    ({ item, index } = arg0);
    const obj = { start: 0 === index, end: index === memo1.length - 1, item, selected: null, onSelectGuild: null };
    let tmp3 = selectedGuildId;
    if (selectedGuildId == null) {
      tmp3 = null;
    }
    let id;
    if (item != null) {
      id = item.id;
    }
    if (id == null) {
      id = null;
    }
    obj.selected = tmp3 === id;
    obj.onSelectGuild = onSelectGuild;
    return React5(closure_11, obj);
  };
  obj13.children = memo(availableGuilds(onSelectGuild[27]).BottomSheetFlashList, obj15);
  return memo(availableGuilds(onSelectGuild[25]).BottomSheet, obj13);
};