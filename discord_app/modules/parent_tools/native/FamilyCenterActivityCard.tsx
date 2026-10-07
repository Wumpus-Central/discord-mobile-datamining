// discord_app/modules/parent_tools/native/FamilyCenterActivityCard.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01987_asyncRequireImpl.js";
import _modDef2521 from "../FamilyCenter.messages.js";
import _modDef4821 from "../../../../_runtime/metro/04821__.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useUserLinks from "../hooks/useUserLinks.tsx";
import useIsInAdultAgeGroupDefault from "../hooks/useIsInAdultAgeGroup.tsx";
import FamilyCenterUtils from "../FamilyCenterUtils.tsx";
import TouchableHitBoxDefault from "../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import useAgeSpecificText from "../hooks/useAgeSpecificText.tsx";
import _modDef14714 from "../../../../_runtime/metro/14714__.js";
import FamilyCenterUsernameHeaderDefault from "FamilyCenterUsernameHeader.tsx";
import useSelectedTeenUser from "../hooks/useSelectedTeenUser.tsx";
import FamilyCenterActivityTotalDefault from "FamilyCenterActivityTotal.tsx";
import FamilyCenterTopActivityDefault from "FamilyCenterTopActivity.tsx";
import FamilyCenterActivitySectionDefault from "FamilyCenterActivitySection.tsx";
import FamilyCenterSettingsControlsDefault from "FamilyCenterSettingsControls.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function FamilyCenterActivityCardPrefaceText() {
  const tmp = closure_12();
  const tmp4 = useIsInAdultAgeGroupDefault();
  const activeLinkUserIds = useUserLinks.useActiveLinkUserIds();
  const activityWindowTimestampFormatter = FamilyCenterUtils.getActivityWindowTimestampFormatter(tmp4);
  const activityWindowTimeStamp = useUserLinks.useActivityWindowTimeStamp(activityWindowTimestampFormatter);
  const intl = util.intl;
  const obj4 = useAgeSpecificText;
  const obj5 = { activeLinks: activeLinkUserIds.length };
  const intl2 = util.intl;
  const ageSpecificText = obj4.useAgeSpecificText(
    intl.formatToPlainString(_modDef2521.tazvHQ, { activeLinks: activeLinkUserIds.length }),
    intl2.string(_modDef2521.KrLnkE),
  );
  const obj6 = { style: tmp.container, children: null };
  let tmp12 = null;
  if (!tmp4) {
    const obj7 = { color: tmp.icon.color, source: _modDef14714, style: tmp.icon };
    tmp12 = options(native.Icon, obj7);
  }
  const items = [tmp12, ,];
  const obj8 = { style: tmp.text, variant: "text-xs/semibold", color: "text-subtle", children: null };
  let tmp15 = ageSpecificText;
  if (activeLinkUserIds.length > 1) {
    tmp15 = ageSpecificText;
    if (tmp4) {
      tmp15 = activityWindowTimeStamp;
    }
  }
  obj8.children = tmp15;
  items[1] = options(Text_Text.Text, obj8);
  const obj9 = {
    onPress() {
      require("ModalActionCreators").pushLazy(require("asyncRequireImpl")(paths[19], paths.paths));
    },
    children: null,
  };
  const formatToPlainStringResult = intl.formatToPlainString(_modDef2521.tazvHQ, {
    activeLinks: activeLinkUserIds.length,
  });
  const tmp2Result = TouchableHitBoxDefault;
  obj9.children = options(native.Icon, {
    color: tmp.icon.color,
    source: _modDef4821,
    size: native.Icon.Sizes.EXTRA_SMALL,
    style: tmp.icon,
  });
  items[2] = options(tmp2Result, obj9);
  obj6.children = items;
  return v65535(View, obj6);
}
class FamilyCenterActivityCardAccountSelect {
  constructor() {
    tmp = closure_18();
    tmp2 = closure_0;
    tmp3 = selectTeenUser;
    obj = closure_0(selectTeenUser[9]);
    activeLinkUsers = obj.useActiveLinkUsers();
    closure_0 = activeLinkUsers;
    obj2 = closure_0(selectTeenUser[25]);
    selectedTeenUser = obj2.useSelectedTeenUser();
    closure_1 = selectedTeenUser;
    obj3 = closure_0(selectTeenUser[26]);
    obj1 = {
      onSuccess() {
        return selectedTeenUser(selectTeenUser[27]).hideActionSheet(FamilyCenterTeenAccountSelect);
      },
      onError() {
        const intl = activeLinkUsers(selectTeenUser[12]).intl;
        return activeLinkUsers(selectTeenUser[28]).presentFailedToast(
          intl.string(selectedTeenUser(selectTeenUser[13]).Wu8BK2),
        );
      },
    };
    selectTeenUser = obj3.useFamilyCenterActions(obj1).selectTeenUser;
    items = [];
    items[0] = activeLinkUsers;
    closure_3 = closure_4.useMemo(
      () =>
        activeLinkUsers.map((id) => {
          const obj = { label: null, value: null };
          const name = selectedTeenUser(4728).getName(id);
          const obj2 = selectedTeenUser(4728);
          obj.label = "" + name + " (" + selectedTeenUser(4728).getUserTag(id) + ")";
          obj.value = id.id;
          return obj;
        }),
      items,
    );
    tmp6 = null;
    if (undefined !== selectedTeenUser) {
      tmp7 = jsx;
      tmp8 = View;
      obj9 = { children: null };
      tmp9 = jsxs;
      tmp10 = closure_1;
      obj10 = { style: null, accessibilityRole: "spinbutton", onPress: null, children: null };
      obj10.style = tmp.touch;
      obj10.onPress = function onPress() {
        if (undefined !== selectedTeenUser) {
          let obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
          let obj = ActionSheetActionCreatorsDefault;
          const intl = util.intl;
          obj2.title = intl.string(_modDef2521.vORl9Q);
          obj2.items = items;
          obj2.onItemSelect = function onItemSelect(arg0) {
            let tmp = null != arg0;
            if (tmp) {
              tmp = arg0 !== id.id;
            }
            if (tmp) {
              closure_1_2(arg0);
              const obj2 = { action: SelectTeen.SelectTeen };
              selectedTeenUser(selectTeenUser[31]).track(constants.FAMILY_CENTER_ACTION, obj2);
              const obj = selectedTeenUser(selectTeenUser[31]);
            }
            setImmediate(() => {
              id(closure_1_2[27]).hideActionSheet(closure_1_11);
            });
          };
          obj2.selectedItem = tmp.id;
          obj.openLazy(asyncRequireImpl(8978, dependencyMap.paths), FamilyCenterTeenAccountSelect, obj2);
          const tmp5 = asyncRequireImpl(8978, dependencyMap.paths);
        }
      };
      tmp12 = closure_16;
      obj11 = { user: null, inSelector: true };
      obj11.user = selectedTeenUser;
      tmp11 = closure_1(tmp3[17]);
      items1 = [,];
      items1[0] = jsx(closure_16, obj11);
      obj12 = { style: null, size: null, source: null };
      obj12.style = tmp.icon;
      obj12.size = tmp2(tmp3[14]).Icon.Sizes.MEDIUM;
      obj12.source = closure_1(tmp3[32]);
      items1[1] = jsx(tmp2(tmp3[14]).Icon, obj12);
      obj10.children = items1;
      obj9.children = jsxs(tmp11, obj10);
      tmp6 = jsx(View, obj9);
    }
    return tmp6;
  }
}
const View = fn(17).View;
const FamilyCenterConstants = fn(7062);
({ FamilyCenterAction: metroRequire, TeenActionDisplayType: closure_7 } = FamilyCenterConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const FamilyCenterTeenAccountSelect = "FamilyCenterTeenAccountSelect";
let createStyles = fn(4896);
let obj = { container: { display: "flex", flexDirection: "row", alignItems: "center" }, icon: null, text: null };
let size = {
  color: nativeDefault.colors.ICON_SUBTLE,
  width: nativeDefault.space.PX_16,
  height: nativeDefault.space.PX_16,
};
obj.icon = size;
obj.text = { marginHorizontal: nativeDefault.space.PX_4 };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Text = require;
      let tmp = dependencyMap;
      const cResult = c.c(4);
      const tmp3 = useIsInAdultAgeGroupDefault();
      const activeLinkUserIds = useUserLinks.useActiveLinkUserIds();
      if (cResult[0] !== tmp3) {
        const activityWindowTimestampFormatter = FamilyCenterUtils.getActivityWindowTimestampFormatter(tmp4);
        cResult[0] = tmp4;
        cResult[1] = activityWindowTimestampFormatter;
        let tmp5 = activityWindowTimestampFormatter;
        const TextResult = FamilyCenterUtils;
      } else {
        tmp5 = cResult[1];
      }
      const activityWindowTimeStamp = useUserLinks.useActivityWindowTimeStamp(tmp5);
      if (tmp3) {
        if (activeLinkUserIds.length > 1) {
          return null;
        }
      }
      if (cResult[2] !== activityWindowTimeStamp) {
        Text = Text_Text.Text;
        const obj3 = { variant: "text-sm/medium", color: "text-muted", children: activityWindowTimeStamp };
        tmp = options(Text, obj3);
        cResult[2] = activityWindowTimeStamp;
        cResult[3] = tmp;
      }
      const TextResult1 = useUserLinks;
    }
  : () => {
      const tmp2 = useIsInAdultAgeGroupDefault();
      const activeLinkUserIds = useUserLinks.useActiveLinkUserIds();
      const activityWindowTimestampFormatter = FamilyCenterUtils.getActivityWindowTimestampFormatter(tmp2);
      useUserLinks;
      if (!tmp2) {
        const obj3 = { variant: "text-sm/medium", color: "text-muted", children: tmp6 };
        let tmp7 = options(Text_Text.Text, obj3);
      } else {
        tmp7 = null;
      }
      return tmp7;
    };
