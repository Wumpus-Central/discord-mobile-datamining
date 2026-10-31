// === Module 13685: RarityBadge ===

// Module 13685 (RarityBadge)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 6067 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6434 */;
import inlineStyles from "inlineStyles" /* 8031 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9528 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const CheckpointConstants = fn(6066);
({ CHECKPOINT_NITRO_GRADIENT_COLORS: metroRequire, CHECKPOINT_NITRO_BADGE_GRADIENT_ID: closure_7, CHECKPOINT_RARITY_TO_COLOR: closure_8, CHECKPOINT_RARITY_TO_LABEL_MESSAGE: closure_9 } = CheckpointConstants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5014);
const obj2 = { badge: { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, justifyContent: "center" }, badgeShape: { position: "absolute", top: 0, left: 0 }, badgeContent: null, badgeLabel: null, badgeHidden: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, justifyContent: "center" };
obj2.badgeContent = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.badgeLabel = { color: nativeDefault.colors.BLACK, textTransform: "uppercase" };
obj2.badgeHidden = { opacity: 0 };
let closure_12 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/RarityBadge.tsx");

export default function RarityBadge(rarity) {
  rarity = rarity.rarity;
  c0 = undefined;
  const tmp = closure_12();
  [size, c0] = noop.useState(null);
  const items = [tmp.badge, ];
  let badgeHidden = null == size;
  if (badgeHidden) {
    badgeHidden = tmp.badgeHidden;
  }
  let tmp17Result = rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO;
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
  let tmp5Result = null != size;
  if (tmp5Result) {
    let size1 = { width: null, height: null, style: null, pointerEvents: "none", children: null };
    ({ width: obj2.width, height: obj2.height } = size);
    size1.style = tmp.badgeShape;
    let tmp11 = tmp17Result;
    if (tmp17Result) {
      const obj3 = { children: null };
      const obj4 = { id, x1: "0", y1: "0", x2: "1", y2: "0", children: null };
      const obj5 = { offset: "0", stopColor: 32 };
      const items1 = [closure_1_10(inlineStyles.Stop, obj5), ];
      const obj6 = { offset: "1", stopColor: 19 };
      items1[1] = closure_1_10(inlineStyles.Stop, obj6);
      obj4.children = items1;
      obj3.children = closure_1_11(inlineStyles.LinearGradient, obj4);
      tmp11 = closure_1_10(inlineStyles.Defs, obj3);
    }
    const items2 = [tmp11, ];
    const obj7 = { points: null, fill: null };
    const tmp10 = inlineStylesDefault;
    obj7.points = CheckpointCustomizationUtils.getChamferedRectPoints(size.width, size.height, 6);
    obj7.fill = React6[rarity];
    items2[1] = closure_1_10(inlineStyles.Polygon, obj7);
    size1.children = items2;
    tmp5Result = closure_1_11(tmp10, size1);
    const tmp3Result = CheckpointCustomizationUtils;
  }
  const items3 = [tmp5Result, ];
  const obj8 = { style: tmp.badgeContent, children: null };
  const obj9 = { variant: "experimental/mono-md/bold", style: tmp.badgeLabel, children: null };
  const intl = util.intl;
  obj9.children = intl.string(React7[rarity]);
  const items4 = [closure_1_10(Text_Text.Text, obj9), ];
  if (tmp17Result) {
    const obj10 = { size: "xxs", color: nativeDefault.colors.BLACK };
    tmp17Result = closure_1_10(NitroWheelIcon.NitroWheelIcon, obj10);
  }
  items4[1] = tmp17Result;
  obj8.children = items4;
  items3[1] = closure_1_11(View, obj8);
  obj.children = items3;
  return closure_1_11(View, obj);
};