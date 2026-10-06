// === Module 16319: getGuildsBarGuildAccessibilityActions ===

// Module 16319 (getGuildsBarGuildAccessibilityActions)
import shared from "shared" /* 4735 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import getGuildBarNeighborsDefault from "getGuildBarNeighbors" /* 16320 */;
import moveGuildNode from "moveGuildNode" /* 16321 */;
import GuildStore from "GuildStore" /* 2074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const moveGuildNodeDefault = moveGuildNode;
let _require, dependencyMap, importDefault;

let result = size.fileFinishedImporting("modules/guilds_bar/native/utils/getGuildsBarGuildAccessibilityActions.tsx");

export default function getGuildsBarGuildAccessibilityActions(arg0) {
  let above;
  let below;
  let closure_0;
  let closure_1;
  let closure_2;
  let containingFolder;
  let intl;
  let intl11;
  let intl12;
  let intl2;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
  let obj10;
  let obj12;
  let obj15;
  let obj17;
  let obj5;
  let obj7;
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
  const tmp3 = getGuildBarNeighborsDefault(arg0);
  if (null == tmp3) {
    return items;
  } else {
    ({ containingFolder, above, below } = tmp3);
    const intl13 = require("intl").intl;
    let obj2 = { name: str };
    importDefault = intl13.formatToPlainString(require("intl").t["2XShGC"], obj2);
    const intl14 = require("intl").intl;
    const obj3 = { name: str };
    dependencyMap = intl14.formatToPlainString(require("intl").t.D4maKL, obj3);
    if (null == containingFolder) {
      let obj = {
        name: "create-new-folder",
        label: intl.string(require("intl").t.ehmVyX),
        action() {
              const items = [closure_0];
              const obj = GuildActionCreatorsDefault;
              const guildFolderLocal = obj.createGuildFolderLocal(items, "");
              const obj2 = moveGuildNode;
              const result = obj2.persistGuildsBarOrder();
              const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
              AccessibilityAnnouncer.announce(closure_1);
            }
      };
      const push = items.push;
      intl = tmp16(1126).intl;
      push(obj);
    }
    if (null != above) {
      if (above.isFolder) {
        let node = above.node;
        if (null != node.name) {
          let name;
          if ("" !== node.name) {
            name = node.name;
          }
          const _HermesInternal = HermesInternal;
          const push3 = items.push;
          const obj4 = {
            name: "move-up-into-folder-" + node.id,
            label: intl4.formatToPlainString(require("intl").t["08U1Sa"], obj5),
            action() {
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
                          moveGuildNodeDefault(closure_0, node.id, true, true);
                          if (null != closure_1) {
                            const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
                            AccessibilityAnnouncer.announce(closure_1);
                          }
                        }
                      }
                    }
          };
          intl4 = tmp16(1126).intl;
          obj5 = { folderName: name };
          push3(obj4);
          const _HermesInternal2 = HermesInternal;
          const push4 = items.push;
          const obj6 = {
            name: "move-above-folder-" + node.id,
            label: intl5.formatToPlainString(require("intl").t.gBM0Vf, obj7),
            action() {
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
                          moveGuildNodeDefault(closure_0, node.id, false, false);
                        }
                      }
                    }
          };
          intl5 = tmp16(1126).intl;
          obj7 = { folderName: name };
          push4(obj6);
        }
        const intl3 = tmp16(1126).intl;
        name = intl3.string(tmp16(1126).t.ebAnWE);
      } else {
        const push2 = items.push;
        const obj8 = {
          name: "move-up",
          label: intl2.string(require("intl").t["yiH+Tx"]),
          action() {
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
                      moveGuildNodeDefault(closure_0, node.id, false, false);
                    }
                  }
                }
        };
        intl2 = tmp16(1126).intl;
        push2(obj8);
      }
    }
    if (null != below) {
      if (below.isFolder) {
        const node2 = below.node;
        if (null != node2.name) {
          let name2;
          if ("" !== node2.name) {
            name2 = node2.name;
          }
          const _HermesInternal3 = HermesInternal;
          const push6 = items.push;
          const obj9 = {
            name: "move-down-into-folder-" + node2.id,
            label: intl8.formatToPlainString(require("intl").t["6lLC/B"], obj10),
            action() {
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
                          moveGuildNodeDefault(closure_0, node.id, true, true);
                          if (null != closure_1) {
                            const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
                            AccessibilityAnnouncer.announce(closure_1);
                          }
                        }
                      }
                    }
          };
          intl8 = tmp16(1126).intl;
          obj10 = { folderName: name2 };
          push6(obj9);
          const _HermesInternal4 = HermesInternal;
          const push7 = items.push;
          const obj11 = {
            name: "move-below-folder-" + node2.id,
            label: intl9.formatToPlainString(require("intl").t.YhxCkM, obj12),
            action() {
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
                          moveGuildNodeDefault(closure_0, node.id, true, false);
                        }
                      }
                    }
          };
          intl9 = tmp16(1126).intl;
          obj12 = { folderName: name2 };
          push7(obj11);
        }
        const intl7 = tmp16(1126).intl;
        name2 = intl7.string(tmp16(1126).t.ebAnWE);
      } else {
        const push5 = items.push;
        const obj13 = {
          name: "move-down",
          label: intl6.string(require("intl").t["+V6oLI"]),
          action() {
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
                      moveGuildNodeDefault(closure_0, node.id, true, false);
                    }
                  }
                }
        };
        intl6 = tmp16(1126).intl;
        push5(obj13);
      }
    }
    if (null != containingFolder) {
      const id = containingFolder.id;
      if (null != containingFolder.name) {
        let name3;
        if ("" !== containingFolder.name) {
          name3 = containingFolder.name;
        }
        const _HermesInternal5 = HermesInternal;
        const push8 = items.push;
        const obj14 = {
          name: "move-out-above-" + id,
          label: intl11.formatToPlainString(require("intl").t.vnfRJG, obj15),
          action() {
                  const tmp5 = getGuildBarNeighborsDefault(closure_0);
                  if (null != tmp5) {
                    const containingFolder = tmp5.containingFolder;
                    if (null != containingFolder) {
                      moveGuildNodeDefault(closure_0, containingFolder.id, false, false);
                      if (null != closure_2) {
                        const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
                        AccessibilityAnnouncer.announce(closure_2);
                      }
                    }
                  }
                }
        };
        intl11 = tmp16(1126).intl;
        obj15 = { folderName: name3 };
        push8(obj14);
        const _HermesInternal6 = HermesInternal;
        const push9 = items.push;
        const obj16 = {
          name: "move-out-below-" + id,
          label: intl12.formatToPlainString(require("intl").t.ejhw4S, obj17),
          action() {
                  const tmp5 = getGuildBarNeighborsDefault(closure_0);
                  if (null != tmp5) {
                    const containingFolder = tmp5.containingFolder;
                    if (null != containingFolder) {
                      moveGuildNodeDefault(closure_0, containingFolder.id, true, false);
                      if (null != closure_2) {
                        const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
                        AccessibilityAnnouncer.announce(closure_2);
                      }
                    }
                  }
                }
        };
        intl12 = tmp16(1126).intl;
        obj17 = { folderName: name3 };
        push9(obj16);
      }
      const intl10 = tmp16(1126).intl;
      name3 = intl10.string(tmp16(1126).t.ebAnWE);
    }
    return items;
  }
};