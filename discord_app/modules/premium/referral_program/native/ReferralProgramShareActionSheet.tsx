// discord_app/modules/premium/referral_program/native/ReferralProgramShareActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import makeUserListPillDataDefault from "../../../main_tabs_v2/native/shared_components/user_list/makeUserListPillData.tsx";
import ReferralProgramShareActionSheetUtils from "ReferralProgramShareActionSheetUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import ReferralTrialStore from "../../ReferralTrialStore.tsx";

const require = globalThis.__r;

require = fn;
function mapToUser(arg0) {
  const items = [arg0, UserStore.getUser(arg0)];
  return items;
}
const View = fn(17).View;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5096);
let obj2 = { searchBarContainer: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 }, searchBarRowContainer: null, header: null, subtitle: null, centeredContainer: null, errorImage: null, emptyImage: null, footer: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
obj2.searchBarRowContainer = { paddingTop: nativeDefault.space.PX_8 };
let obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj2.header = { height: nativeDefault.space.PX_64 };
let obj5 = { height: nativeDefault.space.PX_64 };
obj2.subtitle = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj2.centeredContainer = { alignItems: "center" };
let size = { height: 200, width: 180, marginVertical: nativeDefault.space.PX_16 };
obj2.errorImage = size;
const size1 = { height: 200, width: 240, marginTop: nativeDefault.space.PX_16 };
obj2.emptyImage = size1;
let obj6 = { textAlign: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
obj2.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_48 };
let closure_12 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareActionSheet.tsx");

