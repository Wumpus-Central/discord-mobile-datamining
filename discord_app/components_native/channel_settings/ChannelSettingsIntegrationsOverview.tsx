// discord_app/components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import useNavigation from "../../design/components/Navigator/native/useNavigation.native.tsx";
import Stack_Stack from "../../design/components/Stack/native/Stack.native.tsx";
import TableRow2 from "../../design/components/TableRow/native/TableRow.native.tsx";
import TableRowGroup from "../../design/components/TableRow/native/TableRowGroup.native.tsx";
import Form2 from "../../design/void/Form/native/index.tsx";
import TableRowApplicationIconDefault from "../../modules/applications/native/TableRowApplicationIcon.tsx";
import WebhookIcon from "../../design/components/Icon/native/redesign/generated/WebhookIcon.tsx";
import ChannelsFollowedIcon from "../../design/components/Icon/native/redesign/generated/ChannelsFollowedIcon.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelStore from "../../stores/ChannelStore.tsx";

require = fn;
fn(2055).GUILD_FOLLOW_DESTINATION_CHANNEL_TYPES;
const ChannelSettingsSections = fn(1085).ChannelSettingsSections;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let TableRow = channel;
      let tmp = dependencyMap;
      const cResult = channel(576).c(10);
      channel = channel.channel;
      const obj = channel(576);
      const navigation = channel(1490).useNavigation();
      const obj2 = channel(1490);
      const linkedLobby = channel.linkedLobby;
      let application_id;
      if (linkedLobby != null) {
        application_id = linkedLobby.application_id;
      }
      let name = channel(6663).useGetOrFetchApplication(application_id);
      if (null == name) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = TableRow(1126).intl;
          const stringResult = intl.string(TableRow(1126).t.oAvIAg);
          cResult[0] = stringResult;
          let name2 = stringResult;
        } else {
          name2 = cResult[0];
        }
        if (cResult[1] !== name) {
          const obj4 = { application: name };
          const tmp10 = closure_6(navigation(9222), obj4);
          cResult[1] = name;
          cResult[2] = tmp10;
          let tmp7 = tmp10;
        } else {
          tmp7 = cResult[2];
        }
        if (cResult[3] === channel) {
          if (cResult[4] === navigation) {
            let tmp11 = cResult[5];
          }
          if (cResult[6] === name.name) {
            if (cResult[7] === tmp7) {
            }
          }
          const obj5 = { title: name2, hasIcons: true, children: null };
          TableRow = TableRow(5993).TableRow;
          const obj6 = { label: null, icon: null, arrow: true, onPress: null };
          name2 = name.name;
          obj6.label = name2;
          obj6.icon = tmp7;
          obj6.onPress = tmp11;
          tmp = closure_6(TableRow, obj6);
          obj5.children = tmp;
          const tmp14 = closure_6(TableRow(6074).TableRowGroup, obj5);
          name = name.name;
          cResult[6] = name;
          cResult[7] = tmp7;
          cResult[8] = tmp11;
          cResult[9] = tmp14;
        }
        const fn = function c() {
          navigation.push(ChannelSettingsSections.EDIT_LINKED_LOBBY, { channel, numScreensToPop: 1 });
        };
        cResult[3] = channel;
        cResult[4] = navigation;
        cResult[5] = fn;
        tmp11 = fn;
      }
      const obj3 = channel(6663);
    }
  : (channel) => {
      channel = channel.channel;
      importDefault = channel(1490).useNavigation();
      const obj = channel(1490);
      const linkedLobby = channel.linkedLobby;
      let application_id;
      if (linkedLobby != null) {
        application_id = linkedLobby.application_id;
      }
      const getOrFetchApplication = channel(6663).useGetOrFetchApplication(application_id);
      let tmp5 = null;
      if (null != getOrFetchApplication) {
        const obj3 = { title: null, hasIcons: true, children: null };
        const intl = tmp(1126).intl;
        obj3.title = intl.string(tmp(1126).t.oAvIAg);
        const obj4 = { label: getOrFetchApplication.name, icon: null, arrow: true, onPress: null };
        const obj5 = { application: getOrFetchApplication };
        obj4.icon = closure_6(TableRowApplicationIconDefault, obj5);
        obj4.onPress = function onPress() {
          closure_1.push(ChannelSettingsSections.EDIT_LINKED_LOBBY, { channel, numScreensToPop: 1 });
        };
        obj3.children = closure_6(tmp(5993).TableRow, obj4);
        tmp5 = closure_6(tmp(6074).TableRowGroup, obj3);
      }
      return tmp5;
    };
