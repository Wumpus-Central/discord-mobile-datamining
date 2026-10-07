// discord_app/modules/guild/native/GuildIconWithChannelType.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import utils_ChannelUtils from "../../../utils/native/ChannelUtils.tsx";
import GuildIcon from "GuildIcon.tsx";
import ClipView from "../../../design/components/Icon/native/ClipView.tsx";
import Pile from "../../../design/components/Pile/native/Pile.native.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

const GuildIconDefault = GuildIcon;

require = fn;
let closure_3 = ["aria-label", "size", "channel"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = { SMALL_32: "SMALL_32" };
let obj2 = {};
obj2[obj.SMALL_32] = { pileSize: 32, guildIconSize: fn(5978).GuildIconSizes.XSMALL, typeIconSize: 12, typeIconPadding: 4, gap: 3 };
const createStyles = fn(4896);
let obj5 = { typeIconWrapper: null };
let obj3 = { pileSize: 32, guildIconSize: fn(5978).GuildIconSizes.XSMALL, typeIconSize: 12, typeIconPadding: 4, gap: 3 };
obj5.typeIconWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, width: 20 };
let closure_10 = createStyles.createStyles(obj5);
const ReactCompilerGating = fn(558);
const obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, width: 20 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild/native/GuildIconWithChannelType.tsx");

export const GuildIconWithChannelTypeSizes = obj;
export const GuildIconWithChannelType = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(36);
  if (cResult[0] !== arg0) {
    ({ aria-label: tmp8, size, channel } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp8;
    cResult[2] = channel;
    cResult[3] = tmp11;
    cResult[4] = size;
    let tmp7 = size;
    let tmp6 = tmp11;
    let tmp5 = channel;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  const tmp12 = closure_10();
  ({ guildIconSize, typeIconSize, typeIconPadding, gap } = obj2[tmp7]);
  const tmp13 = GuildIcon.ImageSizes[guildIconSize];
  const sum = typeIconSize + 2 * typeIconPadding;
  const sum1 = 0.5 + gap / tmp13;
  if (cResult[5] === tmp13) {
    if (cResult[6] === sum) {
      let tmp16 = cResult[7];
    }
    if (cResult[8] === typeIconPadding) {
      if (cResult[9] === sum) {
        let tmp17 = cResult[10];
      }
      if (cResult[11] !== typeIconSize) {
        const size1 = { width: typeIconSize, height: typeIconSize };
        cResult[11] = typeIconSize;
        cResult[12] = size1;
        let tmp18 = size1;
      } else {
        tmp18 = cResult[12];
      }
      if (cResult[13] !== tmp5) {
        const channelIcon = utils_ChannelUtils.getChannelIcon(tmp5);
        cResult[13] = tmp5;
        cResult[14] = channelIcon;
        let tmp19 = channelIcon;
        const tmpResult = utils_ChannelUtils;
      } else {
        tmp19 = cResult[14];
      }
      if (cResult[15] === guildIconSize) {
        if (cResult[16] === tmp6) {
          let tmp21 = cResult[17];
        }
        if (cResult[18] === tmp12.typeIconWrapper) {
          if (cResult[19] === tmp17) {
            let tmp29 = cResult[20];
          }
          if (cResult[21] !== tmp18) {
            const items = [tmp18];
            cResult[21] = tmp18;
            cResult[22] = items;
            let tmp30 = items;
          } else {
            tmp30 = cResult[22];
          }
          if (cResult[23] === tmp19) {
            if (cResult[24] === tmp30) {
              let tmp31 = cResult[25];
            }
            if (cResult[26] === tmp29) {
              if (cResult[27] === tmp31) {
                let tmp34 = cResult[28];
              }
              if (cResult[29] === tmp4) {
                if (cResult[30] === gap) {
                  if (cResult[31] === tmp16) {
                    if (cResult[32] === sum1) {
                      if (cResult[33] === tmp21) {
                        if (cResult[34] === tmp34) {
                          let tmp38 = cResult[35];
                        }
                        return tmp38;
                      }
                    }
                  }
                }
              }
              obj2 = { "aria-label": tmp4, shape: ClipView.CutoutShape.Circle, size: tmp16, gap, depthX: sum1, depthY: sum1, children: null };
              const items1 = [tmp21, tmp34];
              obj2.children = items1;
              const tmp40 = closure_1_8(Pile.Pile, obj2);
              cResult[29] = tmp4;
              cResult[30] = gap;
              cResult[31] = tmp16;
              cResult[32] = sum1;
              cResult[33] = tmp21;
              cResult[34] = tmp34;
              cResult[35] = tmp40;
              tmp38 = tmp40;
            }
            const obj3 = { style: tmp29, children: tmp31 };
            const tmp37 = React5(View, obj3);
            cResult[26] = tmp29;
            cResult[27] = tmp31;
            cResult[28] = tmp37;
            tmp34 = tmp37;
          }
          const obj4 = { style: tmp30, source: tmp19 };
          const tmp33 = React5(native.Icon, obj4);
          cResult[23] = tmp19;
          cResult[24] = tmp30;
          cResult[25] = tmp33;
          tmp31 = tmp33;
        }
        const items2 = [tmp12.typeIconWrapper, tmp17];
        cResult[18] = tmp12.typeIconWrapper;
        cResult[19] = tmp17;
        cResult[20] = items2;
        tmp29 = items2;
      }
      const obj5 = {};
      const merged = Object.assign(tmp6);
      obj5.size = guildIconSize;
      const tmp28 = React5(GuildIconDefault, obj5);
      cResult[15] = guildIconSize;
      cResult[16] = tmp6;
      cResult[17] = tmp28;
      tmp21 = tmp28;
    }
    const size2 = { width: sum, height: sum, padding: typeIconPadding };
    cResult[8] = typeIconPadding;
    cResult[9] = sum;
    cResult[10] = size2;
    tmp17 = size2;
  }
  const items3 = [tmp13, sum];
  cResult[5] = tmp13;
  cResult[6] = sum;
  cResult[7] = items3;
  tmp16 = items3;
}) : ((arg0) => {
  ({ aria-label: tmp, size, channel } = arg0);
  const merged = Object.assign(arg0, Object.assign({ "aria-label": 0, size: 0, channel: 0 }));
  typeIconSize = undefined;
  ({ guildIconSize, typeIconSize } = obj2[size]);
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
  const tmp3 = closure_10();
  const channelIcon = utils_ChannelUtils.getChannelIcon(channel);
  obj2 = { "aria-label": tmp, shape: ClipView.CutoutShape.Circle, size: memo, gap, depthX: sum1, depthY: sum1, children: null };
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.size = guildIconSize;
  const items3 = [React5(GuildIconDefault, obj3), ];
  const obj4 = { style: null, children: null };
  const items4 = [tmp3.typeIconWrapper, memo1];
  obj4.style = items4;
  const obj5 = { style: null, source: channelIcon };
  const items5 = [memo2];
  obj5.style = items5;
  obj4.children = React5(native.Icon, obj5);
  items3[1] = React5(View, obj4);
  obj2.children = items3;
  return closure_1_8(Pile.Pile, obj2);
});