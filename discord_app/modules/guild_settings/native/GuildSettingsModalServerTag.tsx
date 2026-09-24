// === Module 18124: GuildSettingsModalServerTag ===

// Module 18124 (GuildSettingsModalServerTag)
import nativeDefault from "native" /* 576 */;
import Powerups from "Powerups" /* 4721 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9921 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9939 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 12828 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2066 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9940 */;

require = fn;
const AppState = fn(17).AppState;
let GuildProfileFetchStatus = fn(9919).GuildProfileFetchStatus;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const GuildTagConstants = fn(8292);
({ BADGES: closure_11, GuildTagBadgeSize: closure_12 } = GuildTagConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { flex: 1 }, containerContent: { paddingTop: 16, paddingHorizontal: nativeDefault.space.PX_16 }, description: null };
let obj3 = { paddingTop: 16, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.description = { paddingHorizontal: nativeDefault.space.PX_4 };
let closure_15 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalServerTag.tsx");

export default function GuildSettingsModalServerTag(guildId) {
  guildId = guildId.guildId;
  let first;
  GuildProfileFetchStatus = undefined;
  let result1;
  closure_9 = undefined;
  closure_10 = undefined;
  let callback1;
  closure_12 = undefined;
  closure_13 = undefined;
  let tmp = closure_15();
  const navigation = guildId(1484).useNavigation();
  let obj = guildId(1484);
  const result = guildId(9942).canUseMobileServerTagSettings(guildId);
  dependencyMap = result;
  let obj2 = guildId(9942);
  const items = [result1];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const obj3 = guildId(504);
  const guildProfile1 = guildId(9920).useGuildProfile(guildId);
  ({ guildProfile, fetchStatus } = guildProfile1);
  const obj4 = guildId(9920);
  const items2 = [closure_9];
  const stateFromStores1 = guildId(504).useStateFromStores(items2, () => closure_9.getGuildProfile());
  let obj5 = guildId(504);
  const items3 = [closure_9];
  const stateFromStores2 = guildId(504).useStateFromStores(items3, () => closure_9.getProps().originalProfile);
  const tmp10 = stateFromStores2(first.useState(false), 2);
  first = tmp10[0];
  closure_6 = tmp10[1];
  let guildSupportsTagsResult = null != stateFromStores;
  if (guildSupportsTagsResult) {
    guildSupportsTagsResult = tmp2(8513).guildSupportsTags(stateFromStores);
    const tmp2Result = tmp2(8513);
  }
  GuildProfileFetchStatus = guildSupportsTagsResult;
  let tag;
  if (stateFromStores1 != null) {
    tag = stateFromStores1.tag;
  }
  const obj6 = guildId(504);
  result1 = guildId(9942).isServerTagDraftDirty(stateFromStores1, stateFromStores2);
  let tmp16 = null != stateFromStores1;
  if (tmp16) {
    let tmp17 = null == stateFromStores1.tag;
    if (!tmp17) {
      tmp17 = "" !== stateFromStores1.tag;
    }
    tmp16 = tmp17;
  }
  let tmp18 = result1;
  if (result1) {
    tmp18 = tmp16;
  }
  closure_9 = tmp18;
  const items4 = [guildId];
  const effect = obj7.useEffect(() => {
    if (!result1) {
      const guildProfile = GuildProfileActionCreators.getGuildProfile(guildId, true, { respectBackoff: true });
    }
  }, items4);
  const items5 = [guildId, result1];
  const effect1 = obj7.useEffect(() => {
    closure_0 = closure_6.addEventListener("change", (event) => {
      if (!tmp) {
        const guildProfile = guildId(dependencyMap[17]).getGuildProfile(closure_0, true, { respectBackoff: true });
        const obj = guildId(dependencyMap[17]);
      }
      tmp = "active" !== event || result1;
    });
    return () => closure_0.remove();
  }, items5);
  const items6 = [guildId, stateFromStores2];
  const callback = obj7.useCallback((arg0) => {
    const updateGuildProfile = GuildSettingsActionCreatorsDefault.updateGuildProfile;
    if (arg0) {
      let str;
      if (stateFromStores2 != null) {
        str = stateFromStores2.tag;
      }
      if (str == null) {
        str = "";
      }
      const obj = { tag: str, badge: null, badgeColorPrimary: null, badgeColorSecondary: null };
      let badge;
      if (stateFromStores2 != null) {
        badge = stateFromStores2.badge;
      }
      if (badge == null) {
        badge = closure_2_11[0];
      }
      obj.badge = badge;
      let badgeColorPrimary;
      if (stateFromStores2 != null) {
        badgeColorPrimary = stateFromStores2.badgeColorPrimary;
      }
      if (badgeColorPrimary == null) {
        badgeColorPrimary = null;
      }
      obj.badgeColorPrimary = badgeColorPrimary;
      let badgeColorSecondary;
      if (stateFromStores2 != null) {
        badgeColorSecondary = stateFromStores2.badgeColorSecondary;
      }
      if (badgeColorSecondary == null) {
        badgeColorSecondary = null;
      }
      obj.badgeColorSecondary = badgeColorSecondary;
      updateGuildProfile(guildId, obj);
    } else {
      updateGuildProfile(guildId, { tag: null });
    }
  }, items6);
  closure_10 = obj7.useRef(false);
  const items7 = [stateFromStores1, guildId, tmp18, result, navigation];
  callback1 = obj7.useCallback(stateFromStores1(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            let profileError2;
            if (null != stateFromStores1) {
              if (!ref.current) {
                if (closure_9) {
                  if (dependencyMap) {
                    ref.current = true;
                    closure_6(true);
                    ({ tag: obj4.tag, badge: obj4.badge, badgeColorPrimary: obj4.badgeColorPrimary, badgeColorSecondary: obj4.badgeColorSecondary } = stateFromStores1);
                    dependencyMap = 1;
                    c3 = 1;
                    const obj7 = { value: tmp2(9921).saveGuildProfile(guildId, { tag: null, badge: null, badgeColorPrimary: null, badgeColorSecondary: null }), done: false };
                    return obj7;
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
          const obj12 = { value, done: true };
          return obj12;
        } else {
          closure_128_0 = value;
          closure_129_10.current = false;
          closure_129_6(false);
          if (null == closure_128_0) {
            profileError2 = profileError.getProfileError();
            let status;
            if (profileError2 != null) {
              status = profileError2.status;
            }
            if (429 !== status) {
              closure_129_1.navigate(ref.TAG_CUSTOMIZE);
            }
          }
          const intl = tmp2(1115).intl;
          tmp2(4522).presentError(intl.string(tmp2(1115).t.RTSuVn));
          const obj = tmp2(4522);
        }
        c3 = 3;
      } catch (tmp27) {
        c3 = tmp;
        throw tmp27;
      }
    }
  }), items7);
  const items8 = [guildId];
  closure_12 = tmp24;
  const items9 = [navigation, result, fetchStatus === GuildProfileFetchStatus.FETCHED, guildSupportsTagsResult, first, tmp18, callback1];
  const callback2 = obj7.useCallback(() => {
    const obj = { guildId, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID };
    openGuildPowerupsModalDefault(obj);
  }, items8);
  const effect2 = obj7.useEffect(() => {
    if (c2) {
      if (closure_12) {
        if (c7) {
          let obj = {
            headerRight: first ? (() => closure_1_13(guildId(5929).HeaderSubmittingIndicator, {})) : (() => {
                    const obj = { text: null, onPress: null, disabled: null };
                    const intl = guildId(1115).intl;
                    obj.text = intl.string(guildId(1115).t["R3BPH+"]);
                    obj.onPress = onPress;
                    obj.disabled = !closure_1_9;
                    return closure_13(guildId(7707).HeaderActionButton, obj);
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
    let tag;
    if (stateFromStores2 != null) {
      tag = stateFromStores2.tag;
    }
    if (tag == null) {
      tag = null;
    }
    const obj2 = { tag, badge: null, badgeColorPrimary: null, badgeColorSecondary: null };
    let badge;
    if (stateFromStores2 != null) {
      badge = stateFromStores2.badge;
    }
    if (badge == null) {
      badge = null;
    }
    obj2.badge = badge;
    let badgeColorPrimary;
    if (stateFromStores2 != null) {
      badgeColorPrimary = stateFromStores2.badgeColorPrimary;
    }
    if (badgeColorPrimary == null) {
      badgeColorPrimary = null;
    }
    obj2.badgeColorPrimary = badgeColorPrimary;
    let badgeColorSecondary;
    if (stateFromStores2 != null) {
      badgeColorSecondary = stateFromStores2.badgeColorSecondary;
    }
    if (badgeColorSecondary == null) {
      badgeColorSecondary = null;
    }
    obj2.badgeColorSecondary = badgeColorSecondary;
    GuildSettingsActionCreatorsDefault.updateGuildProfile(guildId, obj2);
  }, items10);
  const tmp2Result3 = guildId(9942);
  let tmp26 = result1;
  if (result1) {
    tmp26 = !first;
  }
  const preventRemove = guildId(1485).usePreventRemove(tmp26, (data) => {
    const action = data.data.action;
    const obj2 = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, onConfirm: null };
    const intl = guildId(_undefined[20]).intl;
    obj2.title = intl.string(guildId(_undefined[20]).t.zhHtEX);
    const intl2 = guildId(_undefined[20]).intl;
    obj2.body = intl2.string(guildId(_undefined[20]).t.BVVy6y);
    const intl3 = guildId(_undefined[20]).intl;
    obj2.confirmText = intl3.string(guildId(_undefined[20]).t.Ywt4w9);
    obj2.confirmColor = guildId(_undefined[27]).ButtonColors.RED;
    const intl4 = guildId(_undefined[20]).intl;
    obj2.cancelText = intl4.string(guildId(_undefined[20]).t.DmDzZB);
    obj2.onConfirm = function onConfirm() {
      closure_13();
      navigation.dispatch(action);
    };
    navigation(_undefined[26]).show(obj2);
  });
  if (result) {
    if (tmp24) {
      if (null == stateFromStores) {
        return null;
      } else if (null == guildProfile) {
        const obj8 = {
          onRetry() {
                  return GuildProfileActionCreators.getGuildProfile(guildId, true);
                }
        };
        return closure_13(navigation(10114), obj8);
      } else if (null == stateFromStores1) {
        return closure_13(tmp2(7372).SceneLoadingIndicator, {});
      } else {
        let tmp29;
        if (tmp14) {
          if (null != stateFromStores1.tag) {
            if ("" !== stateFromStores1.tag) {
              const obj9 = { variant: "text-md/normal", color: "text-muted", children: stateFromStores1.tag };
              tmp29 = closure_13(tmp2(4825).Text, obj9);
            }
          }
        }
        const obj10 = { title: null, hasIcons: false, children: null };
        let intl = tmp2(1115).intl;
        obj10.title = intl.string(tmp2(1115).t["2QmKZ2"]);
        const obj11 = { label: null, value: null, onValueChange: null, disabled: null };
        let intl2 = tmp2(1115).intl;
        obj11.label = intl2.string(tmp2(1115).t["w/mIMw"]);
        obj11.value = tmp14;
        obj11.onValueChange = callback;
        obj11.disabled = !guildSupportsTagsResult;
        const items11 = [closure_13(tmp2(7533).TableSwitchRow, obj11), ];
        let obj12 = { label: null, arrow: true, disabled: null, onPress: null, trailing: null };
        let intl3 = tmp2(1115).intl;
        obj12.label = intl3.string(tmp2(1115).t.oPzTHw);
        let tmp33 = !tmp14;
        if (tmp14) {
          tmp33 = !guildSupportsTagsResult;
        }
        obj12.disabled = tmp33;
        obj12.onPress = function onPress() {
          return navigation.navigate(GuildSettingsSections.TAG_CUSTOMIZE);
        };
        let tmp31Result;
        if (null != tmp29) {
          const obj13 = { direction: "horizontal", align: "center", spacing: navigation(576).space.PX_4, children: null };
          let tmp32Result = null != stateFromStores1.badge;
          if (tmp32Result) {
            const size = { badge: null, primaryTintColor: null, secondaryTintColor: null, width: null, height: null };
            ({ badge: obj16.badge, badgeColorPrimary } = stateFromStores1);
            size.primaryTintColor = badgeColorPrimary;
            let badgeColorSecondary = stateFromStores1.badgeColorSecondary;
            size.secondaryTintColor = badgeColorSecondary;
            ({ SIZE_16: obj16.width, SIZE_16: obj16.height } = closure_12);
            tmp32Result = tmp32(tmp2(14282).GuildBadge, size);
          }
          const items12 = [tmp32Result, tmp29];
          obj13.children = items12;
          tmp31Result = closure_14(tmp2(5271).Stack, obj13);
        }
        obj12.trailing = tmp31Result;
        items11[1] = closure_13(tmp2(5910).TableRow, obj12);
        obj10.children = items11;
        const tmp31Result2 = closure_14(tmp2(5992).TableRowGroup, obj10);
        const obj14 = { style: tmp.container, contentContainerStyle: null, children: null };
        const items13 = [tmp.containerContent, guildId.contentContainerStyle];
        obj14.contentContainerStyle = items13;
        const obj15 = { spacing: navigation(576).space.PX_16, children: null };
        if (guildSupportsTagsResult) {
          const obj17 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
          let intl4 = tmp2(1115).intl;
          obj17.children = intl4.string(tmp2(1115).t["qVCnq+"]);
          const items14 = [tmp32(tmp2(4825).Text, obj17), tmp31Result2, , ];
          const obj18 = { variant: "eyebrow", color: "text-muted", style: tmp.description, accessibilityRole: "header", children: null };
          const intl5 = tmp2(1115).intl;
          obj18.children = intl5.string(tmp2(1115).t.SKNnqq);
          items14[2] = tmp32(tmp2(4825).Text, obj18);
          const obj19 = { guildId, tag: null, badge: null, primaryColor: null, secondaryColor: null, isDirty: null };
          ({ tag: obj22.tag, badge: obj22.badge, badgeColorPrimary: obj22.primaryColor, badgeColorSecondary: obj22.secondaryColor } = stateFromStores1);
          obj19.isDirty = result1;
          items14[3] = tmp32(tmp39(14280), obj19);
          obj15.children = items14;
          let tmp40 = obj15;
        } else {
          const obj20 = { guildId, onUnlockPress: callback2 };
          const items15 = [tmp32(tmp39(18125), obj20), tmp31Result2];
          obj15.children = items15;
          tmp40 = obj15;
        }
        obj14.children = closure_14(tmp2(5271).Stack, tmp40);
        return closure_13(tmp2(8951).Form, obj14);
      }
    } else {
      return closure_13(tmp2(7372).SceneLoadingIndicator, {});
    }
  } else {
    return null;
  }
  const tmp2Result4 = guildId(1485);
};