// discord_app/modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx
import BigFlagUtilsAll from "../../../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import PermissionUtilsAll from "../../../../../utils/PermissionUtils.tsx";
import GuildSettingsActionCreatorsDefault from "../../../../guild_settings/GuildSettingsActionCreators.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import GuildSettingsStore from "../../../../guild_settings/GuildSettingsStore.tsx";
import GuildRoleStore from "../../../../../stores/GuildRoleStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: metroRequire, View: closure_7 } = get_ActivityIndicator);
const PublicGuildsConstants = fn(8035);
({
  CREATE_NEW_CHANNEL_VALUE: c10,
  MODERATOR_PERMISSIONS: closure_11,
  MODERATOR_PERMISSIONS_FLAG: closure_12,
} = PublicGuildsConstants);
const Constants = fn(1074);
({ GuildFeatures: map1, HelpdeskArticles: closure_14, UserNotificationSettings: closure_15 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx",
);

export default function FinishingTouchesScreen() {
  let obj = noop;
  const ref = noop.useRef(null);
  let obj1 = guild(4262);
  const token = obj1.useToken(defaultMessageNotifications(576).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(504);
  let items = [GuildSettingsStore];
  guild = obj2.useStateFromStoresObject(items, () => props.getProps()).guild;
  let prop;
  if (guild != null) {
    prop = guild.defaultMessageNotifications;
  }
  defaultMessageNotifications = _slicedToArray(noop.useState(prop), 1)[0];
  const tmp9 = _slicedToArray(obj.useState(false), 2);
  const first1 = tmp9[0];
  [tmp12, tmp13] = _slicedToArray(
    obj.useState(!closure_11.some((item) => PermissionUtilsAll.canEveryone(item, guild))),
    2,
  );
  const first2 = _slicedToArray(obj.useState(tmp12), 1)[0];
  let prop1;
  if (guild != null) {
    prop1 = guild.defaultMessageNotifications;
  }
  const items1 = [prop1, defaultMessageNotifications];
  const callback = obj.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0) {
      let prop;
      if (guild != null) {
        prop = guild.defaultMessageNotifications;
      }
      if (prop !== constants2.ONLY_MENTIONS) {
        let obj = { defaultMessageNotifications: tmp4.ONLY_MENTIONS };
        GuildSettingsActionCreatorsDefault.updateGuild(obj);
      }
    }
    if (!tmp) {
      tmp = null == defaultMessageNotifications;
    }
    if (!tmp) {
      obj = { defaultMessageNotifications };
      obj.updateGuild(obj);
    }
  }, items1);
  const callback1 = obj.useCallback((features) => {
    everyoneRole = undefined;
    if (null != features) {
      everyoneRole = everyoneRole.getEveryoneRole(features);
    }
    if (null != everyoneRole) {
      const _Set = Set;
      const set = new Set(features.features);
      set.add(constants.COMMUNITY);
      const removeResult = BigFlagUtilsAll.remove(everyoneRole.permissions, closure_1_12);
      let obj = {};
      const merged = Object.assign(everyoneRole);
      obj.permissions = removeResult;
      obj = {
        features: set,
        rulesChannelId: null,
        safetyAlertsChannelId: null,
        verificationLevel: null,
        explicitContentFilter: null,
        publicUpdatesChannelId: null,
        defaultMessageNotifications: null,
      };
      let rulesChannelId = features.rulesChannelId;
      if (rulesChannelId == null) {
        rulesChannelId = closure_1_10;
      }
      obj.rulesChannelId = rulesChannelId;
      ({
        safetyAlertsChannelId: obj6.safetyAlertsChannelId,
        verificationLevel: obj6.verificationLevel,
        explicitContentFilter: obj6.explicitContentFilter,
        publicUpdatesChannelId,
      } = features);
      if (publicUpdatesChannelId == null) {
        publicUpdatesChannelId = closure_1_10;
      }
      obj.publicUpdatesChannelId = publicUpdatesChannelId;
      obj.defaultMessageNotifications = features.defaultMessageNotifications;
      first(9063).saveGuild(features.id, obj);
      if (removeResult !== everyoneRole.permissions) {
        obj = guild(17624);
        const items = [obj];
        obj.saveRoleSettings(features.id, items);
      }
      const obj5 = first(9063);
    }
  }, []);
  const tmp11 = _slicedToArray(
    obj.useState(!closure_11.some((item) => PermissionUtilsAll.canEveryone(item, guild))),
    2,
  );
  const tmp19 = defaultMessageNotifications(17666)();
  const enableCommunitySharedStyles = guild(17665).useEnableCommunitySharedStyles();
  obj = {
    headerRef: ref,
    currentStep: tmp2(17663).EnableCommunityModalSteps.STEP_3,
    onSuccess: callback1,
    disableNextStep: !first1,
    buttonText: null,
    children: null,
  };
  const intl = tmp2(1114).intl;
  obj.buttonText = intl.string(guild(1114).t.XGl4ba);
  obj = { style: enableCommunitySharedStyles.content, children: null };
  obj1 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
  const intl2 = tmp2(1114).intl;
  obj1.children = intl2.formatToPlainString(guild(1114).t.tInpJj, { number: 3, total: 3 });
  const items2 = [closure_16(guild(4556).Text, obj1), , ,];
  obj2 = { resizeMode: "contain", source: tmp19.finishingTouches };
  items2[1] = closure_16(closure_6, obj2);
  let obj3 = {
    style: enableCommunitySharedStyles.header,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl3 = tmp2(1114).intl;
  obj3.children = intl3.string(guild(1114).t["Pj/s/a"]);
  items2[2] = closure_16(guild(4556).Heading, obj3);
  const obj4 = {
    style: enableCommunitySharedStyles.description,
    variant: "text-md/medium",
    color: "text-subtle",
    children: null,
  };
  const intl4 = tmp2(1114).intl;
  obj4.children = intl4.string(guild(1114).t["IL7/no"]);
  items2[3] = closure_16(guild(4556).Text, obj4);
  obj.children = items2;
  const items3 = [closure_17(closure_7, obj), ,];
  let obj5 = { spacing: 24, style: { paddingHorizontal: token }, children: null };
  const obj6 = { formSwitchDisabled: defaultMessageNotifications === constants2.ONLY_MENTIONS, children: null };
  let tmp4Result = tmp4(17675);
  const obj7 = { label: null, value: null, disabled: null, onValueChange: null };
  const intl5 = tmp2(1114).intl;
  obj7.label = intl5.format(guild(1114).t.K8Eg4P, {
    infoHook() {
      return null;
    },
  });
  let prop2;
  if (guild != null) {
    prop2 = guild.defaultMessageNotifications;
  }
  const obj9 = { hasIcons: false, children: null };
  obj7.value = prop2 === constants2.ONLY_MENTIONS;
  obj7.disabled = defaultMessageNotifications === constants2.ONLY_MENTIONS;
  obj7.onValueChange = callback;
  obj6.children = closure_16(guild(7201).TableSwitchRow, obj7);
  const items4 = [closure_16(tmp4Result, obj6)];
  const obj10 = { formSwitchDisabled: first2, children: null };
  tmp4Result = tmp4(17675);
  const obj11 = { label: null, value: null, disabled: null, onValueChange: null };
  const intl6 = tmp2(1114).intl;
  obj11.label = intl6.format(guild(1114).t.v8qCoG, {
    infoHook() {
      return null;
    },
  });
  obj11.value = tmp12;
  obj11.disabled = first2;
  obj11.onValueChange = tmp13;
  obj10.children = closure_16(guild(7201).TableSwitchRow, obj11);
  items4[1] = closure_16(tmp4Result, obj10);
  obj9.children = items4;
  const items5 = [closure_17(guild(5687).TableRowGroup, obj9)];
  const obj13 = { title: null, hasIcons: false, children: null };
  const intl7 = tmp2(1114).intl;
  obj13.title = intl7.string(guild(1114).t["k+b2Cf"]);
  const obj14 = { label: null, value: null, onValueChange: null };
  const intl8 = tmp2(1114).intl;
  obj14.label = intl8.string(guild(1114).t["9AG3wI"]);
  obj14.value = first1;
  obj14.onValueChange = tmp9[1];
  obj13.children = closure_16(guild(7201).TableSwitchRow, obj14);
  items5[1] = closure_16(guild(5687).TableRowGroup, obj13);
  obj5.children = items5;
  items3[1] = closure_17(guild(4973).Stack, obj5);
  const obj15 = {
    style: enableCommunitySharedStyles.formHint,
    variant: "text-xs/medium",
    color: "text-subtle",
    children: null,
  };
  const intl9 = tmp2(1114).intl;
  const obj16 = { communityGuidelines: null, typesOfGuilds: null };
  const obj12 = {
    infoHook() {
      return null;
    },
  };
  const obj8 = {
    infoHook() {
      return null;
    },
  };
  const tmp2Result = guild(17665);
  obj16.communityGuidelines = defaultMessageNotifications(2024).getArticleURL(constants.PUBLIC_GUILD_GUILDLINES);
  const tmp4Result1 = defaultMessageNotifications(2024);
  obj16.typesOfGuilds = defaultMessageNotifications(2024).getArticleURL(
    constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES,
  );
  obj15.children = intl9.format(guild(1114).t["BwbW/Q"], obj16);
  items3[2] = closure_16(guild(4556).Text, obj15);
  obj.children = items3;
  return closure_17(guild(17663).EnableCommunityModalScreen, obj);
}
