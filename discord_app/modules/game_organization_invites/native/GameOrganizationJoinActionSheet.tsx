// === Module 12728: GameOrganizationJoinActionSheet ===

// Module 12728 (GameOrganizationJoinActionSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import openGameOrganizationJoinModalDefault from "openGameOrganizationJoinModal" /* 12715 */;
import prefetchGameOrganizationAccountLinkStateDefault from "prefetchGameOrganizationAccountLinkState" /* 12729 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import UserStore from "UserStore" /* 1392 */;

const require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
let closure_7 = fn(11026).GAME_ORGANIZATION_JOIN_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4971);
let obj2 = { loading: { paddingVertical: nativeDefault.space.PX_32 } };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingVertical: nativeDefault.space.PX_32 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationJoinActionSheet(code) {
  const cResult = code(id[9]).c(57);
  code = code.code;
  const analyticsLocations = code.analyticsLocations;
  closure_10();
  const tmp6 = analyticsLocations(id[10])(code);
  id = undefined;
  if (tmp6 != null) {
    id = tmp6.application.id;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ApplicationStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function _() {
      return ApplicationStore.getApplication(id);
    };
    cResult[1] = id;
    cResult[2] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[2];
  }
  let obj = code(id[9]);
  const tmp5 = analyticsLocations;
  const stateFromStores = code(id[11]).useStateFromStores(first, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class P {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[3] = items1;
    cResult[4] = P;
    let tmp13 = P;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const tmpResult = code(id[11]);
  const stateFromStores1 = code(id[11]).useStateFromStores(tmp12, tmp13);
  const tmpResult3 = code(id[11]);
  const gameOrganizationAccountLinkStatus = code(id[12]).useGameOrganizationAccountLinkStatus(id);
  const startAuthorization = tmp5(tmp2[13])(stateFromStores).startAuthorization;
  if (cResult[5] !== code) {
    class G {
      constructor() {
        tmp = closure_1(closure_2[14])(code);
        return;
      }
    }
    const items2 = [code];
    class P {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[5] = code;
    cResult[6] = G;
    cResult[7] = items2;
    let tmp18 = items2;
  } else {
    class G {
      constructor() {
        tmp = closure_1(closure_2[14])(code);
        return;
      }
    }
    tmp18 = cResult[7];
  }
  const effect = gameOrganizationAccountLinkStatus.useEffect(G, tmp18);
  if (cResult[8] === code) {
    class G {
      constructor() {
        tmp = closure_1(closure_2[14])(code);
        return;
      }
    }
    const effect1 = obj5.useEffect(fn2, items3);
    if (cResult[12] === analyticsLocations) {
      class G {
        constructor() {
          tmp = closure_1(closure_2[14])(code);
          return;
        }
      }
    }
    class R {
      constructor() {
        obj = closure_1(closure_2[15]);
        hideActionSheetResult = obj.hideActionSheet(closure_7);
        obj1 = {
          analyticsLocations,
          onSuccess() {
                  return analyticsLocations(id[16])(code);
                }
        };
        tmp2 = startAuthorization(obj1);
        return;
      }
    }
    cResult[12] = analyticsLocations;
    cResult[13] = code;
    cResult[14] = startAuthorization;
    cResult[15] = R;
  }
  fn2 = function k() {
    if ("linked" === gameOrganizationAccountLinkStatus) {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_7);
      openGameOrganizationJoinModalDefault(code);
    }
  };
  items3 = [gameOrganizationAccountLinkStatus, code];
  cResult[8] = code;
  cResult[9] = gameOrganizationAccountLinkStatus;
  cResult[10] = fn2;
  cResult[11] = items3;
  obj5 = gameOrganizationAccountLinkStatus;
  const tmpResult4 = code(id[12]);
}) : (function GameOrganizationJoinActionSheet(code) {
  code = code.code;
  const analyticsLocations = code.analyticsLocations;
  let id;
  let gameOrganizationAccountLinkStatus;
  let startAuthorization;
  const tmp4 = analyticsLocations(id[10])(code);
  id = undefined;
  if (tmp4 != null) {
    id = tmp4.application.id;
  }
  const tmp = closure_10();
  const items = [ApplicationStore];
  const stateFromStores = code(id[11]).useStateFromStores(items, () => ApplicationStore.getApplication(id));
  let obj = code(id[11]);
  const items1 = [UserStore];
  const stateFromStores1 = code(id[11]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj2 = code(id[11]);
  gameOrganizationAccountLinkStatus = code(id[12]).useGameOrganizationAccountLinkStatus(id);
  startAuthorization = tmp2(tmp3[13])(stateFromStores).startAuthorization;
  const items2 = [code];
  const effect = gameOrganizationAccountLinkStatus.useEffect(() => {
    prefetchGameOrganizationAccountLinkStateDefault(code);
  }, items2);
  const items3 = [gameOrganizationAccountLinkStatus, code];
  const effect1 = gameOrganizationAccountLinkStatus.useEffect(() => {
    if ("linked" === gameOrganizationAccountLinkStatus) {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_7);
      openGameOrganizationJoinModalDefault(code);
    }
  }, items3);
  const items4 = [analyticsLocations, startAuthorization, code];
  if (null == tmp4) {
    return null;
  } else {
    if ("loading" !== gameOrganizationAccountLinkStatus) {
      if ("linked" !== gameOrganizationAccountLinkStatus) {
        if ("error" !== gameOrganizationAccountLinkStatus) {
          if ("link_unavailable" !== gameOrganizationAccountLinkStatus) {
            if ("needs_link" === gameOrganizationAccountLinkStatus) {
              const obj3 = { displayNoun: tmp4.displayNoun, lowercase: true };
              const tmp12 = tmp2(tmp3[22])(obj3);
              const obj5 = { header: closure_8(tmp6(tmp3[17]).BottomSheetTitleHeader, { title: null }), illustration: null, title: null, description: null, actions: null };
              const obj6 = { direction: "horizontal", justify: "center", align: "center", spacing: tmp2(tmp3[7]).space.PX_16, children: null };
              const obj7 = { game: stateFromStores, size: tmp6(tmp3[23]).GameIconSizes.LARGE };
              const items5 = [closure_8(tmp2(tmp3[23]), obj7), , ];
              const obj8 = { size: "md", color: tmp2(tmp3[7]).colors.INTERACTIVE_TEXT_DEFAULT };
              items5[1] = closure_8(tmp6(tmp3[24]).MoreHorizontalIcon, obj8);
              let avatarSource;
              if (stateFromStores1 != null) {
                avatarSource = stateFromStores1.getAvatarSource(undefined);
              }
              if (avatarSource == null) {
                avatarSource = null;
              }
              const obj9 = { source: avatarSource, size: tmp6(tmp3[25]).AvatarSizes.XXLARGE };
              items5[2] = closure_8(tmp6(tmp3[25]).Avatar, obj9);
              obj6.children = items5;
              obj5.illustration = closure_9(tmp6(tmp3[26]).Stack, obj6);
              const intl = tmp6(tmp3[19]).intl;
              const obj10 = { gameName: tmp4.application.name, noun: tmp12 };
              obj5.title = intl.formatToPlainString(tmp2(tmp3[20]).a1DdcF, obj10);
              const intl2 = tmp6(tmp3[19]).intl;
              const obj11 = { noun: tmp12 };
              obj5.description = intl2.formatToPlainString(tmp2(tmp3[20])["xd+PSv"], obj11);
              const obj12 = { text: null, icon: null, iconPosition: "start", size: "lg", onPress: null };
              const intl3 = tmp6(tmp3[19]).intl;
              obj12.text = intl3.string(tmp2(tmp3[20]).qD9GKX);
              const obj13 = { size: "sm", color: tmp2(tmp3[7]).colors.WHITE };
              obj12.icon = closure_8(tmp6(tmp3[27]).GameControllerIcon, obj13);
              obj12.onPress = tmp11;
              obj5.actions = closure_8(tmp6(tmp3[28]).Button, obj12);
              return closure_8(tmp6(tmp3[21]).PromoSheet, obj5);
            }
          }
        }
        const obj14 = { header: closure_8(tmp6(tmp3[17]).BottomSheetTitleHeader, { title: null }), title: null, description: null };
        const intl4 = tmp6(tmp3[19]).intl;
        obj14.title = intl4.string(tmp6(tmp3[19]).t.R0RpRX);
        let formatToPlainStringResult;
        if ("link_unavailable" === gameOrganizationAccountLinkStatus) {
          const intl5 = tmp6(tmp3[19]).intl;
          const obj15 = { gameName: tmp4.application.name };
          formatToPlainStringResult = intl5.formatToPlainString(tmp2(tmp3[20]).yoPvEj, obj15);
        }
        obj14.description = formatToPlainStringResult;
        return closure_8(tmp6(tmp3[21]).PromoSheet, obj14);
      }
    }
    const obj16 = { startExpanded: true, header: closure_8(tmp6(tmp3[17]).BottomSheetTitleHeader, { title: null }), children: null };
    const obj17 = { style: tmp.loading };
    obj16.children = closure_8(startAuthorization, obj17);
    return closure_8(tmp6(tmp3[18]).BottomSheet, obj16);
  }
  const obj4 = code(id[12]);
});