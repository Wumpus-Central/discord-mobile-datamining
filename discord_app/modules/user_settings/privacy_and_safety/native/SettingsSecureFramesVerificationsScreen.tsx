// discord_app/modules/user_settings/privacy_and_safety/native/SettingsSecureFramesVerificationsScreen.tsx
import noop from "noop";
import { View } from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function VerificationListItem(userId) {
  let end;
  let index;
  let start;
  userId = userId.userId;
  const verification = userId.verification;
  const items = [userId, verification.verifiedKey];
  ({ index, start, end } = userId);
  const items1 = [verification.timestamp];
  const callback = React.useCallback(() => {
    const result = userId(outer1_2[5]).deletePersistentVerification(userId, verification.verifiedKey);
  }, items);
  const memo = React.useMemo(() => userId(outer1_2[5]).getSecureFramesUserVerifiedTimestamp(verification.timestamp), items1);
  let obj = { label: null, subLabel: null, start: null, end: null, trailing: null };
  const intl = userId(1236).intl;
  obj[0] = intl.formatToPlainString(userId(1236).t.N4qBBO, { index });
  obj[1] = memo;
  obj[2] = start;
  obj[3] = end;
  obj = { onPress: callback, children: null };
  obj[1] = jsx(userId(5270).XSmallIcon, {});
  obj[4] = jsx(userId(4812).PressableHighlight, { onPress: callback, children: null });
  return jsx(userId(5315).TableRow, { onPress: callback, children: null });
}
function SectionListItem(children) {
  const tmp = callback();
  return jsx(require(4281) /* Text */.Text, { style: callback().section, variant: "text-sm/semibold", color: "text-default", children: children.title });
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
  const callback = React.useCallback(() => {
    const result = userId(outer1_2[5]).deleteUserPersistentVerifications(userId);
  }, items);
  let obj = { label: null, subLabel: null, onPress: null, start: true, end: true };
  obj = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
  const intl = userId(1236).intl;
  obj[2] = intl.string(userId(1236).t["2xL5lu"]);
  obj[0] = jsx(userId(4281).Text, { variant: "text-md/semibold", color: "text-feedback-critical", children: null });
  obj = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl2 = userId(1236).intl;
  obj[2] = intl2.string(userId(1236).t.kgAfXN);
  obj[1] = jsx(userId(4281).Text, { variant: "text-xs/medium", color: "text-subtle", children: null });
  obj[2] = callback;
  return jsx(userId(5315).TableRow, { variant: "text-xs/medium", color: "text-subtle", children: null });
}
let closure_7 = createCacheKey.createStyles({ list: { flexGrow: 1 }, listContent: { paddingVertical: 32, paddingHorizontal: 16 }, listFooter: { marginTop: 32 }, section: { marginBottom: 8 } });
let closure_8 = { VERIFICATION: "VERIFICATION", SECTION: "SECTION" };
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesVerificationsScreen.tsx");

export default function SettingsSecureFramesVerificationsScreen() {
  const tmp = callback();
  let obj = userId(6787);
  userId = obj.useSettingNavigationRoute().params.userId;
  let obj1 = userId(1480);
  const navigation = obj1.useNavigation();
  let items = [mergeGuildAvatar];
  const stateFromStores = userId(589).useStateFromStores(items, () => outer1_5.getUser(userId));
  const obj3 = userId(589);
  const dependencyMap = navigation(4124).getFormattedName(stateFromStores, false);
  const layoutEffect = secureFramesUserVerifiedKeys.useLayoutEffect(() => {
    let obj = { title: null, headerTitle: null };
    let intl = userId(1236).intl;
    obj[0] = "" + intl.string(userId(1236).t["5b3FNI"]) + " (" + dependencyMap + ")";
    obj[1] = function headerTitle() {
      const obj = { title: null, subtitle: null };
      const intl = outer1_0(outer1_2[7]).intl;
      obj[0] = intl.string(outer1_0(outer1_2[7]).t["5b3FNI"]);
      obj[1] = closure_2;
      return outer1_6(outer1_0(outer1_2[15]).GenericHeaderTitle, obj);
    };
    navigation.setOptions(obj);
  });
  const obj4 = navigation(4124);
  secureFramesUserVerifiedKeys = userId(14765).useSecureFramesUserVerifiedKeys(userId);
  const items1 = [userId, secureFramesUserVerifiedKeys];
  const items2 = [navigation, secureFramesUserVerifiedKeys];
  const memo = secureFramesUserVerifiedKeys.useMemo(() => {
    const items = [];
    let obj = { type: outer1_8.SECTION, title: null };
    const intl = userId(1236).intl;
    obj = { count: secureFramesUserVerifiedKeys.length };
    obj[1] = intl.formatToPlainString(userId(1236).t["/MBjYF"], obj);
    items.push(obj);
    const item = secureFramesUserVerifiedKeys.forEach((verification) => {
      items.push({ type: outer2_8.VERIFICATION, verification, index: arg1 + 1, userId: items, start: 0 === arg1, end: arg1 === outer1_3.length - 1 });
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
  obj1 = { style: tmp.listFooter, children: null };
  obj1[1] = <ClearVerificationsListFooter userId={userId} />;
  obj[5] = <View style={tmp.listFooter}>{null}</View>;
  obj[1] = jsx(userId(7666).FlashList, { keyExtractor, getItemType, renderItem, data: memo, contentContainerStyle: tmp.listContent, ListFooterComponent: null });
  return <View keyExtractor={keyExtractor} getItemType={getItemType} renderItem={renderItem} data={memo} contentContainerStyle={tmp.listContent} ListFooterComponent={null} />;
};