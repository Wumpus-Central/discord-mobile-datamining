// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx
import intl5 from "../../../../intl/index.native.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import _modDef4461 from "../../../../../_runtime/metro/04461__.js";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import GuildScheduledEventStore from "../../GuildScheduledEventStore.tsx";
import EditGuildEventUtils from "../../utils/EditGuildEventUtils.tsx";
import EntityUtils from "../../utils/EntityUtils.tsx";
import GuildSettingsActionCreatorsDefault from "../../../guild_settings/GuildSettingsActionCreators.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import GuildScheduledEventsConstants from "../../GuildScheduledEventsConstants.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let announceResult, arr, guild, navigation, num, obj1, tmp10, tmp14, tmp2, tmp3, tmp6, tmp7;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let unpackModuleId;
function assertGuildEventWhereIsValid(guildEvent) {
  const entityType = guildEvent.entityType;
  if (entityType === constants.NONE) {
    const _Error3 = Error;
    const intl3 = intl5.intl;
    const self5 = this;
    const self6 = this;
    const error = new Error(intl3.string(intl5.t.C4KzmQ));
    throw error;
  } else {
    if (entityType === constants.EXTERNAL) {
      const obj = EntityUtils;
      if (null == obj.getLocationFromEventData(guildEvent)) {
        const _Error2 = Error;
        const intl2 = intl5.intl;
        const self3 = this;
        const self4 = this;
        const error1 = new Error(intl2.string(intl5.t.q91szp));
        throw error1;
      }
    }
    if (null == tmp) {
      if (entityType !== constants.EXTERNAL) {
        const _Error = Error;
        const intl = intl5.intl;
        const self = this;
        const self2 = this;
        const error2 = new Error(intl.string(intl5.t["4LQwnw"]));
        throw error2;
      }
    }
  }
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let closure_8 = GuildScheduledEventStore.isGuildScheduledEventActive;
({ AGE_VERIFICATION_STAGE_CHANNEL_TYPES: c9, GuildScheduledEventEntityTypes: c10 } = GuildScheduledEventsConstants);
({ Permissions: unpackModuleId, GuildSettingsSections: closure_12 } = Constants);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = createStyles.createStyles({
  channelSelection: { marginTop: 16 },
  error: { paddingVertical: 8 },
  text: { marginTop: 24 },
});
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let first;
      let guildEventId;
      let initialGuildEvent;
      let onChange;
      let ref;
      let tmp11;
      let tmp13;
      let tmp9;
      let obj = guild(ref[12]);
      const cResult = obj.c(63);
      guild = guild.guild;
      const guildEvent = guild.guildEvent;
      ({ guildEventId, initialGuildEvent, onChange } = guild);
      const tmp4 = closure_16();
      let obj2 = navigation;
      ref = navigation.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
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
        tmp9 = items1;
      } else {
        class T {
          constructor() {
            return closure_6.getChannel(guildEvent.channelId);
          }
        }
        tmp9 = cResult[3];
      }
      const tmpResult = guild(ref[13]);
      const stateFromStores = tmpResult.useStateFromStores(first, T, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            return closure_6.getChannel(guildEvent.channelId);
          }
        }
        const items2 = [PermissionStore];
        cResult[4] = items2;
        tmp11 = items2;
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
        tmp13 = items3;
      } else {
        class D {
          constructor() {
            return closure_7.can(Permissions.MANAGE_ROLES, guild);
          }
        }
        tmp13 = cResult[7];
      }
      const tmpResult3 = guild(ref[13]);
      const stateFromStores1 = tmpResult3.useStateFromStores(tmp11, D, tmp13);
      const tmp15 = _slicedToArray(obj2.useState(null), 2);
      [r10070, _slicedToArray] = tmp15;
      const tmpResult4 = guild(ref[14]);
      navigation = tmpResult4.useNavigation();
      if (cResult[8] !== initialGuildEvent) {
        class D {
          constructor() {
            return closure_7.can(Permissions.MANAGE_ROLES, guild);
          }
        }
        cResult[8] = initialGuildEvent;
        cResult[9] = closure_8(initialGuildEvent);
        const tmp18 = closure_8(initialGuildEvent);
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
          class H {
            constructor(arg0) {
              tmp = closure_4(null);
              obj = { channelId: guild.id };
              tmp2 = onChange(obj);
              return;
            }
          }
          cResult[13] = onChange;
          class Y {
            constructor(arg0) {
              tmp = closure_4(null);
              obj = { entityType: guild, scheduledEndTime: "r" };
              if (guild === closure_10.EXTERNAL) {
                tmp2 = closure_1;
                tmp3 = closure_3;
                tmp4 = guildEvent;
                obj2 = closure_1(closure_3[18])(guildEvent.scheduledStartTime);
                if (obj2 == null) {
                  obj2 = tmp2(tmp3[18])();
                }
                str = "hour";
                num = 1;
                addResult = obj2.add(1, "hour");
                obj.scheduledEndTime = addResult.toISOString();
              }
              tmp5 = onChange(obj);
              return;
            }
          }
        } else {
          class H {
            constructor(arg0) {
              tmp = closure_4(null);
              obj = { channelId: guild.id };
              tmp2 = onChange(obj);
              return;
            }
          }
        }
        if (cResult[15] !== onChange) {
          class B {
            constructor(arg0) {
              tmp = closure_4(null);
              obj = { entityMetadata: null };
              obj1 = { location: guild };
              obj.entityMetadata = obj1;
              tmp2 = onChange(obj);
              return;
            }
          }
          cResult[15] = onChange;
          class Y {
            constructor(arg0) {
              tmp = closure_4(null);
              obj = { entityType: guild, scheduledEndTime: "r" };
              if (guild === closure_10.EXTERNAL) {
                tmp2 = closure_1;
                tmp3 = closure_3;
                tmp4 = guildEvent;
                obj2 = closure_1(closure_3[18])(guildEvent.scheduledStartTime);
                if (obj2 == null) {
                  obj2 = tmp2(tmp3[18])();
                }
                str = "hour";
                num = 1;
                addResult = obj2.add(1, "hour");
                obj.scheduledEndTime = addResult.toISOString();
              }
              tmp5 = onChange(obj);
              return;
            }
          }
        } else {
          class B {
            constructor(arg0) {
              tmp = closure_4(null);
              obj = { entityMetadata: null };
              obj1 = { location: guild };
              obj.entityMetadata = obj1;
              tmp2 = onChange(obj);
              return;
            }
          }
        }
        if (cResult[17] === guildEvent.scheduledStartTime) {
          class B {
            constructor(arg0) {
              tmp = closure_4(null);
              obj = { entityMetadata: null };
              obj1 = { location: guild };
              obj.entityMetadata = obj1;
              tmp2 = onChange(obj);
              return;
            }
          }
          if (cResult[20] !== guildEvent.entityType) {
            class B {
              constructor(arg0) {
                tmp = closure_4(null);
                obj = { entityMetadata: null };
                obj1 = { location: guild };
                obj.entityMetadata = obj1;
                tmp2 = onChange(obj);
                return;
              }
            }
            const channelTypeFromEntity = obj6.getChannelTypeFromEntity(guildEvent.entityType);
            cResult[20] = guildEvent.entityType;
            class Y {
              constructor(arg0) {
                tmp = closure_4(null);
                obj = { entityType: guild, scheduledEndTime: "r" };
                if (guild === closure_10.EXTERNAL) {
                  tmp2 = closure_1;
                  tmp3 = closure_3;
                  tmp4 = guildEvent;
                  obj2 = closure_1(closure_3[18])(guildEvent.scheduledStartTime);
                  if (obj2 == null) {
                    obj2 = tmp2(tmp3[18])();
                  }
                  str = "hour";
                  num = 1;
                  addResult = obj2.add(1, "hour");
                  obj.scheduledEndTime = addResult.toISOString();
                }
                tmp5 = onChange(obj);
                return;
              }
            }
            cResult[21] = channelTypeFromEntity;
          } else {
            class B {
              constructor(arg0) {
                tmp = closure_4(null);
                obj = { entityMetadata: null };
                obj1 = { location: guild };
                obj.entityMetadata = obj1;
                tmp2 = onChange(obj);
                return;
              }
            }
          }
          if (cResult[22] === stateFromStores) {
            class B {
              constructor(arg0) {
                tmp = closure_4(null);
                obj = { entityMetadata: null };
                obj1 = { location: guild };
                obj.entityMetadata = obj1;
                tmp2 = onChange(obj);
                return;
              }
            }
          }
          class Y {
            constructor(arg0) {
              tmp = closure_4(null);
              obj = { entityType: guild, scheduledEndTime: "r" };
              if (guild === closure_10.EXTERNAL) {
                tmp2 = closure_1;
                tmp3 = closure_3;
                tmp4 = guildEvent;
                obj2 = closure_1(closure_3[18])(guildEvent.scheduledStartTime);
                if (obj2 == null) {
                  obj2 = tmp2(tmp3[18])();
                }
                str = "hour";
                num = 1;
                addResult = obj2.add(1, "hour");
                obj.scheduledEndTime = addResult.toISOString();
              }
              tmp5 = onChange(obj);
              return;
            }
          }
          const obj3 = {
            guild,
            channel: stateFromStores,
            guildEventId,
            channelType: tmp22,
            onChangeChannel: H,
            style: tmp4.channelSelection,
          };
          cResult[22] = stateFromStores;
          cResult[23] = guild;
          cResult[24] = guildEventId;
          cResult[25] = H;
          cResult[26] = tmp4.channelSelection;
          cResult[27] = tmp22;
          cResult[28] = closure_13(guildEvent(ref[19]), obj3);
          const tmp26 = closure_13(guildEvent(ref[19]), obj3);
        }
        class Y {
          constructor(arg0) {
            tmp = closure_4(null);
            obj = { entityType: guild, scheduledEndTime: "r" };
            if (guild === closure_10.EXTERNAL) {
              tmp2 = closure_1;
              tmp3 = closure_3;
              tmp4 = guildEvent;
              obj2 = closure_1(closure_3[18])(guildEvent.scheduledStartTime);
              if (obj2 == null) {
                obj2 = tmp2(tmp3[18])();
              }
              str = "hour";
              num = 1;
              addResult = obj2.add(1, "hour");
              obj.scheduledEndTime = addResult.toISOString();
            }
            tmp5 = onChange(obj);
            return;
          }
        }
        cResult[17] = guildEvent.scheduledStartTime;
        cResult[18] = onChange;
        cResult[19] = Y;
      }
      class Q {
        constructor() {
          tmp = closure_3;
          obj = closure_2(closure_3[15]);
          result = obj.dismissGlobalKeyboard();
          try {
            tmp3 = closure_4;
            tmp4 = null;
            tmp5 = closure_4(null);
            tmp6 = assertGuildEventWhereIsValid;
            tmp7 = guildEvent;
            num = 0;
            tmp8 = assertGuildEventWhereIsValid(guildEvent);
            tmp9 = closure_5;
            tmp10 = closure_0;
            arr = closure_5.push(closure_0(tmp[16]).EditGuildEventScreens.DETAILS);
          } catch (tmp12) {
            tmp13 = closure_4;
            tmp14 = closure_4(tmp12.message);
            tmp15 = closure_0;
            AccessibilityAnnouncer = closure_0(tmp[17]).AccessibilityAnnouncer;
            announceResult = AccessibilityAnnouncer.announce(tmp12.message);
          }
          return;
        }
      }
      cResult[10] = guildEvent;
      cResult[11] = navigation;
      cResult[12] = Q;
    }
  : (guild) => {
      let _undefined;
      let c4;
      let closure_5;
      let guildEventId;
      let initialGuildEvent;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items4;
      let items5;
      let obj14;
      let obj5;
      let tmp10Result;
      let tmp8;
      guild = guild.guild;
      const guildEvent = guild.guildEvent;
      const onChange = guild.onChange;
      _slicedToArray = undefined;
      react = undefined;
      ({ guildEventId, initialGuildEvent } = guild);
      const tmp = closure_16();
      const ref = react.useRef(null);
      let obj = guild(ref[13]);
      const items = [ChannelStore];
      const items1 = [guildEvent.channelId];
      const stateFromStores = obj.useStateFromStores(
        items,
        () => ChannelStore.getChannel(guildEvent.channelId),
        items1,
      );
      let obj2 = guild(ref[13]);
      const items2 = [PermissionStore];
      const items3 = [guild];
      let stateFromStores1 = obj2.useStateFromStores(
        items2,
        () => PermissionStore.can(unpackModuleId.MANAGE_ROLES, guild),
        items3,
      );
      [tmp8, c4] = react.useState(null);
      _slicedToArray(react.useState(null), 2);
      const obj3 = guild(ref[14]);
      react = obj3.useNavigation();
      ({
        guild,
        channel: stateFromStores,
        guildEventId,
        channelType: obj5.getChannelTypeFromEntity(guildEvent.entityType),
        onChangeChannel(handleSelectChannel) {
          _undefined(null);
          const obj = { channelId: handleSelectChannel.id };
          onChange(obj);
        },
        style: tmp.channelSelection,
      });
      const tmp9 = closure_8(initialGuildEvent);
      const tmp12 = guildEvent(ref[19]);
      obj5 = guild(ref[10]);
      if (guildEvent.entityType === constants.EXTERNAL) {
        const GuildEventLocation = tmp3(tmp4[20]).GuildEventLocation;
        const tmp3Result = guild(ref[10]);
        let str = tmp3Result.getLocationFromEventData(guildEvent);
        if (str == null) {
          str = "";
        }
        const obj6 = {
          location: str,
          onChange: function handleChangeEventLocation(location) {
            let obj2;
            _undefined(null);
            const obj = { entityMetadata: obj2 };
            obj2 = { location };
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
        tmp10Result = closure_13(GuildEventLocation, obj6);
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
      const obj8 = { children: items4 };
      items4 = [tmp10Result2];
      const obj9 = {
        text: intl.string(guild(ref[9]).t.PDTjLN),
        variant: "primary",
        onPress() {
          const obj = KeyboardManagerUtilsAll;
          const result = obj.dismissGlobalKeyboard();
          try {
            _undefined(null);
            assertGuildEventWhereIsValid(guildEvent);
            closure_5.push(EditGuildEventUtils.EditGuildEventScreens.DETAILS);
          } catch (tmp12) {
            _undefined(tmp12.message);
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(tmp12.message);
          }
        },
        disabled: null != tmp8,
      };
      const Button = tmp3(tmp4[22]).Button;
      intl = tmp3(tmp4[9]).intl;
      items4[1] = closure_13(Button, obj9);
      const obj10 = { action: closure_15(closure_14, obj8), ref, children: items5 };
      const obj11 = { title: intl2.string(guild(ref[9]).t["DC+Qm8"]), subtitle: intl3.string(guild(ref[9]).t.IwmXLP) };
      const tmp11Result = guildEvent(ref[26]);
      const tmp11Result2 = guildEvent(ref[23]);
      intl2 = tmp3(tmp4[9]).intl;
      intl3 = tmp3(tmp4[9]).intl;
      items5 = [closure_13(tmp11Result2, obj11), , , ,];
      const obj12 = {
        guild,
        entityType: guildEvent.entityType,
        onChange(entityType) {
          _undefined(null);
          const obj = { entityType, scheduledEndTime: "r" };
          if (entityType === constants.EXTERNAL) {
            let obj2 = _modDef4461(guildEvent.scheduledStartTime);
            if (obj2 == null) {
              obj2 = _modDef4461();
            }
            const addResult = obj2.add(1, "hour");
            obj.scheduledEndTime = addResult.toISOString();
          }
          onChange(obj);
        },
        disabled: tmp9,
      };
      items5[1] = closure_13(guild(ref[20]).GuildEventEntityTypeSelection, obj12);
      items5[2] = tmp10Result;
      items5[3] = set.has(guildEvent.entityType) && closure_13(guildEvent(ref[24]), {});
      set.has(guildEvent.entityType) && closure_13(guildEvent(ref[24]), {});
      if (stateFromStores1) {
        const obj13 = {
          style: tmp.text,
          variant: "text-sm/normal",
          color: "text-default",
          children: intl4.format(guild(ref[9]).t["K+DH2o"], obj14),
        };
        const Text = tmp3(tmp4[21]).Text;
        intl4 = tmp3(tmp4[9]).intl;
        obj14 = {
          onClick() {
            const obj = GuildSettingsActionCreatorsDefault;
            obj.open(guild.id, constants2.ROLES);
          },
        };
        stateFromStores1 = closure_13(Text, obj13);
      }
      items5[4] = stateFromStores1;
      return closure_15(tmp11Result, obj10);
    };
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventWhere.tsx");

export default tmp5;
