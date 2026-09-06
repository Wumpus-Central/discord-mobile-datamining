// === Module 12367: NewMessagesTagListInput ===

// Module 12367 (NewMessagesTagListInput)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4272 */;
import makeUserListPillDataDefault from "makeUserListPillData" /* 10863 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let obj = { searchBarContainer: null, header: null, showSearchButton: null };
obj = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.searchBarContainer = obj;
const createStyles = { marginLeft: nativeDefault.space.PX_12, marginBottom: null };
const PlatformUtils = fn(1115);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
createStyles.marginBottom = num;
obj.header = createStyles;
obj.showSearchButton = { marginHorizontal: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
const obj2 = { marginHorizontal: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx");

export default noop.memo(function NewMessagesTagListInput(forceSearchResults) {
  ({ onSelectUser: require, selectedUserIds } = forceSearchResults);
  ({ autoFocus, onChangeText, onFocus, hasQuery, onForceSearchResults, tagListInputRef } = forceSearchResults);
  const tmp = closure_7();
  let items = [selectedUserIds];
  const memo = noop.useMemo(() => {
    let items = selectedUserIds;
    if (selectedUserIds == null) {
      items = [];
    }
    const mapped = items.map(UserStore.getUser);
    const found = mapped.filter(GlobalUtils.isNotNullish);
    return found.map(makeUserListPillDataDefault);
  }, items);
  let obj = { style: tmp.searchBarContainer, children: null };
  obj = { autoFocus, focusOnAdd: true, footer: null, icon: null, onChangeText: null, onFocus: null, onRemove: null, placeholder: null, tags: null, ref: null };
  let tmp6 = null;
  if (!hasQuery) {
    tmp6 = null;
    if (memo.length > 0) {
      let intl = require("util").intl;
      const string = intl.string;
      const t = require("util").t;
      if (forceSearchResults) {
        let stringResult = string(t["4wv+DE"]);
      } else {
        stringResult = string(t.fTcQm2);
      }
      obj = { accessibilityRole: "button", accessibilityLabel: stringResult, onPress: onForceSearchResults, style: tmp.showSearchButton, children: null };
      if (forceSearchResults) {
        let CirclePlusIcon = tmp7(tmp4[12]).ChevronLargeRightIcon;
      } else {
        CirclePlusIcon = tmp7(tmp4[13]).CirclePlusIcon;
      }
      obj.children = tmp2(CirclePlusIcon, { size: "xs" });
      tmp2(require("Pressables").PressableOpacity, obj);
    }
  }
  obj.footer = tmp6;
  const obj1 = { style: tmp.header, variant: "text-sm/medium", color: "text-muted", accessible: false, children: null };
  const intl2 = require("util").intl;
  obj1.children = intl2.string(require("util").t.kHyiXs);
  obj.icon = jsx(require("Text/Text").Text, { style: tmp.header, variant: "text-sm/medium", color: "text-muted", accessible: false, children: null });
  obj.onChangeText = onChangeText;
  obj.onFocus = onFocus;
  obj.onRemove = function onRemove(arg0) {
    const user = UserStore.getUser(tmp.id);
    if (null != user) {
      closure_1_0(user);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { text: tmp.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.srlxB8, obj));
    }
  };
  const intl3 = require("util").intl;
  obj.placeholder = intl3.string(require("util").t.CaEER6);
  obj.tags = memo;
  obj.ref = tagListInputRef;
  obj.children = jsx(selectedUserIds(memo[9]), { autoFocus, focusOnAdd: true, footer: null, icon: null, onChangeText: null, onFocus: null, onRemove: null, placeholder: null, tags: null, ref: null });
  return <View autoFocus={autoFocus} focusOnAdd footer={null} icon={null} onChangeText={null} onFocus={null} onRemove={null} placeholder={null} tags={null} ref={null} />;
});