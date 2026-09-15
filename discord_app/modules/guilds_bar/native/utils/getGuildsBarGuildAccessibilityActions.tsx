// discord_app/modules/guilds_bar/native/utils/getGuildsBarGuildAccessibilityActions.tsx
import shared from "../../../../design/shared.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import UserSettingsActionCreators from "../../../../actions/UserSettingsActionCreators.tsx";
import getGuildBarNeighborsDefault from "getGuildBarNeighbors.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildAccessibilityActions.tsx");

export default function getGuildsBarGuildAccessibilityActions(arg0) {
  _require = arg0;
  const guild = GuildStore.getGuild(arg0);
  let str;
  if (guild != null) {
    str = guild.name;
  }
  if (str == null) {
    str = "";
  }
  let items = [];
  let formatToPlainStringResult = dependencyMap;
  const tmp3 = getGuildBarNeighborsDefault(arg0);
  if (null == tmp3) {
    return items;
  } else {
    ({ containingFolder, above, below } = tmp3);
    let ejhw4S = _require;
    const intl13 = require("util").intl;
    let obj2 = { name: str };
    importDefault = intl13.formatToPlainString(require("util").t["2XShGC"], obj2);
    const intl14 = require("util").intl;
    const obj3 = { name: str };
    dependencyMap = intl14.formatToPlainString(require("util").t.D4maKL, obj3);
    if (null == containingFolder) {
      let obj = { name: "create-new-folder", label: null, action: null };
      const intl = ejhw4S(1115).intl;
      obj.label = intl.string(ejhw4S(1115).t.ehmVyX);
      obj.action = function action() {
        const items = [closure_0];
        const guildFolderLocal = GuildActionCreatorsDefault.createGuildFolderLocal(items, "");
        UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
        if (null != closure_1) {
          const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(closure_1);
        }
      };
      items.push(obj);
    }
    if (null != above) {
      if (above.isFolder) {
        let gBM0Vf = above.node;
        if (null == gBM0Vf.name) {
          const intl3 = ejhw4S(1115).intl;
          let name = intl3.string(ejhw4S(1115).t.ebAnWE);
          const obj4 = { name: null, label: null, action: null };
          const _HermesInternal = HermesInternal;
          obj4.name = "move-up-into-folder-" + gBM0Vf.id;
          const intl4 = ejhw4S(1115).intl;
          const obj5 = { folderName: name };
          obj4.label = intl4.formatToPlainString(ejhw4S(1115).t["08U1Sa"], obj5);
          obj4.action = function action() {
            const tmp5 = getGuildBarNeighborsDefault(closure_0);
            if (null != tmp5) {
              let node = null;
              if (null != tmp5.above) {
                node = null;
                if (tmp5.above.isFolder) {
                  node = tmp5.above.node;
                }
              }
              if (null != node) {
                const tmp3Result = GuildActionCreatorsDefault;
                tmp3Result.moveById(closure_0, node.id, true, true);
                UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
                if (null != closure_1) {
                  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
                  AccessibilityAnnouncer.announce(closure_1);
                }
              }
            }
          };
          items.push(obj4);
          const obj6 = { name: null, label: null, action: null };
          const _HermesInternal2 = HermesInternal;
          obj6.name = "move-above-folder-" + gBM0Vf.id;
          const intl5 = ejhw4S(1115).intl;
          gBM0Vf = ejhw4S(1115).t.gBM0Vf;
          const obj7 = { folderName: name };
          obj6.label = intl5.formatToPlainString(gBM0Vf, obj7);
          obj6.action = function action() {
            const tmp4 = getGuildBarNeighborsDefault(closure_0);
            if (null != tmp4) {
              let node = null;
              if (null != tmp4.above) {
                node = null;
                if (tmp4.above.isFolder) {
                  node = tmp4.above.node;
                }
              }
              if (null != node) {
                const tmp2Result = GuildActionCreatorsDefault;
                tmp2Result.moveById(closure_0, node.id, false, false);
                UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
              }
            }
          };
          items.push(obj6);
        }
        name = gBM0Vf.name;
      } else {
        const obj8 = { name: "move-up", label: null, action: null };
        const intl2 = ejhw4S(1115).intl;
        obj8.label = intl2.string(ejhw4S(1115).t["yiH+Tx"]);
        obj8.action = function action() {
          const tmp4 = getGuildBarNeighborsDefault(closure_0);
          if (null != tmp4) {
            let node = null;
            if (null != tmp4.above) {
              node = null;
              if (!tmp4.above.isFolder) {
                node = tmp4.above.node;
              }
            }
            if (null != node) {
              const tmp2Result = GuildActionCreatorsDefault;
              tmp2Result.moveById(closure_0, node.id, false, false);
              UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
            }
          }
        };
        items.push(obj8);
      }
    }
    if (null != below) {
      if (below.isFolder) {
        let YhxCkM = below.node;
        if (null == YhxCkM.name) {
          const intl7 = ejhw4S(1115).intl;
          let name2 = intl7.string(ejhw4S(1115).t.ebAnWE);
          const obj9 = { name: null, label: null, action: null };
          const _HermesInternal3 = HermesInternal;
          obj9.name = "move-down-into-folder-" + YhxCkM.id;
          const intl8 = ejhw4S(1115).intl;
          const obj10 = { folderName: name2 };
          obj9.label = intl8.formatToPlainString(ejhw4S(1115).t["6lLC/B"], obj10);
          obj9.action = function action() {
            const tmp5 = getGuildBarNeighborsDefault(closure_0);
            if (null != tmp5) {
              let node = null;
              if (null != tmp5.below) {
                node = null;
                if (tmp5.below.isFolder) {
                  node = tmp5.below.node;
                }
              }
              if (null != node) {
                const tmp3Result = GuildActionCreatorsDefault;
                tmp3Result.moveById(closure_0, node.id, true, true);
                UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
                if (null != closure_1) {
                  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
                  AccessibilityAnnouncer.announce(closure_1);
                }
              }
            }
          };
          items.push(obj9);
          const obj11 = { name: null, label: null, action: null };
          const _HermesInternal4 = HermesInternal;
          obj11.name = "move-below-folder-" + YhxCkM.id;
          const intl9 = ejhw4S(1115).intl;
          YhxCkM = ejhw4S(1115).t.YhxCkM;
          const obj12 = { folderName: name2 };
          obj11.label = intl9.formatToPlainString(YhxCkM, obj12);
          obj11.action = function action() {
            const tmp4 = getGuildBarNeighborsDefault(closure_0);
            if (null != tmp4) {
              let node = null;
              if (null != tmp4.below) {
                node = null;
                if (tmp4.below.isFolder) {
                  node = tmp4.below.node;
                }
              }
              if (null != node) {
                const tmp2Result = GuildActionCreatorsDefault;
                tmp2Result.moveById(closure_0, node.id, true, false);
                UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
              }
            }
          };
          items.push(obj11);
        }
        name2 = YhxCkM.name;
      } else {
        const obj13 = { name: "move-down", label: null, action: null };
        const intl6 = ejhw4S(1115).intl;
        obj13.label = intl6.string(ejhw4S(1115).t["+V6oLI"]);
        obj13.action = function action() {
          const tmp4 = getGuildBarNeighborsDefault(closure_0);
          if (null != tmp4) {
            let node = null;
            if (null != tmp4.below) {
              node = null;
              if (!tmp4.below.isFolder) {
                node = tmp4.below.node;
              }
            }
            if (null != node) {
              const tmp2Result = GuildActionCreatorsDefault;
              tmp2Result.moveById(closure_0, node.id, true, false);
              UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
            }
          }
        };
        items.push(obj13);
      }
    }
    if (null == containingFolder) {
      return items;
    } else {
      const id = containingFolder.id;
      if (null == containingFolder.name) {
        const intl10 = ejhw4S(1115).intl;
        let name3 = intl10.string(ejhw4S(1115).t.ebAnWE);
        const obj14 = { name: null, label: null, action: null };
        const _HermesInternal5 = HermesInternal;
        obj14.name = "move-out-above-" + id;
        const intl11 = ejhw4S(1115).intl;
        const obj15 = { folderName: name3 };
        obj14.label = intl11.formatToPlainString(ejhw4S(1115).t.vnfRJG, obj15);
        obj14.action = function action() {
          const tmp5 = getGuildBarNeighborsDefault(closure_0);
          if (null != tmp5) {
            const containingFolder = tmp5.containingFolder;
            if (null != containingFolder) {
              const tmp3Result = GuildActionCreatorsDefault;
              tmp3Result.moveById(closure_0, containingFolder.id, false, false);
              UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
              if (null != closure_2) {
                const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(closure_2);
              }
            }
          }
        };
        items.push(obj14);
        const obj16 = { name: null, label: null, action: null };
        const _HermesInternal6 = HermesInternal;
        obj16.name = "move-out-below-" + id;
        const intl12 = ejhw4S(1115).intl;
        ejhw4S = ejhw4S(1115).t.ejhw4S;
        const obj17 = { folderName: name3 };
        formatToPlainStringResult = intl12.formatToPlainString(ejhw4S, obj17);
        obj16.label = formatToPlainStringResult;
        obj16.action = function action() {
          const tmp5 = getGuildBarNeighborsDefault(closure_0);
          if (null != tmp5) {
            const containingFolder = tmp5.containingFolder;
            if (null != containingFolder) {
              const tmp3Result = GuildActionCreatorsDefault;
              tmp3Result.moveById(closure_0, containingFolder.id, true, false);
              UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
              if (null != closure_2) {
                const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(closure_2);
              }
            }
          }
        };
        containingFolder = items.push(obj16);
      }
      name3 = containingFolder.name;
    }
  }
}
