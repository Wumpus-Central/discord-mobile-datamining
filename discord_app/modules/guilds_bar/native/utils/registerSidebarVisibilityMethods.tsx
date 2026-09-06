// discord_app/modules/guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx
import SortedGuildStore2 from "../../../../stores/SortedGuildStore.tsx";
import SidebarVisibilityMethodStore from "../../../guild_sidebar/SidebarVisibilityMethodStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const SortedGuildStore = SortedGuildStore2;

({ setGetVisibleChannelIds: closure_0, setGetVisibleGuildIds: closure_1 } = SidebarVisibilityMethodStore);
const GuildsNodeType = SortedGuildStore2.GuildsNodeType;
const result = size.fileFinishedImporting("modules/guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx");

export const registerGuildVisibilityMethod = function registerGuildVisibilityMethod(fastListRef) {
  const current = fastListRef.current;
  if (null != current) {
    closure_1(() => {
      if (null == current) {
        return [];
      } else {
        const items = obj.getItems();
        const scrollPosition = obj.getScrollPosition();
        const containerSize = obj.containerSize;
        const guilds = GuildStore.getGuilds();
        const node = SortedGuildStore.getGuildsTree();
        const _Set = Set;
        const set = new Set();
        let item = items.forEach((recyclerKey) => {
          let forEach = node.getNode(recyclerKey.recyclerKey);
          if (undefined !== forEach) {
            const layoutStart = recyclerKey.layoutStart;
            let tmp2 = layoutStart + recyclerKey.layoutSize >= closure_0;
            if (tmp2) {
              tmp2 = layoutStart <= tmp + containerSize;
            }
            if (tmp2) {
              if (forEach.type === constants.FOLDER) {
                let children = forEach.children;
              } else {
                children = [forEach];
              }
              forEach = children.forEach;
              const item = forEach((type) => {
                let tmp = type.type === set.GUILD;
                if (tmp) {
                  tmp = type.id in closure_1_2;
                }
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
export const registerFastListChannelVisibilityMethod = function registerFastListChannelVisibilityMethod(
  ref,
  guildChannels,
) {
  closure_0 = guildChannels;
  const current = ref.current;
  if (null != current) {
    React(() => {
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
              if (null != channel) {
                const layoutStart = section.layoutStart;
                let tmp12 = layoutStart + section.layoutSize >= channelFromSectionRow;
                if (tmp12) {
                  tmp12 = layoutStart <= tmp11 + containerSize;
                }
                if (tmp12) {
                  items1.push(tmp8.id);
                }
              }
            } catch (err) {}
          } catch (tmp17) {
            if (null == tmp2) {
              return tmp;
            } else {
              throw tmp17;
            }
          }
        });
        return items1;
      }
    });
  }
};
