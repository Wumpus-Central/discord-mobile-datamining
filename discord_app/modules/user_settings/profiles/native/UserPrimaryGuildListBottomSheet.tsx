// discord_app/modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildIconDefault from "../../../guild/native/GuildIcon.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const GuildTagBadgeSize = fn(8080).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4640);
let obj = {
  titleContainer: { paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "center" },
  guildIcon: { marginLeft: 4 },
  tag: { padding: 2 },
  tagStyles: null,
  divider: null,
  itemTrailingStyle: null,
};
const PlatformUtils = fn(1364);
let num = 18;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
obj.tagStyles = { lineHeight: num };
obj.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.itemTrailingStyle = { flexDirection: "row", alignItems: "center", gap: 8, height: 20 };
let closure_8 = createStyles.createStyles(obj);
let closure_9 = noop.memo((item) => {
  item = item.item;
  ({ selected, onSelectGuild: importDefault } = item);
  ({ start, end } = item);
  const tmp = closure_8();
  if (item != null) {
    const profile = item.profile;
  }
  let guildTagBadgeUrl = null != item;
  if (guildTagBadgeUrl) {
    let badge;
    if (profile != null) {
      badge = profile.badge;
    }
    guildTagBadgeUrl = item(8313).getGuildTagBadgeUrl(item.id, badge, GuildTagBadgeSize.SIZE_24);
    let obj = item(8313);
  }
  const radioA11yNative = item(4358).useRadioA11yNative({ selected });
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
    trailing: null,
  };
  if (null != item) {
    let name = item.name;
  } else {
    const intl = tmp7(1115).intl;
    name = intl.string(tmp7(1115).t.PoWNfe);
  }
  obj3.label = name;
  let tmp10Result = null;
  if (null != item) {
    const obj4 = { style: tmp.guildIcon, guild: item, size: tmp7(5672).GuildIconSizes.SMALL_32 };
    tmp10Result = closure_6(GuildIconDefault, obj4);
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
    const obj10 = {
      containerStyles: null,
      textStyle: null,
      guildTag: null,
      guildBadge: null,
      badgeSize: null,
      textVariant: "heading-md/semibold",
      textColor: "text-strong",
    };
    ({ tag: obj6.containerStyles, tagStyles: obj6.textStyle } = tmp);
    const tag = profile.tag;
    obj10.guildTag = tag;
    obj10.guildBadge = guildTagBadgeUrl;
    obj10.badgeSize = GuildTagBadgeSize.SIZE_16;
    tmp10Result2 = closure_6(tmp7(9338).BaseGuildTagChiplet, obj10);
  }
  const items = [tmp10Result2, closure_6(item(5777).FormRadio, { selected })];
  obj5.children = items;
  obj3.trailing = closure_7(View, obj5);
  return closure_6(item(5693).TableRow, obj3);
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
    HermesBuiltin.arraySpread(
      _modDef12.sortBy(availableGuilds, (name) => name.name.toLowerCase()),
      1,
    );
    return items;
  }, items);
  let obj = { scrollable: true, startExpanded: true, header: null, children: null };
  const obj2 = { style: tmp.titleContainer, children: null };
  const obj3 = {
    variant: "heading-lg/bold",
    color: "mobile-text-heading-primary",
    accessibilityRole: "header",
    children: null,
  };
  const intl = availableGuilds(1115).intl;
  obj3.children = intl.string(availableGuilds(1115).t.Fo0g9x);
  obj2.children = closure_6(availableGuilds(4636).Text, obj3);
  obj.header = closure_6(memo, obj2);
  obj.children = closure_6(availableGuilds(8873).BottomSheetFlashList, {
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
    },
  });
  return closure_6(availableGuilds(7264).BottomSheet, obj);
}
