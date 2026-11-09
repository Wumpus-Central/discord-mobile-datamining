// === Module 19976: InterestPickedGames ===

// Module 19976 (InterestPickedGames)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5751 */;
import FastImageDefault from "FastImage" /* 5842 */;
import useGameRecordsDefault from "useGameRecords" /* 15214 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ PixelRatio: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const PX_24 = nativeDefault.space.PX_24;
const createStyles = fn(5140);
let obj2 = { container: { alignItems: "center", paddingVertical: nativeDefault.space.PX_8 }, icon: null, fallback: null };
let size = { width: PX_24, height: PX_24, borderRadius: nativeDefault.radii.sm };
obj2.icon = size;
const size1 = { width: PX_24, height: PX_24, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, alignItems: "center", justifyContent: "center" };
obj2.fallback = size1;
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickedGames.tsx");

export default function InterestPickedGames(gameIds) {
  importDefault = undefined;
  const tmp = closure_7();
  _require = tmp;
  const arr = useGameRecordsDefault(gameIds.gameIds);
  if (0 === arr.length) {
    return null;
  } else {
    const _Math = Math;
    importDefault = Math.ceil(PX_24 * closure_3.get());
    let obj = { style: tmp.container, children: null };
    let obj2 = { "aria-label": null, shape: null, size: null, gap: null, depthX: 0.25, children: null };
    const intl = require("util").intl;
    let obj3 = { games: null };
    const mapped = arr.map((name) => name.name);
    obj3.games = mapped.join(", ");
    obj2["aria-label"] = intl.formatToPlainString(tmp2(2534).z5uqej, obj3);
    obj2.shape = require("ClipView").CutoutShape.RoundedRect;
    obj2.size = PX_24;
    obj2.gap = tmp2(575).space.PX_4 / 2;
    obj2.children = arr.map((getIconURL) => {
      let iconURL = getIconURL.getIconURL(closure_1);
      if (iconURL == null) {
        iconURL = getIconURL.getCoverURL(closure_1);
      }
      if (null != iconURL) {
        const obj2 = { accessible: false, source: null, style: null, resizeMode: "cover" };
        const obj3 = { uri: iconURL };
        obj2.source = obj3;
        obj2.style = closure_0.icon;
        let tmp9 = jsx(FastImageDefault, { accessible: false, source: null, style: null, resizeMode: "cover" }, getIconURL.id);
      } else {
        const obj = { accessible: false, style: closure_0.fallback, children: null };
        const obj4 = { variant: "body-xs/semibold", lineClamp: 1, children: null };
        const name = getIconURL.name;
        obj4.children = name.slice(0, 1);
        obj.children = jsx(Text_Text.Text, { variant: "body-xs/semibold", lineClamp: 1, children: null });
        tmp9 = <React4 key={getIconURL.id} accessible={false} style={closure_0.fallback}>{null}</React4>;
      }
      return tmp9;
    });
    obj.children = jsx(require("Pile").Pile, { "aria-label": null, shape: null, size: null, gap: null, depthX: 0.25, children: null });
    return <closure_4 style={tmp.container}>{null}</closure_4>;
  }
};