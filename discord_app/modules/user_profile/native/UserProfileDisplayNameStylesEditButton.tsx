// discord_app/modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import AssetRegistryDefault from "../../../../_runtime/13030_AssetRegistry.js";
import getDisplayNameStylesFontNameDefault from "../../display_name_styles/getDisplayNameStylesFontName.tsx";
import DisplayNameStylesColorSwatchDefault from "../../display_name_styles/native/DisplayNameStylesColorSwatch.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import Constants from "../../../Constants.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let navigateResult, obj1, obj4, tmp13, tmp15, tmp16, tmp2, tmp3, tmp8, tmp9, trackResult, user;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let size;
let _slicedToArray = _slicedToArray_mod;
({ useCallback: closure_4, useMemo: hasOwnProperty } = react);
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { ggContainer: size, noneIcon: obj2 };
size = {
  height: 48,
  width: 48,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: 4,
};
createStyles = createStyles.createStyles;
obj2 = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_11 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let closure_3;
      let first;
      let isTryItOut;
      let tmp10;
      let tmp7;
      const tmp = user;
      let obj = user(isTryItOut[9]);
      const cResult = obj.c(38);
      user = user.user;
      const guildId = user.guildId;
      isTryItOut = user.isTryItOut;
      const tmp4 = closure_11();
      _slicedToArray = tmp4;
      let obj2 = user(isTryItOut[10]);
      const nativeStackNavigation = obj2.useNativeStackNavigation();
      const obj3 = user(isTryItOut[11]);
      const isDisplayNameStylesFlywheelSettersEnabled = obj3.useIsDisplayNameStylesFlywheelSettersEnabled(
        "UserProfileDisplayNameStylesEditButton",
      );
      if (cResult[0] !== isDisplayNameStylesFlywheelSettersEnabled) {
        let items1;
        if (isDisplayNameStylesFlywheelSettersEnabled) {
          const items = [
            tmp(isTryItOut[12]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE,
          ];
          items1 = items;
        } else {
          items1 = [];
        }
        cResult[0] = isDisplayNameStylesFlywheelSettersEnabled;
        cResult[1] = items1;
        tmp7 = items1;
      } else {
        tmp7 = cResult[1];
      }
      const tmpResult = tmp(isTryItOut[13]);
      [first, tmp10] = tmpResult.useSelectedDismissibleContent(tmp7, undefined, true);
      let closure_5 = tmp10;
      const tmpResult3 = tmp(isTryItOut[14]);
      const guildMemberOrUserPendingDisplayNameStyles = tmpResult3.useGuildMemberOrUserPendingDisplayNameStyles(
        user,
        guildId,
      );
      let tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
      if (isTryItOut) {
        tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.tryItOutDisplayNameStyles;
      }
      if (cResult[2] === guildId) {
        if (cResult[3] === tryItOutDisplayNameStyles) {
          let tmp12;
          if (cResult[4] === user.id) {
            tmp12 = cResult[5];
          }
          const tmp14 = guildId(isTryItOut[15])(tmp12);
          let closure_6 = tmp14;
          let effectId;
          const useDisplayNameStylesEffectConfig = tmp(isTryItOut[16]).useDisplayNameStylesEffectConfig;
          tmp(isTryItOut[16]);
          if (tmp14 != null) {
            effectId = tmp14.effectId;
          }
          if (effectId == null) {
            effectId = tmp(tmp2[17]).DisplayNameEffect.SOLID;
          }
          if (cResult[6] === guildId) {
            if (cResult[7] === isTryItOut) {
              if (cResult[8] === tmp10) {
                let tmp19;
                let combined;
                if (cResult[9] === nativeStackNavigation) {
                  tmp19 = cResult[10];
                }
                if (null != tmp14) {
                  let tmp24;
                  if (cResult[12] !== tmp14.fontId) {
                    const intl2 = tmp(tmp2[19]).intl;
                    const stringResult = intl2.string(guildId(isTryItOut[20])(tmp14.fontId));
                    class W {
                      constructor() {
                        if (null == closure_6) {
                          tmp11 = jsx;
                          tmp12 = closure_0;
                          tmp13 = closure_2;
                          obj1 = { source: null, style: null };
                          tmp14 = closure_1;
                          tmp15 = closure_2;
                          Icon = closure_0(closure_2[21]).Icon;
                          obj1.source = closure_1(closure_2[22]);
                          tmp16 = closure_3;
                          obj1.style = closure_3.noneIcon;
                          tmp10 = jsx(Icon, obj1);
                        } else {
                          tmp2 = jsx;
                          tmp3 = View;
                          obj = { style: null, children: null };
                          tmp4 = closure_3;
                          obj.style = closure_3.ggContainer;
                          tmp5 = jsx;
                          tmp6 = closure_1;
                          tmp7 = closure_2;
                          obj4 = {
                            userId: null,
                            guildId: null,
                            userName: "Gg",
                            pendingDisplayNameStyles: null,
                            ignoreDisabledStylesSetting: true,
                            variant: "heading-xl/semibold",
                          };
                          tmp8 = user;
                          obj4.userId = user.id;
                          tmp9 = guildId;
                          obj4.guildId = guildId;
                          obj4.pendingDisplayNameStyles = tmp;
                          obj.children = jsx(closure_1(closure_2[23]), obj4);
                          tmp10 = jsx(View, obj);
                        }
                        return tmp10;
                      }
                    }
                    cResult[12] = tmp14.fontId;
                    cResult[13] = stringResult;
                    tmp24 = stringResult;
                  } else {
                    tmp24 = cResult[13];
                  }
                  const _HermesInternal = HermesInternal;
                  class W {
                    constructor() {
                      if (null == closure_6) {
                        tmp11 = jsx;
                        tmp12 = closure_0;
                        tmp13 = closure_2;
                        obj1 = { source: null, style: null };
                        tmp14 = closure_1;
                        tmp15 = closure_2;
                        Icon = closure_0(closure_2[21]).Icon;
                        obj1.source = closure_1(closure_2[22]);
                        tmp16 = closure_3;
                        obj1.style = closure_3.noneIcon;
                        tmp10 = jsx(Icon, obj1);
                      } else {
                        tmp2 = jsx;
                        tmp3 = View;
                        obj = { style: null, children: null };
                        tmp4 = closure_3;
                        obj.style = closure_3.ggContainer;
                        tmp5 = jsx;
                        tmp6 = closure_1;
                        tmp7 = closure_2;
                        obj4 = {
                          userId: null,
                          guildId: null,
                          userName: "Gg",
                          pendingDisplayNameStyles: null,
                          ignoreDisabledStylesSetting: true,
                          variant: "heading-xl/semibold",
                        };
                        tmp8 = user;
                        obj4.userId = user.id;
                        tmp9 = guildId;
                        obj4.guildId = guildId;
                        obj4.pendingDisplayNameStyles = tmp;
                        obj.children = jsx(closure_1(closure_2[23]), obj4);
                        tmp10 = jsx(View, obj);
                      }
                      return tmp10;
                    }
                  }
                  combined = "" + tmp24 + " + " + tmp18.name;
                } else {
                  const _Symbol = Symbol;
                  class W {
                    constructor() {
                      if (null == closure_6) {
                        tmp11 = jsx;
                        tmp12 = closure_0;
                        tmp13 = closure_2;
                        obj1 = { source: null, style: null };
                        tmp14 = closure_1;
                        tmp15 = closure_2;
                        Icon = closure_0(closure_2[21]).Icon;
                        obj1.source = closure_1(closure_2[22]);
                        tmp16 = closure_3;
                        obj1.style = closure_3.noneIcon;
                        tmp10 = jsx(Icon, obj1);
                      } else {
                        tmp2 = jsx;
                        tmp3 = View;
                        obj = { style: null, children: null };
                        tmp4 = closure_3;
                        obj.style = closure_3.ggContainer;
                        tmp5 = jsx;
                        tmp6 = closure_1;
                        tmp7 = closure_2;
                        obj4 = {
                          userId: null,
                          guildId: null,
                          userName: "Gg",
                          pendingDisplayNameStyles: null,
                          ignoreDisabledStylesSetting: true,
                          variant: "heading-xl/semibold",
                        };
                        tmp8 = user;
                        obj4.userId = user.id;
                        tmp9 = guildId;
                        obj4.guildId = guildId;
                        obj4.pendingDisplayNameStyles = tmp;
                        obj.children = jsx(closure_1(closure_2[23]), obj4);
                        tmp10 = jsx(View, obj);
                      }
                      return tmp10;
                    }
                  }
                  if (tmp20 === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(tmp2[19]).intl;
                    const stringResult1 = intl.string(tmp(isTryItOut[19]).t.PoWNfe);
                    class W {
                      constructor() {
                        if (null == closure_6) {
                          tmp11 = jsx;
                          tmp12 = closure_0;
                          tmp13 = closure_2;
                          obj1 = { source: null, style: null };
                          tmp14 = closure_1;
                          tmp15 = closure_2;
                          Icon = closure_0(closure_2[21]).Icon;
                          obj1.source = closure_1(closure_2[22]);
                          tmp16 = closure_3;
                          obj1.style = closure_3.noneIcon;
                          tmp10 = jsx(Icon, obj1);
                        } else {
                          tmp2 = jsx;
                          tmp3 = View;
                          obj = { style: null, children: null };
                          tmp4 = closure_3;
                          obj.style = closure_3.ggContainer;
                          tmp5 = jsx;
                          tmp6 = closure_1;
                          tmp7 = closure_2;
                          obj4 = {
                            userId: null,
                            guildId: null,
                            userName: "Gg",
                            pendingDisplayNameStyles: null,
                            ignoreDisabledStylesSetting: true,
                            variant: "heading-xl/semibold",
                          };
                          tmp8 = user;
                          obj4.userId = user.id;
                          tmp9 = guildId;
                          obj4.guildId = guildId;
                          obj4.pendingDisplayNameStyles = tmp;
                          obj.children = jsx(closure_1(closure_2[23]), obj4);
                          tmp10 = jsx(View, obj);
                        }
                        return tmp10;
                      }
                    }
                    cResult[11] = stringResult1;
                    combined = stringResult1;
                  } else {
                    combined = cResult[11];
                  }
                }
                if (cResult[14] === tmp14) {
                  if (cResult[15] === guildId) {
                    if (cResult[16] === tmp4.ggContainer) {
                      if (cResult[17] === tmp4.noneIcon) {
                        let tmp27;
                        let tmp30;
                        if (cResult[18] === user.id) {
                          tmp27 = cResult[19];
                        }
                        if (cResult[20] !== tmp14) {
                          class R {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[24]);
                                if (tmp != null) {
                                  colors = tmp.colors;
                                }
                                if (colors == null) {
                                  colors = [];
                                }
                                obj = { colors: null, effectId: null };
                                obj.colors = colors;
                                effectId = undefined;
                                if (tmp != null) {
                                  effectId = tmp.effectId;
                                }
                                obj.effectId = effectId;
                                tmp3Result = tmp3(tmp6, obj);
                              }
                              return tmp3Result;
                            }
                          }
                          cResult[20] = tmp14;
                          class W {
                            constructor() {
                              if (null == closure_6) {
                                tmp11 = jsx;
                                tmp12 = closure_0;
                                tmp13 = closure_2;
                                obj1 = { source: null, style: null };
                                tmp14 = closure_1;
                                tmp15 = closure_2;
                                Icon = closure_0(closure_2[21]).Icon;
                                obj1.source = closure_1(closure_2[22]);
                                tmp16 = closure_3;
                                obj1.style = closure_3.noneIcon;
                                tmp10 = jsx(Icon, obj1);
                              } else {
                                tmp2 = jsx;
                                tmp3 = View;
                                obj = { style: null, children: null };
                                tmp4 = closure_3;
                                obj.style = closure_3.ggContainer;
                                tmp5 = jsx;
                                tmp6 = closure_1;
                                tmp7 = closure_2;
                                obj4 = {
                                  userId: null,
                                  guildId: null,
                                  userName: "Gg",
                                  pendingDisplayNameStyles: null,
                                  ignoreDisabledStylesSetting: true,
                                  variant: "heading-xl/semibold",
                                };
                                tmp8 = user;
                                obj4.userId = user.id;
                                tmp9 = guildId;
                                obj4.guildId = guildId;
                                obj4.pendingDisplayNameStyles = tmp;
                                obj.children = jsx(closure_1(closure_2[23]), obj4);
                                tmp10 = jsx(View, obj);
                              }
                              return tmp10;
                            }
                          }
                          cResult[21] = R;
                        } else {
                          class R {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[24]);
                                if (tmp != null) {
                                  colors = tmp.colors;
                                }
                                if (colors == null) {
                                  colors = [];
                                }
                                obj = { colors: null, effectId: null };
                                obj.colors = colors;
                                effectId = undefined;
                                if (tmp != null) {
                                  effectId = tmp.effectId;
                                }
                                obj.effectId = effectId;
                                tmp3Result = tmp3(tmp6, obj);
                              }
                              return tmp3Result;
                            }
                          }
                        }
                        class W {
                          constructor() {
                            if (null == closure_6) {
                              tmp11 = jsx;
                              tmp12 = closure_0;
                              tmp13 = closure_2;
                              obj1 = { source: null, style: null };
                              tmp14 = closure_1;
                              tmp15 = closure_2;
                              Icon = closure_0(closure_2[21]).Icon;
                              obj1.source = closure_1(closure_2[22]);
                              tmp16 = closure_3;
                              obj1.style = closure_3.noneIcon;
                              tmp10 = jsx(Icon, obj1);
                            } else {
                              tmp2 = jsx;
                              tmp3 = View;
                              obj = { style: null, children: null };
                              tmp4 = closure_3;
                              obj.style = closure_3.ggContainer;
                              tmp5 = jsx;
                              tmp6 = closure_1;
                              tmp7 = closure_2;
                              obj4 = {
                                userId: null,
                                guildId: null,
                                userName: "Gg",
                                pendingDisplayNameStyles: null,
                                ignoreDisabledStylesSetting: true,
                                variant: "heading-xl/semibold",
                              };
                              tmp8 = user;
                              obj4.userId = user.id;
                              tmp9 = guildId;
                              obj4.guildId = guildId;
                              obj4.pendingDisplayNameStyles = tmp;
                              obj.children = jsx(closure_1(closure_2[23]), obj4);
                              tmp10 = jsx(View, obj);
                            }
                            return tmp10;
                          }
                        }
                        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                          class R {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[24]);
                                if (tmp != null) {
                                  colors = tmp.colors;
                                }
                                if (colors == null) {
                                  colors = [];
                                }
                                obj = { colors: null, effectId: null };
                                obj.colors = colors;
                                effectId = undefined;
                                if (tmp != null) {
                                  effectId = tmp.effectId;
                                }
                                obj.effectId = effectId;
                                tmp3Result = tmp3(tmp6, obj);
                              }
                              return tmp3Result;
                            }
                          }
                          const stringResult2 = obj7.string(guildId(isTryItOut[25])["86GtGH"]);
                          class W {
                            constructor() {
                              if (null == closure_6) {
                                tmp11 = jsx;
                                tmp12 = closure_0;
                                tmp13 = closure_2;
                                obj1 = { source: null, style: null };
                                tmp14 = closure_1;
                                tmp15 = closure_2;
                                Icon = closure_0(closure_2[21]).Icon;
                                obj1.source = closure_1(closure_2[22]);
                                tmp16 = closure_3;
                                obj1.style = closure_3.noneIcon;
                                tmp10 = jsx(Icon, obj1);
                              } else {
                                tmp2 = jsx;
                                tmp3 = View;
                                obj = { style: null, children: null };
                                tmp4 = closure_3;
                                obj.style = closure_3.ggContainer;
                                tmp5 = jsx;
                                tmp6 = closure_1;
                                tmp7 = closure_2;
                                obj4 = {
                                  userId: null,
                                  guildId: null,
                                  userName: "Gg",
                                  pendingDisplayNameStyles: null,
                                  ignoreDisabledStylesSetting: true,
                                  variant: "heading-xl/semibold",
                                };
                                tmp8 = user;
                                obj4.userId = user.id;
                                tmp9 = guildId;
                                obj4.guildId = guildId;
                                obj4.pendingDisplayNameStyles = tmp;
                                obj.children = jsx(closure_1(closure_2[23]), obj4);
                                tmp10 = jsx(View, obj);
                              }
                              return tmp10;
                            }
                          }
                          cResult[22] = stringResult2;
                          tmp30 = stringResult2;
                        } else {
                          class R {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[24]);
                                if (tmp != null) {
                                  colors = tmp.colors;
                                }
                                if (colors == null) {
                                  colors = [];
                                }
                                obj = { colors: null, effectId: null };
                                obj.colors = colors;
                                effectId = undefined;
                                if (tmp != null) {
                                  effectId = tmp.effectId;
                                }
                                obj.effectId = effectId;
                                tmp3Result = tmp3(tmp6, obj);
                              }
                              return tmp3Result;
                            }
                          }
                        }
                        const tmp32 =
                          first ===
                          tmp(isTryItOut[12]).DismissibleContent
                            .DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE;
                        if (cResult[23] !== tmp32) {
                          class R {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[24]);
                                if (tmp != null) {
                                  colors = tmp.colors;
                                }
                                if (colors == null) {
                                  colors = [];
                                }
                                obj = { colors: null, effectId: null };
                                obj.colors = colors;
                                effectId = undefined;
                                if (tmp != null) {
                                  effectId = tmp.effectId;
                                }
                                obj.effectId = effectId;
                                tmp3Result = tmp3(tmp6, obj);
                              }
                              return tmp3Result;
                            }
                          }
                          class W {
                            constructor() {
                              if (null == closure_6) {
                                tmp11 = jsx;
                                tmp12 = closure_0;
                                tmp13 = closure_2;
                                obj1 = { source: null, style: null };
                                tmp14 = closure_1;
                                tmp15 = closure_2;
                                Icon = closure_0(closure_2[21]).Icon;
                                obj1.source = closure_1(closure_2[22]);
                                tmp16 = closure_3;
                                obj1.style = closure_3.noneIcon;
                                tmp10 = jsx(Icon, obj1);
                              } else {
                                tmp2 = jsx;
                                tmp3 = View;
                                obj = { style: null, children: null };
                                tmp4 = closure_3;
                                obj.style = closure_3.ggContainer;
                                tmp5 = jsx;
                                tmp6 = closure_1;
                                tmp7 = closure_2;
                                obj4 = {
                                  userId: null,
                                  guildId: null,
                                  userName: "Gg",
                                  pendingDisplayNameStyles: null,
                                  ignoreDisabledStylesSetting: true,
                                  variant: "heading-xl/semibold",
                                };
                                tmp8 = user;
                                obj4.userId = user.id;
                                tmp9 = guildId;
                                obj4.guildId = guildId;
                                obj4.pendingDisplayNameStyles = tmp;
                                obj.children = jsx(closure_1(closure_2[23]), obj4);
                                tmp10 = jsx(View, obj);
                              }
                              return tmp10;
                            }
                          }
                          cResult[23] = tmp32;
                          cResult[24] = tmp34;
                        } else {
                          class R {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[24]);
                                if (tmp != null) {
                                  colors = tmp.colors;
                                }
                                if (colors == null) {
                                  colors = [];
                                }
                                obj = { colors: null, effectId: null };
                                obj.colors = colors;
                                effectId = undefined;
                                if (tmp != null) {
                                  effectId = tmp.effectId;
                                }
                                obj.effectId = effectId;
                                tmp3Result = tmp3(tmp6, obj);
                              }
                              return tmp3Result;
                            }
                          }
                        }
                        if (cResult[25] !== combined) {
                          class R {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[24]);
                                if (tmp != null) {
                                  colors = tmp.colors;
                                }
                                if (colors == null) {
                                  colors = [];
                                }
                                obj = { colors: null, effectId: null };
                                obj.colors = colors;
                                effectId = undefined;
                                if (tmp != null) {
                                  effectId = tmp.effectId;
                                }
                                obj.effectId = effectId;
                                tmp3Result = tmp3(tmp6, obj);
                              }
                              return tmp3Result;
                            }
                          }
                          tmp36[0] = combined;
                          class W {
                            constructor() {
                              if (null == closure_6) {
                                tmp11 = jsx;
                                tmp12 = closure_0;
                                tmp13 = closure_2;
                                obj1 = { source: null, style: null };
                                tmp14 = closure_1;
                                tmp15 = closure_2;
                                Icon = closure_0(closure_2[21]).Icon;
                                obj1.source = closure_1(closure_2[22]);
                                tmp16 = closure_3;
                                obj1.style = closure_3.noneIcon;
                                tmp10 = jsx(Icon, obj1);
                              } else {
                                tmp2 = jsx;
                                tmp3 = View;
                                obj = { style: null, children: null };
                                tmp4 = closure_3;
                                obj.style = closure_3.ggContainer;
                                tmp5 = jsx;
                                tmp6 = closure_1;
                                tmp7 = closure_2;
                                obj4 = {
                                  userId: null,
                                  guildId: null,
                                  userName: "Gg",
                                  pendingDisplayNameStyles: null,
                                  ignoreDisabledStylesSetting: true,
                                  variant: "heading-xl/semibold",
                                };
                                tmp8 = user;
                                obj4.userId = user.id;
                                tmp9 = guildId;
                                obj4.guildId = guildId;
                                obj4.pendingDisplayNameStyles = tmp;
                                obj.children = jsx(closure_1(closure_2[23]), obj4);
                                tmp10 = jsx(View, obj);
                              }
                              return tmp10;
                            }
                          }
                          cResult[26] = tmp36;
                        } else {
                          class R {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[24]);
                                if (tmp != null) {
                                  colors = tmp.colors;
                                }
                                if (colors == null) {
                                  colors = [];
                                }
                                obj = { colors: null, effectId: null };
                                obj.colors = colors;
                                effectId = undefined;
                                if (tmp != null) {
                                  effectId = tmp.effectId;
                                }
                                obj.effectId = effectId;
                                tmp3Result = tmp3(tmp6, obj);
                              }
                              return tmp3Result;
                            }
                          }
                        }
                        if (cResult[27] !== tmp27) {
                          class R {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[24]);
                                if (tmp != null) {
                                  colors = tmp.colors;
                                }
                                if (colors == null) {
                                  colors = [];
                                }
                                obj = { colors: null, effectId: null };
                                obj.colors = colors;
                                effectId = undefined;
                                if (tmp != null) {
                                  effectId = tmp.effectId;
                                }
                                obj.effectId = effectId;
                                tmp3Result = tmp3(tmp6, obj);
                              }
                              return tmp3Result;
                            }
                          }
                          cResult[27] = tmp27;
                          class W {
                            constructor() {
                              if (null == closure_6) {
                                tmp11 = jsx;
                                tmp12 = closure_0;
                                tmp13 = closure_2;
                                obj1 = { source: null, style: null };
                                tmp14 = closure_1;
                                tmp15 = closure_2;
                                Icon = closure_0(closure_2[21]).Icon;
                                obj1.source = closure_1(closure_2[22]);
                                tmp16 = closure_3;
                                obj1.style = closure_3.noneIcon;
                                tmp10 = jsx(Icon, obj1);
                              } else {
                                tmp2 = jsx;
                                tmp3 = View;
                                obj = { style: null, children: null };
                                tmp4 = closure_3;
                                obj.style = closure_3.ggContainer;
                                tmp5 = jsx;
                                tmp6 = closure_1;
                                tmp7 = closure_2;
                                obj4 = {
                                  userId: null,
                                  guildId: null,
                                  userName: "Gg",
                                  pendingDisplayNameStyles: null,
                                  ignoreDisabledStylesSetting: true,
                                  variant: "heading-xl/semibold",
                                };
                                tmp8 = user;
                                obj4.userId = user.id;
                                tmp9 = guildId;
                                obj4.guildId = guildId;
                                obj4.pendingDisplayNameStyles = tmp;
                                obj.children = jsx(closure_1(closure_2[23]), obj4);
                                tmp10 = jsx(View, obj);
                              }
                              return tmp10;
                            }
                          }
                          cResult[28] = tmp38;
                        } else {
                          class R {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[24]);
                                if (tmp != null) {
                                  colors = tmp.colors;
                                }
                                if (colors == null) {
                                  colors = [];
                                }
                                obj = { colors: null, effectId: null };
                                obj.colors = colors;
                                effectId = undefined;
                                if (tmp != null) {
                                  effectId = tmp.effectId;
                                }
                                obj.effectId = effectId;
                                tmp3Result = tmp3(tmp6, obj);
                              }
                              return tmp3Result;
                            }
                          }
                        }
                        class M {
                          constructor() {
                            obj = closure_1(closure_2[18]);
                            trackResult = obj.track(AnalyticEvents.DISPLAY_NAME_STYLES_FROM_SETTINGS);
                            obj1 = { guildId, isTryItOut };
                            navigateResult = closure_4.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, obj1);
                            tmp3 = closure_5(ContentDismissActionType.TAKE_ACTION);
                            return;
                          }
                        }
                        if (cResult[31] === combined) {
                          class R {
                            constructor() {
                              tmp = closure_6;
                              tmp3Result = null;
                              if (null != closure_6) {
                                tmp4 = closure_1;
                                tmp5 = closure_2;
                                tmp3 = jsx;
                                colors = undefined;
                                tmp6 = closure_1(closure_2[24]);
                                if (tmp != null) {
                                  colors = tmp.colors;
                                }
                                if (colors == null) {
                                  colors = [];
                                }
                                obj = { colors: null, effectId: null };
                                obj.colors = colors;
                                effectId = undefined;
                                if (tmp != null) {
                                  effectId = tmp.effectId;
                                }
                                obj.effectId = effectId;
                                tmp3Result = tmp3(tmp6, obj);
                              }
                              return tmp3Result;
                            }
                          }
                        }
                        cResult[31] = combined;
                        cResult[32] = tmp19;
                        cResult[33] = tmp34;
                        cResult[34] = tmp36;
                        cResult[35] = tmp38;
                        cResult[36] = tmp39;
                        cResult[37] = jsx(tmp(isTryItOut[26]).UserProfileEditFormButton, {
                          label: tmp30,
                          labelTrailing: tmp34,
                          buttonText: combined,
                          accessibilityValue: tmp36,
                          onPress: tmp19,
                          leading: tmp38,
                          trailing: tmp39,
                        });
                        const tmp42 = jsx(tmp(isTryItOut[26]).UserProfileEditFormButton, {
                          label: tmp30,
                          labelTrailing: tmp34,
                          buttonText: combined,
                          accessibilityValue: tmp36,
                          onPress: tmp19,
                          leading: tmp38,
                          trailing: tmp39,
                        });
                      }
                    }
                  }
                }
                class W {
                  constructor() {
                    if (null == closure_6) {
                      tmp11 = jsx;
                      tmp12 = closure_0;
                      tmp13 = closure_2;
                      obj1 = { source: null, style: null };
                      tmp14 = closure_1;
                      tmp15 = closure_2;
                      Icon = closure_0(closure_2[21]).Icon;
                      obj1.source = closure_1(closure_2[22]);
                      tmp16 = closure_3;
                      obj1.style = closure_3.noneIcon;
                      tmp10 = jsx(Icon, obj1);
                    } else {
                      tmp2 = jsx;
                      tmp3 = View;
                      obj = { style: null, children: null };
                      tmp4 = closure_3;
                      obj.style = closure_3.ggContainer;
                      tmp5 = jsx;
                      tmp6 = closure_1;
                      tmp7 = closure_2;
                      obj4 = {
                        userId: null,
                        guildId: null,
                        userName: "Gg",
                        pendingDisplayNameStyles: null,
                        ignoreDisabledStylesSetting: true,
                        variant: "heading-xl/semibold",
                      };
                      tmp8 = user;
                      obj4.userId = user.id;
                      tmp9 = guildId;
                      obj4.guildId = guildId;
                      obj4.pendingDisplayNameStyles = tmp;
                      obj.children = jsx(closure_1(closure_2[23]), obj4);
                      tmp10 = jsx(View, obj);
                    }
                    return tmp10;
                  }
                }
                cResult[14] = tmp14;
                cResult[15] = guildId;
                cResult[16] = tmp4.ggContainer;
                class M {
                  constructor() {
                    obj = closure_1(closure_2[18]);
                    trackResult = obj.track(AnalyticEvents.DISPLAY_NAME_STYLES_FROM_SETTINGS);
                    obj1 = { guildId, isTryItOut };
                    navigateResult = closure_4.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, obj1);
                    tmp3 = closure_5(ContentDismissActionType.TAKE_ACTION);
                    return;
                  }
                }
                cResult[18] = user.id;
                cResult[19] = W;
                tmp27 = W;
              }
            }
          }
          class M {
            constructor() {
              obj = closure_1(closure_2[18]);
              trackResult = obj.track(AnalyticEvents.DISPLAY_NAME_STYLES_FROM_SETTINGS);
              obj1 = { guildId, isTryItOut };
              navigateResult = closure_4.navigate(UserSettingsSections.DISPLAY_NAME_STYLES, obj1);
              tmp3 = closure_5(ContentDismissActionType.TAKE_ACTION);
              return;
            }
          }
          cResult[6] = guildId;
          cResult[7] = isTryItOut;
          cResult[8] = tmp10;
          cResult[9] = nativeStackNavigation;
          cResult[10] = M;
          tmp19 = M;
        }
      }
      const obj6 = {
        userId: user.id,
        guildId,
        pendingDisplayNameStyles: tryItOutDisplayNameStyles,
        ignoreDisabledStylesSetting: true,
      };
      cResult[2] = guildId;
      cResult[3] = tryItOutDisplayNameStyles;
      cResult[4] = user.id;
      cResult[5] = obj6;
      tmp12 = obj6;
    }
  : (user) => {
      let closure_3;
      let items1;
      let pendingDisplayNameStyles;
      let tryItOutDisplayNameStyles;
      user = user.user;
      const guildId = user.guildId;
      const isTryItOut = user.isTryItOut;
      let closure_5;
      let closure_6;
      let displayNameStylesEffectConfig;
      const tmp = closure_11();
      _slicedToArray = tmp;
      let obj = user(isTryItOut[10]);
      const nativeStackNavigation = obj.useNativeStackNavigation();
      let obj2 = user(isTryItOut[11]);
      const isDisplayNameStylesFlywheelSettersEnabled = obj2.useIsDisplayNameStylesFlywheelSettersEnabled(
        "UserProfileDisplayNameStylesEditButton",
      );
      const tmp6 = user(isTryItOut[13]);
      const useSelectedDismissibleContent = tmp6.useSelectedDismissibleContent;
      if (isDisplayNameStylesFlywheelSettersEnabled) {
        const items = [user(tmp3[12]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
        items1 = items;
      } else {
        items1 = [];
      }
      const tmp7 = _slicedToArray(useSelectedDismissibleContent(items1, undefined, true), 2);
      closure_5 = tmp9;
      const first = tmp7[0];
      const tmp2Result = user(isTryItOut[14]);
      const guildMemberOrUserPendingDisplayNameStyles = tmp2Result.useGuildMemberOrUserPendingDisplayNameStyles(
        user,
        guildId,
      );
      ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
      const obj3 = { userId: user.id, guildId, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true };
      const tmp11 = guildId;
      const tmp12 = guildId(isTryItOut[15]);
      if (isTryItOut) {
        pendingDisplayNameStyles = tryItOutDisplayNameStyles;
      }
      const tmp12Result = tmp12(obj3);
      closure_6 = tmp12Result;
      let effectId;
      const useDisplayNameStylesEffectConfig = user(tmp3[16]).useDisplayNameStylesEffectConfig;
      user(isTryItOut[16]);
      if (tmp12Result != null) {
        effectId = tmp12Result.effectId;
      }
      if (effectId == null) {
        effectId = tmp2(tmp3[17]).DisplayNameEffect.SOLID;
      }
      displayNameStylesEffectConfig = useDisplayNameStylesEffectConfig(effectId);
      const items2 = [guildId, isTryItOut, nativeStackNavigation, tmp7[1]];
      const items3 = [displayNameStylesEffectConfig, tmp12Result];
      const tmp17 = nativeStackNavigation(() => {
        const obj = AnalyticsUtilsDefault;
        obj.track(metroImportDefault.DISPLAY_NAME_STYLES_FROM_SETTINGS);
        const obj2 = { guildId, isTryItOut };
        nativeStackNavigation.navigate(metroImportAll.DISPLAY_NAME_STYLES, obj2);
        closure_5(ContentDismissActionType.TAKE_ACTION);
      }, items2);
      const tmp18 = closure_5(() => {
        let stringResult;
        if (null == closure_6) {
          const intl2 = intl3.intl;
          stringResult = intl2.string(intl3.t.PoWNfe);
        } else {
          const intl = intl3.intl;
          const _HermesInternal = HermesInternal;
          stringResult =
            "" +
            intl.string(getDisplayNameStylesFontNameDefault(tmp.fontId)) +
            " + " +
            displayNameStylesEffectConfig.name;
        }
        return stringResult;
      }, items3);
      const items4 = [tmp12Result, guildId, user.id, tmp];
      const items5 = [tmp12Result];
      const tmp19 = nativeStackNavigation(() => {
        let tmp10;
        if (null == closure_6) {
          const Icon = native.Icon;
          tmp10 = <Icon source={AssetRegistryDefault} style={closure_3.noneIcon} />;
        } else {
          tmp10 = <View style={closure_3.ggContainer}>{null}</View>;
        }
        return tmp10;
      }, items4);
      const tmp20 = nativeStackNavigation(() => {
        let tmp3Result = null;
        if (null != closure_6) {
          let colors;
          DisplayNameStylesColorSwatchDefault;
          if (closure_6 != null) {
            colors = closure_6.colors;
          }
          if (colors == null) {
            colors = [];
          }
          let effectId;
          if (closure_6 != null) {
            effectId = closure_6.effectId;
          }
          tmp3Result = <tmp6 colors={colors} effectId={effectId} />;
        }
        return tmp3Result;
      }, items5);
      const UserProfileEditFormButton = tmp2(tmp3[26]).UserProfileEditFormButton;
      let intl = tmp2(tmp3[19]).intl;
      ({
        showPremiumIcon: true,
        showNewBadge:
          first === user(isTryItOut[12]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE,
      });
      const UserProfileEditFormLabelBadges = tmp2(tmp3[26]).UserProfileEditFormLabelBadges;
      return (
        <UserProfileEditFormButton
          label={intl.string(tmp11(isTryItOut[25])["86GtGH"])}
          labelTrailing={null}
          buttonText={tmp18}
          accessibilityValue={{ text: tmp18 }}
          onPress={tmp17}
          leading={tmp19()}
          trailing={tmp20()}
        />
      );
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx");

export default tmp5;
