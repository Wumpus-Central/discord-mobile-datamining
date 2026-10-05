// discord_app/modules/parent_tools/native/FamilyCenterActivityCard.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl3 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import _modDef2493 from "../FamilyCenter.messages.js";
import AssetRegistryDefault from "../../../../_runtime/04815_AssetRegistry.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import FamilyCenterUtils from "../FamilyCenterUtils.tsx";
import TouchableHitBoxDefault from "../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import useAgeSpecificText2 from "../hooks/useAgeSpecificText.tsx";
import AssetRegistryDefault2 from "../../../../_runtime/14698_AssetRegistry.js";
import FamilyCenterUsernameHeaderDefault from "FamilyCenterUsernameHeader.tsx";
import useSelectedTeenUser from "../hooks/useSelectedTeenUser.tsx";
import FamilyCenterActivityTotalDefault from "FamilyCenterActivityTotal.tsx";
import FamilyCenterTopActivityDefault from "FamilyCenterTopActivity.tsx";
import FamilyCenterActivitySectionDefault from "FamilyCenterActivitySection.tsx";
import FamilyCenterSettingsControlsDefault from "FamilyCenterSettingsControls.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import FamilyCenterConstants from "../FamilyCenterConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let c10;
let c9;
let items;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let size1;
function FamilyCenterActivityCardPrefaceText() {
  let Icon2;
  let items;
  let obj9;
  let paths;
  let tmp16;
  const tmp = closure_12();
  const tmp4 = useIsInAdultAgeGroupDefault();
  let obj = useUserLinks;
  const activeLinkUserIds = obj.useActiveLinkUserIds();
  const obj2 = FamilyCenterUtils;
  const activityWindowTimestampFormatter = obj2.getActivityWindowTimestampFormatter(tmp4);
  const obj3 = useUserLinks;
  const activityWindowTimeStamp = obj3.useActivityWindowTimeStamp(activityWindowTimestampFormatter);
  const useAgeSpecificText = useAgeSpecificText2.useAgeSpecificText;
  useAgeSpecificText2;
  const intl = intl3.intl;
  const obj4 = { activeLinks: activeLinkUserIds.length };
  const formatToPlainStringResult = intl.formatToPlainString(_modDef2493.tazvHQ, obj4);
  const intl2 = intl3.intl;
  const ageSpecificText = useAgeSpecificText(formatToPlainStringResult, intl2.string(_modDef2493.KrLnkE));
  let tmp13 = null;
  const obj5 = { style: tmp.container, children: items };
  if (!tmp4) {
    const obj6 = { color: tmp.icon.color, source: AssetRegistryDefault2, style: tmp.icon };
    const Icon = native.Icon;
    tmp13 = React4(Icon, obj6);
  }
  items = [tmp13, ,];
  const obj7 = { style: tmp.text, variant: "text-xs/semibold", color: "text-subtle", children: tmp16 };
  tmp16 = ageSpecificText;
  const Text = Text_Text.Text;
  if (activeLinkUserIds.length > 1) {
    tmp16 = ageSpecificText;
    if (tmp4) {
      tmp16 = activityWindowTimeStamp;
    }
  }
  items[1] = React4(Text, obj7);
  const obj8 = {
    onPress() {
      const obj = require("ModalActionCreators");
      obj.pushLazy(require("asyncRequire")(paths[19], paths.paths));
    },
    children: React4(Icon2, obj9),
  };
  obj9 = { color: tmp.icon.color, source: AssetRegistryDefault, size: native.Icon.Sizes.EXTRA_SMALL, style: tmp.icon };
  const tmp2Result = TouchableHitBoxDefault;
  Icon2 = native.Icon;
  items[2] = React4(tmp2Result, obj8);
  return authStore(View, obj5);
}
class FamilyCenterActivityCardAccountSelect {
  constructor() {
    let SelectTeen;
    let activeLinkUsers;
    let items1;
    let obj6;
    let selectTeenUser;
    let tmp11;
    let tmp = closure_18();
    let obj = activeLinkUsers(selectTeenUser[9]);
    activeLinkUsers = obj.useActiveLinkUsers();
    let obj2 = activeLinkUsers(selectTeenUser[25]);
    const selectedTeenUser = obj2.useSelectedTeenUser();
    let obj3 = activeLinkUsers(selectTeenUser[26]);
    const obj4 = {
      onSuccess() {
        const obj = selectedTeenUser(selectTeenUser[27]);
        return obj.hideActionSheet(FamilyCenterTeenAccountSelect);
      },
      onError() {
        const presentFailedToast = activeLinkUsers(selectTeenUser[28]).presentFailedToast;
        activeLinkUsers(selectTeenUser[28]);
        const intl = activeLinkUsers(selectTeenUser[12]).intl;
        return presentFailedToast(intl.string(selectedTeenUser(selectTeenUser[13]).Wu8BK2));
      },
    };
    selectTeenUser = obj3.useFamilyCenterActions(obj4).selectTeenUser;
    let items = [activeLinkUsers];
    items = react.useMemo(
      () =>
        activeLinkUsers.map((id) => {
          let name;
          let obj3;
          const obj = { label: "" + name + " (" + obj3.getUserTag(id) + ")", value: id.id };
          const obj2 = selectedTeenUser(selectTeenUser[29]);
          name = obj2.getName(id);
          obj3 = selectedTeenUser(selectTeenUser[29]);
          return obj;
        }),
      items,
    );
    let tmp6 = null;
    if (undefined !== selectedTeenUser) {
      const obj5 = { children: closure_10(tmp11, obj6) };
      obj6 = {
        style: tmp.touch,
        accessibilityRole: "spinbutton",
        onPress() {
          let id;
          let intl;
          let tmp;
          if (undefined !== selectedTeenUser) {
            const openLazy = ActionSheetActionCreatorsDefault.openLazy;
            let obj = {
              title: intl.string(_modDef2493.vORl9Q),
              items,
              onItemSelect(arg0) {
                const tmp = null != arg0 && arg0 !== id.id;
                if (tmp) {
                  closure_1_2(arg0);
                  let obj = selectedTeenUser(selectTeenUser[31]);
                  const obj2 = { action: SelectTeen.SelectTeen };
                  obj.track(constants.FAMILY_CENTER_ACTION, obj2);
                }
                setImmediate(() => {
                  const obj = id(closure_1_2[27]);
                  obj.hideActionSheet(closure_1_11);
                });
              },
              selectedItem: tmp.id,
              hasIcons: false,
            };
            const tmp6 = asyncRequire(8949, dependencyMap.paths);
            intl = intl3.intl;
            openLazy(tmp6, FamilyCenterTeenAccountSelect, obj);
          }
        },
        children: items1,
      };
      items1 = [,];
      const obj7 = { user: selectedTeenUser, inSelector: true };
      tmp11 = selectedTeenUser(selectTeenUser[17]);
      items1[0] = closure_9(closure_16, obj7);
      const obj8 = {
        style: tmp.icon,
        size: activeLinkUsers(selectTeenUser[14]).Icon.Sizes.MEDIUM,
        source: selectedTeenUser(selectTeenUser[32]),
      };
      const Icon = tmp2(tmp3[14]).Icon;
      items1[1] = closure_9(Icon, obj8);
      tmp6 = closure_9(View, obj5);
    }
    return tmp6;
  }
}
const View = react_native.View;
({ FamilyCenterAction: metroRequire, TeenActionDisplayType: metroImportDefault } = FamilyCenterConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
const FamilyCenterTeenAccountSelect = "FamilyCenterTeenAccountSelect";
let createStyles = createStyles_mod;
let obj = { container: { display: "flex", flexDirection: "row", alignItems: "center" }, icon: size, text: obj2 };
size = { color: nativeDefault.colors.ICON_SUBTLE, width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj2 = { marginHorizontal: nativeDefault.space.PX_4 };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp4 = useIsInAdultAgeGroupDefault();
      const obj2 = useUserLinks;
      const activeLinkUserIds = obj2.useActiveLinkUserIds();
      if (cResult[0] !== tmp4) {
        const tmpResult = FamilyCenterUtils;
        const activityWindowTimestampFormatter = tmpResult.getActivityWindowTimestampFormatter(tmp5);
        cResult[0] = tmp4;
        cResult[1] = activityWindowTimestampFormatter;
        tmp6 = activityWindowTimestampFormatter;
      } else {
        tmp6 = cResult[1];
      }
      const tmpResult2 = useUserLinks;
      const activityWindowTimeStamp = tmpResult2.useActivityWindowTimeStamp(tmp6);
      if (!tmp4) {
        let tmp10;
        if (cResult[2] !== activityWindowTimeStamp) {
          const obj3 = { variant: "text-sm/medium", color: "text-muted", children: activityWindowTimeStamp };
          const tmp12 = React4(Text_Text.Text, obj3);
          cResult[2] = activityWindowTimeStamp;
          cResult[3] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[3];
        }
        tmp9 = tmp10;
      } else {
        tmp9 = null;
      }
      return tmp9;
    }
  : () => {
      let tmp7;
      const tmp2 = useIsInAdultAgeGroupDefault();
      const obj = useUserLinks;
      const activeLinkUserIds = obj.useActiveLinkUserIds();
      const obj2 = FamilyCenterUtils;
      const activityWindowTimestampFormatter = obj2.getActivityWindowTimestampFormatter(tmp2);
      useUserLinks;
      if (!tmp2) {
        const obj3 = { variant: "text-sm/medium", color: "text-muted", children: tmp6 };
        tmp7 = React4(Text_Text.Text, obj3);
      } else {
        tmp7 = null;
      }
      return tmp7;
    };
createStyles = createStyles_mod;
let obj3 = { header: obj4, avatar: obj5, avatarContainer: obj6, userHeader: obj7, nonSelectorHeader: obj8 };
obj4 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: nativeDefault.space.PX_12,
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderTopLeftRadius: nativeDefault.radii.md,
  borderTopRightRadius: nativeDefault.radii.md,
};
const createStyles2 = createStyles.createStyles;
obj5 = {
  borderRadius: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL] / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj6 = { marginRight: nativeDefault.space.PX_12, alignItems: "flex-start" };
