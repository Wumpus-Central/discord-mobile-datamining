// discord_app/modules/guild_settings/native/GuildSettingsModalServerTag.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import TableSwitchRow from "TableSwitchRow";
import presentAddedFriendToast from "presentAddedFriendToast";
import { AppState } from "_fetchGuildTopGames";
import { GuildProfileFetchStatus } from "handleUpdateStart";
import closure_8 from "createGuildRecordFromRust";
import handleFormInit from "handleFormInit";
import { GuildSettingsSections } from "ME";
import items from "items";
import jsxProd from "openGuildPowerupsModal";
import createCacheKey from "createCacheKey";

let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const require = arg1;
({ BADGES: unpackModuleId, GuildTagBadgeSize: closure_12 } = items);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { container: { flex: 1 }, containerContent: null, description: null };
createCacheKey = { paddingTop: 16, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingHorizontal: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { paddingHorizontal: require("Themes").space.PX_4 };
let result = require("noop").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalServerTag.tsx");

export default function GuildSettingsModalServerTag(guildId) {
  let badgeColorPrimary;
  let fetchStatus;
  let guildProfile;
  guildId = guildId.guildId;
  let navigation;
  let dependencyMap;
  let stateFromStores1;
  let stateFromStores2;
  let first;
  let closure_6;
  let GuildProfileFetchStatus;
  let result1;
  let c9;
  let closure_10;
  let callback1;
  let c12;
  let callback;
  const tmp = createCacheKey();
  let obj = guildId(1480);
  navigation = obj.useNavigation();
  let obj1 = guildId(9024);
  const result = obj1.canUseMobileServerTagSettings(guildId);
  dependencyMap = result;
  let obj2 = guildId(589);
  const items = [result1];
  const items1 = [guildId];
  const stateFromStores = obj2.useStateFromStores(items, () => result1.getGuild(guildId), items1);
  let obj3 = guildId(9002);
  guildProfile = obj3.useGuildProfile(guildId);
  ({ guildProfile, fetchStatus } = guildProfile);
  let obj4 = guildId(589);
  const items2 = [c9];
  stateFromStores1 = obj4.useStateFromStores(items2, () => _undefined2.getGuildProfile());
  let obj5 = guildId(589);
  const items3 = [c9];
  stateFromStores2 = obj5.useStateFromStores(items3, () => _undefined2.getProps().originalProfile);
  let obj6 = first;
  const tmp10 = stateFromStores2(first.useState(false), 2);
  first = tmp10[0];
  closure_6 = tmp10[1];
  let guildSupportsTagsResult = null != stateFromStores;
  if (guildSupportsTagsResult) {
    let tmp2Result = tmp2(8266);
    guildSupportsTagsResult = tmp2Result.guildSupportsTags(stateFromStores);
  }
  GuildProfileFetchStatus = guildSupportsTagsResult;
  let tag;
  if (stateFromStores1 != null) {
    tag = stateFromStores1.tag;
  }
  tmp2Result = tmp2(9024);
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
  c9 = tmp18;
  const items4 = [guildId];
  const effect = obj6.useEffect(() => {
    if (!result1) {
      const guildProfile = guildId(_undefined[17]).getGuildProfile(guildId, true, { respectBackoff: true });
      const obj = guildId(_undefined[17]);
    }
  }, items4);
  const items5 = [guildId, result1];
  const effect1 = obj6.useEffect(() => {
    let closure_0 = closure_6.addEventListener("change", (arg0) => {
      if (!tmp) {
        const guildProfile = lib(outer1_2[17]).getGuildProfile(lib, true, { respectBackoff: true });
        const obj = lib(outer1_2[17]);
      }
    });
    return () => lib.remove();
  }, items5);
  const items6 = [guildId, stateFromStores2];
  callback = obj6.useCallback((arg0) => {
    const updateGuildProfile = navigation(_undefined[18]).updateGuildProfile;
    if (arg0) {
      let str;
      if (stateFromStores2 != null) {
        str = tmp4.tag;
      }
      if (str == null) {
        str = "";
      }
      const obj = { tag: null, badge: null, badgeColorPrimary: null, badgeColorSecondary: null };
      obj[0] = str;
      let badge;
      if (stateFromStores2 != null) {
        badge = tmp4.badge;
      }
      if (badge == null) {
        badge = callback1[0];
      }
      obj[1] = badge;
      let badgeColorPrimary;
      if (stateFromStores2 != null) {
        badgeColorPrimary = tmp4.badgeColorPrimary;
      }
      if (badgeColorPrimary == null) {
        badgeColorPrimary = null;
      }
      obj[2] = badgeColorPrimary;
      let badgeColorSecondary;
      if (stateFromStores2 != null) {
        badgeColorSecondary = tmp4.badgeColorSecondary;
      }
      if (badgeColorSecondary == null) {
        badgeColorSecondary = null;
      }
      obj[3] = badgeColorSecondary;
      updateGuildProfile(tmp2, obj);
    } else {
      updateGuildProfile(tmp2, { tag: null });
    }
  }, items6);
  closure_10 = obj6.useRef(false);
  const items7 = [stateFromStores1, guildId, tmp18, result, navigation];
  callback1 = obj6.useCallback(stateFromStores1(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let navigation = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            navigation = undefined;
            if (null != c3) {
              if (!outer1_10.current) {
                if (outer1_9) {
                  if (dependencyMap) {
                    outer1_10.current = true;
                    outer1_6(true);
                    let obj2 = outer1_0(9003);
                    ({ tag: obj4[0], badge: obj4[1], badgeColorPrimary: obj4[2], badgeColorSecondary: obj4[3] } = tmp43);
                    dependencyMap = 1;
                    c3 = 1;
                    obj2 = { value: null, done: false };
                    obj2[0] = obj2.saveGuildProfile(outer1_0, { tag: null, badge: null, badgeColorPrimary: null, badgeColorSecondary: null });
                    return obj2;
                  }
                }
              }
            }
            tmp43 = c3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          closure_0 = arg1;
          closure_10.current = false;
          callback(false);
          if (null == closure_0) {
            navigation = outer1_9.getProfileError();
            let status;
            if (navigation != null) {
              status = navigation.status;
            }
            if (429 !== status) {
              navigation.navigate(outer1_10.TAG_CUSTOMIZE);
            }
          }
          obj = outer1_0(4001);
          const intl = outer1_0(1236).intl;
          obj.presentError(intl.string(outer1_0(1236).t.RTSuVn));
        }
        c3 = 3;
      } catch (tmp27) {
        c3 = tmp;
        throw tmp27;
      }
    }
  }), items7);
  const items8 = [guildId];
  c12 = tmp24;
  const items9 = [navigation, result, fetchStatus === GuildProfileFetchStatus.FETCHED, guildSupportsTagsResult, first, tmp18, callback1];
  const callback2 = obj6.useCallback(() => {
    const obj = { guildId, autoOpenPerkId: null };
    obj[1] = guildId(_undefined[22]).GUILD_POWERUP_TAG_SKU_ID;
    navigation(_undefined[21])(obj);
  }, items8);
  const effect2 = obj6.useEffect(() => {
    if (c2) {
      if (c12) {
        if (c7) {
          let obj = { headerRight: null };
          obj[0] = first ? (() => callback2(callback(table[23]).HeaderSubmittingIndicator, {})) : (() => {
            const obj = { text: null, onPress: null, disabled: null };
            const intl = outer1_0(outer1_2[20]).intl;
            obj[0] = intl.string(outer1_0(outer1_2[20]).t["R3BPH+"]);
            obj[1] = closure_11;
            obj[2] = !handleFormInit;
            return outer1_13(outer1_0(outer1_2[24]).HeaderActionButton, obj);
          });
          navigation.setOptions(obj);
        }
      }
    }
    navigation.setOptions({ headerRight: "sa" });
  }, items9);
  const items10 = [guildId, stateFromStores2];
  callback = obj6.useCallback(() => {
    let obj = navigation(_undefined[18]);
    let tag;
    if (stateFromStores2 != null) {
      tag = tmp2.tag;
    }
    if (tag == null) {
      tag = null;
    }
    obj = { tag, badge: null, badgeColorPrimary: null, badgeColorSecondary: null };
    let badge;
    if (stateFromStores2 != null) {
      badge = tmp2.badge;
    }
    if (badge == null) {
      badge = null;
    }
    obj[1] = badge;
    let badgeColorPrimary;
    if (stateFromStores2 != null) {
      badgeColorPrimary = tmp2.badgeColorPrimary;
    }
    if (badgeColorPrimary == null) {
      badgeColorPrimary = null;
    }
    obj[2] = badgeColorPrimary;
    let badgeColorSecondary;
    if (stateFromStores2 != null) {
      badgeColorSecondary = tmp2.badgeColorSecondary;
    }
    if (badgeColorSecondary == null) {
      badgeColorSecondary = null;
    }
    obj[3] = badgeColorSecondary;
    obj.updateGuildProfile(guildId, obj);
  }, items10);
  let tmp26 = result1;
  if (result1) {
    tmp26 = !first;
  }
  const preventRemove = guildId(1481).usePreventRemove(tmp26, (data) => {
    const action = data.data.action;
    let obj = navigation(_undefined[26]);
    obj = { title: null, body: null, confirmText: null, confirmColor: null, cancelText: null, onConfirm: null };
    const intl = guildId(_undefined[20]).intl;
    obj[0] = intl.string(guildId(_undefined[20]).t.zhHtEX);
    const intl2 = guildId(_undefined[20]).intl;
    obj[1] = intl2.string(guildId(_undefined[20]).t.BVVy6y);
    const intl3 = guildId(_undefined[20]).intl;
    obj[2] = intl3.string(guildId(_undefined[20]).t.Ywt4w9);
    obj[3] = guildId(_undefined[27]).ButtonColors.RED;
    const intl4 = guildId(_undefined[20]).intl;
    obj[4] = intl4.string(guildId(_undefined[20]).t.DmDzZB);
    obj[5] = function onConfirm() {
      outer1_13();
      outer1_1.dispatch(action);
    };
    obj.show(obj);
  });
  if (result) {
    if (tmp24) {
      if (null == stateFromStores) {
        return null;
      } else if (null == guildProfile) {
        obj = { onRetry: null };
        obj[0] = function onRetry() {
          return guildId(_undefined[17]).getGuildProfile(guildId, true);
        };
        return callback(navigation(12207), obj);
      } else if (null == stateFromStores1) {
        return callback(tmp2(5822).SceneLoadingIndicator, {});
      } else {
        let tmp29;
        if (tmp14) {
          if (null != stateFromStores1.tag) {
            if ("" !== stateFromStores1.tag) {
              obj = { variant: "text-md/normal", color: "text-muted", children: null };
              obj[2] = stateFromStores1.tag;
              tmp29 = callback(tmp2(4299).Text, obj);
            }
          }
        }
        obj1 = { title: null, hasIcons: false, children: null };
        let intl = tmp2(1236).intl;
        obj1[0] = intl.string(tmp2(1236).t["2QmKZ2"]);
        obj2 = { label: null, value: null, onValueChange: null, disabled: null };
        let intl2 = tmp2(1236).intl;
        obj2[0] = intl2.string(tmp2(1236).t["w/mIMw"]);
        obj2[1] = tmp14;
        obj2[2] = callback;
        obj2[3] = !guildSupportsTagsResult;
        const items11 = [callback(tmp2(5768).TableSwitchRow, obj2), ];
        obj3 = { label: null, arrow: true, disabled: null, onPress: null, trailing: null };
        let intl3 = tmp2(1236).intl;
        obj3[0] = intl3.string(tmp2(1236).t.oPzTHw);
        let tmp33 = !tmp14;
        if (tmp14) {
          tmp33 = !guildSupportsTagsResult;
        }
        obj3[2] = tmp33;
        obj3[3] = function onPress() {
          return navigation.navigate(constants.TAG_CUSTOMIZE);
        };
        let tmp31Result;
        if (null != tmp29) {
          obj4 = { direction: "horizontal", align: "center", spacing: null, children: null };
          obj4[2] = navigation(712).space.PX_4;
          let tmp32Result = null != stateFromStores1.badge;
          if (tmp32Result) {
            obj5 = { badge: null, primaryTintColor: null, secondaryTintColor: null, width: null, height: null };
            ({ badge: obj16[0], badgeColorPrimary } = stateFromStores1);
            obj5[1] = badgeColorPrimary;
            let badgeColorSecondary = stateFromStores1.badgeColorSecondary;
            obj5[2] = badgeColorSecondary;
            ({ SIZE_16: obj16[3], SIZE_16: obj16[4] } = c12);
            tmp32Result = tmp32(tmp2(13262).GuildBadge, obj5);
          }
          const items12 = [tmp32Result, tmp29];
          obj4[3] = items12;
          tmp31Result = tmp31(tmp2(4712).Stack, obj4);
        }
        obj3[4] = tmp31Result;
        items11[1] = callback(tmp2(5374).TableRow, obj3);
        obj1[2] = items11;
        tmp31Result = tmp31(tmp2(5767).TableRowGroup, obj1);
        obj6 = { style: null, contentContainerStyle: null, children: null };
        obj6[0] = tmp.container;
        const items13 = [tmp.containerContent, guildId.contentContainerStyle];
        obj6[1] = items13;
        const obj7 = { spacing: null, children: null };
        obj7[0] = navigation(712).space.PX_16;
        if (guildSupportsTagsResult) {
          const obj8 = { variant: "text-sm/medium", color: "text-subtle", style: null, children: null };
          obj8[2] = tmp.description;
          let intl4 = tmp2(1236).intl;
          obj8[3] = intl4.string(tmp2(1236).t["qVCnq+"]);
          const items14 = [tmp32(tmp2(4299).Text, obj8), tmp31Result, , ];
          const obj9 = { variant: "eyebrow", color: "text-muted", style: null, accessibilityRole: "header", children: null };
          obj9[2] = tmp.description;
          const intl5 = tmp2(1236).intl;
          obj9[4] = intl5.string(tmp2(1236).t.SKNnqq);
          items14[2] = tmp32(tmp2(4299).Text, obj9);
          const obj10 = { guildId: null, tag: null, badge: null, primaryColor: null, secondaryColor: null, isDirty: null };
          obj10[0] = guildId;
          ({ tag: obj22[1], badge: obj22[2], badgeColorPrimary: obj22[3], badgeColorSecondary: obj22[4] } = stateFromStores1);
          obj10[5] = result1;
          items14[3] = tmp32(tmp39(13260), obj10);
          obj7[1] = items14;
          let tmp40 = obj7;
        } else {
          const obj11 = { guildId: null, onUnlockPress: null };
          obj11[0] = guildId;
          obj11[1] = callback2;
          const items15 = [tmp32(tmp39(16664), obj11), tmp31Result];
          obj7[1] = items15;
          tmp40 = obj7;
        }
        obj6[2] = closure_14(tmp2(4712).Stack, tmp40);
        return callback(tmp2(7967).Form, obj6);
      }
    } else {
      return callback(tmp2(5822).SceneLoadingIndicator, {});
    }
  } else {
    return null;
  }
  const tmp2Result1 = guildId(1481);
};