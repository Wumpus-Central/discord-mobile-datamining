// === Module 10890: items ===

// Module 10890 (items)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import useThemeDefault from "useTheme" /* 4380 */;
import componentDidMountDefault from "componentDidMount" /* 4899 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let items = [require("registerAsset"), require("registerAsset"), require("registerAsset")];
let items1 = [require("registerAsset"), require("registerAsset"), require("registerAsset")];
const items2 = [
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["w2o/60"]);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.FiAvKg);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.vKUFek);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.veQl5T);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Pxb7BR);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["W03w++"]);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["95HTb5"]);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+XFelz"]);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.hedHel);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jgC65t);
  }
];
let closure_9 = createCacheKey.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" }, image: { alignSelf: "center", marginTop: -72, marginBottom: 16, width: "100%", resizeMode: "contain" } });
const result = require("set").fileFinishedImporting("modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx");

export default function ChannelFollowSuccessAlert(arg0) {
  const tmp = callback3();
  let obj = _require(1363);
  const tmp6 = obj.isThemeDark(useThemeDefault()) ? items1 : items;
  _require = tmp6;
  let tmp5Result = tmp5(7119);
  items = [tmp6];
  const stableMemo = tmp5Result.useStableMemo(() => closure_1_1(closure_1_2[14]).sample(closure_0), items);
  tmp5Result = tmp5(7119);
  const stableMemo1 = tmp5Result.useStableMemo(() => callback(table[14]).sample(closure_8), []);
  obj = {};
  const tmp2 = importDefault;
  const tmp4 = useThemeDefault();
  const merged = Object.assign(arg0);
  const intl = tmp5(1236).intl;
  obj.confirmText = intl.string(_require(1236).t["+IrDzN"]);
  obj = { source: stableMemo, style: tmp.image };
  items1 = [callback(Image, obj), , ];
  const tmp2Result = componentDidMountDefault;
  items1[1] = callback(_require(4441).Text, { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stableMemo1() });
  const obj2 = { style: tmp.text, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = tmp5(1236).intl;
  obj2[3] = intl2.string(_require(1236).t["2QbSea"]);
  items1[2] = callback(_require(4441).Text, obj2);
  obj.children = items1;
  return callback2(tmp2Result, obj);
};