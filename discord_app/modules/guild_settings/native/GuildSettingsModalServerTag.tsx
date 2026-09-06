// === Module 17585: GuildSettingsModalServerTag ===

// Module 17585 (GuildSettingsModalServerTag)
import nativeDefault from "native" /* 576 */;
import Powerups from "Powerups" /* 4453 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import GuildProfileActionCreators from "GuildProfileActionCreators" /* 9188 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 12479 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9064 */;

require = fn;
const AppState = fn(17).AppState;
let GuildProfileFetchStatus = fn(9065).GuildProfileFetchStatus;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const GuildTagConstants = fn(7944);
({ BADGES: closure_11, GuildTagBadgeSize: closure_12 } = GuildTagConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 1 }, containerContent: null, description: null };
createStyles = { paddingTop: 16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.containerContent = createStyles;
createStyles.description = { paddingHorizontal: nativeDefault.space.PX_4 };
let closure_15 = createStyles.createStyles(createStyles);
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
  let obj = guildId(1483);
  const navigation = obj.useNavigation();
  let obj1 = guildId(9067);
  const result = obj1.canUseMobileServerTagSettings(guildId);
  dependencyMap = result;
  let obj2 = guildId(504);
  const items = [result1];
  const items1 = [guildId];
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  let obj3 = guildId(9187);
  guildProfile = obj3.useGuildProfile(guildId);
  ({ guildProfile, fetchStatus } = guildProfile);
  let obj4 = guildId(504);
  const items2 = [closure_9];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => closure_9.getGuildProfile());
  let obj5 = guildId(504);
  const items3 = [closure_9];
  const stateFromStores2 = obj5.useStateFromStores(items3, () => closure_9.getProps().originalProfile);
  let obj6 = first;
  const tmp10 = stateFromStores2(first.useState(false), 2);
  first = tmp10[0];
  closure_6 = tmp10[1];
  let guildSupportsTagsResult = null != stateFromStores;
  if (guildSupportsTagsResult) {
    let tmp2Result = tmp2(8165);
    guildSupportsTagsResult = tmp2Result.guildSupportsTags(stateFromStores);
  }
  GuildProfileFetchStatus = guildSupportsTagsResult;
  let tag;
  if (stateFromStores1 != null) {
    tag = stateFromStores1.tag;
  }
  tmp2Result = tmp2(9067);
  result1 = tmp2Result.isServerTagDraftDirty(stateFromStores1, stateFromStores2);
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
  const effect = obj6.useEffect(() => {
    if (!result1) {
      const guildProfile = GuildProfileActionCreators.getGuildProfile(guildId, true, { respectBackoff: true });
    }
  }, items4);
  const items5 = [guildId, result1];
  const effect1 = obj6.useEffect(() => {
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
  const callback = obj6.useCallback((arg0) => {
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
  closure_10 = obj6.useRef(false);
  const items7 = [stateFromStores1, guildId, tmp18, result, navigation];
  callback1 = obj6.useCallback(stateFromStores1(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
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
                    let obj2 = tmp2(9188);
                    ({ tag: obj4.tag, badge: obj4.badge, badgeColorPrimary: obj4.badgeColorPrimary, badgeColorSecondary: obj4.badgeColorSecondary } = stateFromStores1);
                    dependencyMap = 1;
                    c3 = 1;
                    obj2 = { value: null, done: false };
                    obj2.value = obj2.saveGuildProfile(guildId, { tag: null, badge: null, badgeColorPrimary: null, badgeColorSecondary: null });
                    return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
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
          obj = tmp2(4258);
          const intl = tmp2(1114).intl;
          obj.presentError(intl.string(tmp2(1114).t.RTSuVn));
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
  const callback2 = obj6.useCallback(() => {
    const obj = { guildId, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID };
    openGuildPowerupsModalDefault(obj);
  }, items8);
  const effect2 = obj6.useEffect(() => {
    if (c2) {
      if (closure_12) {
        if (c7) {
          let obj = {
            headerRight: first ? (() => closure_1_13(guildId(5624).HeaderSubmittingIndicator, {})) : (() => {
                    const obj = { text: null, onPress: null, disabled: null };
                    const intl = guildId(1114).intl;
                    obj.text = intl.string(guildId(1114).t["R3BPH+"]);
                    obj.onPress = onPress;
                    obj.disabled = !closure_1_9;
                    return closure_13(guildId(7377).HeaderActionButton, obj);
                  })
          };
          navigation.setOptions(obj);
        }
      }
    }
    navigation.setOptions({ headerRight: "Array" });
  }, items9);
  const items10 = [guildId, stateFromStores2];
  closure_13 = obj6.useCallback(() => {
    let obj = GuildSettingsActionCreatorsDefault;
    let tag;
    if (stateFromStores2 != null) {
      tag = stateFromStores2.tag;
    }
    if (tag == null) {
      tag = null;
    }
    obj = { tag, badge: null, badgeColorPrimary: null, badgeColorSecondary: null };
    let badge;
    if (stateFromStores2 != null) {
      badge = stateFromStores2.badge;
    }
    if (badge == null) {
      badge = null;
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
    obj.updateGuildProfile(guildId, obj);
  }, items10);
  let tmp26 = result1;
  if (result1) {
    tmp26 = !first;
  }
  const preventRemove = guildId(1484).usePreventRemove(tmp26, (data) => {
    const action = data.data.action;
    navigation(_undefined[26]);
    const obj = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, onConfirm: null };
    const intl = guildId(_undefined[20]).intl;
    obj.title = intl.string(guildId(_undefined[20]).t.zhHtEX);
    const intl2 = guildId(_undefined[20]).intl;
    obj.body = intl2.string(guildId(_undefined[20]).t.BVVy6y);
    const intl3 = guildId(_undefined[20]).intl;
    obj.confirmText = intl3.string(guildId(_undefined[20]).t.Ywt4w9);
    obj.confirmColor = guildId(_undefined[27]).ButtonColors.RED;
    const intl4 = guildId(_undefined[20]).intl;
    obj.cancelText = intl4.string(guildId(_undefined[20]).t.DmDzZB);
    obj.onConfirm = function onConfirm() {
      closure_13();
      navigation.dispatch(action);
    };
    obj.show(obj);
  });
  if (result) {
    if (tmp24) {
      if (null == stateFromStores) {
        return null;
      } else if (null == guildProfile) {
        obj = {
          onRetry() {
                  return GuildProfileActionCreators.getGuildProfile(guildId, true);
                }
        };
        return closure_13(navigation(9203), obj);
      } else if (null == stateFromStores1) {
        return closure_13(tmp2(7039).SceneLoadingIndicator, {});
      } else {
        let tmp29;
        if (tmp14) {
          if (null != stateFromStores1.tag) {
            if ("" !== stateFromStores1.tag) {
              obj = { variant: "text-md/normal", color: "text-muted", children: stateFromStores1.tag };
              tmp29 = closure_13(tmp2(4556).Text, obj);
            }
          }
        }
        obj1 = { title: null, hasIcons: false, children: null };
        let intl = tmp2(1114).intl;
        obj1.title = intl.string(tmp2(1114).t["2QmKZ2"]);
        obj2 = { label: null, value: null, onValueChange: null, disabled: null };
        let intl2 = tmp2(1114).intl;
        obj2.label = intl2.string(tmp2(1114).t["w/mIMw"]);
        obj2.value = tmp14;
        obj2.onValueChange = callback;
        obj2.disabled = !guildSupportsTagsResult;
        const items11 = [closure_13(tmp2(7201).TableSwitchRow, obj2), ];
        obj3 = { label: null, arrow: true, disabled: null, onPress: null, trailing: null };
        let intl3 = tmp2(1114).intl;
        obj3.label = intl3.string(tmp2(1114).t.oPzTHw);
        let tmp33 = !tmp14;
        if (tmp14) {
          tmp33 = !guildSupportsTagsResult;
        }
        obj3.disabled = tmp33;
        obj3.onPress = function onPress() {
          return navigation.navigate(GuildSettingsSections.TAG_CUSTOMIZE);
        };
        let tmp31Result;
        if (null != tmp29) {
          obj4 = { direction: "horizontal", align: "center", spacing: navigation(576).space.PX_4, children: null };
          let tmp32Result = null != stateFromStores1.badge;
          if (tmp32Result) {
            const size = { badge: null, primaryTintColor: null, secondaryTintColor: null, width: null, height: null };
            ({ badge: obj16.badge, badgeColorPrimary } = stateFromStores1);
            size.primaryTintColor = badgeColorPrimary;
            let badgeColorSecondary = stateFromStores1.badgeColorSecondary;
            size.secondaryTintColor = badgeColorSecondary;
            ({ SIZE_16: obj16.width, SIZE_16: obj16.height } = closure_12);
            tmp32Result = tmp32(tmp2(13915).GuildBadge, size);
          }
          const items12 = [tmp32Result, tmp29];
          obj4.children = items12;
          tmp31Result = closure_14(tmp2(4973).Stack, obj4);
        }
        obj3.trailing = tmp31Result;
        items11[1] = closure_13(tmp2(5605).TableRow, obj3);
        obj1.children = items11;
        tmp31Result = closure_14(tmp2(5687).TableRowGroup, obj1);
        obj5 = { style: tmp.container, contentContainerStyle: null, children: null };
        const items13 = [tmp.containerContent, guildId.contentContainerStyle];
        obj5.contentContainerStyle = items13;
        obj6 = { spacing: navigation(576).space.PX_16, children: null };
        if (guildSupportsTagsResult) {
          const obj7 = { variant: "text-sm/medium", color: "text-subtle", style: tmp.description, children: null };
          let intl4 = tmp2(1114).intl;
          obj7.children = intl4.string(tmp2(1114).t["qVCnq+"]);
          const items14 = [tmp32(tmp2(4556).Text, obj7), tmp31Result, , ];
          const obj8 = { variant: "eyebrow", color: "text-muted", style: tmp.description, accessibilityRole: "header", children: null };
          const intl5 = tmp2(1114).intl;
          obj8.children = intl5.string(tmp2(1114).t.SKNnqq);
          items14[2] = tmp32(tmp2(4556).Text, obj8);
          const obj9 = { guildId, tag: null, badge: null, primaryColor: null, secondaryColor: null, isDirty: null };
          ({ tag: obj22.tag, badge: obj22.badge, badgeColorPrimary: obj22.primaryColor, badgeColorSecondary: obj22.secondaryColor } = stateFromStores1);
          obj9.isDirty = result1;
          items14[3] = tmp32(tmp39(13913), obj9);
          obj6.children = items14;
          let tmp40 = obj6;
        } else {
          const obj10 = { guildId, onUnlockPress: callback2 };
          const items15 = [tmp32(tmp39(17586), obj10), tmp31Result];
          obj6.children = items15;
          tmp40 = obj6;
        }
        obj5.children = closure_14(tmp2(4973).Stack, tmp40);
        return closure_13(tmp2(8593).Form, obj5);
      }
    } else {
      return closure_13(tmp2(7039).SceneLoadingIndicator, {});
    }
  } else {
    return null;
  }
  const tmp2Result1 = guildId(1484);
};