// discord_app/modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import set from "set";
import { View } from "SearchField";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../../../_runtime/12405_registerAsset.js";
import { registerAsset } from "../../../../../../_runtime/12406_registerAsset.js";
import { Background } from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { RedesignBottomSheetTitleHeaderBase } from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { SearchField } from "../../../../../design/components/TextField/native/SearchField.native.tsx";
import { Button } from "../../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { isGuildMember } from "../../../../../utils/InstantInviteUtils.tsx";

let closure_6;
let error;
const require = arg1;
function EmptyGuildList() {
  const obj = { containerStyle: createCacheKey().emptyStateContainer, title: null, body: null, darkSource: null, lightSource: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl.string(getSystemLocale /* getSystemLocale */.t["2bfiLk"]);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl2.string(getSystemLocale /* getSystemLocale */.t.V6nAfF);
  obj[3] = registerAsset;
  obj[4] = registerAsset;
  return callback2(Button /* Button */.ThemedEmptyState, obj);
}
function GuildList(recipientId) {
  let arr;
  let arr2;
  recipientId = recipientId.recipientId;
  const source = recipientId.source;
  let dependencyMap;
  let callback;
  dependencyMap = createCacheKey();
  let obj = recipientId(12402);
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
    obj[1] = source(5310)().insets.bottom + source(712).space.PX_16;
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
    return closure_6(tmp(9386).UserProfileStackedActionSheetSectionList, obj);
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
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.HvoZQD);
  obj = { scrollable: true, startExpanded: true, header: callback2(_RedesignBottomSheetTitleHeaderBase.BottomSheetTitleHeader, obj), contentStyles: tmp.content, children: null };
  obj = { style: tmp.searchbarWrapper, children: null };
  const obj1 = {
    onChange(arg0) {
      callback(arg0);
    },
    placeholder: null
  };
  const intl2 = _getSystemLocale.intl;
  obj1[1] = intl2.string(_getSystemLocale.t.uohsSv);
  const items = [callback2(_SearchField.SearchField, obj1), ];
  const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl3 = _getSystemLocale.intl;
  const obj3 = { xDays: null };
  obj3[0] = isGuildMember.INVITE_OPTIONS_7_DAYS.label;
  obj2[2] = intl3.format(_getSystemLocale.t["4UyUHh"], obj3);
  items[1] = callback2(_Text.Text, obj2);
  obj[1] = items;
  const items1 = [callback3(View, obj), callback2(GuildList, { query: tmp2[0], recipientId, source })];
  obj[4] = items1;
  return callback3(_Background.BottomSheet, obj);
};