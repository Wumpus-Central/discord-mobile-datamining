// === Module 9727: EditGuildEventWhere ===

// Module 9727 (EditGuildEventWhere)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1874 */;
import _modDef4153 from "module_4153" /* 4153 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9063 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9704 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
let closure_8 = fn(7526).isGuildScheduledEventActive;
const GuildScheduledEventsConstants = fn(1963);
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: closure_9, GuildScheduledEventEntityTypes: c10 } = GuildScheduledEventsConstants);
const Constants = fn(1074);
({ Permissions: closure_11, GuildSettingsSections: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4560);
let closure_16 = createStyles.createStyles({ channelSelection: { marginTop: 16 }, error: { paddingVertical: 8 }, text: { marginTop: 24 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx");

export default function EditGuildEventWhere(guild) {
  guild = guild.guild;
  const guildEvent = guild.guildEvent;
  const onChange = guild.onChange;
  _slicedToArray = undefined;
  noop = undefined;
  ({ guildEventId, initialGuildEvent } = guild);
  const tmp = closure_16();
  const ref = noop.useRef(null);
  let obj = guild(ref[11]);
  const items = [ChannelStore];
  const items1 = [guildEvent.channelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(guildEvent.channelId), items1);
  let obj1 = guild(ref[11]);
  const items2 = [PermissionStore];
  const items3 = [guild];
  let stateFromStores1 = obj1.useStateFromStores(items2, () => PermissionStore.can(constants2.MANAGE_ROLES, guild), items3);
  [tmp8, c4] = _slicedToArray(noop.useState(null), 2);
  let obj2 = guild(ref[12]);
  noop = obj2.useNavigation();
  const tmp7 = _slicedToArray(noop.useState(null), 2);
  obj = { guild, channel: stateFromStores, guildEventId, channelType: null, onChangeChannel: null, style: null };
  guildEvent(ref[13]);
  let obj4 = guild(ref[10]);
  obj.channelType = obj4.getChannelTypeFromEntity(guildEvent.entityType);
  obj.onChangeChannel = function onChangeChannel(handleSelectChannel) {
    _undefined(null);
    onChange({ channelId: handleSelectChannel.id });
  };
  obj.style = tmp.channelSelection;
  if (guildEvent.entityType === constants.EXTERNAL) {
    let str = tmp3(tmp4[10]).getLocationFromEventData(guildEvent);
    if (str == null) {
      str = "";
    }
    obj = {
      location: str,
      onChange: function handleChangeEventLocation(location) {
          _undefined(null);
          let obj = { entityMetadata: null };
          obj = { location };
          obj.entityMetadata = obj;
          onChange(obj);
        },
      onFocus() {
          const timerId = setTimeout(() => {
            if (null != ref.current) {
              const current = ref.current;
              current.scrollToEnd();
            }
          }, 100);
        }
    };
    let tmp10Result = closure_13(tmp3(tmp4[14]).GuildEventLocation, obj);
    const tmp3Result = tmp3(tmp4[10]);
  } else {
    tmp10Result = tmp13;
    if (null == stateFromStores) {
      tmp10Result = null;
    }
  }
  tmp10Result = null;
  if (null != tmp8) {
    obj1 = { style: tmp.error, variant: "text-sm/normal", color: "text-feedback-critical", children: tmp8 };
    tmp10Result = closure_13(tmp3(tmp4[15]).Text, obj1);
  }
  obj2 = { children: null };
  const items4 = [tmp10Result, ];
  const obj3 = { text: null, variant: "primary", onPress: null, disabled: null };
  let intl = tmp3(tmp4[9]).intl;
  obj3.text = intl.string(guild(ref[9]).t.PDTjLN);
  obj3.onPress = function onPress() {
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    try {
      _undefined(null);
      (function assertGuildEventWhereIsValid(guildEvent) {
        const entityType = guildEvent.entityType;
        if (entityType === constants.NONE) {
          const _Error3 = Error;
          const intl3 = guild(1114).intl;
          const error = new Error(intl3.string(guild(1114).t.C4KzmQ));
          throw error;
        } else {
          if (entityType === constants.EXTERNAL) {
            if (null == obj.getLocationFromEventData(guildEvent)) {
              const _Error2 = Error;
              const intl2 = guild(1114).intl;
              const error1 = new Error(intl2.string(guild(1114).t.q91szp));
              throw error1;
            }
            obj = guild(9705);
          }
          if (null == tmp) {
            if (entityType !== constants.EXTERNAL) {
              const _Error = Error;
              const intl = guild(1114).intl;
              const error2 = new Error(intl.string(guild(1114).t["4LQwnw"]));
              throw error2;
            }
          }
        }
      })(guildEvent);
      closure_5.push(EditGuildEventUtils.EditGuildEventScreens.DETAILS);
    } catch (tmp13) {
      _undefined(tmp13.message);
      const AccessibilityAnnouncer = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(tmp13.message);
    }
  };
  obj3.disabled = null != tmp8;
  items4[1] = closure_13(guild(ref[16]).Button, obj3);
  obj2.children = items4;
  const tmp9 = closure_8(initialGuildEvent);
  obj4 = { action: closure_15(closure_14, obj2), ref, children: null };
  tmp11(tmp4[20]);
  const obj5 = { title: null, subtitle: null };
  const tmp11Result = tmp11(tmp4[21]);
  let intl2 = tmp3(tmp4[9]).intl;
  obj5.title = intl2.string(guild(ref[9]).t["DC+Qm8"]);
  let intl3 = tmp3(tmp4[9]).intl;
  obj5.subtitle = intl3.string(guild(ref[9]).t.IwmXLP);
  const items5 = [
    closure_13(tmp11Result, obj5),
    closure_13(guild(ref[14]).GuildEventEntityTypeSelection, {
      guild,
      entityType: guildEvent.entityType,
      onChange(entityType) {
        _undefined(null);
        const obj = { entityType, scheduledEndTime: "a" };
        if (entityType === constants.EXTERNAL) {
          let obj2 = _modDef4153(guildEvent.scheduledStartTime);
          if (obj2 == null) {
            obj2 = _modDef4153();
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
  const obj6 = {
    guild,
    entityType: guildEvent.entityType,
    onChange(entityType) {
      _undefined(null);
      const obj = { entityType, scheduledEndTime: "a" };
      if (entityType === constants.EXTERNAL) {
        let obj2 = _modDef4153(guildEvent.scheduledStartTime);
        if (obj2 == null) {
          obj2 = _modDef4153();
        }
        obj.scheduledEndTime = obj2.add(1, "hour").toISOString();
        const addResult = obj2.add(1, "hour");
      }
      onChange(obj);
    },
    disabled: tmp9
  };
  const tmp15Result = closure_15(closure_14, obj2);
  items5[3] = set.has(guildEvent.entityType) && closure_13(guildEvent(ref[23]), {});
  if (stateFromStores1) {
    const obj7 = { style: tmp.text, variant: "text-sm/normal", color: "text-default", children: null };
    const intl4 = tmp3(tmp4[9]).intl;
    const obj8 = {
      onClick() {
          GuildSettingsActionCreatorsDefault.open(guild.id, constants3.ROLES);
        }
    };
    obj7.children = intl4.format(tmp3(tmp4[9]).t["K+DH2o"], obj8);
    stateFromStores1 = closure_13(tmp3(tmp4[15]).Text, obj7);
  }
  items5[4] = stateFromStores1;
  obj4.children = items5;
  return closure_15(tmp11Result, obj4);
};