createStyles = fn(4896);
let obj4 = { header: null, avatar: null, avatarContainer: null, userHeader: null, nonSelectorHeader: null };
let obj3 = { marginHorizontal: nativeDefault.space.PX_4 };
obj4.header = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: nativeDefault.space.PX_12,
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderTopLeftRadius: nativeDefault.radii.md,
  borderTopRightRadius: nativeDefault.radii.md,
};
let obj5 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: nativeDefault.space.PX_12,
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  borderTopLeftRadius: nativeDefault.radii.md,
  borderTopRightRadius: nativeDefault.radii.md,
};
obj4.avatar = {
  borderRadius: fn(1188).AVATAR_SIZE_MAP[fn(undefined, 1188).AvatarSizes.NORMAL] / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
let obj8 = {
  borderRadius: fn(1188).AVATAR_SIZE_MAP[fn(undefined, 1188).AvatarSizes.NORMAL] / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj4.avatarContainer = { marginRight: nativeDefault.space.PX_12, alignItems: "flex-start" };
let obj9 = { marginRight: nativeDefault.space.PX_12, alignItems: "flex-start" };
obj4.userHeader = { display: "flex", flexDirection: "column", width: "100%", paddingRight: nativeDefault.space.PX_16 };
let obj10 = { display: "flex", flexDirection: "column", width: "100%", paddingRight: nativeDefault.space.PX_16 };
obj4.nonSelectorHeader = { flex: 1, paddingRight: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj4);
ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(20);
        ({ user, inSelector } = arg0);
        const tmp4 = closure_15();
        const AvatarSizes = native.AvatarSizes;
        const tmp5 = inSelector ? AvatarSizes.SMALL : AvatarSizes.NORMAL;
        if (cResult[0] === tmp4.avatar) {
          if (cResult[1] === tmp5) {
            if (cResult[2] === user) {
              let tmp6 = cResult[3];
            }
            if (cResult[4] === tmp4.avatarContainer) {
              if (cResult[5] === tmp6) {
                let tmp8 = cResult[6];
              }
              let nonSelectorHeader;
              if (!inSelector) {
                nonSelectorHeader = tmp4.nonSelectorHeader;
              }
              if (cResult[7] === tmp4.userHeader) {
                if (cResult[8] === nonSelectorHeader) {
                  let tmp13 = cResult[9];
                }
                if (cResult[10] !== user) {
                  const obj2 = { user };
                  const tmp17 = options(FamilyCenterUsernameHeaderDefault, obj2);
                  cResult[10] = user;
                  cResult[11] = tmp17;
                  let tmp14 = tmp17;
                } else {
                  tmp14 = cResult[11];
                }
                const _Symbol = Symbol;
                if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp22 = options(closure_14, {});
                  cResult[12] = tmp22;
                  let tmp19 = tmp22;
                } else {
                  tmp19 = cResult[12];
                }
                if (cResult[13] === tmp13) {
                  if (cResult[14] === tmp14) {
                    let tmp23 = cResult[15];
                  }
                  if (cResult[16] === tmp4.header) {
                    if (cResult[17] === tmp8) {
                      if (cResult[18] === tmp23) {
                        let tmp27 = cResult[19];
                      }
                      return tmp27;
                    }
                  }
                  const obj3 = { style: tmp4.header, children: null };
                  const items = [tmp8, tmp23];
                  obj3.children = items;
                  const tmp30 = v65535(View, obj3);
                  cResult[16] = tmp4.header;
                  cResult[17] = tmp8;
                  cResult[18] = tmp23;
                  cResult[19] = tmp30;
                  tmp27 = tmp30;
                }
                const obj4 = { style: tmp13, children: null };
                const items1 = [tmp14, tmp19];
                obj4.children = items1;
                const tmp26 = v65535(View, obj4);
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
            const tmp11 = options(View, obj5);
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
        const tmp7 = options(native.Avatar, obj6);
        cResult[0] = tmp4.avatar;
        cResult[1] = tmp5;
        cResult[2] = user;
        cResult[3] = tmp7;
        tmp6 = tmp7;
      }
    : (arg0) => {
        ({ user, inSelector } = arg0);
        const tmp = closure_15();
        const AvatarSizes = native.AvatarSizes;
        if (inSelector) {
          let NORMAL = AvatarSizes.SMALL;
          let tmp4 = require;
        } else {
          NORMAL = AvatarSizes.NORMAL;
          tmp4 = require;
        }
        const obj = { style: tmp.header, children: null };
        const obj2 = { style: tmp.avatarContainer, children: null };
        const obj3 = {
          avatarStyle: tmp.avatar,
          user,
          guildId: "IconComponent",
          disablePlaceholder: null,
          avatarDecoration: user.avatarDecoration,
          size: NORMAL,
        };
        obj2.children = options(tmp4(1188).Avatar, obj3);
        const items = [options(View, obj2)];
        const items1 = [tmp.userHeader];
        let nonSelectorHeader;
        if (!inSelector) {
          nonSelectorHeader = tmp.nonSelectorHeader;
        }
        const obj4 = { style: items1, children: null };
        items1[1] = nonSelectorHeader;
        const items2 = [options(FamilyCenterUsernameHeaderDefault, { user }), options(closure_14, {})];
        obj4.children = items2;
        items[1] = v65535(View, obj4);
        obj.children = items;
        return v65535(View, obj);
      },
);
memoResult.displayName = "FamilyCenterActivityCardAccount";
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      const activeLinkUserIds = useUserLinks.useActiveLinkUserIds();
      const tmp2 = useIsInAdultAgeGroupDefault();
      const selectedTeenUser = useSelectedTeenUser.useSelectedTeenUser();
      if (undefined === selectedTeenUser) {
        return null;
      } else {
        if (!tmp2) {
          if (cResult[0] !== selectedTeenUser) {
            const obj4 = { children: null };
            const obj5 = { user: selectedTeenUser };
            obj4.children = options(memoResult, obj5);
            const tmp8 = options(View, obj4);
            cResult[0] = selectedTeenUser;
            cResult[1] = tmp8;
          }
        }
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp13 = options(FamilyCenterActivityCardAccountSelect, {});
          cResult[2] = tmp13;
        }
      }
    }
  : () => {
      const activeLinkUserIds = useUserLinks.useActiveLinkUserIds();
      const tmp = useIsInAdultAgeGroupDefault();
      const selectedTeenUser = useSelectedTeenUser.useSelectedTeenUser();
      if (undefined === selectedTeenUser) {
        return null;
      } else {
        if (!tmp) {
          const obj3 = { children: null };
          const obj4 = { user: selectedTeenUser };
          obj3.children = options(memoResult, obj4);
          let tmp6 = options(View, obj3);
        }
        tmp6 = options(FamilyCenterActivityCardAccountSelect, {});
      }
    };
let closure_17 = tmp5;
createStyles = fn(4896);
const obj12 = { touch: null, icon: null };
const obj11 = { flex: 1, paddingRight: nativeDefault.space.PX_16 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj12.touch = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
};
const size1 = {
  color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT,
  width: nativeDefault.space.PX_24,
  height: nativeDefault.space.PX_24,
  transform: null,
  marginHorizontal: nativeDefault.space.PX_8,
};
let items = [{ rotate: "90deg" }];
size1.transform = items;
obj12.icon = size1;
const collapsedCategories = createStyles.createStyles(obj12);
createStyles = fn(4896);
const obj17 = {
  card: null,
  preface: null,
  container: null,
  content: null,
  totals: null,
  first: null,
  other: null,
  activities: null,
  settingsControls: null,
};
const obj13 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
};
obj17.card = { marginTop: nativeDefault.space.PX_16 };
const obj18 = { marginTop: nativeDefault.space.PX_16 };
obj17.preface = { display: "flex", marginBottom: nativeDefault.space.PX_12 };
const obj19 = { display: "flex", marginBottom: nativeDefault.space.PX_12 };
obj17.container = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.md,
};
const obj21 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
obj17.content = {
  padding: nativeDefault.space.PX_16,
  display: "flex",
  flexDirection: "column",
  gap: nativeDefault.space.PX_32,
};
const obj22 = {
  padding: nativeDefault.space.PX_16,
  display: "flex",
  flexDirection: "column",
  gap: nativeDefault.space.PX_32,
};
obj17.totals = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
obj17.first = { width: "100%" };
obj17.other = { width: "48.5%" };
const obj23 = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_8,
};
obj17.activities = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
const obj24 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_32 };
obj17.settingsControls = { marginTop: nativeDefault.space.PX_24 };
let closure_20 = createStyles.createStyles(obj17);
ReactCompilerGating = fn(558);
const obj25 = { marginTop: nativeDefault.space.PX_24 };
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = require("c").c(49);
      const tmp4 = closure_20();
      _require = tmp4;
      const obj = require("c");
      const tmp = _require;
      const selectedTeenUser = require("useSelectedTeenUser").useSelectedTeenUser();
      const obj2 = require("useSelectedTeenUser");
      const hasActionForAnyDisplayType = require("useFamilyCenterActivities").useHasActionForAnyDisplayType();
      if (undefined === selectedTeenUser) {
        return null;
      } else {
        if (cResult[0] === hasActionForAnyDisplayType) {
          if (cResult[1] === tmp4.activities) {
            if (cResult[2] === tmp4.card) {
              if (cResult[3] === tmp4.container) {
                if (cResult[4] === tmp4.content) {
                  if (cResult[5] === tmp4.first) {
                    if (cResult[6] === tmp4.other) {
                      if (cResult[7] === tmp4.preface) {
                        if (cResult[8] === tmp4.totals) {
                          let tmp7 = cResult[9];
                          let tmp8 = cResult[10];
                          let tmp9 = cResult[11];
                          let tmp10 = cResult[12];
                          let tmp11 = cResult[13];
                          let tmp12 = cResult[14];
                          let tmp13 = cResult[15];
                          let tmp14 = cResult[16];
                          let tmp15 = cResult[17];
                          let tmp16 = cResult[18];
                          let tmp17 = cResult[19];
                        }
                        if (cResult[29] === tmp7) {
                          if (cResult[30] === tmp10) {
                            if (cResult[31] === tmp11) {
                              if (cResult[32] === tmp12) {
                                if (cResult[33] === tmp13) {
                                  let tmp39 = cResult[34];
                                }
                                if (cResult[35] === tmp8) {
                                  if (cResult[36] === tmp14) {
                                    if (cResult[37] === tmp15) {
                                      const _Symbol5 = Symbol;
                                      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
                                        const tmp49 = closure_9(FamilyCenterSettingsControlsDefault, {});
                                        cResult[40] = tmp49;
                                        let tmp46 = tmp49;
                                      } else {
                                        tmp46 = cResult[40];
                                      }
                                      if (cResult[41] !== tmp4.settingsControls) {
                                        const obj4 = { style: tmp4.settingsControls, children: tmp46 };
                                        const tmp53 = closure_9(View, obj4);
                                        cResult[41] = tmp4.settingsControls;
                                        cResult[42] = tmp53;
                                        let tmp50 = tmp53;
                                      } else {
                                        tmp50 = cResult[42];
                                      }
                                      if (cResult[43] === tmp9) {
                                        if (cResult[44] === tmp50) {
                                          if (cResult[45] === tmp16) {
                                            if (cResult[46] === tmp17) {
                                              if (cResult[47] === tmp42) {
                                                let tmp54 = cResult[48];
                                              }
                                              return tmp54;
                                            }
                                          }
                                        }
                                      }
                                      const obj5 = { style: tmp16, children: null };
                                      const items = [tmp17, tmp42, tmp50];
                                      obj5.children = items;
                                      const tmp56 = closure_10(tmp9, obj5);
                                      cResult[43] = tmp9;
                                      class X {
                                        constructor(arg0, arg1) {
                                          first = closure_3(arg0, 1)[0];
                                          tmp2 = jsx;
                                          tmp3 = View;
                                          if (0 === arg1) {
                                            tmp5 = closure_0;
                                            other = closure_0.first;
                                          } else {
                                            tmp4 = closure_0;
                                            other = closure_0.other;
                                          }
                                          obj = {
                                            style: other,
                                            children: tmp2(closure_1(closure_2[34]), { displayType: first }),
                                          };
                                          return tmp2(tmp3, obj, "total-" + first);
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
                                const obj6 = { style: tmp14, children: null };
                                const items1 = [tmp15, tmp39];
                                obj6.children = items1;
                                cResult[35] = tmp8;
                                cResult[36] = tmp14;
                                cResult[37] = tmp15;
                                cResult[38] = tmp39;
                                cResult[39] = closure_10(tmp8, obj6);
                                class X {
                                  constructor(arg0, arg1) {
                                    first = closure_3(arg0, 1)[0];
                                    tmp2 = jsx;
                                    tmp3 = View;
                                    if (0 === arg1) {
                                      tmp5 = closure_0;
                                      other = closure_0.first;
                                    } else {
                                      tmp4 = closure_0;
                                      other = closure_0.other;
                                    }
                                    obj = {
                                      style: other,
                                      children: tmp2(closure_1(closure_2[34]), { displayType: first }),
                                    };
                                    return tmp2(tmp3, obj, "total-" + first);
                                  }
                                }
                                const tmp44 = closure_10(tmp8, obj6);
                              }
                            }
                          }
                        }
                        const obj7 = { style: tmp10, children: null };
                        const items2 = [tmp11, tmp12, tmp13];
                        obj7.children = items2;
                        const tmp41 = closure_10(tmp7, obj7);
                        cResult[29] = tmp7;
                        cResult[30] = tmp10;
                        cResult[31] = tmp11;
                        cResult[32] = tmp12;
                        class X {
                          constructor(arg0, arg1) {
                            first = closure_3(arg0, 1)[0];
                            tmp2 = jsx;
                            tmp3 = View;
                            if (0 === arg1) {
                              tmp5 = closure_0;
                              other = closure_0.first;
                            } else {
                              tmp4 = closure_0;
                              other = closure_0.other;
                            }
                            obj = { style: other, children: tmp2(closure_1(closure_2[34]), { displayType: first }) };
                            return tmp2(tmp3, obj, "total-" + first);
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
        const sortedActivityTypeConfigs = tmp(8331).getSortedActivityTypeConfigs();
        const card = tmp4.card;
        const _Symbol = Symbol;
        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp23 = closure_9(FamilyCenterActivityCardPrefaceText, {});
          cResult[20] = tmp23;
          let tmp20 = tmp23;
        } else {
          tmp20 = cResult[20];
        }
        if (cResult[21] !== tmp4.preface) {
          const obj8 = { style: tmp4.preface, children: tmp20 };
          const tmp26 = closure_9(View, obj8);
          cResult[21] = tmp4.preface;
          cResult[22] = tmp26;
          let tmp24 = tmp26;
        } else {
          tmp24 = cResult[22];
        }
        const container = tmp4.container;
        const _Symbol2 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp30 = closure_9(closure_17, {});
          cResult[23] = tmp30;
          let tmp27 = tmp30;
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
          let tmp31 = fn;
        } else {
          tmp31 = cResult[24];
        }
        if (cResult[25] === tmp4.first) {
          if (cResult[26] === tmp4.other) {
            let tmp32 = cResult[27];
          }
          const obj9 = { style: tmp4.totals, children: null };
          const found = sortedActivityTypeConfigs.filter(tmp31);
          obj9.children = found.map(tmp32);
          const tmp34 = closure_9(View, obj9);
          const _Symbol4 = Symbol;
          if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp33Result = closure_9(FamilyCenterTopActivityDefault, {});
            cResult[28] = tmp33Result;
            let tmp35 = tmp33Result;
          } else {
            tmp35 = cResult[28];
          }
          let tmp33Result2 = null;
          if (hasActionForAnyDisplayType) {
            const obj10 = {
              style: tmp4.activities,
              children: sortedActivityTypeConfigs.map((item) => {
                const displayType = _slicedToArray(item, 1)[0];
                return closure_1_9(FamilyCenterActivitySectionDefault, { displayType }, "section-" + displayType);
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
              first = closure_3(arg0, 1)[0];
              tmp2 = jsx;
              tmp3 = View;
              if (0 === arg1) {
                tmp5 = closure_0;
                other = closure_0.first;
              } else {
                tmp4 = closure_0;
                other = closure_0.other;
              }
              obj = { style: other, children: tmp2(closure_1(closure_2[34]), { displayType: first }) };
              return tmp2(tmp3, obj, "total-" + first);
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
            first = closure_3(arg0, 1)[0];
            tmp2 = jsx;
            tmp3 = View;
            if (0 === arg1) {
              tmp5 = closure_0;
              other = closure_0.first;
            } else {
              tmp4 = closure_0;
              other = closure_0.other;
            }
            obj = { style: other, children: tmp2(closure_1(closure_2[34]), { displayType: first }) };
            return tmp2(tmp3, obj, "total-" + first);
          }
        }
        cResult[25] = tmp4.first;
        cResult[26] = tmp4.other;
        cResult[27] = X;
        tmp32 = X;
        const tmpResult = tmp(8331);
      }
      const obj3 = require("useFamilyCenterActivities");
    }
  : () => {
      const tmp = closure_20();
      _require = tmp;
      const selectedTeenUser = require("useSelectedTeenUser").useSelectedTeenUser();
      require("useFamilyCenterActivities");
      if (undefined === selectedTeenUser) {
        return null;
      } else {
        const sortedActivityTypeConfigs = tmp2(8331).getSortedActivityTypeConfigs();
        const obj2 = { style: tmp.card, children: null };
        const obj3 = { style: tmp.preface, children: closure_9(FamilyCenterActivityCardPrefaceText, {}) };
        const items = [closure_9(View, obj3), ,];
        const obj4 = { style: tmp.container, children: null };
        const items1 = [closure_9(closure_17, {})];
        const obj5 = { style: tmp.content, children: null };
        const obj6 = { style: tmp.totals, children: null };
        const found = sortedActivityTypeConfigs.filter((item) => {
          [tmp] = item;
          return tmp !== constants.GIFTS;
        });
        obj6.children = found.map((item, index) => {
          [tmp] = item;
          if (0 === index) {
            let other = closure_0.first;
          } else {
            other = closure_0.other;
          }
          return options(
            View,
            { style: other, children: options(FamilyCenterActivityTotalDefault, { displayType: tmp }) },
            "total-" + tmp,
          );
        });
        const items2 = [closure_9(View, obj6), closure_9(FamilyCenterTopActivityDefault, {})];
        let tmp11Result = null;
        if (tmp6) {
          const obj7 = {
            style: tmp.activities,
            children: sortedActivityTypeConfigs.map((item) => {
              [tmp] = item;
              return closure_1_9(FamilyCenterActivitySectionDefault, { displayType }, "section-" + displayType);
            }),
          };
          tmp11Result = closure_9(View, obj7);
        }
        items2[2] = tmp11Result;
        obj5.children = items2;
        items1[1] = closure_10(View, obj5);
        obj4.children = items1;
        items[1] = closure_10(View, obj4);
        const obj8 = { style: tmp.settingsControls, children: closure_9(FamilyCenterSettingsControlsDefault, {}) };
        items[2] = closure_9(View, obj8);
        obj2.children = items;
        return closure_10(View, obj2);
      }
      const obj = require("useSelectedTeenUser");
      tmp2 = _require;
    };
export const FamilyCenterActivityCardAccount = memoResult;
export const FamilyCenterActivityCardHeader = tmp5;
export { FamilyCenterActivityCardAccountSelect };
