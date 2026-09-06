// === Module 14959: ConnectionsEmptyStateUpsell ===

// Module 14959 (ConnectionsEmptyStateUpsell)
import nativeDefault from "native" /* 576 */;
import AvatarUtils from "AvatarUtils" /* 1396 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import shared from "shared" /* 4411 */;
import Text_Text from "Text/Text" /* 4556 */;
import Card from "Card" /* 5607 */;
import authorizeConnectionDefault from "authorizeConnection" /* 9252 */;
import ConnectionsTracking from "ConnectionsTracking" /* 14960 */;
import noop from "module_19" /* 19 */;

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
    let obj = { platformType: platform.type, location: AnalyticsLocations.CONNECTIONS_EMPTY_STATE };
    authorizeConnectionDefault(obj);
    obj = { platformType: platform.type };
    const result = ConnectionsTracking.trackEmptyStateCardClicked(obj);
  }, items);
  let obj = platform(connectionBackgroundColor[9]);
  connectionBackgroundColor = obj.getConnectionBackgroundColor(platform.type);
  const items1 = [connectionBackgroundColor, platform.icon.darkPNG, platform.icon.lightPNG, platform.icon.whitePNG, tmp3];
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
  obj = { onPress: callback, style: tmp.card, border: "strong", children: null };
  const items2 = [tmp.iconContainer, ];
  let tmp10 = null != platform.color;
  if (tmp10) {
    obj = { backgroundColor: connectionBackgroundColor };
    tmp10 = obj;
  }
  const obj1 = { style: items2, children: closure_6(platform(connectionBackgroundColor[13]).Icon, { style: tmp.icon, source: memo, resizeMode: "contain", disableColor: true, accessibilityLabel: platform.name }) };
  items2[1] = tmp10;
  obj.children = closure_6(View, obj1);
  return closure_6(platform(connectionBackgroundColor[12]).Card, obj);
}
function OtherConnectionsCard(count) {
  const callback = noop.useCallback(() => {
    require("ActionSheetActionCreators").openLazy(require("asyncRequireImpl")(paths[15], paths.paths), "AddConnection");
  }, []);
  let obj = { onPress: callback, style: closure_8().card, border: "strong", children: null };
  obj = { variant: "text-md/medium", color: "interactive-text-default", children: "+" + count.count };
  obj.children = timestampProducer(Text_Text.Text, obj);
  return timestampProducer(Card.Card, obj);
}
const View = fn(17).View;
const AnalyticsLocations = fn(1074).AnalyticsLocations;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles(() => {
  let obj = { container: { flex: 1, alignItems: "center" }, content: { flex: 1, width: "100%", maxWidth: 260, alignItems: "center", justifyContent: "center" }, card: { flex: 1, maxHeight: 76, maxWidth: 76, aspectRatio: 1, alignItems: "center", justifyContent: "center", padding: 12 }, textContainer: { marginTop: 32 }, text: { textAlign: "center" }, iconContainer: null, icon: null };
  obj = { flex: 1, maxHeight: 52, maxWidth: 52, aspectRatio: 1, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", padding: 8 };
  obj.iconContainer = obj;
  obj.icon = { flex: 1, aspectRatio: 1 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsEmptyStateUpsell.tsx");

export default function ConnectionsEmptyStateUpsell() {
  const tmp = closure_8();
  let obj = emptyStatePlatforms(7503);
  emptyStatePlatforms = obj.useEmptyStatePlatforms();
  const items = [emptyStatePlatforms];
  const memo = noop.useMemo(() => emptyStatePlatforms.slice(0, 3), items);
  const items1 = [emptyStatePlatforms];
  const memo1 = noop.useMemo(() => emptyStatePlatforms.slice(3, 5), items1);
  obj = { style: null, children: null };
  const items2 = [tmp.container, ];
  obj = { paddingBottom: useSafeAreaInsetsDefault().bottom };
  items2[1] = obj;
  obj.style = items2;
  const obj1 = { style: tmp.content, children: null };
  const obj2 = { spacing: 16, direction: "vertical", align: "center", style: tmp.textContainer, children: null };
  const items3 = [closure_6(emptyStatePlatforms(4973).Stack, { spacing: 16, justify: "center", direction: "horizontal", children: memo.map((platform) => closure_1_6(EmptyStateCard, { platform }, platform.type)) }), ];
  const obj4 = { spacing: 16, justify: "center", direction: "horizontal", children: null };
  const items4 = [memo1.map((platform) => closure_1_6(EmptyStateCard, { platform }, platform.type)), closure_6(OtherConnectionsCard, { count: emptyStatePlatforms.length - 5 })];
  obj4.children = items4;
  items3[1] = closure_7(emptyStatePlatforms(4973).Stack, obj4);
  obj2.children = items3;
  const items5 = [closure_7(emptyStatePlatforms(4973).Stack, obj2), ];
  const obj6 = { spacing: 8, align: "center", style: tmp.textContainer, children: null };
  const obj7 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = emptyStatePlatforms(1114).intl;
  obj7.children = intl.string(emptyStatePlatforms(1114).t.JlrHXb);
  const items6 = [closure_6(emptyStatePlatforms(4556).Text, obj7), ];
  const obj8 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = emptyStatePlatforms(1114).intl;
  obj8.children = intl2.string(emptyStatePlatforms(1114).t.XijaQP);
  items6[1] = closure_6(emptyStatePlatforms(4556).Text, obj8);
  obj6.children = items6;
  items5[1] = closure_7(emptyStatePlatforms(4973).Stack, obj6);
  obj1.children = items5;
  obj.children = closure_7(View, obj1);
  return closure_6(View, obj);
};