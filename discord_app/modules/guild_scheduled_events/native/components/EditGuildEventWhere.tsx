// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import getUncachedChannelPermissions from "../../../../stores/PermissionStore.tsx";
import { isGuildScheduledEventActive as closure_8 } from "../../GuildScheduledEventStore.tsx";
import GUILD_EVENT_MAX_NAME_LENGTH from "../../GuildScheduledEventsConstants.tsx";
import ME from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: c9, GuildScheduledEventEntityTypes: c10 } = GUILD_EVENT_MAX_NAME_LENGTH);
({ Permissions: unpackModuleId, GuildSettingsSections: closure_12 } = ME);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = createCacheKey.createStyles({ channelSelection: { marginTop: 16 }, error: { paddingVertical: 8 }, text: { marginTop: 24 } });
let result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx");

export default function EditGuildEventWhere(guild) {
  guild = guild.guild;
  const guildEvent = guild.guildEvent;
  const onChange = guild.onChange;
  let callback;
  let React;
  ({ guildEventId, initialGuildEvent } = guild);
  const tmp = callback3();
  const ref = React.useRef(null);
  let obj = guild(ref[11]);
  const items = [closure_6];
  const items1 = [guildEvent.channelId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(guildEvent.channelId), items1);
  obj1 = guild(ref[11]);
  const items2 = [closure_7];
  const items3 = [guild];
  let stateFromStores1 = obj1.useStateFromStores(items2, () => closure_1_7.can(closure_1_11.MANAGE_ROLES, guild), items3);
  [tmp8, c4] = callback(React.useState(null), 2);
  let obj2 = guild(ref[12]);
  React = obj2.useNavigation();
  const tmp7 = callback(React.useState(null), 2);
  obj = { guild, channel: stateFromStores, guildEventId, channelType: null, onChangeChannel: null, style: null };
  guildEvent(ref[13]);
  let obj4 = guild(ref[10]);
  obj[3] = obj4.getChannelTypeFromEntity(guildEvent.entityType);
  obj[4] = function onChangeChannel(handleSelectChannel) {
    _undefined(null);
    onChange({ channelId: handleSelectChannel.id });
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
    let tmp10Result = callback(tmp3(tmp4[14]).GuildEventLocation, obj);
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
    tmp10Result = callback(tmp3(tmp4[15]).Text, obj1);
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
          error = new Error(intl3.string(callback(1236).t.C4KzmQ));
          throw error;
        } else {
          if (entityType === constants.EXTERNAL) {
            if (null == obj.getLocationFromEventData(guildEvent)) {
              const _Error2 = Error;
              const intl2 = callback(1236).intl;
              const error1 = new Error(intl2.string(callback(1236).t.q91szp));
              throw error1;
            }
            obj = callback(8788);
          }
          if (null == tmp) {
            if (entityType !== constants.EXTERNAL) {
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
    let obj = onChange(ref[17]);
  };
  obj3[3] = null != tmp8;
  items4[1] = callback(guild(ref[16]).Button, obj3);
  obj2[0] = items4;
  const tmp9 = callback2(initialGuildEvent);
  obj4 = { action: callback2(closure_14, obj2), ref, children: null };
  tmp11(tmp4[20]);
  const obj5 = { title: null, subtitle: null };
  const tmp11Result = tmp11(tmp4[21]);
  let intl2 = tmp3(tmp4[9]).intl;
  obj5[0] = intl2.string(guild(ref[9]).t["DC+Qm8"]);
  let intl3 = tmp3(tmp4[9]).intl;
  obj5[1] = intl3.string(guild(ref[9]).t.IwmXLP);
  const items5 = [
    callback(tmp11Result, obj5),
    callback(guild(ref[14]).GuildEventEntityTypeSelection, {
      guild,
      entityType: guildEvent.entityType,
      onChange(entityType) {
        _undefined(null);
        const obj = { entityType, scheduledEndTime: "a" };
        if (entityType === closure_1_10.EXTERNAL) {
          let obj2 = guildEvent(ref[22])(guildEvent.scheduledStartTime);
          if (obj2 == null) {
            obj2 = guildEvent(ref[22])();
          }
          obj.scheduledEndTime = obj2.add(1, "hour").toISOString();
          const addResult = obj2.add(1, "hour");
        }
        onChange(obj);
      },
      disabled: tmp9
    }),
    tmp10Result,
  ,

  ];
  const tmp15Result = callback2(closure_14, obj2);
  items5[3] = set.has(guildEvent.entityType) && callback(guildEvent(ref[23]), {});
  if (stateFromStores1) {
    const obj7 = { style: null, variant: "text-sm/normal", color: "text-default", children: null };
    obj7[0] = tmp.text;
    const intl4 = tmp3(tmp4[9]).intl;
    const obj8 = { onClick: null };
    obj8[0] = function onClick() {
      guildEvent(ref[24]).open(guild.id, closure_1_12.ROLES);
    };
    obj7[3] = intl4.format(tmp3(tmp4[9]).t["K+DH2o"], obj8);
    stateFromStores1 = callback(tmp3(tmp4[15]).Text, obj7);
  }
  items5[4] = stateFromStores1;
  obj4[2] = items5;
  return callback2(tmp11Result, obj4);
};