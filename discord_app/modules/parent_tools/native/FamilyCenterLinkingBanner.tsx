// === Module 14338: FamilyCenterLinkingBannerParentContent ===

// Module 14338 (FamilyCenterLinkingBannerParentContent)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2336 */;
import Text from "Text" /* 4739 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7660 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11146 */;
import FamilyCenterTeenQRCodeButtonInner from "FamilyCenterTeenQRCodeButtonInner" /* 14301 */;
import registerAssetDefault from "registerAsset" /* 14339 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
function FamilyCenterLinkingBannerParentContent() {
  let obj = { style: callback4().container, children: null };
  obj = { index: 1, header: null, description: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(messagesProxyDefault["7xxAni"]);
  const intl2 = getSystemLocale.intl;
  obj[2] = intl2.string(messagesProxyDefault["1M9So2"]);
  const items = [callback(FamilyCenterLinkingInstructionsRow, obj), , , ];
  obj = { index: 2, header: null, description: null };
  const intl3 = getSystemLocale.intl;
  obj[1] = intl3.string(messagesProxyDefault["AXgx+a"]);
  const intl4 = getSystemLocale.intl;
  obj[2] = intl4.string(messagesProxyDefault.GzMFnb);
  items[1] = callback(FamilyCenterLinkingInstructionsRow, obj);
  obj1 = { index: 3, header: null, description: null, isLast: true };
  const intl5 = getSystemLocale.intl;
  obj1[1] = intl5.string(messagesProxyDefault.MZn1tG);
  const intl6 = getSystemLocale.intl;
  obj1[2] = intl6.string(messagesProxyDefault["8rLBxD"]);
  items[2] = callback(FamilyCenterLinkingInstructionsRow, obj1);
  items[3] = callback(FamilyCenterTeenQRCodeButtonInner.FamilyCenterParentQRCodeButton, {});
  obj[1] = items;
  return callback2(closure_3, obj);
}
function FamilyCenterLinkingBannerTeenContent() {
  return callback(closure_3, { style: callback5().container, children: callback(FamilyCenterTeenQRCodeButtonInner.FamilyCenterTeenQRCodeButton, {}) });
}
function FamilyCenterLinkingInstructionsRow(arg0) {
  ({ header, description, index, isLast } = arg0);
  const tmp = callback6();
  let obj = { style: tmp.row, children: null };
  obj = { style: tmp.circle, children: callback(Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: index }) };
  const items = [callback(closure_3, obj), ];
  const items1 = [tmp.rowContent, ];
  let gap = null;
  if (!isLast) {
    gap = tmp.gap;
  }
  obj = { style: items1, children: null };
  items1[1] = gap;
  const items2 = [callback(Text.Text, { variant: "heading-sm/bold", children: header }), callback(Text.Text, { variant: "text-sm/medium", color: "text-muted", children: description })];
  obj[1] = items2;
  items[1] = closure_6(closure_3, obj);
  obj[1] = items;
  return closure_6(closure_3, obj);
}
noopAll;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, content: null, art: null, header: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, marginTop: ThemesDefault.space.PX_16, paddingTop: 0, paddingBottom: ThemesDefault.space.PX_16, alignItems: "center", borderRadius: ThemesDefault.radii.md, elevation: 2, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: ThemesDefault.space.PX_16 };
let obj1 = { padding: ThemesDefault.space.PX_16 };
createCacheKey[2] = { width: "100%", height: 175, marginBottom: ThemesDefault.space.PX_12 };
const obj2 = { width: "100%", height: 175, marginBottom: ThemesDefault.space.PX_12 };
createCacheKey[3] = { marginBottom: ThemesDefault.space.PX_8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj4 = { container: null };
const obj3 = { marginBottom: ThemesDefault.space.PX_8 };
obj4[0] = { marginTop: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16, width: "100%" };
let closure_8 = createCacheKey.createStyles(obj4);
createCacheKey = { container: null };
const obj5 = { marginTop: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_16, width: "100%" };
createCacheKey[0] = { width: "100%", paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const obj8 = { row: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, gap: { marginBottom: 12 }, circle: null, rowContent: null };
createCacheKey = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", width: 32, height: 32, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_NORMAL };
obj8[2] = createCacheKey;
obj8[3] = { marginLeft: 12, flex: 1 };
let closure_12 = createCacheKey.createStyles(obj8);
const obj7 = { width: "100%", paddingHorizontal: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkingBanner.tsx");

export default function FamilyCenterLinkingBanner() {
  const tmp = callback3();
  let obj = useAgeSpecificText;
  const intl = getSystemLocale.intl;
  const tmp2 = useIsInAdultAgeGroupDefault();
  const intl2 = getSystemLocale.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(messagesProxyDefault.zUCWEL), intl2.string(messagesProxyDefault.B0NPbp));
  obj1 = useAgeSpecificText;
  const intl3 = getSystemLocale.intl;
  const stringResult = intl.string(messagesProxyDefault.zUCWEL);
  const intl4 = getSystemLocale.intl;
  obj = { style: tmp.container, children: null };
  obj = { source: null, style: null, resizeMethod: "resize" };
  const ageSpecificText1 = obj1.useAgeSpecificText(intl3.format(messagesProxyDefault.yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" }), intl4.string(messagesProxyDefault.JsAEDi));
  obj[0] = registerAssetDefault;
  obj[1] = tmp.art;
  const items = [callback(closure_4, obj), , ];
  obj1 = { style: tmp.content, children: null };
  const items1 = [callback(Text.Text, { style: tmp.header, variant: "heading-lg/semibold", children: ageSpecificText }), callback(Text.Text, { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 })];
  obj1[1] = items1;
  items[1] = callback2(closure_3, obj1);
  items[2] = callback(tmp2 ? FamilyCenterLinkingBannerParentContent : FamilyCenterLinkingBannerTeenContent, {});
  obj[1] = items;
  return callback2(closure_3, obj);
};