// === Module 7772: setFilterTagIds ===

// Module 7772 (setFilterTagIds)
import set from "ensureGuildLoaded" /* 1957 */;
import set from "set" /* 2 */;

set = Object.create(function ForumChannelAnalyticsManager() {
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
      const channel = obj.getChannel(id);
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
      const channel = obj.getChannel(id);
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
      const channel = obj.getChannel(id);
      let defaultTagSetting;
      if (channel != null) {
        defaultTagSetting = channel.getDefaultTagSetting();
      }
      tagSetting = defaultTagSetting;
    }
    return tagSetting;
  };
  return obj;
}.prototype.prototype);
set.setFilterTagIds = function setFilterTagIds(filterTagIds) {
  obj.filterTagIds = filterTagIds;
};
set.setSortOrder = function setSortOrder(sortOrder) {
  obj.sortOrder = sortOrder;
};
set.setLayout = function setLayout(layout) {
  obj.layout = layout;
};
set.setTagSetting = function setTagSetting(tagSetting) {
  obj.tagSetting = tagSetting;
};
set.getFilterTagIdsAnalytics = function getFilterTagIdsAnalytics() {
  if (null != obj.filterTagIds) {
    const _Array = Array;
    let items = Array.from(tmp.filterTagIds);
  } else {
    items = [];
  }
  return items;
};
set.getSortOrderAnalytics = function getSortOrderAnalytics(id) {
  let sortOrder = obj.sortOrder;
  if (sortOrder == null) {
    const channel = obj.getChannel(id);
    let defaultSortOrder;
    if (channel != null) {
      defaultSortOrder = channel.getDefaultSortOrder();
    }
    sortOrder = defaultSortOrder;
  }
  return sortOrder;
};
set.getLayoutAnalytics = function getLayoutAnalytics(id) {
  let layout = obj.layout;
  if (layout == null) {
    const channel = obj.getChannel(id);
    let defaultLayout;
    if (channel != null) {
      defaultLayout = channel.getDefaultLayout();
    }
    layout = defaultLayout;
  }
  return layout;
};
set.getTagSettingAnalytics = function getTagSettingAnalytics(id) {
  let tagSetting = obj.tagSetting;
  if (tagSetting == null) {
    const channel = obj.getChannel(id);
    let defaultTagSetting;
    if (channel != null) {
      defaultTagSetting = channel.getDefaultTagSetting();
    }
    tagSetting = defaultTagSetting;
  }
  return tagSetting;
};
const result = set.fileFinishedImporting("modules/forums/tracking/ForumChannelAnalyticsManager.tsx");

export default set;