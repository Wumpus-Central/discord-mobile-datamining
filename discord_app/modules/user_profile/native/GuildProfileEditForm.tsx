// === Module 16467: GuildProfileEditForm ===

// Module 16467 (GuildProfileEditForm)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2051 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import Text_Text from "Text/Text" /* 5271 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7313 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7338 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8693 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8695 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9738 */;
import openPremiumModalDefault from "openPremiumModal" /* 9858 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 9859 */;
import UserProfileEditBannerButtonDefault from "UserProfileEditBannerButton" /* 16351 */;
import UserProfileEditFormSharedStylesDefault from "UserProfileEditFormSharedStyles" /* 16354 */;
import UserProfilePremiumTryItOutMobileRefreshExperiment from "UserProfilePremiumTryItOutMobileRefreshExperiment" /* 16361 */;
import UserProfileUpsellCardDefault from "UserProfileUpsellCard" /* 16386 */;
import UserProfileFloatingUpsellDefault from "UserProfileFloatingUpsell" /* 16442 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4917 */;
import UserProfileStore from "UserProfileStore" /* 7760 */;

const require = globalThis.__r;

require = fn;
function EditGuildProfileBanner(user) {
  user = user.user;
  ({ guildId: importDefault, guildMemberProfile: dependencyMap, pendingBanner } = user);
  ({ displayProfile, guildMember, pendingAvatarSrc, pendingThemeColors, disabled } = user);
  let result = PremiumUtilsDefault.canUsePremiumGuildMemberProfile(user);
  c4 = result;
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.EDIT_BANNER).analyticsLocations;
  let obj2 = { value: analyticsLocations, children: null };
  let obj3 = { user, displayProfile, pendingBanner, pendingAvatarSrc, pendingThemeColors, showProfilePreviewButton: false, showEditButton: null, onPressEdit: null, editButtonAccessibilityLabel: null, editDisabled: null };
  if (result) {
    result = null != guildMember;
  }
  obj3.showEditButton = result;
  obj3.onPressEdit = function handleEditBanner() {
    if (c4) {
      let obj = { user, analyticsLocations, showRemoveBanner: null, removeText: null, onBannerChange: null, onGifBannerSelect: null };
      const tmpResult = ActionSheetActionCreatorsDefault;
      const tmp13 = asyncRequireImpl(16339, dependencyMap.paths);
      banner = undefined;
      if (banner != null) {
        banner = banner.banner;
      }
      obj.showRemoveBanner = ProfileCustomizationUtils.showRemoveBanner(pendingBanner, banner);
      const intl = util.intl;
      obj.removeText = intl.string(util.t.jHlJNS);
      obj.onBannerChange = function onBannerChange(banner) {
        return user(dependencyMap[17]).setPendingChanges({ guildId, banner });
      };
      obj.onGifBannerSelect = function openGifPicker() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        const obj3 = { profileAssetType: null, selectionContext: null, guildId: null };
        const obj2 = ActionSheetActionCreatorsDefault;
        obj3.profileAssetType = user(dependencyMap[19]).ProfileAssetType.BANNER;
        obj3.selectionContext = user(dependencyMap[19]).GIFSelectionContext.PROFILE_EDIT;
        obj3.guildId = guildId;
        obj2.openLazy(user(dependencyMap[14])(dependencyMap[18], dependencyMap.paths), "Select GIF Banner", obj3);
      };
      tmpResult.openLazy(tmp13, "Change Banner", obj);
    } else {
      let obj2 = { initialUpsellKey: constants2.PREMIUM_GUILD_PROFILE, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
      let obj3 = { section: AnalyticsSections.PREMIUM_GUILD_MEMBER_PROFILE, object: constants.EDIT_GUILD_PROFILE_BANNER };
      obj2.analyticsLocation = obj3;
      obj2.analyticsLocations = analyticsLocations;
      const obj4 = { type: PremiumUpsellTypes.PREMIUM_GUILD_IDENTITY_MODAL };
      obj2.analyticsProperties = obj4;
      const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj2);
      const tmpResult2 = PremiumUpsellUtilsDefault;
    }
  };
  let intl = tmp5(1125).intl;
  obj3.editButtonAccessibilityLabel = intl.string(user(1125).t["95hPAe"]);
  obj3.editDisabled = disabled;
  obj2.children = closure_17(UserProfileEditBannerButtonDefault, obj3);
  return closure_17(user(7313).AnalyticsLocationProvider, obj2);
}
let closure_3 = ["nick", "bio", "guild_tag"];
let closure_4 = ["nick", "bio", "guild_tag"];
get_ActivityIndicator = fn(17);
({ ScrollView: closure_7, View: closure_8 } = get_ActivityIndicator);
const Constants = fn(1084);
({ AnalyticsObjects: closure_11, AnalyticsSections } = Constants);
({ DISPLAY_NAME_MAX_LENGTH: map1, PRONOUNS_MAX_LENGTH: closure_14, UpsellTypes: closure_15, AnalyticsPages } = Constants);
const PremiumUpsellTypes = fn(1391).PremiumUpsellTypes;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_CUSTOMIZE_PROFILE };
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileTryItOutUpsellExperimentWrapper(arg0) {
  const cResult = c.c(16);
  ({ onLayout, onButtonPress } = arg0);
  const tmp5 = UserProfileEditFormSharedStylesDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  if (obj2.useTryItOutMobileRefreshConfig("GuildProfileEditForm").enabled) {
    const _Symbol3 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = util.intl;
      const stringResult = intl3.string(util.t.YIZS5B);
      const intl4 = util.intl;
      const stringResult1 = intl4.string(util.t.pj0XBN);
      cResult[1] = stringResult;
      cResult[2] = stringResult1;
      let tmp20 = stringResult1;
      let tmp19 = stringResult;
    } else {
      tmp19 = cResult[1];
      tmp20 = cResult[2];
    }
    if (cResult[3] === onButtonPress) {
      if (cResult[4] === onLayout) {
        let tmp23 = cResult[5];
      }
      return tmp23;
    }
    const obj4 = { text: tmp19, buttonText: tmp20, buttonVariant: "experimental_premium-primary", onButtonPress, onLayout };
    const tmp25 = constants(UserProfileFloatingUpsellDefault, obj4);
    cResult[3] = onButtonPress;
    cResult[4] = onLayout;
    cResult[5] = tmp25;
    tmp23 = tmp25;
  } else {
    const sum = nativeDefault.space.PX_16 + tmp7.bottom;
    if (cResult[6] !== sum) {
      const obj5 = { bottom: sum };
      cResult[6] = sum;
      cResult[7] = obj5;
      let tmp9 = obj5;
    } else {
      tmp9 = cResult[7];
    }
    if (cResult[8] === tmp5.floatingUpsell) {
      if (cResult[9] === tmp9) {
        let tmp10 = cResult[10];
      }
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult2 = intl.string(util.t.pj0XBN);
        cResult[11] = stringResult2;
        let tmp11 = stringResult2;
      } else {
        tmp11 = cResult[11];
      }
      const _Symbol2 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { variant: "text-sm/normal", children: null };
        const intl2 = util.intl;
        obj6.children = intl2.string(util.t.YIZS5B);
        const tmp15 = constants(Text_Text.Text, obj6);
        cResult[12] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[12];
      }
      if (cResult[13] === onButtonPress) {
        if (cResult[14] === tmp10) {
          let tmp16 = cResult[15];
        }
        return tmp16;
      }
      const obj7 = { style: tmp10, ctaText: tmp11, onPress: onButtonPress, children: tmp13 };
      const tmp18 = constants(UserProfileUpsellCardDefault, obj7);
      cResult[13] = onButtonPress;
      cResult[14] = tmp10;
      cResult[15] = tmp18;
      tmp16 = tmp18;
    }
    const items = [tmp5.floatingUpsell, tmp9];
    cResult[8] = tmp5.floatingUpsell;
    cResult[9] = tmp9;
    cResult[10] = items;
    tmp10 = items;
  }
  obj2 = UserProfilePremiumTryItOutMobileRefreshExperiment;
}) : (function GuildProfileTryItOutUpsellExperimentWrapper(onButtonPress) {
  onButtonPress = onButtonPress.onButtonPress;
  const obj = UserProfilePremiumTryItOutMobileRefreshExperiment;
  if (obj.useTryItOutMobileRefreshConfig("GuildProfileEditForm").enabled) {
    const obj2 = { text: null, buttonText: null, buttonVariant: "experimental_premium-primary", onButtonPress: null, onLayout: null };
    const intl3 = util.intl;
    obj2.text = intl3.string(util.t.YIZS5B);
    const intl4 = util.intl;
    obj2.buttonText = intl4.string(util.t.pj0XBN);
    obj2.onButtonPress = onButtonPress;
    obj2.onLayout = onButtonPress.onLayout;
    let tmp6Result = constants(UserProfileFloatingUpsellDefault, obj2);
    const tmp3Result = UserProfileFloatingUpsellDefault;
  } else {
    const obj3 = { style: null, ctaText: null, onPress: null, children: null };
    const items = [tmp4.floatingUpsell, ];
    const obj4 = { bottom: nativeDefault.space.PX_16 + tmp5.bottom };
    items[1] = obj4;
    obj3.style = items;
    const intl = util.intl;
    obj3.ctaText = intl.string(util.t.pj0XBN);
    obj3.onPress = onButtonPress;
    const obj5 = { variant: "text-sm/normal", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t.YIZS5B);
    obj3.children = constants(Text_Text.Text, obj5);
    tmp6Result = constants(UserProfileUpsellCardDefault, obj3);
    const tmp3Result2 = UserProfileUpsellCardDefault;
  }
  return tmp6Result;
});
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/GuildProfileEditForm.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildProfileEditForm(currentUser) {
  const cResult = currentUser(guildScrollY[22]).c(211);
  currentUser = currentUser.currentUser;
  require("UserProfileSharedStyles")();
  let obj = currentUser(guildScrollY[22]);
  importDefault = require("UserProfileEditFormSharedStyles")();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { location: "guild_profile_edit_form" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp6 = require("UserProfileEditFormSharedStyles")();
  const bioMaxLength = currentUser(guildScrollY[31]).useBioMaxLength(first);
  require("useKeyboardIsOpen")();
  const tmpResult = currentUser(guildScrollY[31]);
  const context = noop.useContext(tmp4(tmp2[33]));
  guildScrollY = undefined;
  if (context != null) {
    guildScrollY = context.guildScrollY;
  }
  if (cResult[1] !== guildScrollY) {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
    cResult[1] = guildScrollY;
    cResult[2] = I;
  } else {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
  }
  if (cResult[3] !== guildScrollY) {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
    const items = [guildScrollY];
    cResult[3] = guildScrollY;
    cResult[4] = tmp16;
    cResult[5] = items;
    let tmp15 = items;
  } else {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
    tmp15 = cResult[5];
  }
  const effect = noop.useEffect(tmp16, tmp15);
  const ref = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
    cResult[6] = tmp22;
  } else {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
  }
  const insets = tmp4(tmp2[25])(tmp22).insets;
  const PX_16 = tmp4(tmp2[27]).space.PX_16;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
    tmp24[0] = ref1;
    const obj3 = { type: "toRef", ref: ref2, extraOffset: PX_16 };
    tmp24[1] = obj3;
    cResult[7] = tmp24;
  } else {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
    tmp26[0] = ref2;
    const obj5 = { type: "toRef", ref: ref3, extraOffset: PX_16 };
    tmp26[1] = obj5;
    cResult[8] = tmp26;
  } else {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
    tmp28[0] = tmp24;
    tmp28[1] = tmp26;
    const obj6 = { ref: ref3, offset: null };
    const obj7 = { type: "toValue", value: tmp4(tmp2[27]).space.PX_64 };
    obj6.offset = obj7;
    tmp28[2] = obj6;
    cResult[9] = tmp28;
  } else {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
  }
  if (cResult[10] !== insets) {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
    tmp30[0] = insets;
    tmp30[1] = tmp28;
    tmp30[2] = ref;
    cResult[10] = insets;
    cResult[11] = tmp30;
  } else {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
  }
  const onFocus = tmp4(tmp2[34])(tmp30).onFocus;
  const tmp31 = require("useGuildProfileEditForm")();
  guild = tmp31.guild;
  ({ errors, isDisabled, pendingNickname, pendingAvatar, pendingBanner, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp31);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
    const items1 = [GuildMemberStore];
    cResult[12] = items1;
    const tmp32 = items1;
  } else {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
  }
  if (cResult[13] === currentUser.id) {
    class I {
      constructor(arg0) {
        obj = guildScrollY;
        if (guildScrollY != null) {
          tmp = currentUser;
          result = obj.set(currentUser.nativeEvent.contentOffset.y);
        }
        return;
      }
    }
    const stateFromStores = tmp(tmp2[36]).useStateFromStores(tmp32, fn);
    const _Symbol = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          obj = guildScrollY;
          if (guildScrollY != null) {
            tmp = currentUser;
            result = obj.set(currentUser.nativeEvent.contentOffset.y);
          }
          return;
        }
      }
      const items2 = [UserProfileStore];
      cResult[16] = items2;
      const tmp34 = items2;
    } else {
      class I {
        constructor(arg0) {
          obj = guildScrollY;
          if (guildScrollY != null) {
            tmp = currentUser;
            result = obj.set(currentUser.nativeEvent.contentOffset.y);
          }
          return;
        }
      }
    }
    if (cResult[17] === currentUser.id) {
      class I {
        constructor(arg0) {
          obj = guildScrollY;
          if (guildScrollY != null) {
            tmp = currentUser;
            result = obj.set(currentUser.nativeEvent.contentOffset.y);
          }
          return;
        }
      }
      const stateFromStores1 = tmp(tmp2[36]).useStateFromStores(tmp34, tmp35);
      const tmpResult9 = tmp(tmp2[36]);
      if (guild != null) {
        class I {
          constructor(arg0) {
            obj = guildScrollY;
            if (guildScrollY != null) {
              tmp = currentUser;
              result = obj.set(currentUser.nativeEvent.contentOffset.y);
            }
            return;
          }
        }
      }
      const tmp4ResultResult = tmp4(tmp2[37])(currentUser.id, undefined);
      const tmp4Result = tmp4(tmp2[37]);
      const customStatusActivity = tmp(tmp2[38]).useCustomStatusActivity();
      tmp4(tmp2[39])(tmp4ResultResult);
      if (cResult[20] === currentUser.id) {
        class I {
          constructor(arg0) {
            obj = guildScrollY;
            if (guildScrollY != null) {
              tmp = currentUser;
              result = obj.set(currentUser.nativeEvent.contentOffset.y);
            }
            return;
          }
        }
        const canEditNickname = tmp(tmp2[41]).useGuildActionSheetPermissions(guild).canEditNickname;
        if (cResult[23] !== currentUser) {
          class I {
            constructor(arg0) {
              obj = guildScrollY;
              if (guildScrollY != null) {
                tmp = currentUser;
                result = obj.set(currentUser.nativeEvent.contentOffset.y);
              }
              return;
            }
          }
          let result = obj15.canUsePremiumGuildMemberProfile(currentUser);
          cResult[23] = currentUser;
          cResult[24] = result;
        } else {
          class I {
            constructor(arg0) {
              obj = guildScrollY;
              if (guildScrollY != null) {
                tmp = currentUser;
                result = obj.set(currentUser.nativeEvent.contentOffset.y);
              }
              return;
            }
          }
        }
        if (stateFromStores1 != null) {
          class I {
            constructor(arg0) {
              obj = guildScrollY;
              if (guildScrollY != null) {
                tmp = currentUser;
                result = obj.set(currentUser.nativeEvent.contentOffset.y);
              }
              return;
            }
          }
        }
        if (cResult[25] === pendingThemeColors) {
          class I {
            constructor(arg0) {
              obj = guildScrollY;
              if (guildScrollY != null) {
                tmp = currentUser;
                result = obj.set(currentUser.nativeEvent.contentOffset.y);
              }
              return;
            }
          }
          if (!tmp44) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          const floatingUpsellHeight = tmp(tmp2[26]).useFloatingUpsellHeight();
          const onLayout = floatingUpsellHeight.onLayout;
          const height = floatingUpsellHeight.height;
          if (stateFromStores != null) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          if (undefined == null) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          if (stateFromStores1 != null) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          if (undefined == null) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          if (tmp4ResultResult != null) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          if (undefined == null) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          if (pendingPronouns == null) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          if (stateFromStores1 != null) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          if (undefined == null) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          if (tmp4ResultResult != null) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          if (undefined == null) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
            tmp57[0] = tmp4(tmp2[10]).USER_SETTINGS;
            cResult[28] = tmp57;
          } else {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          const analyticsLocations = tmp4(tmp2[9])(tmp57).analyticsLocations;
          if (cResult[29] === currentUser) {
            class I {
              constructor(arg0) {
                obj = guildScrollY;
                if (guildScrollY != null) {
                  tmp = currentUser;
                  result = obj.set(currentUser.nativeEvent.contentOffset.y);
                }
                return;
              }
            }
          }
          const obj8 = { user: currentUser, displayProfile: tmp4ResultResult, pendingThemeColors };
          cResult[29] = currentUser;
          cResult[30] = tmp4ResultResult;
          cResult[31] = pendingThemeColors;
          cResult[32] = obj8;
          const tmpResult12 = tmp(tmp2[26]);
        }
        const tmpResult11 = tmp(tmp2[41]);
        const canResetThemeColorsResult = tmp(tmp2[42]).canResetThemeColors(pendingThemeColors, undefined);
        cResult[25] = pendingThemeColors;
        cResult[26] = undefined;
        cResult[27] = canResetThemeColorsResult;
        const tmpResult13 = tmp(tmp2[42]);
      }
      const tmpResult10 = tmp(tmp2[38]);
      const obj9 = { userId: currentUser.id, image: pendingAvatar };
      const pendingAvatarSrc = tmp(tmp2[40]).getPendingAvatarSrc(obj9);
      cResult[20] = currentUser.id;
      cResult[21] = pendingAvatar;
      cResult[22] = pendingAvatarSrc;
      const tmpResult14 = tmp(tmp2[40]);
    }
    function ge() {
      let guildMemberProfile = null;
      if (null != guild) {
        let id;
        if (guild != null) {
          id = guild.id;
        }
        guildMemberProfile = UserProfileStore.getGuildMemberProfile(currentUser.id, id);
      }
      return guildMemberProfile;
    }
    cResult[17] = currentUser.id;
    cResult[18] = guild;
    cResult[19] = ge;
    tmp35 = ge;
    const tmpResult8 = tmp(tmp2[36]);
  }
  fn = function z() {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  };
  cResult[13] = currentUser.id;
  cResult[14] = guild;
  cResult[15] = fn;
  ref1 = noop.useRef(null);
}) : (function GuildProfileEditForm(currentUser) {
  currentUser = currentUser.currentUser;
  const stickyHeader = currentUser.stickyHeader;
  let guildScrollY;
  guild = undefined;
  let analyticsLocations;
  const tmp2 = guild;
  const tmp3 = guildScrollY(guild[30])();
  const tmp4 = guildScrollY(guild[24])();
  const bioMaxLength = currentUser(guild[31]).useBioMaxLength({ location: "guild_profile_edit_form" });
  let obj = currentUser(guild[31]);
  const ref = noop.useRef(null);
  const context = noop.useContext(guildScrollY(guild[33]));
  guildScrollY = undefined;
  if (context != null) {
    guildScrollY = context.guildScrollY;
  }
  const items = [guildScrollY];
  const items1 = [guildScrollY];
  const callback = noop.useCallback((nativeEvent) => {
    if (guildScrollY != null) {
      const result = guildScrollY.set(nativeEvent.nativeEvent.contentOffset.y);
    }
  }, items);
  const effect = noop.useEffect(() => {
    if (guildScrollY != null) {
      let result = guildScrollY.set(0);
    }
    return () => {
      let result;
      if (guildScrollY != null) {
        result = guildScrollY.set(0);
      }
      return result;
    };
  }, items1);
  const ref1 = noop.useRef(null);
  const ref2 = noop.useRef(null);
  const ref3 = noop.useRef(null);
  const insets = tmp(tmp2[25])({ includeKeyboardHeight: true }).insets;
  const PX_16 = tmp(tmp2[27]).space.PX_16;
  const obj3 = { insets, inputs: null, scrollViewRef: null };
  const items2 = [{ ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } }, { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } }, ];
  const obj6 = { ref: ref3, offset: null };
  const obj7 = { type: "toValue", value: null };
  const obj4 = { ref: ref1, offset: { type: "toRef", ref: ref2, extraOffset: PX_16 } };
  const obj5 = { ref: ref2, offset: { type: "toRef", ref: ref3, extraOffset: PX_16 } };
  const tmp7 = guildScrollY(guild[32])();
  obj7.value = guildScrollY(tmp2[27]).space.PX_64;
  obj6.offset = obj7;
  items2[2] = obj6;
  obj3.inputs = items2;
  obj3.scrollViewRef = ref;
  const onFocus = guildScrollY(tmp2[34])(obj3).onFocus;
  const tmp17 = guildScrollY(tmp2[35])();
  guild = tmp17.guild;
  ({ errors, isDisabled, pendingNickname, pendingThemeColors, pendingPronouns, pendingBio, pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingNameplate, pendingDisplayNameStyles } = tmp17);
  const tmpResult = guildScrollY(tmp2[34]);
  const items3 = [GuildMemberStore];
  const stateFromStores = currentUser(tmp2[36]).useStateFromStores(items3, () => {
    let member = null;
    if (null != guild) {
      member = GuildMemberStore.getMember(tmp.id, currentUser.id);
    }
    return member;
  });
  const tmp5Result = currentUser(tmp2[36]);
  const items4 = [UserProfileStore];
  const stateFromStores1 = currentUser(tmp2[36]).useStateFromStores(items4, () => {
    let guildMemberProfile = null;
    if (null != guild) {
      let id;
      if (guild != null) {
        id = guild.id;
      }
      guildMemberProfile = UserProfileStore.getGuildMemberProfile(currentUser.id, id);
    }
    return guildMemberProfile;
  });
  let id;
  const tmp5Result8 = currentUser(tmp2[36]);
  if (guild != null) {
    id = guild.id;
  }
  const tmpResult1Result = guildScrollY(tmp2[37])(currentUser.id, id);
  const tmpResult11 = guildScrollY(tmp2[37]);
  const customStatusActivity = currentUser(tmp2[38]).useCustomStatusActivity();
  const tmp5Result9 = currentUser(tmp2[38]);
  const tmp24 = guildScrollY(tmp2[39])(tmpResult1Result);
  const pendingAvatarSrc = currentUser(tmp2[40]).getPendingAvatarSrc({ userId: currentUser.id, image: pendingAvatar });
  const obj8 = { userId: currentUser.id, image: pendingAvatar };
  const tmp5Result10 = currentUser(tmp2[40]);
  const canEditNickname = currentUser(tmp2[41]).useGuildActionSheetPermissions(guild).canEditNickname;
  const tmp5Result11 = currentUser(tmp2[41]);
  let result = guildScrollY(tmp2[8]).canUsePremiumGuildMemberProfile(currentUser);
  const tmpResult12 = guildScrollY(tmp2[8]);
  let themeColors;
  if (stateFromStores1 != null) {
    themeColors = stateFromStores1.themeColors;
  }
  let tmp65Result8 = !result;
  const tmp5Result12 = currentUser(tmp2[42]);
  if (!result) {
    tmp65Result8 = !tmp7;
  }
  const canResetThemeColorsResult = currentUser(tmp2[42]).canResetThemeColors(pendingThemeColors, themeColors);
  const floatingUpsellHeight = currentUser(tmp2[26]).useFloatingUpsellHeight();
  let str;
  ({ height, onLayout } = floatingUpsellHeight);
  if (stateFromStores != null) {
    str = stateFromStores.nick;
  }
  if (str == null) {
    str = "";
  }
  let str2;
  if (stateFromStores1 != null) {
    str2 = stateFromStores1.pronouns;
  }
  if (str2 == null) {
    str2 = "";
  }
  let str3;
  if (tmpResult1Result != null) {
    str3 = tmpResult1Result._userProfile.pronouns;
  }
  if (str3 == null) {
    str3 = "";
  }
  if (pendingPronouns == null) {
    pendingPronouns = str2;
  }
  let str4;
  if (stateFromStores1 != null) {
    str4 = stateFromStores1.bio;
  }
  if (str4 == null) {
    str4 = "";
  }
  let str5;
  if (tmpResult1Result != null) {
    str5 = tmpResult1Result._userProfile.bio;
  }
  if (str5 == null) {
    str5 = "";
  }
  const tmp5Result13 = currentUser(tmp2[26]);
  const items5 = [guildScrollY(tmp2[10]).USER_SETTINGS];
  analyticsLocations = guildScrollY(tmp2[9])(items5).analyticsLocations;
  const tmpResult13 = guildScrollY(tmp2[9]);
  ({ theme, primaryColor, secondaryColor } = guildScrollY(tmp2[43])({ user: currentUser, displayProfile: tmpResult1Result, pendingThemeColors }));
  const tmp32 = guildScrollY(tmp2[43])({ user: currentUser, displayProfile: tmpResult1Result, pendingThemeColors });
  const userProfileColors = currentUser(tmp2[44]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ gradientSecondaryBackground, containerBackground } = userProfileColors);
  let num = 0;
  ({ gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (tmp65Result8) {
    num = height;
  }
  const sum = insets.bottom + num;
  const obj9 = { backgroundColor: avatarBackground };
  ({ nick, bio, guild_tag } = errors);
  const sum1 = sum + tmp(tmp2[27]).space.PX_16;
  const tmp5Result14 = currentUser(tmp2[44]);
  if (nick != null) {
    const first = nick[0];
  }
  const pronouns = errors.pronouns;
  if (pronouns != null) {
    const first1 = pronouns[0];
  }
  if (bio != null) {
    const first2 = bio[0];
  }
  if (guild_tag != null) {
    let first3 = guild_tag[0];
  }
  if (null == guild) {
    return null;
  } else {
    const obj10 = { theme, primaryColor, secondaryColor, children: null };
    const obj11 = { style: null, children: null };
    const items6 = [tmp4.container, ];
    const obj12 = { backgroundColor: gradientSecondaryBackground };
    items6[1] = obj12;
    obj11.style = items6;
    const obj13 = { ref, bounces: null == context, keyboardShouldPersistTaps: null, onScroll: null, scrollEventThrottle: null, stickyHeaderIndices: null, children: null };
    let str6;
    if (null != stickyHeader) {
      str6 = "handled";
    }
    obj13.keyboardShouldPersistTaps = str6;
    let tmp41;
    if (null != context) {
      tmp41 = callback;
    }
    obj13.onScroll = tmp41;
    let num2;
    if (null != context) {
      num2 = 16;
    }
    obj13.scrollEventThrottle = num2;
    let items7;
    if (null != stickyHeader) {
      items7 = [2];
    }
    obj13.stickyHeaderIndices = items7;
    const obj14 = { style: tmp4.bounceOffset };
    const items8 = [closure_17(closure_8, obj14), closure_17(tmp5(tmp2[33]).ProfileCustomizationHeaderSpacer, {}), stickyHeader, ];
    const obj15 = { style: null, children: null };
    const obj16 = { backgroundColor: gradientSecondaryBackground };
    obj15.style = obj16;
    const obj17 = { user: currentUser, displayProfile: tmpResult1Result, guildId: guild.id, guildMember: stateFromStores, guildMemberProfile: stateFromStores1, pendingAvatarSrc, pendingBanner, pendingThemeColors, disabled: isDisabled };
    const items9 = [closure_17(EditGuildProfileBanner, obj17), ];
    let tmp65Result = null;
    if (null != guild) {
      const obj18 = { style: null, children: null };
      const items10 = [, , , ];
      ({ avatarBackground: arr10[0], avatarPosition: arr10[1] } = tmp3);
      items10[2] = tmp4.avatarContainer;
      items10[3] = obj9;
      obj18.style = items10;
      const obj19 = { userId: currentUser.id, disabled: null, disableStatus: false, guildId: null, statusStyle: null };
      let tmp45 = isDisabled;
      if (!isDisabled) {
        tmp45 = !result;
      }
      obj19.disabled = tmp45;
      let id1;
      if (guild != null) {
        id1 = guild.id;
      }
      obj19.guildId = id1;
      obj19.statusStyle = obj9;
      obj18.children = closure_17(tmp(tmp2[45]), obj19);
      tmp65Result = closure_17(closure_8, obj18);
      const tmpResult14 = tmp(tmp2[45]);
    }
    const items11 = [tmp65Result, ];
    const obj20 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
    const items12 = [, , ];
    ({ profileContentWrapper: arr12[0], profileContent: arr12[1] } = tmp3);
    const obj21 = { paddingTop: 0, paddingBottom: sum1 };
    items12[2] = obj21;
    obj20.containerStyle = items12;
    const obj22 = { customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null, editEnabled: true };
    ({ customStatusBubble: obj27.style, emojiOnlyCustomStatusBubble: obj27.emojiOnlyStyle } = tmp3);
    const items13 = [closure_17(tmp(tmp2[58]), obj22), , ];
    const obj23 = { user: currentUser, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, displayNameAccessibilityRole: "header", guildId: null, pendingDisplayNameStyles: null };
    let tmp49 = pendingNickname;
    const tmpResult15 = tmp(tmp2[57]);
    if (pendingNickname == null) {
      tmp49 = str;
    }
    obj23.displayName = tmp49;
    let tmp50 = str3;
    if ("" !== pendingPronouns) {
      tmp50 = pendingPronouns;
    }
    obj23.pronouns = tmp50;
    obj23.badges = tmp24;
    obj23.badgeContainerBackground = containerBackground;
    obj23.guildId = guild.id;
    obj23.pendingDisplayNameStyles = pendingDisplayNameStyles;
    items13[1] = closure_17(tmp(tmp2[59]), obj23);
    let tmp66Result = null;
    if (null != guild) {
      const obj24 = { style: null, children: null };
      const items14 = [tmp4.formContainer, ];
      const obj25 = { backgroundColor: containerBackground, paddingBottom: 20 };
      items14[1] = obj25;
      obj24.style = items14;
      let tmp52 = null;
      if (null == first2) {
        tmp52 = null;
        if (null == first) {
          if (null == first3) {
            const _Object = Object;
            let stringResult = null;
            if (Object.keys(tmp36).length > 0) {
              const intl = tmp5(tmp2[16]).intl;
              stringResult = intl.string(tmp5(tmp2[16]).t.s35OuK);
            }
            first3 = stringResult;
          }
          let tmp65Result5 = null;
          if (null != first3) {
            tmp65Result5 = null;
            if ("" !== first3) {
              const obj26 = { style: tmp4.errorContainer, children: null };
              const obj28 = { variant: "text-sm/bold", color: "text-feedback-critical", children: first3 };
              obj26.children = closure_17(tmp5(tmp2[28]).Text, obj28);
              tmp65Result5 = closure_17(closure_8, obj26);
            }
          }
          tmp52 = tmp65Result5;
        }
      }
      const items15 = [tmp52, , , , , , , , , ];
      const obj29 = { inputRef: ref1, label: null, errorMessage: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, disabled: null };
      const intl2 = tmp5(tmp2[16]).intl;
      obj29.label = intl2.string(tmp5(tmp2[16]).t.me1lRk);
      obj29.errorMessage = first;
      if (pendingNickname == null) {
        pendingNickname = str;
      }
      obj29.value = pendingNickname;
      obj29.onFocus = onFocus;
      obj29.onChange = function onChange(nickname) {
        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, nickname });
      };
      const tmpResult17 = tmp(tmp2[46]);
      obj29.placeholder = tmp(tmp2[47]).getName(currentUser);
      obj29.maxLength = maxLength;
      let tmp58 = !canEditNickname;
      if (canEditNickname) {
        tmp58 = isDisabled;
      }
      obj29.disabled = tmp58;
      items15[1] = closure_17(tmpResult17, obj29);
      let tmp65Result6 = result;
      if (result) {
        const obj30 = { user: currentUser, guildId: guild.id };
        tmp65Result6 = closure_17(tmp(tmp2[48]), obj30);
      }
      items15[2] = tmp65Result6;
      const obj31 = { inputRef: ref2, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, spellCheck: false, autoCorrect: false, disabled: null };
      const tmpResult18 = tmp(tmp2[47]);
      const intl3 = tmp5(tmp2[16]).intl;
      obj31.label = intl3.string(tmp5(tmp2[16]).t["+T3RI/"]);
      obj31.errorMessage = first1;
      const intl4 = tmp5(tmp2[16]).intl;
      obj31.description = intl4.string(tmp5(tmp2[16]).t.NZqtIp);
      obj31.value = pendingPronouns;
      obj31.onFocus = onFocus;
      obj31.onChange = function onChange(pronouns) {
        return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, pronouns });
      };
      obj31.placeholder = str3;
      obj31.maxLength = maxLength2;
      obj31.disabled = isDisabled;
      items15[3] = closure_17(tmp(tmp2[46]), obj31);
      let tmp65Result7 = null;
      if (result) {
        const obj32 = { inputRef: ref3, label: null, errorMessage: null, description: null, value: null, onFocus: null, onChange: null, placeholder: null, maxLength: null, numberOfLines: 5, disabled: null };
        const intl5 = tmp5(tmp2[16]).intl;
        obj32.label = intl5.string(tmp5(tmp2[16]).t.ZzAR2Y);
        obj32.errorMessage = first2;
        const intl6 = tmp5(tmp2[16]).intl;
        obj32.description = intl6.string(tmp5(tmp2[16]).t.S5O8U2);
        if (pendingBio == null) {
          pendingBio = str4;
        }
        obj32.value = pendingBio;
        obj32.onFocus = onFocus;
        obj32.onChange = function onChange(bio) {
          return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, bio });
        };
        obj32.placeholder = str5;
        obj32.maxLength = bioMaxLength;
        obj32.disabled = isDisabled;
        tmp65Result7 = closure_17(tmp(tmp2[46]), obj32);
        const tmpResult20 = tmp(tmp2[46]);
      }
      items15[4] = tmp65Result7;
      const obj33 = {
        pendingAvatarSrc,
        pendingThemeColors,
        user: currentUser,
        guildId: guild.id,
        onProfileThemeColorsChanged(themeColors) {
              return UserProfileSettingsActionCreators.setPendingChanges({ guildId: guild.id, themeColors });
            },
        showResetMenu: canResetThemeColorsResult
      };
      items15[5] = closure_17(tmp(tmp2[49]), obj33);
      const obj34 = { user: currentUser, guildId: guild.id, pendingAvatarDecoration };
      items15[6] = closure_17(tmp(tmp2[50]), obj34);
      const obj35 = { user: currentUser, guildId: guild.id, pendingProfileEffect, displayProfile: tmpResult1Result };
      items15[7] = closure_17(tmp(tmp2[51]), obj35);
      const obj36 = { user: currentUser, guildId: guild.id, pendingProfileFrame, displayProfile: tmpResult1Result };
      items15[8] = closure_17(tmp(tmp2[52]), obj36);
      const obj37 = { user: currentUser, pendingNameplate, guildId: guild.id };
      items15[9] = closure_17(tmp(tmp2[53]), obj37);
      obj24.children = items15;
      tmp66Result = closure_18(closure_8, obj24);
      const tmpResult19 = tmp(tmp2[46]);
    }
    const obj38 = { children: null };
    items13[2] = tmp66Result;
    obj20.children = items13;
    items11[1] = closure_18(tmpResult15, obj20);
    obj38.children = items11;
    items9[1] = closure_18(closure_8, obj38);
    obj15.children = items9;
    items8[3] = closure_18(closure_8, obj15);
    obj13.children = items8;
    const items16 = [closure_18(closure_7, obj13), ];
    if (tmp65Result8) {
      const obj39 = {
        onButtonPress: function handleUpsellPress() {
              const obj = { analyticsLocation: null, analyticsLocations: null, premiumFeatureCardOrder: null };
              const obj2 = {};
              const merged = Object.assign(closure_19);
              obj2.object = constants.BUTTON_CTA;
              obj.analyticsLocation = obj2;
              obj.analyticsLocations = analyticsLocations;
              obj.premiumFeatureCardOrder = PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING;
              openPremiumModalDefault(obj);
            },
        onLayout
      };
      tmp65Result8 = closure_17(closure_21, obj39);
    }
    items16[1] = tmp65Result8;
    obj11.children = items16;
    obj10.children = closure_18(closure_8, obj11);
    return closure_17(tmp5(tmp2[56]).ThemeContextProvider, obj10);
  }
  tmp36 = _objectWithoutProperties(errors, closure_4);
});