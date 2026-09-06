// === Module 11333: ChannelFollowSuccessAlert ===

// Module 11333 (ChannelFollowSuccessAlert)
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1114 */;
import useThemeDefault from "useTheme" /* 4495 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let items = [fn(11334), fn(11335), fn(11336)];
let items1 = [fn(11337), fn(11338), fn(11339)];
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
  }
];
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" }, image: { alignSelf: "center", marginTop: -72, marginBottom: 16, width: "100%", resizeMode: "contain" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx");

export default function ChannelFollowSuccessAlert(arg0) {
  const tmp = closure_9();
  let obj = require("shared");
  const tmp6 = obj.isThemeDark(useThemeDefault()) ? items1 : items;
  _require = tmp6;
  let tmp5Result = tmp5(7440);
  items = [tmp6];
  const stableMemo = tmp5Result.useStableMemo(() => _modDef12.sample(closure_0), items);
  tmp5Result = tmp5(7440);
  const stableMemo1 = tmp5Result.useStableMemo(() => _modDef12.sample(items2), []);
  obj = {};
  const tmp4 = useThemeDefault();
  const merged = Object.assign(arg0);
  const intl = tmp5(1114).intl;
  obj.confirmText = intl.string(require("util").t["+IrDzN"]);
  obj = { source: stableMemo, style: tmp.image };
  items1 = [closure_4(Image, obj), , ];
  const tmp2Result = common_AlertDefault;
  items1[1] = closure_4(require("Text/Text").Text, { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stableMemo1() });
  const obj2 = { style: tmp.text, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = tmp5(1114).intl;
  obj2.children = intl2.string(require("util").t["2QbSea"]);
  items1[2] = closure_4(require("Text/Text").Text, obj2);
  obj.children = items1;
  return closure_5(tmp2Result, obj);
};