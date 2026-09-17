// discord_app/modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../../utils/GlobalUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import makeUserListPillDataDefault from "makeUserListPillData.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj = {
  searchBarContainer: {
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_8,
    backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  },
  header: null,
  showSearchButton: null,
};
let obj4 = { marginLeft: nativeDefault.space.PX_12, marginBottom: null };
const PlatformUtils = fn(1364);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 2;
}
obj4.marginBottom = num;
obj.header = obj4;
let obj3 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj.showSearchButton = { marginHorizontal: nativeDefault.space.PX_12 };
let closure_7 = createStyles.createStyles(obj);
const obj5 = { marginHorizontal: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx",
);

export default noop.memo(function NewMessagesTagListInput(forceSearchResults) {
  ({ onSelectUser: require, selectedUserIds } = forceSearchResults);
  ({ autoFocus, onChangeText, onFocus, hasQuery, onForceSearchResults, tagListInputRef } =
    forceSearchResults.forceSearchResults);
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
  const obj2 = {
    autoFocus,
    focusOnAdd: true,
    footer: null,
    icon: null,
    onChangeText: null,
    onFocus: null,
    onRemove: null,
    placeholder: null,
    tags: null,
    ref: null,
  };
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
      const obj3 = {
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        onPress: onForceSearchResults,
        style: tmp.showSearchButton,
        children: null,
      };
      if (forceSearchResults) {
        let CirclePlusIcon = require("ChevronLargeRightIcon").ChevronLargeRightIcon;
      } else {
        CirclePlusIcon = require("CirclePlusIcon").CirclePlusIcon;
      }
      obj3.children = <CirclePlusIcon size="xs" />;
      jsx(require("Pressables").PressableOpacity, {
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        onPress: onForceSearchResults,
        style: tmp.showSearchButton,
        children: null,
      });
    }
  }
  obj2.footer = tmp6;
  const obj4 = { style: tmp.header, variant: "text-sm/medium", color: "text-muted", accessible: false, children: null };
  const intl2 = require("util").intl;
  obj4.children = intl2.string(require("util").t.kHyiXs);
  obj2.icon = jsx(require("Text/Text").Text, {
    style: tmp.header,
    variant: "text-sm/medium",
    color: "text-muted",
    accessible: false,
    children: null,
  });
  obj2.onChangeText = onChangeText;
  obj2.onFocus = onFocus;
  obj2.onRemove = function onRemove(arg0) {
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
  obj2.placeholder = intl3.string(require("util").t.CaEER6);
  obj2.tags = memo;
  obj2.ref = tagListInputRef;
  obj.children = jsx(selectedUserIds(memo[9]), {
    autoFocus,
    focusOnAdd: true,
    footer: null,
    icon: null,
    onChangeText: null,
    onFocus: null,
    onRemove: null,
    placeholder: null,
    tags: null,
    ref: null,
  });
  return <View style={tmp.searchBarContainer}>{null}</View>;
});
