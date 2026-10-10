// === Module 10279: GroupDMAvatar ===

// Module 10279 (GroupDMAvatar)
import c from "c" /* 576 */;
import native from "native" /* 1200 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import ClipView from "ClipView" /* 9016 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {};
obj[fn(1200).AvatarSizes.LARGE_48] = fn(1200).AvatarSizes.SMALL;
obj[fn(1200).AvatarSizes.XLARGE] = fn(1200).AvatarSizes.NORMAL;
obj[fn(1200).AvatarSizes.XXLARGE] = fn(1200).AvatarSizes.LARGE;
obj[fn(1200).AvatarSizes.PROFILE] = fn(1200).AvatarSizes.XXLARGE;
obj[fn(1200).AvatarSizes.REFRESH_MEDIUM_32] = fn(1200).AvatarSizes.XSMALL_20;
obj[fn(1200).AvatarSizes.XSMALL] = fn(1200).AvatarSizes.SIZE_16;
obj[fn(1200).AvatarSizes.SIZE_16] = fn(1200).AvatarSizes.XXSMALL_10;
obj[fn(1200).AvatarSizes.NORMAL] = fn(1200).AvatarSizes.XSMALL;
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles({ firstFace: { position: "absolute", top: 0, left: 0 }, secondFace: { position: "absolute", bottom: 0, right: 0 } });
let ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FacepileGroupDMAvatar(arg0) {
  obj = c;
  const cResult = obj.c(33);
  ({ style, size, animate, users, sources, pileSizeOverride, status, accessible, accessibilityLabel } = arg0);
  const tmp4 = closure_8();
  const tmp5 = native.AVATAR_SIZE_MAP[size];
  if (cResult[0] !== tmp5) {
    const size1 = { width: tmp5, height: tmp5 };
    cResult[0] = tmp5;
    cResult[1] = size1;
    let tmp6 = size1;
  } else {
    tmp6 = cResult[1];
  }
  if (pileSizeOverride == null) {
    pileSizeOverride = obj[size];
  }
  const tmp8 = native.AVATAR_SIZE_MAP[pileSizeOverride];
  const result = tmp8 / 2;
  const sum = result + 3;
  const result1 = 2 * sum;
  const sqrtResult = Math.sqrt(2 * Math.pow(sum, 2));
  const diff = tmp5 - result - tmp8;
  const sqrtResult1 = Math.sqrt(2 * Math.pow(diff, 2));
  const sum1 = -sqrtResult - (sum - sqrtResult) - sqrtResult1 + (sqrtResult1 - diff);
  const diff1 = tmp8 - result1 - sum1;
  const diff2 = tmp8 - result1 - sum1;
  if (cResult[2] === result1) {
    if (cResult[3] === diff1) {
      if (cResult[4] === diff2) {
        let tmp18 = cResult[5];
      }
      if (cResult[6] === tmp6) {
        if (cResult[7] === style) {
          let tmp19 = cResult[8];
        }
        if (cResult[9] === sources) {
          if (cResult[10] === users) {
            if (cResult[12] === animate) {
              if (cResult[13] === pileSizeOverride) {
                if (cResult[14] === tmp18) {
                  if (cResult[15] === tmp4.firstFace) {
                    if (cResult[16] === tmp20) {
                      let tmp22 = cResult[17];
                    }
                    if (cResult[18] === sources) {
                      if (cResult[19] === users) {
                        if (cResult[21] === animate) {
                          if (cResult[22] === pileSizeOverride) {
                            if (cResult[23] === status) {
                              if (cResult[24] === tmp4.secondFace) {
                                if (cResult[25] === tmp28) {
                                  let tmp30 = cResult[26];
                                }
                                if (cResult[27] === accessibilityLabel) {
                                  if (cResult[28] === accessible) {
                                    if (cResult[29] === tmp19) {
                                      if (cResult[30] === tmp22) {
                                        if (cResult[31] === tmp30) {
                                          let tmp36 = cResult[32];
                                        }
                                        return tmp36;
                                      }
                                    }
                                  }
                                }
                                const obj2 = { style: tmp19, accessible, accessibilityLabel, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
                                const items = [tmp22, tmp30];
                                obj2.children = items;
                                const tmp39 = timestampProducer(View, obj2);
                                cResult[27] = accessibilityLabel;
                                cResult[28] = accessible;
                                cResult[29] = tmp19;
                                cResult[30] = tmp22;
                                cResult[31] = tmp30;
                                cResult[32] = tmp39;
                                tmp36 = tmp39;
                              }
                            }
                          }
                        }
                        const obj3 = { status, statusSizeOverride: native.StatusSizes.REFRESH_MEDIUM_10, autoStatusCutout: true, style: tmp4.secondFace, size: pileSizeOverride, guildId: "Array", animate };
                        const merged = Object.assign(tmp28);
                        const tmp35 = hasOwnProperty(native.Avatar, obj3);
                        cResult[21] = animate;
                        cResult[22] = pileSizeOverride;
                        cResult[23] = status;
                        cResult[24] = tmp4.secondFace;
                        cResult[25] = cResult[20];
                        cResult[26] = tmp35;
                        tmp30 = tmp35;
                      }
                    }
                    if (null == users) {
                      const obj4 = { source: sources[1] };
                      let obj5 = obj4;
                    } else {
                      obj5 = { user: users[1] };
                    }
                    cResult[18] = sources;
                    cResult[19] = users;
                    cResult[20] = obj5;
                  }
                }
              }
            }
            const obj6 = { style: tmp4.firstFace, size: pileSizeOverride, guildId: "r", cutout: tmp18, animate };
            const merged1 = Object.assign(tmp20);
            const tmp27 = hasOwnProperty(native.Avatar, obj6);
            cResult[12] = animate;
            cResult[13] = pileSizeOverride;
            cResult[14] = tmp18;
            cResult[15] = tmp4.firstFace;
            cResult[16] = cResult[11];
            cResult[17] = tmp27;
            tmp22 = tmp27;
          }
        }
        if (null == users) {
          const obj7 = { source: sources[0] };
          let obj8 = obj7;
        } else {
          obj8 = { user: users[0] };
        }
        cResult[9] = sources;
        cResult[10] = users;
        cResult[11] = obj8;
      }
      const items1 = [tmp6, style];
      cResult[6] = tmp6;
      cResult[7] = style;
      cResult[8] = items1;
      tmp19 = items1;
    }
  }
  const obj9 = { nativeCutouts: null };
  const point = { shape: ClipView.CutoutShape.Circle, x: diff1, y: diff2, size: result1 };
  const items2 = [point];
  obj9.nativeCutouts = items2;
  cResult[2] = result1;
  cResult[3] = diff1;
  cResult[4] = diff2;
  cResult[5] = obj9;
  tmp18 = obj9;
}) : (function FacepileGroupDMAvatar(arg0) {
  ({ size, animate, users, sources, pileSizeOverride } = arg0);
  _require = undefined;
  dependencyMap = undefined;
  ({ style, status, accessible, accessibilityLabel } = arg0);
  const tmp = closure_8();
  const tmp4 = require("native").AVATAR_SIZE_MAP[size];
  _require = tmp4;
  let items = [tmp4];
  const memo = noop.useMemo(() => {
    const size = { width: height, height };
    return size;
  }, items);
  if (pileSizeOverride == null) {
    pileSizeOverride = noop[size];
  }
  const tmp7 = require("native").AVATAR_SIZE_MAP[pileSizeOverride];
  dependencyMap = tmp7;
  const items1 = [tmp4, tmp7];
  const obj2 = { style: null, accessible, accessibilityLabel, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const items2 = [memo, style];
  obj2.style = items2;
  const memo1 = noop.useMemo(() => {
    const result = closure_1 / 2;
    const sum = result + 3;
    const result1 = 2 * sum;
    const sqrtResult = Math.sqrt(2 * Math.pow(sum, 2));
    const diff = closure_0 - result - closure_1;
    const sqrtResult1 = Math.sqrt(2 * Math.pow(diff, 2));
    const sum1 = -sqrtResult - (sum - sqrtResult) - sqrtResult1 + (sqrtResult1 - diff);
    obj = { nativeCutouts: null };
    const point = { shape: ClipView.CutoutShape.Circle, x: closure_1 - result1 - sum1, y: closure_1 - result1 - sum1, size: result1 };
    const items = [point];
    obj.nativeCutouts = items;
    return obj;
  }, items1);
  const obj3 = { style: tmp.firstFace, size: pileSizeOverride, guildId: "r", cutout: memo1, animate };
  if (null == users) {
    const obj4 = { source: sources[0] };
    let obj5 = obj4;
  } else {
    obj5 = { user: users[0] };
  }
  const merged = Object.assign(obj5);
  const items3 = [closure_5(require("native").Avatar, obj3), ];
  const obj6 = { status, statusSizeOverride: require("native").StatusSizes.REFRESH_MEDIUM_10, autoStatusCutout: true, style: tmp.secondFace, size: pileSizeOverride, guildId: "Array", animate };
  if (null == users) {
    const obj7 = { source: sources[1] };
    let obj8 = obj7;
  } else {
    obj8 = { user: users[1] };
  }
  const merged1 = Object.assign(obj8);
  items3[1] = closure_5(require("native").Avatar, obj6);
  obj2.children = items3;
  return closure_6(View, obj2);
});
let closure_9 = tmp3;
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/group_dm/native/GroupDMAvatar.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GroupDMAvatar(arg0) {
  let Avatar = channel;
  let tmp = dependencyMap;
  const cResult = channel(576).c(20);
  ({ style, channel } = arg0);
  ({ size, animate, pileSizeOverride, status, accessible, accessibilityLabel } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel.recipients) {
    const fn = function c() {
      const recipients = channel.recipients;
      const mapped = recipients.map((item) => user.getUser(item));
      return mapped.filter(GlobalUtils.isNotNullish);
    };
    cResult[1] = channel.recipients;
    cResult[2] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
  }
  obj = channel(576);
  const stateFromStoresArray = Avatar(504).useStateFromStoresArray(first, tmp5);
  if (null == channel.icon) {
    if (stateFromStoresArray.length > 1) {
      if (cResult[11] === accessibilityLabel) {
        if (cResult[12] === accessible) {
          if (cResult[13] === animate) {
            if (cResult[14] === pileSizeOverride) {
              if (cResult[15] === size) {
                if (cResult[16] === status) {
                  if (cResult[17] === style) {
                    if (cResult[18] === stateFromStoresArray) {
                      let tmp6 = cResult[19];
                    }
                    return tmp6;
                  }
                }
              }
            }
          }
        }
      }
      const obj2 = { status, style, size, animate, users: stateFromStoresArray, pileSizeOverride, accessible, accessibilityLabel };
      const tmp9 = closure_5(closure_9, obj2);
      cResult[11] = accessibilityLabel;
      cResult[12] = accessible;
      cResult[13] = animate;
      cResult[14] = pileSizeOverride;
      cResult[15] = size;
      cResult[16] = status;
      cResult[17] = style;
      cResult[18] = stateFromStoresArray;
      cResult[19] = tmp9;
      tmp6 = tmp9;
    }
  }
  if (cResult[3] === accessibilityLabel) {
    if (cResult[4] === accessible) {
      if (cResult[5] === animate) {
        if (cResult[6] === channel) {
          if (cResult[7] === size) {
            if (cResult[8] === status) {
            }
          }
        }
      }
    }
  }
  Avatar = Avatar(1200).Avatar;
  tmp = closure_5(Avatar, { autoStatusCutout: true, status, style, size, channel, animate, accessible, accessibilityLabel });
  cResult[3] = accessibilityLabel;
  cResult[4] = accessible;
  cResult[5] = animate;
  cResult[6] = channel;
  cResult[7] = size;
  cResult[8] = status;
  cResult[9] = style;
  cResult[10] = tmp;
  const AvatarResult = Avatar(504);
}) : (function GroupDMAvatar(pileSizeOverride) {
  ({ style, channel } = pileSizeOverride);
  ({ size, animate, status, accessible, accessibilityLabel } = pileSizeOverride);
  const items = [UserStore];
  const stateFromStoresArray = channel(504).useStateFromStoresArray(items, () => {
    const recipients = channel.recipients;
    const mapped = recipients.map((item) => user.getUser(item));
    return mapped.filter(GlobalUtils.isNotNullish);
  });
  if (null == channel.icon) {
    if (stateFromStoresArray.length > 1) {
      const obj2 = { status, style, size, animate, users: stateFromStoresArray, pileSizeOverride: pileSizeOverride.pileSizeOverride, accessible, accessibilityLabel };
      let tmp5 = closure_5(closure_9, obj2);
    }
    return tmp5;
  }
  tmp5 = closure_5(channel(1200).Avatar, { autoStatusCutout: true, status, style, size, channel, animate, accessible, accessibilityLabel });
  obj = channel(504);
});
export const FacepileGroupDMAvatar = tmp3;