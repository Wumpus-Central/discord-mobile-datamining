// discord_app/modules/hub/native/components/HubSidebar.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import native from "../../../../design/void/native.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import instant_invite_InstantInviteUtils from "../../../instant_invite/native/InstantInviteUtils.tsx";
import RedesignChannelListConstants from "../../../channel_list_v2/native/RedesignChannelListConstants.tsx";
import GuildDirectoryAddModalActionCreatorsDefault from "../../../directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx";
import BaseChannelItem from "../../../guild_sidebar/native/BaseChannelItem.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import SelectedChannelStore from "../../../../stores/SelectedChannelStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const BaseChannelItemDefault = BaseChannelItem;
let dependencyMap, guild;

let metroImportAll;
let metroImportDefault;
let obj2;
const View = react_native.View;
const InstantInviteSources = Constants.InstantInviteSources;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { container: obj2, row: { flex: 1 } };
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (active) => {
      let IconComponent;
      let handleItemClick;
      let label;
      let unreadCount;
      const obj = react2;
      const cResult = obj.c(16);
      ({ IconComponent, label, handleItemClick, unreadCount } = active);
      active = active.active;
      const tmp4 = closure_9();
      const ChannelModes = BaseChannelItem.ChannelModes;
      const tmp5 = active ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
      if (cResult[0] === tmp5) {
        let tmp6;
        if (cResult[1] === label) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === IconComponent) {
          let tmp8;
          let tmp11;
          if (cResult[4] === tmp5) {
            tmp8 = cResult[5];
          }
          if (cResult[6] !== unreadCount) {
            let tmp12 = null;
            if (null != unreadCount) {
              const obj2 = { value: unreadCount };
              tmp12 = metroImportDefault(native.Badge, obj2);
            }
            cResult[6] = unreadCount;
            cResult[7] = tmp12;
            tmp11 = tmp12;
          } else {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            if (cResult[9] === handleItemClick) {
              if (cResult[10] === label) {
                if (cResult[11] === tmp4.container) {
                  if (cResult[12] === tmp6) {
                    if (cResult[13] === tmp8) {
                      let tmp14;
                      if (cResult[14] === tmp11) {
                        tmp14 = cResult[15];
                      }
                      return tmp14;
                    }
                  }
                }
              }
            }
          }
          const obj3 = {
            style: tmp4.container,
            accessibilityLabel: label,
            accessibilityRole: "menuitem",
            onPress: handleItemClick,
            disableHighlightOnPress: true,
            mode: tmp5,
            name: tmp6,
            icon: tmp8,
            channelInfo: tmp11,
          };
          const tmp17 = metroImportDefault(BaseChannelItemDefault, obj3);
          cResult[8] = tmp5;
          cResult[9] = handleItemClick;
          cResult[10] = label;
          cResult[11] = tmp4.container;
          cResult[12] = tmp6;
          cResult[13] = tmp8;
          cResult[14] = tmp11;
          cResult[15] = tmp17;
          tmp14 = tmp17;
        }
        const obj4 = { mode: tmp5, IconComponent };
        const tmp10 = metroImportDefault(BaseChannelItem.BaseChannelIcon, obj4);
        cResult[3] = IconComponent;
        cResult[4] = tmp5;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      }
      const tmp7 = metroImportDefault(BaseChannelItem.BaseChannelName, { name: label, mode: tmp5 });
      cResult[0] = tmp5;
      cResult[1] = label;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : (arg0) => {
      let DEFAULT;
      let IconComponent;
      let active;
      let handleItemClick;
      let label;
      let tmp5;
      let tmp6Result;
      let unreadCount;
      ({ label, unreadCount } = arg0);
      ({ IconComponent, handleItemClick, active } = arg0);
      const tmp = closure_9();
      const ChannelModes = BaseChannelItem.ChannelModes;
      if (active) {
        DEFAULT = ChannelModes.SELECTED;
        tmp5 = require;
      } else {
        DEFAULT = ChannelModes.DEFAULT;
        tmp5 = require;
      }
      const obj = {
        style: tmp.container,
        accessibilityLabel: label,
        accessibilityRole: "menuitem",
        onPress: handleItemClick,
        disableHighlightOnPress: true,
        mode: DEFAULT,
        name: metroImportDefault(tmp5(12016).BaseChannelName, { name: label, mode: DEFAULT }),
        icon: metroImportDefault(tmp5(12016).BaseChannelIcon, { mode: DEFAULT, IconComponent }),
        channelInfo: tmp6Result,
      };
      tmp6Result = null;
      const tmp7 = BaseChannelItemDefault;
      if (null != unreadCount) {
        const obj2 = { value: unreadCount };
        tmp6Result = metroImportDefault(tmp5(1188).Badge, obj2);
      }
      return metroImportDefault(tmp7, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let first;
      let stateFromStoresObject;
      let tmp10;
      let tmp12;
      let tmp14;
      let tmp6;
      let tmp7;
      const tmp = guild;
      let tmp2 = stateFromStoresObject;
      let obj = guild(stateFromStoresObject[10]);
      const cResult = obj.c(35);
      guild = guild.guild;
      const flashList = guild.flashList;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        const fn = function b() {
          return GuildChannelStore.getDefaultChannel(guild.id);
        };
        const items1 = [guild.id];
        cResult[1] = guild.id;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(tmp2[13]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      closure_9();
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildChannelStore];
        cResult[4] = items2;
        tmp10 = items2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== guild.id) {
        const fn2 = function _() {
          return GuildChannelStore.getChannels(guild.id);
        };
        cResult[5] = guild.id;
        cResult[6] = fn2;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[6];
      }
      const tmpResult4 = tmp(tmp2[13]);
      stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp10, tmp12);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [SelectedChannelStore];
        cResult[7] = items3;
        tmp14 = items3;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] !== stateFromStores) {
        class R {
          constructor() {
            const tmp2 = null != stateFromStores && SelectedChannelStore.getChannelId() === tmp.id;
            return tmp2;
          }
        }
        cResult[8] = stateFromStores;
        cResult[9] = R;
      } else {
        class R {
          constructor() {
            const tmp2 = null != stateFromStores && SelectedChannelStore.getChannelId() === tmp.id;
            return tmp2;
          }
        }
      }
      const tmpResult5 = tmp(tmp2[13]);
      const stateFromStores1 = tmpResult5.useStateFromStores(tmp14, R);
      const tmpResult6 = tmp(tmp2[14]);
      const hubUnreadCount = tmpResult6.useHubUnreadCount(stateFromStores);
      if (null == stateFromStores) {
        class R {
          constructor() {
            const tmp2 = null != stateFromStores && SelectedChannelStore.getChannelId() === tmp.id;
            return tmp2;
          }
        }
      } else {
        let tmp22;
        class R {
          constructor() {
            const tmp2 = null != stateFromStores && SelectedChannelStore.getChannelId() === tmp.id;
            return tmp2;
          }
        }
        if (flashList) {
          class R {
            constructor() {
              const tmp2 = null != stateFromStores && SelectedChannelStore.getChannelId() === tmp.id;
              return tmp2;
            }
          }
        }
        if (cResult[10] !== guild) {
          class R {
            constructor() {
              const tmp2 = null != stateFromStores && SelectedChannelStore.getChannelId() === tmp.id;
              return tmp2;
            }
          }
          let obj2 = { guild };
          cResult[10] = guild;
          cResult[11] = closure_7(stateFromStores(tmp2[15]), obj2);
          const tmp21 = closure_7(stateFromStores(tmp2[15]), obj2);
        } else {
          class R {
            constructor() {
              const tmp2 = null != stateFromStores && SelectedChannelStore.getChannelId() === tmp.id;
              return tmp2;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              const tmp2 = null != stateFromStores && SelectedChannelStore.getChannelId() === tmp.id;
              return tmp2;
            }
          }
          const stringResult = obj7.string(tmp(tmp2[16]).t.K50GHd);
          cResult[12] = stringResult;
          tmp22 = stringResult;
        } else {
          class R {
            constructor() {
              const tmp2 = null != stateFromStores && SelectedChannelStore.getChannelId() === tmp.id;
              return tmp2;
            }
          }
        }
        if (cResult[13] !== stateFromStores.id) {
          class O {
            constructor() {
              const obj = transitionToChannel;
              obj.transitionToChannel(stateFromStores.id);
            }
          }
          cResult[13] = stateFromStores.id;
          cResult[14] = O;
        } else {
          class O {
            constructor() {
              const obj = transitionToChannel;
              obj.transitionToChannel(stateFromStores.id);
            }
          }
        }
        if (cResult[15] === stateFromStores1) {
          class O {
            constructor() {
              const obj = transitionToChannel;
              obj.transitionToChannel(stateFromStores.id);
            }
          }
        }
        const obj3 = {
          active: stateFromStores1,
          IconComponent: tmp(tmp2[18]).CompassIcon,
          label: tmp22,
          handleItemClick: O,
          unreadCount: hubUnreadCount,
        };
        cResult[15] = stateFromStores1;
        cResult[16] = O;
        cResult[17] = hubUnreadCount;
        cResult[18] = closure_7(closure_10, obj3);
        const tmp28 = closure_7(closure_10, obj3);
      }
    }
  : (guild) => {
      let closure_2;
      let intl;
      let intl2;
      let intl3;
      let items4;
      guild = guild.guild;
      dependencyMap = undefined;
      const tmp = guild;
      let tmp2 = dependencyMap;
      const flashList = guild.flashList;
      let obj = guild(504);
      const items = [GuildChannelStore];
      const items1 = [guild.id];
      const stateFromStores = obj.useStateFromStores(
        items,
        () => GuildChannelStore.getDefaultChannel(guild.id),
        items1,
      );
      const tmp4 = closure_9();
      let obj2 = guild(504);
      const items2 = [GuildChannelStore];
      dependencyMap = obj2.useStateFromStoresObject(items2, () => GuildChannelStore.getChannels(guild.id));
      const items3 = [SelectedChannelStore];
      const obj3 = guild(504);
      const stateFromStores1 = obj3.useStateFromStores(items3, () => {
        const tmp2 = null != stateFromStores && SelectedChannelStore.getChannelId() === tmp.id;
        return tmp2;
      });
      guild(16137);
      let tmp9Result = null;
      if (null != stateFromStores) {
        let row = null;
        if (flashList) {
          row = tmp4.row;
        }
        const obj4 = { style: row, children: items4 };
        const obj5 = { guild };
        items4 = [closure_7(stateFromStores(16138), obj5), , ,];
        const obj6 = {
          active: stateFromStores1,
          IconComponent: tmp(15423).CompassIcon,
          label: intl.string(tmp(1126).t.K50GHd),
          handleItemClick() {
            const obj = transitionToChannel;
            obj.transitionToChannel(stateFromStores.id);
          },
          unreadCount: tmp7,
        };
        intl = tmp(1126).intl;
        items4[1] = closure_7(closure_10, obj6);
        const obj7 = {
          IconComponent: tmp(10978).PlusMediumIcon,
          label: intl2.string(tmp(1126).t.emRpdS),
          handleItemClick() {
            const obj = GuildDirectoryAddModalActionCreatorsDefault;
            const obj2 = {
              directoryGuildName: guild.name,
              directoryGuildId: guild.id,
              directoryChannelId: stateFromStores.id,
            };
            return obj.open(obj2);
          },
        };
        intl2 = tmp(1126).intl;
        items4[2] = closure_7(closure_10, obj7);
        const obj8 = {
          IconComponent: tmp(4833).UserPlusIcon,
          label: intl3.string(tmp(1126).t.MJQOuJ),
          handleItemClick() {
            const obj = instant_invite_InstantInviteUtils;
            const result = obj.handleOpenInviteActionsheet(
              guild,
              stateFromStores.id,
              closure_2,
              InstantInviteSources.GUILD_HEADER,
            );
          },
        };
        intl3 = tmp(1126).intl;
        items4[3] = closure_7(closure_10, obj8);
        tmp9Result = closure_8(View, obj4);
      }
      return tmp9Result;
    };
let result = size.fileFinishedImporting("modules/hub/native/components/HubSidebar.tsx");

export default tmp4;
