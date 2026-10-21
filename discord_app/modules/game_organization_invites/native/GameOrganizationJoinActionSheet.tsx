// === Module 12621: GameOrganizationJoinActionSheet ===

// Module 12621 (GameOrganizationJoinActionSheet)
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import openGameOrganizationJoinModalDefault from "openGameOrganizationJoinModal" /* 12616 */;
import prefetchGameOrganizationAccountLinkStateDefault from "prefetchGameOrganizationAccountLinkState" /* 12622 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import UserStore from "UserStore" /* 1392 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 10976 */;

const require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const GameOrganizationInviteConstants = fn(10977);
({ GAME_ORGANIZATION_JOIN_ACTION_SHEET_KEY: closure_8, GameOrganizationInviteStates: closure_9 } = GameOrganizationInviteConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4966);
let obj2 = { loading: { paddingVertical: nativeDefault.space.PX_32 } };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingVertical: nativeDefault.space.PX_32 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationJoinActionSheet(code) {
  const cResult = code(id[10]).c(60);
  code = code.code;
  const analyticsLocations = code.analyticsLocations;
  closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameOrganizationInviteStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== code) {
    const fn = function f() {
      const invite = GameOrganizationInviteStore.getInvite(code);
      let state;
      if (invite != null) {
        state = invite.state;
      }
      let tmp3 = null;
      if (state === constants.RESOLVED) {
        tmp3 = invite;
      }
      return tmp3;
    };
    cResult[1] = code;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = code(id[10]);
  const stateFromStores = code(id[11]).useStateFromStores(first, tmp7);
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.application.id;
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ApplicationStore];
    cResult[3] = items1;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== id) {
    class P {
      constructor() {
        return closure_5.getApplication(id);
      }
    }
    cResult[4] = id;
    cResult[5] = P;
  } else {
    class P {
      constructor() {
        return closure_5.getApplication(id);
      }
    }
  }
  const tmpResult = code(id[11]);
  const stateFromStores1 = code(id[11]).useStateFromStores(tmp10, P);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return closure_5.getApplication(id);
      }
    }
    const items2 = [UserStore];
    class R {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[6] = items2;
    cResult[7] = R;
    let tmp15 = R;
    const tmp14 = items2;
  } else {
    class P {
      constructor() {
        return closure_5.getApplication(id);
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult4 = code(id[11]);
  const stateFromStores2 = code(id[11]).useStateFromStores(tmp14, tmp15);
  const tmpResult5 = code(id[11]);
  const gameOrganizationAccountLinkStatus = code(id[12]).useGameOrganizationAccountLinkStatus(id);
  const startAuthorization = analyticsLocations(tmp2[13])(stateFromStores1).startAuthorization;
  if (cResult[8] !== code) {
    class P {
      constructor() {
        return closure_5.getApplication(id);
      }
    }
    const items3 = [code];
    class R {
      constructor() {
        return closure_1_6.getCurrentUser();
      }
    }
    cResult[8] = code;
    cResult[9] = tmp20;
    cResult[10] = items3;
    let tmp19 = items3;
  } else {
    class P {
      constructor() {
        return closure_5.getApplication(id);
      }
    }
    tmp19 = cResult[10];
  }
  const effect = gameOrganizationAccountLinkStatus.useEffect(tmp20, tmp19);
  if (cResult[11] === code) {
    class P {
      constructor() {
        return closure_5.getApplication(id);
      }
    }
    const effect1 = obj6.useEffect(X, items4);
    if (cResult[15] === analyticsLocations) {
      class P {
        constructor() {
          return closure_5.getApplication(id);
        }
      }
    }
    class F {
      constructor() {
        obj = closure_1(closure_2[15]);
        hideActionSheetResult = obj.hideActionSheet(closure_8);
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
    cResult[15] = analyticsLocations;
    cResult[16] = code;
    cResult[17] = startAuthorization;
    cResult[18] = F;
  }
  class X {
    constructor() {
      if ("linked" === closure_3) {
        tmp = closure_1;
        tmp2 = closure_2;
        obj = closure_1(closure_2[15]);
        tmp3 = closure_8;
        hideActionSheetResult = obj.hideActionSheet(closure_8);
        tmp5 = code;
        tmp6 = closure_1(closure_2[16])(code);
      }
      return;
    }
  }
  items4 = [gameOrganizationAccountLinkStatus, code];
  cResult[11] = code;
  cResult[12] = gameOrganizationAccountLinkStatus;
  cResult[13] = items4;
  cResult[14] = X;
  obj6 = gameOrganizationAccountLinkStatus;
  const tmpResult6 = code(id[12]);
}) : (function GameOrganizationJoinActionSheet(code) {
  code = code.code;
  const analyticsLocations = code.analyticsLocations;
  let id;
  let gameOrganizationAccountLinkStatus;
  let startAuthorization;
  const tmp = closure_12();
  const items = [GameOrganizationInviteStore];
  const stateFromStores = code(id[11]).useStateFromStores(items, () => {
    const invite = GameOrganizationInviteStore.getInvite(code);
    let state;
    if (invite != null) {
      state = invite.state;
    }
    let tmp3 = null;
    if (state === constants.RESOLVED) {
      tmp3 = invite;
    }
    return tmp3;
  });
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.application.id;
  }
  let obj = code(id[11]);
  const items1 = [ApplicationStore];
  const stateFromStores1 = code(id[11]).useStateFromStores(items1, () => ApplicationStore.getApplication(id));
  const tmp2Result = code(id[11]);
  const items2 = [UserStore];
  const stateFromStores2 = code(id[11]).useStateFromStores(items2, () => currentUser.getCurrentUser());
  const tmp2Result3 = code(id[11]);
  gameOrganizationAccountLinkStatus = code(id[12]).useGameOrganizationAccountLinkStatus(id);
  startAuthorization = analyticsLocations(tmp3[13])(stateFromStores1).startAuthorization;
  const items3 = [code];
  const effect = gameOrganizationAccountLinkStatus.useEffect(() => {
    prefetchGameOrganizationAccountLinkStateDefault(code);
  }, items3);
  const items4 = [gameOrganizationAccountLinkStatus, code];
  const effect1 = gameOrganizationAccountLinkStatus.useEffect(() => {
    if ("linked" === gameOrganizationAccountLinkStatus) {
      ActionSheetActionCreatorsDefault.hideActionSheet(closure_2_8);
      openGameOrganizationJoinModalDefault(code);
    }
  }, items4);
  const items5 = [analyticsLocations, startAuthorization, code];
  if (null == stateFromStores) {
    return null;
  } else {
    if ("loading" !== gameOrganizationAccountLinkStatus) {
      if ("linked" !== gameOrganizationAccountLinkStatus) {
        if ("error" !== gameOrganizationAccountLinkStatus) {
          if ("link_unavailable" !== gameOrganizationAccountLinkStatus) {
            if ("needs_link" === gameOrganizationAccountLinkStatus) {
              const obj2 = { displayNoun: stateFromStores.displayNoun, lowercase: true };
              const tmp12 = tmp8(tmp3[22])(obj2);
              const obj3 = { header: closure_10(tmp2(tmp3[17]).BottomSheetTitleHeader, { title: null }), illustration: null, title: null, description: null, actions: null };
              const obj4 = { direction: "horizontal", justify: "center", align: "center", spacing: tmp8(tmp3[8]).space.PX_16, children: null };
              const obj5 = { game: stateFromStores1, size: tmp2(tmp3[23]).GameIconSizes.LARGE };
              const items6 = [closure_10(tmp8(tmp3[23]), obj5), , ];
              const obj6 = { size: "md", color: tmp8(tmp3[8]).colors.INTERACTIVE_TEXT_DEFAULT };
              items6[1] = closure_10(tmp2(tmp3[24]).MoreHorizontalIcon, obj6);
              let avatarSource;
              if (stateFromStores2 != null) {
                avatarSource = stateFromStores2.getAvatarSource(undefined);
              }
              if (avatarSource == null) {
                avatarSource = null;
              }
              const obj7 = { source: avatarSource, size: tmp2(tmp3[25]).AvatarSizes.XXLARGE };
              items6[2] = closure_10(tmp2(tmp3[25]).Avatar, obj7);
              obj4.children = items6;
              obj3.illustration = closure_11(tmp2(tmp3[26]).Stack, obj4);
              const intl = tmp2(tmp3[19]).intl;
              const obj8 = { gameName: stateFromStores.application.name, noun: tmp12 };
              obj3.title = intl.formatToPlainString(tmp8(tmp3[20]).a1DdcF, obj8);
              const intl2 = tmp2(tmp3[19]).intl;
              const obj9 = { noun: tmp12 };
              obj3.description = intl2.formatToPlainString(tmp8(tmp3[20])["xd+PSv"], obj9);
              const obj10 = { text: null, icon: null, iconPosition: "start", size: "lg", onPress: null };
              const intl3 = tmp2(tmp3[19]).intl;
              obj10.text = intl3.string(tmp8(tmp3[20]).qD9GKX);
              const obj11 = { size: "sm", color: tmp8(tmp3[8]).colors.WHITE };
              obj10.icon = closure_10(tmp2(tmp3[27]).GameControllerIcon, obj11);
              obj10.onPress = tmp11;
              obj3.actions = closure_10(tmp2(tmp3[28]).Button, obj10);
              return closure_10(tmp2(tmp3[21]).PromoSheet, obj3);
            }
          }
        }
        const obj12 = { header: closure_10(tmp2(tmp3[17]).BottomSheetTitleHeader, { title: null }), title: null, description: null };
        const intl4 = tmp2(tmp3[19]).intl;
        obj12.title = intl4.string(tmp2(tmp3[19]).t.R0RpRX);
        let formatToPlainStringResult;
        if ("link_unavailable" === gameOrganizationAccountLinkStatus) {
          const intl5 = tmp2(tmp3[19]).intl;
          const obj13 = { gameName: stateFromStores.application.name };
          formatToPlainStringResult = intl5.formatToPlainString(tmp8(tmp3[20]).yoPvEj, obj13);
        }
        obj12.description = formatToPlainStringResult;
        return closure_10(tmp2(tmp3[21]).PromoSheet, obj12);
      }
    }
    const obj14 = { startExpanded: true, header: closure_10(tmp2(tmp3[17]).BottomSheetTitleHeader, { title: null }), children: null };
    const obj15 = { style: tmp.loading };
    obj14.children = closure_10(startAuthorization, obj15);
    return closure_10(tmp2(tmp3[18]).BottomSheet, obj14);
  }
  const tmp2Result4 = code(id[12]);
});