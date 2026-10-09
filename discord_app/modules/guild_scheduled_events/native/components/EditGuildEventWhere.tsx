// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx
import util from "../../../../intl/index.native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import _modDef4661 from "../../../../../_runtime/metro/04661__.js";
import EditGuildEventUtils from "../../utils/EditGuildEventUtils.tsx";
import EntityUtils from "../../utils/EntityUtils.tsx";
import GuildSettingsActionCreatorsDefault from "../../../guild_settings/GuildSettingsActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

const require = globalThis.__r;

require = fn;
function assertGuildEventWhereIsValid(guildEvent) {
  const entityType = guildEvent.entityType;
  if (entityType === constants.NONE) {
    const _Error3 = Error;
    const intl3 = util.intl;
    const error = new Error(intl3.string(util.t.C4KzmQ));
    throw error;
  } else {
    if (entityType === constants.EXTERNAL) {
      if (null == obj.getLocationFromEventData(guildEvent)) {
        const _Error2 = Error;
        const intl2 = util.intl;
        const error1 = new Error(intl2.string(util.t.q91szp));
        throw error1;
      }
      obj = EntityUtils;
    }
    if (null == tmp) {
      if (entityType !== constants.EXTERNAL) {
        const _Error = Error;
        const intl = util.intl;
        const error2 = new Error(intl.string(util.t["4LQwnw"]));
        throw error2;
      }
    }
  }
}
let closure_8 = fn(6061).isGuildScheduledEventActive;
const GuildScheduledEventsConstants = fn(2070);
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: closure_9, GuildScheduledEventEntityTypes: c10 } =
  GuildScheduledEventsConstants);
