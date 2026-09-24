// === Module 9896: EditGuildEventWhere ===

// Module 9896 (EditGuildEventWhere)
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1875 */;
import _modDef4416 from "module_4416" /* 4416 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9873 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9939 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2044 */;
import PermissionStore from "PermissionStore" /* 4464 */;

const require = globalThis.__r;

require = fn;
let closure_8 = fn(7856).isGuildScheduledEventActive;
const GuildScheduledEventsConstants = fn(2050);
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: closure_9, GuildScheduledEventEntityTypes: c10 } = GuildScheduledEventsConstants);
const Constants = fn(1074);
({ Permissions: closure_11, GuildSettingsSections: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4829);
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
  const items = [ChannelStore];
  const items1 = [guildEvent.channelId];
  const stateFromStores = guild(ref[11]).useStateFromStores(items, () => ChannelStore.getChannel(guildEvent.channelId), items1);
  let obj = guild(ref[11]);
  const items2 = [PermissionStore];
  const items3 = [guild];
  let stateFromStores1 = guild(ref[11]).useStateFromStores(items2, () => PermissionStore.can(constants2.MANAGE_ROLES, guild), items3);
  let obj2 = guild(ref[11]);
  [tmp8, c4] = noop.useState(null);
  const tmp7 = _slicedToArray(noop.useState(null), 2);
  noop = guild(ref[12]).useNavigation();
  const obj3 = guild(ref[12]);
  const obj4 = { guild, channel: stateFromStores, guildEventId, channelType: null, onChangeChannel: null, style: null };
  guildEvent(ref[13]);
  const tmp9 = closure_8(initialGuildEvent);
  obj4.channelType = guild(ref[10]).getChannelTypeFromEntity(guildEvent.entityType);
  obj4.onChangeChannel = function onChangeChannel(handleSelectChannel) {
    _undefined(null);
    onChange({ channelId: handleSelectChannel.id });
  };
  obj4.style = tmp.channelSelection;
  if (guildEvent.entityType === constants.EXTERNAL) {
    let str = tmp3(tmp4[10]).getLocationFromEventData(guildEvent);
    if (str == null) {
      str = "";
    }
    const obj6 = {
      location: str,
      onChange: function handleChangeEventLocation(location) {
          _undefined(null);
          const obj = { entityMetadata: { location } };
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
    let tmp10Result = closure_13(tmp3(tmp4[14]).GuildEventLocation, obj6);
    const tmp3Result = tmp3(tmp4[10]);
  } else {
    tmp10Result = tmp13;
    if (null == stateFromStores) {
      tmp10Result = null;
    }
  }
  let tmp10Result2 = null;
  if (null != tmp8) {
    const obj7 = { style: tmp.error, variant: "text-sm/normal", color: "text-feedback-critical", children: tmp8 };
    tmp10Result2 = closure_13(tmp3(tmp4[15]).Text, obj7);
  }
  const obj8 = { children: null };
  const items4 = [tmp10Result2, ];
  const obj9 = { text: null, variant: "primary", onPress: null, disabled: null };
  let intl = tmp3(tmp4[9]).intl;
  obj9.text = intl.string(guild(ref[9]).t.PDTjLN);
  obj9.onPress = function onPress() {
    const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
    try {
      _undefined(null);
      (function assertGuildEventWhereIsValid(guildEvent) {
        const entityType = guildEvent.entityType;
        if (entityType === constants.NONE) {
          const _Error3 = Error;
          const intl3 = guild(1115).intl;
          const error = new Error(intl3.string(guild(1115).t.C4KzmQ));
          throw error;
        } else {
          if (entityType === constants.EXTERNAL) {
            if (null == obj.getLocationFromEventData(guildEvent)) {
              const _Error2 = Error;
              const intl2 = guild(1115).intl;
              const error1 = new Error(intl2.string(guild(1115).t.q91szp));
              throw error1;
            }
            obj = guild(9874);
          }
          if (null == tmp) {
            if (entityType !== constants.EXTERNAL) {
              const _Error = Error;
              const intl = guild(1115).intl;
              const error2 = new Error(intl.string(guild(1115).t["4LQwnw"]));
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
  obj9.disabled = null != tmp8;
  items4[1] = closure_13(guild(ref[16]).Button, obj9);
  obj8.children = items4;
  const obj5 = guild(ref[10]);
  const obj10 = { action: closure_15(closure_14, obj8), ref, children: null };
  const tmp15Result = closure_15(closure_14, obj8);
  const obj11 = { title: null, subtitle: null };
  const tmp11Result = guildEvent(ref[20]);
  let intl2 = tmp3(tmp4[9]).intl;
  obj11.title = intl2.string(guild(ref[9]).t["DC+Qm8"]);
  let intl3 = tmp3(tmp4[9]).intl;
  obj11.subtitle = intl3.string(guild(ref[9]).t.IwmXLP);
  const items5 = [
    closure_13(guildEvent(ref[21]), obj11),
    closure_13(guild(ref[14]).GuildEventEntityTypeSelection, {
      guild,
      entityType: guildEvent.entityType,
      onChange(entityType) {
        _undefined(null);
        const obj = { entityType, scheduledEndTime: "Array" };
        if (entityType === constants.EXTERNAL) {
          let obj2 = _modDef4416(guildEvent.scheduledStartTime);
          if (obj2 == null) {
            obj2 = _modDef4416();
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
  const obj12 = {
    guild,
    entityType: guildEvent.entityType,
    onChange(entityType) {
      _undefined(null);
      const obj = { entityType, scheduledEndTime: "Array" };
      if (entityType === constants.EXTERNAL) {
        let obj2 = _modDef4416(guildEvent.scheduledStartTime);
        if (obj2 == null) {
          obj2 = _modDef4416();
        }
        obj.scheduledEndTime = obj2.add(1, "hour").toISOString();
        const addResult = obj2.add(1, "hour");
      }
      onChange(obj);
    },
    disabled: tmp9
  };
  const tmp11Result2 = guildEvent(ref[21]);
  items5[3] = set.has(guildEvent.entityType) && closure_13(guildEvent(ref[23]), {});
  if (stateFromStores1) {
    const obj13 = { style: tmp.text, variant: "text-sm/normal", color: "text-default", children: null };
    const intl4 = tmp3(tmp4[9]).intl;
    const obj14 = {
      onClick() {
          GuildSettingsActionCreatorsDefault.open(guild.id, constants3.ROLES);
        }
    };
    obj13.children = intl4.format(tmp3(tmp4[9]).t["K+DH2o"], obj14);
    stateFromStores1 = closure_13(tmp3(tmp4[15]).Text, obj13);
  }
  items5[4] = stateFromStores1;
  obj10.children = items5;
  return closure_15(tmp11Result, obj10);
};