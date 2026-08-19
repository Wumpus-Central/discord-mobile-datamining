// discord_app/modules/guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import insertUnsortedGuilds from "../../../../stores/SortedGuildStore.tsx";
import SidebarVisibilityMethodStore from "../../../guild_sidebar/SidebarVisibilityMethodStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import insertUnsortedGuilds2 from "../../../../stores/SortedGuildStore.tsx";

({ setGetVisibleChannelIds: c0, setGetVisibleGuildIds: closure_1 } = SidebarVisibilityMethodStore);
const GuildsNodeType = insertUnsortedGuilds.GuildsNodeType;
const result = obj132.fileFinishedImporting("modules/guilds_bar/native/utils/registerSidebarVisibilityMethods.tsx");

export const registerGuildVisibilityMethod = function registerGuildVisibilityMethod(listProps) {
  const current = listProps.current;
  if (null != current) {
    callback2(() => {
      if (null == scrollPosition) {
        return [];
      } else {
        const items = obj.getItems();
        scrollPosition = obj.getScrollPosition();
        const containerSize = obj.containerSize;
        const guilds = closure_1_2.getGuilds();
        const guildsTree = closure_1_3.getGuildsTree();
        const _Set = Set;
        const set = new Set();
        let item = items.forEach((item, index) => {
          let forEach = node.getNode(item.recyclerKey);
          if (undefined !== forEach) {
            const layoutStart = item.layoutStart;
            let tmp2 = layoutStart + item.layoutSize >= closure_0;
            if (tmp2) {
              tmp2 = layoutStart <= tmp + containerSize;
            }
            if (tmp2) {
              if (forEach.type === set.FOLDER) {
                let children = forEach.children;
              } else {
                children = [forEach];
              }
              forEach = children.forEach;
              item = forEach((type) => {
                let tmp = type.type === closure_1_4.GUILD;
                if (tmp) {
                  tmp = type.id in closure_2;
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
export const registerFastListChannelVisibilityMethod = function registerFastListChannelVisibilityMethod(ref, guildChannels) {
  const callback = guildChannels;
  const current = ref.current;
  if (null != current) {
    callback(() => {
      if (null == containerSize) {
        return [];
      } else {
        const items = obj.getItems();
        const scrollPosition = obj.getScrollPosition();
        containerSize = obj.containerSize;
        const items1 = [];
        const item = items.forEach((item, index) => {
          try {
            try {
              channelFromSectionRow = channelFromSectionRow.getChannelFromSectionRow(item.section, item.item);
              let channel;
              if (channelFromSectionRow != null) {
                channel = channelFromSectionRow.channel;
              }
              if (null != channel) {
                const layoutStart = item.layoutStart;
                let tmp12 = layoutStart + item.layoutSize >= channelFromSectionRow;
                if (tmp12) {
                  tmp12 = layoutStart <= tmp11 + containerSize;
                }
                if (tmp12) {
                  items1.push(tmp8.id);
                }
              }
            } catch (err) {
            }
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