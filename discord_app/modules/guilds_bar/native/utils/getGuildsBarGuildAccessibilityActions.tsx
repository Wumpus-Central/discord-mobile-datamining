// discord_app/modules/guilds_bar/native/utils/getGuildsBarGuildAccessibilityActions.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getGuildBarNeighbors } from "getGuildBarNeighbors.tsx";

const require = arg1;
const result = require("getSystemLocale").fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildAccessibilityActions.tsx");

export default function getGuildsBarGuildAccessibilityActions(arg0) {
  let above;
  let below;
  let containingFolder;
  const _require = arg0;
  guild = guild.getGuild(arg0);
  let str;
  if (guild != null) {
    str = guild.name;
  }
  if (str == null) {
    str = "";
  }
  let items = [];
  let formatToPlainStringResult = dependencyMap;
  let tmp3 = getGuildBarNeighbors(arg0);
  if (null == tmp3) {
    return items;
  } else {
    ({ containingFolder, above, below } = tmp3);
    let ejhw4S = _require;
    const intl13 = _getSystemLocale.intl;
    let obj = { name: null };
    obj[0] = str;
    importDefault = intl13.formatToPlainString(_getSystemLocale.t["2XShGC"], obj);
    const intl14 = _getSystemLocale.intl;
    obj = { name: null };
    obj[0] = str;
    dependencyMap = intl14.formatToPlainString(_getSystemLocale.t.D4maKL, obj);
    if (null == containingFolder) {
      obj = { name: "create-new-folder", label: null, action: null };
      const intl = ejhw4S(1236).intl;
      obj[1] = intl.string(ejhw4S(1236).t.ehmVyX);
      obj[2] = function action() {
        const items = [callback];
        const guildFolderLocal = callback2(6778).createGuildFolderLocal(items, "");
        const obj = callback2(6778);
        const tmp3 = callback2;
        const tmp4 = callback;
        callback(9365).saveGuildFolders(outer1_4.getCompatibleGuildFolders());
        if (null != callback2) {
          const AccessibilityAnnouncer = tmp4(1363).AccessibilityAnnouncer;
          AccessibilityAnnouncer.announce(tmp3);
        }
      };
      items.push(obj);
    }
    if (null != above) {
      if (above.isFolder) {
        let gBM0Vf = above.node;
        if (null == gBM0Vf.name) {
          const intl3 = ejhw4S(1236).intl;
          let name = intl3.string(ejhw4S(1236).t.ebAnWE);
          const obj1 = { name: null, label: null, action: null };
          const _HermesInternal = HermesInternal;
          obj1[0] = "move-up-into-folder-" + gBM0Vf.id;
          const intl4 = ejhw4S(1236).intl;
          let obj2 = { folderName: null };
          obj2[0] = name;
          obj1[1] = intl4.formatToPlainString(ejhw4S(1236).t["08U1Sa"], obj2);
          obj1[2] = function action() {
            const tmp5 = callback2(15602)(callback);
            if (null != tmp5) {
              let node = null;
              if (null != tmp5.above) {
                node = null;
                if (tmp5.above.isFolder) {
                  node = tmp5.above.node;
                }
              }
              if (null != node) {
                const tmp3Result = callback2(6778);
                tmp3Result.moveById(tmp, node.id, true, true);
                callback(9365).saveGuildFolders(outer1_4.getCompatibleGuildFolders());
                if (null != tmp2) {
                  const AccessibilityAnnouncer = tmp10(1363).AccessibilityAnnouncer;
                  AccessibilityAnnouncer.announce(tmp2);
                }
                const obj2 = callback(9365);
                tmp10 = callback;
              }
            }
          };
          items.push(obj1);
          const obj3 = { name: null, label: null, action: null };
          const _HermesInternal2 = HermesInternal;
          obj3[0] = "move-above-folder-" + gBM0Vf.id;
          const intl5 = ejhw4S(1236).intl;
          gBM0Vf = ejhw4S(1236).t.gBM0Vf;
          const obj4 = { folderName: null };
          obj4[0] = name;
          obj3[1] = intl5.formatToPlainString(gBM0Vf, obj4);
          obj3[2] = function action() {
            const tmp4 = callback2(15602)(callback);
            if (null != tmp4) {
              let node = null;
              if (null != tmp4.above) {
                node = null;
                if (tmp4.above.isFolder) {
                  node = tmp4.above.node;
                }
              }
              if (null != node) {
                const tmp2Result = callback2(6778);
                tmp2Result.moveById(tmp, node.id, false, false);
                callback(9365).saveGuildFolders(outer1_4.getCompatibleGuildFolders());
                const obj2 = callback(9365);
              }
            }
          };
          items.push(obj3);
        }
        name = gBM0Vf.name;
      } else {
        const obj5 = { name: "move-up", label: null, action: null };
        const intl2 = ejhw4S(1236).intl;
        obj5[1] = intl2.string(ejhw4S(1236).t["yiH+Tx"]);
        obj5[2] = function action() {
          const tmp4 = callback2(15602)(callback);
          if (null != tmp4) {
            let node = null;
            if (null != tmp4.above) {
              node = null;
              if (!tmp4.above.isFolder) {
                node = tmp4.above.node;
              }
            }
            if (null != node) {
              const tmp2Result = callback2(6778);
              tmp2Result.moveById(tmp, node.id, false, false);
              callback(9365).saveGuildFolders(outer1_4.getCompatibleGuildFolders());
              const obj2 = callback(9365);
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
          const intl7 = ejhw4S(1236).intl;
          let name2 = intl7.string(ejhw4S(1236).t.ebAnWE);
          const obj6 = { name: null, label: null, action: null };
          const _HermesInternal3 = HermesInternal;
          obj6[0] = "move-down-into-folder-" + YhxCkM.id;
          const intl8 = ejhw4S(1236).intl;
          const obj7 = { folderName: null };
          obj7[0] = name2;
          obj6[1] = intl8.formatToPlainString(ejhw4S(1236).t["6lLC/B"], obj7);
          obj6[2] = function action() {
            const tmp5 = callback2(15602)(callback);
            if (null != tmp5) {
              let node = null;
              if (null != tmp5.below) {
                node = null;
                if (tmp5.below.isFolder) {
                  node = tmp5.below.node;
                }
              }
              if (null != node) {
                const tmp3Result = callback2(6778);
                tmp3Result.moveById(tmp, node.id, true, true);
                callback(9365).saveGuildFolders(outer1_4.getCompatibleGuildFolders());
                if (null != tmp2) {
                  const AccessibilityAnnouncer = tmp10(1363).AccessibilityAnnouncer;
                  AccessibilityAnnouncer.announce(tmp2);
                }
                const obj2 = callback(9365);
                tmp10 = callback;
              }
            }
          };
          items.push(obj6);
          const obj8 = { name: null, label: null, action: null };
          const _HermesInternal4 = HermesInternal;
          obj8[0] = "move-below-folder-" + YhxCkM.id;
          const intl9 = ejhw4S(1236).intl;
          YhxCkM = ejhw4S(1236).t.YhxCkM;
          const obj9 = { folderName: null };
          obj9[0] = name2;
          obj8[1] = intl9.formatToPlainString(YhxCkM, obj9);
          obj8[2] = function action() {
            const tmp4 = callback2(15602)(callback);
            if (null != tmp4) {
              let node = null;
              if (null != tmp4.below) {
                node = null;
                if (tmp4.below.isFolder) {
                  node = tmp4.below.node;
                }
              }
              if (null != node) {
                const tmp2Result = callback2(6778);
                tmp2Result.moveById(tmp, node.id, true, false);
                callback(9365).saveGuildFolders(outer1_4.getCompatibleGuildFolders());
                const obj2 = callback(9365);
              }
            }
          };
          items.push(obj8);
        }
        name2 = YhxCkM.name;
      } else {
        const obj10 = { name: "move-down", label: null, action: null };
        const intl6 = ejhw4S(1236).intl;
        obj10[1] = intl6.string(ejhw4S(1236).t["+V6oLI"]);
        obj10[2] = function action() {
          const tmp4 = callback2(15602)(callback);
          if (null != tmp4) {
            let node = null;
            if (null != tmp4.below) {
              node = null;
              if (!tmp4.below.isFolder) {
                node = tmp4.below.node;
              }
            }
            if (null != node) {
              const tmp2Result = callback2(6778);
              tmp2Result.moveById(tmp, node.id, true, false);
              callback(9365).saveGuildFolders(outer1_4.getCompatibleGuildFolders());
              const obj2 = callback(9365);
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
        const intl10 = ejhw4S(1236).intl;
        let name3 = intl10.string(ejhw4S(1236).t.ebAnWE);
        const obj11 = { name: null, label: null, action: null };
        const _HermesInternal5 = HermesInternal;
        obj11[0] = "move-out-above-" + id;
        const intl11 = ejhw4S(1236).intl;
        const obj12 = { folderName: null };
        obj12[0] = name3;
        obj11[1] = intl11.formatToPlainString(ejhw4S(1236).t.vnfRJG, obj12);
        obj11[2] = function action() {
          const tmp5 = callback2(15602)(callback);
          if (null != tmp5) {
            const containingFolder = tmp5.containingFolder;
            if (null != containingFolder) {
              const tmp3Result = callback2(6778);
              tmp3Result.moveById(tmp, containingFolder.id, false, false);
              callback(9365).saveGuildFolders(outer1_4.getCompatibleGuildFolders());
              if (null != tmp2) {
                const AccessibilityAnnouncer = tmp9(1363).AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(tmp2);
              }
              const obj2 = callback(9365);
              tmp9 = callback;
            }
          }
        };
        items.push(obj11);
        const obj13 = { name: null, label: null, action: null };
        const _HermesInternal6 = HermesInternal;
        obj13[0] = "move-out-below-" + id;
        const intl12 = ejhw4S(1236).intl;
        ejhw4S = ejhw4S(1236).t.ejhw4S;
        const obj14 = { folderName: null };
        obj14[0] = name3;
        formatToPlainStringResult = intl12.formatToPlainString(ejhw4S, obj14);
        obj13[1] = formatToPlainStringResult;
        obj13[2] = function action() {
          const tmp5 = callback2(15602)(callback);
          if (null != tmp5) {
            const containingFolder = tmp5.containingFolder;
            if (null != containingFolder) {
              const tmp3Result = callback2(6778);
              tmp3Result.moveById(tmp, containingFolder.id, true, false);
              callback(9365).saveGuildFolders(outer1_4.getCompatibleGuildFolders());
              if (null != tmp2) {
                const AccessibilityAnnouncer = tmp9(1363).AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(tmp2);
              }
              const obj2 = callback(9365);
              tmp9 = callback;
            }
          }
        };
        containingFolder = items.push(obj13);
      }
      name3 = containingFolder.name;
    }
  }
};