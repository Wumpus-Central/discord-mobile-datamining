// === Module 19838: BloonsTDBattlesAccountLinkUpsellBottomSheet ===

// Module 19838 (BloonsTDBattlesAccountLinkUpsellBottomSheet)
import _modDef3579 from "module_3579" /* 3579 */;
import GameIconDefault from "GameIcon" /* 7924 */;
import CutoutableAvatarImageDefault from "CutoutableAvatarImage" /* 15746 */;
import AccountLinkManager from "AccountLinkManager" /* 19832 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1388 */;

require = fn;
let closure_5 = fn(7920).ApplicationAccountLinkingConstants;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/application_account_linking/native/BloonsTDBattlesAccountLinkUpsellBottomSheet.tsx");

export default function BloonsTDBattlesAccountLinkBottomSheet(markAsDismissed) {
  let BLOONS_TD_BATTLES_2_APPLICATION_ID;
  items = [UserStore];
  const stateFromStores = BLOONS_TD_BATTLES_2_APPLICATION_ID(563).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = BLOONS_TD_BATTLES_2_APPLICATION_ID(563);
  const accountLinkBottomSheetStyles = BLOONS_TD_BATTLES_2_APPLICATION_ID(19839).useAccountLinkBottomSheetStyles();
  BLOONS_TD_BATTLES_2_APPLICATION_ID = closure_5.BLOONS_TD_BATTLES_2_APPLICATION_ID;
  const obj2 = BLOONS_TD_BATTLES_2_APPLICATION_ID(19839);
  const getOrFetchApplication = BLOONS_TD_BATTLES_2_APPLICATION_ID(7259).useGetOrFetchApplication(BLOONS_TD_BATTLES_2_APPLICATION_ID);
  const bloonsTDBattlesUpsellExperiment = BLOONS_TD_BATTLES_2_APPLICATION_ID(19840).bloonsTDBattlesUpsellExperiment;
  [][0] = BLOONS_TD_BATTLES_2_APPLICATION_ID;
  if (null != stateFromStores) {
    if (null != getOrFetchApplication) {
      const obj4 = { align: "flex-start", direction: "vertical", spacing: 24, style: accountLinkBottomSheetStyles.content, children: null };
      const obj5 = { game: getOrFetchApplication, size: tmp(7924).GameIconSizes.LARGE };
      const items1 = [closure_6(GameIconDefault, obj5), closure_6(tmp(19843).UnionOrbsIcon, {}), ];
      const obj6 = { guildId: "a", user: stateFromStores, size: "container", "aria-label": "animal" };
      obj6.size = tmp(15746).AvatarSizes.XXLARGE;
      let username;
      if (stateFromStores != null) {
        username = stateFromStores.username;
      }
      const obj7 = { justify: "center", align: "center", direction: "horizontal", children: null };
      obj6["aria-label"] = username;
      items1[2] = closure_6(CutoutableAvatarImageDefault, obj6);
      obj7.children = items1;
      const items2 = [closure_7(tmp(6337).Stack, obj7), ];
      const obj8 = { justify: "center", children: null };
      const obj9 = { variant: "heading-xl/semibold", color: "text-strong", style: accountLinkBottomSheetStyles.text, children: null };
      const intl = tmp(1113).intl;
      const obj10 = { orbCount: bloonsTDBattlesUpsellExperiment.useConfig({ location: "AccountLinkUpsellBottomSheet" }).orbQuantity, applicationName: getOrFetchApplication.name };
      obj9.children = intl.format(_modDef3579.T0vNuI, obj10);
      const items3 = [closure_6(tmp(5929).Text, obj9), ];
      const obj11 = { variant: "body-md/medium", color: "text-subtle", style: accountLinkBottomSheetStyles.text, children: null };
      const intl2 = tmp(1113).intl;
      obj11.children = intl2.string(_modDef3579["ru+EPb"]);
      items3[1] = closure_6(tmp(5929).Text, obj11);
      obj8.children = items3;
      items2[1] = closure_7(tmp(6337).Stack, obj8);
      obj4.children = items2;
      const obj12 = { markAsDismissed: markAsDismissed.markAsDismissed, application: getOrFetchApplication, body: closure_7(tmp(6337).Stack, obj4), onSuccess: tmp6 };
      return closure_6(tmp(19839).AccountLinkUpsellBottomSheet, obj12);
    }
  }
  return null;
};