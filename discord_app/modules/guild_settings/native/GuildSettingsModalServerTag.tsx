// === Module 17803: GuildSettingsModalServerTag ===

// Module 17803 (GuildSettingsModalServerTag)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import Powerups from "Powerups" /* 4777 */;
import GuildProfileStore from "GuildProfileStore" /* 9262 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9264 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9282 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 12153 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9283 */;
import GuildTagConstants from "GuildTagConstants" /* 7614 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size_mod from "module_2" /* 2 */;

let c2, c3, dependencyMap, navigation;

let closure_12;
let closure_14;
let map1;
let obj2;
let obj3;
let unpackModuleId;
const AppState = react_native.AppState;
let GuildProfileFetchStatus = GuildProfileStore.GuildProfileFetchStatus;
const GuildSettingsSections = Constants.GuildSettingsSections;
({ BADGES: unpackModuleId, GuildTagBadgeSize: closure_12 } = GuildTagConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, containerContent: obj2, description: obj3 };
obj2 = { paddingTop: 16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_4 };
let closure_15 = createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalServerTag.tsx");

export default function GuildSettingsModalServerTag(guildId) {
  let Stack2;
  let _undefined;
  let badgeColorPrimary;
  let badgeColorSecondary;
  let c7;
  let fetchStatus;
  let guildProfile;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items11;
  let items12;
  let items13;
  let tmp32Result;
  let tmp34;
  let tmp41;
  guildId = guildId.guildId;
  dependencyMap = undefined;
  let first;
  GuildProfileFetchStatus = undefined;
  let result1;
  let closure_9;
  let closure_10;
  let callback1;
  closure_12 = undefined;
  let closure_13;
  const contentContainerStyle = guildId.contentContainerStyle;
  let tmp = closure_15();
  let tmp3 = dependencyMap;
  let obj = guildId(1490);
  navigation = obj.useNavigation();
  let obj2 = guildId(9285);
  const result = obj2.canUseMobileServerTagSettings(guildId);
  dependencyMap = result;
  const obj3 = guildId(504);
  const items = [result1];
  const items1 = [guildId];
  const stateFromStores = obj3.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj4 = guildId(9263);
  const guildProfile1 = obj4.useGuildProfile(guildId);
  ({ guildProfile, fetchStatus } = guildProfile1);
  let obj5 = guildId(504);
  const items2 = [closure_9];
  const stateFromStores1 = obj5.useStateFromStores(items2, () => closure_9.getGuildProfile());
  let obj6 = guildId(504);
  const items3 = [closure_9];
  const stateFromStores2 = obj6.useStateFromStores(items3, () => closure_9.getProps().originalProfile);
  const tmp10 = stateFromStores2(first.useState(false), 2);
  first = tmp10[0];
  let closure_6 = tmp10[1];
  let guildSupportsTagsResult = null != stateFromStores;
  if (guildSupportsTagsResult) {
    const tmp2Result = guildId(7847);
    guildSupportsTagsResult = tmp2Result.guildSupportsTags(stateFromStores);
  }
  GuildProfileFetchStatus = guildSupportsTagsResult;
  let tag;
  if (stateFromStores1 != null) {
    tag = stateFromStores1.tag;
  }
  const tmp2Result3 = guildId(9285);
  result1 = tmp2Result3.isServerTagDraftDirty(stateFromStores1, stateFromStores2);
  let tmp16 = null != stateFromStores1;
  if (tmp16) {
    let tmp17 = null == stateFromStores1.tag;
    if (!tmp17) {
      let str = "";
      tmp17 = "" !== stateFromStores1.tag;
    }
    tmp16 = tmp17;
  }
  closure_9 = tmp18;
  const items4 = [guildId];
  const effect = obj7.useEffect(() => {
    if (!result1) {
      const obj = GuildProfileActionCreators;
      const guildProfile = obj.getGuildProfile(guildId, true, { respectBackoff: true });
    }
  }, items4);
  const items5 = [guildId, result1];
  const effect1 = obj7.useEffect(() => {
    let closure_0 = closure_6.addEventListener("change", (event) => {
      const tmp = "active" !== event || result1;
      if (!tmp) {
        const obj = guildId(c2[17]);
        const guildProfile = obj.getGuildProfile(closure_0, true, { respectBackoff: true });
      }
    });
    return () => closure_0.remove();
  }, items5);
  const items6 = [guildId, stateFromStores2];
  const callback = obj7.useCallback((arg0) => {
    let badge;
    let badgeColorPrimary;
    let badgeColorSecondary;
    const updateGuildProfile = GuildSettingsActionCreatorsDefault.updateGuildProfile;
    GuildSettingsActionCreatorsDefault;
    const tmp3 = arg0;
    if (tmp3) {
      let str;
      if (stateFromStores2 != null) {
        str = stateFromStores2.tag;
      }
      if (str == null) {
        str = "";
      }
      const obj = { tag: str, badge, badgeColorPrimary, badgeColorSecondary };
      badge = undefined;
      if (stateFromStores2 != null) {
        badge = stateFromStores2.badge;
      }
      if (badge == null) {
        badge = unpackModuleId[0];
      }
      badgeColorPrimary = undefined;
      if (stateFromStores2 != null) {
        badgeColorPrimary = stateFromStores2.badgeColorPrimary;
      }
      if (badgeColorPrimary == null) {
        badgeColorPrimary = null;
      }
      badgeColorSecondary = undefined;
      if (stateFromStores2 != null) {
        badgeColorSecondary = stateFromStores2.badgeColorSecondary;
      }
      if (badgeColorSecondary == null) {
        badgeColorSecondary = null;
      }
      updateGuildProfile(guildId, obj);
    } else {
      updateGuildProfile(guildId, { tag: null });
    }
  }, items6);
  closure_10 = obj7.useRef(false);
  const items7 = [stateFromStores1, guildId, result1 && tmp16, result, navigation];
  callback1 = obj7.useCallback(stateFromStores1(function*() {
    let closure_0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        let status;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            tmp = undefined;
            status = undefined;
            if (null != stateFromStores1) {
              if (!ref.current) {
                if (closure_9) {
                  const tmp20 = c2;
                  if (tmp20) {
                    ref.current = true;
                    closure_6(true);
                    const obj6 = { tag: null, badge: null, badgeColorPrimary: null, badgeColorSecondary: null };
                    ({ tag: obj3.tag, badge: obj3.badge, badgeColorPrimary: obj3.badgeColorPrimary, badgeColorSecondary: obj3.badgeColorSecondary } = stateFromStores1);
                    const obj2 = tmp(c2[17]);
                    c2 = 1;
                    c3 = 1;
                    const obj10 = { value: obj2.saveGuildProfile(guildId, obj6), done: false };
                    return obj10;
                  }
                }
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          tmp = value;
          closure_129_10.current = false;
          closure_129_6(false);
          if (null == tmp) {
            profileError.getProfileError();
            status = undefined;
            if (status != null) {
              status = status.status;
            }
            if (429 === status) {
              const presentError = tmp(c2[19]).presentError;
              const tmp13 = tmp(c2[19]);
              const intl = tmp(c2[20]).intl;
              presentError(intl.string(tmp(c2[20]).t.RTSuVn));
            } else {
              closure_129_1.navigate(ref.TAG_CUSTOMIZE);
            }
          }
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp27) {
        c3 = 3;
        throw tmp27;
      }
    }
  }), items7);
  const items8 = [guildId];
  closure_12 = tmp24;
  const items9 = [navigation, result, tmp24, guildSupportsTagsResult, first, result1 && tmp16, callback1];
  const callback2 = obj7.useCallback(() => {
    const obj = { guildId, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID };
    const tmp = openGuildPowerupsModalDefault;
    tmp(obj);
  }, items8);
  const effect2 = obj7.useEffect(() => {
    let onPress;
    if (c2) {
      if (closure_12) {
        if (c7) {
          let obj = {
            headerRight: first ? (() => closure_1_13(guildId(_undefined[23]).HeaderSubmittingIndicator, {})) : (() => {
                    let intl;
                    const obj = { text: intl.string(guildId(c2[20]).t["R3BPH+"]), onPress, disabled: !closure_1_9 };
                    const HeaderActionButton = guildId(c2[24]).HeaderActionButton;
                    intl = guildId(c2[20]).intl;
                    return closure_13(HeaderActionButton, obj);
                  })
          };
          navigation.setOptions(obj);
        }
      }
    }
    navigation.setOptions({ headerRight: "r" });
  }, items9);
  const items10 = [guildId, stateFromStores2];
  closure_13 = obj7.useCallback(() => {
    let badge;
    let badgeColorPrimary;
    let badgeColorSecondary;
    let tag;
    const updateGuildProfile = GuildSettingsActionCreatorsDefault.updateGuildProfile;
    GuildSettingsActionCreatorsDefault;
    if (stateFromStores2 != null) {
      tag = stateFromStores2.tag;
    }
    if (tag == null) {
      tag = null;
    }
    const obj = { tag, badge, badgeColorPrimary, badgeColorSecondary };
    badge = undefined;
    if (stateFromStores2 != null) {
      badge = stateFromStores2.badge;
    }
    if (badge == null) {
      badge = null;
    }
    badgeColorPrimary = undefined;
    if (stateFromStores2 != null) {
      badgeColorPrimary = stateFromStores2.badgeColorPrimary;
    }
    if (badgeColorPrimary == null) {
      badgeColorPrimary = null;
    }
    badgeColorSecondary = undefined;
    if (stateFromStores2 != null) {
      badgeColorSecondary = stateFromStores2.badgeColorSecondary;
    }
    if (badgeColorSecondary == null) {
      badgeColorSecondary = null;
    }
    updateGuildProfile(guildId, obj);
  }, items10);
  let tmp27 = result1;
  const usePreventRemove = guildId(1491).usePreventRemove;
  guildId(1491);
  if (result1) {
    tmp27 = !first;
  }
  const preventRemove = usePreventRemove(tmp27, (data) => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    const action = data.data.action;
    const tmp = navigation(_undefined[26]);
    const show = tmp.show;
    const obj = {
      title: intl.string(guildId(_undefined[20]).t.zhHtEX),
      body: intl2.string(guildId(_undefined[20]).t.BVVy6y),
      confirmText: intl3.string(guildId(_undefined[20]).t.Ywt4w9),
      confirmColor: guildId(_undefined[27]).ButtonColors.RED,
      cancelText: intl4.string(guildId(_undefined[20]).t.DmDzZB),
      onConfirm() {
        closure_13();
        navigation.dispatch(action);
      }
    };
    intl = guildId(_undefined[20]).intl;
    intl2 = guildId(_undefined[20]).intl;
    intl3 = guildId(_undefined[20]).intl;
    intl4 = guildId(_undefined[20]).intl;
    show(obj);
  });
  if (result) {
    if (fetchStatus === GuildProfileFetchStatus.FETCHED) {
      if (null == stateFromStores) {
        return null;
      } else if (null == guildProfile) {
        const obj8 = {
          onRetry() {
                  const obj = GuildProfileActionCreators;
                  return obj.getGuildProfile(guildId, true);
                }
        };
        return closure_13(navigation(9426), obj8);
      } else if (null == stateFromStores1) {
        return closure_13(guildId(6542).SceneLoadingIndicator, {});
      } else {
        let tmp30;
        if (null != tag) {
          if (null != stateFromStores1.tag) {
            if ("" !== stateFromStores1.tag) {
              const obj9 = { variant: "text-md/normal", color: "text-muted", children: stateFromStores1.tag };
              tmp30 = closure_13(tmp2(4892).Text, obj9);
            }
          }
        }
        let obj10 = { title: intl.string(guildId(1126).t["2QmKZ2"]), hasIcons: false, children: items11 };
        const TableRowGroup = tmp2(6081).TableRowGroup;
        intl = tmp2(1126).intl;
        const obj11 = { label: intl2.string(guildId(1126).t["w/mIMw"]), value: null != tag, onValueChange: callback, disabled: !guildSupportsTagsResult };
        const TableSwitchRow = tmp2(6705).TableSwitchRow;
        intl2 = tmp2(1126).intl;
        items11 = [closure_13(TableSwitchRow, obj11), ];
        const obj12 = {
          label: intl3.string(guildId(1126).t.oPzTHw),
          arrow: true,
          disabled: tmp34,
          onPress() {
                  return navigation.navigate(GuildSettingsSections.TAG_CUSTOMIZE);
                },
          trailing: tmp32Result
        };
        const TableRow = tmp2(6000).TableRow;
        intl3 = tmp2(1126).intl;
        tmp34 = !tmp14;
        if (null != tag) {
          tmp34 = !guildSupportsTagsResult;
        }
        tmp32Result = undefined;
        if (null != tmp30) {
          const obj13 = { direction: "horizontal", align: "center", spacing: navigation(587).space.PX_4, children: items12 };
          const Stack = tmp2(5600).Stack;
          let tmp33Result = null != stateFromStores1.badge;
          if (tmp33Result) {
            size = { badge: null, primaryTintColor: badgeColorPrimary, secondaryTintColor: badgeColorSecondary, width: null, height: null };
            ({ badge: obj15.badge, badgeColorPrimary } = stateFromStores1);
            const GuildBadge = tmp2(13746).GuildBadge;
            badgeColorSecondary = stateFromStores1.badgeColorSecondary;
            ({ SIZE_16: obj15.width, SIZE_16: obj15.height } = closure_12);
            tmp33Result = tmp33(GuildBadge, size);
          }
          items12 = [tmp33Result, tmp30];
          tmp32Result = closure_14(Stack, obj13);
        }
        items11[1] = closure_13(TableRow, obj12);
        const tmp32Result2 = closure_14(TableRowGroup, obj10);
        const obj14 = { style: tmp.container, contentContainerStyle: items13, children: closure_14(Stack2, tmp41) };
        items13 = [tmp.containerContent, contentContainerStyle];
        const Form = tmp2(8924).Form;
        const obj16 = { spacing: navigation(587).space.PX_16, children: null };
        Stack2 = tmp2(5600).Stack;
        if (guildSupportsTagsResult) {
          const obj17 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: intl4.string(guildId(1126).t["qVCnq+"]) };
          const Text = tmp2(4892).Text;
          intl4 = tmp2(1126).intl;
          const items14 = [closure_13(Text, obj17), tmp32Result2, , ];
          const obj18 = { variant: "eyebrow", color: "text-muted", style: tmp.description, accessibilityRole: "header", children: intl5.string(guildId(1126).t.SKNnqq) };
          const Text2 = tmp2(4892).Text;
          intl5 = tmp2(1126).intl;
          items14[2] = closure_13(Text2, obj18);
          const obj19 = { guildId, tag: null, badge: null, primaryColor: null, secondaryColor: null, isDirty: result1 };
          ({ tag: obj21.tag, badge: obj21.badge, badgeColorPrimary: obj21.primaryColor, badgeColorSecondary: obj21.secondaryColor } = stateFromStores1);
          items14[3] = closure_13(navigation(13744), obj19);
          obj16.children = items14;
          tmp41 = obj16;
        } else {
          const obj20 = { guildId, onUnlockPress: callback2 };
          const items15 = [closure_13(navigation(17804), obj20), tmp32Result2];
          obj16.children = items15;
          tmp41 = obj16;
        }
        return closure_13(Form, obj14);
      }
    } else {
      return closure_13(guildId(6542).SceneLoadingIndicator, {});
    }
  } else {
    return null;
  }
};