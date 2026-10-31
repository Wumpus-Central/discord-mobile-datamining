// discord_app/modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import util from "../../../../intl/index.native.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let items = [fn(11204), fn(11205), fn(11206)];
let items1 = [fn(11207), fn(11208), fn(11209)];
const items2 = [
  () => {
    const intl = util.intl;
    return intl.string(util.t["w2o/60"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.FiAvKg);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.vKUFek);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.veQl5T);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.Pxb7BR);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t["W03w++"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t["95HTb5"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t["+XFelz"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.hedHel);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.jgC65t);
  },
];
const createStyles = fn(5014);
let closure_8 = createStyles.createStyles({
  text: { marginTop: 16, lineHeight: 20, textAlign: "center" },
  header: { textAlign: "center" },
  image: { alignSelf: "center", marginTop: -72, marginBottom: 16, width: "100%", resizeMode: "contain" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx");

export default function ChannelFollowSuccessAlert(arg0) {
  const tmp = closure_8();
  const tmp4 = useThemeDefault();
  const tmp6 = require("shared").isThemeDark(tmp4) ? items1 : items;
  _require = tmp6;
  const obj = require("shared");
  items = [tmp6];
  const stableMemo = require("areHookInputsEqual").useStableMemo(() => _modDef12.sample(closure_0), items);
  const tmp5Result = require("areHookInputsEqual");
  const stableMemo1 = require("areHookInputsEqual").useStableMemo(() => _modDef12.sample(items2), []);
  const obj2 = {};
  const tmp5Result2 = require("areHookInputsEqual");
  const merged = Object.assign(arg0);
  const intl = tmp5(1113).intl;
  obj2.confirmText = intl.string(require("util").t["+IrDzN"]);
  items1 = [closure_3(FastImageDefault, { source: stableMemo, style: tmp.image }), ,];
  const obj3 = { source: stableMemo, style: tmp.image };
  const tmp2Result = common_AlertDefault;
  items1[1] = closure_3(require("Text/Text").Text, {
    style: tmp.header,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: stableMemo1(),
  });
  const obj5 = { style: tmp.text, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = tmp5(1113).intl;
  obj5.children = intl2.string(require("util").t["2QbSea"]);
  items1[2] = closure_3(require("Text/Text").Text, obj5);
  obj2.children = items1;
  return closure_4(tmp2Result, obj2);
}
