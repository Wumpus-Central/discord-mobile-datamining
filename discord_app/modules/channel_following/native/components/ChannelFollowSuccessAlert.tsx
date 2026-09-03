// discord_app/modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import componentDidMountDefault from "../../../../components_native/common/Alert.tsx";
import { Image } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { AccessibilityAnnouncer } from "../../../../design/shared.tsx";

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
  },
];
let closure_9 = createCacheKey.createStyles({
  text: { marginTop: 16, lineHeight: 20, textAlign: "center" },
  header: { textAlign: "center" },
  image: { alignSelf: "center", marginTop: -72, marginBottom: 16, width: "100%", resizeMode: "contain" },
});
const result = require("set").fileFinishedImporting(
  "modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx",
);

export default function ChannelFollowSuccessAlert(arg0) {
  const tmp = callback3();
  let obj = AccessibilityAnnouncer;
  const tmp6 = obj.isThemeDark(useThemeDefault()) ? items1 : items;
  _require = tmp6;
  let tmp5Result = tmp5(7195);
  items = [tmp6];
  const stableMemo = tmp5Result.useStableMemo(() => closure_1_1(closure_1_2[14]).sample(closure_0), items);
  tmp5Result = tmp5(7195);
  const stableMemo1 = tmp5Result.useStableMemo(() => callback(table[14]).sample(closure_8), []);
  obj = {};
  const tmp2 = importDefault;
  const tmp4 = useThemeDefault();
  const merged = Object.assign(arg0);
  const intl = tmp5(1233).intl;
  obj.confirmText = intl.string(require("../../../../intl/index.native.tsx").t["+IrDzN"]);
  obj = { source: stableMemo, style: tmp.image };
  items1 = [callback(Image, obj), ,];
  const tmp2Result = componentDidMountDefault;
  items1[1] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, {
    style: tmp.header,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: stableMemo1(),
  });
  const obj2 = { style: tmp.text, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = tmp5(1233).intl;
  obj2[3] = intl2.string(require("../../../../intl/index.native.tsx").t["2QbSea"]);
  items1[2] = callback(require("../../../../design/components/Text/native/Text.tsx").Text, obj2);
  obj.children = items1;
  return callback2(tmp2Result, obj);
}