export default function ReferralProgramShareActionSheet(actionSheetKey) {
  let str = actionSheetKey.actionSheetKey;
  if (str === undefined) {
    str = "referral-program-share-action-sheet";
  }
  _require = str;
  let stateFromStores;
  selectedUserIds = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  let eligibleUsers;
  let resendUsers;
  let tmp = resendUsers();
  const ref = noop.useRef(null);
  let items = [eligibleUsers];
  stateFromStores = require("initialize").useStateFromStores(items, () => eligibleUsers.getReferralsRemaining());
  let obj = noop;
  const obj2 = require("initialize");
  [str2, tmp7] = noop.useState("");
  [selectedUserIds, _slicedToArray] = noop.useState([]);
  const arr3 = ref(stateFromStores[11])(str2, 400);
  const tmp6 = _slicedToArray(noop.useState(""), 2);
  [tmp11, c5] = noop.useState(false);
  ref(stateFromStores[12])(null != stateFromStores, "Referrals remaining should not be null");
  const items1 = [selectedUserIds];
  const memo = noop.useMemo(() => {
    let mapped;
    if (first != null) {
      mapped = first.map(mapToUser);
    }
    return new Map(mapped);
  }, items1);
  const items2 = [memo];
  const memo1 = noop.useMemo(() => {
    const found = Array.from(memo.values()).filter(GlobalUtils.isNotNullish);
    return found.map(makeUserListPillDataDefault);
  }, items2);
  const items3 = [str2];
  const layoutEffect = noop.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items3);
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  const referralProgramEligibleUsers = require("useReferralProgramEligibleUsers").useReferralProgramEligibleUsers({ searchQuery: arr3, selectedUsers: memo, limit: 15 });
  eligibleUsers = referralProgramEligibleUsers.eligibleUsers;
  const fetchUsers = referralProgramEligibleUsers.fetchUsers;
  const isFetching = referralProgramEligibleUsers.isFetching;
  const hasError = referralProgramEligibleUsers.hasError;
  resendUsers = referralProgramEligibleUsers.resendUsers;
  const items4 = [selectedUserIds, resendUsers];
  const memo2 = noop.useMemo(() => first.filter((item) => !set.has(item)), items4);
  const items5 = [isFetching, hasError, eligibleUsers];
  const memo3 = noop.useMemo(() => {
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
  const obj3 = require("useReferralProgramEligibleUsers");
  const onSelectUser = noop.useCallback((arg0) => {
    const id = arg0;
    closure_4((arr) => {
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
  const callback1 = noop.useCallback((arg0) => {
    const user = UserStore.getUser(tmp.id);
    if (null != user) {
      callback(user);
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      const intl = util.intl;
      const obj = { text: tmp.text };
      AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.srlxB8, obj));
    }
  }, items6);
  const memo4 = noop.useMemo(() => {
    const items = [eligibleUsers.length];
    return items;
  }, items7);
  const items8 = [eligibleUsers, onSelectUser, selectedUserIds, resendUsers, stateFromStores, memo2];
  const callback2 = noop.useCallback(() => ({ type: "section", props: { hideTitle: true } }), []);
  const callback3 = noop.useCallback((arg0, row) => ReferralProgramShareActionSheetUtils.buildReferralUserRow({ eligibleUsers, row, selectedUserIds, resendUsers, referralsRemaining: stateFromStores, selectedNotResendUsers: memo2, onSelectUser }), items8);
  let stringResult = intl.string(require("util").t.DXgoi2);
  const analyticsLocations = ref(stateFromStores[19])(ref(stateFromStores[20]).PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL).analyticsLocations;
  _require = selectedUserIds(function*(arg0) {
    closure_2 = tmp3;
    closure_129_0 = closure_0;
    v3(true);
    ref(stateFromStores[21]).track(fetchUsers.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, { location_stack });
    ref(stateFromStores[21]);
    yield closure_0(stateFromStores[22]).createReferralTrials(closure_0.map((id) => id.id));
    if (1 === tmp7) {
      c3 = 0;
      v3(false);
      const intl = closure_0(stateFromStores[16]).intl;
      closure_0(stateFromStores[26]).presentError(intl.string(closure_0(stateFromStores[16]).t.R0RpRX));
      v3 = 3;
      closure_0(stateFromStores[26]);
    } else if (arg0 === 1) {
      v3 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_129_1 = value;
      v3(false);
      ref(stateFromStores[23]).openLazy(closure_0(stateFromStores[25])(stateFromStores[24], stateFromStores.paths), closure_0, { selectedUsers: closure_129_0, trialCreationResult: closure_129_1 });
      c3 = 0;
      ref(stateFromStores[23]);
    }
    return value;
  });
  const items9 = [analyticsLocations, str];
  closure_16 = noop.useCallback(function() {
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
  const memo5 = noop.useMemo(() => {
    if (0 === stateFromStores) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.SY9tyI);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t["2dVCLl"]);
    }
    return stringResult;
  }, items10);
  const items11 = [isFetching(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: memo5 }), isFetching(require("Text/Text").Text, { variant: "text-xs/medium", color: "text-default", lineClamp: 2, style: tmp.subtitle, children: stringResult })];
  { style: tmp.header, children: null }.children = items11;
  if (hasError) {
    const obj6 = { style: tmp.centeredContainer, children: null };
    const obj7 = { source: null, resizeMode: "contain", style: null };
    const obj8 = { uri: tmp9(tmp4[30]) };
    obj7.source = obj8;
    obj7.style = tmp.errorImage;
    const items12 = [tmp29(tmp9(tmp4[29]), obj7), , ];
    const obj9 = { variant: "heading-xl/bold", style: tmp.subtitle, children: null };
    const intl4 = tmp3(tmp4[16]).intl;
    obj9.children = intl4.string(tmp3(tmp4[16]).t.a9HOKg);
    items12[1] = tmp29(tmp3(tmp4[28]).Text, obj9);
    const obj10 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: null };
    const intl5 = tmp3(tmp4[16]).intl;
    obj10.children = intl5.string(tmp3(tmp4[16]).t.JjjeZb);
    items12[2] = tmp29(tmp3(tmp4[28]).Text, obj10);
    obj6.children = items12;
    let tmp27Result = tmp27(tmp28, obj6);
    const tmp9Result = tmp9(tmp4[29]);
  } else {
    tmp27Result = tmp30;
    if (tmp31) {
      const obj11 = { style: tmp.centeredContainer, children: null };
      const obj12 = { source: null, resizeMode: "contain", style: null };
      const obj13 = { uri: tmp9(tmp4[31]) };
      obj12.source = obj13;
      obj12.style = tmp.emptyImage;
      const items13 = [tmp29(tmp9(tmp4[29]), obj12), , ];
      const obj14 = { variant: "heading-xl/bold", style: tmp.subtitle, children: null };
      let intl2 = tmp3(tmp4[16]).intl;
      obj14.children = intl2.string(tmp3(tmp4[16]).t["PFp+aJ"]);
      items13[1] = tmp29(tmp3(tmp4[28]).Text, obj14);
      const obj15 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: null };
      const intl3 = tmp3(tmp4[16]).intl;
      obj15.children = intl3.string(tmp3(tmp4[16]).t.eBIGB4);
      items13[2] = tmp29(tmp3(tmp4[28]).Text, obj15);
      obj11.children = items13;
      tmp27Result = tmp27(tmp28, obj11);
      const tmp9Result3 = tmp9(tmp4[29]);
    }
    tmp31 = 0 === eligibleUsers.length && arr3.length > 0;
  }
  const obj4 = { style: tmp.header, children: null };
  const obj5 = { variant: "text-xs/medium", color: "text-default", lineClamp: 2, style: tmp.subtitle, children: stringResult };
  const tmp25 = ref(stateFromStores[19]);
  const tmp35 = str2.trim().length > 0;
  const obj16 = { actions: [], style: null };
  let prop;
  if (!tmp35) {
    prop = tmp.searchBarRowContainer;
  }
  obj16.style = prop;
  const userListActionsProps = require("SearchableUserListActions").useUserListActionsProps(obj16);
  const items14 = [fetchUsers];
  ({ renderHeader, headerSize } = userListActionsProps);
  const callback4 = obj.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.contentOffset.y + nativeEvent.nativeEvent.layoutMeasurement.height >= nativeEvent.nativeEvent.contentSize.height - 150) {
      fetchUsers();
    }
  }, items14);
  const obj17 = { style: tmp.footer, children: null };
  const tmp3Result = require("SearchableUserListActions");
  const obj18 = { size: "lg", text: null, onPress: null, loading: null, disabled: null };
  const intl6 = tmp3(tmp4[16]).intl;
  obj18.text = intl6.string(require("util").t.ItpQxk);
  obj18.onPress = function onPress() {
    closure_16(Array.from(memo.values()));
  };
  obj18.loading = tmp11;
  obj18.disabled = tmp11;
  obj17.children = isFetching(require("components/Button/Button").Button, obj18);
  const tmp29Result = isFetching(require("ActivityIndicator/ActivityIndicator").ActivityIndicator, {});
  const obj19 = { scrollable: true, startExpanded: true, header: tmp27Result, footer: isFetching(memo, obj17), children: null };
  const obj20 = { style: tmp.searchBarContainer, children: null };
  const obj21 = { onChangeText: tmp7, onRemove: callback1, tags: memo1, placeholder: null };
  const tmp29Result2 = isFetching(memo, obj17);
  const intl7 = tmp3(tmp4[16]).intl;
  obj21.placeholder = intl7.string(require("util").t.Kd5RaI);
  obj20.children = isFetching(ref(stateFromStores[36]), obj21);
  const items15 = [isFetching(memo, obj20), , ];
  let tmp42 = null;
  if (memo3) {
    tmp42 = tmp29Result;
  }
  items15[1] = tmp42;
  items15[2] = isFetching(require("UsersFastList").UsersFastList, { ref, inActionSheet: true, sections: memo4, getItemProps: callback3, getSectionProps: callback2, renderListHeader: renderHeader, listHeaderSize: headerSize, insetEnd: 80, onScroll: callback4 });
  obj19.children = items15;
  return hasError(require("Sheet/BottomSheet").BottomSheet, obj19);
};