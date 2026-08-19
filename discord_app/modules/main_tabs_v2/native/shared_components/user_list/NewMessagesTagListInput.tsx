// discord_app/modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import mergeGuildAvatar from "../../../../../stores/UserStore.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import obj132 from "../../../../../utils/PlatformUtils.tsx";

const require = fn;
let c3 = importAllResult;
let obj = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj[0] = obj;
const createCacheKey = { marginLeft: ThemesDefault.space.PX_12, marginBottom: null };
let num = 0;
if (obj132.isAndroid()) {
  num = 2;
}
createCacheKey[1] = num;
obj[1] = createCacheKey;
obj[2] = { marginHorizontal: ThemesDefault.space.PX_12 };
obj[3] = { borderRadius: ThemesDefault.radii.md };
let closure_7 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx");

export default importAllResult.memo(function NewMessagesTagListInput(forceSearchResults) {
  ({ onSelectUser: require, selectedUserIds } = forceSearchResults);
  let memo;
  ({ autoFocus, onChangeText, onFocus, hasQuery, onForceSearchResults, tagListInputRef } = forceSearchResults.forceSearchResults);
  const tmp = callback();
  require(memo[7]);
  let items = [selectedUserIds];
  memo = importAllResult.useMemo(() => {
    let items = selectedUserIds;
    if (selectedUserIds == null) {
      items = [];
    }
    const mapped = items.map(closure_1_5.getUser);
    const found = mapped.filter(require(memo[8]).isNotNullish);
    return found.map(selectedUserIds(memo[9]));
  }, items);
  let obj = { style: tmp.searchBarContainer, children: null };
  let searchBar;
  if (!obj.useMobileVisualRefreshConfig({ location: "NewMessagesTagListInput" }).enabled) {
    searchBar = tmp.searchBar;
  }
  obj = { style: searchBar, autoFocus, focusOnAdd: true, footer: null, icon: null, onChangeText: null, onFocus: null, onRemove: null, placeholder: null, tags: null, ref: null };
  let tmp8 = null;
  if (!hasQuery) {
    tmp8 = null;
    if (memo.length > 0) {
      let intl = require(tmp3[12]).intl;
      const string = intl.string;
      const t = require(tmp3[12]).t;
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
        let CirclePlusIcon = require(tmp3[13]).ChevronLargeRightIcon;
      } else {
        CirclePlusIcon = require(tmp3[14]).CirclePlusIcon;
      }
      obj1[4] = <CirclePlusIcon size="xs" />;
      jsx(require(tmp3[11]).PressableOpacity, { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null });
    }
  }
  obj[3] = tmp8;
  const obj2 = { style: tmp.header, variant: "text-sm/medium", color: "text-muted", accessible: false, children: null };
  const intl2 = require(tmp3[12]).intl;
  obj2[4] = intl2.string(require(memo[12]).t.kHyiXs);
  obj[4] = jsx(require(memo[15]).Text, { style: tmp.header, variant: "text-sm/medium", color: "text-muted", accessible: false, children: null });
  obj[5] = onChangeText;
  obj[6] = onFocus;
  obj[7] = function onRemove(arg0) {
    const user = closure_1_5.getUser(tmp.id);
    if (null != user) {
      callback(user);
      const AccessibilityAnnouncer = require(memo[16]).AccessibilityAnnouncer;
      const intl = require(memo[12]).intl;
      const obj = { text: null };
      obj[0] = tmp.text;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(require(memo[12]).t.srlxB8, obj));
    }
  };
  const intl3 = require(tmp3[12]).intl;
  obj[8] = intl3.string(require(memo[12]).t.CaEER6);
  obj[9] = memo;
  obj[10] = tagListInputRef;
  obj[1] = jsx(selectedUserIds(memo[10]), { style: searchBar, autoFocus, focusOnAdd: true, footer: null, icon: null, onChangeText: null, onFocus: null, onRemove: null, placeholder: null, tags: null, ref: null });
  return <View style={searchBar} autoFocus={autoFocus} focusOnAdd footer={null} icon={null} onChangeText={null} onFocus={null} onRemove={null} placeholder={null} tags={null} ref={null} />;
});