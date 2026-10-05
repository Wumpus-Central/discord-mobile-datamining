// discord_app/modules/group_dm/native/GroupDMAvatar.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import native from "../../../design/void/native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import ClipView from "../../../design/components/Icon/native/ClipView.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {};
obj[native.AvatarSizes.LARGE_48] = native.AvatarSizes.SMALL;
obj[native.AvatarSizes.XLARGE] = native.AvatarSizes.NORMAL;
obj[native.AvatarSizes.XXLARGE] = native.AvatarSizes.LARGE;
obj[native.AvatarSizes.PROFILE] = native.AvatarSizes.XXLARGE;
obj[native.AvatarSizes.REFRESH_MEDIUM_32] = native.AvatarSizes.XSMALL_20;
obj[native.AvatarSizes.XSMALL] = native.AvatarSizes.SIZE_16;
obj[native.AvatarSizes.SIZE_16] = native.AvatarSizes.XXSMALL_10;
obj[native.AvatarSizes.NORMAL] = native.AvatarSizes.XSMALL;
let closure_8 = createStyles.createStyles({
  firstFace: { position: "absolute", top: 0, left: 0 },
  secondFace: { position: "absolute", bottom: 0, right: 0 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let accessible;
      let animate;
      let items;
      let items2;
      let pileSizeOverride;
      let sources;
      let status;
      let style;
      let tmp6;
      let users;
      obj = react2;
      const cResult = obj.c(33);
      ({ style, size, animate, users, sources, pileSizeOverride, status, accessible, accessibilityLabel } = arg0);
      const tmp4 = closure_8();
      const tmp5 = native.AVATAR_SIZE_MAP[size];
      if (cResult[0] !== tmp5) {
        const size1 = { width: tmp5, height: tmp5 };
        cResult[0] = tmp5;
        cResult[1] = size1;
        tmp6 = size1;
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
          let tmp18;
          if (cResult[4] === diff2) {
            tmp18 = cResult[5];
          }
          if (cResult[6] === tmp6) {
            let tmp19;
            let obj8;
            if (cResult[7] === style) {
              tmp19 = cResult[8];
            }
            if (cResult[9] === sources) {
              let tmp20;
              if (cResult[10] === users) {
                tmp20 = cResult[11];
              }
              if (cResult[12] === animate) {
                if (cResult[13] === pileSizeOverride) {
                  if (cResult[14] === tmp18) {
                    if (cResult[15] === tmp4.firstFace) {
                      let tmp21;
                      let obj5;
                      if (cResult[16] === tmp20) {
                        tmp21 = cResult[17];
                      }
                      if (cResult[18] === sources) {
                        let tmp27;
                        if (cResult[19] === users) {
                          tmp27 = cResult[20];
                        }
                        if (cResult[21] === animate) {
                          if (cResult[22] === pileSizeOverride) {
                            if (cResult[23] === status) {
                              if (cResult[24] === tmp4.secondFace) {
                                let tmp28;
                                if (cResult[25] === tmp27) {
                                  tmp28 = cResult[26];
                                }
                                if (cResult[27] === accessibilityLabel) {
                                  if (cResult[28] === accessible) {
                                    if (cResult[29] === tmp19) {
                                      if (cResult[30] === tmp21) {
                                        let tmp34;
                                        if (cResult[31] === tmp28) {
                                          tmp34 = cResult[32];
                                        }
                                        return tmp34;
                                      }
                                    }
                                  }
                                }
                                const obj2 = {
                                  style: tmp19,
                                  accessible,
                                  accessibilityLabel,
                                  accessibilityElementsHidden: true,
                                  importantForAccessibility: "no-hide-descendants",
                                  children: items,
                                };
                                items = [tmp21, tmp28];
                                const tmp37 = metroRequire(View, obj2);
                                cResult[27] = accessibilityLabel;
                                cResult[28] = accessible;
                                cResult[29] = tmp19;
                                cResult[30] = tmp21;
                                cResult[31] = tmp28;
                                cResult[32] = tmp37;
                                tmp34 = tmp37;
                              }
                            }
                          }
                        }
                        const obj3 = {
                          status,
                          statusSizeOverride: native.StatusSizes.REFRESH_MEDIUM_10,
                          autoStatusCutout: true,
                          style: tmp4.secondFace,
                          size: pileSizeOverride,
                          guildId: "Array",
                          animate,
                        };
                        const Avatar2 = native.Avatar;
                        const merged = Object.assign(tmp27);
                        const tmp33 = hasOwnProperty(Avatar2, obj3);
                        cResult[21] = animate;
                        cResult[22] = pileSizeOverride;
                        cResult[23] = status;
                        cResult[24] = tmp4.secondFace;
                        cResult[25] = tmp27;
                        cResult[26] = tmp33;
                        tmp28 = tmp33;
                      }
                      if (null == users) {
                        obj5 = { source: sources[1] };
                        const obj4 = { source: sources[1] };
                      } else {
                        obj5 = { user: users[1] };
                      }
                      cResult[18] = sources;
                      cResult[19] = users;
                      cResult[20] = obj5;
                      tmp27 = obj5;
                    }
                  }
                }
              }
              const obj6 = { style: tmp4.firstFace, size: pileSizeOverride, guildId: "r", cutout: tmp18, animate };
              const Avatar = native.Avatar;
              const merged1 = Object.assign(tmp20);
              const tmp26 = hasOwnProperty(Avatar, obj6);
              cResult[12] = animate;
              cResult[13] = pileSizeOverride;
              cResult[14] = tmp18;
              cResult[15] = tmp4.firstFace;
              cResult[16] = tmp20;
              cResult[17] = tmp26;
              tmp21 = tmp26;
            }
            if (null == users) {
              obj8 = { source: sources[0] };
              const obj7 = { source: sources[0] };
            } else {
              obj8 = { user: users[0] };
            }
            cResult[9] = sources;
            cResult[10] = users;
            cResult[11] = obj8;
            tmp20 = obj8;
          }
          const items1 = [tmp6, style];
          cResult[6] = tmp6;
          cResult[7] = style;
          cResult[8] = items1;
          tmp19 = items1;
        }
      }
      const obj9 = { nativeCutouts: items2 };
      const point = { shape: ClipView.CutoutShape.Circle, x: diff1, y: diff2, size: result1 };
      items2 = [point];
      cResult[2] = result1;
      cResult[3] = diff1;
      cResult[4] = diff2;
      cResult[5] = obj9;
      tmp18 = obj9;
    }
  : (arg0) => {
      let accessibilityLabel;
      let accessible;
      let animate;
      let closure_0;
      let closure_1;
      let items2;
      let items3;
      let obj5;
      let obj8;
      let pileSizeOverride;
      let sources;
      let status;
      let style;
      let users;
      ({ size, animate, users, sources, pileSizeOverride } = arg0);
      _require = undefined;
      dependencyMap = undefined;
      ({ style, status, accessible, accessibilityLabel } = arg0);
      const tmp = closure_8();
      const tmp4 = require("native").AVATAR_SIZE_MAP[size];
      _require = tmp4;
      let items = [tmp4];
      const memo = react.useMemo(() => {
        size = { width: height, height };
        return size;
      }, items);
      if (pileSizeOverride == null) {
        pileSizeOverride = react[size];
      }
      const tmp7 = require("native").AVATAR_SIZE_MAP[pileSizeOverride];
      dependencyMap = tmp7;
      const items1 = [tmp4, tmp7];
      const obj2 = {
        style: items2,
        accessible,
        accessibilityLabel,
        accessibilityElementsHidden: true,
        importantForAccessibility: "no-hide-descendants",
        children: items3,
      };
      items2 = [memo, style];
      const memo1 = react.useMemo(() => {
        let items;
        const result = closure_1 / 2;
        const sum = result + 3;
        const result1 = 2 * sum;
        const sqrtResult = Math.sqrt(2 * Math.pow(sum, 2));
        const diff = closure_0 - result - closure_1;
        const sqrtResult1 = Math.sqrt(2 * Math.pow(diff, 2));
        const sum1 = -sqrtResult - (sum - sqrtResult) - sqrtResult1 + (sqrtResult1 - diff);
        obj = { nativeCutouts: items };
        const point = {
          shape: ClipView.CutoutShape.Circle,
          x: closure_1 - result1 - sum1,
          y: closure_1 - result1 - sum1,
          size: result1,
        };
        items = [point];
        return obj;
      }, items1);
      const obj3 = { style: tmp.firstFace, size: pileSizeOverride, guildId: "r", cutout: memo1, animate };
      const Avatar = tmp2(1188).Avatar;
      if (null == users) {
        obj5 = { source: sources[0] };
        const obj4 = { source: sources[0] };
      } else {
        obj5 = { user: users[0] };
      }
      const merged = Object.assign(obj5);
      items3 = [closure_5(Avatar, obj3)];
      const obj6 = {
        status,
        statusSizeOverride: require("native").StatusSizes.REFRESH_MEDIUM_10,
        autoStatusCutout: true,
        style: tmp.secondFace,
        size: pileSizeOverride,
        guildId: "Array",
        animate,
      };
      const Avatar2 = tmp2(1188).Avatar;
      if (null == users) {
        obj8 = { source: sources[1] };
        const obj7 = { source: sources[1] };
      } else {
        obj8 = { user: users[1] };
      }
      const merged1 = Object.assign(obj8);
      items3[1] = closure_5(Avatar2, obj6);
      return closure_6(View, obj2);
    };
let closure_9 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let accessibilityLabel;
      let accessible;
      let animate;
      let channel;
      let first;
      let pileSizeOverride;
      let status;
      let style;
      let tmp6;
      let tmp7;
      obj = channel(576);
      const cResult = obj.c(20);
      ({ style, channel } = arg0);
      ({ size, animate, pileSizeOverride, status, accessible, accessibilityLabel } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.recipients) {
        const fn = function c() {
          let user;
          const recipients = channel.recipients;
          const mapped = recipients.map((item) => user.getUser(item));
          return mapped.filter(GlobalUtils.isNotNullish);
        };
        cResult[1] = channel.recipients;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = channel(504);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6);
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
                          tmp7 = cResult[19];
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const obj2 = {
            status,
            style,
            size,
            animate,
            users: stateFromStoresArray,
            pileSizeOverride,
            accessible,
            accessibilityLabel,
          };
          const tmp10 = closure_5(closure_9, obj2);
          cResult[11] = accessibilityLabel;
          cResult[12] = accessible;
          cResult[13] = animate;
          cResult[14] = pileSizeOverride;
          cResult[15] = size;
          cResult[16] = status;
          cResult[17] = style;
          cResult[18] = stateFromStoresArray;
          cResult[19] = tmp10;
          tmp7 = tmp10;
        }
        return tmp7;
      }
      if (cResult[3] === accessibilityLabel) {
        if (cResult[4] === accessible) {
          if (cResult[5] === animate) {
            if (cResult[6] === channel) {
              if (cResult[7] === size) {
                if (cResult[8] === status) {
                  let tmp11;
                  if (cResult[9] === style) {
                    tmp11 = cResult[10];
                  }
                  tmp7 = tmp11;
                }
              }
            }
          }
        }
      }
      const tmp12 = closure_5(channel(1188).Avatar, {
        autoStatusCutout: true,
        status,
        style,
        size,
        channel,
        animate,
        accessible,
        accessibilityLabel,
      });
      cResult[3] = accessibilityLabel;
      cResult[4] = accessible;
      cResult[5] = animate;
      cResult[6] = channel;
      cResult[7] = size;
      cResult[8] = status;
      cResult[9] = style;
      cResult[10] = tmp12;
      tmp11 = tmp12;
    }
  : (pileSizeOverride) => {
      let accessibilityLabel;
      let accessible;
      let animate;
      let channel;
      let status;
      let style;
      ({ style, channel } = pileSizeOverride);
      ({ size, animate, status, accessible, accessibilityLabel } = pileSizeOverride);
      pileSizeOverride = pileSizeOverride.pileSizeOverride;
      const items = [UserStore];
      obj = channel(504);
      const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
        let user;
        const recipients = channel.recipients;
        const mapped = recipients.map((item) => user.getUser(item));
        return mapped.filter(GlobalUtils.isNotNullish);
      });
      if (null == channel.icon) {
        let tmp5;
        if (stateFromStoresArray.length > 1) {
          const obj2 = {
            status,
            style,
            size,
            animate,
            users: stateFromStoresArray,
            pileSizeOverride,
            accessible,
            accessibilityLabel,
          };
          tmp5 = closure_5(closure_9, obj2);
        }
        return tmp5;
      }
      tmp5 = closure_5(channel(1188).Avatar, {
        autoStatusCutout: true,
        status,
        style,
        size,
        channel,
        animate,
        accessible,
        accessibilityLabel,
      });
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/group_dm/native/GroupDMAvatar.tsx");

export default tmp4;
export const FacepileGroupDMAvatar = tmp3;
