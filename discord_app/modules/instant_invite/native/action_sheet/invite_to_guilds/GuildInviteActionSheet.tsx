// === Module 12333: EmptyGuildList ===

// Module 12333 (EmptyGuildList)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import isGuildMemberDefault from "isGuildMember" /* 8920 */;
import registerAssetDefault from "registerAsset" /* 12334 */;
import registerAssetDefault2 from "registerAsset" /* 12335 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function EmptyGuildList() {
  const obj = { containerStyle: callback4().emptyStateContainer, title: null, body: null, darkSource: null, lightSource: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t["2bfiLk"]);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(getSystemLocale.t.V6nAfF);
  obj[3] = registerAssetDefault;
  obj[4] = registerAssetDefault2;
  return callback2(Button.ThemedEmptyState, obj);
}
function GuildList(recipientId) {
  recipientId = recipientId.recipientId;
  const source = recipientId.source;
  let callback;
  dependencyMap = callback4();
  let obj = recipientId(12331);
  [arr, arr2] = callback(obj.useServerInviteRows(recipientId, recipientId.query), 2);
  if (0 === arr.length) {
    if (0 === arr2.length) {
      let items = [];
    }
    let tmp5 = 0 === arr.length;
    if (!tmp5) {
      tmp5 = 0 === arr2.length;
    }
    callback = tmp5;
    obj = { renderItem: null, contentContainerStyle: null, sections: null, renderSectionHeader: null, stickySectionHeadersEnabled: true, keyExtractor: null, ListEmptyComponent: null };
    obj[0] = function renderItem(arg0) {
      ({ item, start, end } = arg0);
      return closure_1_6(source(sectionTitle[14]), { row: item, recipientId, source, start, end });
    };
    let num = 0;
    if (tmp5) {
      num = 24;
    }
    obj = { paddingTop: null, paddingBottom: null };
    obj[0] = num;
    obj[1] = source(5441)().insets.bottom + source(712).space.PX_16;
    obj[1] = obj;
    obj[2] = items;
    obj[3] = function renderSectionHeader(section) {
      section = section.section;
      let tmp = null;
      if (!closure_3) {
        let tmp2 = null;
        if (section.data.length > 0) {
          const obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
          obj[0] = sectionTitle.sectionTitle;
          obj[3] = section.title;
          tmp2 = closure_1_6(recipientId(sectionTitle[11]).Text, obj);
        }
        tmp = tmp2;
      }
      return tmp;
    };
    obj[5] = function keyExtractor(guild) {
      return guild.guild.id;
    };
    obj[6] = EmptyGuildList;
    return callback(tmp(9450).UserProfileStackedActionSheetSectionList, obj);
  }
  obj1 = { title: null, data: null };
  const intl = tmp(1236).intl;
  obj1[0] = intl.string(recipientId(1236).t["u+Ithu"]);
  obj1[1] = arr;
  items = [obj1, ];
  const obj2 = { title: null, data: null };
  const intl2 = tmp(1236).intl;
  obj2[0] = intl2.string(recipientId(1236).t["c5T+X/"]);
  obj2[1] = arr2;
  items[1] = obj2;
  const tmp3 = callback(obj.useServerInviteRows(recipientId, recipientId.query), 2);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { rowGap: 8, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[2] = { paddingBottom: 6, paddingTop: 24, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[3] = { margin: 24 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx");

export default function GuildInviteActionSheet(arg0) {
  ({ recipientId, source } = arg0);
  const tmp = callback4();
  const tmp2 = callback(React.useState(""), 2);
  const _require = tmp2[1];
  let obj = { title: null };
  const intl = _require(1236).intl;
  obj[0] = intl.string(_require(1236).t.HvoZQD);
  { scrollable: true, startExpanded: true, header: callback2(_require(6949).BottomSheetTitleHeader, obj), contentStyles: tmp.content, children: null };
  obj = { style: tmp.searchbarWrapper, children: null };
  obj1 = {
    onChange(arg0) {
      callback(arg0);
    },
    placeholder: null
  };
  const intl2 = _require(1236).intl;
  obj1[1] = intl2.string(_require(1236).t.uohsSv);
  const items = [callback2(_require(7337).SearchField, obj1), ];
  const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl3 = _require(1236).intl;
  const tmp3 = callback2(_require(6949).BottomSheetTitleHeader, obj);
  obj2[2] = intl3.format(_require(1236).t["4UyUHh"], { xDays: isGuildMemberDefault.INVITE_OPTIONS_7_DAYS.label });
  items[1] = callback2(_require(4734).Text, obj2);
  obj[1] = items;
  const items1 = [callback3(View, obj), callback2(GuildList, { query: tmp2[0], recipientId, source })];
  obj[4] = items1;
  return callback3(_require(6950).BottomSheet, obj);
};