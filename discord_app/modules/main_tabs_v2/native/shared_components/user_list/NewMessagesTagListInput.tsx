// discord_app/modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import set from "set" /* 500 */;

const require = arg1;
let c3 = importAllResult;
let obj = { searchBarContainer: null, header: null, showSearchButton: null, searchBar: null };
obj = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj[0] = obj;
createCacheKey = { marginLeft: ThemesDefault.space.PX_12, marginBottom: null };
let num = 0;
if (set.isAndroid()) {
  num = 2;
}
createCacheKey[1] = num;
obj[1] = createCacheKey;
obj[2] = { marginHorizontal: ThemesDefault.space.PX_12 };
let obj2 = { marginHorizontal: ThemesDefault.space.PX_12 };
obj[3] = { borderRadius: ThemesDefault.radii.md };
let closure_7 = createCacheKey.createStyles(obj);
const obj3 = { borderRadius: ThemesDefault.radii.md };
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx");

export default importAllResult.memo(function NewMessagesTagListInput(forceSearchResults) {
  ({ onSelectUser: require, selectedUserIds } = forceSearchResults);
  let memo;
  ({ autoFocus, onChangeText, onFocus, hasQuery, onForceSearchResults, tagListInputRef } = forceSearchResults);
  const tmp = callback();
  let obj = require(memo[7]);
  let items = [selectedUserIds];
  memo = importAllResult.useMemo(() => {
    let items = selectedUserIds;
    if (selectedUserIds == null) {
      items = [];
    }
    const mapped = items.map(closure_1_5.getUser);
    const found = mapped.filter(closure_1_0(memo[8]).isNotNullish);
    return found.map(selectedUserIds(memo[9]));
  }, items);
  obj = { style: tmp.searchBarContainer, children: null };
  let searchBar;
  if (!obj.useMobileVisualRefreshConfig({ location: "NewMessagesTagListInput" }).enabled) {
    searchBar = tmp.searchBar;
  }
  obj = { style: searchBar, autoFocus, focusOnAdd: true, footer: null, icon: null, onChangeText: null, onFocus: null, onRemove: null, placeholder: null, tags: null, ref: null };
  let tmp8 = null;
  if (!hasQuery) {
    tmp8 = null;
    if (memo.length > 0) {
      let intl = tmp2(tmp3[12]).intl;
      const string = intl.string;
      const t = tmp2(tmp3[12]).t;
      if (forceSearchResults) {
        let stringResult = string(t["4wv+DE"]);
      } else {
        stringResult = string(t.fTcQm2);
      }
      obj1 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      obj1[1] = stringResult;
      obj1[2] = onForceSearchResults;
      obj1[3] = tmp.showSearchButton;
      if (forceSearchResults) {
        let CirclePlusIcon = tmp2(tmp3[13]).ChevronLargeRightIcon;
      } else {
        CirclePlusIcon = tmp2(tmp3[14]).CirclePlusIcon;
      }
      obj1[4] = tmp4(CirclePlusIcon, { size: "xs" });
      tmp4(tmp2(tmp3[11]).PressableOpacity, obj1);
    }
  }
  obj[3] = tmp8;
  const obj2 = { style: tmp.header, variant: "text-sm/medium", color: "text-muted", accessible: false, children: null };
  const intl2 = tmp2(tmp3[12]).intl;
  obj2[4] = intl2.string(require(memo[12]).t.kHyiXs);
  obj[4] = jsx(require(memo[15]).Text, { style: tmp.header, variant: "text-sm/medium", color: "text-muted", accessible: false, children: null });
  obj[5] = onChangeText;
  obj[6] = onFocus;
  obj[7] = function onRemove(arg0) {
    const user = closure_1_5.getUser(tmp.id);
    if (null != user) {
      callback(user);
      const AccessibilityAnnouncer = closure_1_0(memo[16]).AccessibilityAnnouncer;
      const intl = closure_1_0(memo[12]).intl;
      const obj = { text: null };
      obj[0] = tmp.text;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_1_0(memo[12]).t.srlxB8, obj));
    }
  };
  const intl3 = tmp2(tmp3[12]).intl;
  obj[8] = intl3.string(require(memo[12]).t.CaEER6);
  obj[9] = memo;
  obj[10] = tagListInputRef;
  obj[1] = jsx(selectedUserIds(memo[10]), { style: searchBar, autoFocus, focusOnAdd: true, footer: null, icon: null, onChangeText: null, onFocus: null, onRemove: null, placeholder: null, tags: null, ref: null });
  return <View style={searchBar} autoFocus={autoFocus} focusOnAdd footer={null} icon={null} onChangeText={null} onFocus={null} onRemove={null} placeholder={null} tags={null} ref={null} />;
});