// === Module 10512: TieredTenureBadgeActionSheet ===

// Module 10512 (TieredTenureBadgeActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import FastImageDefault from "FastImage" /* 6164 */;
import openUserSettings from "openUserSettings" /* 7084 */;
import TieredTenureBadgeUtils from "TieredTenureBadgeUtils" /* 7318 */;
import showUserProfileActionSheet from "showUserProfileActionSheet" /* 8279 */;
import useMobileTenureBadgeImages from "useMobileTenureBadgeImages" /* 10513 */;
import useTenureBadgeRequirementString from "useTenureBadgeRequirementString" /* 10538 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1391);
({ PremiumTypes: metroRequire, TieredTenureBadge: closure_7 } = PremiumConstants);
const Constants = fn(1085);
({ AnalyticsPages: closure_8, UserSettingsSections: closure_9 } = Constants);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const TIERED_TENURE_BADGE_ACTION_SHEET = "TIERED_TENURE_BADGE_ACTION_SHEET";
const createStyles = fn(5090);
let obj2 = { headerContainer: { paddingHorizontal: 24, alignItems: "center" }, title: { marginTop: 8, paddingHorizontal: 12, textAlign: "center" }, subtitle: { marginTop: 8, textAlign: "center" }, container: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingHorizontal: 24, marginTop: 16 }, rowContainer: { flexDirection: "row", width: "100%", height: 160, gap: 8, justifyContent: "center", alignItems: "center", marginTop: 24 }, rowContainerWithUsersBadge: { height: 186 }, badgeContainer: { minWidth: 110, height: "100%", paddingTop: 16, alignItems: "center", paddingHorizontal: 8 }, usersBadgeContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderWidth: 1.2, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.sm }, badgeName: { marginTop: 8 }, badgeRequirement: { marginTop: 4 }, badgePremiumSince: { width: 90, marginTop: 4, textAlign: "center" }, footer: { marginHorizontal: 24 } };
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function TieredTenureBadgeItem(arg0) {
  const cResult = c.c(39);
  ({ badge, isUsersBadge, premiumSince } = arg0);
  const tmp4 = closure_13();
  const mobileTenureBadgeImages = useMobileTenureBadgeImages.useMobileTenureBadgeImages(badge);
  if (mobileTenureBadgeImages != null) {
    const small = mobileTenureBadgeImages.small;
  }
  if (cResult[0] === badge) {
    if (cResult[1] === small) {
      if (cResult[2] === isUsersBadge) {
        if (cResult[3] === tmp4) {
          let tmp14 = cResult[12];
          let tmp15 = cResult[13];
        }
        const _Symbol = Symbol;
        if (tmp14 !== Symbol.for("react.early_return_sentinel")) {
          return tmp14;
        } else {
          if (cResult[19] === tmp6) {
            if (cResult[20] === tmp8) {
              if (cResult[21] === tmp9) {
                if (cResult[22] === tmp10) {
                  if (cResult[23] === tmp11) {
                    let tmp31 = cResult[24];
                  }
                  if (cResult[25] === tmp4.badgeRequirement) {
                    if (cResult[26] === tmp15) {
                      let tmp34 = cResult[27];
                    }
                    if (cResult[28] === isUsersBadge) {
                      if (cResult[29] === premiumSince) {
                        if (cResult[30] === tmp4.badgePremiumSince) {
                          let tmp37 = cResult[31];
                        }
                        if (cResult[32] === tmp7) {
                          if (cResult[33] === tmp37) {
                            if (cResult[34] === tmp12) {
                              if (cResult[35] === tmp13) {
                                if (cResult[36] === tmp31) {
                                }
                              }
                            }
                          }
                        }
                        const obj3 = { style: tmp12, children: null };
                        const items = [tmp13, tmp31, tmp34, tmp37];
                        obj3.children = items;
                        const tmp47 = closure_1_11(tmp7, obj3);
                        cResult[32] = tmp7;
                        cResult[33] = tmp37;
                        cResult[34] = tmp12;
                        cResult[35] = tmp13;
                        cResult[36] = tmp31;
                        cResult[37] = tmp34;
                        cResult[38] = tmp47;
                      }
                    }
                    let tmp38 = isUsersBadge;
                    if (isUsersBadge) {
                      tmp38 = null != premiumSince;
                    }
                    if (tmp38) {
                      const obj4 = { style: tmp4.badgePremiumSince, variant: "text-xs/normal", color: "text-muted", children: null };
                      const intl2 = util.intl;
                      const obj5 = { date: null };
                      const _Date = Date;
                      const date = new Date(premiumSince);
                      obj5.date = date;
                      obj4.children = intl2.formatToPlainString(util.t.Hu4jfi, obj5);
                      tmp38 = collapsed(Text_Text.Text, obj4);
                    }
                    cResult[28] = isUsersBadge;
                    cResult[29] = premiumSince;
                    cResult[30] = tmp4.badgePremiumSince;
                    cResult[31] = tmp38;
                    tmp37 = tmp38;
                  }
                  const obj6 = { style: tmp4.badgeRequirement, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: tmp15 };
                  const tmp36 = collapsed(Text_Text.Text, obj6);
                  cResult[25] = tmp4.badgeRequirement;
                  cResult[26] = tmp15;
                  cResult[27] = tmp36;
                  tmp34 = tmp36;
                }
              }
            }
          }
          const obj7 = { style: tmp8, variant: tmp9, color: tmp10, children: tmp11 };
          const tmp33 = collapsed(tmp6, obj7);
          cResult[19] = tmp6;
          cResult[20] = tmp8;
          cResult[21] = tmp9;
          cResult[22] = tmp10;
          cResult[23] = tmp11;
          cResult[24] = tmp33;
          tmp31 = tmp33;
        }
      }
    }
  }
  const forResult = Symbol.for("react.early_return_sentinel");
  let nameUnformatted = TieredTenureBadgeUtils.getTieredTenureBadgeData(badge);
  const tmpResult = TieredTenureBadgeUtils;
  let tenureReqNumMonths;
  if (nameUnformatted != null) {
    tenureReqNumMonths = nameUnformatted.tenureReqNumMonths;
  }
  const tenureBadgeRequirementString = useTenureBadgeRequirementString.getTenureBadgeRequirementString(badge, tenureReqNumMonths);
  if (null == nameUnformatted) {
    cResult[0] = badge;
    cResult[1] = small;
    cResult[2] = isUsersBadge;
    cResult[3] = tmp4;
    cResult[4] = undefined;
    cResult[5] = undefined;
    cResult[6] = undefined;
    cResult[7] = undefined;
    cResult[8] = undefined;
    cResult[9] = undefined;
    cResult[10] = undefined;
    cResult[11] = undefined;
    cResult[12] = null;
    cResult[13] = tenureBadgeRequirementString;
    tmp14 = null;
    tmp15 = tenureBadgeRequirementString;
  } else {
    let usersBadgeContainer = isUsersBadge;
    if (isUsersBadge) {
      usersBadgeContainer = tmp4.usersBadgeContainer;
    }
    if (cResult[14] === tmp4.badgeContainer) {
      if (cResult[17] !== small) {
        const obj8 = { resizeMode: "contain", source: small };
        const tmp24 = collapsed(FastImageDefault, obj8);
        cResult[17] = small;
        cResult[18] = tmp24;
      }
      const Text = Text_Text.Text;
      const badgeName = tmp4.badgeName;
      const intl = util.intl;
      nameUnformatted = nameUnformatted.nameUnformatted;
      intl.string(nameUnformatted);
    }
    const items1 = [tmp4.badgeContainer, usersBadgeContainer];
    cResult[14] = tmp4.badgeContainer;
    cResult[15] = usersBadgeContainer;
    cResult[16] = items1;
  }
  const tmpResult2 = useTenureBadgeRequirementString;
}) : (function TieredTenureBadgeItem(arg0) {
  ({ badge, isUsersBadge, premiumSince } = arg0);
  const tmp = closure_13();
  const mobileTenureBadgeImages = useMobileTenureBadgeImages.useMobileTenureBadgeImages(badge);
  if (mobileTenureBadgeImages != null) {
    const small = mobileTenureBadgeImages.small;
  }
  const tieredTenureBadgeData = TieredTenureBadgeUtils.getTieredTenureBadgeData(badge);
  useTenureBadgeRequirementString;
  if (tieredTenureBadgeData != null) {
    const tenureReqNumMonths = tieredTenureBadgeData.tenureReqNumMonths;
  }
  let tmp9Result = null;
  if (null != tieredTenureBadgeData) {
    const items = [tmp.badgeContainer, ];
    let usersBadgeContainer = isUsersBadge;
    if (isUsersBadge) {
      usersBadgeContainer = tmp.usersBadgeContainer;
    }
    const obj2 = { style: null, children: null };
    items[1] = usersBadgeContainer;
    obj2.style = items;
    const obj3 = { resizeMode: "contain", source: small };
    const items1 = [collapsed(FastImageDefault, obj3), , , ];
    const obj4 = { style: tmp.badgeName, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj4.children = intl.string(tieredTenureBadgeData.nameUnformatted);
    items1[1] = collapsed(Text_Text.Text, obj4);
    const obj5 = { style: tmp.badgeRequirement, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: tmp7 };
    items1[2] = collapsed(Text_Text.Text, obj5);
    if (isUsersBadge) {
      isUsersBadge = null != premiumSince;
    }
    if (isUsersBadge) {
      const obj6 = { style: tmp.badgePremiumSince, variant: "text-xs/normal", color: "text-muted", children: null };
      const intl2 = util.intl;
      const obj7 = { date: null };
      const _Date = Date;
      const date = new Date(premiumSince);
      obj7.date = date;
      obj6.children = intl2.formatToPlainString(util.t.Hu4jfi, obj7);
      isUsersBadge = collapsed(Text_Text.Text, obj6);
    }
    items1[3] = isUsersBadge;
    obj2.children = items1;
    tmp9Result = closure_1_11(View, obj2);
  }
  return tmp9Result;
});
ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderWidth: 1.2, borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.sm };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TieredTenureBadgeActionSheet(userId) {
  let length;
  let sum;
  const cResult = userId(tieredTenureBadgeDataForUser[9]).c(74);
  userId = userId.userId;
  const shouldShowCTA = userId.shouldShowCTA;
  const tmp5 = closure_13();
  importDefault = tmp5;
  let obj = userId(tieredTenureBadgeDataForUser[9]);
  const tmp4 = undefined === shouldShowCTA || shouldShowCTA;
  tieredTenureBadgeDataForUser = userId(tieredTenureBadgeDataForUser[16]).useTieredTenureBadgeDataForUser(userId);
  const tmpResult = userId(tieredTenureBadgeDataForUser[16]);
  const premiumSinceForUser = userId(tieredTenureBadgeDataForUser[16]).usePremiumSinceForUser(userId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp8 = items;
    tmp9 = fn;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult5 = userId(tieredTenureBadgeDataForUser[16]);
  const stateFromStores = userId(tieredTenureBadgeDataForUser[17]).useStateFromStores(tmp8, tmp9);
  if (cResult[2] !== stateFromStores) {
    const isPremiumResult = tmp(tmp2[18]).isPremium(stateFromStores, closure_6.TIER_2);
    cResult[2] = stateFromStores;
    cResult[3] = isPremiumResult;
    let tmp12 = isPremiumResult;
    const tmpResult7 = tmp(tmp2[18]);
  } else {
    tmp12 = cResult[3];
  }
  let premiumType;
  if (stateFromStores != null) {
    premiumType = stateFromStores.premiumType;
  }
  if (cResult[4] !== premiumType) {
    const isPremiumAtLeastResult = tmp(tmp2[18]).isPremiumAtLeast(premiumType, closure_6.TIER_0);
    cResult[4] = premiumType;
    cResult[5] = isPremiumAtLeastResult;
    let tmp16 = isPremiumAtLeastResult;
    const tmpResult8 = tmp(tmp2[18]);
  } else {
    tmp16 = cResult[5];
  }
  let id;
  if (tieredTenureBadgeDataForUser != null) {
    id = tieredTenureBadgeDataForUser.id;
  }
  if (cResult[6] === tmp12) {
    if (cResult[7] === id) {
      if (cResult[8] === userId) {
        let tmp20 = cResult[9];
      }
      let id1;
      if (tieredTenureBadgeDataForUser != null) {
        id1 = tieredTenureBadgeDataForUser.id;
      }
      if (cResult[10] !== (null == id1)) {
        let obj2 = { disableTrack: tmp22 };
        cResult[10] = tmp22;
        cResult[11] = obj2;
        let tmp23 = obj2;
      } else {
        tmp23 = cResult[11];
      }
      let id2;
      if (tieredTenureBadgeDataForUser != null) {
        id2 = tieredTenureBadgeDataForUser.id;
      }
      if (cResult[12] !== id2) {
        const items1 = [id2];
        cResult[12] = id2;
        cResult[13] = items1;
        let tmp25 = items1;
      } else {
        tmp25 = cResult[13];
      }
      require("useTrackImpression")(tmp20, tmp23, tmp25);
      const bottom = require("useSafeAreaInsets")().bottom;
      if (cResult[14] !== userId) {
        const fn2 = function q() {
          openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
          const obj2 = { screen: constants2.PREMIUM };
          ActionSheetActionCreatorsDefault.hideActionSheet(TIERED_TENURE_BADGE_ACTION_SHEET);
          const obj4 = ActionSheetActionCreatorsDefault;
          obj4.hideActionSheet(showUserProfileActionSheet.getUserProfileActionSheetKey(userId));
        };
        cResult[14] = userId;
        cResult[15] = fn2;
        let tmp28 = fn2;
      } else {
        tmp28 = cResult[15];
      }
      ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(false, tmp28, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet"));
      const _Symbol = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const _Object = Object;
        const values = Object.values(closure_7);
        const items2 = [];
        let num13 = 0;
        if (0 < values.length) {
          do {
            sum = num13 + 3;
            let arr = items2.push(values.slice(num13, sum));
            num13 = sum;
            length = values.length;
          } while (sum < length);
        }
        cResult[16] = items2;
        let arr3 = items2;
      } else {
        arr3 = cResult[16];
      }
      if (cResult[17] !== tmp12) {
        const intl = userId(tieredTenureBadgeDataForUser[15]).intl;
        const string = intl.string;
        let Og62j7 = userId(tieredTenureBadgeDataForUser[15]).t;
        if (tmp12) {
          Og62j7 = Og62j7.Og62j7;
          let stringResult = string(Og62j7);
        } else {
          stringResult = string(Og62j7.RtGeFS);
        }
        cResult[17] = tmp12;
        cResult[18] = stringResult;
      } else {
        if (cResult[19] === tmp5.title) {
          if (cResult[20] === tmp35) {
            let tmp40 = cResult[21];
          }
          if (cResult[22] === tmp12) {
            if (cResult[23] === tmp28) {
              if (cResult[25] === tmp5.subtitle) {
                if (cResult[26] === tmp45) {
                  let tmp49 = cResult[27];
                }
                if (cResult[28] === tmp5.headerContainer) {
                  if (cResult[29] === tmp40) {
                    if (cResult[30] === tmp49) {
                      let tmp54 = cResult[31];
                    }
                    if (tmp12) {
                      if (cResult[32] !== bottom) {
                        let obj3 = { paddingBottom: bottom };
                        cResult[32] = bottom;
                        cResult[33] = obj3;
                        let tmp74 = obj3;
                      } else {
                        tmp74 = cResult[33];
                      }
                      if (cResult[34] === tmp5.footer) {
                        if (cResult[35] === tmp74) {
                          let tmp75 = cResult[36];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl4 = userId(tieredTenureBadgeDataForUser[15]).intl;
                          const stringResult1 = intl4.string(userId(tieredTenureBadgeDataForUser[15]).t.hvVgAZ);
                          cResult[37] = stringResult1;
                          let tmp76 = stringResult1;
                        } else {
                          tmp76 = cResult[37];
                        }
                        if (cResult[38] !== tmp28) {
                          let obj4 = { shiny: false, text: tmp76, onPress: tmp28 };
                          const tmp84 = closure_10(require("NitroUpsellButton"), obj4);
                          cResult[38] = tmp28;
                          cResult[39] = tmp84;
                          let tmp80 = tmp84;
                        } else {
                          tmp80 = cResult[39];
                        }
                        if (cResult[40] === tmp75) {
                        }
                        const obj5 = { style: tmp75, children: tmp80 };
                        const tmp88 = closure_10(View, obj5);
                        cResult[40] = tmp75;
                        cResult[41] = tmp80;
                        cResult[42] = tmp88;
                      }
                      const items3 = [tmp5.footer, tmp74];
                      cResult[34] = tmp5.footer;
                      cResult[35] = tmp74;
                      cResult[36] = items3;
                      tmp75 = items3;
                    } else {
                      if (cResult[43] !== bottom) {
                        const obj6 = { paddingBottom: bottom };
                        cResult[43] = bottom;
                        cResult[44] = obj6;
                        let tmp58 = obj6;
                      } else {
                        tmp58 = cResult[44];
                      }
                      if (cResult[45] === tmp5.footer) {
                        if (cResult[46] === tmp58) {
                          let tmp59 = cResult[47];
                        }
                        if (cResult[48] !== tmp16) {
                          const intl3 = userId(tieredTenureBadgeDataForUser[15]).intl;
                          const string2 = intl3.string;
                          let IJI7yk = userId(tieredTenureBadgeDataForUser[15]).t;
                          if (tmp16) {
                            IJI7yk = IJI7yk.IJI7yk;
                            let string2Result = string2(IJI7yk);
                          } else {
                            string2Result = string2(IJI7yk.pj0XBN);
                          }
                          cResult[48] = tmp16;
                          cResult[49] = string2Result;
                        } else {
                          if (cResult[50] === loading) {
                            if (cResult[51] === onPress) {
                              if (cResult[52] === tmp60) {
                                let tmp65 = cResult[53];
                              }
                              if (cResult[54] === tmp59) {
                                const sum1 = bottom + 64;
                                if (cResult[57] !== sum1) {
                                  const obj7 = { paddingBottom: sum1 };
                                  cResult[57] = sum1;
                                  cResult[58] = obj7;
                                  let tmp92 = obj7;
                                } else {
                                  tmp92 = cResult[58];
                                }
                                if (cResult[59] === tmp5.container) {
                                  if (cResult[60] === tmp92) {
                                    let tmp93 = cResult[61];
                                  }
                                  let id3;
                                  if (tieredTenureBadgeDataForUser != null) {
                                    id3 = tieredTenureBadgeDataForUser.id;
                                  }
                                  if (cResult[62] === id3) {
                                    if (cResult[63] === premiumSinceForUser) {
                                      if (cResult[64] === tmp5.rowContainer) {
                                        if (cResult[65] === tmp5.rowContainerWithUsersBadge) {
                                          let tmp95 = cResult[66];
                                        }
                                        if (cResult[67] === tmp54) {
                                          if (cResult[68] === tmp93) {
                                            if (cResult[69] === tmp95) {
                                              let tmp98 = cResult[70];
                                            }
                                            if (cResult[71] === tmp90) {
                                              if (cResult[72] === tmp98) {
                                                let tmp103 = cResult[73];
                                              }
                                              return tmp103;
                                            }
                                            const obj8 = { scrollable: true, startExpanded: true, footer: tmp90, children: tmp98 };
                                            const tmp107 = closure_10(userId(tieredTenureBadgeDataForUser[28]).BottomSheet, obj8);
                                            cResult[71] = tmp90;
                                            cResult[72] = tmp98;
                                            cResult[73] = tmp107;
                                            tmp103 = tmp107;
                                          }
                                        }
                                        const obj9 = { contentContainerStyle: tmp93, children: null };
                                        const items4 = [tmp54, tmp95];
                                        obj9.children = items4;
                                        const tmp102 = closure_11(userId(tieredTenureBadgeDataForUser[27]).BottomSheetScrollView, obj9);
                                        cResult[67] = tmp54;
                                        cResult[68] = tmp93;
                                        cResult[69] = tmp95;
                                        cResult[70] = tmp102;
                                        tmp98 = tmp102;
                                      }
                                    }
                                  }
                                  const mapped = arr3.map((arr, index) => {
                                    const someResult = arr.some((item) => {
                                      let id;
                                      if (user != null) {
                                        id = user.id;
                                      }
                                      return item === id;
                                    });
                                    const items = [closure_1.rowContainer, ];
                                    let rowContainerWithUsersBadge = someResult;
                                    if (someResult) {
                                      rowContainerWithUsersBadge = closure_1.rowContainerWithUsersBadge;
                                    }
                                    items[1] = rowContainerWithUsersBadge;
                                    return collapsed(View, {
                                      style: items,
                                      children: arr.map((badge, index) => {
                                        const obj = { badge, isUsersBadge: null, premiumSince: null };
                                        let id;
                                        if (user != null) {
                                          id = user.id;
                                        }
                                        obj.isUsersBadge = badge === id;
                                        obj.premiumSince = premiumSince;
                                        return closure_2_10(closure_2_14, obj, index);
                                      })
                                    }, index);
                                  });
                                  let id4;
                                  if (tieredTenureBadgeDataForUser != null) {
                                    id4 = tieredTenureBadgeDataForUser.id;
                                  }
                                  cResult[62] = id4;
                                  cResult[63] = premiumSinceForUser;
                                  cResult[64] = tmp5.rowContainer;
                                  cResult[65] = tmp5.rowContainerWithUsersBadge;
                                  cResult[66] = mapped;
                                  tmp95 = mapped;
                                }
                                const items5 = [tmp5.container, tmp92];
                                cResult[59] = tmp5.container;
                                cResult[60] = tmp92;
                                cResult[61] = items5;
                                tmp93 = items5;
                              }
                              const obj10 = { style: tmp59, children: tmp65 };
                              const tmp73 = closure_10(View, obj10);
                              cResult[54] = tmp59;
                              cResult[55] = tmp65;
                              cResult[56] = tmp73;
                            }
                          }
                          const obj11 = { loading, text: cResult[49], onPress };
                          const tmp69 = closure_10(require("NitroUpsellButton"), obj11);
                          cResult[50] = loading;
                          cResult[51] = onPress;
                          cResult[52] = cResult[49];
                          cResult[53] = tmp69;
                          tmp65 = tmp69;
                        }
                      }
                      const items6 = [tmp5.footer, tmp58];
                      cResult[45] = tmp5.footer;
                      cResult[46] = tmp58;
                      cResult[47] = items6;
                      tmp59 = items6;
                    }
                  }
                }
                const obj12 = { style: tmp5.headerContainer, children: null };
                const items7 = [tmp40, tmp49];
                obj12.children = items7;
                const tmp57 = closure_11(View, obj12);
                cResult[28] = tmp5.headerContainer;
                cResult[29] = tmp40;
                cResult[30] = tmp49;
                cResult[31] = tmp57;
                tmp54 = tmp57;
              }
              const obj13 = { variant: "text-md/medium", color: "text-default", style: tmp5.subtitle, children: cResult[24] };
              const tmp53 = closure_10(userId(tieredTenureBadgeDataForUser[14]).Text, obj13);
              cResult[25] = tmp5.subtitle;
              cResult[26] = cResult[24];
              cResult[27] = tmp53;
              tmp49 = tmp53;
            }
          }
          let IdAP91 = tieredTenureBadgeDataForUser;
          const intl2 = userId(tieredTenureBadgeDataForUser[15]).intl;
          if (tmp12) {
            IdAP91 = tmp46(IdAP91[15]).t.IdAP91;
            let stringResult2 = intl2.string(IdAP91);
          } else {
            const obj14 = { learnMoreHook: tmp28 };
            stringResult2 = intl2.format(tmp46(IdAP91[15]).t["bF+q7R"], obj14);
          }
          cResult[22] = tmp12;
          cResult[23] = tmp28;
          cResult[24] = stringResult2;
        }
        const obj15 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp5.title, children: cResult[18] };
        const tmp44 = closure_10(userId(tieredTenureBadgeDataForUser[14]).Text, obj15);
        cResult[19] = tmp5.title;
        cResult[20] = cResult[18];
        cResult[21] = tmp44;
        tmp40 = tmp44;
      }
      const tmp31 = require("usePremiumFeatureUpsellGetNitro")(false, tmp28, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet");
    }
  }
  const obj16 = { type: userId(tieredTenureBadgeDataForUser[19]).ImpressionTypes.HALFSHEET, name: userId(tieredTenureBadgeDataForUser[19]).ImpressionNames.TIERED_TENURE_BADGE_MODAL, properties: { badge: id, premium_type: tmp12, viewed_user_id: userId } };
  cResult[6] = tmp12;
  cResult[7] = id;
  cResult[8] = userId;
  cResult[9] = obj16;
  tmp20 = obj16;
  const tmpResult6 = userId(tieredTenureBadgeDataForUser[17]);
}) : (function TieredTenureBadgeActionSheet(userId) {
  userId = userId.userId;
  let flag = userId.shouldShowCTA;
  if (flag === undefined) {
    flag = true;
  }
  let tieredTenureBadgeDataForUser;
  const tmp = closure_13();
  importDefault = tmp;
  tieredTenureBadgeDataForUser = userId(tieredTenureBadgeDataForUser[16]).useTieredTenureBadgeDataForUser(userId);
  let obj = userId(tieredTenureBadgeDataForUser[16]);
  noop = userId(tieredTenureBadgeDataForUser[16]).usePremiumSinceForUser(userId);
  let obj2 = userId(tieredTenureBadgeDataForUser[16]);
  let items = [UserStore];
  const stateFromStores = userId(tieredTenureBadgeDataForUser[17]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = userId(tieredTenureBadgeDataForUser[17]);
  const isPremiumResult = userId(tieredTenureBadgeDataForUser[18]).isPremium(stateFromStores, closure_6.TIER_2);
  let obj4 = userId(tieredTenureBadgeDataForUser[18]);
  let premiumType;
  if (stateFromStores != null) {
    premiumType = stateFromStores.premiumType;
  }
  const obj5 = userId(tieredTenureBadgeDataForUser[18]);
  const obj6 = { type: null, name: null, properties: null };
  const isPremiumAtLeastResult = userId(tieredTenureBadgeDataForUser[18]).isPremiumAtLeast(premiumType, closure_6.TIER_0);
  obj6.type = userId(tieredTenureBadgeDataForUser[19]).ImpressionTypes.HALFSHEET;
  obj6.name = userId(tieredTenureBadgeDataForUser[19]).ImpressionNames.TIERED_TENURE_BADGE_MODAL;
  let id;
  if (tieredTenureBadgeDataForUser != null) {
    id = tieredTenureBadgeDataForUser.id;
  }
  obj6.properties = { badge: id, premium_type: isPremiumResult, viewed_user_id: userId };
  let id1;
  if (tieredTenureBadgeDataForUser != null) {
    id1 = tieredTenureBadgeDataForUser.id;
  }
  let id2;
  if (tieredTenureBadgeDataForUser != null) {
    id2 = tieredTenureBadgeDataForUser.id;
  }
  const items1 = [id2];
  require("useTrackImpression")(obj6, { disableTrack: null == id1 }, items1);
  const bottom = tmp10(tmp3[21])().bottom;
  const items2 = [userId];
  const callback = noop.useCallback(() => {
    openUserSettings.openUserSettings({ screen: constants2.PREMIUM });
    const obj2 = { screen: constants2.PREMIUM };
    ActionSheetActionCreatorsDefault.hideActionSheet(TIERED_TENURE_BADGE_ACTION_SHEET);
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet(showUserProfileActionSheet.getUserProfileActionSheetKey(userId));
  }, items2);
  const obj7 = { disableTrack: null == id1 };
  const tmp11 = require("useTrackImpression");
  ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(false, callback, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet"));
  const memo = noop.useMemo(() => {
    let length;
    let sum;
    const values = Object.values(closure_1_7);
    const items = [];
    let num = 0;
    if (0 < values.length) {
      do {
        sum = num + 3;
        let arr = items.push(values.slice(num, sum));
        num = sum;
        length = values.length;
      } while (sum < length);
    }
    return items;
  }, []);
  const obj8 = { style: tmp.headerContainer, children: null };
  const obj9 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, children: null };
  const intl = tmp2(tmp3[15]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[15]).t;
  if (isPremiumResult) {
    let stringResult = string(t.Og62j7);
  } else {
    stringResult = string(t.RtGeFS);
  }
  obj9.children = stringResult;
  const items3 = [closure_10(userId(tieredTenureBadgeDataForUser[14]).Text, obj9), ];
  const obj10 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: null };
  const intl2 = tmp2(tmp3[15]).intl;
  if (isPremiumResult) {
    let stringResult1 = intl2.string(tmp2(tmp3[15]).t.IdAP91);
  } else {
    const obj11 = { learnMoreHook: callback };
    stringResult1 = intl2.format(tmp2(tmp3[15]).t["bF+q7R"], obj11);
  }
  obj10.children = stringResult1;
  items3[1] = closure_10(userId(tieredTenureBadgeDataForUser[14]).Text, obj10);
  obj8.children = items3;
  const obj12 = { style: null, children: null };
  const items4 = [tmp.footer, { paddingBottom: bottom }];
  obj12.style = items4;
  const tmp17 = require("usePremiumFeatureUpsellGetNitro")(false, callback, constants.TIERED_TENURE_BADGES_ACTION_SHEET, "replaceTopSheet");
  const tmp10Result = require("NitroUpsellButton");
  if (isPremiumResult) {
    const obj13 = { shiny: false, text: null, onPress: null };
    const intl4 = tmp2(tmp3[15]).intl;
    obj13.text = intl4.string(tmp2(tmp3[15]).t.hvVgAZ);
    obj13.onPress = callback;
    obj12.children = closure_10(tmp10Result, obj13);
  } else {
    const obj14 = { loading, text: null, onPress: null };
    const intl3 = tmp2(tmp3[15]).intl;
    const string2 = intl3.string;
    const t2 = tmp2(tmp3[15]).t;
    if (isPremiumAtLeastResult) {
      let string2Result = string2(t2.IJI7yk);
    } else {
      string2Result = string2(t2.pj0XBN);
    }
    obj14.text = string2Result;
    obj14.onPress = onPress;
    obj12.children = closure_10(tmp10Result, obj14);
  }
  const tmp18Result = closure_11(View, obj8);
  let tmp28;
  if (flag) {
    tmp28 = tmp20Result;
  }
  const obj15 = { scrollable: true, startExpanded: true, footer: tmp28, children: null };
  const obj16 = { contentContainerStyle: null, children: null };
  const items5 = [tmp.container, { paddingBottom: bottom + 64 }];
  obj16.contentContainerStyle = items5;
  const items6 = [
    tmp18Result,
    memo.map((arr, index) => {
      const someResult = arr.some((item) => {
        let id;
        if (user != null) {
          id = user.id;
        }
        return item === id;
      });
      const items = [closure_1.rowContainer, ];
      let rowContainerWithUsersBadge = someResult;
      if (someResult) {
        rowContainerWithUsersBadge = closure_1.rowContainerWithUsersBadge;
      }
      items[1] = rowContainerWithUsersBadge;
      return collapsed(View, {
        style: items,
        children: arr.map((badge, index) => {
          const obj = { badge, isUsersBadge: null, premiumSince: null };
          let id;
          if (user != null) {
            id = user.id;
          }
          obj.isUsersBadge = badge === id;
          obj.premiumSince = premiumSince;
          return closure_2_10(closure_2_14, obj, index);
        })
      }, index);
    })
  ];
  obj16.children = items6;
  obj15.children = closure_11(userId(tieredTenureBadgeDataForUser[27]).BottomSheetScrollView, obj16);
  return closure_10(userId(tieredTenureBadgeDataForUser[28]).BottomSheet, obj15);
});
export const TIERED_TENURE_BADGE_ACTION_SHEET_KEY = "TIERED_TENURE_BADGE_ACTION_SHEET";