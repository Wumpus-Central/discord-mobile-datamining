// === Module 13265: ReferralProgramShareActionSheet ===

// Module 13265 (ReferralProgramShareActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl8 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4596 */;
import makeUserListPillDataDefault from "makeUserListPillData" /* 10608 */;
import ReferralProgramShareActionSheetUtils from "ReferralProgramShareActionSheetUtils" /* 13268 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import ReferralTrialStore from "ReferralTrialStore" /* 6974 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, closure_2, trialCreationResult, v1;

let c10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let size1;
let unpackModuleId;
function mapToUser(arg0) {
  const items = [arg0, UserStore.getUser(arg0)];
  return items;
}
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { searchBarContainer: obj2, searchBarRowContainer: obj3, header: obj4, subtitle: obj5, centeredContainer: { alignItems: "center" }, errorImage: size, emptyImage: size1, footer: obj6 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj4 = { height: nativeDefault.space.PX_64 };
obj5 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
size = { height: 200, width: 180, marginVertical: nativeDefault.space.PX_16 };
size1 = { height: 200, width: 240, marginTop: nativeDefault.space.PX_16 };
obj6 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 };
let closure_12 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareActionSheet.tsx");

export default function ReferralProgramShareActionSheet() {
  let Button;
  let closure_3;
  let fetchUsers;
  let headerSize;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items11;
  let items12;
  let items13;
  let items15;
  let items16;
  let memo;
  let memo2;
  let obj13;
  let obj18;
  let obj21;
  let obj8;
  let prop;
  let renderHeader;
  let selectedUserIds;
  let str;
  let tmp11;
  let tmp27Result;
  let tmp7;
  let tmp9Result4;
  const tmp = memo2();
  let obj = memo;
  const ref = memo.useRef(null);
  const tmp3 = ref;
  const tmp4 = selectedUserIds;
  let obj2 = ref(selectedUserIds[10]);
  let items = [fetchUsers];
  const stateFromStores = obj2.useStateFromStores(items, () => fetchUsers.getReferralsRemaining());
  [str, tmp7] = _slicedToArray(memo.useState(""), 2);
  const tmp6 = _slicedToArray(memo.useState(""), 2);
  [selectedUserIds, _asyncToGenerator] = memo.useState([]);
  const arr3 = stateFromStores(selectedUserIds[11])(str, 400);
  const tmp10 = _slicedToArray(memo.useState(false), 2);
  [tmp11, _slicedToArray] = tmp10;
  stateFromStores(selectedUserIds[12])(null != stateFromStores, "Referrals remaining should not be null");
  const items1 = [selectedUserIds];
  memo = memo.useMemo(() => {
    let mapped;
    const _Map = Map;
    if (first != null) {
      mapped = first.map(mapToUser);
    }
    const _Map1 = new _Map(mapped);
    return _Map1;
  }, items1);
  const items2 = [memo];
  const memo1 = memo.useMemo(() => {
    const arr = Array.from(memo.values());
    const found = arr.filter(GlobalUtils.isNotNullish);
    return found.map(makeUserListPillDataDefault);
  }, items2);
  const items3 = [str];
  const layoutEffect = memo.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items3);
  const obj3 = ref(selectedUserIds[15]);
  const referralProgramEligibleUsers = obj3.useReferralProgramEligibleUsers({ searchQuery: arr3, selectedUsers: memo, limit: 15 });
  const eligibleUsers = referralProgramEligibleUsers.eligibleUsers;
  fetchUsers = referralProgramEligibleUsers.fetchUsers;
  const isFetching = referralProgramEligibleUsers.isFetching;
  const hasError = referralProgramEligibleUsers.hasError;
  const resendUsers = referralProgramEligibleUsers.resendUsers;
  const items4 = [selectedUserIds, resendUsers];
  memo2 = memo.useMemo(() => first.filter((item) => !set.has(item)), items4);
  const items5 = [isFetching, hasError, eligibleUsers];
  const memo3 = memo.useMemo(() => isFetching && !hasError && 0 === eligibleUsers.length, items5);
  let intl = ref(selectedUserIds[16]).intl;
  let stringResult = intl.string(ref(selectedUserIds[16]).t.DXgoi2);
  const onSelectUser = memo.useCallback((arg0) => {
    let closure_0 = arg0;
    closure_3((arr) => {
      const index = arr.indexOf(id.id);
      const items = [...arr];
      if (-1 === index) {
        arr = items.push(id.id);
      } else {
        items.splice(index, 1);
      }
      return items;
    });
  }, []);
  const items6 = [onSelectUser, memo1];
  const items7 = [eligibleUsers];
  const callback1 = memo.useCallback((arg0) => {
    const user = UserStore.getUser(tmp.id);
    if (null != user) {
      callback(user);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const announce = AccessibilityAnnouncer.announce;
      const intl = intl8.intl;
      const obj = { text: memo1[arg0].text };
      announce(intl.formatToPlainString(intl8.t.srlxB8, obj));
    }
  }, items6);
  const memo4 = memo.useMemo(() => {
    const items = [eligibleUsers.length];
    return items;
  }, items7);
  const items8 = [eligibleUsers, onSelectUser, selectedUserIds, resendUsers, stateFromStores, memo2];
  const callback2 = memo.useCallback(() => ({ type: "section", props: { hideTitle: true } }), []);
  const callback3 = memo.useCallback((arg0, row) => {
    const obj = ReferralProgramShareActionSheetUtils;
    const obj2 = { eligibleUsers, row, selectedUserIds, resendUsers, referralsRemaining: stateFromStores, selectedNotResendUsers: memo2, onSelectUser };
    return obj.buildReferralUserRow(obj2);
  }, items8);
  const tmp25 = stateFromStores(selectedUserIds[19]);
  const analyticsLocations = tmp25(stateFromStores(selectedUserIds[20]).PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL).analyticsLocations;
  const useCallback = memo.useCallback;
  let closure_0 = _asyncToGenerator(async (selectedUsers) => {
    let location_stack;
    let c4 = 0;
    let c5 = 0;
    let c3 = 0;
    return (async (arg0) => {
      let obj9;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              trialCreationResult = undefined;
              c3 = 1;
              v1(true);
              const obj4 = { location_stack };
              const obj7 = stateFromStores(paths[21]);
              obj7.track(constants.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, obj4);
              v1 = 2;
              c5 = 1;
              const obj6 = { value: obj9.createReferralTrials(selectedUsers.map((id) => id.id)), done: false };
              obj9 = selectedUsers(paths[22]);
              return obj6;
            }
          } else {
            if (1 === v1) {
              c3 = 0;
              v1(false);
              const presentError = selectedUsers(paths[26]).presentError;
              selectedUsers(paths[26]);
              const intl = selectedUsers(paths[16]).intl;
              presentError(intl.string(selectedUsers(paths[16]).t.R0RpRX));
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              return { value, done: true };
            } else {
              trialCreationResult = value;
              v1(false);
              const obj8 = { selectedUsers, trialCreationResult };
              const obj5 = stateFromStores(paths[23]);
              obj5.openLazy(selectedUsers(paths[25])(paths[24], paths.paths), "referral-program-share-action-sheet", obj8);
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp16) {
          if (0 === c3) {
            c5 = 3;
            throw tmp16;
          } else {
            v1 = 1;
          }
        }
      }
    })();
  });
  const items9 = [analyticsLocations];
  let closure_15 = useCallback(function() {
    return closure_0(...arguments);
  }, items9);
  const items10 = [stateFromStores];
  let obj4 = { style: tmp.header, children: items11 };
  const memo5 = memo.useMemo(() => {
    let stringResult;
    if (0 === stateFromStores) {
      const intl2 = intl8.intl;
      stringResult = intl2.string(intl8.t.SY9tyI);
    } else {
      const intl = intl8.intl;
      stringResult = intl.string(intl8.t["2dVCLl"]);
    }
    return stringResult;
  }, items10);
  items11 = [hasError(ref(selectedUserIds[27]).BottomSheetTitleHeader, { title: memo5 }), ];
  let obj5 = { variant: "text-xs/medium", color: "text-default", lineClamp: 2, style: tmp.subtitle, children: stringResult };
  items11[1] = hasError(ref(selectedUserIds[28]).Text, obj5);
  if (hasError) {
    let obj6 = { style: tmp.centeredContainer, children: items12 };
    let obj7 = { source: obj8, resizeMode: "contain", style: tmp.errorImage };
    obj8 = { uri: stateFromStores(tmp4[30]) };
    const tmp9Result = stateFromStores(tmp4[29]);
    items12 = [hasError(tmp9Result, obj7), , ];
    let obj9 = { variant: "heading-xl/bold", style: tmp.subtitle, children: intl4.string(tmp3(tmp4[16]).t.a9HOKg) };
    const Text3 = tmp3(tmp4[28]).Text;
    intl4 = tmp3(tmp4[16]).intl;
    items12[1] = hasError(Text3, obj9);
    const obj10 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: intl5.string(tmp3(tmp4[16]).t.JjjeZb) };
    const Text4 = tmp3(tmp4[28]).Text;
    intl5 = tmp3(tmp4[16]).intl;
    items12[2] = hasError(Text4, obj10);
    tmp27Result = tmp27(tmp28, obj6);
  } else {
    tmp27Result = tmp30;
    const tmp31 = 0 === eligibleUsers.length && arr3.length > 0;
    if (tmp31) {
      const obj11 = { style: tmp.centeredContainer, children: items13 };
      const obj12 = { source: obj13, resizeMode: "contain", style: tmp.emptyImage };
      obj13 = { uri: stateFromStores(tmp4[31]) };
      const tmp9Result3 = stateFromStores(tmp4[29]);
      items13 = [hasError(tmp9Result3, obj12), , ];
      const obj14 = { variant: "heading-xl/bold", style: tmp.subtitle, children: intl2.string(tmp3(tmp4[16]).t["PFp+aJ"]) };
      const Text = tmp3(tmp4[28]).Text;
      intl2 = tmp3(tmp4[16]).intl;
      items13[1] = hasError(Text, obj14);
      const obj15 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: intl3.string(tmp3(tmp4[16]).t.eBIGB4) };
      const Text2 = tmp3(tmp4[28]).Text;
      intl3 = tmp3(tmp4[16]).intl;
      items13[2] = hasError(Text2, obj15);
      tmp27Result = tmp27(tmp28, obj11);
    }
  }
  const obj16 = { actions: [], style: prop };
  prop = undefined;
  const tmp35 = str.trim().length > 0;
  const useUserListActionsProps = tmp3(tmp4[32]).useUserListActionsProps;
  tmp3(tmp4[32]);
  if (!tmp35) {
    prop = tmp.searchBarRowContainer;
  }
  const userListActionsProps = useUserListActionsProps(obj16);
  const items14 = [fetchUsers];
  ({ renderHeader, headerSize } = userListActionsProps);
  const callback4 = obj.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.contentOffset.y + nativeEvent.nativeEvent.layoutMeasurement.height >= nativeEvent.nativeEvent.contentSize.height - 150) {
      fetchUsers();
    }
  }, items14);
  const obj17 = { style: items15, children: hasError(Button, obj18) };
  items15 = [tmp.footer];
  obj18 = {
    size: "lg",
    text: intl6.string(tmp3(tmp4[16]).t.ItpQxk),
    onPress() {
      closure_15(Array.from(memo.values()));
    },
    loading: tmp11,
    disabled: tmp11
  };
  const tmp29Result = hasError(tmp3(tmp4[33]).ActivityIndicator, {});
  Button = tmp3(tmp4[34]).Button;
  intl6 = tmp3(tmp4[16]).intl;
  const obj19 = { scrollable: true, startExpanded: true, header: tmp27Result, footer: hasError(memo1, obj17), children: items16 };
  const obj20 = { style: tmp.searchBarContainer, children: hasError(tmp9Result4, obj21) };
  BottomSheet = tmp3(tmp4[35]).BottomSheet;
  obj21 = { onChangeText: tmp7, onRemove: callback1, tags: memo1, placeholder: intl7.string(tmp3(tmp4[16]).t.Kd5RaI) };
  tmp9Result4 = stateFromStores(tmp4[36]);
  intl7 = tmp3(tmp4[16]).intl;
  items16 = [hasError(memo1, obj20), , ];
  let tmp43 = null;
  if (memo3) {
    tmp43 = tmp29Result;
  }
  items16[1] = tmp43;
  items16[2] = hasError(tmp3(tmp4[37]).UsersFastList, { ref, inActionSheet: true, sections: memo4, getItemProps: callback3, getSectionProps: callback2, renderListHeader: renderHeader, listHeaderSize: headerSize, insetEnd: 80, onScroll: callback4 });
  return resendUsers(BottomSheet, obj19);
};