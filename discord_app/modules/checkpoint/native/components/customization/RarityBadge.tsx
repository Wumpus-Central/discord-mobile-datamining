// === Module 14542: RarityBadge ===

// Module 14542 (RarityBadge)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5929 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6378 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6744 */;
import inlineStyles from "inlineStyles" /* 8263 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9436 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const CheckpointConstants = fn(6377);
({ CHECKPOINT_RARITY_TO_COLOR: closure_6, CHECKPOINT_RARITY_TO_LABEL_MESSAGE: metroImportDefault } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5306);
const obj2 = { badge: { alignSelf: "flex-start", paddingVertical: nativeDefault.space.PX_4 / 2, paddingHorizontal: nativeDefault.space.PX_8, justifyContent: "center" }, badgeShape: { position: "absolute", top: 0, left: 0 }, badgeContent: null, badgeLabel: null, badgeHidden: null };
let obj3 = { alignSelf: "flex-start", paddingVertical: nativeDefault.space.PX_4 / 2, paddingHorizontal: nativeDefault.space.PX_8, justifyContent: "center" };
obj2.badgeContent = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.badgeLabel = { color: nativeDefault.colors.BLACK, textTransform: "uppercase", fontSize: 14, lineHeight: 18 };
obj2.badgeHidden = { opacity: 0 };
let closure_10 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/RarityBadge.tsx");

export default function RarityBadge(rarity) {
  rarity = rarity.rarity;
  c0 = undefined;
  const tmp = closure_10();
  [size, c0] = noop.useState(null);
  items = [tmp.badge, ];
  let badgeHidden = null == size;
  if (badgeHidden) {
    badgeHidden = tmp.badgeHidden;
  }
  const obj = {
    style: items,
    onLayout(nativeEvent) {
      ({ width: c0, height: closure_1 } = nativeEvent.nativeEvent.layout);
      _undefined((arg0) => {
        let size = arg0;
        let width;
        if (arg0 != null) {
          width = size.width;
        }
        if (width !== _undefined) {
          const size1 = { width: tmp2, height };
          size = size1;
        } else {
          height = undefined;
          if (size != null) {
            height = size.height;
          }
        }
        return size;
      });
    },
    children: null
  };
  items[1] = badgeHidden;
  let tmp7 = null != size;
  if (tmp7) {
    let size1 = { width: null, height: null, style: null, pointerEvents: "none", children: null };
    ({ width: obj2.width, height: obj2.height } = size);
    size1.style = tmp.badgeShape;
    const obj3 = { points: null, fill: null };
    const tmp10 = inlineStylesDefault;
    obj3.points = CheckpointCustomizationUtils.getChamferedRectPoints(size.width, size.height, 6);
    obj3.fill = timestampProducer[rarity];
    size1.children = React5(inlineStyles.Polygon, obj3);
    tmp7 = React5(tmp10, size1);
    const tmp3Result = CheckpointCustomizationUtils;
  }
  let tmp13Result = rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO;
  const items1 = [tmp7, ];
  const obj4 = { style: tmp.badgeContent, children: null };
  const obj5 = { variant: "mono-md/bold", style: tmp.badgeLabel, children: null };
  const intl = util.intl;
  obj5.children = intl.string(metroImportDefault[rarity]);
  const items2 = [React5(Text_Text.Text, obj5), ];
  if (tmp13Result) {
    const obj6 = { size: "xxs", color: nativeDefault.colors.BLACK };
    tmp13Result = React5(NitroWheelIcon.NitroWheelIcon, obj6);
  }
  items2[1] = tmp13Result;
  obj4.children = items2;
  items1[1] = React6(View, obj4);
  obj.children = items1;
  return React6(View, obj);
};