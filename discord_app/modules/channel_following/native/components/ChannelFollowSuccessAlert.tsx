import "noop";
import { Image } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let items = [require("registerAsset"), require("registerAsset"), require("registerAsset")];
let items1 = [require("registerAsset"), require("registerAsset"), require("registerAsset")];
const items2 = [
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["w2o/60"]);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.FiAvKg);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.vKUFek);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.veQl5T);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Pxb7BR);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["W03w++"]);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["95HTb5"]);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["+XFelz"]);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.hedHel);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jgC65t);
  }
];
let closure_9 = createCacheKey.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" }, image: { alignSelf: "center", marginTop: -72, marginBottom: 16, width: "100%", resizeMode: "contain" } });
const result = require("jsxProd").fileFinishedImporting("modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx");

export default function ChannelFollowSuccessAlert(arg0) {
  const tmp = callback3();
  let obj = require(4101) /* AccessibilityAnnouncer */;
  const tmp6 = obj.isThemeDark(importDefault(4191)()) ? items1 : items;
  require = tmp6;
  let tmp5Result = tmp5(6801);
  items = [tmp6];
  const stableMemo = tmp5Result.useStableMemo(() => outer1_1(outer1_2[14]).sample(closure_0), items);
  tmp5Result = tmp5(6801);
  const stableMemo1 = tmp5Result.useStableMemo(() => callback(table[14]).sample(closure_8), []);
  obj = {};
  const tmp2 = importDefault;
  const tmp4 = importDefault(4191)();
  const merged = Object.assign(arg0);
  const intl = tmp5(1236).intl;
  obj.confirmText = intl.string(require(1236) /* getSystemLocale */.t["+IrDzN"]);
  obj = { source: stableMemo, style: tmp.image };
  items1 = [callback(Image, obj), , ];
  const obj1 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  obj1[3] = stableMemo1();
  items1[1] = callback(require(4251) /* Text */.Text, obj1);
  const obj2 = { style: tmp.text, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = tmp5(1236).intl;
  obj2[3] = intl2.string(require(1236) /* getSystemLocale */.t["2QbSea"]);
  items1[2] = callback(require(4251) /* Text */.Text, obj2);
  obj.children = items1;
  return callback2(importDefault(4684), obj);
};