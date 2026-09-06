// === Module 13448: ReferralProgramShareActionSheet ===

// Module 13448 (ReferralProgramShareActionSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 4272 */;
import makeUserListPillDataDefault from "makeUserListPillData" /* 10863 */;
import ReferralProgramShareActionSheetUtils from "ReferralProgramShareActionSheetUtils" /* 13451 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import ReferralTrialStore from "ReferralTrialStore" /* 7452 */;

require = fn;
function mapToUser(arg0) {
  const items = [arg0, UserStore.getUser(arg0)];
  return items;
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { searchBarContainer: null, searchBarRowContainer: null, header: null, subtitle: null, centeredContainer: null, errorImage: null, emptyImage: null, footer: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
createStyles.searchBarContainer = createStyles;
createStyles.searchBarRowContainer = { paddingTop: nativeDefault.space.PX_8 };
let obj1 = { paddingTop: nativeDefault.space.PX_8 };
createStyles.header = { height: nativeDefault.space.PX_64 };
let obj2 = { height: nativeDefault.space.PX_64 };
createStyles.subtitle = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
createStyles.centeredContainer = { alignItems: "center" };
let size = { height: 200, width: 180, marginVertical: nativeDefault.space.PX_16 };
createStyles.errorImage = size;
const size1 = { height: 200, width: 240, marginTop: nativeDefault.space.PX_16 };
createStyles.emptyImage = size1;
let obj3 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
createStyles.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 };
let closure_12 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareActionSheet.tsx");

export default function ReferralProgramShareActionSheet() {
  let tmp = memo2();
  const ref = memo.useRef(null);
  _require = ref;
  let obj1 = require("initialize");
  let items = [fetchUsers];
  const stateFromStores = obj1.useStateFromStores(items, () => fetchUsers.getReferralsRemaining());
  [str, tmp7] = _slicedToArray(memo.useState(""), 2);
  const tmp8 = _slicedToArray(memo.useState([]), 2);
  selectedUserIds = tmp8[0];
  asyncGeneratorStep = tmp8[1];
  const arr3 = stateFromStores(selectedUserIds[11])(str, 400);
  const tmp6 = _slicedToArray(memo.useState(""), 2);
  [tmp11, _slicedToArray] = _slicedToArray(memo.useState(false), 2);
  stateFromStores(selectedUserIds[12])(null != stateFromStores, "Referrals remaining should not be null");
  const items1 = [selectedUserIds];
  memo = memo.useMemo(() => {
    let mapped;
    if (first != null) {
      mapped = first.map(mapToUser);
    }
    return new Map(mapped);
  }, items1);
  const items2 = [memo];
  const memo1 = memo.useMemo(() => {
    const found = Array.from(memo.values()).filter(GlobalUtils.isNotNullish);
    return found.map(makeUserListPillDataDefault);
  }, items2);
  const items3 = [str];
  const layoutEffect = memo.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items3);
  let obj2 = require("useReferralProgramEligibleUsers");
  const referralProgramEligibleUsers = obj2.useReferralProgramEligibleUsers({ searchQuery: arr3, selectedUsers: memo, limit: 15 });
  const eligibleUsers = referralProgramEligibleUsers.eligibleUsers;
  fetchUsers = referralProgramEligibleUsers.fetchUsers;
  const isFetching = referralProgramEligibleUsers.isFetching;
  const hasError = referralProgramEligibleUsers.hasError;
  const resendUsers = referralProgramEligibleUsers.resendUsers;
  const items4 = [selectedUserIds, resendUsers];
  memo2 = memo.useMemo(() => first.filter((item) => !set.has(item)), items4);
  const items5 = [isFetching, hasError, eligibleUsers];
  const memo3 = memo.useMemo(() => {
    let tmp = isFetching;
    if (isFetching) {
      tmp = !hasError;
    }
    if (tmp) {
      tmp = 0 === eligibleUsers.length;
    }
    return tmp;
  }, items5);
  let intl = require("util").intl;
  const tmp10 = _slicedToArray(memo.useState(false), 2);
  const onSelectUser = memo.useCallback((arg0) => {
    const id = arg0;
    closure_3((arr) => {
      const index = arr.indexOf(id.id);
      const items = [...arr];
      if (-1 === index) {
        items.push(id.id);
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
      const intl = util.intl;
      const obj = { text: tmp.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.srlxB8, obj));
    }
  }, items6);
  const memo4 = memo.useMemo(() => {
    const items = [eligibleUsers.length];
    return items;
  }, items7);
  const items8 = [eligibleUsers, onSelectUser, selectedUserIds, resendUsers, stateFromStores, memo2];
  const callback2 = memo.useCallback(() => ({ type: "section", props: { hideTitle: true } }), []);
  const callback3 = memo.useCallback((arg0, row) => {
    const obj = { eligibleUsers, row, selectedUserIds, resendUsers, referralsRemaining: stateFromStores, selectedNotResendUsers: memo2, onSelectUser };
    return obj.buildReferralUserRow(obj);
  }, items8);
  let stringResult = intl.string(require("util").t.DXgoi2);
  const analyticsLocations = stateFromStores(selectedUserIds[19])(stateFromStores(selectedUserIds[20]).PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL).analyticsLocations;
  _require = asyncGeneratorStep(async (arg0) => {
    closure_2 = tmp3;
    closure_129_0 = closure_0;
    v2(true);
    let obj1 = { location_stack };
    stateFromStores(first[21]).track(isFetching.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, obj1);
    stateFromStores(first[21]);
    await closure_0(first[22]).createReferralTrials(closure_0.map((id) => id.id));
    if (1 === tmp7) {
      c3 = 0;
      v2(false);
      obj1 = closure_0(first[26]);
      const intl = closure_0(first[16]).intl;
      obj1.presentError(intl.string(closure_0(first[16]).t.R0RpRX));
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      closure_129_1 = arg1;
      v2(false);
      stateFromStores(first[23]).openLazy(closure_0(first[25])(first[24], first.paths), "referral-program-share-action-sheet", { selectedUsers: closure_129_0, trialCreationResult: closure_129_1 });
      c3 = 0;
      stateFromStores(first[23]);
    }
    return arg1;
  });
  const items9 = [analyticsLocations];
  closure_15 = memo.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items9);
  const items10 = [stateFromStores];
  let obj = { style: tmp.header, children: null };
  const memo5 = memo.useMemo(() => {
    if (0 === stateFromStores) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.SY9tyI);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t["2dVCLl"]);
    }
    return stringResult;
  }, items10);
  const items11 = [hasError(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: memo5 }), ];
  obj = { variant: "text-xs/medium", color: "text-default", lineClamp: 2, style: tmp.subtitle, children: stringResult };
  items11[1] = hasError(require("Text/Text").Text, obj);
  obj.children = items11;
  if (hasError) {
    obj1 = { style: tmp.centeredContainer, children: null };
    obj2 = { source: null, resizeMode: "contain", style: null };
    const obj3 = { uri: null };
    let tmp9Result = tmp9(tmp4[29]);
    obj3.uri = tmp9(tmp4[30]);
    obj2.source = obj3;
    obj2.style = tmp.errorImage;
    const items12 = [tmp29(tmp9Result, obj2), , ];
    const obj4 = { variant: "heading-xl/bold", style: tmp.subtitle, children: null };
    const intl4 = tmp3(tmp4[16]).intl;
    obj4.children = intl4.string(tmp3(tmp4[16]).t.a9HOKg);
    items12[1] = tmp29(tmp3(tmp4[28]).Text, obj4);
    const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: null };
    const intl5 = tmp3(tmp4[16]).intl;
    obj5.children = intl5.string(tmp3(tmp4[16]).t.JjjeZb);
    items12[2] = tmp29(tmp3(tmp4[28]).Text, obj5);
    obj1.children = items12;
    let tmp27Result = tmp27(tmp28, obj1);
  } else {
    tmp27Result = tmp30;
    if (tmp31) {
      const obj6 = { style: tmp.centeredContainer, children: null };
      const obj7 = { source: null, resizeMode: "contain", style: null };
      const obj8 = { uri: null };
      tmp9Result = tmp9(tmp4[29]);
      obj8.uri = tmp9(tmp4[31]);
      obj7.source = obj8;
      obj7.style = tmp.emptyImage;
      const items13 = [tmp29(tmp9Result, obj7), , ];
      const obj9 = { variant: "heading-xl/bold", style: tmp.subtitle, children: null };
      let intl2 = tmp3(tmp4[16]).intl;
      obj9.children = intl2.string(tmp3(tmp4[16]).t["PFp+aJ"]);
      items13[1] = tmp29(tmp3(tmp4[28]).Text, obj9);
      const obj10 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: null };
      const intl3 = tmp3(tmp4[16]).intl;
      obj10.children = intl3.string(tmp3(tmp4[16]).t.eBIGB4);
      items13[2] = tmp29(tmp3(tmp4[28]).Text, obj10);
      obj6.children = items13;
      tmp27Result = tmp27(tmp28, obj6);
    }
    tmp31 = 0 === eligibleUsers.length && arr3.length > 0;
  }
  const tmp25 = stateFromStores(selectedUserIds[19]);
  const tmp35 = str.trim().length > 0;
  const obj11 = { actions: [], style: null };
  let prop;
  if (!tmp35) {
    prop = tmp.searchBarRowContainer;
  }
  obj11.style = prop;
  const userListActionsProps = require("SearchableUserListActions").useUserListActionsProps(obj11);
  const items14 = [fetchUsers];
  ({ renderHeader, headerSize } = userListActionsProps);
  const callback4 = obj.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.contentOffset.y + nativeEvent.nativeEvent.layoutMeasurement.height >= nativeEvent.nativeEvent.contentSize.height - 150) {
      fetchUsers();
    }
  }, items14);
  const obj12 = { style: null, children: null };
  const items15 = [tmp.footer];
  obj12.style = items15;
  tmp29(tmp3(tmp4[33]).ActivityIndicator, {});
  const obj13 = { size: "lg", text: null, onPress: null, loading: null, disabled: null };
  const intl6 = tmp3(tmp4[16]).intl;
  obj13.text = intl6.string(require("util").t.ItpQxk);
  obj13.onPress = function onPress() {
    closure_15(Array.from(memo.values()));
  };
  obj13.loading = tmp11;
  obj13.disabled = tmp11;
  obj12.children = hasError(require("components/Button/Button").Button, obj13);
  const tmp29Result = tmp29(tmp28, obj12);
  const obj14 = { scrollable: true, startExpanded: true, header: tmp27Result, footer: tmp29Result, children: null };
  const obj15 = { style: tmp.searchBarContainer, children: null };
  const obj16 = { onChangeText: tmp7, onRemove: callback1, tags: memo1, placeholder: null };
  const tmp3Result = require("SearchableUserListActions");
  const intl7 = tmp3(tmp4[16]).intl;
  obj16.placeholder = intl7.string(require("util").t.Kd5RaI);
  obj15.children = hasError(stateFromStores(selectedUserIds[36]), obj16);
  const items16 = [hasError(memo1, obj15), , ];
  let tmp42 = null;
  if (memo3) {
    tmp42 = tmp29Result;
  }
  items16[1] = tmp42;
  items16[2] = hasError(require("UsersFastList").UsersFastList, { ref, inActionSheet: true, sections: memo4, getItemProps: callback3, getSectionProps: callback2, renderListHeader: renderHeader, listHeaderSize: headerSize, insetEnd: 80, onScroll: callback4 });
  obj14.children = items16;
  return resendUsers(require("Sheet/BottomSheet").BottomSheet, obj14);
};