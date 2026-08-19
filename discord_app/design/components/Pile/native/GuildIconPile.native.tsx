// discord_app/design/components/Pile/native/GuildIconPile.native.tsx
import GuildIconSizes from "../../../../modules/guild/native/GuildIcon.tsx";
import SolidCutout from "../../Icon/native/ClipView.tsx";
import Pile from "Pile.native.tsx";
import map from "PileOverflow.native.tsx";
import getListSummaryLabel from "../../../../utils/ListUtils.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("obj132").fileFinishedImporting("design/components/Pile/native/GuildIconPile.native.tsx");

export const GuildIconPile = function GuildIconPile(arg0) {
  ({ totalCount, children } = arg0);
  const Children = React.Children;
  ({ size, names } = arg0);
  const countResult = Children.count(children);
  const tmp4 = GuildIconSizes.ImageSizes[size];
  let obj = { "aria-label": getListSummaryLabel.getListSummaryLabel(names, totalCount), shape: SolidCutout.CutoutShape.RoundedRect, size: tmp4, gap: null, depthX: 0.25, children: null };
  let num = 3;
  if (tmp4 <= 40) {
    num = 2;
  }
  obj[3] = num;
  const items = [children, ];
  let tmp6 = null != totalCount && countResult < totalCount;
  if (tmp6) {
    obj = { size: null, borderRadius: null, value: null };
    obj[0] = tmp4;
    obj[1] = tmp4 / 3;
    obj[2] = totalCount - countResult;
    tmp6 = callback(map.PileOverflow, obj);
  }
  items[1] = tmp6;
  obj[5] = items;
  return callback(Pile.Pile, obj);
};