const createStyles = fn(4890);
let obj3 = {
  screenContainer: {
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    paddingTop: nativeDefault.space.PX_16,
  },
};
let closure_9 = createStyles.createStyles(obj3);
ReactCompilerGating = fn(558);
let obj4 = {
  flex: 1,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  paddingTop: nativeDefault.space.PX_16,
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let Form = channelId;
      let tmp = dependencyMap;
      const cResult = channelId(576).c(17);
      channelId = channelId.channelId;
      ({ canManageWebhooks, canUnlinkLobby } = channelId);
      const obj = channelId(576);
      const navigation = channelId(1490).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId) {
        const fn = function p() {
          return ChannelStore.getChannel(channelId);
        };
        cResult[1] = channelId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj2 = channelId(1490);
      const stateFromStores = Form(504).useStateFromStores(first, tmp6);
      let screenContainer = closure_9();
      if (null == stateFromStores) {
        return null;
      } else {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { paddingHorizontal: navigation(587).space.PX_12 };
          cResult[3] = obj3;
          let tmp8 = obj3;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] === canManageWebhooks) {
          if (cResult[5] === stateFromStores) {
            if (cResult[6] === navigation) {
              let tmp10 = cResult[7];
            }
            if (cResult[8] === canUnlinkLobby) {
              if (cResult[9] === stateFromStores) {
                let tmp16 = cResult[10];
              }
              if (cResult[11] === tmp10) {
                if (cResult[12] === tmp16) {
                  let tmp20 = cResult[13];
                }
                if (cResult[14] === screenContainer.screenContainer) {
                }
                Form = Form(8895).Form;
                const obj4 = { style: screenContainer.screenContainer, children: tmp20 };
                tmp = closure_6(Form, obj4);
                screenContainer = screenContainer.screenContainer;
                cResult[14] = screenContainer;
                cResult[15] = tmp20;
                cResult[16] = tmp;
              }
              const obj5 = { style: tmp8, spacing: navigation(587).space.PX_24, children: null };
              const items1 = [tmp10, tmp16];
              obj5.children = items1;
              const tmp23 = closure_7(Form(5593).Stack, obj5);
              cResult[11] = tmp10;
              cResult[12] = tmp16;
              cResult[13] = tmp23;
              tmp20 = tmp23;
            }
            let tmp17 = canUnlinkLobby;
            if (canUnlinkLobby) {
              tmp17 = null != stateFromStores.linkedLobby;
            }
            if (tmp17) {
              const obj6 = { channel: stateFromStores };
              tmp17 = closure_6(closure_8, obj6);
            }
            cResult[8] = canUnlinkLobby;
            cResult[9] = stateFromStores;
            cResult[10] = tmp17;
            tmp16 = tmp17;
          }
        }
        let tmp12Result = canManageWebhooks;
        if (canManageWebhooks) {
          const obj7 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
          const intl = Form(1126).intl;
          obj7.label = intl.string(Form(1126).t.jp25Id);
          const intl2 = Form(1126).intl;
          obj7.subLabel = intl2.string(Form(1126).t.mKIOkI);
          obj7.icon = closure_6(Form(16888).WebhookIcon, {});
          obj7.onPress = function onPress() {
            return navigation.push(ChannelSettingsSections.WEBHOOKS);
          };
          const items2 = [closure_6(Form(5993).TableRow, obj7)];
          let hasItem = set.has(stateFromStores.type);
          if (hasItem) {
            const obj8 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
            const intl3 = Form(1126).intl;
            obj8.label = intl3.string(Form(1126).t.OrV60r);
            const intl4 = Form(1126).intl;
            obj8.subLabel = intl4.string(Form(1126).t.rQREJl);
            obj8.icon = closure_6(Form(16994).ChannelsFollowedIcon, {});
            obj8.onPress = function onPress() {
              return navigation.push(ChannelSettingsSections.CHANNELS_FOLLOWED);
            };
            hasItem = closure_6(Form(5993).TableRow, obj8);
          }
          const obj9 = { hasIcons: true, children: null };
          items2[1] = hasItem;
          obj9.children = items2;
          tmp12Result = closure_7(Form(6074).TableRowGroup, obj9);
        }
        cResult[4] = canManageWebhooks;
        cResult[5] = stateFromStores;
        cResult[6] = navigation;
        cResult[7] = tmp12Result;
        tmp10 = tmp12Result;
      }
      const FormResult = Form(504);
    }
  : (arg0) => {
      ({ channelId: require, canManageWebhooks, canUnlinkLobby } = arg0);
      importDefault = useNavigation.useNavigation();
      const items = [ChannelStore];
      const stateFromStores = initialize.useStateFromStores(items, () => ChannelStore.getChannel(require));
      let tmp6Result = null;
      if (null != stateFromStores) {
        const obj3 = { style: tmp4.screenContainer, children: null };
        const obj4 = { style: null, spacing: null, children: null };
        const obj5 = { paddingHorizontal: nativeDefault.space.PX_12 };
        obj4.style = obj5;
        obj4.spacing = nativeDefault.space.PX_24;
        if (canManageWebhooks) {
          const obj6 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
          const intl = util.intl;
          obj6.label = intl.string(util.t.jp25Id);
          const intl2 = util.intl;
          obj6.subLabel = intl2.string(util.t.mKIOkI);
          obj6.icon = closure_6(WebhookIcon.WebhookIcon, {});
          obj6.onPress = function onPress() {
            return closure_1.push(ChannelSettingsSections.WEBHOOKS);
          };
          const items1 = [closure_6(TableRow2.TableRow, obj6)];
          let hasItem = set.has(stateFromStores.type);
          if (hasItem) {
            const obj7 = { label: null, subLabel: null, icon: null, arrow: true, onPress: null };
            const intl3 = util.intl;
            obj7.label = intl3.string(util.t.OrV60r);
            const intl4 = util.intl;
            obj7.subLabel = intl4.string(util.t.rQREJl);
            obj7.icon = closure_6(ChannelsFollowedIcon.ChannelsFollowedIcon, {});
            obj7.onPress = function onPress() {
              return closure_1.push(ChannelSettingsSections.CHANNELS_FOLLOWED);
            };
            hasItem = closure_6(TableRow2.TableRow, obj7);
          }
          const obj8 = { hasIcons: true, children: null };
          items1[1] = hasItem;
          obj8.children = items1;
          canManageWebhooks = closure_7(TableRowGroup.TableRowGroup, obj8);
        }
        const items2 = [canManageWebhooks];
        if (canUnlinkLobby) {
          canUnlinkLobby = null != stateFromStores.linkedLobby;
        }
        if (canUnlinkLobby) {
          const obj9 = { channel: stateFromStores };
          canUnlinkLobby = closure_6(closure_8, obj9);
        }
        items2[1] = canUnlinkLobby;
        obj4.children = items2;
        obj3.children = closure_7(Stack_Stack.Stack, obj4);
        tmp6Result = closure_6(Form2.Form, obj3);
      }
      return tmp6Result;
    };
