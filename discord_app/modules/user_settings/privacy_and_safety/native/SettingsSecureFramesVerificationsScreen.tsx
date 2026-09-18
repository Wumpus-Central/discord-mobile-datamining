// discord_app/modules/user_settings/privacy_and_safety/native/SettingsSecureFramesVerificationsScreen.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import SecureFramesUtils from "../../../rtc/SecureFramesUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function VerificationListItem(userId) {
  userId = userId.userId;
  const verification = userId.verification;
  const items = [userId, verification.verifiedKey];
  ({ index, start, end } = userId);
  const items1 = [verification.timestamp];
  const callback = noop.useCallback(() => {
    const result = SecureFramesUtils.deletePersistentVerification(userId, verification.verifiedKey);
  }, items);
  const memo = noop.useMemo(
    () => SecureFramesUtils.getSecureFramesUserVerifiedTimestamp(verification.timestamp),
    items1,
  );
  const obj = { label: null, subLabel: null, start: null, end: null, trailing: null };
  const intl = userId(1115).intl;
  obj.label = intl.formatToPlainString(userId(1115).t.N4qBBO, { index });
  obj.subLabel = memo;
  obj.start = start;
  obj.end = end;
  obj.trailing = jsx(userId(5292).PressableHighlight, {
    onPress: callback,
    children: jsx(userId(5850).XSmallIcon, {}),
  });
  return jsx(userId(5775).TableRow, { label: null, subLabel: null, start: null, end: null, trailing: null });
}
function SectionListItem(children) {
  const tmp = closure_7();
  return jsx(Text_Text.Text, {
    style: closure_7().section,
    variant: "text-sm/semibold",
    color: "text-default",
    children: children.title,
  });
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if (constants.VERIFICATION === type) {
    const obj2 = {};
    const merged = Object.assign(item);
    return <VerificationListItem />;
  } else if (tmp.SECTION === type) {
    const obj = {};
    const merged1 = Object.assign(item);
    return <SectionListItem />;
  }
}
function getItemType(type) {
  return type.type;
}
function keyExtractor(type) {
  type = type.type;
  if (constants.VERIFICATION === type) {
    return type.verification.verifiedKey;
  } else {
    return tmp.SECTION === type ? type.title : undefined;
  }
}
function ClearVerificationsListFooter(userId) {
  userId = userId.userId;
  const items = [userId];
  const callback = noop.useCallback(() => {
    const result = SecureFramesUtils.deleteUserPersistentVerifications(userId);
  }, items);
  const obj = { label: null, subLabel: null, onPress: null, start: true, end: true };
  const obj2 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
  const intl = userId(1115).intl;
  obj2.children = intl.string(userId(1115).t["2xL5lu"]);
  obj.label = jsx(userId(4718).Text, { variant: "text-md/semibold", color: "text-feedback-critical", children: null });
  const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl2 = userId(1115).intl;
  obj3.children = intl2.string(userId(1115).t.kgAfXN);
  obj.subLabel = jsx(userId(4718).Text, { variant: "text-xs/medium", color: "text-subtle", children: null });
  obj.onPress = callback;
  return jsx(userId(5775).TableRow, { label: null, subLabel: null, onPress: null, start: true, end: true });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let closure_7 = createStyles.createStyles({
  list: { flexGrow: 1 },
  listContent: { paddingVertical: 32, paddingHorizontal: 16 },
  listFooter: { marginTop: 32 },
  section: { marginBottom: 8 },
});
const constants = { VERIFICATION: "VERIFICATION", SECTION: "SECTION" };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/native/SettingsSecureFramesVerificationsScreen.tsx",
);

export default function SettingsSecureFramesVerificationsScreen() {
  const tmp = closure_7();
  userId = userId(7190).useSettingNavigationRoute().params.userId;
  let obj = userId(7190);
  const navigation = userId(1484).useNavigation();
  const obj2 = userId(1484);
  let items = [UserStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  const obj3 = userId(504);
  dependencyMap = navigation(4566).getFormattedName(stateFromStores, false);
  const layoutEffect = secureFramesUserVerifiedKeys.useLayoutEffect(() => {
    let obj = { title: null, headerTitle: null };
    let intl = util.intl;
    obj.title = "" + intl.string(util.t["5b3FNI"]) + " (" + subtitle + ")";
    obj.headerTitle = function headerTitle() {
      const obj = { title: null, subtitle: null };
      const intl = userId(subtitle[7]).intl;
      obj.title = intl.string(userId(subtitle[7]).t["5b3FNI"]);
      obj.subtitle = subtitle;
      return jsx(userId(subtitle[15]).GenericHeaderTitle, { title: null, subtitle: null });
    };
    navigation.setOptions(obj);
  });
  const obj4 = navigation(4566);
  secureFramesUserVerifiedKeys = userId(16094).useSecureFramesUserVerifiedKeys(userId);
  const items1 = [userId, secureFramesUserVerifiedKeys];
  const items2 = [navigation, secureFramesUserVerifiedKeys];
  const memo = secureFramesUserVerifiedKeys.useMemo(() => {
    const items = [];
    const obj = { type: constants.SECTION, title: null };
    const intl = userId(1115).intl;
    obj.title = intl.formatToPlainString(userId(1115).t["/MBjYF"], { count: secureFramesUserVerifiedKeys.length });
    items.push(obj);
    const item = secureFramesUserVerifiedKeys.forEach((verification, index) => {
      items.push({
        type: constants.VERIFICATION,
        verification,
        index: index + 1,
        userId,
        start: 0 === index,
        end: index === secureFramesUserVerifiedKeys.length - 1,
      });
    });
    return items;
  }, items1);
  const effect = secureFramesUserVerifiedKeys.useEffect(() => {
    if (0 === secureFramesUserVerifiedKeys.length) {
      navigation.pop();
    }
  }, items2);
  const obj6 = { style: tmp.list, children: null };
  const obj7 = {
    keyExtractor,
    getItemType,
    renderItem,
    data: memo,
    contentContainerStyle: tmp.listContent,
    ListFooterComponent: null,
  };
  const obj5 = userId(16094);
  obj7.ListFooterComponent = (
    <View style={tmp.listFooter}>
      <ClearVerificationsListFooter userId={userId} />
    </View>
  );
  obj6.children = jsx(userId(8957).FlashList, {
    keyExtractor,
    getItemType,
    renderItem,
    data: memo,
    contentContainerStyle: tmp.listContent,
    ListFooterComponent: null,
  });
  return <View style={tmp.list}>{null}</View>;
}
