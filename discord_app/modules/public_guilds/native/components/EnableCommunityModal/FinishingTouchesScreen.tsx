// === Module 19843: FinishingTouchesScreen ===

// Module 19843 (FinishingTouchesScreen)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import PermissionUtilsAll from "PermissionUtils" /* 4951 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9074 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9075 */;
import GuildRoleStore from "GuildRoleStore" /* 4920 */;

const require = fn;
const View = fn(17).View;
const PublicGuildsConstants = fn(8503);
({ MODERATOR_PERMISSIONS: closure_9, MODERATOR_PERMISSIONS_FLAG: c10 } = PublicGuildsConstants);
const Constants = fn(1072);
({ GuildFeatures: closure_11, HelpdeskArticles: closure_12, UserNotificationSettings: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/FinishingTouchesScreen.tsx");

export default function FinishingTouchesScreen() {
  const ref = noop.useRef(null);
  const token = guild(5596).useToken(defaultMessageNotifications(575).modules.mobile.TABLE_ROW_PADDING);
  let obj2 = guild(5596);
  let items = [GuildSettingsStore];
  guild = guild(504).useStateFromStoresObject(items, () => props.getProps()).guild;
  let prop;
  if (guild != null) {
    prop = guild.defaultMessageNotifications;
  }
  defaultMessageNotifications = _slicedToArray(noop.useState(prop), 1)[0];
  [first1, obj19.onValueChange] = noop.useState(false);
  let obj3 = guild(504);
  [tmp12, tmp13] = _slicedToArray(noop.useState(!closure_9.some((item) => PermissionUtilsAll.canEveryone(item, guild))), 2);
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
      const removeResult = BigFlagUtilsAll.remove(everyoneRole.permissions, closure_1_10);
      const obj2 = {};
      const merged = Object.assign(everyoneRole);
      obj2.permissions = removeResult;
      const obj4 = { features: set, rulesChannelId: null, safetyAlertsChannelId: null, verificationLevel: null, explicitContentFilter: null, publicUpdatesChannelId: null, defaultMessageNotifications: null };
      ({ rulesChannelId: obj6.rulesChannelId, safetyAlertsChannelId: obj6.safetyAlertsChannelId, verificationLevel: obj6.verificationLevel, explicitContentFilter: obj6.explicitContentFilter, publicUpdatesChannelId: obj6.publicUpdatesChannelId, defaultMessageNotifications: obj6.defaultMessageNotifications } = features);
      first(9074).saveGuild(features.id, obj4);
      if (removeResult !== everyoneRole.permissions) {
        const items = [obj2];
        guild(19785).saveRoleSettings(features.id, items);
        const obj = guild(19785);
      }
      const obj5 = first(9074);
    }
  }, []);
  const tmp11 = _slicedToArray(noop.useState(!closure_9.some((item) => PermissionUtilsAll.canEveryone(item, guild))), 2);
  const tmp19 = defaultMessageNotifications(19832)();
  const enableCommunitySharedStyles = guild(19831).useEnableCommunitySharedStyles();
  let obj4 = { headerRef: ref, currentStep: guild(19829).EnableCommunityModalSteps.STEP_3, onSuccess: callback1, disableNextStep: !first1, buttonText: null, children: null };
  const intl = tmp2(1113).intl;
  obj4.buttonText = intl.string(guild(1113).t.XGl4ba);
  let obj5 = { style: enableCommunitySharedStyles.content, children: null };
  const obj6 = { ref, accessibilityRole: "header", variant: "text-md/semibold", color: "text-subtle", children: null };
  const intl2 = tmp2(1113).intl;
  obj6.children = intl2.formatToPlainString(guild(1113).t.tInpJj, { number: 3, total: 3 });
  const items2 = [closure_14(guild(5624).Text, obj6), closure_14(defaultMessageNotifications(5717), { resizeMode: "contain", source: tmp19.finishingTouches }), , ];
  const obj8 = { style: enableCommunitySharedStyles.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl3 = tmp2(1113).intl;
  obj8.children = intl3.string(guild(1113).t["Pj/s/a"]);
  items2[2] = closure_14(guild(5624).Heading, obj8);
  const obj9 = { style: enableCommunitySharedStyles.description, variant: "text-md/medium", color: "text-subtle", children: null };
  const intl4 = tmp2(1113).intl;
  obj9.children = intl4.string(guild(1113).t["IL7/no"]);
  items2[3] = closure_14(guild(5624).Text, obj9);
  obj5.children = items2;
  const items3 = [closure_15(View, obj5), , ];
  const obj10 = { spacing: 24, style: { paddingHorizontal: token }, children: null };
  const obj11 = { formSwitchDisabled: defaultMessageNotifications === constants2.ONLY_MENTIONS, children: null };
  const obj7 = { resizeMode: "contain", source: tmp19.finishingTouches };
  const tmp2Result = guild(19831);
  const obj12 = { label: null, value: null, disabled: null, onValueChange: null };
  const intl5 = tmp2(1113).intl;
  obj12.label = intl5.format(guild(1113).t.K8Eg4P, {
    infoHook() {
      return null;
    }
  });
  let prop2;
  if (guild != null) {
    prop2 = guild.defaultMessageNotifications;
  }
  const obj14 = { hasIcons: false, children: null };
  obj12.value = prop2 === constants2.ONLY_MENTIONS;
  obj12.disabled = defaultMessageNotifications === constants2.ONLY_MENTIONS;
  obj12.onValueChange = callback;
  obj11.children = closure_14(guild(7369).TableSwitchRow, obj12);
  const items4 = [closure_14(defaultMessageNotifications(19841), obj11), ];
  const obj15 = { formSwitchDisabled: first2, children: null };
  const obj13 = {
    infoHook() {
      return null;
    }
  };
  const tmp4Result = defaultMessageNotifications(19841);
  const obj16 = { label: null, value: null, disabled: null, onValueChange: null };
  const intl6 = tmp2(1113).intl;
  obj16.label = intl6.format(guild(1113).t.v8qCoG, {
    infoHook() {
      return null;
    }
  });
  obj16.value = tmp12;
  obj16.disabled = first2;
  obj16.onValueChange = tmp13;
  obj15.children = closure_14(guild(7369).TableSwitchRow, obj16);
  items4[1] = closure_14(defaultMessageNotifications(19841), obj15);
  obj14.children = items4;
  const items5 = [closure_15(guild(7060).TableRowGroup, obj14), ];
  const obj18 = { title: null, hasIcons: false, children: null };
  const intl7 = tmp2(1113).intl;
  obj18.title = intl7.string(guild(1113).t["k+b2Cf"]);
  const obj19 = { label: null, value: null, onValueChange: null };
  const intl8 = tmp2(1113).intl;
  obj19.label = intl8.string(guild(1113).t["9AG3wI"]);
  obj19.value = first1;
  obj18.children = closure_14(guild(7369).TableSwitchRow, obj19);
  items5[1] = closure_14(guild(7060).TableRowGroup, obj18);
  obj10.children = items5;
  items3[1] = closure_15(guild(6027).Stack, obj10);
  const obj20 = { style: enableCommunitySharedStyles.formHint, variant: "text-xs/medium", color: "text-subtle", children: null };
  const intl9 = tmp2(1113).intl;
  const obj21 = { communityGuidelines: null, typesOfGuilds: null };
  const obj17 = {
    infoHook() {
      return null;
    }
  };
  const tmp4Result4 = defaultMessageNotifications(19841);
  obj21.communityGuidelines = defaultMessageNotifications(2061).getArticleURL(constants.PUBLIC_GUILD_GUILDLINES);
  const tmp4Result5 = defaultMessageNotifications(2061);
  obj21.typesOfGuilds = defaultMessageNotifications(2061).getArticleURL(constants.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES);
  obj20.children = intl9.format(guild(1113).t["BwbW/Q"], obj21);
  items3[2] = closure_14(guild(5624).Text, obj20);
  obj4.children = items3;
  return closure_15(guild(19829).EnableCommunityModalScreen, obj4);
};