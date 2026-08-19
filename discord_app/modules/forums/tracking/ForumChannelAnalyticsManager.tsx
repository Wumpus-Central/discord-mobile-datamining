// === Module 7519: setFilterTagIds ===

// Module 7519 (setFilterTagIds)
import "ensureGuildLoaded";
import obj132 from "obj132" /* 2 */;

let obj132 = Object.create(function ForumChannelAnalyticsManager() {
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
obj132.setFilterTagIds = function setFilterTagIds(filterTagIds) {
  obj.filterTagIds = filterTagIds;
};
obj132.setSortOrder = function setSortOrder(sortOrder) {
  obj.sortOrder = sortOrder;
};
obj132.setLayout = function setLayout(layout) {
  obj.layout = layout;
};
obj132.setTagSetting = function setTagSetting(tagSetting) {
  obj.tagSetting = tagSetting;
};
obj132.getFilterTagIdsAnalytics = function getFilterTagIdsAnalytics() {
  if (null != obj.filterTagIds) {
    const _Array = Array;
    let items = Array.from(tmp.filterTagIds);
  } else {
    items = [];
  }
  return items;
};
obj132.getSortOrderAnalytics = function getSortOrderAnalytics(id) {
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
obj132.getLayoutAnalytics = function getLayoutAnalytics(id) {
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
obj132.getTagSettingAnalytics = function getTagSettingAnalytics(id) {
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
const result = obj132.fileFinishedImporting("modules/forums/tracking/ForumChannelAnalyticsManager.tsx");

export default obj132;