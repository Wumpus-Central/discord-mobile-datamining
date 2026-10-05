// === Module 15763: SettingsSecureFramesVerificationsScreen ===

// Module 15763 (SettingsSecureFramesVerificationsScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9364 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigation;

function VerificationListItem(verification) {
  let end;
  let end2;
  let index;
  let index2;
  let start;
  let start2;
  let tmp8;
  let userId;
  let userId2;
  if (closure_9) {
    const obj4 = userId(576);
    const cResult = obj4.c(16);
    ({ index: index2, userId: userId2 } = verification);
    const verification2 = verification.verification;
    ({ start: start2, end: end2 } = verification);
    if (cResult[0] === userId2) {
      let tmp12;
      let tmp13;
      let tmp15;
      let tmp18;
      let tmp21;
      if (cResult[1] === verification2.verifiedKey) {
        tmp12 = cResult[2];
      }
      if (cResult[3] !== verification2.timestamp) {
        const tmp9Result = userId(9364);
        const secureFramesUserVerifiedTimestamp = tmp9Result.getSecureFramesUserVerifiedTimestamp(verification2.timestamp);
        cResult[3] = verification2.timestamp;
        cResult[4] = secureFramesUserVerifiedTimestamp;
        tmp13 = secureFramesUserVerifiedTimestamp;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] !== index2) {
        const intl2 = tmp9(1126).intl;
        const obj2 = { index: index2 };
        const formatToPlainStringResult = intl2.formatToPlainString(userId(1126).t.N4qBBO, obj2);
        cResult[5] = index2;
        cResult[6] = formatToPlainStringResult;
        tmp15 = formatToPlainStringResult;
      } else {
        tmp15 = cResult[6];
      }
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp20 = jsx(userId(6017).XSmallIcon, {});
        cResult[7] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] !== tmp12) {
        const tmp23 = jsx(userId(5909).PressableHighlight, { onPress: tmp12, children: tmp18 });
        cResult[8] = tmp12;
        cResult[9] = tmp23;
        tmp21 = tmp23;
      } else {
        tmp21 = cResult[9];
      }
      if (cResult[10] === end2) {
        if (cResult[11] === start2) {
          if (cResult[12] === tmp13) {
            if (cResult[13] === tmp15) {
              let tmp24;
              if (cResult[14] === tmp21) {
                tmp24 = cResult[15];
              }
              tmp8 = tmp24;
            }
          }
        }
      }
      const tmp26 = jsx(userId(5993).TableRow, { label: tmp15, subLabel: tmp13, start: start2, end: end2, trailing: tmp21 });
      cResult[10] = end2;
      cResult[11] = start2;
      cResult[12] = tmp13;
      cResult[13] = tmp15;
      cResult[14] = tmp21;
      cResult[15] = tmp26;
      tmp24 = tmp26;
    }
    const fn = function n() {
      const obj = userId(dependencyMap[7]);
      const result = obj.deletePersistentVerification(userId2, verification2.verifiedKey);
    };
    cResult[0] = userId2;
    cResult[1] = verification2.verifiedKey;
    cResult[2] = fn;
    tmp12 = fn;
  } else {
    userId = verification.userId;
    verification = verification.verification;
    const items = [userId, verification.verifiedKey];
    ({ index, start, end } = verification);
    const items1 = [verification.timestamp];
    const callback = react.useCallback(() => {
      const obj = SecureFramesUtils;
      const result = obj.deletePersistentVerification(userId, verification.verifiedKey);
    }, items);
    const memo = react.useMemo(() => {
      const obj = SecureFramesUtils;
      return obj.getSecureFramesUserVerifiedTimestamp(verification.timestamp);
    }, items1);
    const TableRow = userId(5993).TableRow;
    const intl = userId(1126).intl;
    const obj6 = { index };
    const PressableHighlight = userId(5909).PressableHighlight;
    tmp8 = <TableRow label={intl.formatToPlainString(userId(1126).t.N4qBBO, obj6)} subLabel={memo} start={start} end={end} trailing={null} />;
  }
  return tmp8;
}
function SectionListItem(title) {
  let tmp7;
  if (closure_11) {
    const obj2 = react2;
    const cResult = obj2.c(3);
    const title2 = title.title;
    const tmp12 = closure_7();
    if (cResult[0] === tmp12.section) {
      let tmp13;
      if (cResult[1] === title2) {
        tmp13 = cResult[2];
      }
      tmp7 = tmp13;
    }
    const tmp15 = jsx(Text_Text.Text, { style: tmp12.section, variant: "text-sm/semibold", color: "text-default", children: title2 });
    cResult[0] = tmp12.section;
    cResult[1] = title2;
    cResult[2] = tmp15;
    tmp13 = tmp15;
  } else {
    title = title.title;
    closure_7();
    tmp7 = jsx(Text_Text.Text, { style: closure_7().section, variant: "text-sm/semibold", color: "text-default", children: title });
  }
  return tmp7;
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if (constants.VERIFICATION === type) {
    const merged = Object.assign(item);
    return <VerificationListItem />;
  } else if (tmp.SECTION === type) {
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
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ list: { flexGrow: 1 }, listContent: { paddingVertical: 32, paddingHorizontal: 16 }, listFooter: { marginTop: 32 }, section: { marginBottom: 8 } });
const constants = { VERIFICATION: "VERIFICATION", SECTION: "SECTION" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp8;
  let obj = userId(576);
  const cResult = obj.c(6);
  userId = userId.userId;
  if (cResult[0] !== userId) {
    const fn = function n() {
      const obj = SecureFramesUtils;
      const result = obj.deleteUserPersistentVerifications(userId);
    };
    cResult[0] = userId;
    cResult[1] = fn;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const Text = tmp(4886).Text;
    const intl = tmp(1126).intl;
    const tmp7 = <Text variant="text-md/semibold" color="text-feedback-critical">{intl.string(userId(1126).t["2xL5lu"])}</Text>;
    cResult[2] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const Text2 = tmp(4886).Text;
    const intl2 = tmp(1126).intl;
    const tmp10 = <Text2 variant="text-xs/medium" color="text-subtle">{intl2.string(userId(1126).t.kgAfXN)}</Text2>;
    cResult[3] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    const tmp13 = jsx(userId(5993).TableRow, { label: tmp5, subLabel: tmp8, onPress: tmp4, start: true, end: true });
    cResult[4] = tmp4;
    cResult[5] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[5];
  }
  return tmp11;
}) : ((userId) => {
  let intl;
  let intl2;
  userId = userId.userId;
  const items = [userId];
  const callback = react.useCallback(() => {
    const obj = SecureFramesUtils;
    const result = obj.deleteUserPersistentVerifications(userId);
  }, items);
  const TableRow = userId(5993).TableRow;
  ({ variant: "text-md/semibold", color: "text-feedback-critical", children: intl.string(userId(1126).t["2xL5lu"]) });
  const Text = userId(4886).Text;
  intl = userId(1126).intl;
  ({ variant: "text-xs/medium", color: "text-subtle", children: intl2.string(userId(1126).t.kgAfXN) });
  const Text2 = userId(4886).Text;
  intl2 = userId(1126).intl;
  return <TableRow label={null} subLabel={null} onPress={callback} start end />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_2;
  let first;
  let intl;
  let items1;
  let obj10;
  let tmp10;
  let tmp8;
  let userId;
  let obj = userId(576);
  const cResult = obj.c(29);
  const tmp4 = closure_7();
  const obj2 = userId(6490);
  userId = obj2.useSettingNavigationRoute().params.userId;
  const obj3 = userId(1490);
  navigation = obj3.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function f() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = userId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] !== stateFromStores) {
    const obj5 = navigation(4722);
    const formattedName = obj5.getFormattedName(stateFromStores, false);
    cResult[3] = stateFromStores;
    cResult[4] = formattedName;
    tmp10 = formattedName;
  } else {
    tmp10 = cResult[4];
  }
  dependencyMap = tmp10;
  if (cResult[5] === navigation) {
    let tmp13;
    if (cResult[6] === tmp10) {
      tmp13 = cResult[7];
    }
    const layoutEffect = items1.useLayoutEffect(tmp13);
    const tmpResult2 = userId(15760);
    const secureFramesUserVerifiedKeys = tmpResult2.useSecureFramesUserVerifiedKeys(userId);
    const obj6 = items1;
    if (cResult[8] === userId) {
      if (cResult[9] === secureFramesUserVerifiedKeys) {
        items1 = cResult[10];
      }
      if (cResult[11] === navigation) {
        let tmp19;
        if (cResult[12] === secureFramesUserVerifiedKeys.length) {
          tmp19 = cResult[13];
        }
        if (cResult[14] === navigation) {
          let tmp20;
          if (cResult[15] === secureFramesUserVerifiedKeys) {
            tmp20 = cResult[16];
          }
          const effect = obj6.useEffect(tmp19, tmp20);
          class E {
            constructor() {
              if (0 === secureFramesUserVerifiedKeys.length) {
                navigation.pop();
              }
            }
          }
          if (cResult[19] === tmp4.listFooter) {
            let tmp24;
            if (cResult[20] === tmp23) {
              tmp24 = cResult[21];
            }
            if (cResult[22] === tmp15) {
              if (cResult[23] === tmp4.listContent) {
                let tmp28;
                if (cResult[24] === tmp24) {
                  tmp28 = cResult[25];
                }
                if (cResult[26] === tmp4.list) {
                  let tmp33;
                  if (cResult[27] === tmp28) {
                    tmp33 = cResult[28];
                  }
                  return tmp33;
                }
                class E {
                  constructor() {
                    if (0 === secureFramesUserVerifiedKeys.length) {
                      navigation.pop();
                    }
                  }
                }
                const tmp35 = <secureFramesUserVerifiedKeys style={tmp4.list}>{tmp28}</secureFramesUserVerifiedKeys>;
                cResult[26] = tmp4.list;
                cResult[27] = tmp28;
                cResult[28] = tmp35;
                tmp33 = tmp35;
              }
            }
            class E {
              constructor() {
                if (0 === secureFramesUserVerifiedKeys.length) {
                  navigation.pop();
                }
              }
            }
            const tmp32 = jsx(userId(8371).FlashList, { keyExtractor, getItemType, renderItem, data: tmp15, contentContainerStyle: tmp4.listContent, ListFooterComponent: tmp24 });
            cResult[22] = tmp15;
            cResult[23] = tmp4.listContent;
            cResult[24] = tmp24;
            cResult[25] = tmp32;
            tmp28 = tmp32;
          }
          const tmp27 = <secureFramesUserVerifiedKeys style={tmp4.listFooter}>{tmp23}</secureFramesUserVerifiedKeys>;
          cResult[19] = tmp4.listFooter;
          cResult[20] = tmp23;
          cResult[21] = tmp27;
          tmp24 = tmp27;
        }
        class E {
          constructor() {
            if (0 === secureFramesUserVerifiedKeys.length) {
              navigation.pop();
            }
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
          if (0 === secureFramesUserVerifiedKeys.length) {
            navigation.pop();
          }
        }
      }
      cResult[11] = navigation;
      cResult[12] = secureFramesUserVerifiedKeys.length;
      cResult[13] = E;
      tmp19 = E;
    }
    items1 = [];
    const push = items1.push;
    const obj9 = { type: constants.SECTION, title: intl.formatToPlainString(userId(1126).t["/MBjYF"], obj10) };
    intl = tmp(1126).intl;
    obj10 = { count: secureFramesUserVerifiedKeys.length };
    push(obj9);
    const item = secureFramesUserVerifiedKeys.forEach((verification, index) => {
      const obj = { type: constants.VERIFICATION, verification, index: index + 1, userId, start: 0 === index, end: index === secureFramesUserVerifiedKeys.length - 1 };
      items1.push(obj);
    });
    cResult[8] = userId;
    cResult[9] = secureFramesUserVerifiedKeys;
    cResult[10] = items1;
  }
  const fn2 = function x() {
    let intl;
    const setOptions = navigation.setOptions;
    const obj = {
      title: "" + intl.string(intl3.t["5b3FNI"]) + " (" + subtitle + ")",
      headerTitle() {
        const GenericHeaderTitle = userId(subtitle[17]).GenericHeaderTitle;
        const intl = userId(subtitle[8]).intl;
        return <GenericHeaderTitle title={intl.string(userId(subtitle[8]).t["5b3FNI"])} subtitle={subtitle} />;
      }
    };
    intl = intl3.intl;
    setOptions(obj);
  };
  cResult[5] = navigation;
  cResult[6] = tmp10;
  cResult[7] = fn2;
  tmp13 = fn2;
}) : (() => {
  let closure_2;
  let secureFramesUserVerifiedKeys;
  let userId;
  const tmp = closure_7();
  let obj = userId(6490);
  userId = obj.useSettingNavigationRoute().params.userId;
  let obj2 = userId(1490);
  navigation = obj2.useNavigation();
  let items = [UserStore];
  const obj3 = userId(504);
  const stateFromStores = obj3.useStateFromStores(items, () => UserStore.getUser(userId));
  const obj4 = navigation(4722);
  dependencyMap = obj4.getFormattedName(stateFromStores, false);
  const layoutEffect = secureFramesUserVerifiedKeys.useLayoutEffect(() => {
    let intl;
    const setOptions = navigation.setOptions;
    const obj = {
      title: "" + intl.string(intl3.t["5b3FNI"]) + " (" + subtitle + ")",
      headerTitle() {
        const GenericHeaderTitle = userId(subtitle[17]).GenericHeaderTitle;
        const intl = userId(subtitle[8]).intl;
        return <GenericHeaderTitle title={intl.string(userId(subtitle[8]).t["5b3FNI"])} subtitle={subtitle} />;
      }
    };
    intl = intl3.intl;
    setOptions(obj);
  });
  const obj5 = userId(15760);
  secureFramesUserVerifiedKeys = obj5.useSecureFramesUserVerifiedKeys(userId);
  const items1 = [userId, secureFramesUserVerifiedKeys];
  const items2 = [navigation, secureFramesUserVerifiedKeys];
  const memo = secureFramesUserVerifiedKeys.useMemo(() => {
    let intl;
    let obj2;
    const items = [];
    let obj = { type: constants.SECTION, title: intl.formatToPlainString(userId(closure_2[8]).t["/MBjYF"], obj2) };
    const push = items.push;
    intl = userId(closure_2[8]).intl;
    obj2 = { count: secureFramesUserVerifiedKeys.length };
    push(obj);
    const item = secureFramesUserVerifiedKeys.forEach((verification, index) => {
      const obj = { type: constants.VERIFICATION, verification, index: index + 1, userId, start: 0 === index, end: index === secureFramesUserVerifiedKeys.length - 1 };
      items.push(obj);
    });
    return items;
  }, items1);
  const effect = secureFramesUserVerifiedKeys.useEffect(() => {
    if (0 === secureFramesUserVerifiedKeys.length) {
      navigation.pop();
    }
  }, items2);
  const FlashList = userId(8371).FlashList;
  return <View style={tmp.list}>{null}</View>;
});
let result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/SettingsSecureFramesVerificationsScreen.tsx");

export default tmp2;