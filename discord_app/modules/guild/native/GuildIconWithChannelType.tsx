// discord_app/modules/guild/native/GuildIconWithChannelType.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import utils_ChannelUtils from "../../../utils/native/ChannelUtils.tsx";
import GuildIcon from "GuildIcon.tsx";
import ClipView from "../../../design/components/Icon/native/ClipView.tsx";
import Pile from "../../../design/components/Pile/native/Pile.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const GuildIconDefault = GuildIcon;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let GuildIconWithChannelTypeSizes = { SMALL_32: "SMALL_32" };
GuildIconWithChannelTypeSizes = {};
GuildIconWithChannelTypeSizes = { pileSize: 32, guildIconSize: fn(5584).GuildIconSizes.XSMALL, typeIconSize: 12, typeIconPadding: 4, gap: 3 };
GuildIconWithChannelTypeSizes[GuildIconWithChannelTypeSizes.SMALL_32] = GuildIconWithChannelTypeSizes;
const createStyles = fn(4560);
let obj1 = { typeIconWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, width: 20 } };
let closure_8 = createStyles.createStyles(obj1);
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild/native/GuildIconWithChannelType.tsx");

export { GuildIconWithChannelTypeSizes };
export const GuildIconWithChannelType = function GuildIconWithChannelType(arg0) {
  ({ aria-label: tmp, size, channel } = arg0);
  const merged = Object.assign(arg0, Object.assign({ "aria-label": 0, size: 0, channel: 0 }));
  typeIconSize = undefined;
  ({ guildIconSize, typeIconSize } = obj[size]);
  const typeIconPadding = tmp4.typeIconPadding;
  const gap = tmp4.gap;
  const tmp5 = GuildIcon.ImageSizes[guildIconSize];
  closure_2 = tmp5;
  const sum = typeIconSize + 2 * typeIconPadding;
  c3 = sum;
  const sum1 = 0.5 + gap / tmp5;
  let items = [tmp5, sum];
  const items1 = [typeIconPadding, sum];
  const memo = noop.useMemo(() => {
    const items = [closure_2, c3];
    return items;
  }, items);
  const items2 = [typeIconSize];
  const memo1 = noop.useMemo(() => {
    const size = { width: _undefined, height: _undefined, padding: typeIconPadding };
    return size;
  }, items1);
  const memo2 = noop.useMemo(() => {
    const size = { width: typeIconSize, height: typeIconSize };
    return size;
  }, items2);
  obj = utils_ChannelUtils;
  const channelIcon = obj.getChannelIcon(channel);
  obj = { "aria-label": tmp, shape: ClipView.CutoutShape.Circle, size: memo, gap, depthX: sum1, depthY: sum1, children: null };
  obj = {};
  const tmp3 = closure_8();
  const merged1 = Object.assign(merged);
  obj.size = guildIconSize;
  const items3 = [hasOwnProperty(GuildIconDefault, obj), ];
  const obj1 = { style: null, children: null };
  const items4 = [tmp3.typeIconWrapper, memo1];
  obj1.style = items4;
  const obj2 = { style: null, source: channelIcon };
  const items5 = [memo2];
  obj2.style = items5;
  obj1.children = hasOwnProperty(native.Icon, obj2);
  items3[1] = hasOwnProperty(View, obj1);
  obj.children = items3;
  return timestampProducer(Pile.Pile, obj);
};