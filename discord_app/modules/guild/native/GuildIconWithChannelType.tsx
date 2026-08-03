// === Module 9944: GuildIconWithChannelTypeSizes ===

// Module 9944 (GuildIconWithChannelTypeSizes)
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { SMALL_32: "SMALL_32" };
obj = {};
obj = { pileSize: 32, guildIconSize: require("GuildIconSizes").GuildIconSizes.XSMALL, typeIconSize: 12, typeIconPadding: 4, gap: 3 };
obj[obj.SMALL_32] = obj;
const obj1 = { typeIconWrapper: null };
obj1[0] = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, borderRadius: require("Themes").radii.round, width: 20 };
let closure_8 = createCacheKey.createStyles(obj1);
const obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, borderRadius: require("Themes").radii.round, width: 20 };
const result = require("jsxProd").fileFinishedImporting("modules/guild/native/GuildIconWithChannelType.tsx");

export const GuildIconWithChannelTypeSizes = obj;
export const GuildIconWithChannelType = function GuildIconWithChannelType(arg0) {
  let channel;
  let guildIconSize;
  let size;
  let tmp;
  let typeIconSize;
  ({ aria-label: tmp, size, channel } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  typeIconSize = undefined;
  let typeIconPadding;
  let dependencyMap;
  let React;
  ({ guildIconSize, typeIconSize } = obj[size]);
  typeIconPadding = tmp4.typeIconPadding;
  const gap = tmp4.gap;
  const tmp5 = typeIconSize(5570).ImageSizes[guildIconSize];
  dependencyMap = tmp5;
  const sum = typeIconSize + 2 * typeIconPadding;
  React = sum;
  const sum1 = 0.5 + gap / tmp5;
  let items = [tmp5, sum];
  const items1 = [typeIconPadding, sum];
  const memo = React.useMemo(() => {
    const items = [c2, c3];
    return items;
  }, items);
  const items2 = [typeIconSize];
  const memo1 = React.useMemo(() => ({ width: c3, height: c3, padding: typeIconPadding }), items1);
  const memo2 = React.useMemo(() => ({ width: typeIconSize, height: typeIconSize }), items2);
  obj = typeIconSize(4654);
  const channelIcon = obj.getChannelIcon(channel);
  obj = { "aria-label": tmp, shape: null, size: null, gap: null, depthX: null, depthY: null, children: null };
  obj[1] = typeIconSize(7974).CutoutShape.Circle;
  obj[2] = memo;
  obj[3] = gap;
  obj[4] = sum1;
  obj[5] = sum1;
  obj = {};
  const tmp3 = callback3();
  const merged1 = Object.assign(merged);
  obj.size = guildIconSize;
  const items3 = [callback(typeIconPadding(5570), obj), ];
  const tmp12 = typeIconPadding(5570);
  const items4 = [tmp3.typeIconWrapper, memo1];
  const items5 = [memo2];
  items3[1] = callback(View, { style: items4, children: callback(typeIconSize(1297).Icon, { style: items5, source: channelIcon }) });
  obj[6] = items3;
  return callback2(typeIconSize(9945).Pile, obj);
};