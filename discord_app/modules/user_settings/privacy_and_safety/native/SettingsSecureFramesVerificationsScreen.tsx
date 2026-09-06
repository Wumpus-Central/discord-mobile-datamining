// === Module 15854: SettingsSecureFramesVerificationsScreen ===

// Module 15854 (SettingsSecureFramesVerificationsScreen)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9150 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

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
  const memo = noop.useMemo(() => SecureFramesUtils.getSecureFramesUserVerifiedTimestamp(verification.timestamp), items1);
  let obj = { label: null, subLabel: null, start: null, end: null, trailing: null };
  const intl = userId(1114).intl;
  obj.label = intl.formatToPlainString(userId(1114).t.N4qBBO, { index });
  obj.subLabel = memo;
  obj.start = start;
  obj.end = end;
  obj = { onPress: callback, children: jsx(userId(5680).XSmallIcon, {}) };
  obj.trailing = jsx(userId(5123).PressableHighlight, { onPress: callback, children: jsx(userId(5680).XSmallIcon, {}) });
  return jsx(userId(5605).TableRow, { onPress: callback, children: jsx(userId(5680).XSmallIcon, {}) });
}
function SectionListItem(children) {
  const tmp = closure_7();
  return jsx(Text_Text.Text, { style: closure_7().section, variant: "text-sm/semibold", color: "text-default", children: children.title });
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if (constants.VERIFICATION === type) {
    let obj = {};
    const merged = Object.assign(item);
    return <VerificationListItem />;
  } else if (tmp.SECTION === type) {
    obj = {};
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
  let obj = { label: null, subLabel: null, onPress: null, start: true, end: true };
  obj = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
  const intl = userId(1114).intl;
  obj.children = intl.string(userId(1114).t["2xL5lu"]);
  obj.label = jsx(userId(4556).Text, { variant: "text-md/semibold", color: "text-feedback-critical", children: null });
  obj = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl2 = userId(1114).intl;
  obj.children = intl2.string(userId(1114).t.kgAfXN);
  obj.subLabel = jsx(userId(4556).Text, { variant: "text-xs/medium", color: "text-subtle", children: null });
  obj.onPress = callback;
  return jsx(userId(5605).TableRow, { variant: "text-xs/medium", color: "text-subtle", children: null });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ list: { flexGrow: 1 }, listContent: { paddingVertical: 32, paddingHorizontal: 16 }, listFooter: { marginTop: 32 }, section: { marginBottom: 8 } });
const constants = { VERIFICATION: "VERIFICATION", SECTION: "SECTION" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesVerificationsScreen.tsx");

export default function SettingsSecureFramesVerificationsScreen() {
  const tmp = closure_7();
  let obj = userId(6994);
  userId = obj.useSettingNavigationRoute().params.userId;
  let obj1 = userId(1483);
  const navigation = obj1.useNavigation();
  let items = [UserStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  const obj3 = userId(504);
  dependencyMap = navigation(4404).getFormattedName(stateFromStores, false);
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
  const obj4 = navigation(4404);
  secureFramesUserVerifiedKeys = userId(15851).useSecureFramesUserVerifiedKeys(userId);
  const items1 = [userId, secureFramesUserVerifiedKeys];
  const items2 = [navigation, secureFramesUserVerifiedKeys];
  const memo = secureFramesUserVerifiedKeys.useMemo(() => {
    const items = [];
    let obj = { type: constants.SECTION, title: null };
    const intl = userId(1114).intl;
    obj = { count: secureFramesUserVerifiedKeys.length };
    obj.title = intl.formatToPlainString(userId(1114).t["/MBjYF"], obj);
    items.push(obj);
    const item = secureFramesUserVerifiedKeys.forEach((verification, index) => {
      items.push({ type: constants.VERIFICATION, verification, index: index + 1, userId, start: 0 === index, end: index === secureFramesUserVerifiedKeys.length - 1 });
    });
    return items;
  }, items1);
  const effect = secureFramesUserVerifiedKeys.useEffect(() => {
    if (0 === secureFramesUserVerifiedKeys.length) {
      navigation.pop();
    }
  }, items2);
  obj = { style: tmp.list, children: null };
  obj = { keyExtractor, getItemType, renderItem, data: memo, contentContainerStyle: tmp.listContent, ListFooterComponent: null };
  obj1 = { style: tmp.listFooter, children: <ClearVerificationsListFooter userId={userId} /> };
  obj.ListFooterComponent = <View style={tmp.listFooter}><ClearVerificationsListFooter userId={userId} /></View>;
  obj.children = jsx(userId(8874).FlashList, { keyExtractor, getItemType, renderItem, data: memo, contentContainerStyle: tmp.listContent, ListFooterComponent: null });
  return <View keyExtractor={keyExtractor} getItemType={getItemType} renderItem={renderItem} data={memo} contentContainerStyle={tmp.listContent} ListFooterComponent={null} />;
};