// === Module 16144: registerSidebarVisibilityMethods ===

// Module 16144 (registerSidebarVisibilityMethods)
import SortedGuildStore2 from "SortedGuildStore" /* 5623 */;
import SidebarVisibilityMethodStore from "SidebarVisibilityMethodStore" /* 7229 */;
import GuildStore from "GuildStore" /* 2074 */;
import size from "module_2" /* 2 */;

const SortedGuildStore = SortedGuildStore2;
let set;

let _window;
let map;
({ setGetVisibleChannelIds: _window, setGetVisibleGuildIds: map } = SidebarVisibilityMethodStore);
const GuildsNodeType = SortedGuildStore2.GuildsNodeType;
const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx");

export const registerGuildVisibilityMethod = function registerGuildVisibilityMethod(fastListRef) {
  const current = fastListRef.current;
  if (null != current) {
    let tmp2 = closure_1(function() {
      if (null == current) {
        return [];
      } else {
        const items = current.getItems();
        const scrollPosition = current.getScrollPosition();
        const containerSize = current.containerSize;
        const guilds = GuildStore.getGuilds();
        const guildsTree = SortedGuildStore.getGuildsTree();
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        let item = items.forEach((recyclerKey) => {
          let tmp;
          const element = node.getNode(recyclerKey.recyclerKey);
          if (undefined !== element) {
            const layoutStart = recyclerKey.layoutStart;
            const tmp2 = layoutStart + recyclerKey.layoutSize >= closure_0 && layoutStart <= tmp + containerSize;
            if (tmp2) {
              let children;
              if (element.type === constants.FOLDER) {
                children = element.children;
              } else {
                children = [element];
              }
              const item = children.forEach((type) => {
                const tmp = type.type === set.GUILD && type.id in closure_1_2;
                if (tmp) {
                  set.add(type.id);
                }
              });
            }
          }
        });
        const _Array = Array;
        return Array.from(set);
      }
    });
  }
};
export const registerFastListChannelVisibilityMethod = function registerFastListChannelVisibilityMethod(ref, guildChannels) {
  const _window = guildChannels;
  const current = ref.current;
  if (null != current) {
    React(() => {
      let containerSize;
      if (null == containerSize) {
        return [];
      } else {
        const items = obj.getItems();
        let channelFromSectionRow = obj.getScrollPosition();
        containerSize = obj.containerSize;
        const items1 = [];
        const item = items.forEach((section) => {
          try {
            try {
              channelFromSectionRow = channelFromSectionRow.getChannelFromSectionRow(section.section, section.item);
              let channel;
              if (channelFromSectionRow != null) {
                channel = channelFromSectionRow.channel;
              }
            } catch (err) {
            }
            if (null != tmp) {
              const layoutStart = section.layoutStart;
              const tmp10 = layoutStart + section.layoutSize >= channelFromSectionRow && layoutStart <= tmp9 + containerSize;
              if (tmp10) {
                items1.push(tmp.id);
              }
            }
          } catch (tmp15) {
            if (null != tmp) {
              throw tmp15;
            }
          }
        });
        return items1;
      }
    });
  }
};