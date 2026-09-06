// discord_app/modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import SearchField from "../../../../../design/components/TextField/native/SearchField.native.tsx";
import BottomSheetTitleHeader from "../../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import InstantInviteUtilsDefault from "../../../../../utils/InstantInviteUtils.tsx";
import _modDef13101 from "../../../../../../_runtime/metro/13101__.js";
import _modDef13102 from "../../../../../../_runtime/metro/13102__.js";
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
  obj.darkSource = _modDef13101;
  obj.lightSource = _modDef13102;
  return timestampProducer(native.ThemedEmptyState, obj);
}
function GuildList(recipientId) {
  recipientId = recipientId.recipientId;
  const source = recipientId.source;
  _slicedToArray = undefined;
  dependencyMap = closure_8();
  let obj = recipientId(13098);
  [arr, arr2] = _slicedToArray(obj.useServerInviteRows(recipientId, recipientId.query), 2);
  if (0 === arr.length) {
    if (0 === arr2.length) {
      let items = [];
    }
    let tmp5 = 0 === arr.length;
    if (!tmp5) {
      tmp5 = 0 === arr2.length;
    }
    _slicedToArray = tmp5;
    obj = {
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
    obj = { paddingTop: num, paddingBottom: source(6981)().insets.bottom + source(576).space.PX_16 };
    obj.contentContainerStyle = obj;
    obj.sections = items;
    obj.renderSectionHeader = function renderSectionHeader(section) {
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
    obj.keyExtractor = function keyExtractor(guild) {
      return guild.guild.id;
    };
    obj.ListEmptyComponent = EmptyGuildList;
    return closure_6(tmp(11151).UserProfileStackedActionSheetSectionList, obj);
  }
  const obj1 = { title: null, data: null };
  const intl = tmp(1114).intl;
  obj1.title = intl.string(recipientId(1114).t["u+Ithu"]);
  obj1.data = arr;
  items = [obj1];
  const obj2 = { title: null, data: null };
  const intl2 = tmp(1114).intl;
  obj2.title = intl2.string(recipientId(1114).t["c5T+X/"]);
  obj2.data = arr2;
  items[1] = obj2;
  const tmp3 = _slicedToArray(obj.useServerInviteRows(recipientId, recipientId.query), 2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { content: null, searchbarWrapper: null, sectionTitle: null, emptyStateContainer: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
createStyles.searchbarWrapper = { rowGap: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { rowGap: 8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.sectionTitle = {
  paddingBottom: 6,
  paddingTop: 24,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
createStyles.emptyStateContainer = { margin: 24 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteActionSheet.tsx",
);

export default function GuildInviteActionSheet(arg0) {
  ({ recipientId, source } = arg0);
  const tmp = closure_8();
  const tmp2 = _slicedToArray(noop.useState(""), 2);
  closure_0 = tmp2[1];
  let obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.HvoZQD);
  obj = {
    scrollable: true,
    startExpanded: true,
    header: timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj),
    contentStyles: tmp.content,
    children: null,
  };
  obj = { style: tmp.searchbarWrapper, children: null };
  const obj1 = {
    onChange(arg0) {
      closure_0(arg0);
    },
    placeholder: null,
  };
  const intl2 = util.intl;
  obj1.placeholder = intl2.string(util.t.uohsSv);
  const items = [timestampProducer(SearchField.SearchField, obj1)];
  const obj2 = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl3 = util.intl;
  const tmp3 = timestampProducer(BottomSheetTitleHeader.BottomSheetTitleHeader, obj);
  obj2.children = intl3.format(util.t["4UyUHh"], { xDays: InstantInviteUtilsDefault.INVITE_OPTIONS_7_DAYS.label });
  items[1] = timestampProducer(Text_Text.Text, obj2);
  obj.children = items;
  const items1 = [React5(View, obj), timestampProducer(GuildList, { query: tmp2[0], recipientId, source })];
  obj.children = items1;
  return React5(Sheet_BottomSheet.BottomSheet, obj);
}
