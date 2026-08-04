// discord_app/design/void/Avatar/native/Avatar.tsx
import importAllResult from "noop";
import { View } from "registerAsset";
import { StatusTypes } from "ME";
import STATUS_PADDING from "STATUS_PADDING";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function getStatusSize(arg0) {
  if (require(12033) /* StaticNativeCutoutAvatarImage */.AvatarSizes.XXSMALL !== arg0) {
    if (tmp(12033).AvatarSizes.XSMALL !== arg0) {
      if (tmp(12033).AvatarSizes.XSMALL_20 !== arg0) {
        if (tmp(12033).AvatarSizes.SMALL !== arg0) {
          if (tmp(12033).AvatarSizes.REFRESH_MEDIUM_32 === arg0) {
            return closure_7.REFRESH_MEDIUM_10;
          } else {
            if (tmp(12033).AvatarSizes.NORMAL !== arg0) {
              if (tmp(12033).AvatarSizes.TABS_22 !== arg0) {
                if (tmp(12033).AvatarSizes.LARGE !== arg0) {
                  if (tmp(12033).AvatarSizes.LARGE_48 !== arg0) {
                    if (tmp(12033).AvatarSizes.XLARGE !== arg0) {
                      if (tmp(12033).AvatarSizes.XLARGE_72 !== arg0) {
                        if (tmp(12033).AvatarSizes.XXLARGE !== arg0) {
                          if (tmp(12033).AvatarSizes.PROFILE !== arg0) {
                            if (tmp(12033).AvatarSizes.YOUBAR_60 !== arg0) {
                              return null;
                            }
                          }
                        }
                      }
                    }
                    return closure_7.LARGE;
                  }
                }
              }
            }
            return closure_7.MEDIUM;
          }
        }
      }
    }
  }
  return closure_7.SMALL;
}
let c3 = importAllResult;
({ STATUS_PADDING: closure_6, StatusSizes: error } = STATUS_PADDING);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles((NORMAL) => {
  let obj = { status: { position: "absolute", right: -3, bottom: -3 }, speaking: null, stageSpeaking: null, voiceStatus: null, decoration: null, container: null };
  obj = { position: "absolute", right: -2, bottom: -2, backgroundColor: "transparent", borderWidth: 4, borderColor: importDefault(712).colors.STATUS_SPEAKING };
  obj[1] = obj;
  obj[2] = { position: "absolute", right: -2, bottom: -2 };
  obj = { width: 24, height: 24, justifyContent: "center", alignItems: "center", backgroundColor: importDefault(712).unsafe_rawColors.RED_400, borderRadius: importDefault(712).radii.md, right: 0, bottom: 0 };
  obj[3] = obj;
  const obj1 = { position: "absolute", top: null, left: null };
  const decorationSizeForAvatarSize = require(7939) /* getDecorationSizeForAvatarSize */.getDecorationSizeForAvatarSize(NORMAL);
  obj1[1] = -(decorationSizeForAvatarSize - require(12033) /* StaticNativeCutoutAvatarImage */.styles[NORMAL].width) / 2;
  const obj5 = require(7939) /* getDecorationSizeForAvatarSize */;
  const decorationSizeForAvatarSize1 = require(7939) /* getDecorationSizeForAvatarSize */.getDecorationSizeForAvatarSize(NORMAL);
  obj1[2] = -(decorationSizeForAvatarSize1 - require(12033) /* StaticNativeCutoutAvatarImage */.styles[NORMAL].width) / 2;
  obj[4] = obj1;
  obj[5] = { position: "relative" };
  return obj;
});
const memoResult = importAllResult.memo((isMobileOnline) => {
  let accessibilityLabel;
  let accessible;
  let avatarDecoration;
  let avatarStyle;
  let channel;
  let cutout;
  let cutout2;
  let deaf;
  let decorationCutout;
  let disablePlaceholder;
  let guildId;
  let isStageCall;
  let mute;
  let needsOffscreenAlphaCompositing;
  let source;
  let statusStyle;
  let streaming;
  let style;
  let typing;
  let user;
  ({ channel, streaming } = isMobileOnline);
  if (streaming === undefined) {
    streaming = false;
  }
  let flag = isMobileOnline.isMobileOnline;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isMobileOnline.isVROnline;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const status = isMobileOnline.status;
  let NORMAL = isMobileOnline.size;
  if (NORMAL === undefined) {
    NORMAL = flag(status[7]).AvatarSizes.NORMAL;
  }
  let flag3 = isMobileOnline.animate;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = isMobileOnline.speaking;
  if (flag4 === undefined) {
    flag4 = false;
  }
  ({ avatarDecoration, cutout } = isMobileOnline);
  const autoStatusCutout = isMobileOnline.autoStatusCutout;
  ({ isStageCall, mute, deaf, statusStyle, avatarStyle, style } = isMobileOnline);
  if (isStageCall === undefined) {
    isStageCall = false;
  }
  ({ source, user, needsOffscreenAlphaCompositing, guildId, disablePlaceholder } = isMobileOnline);
  if (needsOffscreenAlphaCompositing === undefined) {
    needsOffscreenAlphaCompositing = false;
  }
  ({ typing, accessible, accessibilityLabel } = isMobileOnline);
  if (typing === undefined) {
    typing = false;
  }
  let statusSizeOverride = isMobileOnline.statusSizeOverride;
  let callback;
  const tmp3 = callback2(NORMAL);
  callback = tmp3;
  let items = [cutout, autoStatusCutout, flag, flag2, NORMAL, status, typing, statusSizeOverride, tmp3];
  const memo = NORMAL.useMemo(() => {
    let height;
    let height2;
    let height3;
    let width;
    let width2;
    let width3;
    if (null != autoStatusCutout) {
      let diff1 = status;
      let items = statusSizeOverride;
      let tmp6;
      if (null != diff1) {
        if (diff1 !== autoStatusCutout.UNKNOWN) {
          diff1 = flag(status[7]).AVATAR_SIZE_MAP[tmp2];
          if (items == null) {
            items = outer1_11(tmp2);
          }
          if (items == null) {
            items = 0;
          }
          let result = items / 4;
          if (tmp5) {
            const statusTypingDimensions = flag(status[8]).getStatusTypingDimensions(items);
            ({ width: width3, height: height3 } = statusTypingDimensions);
            const obj9 = flag(status[8]);
            if (flag == null) {
              flag = false;
            }
            if (flag2 == null) {
              flag2 = false;
            }
            const sum = height3 + 2 * typing;
            let obj = { nativeCutouts: null };
            obj = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
            const tmp29 = flag2(status[9]);
            obj[0] = flag(status[10]).CutoutShape.RoundedRect;
            const diff = diff1 - width3 - typing;
            const tmp29Result = flag2(status[9])(items, flag, flag2);
            obj[1] = diff + flag(status[8]).getAnimatedTypingTranslateX(tmp29Result.width);
            diff1 = diff1 - height3;
            obj[2] = diff1 - typing;
            obj[3] = width3 + 2 * typing;
            obj[4] = sum;
            result = sum / 2;
            obj[5] = result;
            items = [obj];
            obj[0] = items;
            tmp6 = obj;
            const obj12 = flag(status[8]);
          } else {
            if (flag2) {
              let obj5 = flag(status[8]);
              const vRStatusContainerRect = obj5.getVRStatusContainerRect(items);
              ({ width: width2, height: height2 } = vRStatusContainerRect);
              const obj1 = { nativeCutouts: null };
              let obj2 = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
              obj2[0] = flag(status[10]).CutoutShape.RoundedRect;
              obj2[1] = diff1 - width2 + result;
              result = diff1 - height2 + result;
              obj2[2] = result;
              obj2[3] = width2;
              obj2[4] = height2;
              obj2[5] = vRStatusContainerRect.cornerRadius;
              const items1 = [obj2];
              obj1[0] = items1;
              tmp6 = obj1;
            } else if (!flag) {
              const sum1 = items / 2 + tmp4;
              const diff2 = diff1 - sum1 - 2 * result;
              obj = { nativeCutouts: null };
              const obj3 = { shape: null, x: null, y: null, size: null };
              obj3[0] = flag(status[10]).CutoutShape.Circle;
              obj3[1] = diff2;
              obj3[2] = diff2;
              obj3[3] = 2 * sum1;
              const items2 = [obj3];
              obj[0] = items2;
              tmp6 = obj;
            }
            obj2 = flag(status[8]);
            const mobileStatusContainerRect = obj2.getMobileStatusContainerRect(items);
            ({ width, height } = mobileStatusContainerRect);
            const obj4 = { nativeCutouts: null };
            obj5 = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
            obj5[0] = flag(status[10]).CutoutShape.RoundedRect;
            obj5[1] = diff1 - width + result;
            obj5[2] = diff1 - height + result;
            obj5[3] = width;
            obj5[4] = height;
            obj5[5] = mobileStatusContainerRect.cornerRadius;
            const items3 = [obj5];
            obj4[0] = items3;
            tmp6 = obj4;
          }
        }
      }
    } else {
      const obj6 = { cutout: null, decorationCutout: null };
      obj6[0] = cutout;
      obj6[1] = flag(status[11]).getDecorationCutoutForAvatarCutout(cutout, -_undefined.decoration.top);
      return obj6;
    }
  }, items);
  let merged = { style: null, needsOffscreenAlphaCompositing: null, accessible: null, accessibilityLabel: null, children: null };
  let StatusWithTyping = flag;
  ({ cutout: cutout2, decorationCutout } = memo);
  let items1 = [flag(status[7]).styles[NORMAL], tmp3.container, style];
  merged[0] = items1;
  merged[1] = needsOffscreenAlphaCompositing;
  merged[2] = accessible;
  merged[3] = accessibilityLabel;
  if (!flag4) {
    let items2 = [null, , , , ];
    merged = { disablePlaceholder: null, style: null, cutout: null };
    merged[0] = disablePlaceholder;
    merged[1] = avatarStyle;
    merged[2] = cutout2;
    if (null == source) {
      if (null == user) {
        if (null == channel) {
          items2[1] = null;
          let tmp33 = null;
          if (null != avatarDecoration) {
            let obj = { size: null, avatarDecoration: null, decorationStyle: null, animate: null, cutout: null };
            const tmp36 = flag2(tmp7[13]);
            obj[0] = StatusWithTyping(tmp7[11]).getDecorationSizeForAvatarSize(NORMAL);
            obj[1] = avatarDecoration;
            obj[2] = tmp3.decoration;
            obj[3] = flag3;
            obj[4] = decorationCutout;
            tmp33 = callback(tmp36, obj, avatarDecoration.asset);
            const StatusWithTypingResult = StatusWithTyping(tmp7[11]);
          }
          items2[2] = tmp33;
          let tmp37 = null;
          if (null != status) {
            tmp37 = null;
            if (status !== autoStatusCutout.UNKNOWN) {
              if (statusSizeOverride == null) {
                statusSizeOverride = getStatusSize(NORMAL);
              }
              let merged1 = null;
              if (null != statusSizeOverride) {
                let obj1 = { size: null, isMobileOnline: null, isVROnline: null, status: null, streaming: null, style: null };
                obj1[0] = statusSizeOverride;
                obj1[1] = flag;
                obj1[2] = flag2;
                obj1[3] = status;
                obj1[4] = streaming;
                let items3 = [tmp3.status, statusStyle];
                obj1[5] = items3;
                merged1 = obj1;
              }
              if (null == merged1) {
                tmp37 = null;
              } else {
                if (!typing) {
                  let obj2 = {};
                  merged = Object.assign(merged1);
                  let tmp48 = callback(flag2(tmp7[14]), obj2);
                  const tmp44 = flag2(tmp7[14]);
                }
                StatusWithTyping = StatusWithTyping(tmp7[14]).StatusWithTyping;
                let obj3 = {};
                merged1 = Object.assign(merged1);
                obj3.typing = typing;
                user = user.id;
                obj3.userId = user;
                tmp48 = callback(StatusWithTyping, obj3);
              }
            }
          }
          items2[3] = tmp37;
          if (deaf) {
            let obj4 = { style: null, children: null };
            const items4 = [, ];
            ({ status: arr8[0], voiceStatus: arr8[1] } = tmp3);
            obj4[0] = items4;
            let obj5 = { size: null, source: null, color: null };
            obj5[0] = flag2(tmp7[15]).Sizes.REFRESH_SMALL_16;
            obj5[1] = flag2(tmp7[16]);
            obj5[2] = flag2(tmp7[6]).unsafe_rawColors.WHITE;
            obj4[1] = callback(flag2(tmp7[15]), obj5);
            let tmp53 = callback(tmp6, obj4);
            const tmp59 = flag2(tmp7[15]);
          } else if (mute) {
            let obj6 = { style: null, children: null };
            const items5 = [, ];
            ({ status: arr7[0], voiceStatus: arr7[1] } = tmp3);
            obj6[0] = items5;
            const obj7 = { size: null, source: null, color: null };
            obj7[0] = flag2(tmp7[15]).Sizes.REFRESH_SMALL_16;
            obj7[1] = flag2(tmp7[17]);
            obj7[2] = flag2(tmp7[6]).unsafe_rawColors.WHITE;
            obj6[1] = callback(flag2(tmp7[15]), obj7);
            tmp53 = callback(tmp6, obj6);
            const tmp56 = flag2(tmp7[15]);
          }
          items2[4] = tmp53;
          merged[4] = items2;
          return closure_9(tmp6, merged);
        }
      }
    }
    if (null != source) {
      const obj8 = { source: null, size: null, animate: null };
      obj8[0] = source;
      obj8[1] = NORMAL;
      obj8[2] = flag3;
      merged = Object.assign(merged);
      let tmp14 = callback(flag2(tmp7[7]), obj8);
      let tmp29 = flag2(tmp7[7]);
    } else if (null != user) {
      let obj9 = { user: null, guildId: null, size: null, animate: null };
      obj9[0] = user;
      obj9[1] = guildId;
      obj9[2] = NORMAL;
      obj9[3] = flag3;
      const merged2 = Object.assign(merged);
      tmp14 = callback(flag2(tmp7[7]), obj9);
      const tmp23 = flag2(tmp7[7]);
    } else if (null != channel) {
      const obj10 = { channel: null, size: null, animate: null };
      obj10[0] = channel;
      obj10[1] = NORMAL;
      obj10[2] = flag3;
      const merged3 = Object.assign(merged);
      tmp14 = callback(flag2(tmp7[7]), obj10);
      const tmp17 = flag2(tmp7[7]);
    }
  } else {
    let sum = StatusWithTyping(tmp7[7]).AVATAR_SIZE_MAP[NORMAL] + 4;
    const obj11 = { style: null };
    if (isStageCall) {
      const items6 = [tmp3.stageSpeaking, ];
      let obj12 = { width: null, height: null, borderRadius: null };
      obj12[0] = sum;
      obj12[1] = sum;
      obj12[2] = sum / 2;
      items6[1] = obj12;
      obj11[0] = items6;
      let tmp9Result = tmp9(flag2(tmp7[12]), obj11);
    } else {
      const items7 = [tmp3.speaking, ];
      const obj13 = { width: null, height: null, borderRadius: null };
      obj13[0] = sum;
      obj13[1] = sum;
      obj13[2] = sum / 2;
      items7[1] = obj13;
      obj11[0] = items7;
      tmp9Result = tmp9(tmp6, obj11);
    }
  }
});
let result = require("ME").fileFinishedImporting("design/void/Avatar/native/Avatar.tsx");

export default memoResult;
export const AvatarSizes = require("StaticNativeCutoutAvatarImage").AvatarSizes;
export { getStatusSize };