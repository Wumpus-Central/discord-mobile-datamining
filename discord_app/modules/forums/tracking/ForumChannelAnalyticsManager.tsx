// discord_app/modules/forums/tracking/ForumChannelAnalyticsManager.tsx
import "ChannelStore";

let size = Object.create(
  function ForumChannelAnalyticsManager() {
    const obj = Object.create(new.target.prototype);
    obj.setFilterTagIds = function setFilterTagIds(filterTagIds) {
      obj.filterTagIds = filterTagIds;
    };
    obj.setSortOrder = function setSortOrder(sortOrder) {
      obj.sortOrder = sortOrder;
    };
    obj.setLayout = function setLayout(layout) {
      obj.layout = layout;
    };
    obj.setTagSetting = function setTagSetting(tagSetting) {
      obj.tagSetting = tagSetting;
    };
    obj.getFilterTagIdsAnalytics = function getFilterTagIdsAnalytics() {
      if (null != obj.filterTagIds) {
        const _Array = Array;
        let items = Array.from(tmp.filterTagIds);
      } else {
        items = [];
      }
      return items;
    };
    obj.getSortOrderAnalytics = function getSortOrderAnalytics(id) {
      let sortOrder = obj.sortOrder;
      if (sortOrder == null) {
        const channel = ChannelStore.getChannel(id);
        let defaultSortOrder;
        if (channel != null) {
          defaultSortOrder = channel.getDefaultSortOrder();
        }
        sortOrder = defaultSortOrder;
      }
      return sortOrder;
    };
    obj.getLayoutAnalytics = function getLayoutAnalytics(id) {
      let layout = obj.layout;
      if (layout == null) {
        const channel = ChannelStore.getChannel(id);
        let defaultLayout;
        if (channel != null) {
          defaultLayout = channel.getDefaultLayout();
        }
        layout = defaultLayout;
      }
      return layout;
    };
    obj.getTagSettingAnalytics = function getTagSettingAnalytics(id) {
      let tagSetting = obj.tagSetting;
      if (tagSetting == null) {
        const channel = ChannelStore.getChannel(id);
        let defaultTagSetting;
        if (channel != null) {
          defaultTagSetting = channel.getDefaultTagSetting();
        }
        tagSetting = defaultTagSetting;
      }
      return tagSetting;
    };
    return obj;
  }.prototype.prototype,
);
const ChannelStore = size;
size.setFilterTagIds = function setFilterTagIds(filterTagIds) {
  obj.filterTagIds = filterTagIds;
};
size.setSortOrder = function setSortOrder(sortOrder) {
  obj.sortOrder = sortOrder;
};
size.setLayout = function setLayout(layout) {
  obj.layout = layout;
};
size.setTagSetting = function setTagSetting(tagSetting) {
  obj.tagSetting = tagSetting;
};
size.getFilterTagIdsAnalytics = function getFilterTagIdsAnalytics() {
  if (null != obj.filterTagIds) {
    const _Array = Array;
    let items = Array.from(tmp.filterTagIds);
  } else {
    items = [];
  }
  return items;
};
size.getSortOrderAnalytics = function getSortOrderAnalytics(id) {
  let sortOrder = obj.sortOrder;
  if (sortOrder == null) {
    const channel = ChannelStore.getChannel(id);
    let defaultSortOrder;
    if (channel != null) {
      defaultSortOrder = channel.getDefaultSortOrder();
    }
    sortOrder = defaultSortOrder;
  }
  return sortOrder;
};
size.getLayoutAnalytics = function getLayoutAnalytics(id) {
  let layout = obj.layout;
  if (layout == null) {
    const channel = ChannelStore.getChannel(id);
    let defaultLayout;
    if (channel != null) {
      defaultLayout = channel.getDefaultLayout();
    }
    layout = defaultLayout;
  }
  return layout;
};
size.getTagSettingAnalytics = function getTagSettingAnalytics(id) {
  let tagSetting = obj.tagSetting;
  if (tagSetting == null) {
    const channel = ChannelStore.getChannel(id);
    let defaultTagSetting;
    if (channel != null) {
      defaultTagSetting = channel.getDefaultTagSetting();
    }
    tagSetting = defaultTagSetting;
  }
  return tagSetting;
};
size = fn(2);
const result = size.fileFinishedImporting("modules/forums/tracking/ForumChannelAnalyticsManager.tsx");

export default size;
