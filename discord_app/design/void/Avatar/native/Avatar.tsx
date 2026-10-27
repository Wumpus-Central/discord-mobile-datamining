// === Module 15451: Avatar ===

// Module 15451 (Avatar)
import nativeDefault from "native" /* 587 */;
import IconDefault from "Icon" /* 5247 */;
import avatar_decorations_AvatarDecorationUtils from "avatar_decorations/AvatarDecorationUtils" /* 8646 */;
import CutoutableAvatarDecorationDefault from "CutoutableAvatarDecoration" /* 9404 */;
import ClipView from "ClipView" /* 9405 */;
import _modDef11451 from "module_11451" /* 11451 */;
import _modDef11452 from "module_11452" /* 11452 */;
import CutoutableAvatarImage from "CutoutableAvatarImage" /* 14350 */;
import Status_StatusUtils from "Status/StatusUtils" /* 15440 */;
import getStatusContainerStyleDefault from "getStatusContainerStyle" /* 15441 */;
import Status from "Status" /* 15442 */;
import SpeakerPulseDefault from "SpeakerPulse" /* 15452 */;
import noop from "module_19" /* 19 */;

const CutoutableAvatarImageDefault = CutoutableAvatarImage;
const StatusDefault = Status;

require = fn;
function getStatusSize(arg0) {
  if (CutoutableAvatarImage.AvatarSizes.XXSMALL !== arg0) {
    if (CutoutableAvatarImage.AvatarSizes.XSMALL !== arg0) {
      if (CutoutableAvatarImage.AvatarSizes.XSMALL_20 !== arg0) {
        if (CutoutableAvatarImage.AvatarSizes.SMALL !== arg0) {
          if (CutoutableAvatarImage.AvatarSizes.REFRESH_MEDIUM_32 === arg0) {
            return React5.REFRESH_MEDIUM_10;
          } else {
            if (CutoutableAvatarImage.AvatarSizes.NORMAL !== arg0) {
              if (CutoutableAvatarImage.AvatarSizes.TABS_22 !== arg0) {
                if (CutoutableAvatarImage.AvatarSizes.LARGE !== arg0) {
                  if (CutoutableAvatarImage.AvatarSizes.LARGE_48 !== arg0) {
                    if (CutoutableAvatarImage.AvatarSizes.XLARGE !== arg0) {
                      if (CutoutableAvatarImage.AvatarSizes.XLARGE_72 !== arg0) {
                        if (CutoutableAvatarImage.AvatarSizes.XXLARGE !== arg0) {
                          if (CutoutableAvatarImage.AvatarSizes.PROFILE !== arg0) {
                            if (CutoutableAvatarImage.AvatarSizes.YOUBAR_60 !== arg0) {
                              return null;
                            }
                          }
                        }
                      }
                    }
                    return React5.LARGE;
                  }
                }
              }
            }
            return React5.MEDIUM;
          }
        }
      }
    }
  }
  return React5.SMALL;
}
function getAvatarStatusCutout(arg0) {
  ({ avatarSize, userStatus, isMobileOnline, isVROnline, statusSizeOverride } = arg0);
  if (null != userStatus) {
    if (userStatus !== StatusTypes.UNKNOWN) {
      const tmp6 = CutoutableAvatarImage.AVATAR_SIZE_MAP[avatarSize];
      if (statusSizeOverride == null) {
        statusSizeOverride = getStatusSize(avatarSize);
      }
      if (statusSizeOverride == null) {
        statusSizeOverride = 0;
      }
      const result = statusSizeOverride / 4;
      if (tmp2) {
        const statusTypingDimensions = Status_StatusUtils.getStatusTypingDimensions(statusSizeOverride);
        ({ width: width3, height: height3 } = statusTypingDimensions);
        const tmp4Result = Status_StatusUtils;
        if (isMobileOnline == null) {
          isMobileOnline = false;
        }
        if (isVROnline == null) {
          isVROnline = false;
        }
        const sum = height3 + 2 * timestampProducer;
        const obj2 = { nativeCutouts: null };
        const size = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
        size.shape = ClipView.CutoutShape.RoundedRect;
        const diff = tmp6 - width3 - timestampProducer;
        const tmp15Result = getStatusContainerStyleDefault(statusSizeOverride, isMobileOnline, isVROnline);
        size.x = diff + Status_StatusUtils.getAnimatedTypingTranslateX(tmp15Result.width);
        size.y = tmp6 - height3 - timestampProducer;
        size.width = width3 + 2 * timestampProducer;
        size.height = sum;
        size.cornerRadius = sum / 2;
        const items = [size];
        obj2.nativeCutouts = items;
        return obj2;
      } else if (isVROnline) {
        const vRStatusContainerRect = Status_StatusUtils.getVRStatusContainerRect(statusSizeOverride);
        ({ width: width2, height: height2 } = vRStatusContainerRect);
        const obj3 = { nativeCutouts: null };
        const size1 = { shape: ClipView.CutoutShape.RoundedRect, x: tmp6 - width2 + result, y: tmp6 - height2 + result, width: width2, height: height2, cornerRadius: vRStatusContainerRect.cornerRadius };
        const items1 = [size1];
        obj3.nativeCutouts = items1;
        return obj3;
      } else if (isMobileOnline) {
        const mobileStatusContainerRect = Status_StatusUtils.getMobileStatusContainerRect(statusSizeOverride);
        ({ width, height } = mobileStatusContainerRect);
        const obj4 = { nativeCutouts: null };
        const size2 = { shape: ClipView.CutoutShape.RoundedRect, x: tmp6 - width + result, y: tmp6 - height + result, width, height, cornerRadius: mobileStatusContainerRect.cornerRadius };
        const items2 = [size2];
        obj4.nativeCutouts = items2;
        return obj4;
      } else {
        const sum1 = statusSizeOverride / 2 + tmp;
        const diff1 = tmp6 - sum1 - 2 * result;
        const obj = { nativeCutouts: null };
        const point = { shape: ClipView.CutoutShape.Circle, x: diff1, y: diff1, size: 2 * sum1 };
        const items3 = [point];
        obj.nativeCutouts = items3;
        return obj;
      }
    }
  }
}
const View = fn(17).View;
const StatusTypes = fn(1084).StatusTypes;
const StatusConstants = fn(1200);
({ STATUS_PADDING: metroRequire, StatusSizes: closure_7 } = StatusConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4972);
let closure_10 = createStyles.createStyles((NORMAL) => {
  const obj = { status: { position: "absolute", right: -3, bottom: -3 }, speaking: null, soundboard: null, stageSpeaking: null, voiceStatus: null, decoration: null, container: null };
  const rect = { position: "absolute", right: -2, bottom: -2, backgroundColor: "transparent", borderWidth: 4, borderColor: nativeDefault.colors.STATUS_SPEAKING };
  obj.speaking = rect;
  const rect1 = { position: "absolute", right: -2, bottom: -2, backgroundColor: "transparent", borderWidth: 4, borderColor: nativeDefault.colors.REDESIGN_INPUT_CONTROL_SELECTED };
  obj.soundboard = rect1;
  obj.stageSpeaking = { position: "absolute", right: -2, bottom: -2 };
  const size = { width: 24, height: 24, justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.RED_400, borderRadius: nativeDefault.radii.md, right: 0, bottom: 0 };
  obj.voiceStatus = size;
  const rect2 = { position: "absolute", top: null, left: null };
  const decorationSizeForAvatarSize = avatar_decorations_AvatarDecorationUtils.getDecorationSizeForAvatarSize(NORMAL);
  rect2.top = -(decorationSizeForAvatarSize - CutoutableAvatarImage.styles[NORMAL].width) / 2;
  const decorationSizeForAvatarSize1 = avatar_decorations_AvatarDecorationUtils.getDecorationSizeForAvatarSize(NORMAL);
  rect2.left = -(decorationSizeForAvatarSize1 - CutoutableAvatarImage.styles[NORMAL].width) / 2;
  obj.decoration = rect2;
  obj.container = { position: "relative" };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("design/void/Avatar/native/Avatar.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function Avatar(channel) {
  const cResult = channel(avatarDecoration[13]).c(79);
  channel = channel.channel;
  ({ streaming, isMobileOnline, isVROnline, status } = channel);
  ({ size, animate, speaking, playingSoundboard, avatarDecoration } = channel);
  const mute = channel.mute;
  const deaf = channel.deaf;
  const statusStyle = channel.statusStyle;
  const avatarStyle = channel.avatarStyle;
  ({ style, cutout, autoStatusCutout, isStageCall, source } = channel);
  const user = channel.user;
  const guildId = channel.guildId;
  const disablePlaceholder = channel.disablePlaceholder;
  ({ needsOffscreenAlphaCompositing, accessible, accessibilityLabel, typing, statusSizeOverride } = channel);
  getAvatarStatusCutout = tmp4;
  isMobileOnline = tmp5;
  isVROnline = tmp6;
  if (undefined === size) {
    size = tmp(tmp2[7]).AvatarSizes.NORMAL;
  }
  animate = tmp7;
  closure_17 = tmp8;
  closure_18 = tmp9;
  closure_19 = tmp10;
  typing = tmp12;
  const tmp13 = disablePlaceholder(size);
  closure_21 = tmp13;
  if (cResult[0] === cutout) {
    if (cResult[1] === autoStatusCutout) {
      if (cResult[2] === tmp5) {
        if (cResult[3] === tmp6) {
          if (cResult[4] === size) {
            if (cResult[5] === status) {
              if (cResult[6] === statusSizeOverride) {
                if (cResult[7] === tmp12) {
                  let tmp14 = cResult[8];
                }
                if (cResult[9] === tmp14) {
                  if (cResult[10] === tmp16) {
                    let tmp17 = cResult[11];
                  }
                  if (cResult[12] === tmp17) {
                    if (cResult[13] === tmp14) {
                      let tmp19 = cResult[14];
                    }
                    const cutout2 = tmp19.cutout;
                    const decorationCutout = tmp19.decorationCutout;
                    if (cResult[15] === tmp7) {
                      if (cResult[16] === avatarStyle) {
                        if (cResult[17] === channel) {
                          if (cResult[18] === cutout2) {
                            if (cResult[19] === disablePlaceholder) {
                              if (cResult[20] === guildId) {
                                if (cResult[21] === size) {
                                  if (cResult[22] === source) {
                                    if (cResult[23] === user) {
                                      let tmp20 = cResult[24];
                                    }
                                    if (cResult[25] === tmp7) {
                                      if (cResult[26] === avatarDecoration) {
                                        if (cResult[27] === decorationCutout) {
                                          if (cResult[28] === size) {
                                            if (cResult[29] === tmp13.decoration) {
                                              let tmp21 = cResult[30];
                                            }
                                            if (cResult[31] === tmp5) {
                                              if (cResult[32] === tmp6) {
                                                if (cResult[33] === size) {
                                                  if (cResult[34] === status) {
                                                    if (cResult[35] === statusSizeOverride) {
                                                      if (cResult[36] === statusStyle) {
                                                        if (cResult[37] === tmp4) {
                                                          if (cResult[38] === tmp13.status) {
                                                            if (cResult[39] === tmp12) {
                                                              if (cResult[40] === user) {
                                                                let tmp22 = cResult[41];
                                                              }
                                                              if (cResult[42] === deaf) {
                                                                if (cResult[43] === mute) {
                                                                  if (cResult[44] === tmp13.status) {
                                                                    if (cResult[45] === tmp13.voiceStatus) {
                                                                      let tmp23 = cResult[46];
                                                                    }
                                                                    if (cResult[47] === tmp10) {
                                                                      if (cResult[48] === tmp9) {
                                                                        if (cResult[49] === size) {
                                                                          if (cResult[50] === tmp8) {
                                                                            if (cResult[51] === tmp13.soundboard) {
                                                                              if (cResult[52] === tmp13.speaking) {
                                                                                if (cResult[53] === tmp13.stageSpeaking) {
                                                                                  let tmp24 = cResult[54];
                                                                                }
                                                                                const tmp25 = tmp(tmp2[7]).styles[size];
                                                                                if (cResult[55] === style) {
                                                                                  if (cResult[56] === tmp13.container) {
                                                                                    if (cResult[57] === tmp25) {
                                                                                      let tmp26 = cResult[58];
                                                                                    }
                                                                                    if (cResult[59] !== tmp24) {
                                                                                      const tmp24Result = tmp24();
                                                                                      cResult[59] = tmp24;
                                                                                      cResult[60] = tmp24Result;
                                                                                      let tmp27 = tmp24Result;
                                                                                    } else {
                                                                                      tmp27 = cResult[60];
                                                                                    }
                                                                                    if (cResult[61] !== tmp20) {
                                                                                      const tmp20Result = tmp20();
                                                                                      cResult[61] = tmp20;
                                                                                      cResult[62] = tmp20Result;
                                                                                      let tmp29 = tmp20Result;
                                                                                    } else {
                                                                                      tmp29 = cResult[62];
                                                                                    }
                                                                                    if (cResult[63] !== tmp21) {
                                                                                      const tmp21Result = tmp21();
                                                                                      cResult[63] = tmp21;
                                                                                      cResult[64] = tmp21Result;
                                                                                      let tmp31 = tmp21Result;
                                                                                    } else {
                                                                                      tmp31 = cResult[64];
                                                                                    }
                                                                                    if (cResult[65] !== tmp22) {
                                                                                      const tmp22Result = tmp22();
                                                                                      cResult[65] = tmp22;
                                                                                      cResult[66] = tmp22Result;
                                                                                      let tmp33 = tmp22Result;
                                                                                    } else {
                                                                                      tmp33 = cResult[66];
                                                                                    }
                                                                                    if (cResult[67] !== tmp23) {
                                                                                      const tmp23Result = tmp23();
                                                                                      cResult[67] = tmp23;
                                                                                      cResult[68] = tmp23Result;
                                                                                      let tmp35 = tmp23Result;
                                                                                    } else {
                                                                                      tmp35 = cResult[68];
                                                                                    }
                                                                                    if (cResult[69] === accessibilityLabel) {
                                                                                      if (cResult[70] === accessible) {
                                                                                        if (cResult[71] === tmp11) {
                                                                                          if (cResult[72] === tmp26) {
                                                                                            if (cResult[73] === tmp27) {
                                                                                              if (cResult[74] === tmp29) {
                                                                                                if (cResult[75] === tmp31) {
                                                                                                  if (cResult[76] === tmp33) {
                                                                                                    if (cResult[77] === tmp35) {
                                                                                                      let tmp37 = cResult[78];
                                                                                                    }
                                                                                                    return tmp37;
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                    let obj2 = { style: tmp26, needsOffscreenAlphaCompositing: tmp11, accessible, accessibilityLabel, children: null };
                                                                                    let items = [tmp27, tmp29, tmp31, tmp33, tmp35];
                                                                                    obj2.children = items;
                                                                                    const tmp40 = guildId(deaf, obj2);
                                                                                    cResult[69] = accessibilityLabel;
                                                                                    cResult[70] = accessible;
                                                                                    cResult[71] = tmp11;
                                                                                    cResult[72] = tmp26;
                                                                                    cResult[73] = tmp27;
                                                                                    cResult[74] = tmp29;
                                                                                    cResult[75] = tmp31;
                                                                                    cResult[76] = tmp33;
                                                                                    cResult[77] = tmp35;
                                                                                    cResult[78] = tmp40;
                                                                                    tmp37 = tmp40;
                                                                                  }
                                                                                }
                                                                                let items1 = [tmp25, tmp13.container, style];
                                                                                cResult[55] = style;
                                                                                cResult[56] = tmp13.container;
                                                                                cResult[57] = tmp25;
                                                                                cResult[58] = items1;
                                                                                tmp26 = items1;
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                    function renderSpeakingIndicator() {
                                                                      if (!closure_17) {
                                                                        if (!closure_18) {
                                                                          return null;
                                                                        }
                                                                      }
                                                                      const sum = CutoutableAvatarImage.AVATAR_SIZE_MAP[size] + 4;
                                                                      if (closure_19) {
                                                                        const obj2 = { style: null };
                                                                        const items = [closure_21.stageSpeaking, ];
                                                                        size = { width: sum, height: sum, borderRadius: sum / 2 };
                                                                        items[1] = size;
                                                                        obj2.style = items;
                                                                        let tmp5Result = closure_2_8(SpeakerPulseDefault, obj2);
                                                                      } else {
                                                                        const obj = { style: null };
                                                                        const items1 = [closure_18 ? closure_21.soundboard : closure_21.speaking, ];
                                                                        const size1 = { width: sum, height: sum, borderRadius: sum / 2 };
                                                                        items1[1] = size1;
                                                                        obj.style = items1;
                                                                        tmp5Result = closure_2_8(View, obj);
                                                                      }
                                                                      return tmp5Result;
                                                                    }
                                                                    cResult[47] = tmp10;
                                                                    cResult[48] = tmp9;
                                                                    cResult[49] = size;
                                                                    cResult[50] = tmp8;
                                                                    cResult[51] = tmp13.soundboard;
                                                                    cResult[52] = tmp13.speaking;
                                                                    cResult[53] = tmp13.stageSpeaking;
                                                                    cResult[54] = renderSpeakingIndicator;
                                                                    tmp24 = renderSpeakingIndicator;
                                                                  }
                                                                }
                                                              }
                                                              function renderVoiceStatus() {
                                                                if (deaf) {
                                                                  const obj2 = { style: null, children: null };
                                                                  const items = [, ];
                                                                  ({ status: arr2[0], voiceStatus: arr2[1] } = closure_21);
                                                                  obj2.style = items;
                                                                  const obj3 = { size: IconDefault.Sizes.REFRESH_SMALL_16, source: _modDef11451, color: nativeDefault.unsafe_rawColors.WHITE };
                                                                  obj2.children = closure_2_8(IconDefault, obj3);
                                                                  let tmp2 = closure_2_8(View, obj2);
                                                                } else if (mute) {
                                                                  const obj = { style: null, children: null };
                                                                  const items1 = [, ];
                                                                  ({ status: arr[0], voiceStatus: arr[1] } = closure_21);
                                                                  obj.style = items1;
                                                                  const obj4 = { size: IconDefault.Sizes.REFRESH_SMALL_16, source: _modDef11452, color: nativeDefault.unsafe_rawColors.WHITE };
                                                                  obj.children = closure_2_8(IconDefault, obj4);
                                                                  tmp2 = closure_2_8(View, obj);
                                                                }
                                                                return tmp2;
                                                              }
                                                              cResult[42] = deaf;
                                                              cResult[43] = mute;
                                                              cResult[44] = tmp13.status;
                                                              cResult[45] = tmp13.voiceStatus;
                                                              cResult[46] = renderVoiceStatus;
                                                              tmp23 = renderVoiceStatus;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            function renderStatus() {
                                              if (null != status) {
                                                if (status !== StatusTypes.UNKNOWN) {
                                                  let tmp3 = statusSizeOverride;
                                                  if (statusSizeOverride == null) {
                                                    let id = getStatusSize;
                                                    tmp3 = getStatusSize(size);
                                                  }
                                                  let merged1 = null;
                                                  if (null != tmp3) {
                                                    const obj = { size: tmp3, isMobileOnline, isVROnline, status, streaming, style: null };
                                                    const items = [closure_21.status, statusStyle];
                                                    obj.style = items;
                                                    merged1 = obj;
                                                  }
                                                  if (null == merged1) {
                                                    return null;
                                                  } else {
                                                    if (!typing) {
                                                      const obj2 = {};
                                                      const merged = Object.assign(merged1);
                                                      let tmp19 = closure_2_8(StatusDefault, obj2);
                                                    } else {
                                                      id = user;
                                                    }
                                                    const obj3 = {};
                                                    merged1 = Object.assign(merged1);
                                                    obj3.typing = typing;
                                                    id = id.id;
                                                    obj3.userId = id;
                                                    tmp19 = closure_2_8(Status.StatusWithTyping, obj3);
                                                  }
                                                }
                                              }
                                              return null;
                                            }
                                            cResult[31] = tmp5;
                                            cResult[32] = tmp6;
                                            cResult[33] = size;
                                            cResult[34] = status;
                                            cResult[35] = statusSizeOverride;
                                            cResult[36] = statusStyle;
                                            cResult[37] = tmp4;
                                            cResult[38] = tmp13.status;
                                            cResult[39] = tmp12;
                                            cResult[40] = user;
                                            cResult[41] = renderStatus;
                                            tmp22 = renderStatus;
                                          }
                                        }
                                      }
                                    }
                                    function renderDecorations() {
                                      let tmp2 = null;
                                      if (null != avatarDecoration) {
                                        const obj = { size: null, avatarDecoration: null, decorationStyle: null, animate: null, cutout: null };
                                        const tmp6 = CutoutableAvatarDecorationDefault;
                                        obj.size = avatar_decorations_AvatarDecorationUtils.getDecorationSizeForAvatarSize(size);
                                        obj.avatarDecoration = avatarDecoration;
                                        obj.decorationStyle = closure_21.decoration;
                                        obj.animate = animate;
                                        obj.cutout = decorationCutout;
                                        tmp2 = closure_2_8(tmp6, obj, avatarDecoration.asset);
                                      }
                                      return tmp2;
                                    }
                                    cResult[25] = tmp7;
                                    cResult[26] = avatarDecoration;
                                    cResult[27] = decorationCutout;
                                    cResult[28] = size;
                                    cResult[29] = tmp13.decoration;
                                    cResult[30] = renderDecorations;
                                    tmp21 = renderDecorations;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    function renderImage() {
                      let merged = { disablePlaceholder, style: avatarStyle, cutout: cutout2 };
                      let tmp = source;
                      if (null == source) {
                        if (null == user) {
                          if (null == channel) {
                            return null;
                          }
                        }
                      }
                      if (null != tmp) {
                        const obj = { source: tmp, size: null, animate: null };
                        tmp = size;
                        obj.size = size;
                        obj.animate = animate;
                        merged = Object.assign(merged);
                        closure_2_8(CutoutableAvatarImageDefault, obj);
                      } else if (null != user) {
                        const obj2 = { user: tmp33, guildId, size, animate };
                        const merged1 = Object.assign(merged);
                        closure_2_8(CutoutableAvatarImageDefault, obj2);
                      } else if (null != channel) {
                        const obj3 = { channel: tmp5, size, animate };
                        const merged2 = Object.assign(merged);
                        closure_2_8(CutoutableAvatarImageDefault, obj3);
                      }
                    }
                    cResult[15] = tmp7;
                    cResult[16] = avatarStyle;
                    cResult[17] = channel;
                    cResult[18] = cutout2;
                    cResult[19] = disablePlaceholder;
                    cResult[20] = guildId;
                    cResult[21] = size;
                    cResult[22] = source;
                    cResult[23] = user;
                    cResult[24] = renderImage;
                    tmp20 = renderImage;
                  }
                  let obj3 = { cutout: tmp14, decorationCutout: tmp17 };
                  cResult[12] = tmp17;
                  cResult[13] = tmp14;
                  cResult[14] = obj3;
                  tmp19 = obj3;
                }
                const decorationCutoutForAvatarCutout = tmp(tmp2[11]).getDecorationCutoutForAvatarCutout(tmp14, tmp16);
                cResult[9] = tmp14;
                cResult[10] = -tmp13.decoration.top;
                cResult[11] = decorationCutoutForAvatarCutout;
                tmp17 = decorationCutoutForAvatarCutout;
                const tmpResult = tmp(tmp2[11]);
              }
            }
          }
        }
      }
    }
  }
  if (null == autoStatusCutout) {
    cResult[0] = cutout;
    cResult[1] = autoStatusCutout;
    cResult[2] = tmp5;
    cResult[3] = tmp6;
    cResult[4] = size;
    cResult[5] = status;
    cResult[6] = statusSizeOverride;
    cResult[7] = tmp12;
    cResult[8] = cutout;
    tmp14 = cutout;
  } else {
    let obj4 = { avatarSize: size, userStatus: status, isMobileOnline: tmp5, isVROnline: tmp6, padding: true === autoStatusCutout ? avatarStyle : autoStatusCutout.padding, typing: tmp12, statusSizeOverride };
    getAvatarStatusCutout(obj4);
  }
}) : (function Avatar(isMobileOnline) {
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
  let flag5 = isMobileOnline.playingSoundboard;
  if (flag5 === undefined) {
    flag5 = false;
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
  const tmp3 = closure_10(NORMAL);
  const decoration = tmp3;
  const items = [cutout, autoStatusCutout, flag, flag2, NORMAL, status, typing, statusSizeOverride, tmp3];
  const memo = NORMAL.useMemo(() => {
    if (null != autoStatusCutout) {
      const obj = { avatarSize: NORMAL, userStatus: status, isMobileOnline: flag, isVROnline: flag2, padding: true === autoStatusCutout ? timestampProducer : autoStatusCutout.padding, typing, statusSizeOverride };
      getAvatarStatusCutout(obj);
    } else {
      const obj2 = { cutout, decorationCutout: avatar_decorations_AvatarDecorationUtils.getDecorationCutoutForAvatarCutout(cutout, -decoration.decoration.top) };
      return obj2;
    }
  }, items);
  let obj = { style: null, needsOffscreenAlphaCompositing: null, accessible: null, accessibilityLabel: null, children: null };
  let StatusWithTyping = flag;
  ({ cutout: cutout2, decorationCutout } = memo);
  const items1 = [flag(status[7]).styles[NORMAL], tmp3.container, style];
  obj.style = items1;
  obj.needsOffscreenAlphaCompositing = needsOffscreenAlphaCompositing;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  if (!flag4) {
    if (!flag5) {
      const items2 = [null, , , , ];
      let obj2 = { disablePlaceholder, style: avatarStyle, cutout: cutout2 };
      if (null == source) {
        if (null == user) {
          if (null == channel) {
            items2[1] = null;
            let tmp34 = null;
            if (null != avatarDecoration) {
              const obj3 = { size: null, avatarDecoration: null, decorationStyle: null, animate: null, cutout: null };
              const tmp37 = flag2(tmp7[14]);
              obj3.size = StatusWithTyping(tmp7[11]).getDecorationSizeForAvatarSize(NORMAL);
              obj3.avatarDecoration = avatarDecoration;
              obj3.decorationStyle = tmp3.decoration;
              obj3.animate = flag3;
              obj3.cutout = decorationCutout;
              tmp34 = decoration(tmp37, obj3, avatarDecoration.asset);
              const StatusWithTypingResult = StatusWithTyping(tmp7[11]);
            }
            items2[2] = tmp34;
            let tmp38 = null;
            if (null != status) {
              tmp38 = null;
              if (status !== autoStatusCutout.UNKNOWN) {
                if (statusSizeOverride == null) {
                  statusSizeOverride = getStatusSize(NORMAL);
                }
                let merged1 = null;
                if (null != statusSizeOverride) {
                  const obj4 = { size: statusSizeOverride, isMobileOnline: flag, isVROnline: flag2, status, streaming, style: null };
                  const items3 = [tmp3.status, statusStyle];
                  obj4.style = items3;
                  merged1 = obj4;
                }
                if (null == merged1) {
                  tmp38 = null;
                } else {
                  if (!typing) {
                    const obj5 = {};
                    const merged = Object.assign(merged1);
                    let tmp49 = decoration(flag2(tmp7[15]), obj5);
                    const tmp45 = flag2(tmp7[15]);
                  }
                  StatusWithTyping = StatusWithTyping(tmp7[15]).StatusWithTyping;
                  const obj6 = {};
                  merged1 = Object.assign(merged1);
                  obj6.typing = typing;
                  user = user.id;
                  obj6.userId = user;
                  tmp49 = decoration(StatusWithTyping, obj6);
                }
              }
            }
            items2[3] = tmp38;
            if (deaf) {
              const obj7 = { style: null, children: null };
              const items4 = [, ];
              ({ status: arr8[0], voiceStatus: arr8[1] } = tmp3);
              obj7.style = items4;
              const obj8 = { size: flag2(tmp7[16]).Sizes.REFRESH_SMALL_16, source: flag2(tmp7[17]), color: flag2(tmp7[6]).unsafe_rawColors.WHITE };
              obj7.children = decoration(flag2(tmp7[16]), obj8);
              let tmp54 = decoration(cutout, obj7);
              const tmp60 = flag2(tmp7[16]);
            } else if (mute) {
              const obj9 = { style: null, children: null };
              const items5 = [, ];
              ({ status: arr7[0], voiceStatus: arr7[1] } = tmp3);
              obj9.style = items5;
              const obj10 = { size: flag2(tmp7[16]).Sizes.REFRESH_SMALL_16, source: flag2(tmp7[18]), color: flag2(tmp7[6]).unsafe_rawColors.WHITE };
              obj9.children = decoration(flag2(tmp7[16]), obj10);
              tmp54 = decoration(cutout, obj9);
              const tmp57 = flag2(tmp7[16]);
            }
            items2[4] = tmp54;
            obj.children = items2;
            return closure_9(cutout, obj);
          }
        }
      }
      if (null != source) {
        const obj11 = { source, size: NORMAL, animate: flag3 };
        obj2 = Object.assign(obj2);
        let tmp15 = decoration(flag2(tmp7[7]), obj11);
        const tmp30 = flag2(tmp7[7]);
      } else if (null != user) {
        const obj12 = { user, guildId, size: NORMAL, animate: flag3 };
        const merged2 = Object.assign(obj2);
        tmp15 = decoration(flag2(tmp7[7]), obj12);
        const tmp24 = flag2(tmp7[7]);
      } else if (null != channel) {
        const obj13 = { channel, size: NORMAL, animate: flag3 };
        const merged3 = Object.assign(obj2);
        tmp15 = decoration(flag2(tmp7[7]), obj13);
        const tmp18 = flag2(tmp7[7]);
      }
    }
  }
  const sum = StatusWithTyping(tmp7[7]).AVATAR_SIZE_MAP[NORMAL] + 4;
  const obj14 = { style: null };
  if (isStageCall) {
    const items6 = [tmp3.stageSpeaking, ];
    const size = { width: sum, height: sum, borderRadius: sum / 2 };
    items6[1] = size;
    obj14.style = items6;
    tmp10(flag2(tmp7[19]), obj14);
  } else {
    const items7 = [flag5 ? tmp3.soundboard : tmp3.speaking, ];
    const size1 = { width: sum, height: sum, borderRadius: sum / 2 };
    items7[1] = size1;
    obj14.style = items7;
    tmp10(cutout, obj14);
  }
}));
export const AvatarSizes = fn(14350).AvatarSizes;
export { getStatusSize };