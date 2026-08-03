import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
function FamilyCenterLinkingBannerParentContent() {
  let obj = { style: callback3().container, children: null };
  obj = { index: 1, header: null, description: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(importDefault(2225)["7xxAni"]);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl2.string(importDefault(2225)["1M9So2"]);
  const items = [callback(FamilyCenterLinkingInstructionsRow, obj), , , ];
  obj = { index: 2, header: null, description: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl3.string(importDefault(2225)["AXgx+a"]);
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl4.string(importDefault(2225).GzMFnb);
  items[1] = callback(FamilyCenterLinkingInstructionsRow, obj);
  const obj1 = { index: 3, header: null, description: null, isLast: true };
  const intl5 = require(1236) /* getSystemLocale */.intl;
  obj1[1] = intl5.string(importDefault(2225).MZn1tG);
  const intl6 = require(1236) /* getSystemLocale */.intl;
  obj1[2] = intl6.string(importDefault(2225)["8rLBxD"]);
  items[2] = callback(FamilyCenterLinkingInstructionsRow, obj1);
  items[3] = callback(require(13926) /* FamilyCenterTeenQRCodeButtonInner */.FamilyCenterParentQRCodeButton, {});
  obj[1] = items;
  return callback2(closure_3, obj);
}
function FamilyCenterLinkingBannerTeenContent() {
  return callback(closure_3, { style: createCacheKey().container, children: callback(require(13926) /* FamilyCenterTeenQRCodeButtonInner */.FamilyCenterTeenQRCodeButton, {}) });
}
function FamilyCenterLinkingInstructionsRow(arg0) {
  let description;
  let header;
  let index;
  let isLast;
  ({ header, description, index, isLast } = arg0);
  const tmp = callback4();
  let obj = { style: tmp.row, children: null };
  obj = { style: tmp.circle, children: callback(require(4189) /* Text */.Text, { variant: "heading-md/semibold", color: "text-brand", children: index }) };
  const items = [callback(closure_3, obj), ];
  const items1 = [tmp.rowContent, ];
  let gap = null;
  if (!isLast) {
    gap = tmp.gap;
  }
  obj = { style: items1, children: null };
  items1[1] = gap;
  const items2 = [callback(require(4189) /* Text */.Text, { variant: "heading-sm/bold", children: header }), callback(require(4189) /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", children: description })];
  obj[1] = items2;
  items[1] = closure_6(closure_3, obj);
  obj[1] = items;
  return closure_6(closure_3, obj);
}
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, content: null, art: null, header: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, marginTop: require("Themes").space.PX_16, paddingTop: 0, paddingBottom: require("Themes").space.PX_16, alignItems: "center", borderRadius: require("Themes").radii.md, elevation: 2, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: require("Themes").space.PX_16 };
let obj1 = { padding: require("Themes").space.PX_16 };
createCacheKey[2] = { width: "100%", height: 175, marginBottom: require("Themes").space.PX_12 };
const obj2 = { width: "100%", height: 175, marginBottom: require("Themes").space.PX_12 };
createCacheKey[3] = { marginBottom: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj4 = { container: null };
const obj3 = { marginBottom: require("Themes").space.PX_8 };
obj4[0] = { marginTop: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16, width: "100%" };
let closure_8 = createCacheKey.createStyles(obj4);
createCacheKey = { container: null };
const obj5 = { marginTop: require("Themes").space.PX_8, paddingHorizontal: require("Themes").space.PX_16, width: "100%" };
createCacheKey[0] = { width: "100%", paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj8 = { row: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, gap: { marginBottom: 12 }, circle: null, rowContent: null };
createCacheKey = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", width: 32, height: 32, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL };
obj8[2] = createCacheKey;
obj8[3] = { marginLeft: 12, flex: 1 };
let closure_12 = createCacheKey.createStyles(obj8);
const obj7 = { width: "100%", paddingHorizontal: require("Themes").space.PX_16 };
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkingBanner.tsx");

export default function FamilyCenterLinkingBanner() {
  const tmp = createCacheKey();
  let obj = require(11127) /* useAgeSpecificText */;
  const intl = require(1236) /* getSystemLocale */.intl;
  const tmp2 = importDefault(6259)();
  const intl2 = require(1236) /* getSystemLocale */.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(importDefault(2225).zUCWEL), intl2.string(importDefault(2225).B0NPbp));
  let obj1 = require(11127) /* useAgeSpecificText */;
  const intl3 = require(1236) /* getSystemLocale */.intl;
  const stringResult = intl.string(importDefault(2225).zUCWEL);
  const intl4 = require(1236) /* getSystemLocale */.intl;
  obj = { style: tmp.container, children: null };
  obj = { source: null, style: null, resizeMethod: "resize" };
  const ageSpecificText1 = obj1.useAgeSpecificText(intl3.format(importDefault(2225).yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" }), intl4.string(importDefault(2225).JsAEDi));
  obj[0] = importDefault(13964);
  obj[1] = tmp.art;
  const items = [callback(closure_4, obj), , ];
  obj1 = { style: tmp.content, children: null };
  const items1 = [callback(require(4189) /* Text */.Text, { style: tmp.header, variant: "heading-lg/semibold", children: ageSpecificText }), callback(require(4189) /* Text */.Text, { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 })];
  obj1[1] = items1;
  items[1] = callback2(closure_3, obj1);
  items[2] = callback(tmp2 ? FamilyCenterLinkingBannerParentContent : FamilyCenterLinkingBannerTeenContent, {});
  obj[1] = items;
  return callback2(closure_3, obj);
};