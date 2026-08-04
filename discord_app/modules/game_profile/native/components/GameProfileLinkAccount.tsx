import noop from "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, headerText: null, card: null, cardImagesContainer: null, ellipseGroup: null, ellipse: null, cardImageApplication: null, cardContent: null, cardText: null };
createCacheKey = { gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_8 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_8 };
createCacheKey[2] = { borderRadius: require("Themes").radii.lg, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, padding: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
let obj2 = { borderRadius: require("Themes").radii.lg, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, padding: require("Themes").space.PX_16, gap: require("Themes").space.PX_16 };
createCacheKey[3] = { flexDirection: "row", gap: require("Themes").space.PX_8, alignItems: "center", alignSelf: "center" };
let obj3 = { flexDirection: "row", gap: require("Themes").space.PX_8, alignItems: "center", alignSelf: "center" };
createCacheKey[4] = { flexDirection: "row", justifyContent: "space-between", gap: require("Themes").space.PX_4 };
let obj4 = { flexDirection: "row", justifyContent: "space-between", gap: require("Themes").space.PX_4 };
createCacheKey[5] = { width: 4, height: 4, backgroundColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.3, borderRadius: require("Themes").radii.round };
let obj5 = { width: 4, height: 4, backgroundColor: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.3, borderRadius: require("Themes").radii.round };
createCacheKey[6] = { width: 48, height: 48, borderRadius: require("Themes").radii.sm };
let obj6 = { width: 48, height: 48, borderRadius: require("Themes").radii.sm };
createCacheKey[7] = { gap: require("Themes").space.PX_4, alignSelf: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: require("Themes").space.PX_24 };
createCacheKey[8] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj7 = { gap: require("Themes").space.PX_4, alignSelf: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: require("Themes").space.PX_24 };
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/game_profile/native/components/GameProfileLinkAccount.tsx");

export default function GameProfileLinkAccount(trackAction) {
  let canStartAuthorization;
  let fetched;
  let hasAlreadyLinked;
  trackAction = trackAction.trackAction;
  const analyticsLocations = trackAction.analyticsLocations;
  let startAuthorization;
  const tmp = createCacheKey();
  const tmp4 = analyticsLocations(startAuthorization[6])(trackAction.game);
  startAuthorization = tmp4.startAuthorization;
  const connectionApp = tmp4.connectionApp;
  ({ fetched, hasAlreadyLinked, canStartAuthorization } = tmp4);
  let obj = trackAction(startAuthorization[7]);
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [trackAction, startAuthorization, analyticsLocations];
  if (fetched) {
    if (null != connectionApp) {
      if (canStartAuthorization) {
        if (!hasAlreadyLinked) {
          if (null != stateFromStores) {
            const iconSource = connectionApp.getIconSource(48);
            obj = { style: null, children: null };
            obj[0] = tmp.container;
            obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: null, children: null };
            obj[2] = tmp.headerText;
            const intl4 = tmp5(tmp3[10]).intl;
            obj[3] = intl4.string(tmp5(tmp3[10]).t["VDAhr+"]);
            const items2 = [callback(tmp5(tmp3[9]).Text, obj), ];
            const obj1 = { style: null, children: null };
            obj1[0] = tmp.card;
            let tmp11Result = null;
            if (null != iconSource) {
              const obj2 = { style: null, children: null };
              obj2[0] = tmp.cardImagesContainer;
              const obj3 = { source: null, style: null };
              obj3[0] = iconSource;
              obj3[1] = tmp.cardImageApplication;
              const items3 = [tmp13(analyticsLocations(tmp3[11]), obj3), , ];
              const obj4 = { style: null, children: null };
              obj4[0] = tmp.ellipseGroup;
              const obj5 = { style: null };
              obj5[0] = tmp.ellipse;
              const items4 = [tmp13(tmp12, obj5), , ];
              const obj6 = { style: null };
              obj6[0] = tmp.ellipse;
              items4[1] = tmp13(tmp12, obj6);
              const obj7 = { style: null };
              obj7[0] = tmp.ellipse;
              items4[2] = tmp13(tmp12, obj7);
              obj4[1] = items4;
              items3[1] = tmp11(tmp12, obj4);
              const obj8 = { size: null, user: null, guildId: "disabled" };
              obj8[0] = tmp5(tmp3[12]).AvatarSizes.LARGE_48;
              obj8[1] = stateFromStores;
              items3[2] = tmp13(tmp5(tmp3[12]).Avatar, obj8);
              obj2[1] = items3;
              tmp11Result = tmp11(tmp12, obj2);
            }
            const items5 = [tmp11Result, , ];
            const obj9 = { style: null, children: null };
            obj9[0] = tmp.cardContent;
            const obj10 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: null, children: null };
            obj10[2] = tmp.cardText;
            const intl = tmp5(tmp3[10]).intl;
            const obj11 = { gameName: null };
            obj11[0] = connectionApp.name;
            obj10[3] = intl.formatToPlainString(tmp5(tmp3[10]).t.hUbQT2, obj11);
            const items6 = [callback(tmp5(tmp3[9]).Text, obj10), ];
            const obj12 = { variant: "text-sm/medium", color: "text-default", style: null, children: null };
            obj12[2] = tmp.cardText;
            const intl2 = tmp5(tmp3[10]).intl;
            obj12[3] = intl2.string(tmp5(tmp3[10]).t["JKqu+4"]);
            items6[1] = callback(tmp5(tmp3[9]).Text, obj12);
            obj9[1] = items6;
            items5[1] = closure_7(View, obj9);
            const obj13 = { variant: "secondary", size: "md", text: null, onPress: null, icon: null };
            const intl3 = tmp5(tmp3[10]).intl;
            obj13[2] = intl3.string(tmp5(tmp3[10]).t.jynBQ5);
            obj13[3] = tmp7;
            obj13[4] = callback(tmp5(tmp3[14]).ExperimentalGameControllerLinkIcon, { size: "sm" });
            items5[2] = callback(tmp5(tmp3[13]).Button, obj13);
            obj1[1] = items5;
            items2[1] = closure_7(View, obj1);
            obj[1] = items2;
            return closure_7(View, obj);
          }
        }
      }
    }
  }
  return null;
};