obj7 = { display: "flex", flexDirection: "column", width: "100%", paddingRight: nativeDefault.space.PX_16 };
obj8 = { flex: 1, paddingRight: nativeDefault.space.PX_16 };
let closure_15 = createStyles2(obj3);
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let inSelector;
        let items;
        let items1;
        let user;
        const obj = react2;
        const cResult = obj.c(20);
        ({ user, inSelector } = arg0);
        const tmp4 = closure_15();
        const AvatarSizes = native.AvatarSizes;
        const tmp5 = inSelector ? AvatarSizes.SMALL : AvatarSizes.NORMAL;
        if (cResult[0] === tmp4.avatar) {
          if (cResult[1] === tmp5) {
            let tmp6;
            if (cResult[2] === user) {
              tmp6 = cResult[3];
            }
            if (cResult[4] === tmp4.avatarContainer) {
              let tmp8;
              if (cResult[5] === tmp6) {
                tmp8 = cResult[6];
              }
              let nonSelectorHeader;
              if (!inSelector) {
                nonSelectorHeader = tmp4.nonSelectorHeader;
              }
              if (cResult[7] === tmp4.userHeader) {
                let tmp13;
                let tmp14;
                let tmp19;
                if (cResult[8] === nonSelectorHeader) {
                  tmp13 = cResult[9];
                }
                if (cResult[10] !== user) {
                  const obj2 = { user };
                  const tmp17 = React4(FamilyCenterUsernameHeaderDefault, obj2);
                  cResult[10] = user;
                  cResult[11] = tmp17;
                  tmp14 = tmp17;
                } else {
                  tmp14 = cResult[11];
                }
                const _Symbol = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp22 = React4(closure_14, {});
                  cResult[12] = tmp22;
                  tmp19 = tmp22;
                } else {
                  tmp19 = cResult[12];
                }
                if (cResult[13] === tmp13) {
                  let tmp23;
                  if (cResult[14] === tmp14) {
                    tmp23 = cResult[15];
                  }
                  if (cResult[16] === tmp4.header) {
                    if (cResult[17] === tmp8) {
                      let tmp27;
                      if (cResult[18] === tmp23) {
                        tmp27 = cResult[19];
                      }
                      return tmp27;
                    }
                  }
                  const obj3 = { style: tmp4.header, children: items };
                  items = [tmp8, tmp23];
                  const tmp30 = authStore(View, obj3);
                  cResult[16] = tmp4.header;
                  cResult[17] = tmp8;
                  cResult[18] = tmp23;
                  cResult[19] = tmp30;
                  tmp27 = tmp30;
                }
                const obj4 = { style: tmp13, children: items1 };
                items1 = [tmp14, tmp19];
                const tmp26 = authStore(View, obj4);
                cResult[13] = tmp13;
                cResult[14] = tmp14;
                cResult[15] = tmp26;
                tmp23 = tmp26;
              }
              const items2 = [tmp4.userHeader, nonSelectorHeader];
              cResult[7] = tmp4.userHeader;
              cResult[8] = nonSelectorHeader;
              cResult[9] = items2;
              tmp13 = items2;
            }
            const obj5 = { style: tmp4.avatarContainer, children: tmp6 };
            const tmp11 = React4(View, obj5);
            cResult[4] = tmp4.avatarContainer;
            cResult[5] = tmp6;
            cResult[6] = tmp11;
            tmp8 = tmp11;
          }
        }
        const obj6 = {
          avatarStyle: tmp4.avatar,
          user,
          guildId: "IconComponent",
          disablePlaceholder: null,
          avatarDecoration: user.avatarDecoration,
          size: tmp5,
        };
        const tmp7 = React4(native.Avatar, obj6);
        cResult[0] = tmp4.avatar;
        cResult[1] = tmp5;
        cResult[2] = user;
        cResult[3] = tmp7;
        tmp6 = tmp7;
      }
    : (arg0) => {
        let NORMAL;
        let inSelector;
        let items;
        let items2;
        let obj3;
        let tmp4;
        let user;
        ({ user, inSelector } = arg0);
        const tmp = closure_15();
        const AvatarSizes = native.AvatarSizes;
        if (inSelector) {
          NORMAL = AvatarSizes.SMALL;
          tmp4 = require;
        } else {
          NORMAL = AvatarSizes.NORMAL;
          tmp4 = require;
        }
        const obj = { style: tmp.header, children: items };
        const obj2 = { style: tmp.avatarContainer, children: React4(tmp4(1188).Avatar, obj3) };
        obj3 = {
          avatarStyle: tmp.avatar,
          user,
          guildId: "IconComponent",
          disablePlaceholder: null,
          avatarDecoration: user.avatarDecoration,
          size: NORMAL,
        };
        items = [React4(View, obj2)];
        const items1 = [tmp.userHeader];
        let nonSelectorHeader;
        if (!inSelector) {
          nonSelectorHeader = tmp.nonSelectorHeader;
        }
        const obj4 = { style: items1, children: items2 };
        items1[1] = nonSelectorHeader;
        items2 = [React4(FamilyCenterUsernameHeaderDefault, { user }), React4(closure_14, {})];
        items[1] = authStore(View, obj4);
        return authStore(View, obj);
      },
);
memoResult.displayName = "FamilyCenterActivityCardAccount";
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let obj5;
      const obj = react2;
      const cResult = obj.c(3);
      const obj2 = useUserLinks;
      const activeLinkUserIds = obj2.useActiveLinkUserIds();
      const tmp2 = useIsInAdultAgeGroupDefault();
      const obj3 = useSelectedTeenUser;
      const selectedTeenUser = obj3.useSelectedTeenUser();
      let tmp4 = null;
      if (undefined !== selectedTeenUser) {
        let tmp5;
        if (tmp2) {
          if (1 !== activeLinkUserIds.length) {
            let tmp11;
            const _Symbol = Symbol;
            if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp14 = React4(FamilyCenterActivityCardAccountSelect, {});
              cResult[2] = tmp14;
              tmp11 = tmp14;
            } else {
              tmp11 = cResult[2];
            }
            tmp5 = tmp11;
          }
          tmp4 = tmp5;
        }
        if (cResult[0] !== selectedTeenUser) {
          const obj4 = { children: React4(memoResult, obj5) };
          obj5 = { user: selectedTeenUser };
          const tmp9 = React4(View, obj4);
          cResult[0] = selectedTeenUser;
          cResult[1] = tmp9;
          tmp5 = tmp9;
        } else {
          tmp5 = cResult[1];
        }
      }
      return tmp4;
    }
  : () => {
      let obj4;
      const obj = useUserLinks;
      const activeLinkUserIds = obj.useActiveLinkUserIds();
      const tmp = useIsInAdultAgeGroupDefault();
      const obj2 = useSelectedTeenUser;
      const selectedTeenUser = obj2.useSelectedTeenUser();
      let tmp3 = null;
      if (undefined !== selectedTeenUser) {
        if (tmp) {
          let tmp7;
          if (1 !== activeLinkUserIds.length) {
            tmp7 = React4(FamilyCenterActivityCardAccountSelect, {});
          }
          tmp3 = tmp7;
        }
        const obj3 = { children: React4(memoResult, obj4) };
        obj4 = { user: selectedTeenUser };
        tmp7 = React4(View, obj3);
      }
      return tmp3;
    };