const Constants = fn(1085);
({ Permissions: closure_11, GuildSettingsSections: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5091);
let closure_16 = createStyles.createStyles({
  channelSelection: { marginTop: 16 },
  error: { paddingVertical: 8 },
  text: { marginTop: 24 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function EditGuildEventWhere(guild) {
      const cResult = guild(ref[12]).c(63);
      guild = guild.guild;
      const guildEvent = guild.guildEvent;
      ({ guildEventId, initialGuildEvent, onChange } = guild);
      const tmp4 = closure_16();
      ref = navigation.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildEvent.channelId) {
        class T {
          constructor() {
            return closure_6.getChannel(guildEvent.channelId);
          }
        }
        const items1 = [guildEvent.channelId];
        cResult[1] = guildEvent.channelId;
        cResult[2] = T;
        cResult[3] = items1;
        let tmp9 = items1;
      } else {
        class T {
          constructor() {
            return closure_6.getChannel(guildEvent.channelId);
          }
        }
        tmp9 = cResult[3];
      }
      let obj = guild(ref[12]);
      let obj2 = navigation;
      const stateFromStores = guild(ref[13]).useStateFromStores(first, T, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return closure_6.getChannel(guildEvent.channelId);
          }
        }
        const items2 = [PermissionStore];
        cResult[4] = items2;
        const tmp11 = items2;
      } else {
        class T {
          constructor() {
            return closure_6.getChannel(guildEvent.channelId);
          }
        }
      }
      if (cResult[5] !== guild) {
        class D {
          constructor() {
            return closure_7.can(Permissions.MANAGE_ROLES, guild);
          }
        }
        const items3 = [guild];
        cResult[5] = guild;
        cResult[6] = D;
        cResult[7] = items3;
        let tmp13 = items3;
      } else {
        class D {
          constructor() {
            return closure_7.can(Permissions.MANAGE_ROLES, guild);
          }
        }
        tmp13 = cResult[7];
      }
      const tmpResult = guild(ref[13]);
      const stateFromStores1 = guild(ref[13]).useStateFromStores(tmp11, D, tmp13);
      const tmpResult3 = guild(ref[13]);
      [r10070, _slicedToArray] = obj2.useState(null);
      const tmp15 = _slicedToArray(obj2.useState(null), 2);
      navigation = guild(ref[14]).useNavigation();
      if (cResult[8] !== initialGuildEvent) {
        class D {
          constructor() {
            return closure_7.can(Permissions.MANAGE_ROLES, guild);
          }
        }
        const tmp18 = closure_8(initialGuildEvent);
        cResult[8] = initialGuildEvent;
        cResult[9] = tmp18;
      } else {
        class D {
          constructor() {
            return closure_7.can(Permissions.MANAGE_ROLES, guild);
          }
        }
      }
      if (cResult[10] === guildEvent) {
        class D {
          constructor() {
            return closure_7.can(Permissions.MANAGE_ROLES, guild);
          }
        }
        if (cResult[13] !== onChange) {
          class D {
            constructor() {
              return closure_7.can(Permissions.MANAGE_ROLES, guild);
            }
          }
          cResult[13] = onChange;
          cResult[14] = tmp20;
        } else {
          class D {
            constructor() {
              return closure_7.can(Permissions.MANAGE_ROLES, guild);
            }
          }
        }
        if (cResult[15] !== onChange) {
          class D {
            constructor() {
              return closure_7.can(Permissions.MANAGE_ROLES, guild);
            }
          }
          cResult[15] = onChange;
          cResult[16] = tmp22;
        } else {
          class D {
            constructor() {
              return closure_7.can(Permissions.MANAGE_ROLES, guild);
            }
          }
        }
        if (cResult[17] === guildEvent.scheduledStartTime) {
          class D {
            constructor() {
              return closure_7.can(Permissions.MANAGE_ROLES, guild);
            }
          }
          if (cResult[20] !== guildEvent.entityType) {
            class D {
              constructor() {
                return closure_7.can(Permissions.MANAGE_ROLES, guild);
              }
            }
            const channelTypeFromEntity = obj6.getChannelTypeFromEntity(guildEvent.entityType);
            cResult[20] = guildEvent.entityType;
            cResult[21] = channelTypeFromEntity;
          } else {
            class D {
              constructor() {
                return closure_7.can(Permissions.MANAGE_ROLES, guild);
              }
            }
          }
          if (cResult[22] === stateFromStores) {
            class D {
              constructor() {
                return closure_7.can(Permissions.MANAGE_ROLES, guild);
              }
            }
          }
          const obj3 = {
            guild,
            channel: stateFromStores,
            guildEventId,
            channelType: tmp24,
            onChangeChannel: tmp20,
            style: tmp4.channelSelection,
          };
          const tmp29 = closure_13(guildEvent(tmp2[19]), obj3);
          cResult[22] = stateFromStores;
          cResult[23] = guild;
          cResult[24] = guildEventId;
          cResult[25] = tmp20;
          cResult[26] = tmp4.channelSelection;
          cResult[27] = tmp24;
          cResult[28] = tmp29;
        }
        function handleChangeEventEntityType(entityType) {
          _slicedToArray(null);
          const obj = { entityType, scheduledEndTime: "r" };
          if (entityType === constants.EXTERNAL) {
            let obj2 = _modDef4661(guildEvent.scheduledStartTime);
            if (obj2 == null) {
              obj2 = _modDef4661();
            }
            obj.scheduledEndTime = obj2.add(1, "hour").toISOString();
            const addResult = obj2.add(1, "hour");
          }
          onChange(obj);
        }
        cResult[17] = guildEvent.scheduledStartTime;
        cResult[18] = onChange;
        cResult[19] = handleChangeEventEntityType;
      }
      function handleNext() {
        const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
        try {
          _slicedToArray(null);
          assertGuildEventWhereIsValid(guildEvent);
          navigation.push(EditGuildEventUtils.EditGuildEventScreens.DETAILS);
        } catch (tmp14) {
          _slicedToArray(tmp14.message);
          const AccessibilityAnnouncer = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(tmp14.message);
        }
      }
      cResult[10] = guildEvent;
      cResult[11] = navigation;
      cResult[12] = handleNext;
      const tmpResult4 = guild(ref[14]);
    }
  : function EditGuildEventWhere(guild) {
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
      const stateFromStores = guild(ref[13]).useStateFromStores(
        items,
        () => ChannelStore.getChannel(guildEvent.channelId),
        items1,
      );
      let obj = guild(ref[13]);
      const items2 = [PermissionStore];
      const items3 = [guild];
      let stateFromStores1 = guild(ref[13]).useStateFromStores(
        items2,
        () => PermissionStore.can(constants2.MANAGE_ROLES, guild),
        items3,
      );
      let obj2 = guild(ref[13]);
      [tmp8, c4] = noop.useState(null);
      const tmp7 = _slicedToArray(noop.useState(null), 2);
      noop = guild(ref[14]).useNavigation();
      const obj3 = guild(ref[14]);
      const obj4 = {
        guild,
        channel: stateFromStores,
        guildEventId,
        channelType: null,
        onChangeChannel: null,
        style: null,
      };
      guildEvent(ref[19]);
      const tmp9 = closure_8(initialGuildEvent);
      obj4.channelType = guild(ref[10]).getChannelTypeFromEntity(guildEvent.entityType);
      obj4.onChangeChannel = function handleChangeEventChannel(channelId) {
        _undefined(null);
        onChange({ channelId: channelId.id });
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
          },
        };
        let tmp10Result = closure_13(tmp3(tmp4[20]).GuildEventLocation, obj6);
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
        tmp10Result2 = closure_13(tmp3(tmp4[21]).Text, obj7);
      }
      const obj8 = { children: null };
      const items4 = [tmp10Result2];
      const obj9 = { text: null, variant: "primary", onPress: null, disabled: null };
      const intl = tmp3(tmp4[9]).intl;
      obj9.text = intl.string(guild(ref[9]).t.PDTjLN);
      obj9.onPress = function handleNext() {
        const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
        try {
          _undefined(null);
          assertGuildEventWhereIsValid(guildEvent);
          closure_5.push(EditGuildEventUtils.EditGuildEventScreens.DETAILS);
        } catch (tmp14) {
          _undefined(tmp14.message);
          const AccessibilityAnnouncer = require("AccessibilityAnnouncer").AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(tmp14.message);
        }
      };
      obj9.disabled = null != tmp8;
      items4[1] = closure_13(guild(ref[22]).Button, obj9);
      obj8.children = items4;
      const obj5 = guild(ref[10]);
      const obj10 = { action: closure_15(closure_14, obj8), ref, children: null };
      const tmp15Result = closure_15(closure_14, obj8);
      const obj11 = { title: null, subtitle: null };
      const tmp11Result = guildEvent(ref[26]);
      const intl2 = tmp3(tmp4[9]).intl;
      obj11.title = intl2.string(guild(ref[9]).t["DC+Qm8"]);
      const intl3 = tmp3(tmp4[9]).intl;
      obj11.subtitle = intl3.string(guild(ref[9]).t.IwmXLP);
      const items5 = [
        closure_13(guildEvent(ref[23]), obj11),
        closure_13(guild(ref[20]).GuildEventEntityTypeSelection, {
          guild,
          entityType: guildEvent.entityType,
          onChange: function handleChangeEventEntityType(entityType) {
            _undefined(null);
            const obj = { entityType, scheduledEndTime: "r" };
            if (entityType === constants.EXTERNAL) {
              let obj2 = _modDef4661(guildEvent.scheduledStartTime);
              if (obj2 == null) {
                obj2 = _modDef4661();
              }
              obj.scheduledEndTime = obj2.add(1, "hour").toISOString();
              const addResult = obj2.add(1, "hour");
            }
            onChange(obj);
          },
          disabled: tmp9,
        }),
        tmp10Result,
        ,
      ];
      const obj12 = {
        guild,
        entityType: guildEvent.entityType,
        onChange: function handleChangeEventEntityType(entityType) {
          _undefined(null);
          const obj = { entityType, scheduledEndTime: "r" };
          if (entityType === constants.EXTERNAL) {
            let obj2 = _modDef4661(guildEvent.scheduledStartTime);
            if (obj2 == null) {
              obj2 = _modDef4661();
            }
            obj.scheduledEndTime = obj2.add(1, "hour").toISOString();
            const addResult = obj2.add(1, "hour");
          }
          onChange(obj);
        },
        disabled: tmp9,
      };
      const tmp11Result2 = guildEvent(ref[23]);
      items5[3] = set.has(guildEvent.entityType) && closure_13(guildEvent(ref[24]), {});
      if (stateFromStores1) {
        const obj13 = { style: tmp.text, variant: "text-sm/normal", color: "text-default", children: null };
        const intl4 = tmp3(tmp4[9]).intl;
        const obj14 = {
          onClick() {
            GuildSettingsActionCreatorsDefault.open(guild.id, constants3.ROLES);
          },
        };
        obj13.children = intl4.format(tmp3(tmp4[9]).t["K+DH2o"], obj14);
        stateFromStores1 = closure_13(tmp3(tmp4[21]).Text, obj13);
      }
      items5[4] = stateFromStores1;
      obj10.children = items5;
      return closure_15(tmp11Result, obj10);
    };
