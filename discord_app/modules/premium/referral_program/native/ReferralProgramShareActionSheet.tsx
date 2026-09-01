// === Module 13106: mapToUser ===

// Module 13106 (mapToUser)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import closure_8 from "emitChanges" /* 7197 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function mapToUser(arg0) {
  const items = [arg0, user.getUser(arg0)];
  return items;
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { searchBarContainer: null, searchBarRowContainer: null, header: null, subtitle: null, centeredContainer: null, errorImage: null, emptyImage: null, footer: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_24 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: ThemesDefault.space.PX_8 };
let obj1 = { paddingTop: ThemesDefault.space.PX_8 };
createCacheKey[2] = { height: ThemesDefault.space.PX_64 };
let obj2 = { height: ThemesDefault.space.PX_64 };
createCacheKey[3] = { textAlign: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[4] = { alignItems: "center" };
let obj3 = { textAlign: "center", paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[5] = { height: 200, width: 180, marginVertical: ThemesDefault.space.PX_16 };
let obj4 = { height: 200, width: 180, marginVertical: ThemesDefault.space.PX_16 };
createCacheKey[6] = { height: 200, width: 240, marginTop: ThemesDefault.space.PX_16 };
let obj5 = { height: 200, width: 240, marginTop: ThemesDefault.space.PX_16 };
createCacheKey[7] = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_48 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj6 = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_48 };
const result = require("set").fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramShareActionSheet.tsx");

export default function ReferralProgramShareActionSheet() {
  let tmp = memo2();
  let obj = memo;
  const ref = memo.useRef(null);
  let _require = ref;
  obj1 = _require(first[10]);
  let items = [fetchUsers];
  const stateFromStores = obj1.useStateFromStores(items, () => fetchUsers.getReferralsRemaining());
  [str, tmp7] = callback2(memo.useState(""), 2);
  const tmp8 = callback2(memo.useState([]), 2);
  first = tmp8[0];
  let callback = tmp8[1];
  const arr3 = stateFromStores(first[11])(str, 400);
  const tmp6 = callback2(memo.useState(""), 2);
  [tmp11, closure_4] = callback2(memo.useState(false), 2);
  stateFromStores(first[12])(null != stateFromStores, "Referrals remaining should not be null");
  const items1 = [first];
  memo = memo.useMemo(() => {
    let mapped;
    if (first != null) {
      mapped = first.map(callback);
    }
    return new Map(mapped);
  }, items1);
  const items2 = [memo];
  const memo1 = memo.useMemo(() => {
    const found = Array.from(memo.values()).filter(ref(first[13]).isNotNullish);
    return found.map(stateFromStores(first[14]));
  }, items2);
  const items3 = [str];
  const layoutEffect = memo.useLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      current.scrollToTop(false);
    }
  }, items3);
  let obj2 = _require(first[15]);
  const referralProgramEligibleUsers = obj2.useReferralProgramEligibleUsers({ searchQuery: arr3, selectedUsers: memo, limit: 15 });
  const eligibleUsers = referralProgramEligibleUsers.eligibleUsers;
  fetchUsers = referralProgramEligibleUsers.fetchUsers;
  const isFetching = referralProgramEligibleUsers.isFetching;
  const hasError = referralProgramEligibleUsers.hasError;
  const resendUsers = referralProgramEligibleUsers.resendUsers;
  const items4 = [first, resendUsers];
  memo2 = memo.useMemo(() => first.filter((arg0) => !set.has(arg0)), items4);
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
  let intl = _require(first[16]).intl;
  const tmp10 = callback2(memo.useState(false), 2);
  callback = memo.useCallback((arg0) => {
    closure_0 = arg0;
    callback((arr) => {
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
  const items6 = [callback, memo1];
  const items7 = [eligibleUsers];
  const callback1 = memo.useCallback((arg0) => {
    const user = eligibleUsers.getUser(tmp.id);
    if (null != user) {
      callback(user);
      const AccessibilityAnnouncer = ref(first[17]).AccessibilityAnnouncer;
      const intl = ref(first[16]).intl;
      const obj = { text: null };
      obj[0] = tmp.text;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(ref(first[16]).t.srlxB8, obj));
    }
  }, items6);
  const memo4 = memo.useMemo(() => {
    const items = [eligibleUsers.length];
    return items;
  }, items7);
  const items8 = [eligibleUsers, callback, first, resendUsers, stateFromStores, memo2];
  callback2 = memo.useCallback(() => ({ type: "section", props: { hideTitle: true } }), []);
  const callback3 = memo.useCallback((arg0, row) => {
    let obj = ref(first[18]);
    obj = { eligibleUsers, row, selectedUserIds: first, resendUsers, referralsRemaining: stateFromStores, selectedNotResendUsers: memo2, onSelectUser: callback };
    return obj.buildReferralUserRow(obj);
  }, items8);
  let stringResult = intl.string(_require(first[16]).t.DXgoi2);
  const analyticsLocations = stateFromStores(first[19])(stateFromStores(first[20]).PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL).analyticsLocations;
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    c3 = 0;
    return (function*(arg0) {
      closure_2 = tmp3;
      c3 = 1;
      v0(true);
      obj1 = { location_stack: null };
      obj1[0] = closure_1_14;
      stateFromStores(first[21]).track(isFetching.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, obj1);
      const obj8 = stateFromStores(first[21]);
      yield lib(first[22]).createReferralTrials(lib.map((id) => id.id));
      if (1 === tmp7) {
        c3 = 0;
        v0(false);
        obj1 = lib(first[26]);
        const intl = lib(first[16]).intl;
        obj1.presentError(intl.string(lib(first[16]).t.R0RpRX));
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_1 = arg1;
        v0(false);
        const obj3 = { selectedUsers: null, trialCreationResult: null };
        obj3[0] = lib;
        obj3[1] = closure_1;
        stateFromStores(first[23]).openLazy(lib(first[25])(first[24], first.paths), "referral-program-share-action-sheet", obj3);
        c3 = 0;
        const obj6 = stateFromStores(first[23]);
      }
      c3 = 0;
      return arg1;
    })();
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
  obj = { style: tmp.header, children: null };
  const memo5 = memo.useMemo(() => {
    if (0 === stateFromStores) {
      const intl2 = ref(first[16]).intl;
      let stringResult = intl2.string(ref(first[16]).t.SY9tyI);
    } else {
      const intl = ref(first[16]).intl;
      stringResult = intl.string(ref(first[16]).t["2dVCLl"]);
    }
    return stringResult;
  }, items10);
  const items11 = [hasError(_require(first[27]).BottomSheetTitleHeader, { title: memo5 }), ];
  obj = { variant: "text-xs/medium", color: "text-default", lineClamp: 2, style: tmp.subtitle, children: stringResult };
  items11[1] = hasError(_require(first[28]).Text, obj);
  obj[1] = items11;
  if (hasError) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.centeredContainer;
    obj2 = { source: null, resizeMode: "contain", style: null };
    let obj3 = { uri: null };
    let tmp9Result = tmp9(tmp4[29]);
    obj3[0] = tmp9(tmp4[30]);
    obj2[0] = obj3;
    obj2[2] = tmp.errorImage;
    const items12 = [tmp29(tmp9Result, obj2), , ];
    const obj4 = { variant: "heading-xl/bold", style: null, children: null };
    obj4[1] = tmp.subtitle;
    const intl4 = tmp3(tmp4[16]).intl;
    obj4[2] = intl4.string(tmp3(tmp4[16]).t.a9HOKg);
    items12[1] = tmp29(tmp3(tmp4[28]).Text, obj4);
    const obj5 = { variant: "text-md/medium", color: "text-default", style: null, children: null };
    obj5[2] = tmp.subtitle;
    const intl5 = tmp3(tmp4[16]).intl;
    obj5[3] = intl5.string(tmp3(tmp4[16]).t.JjjeZb);
    items12[2] = tmp29(tmp3(tmp4[28]).Text, obj5);
    obj1[1] = items12;
    let tmp27Result = tmp27(tmp28, obj1);
  } else {
    tmp27Result = tmp30;
    if (tmp31) {
      let obj6 = { style: null, children: null };
      obj6[0] = tmp.centeredContainer;
      const obj7 = { source: null, resizeMode: "contain", style: null };
      let obj8 = { uri: null };
      tmp9Result = tmp9(tmp4[29]);
      obj8[0] = tmp9(tmp4[31]);
      obj7[0] = obj8;
      obj7[2] = tmp.emptyImage;
      const items13 = [tmp29(tmp9Result, obj7), , ];
      const obj9 = { variant: "heading-xl/bold", style: null, children: null };
      obj9[1] = tmp.subtitle;
      let intl2 = tmp3(tmp4[16]).intl;
      obj9[2] = intl2.string(tmp3(tmp4[16]).t["PFp+aJ"]);
      items13[1] = tmp29(tmp3(tmp4[28]).Text, obj9);
      const obj10 = { variant: "text-md/medium", color: "text-default", style: null, children: null };
      obj10[2] = tmp.subtitle;
      const intl3 = tmp3(tmp4[16]).intl;
      obj10[3] = intl3.string(tmp3(tmp4[16]).t.eBIGB4);
      items13[2] = tmp29(tmp3(tmp4[28]).Text, obj10);
      obj6[1] = items13;
      tmp27Result = tmp27(tmp28, obj6);
    }
    tmp31 = 0 === eligibleUsers.length && arr3.length > 0;
  }
  const tmp25 = stateFromStores(first[19]);
  const tmp35 = str.trim().length > 0;
  const obj11 = { actions: [], style: null };
  let prop;
  if (!tmp35) {
    prop = tmp.searchBarRowContainer;
  }
  obj11[1] = prop;
  const userListActionsProps = _require(first[32]).useUserListActionsProps(obj11);
  const items14 = [fetchUsers];
  ({ renderHeader, headerSize } = userListActionsProps);
  const callback4 = obj.useCallback((nativeEvent) => {
    if (nativeEvent.nativeEvent.contentOffset.y + nativeEvent.nativeEvent.layoutMeasurement.height >= nativeEvent.nativeEvent.contentSize.height - 150) {
      fetchUsers();
    }
  }, items14);
  const obj12 = { style: items15, children: null };
  items15 = [tmp.footer];
  let tmp29Result = tmp29(tmp3(tmp4[33]).ActivityIndicator, {});
  const obj13 = { size: "lg", text: null, onPress: null, loading: null, disabled: null };
  const intl6 = tmp3(tmp4[16]).intl;
  obj13[1] = intl6.string(_require(first[16]).t.ItpQxk);
  obj13[2] = function onPress() {
    callback2(Array.from(memo.values()));
  };
  obj13[3] = tmp11;
  obj13[4] = tmp11;
  obj12[1] = hasError(_require(first[34]).Button, obj13);
  tmp29Result = tmp29(tmp28, obj12);
  const obj14 = { scrollable: true, startExpanded: true, header: tmp27Result, footer: tmp29Result, children: null };
  const obj15 = { style: tmp.searchBarContainer, children: null };
  const obj16 = { onChangeText: tmp7, onRemove: callback1, tags: memo1, placeholder: null };
  const tmp3Result = _require(first[32]);
  const intl7 = tmp3(tmp4[16]).intl;
  obj16[3] = intl7.string(_require(first[16]).t.Kd5RaI);
  obj15[1] = hasError(stateFromStores(first[36]), obj16);
  const items16 = [hasError(memo1, obj15), , ];
  let tmp42 = null;
  if (memo3) {
    tmp42 = tmp29Result;
  }
  items16[1] = tmp42;
  items16[2] = hasError(_require(first[37]).UsersFastList, { ref, inActionSheet: true, sections: memo4, getItemProps: callback3, getSectionProps: callback2, renderListHeader: renderHeader, listHeaderSize: headerSize, insetEnd: 80, onScroll: callback4 });
  obj14[4] = items16;
  return resendUsers(_require(first[35]).BottomSheet, obj14);
};