// === Module 14642: UserPrimaryGuildListBottomSheet ===

// Module 14642 (UserPrimaryGuildListBottomSheet)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Form from "Form" /* 8593 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildTagBadgeSize = fn(7944).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let obj = { titleContainer: { paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "center" }, guildIcon: { marginLeft: 4 }, tag: { padding: 2 }, tagStyles: null, divider: null, itemTrailingStyle: null };
const PlatformUtils = fn(1115);
let num = 18;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
obj.tagStyles = { lineHeight: num };
obj = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.divider = obj;
obj.itemTrailingStyle = { flexDirection: "row", alignItems: "center", gap: 8, height: 20 };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = noop.memo((item) => {
  item = item.item;
  const selected = item.selected;
  const onSelectGuild = item.onSelectGuild;
  ({ start, end } = item);
  const tmp = closure_8();
  if (item != null) {
    const profile = item.profile;
  }
  let guildTagBadgeUrl = null != item;
  if (guildTagBadgeUrl) {
    let obj = item(onSelectGuild[7]);
    let badge;
    if (profile != null) {
      badge = profile.badge;
    }
    guildTagBadgeUrl = obj.getGuildTagBadgeUrl(item.id, badge, GuildTagBadgeSize.SIZE_24);
  }
  obj = {
    start,
    end,
    onPress() {
      let tmp2 = null;
      if (!selected) {
        let id;
        if (item != null) {
          id = item.id;
        }
        if (id == null) {
          id = null;
        }
        tmp2 = id;
      }
      onSelectGuild(tmp2);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    label: null,
    icon: null,
    trailing: null
  };
  if (null != item) {
    let name = item.name;
  } else {
    const intl = tmp8(tmp9[10]).intl;
    name = intl.string(tmp8(tmp9[10]).t.PoWNfe);
  }
  obj.label = name;
  let tmp7Result = null;
  if (null != item) {
    obj = { style: tmp.guildIcon, guild: item, size: tmp8(tmp9[11]).GuildIconSizes.SMALL_32 };
    tmp7Result = closure_6(selected(tmp9[11]), obj);
    const tmp12 = selected(tmp9[11]);
  }
  obj.icon = tmp7Result;
  const obj1 = { style: tmp.itemTrailingStyle, children: null };
  tmp7Result = null != item;
  if (tmp7Result) {
    tmp7Result = null != profile;
  }
  if (tmp7Result) {
    const obj2 = { containerStyles: null, textStyle: null, guildTag: null, guildBadge: null, badgeSize: null, textVariant: "heading-md/semibold", textColor: "text-strong" };
    ({ tag: obj5.containerStyles, tagStyles: obj5.textStyle } = tmp);
    const tag = profile.tag;
    obj2.guildTag = tag;
    obj2.guildBadge = guildTagBadgeUrl;
    obj2.badgeSize = GuildTagBadgeSize.SIZE_16;
    tmp7Result = closure_6(tmp8(tmp9[12]).BaseGuildTagChiplet, obj2);
  }
  const items = [tmp7Result, closure_6(item(onSelectGuild[13]).FormRadio, { selected })];
  obj1.children = items;
  obj.trailing = closure_7(View, obj1);
  return closure_6(item(onSelectGuild[8]).TableRow, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx");

export default function UserPrimaryGuildListBottomSheet(availableGuilds) {
  availableGuilds = availableGuilds.availableGuilds;
  ({ selectedGuildId: importDefault, onSelectGuild: dependencyMap } = availableGuilds);
  const tmp = closure_8();
  noop = tmp;
  let items = [availableGuilds];
  const memo = noop.useMemo(() => {
    const items = [null];
    HermesBuiltin.arraySpread(_modDef12.sortBy(availableGuilds, (name) => name.name.toLowerCase()), 1);
    return items;
  }, items);
  let obj = { scrollable: true, startExpanded: true, header: null, children: null };
  obj = { style: tmp.titleContainer, children: null };
  obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  const intl = availableGuilds(1114).intl;
  obj.children = intl.string(availableGuilds(1114).t.Fo0g9x);
  obj.children = closure_6(availableGuilds(4556).Text, obj);
  obj.header = closure_6(memo, obj);
  obj.children = closure_6(availableGuilds(8874).BottomSheetFlashList, {
    ItemSeparatorComponent() {
      return timestampProducer(Form.FormDivider, { iconPush: true, style: divider.divider });
    },
    data: memo,
    contentContainerStyle: { padding: 16 },
    keyExtractor(id) {
      let str = "none-guild-type";
      if (null != id) {
        str = id.id;
      }
      return str;
    },
    renderItem(arg0) {
      ({ item, index } = arg0);
      const obj = { start: 0 === index, end: index === memo.length - 1, item, selected: null, onSelectGuild: null };
      let tmp3 = importDefault;
      if (importDefault == null) {
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
      return timestampProducer(closure_9, obj);
    }
  });
  return closure_6(availableGuilds(7150).BottomSheet, obj);
};