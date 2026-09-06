// === Module 16338: getGuildsBarGuildAccessibilityActions ===

// Module 16338 (getGuildsBarGuildAccessibilityActions)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 9358 */;
import getGuildBarNeighborsDefault from "getGuildBarNeighbors" /* 16339 */;
import GuildStore from "GuildStore" /* 1979 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;

const shared = tmp4(4411);
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
  let tmp3 = getGuildBarNeighborsDefault(arg0);
  if (null == tmp3) {
    return items;
  } else {
    ({ containingFolder, above, below } = tmp3);
    let ejhw4S = _require;
    const intl13 = require("util").intl;
    let obj = { name: str };
    importDefault = intl13.formatToPlainString(require("util").t["2XShGC"], obj);
    const intl14 = require("util").intl;
    obj = { name: str };
    dependencyMap = intl14.formatToPlainString(require("util").t.D4maKL, obj);
    if (null == containingFolder) {
      obj = { name: "create-new-folder", label: null, action: null };
      const intl = ejhw4S(1114).intl;
      obj.label = intl.string(ejhw4S(1114).t.ehmVyX);
      obj.action = function action() {
        const items = [closure_0];
        const guildFolderLocal = GuildActionCreatorsDefault.createGuildFolderLocal(items, "");
        const tmp3 = closure_1;
        UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
        if (null != closure_1) {
          const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(tmp3);
        }
      };
      items.push(obj);
    }
    if (null != above) {
      if (above.isFolder) {
        let gBM0Vf = above.node;
        if (null == gBM0Vf.name) {
          const intl3 = ejhw4S(1114).intl;
          let name = intl3.string(ejhw4S(1114).t.ebAnWE);
          const obj1 = { name: null, label: null, action: null };
          const _HermesInternal = HermesInternal;
          obj1.name = "move-up-into-folder-" + gBM0Vf.id;
          const intl4 = ejhw4S(1114).intl;
          let obj2 = { folderName: name };
          obj1.label = intl4.formatToPlainString(ejhw4S(1114).t["08U1Sa"], obj2);
          obj1.action = function action() {
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
                tmp3Result.moveById(tmp, node.id, true, true);
                UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
                if (null != tmp2) {
                  const AccessibilityAnnouncer = tmp10(4411).AccessibilityAnnouncer;
                  AccessibilityAnnouncer.announce(tmp2);
                }
                tmp10 = require;
              }
            }
          };
          items.push(obj1);
          const obj3 = { name: null, label: null, action: null };
          const _HermesInternal2 = HermesInternal;
          obj3.name = "move-above-folder-" + gBM0Vf.id;
          const intl5 = ejhw4S(1114).intl;
          gBM0Vf = ejhw4S(1114).t.gBM0Vf;
          const obj4 = { folderName: name };
          obj3.label = intl5.formatToPlainString(gBM0Vf, obj4);
          obj3.action = function action() {
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
                tmp2Result.moveById(tmp, node.id, false, false);
                UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
              }
            }
          };
          items.push(obj3);
        }
        name = gBM0Vf.name;
      } else {
        const obj5 = { name: "move-up", label: null, action: null };
        const intl2 = ejhw4S(1114).intl;
        obj5.label = intl2.string(ejhw4S(1114).t["yiH+Tx"]);
        obj5.action = function action() {
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
              tmp2Result.moveById(tmp, node.id, false, false);
              UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
            }
          }
        };
        items.push(obj5);
      }
    }
    if (null != below) {
      if (below.isFolder) {
        let YhxCkM = below.node;
        if (null == YhxCkM.name) {
          const intl7 = ejhw4S(1114).intl;
          let name2 = intl7.string(ejhw4S(1114).t.ebAnWE);
          const obj6 = { name: null, label: null, action: null };
          const _HermesInternal3 = HermesInternal;
          obj6.name = "move-down-into-folder-" + YhxCkM.id;
          const intl8 = ejhw4S(1114).intl;
          const obj7 = { folderName: name2 };
          obj6.label = intl8.formatToPlainString(ejhw4S(1114).t["6lLC/B"], obj7);
          obj6.action = function action() {
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
                tmp3Result.moveById(tmp, node.id, true, true);
                UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
                if (null != tmp2) {
                  const AccessibilityAnnouncer = tmp10(4411).AccessibilityAnnouncer;
                  AccessibilityAnnouncer.announce(tmp2);
                }
                tmp10 = require;
              }
            }
          };
          items.push(obj6);
          const obj8 = { name: null, label: null, action: null };
          const _HermesInternal4 = HermesInternal;
          obj8.name = "move-below-folder-" + YhxCkM.id;
          const intl9 = ejhw4S(1114).intl;
          YhxCkM = ejhw4S(1114).t.YhxCkM;
          const obj9 = { folderName: name2 };
          obj8.label = intl9.formatToPlainString(YhxCkM, obj9);
          obj8.action = function action() {
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
                tmp2Result.moveById(tmp, node.id, true, false);
                UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
              }
            }
          };
          items.push(obj8);
        }
        name2 = YhxCkM.name;
      } else {
        const obj10 = { name: "move-down", label: null, action: null };
        const intl6 = ejhw4S(1114).intl;
        obj10.label = intl6.string(ejhw4S(1114).t["+V6oLI"]);
        obj10.action = function action() {
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
              tmp2Result.moveById(tmp, node.id, true, false);
              UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
            }
          }
        };
        items.push(obj10);
      }
    }
    if (null == containingFolder) {
      return items;
    } else {
      const id = containingFolder.id;
      if (null == containingFolder.name) {
        const intl10 = ejhw4S(1114).intl;
        let name3 = intl10.string(ejhw4S(1114).t.ebAnWE);
        const obj11 = { name: null, label: null, action: null };
        const _HermesInternal5 = HermesInternal;
        obj11.name = "move-out-above-" + id;
        const intl11 = ejhw4S(1114).intl;
        const obj12 = { folderName: name3 };
        obj11.label = intl11.formatToPlainString(ejhw4S(1114).t.vnfRJG, obj12);
        obj11.action = function action() {
          const tmp5 = getGuildBarNeighborsDefault(closure_0);
          if (null != tmp5) {
            const containingFolder = tmp5.containingFolder;
            if (null != containingFolder) {
              const tmp3Result = GuildActionCreatorsDefault;
              tmp3Result.moveById(tmp, containingFolder.id, false, false);
              UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
              if (null != tmp2) {
                const AccessibilityAnnouncer = tmp9(4411).AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(tmp2);
              }
              tmp9 = require;
            }
          }
        };
        items.push(obj11);
        const obj13 = { name: null, label: null, action: null };
        const _HermesInternal6 = HermesInternal;
        obj13.name = "move-out-below-" + id;
        const intl12 = ejhw4S(1114).intl;
        ejhw4S = ejhw4S(1114).t.ejhw4S;
        const obj14 = { folderName: name3 };
        formatToPlainStringResult = intl12.formatToPlainString(ejhw4S, obj14);
        obj13.label = formatToPlainStringResult;
        obj13.action = function action() {
          const tmp5 = getGuildBarNeighborsDefault(closure_0);
          if (null != tmp5) {
            const containingFolder = tmp5.containingFolder;
            if (null != containingFolder) {
              const tmp3Result = GuildActionCreatorsDefault;
              tmp3Result.moveById(tmp, containingFolder.id, true, false);
              UserSettingsActionCreators.saveGuildFolders(SortedGuildStore.getCompatibleGuildFolders());
              if (null != tmp2) {
                const AccessibilityAnnouncer = tmp9(4411).AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(tmp2);
              }
              tmp9 = require;
            }
          }
        };
        containingFolder = items.push(obj13);
      }
      name3 = containingFolder.name;
    }
  }
};