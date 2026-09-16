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
const PublicGuildsConstants = fn(8152);
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
  const ref = noop.useRef(null);
  const token = guild(4339).useToken(defaultMessageNotifications(576).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(4339);
  let items = [GuildSettingsStore];
  guild = guild(504).useStateFromStoresObject(items, () => props.getProps()).guild;
  let prop;
  if (guild != null) {
    prop = guild.defaultMessageNotifications;
  }
  defaultMessageNotifications = _slicedToArray(noop.useState(prop), 1)[0];
  [first1, obj19.onValueChange] = noop.useState(false);
  let obj3 = guild(504);
  [tmp12, tmp13] = _slicedToArray(
    noop.useState(!closure_11.some((item) => PermissionUtilsAll.canEveryone(item, guild))),
    2,
  );
  const first2 = _slicedToArray(noop.useState(tmp12), 1)[0];
  let prop1;
  if (guild != null) {
    prop1 = guild.defaultMessageNotifications;
  }
  const items1 = [prop1, defaultMessageNotifications];
  const callback = noop.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0) {
      let prop;
      if (guild != null) {
        prop = guild.defaultMessageNotifications;
      }
      if (prop !== constants2.ONLY_MENTIONS) {
        const obj2 = { defaultMessageNotifications: tmp4.ONLY_MENTIONS };
        GuildSettingsActionCreatorsDefault.updateGuild(obj2);
      }
    }
    if (!tmp) {
      tmp = null == defaultMessageNotifications;
    }
    if (!tmp) {
      const obj4 = { defaultMessageNotifications };
      GuildSettingsActionCreatorsDefault.updateGuild(obj4);
    }
  }, items1);
  const callback1 = noop.useCallback((features) => {
    everyoneRole = undefined;
    if (null != features) {
      everyoneRole = everyoneRole.getEveryoneRole(features);
    }
    if (null != everyoneRole) {
      const _Set = Set;
      const set = new Set(features.features);
      set.add(constants.COMMUNITY);
      const removeResult = BigFlagUtilsAll.remove(everyoneRole.permissions, closure_1_12);
      const obj2 = {};
      const merged = Object.assign(everyoneRole);
      obj2.permissions = removeResult;
      const obj4 = {
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
      obj4.rulesChannelId = rulesChannelId;
      ({
        safetyAlertsChannelId: obj6.safetyAlertsChannelId,
        verificationLevel: obj6.verificationLevel,
        explicitContentFilter: obj6.explicitContentFilter,
        publicUpdatesChannelId,
      } = features);
      if (publicUpdatesChannelId == null) {
        publicUpdatesChannelId = closure_1_10;
      }
      obj4.publicUpdatesChannelId = publicUpdatesChannelId;
      obj4.defaultMessageNotifications = features.defaultMessageNotifications;
      first(9206).saveGuild(features.id, obj4);
      if (removeResult !== everyoneRole.permissions) {
        const items = [obj2];
        guild(17833).saveRoleSettings(features.id, items);
        const obj = guild(17833);
      }
      const obj5 = first(9206);
    }
  }, []);
  const tmp11 = _slicedToArray(
    noop.useState(!closure_11.some((item) => PermissionUtilsAll.canEveryone(item, guild))),
    2,
  );
  const tmp19 = defaultMessageNotifications(17877)();
  const enableCommunitySharedStyles = guild(17876).useEnableCommunitySharedStyles();
  let obj4 = {
    headerRef: ref,
    currentStep: guild(17874).EnableCommunityModalSteps.STEP_3,
    onSuccess: callback1,
    disableNextStep: !first1,
    buttonText: null,
    children: null,
  };
  const intl = tmp2(1115).intl;
  obj4.buttonText = intl.string(guild(1115).t.XGl4ba);
  let obj5 = { style: enableCommunitySharedStyles.content, children: null };
  const obj6 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
  const intl2 = tmp2(1115).intl;
  obj6.children = intl2.formatToPlainString(guild(1115).t.tInpJj, { number: 3, total: 3 });
  const items2 = [
    closure_16(guild(4634).Text, obj6),
    closure_16(closure_6, { resizeMode: "contain", source: tmp19.finishingTouches }),
    ,
  ];
  const obj8 = {
    style: enableCommunitySharedStyles.header,
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl3 = tmp2(1115).intl;
  obj8.children = intl3.string(guild(1115).t["Pj/s/a"]);
  items2[2] = closure_16(guild(4634).Heading, obj8);
  const obj9 = {
    style: enableCommunitySharedStyles.description,
    variant: "text-md/medium",
    color: "text-subtle",
    children: null,
  };
  const intl4 = tmp2(1115).intl;
  obj9.children = intl4.string(guild(1115).t["IL7/no"]);
  items2[3] = closure_16(guild(4634).Text, obj9);
  obj5.children = items2;
  const items3 = [closure_17(closure_7, obj5), ,];
  const obj10 = { spacing: 24, style: { paddingHorizontal: token }, children: null };
  const obj11 = { formSwitchDisabled: defaultMessageNotifications === constants2.ONLY_MENTIONS, children: null };
  const obj7 = { resizeMode: "contain", source: tmp19.finishingTouches };
  const tmp2Result = guild(17876);
  const obj12 = { label: null, value: null, disabled: null, onValueChange: null };
  const intl5 = tmp2(1115).intl;
  obj12.label = intl5.format(guild(1115).t.K8Eg4P, {
    infoHook() {
      return null;
    },
  });
  let prop2;
  if (guild != null) {
    prop2 = guild.defaultMessageNotifications;
  }
  const obj14 = { hasIcons: false, children: null };
  obj12.value = prop2 === constants2.ONLY_MENTIONS;
  obj12.disabled = defaultMessageNotifications === constants2.ONLY_MENTIONS;
  obj12.onValueChange = callback;
  obj11.children = closure_16(guild(7310).TableSwitchRow, obj12);
  const items4 = [closure_16(defaultMessageNotifications(17886), obj11)];
  const obj15 = { formSwitchDisabled: first2, children: null };
  const obj13 = {
    infoHook() {
      return null;
    },
  };
  const tmp4Result = defaultMessageNotifications(17886);
  const obj16 = { label: null, value: null, disabled: null, onValueChange: null };
  const intl6 = tmp2(1115).intl;
  obj16.label = intl6.format(guild(1115).t.v8qCoG, {
    infoHook() {
      return null;
    },
  });
  obj16.value = tmp12;
  obj16.disabled = first2;
  obj16.onValueChange = tmp13;
  obj15.children = closure_16(guild(7310).TableSwitchRow, obj16);
  items4[1] = closure_16(defaultMessageNotifications(17886), obj15);
  obj14.children = items4;
  const items5 = [closure_17(guild(5773).TableRowGroup, obj14)];
  const obj18 = { title: null, hasIcons: false, children: null };
  const intl7 = tmp2(1115).intl;
  obj18.title = intl7.string(guild(1115).t["k+b2Cf"]);
  const obj19 = { label: null, value: null, onValueChange: null };
  const intl8 = tmp2(1115).intl;
  obj19.label = intl8.string(guild(1115).t["9AG3wI"]);
  obj19.value = first1;
  obj18.children = closure_16(guild(7310).TableSwitchRow, obj19);
  items5[1] = closure_16(guild(5773).TableRowGroup, obj18);
  obj10.children = items5;
  items3[1] = closure_17(guild(5058).Stack, obj10);
  const obj20 = {
    style: enableCommunitySharedStyles.formHint,
    variant: "text-xs/medium",
    color: "text-subtle",
    children: null,
  };
  const intl9 = tmp2(1115).intl;
  const obj21 = { communityGuidelines: null, typesOfGuilds: null };
  const obj17 = {
    infoHook() {
      return null;
    },
  };
  const tmp4Result4 = defaultMessageNotifications(17886);
  obj21.communityGuidelines = defaultMessageNotifications(2025).getArticleURL(constants.PUBLIC_GUILD_GUILDLINES);
  const tmp4Result5 = defaultMessageNotifications(2025);
  obj21.typesOfGuilds = defaultMessageNotifications(2025).getArticleURL(
    constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES,
  );
  obj20.children = intl9.format(guild(1115).t["BwbW/Q"], obj21);
  items3[2] = closure_16(guild(4634).Text, obj20);
  obj4.children = items3;
  return closure_17(guild(17874).EnableCommunityModalScreen, obj4);
}
