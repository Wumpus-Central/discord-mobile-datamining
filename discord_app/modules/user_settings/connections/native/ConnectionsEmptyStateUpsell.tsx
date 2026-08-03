// === Module 14009: EmptyStateCard ===

// Module 14009 (EmptyStateCard)
import useSafeAreaInsets from "useSafeAreaInsets";
import { View } from "Text";
import { AnalyticsLocations } from "ME";
import jsxProd from "getSystemLocale";
import createCacheKey from "createCacheKey";

let closure_6;
let error;
const require = arg1;
function EmptyStateCard(platform) {
  platform = platform.platform;
  let importDefault;
  let connectionBackgroundColor;
  const tmp = callback3();
  const tmp3 = importDefault(connectionBackgroundColor[6])();
  importDefault = tmp3;
  const items = [platform];
  const callback = React.useCallback(() => {
    let obj = { platformType: platform.type, location: outer1_5.CONNECTIONS_EMPTY_STATE };
    _undefined(connectionBackgroundColor[7])(obj);
    obj = { platformType: platform.type };
    const result = platform(connectionBackgroundColor[8]).trackEmptyStateCardClicked(obj);
  }, items);
  let obj = platform(connectionBackgroundColor[9]);
  connectionBackgroundColor = obj.getConnectionBackgroundColor(platform.type);
  const items1 = [connectionBackgroundColor, platform.icon.darkPNG, platform.icon.lightPNG, platform.icon.whitePNG, tmp3];
  const memo = React.useMemo(() => {
    if (null != connectionBackgroundColor) {
      let whitePNG = platform.icon.whitePNG;
    } else {
      const icon = platform.icon;
      whitePNG = platform(connectionBackgroundColor[11]).isThemeDark(c1) ? icon.darkPNG : icon.lightPNG;
      const tmpResult = platform(connectionBackgroundColor[11]);
    }
    return platform(connectionBackgroundColor[10]).makeSource(whitePNG);
  }, items1);
  obj = { onPress: callback, style: tmp.card, border: "strong", children: null };
  const items2 = [tmp.iconContainer, ];
  let tmp10 = null != platform.color;
  if (tmp10) {
    obj = { backgroundColor: null };
    obj[0] = connectionBackgroundColor;
    tmp10 = obj;
  }
  items2[1] = tmp10;
  obj[3] = closure_6(View, { style: items2, children: closure_6(platform(connectionBackgroundColor[13]).Icon, obj2) });
  return closure_6(platform(connectionBackgroundColor[12]).Card, obj);
}
function OtherConnectionsCard(count) {
  const callback = React.useCallback(() => {
    callback2(paths[14]).openLazy(callback(paths[16])(paths[15], paths.paths), "AddConnection");
  }, []);
  let obj = { onPress: callback, style: callback3().card, border: "strong", children: null };
  obj = { variant: "text-md/medium", color: "interactive-text-default", children: null };
  obj[2] = "+" + count.count;
  obj[3] = callback(require(4189) /* Text */.Text, obj);
  return callback(require(5226) /* PressableCard */.Card, obj);
}
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles(() => {
  let obj = { container: { flex: 1, alignItems: "center" }, content: { flex: 1, width: "100%", maxWidth: 260, alignItems: "center", justifyContent: "center" }, card: { flex: 1, maxHeight: 76, maxWidth: 76, aspectRatio: 1, alignItems: "center", justifyContent: "center", padding: 12 }, textContainer: { marginTop: 32 }, text: { textAlign: "center" }, iconContainer: null, icon: null };
  obj = { flex: 1, maxHeight: 52, maxWidth: 52, aspectRatio: 1, borderRadius: importDefault(712).radii.round, alignItems: "center", justifyContent: "center", padding: 8 };
  obj[5] = obj;
  obj[6] = { flex: 1, aspectRatio: 1 };
  return obj;
});
let result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/ConnectionsEmptyStateUpsell.tsx");

export default function ConnectionsEmptyStateUpsell() {
  const tmp = callback3();
  let obj = emptyStatePlatforms(5764);
  emptyStatePlatforms = obj.useEmptyStatePlatforms();
  const items = [emptyStatePlatforms];
  const memo = React.useMemo(() => emptyStatePlatforms.slice(0, 3), items);
  const items1 = [emptyStatePlatforms];
  const memo1 = React.useMemo(() => emptyStatePlatforms.slice(3, 5), items1);
  obj = { style: null, children: null };
  const items2 = [tmp.container, ];
  obj = { paddingBottom: importDefault(1581)().bottom };
  items2[1] = obj;
  obj[0] = items2;
  const obj1 = { style: tmp.content, children: null };
  const obj2 = { spacing: 16, direction: "vertical", align: "center", style: tmp.textContainer, children: null };
  const obj3 = { spacing: 16, justify: "center", direction: "horizontal", children: null };
  obj3[3] = memo.map((platform) => callback(closure_9, { platform }, platform.type));
  const items3 = [callback(emptyStatePlatforms(4602).Stack, obj3), ];
  const obj4 = { spacing: 16, justify: "center", direction: "horizontal", children: null };
  const items4 = [memo1.map((platform) => callback(closure_9, { platform }, platform.type)), callback(OtherConnectionsCard, { count: emptyStatePlatforms.length - 5 })];
  obj4[3] = items4;
  items3[1] = callback2(emptyStatePlatforms(4602).Stack, obj4);
  obj2[4] = items3;
  const items5 = [callback2(emptyStatePlatforms(4602).Stack, obj2), ];
  const obj6 = { spacing: 8, align: "center", style: tmp.textContainer, children: null };
  const obj7 = { variant: "text-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = emptyStatePlatforms(1236).intl;
  obj7[3] = intl.string(emptyStatePlatforms(1236).t.JlrHXb);
  const items6 = [callback(emptyStatePlatforms(4189).Text, obj7), ];
  const obj8 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = emptyStatePlatforms(1236).intl;
  obj8[3] = intl2.string(emptyStatePlatforms(1236).t.XijaQP);
  items6[1] = callback(emptyStatePlatforms(4189).Text, obj8);
  obj6[3] = items6;
  items5[1] = callback2(emptyStatePlatforms(4602).Stack, obj6);
  obj1[1] = items5;
  obj[1] = callback2(View, obj1);
  return callback(View, obj);
};