import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "SearchField";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
function EmptyGuildList() {
  const obj = { containerStyle: createCacheKey().emptyStateContainer, title: null, body: null, darkSource: null, lightSource: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["2bfiLk"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.V6nAfF);
  obj[3] = importDefault(12319);
  obj[4] = importDefault(12320);
  return callback2(require(1297) /* Button */.ThemedEmptyState, obj);
}
function GuildList(recipientId) {
  let arr;
  let arr2;
  recipientId = recipientId.recipientId;
  const source = recipientId.source;
  let dependencyMap;
  let callback;
  dependencyMap = createCacheKey();
  let obj = recipientId(12316);
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
      let end;
      let item;
      let start;
      ({ item, start, end } = arg0);
      return outer1_6(source(sectionTitle[14]), { row: item, recipientId, source, start, end });
    };
    let num = 0;
    if (tmp5) {
      num = 24;
    }
    obj = { paddingTop: null, paddingBottom: null };
    obj[0] = num;
    obj[1] = source(5281)().insets.bottom + source(712).space.PX_16;
    obj[1] = obj;
    obj[2] = items;
    obj[3] = function renderSectionHeader(section) {
      section = section.section;
      let tmp = null;
      if (!c3) {
        let tmp2 = null;
        if (section.data.length > 0) {
          const obj = { style: null, variant: "text-sm/semibold", color: "text-default", children: null };
          obj[0] = sectionTitle.sectionTitle;
          obj[3] = section.title;
          tmp2 = outer1_6(recipientId(sectionTitle[11]).Text, obj);
        }
        tmp = tmp2;
      }
      return tmp;
    };
    obj[5] = function keyExtractor(guild) {
      return guild.guild.id;
    };
    obj[6] = EmptyGuildList;
    return closure_6(tmp(11814).UserProfileStackedActionSheetSectionList, obj);
  }
  const obj1 = { title: null, data: null };
  const intl = tmp(1236).intl;
  obj1[0] = intl.string(recipientId(1236).t["u+Ithu"]);
  obj1[1] = arr;
  items = [obj1, ];
  const obj2 = { title: null, data: null };
  const intl2 = tmp(1236).intl;
  obj2[0] = intl2.string(recipientId(1236).t["c5T+X/"]);
  obj2[1] = arr2;
  items[1] = obj2;
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { content: null, searchbarWrapper: null, sectionTitle: null, emptyStateContainer: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { rowGap: 8, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { rowGap: 8, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[2] = { paddingBottom: 6, paddingTop: 24, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[3] = { margin: 24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { paddingBottom: 6, paddingTop: 24, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx");

export default function GuildInviteActionSheet(arg0) {
  let recipientId;
  let source;
  let _require;
  ({ recipientId, source } = arg0);
  const tmp = createCacheKey();
  const tmp2 = callback(React.useState(""), 2);
  _require = tmp2[1];
  let obj = { title: null };
  const intl = _require(1236).intl;
  obj[0] = intl.string(_require(1236).t.HvoZQD);
  obj = { scrollable: true, startExpanded: true, header: callback2(_require(5308).BottomSheetTitleHeader, obj), contentStyles: tmp.content, children: null };
  obj = { style: tmp.searchbarWrapper, children: null };
  const obj1 = {
    onChange(arg0) {
      callback(arg0);
    },
    placeholder: null
  };
  const intl2 = _require(1236).intl;
  obj1[1] = intl2.string(_require(1236).t.uohsSv);
  const items = [callback2(_require(5891).SearchField, obj1), ];
  const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl3 = _require(1236).intl;
  const obj3 = { xDays: null };
  obj3[0] = importDefault(8659).INVITE_OPTIONS_7_DAYS.label;
  obj2[2] = intl3.format(_require(1236).t["4UyUHh"], obj3);
  items[1] = callback2(_require(4251).Text, obj2);
  obj[1] = items;
  const items1 = [callback3(View, obj), callback2(GuildList, { query: tmp2[0], recipientId, source })];
  obj[4] = items1;
  return callback3(_require(5309).BottomSheet, obj);
};