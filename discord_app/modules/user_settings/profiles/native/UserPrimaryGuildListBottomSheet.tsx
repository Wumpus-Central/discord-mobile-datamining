// discord_app/modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx
import importAllResult from "set";
import { View } from "noop";
import { GuildTagBadgeSize } from "items";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "set";
import set from "items";

let closure_6;
let error;
const require = arg1;
let c3 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { titleContainer: { paddingHorizontal: 16, flexDirection: "row", alignItems: "center", justifyContent: "center" }, guildIcon: { marginLeft: 4 }, tag: { padding: 2 }, tagStyles: null, divider: null, itemTrailingStyle: null };
let num = 18;
if (set.isAndroid()) {
  num = 16;
}
obj[3] = { lineHeight: num };
obj = { backgroundColor: require("Themes").colors.BORDER_SUBTLE };
obj[4] = obj;
obj[5] = { flexDirection: "row", alignItems: "center", gap: 8, height: 20 };
let closure_8 = createCacheKey.createStyles(obj);
let closure_9 = importAllResult.memo((item) => {
  let end;
  let start;
  item = item.item;
  const selected = item.selected;
  const onSelectGuild = item.onSelectGuild;
  ({ start, end } = item);
  const tmp = callback2();
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
      selected(onSelectGuild[9]).hideActionSheet();
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
  obj[3] = name;
  let tmp7Result = null;
  if (null != item) {
    obj = { style: null, guild: null, size: null };
    obj[0] = tmp.guildIcon;
    obj[1] = item;
    obj[2] = tmp8(tmp9[11]).GuildIconSizes.SMALL_32;
    tmp7Result = tmp7(selected(tmp9[11]), obj);
    const tmp12 = selected(tmp9[11]);
  }
  obj[4] = tmp7Result;
  const obj1 = { style: tmp.itemTrailingStyle, children: null };
  tmp7Result = null != item;
  if (tmp7Result) {
    tmp7Result = null != profile;
  }
  if (tmp7Result) {
    const obj2 = { containerStyles: null, textStyle: null, guildTag: null, guildBadge: null, badgeSize: null, textVariant: "heading-md/semibold", textColor: "text-strong" };
    ({ tag: obj5[0], tagStyles: obj5[1] } = tmp);
    const tag = profile.tag;
    obj2[2] = tag;
    obj2[3] = guildTagBadgeUrl;
    obj2[4] = GuildTagBadgeSize.SIZE_16;
    tmp7Result = tmp7(tmp8(tmp9[12]).BaseGuildTagChiplet, obj2);
  }
  const items = [tmp7Result, closure_6(item(onSelectGuild[13]).FormRadio, { selected })];
  obj1[1] = items;
  obj[5] = closure_7(View, obj1);
  return closure_6(item(onSelectGuild[8]).TableRow, obj);
});
const result = set.fileFinishedImporting("modules/user_settings/profiles/native/UserPrimaryGuildListBottomSheet.tsx");

export default function UserPrimaryGuildListBottomSheet(availableGuilds) {
  let dependencyMap;
  let importDefault;
  availableGuilds = availableGuilds.availableGuilds;
  ({ userPrimaryGuild: importDefault, onSelectGuild: dependencyMap } = availableGuilds);
  let importAllResult;
  let memo;
  const tmp = callback2();
  importAllResult = tmp;
  let items = [availableGuilds];
  memo = importAllResult.useMemo(() => {
    const items = [null];
    HermesBuiltin.arraySpread(outer1_1(outer1_2[14]).sortBy(availableGuilds, (name) => name.name.toLowerCase()), 1);
    return items;
  }, items);
  let obj = { scrollable: true, startExpanded: true, header: null, children: null };
  obj = { style: tmp.titleContainer, children: null };
  obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: null };
  const intl = availableGuilds(1236).intl;
  obj[3] = intl.string(availableGuilds(1236).t.Fo0g9x);
  obj[1] = callback(availableGuilds(4281).Text, obj);
  obj[2] = callback(memo, obj);
  obj[3] = callback(availableGuilds(7666).BottomSheetFlashList, {
    ItemSeparatorComponent() {
      return outer1_6(availableGuilds(outer1_2[18]).FormDivider, { iconPush: true, style: _undefined.divider });
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
      let index;
      let item;
      ({ item, index } = arg0);
      const obj = { start: 0 === index, end: index === memo.length - 1, item, selected: null, onSelectGuild: null };
      let id;
      if (id != null) {
        id = id.id;
      }
      let id1;
      if (item != null) {
        id1 = item.id;
      }
      obj[3] = id === id1;
      obj[4] = closure_2;
      return outer1_6(outer1_9, obj);
    }
  });
  return callback(availableGuilds(5377).BottomSheet, obj);
};