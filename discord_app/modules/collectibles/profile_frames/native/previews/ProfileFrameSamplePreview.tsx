// discord_app/modules/collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../../design/tokens/native/useToken.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import _modDef6052 from "../../../../../../_runtime/metro/06052__.js";
import Constants from "../../../../user_profile/native/Constants.tsx";
import ProfileFrameLayerOrder from "../../../../../../discord_common/js/shared/shared-constants/ProfileFrameLayerOrder.tsx";
import ProfileFrameDefault from "../ProfileFrame.tsx";
import scaleProfileFrameDefault from "../../scaleProfileFrame.tsx";
import CollectiblesPreviewConstants from "../../../native/CollectiblesPreviewConstants.tsx";
import _modDef8479 from "../../../../../../discord_assets/assets/collectibles/previews/sample_profile_small-2x.png.js";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let previewWidth;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
({ StyleSheet: c3, View: closure_4 } = react_native);
const SAMPLE_PROFILE_ASPECT_RATIO = CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO;
const UserProfileThemeTypes = Constants.UserProfileThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = {
  profileFrameContainer: { flex: 1 },
  profileContainer: obj2,
  sampleProfile: { width: "100%", aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO },
};
obj2 = {
  flex: 1,
  overflow: "hidden",
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_NORMAL,
  borderRadius: nativeDefault.radii.xs,
};
let closure_9 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (previewWidth) => {
      let items;
      let items3;
      let overflowBottom;
      let overflowHorizontal;
      let overflowTop;
      let previewHeight;
      let profileBackgroundColor;
      let profileFrame;
      let rect;
      let rect1;
      let rect2;
      let rect3;
      let size1;
      let size2;
      let size3;
      const obj = react2;
      const cResult = obj.c(84);
      ({ profileFrame, previewHeight, profileBackgroundColor } = previewWidth);
      previewWidth = previewWidth.previewWidth;
      const tmp4 = closure_9();
      const innerWidth = profileFrame.innerWidth;
      const result = (previewWidth * innerWidth) / (innerWidth + 2 * profileFrame.overflowHorizontal);
      if (cResult[0] === profileFrame) {
        let tmp6;
        if (cResult[1] === result) {
          tmp6 = cResult[2];
        }
        ({ overflowTop, overflowBottom, overflowHorizontal } = tmp6);
        const diff = previewHeight - overflowTop - overflowBottom;
        const tmpResult = useToken;
        const token = tmpResult.useToken(profileBackgroundColor);
        if (cResult[3] === previewHeight) {
          if (cResult[4] === profileFrame) {
            let tmp10;
            if (cResult[5] === result) {
              tmp10 = cResult[6];
            }
            const xs = nativeDefault.radii.xs;
            if (cResult[7] === -overflowTop) {
              if (cResult[8] === -overflowBottom) {
                if (cResult[9] === -overflowHorizontal) {
                  let tmp22;
                  let tmp23;
                  let tmp27;
                  if (cResult[10] === -overflowHorizontal) {
                    tmp22 = cResult[11];
                  }
                  if (cResult[12] !== overflowTop) {
                    const obj2 = { style: rect };
                    rect = {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: overflowTop,
                      backgroundColor: "black",
                    };
                    const tmp26 = metroRequire(React3, obj2);
                    cResult[12] = overflowTop;
                    cResult[13] = tmp26;
                    tmp23 = tmp26;
                  } else {
                    tmp23 = cResult[13];
                  }
                  if (cResult[14] !== overflowBottom) {
                    const obj3 = { style: rect1 };
                    rect1 = {
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: overflowBottom,
                      backgroundColor: "black",
                    };
                    const tmp30 = metroRequire(React3, obj3);
                    cResult[14] = overflowBottom;
                    cResult[15] = tmp30;
                    tmp27 = tmp30;
                  } else {
                    tmp27 = cResult[15];
                  }
                  if (cResult[16] === overflowBottom) {
                    if (cResult[17] === overflowHorizontal) {
                      let tmp31;
                      if (cResult[18] === overflowTop) {
                        tmp31 = cResult[19];
                      }
                      if (cResult[20] === overflowBottom) {
                        if (cResult[21] === overflowHorizontal) {
                          let tmp35;
                          if (cResult[22] === overflowTop) {
                            tmp35 = cResult[23];
                          }
                          const diff1 = overflowTop - xs;
                          const diff2 = overflowHorizontal - xs;
                          if (cResult[24] === diff1) {
                            let tmp41;
                            if (cResult[25] === diff2) {
                              tmp41 = cResult[26];
                            }
                            const diff3 = overflowTop - xs;
                            const diff4 = overflowHorizontal - xs;
                            if (cResult[27] === diff3) {
                              let tmp47;
                              if (cResult[28] === diff4) {
                                tmp47 = cResult[29];
                              }
                              const diff5 = overflowBottom - xs;
                              const diff6 = overflowHorizontal - xs;
                              if (cResult[30] === diff5) {
                                let tmp53;
                                if (cResult[31] === diff6) {
                                  tmp53 = cResult[32];
                                }
                                const diff7 = overflowBottom - xs;
                                const diff8 = overflowHorizontal - xs;
                                if (cResult[33] === diff7) {
                                  let tmp59;
                                  if (cResult[34] === diff8) {
                                    tmp59 = cResult[35];
                                  }
                                  if (cResult[36] === tmp31) {
                                    if (cResult[37] === tmp35) {
                                      if (cResult[38] === tmp41) {
                                        if (cResult[39] === tmp47) {
                                          if (cResult[40] === tmp53) {
                                            if (cResult[41] === tmp59) {
                                              if (cResult[42] === tmp23) {
                                                let tmp63;
                                                if (cResult[43] === tmp27) {
                                                  tmp63 = cResult[44];
                                                }
                                                if (cResult[45] === overflowBottom) {
                                                  if (cResult[46] === overflowHorizontal) {
                                                    let tmp68;
                                                    if (cResult[47] === overflowTop) {
                                                      tmp68 = cResult[48];
                                                    }
                                                    if (cResult[49] === tmp10) {
                                                      let tmp69;
                                                      if (cResult[50] === tmp68) {
                                                        tmp69 = cResult[51];
                                                      }
                                                      if (cResult[52] === tmp63) {
                                                        if (cResult[53] === tmp69) {
                                                          let tmp73;
                                                          if (cResult[54] === tmp22) {
                                                            tmp73 = cResult[55];
                                                          }
                                                          if (cResult[56] === overflowBottom) {
                                                            if (cResult[57] === overflowHorizontal) {
                                                              if (cResult[58] === overflowTop) {
                                                                let tmp76;
                                                                if (cResult[59] === result) {
                                                                  tmp76 = cResult[60];
                                                                }
                                                                if (cResult[61] === tmp4.profileFrameContainer) {
                                                                  let tmp77;
                                                                  let tmp79;
                                                                  if (cResult[62] === tmp76) {
                                                                    tmp77 = cResult[63];
                                                                  }
                                                                  if (null == profileBackgroundColor) {
                                                                    tmp10 = tmp73;
                                                                  }
                                                                  if (cResult[64] !== token) {
                                                                    let tmp80 = null != token;
                                                                    if (tmp80) {
                                                                      tmp80 = { backgroundColor: token };
                                                                      const obj4 = { backgroundColor: token };
                                                                    }
                                                                    cResult[64] = token;
                                                                    cResult[65] = tmp80;
                                                                    tmp79 = tmp80;
                                                                  } else {
                                                                    tmp79 = cResult[65];
                                                                  }
                                                                  if (cResult[66] === tmp4.profileContainer) {
                                                                    let tmp81;
                                                                    let tmp83;
                                                                    let tmp84;
                                                                    if (cResult[67] === tmp79) {
                                                                      tmp81 = cResult[68];
                                                                    }
                                                                    const _Symbol = Symbol;
                                                                    if (
                                                                      cResult[69] ===
                                                                      Symbol.for("react.memo_cache_sentinel")
                                                                    ) {
                                                                      const obj5 = { uri: _modDef8479 };
                                                                      cResult[69] = obj5;
                                                                      tmp83 = obj5;
                                                                    } else {
                                                                      tmp83 = cResult[69];
                                                                    }
                                                                    if (cResult[70] !== tmp4.sampleProfile) {
                                                                      const obj6 = {
                                                                        source: tmp83,
                                                                        style: tmp4.sampleProfile,
                                                                        resizeMode: "cover",
                                                                      };
                                                                      const tmp86 = metroRequire(
                                                                        FastImageDefault,
                                                                        obj6,
                                                                      );
                                                                      cResult[70] = tmp4.sampleProfile;
                                                                      cResult[71] = tmp86;
                                                                      tmp84 = tmp86;
                                                                    } else {
                                                                      tmp84 = cResult[71];
                                                                    }
                                                                    if (cResult[72] === tmp81) {
                                                                      let tmp87;
                                                                      if (cResult[73] === tmp84) {
                                                                        tmp87 = cResult[74];
                                                                      }
                                                                      if (cResult[75] === profileFrame) {
                                                                        if (cResult[76] === diff) {
                                                                          let tmp91;
                                                                          if (cResult[77] === result) {
                                                                            tmp91 = cResult[78];
                                                                          }
                                                                          if (cResult[79] === tmp77) {
                                                                            if (cResult[80] === tmp10) {
                                                                              if (cResult[81] === tmp87) {
                                                                                let tmp97;
                                                                                if (cResult[82] === tmp91) {
                                                                                  tmp97 = cResult[83];
                                                                                }
                                                                                return tmp97;
                                                                              }
                                                                            }
                                                                          }
                                                                          const obj7 = {
                                                                            style: tmp77,
                                                                            children: items,
                                                                          };
                                                                          items = [tmp10, tmp87, tmp91];
                                                                          const tmp100 = metroImportDefault(
                                                                            React3,
                                                                            obj7,
                                                                          );
                                                                          cResult[79] = tmp77;
                                                                          cResult[80] = tmp10;
                                                                          cResult[81] = tmp87;
                                                                          cResult[82] = tmp91;
                                                                          cResult[83] = tmp100;
                                                                          tmp97 = tmp100;
                                                                        }
                                                                      }
                                                                      const obj8 = {
                                                                        frame: profileFrame,
                                                                        filterLayer,
                                                                        profileThemeType: UserProfileThemeTypes.PREVIEW,
                                                                        frameOrder:
                                                                          ProfileFrameLayerOrder.ProfileFrameLayerOrder
                                                                            .FRONT,
                                                                        containerWidth: result,
                                                                        containerHeight: diff,
                                                                      };
                                                                      const tmp17Result = ProfileFrameDefault;
                                                                      const tmp96 = metroRequire(tmp17Result, obj8);
                                                                      cResult[75] = profileFrame;
                                                                      cResult[76] = diff;
                                                                      cResult[77] = result;
                                                                      cResult[78] = tmp96;
                                                                      tmp91 = tmp96;
                                                                    }
                                                                    const obj9 = { style: tmp81, children: tmp84 };
                                                                    const tmp90 = metroRequire(React3, obj9);
                                                                    cResult[72] = tmp81;
                                                                    cResult[73] = tmp84;
                                                                    cResult[74] = tmp90;
                                                                    tmp87 = tmp90;
                                                                  }
                                                                  const items1 = [tmp4.profileContainer, tmp79];
                                                                  cResult[66] = tmp4.profileContainer;
                                                                  cResult[67] = tmp79;
                                                                  cResult[68] = items1;
                                                                  tmp81 = items1;
                                                                }
                                                                const items2 = [tmp4.profileFrameContainer, tmp76];
                                                                cResult[61] = tmp4.profileFrameContainer;
                                                                cResult[62] = tmp76;
                                                                cResult[63] = items2;
                                                                tmp77 = items2;
                                                              }
                                                            }
                                                          }
                                                          const obj10 = {
                                                            width: result,
                                                            marginTop: overflowTop,
                                                            marginBottom: overflowBottom,
                                                            marginHorizontal: overflowHorizontal,
                                                          };
                                                          cResult[56] = overflowBottom;
                                                          cResult[57] = overflowHorizontal;
                                                          cResult[58] = overflowTop;
                                                          cResult[59] = result;
                                                          cResult[60] = obj10;
                                                          tmp76 = obj10;
                                                        }
                                                      }
                                                      const obj11 = {
                                                        style: tmp22,
                                                        maskElement: tmp63,
                                                        children: tmp69,
                                                      };
                                                      const tmp75 = metroRequire(_modDef6052, obj11);
                                                      cResult[52] = tmp63;
                                                      cResult[53] = tmp69;
                                                      cResult[54] = tmp22;
                                                      cResult[55] = tmp75;
                                                      tmp73 = tmp75;
                                                    }
                                                    const obj12 = { style: tmp68, children: tmp10 };
                                                    const tmp72 = metroRequire(React3, obj12);
                                                    cResult[49] = tmp10;
                                                    cResult[50] = tmp68;
                                                    cResult[51] = tmp72;
                                                    tmp69 = tmp72;
                                                  }
                                                }
                                                const obj13 = {
                                                  marginTop: overflowTop,
                                                  marginBottom: overflowBottom,
                                                  marginHorizontal: overflowHorizontal,
                                                  flex: 1,
                                                };
                                                cResult[45] = overflowBottom;
                                                cResult[46] = overflowHorizontal;
                                                cResult[47] = overflowTop;
                                                cResult[48] = obj13;
                                                tmp68 = obj13;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj14 = { style: _false.absoluteFill, children: items3 };
                                  items3 = [tmp23, tmp27, tmp31, tmp35, tmp41, tmp47, tmp53, tmp59];
                                  const tmp67 = metroImportDefault(React3, obj14);
                                  cResult[36] = tmp31;
                                  cResult[37] = tmp35;
                                  cResult[38] = tmp41;
                                  cResult[39] = tmp47;
                                  cResult[40] = tmp53;
                                  cResult[41] = tmp59;
                                  cResult[42] = tmp23;
                                  cResult[43] = tmp27;
                                  cResult[44] = tmp67;
                                  tmp63 = tmp67;
                                }
                                const obj15 = { style: size };
                                size = {
                                  position: "absolute",
                                  bottom: diff7,
                                  right: diff8,
                                  width: 2 * xs,
                                  height: 2 * xs,
                                  borderRadius: xs,
                                  backgroundColor: "black",
                                };
                                const tmp62 = metroRequire(React3, obj15);
                                cResult[33] = diff7;
                                cResult[34] = diff8;
                                cResult[35] = tmp62;
                                tmp59 = tmp62;
                              }
                              const obj16 = { style: size1 };
                              size1 = {
                                position: "absolute",
                                bottom: diff5,
                                left: diff6,
                                width: 2 * xs,
                                height: 2 * xs,
                                borderRadius: xs,
                                backgroundColor: "black",
                              };
                              const tmp56 = metroRequire(React3, obj16);
                              cResult[30] = diff5;
                              cResult[31] = diff6;
                              cResult[32] = tmp56;
                              tmp53 = tmp56;
                            }
                            const obj17 = { style: size2 };
                            size2 = {
                              position: "absolute",
                              top: diff3,
                              right: diff4,
                              width: 2 * xs,
                              height: 2 * xs,
                              borderRadius: xs,
                              backgroundColor: "black",
                            };
                            const tmp50 = metroRequire(React3, obj17);
                            cResult[27] = diff3;
                            cResult[28] = diff4;
                            cResult[29] = tmp50;
                            tmp47 = tmp50;
                          }
                          const obj18 = { style: size3 };
                          size3 = {
                            position: "absolute",
                            top: diff1,
                            left: diff2,
                            width: 2 * xs,
                            height: 2 * xs,
                            borderRadius: xs,
                            backgroundColor: "black",
                          };
                          const tmp44 = metroRequire(React3, obj18);
                          cResult[24] = diff1;
                          cResult[25] = diff2;
                          cResult[26] = tmp44;
                          tmp41 = tmp44;
                        }
                      }
                      const obj19 = { style: rect2 };
                      rect2 = {
                        position: "absolute",
                        top: overflowTop,
                        bottom: overflowBottom,
                        right: 0,
                        width: overflowHorizontal,
                        backgroundColor: "black",
                      };
                      const tmp38 = metroRequire(React3, obj19);
                      cResult[20] = overflowBottom;
                      cResult[21] = overflowHorizontal;
                      cResult[22] = overflowTop;
                      cResult[23] = tmp38;
                      tmp35 = tmp38;
                    }
                  }
                  const obj20 = { style: rect3 };
                  rect3 = {
                    position: "absolute",
                    top: overflowTop,
                    bottom: overflowBottom,
                    left: 0,
                    width: overflowHorizontal,
                    backgroundColor: "black",
                  };
                  const tmp34 = metroRequire(React3, obj20);
                  cResult[16] = overflowBottom;
                  cResult[17] = overflowHorizontal;
                  cResult[18] = overflowTop;
                  cResult[19] = tmp34;
                  tmp31 = tmp34;
                }
              }
            }
            const rect4 = {
              position: "absolute",
              top: -overflowTop,
              bottom: -overflowBottom,
              left: -overflowHorizontal,
              right: -overflowHorizontal,
            };
            cResult[7] = -overflowTop;
            cResult[8] = -overflowBottom;
            cResult[9] = -overflowHorizontal;
            cResult[10] = -overflowHorizontal;
            cResult[11] = rect4;
            tmp22 = rect4;
          }
        }
        const obj21 = {
          frame: profileFrame,
          filterLayer,
          profileThemeType: UserProfileThemeTypes.PREVIEW,
          frameOrder: ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK,
          containerWidth: result,
          containerHeight: previewHeight,
        };
        const tmp13 = ProfileFrameDefault;
        const tmp16 = metroRequire(tmp13, obj21);
        cResult[3] = previewHeight;
        cResult[4] = profileFrame;
        cResult[5] = result;
        cResult[6] = tmp16;
        tmp10 = tmp16;
      }
      const tmp7 = scaleProfileFrameDefault(profileFrame, result);
      cResult[0] = profileFrame;
      cResult[1] = result;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : (previewWidth) => {
      let items;
      let items1;
      let items2;
      let obj13;
      let obj17;
      let obj18;
      let obj4;
      let overflowBottom;
      let overflowHorizontal;
      let overflowTop;
      let previewHeight;
      let profileBackgroundColor;
      let profileFrame;
      let tmp3Result;
      ({ profileFrame, previewHeight, profileBackgroundColor } = previewWidth);
      previewWidth = previewWidth.previewWidth;
      const tmp = closure_9();
      const innerWidth = profileFrame.innerWidth;
      const result = (previewWidth * innerWidth) / (innerWidth + 2 * profileFrame.overflowHorizontal);
      ({ overflowTop, overflowBottom, overflowHorizontal } = scaleProfileFrameDefault(profileFrame, result));
      scaleProfileFrameDefault(profileFrame, result);
      const obj = useToken;
      const token = obj.useToken(profileBackgroundColor);
      const obj2 = {
        frame: profileFrame,
        filterLayer,
        profileThemeType: UserProfileThemeTypes.PREVIEW,
        frameOrder: ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK,
        containerWidth: result,
        containerHeight: previewHeight,
      };
      const tmp9 = ProfileFrameDefault;
      let tmp12 = metroRequire(tmp9, obj2);
      const xs = nativeDefault.radii.xs;
      const obj3 = {
        style: {
          position: "absolute",
          top: -overflowTop,
          bottom: -overflowBottom,
          left: -overflowHorizontal,
          right: -overflowHorizontal,
        },
        maskElement: metroImportDefault(React3, obj4),
        children: metroRequire(React3, obj13),
      };
      obj4 = { style: _false.absoluteFill, children: items };
      items = [, , , , , , ,];
      const obj5 = {
        style: { position: "absolute", top: 0, left: 0, right: 0, height: overflowTop, backgroundColor: "black" },
      };
      const tmp13 = _modDef6052;
      items[0] = metroRequire(React3, obj5);
      const obj6 = {
        style: { position: "absolute", bottom: 0, left: 0, right: 0, height: overflowBottom, backgroundColor: "black" },
      };
      items[1] = metroRequire(React3, obj6);
      const obj7 = {
        style: {
          position: "absolute",
          top: overflowTop,
          bottom: overflowBottom,
          left: 0,
          width: overflowHorizontal,
          backgroundColor: "black",
        },
      };
      items[2] = metroRequire(React3, obj7);
      const obj8 = {
        style: {
          position: "absolute",
          top: overflowTop,
          bottom: overflowBottom,
          right: 0,
          width: overflowHorizontal,
          backgroundColor: "black",
        },
      };
      items[3] = metroRequire(React3, obj8);
      const obj9 = {
        style: {
          position: "absolute",
          top: overflowTop - xs,
          left: overflowHorizontal - xs,
          width: 2 * xs,
          height: 2 * xs,
          borderRadius: xs,
          backgroundColor: "black",
        },
      };
      items[4] = metroRequire(React3, obj9);
      const obj10 = {
        style: {
          position: "absolute",
          top: overflowTop - xs,
          right: overflowHorizontal - xs,
          width: 2 * xs,
          height: 2 * xs,
          borderRadius: xs,
          backgroundColor: "black",
        },
      };
      items[5] = metroRequire(React3, obj10);
      const obj11 = {
        style: {
          position: "absolute",
          bottom: overflowBottom - xs,
          left: overflowHorizontal - xs,
          width: 2 * xs,
          height: 2 * xs,
          borderRadius: xs,
          backgroundColor: "black",
        },
      };
      items[6] = metroRequire(React3, obj11);
      const obj12 = {
        style: {
          position: "absolute",
          bottom: overflowBottom - xs,
          right: overflowHorizontal - xs,
          width: 2 * xs,
          height: 2 * xs,
          borderRadius: xs,
          backgroundColor: "black",
        },
      };
      items[7] = metroRequire(React3, obj12);
      const obj14 = { style: items1, children: items2 };
      items1 = [
        tmp.profileFrameContainer,
        { width: result, marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal },
      ];
      obj13 = {
        style: { marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal, flex: 1 },
        children: tmp12,
      };
      if (null == profileBackgroundColor) {
        tmp12 = metroRequire(tmp13, obj3);
      }
      items2 = [tmp12, ,];
      const items3 = [tmp.profileContainer];
      let tmp16 = null != token;
      if (tmp16) {
        tmp16 = { backgroundColor: token };
        const obj15 = { backgroundColor: token };
      }
      items3[1] = tmp16;
      const obj16 = { style: items3, children: metroRequire(tmp3Result, obj17) };
      obj17 = { source: obj18, style: tmp.sampleProfile, resizeMode: "cover" };
      obj18 = { uri: _modDef8479 };
      tmp3Result = FastImageDefault;
      items2[1] = metroRequire(React3, obj16);
      const obj19 = {
        frame: profileFrame,
        filterLayer,
        profileThemeType: UserProfileThemeTypes.PREVIEW,
        frameOrder: ProfileFrameLayerOrder.ProfileFrameLayerOrder.FRONT,
        containerWidth: result,
        containerHeight: previewHeight - overflowTop - overflowBottom,
      };
      const tmp3Result2 = ProfileFrameDefault;
      items2[2] = metroRequire(tmp3Result2, obj19);
      return metroImportDefault(React3, obj14);
    };
let size = size_mod;
let result = size.fileFinishedImporting(
  "modules/collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx",
);

export default tmp5;
