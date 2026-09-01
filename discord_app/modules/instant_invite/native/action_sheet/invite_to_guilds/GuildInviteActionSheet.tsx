// discord_app/modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import Button from "../../../../../design/void/native.tsx";
import isGuildMemberDefault from "../../../../../utils/InstantInviteUtils.tsx";
import registerAssetDefault from "../../../../../../_runtime/12593_registerAsset.js";
import registerAssetDefault2 from "../../../../../../_runtime/12594_registerAsset.js";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
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
  dependencyMap = undefined;
  let callback;
  dependencyMap = callback4();
  let obj = recipientId(12590);
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
    obj[1] = source(5594)().insets.bottom + source(712).space.PX_16;
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
    return closure_6(tmp(9218).UserProfileStackedActionSheetSectionList, obj);
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
}
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { content: null, searchbarWrapper: null, sectionTitle: null, emptyStateContainer: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { rowGap: 8, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { rowGap: 8, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[2] = { paddingBottom: 6, paddingTop: 24, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[3] = { margin: 24 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj2 = { paddingBottom: 6, paddingTop: 24, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
const result = require("set").fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx");

export default function GuildInviteActionSheet(arg0) {
  let _require;
  ({ recipientId, source } = arg0);
  const tmp = callback4();
  const tmp2 = callback(React.useState(""), 2);
  _require = tmp2[1];
  let obj = { title: null };
  const intl = require("../../../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../../../intl/index.native.tsx").t.HvoZQD);
  obj = { scrollable: true, startExpanded: true, header: callback2(require("../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx").BottomSheetTitleHeader, obj), contentStyles: tmp.content, children: null };
  obj = { style: tmp.searchbarWrapper, children: null };
  obj1 = {
    onChange(arg0) {
      callback(arg0);
    },
    placeholder: null
  };
  const intl2 = require("../../../../../intl/index.native.tsx").intl;
  obj1[1] = intl2.string(require("../../../../../intl/index.native.tsx").t.uohsSv);
  const items = [callback2(require("../../../../../design/components/TextField/native/SearchField.native.tsx").SearchField, obj1), ];
  const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl3 = require("../../../../../intl/index.native.tsx").intl;
  const tmp3 = callback2(require("../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx").BottomSheetTitleHeader, obj);
  obj2[2] = intl3.format(require("../../../../../intl/index.native.tsx").t["4UyUHh"], { xDays: isGuildMemberDefault.INVITE_OPTIONS_7_DAYS.label });
  items[1] = callback2(require("../../../../../design/components/Text/native/Text.tsx").Text, obj2);
  obj[1] = items;
  const items1 = [callback3(View, obj), callback2(GuildList, { query: tmp2[0], recipientId, source })];
  obj[4] = items1;
  return callback3(require("../../../../../design/components/Sheet/native/BottomSheet.native.tsx").BottomSheet, obj);
};