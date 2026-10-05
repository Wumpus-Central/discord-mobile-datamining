// === Module 15763: SettingsSecureFramesVerificationsScreen ===

// Module 15763 (SettingsSecureFramesVerificationsScreen)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9364 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
function VerificationListItem(verification) {
  if (closure_9) {
    let TableRow = userId;
    let tmp7 = dependencyMap;
    const cResult = userId(576).c(16);
    ({ index: index2, userId: userId2 } = verification);
    closure_129_0 = userId2;
    const verification2 = verification.verification;
    closure_129_1 = verification2;
    ({ start: start2, end: end2 } = verification);
    if (cResult[0] === userId2) {
      if (cResult[1] === verification2.verifiedKey) {
        let tmp9 = cResult[2];
      }
      if (cResult[3] !== verification2.timestamp) {
        const secureFramesUserVerifiedTimestamp = TableRow(9364).getSecureFramesUserVerifiedTimestamp(verification2.timestamp);
        cResult[3] = verification2.timestamp;
        cResult[4] = secureFramesUserVerifiedTimestamp;
        let tmp10 = secureFramesUserVerifiedTimestamp;
        const TableRowResult = TableRow(9364);
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== index2) {
        const intl2 = TableRow(1126).intl;
        const obj2 = { index: index2 };
        const formatToPlainStringResult = intl2.formatToPlainString(TableRow(1126).t.N4qBBO, obj2);
        cResult[5] = index2;
        cResult[6] = formatToPlainStringResult;
        let tmp12 = formatToPlainStringResult;
      } else {
        tmp12 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp17 = jsx(TableRow(6017).XSmallIcon, {});
        cResult[7] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] !== tmp9) {
        const obj3 = { onPress: tmp9, children: tmp15 };
        const tmp20 = jsx(TableRow(5909).PressableHighlight, { onPress: tmp9, children: tmp15 });
        cResult[8] = tmp9;
        cResult[9] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[9];
      }
      if (cResult[10] === end2) {
        if (cResult[11] === start2) {
          if (cResult[12] === tmp10) {
            if (cResult[13] === tmp12) {
            }
          }
        }
      }
      TableRow = TableRow(5993).TableRow;
      const obj5 = { label: tmp12, subLabel: tmp10, start: start2, end: end2, trailing: tmp18 };
      tmp7 = <TableRow label={tmp12} subLabel={tmp10} start={start2} end={end2} trailing={tmp18} />;
      cResult[10] = end2;
      cResult[11] = start2;
      cResult[12] = tmp10;
      cResult[13] = tmp12;
      cResult[14] = tmp18;
      cResult[15] = tmp7;
    }
    const fn = function n() {
      const result = SecureFramesUtils.deletePersistentVerification(userId, verification.verifiedKey);
    };
    cResult[0] = userId2;
    cResult[1] = verification2.verifiedKey;
    cResult[2] = fn;
    tmp9 = fn;
    const obj4 = userId(576);
  } else {
    userId = verification.userId;
    verification = verification.verification;
    const items = [userId, verification.verifiedKey];
    ({ index, start, end } = verification);
    const items1 = [verification.timestamp];
    const callback = noop.useCallback(() => {
      const result = SecureFramesUtils.deletePersistentVerification(userId, verification.verifiedKey);
    }, items);
    const memo = noop.useMemo(() => SecureFramesUtils.getSecureFramesUserVerifiedTimestamp(verification.timestamp), items1);
    const obj = { label: null, subLabel: null, start: null, end: null, trailing: null };
    const intl = userId(1126).intl;
    const obj6 = { index };
    obj.label = intl.formatToPlainString(userId(1126).t.N4qBBO, obj6);
    obj.subLabel = memo;
    obj.start = start;
    obj.end = end;
    const obj7 = { onPress: callback, children: jsx(userId(6017).XSmallIcon, {}) };
    obj.trailing = jsx(userId(5909).PressableHighlight, { onPress: callback, children: jsx(userId(6017).XSmallIcon, {}) });
    return jsx(userId(5993).TableRow, { label: null, subLabel: null, start: null, end: null, trailing: null });
  }
}
function SectionListItem(title) {
  if (closure_11) {
    let Text = require;
    let tmp6 = dependencyMap;
    const cResult = c.c(3);
    title = title.title;
    let section = closure_7();
    if (cResult[0] === section.section) {
    }
    Text = Text(4886).Text;
    const obj3 = { style: section.section, variant: "text-sm/semibold", color: "text-default", children: title };
    tmp6 = <Text style={section.section} variant="text-sm/semibold" color="text-default">{title}</Text>;
    section = section.section;
    cResult[0] = section;
    cResult[1] = title;
    cResult[2] = tmp6;
  } else {
    const obj = { style: closure_7().section, variant: "text-sm/semibold", color: "text-default", children: title.title };
    return jsx(Text_Text.Text, { style: closure_7().section, variant: "text-sm/semibold", color: "text-default", children: title.title });
  }
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
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles({ list: { flexGrow: 1 }, listContent: { paddingVertical: 32, paddingHorizontal: 16 }, listFooter: { marginTop: 32 }, section: { marginBottom: 8 } });
const constants = { VERIFICATION: "VERIFICATION", SECTION: "SECTION" };
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(576).c(6);
  userId = userId.userId;
  if (cResult[0] !== userId) {
    const fn = function n() {
      const result = SecureFramesUtils.deleteUserPersistentVerifications(userId);
    };
    cResult[0] = userId;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
    const intl = tmp(1126).intl;
    obj2.children = intl.string(tmp(1126).t["2xL5lu"]);
    const tmp7 = jsx(tmp(4886).Text, { variant: "text-md/semibold", color: "text-feedback-critical", children: null });
    cResult[2] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl2 = tmp(1126).intl;
    obj3.children = intl2.string(tmp(1126).t.kgAfXN);
    const tmp10 = jsx(tmp(4886).Text, { variant: "text-xs/medium", color: "text-subtle", children: null });
    cResult[3] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    const obj4 = { label: tmp5, subLabel: tmp8, onPress: tmp4, start: true, end: true };
    const tmp13 = jsx(tmp(5993).TableRow, { label: tmp5, subLabel: tmp8, onPress: tmp4, start: true, end: true });
    cResult[4] = tmp4;
    cResult[5] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[5];
  }
  return tmp11;
}) : ((userId) => {
  userId = userId.userId;
  const items = [userId];
  const callback = noop.useCallback(() => {
    const result = SecureFramesUtils.deleteUserPersistentVerifications(userId);
  }, items);
  const obj = { label: null, subLabel: null, onPress: null, start: true, end: true };
  const obj2 = { variant: "text-md/semibold", color: "text-feedback-critical", children: null };
  const intl = userId(1126).intl;
  obj2.children = intl.string(userId(1126).t["2xL5lu"]);
  obj.label = jsx(userId(4886).Text, { variant: "text-md/semibold", color: "text-feedback-critical", children: null });
  const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl2 = userId(1126).intl;
  obj3.children = intl2.string(userId(1126).t.kgAfXN);
  obj.subLabel = jsx(userId(4886).Text, { variant: "text-xs/medium", color: "text-subtle", children: null });
  obj.onPress = callback;
  return jsx(userId(5993).TableRow, { label: null, subLabel: null, onPress: null, start: true, end: true });
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesVerificationsScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = userId(576).c(29);
  const tmp4 = closure_7();
  let obj = userId(576);
  userId = userId(6490).useSettingNavigationRoute().params.userId;
  const obj2 = userId(6490);
  const navigation = userId(1490).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function f() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj3 = userId(1490);
  const stateFromStores = userId(504).useStateFromStores(first, tmp8);
  if (cResult[3] !== stateFromStores) {
    const formattedName = navigation(4722).getFormattedName(stateFromStores, false);
    cResult[3] = stateFromStores;
    cResult[4] = formattedName;
    let tmp10 = formattedName;
    const obj5 = navigation(4722);
  } else {
    tmp10 = cResult[4];
  }
  dependencyMap = tmp10;
  if (cResult[5] === navigation) {
    if (cResult[6] === tmp10) {
      let tmp13 = cResult[7];
    }
    const layoutEffect = items1.useLayoutEffect(tmp13);
    const secureFramesUserVerifiedKeys = tmp(15760).useSecureFramesUserVerifiedKeys(userId);
    if (cResult[8] === userId) {
      if (cResult[9] === secureFramesUserVerifiedKeys) {
        items1 = cResult[10];
      }
      if (cResult[11] === navigation) {
        if (cResult[12] === secureFramesUserVerifiedKeys.length) {
          let tmp19 = cResult[13];
        }
        if (cResult[14] === navigation) {
          if (cResult[15] === secureFramesUserVerifiedKeys) {
            let tmp20 = cResult[16];
          }
          const effect = obj6.useEffect(tmp19, tmp20);
          class E {
            constructor() {
              if (0 === closure_4.length) {
                tmp = closure_1;
                arr = closure_1.pop();
              }
              return;
            }
          }
          if (cResult[19] === tmp4.listFooter) {
            if (cResult[20] === tmp23) {
              let tmp24 = cResult[21];
            }
            if (cResult[22] === tmp15) {
              if (cResult[23] === tmp4.listContent) {
                if (cResult[24] === tmp24) {
                  let tmp28 = cResult[25];
                }
                if (cResult[26] === tmp4.list) {
                  if (cResult[27] === tmp28) {
                    let tmp33 = cResult[28];
                  }
                  return tmp33;
                }
                class E {
                  constructor() {
                    if (0 === closure_4.length) {
                      tmp = closure_1;
                      arr = closure_1.pop();
                    }
                    return;
                  }
                }
                const obj4 = { style: tmp4.list, children: tmp28 };
                const tmp35 = <secureFramesUserVerifiedKeys style={tmp4.list}>{tmp28}</secureFramesUserVerifiedKeys>;
                cResult[26] = tmp4.list;
                cResult[27] = tmp28;
                cResult[28] = tmp35;
                tmp33 = tmp35;
              }
            }
            class E {
              constructor() {
                if (0 === closure_4.length) {
                  tmp = closure_1;
                  arr = closure_1.pop();
                }
                return;
              }
            }
            const obj7 = { keyExtractor, getItemType, renderItem, data: tmp15, contentContainerStyle: tmp4.listContent, ListFooterComponent: tmp24 };
            const tmp32 = jsx(tmp(8371).FlashList, { keyExtractor, getItemType, renderItem, data: tmp15, contentContainerStyle: tmp4.listContent, ListFooterComponent: tmp24 });
            cResult[22] = tmp15;
            cResult[23] = tmp4.listContent;
            cResult[24] = tmp24;
            cResult[25] = tmp32;
            tmp28 = tmp32;
          }
          const obj8 = { style: tmp4.listFooter, children: tmp23 };
          const tmp27 = <secureFramesUserVerifiedKeys style={tmp4.listFooter}>{tmp23}</secureFramesUserVerifiedKeys>;
          cResult[19] = tmp4.listFooter;
          cResult[20] = tmp23;
          cResult[21] = tmp27;
          tmp24 = tmp27;
        }
        class E {
          constructor() {
            if (0 === closure_4.length) {
              tmp = closure_1;
              arr = closure_1.pop();
            }
            return;
          }
        }
        tmp21[0] = navigation;
        tmp21[1] = secureFramesUserVerifiedKeys;
        cResult[14] = navigation;
        cResult[15] = secureFramesUserVerifiedKeys;
        cResult[16] = tmp21;
        tmp20 = tmp21;
      }
      class E {
        constructor() {
          if (0 === closure_4.length) {
            tmp = closure_1;
            arr = closure_1.pop();
          }
          return;
        }
      }
      cResult[11] = navigation;
      cResult[12] = secureFramesUserVerifiedKeys.length;
      cResult[13] = E;
      tmp19 = E;
    }
    items1 = [];
    const obj9 = { type: constants.SECTION, title: null };
    let intl = tmp(1126).intl;
    const obj10 = { count: secureFramesUserVerifiedKeys.length };
    obj9.title = intl.formatToPlainString(tmp(1126).t["/MBjYF"], obj10);
    items1.push(obj9);
    const item = secureFramesUserVerifiedKeys.forEach((verification, index) => {
      items1.push({ type: constants.VERIFICATION, verification, index: index + 1, userId, start: 0 === index, end: index === secureFramesUserVerifiedKeys.length - 1 });
    });
    cResult[8] = userId;
    cResult[9] = secureFramesUserVerifiedKeys;
    cResult[10] = items1;
    obj6 = items1;
    const tmpResult2 = tmp(15760);
  }
  const fn2 = function x() {
    let obj = { title: null, headerTitle: null };
    let intl = util.intl;
    obj.title = "" + intl.string(util.t["5b3FNI"]) + " (" + subtitle + ")";
    obj.headerTitle = function headerTitle() {
      const obj = { title: null, subtitle: null };
      const intl = userId(subtitle[8]).intl;
      obj.title = intl.string(userId(subtitle[8]).t["5b3FNI"]);
      obj.subtitle = subtitle;
      return jsx(userId(subtitle[17]).GenericHeaderTitle, { title: null, subtitle: null });
    };
    navigation.setOptions(obj);
  };
  cResult[5] = navigation;
  cResult[6] = tmp10;
  cResult[7] = fn2;
  tmp13 = fn2;
  const tmpResult = userId(504);
}) : (() => {
  const tmp = closure_7();
  userId = userId(6490).useSettingNavigationRoute().params.userId;
  let obj = userId(6490);
  const navigation = userId(1490).useNavigation();
  const obj2 = userId(1490);
  let items = [UserStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => UserStore.getUser(userId));
  const obj3 = userId(504);
  dependencyMap = navigation(4722).getFormattedName(stateFromStores, false);
  const layoutEffect = secureFramesUserVerifiedKeys.useLayoutEffect(() => {
    let obj = { title: null, headerTitle: null };
    let intl = util.intl;
    obj.title = "" + intl.string(util.t["5b3FNI"]) + " (" + subtitle + ")";
    obj.headerTitle = function headerTitle() {
      const obj = { title: null, subtitle: null };
      const intl = userId(subtitle[8]).intl;
      obj.title = intl.string(userId(subtitle[8]).t["5b3FNI"]);
      obj.subtitle = subtitle;
      return jsx(userId(subtitle[17]).GenericHeaderTitle, { title: null, subtitle: null });
    };
    navigation.setOptions(obj);
  });
  const obj4 = navigation(4722);
  secureFramesUserVerifiedKeys = userId(15760).useSecureFramesUserVerifiedKeys(userId);
  const items1 = [userId, secureFramesUserVerifiedKeys];
  const items2 = [navigation, secureFramesUserVerifiedKeys];
  const memo = secureFramesUserVerifiedKeys.useMemo(() => {
    const items = [];
    const obj = { type: constants.SECTION, title: null };
    const intl = userId(1126).intl;
    obj.title = intl.formatToPlainString(userId(1126).t["/MBjYF"], { count: secureFramesUserVerifiedKeys.length });
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
  const obj6 = { style: tmp.list, children: null };
  const obj7 = { keyExtractor, getItemType, renderItem, data: memo, contentContainerStyle: tmp.listContent, ListFooterComponent: null };
  const obj5 = userId(15760);
  obj7.ListFooterComponent = <View style={tmp.listFooter}><closure_16 userId={userId} /></View>;
  obj6.children = jsx(userId(8371).FlashList, { keyExtractor, getItemType, renderItem, data: memo, contentContainerStyle: tmp.listContent, ListFooterComponent: null });
  return <View style={tmp.list}>{null}</View>;
});