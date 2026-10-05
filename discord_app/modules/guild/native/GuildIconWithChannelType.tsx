// === Module 10738: GuildIconWithChannelType ===

// Module 10738 (GuildIconWithChannelType)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import GuildIcon from "GuildIcon" /* 5971 */;
import ClipView from "ClipView" /* 8469 */;
import Pile2 from "Pile" /* 10739 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;

let metroImportAll;
let metroImportDefault;
let obj5;
let closure_3 = ["aria-label", "size", "channel"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { SMALL_32: "SMALL_32" };
let obj2 = {};
let obj3 = { pileSize: 32, guildIconSize: GuildIcon.GuildIconSizes.XSMALL, typeIconSize: 12, typeIconPadding: 4, gap: 3 };
obj2[obj.SMALL_32] = obj3;
let obj4 = { typeIconWrapper: obj5 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.round, width: 20 };
let closure_10 = createStyles.createStyles(obj4);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let gap;
  let guildIconSize;
  let items1;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let typeIconPadding;
  let typeIconSize;
  const obj = react2;
  const cResult = obj.c(36);
  if (cResult[0] !== arg0) {
    ({ "aria-label": tmp8, size, channel } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp8;
    cResult[2] = channel;
    cResult[3] = tmp11;
    cResult[4] = size;
    tmp7 = size;
    tmp6 = tmp11;
    tmp5 = channel;
    tmp4 = tmp8;
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
    let tmp16;
    if (cResult[6] === sum) {
      tmp16 = cResult[7];
    }
    if (cResult[8] === typeIconPadding) {
      let tmp17;
      let tmp18;
      let tmp19;
      if (cResult[9] === sum) {
        tmp17 = cResult[10];
      }
      if (cResult[11] !== typeIconSize) {
        const size1 = { width: typeIconSize, height: typeIconSize };
        cResult[11] = typeIconSize;
        cResult[12] = size1;
        tmp18 = size1;
      } else {
        tmp18 = cResult[12];
      }
      if (cResult[13] !== tmp5) {
        const tmpResult = utils_ChannelUtils;
        const channelIcon = tmpResult.getChannelIcon(tmp5);
        cResult[13] = tmp5;
        cResult[14] = channelIcon;
        tmp19 = channelIcon;
      } else {
        tmp19 = cResult[14];
      }
      if (cResult[15] === guildIconSize) {
        let tmp21;
        if (cResult[16] === tmp6) {
          tmp21 = cResult[17];
        }
        if (cResult[18] === tmp12.typeIconWrapper) {
          let tmp29;
          let tmp30;
          if (cResult[19] === tmp17) {
            tmp29 = cResult[20];
          }
          if (cResult[21] !== tmp18) {
            const items = [tmp18];
            cResult[21] = tmp18;
            cResult[22] = items;
            tmp30 = items;
          } else {
            tmp30 = cResult[22];
          }
          if (cResult[23] === tmp19) {
            let tmp31;
            if (cResult[24] === tmp30) {
              tmp31 = cResult[25];
            }
            if (cResult[26] === tmp29) {
              let tmp34;
              if (cResult[27] === tmp31) {
                tmp34 = cResult[28];
              }
              if (cResult[29] === tmp4) {
                if (cResult[30] === gap) {
                  if (cResult[31] === tmp16) {
                    if (cResult[32] === sum1) {
                      if (cResult[33] === tmp21) {
                        let tmp38;
                        if (cResult[34] === tmp34) {
                          tmp38 = cResult[35];
                        }
                        return tmp38;
                      }
                    }
                  }
                }
              }
              obj2 = { "aria-label": tmp4, shape: ClipView.CutoutShape.Circle, size: tmp16, gap, depthX: sum1, depthY: sum1, children: items1 };
              const Pile = Pile2.Pile;
              items1 = [tmp21, tmp34];
              const tmp40 = metroImportAll(Pile, obj2);
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
            const tmp37 = metroImportDefault(View, obj3);
            cResult[26] = tmp29;
            cResult[27] = tmp31;
            cResult[28] = tmp37;
            tmp34 = tmp37;
          }
          const obj4 = { style: tmp30, source: tmp19 };
          const tmp33 = metroImportDefault(native.Icon, obj4);
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
      const obj5 = { size: guildIconSize };
      const tmp24 = GuildIconDefault;
      const merged = Object.assign(tmp6);
      const tmp28 = metroImportDefault(tmp24, obj5);
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
  let channel;
  let guildIconSize;
  let items3;
  let items4;
  let items5;
  let obj5;
  let tmp;
  let typeIconSize;
  ({ "aria-label": tmp, size, channel } = arg0);
  const merged = Object.assign(arg0, Object.assign({ "aria-label": 0, size: 0, channel: 0 }));
  typeIconSize = undefined;
  ({ guildIconSize, typeIconSize } = obj2[size]);
  const typeIconPadding = tmp4.typeIconPadding;
  const gap = tmp4.gap;
  const tmp3 = closure_10();
  const tmp5 = GuildIcon.ImageSizes[guildIconSize];
  let closure_2 = tmp5;
  const sum = typeIconSize + 2 * typeIconPadding;
  let c3 = sum;
  const sum1 = 0.5 + gap / tmp5;
  let items = [tmp5, sum];
  const items1 = [typeIconPadding, sum];
  const memo = react.useMemo(() => {
    const items = [closure_2, c3];
    return items;
  }, items);
  const items2 = [typeIconSize];
  const memo1 = react.useMemo(() => {
    size = { width: _undefined, height: _undefined, padding: typeIconPadding };
    return size;
  }, items1);
  const memo2 = react.useMemo(() => {
    size = { width: typeIconSize, height: typeIconSize };
    return size;
  }, items2);
  const obj = utils_ChannelUtils;
  const channelIcon = obj.getChannelIcon(channel);
  obj2 = { "aria-label": tmp, shape: ClipView.CutoutShape.Circle, size: memo, gap, depthX: sum1, depthY: sum1, children: items3 };
  const Pile = Pile2.Pile;
  const obj3 = { size: guildIconSize };
  const tmp12 = GuildIconDefault;
  const merged1 = Object.assign(merged);
  items3 = [metroImportDefault(tmp12, obj3), ];
  const obj4 = { style: items4, children: metroImportDefault(native.Icon, obj5) };
  items4 = [tmp3.typeIconWrapper, memo1];
  obj5 = { style: items5, source: channelIcon };
  items5 = [memo2];
  items3[1] = metroImportDefault(View, obj4);
  return metroImportAll(Pile, obj2);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild/native/GuildIconWithChannelType.tsx");

export const GuildIconWithChannelTypeSizes = obj;
export const GuildIconWithChannelType = tmp3;