let closure_17 = tmp8;
createStyles = createStyles_mod;
let obj9 = { touch: obj10, icon: size1 };
obj10 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
};
const createStyles3 = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
size1 = {
  color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  width: nativeDefault.space.PX_24,
  height: nativeDefault.space.PX_24,
  transform: items,
  marginHorizontal: nativeDefault.space.PX_8,
};
items = [{ rotate: "90deg" }];
const authStore4 = createStyles3(obj9);
createStyles = createStyles_mod;
const createStyles4 = createStyles.createStyles;
const obj11 = {
  card: { marginTop: nativeDefault.space.PX_16 },
  preface: { display: "flex", marginBottom: nativeDefault.space.PX_12 },
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md },
  content: {
    padding: nativeDefault.space.PX_16,
    display: "flex",
    flexDirection: "column",
    gap: nativeDefault.space.PX_32,
  },
  totals: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: nativeDefault.space.PX_8,
  },
  first: { width: "100%" },
  other: { width: "48.5%" },
  activities: { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 },
  settingsControls: { marginTop: nativeDefault.space.PX_24 },
};
({ marginTop: nativeDefault.space.PX_16 });
({ display: "flex", marginBottom: nativeDefault.space.PX_12 });
({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md });
({ padding: nativeDefault.space.PX_16, display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 });
({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
});
({ display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 });
({ marginTop: nativeDefault.space.PX_24 });
let closure_20 = createStyles4(obj11);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let found;
      let items;
      let items1;
      let items2;
      let obj = require("react");
      const cResult = obj.c(49);
      const tmp4 = closure_20();
      const tmp = _require;
      _require = tmp4;
      const obj2 = require("useSelectedTeenUser");
      const selectedTeenUser = obj2.useSelectedTeenUser();
      const obj3 = require("useFamilyCenterActivities");
      const hasActionForAnyDisplayType = obj3.useHasActionForAnyDisplayType();
      if (undefined === selectedTeenUser) {
        return null;
      } else {
        let tmp20;
        let tmp24;
        let tmp27;
        let tmp31;
        let tmp13;
        let tmp17;
        let tmp16;
        let tmp15;
        let tmp14;
        let tmp12;
        let tmp11;
        let tmp10;
        let tmp9;
        let tmp8;
        let tmp7;
        if (cResult[0] === hasActionForAnyDisplayType) {
          if (cResult[1] === tmp4.activities) {
            if (cResult[2] === tmp4.card) {
              if (cResult[3] === tmp4.container) {
                if (cResult[4] === tmp4.content) {
                  if (cResult[5] === tmp4.first) {
                    if (cResult[6] === tmp4.other) {
                      if (cResult[7] === tmp4.preface) {
                        if (cResult[8] === tmp4.totals) {
                          tmp7 = cResult[9];
                          tmp8 = cResult[10];
                          tmp9 = cResult[11];
                          tmp10 = cResult[12];
                          tmp11 = cResult[13];
                          tmp12 = cResult[14];
                          tmp13 = cResult[15];
                          tmp14 = cResult[16];
                          tmp15 = cResult[17];
                          tmp16 = cResult[18];
                          tmp17 = cResult[19];
                        }
                        if (cResult[29] === tmp7) {
                          if (cResult[30] === tmp10) {
                            if (cResult[31] === tmp11) {
                              if (cResult[32] === tmp12) {
                                let tmp39;
                                if (cResult[33] === tmp13) {
                                  tmp39 = cResult[34];
                                }
                                if (cResult[35] === tmp8) {
                                  if (cResult[36] === tmp14) {
                                    if (cResult[37] === tmp15) {
                                      let tmp46;
                                      let tmp50;
                                      const _Symbol5 = Symbol;
                                      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                                        const tmp49 = closure_9(FamilyCenterSettingsControlsDefault, {});
                                        cResult[40] = tmp49;
                                        tmp46 = tmp49;
                                      } else {
                                        tmp46 = cResult[40];
                                      }
                                      if (cResult[41] !== tmp4.settingsControls) {
                                        const obj4 = { style: tmp4.settingsControls, children: tmp46 };
                                        const tmp53 = closure_9(View, obj4);
                                        cResult[41] = tmp4.settingsControls;
                                        cResult[42] = tmp53;
                                        tmp50 = tmp53;
                                      } else {
                                        tmp50 = cResult[42];
                                      }
                                      if (cResult[43] === tmp9) {
                                        if (cResult[44] === tmp50) {
                                          if (cResult[45] === tmp16) {
                                            if (cResult[46] === tmp17) {
                                              let tmp54;
                                              if (cResult[47] === tmp42) {
                                                tmp54 = cResult[48];
                                              }
                                              return tmp54;
                                            }
                                          }
                                        }
                                      }
                                      const obj5 = { style: tmp16, children: items };
                                      items = [tmp17, tmp42, tmp50];
                                      const tmp56 = closure_10(tmp9, obj5);
                                      cResult[43] = tmp9;
                                      class X {
                                        constructor(arg0, arg1) {
                                          let other;
                                          const first = _slicedToArray(arg0, 1)[0];
                                          if (0 === arg1) {
                                            other = closure_0.first;
                                          } else {
                                            other = closure_0.other;
                                          }
                                          const obj = {
                                            style: other,
                                            children: React4(FamilyCenterActivityTotalDefault, { displayType: first }),
                                          };
                                          return React4(View, obj, "total-" + first);
                                        }
                                      }
                                      cResult[45] = tmp16;
                                      cResult[46] = tmp17;
                                      cResult[47] = tmp42;
                                      cResult[48] = tmp56;
                                      tmp54 = tmp56;
                                    }
                                  }
                                }
                                const obj6 = { style: tmp14, children: items1 };
                                items1 = [tmp15, tmp39];
                                cResult[35] = tmp8;
                                cResult[36] = tmp14;
                                cResult[37] = tmp15;
                                cResult[38] = tmp39;
                                cResult[39] = closure_10(tmp8, obj6);
                                closure_10(tmp8, obj6);
                                class X {
                                  constructor(arg0, arg1) {
                                    let other;
                                    const first = _slicedToArray(arg0, 1)[0];
                                    if (0 === arg1) {
                                      other = closure_0.first;
                                    } else {
                                      other = closure_0.other;
                                    }
                                    const obj = {
                                      style: other,
                                      children: React4(FamilyCenterActivityTotalDefault, { displayType: first }),
                                    };
                                    return React4(View, obj, "total-" + first);
                                  }
                                }
                              }
                            }
                          }
                        }
                        const obj7 = { style: tmp10, children: items2 };
                        items2 = [tmp11, tmp12, tmp13];
                        const tmp41 = closure_10(tmp7, obj7);
                        cResult[29] = tmp7;
                        cResult[30] = tmp10;
                        cResult[31] = tmp11;
                        cResult[32] = tmp12;
                        class X {
                          constructor(arg0, arg1) {
                            let other;
                            const first = _slicedToArray(arg0, 1)[0];
                            if (0 === arg1) {
                              other = closure_0.first;
                            } else {
                              other = closure_0.other;
                            }
                            const obj = {
                              style: other,
                              children: React4(FamilyCenterActivityTotalDefault, { displayType: first }),
                            };
                            return React4(View, obj, "total-" + first);
                          }
                        }
                        cResult[34] = tmp41;
                        tmp39 = tmp41;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        const tmpResult = tmp(8298);
        const sortedActivityTypeConfigs = tmpResult.getSortedActivityTypeConfigs();
        const card = tmp4.card;
        const _Symbol = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp23 = closure_9(FamilyCenterActivityCardPrefaceText, {});
          cResult[20] = tmp23;
          tmp20 = tmp23;
        } else {
          tmp20 = cResult[20];
        }
        if (cResult[21] !== tmp4.preface) {
          const obj8 = { style: tmp4.preface, children: tmp20 };
          const tmp26 = closure_9(View, obj8);
          cResult[21] = tmp4.preface;
          cResult[22] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[22];
        }
        const container = tmp4.container;
        const _Symbol2 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp30 = closure_9(closure_17, {});
          cResult[23] = tmp30;
          tmp27 = tmp30;
        } else {
          tmp27 = cResult[23];
        }
        const content = tmp4.content;
        const _Symbol3 = Symbol;
        if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function w(arg0) {
            return _slicedToArray(arg0, 1)[0] !== constants.GIFTS;
          };
          cResult[24] = fn;
          tmp31 = fn;
        } else {
          tmp31 = cResult[24];
        }
        if (cResult[25] === tmp4.first) {
          let tmp32;
          let tmp35;
          if (cResult[26] === tmp4.other) {
            tmp32 = cResult[27];
          }
          const obj9 = { style: tmp4.totals, children: found.map(tmp32) };
          found = sortedActivityTypeConfigs.filter(tmp31);
          const tmp34 = closure_9(View, obj9);
          const _Symbol4 = Symbol;
          if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp33Result = closure_9(FamilyCenterTopActivityDefault, {});
            cResult[28] = tmp33Result;
            tmp35 = tmp33Result;
          } else {
            tmp35 = cResult[28];
          }
          let tmp33Result2 = null;
          if (hasActionForAnyDisplayType) {
            const obj10 = {
              style: tmp4.activities,
              children: sortedActivityTypeConfigs.map((item) => {
                const displayType = _slicedToArray(item, 1)[0];
                const tmp2 = FamilyCenterActivitySectionDefault;
                return closure_1_9(tmp2, { displayType }, "section-" + displayType);
              }),
            };
            tmp33Result2 = closure_9(View, obj10);
          }
          cResult[0] = hasActionForAnyDisplayType;
          cResult[1] = tmp4.activities;
          cResult[2] = tmp4.card;
          cResult[3] = tmp4.container;
          class X {
            constructor(arg0, arg1) {
              let other;
              const first = _slicedToArray(arg0, 1)[0];
              if (0 === arg1) {
                other = closure_0.first;
              } else {
                other = closure_0.other;
              }
              const obj = { style: other, children: React4(FamilyCenterActivityTotalDefault, { displayType: first }) };
              return React4(View, obj, "total-" + first);
            }
          }
          cResult[4] = tmp4.content;
          cResult[5] = tmp4.first;
          cResult[6] = tmp4.other;
          cResult[7] = tmp4.preface;
          cResult[8] = tmp4.totals;
          cResult[9] = View;
          cResult[10] = View;
          cResult[11] = View;
          cResult[12] = content;
          cResult[13] = tmp34;
          cResult[14] = tmp35;
          cResult[15] = tmp33Result2;
          cResult[16] = container;
          cResult[17] = tmp27;
          cResult[18] = card;
          cResult[19] = tmp24;
          tmp13 = tmp33Result2;
          tmp17 = tmp24;
          tmp16 = card;
          tmp15 = tmp27;
          tmp14 = container;
          tmp12 = tmp35;
          tmp11 = tmp34;
          tmp10 = content;
          tmp9 = View;
          tmp8 = View;
          tmp7 = View;
        }
        class X {
          constructor(arg0, arg1) {
            let other;
            const first = _slicedToArray(arg0, 1)[0];
            if (0 === arg1) {
              other = closure_0.first;
            } else {
              other = closure_0.other;
            }
            const obj = { style: other, children: React4(FamilyCenterActivityTotalDefault, { displayType: first }) };
            return React4(View, obj, "total-" + first);
          }
        }
        cResult[25] = tmp4.first;
        cResult[26] = tmp4.other;
        cResult[27] = X;
        tmp32 = X;
      }
    }
  : () => {
      let closure_0;
      let found;
      let items;
      let items1;
      let items2;
      const tmp = closure_20();
      _require = tmp;
      let tmp2 = _require;
      let obj = require("useSelectedTeenUser");
      const selectedTeenUser = obj.useSelectedTeenUser();
      require("useFamilyCenterActivities");
      if (undefined === selectedTeenUser) {
        return null;
      } else {
        const tmp2Result = tmp2(8298);
        const sortedActivityTypeConfigs = tmp2Result.getSortedActivityTypeConfigs();
        const obj2 = { style: tmp.card, children: items };
        const obj3 = { style: tmp.preface, children: closure_9(FamilyCenterActivityCardPrefaceText, {}) };
        items = [closure_9(View, obj3), ,];
        const obj4 = { style: tmp.container, children: items1 };
        items1 = [closure_9(closure_17, {})];
        const obj5 = { style: tmp.content, children: items2 };
        const obj6 = {
          style: tmp.totals,
          children: found.map((item, index) => {
            let other;
            let tmp;
            [tmp] = item;
            if (0 === index) {
              other = closure_0.first;
            } else {
              other = closure_0.other;
            }
            const obj = { style: other, children: React4(FamilyCenterActivityTotalDefault, { displayType: tmp }) };
            return React4(View, obj, "total-" + tmp);
          }),
        };
        found = sortedActivityTypeConfigs.filter((item) => {
          let tmp;
          [tmp] = item;
          return tmp !== constants.GIFTS;
        });
        items2 = [closure_9(View, obj6), closure_9(FamilyCenterTopActivityDefault, {})];
        let tmp11Result = null;
        if (tmp6) {
          const obj7 = {
            style: tmp.activities,
            children: sortedActivityTypeConfigs.map((item) => {
              let tmp;
              [tmp] = item;
              const tmp2 = FamilyCenterActivitySectionDefault;
              return closure_1_9(tmp2, { displayType }, "section-" + displayType);
            }),
          };
          tmp11Result = closure_9(View, obj7);
        }
        items2[2] = tmp11Result;
        items1[1] = closure_10(View, obj5);
        items[1] = closure_10(View, obj4);
        const obj8 = { style: tmp.settingsControls, children: closure_9(FamilyCenterSettingsControlsDefault, {}) };
        items[2] = closure_9(View, obj8);
        return closure_10(View, obj2);
      }
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityCard.tsx");

export default tmp12;
export const FamilyCenterActivityCardAccount = memoResult;
export const FamilyCenterActivityCardHeader = tmp8;
export { FamilyCenterActivityCardAccountSelect };
