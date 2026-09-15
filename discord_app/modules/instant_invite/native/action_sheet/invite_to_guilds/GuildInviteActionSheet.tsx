// discord_app/modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import SearchField from "../../../../../design/components/TextField/native/SearchField.native.tsx";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import InstantInviteUtilsDefault from "../../../../../utils/InstantInviteUtils.tsx";
import _modDef13244 from "../../../../../../_runtime/metro/13244__.js";
import _modDef13245 from "../../../../../../_runtime/metro/13245__.js";
import GuildInviteRowDefault from "GuildInviteRow.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function EmptyGuildList() {
  const obj = {
    containerStyle: closure_8().emptyStateContainer,
    title: null,
    body: null,
    darkSource: null,
    lightSource: null,
  };
  const intl = util.intl;
  obj.title = intl.string(util.t["2bfiLk"]);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.V6nAfF);
  obj.darkSource = _modDef13244;
  obj.lightSource = _modDef13245;
  return timestampProducer(native.ThemedEmptyState, obj);
}
function GuildList(recipientId) {
  recipientId = recipientId.recipientId;
  const source = recipientId.source;
  _slicedToArray = undefined;
  dependencyMap = closure_8();
  let obj = recipientId(13241);
  [arr, arr2] = recipientId(13241).useServerInviteRows(recipientId, recipientId.query);
  if (0 === arr.length) {
    if (0 === arr2.length) {
      let items = [];
    }
    let tmp5 = 0 === arr.length;
    if (!tmp5) {
      tmp5 = 0 === arr2.length;
    }
    _slicedToArray = tmp5;
    const obj2 = {
      renderItem(arg0) {
        ({ item, start, end } = arg0);
        return timestampProducer(GuildInviteRowDefault, { row: item, recipientId, source, start, end });
      },
      contentContainerStyle: null,
      sections: null,
      renderSectionHeader: null,
      stickySectionHeadersEnabled: true,
      keyExtractor: null,
      ListEmptyComponent: null,
    };
    let num = 0;
    if (tmp5) {
      num = 24;
    }
    const obj3 = { paddingTop: num, paddingBottom: source(7088)().insets.bottom + source(576).space.PX_16 };
    obj2.contentContainerStyle = obj3;
    obj2.sections = items;
    obj2.renderSectionHeader = function renderSectionHeader(section) {
      section = section.section;
      let tmp = null;
      if (!closure_3) {
        let tmp2 = null;
        if (section.data.length > 0) {
          const obj = {
            style: sectionTitle.sectionTitle,
            variant: "text-sm/semibold",
            color: "text-default",
            children: section.title,
          };
          tmp2 = timestampProducer(Text_Text.Text, obj);
        }
        tmp = tmp2;
      }
      return tmp;
    };
    obj2.keyExtractor = function keyExtractor(guild) {
      return guild.guild.id;
    };
    obj2.ListEmptyComponent = EmptyGuildList;
    return closure_6(tmp(11290).UserProfileStackedActionSheetSectionList, obj2);
  }
  const obj4 = { title: null, data: null };
  const intl = tmp(1115).intl;
  obj4.title = intl.string(recipientId(1115).t["u+Ithu"]);
  obj4.data = arr;
  items = [obj4];
  const obj5 = { title: null, data: null };
  const intl2 = tmp(1115).intl;
  obj5.title = intl2.string(recipientId(1115).t["c5T+X/"]);
  obj5.data = arr2;
  items[1] = obj5;
  const tmp3 = _slicedToArray(recipientId(13241).useServerInviteRows(recipientId, recipientId.query), 2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  content: { paddingHorizontal: nativeDefault.space.PX_16 },
  searchbarWrapper: null,
  sectionTitle: null,
  emptyStateContainer: null,
};
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.searchbarWrapper = { rowGap: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj4 = { rowGap: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.sectionTitle = {
  paddingBottom: 6,
  paddingTop: 24,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj2.emptyStateContainer = { margin: 24 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx",
);

export default function GuildInviteActionSheet(arg0) {
  ({ recipientId, source } = arg0);
  const tmp = closure_8();
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  closure_0 = tmp2[1];
  const obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.HvoZQD);
  const obj2 = {
    scrollable: true,
    startExpanded: true,
    header: timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj),
    contentStyles: tmp.content,
    children: null,
  };
  const obj3 = { style: tmp.searchbarWrapper, children: null };
  const obj4 = {
    onChange(arg0) {
      closure_0(arg0);
    },
    placeholder: null,
  };
  const intl2 = util.intl;
  obj4.placeholder = intl2.string(util.t.uohsSv);
  const items = [timestampProducer(SearchField.SearchField, obj4)];
  const obj5 = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl3 = util.intl;
  const tmp3 = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj5.children = intl3.format(util.t["4UyUHh"], { xDays: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.label });
  items[1] = timestampProducer(Text_Text.Text, obj5);
  obj3.children = items;
  const items1 = [React5(View, obj3), timestampProducer(GuildList, { query: tmp2[0], recipientId, source })];
  obj2.children = items1;
  return React5(Sheet_BottomSheet.BottomSheet, obj2);
}
