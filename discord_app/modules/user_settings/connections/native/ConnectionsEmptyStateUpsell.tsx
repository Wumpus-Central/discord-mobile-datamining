// discord_app/modules/user_settings/connections/native/ConnectionsEmptyStateUpsell.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import shared from "../../../../design/shared.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import authorizeConnectionDefault from "../../../connections/authorizeConnection.native.tsx";
import ConnectionsTracking from "ConnectionsTracking.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function EmptyStateCard(platform) {
  platform = platform.platform;
  importDefault = undefined;
  let connectionBackgroundColor;
  const tmp = closure_8();
  const tmp3 = require("useTheme")();
  importDefault = tmp3;
  const items = [platform];
  const callback = noop.useCallback(() => {
    authorizeConnectionDefault({ platformType: platform.type, location: AnalyticsLocations.CONNECTIONS_EMPTY_STATE });
    const result = ConnectionsTracking.trackEmptyStateCardClicked({ platformType: platform.type });
  }, items);
  connectionBackgroundColor = platform(connectionBackgroundColor[9]).getConnectionBackgroundColor(platform.type);
  const items1 = [
    connectionBackgroundColor,
    platform.icon.darkPNG,
    platform.icon.lightPNG,
    platform.icon.whitePNG,
    tmp3,
  ];
  const memo = noop.useMemo(() => {
    if (null != connectionBackgroundColor) {
      let whitePNG = platform.icon.whitePNG;
    } else {
      const icon = platform.icon;
      whitePNG = shared.isThemeDark(closure_1) ? icon.darkPNG : icon.lightPNG;
      const tmpResult = shared;
    }
    return AvatarUtils.makeSource(whitePNG);
  }, items1);
  const obj2 = { onPress: callback, style: tmp.card, border: "strong", children: null };
  const items2 = [tmp.iconContainer];
  let tmp10 = null != platform.color;
  if (tmp10) {
    const obj3 = { backgroundColor: connectionBackgroundColor };
    tmp10 = obj3;
  }
  const obj4 = {
    style: items2,
    children: closure_6(platform(connectionBackgroundColor[13]).Icon, {
      style: tmp.icon,
      source: memo,
      resizeMode: "contain",
      disableColor: true,
      accessibilityLabel: platform.name,
    }),
  };
  items2[1] = tmp10;
  obj2.children = closure_6(View, obj4);
  return closure_6(platform(connectionBackgroundColor[12]).Card, obj2);
}
function OtherConnectionsCard(count) {
  const callback = noop.useCallback(() => {
    require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[15], paths.paths), "AddConnection");
  }, []);
  const obj = { onPress: callback, style: closure_8().card, border: "strong", children: null };
  const tmp = closure_8();
  obj.children = timestampProducer(Text_Text.Text, {
    variant: "text-md/medium",
    color: "interactive-text-default",
    children: "+" + count.count,
  });
  return timestampProducer(Card.Card, obj);
}
const View = fn(17).View;
const AnalyticsLocations = fn(1074).AnalyticsLocations;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let closure_8 = createStyles.createStyles(() => {
  const obj = {
    container: { flex: 1, alignItems: "center" },
    content: { flex: 1, width: "100%", maxWidth: 260, alignItems: "center", justifyContent: "center" },
    card: {
      flex: 1,
      maxHeight: 76,
      maxWidth: 76,
      aspectRatio: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 12,
    },
    textContainer: { marginTop: 32 },
    text: { textAlign: "center" },
    iconContainer: {
      flex: 1,
      maxHeight: 52,
      maxWidth: 52,
      aspectRatio: 1,
      borderRadius: nativeDefault.radii.round,
      alignItems: "center",
      justifyContent: "center",
      padding: 8,
    },
    icon: { flex: 1, aspectRatio: 1 },
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsEmptyStateUpsell.tsx");

export default function ConnectionsEmptyStateUpsell() {
  const tmp = closure_8();
  emptyStatePlatforms = emptyStatePlatforms(7743).useEmptyStatePlatforms();
  const items = [emptyStatePlatforms];
  const memo = noop.useMemo(() => emptyStatePlatforms.slice(0, 3), items);
  const items1 = [emptyStatePlatforms];
  const memo1 = noop.useMemo(() => emptyStatePlatforms.slice(3, 5), items1);
  const obj2 = { style: null, children: null };
  const items2 = [tmp.container];
  const obj = emptyStatePlatforms(7743);
  items2[1] = { paddingBottom: useSafeAreaInsetsDefault().bottom };
  obj2.style = items2;
  const obj4 = { style: tmp.content, children: null };
  const obj5 = { spacing: 16, direction: "vertical", align: "center", style: tmp.textContainer, children: null };
  const obj3 = { paddingBottom: useSafeAreaInsetsDefault().bottom };
  const items3 = [
    closure_6(emptyStatePlatforms(5184).Stack, {
      spacing: 16,
      justify: "center",
      direction: "horizontal",
      children: memo.map((platform) => closure_1_6(EmptyStateCard, { platform }, platform.type)),
    }),
  ];
  const obj7 = { spacing: 16, justify: "center", direction: "horizontal", children: null };
  const items4 = [
    memo1.map((platform) => closure_1_6(EmptyStateCard, { platform }, platform.type)),
    closure_6(OtherConnectionsCard, { count: emptyStatePlatforms.length - 5 }),
  ];
  obj7.children = items4;
  items3[1] = closure_7(emptyStatePlatforms(5184).Stack, obj7);
  obj5.children = items3;
  const items5 = [closure_7(emptyStatePlatforms(5184).Stack, obj5)];
  const obj9 = { spacing: 8, align: "center", style: tmp.textContainer, children: null };
  const obj10 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = emptyStatePlatforms(1115).intl;
  obj10.children = intl.string(emptyStatePlatforms(1115).t.JlrHXb);
  const items6 = [closure_6(emptyStatePlatforms(4752).Text, obj10)];
  const obj11 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = emptyStatePlatforms(1115).intl;
  obj11.children = intl2.string(emptyStatePlatforms(1115).t.XijaQP);
  items6[1] = closure_6(emptyStatePlatforms(4752).Text, obj11);
  obj9.children = items6;
  items5[1] = closure_7(emptyStatePlatforms(5184).Stack, obj9);
  obj4.children = items5;
  obj2.children = closure_7(View, obj4);
  return closure_6(View, obj2);
}
