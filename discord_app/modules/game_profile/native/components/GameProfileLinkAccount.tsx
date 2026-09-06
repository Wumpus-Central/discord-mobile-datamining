// discord_app/modules/game_profile/native/components/GameProfileLinkAccount.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  headerText: null,
  card: null,
  cardImagesContainer: null,
  ellipseGroup: null,
  ellipse: null,
  cardImageApplication: null,
  cardContent: null,
  cardText: null,
};
createStyles = { gap: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.headerText = { paddingHorizontal: nativeDefault.space.PX_8 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_8 };
createStyles.card = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  padding: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
let obj2 = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  padding: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
createStyles.cardImagesContainer = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  alignItems: "center",
  alignSelf: "center",
};
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center" };
createStyles.ellipseGroup = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
let size = {
  width: 4,
  height: 4,
  backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  opacity: 0.3,
  borderRadius: nativeDefault.radii.round,
};
createStyles.ellipse = size;
const size1 = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
createStyles.cardImageApplication = size1;
let obj4 = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
createStyles.cardContent = {
  gap: nativeDefault.space.PX_4,
  alignSelf: "center",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_24,
};
createStyles.cardText = { textAlign: "center" };
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileLinkAccount.tsx");

export default function GameProfileLinkAccount(trackAction) {
  trackAction = trackAction.trackAction;
  const analyticsLocations = trackAction.analyticsLocations;
  let startAuthorization;
  const tmp = closure_8();
  const tmp4 = analyticsLocations(startAuthorization[6])(trackAction.game);
  startAuthorization = tmp4.startAuthorization;
  const connectionApp = tmp4.connectionApp;
  ({ fetched, hasAlreadyLinked, canStartAuthorization } = tmp4);
  let obj = trackAction(startAuthorization[7]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [trackAction, startAuthorization, analyticsLocations];
  if (fetched) {
    if (null != connectionApp) {
      if (canStartAuthorization) {
        if (!hasAlreadyLinked) {
          if (null != stateFromStores) {
            const iconSource = connectionApp.getIconSource(48);
            obj = { style: tmp.container, children: null };
            obj = {
              variant: "heading-sm/semibold",
              color: "mobile-text-heading-primary",
              style: tmp.headerText,
              children: null,
            };
            const intl4 = tmp5(tmp3[10]).intl;
            obj.children = intl4.string(tmp5(tmp3[10]).t["VDAhr+"]);
            const items2 = [closure_6(tmp5(tmp3[9]).Text, obj)];
            const obj1 = { style: tmp.card, children: null };
            let tmp11Result = null;
            if (null != iconSource) {
              const obj2 = { style: tmp.cardImagesContainer, children: null };
              const obj3 = { source: iconSource, style: tmp.cardImageApplication };
              const items3 = [closure_6(analyticsLocations(tmp3[11]), obj3), ,];
              const obj4 = { style: tmp.ellipseGroup, children: null };
              const obj5 = { style: tmp.ellipse };
              const items4 = [closure_6(View, obj5), ,];
              const obj6 = { style: tmp.ellipse };
              items4[1] = closure_6(View, obj6);
              const obj7 = { style: tmp.ellipse };
              items4[2] = closure_6(View, obj7);
              obj4.children = items4;
              items3[1] = closure_7(View, obj4);
              const obj8 = { size: tmp5(tmp3[12]).AvatarSizes.LARGE_48, user: stateFromStores, guildId: "Array" };
              items3[2] = closure_6(tmp5(tmp3[12]).Avatar, obj8);
              obj2.children = items3;
              tmp11Result = closure_7(View, obj2);
            }
            const items5 = [tmp11Result, ,];
            const obj9 = { style: tmp.cardContent, children: null };
            const obj10 = {
              variant: "heading-md/semibold",
              color: "mobile-text-heading-primary",
              style: tmp.cardText,
              children: null,
            };
            const intl = tmp5(tmp3[10]).intl;
            const obj11 = { gameName: connectionApp.name };
            obj10.children = intl.formatToPlainString(tmp5(tmp3[10]).t.hUbQT2, obj11);
            const items6 = [closure_6(tmp5(tmp3[9]).Text, obj10)];
            const obj12 = { variant: "text-sm/medium", color: "text-default", style: tmp.cardText, children: null };
            const intl2 = tmp5(tmp3[10]).intl;
            obj12.children = intl2.string(tmp5(tmp3[10]).t["JKqu+4"]);
            items6[1] = closure_6(tmp5(tmp3[9]).Text, obj12);
            obj9.children = items6;
            items5[1] = closure_7(View, obj9);
            const obj13 = { variant: "secondary", size: "md", text: null, onPress: null, icon: null };
            const intl3 = tmp5(tmp3[10]).intl;
            obj13.text = intl3.string(tmp5(tmp3[10]).t.jynBQ5);
            obj13.onPress = tmp7;
            obj13.icon = closure_6(tmp5(tmp3[14]).ExperimentalGameControllerLinkIcon, { size: "sm" });
            items5[2] = closure_6(tmp5(tmp3[13]).Button, obj13);
            obj1.children = items5;
            items2[1] = closure_7(View, obj1);
            obj.children = items2;
            return closure_7(View, obj);
          }
        }
      }
    }
  }
  return null;
}
