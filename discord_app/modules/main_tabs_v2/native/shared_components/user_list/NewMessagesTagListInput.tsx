// === Module 11936: ? ===

// Module 11936
import ThemesDefault from "Themes" /* 712 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import set from "set" /* 500 */;

const require = arg1;
let c3 = importAllResult;
let obj = { searchBarContainer: null, header: null, showSearchButton: null };
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
let closure_7 = createCacheKey.createStyles(obj);
const obj2 = { marginHorizontal: ThemesDefault.space.PX_12 };
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx");

export default importAllResult.memo(function NewMessagesTagListInput(forceSearchResults) {
  ({ onSelectUser: require, selectedUserIds } = forceSearchResults);
  let memo;
  ({ autoFocus, onChangeText, onFocus, hasQuery, onForceSearchResults, tagListInputRef } = forceSearchResults);
  const tmp = callback();
  let items = [selectedUserIds];
  memo = importAllResult.useMemo(() => {
    let items = selectedUserIds;
    if (selectedUserIds == null) {
      items = [];
    }
    const mapped = items.map(closure_1_5.getUser);
    const found = mapped.filter(closure_1_0(memo[7]).isNotNullish);
    return found.map(selectedUserIds(memo[8]));
  }, items);
  let obj = { style: tmp.searchBarContainer, children: null };
  obj = { autoFocus, focusOnAdd: true, footer: null, icon: null, onChangeText: null, onFocus: null, onRemove: null, placeholder: null, tags: null, ref: null };
  let tmp6 = null;
  if (!hasQuery) {
    tmp6 = null;
    if (memo.length > 0) {
      let intl = require(tmp4[11]).intl;
      const string = intl.string;
      const t = require(tmp4[11]).t;
      if (forceSearchResults) {
        let stringResult = string(t["4wv+DE"]);
      } else {
        stringResult = string(t.fTcQm2);
      }
      obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
      obj[1] = stringResult;
      obj[2] = onForceSearchResults;
      obj[3] = tmp.showSearchButton;
      if (forceSearchResults) {
        let CirclePlusIcon = tmp7(tmp4[12]).ChevronLargeRightIcon;
      } else {
        CirclePlusIcon = tmp7(tmp4[13]).CirclePlusIcon;
      }
      obj[4] = tmp2(CirclePlusIcon, { size: "xs" });
      tmp2(require(tmp4[10]).PressableOpacity, obj);
    }
  }
  obj[2] = tmp6;
  obj1 = { style: tmp.header, variant: "text-sm/medium", color: "text-muted", accessible: false, children: null };
  const intl2 = require(tmp4[11]).intl;
  obj1[4] = intl2.string(require(memo[11]).t.kHyiXs);
  obj[3] = jsx(require(memo[14]).Text, { style: tmp.header, variant: "text-sm/medium", color: "text-muted", accessible: false, children: null });
  obj[4] = onChangeText;
  obj[5] = onFocus;
  obj[6] = function onRemove(arg0) {
    const user = closure_1_5.getUser(tmp.id);
    if (null != user) {
      callback(user);
      const AccessibilityAnnouncer = closure_1_0(memo[15]).AccessibilityAnnouncer;
      const intl = closure_1_0(memo[11]).intl;
      const obj = { text: null };
      obj[0] = tmp.text;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_1_0(memo[11]).t.srlxB8, obj));
    }
  };
  const intl3 = require(tmp4[11]).intl;
  obj[7] = intl3.string(require(memo[11]).t.CaEER6);
  obj[8] = memo;
  obj[9] = tagListInputRef;
  obj[1] = jsx(selectedUserIds(memo[9]), { autoFocus, focusOnAdd: true, footer: null, icon: null, onChangeText: null, onFocus: null, onRemove: null, placeholder: null, tags: null, ref: null });
  return <View autoFocus={autoFocus} focusOnAdd footer={null} icon={null} onChangeText={null} onFocus={null} onRemove={null} placeholder={null} tags={null} ref={null} />;
});