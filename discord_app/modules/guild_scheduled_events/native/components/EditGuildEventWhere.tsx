// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx
import _slicedToArray from "_slicedToArray";
import AccessibilityAnnouncer from "AccessibilityAnnouncer";
import ensureGuildLoaded from "ensureGuildLoaded";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { isGuildScheduledEventActive as closure_8 } from "scheduledEventSort";
import GUILD_EVENT_MAX_NAME_LENGTH from "GUILD_EVENT_MAX_NAME_LENGTH";
import ME from "ME";
import jsxProd from "EditGuildEventStepHeader";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
const require = arg1;
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: c9, GuildScheduledEventEntityTypes: c10 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ Permissions: unpackModuleId, GuildSettingsSections: closure_12 } = ME);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = createCacheKey.createStyles({ channelSelection: { marginTop: 16 }, error: { paddingVertical: 8 }, text: { marginTop: 24 } });
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx");

export default function EditGuildEventWhere(guild) {
  let c4;
  let guildEventId;
  let initialGuildEvent;
  let tmp8;
  guild = guild.guild;
  const guildEvent = guild.guildEvent;
  const onChange = guild.onChange;
  let ref;
  let callback;
  let React;
  ({ guildEventId, initialGuildEvent } = guild);
  const tmp = callback3();
  ref = React.useRef(null);
  let obj = guild(ref[11]);
  const items = [ensureGuildLoaded];
  const items1 = [guildEvent.channelId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(guildEvent.channelId), items1);
  let obj1 = guild(ref[11]);
  const items2 = [getUncachedChannelPermissions];
  const items3 = [guild];
  let stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_7.can(outer1_11.MANAGE_ROLES, guild), items3);
  [tmp8, c4] = callback(React.useState(null), 2);
  let obj2 = guild(ref[12]);
  React = obj2.useNavigation();
  const tmp7 = callback(React.useState(null), 2);
  obj = { guild, channel: stateFromStores, guildEventId, channelType: null, onChangeChannel: null, style: null };
  guildEvent(ref[13]);
  let obj4 = guild(ref[10]);
  obj[3] = obj4.getChannelTypeFromEntity(guildEvent.entityType);
  obj[4] = function onChangeChannel(channelId) {
    _undefined(null);
    onChange({ channelId: channelId.id });
  };
  obj[5] = tmp.channelSelection;
  if (guildEvent.entityType === constants.EXTERNAL) {
    let str = tmp3(tmp4[10]).getLocationFromEventData(guildEvent);
    if (str == null) {
      str = "";
    }
    obj = { location: null, onChange: null, onFocus: null };
    obj[0] = str;
    obj[1] = function handleChangeEventLocation(location) {
      _undefined(null);
      onChange({ entityMetadata: { location } });
    };
    obj[2] = function onFocus() {
      const timerId = setTimeout(() => {
        if (null != ref.current) {
          const current = ref.current;
          current.scrollToEnd();
        }
      }, 100);
    };
    let tmp10Result = tmp10(tmp3(tmp4[14]).GuildEventLocation, obj);
    const tmp3Result = tmp3(tmp4[10]);
  } else {
    tmp10Result = tmp13;
    if (null == stateFromStores) {
      tmp10Result = null;
    }
  }
  tmp10Result = null;
  if (null != tmp8) {
    obj1 = { style: null, variant: "text-sm/normal", color: "text-feedback-critical", children: null };
    obj1[0] = tmp.error;
    obj1[3] = tmp8;
    tmp10Result = tmp10(tmp3(tmp4[15]).Text, obj1);
  }
  obj2 = { children: null };
  const items4 = [tmp10Result, ];
  const obj3 = { text: null, variant: "primary", onPress: null, disabled: null };
  let intl = tmp3(tmp4[9]).intl;
  obj3[0] = intl.string(guild(ref[9]).t.PDTjLN);
  obj3[2] = function onPress() {
    const result = onChange(ref[17]).dismissGlobalKeyboard();
    try {
      _undefined(null);
      (function assertGuildEventWhereIsValid(guildEvent) {
        const entityType = guildEvent.entityType;
        if (entityType === constants.NONE) {
          const _Error3 = Error;
          const intl3 = callback(1236).intl;
          const error = new Error(intl3.string(callback(1236).t.C4KzmQ));
          throw error;
        } else {
          if (entityType === tmp2.EXTERNAL) {
            if (null == obj.getLocationFromEventData(guildEvent)) {
              const _Error2 = Error;
              const intl2 = tmp3(1236).intl;
              const error1 = new Error(intl2.string(tmp3(1236).t.q91szp));
              throw error1;
            }
            obj = callback(8868);
          }
          if (null == tmp) {
            if (entityType !== tmp2.EXTERNAL) {
              const _Error = Error;
              const intl = callback(1236).intl;
              const error2 = new Error(intl.string(callback(1236).t["4LQwnw"]));
              throw error2;
            }
          }
        }
      })(guildEvent);
      arr = arr.push(guild(ref[18]).EditGuildEventScreens.DETAILS);
    } catch (tmp13) {
      _undefined(tmp13.message);
      const AccessibilityAnnouncer = guild(tmp2[19]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp13.message);
    }
  };
  obj3[3] = null != tmp8;
  items4[1] = closure_13(guild(ref[16]).Button, obj3);
  obj2[0] = items4;
  const tmp16 = closure_14;
  const tmp9 = callback2(initialGuildEvent);
  obj4 = { action: closure_15(closure_14, obj2), ref, children: null };
  let tmp11Result = tmp11(tmp4[20]);
  const obj5 = { title: null, subtitle: null };
  tmp11Result = tmp11(tmp4[21]);
  let intl2 = tmp3(tmp4[9]).intl;
  obj5[0] = intl2.string(guild(ref[9]).t["DC+Qm8"]);
  let intl3 = tmp3(tmp4[9]).intl;
  obj5[1] = intl3.string(guild(ref[9]).t.IwmXLP);
  const items5 = [
    closure_13(tmp11Result, obj5),
    closure_13(guild(ref[14]).GuildEventEntityTypeSelection, {
      guild,
      entityType: guildEvent.entityType,
      onChange(entityType) {
        _undefined(null);
        const obj = { entityType, scheduledEndTime: "r" };
        if (entityType === outer1_10.EXTERNAL) {
          let obj2 = guildEvent(ref[22])(guildEvent.scheduledStartTime);
          if (obj2 == null) {
            obj2 = tmp2(tmp3[22])();
          }
          obj.scheduledEndTime = obj2.add(1, "hour").toISOString();
          const addResult = obj2.add(1, "hour");
          tmp2 = guildEvent;
          tmp3 = ref;
        }
        onChange(obj);
      },
      disabled: tmp9
    }),
    tmp10Result,
  ,

  ];
  const obj6 = {
    guild,
    entityType: guildEvent.entityType,
    onChange(entityType) {
      _undefined(null);
      const obj = { entityType, scheduledEndTime: "r" };
      if (entityType === outer1_10.EXTERNAL) {
        let obj2 = guildEvent(ref[22])(guildEvent.scheduledStartTime);
        if (obj2 == null) {
          obj2 = tmp2(tmp3[22])();
        }
        obj.scheduledEndTime = obj2.add(1, "hour").toISOString();
        const addResult = obj2.add(1, "hour");
        tmp2 = guildEvent;
        tmp3 = ref;
      }
      onChange(obj);
    },
    disabled: tmp9
  };
  const tmp15Result = closure_15(closure_14, obj2);
  items5[3] = set.has(guildEvent.entityType) && closure_13(guildEvent(ref[23]), {});
  if (stateFromStores1) {
    const obj7 = { style: null, variant: "text-sm/normal", color: "text-default", children: null };
    obj7[0] = tmp.text;
    const intl4 = tmp3(tmp4[9]).intl;
    const obj8 = { onClick: null };
    obj8[0] = function onClick() {
      guildEvent(ref[24]).open(guild.id, outer1_12.ROLES);
    };
    obj7[3] = intl4.format(tmp3(tmp4[9]).t["K+DH2o"], obj8);
    stateFromStores1 = tmp10(tmp3(tmp4[15]).Text, obj7);
  }
  items5[4] = stateFromStores1;
  obj4[2] = items5;
  return closure_15(tmp11Result, obj4);
};