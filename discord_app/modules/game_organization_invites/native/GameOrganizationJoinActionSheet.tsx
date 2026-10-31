// === Module 13200: GameOrganizationJoinActionSheet ===

// Module 13200 (GameOrganizationJoinActionSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import openGameOrganizationJoinModalDefault from "openGameOrganizationJoinModal" /* 13182 */;
import prefetchGameOrganizationAccountLinkStateDefault from "prefetchGameOrganizationAccountLinkState" /* 13201 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2038 */;
import UserStore from "UserStore" /* 1383 */;

const require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
let closure_7 = fn(11363).GAME_ORGANIZATION_JOIN_ACTION_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { loading: { paddingVertical: nativeDefault.space.PX_32 } };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinActionSheet.tsx");

export default function GameOrganizationJoinActionSheet(code) {
  code = code.code;
  const analyticsLocations = code.analyticsLocations;
  let id;
  let gameOrganizationAccountLinkStatus;
  let startAuthorization;
  const tmp4 = analyticsLocations(id[8])(code);
  id = undefined;
  if (tmp4 != null) {
    id = tmp4.application.id;
  }
  const tmp = closure_10();
  const items = [ApplicationStore];
  const stateFromStores = code(id[9]).useStateFromStores(items, () => ApplicationStore.getApplication(id));
  let obj = code(id[9]);
  const items1 = [UserStore];
  const stateFromStores1 = code(id[9]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj2 = code(id[9]);
  gameOrganizationAccountLinkStatus = code(id[10]).useGameOrganizationAccountLinkStatus(id);
  startAuthorization = tmp2(tmp3[11])(stateFromStores).startAuthorization;
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
              const tmp12 = tmp2(tmp3[20])(obj3);
              const obj5 = { header: closure_8(tmp6(tmp3[16]).BottomSheetTitleHeader, { title: null }), illustration: null, title: null, description: null, actions: null };
              const obj6 = { direction: "horizontal", justify: "center", align: "center", spacing: tmp2(tmp3[7]).space.PX_16, children: null };
              const obj7 = { game: stateFromStores, size: tmp6(tmp3[22]).GameIconSizes.LARGE };
              const items5 = [closure_8(tmp2(tmp3[22]), obj7), , ];
              const obj8 = { size: "md", color: tmp2(tmp3[7]).colors.INTERACTIVE_TEXT_DEFAULT };
              items5[1] = closure_8(tmp6(tmp3[23]).MoreHorizontalIcon, obj8);
              let avatarSource;
              if (stateFromStores1 != null) {
                avatarSource = stateFromStores1.getAvatarSource(undefined);
              }
              if (avatarSource == null) {
                avatarSource = null;
              }
              const obj9 = { source: avatarSource, size: tmp6(tmp3[24]).AvatarSizes.XXLARGE };
              items5[2] = closure_8(tmp6(tmp3[24]).Avatar, obj9);
              obj6.children = items5;
              obj5.illustration = closure_9(tmp6(tmp3[21]).Stack, obj6);
              const intl = tmp6(tmp3[18]).intl;
              const obj10 = { gameName: tmp4.application.name, noun: tmp12 };
              obj5.title = intl.formatToPlainString(tmp2(tmp3[19]).a1DdcF, obj10);
              const intl2 = tmp6(tmp3[18]).intl;
              const obj11 = { noun: tmp12 };
              obj5.description = intl2.formatToPlainString(tmp2(tmp3[19])["xd+PSv"], obj11);
              const obj12 = { text: null, icon: null, iconPosition: "start", size: "lg", onPress: null };
              const intl3 = tmp6(tmp3[18]).intl;
              obj12.text = intl3.string(tmp2(tmp3[19]).qD9GKX);
              const obj13 = { size: "sm", color: tmp2(tmp3[7]).colors.WHITE };
              obj12.icon = closure_8(tmp6(tmp3[26]).GameControllerIcon, obj13);
              obj12.onPress = tmp11;
              obj5.actions = closure_8(tmp6(tmp3[25]).Button, obj12);
              return closure_8(tmp6(tmp3[17]).PromoSheet, obj5);
            }
          }
        }
        const obj14 = { header: closure_8(tmp6(tmp3[16]).BottomSheetTitleHeader, { title: null }), title: null, description: null };
        const intl4 = tmp6(tmp3[18]).intl;
        obj14.title = intl4.string(tmp6(tmp3[18]).t.R0RpRX);
        let formatToPlainStringResult;
        if ("link_unavailable" === gameOrganizationAccountLinkStatus) {
          const intl5 = tmp6(tmp3[18]).intl;
          const obj15 = { gameName: tmp4.application.name };
          formatToPlainStringResult = intl5.formatToPlainString(tmp2(tmp3[19]).yoPvEj, obj15);
        }
        obj14.description = formatToPlainStringResult;
        return closure_8(tmp6(tmp3[17]).PromoSheet, obj14);
      }
    }
    const obj16 = { startExpanded: true, header: closure_8(tmp6(tmp3[16]).BottomSheetTitleHeader, { title: null }), children: null };
    const obj17 = { style: tmp.loading };
    obj16.children = closure_8(startAuthorization, obj17);
    return closure_8(tmp6(tmp3[15]).BottomSheet, obj16);
  }
  const obj4 = code(id[10]);
};