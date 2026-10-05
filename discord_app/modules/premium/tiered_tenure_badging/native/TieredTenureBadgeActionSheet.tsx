// discord_app/modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import openUserSettings from "../../../user_settings/core/native/openUserSettings.tsx";
import TieredTenureBadgeUtils from "../../../user_profile/TieredTenureBadgeUtils.tsx";
import showUserProfileActionSheet from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import useMobileTenureBadgeImages from "hooks/useMobileTenureBadgeImages.tsx";
import useTenureBadgeRequirementString from "../hooks/useTenureBadgeRequirementString.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import PremiumConstants from "../../PremiumConstants.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let BottomSheet, importDefault, userId;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
({ PremiumTypes: metroRequire, TieredTenureBadge: metroImportDefault } = PremiumConstants);
({ AnalyticsPages: metroImportAll, UserSettingsSections: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const TIERED_TENURE_BADGE_ACTION_SHEET = "TIERED_TENURE_BADGE_ACTION_SHEET";
let obj = {
  headerContainer: { paddingHorizontal: 24, alignItems: "center" },
  title: { marginTop: 8, paddingHorizontal: 12, textAlign: "center" },
  subtitle: { marginTop: 8, textAlign: "center" },
  container: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingHorizontal: 24, marginTop: 16 },
  rowContainer: {
    flexDirection: "row",
    width: "100%",
    height: 160,
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  rowContainerWithUsersBadge: { height: 186 },
  badgeContainer: { minWidth: 110, height: "100%", paddingTop: 16, alignItems: "center", paddingHorizontal: 8 },
  usersBadgeContainer: obj2,
  badgeName: { marginTop: 8 },
  badgeRequirement: { marginTop: 4 },
  badgePremiumSince: { width: 90, marginTop: 4, textAlign: "center" },
  footer: { marginHorizontal: 24 },
};
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderWidth: 1.2,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.sm,
};
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0) {
      let Hu4jfi;
      let badge;
      let date;
      let formatToPlainString;
      let isUsersBadge;
      let items;
      let obj5;
      let premiumSince;
      const obj = react2;
      const cResult = obj.c(39);
      ({ badge, isUsersBadge, premiumSince } = arg0);
      const tmp4 = closure_13();
      const obj2 = useMobileTenureBadgeImages;
      const mobileTenureBadgeImages = obj2.useMobileTenureBadgeImages(badge);
      let small;
      if (mobileTenureBadgeImages != null) {
        small = mobileTenureBadgeImages.small;
      }
      if (cResult[0] === badge) {
        if (cResult[1] === small) {
          if (cResult[2] === isUsersBadge) {
            let tmp7;
            let tmp8;
            let tmp9;
            let tmp10;
            let tmp11;
            let tmp12;
            let tmp13;
            let tmp14;
            let tmp15;
            let tmp16;
            if (cResult[3] === tmp4) {
              tmp7 = cResult[4];
              tmp8 = cResult[5];
              tmp9 = cResult[6];
              tmp10 = cResult[7];
              tmp11 = cResult[8];
              tmp12 = cResult[9];
              tmp13 = cResult[10];
              tmp14 = cResult[11];
              tmp15 = cResult[12];
              tmp16 = cResult[13];
            }
            const _Symbol = Symbol;
            if (tmp15 === Symbol.for("react.early_return_sentinel")) {
              if (cResult[19] === tmp7) {
                if (cResult[20] === tmp9) {
                  if (cResult[21] === tmp10) {
                    if (cResult[22] === tmp11) {
                      let tmp36;
                      if (cResult[23] === tmp12) {
                        tmp36 = cResult[24];
                      }
                      if (cResult[25] === tmp4.badgeRequirement) {
                        let tmp39;
                        if (cResult[26] === tmp16) {
                          tmp39 = cResult[27];
                        }
                        if (cResult[28] === isUsersBadge) {
                          if (cResult[29] === premiumSince) {
                            let tmp42;
                            if (cResult[30] === tmp4.badgePremiumSince) {
                              tmp42 = cResult[31];
                            }
                            if (cResult[32] === tmp8) {
                              if (cResult[33] === tmp42) {
                                if (cResult[34] === tmp13) {
                                  if (cResult[35] === tmp14) {
                                    if (cResult[36] === tmp36) {
                                      let tmp48;
                                      if (cResult[37] === tmp39) {
                                        tmp48 = cResult[38];
                                      }
                                      tmp15 = tmp48;
                                    }
                                  }
                                }
                              }
                            }
                            const obj3 = { style: tmp13, children: items };
                            items = [tmp14, tmp36, tmp39, tmp42];
                            const tmp50 = unpackModuleId(tmp8, obj3);
                            cResult[32] = tmp8;
                            cResult[33] = tmp42;
                            cResult[34] = tmp13;
                            cResult[35] = tmp14;
                            cResult[36] = tmp36;
                            cResult[37] = tmp39;
                            cResult[38] = tmp50;
                            tmp48 = tmp50;
                          }
                        }
                        let tmp43 = isUsersBadge && null != premiumSince;
                        if (tmp43) {
                          const obj4 = {
                            style: tmp4.badgePremiumSince,
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: formatToPlainString(Hu4jfi, obj5),
                          };
                          const Text = Text_Text.Text;
                          const intl2 = intl5.intl;
                          formatToPlainString = intl2.formatToPlainString;
                          const _Date = Date;
                          const self = this;
                          const self2 = this;
                          obj5 = { date };
                          Hu4jfi = intl5.t.Hu4jfi;
                          date = new Date(premiumSince);
                          tmp43 = authStore(Text, obj4);
                        }
                        cResult[28] = isUsersBadge;
                        cResult[29] = premiumSince;
                        cResult[30] = tmp4.badgePremiumSince;
                        cResult[31] = tmp43;
                        tmp42 = tmp43;
                      }
                      const obj6 = {
                        style: tmp4.badgeRequirement,
                        variant: "text-xs/normal",
                        color: "mobile-text-heading-primary",
                        children: tmp16,
                      };
                      const tmp41 = authStore(Text_Text.Text, obj6);
                      cResult[25] = tmp4.badgeRequirement;
                      cResult[26] = tmp16;
                      cResult[27] = tmp41;
                      tmp39 = tmp41;
                    }
                  }
                }
              }
              const obj7 = { style: tmp9, variant: tmp10, color: tmp11, children: tmp12 };
              const tmp38 = authStore(tmp7, obj7);
              cResult[19] = tmp7;
              cResult[20] = tmp9;
              cResult[21] = tmp10;
              cResult[22] = tmp11;
              cResult[23] = tmp12;
              cResult[24] = tmp38;
              tmp36 = tmp38;
            }
            return tmp15;
          }
        }
      }
      const forResult = Symbol.for("react.early_return_sentinel");
      const tmpResult = TieredTenureBadgeUtils;
      const tieredTenureBadgeData = tmpResult.getTieredTenureBadgeData(badge);
      let tenureReqNumMonths;
      const getTenureBadgeRequirementString = useTenureBadgeRequirementString.getTenureBadgeRequirementString;
      useTenureBadgeRequirementString;
      if (tieredTenureBadgeData != null) {
        tenureReqNumMonths = tieredTenureBadgeData.tenureReqNumMonths;
      }
      const tenureBadgeRequirementString = getTenureBadgeRequirementString(badge, tenureReqNumMonths);
      let tmp22 = null;
      let tmp23;
      let tmp24;
      let stringResult;
      let str;
      let str2;
      let badgeName;
      let tmp27;
      let Text1;
      if (null != tieredTenureBadgeData) {
        const usersBadgeContainer = isUsersBadge && tmp4.usersBadgeContainer;
        if (cResult[14] === tmp4.badgeContainer) {
          let tmp30;
          let tmp31;
          if (cResult[15] === usersBadgeContainer) {
            tmp30 = cResult[16];
          }
          if (cResult[17] !== small) {
            const obj8 = { resizeMode: "contain", source: small };
            const tmp34 = authStore(FastImageDefault, obj8);
            cResult[17] = small;
            cResult[18] = tmp34;
            tmp31 = tmp34;
          } else {
            tmp31 = cResult[18];
          }
          Text1 = Text_Text.Text;
          badgeName = tmp4.badgeName;
          const intl = intl5.intl;
          stringResult = intl.string(tieredTenureBadgeData.nameUnformatted);
          str = "mobile-text-heading-primary";
          str2 = "heading-md/semibold";
          tmp23 = tmp31;
          tmp22 = forResult;
          tmp24 = tmp30;
          tmp27 = View;
        }
        const items1 = [tmp4.badgeContainer, usersBadgeContainer];
        cResult[14] = tmp4.badgeContainer;
        cResult[15] = usersBadgeContainer;
        cResult[16] = items1;
        tmp30 = items1;
      }
      cResult[0] = badge;
      cResult[1] = small;
      cResult[2] = isUsersBadge;
      cResult[3] = tmp4;
      cResult[4] = Text1;
      cResult[5] = tmp27;
      cResult[6] = badgeName;
      cResult[7] = str2;
      cResult[8] = str;
      cResult[9] = stringResult;
      cResult[10] = tmp24;
      cResult[11] = tmp23;
      cResult[12] = tmp22;
      cResult[13] = tenureBadgeRequirementString;
      tmp15 = tmp22;
      tmp14 = tmp23;
      tmp13 = tmp24;
      tmp12 = stringResult;
      tmp11 = str;
      tmp10 = str2;
      tmp9 = badgeName;
      tmp8 = tmp27;
      tmp7 = Text1;
      tmp16 = tenureBadgeRequirementString;
    }
  : function (arg0) {
      let Hu4jfi;
      let badge;
      let date;
      let formatToPlainString;
      let intl;
      let isUsersBadge;
      let items1;
      let obj7;
      let premiumSince;
      let small;
      ({ badge, isUsersBadge, premiumSince } = arg0);
      const tmp = closure_13();
      const obj = useMobileTenureBadgeImages;
      const mobileTenureBadgeImages = obj.useMobileTenureBadgeImages(badge);
      if (mobileTenureBadgeImages != null) {
        small = mobileTenureBadgeImages.small;
      }
      const tmp2Result = TieredTenureBadgeUtils;
      const tieredTenureBadgeData = tmp2Result.getTieredTenureBadgeData(badge);
      useTenureBadgeRequirementString;
      if (tieredTenureBadgeData != null) {
        const tenureReqNumMonths = tieredTenureBadgeData.tenureReqNumMonths;
      }
      let tmp9Result = null;
      if (null != tieredTenureBadgeData) {
        const items = [tmp.badgeContainer];
        const usersBadgeContainer = isUsersBadge && tmp.usersBadgeContainer;
        const obj2 = { style: items, children: items1 };
        items[1] = usersBadgeContainer;
        const obj3 = { resizeMode: "contain", source: small };
        items1 = [authStore(FastImageDefault, obj3), , ,];
        const obj4 = {
          style: tmp.badgeName,
          variant: "heading-md/semibold",
          color: "mobile-text-heading-primary",
          children: intl.string(tieredTenureBadgeData.nameUnformatted),
        };
        const Text = Text_Text.Text;
        intl = intl5.intl;
        items1[1] = authStore(Text, obj4);
        const obj5 = {
          style: tmp.badgeRequirement,
          variant: "text-xs/normal",
          color: "mobile-text-heading-primary",
          children: tmp7,
        };
        items1[2] = authStore(Text_Text.Text, obj5);
        if (isUsersBadge) {
          isUsersBadge = null != premiumSince;
        }
        if (isUsersBadge) {
          const obj6 = {
            style: tmp.badgePremiumSince,
            variant: "text-xs/normal",
            color: "text-muted",
            children: formatToPlainString(Hu4jfi, obj7),
          };
          const Text2 = Text_Text.Text;
          const intl2 = intl5.intl;
          formatToPlainString = intl2.formatToPlainString;
          const _Date = Date;
          const self = this;
          const self2 = this;
          obj7 = { date };
          Hu4jfi = intl5.t.Hu4jfi;
          date = new Date(premiumSince);
          isUsersBadge = authStore(Text2, obj6);
        }
        items1[3] = isUsersBadge;
        tmp9Result = unpackModuleId(View, obj2);
      }
      return tmp9Result;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let closure_1;
      let currentUser;
      let items5;
      let items7;
      let length;
      let loading;
      let onPress;
      let sum;
      let tieredTenureBadgeDataForUser;
      let tmp12;
      let tmp16;
      let tmp8;
      let tmp9;
      let obj = userId(tieredTenureBadgeDataForUser[9]);
      const cResult = obj.c(74);
      userId = userId.userId;
      const shouldShowCTA = userId.shouldShowCTA;
      const tmp5 = closure_13();
      importDefault = tmp5;
      const tmpResult = userId(tieredTenureBadgeDataForUser[16]);
      tieredTenureBadgeDataForUser = tmpResult.useTieredTenureBadgeDataForUser(userId);
      const tmpResult5 = userId(tieredTenureBadgeDataForUser[16]);
      const premiumSinceForUser = tmpResult5.usePremiumSinceForUser(userId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore];
        const fn = function u() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp8 = items;
        tmp9 = fn;
      } else {
        [tmp8, tmp9] = cResult;
      }
      const tmpResult6 = userId(tieredTenureBadgeDataForUser[17]);
      const stateFromStores = tmpResult6.useStateFromStores(tmp8, tmp9);
      if (cResult[2] !== stateFromStores) {
        const tmpResult7 = userId(tieredTenureBadgeDataForUser[18]);
        const isPremiumResult = tmpResult7.isPremium(stateFromStores, closure_6.TIER_2);
        cResult[2] = stateFromStores;
        cResult[3] = isPremiumResult;
        tmp12 = isPremiumResult;
      } else {
        tmp12 = cResult[3];
      }
      let premiumType;
      if (stateFromStores != null) {
        premiumType = stateFromStores.premiumType;
      }
      if (cResult[4] !== premiumType) {
        const tmpResult8 = userId(tieredTenureBadgeDataForUser[18]);
        const isPremiumAtLeastResult = tmpResult8.isPremiumAtLeast(premiumType, closure_6.TIER_0);
        cResult[4] = premiumType;
        cResult[5] = isPremiumAtLeastResult;
        tmp16 = isPremiumAtLeastResult;
      } else {
        tmp16 = cResult[5];
      }
      let id;
      if (tieredTenureBadgeDataForUser != null) {
        id = tieredTenureBadgeDataForUser.id;
      }
      if (cResult[6] === tmp12) {
        if (cResult[7] === id) {
          let tmp20;
          let tmp23;
          let tmp25;
          let tmp28;
          let arr3;
          let tmp35;
          if (cResult[8] === userId) {
            tmp20 = cResult[9];
          }
          let id1;
          if (tieredTenureBadgeDataForUser != null) {
            id1 = tieredTenureBadgeDataForUser.id;
          }
          if (cResult[10] !== (null == id1)) {
            let obj2 = { disableTrack: null == id1 };
            cResult[10] = null == id1;
            cResult[11] = obj2;
            tmp23 = obj2;
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
            tmp25 = items1;
          } else {
            tmp25 = cResult[13];
          }
          require("useTrackImpression")(tmp20, tmp23, tmp25);
          const bottom = require("useSafeAreaInsets")().bottom;
          if (cResult[14] !== userId) {
            const fn2 = function q() {
              const obj = openUserSettings;
              const obj2 = { screen: constants.PREMIUM };
              obj.openUserSettings(obj2);
              const obj3 = ActionSheetActionCreatorsDefault;
              obj3.hideActionSheet(TIERED_TENURE_BADGE_ACTION_SHEET);
              const hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
              ActionSheetActionCreatorsDefault;
              const obj4 = showUserProfileActionSheet;
              hideActionSheet(obj4.getUserProfileActionSheetKey(userId));
            };
            cResult[14] = userId;
            cResult[15] = fn2;
            tmp28 = fn2;
          } else {
            tmp28 = cResult[15];
          }
          ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(
            false,
            tmp28,
            constants.TIERED_TENURE_BADGES_ACTION_SHEET,
            "replaceTopSheet",
          ));
          const _Symbol = Symbol;
          require("usePremiumFeatureUpsellGetNitro")(
            false,
            tmp28,
            constants.TIERED_TENURE_BADGES_ACTION_SHEET,
            "replaceTopSheet",
          );
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
            arr3 = items2;
          } else {
            arr3 = cResult[16];
          }
          if (cResult[17] !== tmp12) {
            let stringResult;
            const intl = userId(tieredTenureBadgeDataForUser[15]).intl;
            const string = intl.string;
            const t = userId(tieredTenureBadgeDataForUser[15]).t;
            if (tmp12) {
              stringResult = string(t.Og62j7);
            } else {
              stringResult = string(t.RtGeFS);
            }
            cResult[17] = tmp12;
            cResult[18] = stringResult;
            tmp35 = stringResult;
          } else {
            tmp35 = cResult[18];
          }
          if (cResult[19] === tmp5.title) {
            let tmp39;
            let stringResult2;
            if (cResult[20] === tmp35) {
              tmp39 = cResult[21];
            }
            if (cResult[22] === tmp12) {
              let tmp44;
              if (cResult[23] === tmp28) {
                tmp44 = cResult[24];
              }
              if (cResult[25] === tmp5.subtitle) {
                let tmp48;
                if (cResult[26] === tmp44) {
                  tmp48 = cResult[27];
                }
                if (cResult[28] === tmp5.headerContainer) {
                  if (cResult[29] === tmp39) {
                    let tmp53;
                    let tmp89;
                    if (cResult[30] === tmp48) {
                      tmp53 = cResult[31];
                    }
                    if (tmp12) {
                      let tmp72;
                      if (cResult[32] !== bottom) {
                        let obj3 = { paddingBottom: bottom };
                        cResult[32] = bottom;
                        cResult[33] = obj3;
                        tmp72 = obj3;
                      } else {
                        tmp72 = cResult[33];
                      }
                      if (cResult[34] === tmp5.footer) {
                        let tmp73;
                        let tmp74;
                        let tmp78;
                        if (cResult[35] === tmp72) {
                          tmp73 = cResult[36];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[37] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl4 = userId(tieredTenureBadgeDataForUser[15]).intl;
                          const stringResult1 = intl4.string(userId(tieredTenureBadgeDataForUser[15]).t.hvVgAZ);
                          cResult[37] = stringResult1;
                          tmp74 = stringResult1;
                        } else {
                          tmp74 = cResult[37];
                        }
                        if (cResult[38] !== tmp28) {
                          let obj4 = { shiny: false, text: tmp74, onPress: tmp28 };
                          const tmp82 = closure_10(require("NitroUpsellButton"), obj4);
                          cResult[38] = tmp28;
                          cResult[39] = tmp82;
                          tmp78 = tmp82;
                        } else {
                          tmp78 = cResult[39];
                        }
                        if (cResult[40] === tmp73) {
                        }
                        const obj5 = { style: tmp73, children: tmp78 };
                        const tmp86 = closure_10(View, obj5);
                        cResult[40] = tmp73;
                        cResult[41] = tmp78;
                        cResult[42] = tmp86;
                      }
                      const items3 = [tmp5.footer, tmp72];
                      cResult[34] = tmp5.footer;
                      cResult[35] = tmp72;
                      cResult[36] = items3;
                      tmp73 = items3;
                    } else {
                      let tmp57;
                      if (cResult[43] !== bottom) {
                        const obj6 = { paddingBottom: bottom };
                        cResult[43] = bottom;
                        cResult[44] = obj6;
                        tmp57 = obj6;
                      } else {
                        tmp57 = cResult[44];
                      }
                      if (cResult[45] === tmp5.footer) {
                        let tmp58;
                        let tmp59;
                        if (cResult[46] === tmp57) {
                          tmp58 = cResult[47];
                        }
                        if (cResult[48] !== tmp16) {
                          let string2Result;
                          const intl3 = userId(tieredTenureBadgeDataForUser[15]).intl;
                          const string2 = intl3.string;
                          const t2 = userId(tieredTenureBadgeDataForUser[15]).t;
                          if (tmp16) {
                            string2Result = string2(t2.IJI7yk);
                          } else {
                            string2Result = string2(t2.pj0XBN);
                          }
                          cResult[48] = tmp16;
                          cResult[49] = string2Result;
                          tmp59 = string2Result;
                        } else {
                          tmp59 = cResult[49];
                        }
                        if (cResult[50] === loading) {
                          if (cResult[51] === onPress) {
                            let tmp63;
                            if (cResult[52] === tmp59) {
                              tmp63 = cResult[53];
                            }
                            const obj7 = { style: tmp58, children: tmp63 };
                            const tmp71 = closure_10(View, obj7);
                            cResult[54] = tmp58;
                            cResult[55] = tmp63;
                            cResult[56] = tmp71;
                          }
                        }
                        const obj8 = { loading, text: tmp59, onPress };
                        const tmp67 = closure_10(require("NitroUpsellButton"), obj8);
                        cResult[50] = loading;
                        cResult[51] = onPress;
                        cResult[52] = tmp59;
                        cResult[53] = tmp67;
                        tmp63 = tmp67;
                      }
                      const items4 = [tmp5.footer, tmp57];
                      cResult[45] = tmp5.footer;
                      cResult[46] = tmp57;
                      cResult[47] = items4;
                      tmp58 = items4;
                    }
                    const sum1 = bottom + 64;
                    if (cResult[57] !== sum1) {
                      const obj9 = { paddingBottom: sum1 };
                      cResult[57] = sum1;
                      cResult[58] = obj9;
                      tmp89 = obj9;
                    } else {
                      tmp89 = cResult[58];
                    }
                    if (cResult[59] === tmp5.container) {
                      let tmp90;
                      if (cResult[60] === tmp89) {
                        tmp90 = cResult[61];
                      }
                      let id3;
                      const tmp91 = cResult[62];
                      if (tieredTenureBadgeDataForUser != null) {
                        id3 = tieredTenureBadgeDataForUser.id;
                      }
                      if (tmp91 === id3) {
                        if (cResult[63] === premiumSinceForUser) {
                          if (cResult[64] === tmp5.rowContainer) {
                            let tmp93;
                            if (cResult[65] === tmp5.rowContainerWithUsersBadge) {
                              tmp93 = cResult[66];
                            }
                            if (cResult[67] === tmp53) {
                              if (cResult[68] === tmp90) {
                                let tmp96;
                                if (cResult[69] === tmp93) {
                                  tmp96 = cResult[70];
                                }
                                if (cResult[71] === tmp87) {
                                  let tmp101;
                                  if (cResult[72] === tmp96) {
                                    tmp101 = cResult[73];
                                  }
                                  return tmp101;
                                }
                                const obj10 = { scrollable: true, startExpanded: true, footer: tmp87, children: tmp96 };
                                const tmp105 = closure_10(userId(tieredTenureBadgeDataForUser[28]).BottomSheet, obj10);
                                cResult[71] = tmp87;
                                cResult[72] = tmp96;
                                cResult[73] = tmp105;
                                tmp101 = tmp105;
                              }
                            }
                            const obj11 = { contentContainerStyle: tmp90, children: items5 };
                            items5 = [tmp53, tmp93];
                            const tmp100 = closure_11(
                              userId(tieredTenureBadgeDataForUser[27]).BottomSheetScrollView,
                              obj11,
                            );
                            cResult[67] = tmp53;
                            cResult[68] = tmp90;
                            cResult[69] = tmp93;
                            cResult[70] = tmp100;
                            tmp96 = tmp100;
                          }
                        }
                      }
                      const mapped = arr3.map((arr, index) => {
                        let premiumSince;
                        let user;
                        const f140761 = (item) => {
                          let id;
                          if (user != null) {
                            id = user.id;
                          }
                          return item === id;
                        };
                        const items = [closure_1.rowContainer];
                        const rowContainerWithUsersBadge = arr.some(f140761) && closure_1.rowContainerWithUsersBadge;
                        const someResult = arr.some(f140761);
                        let obj = {
                          style: items,
                          children: arr.map((badge, index) => {
                            let id;
                            const obj = { badge, isUsersBadge: badge === id, premiumSince };
                            id = undefined;
                            if (user != null) {
                              id = user.id;
                            }
                            return closure_2_10(closure_2_14, obj, index);
                          }),
                        };
                        items[1] = rowContainerWithUsersBadge;
                        return authStore(View, obj, index);
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
                      tmp93 = mapped;
                    }
                    const items6 = [tmp5.container, tmp89];
                    cResult[59] = tmp5.container;
                    cResult[60] = tmp89;
                    cResult[61] = items6;
                    tmp90 = items6;
                  }
                }
                const obj12 = { style: tmp5.headerContainer, children: items7 };
                items7 = [tmp39, tmp48];
                const tmp56 = closure_11(View, obj12);
                cResult[28] = tmp5.headerContainer;
                cResult[29] = tmp39;
                cResult[30] = tmp48;
                cResult[31] = tmp56;
                tmp53 = tmp56;
              }
              const obj13 = { variant: "text-md/medium", color: "text-default", style: tmp5.subtitle, children: tmp44 };
              const tmp52 = closure_10(userId(tieredTenureBadgeDataForUser[14]).Text, obj13);
              cResult[25] = tmp5.subtitle;
              cResult[26] = tmp44;
              cResult[27] = tmp52;
              tmp48 = tmp52;
            }
            const intl2 = userId(tieredTenureBadgeDataForUser[15]).intl;
            if (tmp12) {
              stringResult2 = intl2.string(tmp45(tmp46[15]).t.IdAP91);
            } else {
              const obj14 = { learnMoreHook: tmp28 };
              stringResult2 = intl2.format(tmp45(tmp46[15]).t["bF+q7R"], obj14);
            }
            cResult[22] = tmp12;
            cResult[23] = tmp28;
            cResult[24] = stringResult2;
            tmp44 = stringResult2;
          }
          const obj15 = {
            variant: "heading-xl/bold",
            color: "mobile-text-heading-primary",
            style: tmp5.title,
            children: tmp35,
          };
          const tmp43 = closure_10(userId(tieredTenureBadgeDataForUser[14]).Text, obj15);
          cResult[19] = tmp5.title;
          cResult[20] = tmp35;
          cResult[21] = tmp43;
          tmp39 = tmp43;
        }
      }
      const obj16 = {
        type: userId(tieredTenureBadgeDataForUser[19]).ImpressionTypes.HALFSHEET,
        name: userId(tieredTenureBadgeDataForUser[19]).ImpressionNames.TIERED_TENURE_BADGE_MODAL,
        properties: { badge: id, premium_type: tmp12, viewed_user_id: userId },
      };
      cResult[6] = tmp12;
      cResult[7] = id;
      cResult[8] = userId;
      cResult[9] = obj16;
      tmp20 = obj16;
    }
  : (userId) => {
      let BottomSheetScrollView;
      let closure_1;
      let closure_3;
      let currentUser;
      let id;
      let intl4;
      let items3;
      let items4;
      let items5;
      let items6;
      let loading;
      let obj15;
      let onPress;
      let string2Result;
      let stringResult;
      let stringResult1;
      let tmp27;
      userId = userId.userId;
      let flag = userId.shouldShowCTA;
      if (flag === undefined) {
        flag = true;
      }
      let tieredTenureBadgeDataForUser;
      const tmp = closure_13();
      importDefault = tmp;
      const tmp3 = tieredTenureBadgeDataForUser;
      let obj = userId(tieredTenureBadgeDataForUser[16]);
      tieredTenureBadgeDataForUser = obj.useTieredTenureBadgeDataForUser(userId);
      let obj2 = userId(tieredTenureBadgeDataForUser[16]);
      react = obj2.usePremiumSinceForUser(userId);
      let obj3 = userId(tieredTenureBadgeDataForUser[17]);
      let items = [UserStore];
      const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
      let obj4 = userId(tieredTenureBadgeDataForUser[18]);
      const isPremiumResult = obj4.isPremium(stateFromStores, closure_6.TIER_2);
      let premiumType;
      const isPremiumAtLeast = userId(tieredTenureBadgeDataForUser[18]).isPremiumAtLeast;
      userId(tieredTenureBadgeDataForUser[18]);
      if (stateFromStores != null) {
        premiumType = stateFromStores.premiumType;
      }
      const obj5 = {
        type: userId(tmp3[19]).ImpressionTypes.HALFSHEET,
        name: userId(tmp3[19]).ImpressionNames.TIERED_TENURE_BADGE_MODAL,
        properties: { badge: id, premium_type: isPremiumResult, viewed_user_id: userId },
      };
      const isPremiumAtLeastResult = isPremiumAtLeast(premiumType, closure_6.TIER_0);
      id = undefined;
      const tmp12 = require("useTrackImpression");
      if (tieredTenureBadgeDataForUser != null) {
        id = tieredTenureBadgeDataForUser.id;
      }
      let id1;
      if (tieredTenureBadgeDataForUser != null) {
        id1 = tieredTenureBadgeDataForUser.id;
      }
      let id2;
      const obj6 = { disableTrack: null == id1 };
      if (tieredTenureBadgeDataForUser != null) {
        id2 = tieredTenureBadgeDataForUser.id;
      }
      const items1 = [id2];
      tmp12(obj5, obj6, items1);
      const bottom = tmp11(tmp3[21])().bottom;
      const items2 = [userId];
      const callback = react.useCallback(() => {
        const obj = openUserSettings;
        const obj2 = { screen: constants.PREMIUM };
        obj.openUserSettings(obj2);
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.hideActionSheet(TIERED_TENURE_BADGE_ACTION_SHEET);
        const hideActionSheet = ActionSheetActionCreatorsDefault.hideActionSheet;
        ActionSheetActionCreatorsDefault;
        const obj4 = showUserProfileActionSheet;
        hideActionSheet(obj4.getUserProfileActionSheetKey(userId));
      }, items2);
      ({ loading, onPress } = require("usePremiumFeatureUpsellGetNitro")(
        false,
        callback,
        constants.TIERED_TENURE_BADGES_ACTION_SHEET,
        "replaceTopSheet",
      ));
      require("usePremiumFeatureUpsellGetNitro")(
        false,
        callback,
        constants.TIERED_TENURE_BADGES_ACTION_SHEET,
        "replaceTopSheet",
      );
      const memo = react.useMemo(() => {
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
      const obj7 = { style: tmp.headerContainer, children: items3 };
      const obj8 = {
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp.title,
        children: stringResult,
      };
      const Text = tmp2(tmp3[14]).Text;
      const intl = tmp2(tmp3[15]).intl;
      const string = intl.string;
      const t = tmp2(tmp3[15]).t;
      if (isPremiumResult) {
        stringResult = string(t.Og62j7);
      } else {
        stringResult = string(t.RtGeFS);
      }
      items3 = [closure_10(Text, obj8)];
      const obj9 = { variant: "text-md/medium", color: "text-default", style: tmp.subtitle, children: stringResult1 };
      const Text2 = tmp2(tmp3[14]).Text;
      const intl2 = tmp2(tmp3[15]).intl;
      if (isPremiumResult) {
        stringResult1 = intl2.string(tmp2(tmp3[15]).t.IdAP91);
      } else {
        const obj10 = { learnMoreHook: callback };
        stringResult1 = intl2.format(tmp2(tmp3[15]).t["bF+q7R"], obj10);
      }
      items3[1] = closure_10(Text2, obj9);
      const obj11 = { style: items4, children: null };
      items4 = [tmp.footer, { paddingBottom: bottom }];
      const tmp19Result = closure_11(View, obj7);
      const tmp11Result = require("NitroUpsellButton");
      if (isPremiumResult) {
        const obj12 = { shiny: false, text: intl4.string(userId(tmp3[15]).t.hvVgAZ), onPress: callback };
        intl4 = tmp2(tmp3[15]).intl;
        obj11.children = closure_10(tmp11Result, obj12);
        tmp27 = obj11;
      } else {
        const obj13 = { loading, text: string2Result, onPress };
        const intl3 = tmp2(tmp3[15]).intl;
        const string2 = intl3.string;
        const t2 = tmp2(tmp3[15]).t;
        if (isPremiumAtLeastResult) {
          string2Result = string2(t2.IJI7yk);
        } else {
          string2Result = string2(t2.pj0XBN);
        }
        obj11.children = closure_10(tmp11Result, obj13);
        tmp27 = obj11;
      }
      let tmp29;
      const tmp21Result = closure_10(View, tmp27);
      BottomSheet = tmp2(tmp3[28]).BottomSheet;
      if (flag) {
        tmp29 = tmp21Result;
      }
      const obj14 = {
        scrollable: true,
        startExpanded: true,
        footer: tmp29,
        children: closure_11(BottomSheetScrollView, obj15),
      };
      obj15 = { contentContainerStyle: items5, children: items6 };
      items5 = [tmp.container];
      const obj16 = { paddingBottom: bottom + 64 };
      items5[1] = obj16;
      items6 = [tmp19Result];
      BottomSheetScrollView = tmp2(tmp3[27]).BottomSheetScrollView;
      items6[1] = memo.map((arr, index) => {
        let premiumSince;
        let user;
        const f140763 = (item) => {
          let id;
          if (user != null) {
            id = user.id;
          }
          return item === id;
        };
        const items = [closure_1.rowContainer];
        const rowContainerWithUsersBadge = arr.some(f140763) && closure_1.rowContainerWithUsersBadge;
        const someResult = arr.some(f140763);
        let obj = {
          style: items,
          children: arr.map((badge, index) => {
            let id;
            const obj = { badge, isUsersBadge: badge === id, premiumSince };
            id = undefined;
            if (user != null) {
              id = user.id;
            }
            return closure_2_10(closure_2_14, obj, index);
          }),
        };
        items[1] = rowContainerWithUsersBadge;
        return authStore(View, obj, index);
      });
      return closure_10(BottomSheet, obj14);
    };
const result = size.fileFinishedImporting(
  "modules/premium/tiered_tenure_badging/native/TieredTenureBadgeActionSheet.tsx",
);

export default tmp5;
export const TIERED_TENURE_BADGE_ACTION_SHEET_KEY = "TIERED_TENURE_BADGE_ACTION_SHEET";
